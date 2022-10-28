let productSearch = [];
window.addEventListener('DOMContentLoaded', () => {
   document.getElementById('dataProducts').innerHTML = "<h1>Loading</h1>"
loadProducts();
}) 
const getProducts = (data) => {
    let body = '';
    for (let i=0; i<data.length; i++){
        body += ` <tr>
        <th class="product" scope="row">${data[i].id}</th>
        <td class="product">${data[i].name}</td>
        <td class="product">${data[i].slug}</td>
      </tr>`
    }
    document.getElementById('dataProducts').innerHTML = body
    productSearch = data;
}


 function loadProducts(){
    let url = 'http://localhost:3000/products';
    fetch(url)
    .then(response=> response.json())
    .then(data => getProducts(data))
    .catch(error => console.log(error))
} 

// Obtener el valor del inputSearch

const input = document.querySelector('#searchInput')
input.addEventListener('keyup', e => {
    const newProductsList = productSearch.filter(product => product.name.toLowerCase().includes(input.value.toLowerCase()))
    console.log('soy newproductList', newProductsList)
    getProducts(newProductsList);
})


