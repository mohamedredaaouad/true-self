import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as checkAdminAuthFn, L as Logo, g as getOrdersFn, b as adminLoginFn, c as adminLogoutFn, u as updateOrderStatusFn } from "./router-CjADwpdV.mjs";
import "../_libs/seroval.mjs";
import { R as RefreshCw, D as Download, L as LogOut, j as TrendingUp, P as Package, c as Clock, b as CircleCheckBig, k as Truck, S as Search, M as MessageSquare, f as Printer, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-DdsG5avk.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
function Admin() {
  const [password, setPassword] = reactExports.useState("");
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [checkingAuth, setCheckingAuth] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  const [filterStatus, setFilterStatus] = reactExports.useState("All");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [printingOrder, setPrintingOrder] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let active = true;
    checkAdminAuthFn().then((res) => {
      if (active) {
        if (res?.authenticated) {
          setIsAuthenticated(true);
        }
        setCheckingAuth(false);
      }
    }).catch((err) => {
      console.error("Session verification failed:", err);
      if (active) {
        setCheckingAuth(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrdersFn();
      const sorted = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setOrders(sorted);
    } catch (err) {
      console.error("Error loading orders:", err);
      if (err?.message?.includes("Unauthorized") || err?.status === 401) {
        setIsAuthenticated(false);
        setError("Session expirée. Veuillez vous reconnecter.");
      }
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await adminLoginFn({
        data: {
          password
        }
      });
      if (res?.success) {
        setIsAuthenticated(true);
        setPassword("");
        setError("");
      } else {
        setError(res?.error || "Mot de passe incorrect.");
      }
    } catch (err) {
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
  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await updateOrderStatusFn({
        data: {
          id,
          status: newStatus
        }
      });
      await fetchOrders();
    } catch (err) {
      console.error("Error updating order status:", err);
      if (err?.message?.includes("Unauthorized") || err?.status === 401) {
        setIsAuthenticated(false);
        setError("Session expirée. Veuillez vous reconnecter.");
      }
    } finally {
      setUpdatingId(null);
    }
  };
  const totalRevenue = orders.reduce((acc, order) => {
    return acc + order.totalPrice;
  }, 0);
  const totalItemsSold = orders.reduce((acc, order) => acc + order.items.reduce((sum, item) => sum + item.quantity, 0), 0);
  const avgOrderValue = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0;
  const pendingCount = orders.filter((o) => o.status === "New").length;
  const confirmedCount = orders.filter((o) => o.status === "Confirmed").length;
  orders.filter((o) => o.status === "Shipped").length;
  const deliveredCount = orders.filter((o) => o.status === "Delivered").length;
  function formatWhatsAppLink(phone, orderId, customerName, city) {
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
    const headers = ["Order ID", "Date", "Customer Name", "Phone", "City", "Address", "Items", "Total Price (MAD)", "Status", "Notes"];
    const rows = filteredOrders.map((o) => [`"${o.id}"`, `"${new Date(o.createdAt).toLocaleString("fr-FR")}"`, `"${(o.customerName || "").replace(/"/g, '""')}"`, `"${(o.customerPhone || "").replace(/"/g, '""')}"`, `"${(o.customerCity || "").replace(/"/g, '""')}"`, `"${(o.customerAddress || "").replace(/"/g, '""')}"`, `"${o.items.map((i) => `${i.name} (Q${i.quantity}, ${i.size})`).join("; ").replace(/"/g, '""')}"`, o.totalPrice, `"${o.status}"`, `"${(o.customerNotes || "").replace(/"/g, '""')}"`]);
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `true_self_orders_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === "All" || order.status === filterStatus;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesStatus;
    const matchesQuery = order.id.toLowerCase().includes(q) || (order.customerName || "").toLowerCase().includes(q) || (order.customerPhone || "").toLowerCase().includes(q) || (order.customerCity || "").toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });
  if (checkingAuth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { layout: "stacked", symbolSize: 44, textSize: "text-2xl", taglineSize: "text-[8px]", showTagline: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono animate-pulse", children: "Vérification de la session..." })
    ] }) });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm border border-border/60 bg-secondary/10 p-8 rounded-xs shadow-soft text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { layout: "stacked", symbolSize: 44, textSize: "text-2xl", taglineSize: "text-[8px]", showTagline: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono mt-3", children: "Order Gateway Access" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, disabled: submitting, placeholder: "Enter Access Passcode", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full bg-background border-b border-border/80 px-2 py-3 text-center text-sm focus:outline-none focus:border-foreground placeholder:text-foreground/30 font-mono disabled:opacity-50" }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-500 font-mono", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: submitting, className: "w-full border border-foreground bg-foreground text-background py-3 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs cursor-pointer font-mono disabled:opacity-50 flex items-center justify-center gap-2", children: [
          submitting && /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: "animate-spin" }),
          submitting ? "Authenticating..." : "Authenticate"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-mono", children: "33.5731° N, 7.5898° W" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground p-6 md:p-12 lg:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/40 pb-8 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] tracking-widest text-muted-foreground uppercase", children: "// INTERNAL ACCESS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl mt-2 leading-none", children: "Order Management" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2.5 font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportToCSV, disabled: orders.length === 0, className: "border border-border/60 bg-secondary/15 px-3.5 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer disabled:opacity-40", title: "Exporter les commandes en fichier CSV (Excel)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 12 }),
          "Export CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: fetchOrders, disabled: loading, className: "border border-border/60 bg-secondary/15 px-3.5 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: loading ? "animate-spin" : "" }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "border border-border/60 bg-secondary/15 px-3.5 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 12 }),
          "Logout"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-5 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] text-muted-foreground block mb-1 uppercase tracking-wider", children: "TOTAL SALES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-lg md:text-xl font-bold", children: [
          totalRevenue,
          " MAD"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-5 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-1 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 10 }),
          " PANIER MOYEN"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-lg md:text-xl font-bold", children: [
          avgOrderValue,
          " MAD"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-5 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-1 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 10 }),
          " ARTICLES VENDUS"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg md:text-xl font-bold", children: totalItemsSold })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-5 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-1 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
          " NOUVELLES"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg md:text-xl font-bold", children: pendingCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-5 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-1 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10 }),
          " CONFIRMÉES"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg md:text-xl font-bold", children: confirmedCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-5 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-1 uppercase tracking-wider flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 10 }),
          " LIVRÉES"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg md:text-xl font-bold", children: deliveredCount })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1400px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-border/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto font-mono text-xs select-none", children: ["All", "New", "Confirmed", "Shipped", "Delivered"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilterStatus(status), className: `px-4 py-2 border transition-all rounded-xs cursor-pointer whitespace-nowrap ${filterStatus === status ? "bg-foreground text-background border-foreground font-semibold" : "border-border/60 text-muted-foreground hover:border-foreground/60"}`, children: [
          status === "All" ? "All Orders" : status,
          " (",
          status === "All" ? orders.length : orders.filter((o) => o.status === status).length,
          ")"
        ] }, status)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-[240px] max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search by ID, name, phone, city...", className: "w-full bg-secondary/10 border border-border/60 rounded-xs pl-9 pr-3 py-2 text-xs font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground" })
        ] })
      ] }),
      filteredOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border border-dashed border-border/60 bg-secondary/5 rounded-xs space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl italic text-muted-foreground", children: "No orders in this state" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 font-mono", children: "The silence is peaceful." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: filteredOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-background rounded-xs shadow-card text-start overflow-hidden flex flex-col xl:flex-row divide-y xl:divide-y-0 xl:divide-x divide-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 xl:w-[320px] space-y-6 flex flex-col justify-between bg-secondary/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-semibold bg-foreground text-background px-2 py-0.5 rounded-2xs", children: [
                "#",
                order.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
                new Date(order.createdAt).toLocaleDateString(),
                " ",
                new Date(order.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-none text-foreground/95", children: order.customerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap pt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-foreground/80 font-medium", children: order.customerPhone }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: formatWhatsAppLink(order.customerPhone, order.id, order.customerName, order.customerCity), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-2xs bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white text-[10px] font-mono transition-all border border-[#25D366]/40 hover:border-[#25D366]", title: "Discuter directement sur WhatsApp avec le client", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 10 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPrintingOrder(order), className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-2xs bg-secondary/30 hover:bg-foreground hover:text-background text-foreground text-[10px] font-mono transition-all border border-border/60 cursor-pointer", title: "Imprimer le bon de livraison pour le transporteur / livreur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 10 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bon Livraison" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: order.customerCity }),
                ", ",
                order.customerAddress
              ] })
            ] }),
            order.customerNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border/40 p-3 rounded-2xs text-[11px] font-mono leading-relaxed text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-semibold uppercase text-[8px] text-foreground/75 mb-1", children: "// NOTE" }),
              order.customerNotes
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4 border-t border-border/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] text-muted-foreground uppercase block", children: "// ORDER STATUS" }),
            updatingId === order.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center p-2 font-mono text-xs text-muted-foreground gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: "animate-spin" }),
              " Updating..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5 font-mono text-[9px]", children: ["New", "Confirmed", "Shipped", "Delivered"].map((st) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: order.status === st, onClick: () => handleStatusChange(order.id, st), className: `px-2.5 py-1.5 border rounded-2xs text-center cursor-pointer transition-colors ${order.status === st ? "bg-foreground text-background border-foreground font-bold" : "border-border/60 text-foreground hover:bg-secondary/20"}`, children: st }, st)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 md:p-8 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] text-muted-foreground uppercase block", children: "// ITEMS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/30", children: order.items.map((item, itemIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs border border-border/60 bg-secondary/15 px-2 py-0.5 text-foreground/80", children: [
                  "Q",
                  item.quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg leading-tight text-foreground/95", children: item.quote }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-muted-foreground uppercase", children: [
                    item.name.split(" ")[item.name.split(" ").length - 1],
                    " // SIZE: ",
                    item.size,
                    " · COLOR: ",
                    item.color
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-foreground/80 whitespace-nowrap", children: [
                item.price * item.quantity,
                " MAD"
              ] })
            ] }, itemIdx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-6 mt-6 flex justify-between items-center font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Total Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-foreground", children: [
              order.totalPrice,
              " MAD"
            ] })
          ] })
        ] })
      ] }, order.id)) })
    ] }),
    printingOrder && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white text-zinc-950 w-full max-w-2xl rounded-lg shadow-2xl p-6 sm:p-8 my-8 print:p-0 print:m-0 print:shadow-none print:w-full print:max-w-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 mb-4 border-b border-zinc-200 print:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-5 h-5 text-zinc-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-wider font-semibold text-zinc-800", children: "Bordereau d'Expédition / Bon de Livraison" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.print(), className: "px-4 py-1.5 bg-black text-white hover:bg-zinc-800 font-mono text-xs uppercase tracking-widest rounded transition-colors inline-flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Imprimer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPrintingOrder(null), className: "p-1.5 hover:bg-zinc-100 rounded text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer", title: "Fermer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-zinc-900 font-sans print:text-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start border-b border-zinc-300 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black tracking-tight font-serif uppercase", children: "TRUE SELF®" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-600 font-mono", children: "Luxury Streetwear Casablanca — Maroc" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-zinc-600 font-mono", children: "Service Client: +212 6 52 61 70 44" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block px-2.5 py-1 bg-zinc-950 text-white font-mono text-xs font-bold rounded", children: [
              "BON #",
              printingOrder.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-zinc-600 font-mono mt-1", children: [
              "Date: ",
              new Date(printingOrder.createdAt).toLocaleDateString("fr-MA"),
              " ",
              new Date(printingOrder.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-emerald-700 font-mono mt-0.5", children: "Mode: Paiement à la livraison (COD)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-zinc-200 rounded p-3 bg-zinc-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1", children: "EXPÉDITEUR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "TRUE SELF STUDIOS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-600", children: "Casablanca, Maroc" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-600", children: "contact@trueself.ma" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-600", children: "Tél: +212 6 52 61 70 44" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-zinc-900 rounded p-3 bg-amber-50/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-zinc-900 font-bold block mb-1", children: "DESTINATAIRE (CLIENT)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-zinc-950", children: printingOrder.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-zinc-900", children: [
              "Tél: ",
              printingOrder.customerPhone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-700 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold uppercase text-zinc-950", children: printingOrder.customerCity }),
              " — ",
              printingOrder.customerAddress
            ] }),
            printingOrder.customerNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-zinc-200 text-[10px] text-zinc-600 italic", children: [
              'Note client: "',
              printingOrder.customerNotes,
              '"'
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-zinc-200 rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-zinc-100 font-mono text-[10px] uppercase text-zinc-700 border-b border-zinc-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3 text-left", children: "Article" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2 text-center", children: "Taille" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2 text-center", children: "Couleur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-2 text-center", children: "Qté" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3 text-right", children: "Prix Unitaire" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3 text-right", children: "Total" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-zinc-200 font-mono", children: printingOrder.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-zinc-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 font-sans font-medium text-zinc-900", children: [
              item.name,
              item.quote && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] text-zinc-500 italic font-normal", children: [
                '"',
                item.quote,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center font-bold", children: item.size }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-zinc-600", children: item.color }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center font-bold", children: item.quantity }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 text-right text-zinc-600", children: [
              item.price,
              " MAD"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-3 text-right font-bold text-zinc-950", children: [
              item.price * item.quantity,
              " MAD"
            ] })
          ] }, idx)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-950 text-white rounded p-4 flex justify-between items-center print:border print:border-black print:text-black print:bg-zinc-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest text-zinc-300 print:text-zinc-700 block", children: "MONTANT TOTAL À ENCAISSER (COD)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-zinc-400 print:text-zinc-600", children: "Paiement en espèces à la réception du colis" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-2xl font-black text-white print:text-black", children: [
            printingOrder.totalPrice,
            " MAD"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8 pt-4 border-t border-dashed border-zinc-300 text-center font-mono text-[10px] text-zinc-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-zinc-200 rounded p-3 h-20 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visa & Signature Livreur / Agence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-zinc-300 w-3/4 mx-auto" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-zinc-200 rounded p-3 h-20 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Signature & Date Réception Client" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-zinc-300 w-3/4 mx-auto" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-mono text-[9px] text-zinc-400 pt-2", children: "Document généré automatiquement via TRUE SELF® Back-Office — Merci pour votre confiance." })
      ] })
    ] }) })
  ] });
}
export {
  Admin as component
};
