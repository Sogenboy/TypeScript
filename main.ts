import { Order } from "./src/scripts/Models/Order";
const user = "Искаков Санжар";
const address = "г.Павлодар, ул Лермонтова 93, it-hub";
const sum = 30000;

const order = new Order({ user, address, sum });

console.log(order.getInfoOrder());
