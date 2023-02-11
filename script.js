//fetch API
fetch("https://dummyjson.com/products")
.then((response) =>{
    return response.json();
}).then((data) => {
    console.log(data);//console data of object
    let arr = data.products;//store data in array form
    arr.map(value => {
        let show = document.querySelector('.data');
        const div = document.createElement('div');
        div.setAttribute('class','div-item');
        const img = document.createElement('img');
        img.setAttribute('src',`${value.images[0]}`);
        const p = document.createElement('p');
        const nm = document.createElement('span');
        nm.innerText = `Title : ${value.title} `;
        const brand = document.createElement('span');
        brand.innerText = `Brand : ${value.brand}`;
        p.append(nm,brand);
        const money = document.createElement('p');
        money.innerText = `$ ${value.price}`;
        const rating = document.createElement('p');
        rating.innerText = `Rating : ${value.rating}`;
        const stock = document.createElement('p');
        stock.innerText = `Stock : ${value.stock}`;
        div.append(img,p,money,rating,stock)
        show.append(div);
    });
});