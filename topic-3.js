/*1. 
Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:*/
const arr = [5, 3, 4, 5, 6, 7, 3];
const compact = (arr) => {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
const arr2 = compact(arr);
console.log(arr2); // [5,3,4,6,7]

/*2.
Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
 - початкове значення
 - кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)*/
const createArray = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
let arr3 = createArray(2, 9);
console.log(arr3); // [2,3,4,5,6,7,8,9]

/*3.
Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.*/

let printNum = (a, b) => {
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= i - a + 1; j++) {
            console.log(i);
        }
    }
}
console.log(printNum(1, 9));

/*4. 
Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.*/

let randArray = (k) => {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
}
console.log(randArray(10));

/*
5.
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)*/

let separateArr = (arr) => {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let type = typeof arr[i];

        if (result[type]) {
            result[type].push(arr[i]);
        } else {
            result[type] = [arr[i]];
        }
    }

    return Object.values(result);
}
const arr5 = [5, 'Limit', 12, 'a', '3', 99, 2, 4, 3, '33', 'a', 'text'];

console.log(separateArr(arr5));


/*6.
Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.*/

let a = +prompt('введіть число a:');
let b = +prompt('Введіть число b:');
let op = +prompt('Введіть арифметичну дію:');

let calc = (a, b, op) => {
    if (op === 1) return a - b;
    if (op === 2) return a * b;
    if (op === 3) return a / b;
    (a + b);
}
console.log(calc(a, b, op));

/*7. 
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.*/

let findUnique = (arr) => {
    let arr1 = new Set(arr);
    return (arr1.size === arr.length);

}
console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true

