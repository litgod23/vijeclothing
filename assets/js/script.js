window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});

function addToCart(productId) {
  fetch("php/add_to_cart.php", {
    method: "POST",
    body: JSON.stringify({ product_id: productId }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => alert(data.message))
    .catch((error) => console.error("Error:", error));
}
