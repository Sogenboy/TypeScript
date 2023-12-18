// // импорт как объект
// import * as testObject from "./src/scripts/test";
// testObject.testFunction = testObject.testFunction;

// // обычный импорт
// import { testFunction } from "./src/scripts/test";

// // импорт при экспорте по умолчанию
// // import testFunction from "./src/scripts/test.ts";

// const office = {
//   tech: {
//     employersCount: 10,
//     jobsCount: 5,
//   },
//   desing: {
//     employersCount: 10,
//     jobsCount: 5,
//   },
// };
// let SumOfWorks = 0;
// Object.entries(office).forEach(([keys, values]) => {
//   SumOfWorks += values.jobsCount;
// });

// 1 задачка
// import * as f from "./src/scripts/function";
// console.log(f.maxIncomeSeason);
// console.log(f.minIncomeSeason);
// console.log(f.maxHiredSeasone);
// console.log(f.maxDismissedSeasone);

//вторая задачка
// import * as f from "./src/scripts/two";
// console.log(f.maxEmployeeCountDepartament); // отдел с наибольшим кол-во сотрудников
// console.log(f.maxExperiencedEmployeeCountDepartament); // вывести отдел, в котором больше всего сотрудников с опытом от 3 лет
// console.log(f.closedProjectEmployees); // вывести информацию с именем и стажем сотрудников, которые уже закрыли проекты.
// console.log(f.maxAvgSalaryDepartament); //вывести отдел с самой большой средней зарплатой у сотрудников

//3 задачка
import * as f from "./src/scripts/tree";
//console.log(f.sortedDepartament); //отсортировать по опыту b - a
// отдел в котором у сотродников большой опыт
// console.log(f.sortedDepartament.TECH[0]);
// console.log(f.sortedDepartament.DESIGN[0]);
// console.log(f.sortedDepartament.PROJECT[0]);

// 3.3
console.log(f.averageSalary);
