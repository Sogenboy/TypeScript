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

  constructor(warehouse: Warehouse) {
    this.warehouse = warehouse;
  }

  registerProduct(product: Product): void {
    console.log(
      `Товар ${product.name} успешно зарегистрирован на складе ${this.warehouse.name}`
    );
  }
}

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

const productsData = [
  {
    name: "Товар1",
    seller: "Продавец1",
    quantity: 5,
    unitPrice: 10,
    supplyId: 1,
    warehouseId: 1,
  },
];

productsData.forEach((productData) => {
  const product = new Product(
    productData.name,
    productData.seller,
    productData.quantity,
    productData.unitPrice,
    productData.supplyId,
    productData.warehouseId
  );

  warehouseApp.registerProduct(product);
});
