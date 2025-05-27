// Isotope 인스턴스 객체 생성
const sectionIso = new Isotope(".section", {
  // options
  itemSelector: "article",
  masonry: {
    // use element for option
    columnWidth: "article",
  },
});

const sortingBtns = document.querySelectorAll(".sorting li");
sortingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    //재정렬
    const filter = e.currentTarget.querySelector("a").getAttribute("href");

    sectionIso.arrange({
      filter: filter,
    });

    //다 제거하고 클릭한 것만 onclass추가
    sortingBtns.forEach((btnEl) => {
      btnEl.classList.remove("on");
    });

    e.currentTarget.classList.add("on");
  });
});
