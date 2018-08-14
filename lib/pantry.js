class Pantry{
  constructor(){
    this.stock = {};
  }

  addStock(stockName, amount) {
    return this.stock[stockName] = amount;
  }

  stockCheck(stockItem){
    return this.stock[stockItem];
  }
  
  restock(stockItem, amount){
    return this.stock[stockItem] += amount;
  }
}

const pantry = new Pantry();
console.log(pantry.stock);
console.log(pantry.addStock("Cheese", 10));
console.log(pantry.stock);
console.log(pantry.stockCheck("Cheese"));
console.log(pantry.restock("Cheese", 10));
console.log(pantry.stock);
