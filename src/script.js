document.querySelectorAll(".gallery-image").forEach((item) => {
  item.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "block";
    modalImg.src = this.src;

    document.querySelectorAll(".gallery-image").forEach((img) => img.classList.remove("active"));
    item.classList.add("active");
  });
});

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = function() { 
  modal.style.display = "none";
  document.querySelectorAll(".gallery-image").forEach((img) => img.classList.remove("active"));
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelectorAll(".gallery-image").forEach((img) => img.classList.remove("active"));
  }
}
