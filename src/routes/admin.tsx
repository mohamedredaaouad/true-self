import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  adminLoginFn,
  adminLogoutFn,
  checkAdminAuthFn,
  getOrdersFn,
  updateOrderStatusFn,
  type Order,
} from "../lib/orders.server";
import { RefreshCw, LogOut, CheckCircle, Package, Truck, Clock, Search, Download, MessageSquare } from "lucide-react";
import { Logo } from "../components/BrandLogo";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "TRUE SELF® — Admin Dashboard" },
      { name: "description", content: "TRUE SELF internal order management system." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Check server session on mount
  useEffect(() => {
    let active = true;
    checkAdminAuthFn()
      .then((res) => {
        if (active) {
          if (res?.authenticated) {
            setIsAuthenticated(true);
          }
          setCheckingAuth(false);
        }
      })
      .catch((err) => {
        console.error("Session verification failed:", err);
        if (active) {
          setCheckingAuth(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  // Load orders when authenticated
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrdersFn();
      // Sort orders by date descending
      const sorted = (data as Order[]).sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setOrders(sorted);
    } catch (err: any) {
      console.error("Error loading orders:", err);
      // If server returned 401 Unauthorized, revoke local access state
      if (err?.message?.includes("Unauthorized") || err?.status === 401) {
        setIsAuthenticated(false);
        setError("Session expirée. Veuillez vous reconnecter.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    setError("");
    setSubmitting(true);

    try {
      const res = await adminLoginFn({ data: { password } });
      if (res?.success) {
        setIsAuthenticated(true);
        setPassword("");
        setError("");
      } else {
        setError(res?.error || "Mot de passe incorrect.");
      }
    } catch (err: any) {
      setError(err?.message || "Erreur de communication avec le serveur.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await adminLogoutFn();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setIsAuthenticated(false);
      setPassword("");
      setOrders([]);
    }
  };

  const handleStatusChange = async (id: string, newStatus: Order["status"]) => {
    setUpdatingId(id);
    try {
      await updateOrderStatusFn({ data: { id, status: newStatus } });
      await fetchOrders();
    } catch (err: any) {
      console.error("Error updating order status:", err);
      if (err?.message?.includes("Unauthorized") || err?.status === 401) {
        setIsAuthenticated(false);
        setError("Session expirée. Veuillez vous reconnecter.");
      }
    } finally {
      setUpdatingId(null);
    }
  };

  // Computed metrics
  const totalRevenue = orders.reduce((acc, order) => {
    return acc + order.totalPrice;
  }, 0);

  const pendingCount = orders.filter((o) => o.status === "New").length;
  const confirmedCount = orders.filter((o) => o.status === "Confirmed").length;
  const shippedCount = orders.filter((o) => o.status === "Shipped").length;
  const deliveredCount = orders.filter((o) => o.status === "Delivered").length;

  function formatWhatsAppLink(phone: string, orderId: string, customerName: string, city: string) {
    let clean = (phone || "").replace(/[^0-9]/g, "");
    if (clean.startsWith("0")) {
      clean = "212" + clean.slice(1);
    } else if (!clean.startsWith("212") && clean.length === 9) {
      clean = "212" + clean;
    }
    const message = `Bonjour ${customerName || ""}, nous vous contactons de la part de TRUE SELF® concernant votre commande #${orderId}. Votre adresse à ${city || ""} est bien confirmée pour la livraison ?`;
    return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
  }

  const exportToCSV = () => {
    if (orders.length === 0) return;
    const headers = [
      "Order ID",
      "Date",
      "Customer Name",
      "Phone",
      "City",
      "Address",
      "Items",
      "Total Price (MAD)",
      "Status",
      "Notes",
    ];
    const rows = filteredOrders.map((o) => [
      `"${o.id}"`,
      `"${new Date(o.createdAt).toLocaleString("fr-FR")}"`,
      `"${(o.customerName || "").replace(/"/g, '""')}"`,
      `"${(o.customerPhone || "").replace(/"/g, '""')}"`,
      `"${(o.customerCity || "").replace(/"/g, '""')}"`,
      `"${(o.customerAddress || "").replace(/"/g, '""')}"`,
      `"${o.items.map((i) => `${i.name} (Q${i.quantity}, ${i.size})`).join("; ").replace(/"/g, '""')}"`,
      o.totalPrice,
      `"${o.status}"`,
      `"${(o.customerNotes || "").replace(/"/g, '""')}"`,
    ]);
    const csvContent =
      "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `true_self_orders_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === "All" || order.status === filterStatus;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesStatus;
    const matchesQuery =
      order.id.toLowerCase().includes(q) ||
      (order.customerName || "").toLowerCase().includes(q) ||
      (order.customerPhone || "").toLowerCase().includes(q) ||
      (order.customerCity || "").toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-4">
          <Logo layout="stacked" symbolSize={44} textSize="text-2xl" taglineSize="text-[8px]" showTagline={false} />
          <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono animate-pulse">
            Vérification de la session...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm border border-border/60 bg-secondary/10 p-8 rounded-xs shadow-soft text-center space-y-6">
          <div className="flex flex-col items-center">
            <Logo layout="stacked" symbolSize={44} textSize="text-2xl" taglineSize="text-[8px]" showTagline={false} />
            <p className="text-[10px] tracking-brand uppercase text-muted-foreground font-mono mt-3">
              Order Gateway Access
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              required
              disabled={submitting}
              placeholder="Enter Access Passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border-b border-border/80 px-2 py-3 text-center text-sm focus:outline-none focus:border-foreground placeholder:text-foreground/30 font-mono disabled:opacity-50"
            />
            {error && <p className="text-[10px] text-red-500 font-mono">{error}</p>}
            <button
              disabled={submitting}
              className="w-full border border-foreground bg-foreground text-background py-3 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs cursor-pointer font-mono disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitting && <RefreshCw size={12} className="animate-spin" />}
              {submitting ? "Authenticating..." : "Authenticate"}
            </button>
          </form>
          <div className="text-[9px] text-muted-foreground font-mono">
            33.5731° N, 7.5898° W
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 lg:p-16">
      {/* Header Panel */}
      <header className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/40 pb-8 mb-12">
        <div className="text-start">
          <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">// INTERNAL ACCESS</span>
          <h1 className="font-display text-4xl lg:text-5xl mt-2 leading-none">Order Management</h1>
        </div>
        <div className="flex flex-wrap gap-2.5 font-mono text-xs">
          <button
            onClick={exportToCSV}
            disabled={orders.length === 0}
            className="border border-border/60 bg-secondary/15 px-3.5 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer disabled:opacity-40"
            title="Exporter les commandes en fichier CSV (Excel)"
          >
            <Download size={12} />
            Export CSV
          </button>
          <button
            onClick={fetchOrders}
            disabled={loading}
            className="border border-border/60 bg-secondary/15 px-3.5 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer"
          >
            <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="border border-border/60 bg-secondary/15 px-3.5 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer"
          >
            <LogOut size={12} />
            Logout
          </button>
        </div>
      </header>

      {/* Metrics Row (Mobile optimized card stacks) */}
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        <div className="border border-border/60 bg-secondary/10 p-6 rounded-xs text-start">
          <span className="font-mono text-[8px] text-muted-foreground block mb-2 uppercase">TOTAL SALES</span>
          <span className="font-mono text-xl md:text-2xl font-bold">{totalRevenue} MAD</span>
        </div>
        <div className="border border-border/60 bg-secondary/10 p-6 rounded-xs text-start">
          <span className="font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1"><Clock size={10} /> NEW</span>
          <span className="font-mono text-xl md:text-2xl font-bold">{pendingCount}</span>
        </div>
        <div className="border border-border/60 bg-secondary/10 p-6 rounded-xs text-start">
          <span className="font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1"><CheckCircle size={10} /> CONFIRMED</span>
          <span className="font-mono text-xl md:text-2xl font-bold">{confirmedCount}</span>
        </div>
        <div className="border border-border/60 bg-secondary/10 p-6 rounded-xs text-start">
          <span className="font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1"><Package size={10} /> SHIPPED</span>
          <span className="font-mono text-xl md:text-2xl font-bold">{shippedCount}</span>
        </div>
        <div className="border border-border/60 bg-secondary/10 p-6 rounded-xs text-start col-span-2 lg:col-span-1">
          <span className="font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1"><Truck size={10} /> DELIVERED</span>
          <span className="font-mono text-xl md:text-2xl font-bold">{deliveredCount}</span>
        </div>
      </div>

      {/* Filter and Content Panel */}
      <main className="mx-auto max-w-[1400px]">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-border/30">
          <div className="flex gap-2 overflow-x-auto font-mono text-xs select-none">
            {["All", "New", "Confirmed", "Shipped", "Delivered"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 border transition-all rounded-xs cursor-pointer whitespace-nowrap ${filterStatus === status
                    ? "bg-foreground text-background border-foreground font-semibold"
                    : "border-border/60 text-muted-foreground hover:border-foreground/60"
                  }`}
              >
                {status === "All" ? "All Orders" : status} ({
                  status === "All" ? orders.length : orders.filter(o => o.status === status).length
                })
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px] max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ID, name, phone, city..."
              className="w-full bg-secondary/10 border border-border/60 rounded-xs pl-9 pr-3 py-2 text-xs font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground"
            />
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border/60 bg-secondary/5 rounded-xs space-y-2">
            <span className="font-display text-2xl italic text-muted-foreground">No orders in this state</span>
            <p className="text-xs text-muted-foreground/60 font-mono">The silence is peaceful.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="border border-border/60 bg-background rounded-xs shadow-card text-start overflow-hidden flex flex-col xl:flex-row divide-y xl:divide-y-0 xl:divide-x divide-border/40"
              >

                {/* Meta details (Customer info) */}
                <div className="p-6 md:p-8 xl:w-[320px] space-y-6 flex flex-col justify-between bg-secondary/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold bg-foreground text-background px-2 py-0.5 rounded-2xs">
                        #{order.id}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-border/30">
                      <h3 className="font-display text-xl leading-none text-foreground/95">{order.customerName}</h3>
                      <div className="flex items-center gap-2 flex-wrap pt-0.5">
                        <span className="font-mono text-xs text-foreground/80 font-medium">{order.customerPhone}</span>
                        <a
                          href={formatWhatsAppLink(order.customerPhone, order.id, order.customerName, order.customerCity)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-2xs bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white text-[10px] font-mono transition-all border border-[#25D366]/40 hover:border-[#25D366]"
                          title="Discuter directement sur WhatsApp avec le client"
                        >
                          <MessageSquare size={10} />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                        <span className="font-semibold">{order.customerCity}</span>, {order.customerAddress}
                      </p>
                    </div>

                    {order.customerNotes && (
                      <div className="bg-background border border-border/40 p-3 rounded-2xs text-[11px] font-mono leading-relaxed text-muted-foreground">
                        <span className="block font-semibold uppercase text-[8px] text-foreground/75 mb-1">// NOTE</span>
                        {order.customerNotes}
                      </div>
                    )}
                  </div>

                  {/* Status update controls */}
                  <div className="space-y-2 pt-4 border-t border-border/30">
                    <span className="font-mono text-[8px] text-muted-foreground uppercase block">// ORDER STATUS</span>

                    {updatingId === order.id ? (
                      <div className="flex items-center justify-center p-2 font-mono text-xs text-muted-foreground gap-2">
                        <RefreshCw size={12} className="animate-spin" /> Updating...
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-1.5 font-mono text-[9px]">
                        {(["New", "Confirmed", "Shipped", "Delivered"] as const).map((st) => (
                          <button
                            key={st}
                            disabled={order.status === st}
                            onClick={() => handleStatusChange(order.id, st)}
                            className={`px-2.5 py-1.5 border rounded-2xs text-center cursor-pointer transition-colors ${order.status === st
                                ? "bg-foreground text-background border-foreground font-bold"
                                : "border-border/60 text-foreground hover:bg-secondary/20"
                              }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Products detail and final price */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  {/* Products list */}
                  <div className="space-y-4">
                    <span className="font-mono text-[8px] text-muted-foreground uppercase block">// ITEMS</span>
                    <ul className="divide-y divide-border/30">
                      {order.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs border border-border/60 bg-secondary/15 px-2 py-0.5 text-foreground/80">
                              Q{item.quantity}
                            </span>
                            <div>
                              <p className="font-display text-lg leading-tight text-foreground/95">{item.quote}</p>
                              <span className="font-mono text-[9px] text-muted-foreground uppercase">
                                {item.name.split(" ")[item.name.split(" ").length - 1]} // SIZE: {item.size} · COLOR: {item.color}
                              </span>
                            </div>
                          </div>
                          <span className="font-mono text-xs text-foreground/80 whitespace-nowrap">
                            {item.price * item.quantity} MAD
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Summary Total */}
                  <div className="border-t border-border/40 pt-6 mt-6 flex justify-between items-center font-mono">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Total Price</span>
                    <span className="text-lg font-bold text-foreground">{order.totalPrice} MAD</span>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
