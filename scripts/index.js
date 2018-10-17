// alert("HI!");   test if we're linked

const pupButton = document.querySelector('[data-pupButton]')
const ImageContainer = document.querySelector('[data-imageContainer]');

function getPuppy() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => data.message)
      .then(addPuppyImage)
}

function addPuppyImage(modifiedResult) {
    let pupImage = document.createElement('img');
    console.log(pupImage);
    pupImage.setAttribute('src', modifiedResult);
    console.log(pupImage);
    ImageContainer.appendChild(pupImage);
}



function clickButton() {
    pupButton.addEventListener('click', getPuppy);
}
clickButton();