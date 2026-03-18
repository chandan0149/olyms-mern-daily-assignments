var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ENUM for Category (Type Annotation Requirement)
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Books"] = "Books";
    Category["Clothing"] = "Clothing";
})(Category || (Category = {}));
// DECORATOR to log price/stock changes
function LogChange(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        console.log(`${propertyKey} updated to ${newVal}`);
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
// CLASS implementing Interface
class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}
__decorate([
    LogChange
], Product.prototype, "price", void 0);
__decorate([
    LogChange
], Product.prototype, "stock", void 0);
// STORE PRODUCTS USING MAP
const inventory = new Map();
inventory.set(1, new Product(1, "Laptop", Category.Electronics, 1000, 10));
inventory.set(2, new Product(2, "Book", Category.Books, 20, 50));
inventory.set(3, new Product(3, "T-Shirt", Category.Clothing, 30, 25));
// ITERATE USING for...of
console.log("=== Inventory Data (Map) ===");
for (const [id, product] of inventory) {
    console.log(`ID: ${id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Category: ${product.category}`);
    console.log(`Price: ${product.price}`);
    console.log(`Stock: ${product.stock}`);
    console.log("-------------------------");
}
// STORE DATA USING TUPLES
const productTuples = [
    [1, "Laptop"],
    [2, "Book"],
    [3, "T-Shirt"]
];
console.log("=== Tuple Data ===");
for (const [id, name] of productTuples) {
    console.log(`Tuple -> ID: ${id}, Name: ${name}`);
}
