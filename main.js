//referenciar a elementos del DOM
//tabla
const dataProducts = document.getElementById('data-products');
const productList =  document.getElementsByTagName('td');
//Botones de paginación
const btnConteiner = document.getElementsByClassName('buttons');
// buscador
const inputSearch = document.querySelector('#searchInput');
const trList = document.getElementsByTagName("tr");


window.addEventListener('DOMContentLoaded', () => {
    dataProducts.innerHTML = "<h1>Loading</h1>";
    loaderProducts();
}) 

const getProducts = (data) => {
    let body = '';
    for (let i=0; i<data.length; i++){
        body += `<tr class="tr-list">
        <th class="product">${data[i].id}</th>
        <td class="product">${data[i].name}</td>
        <th class="product">${data[i].slug}</th>
      </tr>
      `
    }
    dataProducts.innerHTML = body
}

function loaderProducts(){
    let url = 'http://localhost:3000/products';
    fetch(url)
    .then(response=> response.json())
    .then(data => getProducts(data))
    .catch(error => console.log(error));
}
//Evento keyup que filtra a partir de la 4 letra de cada fila: nombre
inputSearch.addEventListener('keyup', e => {
    let inputTextValue = e.target.value;
    console.log(inputTextValue)
    let er = new RegExp(inputTextValue, "i")
    for (let j = 1; j<trList.length; j++){
        let valorTr = trList[j];
   //     console.log('soy trL[j]', valorTr.children[1].innerText)
        if(er.test(valorTr.children[1].innerText)&&inputTextValue.length>3){
            valorTr.classList.remove('filter')
        } else {
            valorTr.classList.add('filter')
        }
    }       
})

//paginación
//Botones
//btnConteiner

