const tabNavs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

for (let i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    const activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      const contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}

const popularTab = document.querySelectorAll(".popular-tab");
const tabPopular = document.querySelectorAll(".tab-popular");

for (var i = 0; i < popularTab.length; i++) {
  popularTab[i].addEventListener("click", function (e) {
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("pop-tab");

    for (let j = 0; j < popularTab.length; j++) {
      const contentAttr = tabPopular[j].getAttribute("popular-tab-content");

      if (activeTabAttr === contentAttr) {
        popularTab[j].classList.add("active");
        tabPopular[j].classList.add("active");
      } else {
        popularTab[j].classList.remove("active");
        tabPopular[j].classList.remove("active");
      }
    }
  });
}
