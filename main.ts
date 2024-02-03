class Warehouse {
  city: string;
  name: string;
  address: string;
  warehouseId: number;

  constructor(
    city: string,
    name: string,
    address: string,
    warehouseId: number
  ) {
    this.city = city;
    this.name = name;
    this.address = address;
    this.warehouseId = warehouseId;
  }
}

class Product {
  name: string;
  seller: string;
  quantity: number;
  unitPrice: number;
  supplyId: number;
  warehouseId: number;

  constructor(
    name: string,
    seller: string,
    quantity: number,
    unitPrice: number,
    supplyId: number,
    warehouseId: number
  ) {
    this.name = name;
    this.seller = seller;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.supplyId = supplyId;
    this.warehouseId = warehouseId;
  }
}

class WarehouseApp {
  warehouse: Warehouse;
  products: Product[] = [];

  constructor(warehouse: Warehouse) {
    this.warehouse = warehouse;
  }

  registerProduct(product: Product): void {
    this.products.push(product);
    console.log(
      `Товар ${product.name} успешно зарегистрирован на складе ${this.warehouse.name}`
    );
  }

  addNewProduct(
    name: string,
    seller: string,
    quantity: number,
    unitPrice: number,
    supplyId: number
  ): void {
    const product = new Product(
      name,
      seller,
      quantity,
      unitPrice,
      supplyId,
      this.warehouse.warehouseId
    );
    this.registerProduct(product);
  }

  sortProductsByPrice(ascending: boolean = true): void {
    this.products.sort((a, b) =>
      ascending ? a.unitPrice - b.unitPrice : b.unitPrice - a.unitPrice
    );
  }

  displayProducts(): void {
    console.log(`Товары на складе ${this.warehouse.name}:`);
    this.products.forEach((product) => {
      console.log(
        `${product.name} - ${product.unitPrice} руб. за единицу, Количество: ${product.quantity}`
      );
    });
  }
}

// Пример использования

const warehouseData = {
  city: "Москва",
  name: "Склад 1",
  address: "ул. Примерная, 123",
  warehouseId: 1,
};

const warehouse1 = new Warehouse(
  warehouseData.city,
  warehouseData.name,
  warehouseData.address,
  warehouseData.warehouseId
);

const warehouseApp = new WarehouseApp(warehouse1);

// Регистрация 10 товаров
for (let i = 1; i <= 10; i++) {
  warehouseApp.addNewProduct(`Товар${i}`, `Продавец${i}`, i * 2, i * 5, i);
}

// Отображение товаров до сортировки
warehouseApp.displayProducts();

// Сортировка товаров по возрастанию цены
warehouseApp.sortProductsByPrice();
console.log("--- Товары после сортировки по возрастанию цены ---");
warehouseApp.displayProducts();

// Сортировка товаров по убыванию цены
warehouseApp.sortProductsByPrice(false);
console.log("--- Товары после сортировки по убыванию цены ---");
warehouseApp.displayProducts();
