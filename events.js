import {Item} from './item.js'

function something(params) {
    //HTML <input type="text" name="name" id="name" value="pepe"/>
    let name = document.getElementById("name").value;
    //name = pepe
    name.value="";

    let input = document.getElementById("name");
    input.value = "";
}

/**
 * Add products to the HTML.
 */

function add() {
    let title = document.getElementById("title");
    let price = document.getElementById("price");

    if (title.value !== '' && price.value !== '') {
       addSesionStorage();
    }else {
        alert("Ypu must complete the fields.")
    }

    
}

function getProducts(){
    let products = sessionStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);
    } else {
        products = []
    }
    return products
}

/**
 * Add article to sesionStorage
 * Pre: Title and price are not null
 */

function addSesionStorage(){
    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let products = sessionStorage.getItem('products');


    /*
    let product = {
        id: 0,
        title: title.value,
        price: price.value,
    };
    */

    let product = new Itemtitle.value(title.value,price.value);

    let item = new Item();
    //!=0
    if (products) {
        products = JSON.parse(products);
        products.push(product);
    } else {
        products = [product];
    }

    product.id = products.length;

    sessionStorage.setItem('products', JSON.stringify(products));

    updateDiv();

    title.value = "";
    title.price = "";

    
}

function deleteAll() {
    let confirm = confirm("Are you sure?");
    if (confirm) {
        sessionStorage.removeItem('products');
        updateDiv();
    }
}

function deleteId(id) {
    let confirm = confirm("Are you sure?");

    if (confirm) {
        
        let productsInStorage = getProducts();
        let auxList = productsInStorage.filter( aux => aux.id !== id);
        
        /*
        let auxList = [];
        for (let aux of productsInStorage) {
            if (aux.id !== id) {
                auxList.push(aux);
            }
        }
            */
        alert(id);
        sessionStorage.setItem('products', JSON.stringify(auxList));
    
        updateDiv();
    }
}

function updateDiv() {

    /*
    let products = JSON.parse(sessionStorage.getItem('products'));
    */

    let products = getProducts();
    

    let div = document.getElementById('events');
    div.innerHTML = ``;

    for (let product of products) {
        let linkDelete = `<button class="btn btn-danger btn-sm" onclick="deleteId(${product.id})">Delete</button>`;
        div.innerHTML += `id: ${product.getId()}, Title ${product.getTitle()}, Price: ${product.getPrice()}, ${linkDelete}<br>`;
    }
}

/*
let btnAdd = document.getElementById('add');
btnAdd.onclick = add;
*/

/*
f11 Get into a function
*/

let btnAdd = document.getElementById('btnAdd');
btnAdd.onclick = add;

let btnRemoveAll = document.getElementById('btnRemoveAll');
btnRemoveAll.onclick = deleteAll;
