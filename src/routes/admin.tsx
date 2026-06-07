import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getOrdersFn, updateOrderStatusFn, type Order } from "../lib/orders.server";
import { ChevronDown, RefreshCw, LogOut, CheckCircle, Package, Truck, Clock } from "lucide-react";
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
  const [error, setError] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const correctPassword = "trueself2026";

  // Load orders when authenticated
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrdersFn();
      // Sort orders by date descending
      const sorted = (data as Order[]).sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setOrders(sorted);
    } catch (err) {
      console.error("Error loading orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
      // Save auth status for session
      sessionStorage.setItem("ts_admin_auth", "true");
    } else {
      setError("Incorrect password. Please protect your peace.");
    }
  };

  // Restore auth from sessionStorage on mount
  useEffect(() => {
    if (sessionStorage.getItem("ts_admin_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("ts_admin_auth");
    setPassword("");
  };

  const handleStatusChange = async (id: string, newStatus: Order["status"]) => {
    setUpdatingId(id);
    try {
      await updateOrderStatusFn({ data: { id, status: newStatus } });
      await fetchOrders();
    } catch (err) {
      console.error("Error updating order status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Computed metrics
  const totalRevenue = orders.reduce((acc, order) => {
    // Only calculate revenue for non-cancelled/confirmed orders if we wanted, but let's sum all orders for simplicity
    return acc + order.totalPrice;
  }, 0);

  const pendingCount = orders.filter(o => o.status === "New").length;
  const confirmedCount = orders.filter(o => o.status === "Confirmed").length;
  const shippedCount = orders.filter(o => o.status === "Shipped").length;
  const deliveredCount = orders.filter(o => o.status === "Delivered").length;

  const filteredOrders = filterStatus === "All" 
    ? orders 
    : orders.filter(o => o.status === filterStatus);

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
              placeholder="Enter Access Passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border-b border-border/80 px-2 py-3 text-center text-sm focus:outline-none focus:border-foreground placeholder:text-foreground/30 font-mono"
            />
            {error && <p className="text-[10px] text-red-500 font-mono">{error}</p>}
            <button className="w-full border border-foreground bg-foreground text-background py-3 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs cursor-pointer font-mono">
              Authenticate
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
        <div className="flex gap-3 font-mono text-xs">
          <button 
            onClick={fetchOrders}
            disabled={loading}
            className="border border-border/60 bg-secondary/15 px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer"
          >
            <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
          <button 
            onClick={handleLogout}
            className="border border-border/60 bg-secondary/15 px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer"
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
        {/* Filter Controls */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-border/30 font-mono text-xs select-none">
          {["All", "New", "Confirmed", "Shipped", "Delivered"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 border transition-all rounded-xs cursor-pointer whitespace-nowrap ${
                filterStatus === status
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
                        {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-border/30">
                      <h3 className="font-display text-xl leading-none text-foreground/95">{order.customerName}</h3>
                      <p className="font-mono text-xs text-foreground/80">{order.customerPhone}</p>
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
                            className={`px-2.5 py-1.5 border rounded-2xs text-center cursor-pointer transition-colors ${
                              order.status === st
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
