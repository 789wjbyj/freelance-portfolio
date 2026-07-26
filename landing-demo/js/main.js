(function(){
  "use strict";
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  // 移动端菜单
  if(navToggle){
    navToggle.addEventListener("click", function(){
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){ navLinks.classList.remove("open"); });
    });
  }

  // 导航滚动加阴影
  function onScroll(){
    if(window.scrollY > 8){ nav.classList.add("scrolled"); }
    else { nav.classList.remove("scrolled"); }
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  // 定价 月/年 切换
  var sw = document.getElementById("billingSwitch");
  var labels = document.querySelectorAll(".billing-toggle__label");
  var nums = document.querySelectorAll(".price-card__amount .num");
  var yearly = false;
  function applyBilling(){
    var key = yearly ? "year" : "month";
    if(sw){ sw.classList.toggle("on", yearly); }
    nums.forEach(function(n){ n.textContent = n.getAttribute("data-" + key); });
    labels.forEach(function(l){ l.classList.toggle("active", l.getAttribute("data-billing") === key); });
  }
  labels.forEach(function(l){ if(l.getAttribute("data-billing") === "month"){ l.classList.add("active"); } });
  if(sw){ sw.addEventListener("click", function(){ yearly = !yearly; applyBilling(); }); }
  labels.forEach(function(l){
    l.addEventListener("click", function(){
      yearly = (l.getAttribute("data-billing") === "year");
      applyBilling();
    });
  });

  // 滚动渐入（JS 失效时元素正常可见，因为 reveal 类是 JS 加的）
  if("IntersectionObserver" in window){
    var revealEls = document.querySelectorAll(".feature, .price-card, .faq__item, .showcase__visual, .showcase__text, .section__head, .trust__logos, .cta-final__inner");
    revealEls.forEach(function(el){ el.classList.add("reveal"); });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.12, rootMargin:"0px 0px -40px 0px"});
    revealEls.forEach(function(el){ io.observe(el); });
  }
})();
