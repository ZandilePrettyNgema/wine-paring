window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

const search = () => {
  const searchbox = document.getElementById("search-box").value.toUpperCase();
  const items = document.getElementById("container");

  const menu = document.querySelectorAll(".row");
  const pname = items.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = menu[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        menu[i].style.display = "";
      } else {
        menu[i].style.display = "none";
      }
    }
  }
};
