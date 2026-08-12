/**
 * Luxora Global Group - B2B Commercial Catalog Data & Rendering Engine
 * Contains 25 verified inventory products organized by category.
 */

const productsData = [
    // BEAUTY & PERSONAL CARE
    {
        id: "SKU-BEAU-001",
        codigo: "SKU-BEAU-001",
        nombre: "Ionic Ceramic Hair Dryer 1875W",
        categoria: "beauty",
        categoriaNombre: "Beauty & Personal Care",
        descripcion: "Professional 1875-watt hair dryer with dual ceramic technology for ionic conditioning, frizz reduction, and fast uniform drying.",
        asin: "B07B8X8GKB",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/beauty/SKU-BEAU-001.jpg"
    },
    {
        id: "SKU-BEAU-002",
        codigo: "SKU-BEAU-002",
        nombre: "Precision Multi-Grooming Trimmer 13 Pieces",
        categoria: "beauty",
        categoriaNombre: "Beauty & Personal Care",
        descripcion: "Multifunctional beard and body trimmer with 13 self-sharpening washable steel attachments and long-lasting lithium battery.",
        asin: "B07145GM4B",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/beauty/SKU-BEAU-002.jpg"
    },
    {
        id: "SKU-BEAU-003",
        codigo: "SKU-BEAU-003",
        nombre: "Ceramic Flat Iron Hair Straightener 1-Inch Anti-Frizz",
        categoria: "beauty",
        categoriaNombre: "Beauty & Personal Care",
        descripcion: "1-inch ceramic flat iron hair straightener infused with micro-conditioners for smooth gliding and humidity protection.",
        asin: "B003V265Q6",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/beauty/SKU-BEAU-003.jpg"
    },
    {
        id: "SKU-BEAU-004",
        codigo: "SKU-BEAU-004",
        nombre: "Oval 360° Hot Air Styler & Volumizer Brush",
        categoria: "beauty",
        categoriaNombre: "Beauty & Personal Care",
        descripcion: "Oval hot air brush for instant drying and volumizing with 360-degree airflow and negative ion technology.",
        asin: "B01LSUQSB0",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/beauty/SKU-BEAU-004.jpg"
    },
    {
        id: "SKU-BEAU-005",
        codigo: "SKU-BEAU-005",
        nombre: "Professional High-Pressure Dental Water Flosser",
        categoria: "beauty",
        categoriaNombre: "Beauty & Personal Care",
        descripcion: "Advanced oral irrigator with 10 pressure settings, handle water control, and hydrotherapy massage pulses for gums.",
        asin: "B00HFQQ0VU",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/beauty/SKU-BEAU-005.jpg"
    },

    // TOYS & GAMES
    {
        id: "SKU-TOYS-001",
        codigo: "SKU-TOYS-001",
        nombre: "3-Story Dollhouse with 75+ Accessories",
        categoria: "toys",
        categoriaNombre: "Toys & Games",
        descripcion: "Interactive 3-story dollhouse featuring working elevator, pool slide, lights, sounds, and over 75 detailed accessories.",
        asin: "B08HGGBWKV",
        condition: "New / Factory Sealed",
        packaging: "Master Distribution Box",
        imagen: "assets/products/toys/SKU-TOYS-001.jpg"
    },
    {
        id: "SKU-TOYS-002",
        codigo: "SKU-TOYS-002",
        nombre: "Educational Interactive Plush Learning Toy",
        categoria: "toys",
        categoriaNombre: "Toys & Games",
        descripcion: "Educational interactive plush toy for toddlers with Smart Stages technology, lights, and over 75 songs and phrases.",
        asin: "B0716KCVN6",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/toys/SKU-TOYS-002.jpg"
    },
    {
        id: "SKU-TOYS-003",
        codigo: "SKU-TOYS-003",
        nombre: "20-Pack 1:64 Scale Die-Cast Metal Toy Vehicles",
        categoria: "toys",
        categoriaNombre: "Toys & Games",
        descripcion: "Set of 20 1:64 scale die-cast metal vehicles with detailed designs and authentic collectible decorations.",
        asin: "B00078BH42",
        condition: "New / Factory Sealed",
        packaging: "Factory Gift Box",
        imagen: "assets/products/toys/SKU-TOYS-003.jpg"
    },
    {
        id: "SKU-TOYS-004",
        codigo: "SKU-TOYS-004",
        nombre: "Creative Building Bricks Set 484 Pieces",
        categoria: "toys",
        categoriaNombre: "Toys & Games",
        descripcion: "Building brick set with 484 pieces in 35 different colors, wheels, tires, and baseplate to foster learning and creativity.",
        asin: "B00NHQF65S",
        condition: "New / Factory Sealed",
        packaging: "Distribution Box",
        imagen: "assets/products/toys/SKU-TOYS-004.jpg"
    },
    {
        id: "SKU-TOYS-005",
        codigo: "SKU-TOYS-005",
        nombre: "100-Piece Solid Wood Geometric Building Blocks",
        categoria: "toys",
        categoriaNombre: "Toys & Games",
        descripcion: "Set of 100 solid wood building blocks in 4 colors and 9 geometric shapes designed for early childhood motor skills.",
        asin: "B0000683CK",
        condition: "New / Factory Sealed",
        packaging: "Commercial Distribution Box",
        imagen: "assets/products/toys/SKU-TOYS-005.jpg"
    },

    // PET SUPPLIES
    {
        id: "SKU-PETS-001",
        codigo: "SKU-PETS-001",
        nombre: "Ergonomic Orthopedic Memory Foam Medium Dog Bed",
        categoria: "pets",
        categoriaNombre: "Pet Supplies",
        descripcion: "Orthopedic canine bed with egg-crate high-density foam, removable waterproof flannel cover, and non-skid bottom.",
        asin: "B07P7B4H4M",
        condition: "New / Factory Sealed",
        packaging: "Factory Vacuum Pack",
        imagen: "assets/products/pets/SKU-PETS-001.jpg"
    },
    {
        id: "SKU-PETS-002",
        codigo: "SKU-PETS-002",
        nombre: "Reusable Pet Hair & Lint Remover Roller",
        categoria: "pets",
        categoriaNombre: "Pet Supplies",
        descripcion: "Reusable lint and pet hair remover roller for sofas, carpets, bedding, and clothes without adhesive tapes.",
        asin: "B00BAGT4VO",
        condition: "New / Factory Sealed",
        packaging: "Commercial Blister",
        imagen: "assets/products/pets/SKU-PETS-002.jpg"
    },
    {
        id: "SKU-PETS-003",
        codigo: "SKU-PETS-003",
        nombre: "Ultra-Durable Natural Rubber Dog Chew Toy",
        categoria: "pets",
        categoriaNombre: "Pet Supplies",
        descripcion: "Ultra-durable red natural rubber chew toy for dogs, designed for treat stuffing and mental stimulation.",
        asin: "B0002AR0I8",
        condition: "New / Factory Sealed",
        packaging: "Original Tag Distribution",
        imagen: "assets/products/pets/SKU-PETS-003.jpg"
    },
    {
        id: "SKU-PETS-004",
        codigo: "SKU-PETS-004",
        nombre: "Interactive Plush Puzzle Squeaky Toy",
        categoria: "pets",
        categoriaNombre: "Pet Supplies",
        descripcion: "Stimulating plush puzzle toy featuring soft tree trunk and squeaky figures for canine cognitive development.",
        asin: "B0002I07UY",
        condition: "New / Factory Sealed",
        packaging: "Distribution Pack",
        imagen: "assets/products/pets/SKU-PETS-004.jpg"
    },
    {
        id: "SKU-PETS-005",
        codigo: "SKU-PETS-005",
        nombre: "Automatic Self-Cleaning Feline Litter Box",
        categoria: "pets",
        categoriaNombre: "Pet Supplies",
        descripcion: "Automatic self-cleaning cat litter box with odor-neutralizing crystal litter and leak-proof disposable trays.",
        asin: "B000XSC8R2",
        condition: "New / Factory Sealed",
        packaging: "Factory Master Box",
        imagen: "assets/products/pets/SKU-PETS-005.jpg"
    },

    // HOME & LIFESTYLE
    {
        id: "SKU-HOME-001",
        codigo: "SKU-HOME-001",
        nombre: "7-in-1 Multi-Use Electric Pressure Cooker 6Qt",
        categoria: "home",
        categoriaNombre: "Home & Lifestyle",
        descripcion: "6-quart multifunctional electric pressure cooker with 14 smart programmable presets and stainless steel inner pot.",
        asin: "B00FLYWNYQ",
        condition: "New / Factory Sealed",
        packaging: "Factory Commercial Box",
        imagen: "assets/products/home/SKU-HOME-001.jpg"
    },
    {
        id: "SKU-HOME-002",
        codigo: "SKU-HOME-002",
        nombre: "Compact Single-Serve Pod Coffee Maker",
        categoria: "home",
        categoriaNombre: "Home & Lifestyle",
        descripcion: "Ultra-compact single-serve coffee maker under 5 inches wide, compatible with universal pod capsules with fast brew technology.",
        asin: "B07DFZ7G4V",
        condition: "New / Factory Sealed",
        packaging: "Original Commercial Box",
        imagen: "assets/products/home/SKU-HOME-002.jpg"
    },
    {
        id: "SKU-HOME-003",
        codigo: "SKU-HOME-003",
        nombre: "Digital 4-Quart Hot Air Fryer Appliance",
        categoria: "home",
        categoriaNombre: "Home & Lifestyle",
        descripcion: "4-quart hot air fryer appliance with 105°F to 400°F temperature range, non-stick basket, and dehydrate functions.",
        asin: "B07FDJMC9Q",
        condition: "New / Factory Sealed",
        packaging: "Original Commercial Box",
        imagen: "assets/products/home/SKU-HOME-003.jpg"
    },
    {
        id: "SKU-HOME-004",
        codigo: "SKU-HOME-004",
        nombre: "Upright Cyclonic Vacuum Cleaner with HEPA Filter",
        categoria: "home",
        categoriaNombre: "Home & Lifestyle",
        descripcion: "Bagless upright vacuum cleaner with detachable lift-away canister, anti-allergen complete seal, and washable HEPA filter.",
        asin: "B00450U7V8",
        condition: "New / Factory Sealed",
        packaging: "Master Distribution Box",
        imagen: "assets/products/home/SKU-HOME-004.jpg"
    },
    {
        id: "SKU-HOME-005",
        codigo: "SKU-HOME-005",
        nombre: "4-Piece Queen Brushed Microfiber Bed Sheet Set",
        categoria: "home",
        categoriaNombre: "Home & Lifestyle",
        descripcion: "4-piece Queen bed sheet set crafted from soft brushed microfiber, wrinkle-resistant and fade-resistant.",
        asin: "B00NLLUPUI",
        condition: "New / Factory Sealed",
        packaging: "Factory Zippered PVC Bag",
        imagen: "assets/products/home/SKU-HOME-005.jpg"
    },

    // OUTDOORS & TOOLS
    {
        id: "SKU-OUTD-001",
        codigo: "SKU-OUTD-001",
        nombre: "20V MAX Cordless Power Drill Kit with 30 Accessories",
        categoria: "outdoor",
        categoriaNombre: "Outdoors & Tools",
        descripcion: "20V cordless hammer drill with lithium-ion battery, 11-position clutch, and 30-piece drilling accessory kit.",
        asin: "B006V6YAPI",
        condition: "New / Factory Sealed",
        packaging: "Carrying Case & Box",
        imagen: "assets/products/outdoor/SKU-OUTD-001.jpg"
    },
    {
        id: "SKU-OUTD-002",
        codigo: "SKU-OUTD-002",
        nombre: "Waterproof 4-Person Dome Camping Tent",
        categoria: "outdoor",
        categoriaNombre: "Outdoors & Tools",
        descripcion: "4-person dome camping tent with WeatherTec water-resistant system, ground ventilation, and 10-minute easy setup.",
        asin: "B004J2GUVT",
        condition: "New / Factory Sealed",
        packaging: "Original Carry Bag",
        imagen: "assets/products/outdoor/SKU-OUTD-002.jpg"
    },
    {
        id: "SKU-OUTD-003",
        codigo: "SKU-OUTD-003",
        nombre: "Pro 20V Cordless Drill/Driver Kit",
        categoria: "outdoor",
        categoriaNombre: "Outdoors & Tools",
        descripcion: "Professional 20V drill driver kit featuring high-performance 300 UWO motor, 2 lithium batteries, and fast charger.",
        asin: "B00E1WA562",
        condition: "New / Factory Sealed",
        packaging: "Heavy-Duty Fabric Case",
        imagen: "assets/products/outdoor/SKU-OUTD-003.jpg"
    },
    {
        id: "SKU-OUTD-004",
        codigo: "SKU-OUTD-004",
        nombre: "65-Piece Homeowner Hand Tool Kit in Hard Case",
        categoria: "outdoor",
        categoriaNombre: "Outdoors & Tools",
        descripcion: "Complete 65-piece hand tool set forged in chrome vanadium steel with anti-corrosion finish in molded hard case.",
        asin: "B000UHMITE",
        condition: "New / Factory Sealed",
        packaging: "Factory Hard Case",
        imagen: "assets/products/outdoor/SKU-OUTD-004.jpg"
    },
    {
        id: "SKU-OUTD-005",
        codigo: "SKU-OUTD-005",
        nombre: "Swiss Army Classic SD Compact Pocket Knife",
        categoria: "outdoor",
        categoriaNombre: "Outdoors & Tools",
        descripcion: "Compact 7-function multifunctional pocket knife crafted in high-precision Swiss stainless steel with integrated key ring.",
        asin: "B00004YVB2",
        condition: "New / Factory Sealed",
        packaging: "Original Gift Blister",
        imagen: "assets/products/outdoor/SKU-OUTD-005.jpg"
    }
];

// SVG Fallback Generator
function createSvgFallback(sku, categoryName) {
    const encodedCat = encodeURIComponent((categoryName || "").toUpperCase());
    const encodedSku = encodeURIComponent(sku || "");
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23121212"/><rect x="20" y="20" width="360" height="260" fill="none" stroke="%23b99a5c" stroke-width="1" stroke-opacity="0.3"/><line x1="20" y1="20" x2="380" y2="280" stroke="%23b99a5c" stroke-width="0.5" stroke-opacity="0.15"/><line x1="380" y1="20" x2="20" y2="280" stroke="%23b99a5c" stroke-width="0.5" stroke-opacity="0.15"/><circle cx="200" cy="130" r="40" fill="%231a1a1a" stroke="%23b99a5c" stroke-width="1"/><text x="200" y="135" font-family="sans-serif" font-size="20" fill="%23b99a5c" text-anchor="middle">LUXORA</text><text x="200" y="200" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23f5f3ef" text-anchor="middle" letter-spacing="2">${encodedSku}</text><text x="200" y="225" font-family="sans-serif" font-size="10" fill="%23999999" text-anchor="middle" letter-spacing="1.5">${encodedCat}</text></svg>`;
}

// Friendly category labels for filter pills
const categoryLabels = {
    "all": "ALL PRODUCTS",
    "beauty": "BEAUTY & CARE",
    "toys": "TOYS & GAMES",
    "pets": "PET SUPPLIES",
    "home": "HOME & LIFESTYLE",
    "outdoor": "OUTDOORS & TOOLS",
    "tech": "TECHNOLOGY",
    "electronics": "ELECTRONICS",
    "kitchen": "KITCHEN",
    "accessories": "ACCESSORIES",
    "other": "OTHER"
};

// Catalog B2B Engine
document.addEventListener("DOMContentLoaded", () => {
    const catalogGrid = document.getElementById("catalogGrid");
    const searchInput = document.getElementById("searchInput");
    const categoryPills = document.getElementById("categoryPills");
    const datasheetModal = document.getElementById("datasheetModal");
    const closeModal = document.getElementById("closeModal");

    if (!catalogGrid) return;

    let activeCategory = "all";
    let searchQuery = "";

    function getActiveCategoryKeys() {
        const activeSet = new Set(productsData.map(p => p.categoria.toLowerCase()));
        return Array.from(activeSet);
    }

    const sortSelect = document.getElementById("sortSelect");
    const resultsCount = document.getElementById("resultsCount");
    let currentSort = "sku";

    function renderCategoryPills() {
        if (!categoryPills) return;
        
        categoryPills.innerHTML = "";
        const activeKeys = getActiveCategoryKeys();

        const allBtn = document.createElement("button");
        allBtn.className = `pill-btn ${activeCategory === "all" ? "active" : ""}`;
        allBtn.dataset.category = "all";
        allBtn.innerHTML = `${categoryLabels["all"]} <span class="pill-count">(${productsData.length})</span>`;
        categoryPills.appendChild(allBtn);

        activeKeys.forEach(catKey => {
            const count = productsData.filter(p => p.categoria.toLowerCase() === catKey).length;
            const btn = document.createElement("button");
            btn.className = `pill-btn ${activeCategory === catKey ? "active" : ""}`;
            btn.dataset.category = catKey;
            btn.innerHTML = `${categoryLabels[catKey] || catKey.toUpperCase()} <span class="pill-count">(${count})</span>`;
            categoryPills.appendChild(btn);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("category");
    if (catParam) {
        activeCategory = catParam.toLowerCase();
    }

    renderCategoryPills();

    function renderProducts() {
        catalogGrid.innerHTML = "";

        let filtered = productsData.filter(product => {
            const matchesCategory = activeCategory === "all" || product.categoria.toLowerCase() === activeCategory;
            const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.codigo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.categoriaNombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        filtered.sort((a, b) => {
            if (currentSort === "name") return a.nombre.localeCompare(b.nombre);
            if (currentSort === "category") return a.categoriaNombre.localeCompare(b.categoriaNombre);
            return a.codigo.localeCompare(b.codigo);
        });

        if (resultsCount) {
            resultsCount.innerHTML = `Showing <strong>${filtered.length} of ${productsData.length}</strong> active inventory products`;
        }

        if (filtered.length === 0) {
            catalogGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #0E1D32; border: 1px solid rgba(212, 175, 55, 0.25);">
                    <span style="font-size: 32px; display: block; margin-bottom: 12px; filter: sepia(1) saturate(3) hue-rotate(5deg);">🔍</span>
                    <h3 style="color: var(--white); font-family: var(--font-serif); font-size: 20px;">No product lots found</h3>
                    <p style="color: var(--gray-light); font-size: 13.5px; margin-top: 8px;">Try adjusting search terms or select another active commercial category.</p>
                </div>
            `;
            return;
        }

        const categoryImageMap = {
            beauty: "assets/cat_beauty.jpg",
            toys: "assets/cat_toys.jpg",
            pets: "assets/cat_pets.jpg",
            home: "assets/cat_home.jpg",
            outdoor: "assets/cat_tools.jpg"
        };

        filtered.forEach(product => {
            const card = document.createElement("article");
            card.className = "product-card";
            
            const fallbackImg = categoryImageMap[product.categoria.toLowerCase()] || createSvgFallback(product.codigo, product.categoriaNombre);

            card.innerHTML = `
                <div class="product-card-header">
                    <span class="product-badge">${product.categoriaNombre}</span>
                    <span class="product-stock-tag">✓ IN STOCK</span>
                </div>
                <div class="product-img-wrapper">
                    <img src="${product.imagen}" alt="${product.nombre}" onerror="this.onerror=null; this.src='${fallbackImg}';">
                </div>
                <div class="product-details">
                    <div class="product-sku-bar">
                        <span>CODE: ${product.codigo.replace('SKU-', '')}</span>
                        <span style="color: var(--gold); font-weight: 800;">WHOLESALE</span>
                    </div>
                    <h3 class="product-title">${product.nombre}</h3>
                    <p class="product-desc">${product.descripcion}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-datasheet" data-sku="${product.codigo}">SPEC SHEET</button>
                        <a href="contact.html?sku=${product.codigo}&product=${encodeURIComponent(product.nombre)}" class="btn btn-outline" style="display: inline-flex; align-items: center; justify-content: center;">REQUEST QUOTE</a>
                    </div>
                </div>
            `;

            catalogGrid.appendChild(card);
        });

        document.querySelectorAll(".btn-datasheet").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const sku = e.target.dataset.sku;
                const prod = productsData.find(p => p.codigo === sku);
                if (prod) openDatasheetModal(prod);
            });
        });
    }

    function openDatasheetModal(product) {
        const categoryImageMap = {
            beauty: "assets/cat_beauty.jpg",
            toys: "assets/cat_toys.jpg",
            pets: "assets/cat_pets.jpg",
            home: "assets/cat_home.jpg",
            outdoor: "assets/cat_tools.jpg"
        };
        const fallbackImg = categoryImageMap[product.categoria.toLowerCase()] || createSvgFallback(product.codigo, product.categoriaNombre);
        
        const modalImg = document.getElementById("modalImg");
        if (modalImg) {
            modalImg.src = product.imagen;
            modalImg.onerror = () => { modalImg.src = fallbackImg; };
        }

        const skuElem = document.getElementById("modalSku");
        if (skuElem) skuElem.innerText = product.codigo;

        const titleElem = document.getElementById("modalTitle");
        if (titleElem) titleElem.innerText = product.nombre;

        const descElem = document.getElementById("modalDesc");
        if (descElem) descElem.innerText = product.descripcion;

        const catElem = document.getElementById("modalCategory");
        if (catElem) catElem.innerText = product.categoriaNombre;

        const codeElem = document.getElementById("modalCodeDisplay");
        if (codeElem) codeElem.innerText = product.codigo;

        const asinElem = document.getElementById("modalAsin");
        if (asinElem) asinElem.innerText = product.asin || "N/A (Verified)";

        const condElem = document.getElementById("modalCondition");
        if (condElem) condElem.innerText = product.condition || "New / Factory Sealed";

        const packElem = document.getElementById("modalPackaging");
        if (packElem) packElem.innerText = product.packaging || "Commercial Distribution Box";
        
        const quoteBtn = document.getElementById("modalQuoteBtn");
        if (quoteBtn) {
            quoteBtn.href = `contact.html?sku=${product.codigo}&product=${encodeURIComponent(product.nombre)}`;
        }

        if (datasheetModal) {
            datasheetModal.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            datasheetModal.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }

    if (datasheetModal) {
        datasheetModal.addEventListener("click", (e) => {
            if (e.target === datasheetModal) {
                datasheetModal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    }

    if (categoryPills) {
        categoryPills.addEventListener("click", (e) => {
            if (e.target.classList.contains("pill-btn")) {
                categoryPills.querySelectorAll(".pill-btn").forEach(btn => btn.classList.remove("active"));
                e.target.classList.add("active");
                activeCategory = e.target.dataset.category;
                renderProducts();
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    renderProducts();
});
