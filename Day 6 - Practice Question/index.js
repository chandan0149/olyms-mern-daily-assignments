"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contactManager_1 = require("./contactManager");
var manager = new contactManager_1.ContactManager();
var contact1 = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210"
};
var contact2 = {
    id: 2,
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "9123456780"
};
manager.addContact(contact1);
manager.addContact(contact2);
console.log("All Contacts:");
console.log(manager.viewContacts());
manager.modifyContact(1, { name: "John Updated" });
manager.modifyContact(99, { name: "Unknown" });
manager.deleteContact(2);
manager.deleteContact(100);
console.log("Final Contacts:");
console.log(manager.viewContacts());
