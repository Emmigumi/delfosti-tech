//referenciar a elementos del DOM
//tabla
const dataProducts = document.getElementById('data-products');
const productList =  document.getElementsByTagName('td');
//Botones de paginación
const btnConteiner = document.getElementsByClassName('buttons');
const contador = document.getElementById('contador');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
//Botones de ordenamiento
const btnSortName = document.getElementById('sort');
// buscador
const inputSearch = document.querySelector('#searchInput');
const rowList = document.getElementsByTagName("tr");
//link de API
 let url = 'http://localhost:3000/products?_page=1&_limit=5';

window.addEventListener('DOMContentLoaded', () => {
    dataProducts.innerHTML = "<h1>Loading</h1>";
    loaderProducts(url);
}) 
//paginación
//Añadiendo funcionalidad de retorno al botonPrev
let count = 1;
btnNext.addEventListener('click', e=>{
    if(count===4){

    } else{
        count++;  
        contador.innerHTML = count;
       let url = `http://localhost:3000/products?_page=${count}&_limit=5`;
       loaderProducts(url);
       console.log(url);
    }
})

btnPrev.addEventListener('click', e=>{
   if(count===1){

   } else{
    count--;
    contador.innerHTML = count;
    let url = `http://localhost:3000/products?_page=${count}&_limit=5`;
    loaderProducts(url);
   }
})

//Funcionalidad de ordenamiento por nombre
btnSortName.addEventListener('click', e=>{
    let url = `http://localhost:3000/products?_page=${count}&_sort=name&_limit=5`;
    loaderProducts(url);
})

const getProducts = (data) => {
    let body = '';
    for (let i=0; i<data.length; i++){
        body += `<tr class="row-list">
        <th class="product">${data[i].id}</th>
        <td class="product">${data[i].name}</td>
        <th class="product">${data[i].slug}</th>
      </tr>
      `
    }
    dataProducts.innerHTML = body
}

function loaderProducts(url){
    fetch(url)
    .then(response=> response.json())
    .then(data => getProducts(data))
    .catch(error => console.log(error));
}
//Evento keyup que filtrar a partir de la 4 letra de cada fila: nombre
inputSearch.addEventListener('keyup', e => {
    let inputTextValue = e.target.value;
    console.log(inputTextValue)
    let er = new RegExp(inputTextValue, "i")
    for (let j = 1; j<rowList.length; j++){
        let valorTr = rowList[j];
   //     console.log(valorTr.children[1].innerText)
        if(er.test(valorTr.children[1].innerText)&&inputTextValue.length>3){
            valorTr.classList.remove('filter')
        } else {
            valorTr.classList.add('filter')
        }
    }       
})
