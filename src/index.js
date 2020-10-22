"use strict";

const employers = ["АртеМ", "максим", "Владимир", "сергей", "НикиТа", "евГений", " Дарья", " ", "виктория ", "ЕкаТерина", "", " Андрей ", "КИРИЛЛ"];
let nameCourse = "Базовый React";
const command = [...employers];

let employersNames = employers.filter((employers) => employers.length > 0 && employers != "").map((item) => item.toLowerCase().trim());

const data = {
    cash: [3, 8, 3],
    react: ["JSX", "components", "props", "state", "hooks"],
    add: ["styled-components", "firebase"],
};

const { cash, react, add } = data;

function calcCash(own = 0) {
    const [, cash] = [...arguments];
    let total = own;

    cash.forEach((item) => (total += item));
    return total;
}

let lesson = calcCash(null, cash);

function makeBusiness(director, teacher, allModule, gang, course) {
    teacher = teacher || "Максим";
    let sumTech = react.concat(add, "и другие");
    console.log(`Стартует новый курс: ${course}. Владелец: ${director}, преподователь: ${teacher}. Всего уроков: ${allModule}. 
    Команда академии: ${gang}`);
    console.log(`Первое что изучим будет  ${data.react[0]}. Он очень похож на HTML!`);
    console.log(`Технологии которые мы изучим:`);
    console.log(...sumTech);
}

makeBusiness(...["Артем", null, lesson, command, nameCourse]);
