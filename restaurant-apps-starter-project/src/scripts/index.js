import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

// logic navbar responsif
const hamburger = document.getElementById('hamburger');
const containerItemNav = document.querySelector('#container-item-nav');
const main = document.querySelector('main');

hamburger.addEventListener('click', function(event){    
    containerItemNav.classList.toggle('open');
    event.stopPropagation();
});

main.addEventListener('click', function(ev){
    containerItemNav.classList.remove('open');
    ev.stopPropagation();
});
// logic navbar responsif end





const showResponseMessage = (message = 'check internetmu') => {
    alert(message);
};


const getMenu = () => {

    fetch('./data/DATA.json')
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            renderMenu(responseJson.restaurants)
        })
        .catch(error => {
            showResponseMessage(error);
        });
};


const renderMenu = (restaurants) =>{

    const divContainerMenu = document.getElementById('container-menu');

    restaurants.forEach(Data =>{
        const divCardMenu = document.createElement('div');
        divCardMenu.setAttribute('class', 'card-menu');

        divCardMenu.innerHTML = `
            <img src="${Data.pictureId}" alt="gambar menu">
            <div class="container-desc-menu">
                <p tabindex="0">Rating : <b>${Data.rating}</b></p>
                <p class="data-city" tabindex="0">${Data.city}</p>
                <p class="data-name" tabindex="0"><b>${Data.name}</b></p>
                <p tabindex="0">${Data.description}</p>
            </div>
        `;

        divContainerMenu.appendChild(divCardMenu);
    });
};




document.addEventListener('DOMContentLoaded', function() {
    getMenu();
    
});






