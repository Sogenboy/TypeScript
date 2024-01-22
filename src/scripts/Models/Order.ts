interface InitParams {
  user: string;
  address: string;
  sum: number;
}

export class Order {
  private _user: string;
  private _address: string;
  private _sum: number;
  private _createDate: Date;
  private _deliveryDate: Date;

  constructor(params: InitParams) {
    this._user = params.user;
    this._address = params.address;
    this._sum = params.sum;
    this._createDate = new Date();
    this._deliveryDate = this._generateDeliveryDate();
  }

  private _generateDeliveryDate() {
    const deliveryDate = new Date(this._createDate);
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    return deliveryDate;
  }

  get userInfo() {
    return this._user;
  }

  getInfoOrder() {
    const date = `${this._deliveryDate.getDate()}.${
      this._deliveryDate.getMonth() + 1
    }.${this._deliveryDate.getFullYear()}`;

    return `${this._user}, спасибо за оформление заказа на сумму ${this._sum},\nожидайте доставку ${date} по адресу ${this._address}`;
  }
  set newAddress(address: string) {
    this._address = address;
  }
}
