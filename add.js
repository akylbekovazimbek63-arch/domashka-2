// ЗАДАНИЕ 1
const inputField = document.getElementById('userInput');
const button = document.getElementById('numers');
const resultDisplay = document.getElementById('result');
const extractNumbers = (str) => {
    const matches = str.match(/\d/g);
    return matches ? matches.map(Number) : [];
};
button.addEventListener('click', () => {
    const text = inputField.value;
    const numbersArray = extractNumbers(text);
    resultDisplay.textContent = JSON.stringify(numbersArray);
    console.log(numbersArray);
});

// ЗАДАНИЕ 2
const printFibonacci = (a = 0, b = 1) => {
    console.log(a);
    if (a >= 144) {
        return; 
    }
    setTimeout(() => {
        printFibonacci(b, a + b);
    }, 1000);
};
printFibonacci();

// ЗАДАНИЕ 3
const fetchProductTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status}`);
        }
        const data = await response.json();
        data.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
    console.error('Ошибка:', error.message);
    }
};
fetchProductTitles();

// ЗАДАНИЕ 4
const container = document.querySelector('div');
container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.textContent;
        document.body.style.backgroundColor = color;
        console.log(`Цвет изменен на: ${color}`);
    }
});

// ЗАДАНИЕ 5
const toggleBtn = document.getElementById('toggleBtn');
const square = document.getElementById('square');
toggleBtn.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block';
    } else {
        square.style.display = 'none'; 
    }
});

// ЗАДАНИЕ 6
const counterElement = document.getElementById('counter');
let count = 0;
    const intervalId = setInterval(() => {
    count++;
    counterElement.textContent = count;
    if (count >= 100) {
        clearInterval(intervalId);
        console.log("Завершено");
    }
}, 1);

// ЗАДАНИЕ 7
const jsonBtn = document.getElementById('getJsonBtn');
const fetchBleachCharacters = async () => {
    try {
        const response = await fetch('add.json');
        if (!response.ok) {
            throw new Error('Файл json не найде');
        }
        const characters = await response.json();
        console.log("--- Список персонажей получен ---");
        characters.forEach(char => {
            console.log(`${char.id} | ${char.name}`);
            console.log(`${char.house}`);
            console.log(`${char.specialty}`);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
};
jsonBtn.addEventListener('click', fetchBleachCharacters);