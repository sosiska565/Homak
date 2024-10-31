const button = document.querySelector('#myButton');
let text = document.querySelector('#myText');

const callback = () => {
    text.text = "Hi";
};

button.addEventListener('click', callback);