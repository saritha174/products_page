//Normal function
function products(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(item=>console.log(item))
    item.map((data)=>{
        ContainerEle.innerHTML+=`<div class="card" style="width: 18rem">
        <img src="${data.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">
            ${data.description}
          </p>
          <p class="price">${data.price}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`

    })
}
products()