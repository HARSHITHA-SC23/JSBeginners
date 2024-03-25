const numDivs = 4
const numBs = 4
const itemPerRow = 4
const operations = ['/', '+', '-', 'X', '=']

const container = document.getElementById("container");
const calc = document.getElementById('calContainer')
const calcArray = []
container.className = 'container-class'

const items = [7, 8, 9, '/', 4, 5, 6, '*', 3, 2, 1, '-', 0, '=', '+']
for (let i = 0; i < numDivs; i++) {
    const div = document.createElement('div');
    div.className = 'itemContainer'
    const bElements = items.slice(i * itemPerRow, (i + 1) * itemPerRow).map((item) => {
        const b = document.createElement('button');
        b.textContent = item;
        b.addEventListener('click', function (e) {
            performOperation(e)
        })
        return b;
    })
    div.append(...bElements)
    container.appendChild(div);
}

function performOperation(e) {
    if (e.target.textContent !== '=') {
        calcArray.push(e.target.textContent);
        calc.value = calcArray.join('')
    } else {
        handleCalculation(calcArray.join(''));
    }
}

function handleCalculation(calc) {
    if (calc.length === 0) {
        alert('Please enter a value')
    } else {
        const numbers = calc.match(/\d+/g).map(Number);
        const operators = calc.match(/[+*-\/]/g);
        let result = numbers[0];

        for (let i = 0; i < operators?.length; i++) {
            switch (operators[i]) {
                case '+':
                    result += numbers[i + 1];
                    break;
                case '-':
                    result -= numbers[i + 1];
                    break;
                case '*':
                    result *= numbers[i + 1];
                    break;
                case '/':
                    result /= numbers[i + 1];
                    break;
                default:
                    break;
            }
        }
        document.getElementById('calContainer').value = result;
        calcArray.length = 0
    }
}

function clearFunction() {
    calc.value = ''
    calcArray.length = 0
}