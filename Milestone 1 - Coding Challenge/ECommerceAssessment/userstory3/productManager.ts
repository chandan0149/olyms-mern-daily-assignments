// ENUM for Category (Type Annotation Requirement)
enum Category {
    Electronics = "Electronics",
    Books = "Books",
    Clothing = "Clothing"
}

// INTERFACE
interface IProduct {
    id: number;
    name: string;
    category: Category;
    price: number;
    stock: number;
}

// DECORATOR to log price/stock changes
function LogChange(target: any, propertyKey: string) {
    let value: number;

    const getter = function () {
        return value;
    };

    const setter = function (newVal: number) {
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
class Product implements IProduct {
    id: number;
    name: string;
    category: Category;

    @LogChange
    price: number;

    @LogChange
    stock: number;

    constructor(
        id: number,
        name: string,
        category: Category,
        price: number,
        stock: number
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}

// STORE PRODUCTS USING MAP
const inventory: Map<number, Product> = new Map();

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
const productTuples: [number, string][] = [
    [1, "Laptop"],
    [2, "Book"],
    [3, "T-Shirt"]
];

console.log("=== Tuple Data ===");

for (const [id, name] of productTuples) {
    console.log(`Tuple -> ID: ${id}, Name: ${name}`);
}
