// =============================================
//  SHOPSPHERE — CORE DATA & UTILITIES
// =============================================

// ── PRODUCTS DATA ──
const PRODUCTS = [
  // Electronics
  { id: 1, name: "Wireless Noise-Cancelling Headphones", category: "electronics", price: 45000, oldPrice: 58000, rating: 4.8, reviews: 312, badge: "hot", emoji: "🎧", desc: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality for music lovers and professionals.", tags: ["wireless","audio","premium"] },
  { id: 2, name: "Smart Watch Pro Series 5", category: "electronics", price: 89000, oldPrice: 115000, rating: 4.7, reviews: 187, badge: "sale", emoji: "⌚", desc: "Track your fitness goals, receive notifications, and monitor your health with this sleek smartwatch. Water-resistant with AMOLED display.", tags: ["watch","fitness","smart"] },
  { id: 3, name: "Portable Bluetooth Speaker", category: "electronics", price: 22500, oldPrice: 28000, rating: 4.5, reviews: 456, badge: "new", emoji: "🔊", desc: "360° surround sound, 20-hour playtime, waterproof design. The perfect companion for outdoor adventures and home gatherings.", tags: ["audio","portable","outdoor"] },
  { id: 4, name: "USB-C Hub 7-in-1 Pro", category: "electronics", price: 18000, oldPrice: null, rating: 4.6, reviews: 231, badge: null, emoji: "🖥️", desc: "Expand your laptop's connectivity with HDMI 4K, USB 3.0, SD card slots, and fast charging. Compatible with all USB-C devices.", tags: ["laptop","accessories","hub"] },
  { id: 5, name: "Gaming Mechanical Keyboard", category: "electronics", price: 35000, oldPrice: 42000, rating: 4.9, reviews: 523, badge: "hot", emoji: "⌨️", desc: "RGB backlit mechanical keyboard with tactile switches, anti-ghosting, and durable aluminum frame for competitive gaming.", tags: ["gaming","keyboard","rgb"] },
  { id: 6, name: "4K Webcam with Ring Light", category: "electronics", price: 28000, oldPrice: 34000, rating: 4.4, reviews: 144, badge: null, emoji: "📹", desc: "Crystal-clear 4K video, built-in ring light, and noise-cancelling microphone. Ideal for remote work and content creation.", tags: ["webcam","streaming","work"] },

  // Fashion
  { id: 7, name: "Premium Leather Crossbody Bag", category: "fashion", price: 32000, oldPrice: 40000, rating: 4.8, reviews: 389, badge: "sale", emoji: "👜", desc: "Handcrafted genuine leather crossbody bag with multiple compartments, adjustable strap, and gold-finish hardware. Timeless elegance.", tags: ["bag","leather","premium"] },
  { id: 8, name: "Classic Aviator Sunglasses", category: "fashion", price: 15000, oldPrice: null, rating: 4.5, reviews: 267, badge: "new", emoji: "🕶️", desc: "Polarized UV400 protection, lightweight titanium frame, and scratch-resistant lenses. A wardrobe essential for every season.", tags: ["sunglasses","accessories","uv"] },
  { id: 9, name: "Men's Slim-Fit Chinos", category: "fashion", price: 12500, oldPrice: 16000, rating: 4.3, reviews: 198, badge: null, emoji: "👖", desc: "Stretch cotton chinos with a tailored slim fit. Versatile enough for the office or a casual evening out. Available in 6 colors.", tags: ["pants","men","casual"] },
  { id: 10, name: "Ladies Floral Wrap Dress", category: "fashion", price: 19000, oldPrice: 24000, rating: 4.7, reviews: 342, badge: "hot", emoji: "👗", desc: "Flowy chiffon wrap dress with a stunning floral print. Flattering for all body types with adjustable tie waist.", tags: ["dress","women","floral"] },

  // Home & Living
  { id: 11, name: "Aromatherapy Diffuser Set", category: "home", price: 14500, oldPrice: 18000, rating: 4.6, reviews: 291, badge: "sale", emoji: "🕯️", desc: "Ultrasonic essential oil diffuser with 7 LED color modes, 4 timer settings, and 6 premium essential oil blends included.", tags: ["home","wellness","aromatherapy"] },
  { id: 12, name: "Bamboo Cutting Board Set", category: "home", price: 8500, oldPrice: null, rating: 4.4, reviews: 167, badge: "new", emoji: "🍽️", desc: "Set of 3 eco-friendly bamboo cutting boards with juice grooves. Durable, easy to clean, and naturally antibacterial.", tags: ["kitchen","eco","cooking"] },
  { id: 13, name: "Premium Throw Pillow Set (4pc)", category: "home", price: 21000, oldPrice: 26000, rating: 4.5, reviews: 88, badge: null, emoji: "🛋️", desc: "Luxury velvet throw pillows with hypoallergenic inserts. Available in coordinating colors to complement any living room décor.", tags: ["decor","pillows","luxury"] },
  { id: 14, name: "Stainless Steel Cookware Set", category: "home", price: 78000, oldPrice: 95000, rating: 4.8, reviews: 421, badge: "hot", emoji: "🍳", desc: "10-piece professional-grade stainless steel cookware with tri-ply construction, ergonomic handles, and oven-safe design.", tags: ["kitchen","cooking","professional"] },

  // Beauty
  { id: 15, name: "Vitamin C Brightening Serum", category: "beauty", price: 11500, oldPrice: 14500, rating: 4.7, reviews: 634, badge: "hot", emoji: "✨", desc: "20% Vitamin C formula with hyaluronic acid and niacinamide. Brightens skin, reduces hyperpigmentation, and boosts collagen production.", tags: ["skincare","vitamin","brightening"] },
  { id: 16, name: "Electric Face Massager Roller", category: "beauty", price: 16800, oldPrice: 21000, rating: 4.5, reviews: 277, badge: "sale", emoji: "💆", desc: "Microcurrent face massager with 3 intensity levels, heated therapy option, and ergonomic T-bar design for facial contouring.", tags: ["skincare","massager","beauty"] },
  { id: 17, name: "Luxury Hair Care Gift Set", category: "beauty", price: 24500, oldPrice: 30000, rating: 4.6, reviews: 189, badge: null, emoji: "💇", desc: "Complete hair care collection featuring argan oil shampoo, deep conditioner, hair mask, and heat protection spray.", tags: ["hair","gift","luxury"] },

  // Sports
  { id: 18, name: "Yoga Mat Premium Non-Slip", category: "sports", price: 9500, oldPrice: 13000, rating: 4.7, reviews: 512, badge: "sale", emoji: "🧘", desc: "6mm thick eco-friendly TPE yoga mat with alignment lines, carrying strap, and superior grip. Ideal for yoga, pilates, and stretching.", tags: ["yoga","fitness","exercise"] },
  { id: 19, name: "Adjustable Dumbbell Set 20kg", category: "sports", price: 55000, oldPrice: 68000, rating: 4.9, reviews: 234, badge: "hot", emoji: "🏋️", desc: "Space-saving adjustable dumbbells with quick-dial weight selection. Replaces 15 sets of weights with one compact system.", tags: ["fitness","weights","gym"] },
  { id: 20, name: "Pro Running Shoes", category: "sports", price: 42000, oldPrice: 52000, rating: 4.8, reviews: 678, badge: "new", emoji: "👟", desc: "Lightweight responsive foam midsole, breathable mesh upper, and carbon fibre plate for maximum energy return during runs.", tags: ["shoes","running","performance"] },
  { id: 21, name: "Jump Rope Speed Cable", category: "sports", price: 4500, oldPrice: 6000, rating: 4.6, reviews: 198, badge: "new", emoji: "🪢", desc: "Professional-grade speed jump rope with ball-bearing handles and adjustable steel cable. Perfect for HIIT and boxing training.", tags: ["fitness","cardio","jump rope"] },

  // Food & Groceries
  { id: 22, name: "Organic Raw Honey 500g", category: "food", price: 5500, oldPrice: 7000, rating: 4.9, reviews: 421, badge: "hot", emoji: "🍯", desc: "100% natural raw honey sourced from Nigerian rainforest hives. Unprocessed, unfiltered, and packed with antioxidants and enzymes.", tags: ["honey","organic","natural"] },
  { id: 23, name: "Premium Ground Coffee 250g", category: "food", price: 6800, oldPrice: null, rating: 4.7, reviews: 267, badge: "new", emoji: "☕", desc: "Single-origin Arabica coffee beans, medium-roast ground. Rich aroma, smooth finish — the perfect morning ritual.", tags: ["coffee","breakfast","premium"] },
  { id: 24, name: "Dark Chocolate Gift Box (12pc)", category: "food", price: 8500, oldPrice: 11000, rating: 4.8, reviews: 189, badge: "sale", emoji: "🍫", desc: "Artisan dark chocolate collection with 70% cocoa. Assorted flavours including mint, sea salt, and chilli. Elegant gift packaging.", tags: ["chocolate","gift","premium"] },
  { id: 25, name: "Spice & Seasoning Set (8pc)", category: "food", price: 7200, oldPrice: 9500, rating: 4.6, reviews: 312, badge: null, emoji: "🌶️", desc: "Curated collection of 8 premium Nigerian spices: suya spice, egusi, ogiri, uziza, uda, crayfish, cameroun pepper, and thyme.", tags: ["spices","cooking","nigerian"] },
  { id: 26, name: "Hibiscus (Zobo) Dry Leaves 200g", category: "food", price: 2500, oldPrice: null, rating: 4.8, reviews: 534, badge: "hot", emoji: "🌺", desc: "Sun-dried roselle hibiscus leaves for brewing zobo drink. Rich in vitamins, antioxidants, and natural flavour. No preservatives.", tags: ["zobo","hibiscus","natural","drink"] },

  // Books & Stationery
  { id: 27, name: "The Psychology of Money", category: "books", price: 9000, oldPrice: 12000, rating: 4.9, reviews: 876, badge: "hot", emoji: "📖", desc: "Morgan Housel's timeless guide on how people think about wealth, greed, and happiness. One of the best personal finance books ever written.", tags: ["finance","psychology","bestseller"] },
  { id: 28, name: "A5 Leather Journal Set", category: "books", price: 7500, oldPrice: 10000, rating: 4.7, reviews: 293, badge: "sale", emoji: "📓", desc: "Genuine leather-bound A5 journal with 200 acid-free pages, bookmark ribbon, and pen loop. Includes matching pen and sticky notes.", tags: ["journal","stationery","gift"] },
  { id: 29, name: "Complete WAEC/JAMB Study Pack", category: "books", price: 15000, oldPrice: 20000, rating: 4.8, reviews: 1102, badge: "hot", emoji: "📚", desc: "Comprehensive exam prep bundle covering all WAEC and JAMB subjects with past questions (2010–2024), detailed answers, and test-taking tips.", tags: ["education","exam","students","waec","jamb"] },
  { id: 30, name: "Motivational Desk Planner 2025", category: "books", price: 4800, oldPrice: 6000, rating: 4.5, reviews: 167, badge: "new", emoji: "🗓️", desc: "Undated weekly planner with goal-setting pages, habit trackers, gratitude prompts, and inspirational quotes. Premium matte cover.", tags: ["planner","productivity","stationery"] },
];

const CATEGORIES = [
  { id: "all", name: "All Products", emoji: "🛍️" },
  { id: "electronics", name: "Electronics", emoji: "📱" },
  { id: "fashion", name: "Fashion", emoji: "👔" },
  { id: "home", name: "Home & Living", emoji: "🏠" },
  { id: "beauty", name: "Beauty", emoji: "💄" },
  { id: "sports", name: "Sports", emoji: "⚽" },
  { id: "food", name: "Food & Groceries", emoji: "🛒" },
  { id: "books", name: "Books & Stationery", emoji: "📚" },
];

const DELIVERY_ZONES = [
  { id: "zone-a", name: "Zone A – Abeokuta", fee: 1000, desc: "Ogun State deliveries" },
  { id: "zone-b", name: "Zone B – Lagos", fee: 3000, desc: "Lagos State deliveries" },
  { id: "zone-c", name: "Zone C – South-West", fee: 4500, desc: "Oyo, Osun, Ekiti, Ondo" },
  { id: "zone-d", name: "Zone D – Other States", fee: 6000, desc: "All other Nigerian states" },
];

// ── CART MANAGEMENT ──
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem("ss_cart") || "[]"); } catch { return []; }
  },
  save(items) {
    localStorage.setItem("ss_cart", JSON.stringify(items));
    Cart.updateUI();
  },
  add(productId, qty = 1) {
    const items = Cart.get();
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 20);
    } else {
      items.push({ id: productId, qty });
    }
    Cart.save(items);
    showToast(`${product.name} added to cart 🛒`, "success");
    animateCartIcon();
  },
  remove(productId) {
    const items = Cart.get().filter(i => i.id !== productId);
    Cart.save(items);
  },
  updateQty(productId, qty) {
    const items = Cart.get();
    const item = items.find(i => i.id === productId);
    if (item) {
      if (qty <= 0) { Cart.remove(productId); return; }
      item.qty = Math.min(qty, 20);
      Cart.save(items);
    }
  },
  clear() {
    Cart.save([]);
  },
  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },
  subtotal() {
    return Cart.get().reduce((sum, i) => {
      const p = getAllProducts().find(pr => pr.id === i.id);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  },
  updateUI() {
    const count = Cart.count();
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = count > 99 ? "99+" : count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }
};

// ── WISHLIST ──
const Wishlist = {
  get() { try { return JSON.parse(localStorage.getItem("ss_wishlist") || "[]"); } catch { return []; } },
  toggle(id) {
    const list = Wishlist.get();
    const idx = list.indexOf(id);
    if (idx > -1) { list.splice(idx, 1); } else { list.push(id); }
    localStorage.setItem("ss_wishlist", JSON.stringify(list));
    return idx === -1;
  },
  has(id) { return Wishlist.get().includes(id); }
};

// ── UTILITIES ──
function formatPrice(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "☆";
  return s;
}

function showToast(message, type = "default") {
  const container = document.getElementById("toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icons = { success: "✅", error: "❌", default: "ℹ️" };
  toast.innerHTML = `<span>${icons[type] || icons.default}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function createToastContainer() {
  const el = document.createElement("div");
  el.id = "toast-container";
  el.className = "toast-container";
  document.body.appendChild(el);
  return el;
}

function animateCartIcon() {
  document.querySelectorAll(".cart-count").forEach(el => {
    el.classList.remove("bump");
    void el.offsetWidth;
    el.classList.add("bump");
  });
}

// ── SELLER PRODUCT HELPERS ──
function getSellerProductsAll() {
  try { return JSON.parse(localStorage.getItem("ss_seller_products") || "[]"); } catch { return []; }
}
function getHiddenDefaultIds() {
  try { return new Set(JSON.parse(localStorage.getItem("ss_hidden_defaults") || "[]")); } catch { return new Set(); }
}
function saveHiddenDefaultIds(set) {
  localStorage.setItem("ss_hidden_defaults", JSON.stringify([...set]));
}
// All products (core + seller-added), optionally excluding hidden ones
function getAllProducts(includeHidden = false) {
  const seller = getSellerProductsAll();
  const hiddenDefaults = getHiddenDefaultIds();
  const visibleDefaults = includeHidden
    ? PRODUCTS
    : PRODUCTS.filter(p => !hiddenDefaults.has(p.id));
  const visibleSeller = includeHidden ? seller : seller.filter(p => !p.hidden);
  return [...visibleDefaults, ...visibleSeller];
}
function getVisibleProducts() { return getAllProducts(false); }

function getProductById(id) {
  return getAllProducts(true).find(p => p.id === id);
}

function generateOrderId() {
  return "SS" + Date.now().toString(36).toUpperCase().slice(-6);
}

// ── NAV SETUP ──
function setupNav() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
  }
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
      });
    });
  }
  // active link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // back to top
  const btt = document.getElementById("back-to-top");
  if (btt) {
    window.addEventListener("scroll", () => btt.classList.toggle("show", window.scrollY > 400));
    btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  Cart.updateUI();
}

// ── PRODUCT CARD HTML ──
function productCardHTML(product) {
  const inWishlist = Wishlist.has(product.id);
  const badgeClass = product.badge === 'new' ? 'pbadge-new' : product.badge === 'hot' ? 'pbadge-hot' : 'pbadge-sale';
  const badgeLabel = product.badge === 'sale' ? 'Sale' : product.badge === 'new' ? 'New' : 'Hot\uD83D\uDD25';

  // Use uploaded image if available, otherwise emoji
  const imgHTML = product.image
    ? `<img src="${product.image}" alt="${product.name}" class="product-real-img" loading="lazy" />`
    : `<div class="product-emoji-display">${product.emoji}</div>`;

  return `
    <div class="product-card" data-id="${product.id}" onclick="goToProduct(${product.id})">
      <div class="product-img-wrap">
        ${imgHTML}
        ${product.badge ? `<div class="product-badge-row"><span class="pbadge ${badgeClass}">${badgeLabel}</span></div>` : ""}
        <button class="product-wl-btn${inWishlist ? ' wishlisted' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id}, this)" title="Add to wishlist">
          ${inWishlist ? "\u2764\uFE0F" : "\uD83E\uDD0D"}
        </button>
        <div class="product-quick-add" onclick="event.stopPropagation(); Cart.add(${product.id})">
          <span>\uD83D\uDED2</span> Add to Cart
        </div>
      </div>
      <div class="product-info">
        <p class="product-cat-lbl">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-val">${product.rating}</span>
          <span class="rating-ct">(${product.reviews})</span>
        </div>
        <div class="product-foot">
          <div>
            <div class="price-now">${formatPrice(product.price)}</div>
            ${product.oldPrice ? `<div class="price-was">${formatPrice(product.oldPrice)}</div>` : ""}
          </div>
          <button class="prod-add-btn" onclick="event.stopPropagation(); Cart.add(${product.id})" title="Add to cart" aria-label="Add to cart">+</button>
        </div>
      </div>
    </div>
  `;
}

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function toggleWishlist(id, btn) {
  const added = Wishlist.toggle(id);
  btn.innerHTML = added ? "❤️" : "🤍";
  showToast(added ? "Added to wishlist ❤️" : "Removed from wishlist", added ? "success" : "default");
}

// ── CART SIDEBAR ──
function openCart() {
  document.getElementById("cart-overlay")?.classList.add("open");
  document.getElementById("cart-sidebar")?.classList.add("open");
  renderCartSidebar();
}
function closeCart() {
  document.getElementById("cart-overlay")?.classList.remove("open");
  document.getElementById("cart-sidebar")?.classList.remove("open");
}

function renderCartSidebar() {
  const items = Cart.get();
  const bodyEl = document.getElementById("cart-items-body");
  const footerEl = document.getElementById("cart-footer");
  if (!bodyEl) return;

  if (items.length === 0) {
    bodyEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">\uD83D\uDED2</div>
        <p class="cart-empty-title">Your cart is empty</p>
        <p style="font-size:0.85rem; color:var(--text-muted)">Looks like you haven't added anything yet.</p>
        <button class="btn btn-primary btn-sm" style="margin-top:14px" onclick="closeCart(); window.location.href='shop.html'">Start Shopping</button>
      </div>`;
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (footerEl) footerEl.style.display = "block";
  bodyEl.innerHTML = items.map(item => {
    const p = getProductById(item.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <div class="ci-thumb">${p.emoji}</div>
        <div style="flex:1; min-width:0">
          <p class="ci-name">${p.name}</p>
          <p class="ci-price">${formatPrice(p.price)}</p>
          <div class="ci-qty">
            <button class="cq-btn" onclick="Cart.updateQty(${p.id}, ${item.qty - 1}); renderCartSidebar()">−</button>
            <span class="cq-num">${item.qty}</span>
            <button class="cq-btn" onclick="Cart.updateQty(${p.id}, ${item.qty + 1}); renderCartSidebar()">+</button>
          </div>
        </div>
        <button class="ci-rm" onclick="Cart.remove(${p.id}); renderCartSidebar()" title="Remove">\u2715</button>
      </div>`;
  }).join("");

  const subtotal = Cart.subtotal();
  document.querySelectorAll("#cart-subtotal-val").forEach(el => el.textContent = formatPrice(subtotal));
  document.querySelectorAll("#cart-total-val").forEach(el => el.textContent = formatPrice(subtotal));
  const ct = Cart.count();
  document.querySelectorAll("#cart-ct-label").forEach(el => el.textContent = ct);
}

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  // cart btn
  document.querySelectorAll(".cart-btn, #open-cart-btn").forEach(btn => {
    btn.addEventListener("click", openCart);
  });
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
  document.getElementById("close-cart-btn")?.addEventListener("click", closeCart);
});
