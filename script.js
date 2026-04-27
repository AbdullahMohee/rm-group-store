const products = [
  {id:1, name:"Laptop", price:10000, image:"https://via.placeholder.com/150", description:"Powerful laptop"},
  {id:2, name:"Phone", price:5000, image:"https://via.placeholder.com/150", description:"Smart phone"},
  {id:3, name:"Headphones", price:1000, image:"https://via.placeholder.com/150", description:"Great sound"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];


if(document.getElementById("products")){
  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div>
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <a href="product.html?id=${p.id}">View Details</a><br>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}


function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}


function renderCart(){
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  let total = 0;
  list.innerHTML = "";

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    total += item.price;
  });

  totalEl.innerText = total;
}
