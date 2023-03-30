//Accessing the element
const ContainerEle = document.querySelector('.container')


//Arrow function
const products=()=>{
    //fetch the data from the api
    fetch('https://fakestoreapi.com/products')
    //convert the data into json format
    .then(res=>res.json())
    .then(item=>{
    console.log(item)
    item.map((data)=>{
        ContainerEle.innerHTML+=`<div class="card" style="width: 18rem">
        <i class="bi bi-umbrella-fill"></i>
        <img src="${data.image}" class="card-img-top" alt="..." />
        <div class="card-body">
        
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">
            ${data.description}
          </p>
          <p class="price">$${data.price}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
    })}
    )
}
products()
    

