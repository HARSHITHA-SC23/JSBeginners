// Get HTML elements
let slider = document.getElementById('myRange');
let copy = document.getElementById('copy');
let sliderValue = document.getElementById('count');
const generatePassword = document.getElementById('generatepassword');
let strengthString = document.getElementById('strength');

// Assign values based on requirements
sliderValue.textContent = Number(slider.value);

let lower = 'abcdefghijklmnopqrstuvwxyz';
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let number = '0123456789'
let symbol = '!@#$%^&*()-_=+'

generatePassword.addEventListener('click', function () {
    randomString(sliderValue.textContent);
});

slider.addEventListener('input', function () {
    sliderValue.textContent = Number(slider.value);
});

copy.addEventListener('click', function () {
    let copyString = document.getElementById('password-field').value;
    copyToClipboard(copyString);
})

function randomString(length) {

    let includeLower = document.getElementById('lower').checked;
    let includeUpper = document.getElementById('upper').checked;
    let includeNumber = document.getElementById('number').checked;
    let includeSymbol = document.getElementById('symbol').checked;

    let characters =
        (!includeLower && !includeUpper && !includeNumber && !includeSymbol ?
            (upper + lower + number + symbol) :
            (
                (includeLower ? lower : '') +
                (includeUpper ? upper : '') +
                (includeNumber ? number : '') +
                (includeSymbol ? symbol : '')
            ));
    const randomPasswordArray = []
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        randomPasswordArray.push(characters[random]);
    }
    const randomPasswordString = randomPasswordArray.join('')
    document.getElementById('password-field').value = randomPasswordString;
    strengthString.innerHTML = length >= 15 ?
        (
            strengthString.style.color = '#A4FFAF',
            'Strong'
        )
        : (length < 15 && length >= 8 ?
            (
                strengthString.style.color = '#f4ffa4',
                'Medium'
            ) :
            (
                strengthString.style.color = '#cb1d1d',
                'Weak'
            ));
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}