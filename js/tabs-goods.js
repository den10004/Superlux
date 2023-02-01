const goodsTab = document.querySelectorAll(".goods-tab");
const tabGoods = document.querySelectorAll(".tab-popular");

for (let i = 0; i < goodsTab.length; i++) {
  goodsTab[i].addEventListener("click", function (e) {
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("pop-tab");

    for (let j = 0; j < goodsTab.length; j++) {
      const contentAttr = tabGoods[j].getAttribute("goods-tab-content");

      if (activeTabAttr === contentAttr) {
        goodsTab[j].classList.add("active");
        tabGoods[j].classList.add("active");
      } else {
        goodsTab[j].classList.remove("active");
        tabGoods[j].classList.remove("active");
      }
    }
  });
}
