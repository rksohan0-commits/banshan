const products = [
  [
    "earrings",
    "Pearl Drop Earrings",
    "products/hair-accessories-1.png",
    "tl"
  ],
  [
    "earrings",
    "Sculptural Gold Hoops",
    "products/hair-accessories-1.png",
    "tr"
  ],
  [
    "earrings",
    "Resin Statement Earrings",
    "products/hair-accessories-1.png",
    "bl"
  ],
  [
    "earrings",
    "Crystal Stud Earrings",
    "products/hair-accessories-1.png",
    "br"
  ],
  [
    "necklaces",
    "Pearl Collar Necklace",
    "products/necklaces-1.png"
  ],
  [
    "necklaces",
    "Floral Enamel Necklace",
    "products/necklaces-2.png"
  ],
  [
    "necklaces",
    "Pearl Pendant Necklace",
    "products/necklaces-3.png"
  ],
  [
    "necklaces",
    "Crystal Solitaire Necklace",
    "products/necklaces-4.png"
  ],
  [
    "bracelets",
    "Layered Chain Bracelet",
    "products/bracelets-3.png",
    "tl"
  ],
  [
    "bracelets",
    "Pastel Charm Bracelet",
    "products/bracelets-3.png",
    "tr"
  ],
  [
    "bracelets",
    "Pearl Bead Bracelet",
    "products/bracelets-3.png",
    "bl"
  ],
  [
    "bracelets",
    "Colorblock Enamel Bangle",
    "products/bracelets-3.png",
    "br"
  ],
  [
    "brooches",
    "Floral Crystal Brooch",
    "products/brooches-1.png",
    "tl"
  ],
  [
    "brooches",
    "Vintage Crest Brooch",
    "products/brooches-1.png",
    "tr"
  ],
  [
    "brooches",
    "Enamel Bee Brooch",
    "products/brooches-1.png",
    "bl"
  ],
  [
    "brooches",
    "Pearl Bow Brooch",
    "products/brooches-1.png",
    "br"
  ],
  [
    "hair-accessories",
    "Acetate Claw Clip",
    "products/earrings-4.png",
    "tl"
  ],
  [
    "hair-accessories",
    "Satin Bow Barrette",
    "products/earrings-4.png",
    "tr"
  ],
  [
    "hair-accessories",
    "Pearl & Crystal Hair Pins",
    "products/earrings-4.png",
    "bl"
  ],
  [
    "hair-accessories",
    "Marbled Resin Headband",
    "products/earrings-4.png",
    "br"
  ]
];
const grid=document.querySelector('#product-grid');
if (!grid) { /* Product gallery is only mounted on product-bearing pages. */ }
function render(filter='all'){grid.innerHTML=products.filter(p=>filter==='all'||p[0]===filter).map(([cat,name,src,crop])=>`<article class="product-card"><div class="product-image${crop ? ` catalog-crop crop-${crop}` : ''}"><img src="assets/${src}" alt="${name} temporary sample image" loading="lazy"></div><h3>${name}</h3><p>${cat.replace('-', ' ')}</p></article>`).join('')}
if (grid) { render(); document.querySelectorAll('.category-nav button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.category-nav button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)})); }
const slides=[...document.querySelectorAll('.banner-slide')], dots=[...document.querySelectorAll('.banner-dots button')];
if(slides.length){let current=0;const show=(n)=>{current=n;slides.forEach((s,i)=>s.classList.toggle('active',i===n));dots.forEach((d,i)=>d.classList.toggle('active',i===n))};dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));setInterval(()=>show((current+1)%slides.length),6500)}
