(()=>{"use strict";const o=["АртеМ","максим","Владимир","сергей","НикиТа","евГений"," Дарья"," ","виктория ","ЕкаТерина",""," Андрей ","КИРИЛЛ"],t=[...o];o.filter((o=>o.length>0&&""!=o)).map((o=>o.toLowerCase().trim()));const e={cash:[3,8,3],react:["JSX","components","props","state","hooks"],add:["styled-components","firebase"]},{cash:c,react:n,add:s}=e;!function(o,t,c,l,a){t=t||"Максим";let r=n.concat(s,"и другие");console.log(`Стартует новый курс: Базовый React. Владелец: Артем, преподователь: ${t}. Всего уроков: ${c}. \n    Команда академии: ${l}`),console.log(`Первое что изучим будет  ${e.react[0]}. Он очень похож на HTML!`),console.log("Технологии которые мы изучим:"),console.log(...r)}(0,null,function(o=0){const[,t]=[...arguments];let e=o;return t.forEach((o=>e+=o)),e}(null,c),t)})();