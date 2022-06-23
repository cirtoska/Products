document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((json) => allProducts(json));

  let products = "";

  function allProducts(listing) {
    const items = listing.products;

    for (let i = 0; i < items.length; i++) {
      products += `<div class="items">
      <div class="title">
    <h2>${items[i].brand}</h2>
    <h1><a href="./post.html?postId=${items[i].id}">${items[i].title}</a></h1>
    </div>
    <div class="thumbnail">
   <a href="./post.html?postId=${items[i].id}"><img src="${items[i].thumbnail}"></a>
   <p class="discount">Save ${items[i].discountPercentage}%</p>
   </div>
   <div class="price">$${items[i].price}</div>
   <button class="btn"><a href="./post.html?postId=${items[i].id}">Add to card</a></button>
        </div>`;
      console.log(items[i]);
    }
    document.getElementById("products").innerHTML = products;
  }
});
