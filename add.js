const regExp = /^\d+$/;
const containsOnly = (str) => {
    return regExp.test(str);
}

console.log(containsOnly("12345"));
console.log(containsOnly("12a45"));
console.log(containsOnly(""));
console.log(containsOnly("0"));
// test 2

const startSecond = () => {
    const intervalID = setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
    return intervalID;
};

console.log("Счетчик запущен.");
const counterId = startSecond();

// test 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
     }, 1000);
};
count();

// test 4
const colorBlock = document.getElementById('block');

const activeClass = 'background';

colorBlock.addEventListener('click', () => {
    colorBlock.classList.toggle(activeClass);
    if (colorBlock.classList.contains(activeClass)) {
        console.log("Фон установлен.");
    } else {
        console.log("Фон убран.");
    }
});

// test 5

const request = new XMLHttpRequest();

request.open("GET", "add.json", true);
request.onload = function () {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log("Данные получены:");
        console.log(data);
    } else {
        console.error("Ошибка загрузки ", request.status);
    }
};
request.send();