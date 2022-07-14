let node = document.getElementById("modal-open");
node.addEventListener("click", function () {
  document.getElementsByClassName("modal")[0].style.display = "flex";
});
node = document.getElementById("modal-close");
node.addEventListener("click", function () {
  document.getElementsByClassName("modal")[0].style.display = "none";
});
