// // импорт как объект
// import * as testObject from "./src/scripts/test";
// testObject.testFunction = testObject.testFunction;
// // обычный импорт
// import { testFunction } from "./src/scripts/test";
// // импорт при экспорте по умолчанию
// // import testFunction from "./src/scripts/test.ts";
const office = {
    tech: {
        employersCount: 10,
        jobsCount: 5,
    },
    desing: {
        employersCount: 10,
        jobsCount: 5,
    },
};
Object.entries(office).forEach(([keys, values]) => {
    console.log(values);
});
//let summ = office.tech.jobsCount + office.desing.jobsCount;
console.log("test");
