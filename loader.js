function hideLoader() {
  const loader = document.querySelector(".loader");
  const body = document.querySelector("body");
  setTimeout(() => {
    loader.style.display = "none";
  }, 10000);
}
hideLoader();