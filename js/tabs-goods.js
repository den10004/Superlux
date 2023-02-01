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

/*счётчик товаров*/

const countButton = document.querySelectorAll(".counter__btn");

countButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector(".counter__value");
    const currentValue = +inp.value;
    let newValue;

    if (direction === "plus") {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    }
    inp.value = newValue;
  });
});
