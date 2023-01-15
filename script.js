'use strict';

const imageBox = document.querySelectorAll('.imageBox');

for (let i = 0; i < imageBox.length; i++){
    console.log(imageBox[i]);
    imageBox[i].addEventListener('mouseover', function catchButton() {
        let theButton = document.querySelector('.buyButton');
        theButton.style.display = 'block';
    })
    imageBox[i].addEventListener('mouseout', function catchButton() {
        let theButton = document.querySelector('.buyButton');
        theButton.style.display = 'none';
    })
}






