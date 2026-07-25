// 移动端菜单
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// 购物车抽屉
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const overlay = document.getElementById('overlay');
function openCart(){ cartDrawer.classList.add('open'); overlay.classList.add('show'); }
function closeCart(){ cartDrawer.classList.remove('open'); overlay.classList.remove('show'); }
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (overlay) overlay.addEventListener('click', closeCart);

// 商品详情：缩略图切换
const mainImg = document.getElementById('mainImg');
document.querySelectorAll('.thumb')?.forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    if (mainImg) { mainImg.textContent = t.dataset.emoji; }
  });
});

// 颜色选择
const optName = document.getElementById('optName');
document.querySelectorAll('.swatch')?.forEach(s => {
  s.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
    s.classList.add('active');
    if (optName) optName.textContent = s.dataset.name;
  });
});

// 数量
const qtyEl = document.getElementById('qty');
document.getElementById('qtyPlus')?.addEventListener('click', () => { qtyEl.textContent = (+qtyEl.textContent) + 1; });
document.getElementById('qtyMinus')?.addEventListener('click', () => { if (+qtyEl.textContent > 1) qtyEl.textContent = (+qtyEl.textContent) - 1; });

// 加入购物车（演示）
const addBtn = document.getElementById('addBtn');
const cartCount = document.getElementById('cartCount');
addBtn?.addEventListener('click', () => {
  let n = parseInt(cartCount.textContent) || 0;
  cartCount.textContent = n + parseInt(qtyEl.textContent || 1);
  addBtn.textContent = '已加入 ✓';
  setTimeout(() => { addBtn.textContent = '加入购物车 · $59.00'; }, 1500);
  openCart();
});
