document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const postId = urlParams.get("postId");
  // console.log(postId);
  fetch(`https://dummyjson.com/products/${postId}`)
    .then((response) => response.json())
    .then((json) => blogPost(json));

  function blogPost(items) {
    document.getElementById(
      "posts"
    ).innerHTML += `<div class="backLink"><a href="./index.html">&lt; Back</a></div>
    <h1 class="postTitle">${items.brand} - ${items.title}</h1>
    <p class="rating">Rating: ${items.rating}</p>
    <p class="description">${items.description}</p>
    <div class="images">`;
    
    const img = items.images;
    for (let i = 0; i < img.length; i++) {
      document.getElementById(
        "posts"
      ).innerHTML += `<a href="${img[i]}" target="_blank"><img src="${img[i]}" class="imgPost" ></a>`;
    }

    document.getElementById("posts").innerHTML += `</div><div class="order">
    <p class="inStock">Only ${items.stock} Items Left</p>
    <p class="discount discountPost">You Save ${items.discountPercentage}%</p>
    <p class="price">Buy Now $${items.price}</p>
    <button class="btn">Add to card</button>
    </div>
    <div class="navigation">
    <a href="./post.html?postId=${parseInt(postId) - 1}">&lt; Previous</a>
    <a href="./post.html?postId=${parseInt(postId) + 1}">Next &gt;</a>
    </div>`;
  }
});
