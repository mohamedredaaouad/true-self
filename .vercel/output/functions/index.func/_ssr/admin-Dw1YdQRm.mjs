import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Logo, g as getOrdersFn, u as updateOrderStatusFn } from "./BrandLogo-CNqxzTcb.mjs";
import "../_libs/seroval.mjs";
import { R as RefreshCw, L as LogOut, b as Clock, a as CircleCheckBig, P as Package, d as Truck } from "../_libs/lucide-react.mjs";
import "./server-4Z6Mawu2.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Admin() {
  const [password, setPassword] = reactExports.useState("");
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  const [filterStatus, setFilterStatus] = reactExports.useState("All");
  const correctPassword = "trueself2026";
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrdersFn();
      const sorted = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setOrders(sorted);
    } catch (err) {
      console.error("Error loading orders:", err);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
      sessionStorage.setItem("ts_admin_auth", "true");
    } else {
      setError("Incorrect password. Please protect your peace.");
    }
  };
  reactExports.useEffect(() => {
    if (sessionStorage.getItem("ts_admin_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("ts_admin_auth");
    setPassword("");
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
    } finally {
      setUpdatingId(null);
    }
  };
  const totalRevenue = orders.reduce((acc, order) => {
    return acc + order.totalPrice;
  }, 0);
  const pendingCount = orders.filter((o) => o.status === "New").length;
  const confirmedCount = orders.filter((o) => o.status === "Confirmed").length;
  const shippedCount = orders.filter((o) => o.status === "Shipped").length;
  const deliveredCount = orders.filter((o) => o.status === "Delivered").length;
  const filteredOrders = filterStatus === "All" ? orders : orders.filter((o) => o.status === filterStatus);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm border border-border/60 bg-secondary/10 p-8 rounded-xs shadow-soft text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { layout: "stacked", symbolSize: 44, textSize: "text-2xl", taglineSize: "text-[8px]", showTagline: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-brand uppercase text-muted-foreground font-mono mt-3", children: "Order Gateway Access" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, placeholder: "Enter Access Passcode", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full bg-background border-b border-border/80 px-2 py-3 text-center text-sm focus:outline-none focus:border-foreground placeholder:text-foreground/30 font-mono" }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-500 font-mono", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full border border-foreground bg-foreground text-background py-3 text-xs tracking-brand uppercase hover:bg-transparent hover:text-foreground transition-all duration-300 font-semibold rounded-xs cursor-pointer font-mono", children: "Authenticate" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: fetchOrders, disabled: loading, className: "border border-border/60 bg-secondary/15 px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: loading ? "animate-spin" : "" }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "border border-border/60 bg-secondary/15 px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300 flex items-center gap-2 rounded-xs cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 12 }),
          "Logout"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-6 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] text-muted-foreground block mb-2 uppercase", children: "TOTAL SALES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xl md:text-2xl font-bold", children: [
          totalRevenue,
          " MAD"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-6 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
          " NEW"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xl md:text-2xl font-bold", children: pendingCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-6 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10 }),
          " CONFIRMED"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xl md:text-2xl font-bold", children: confirmedCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-6 rounded-xs text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 10 }),
          " SHIPPED"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xl md:text-2xl font-bold", children: shippedCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border/60 bg-secondary/10 p-6 rounded-xs text-start col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[8px] text-muted-foreground block mb-2 uppercase flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 10 }),
          " DELIVERED"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xl md:text-2xl font-bold", children: deliveredCount })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1400px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-border/30 font-mono text-xs select-none", children: ["All", "New", "Confirmed", "Shipped", "Delivered"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilterStatus(status), className: `px-4 py-2 border transition-all rounded-xs cursor-pointer whitespace-nowrap ${filterStatus === status ? "bg-foreground text-background border-foreground font-semibold" : "border-border/60 text-muted-foreground hover:border-foreground/60"}`, children: [
        status === "All" ? "All Orders" : status,
        " (",
        status === "All" ? orders.length : orders.filter((o) => o.status === status).length,
        ")"
      ] }, status)) }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-foreground/80", children: order.customerPhone }),
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
    ] })
  ] });
}
export {
  Admin as component
};
