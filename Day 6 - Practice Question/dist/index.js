"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const contactManager_1 = require("./contactManager");
const readline = __importStar(require("readline"));
const manager = new contactManager_1.ContactManager();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mainMenu() {
    console.log("\n==== Contact Manager ====");
    console.log("1. Add Contact");
    console.log("2. View Contacts");
    console.log("3. Modify Contact");
    console.log("4. Delete Contact");
    console.log("5. Exit");
    rl.question("Select an option: ", (choice) => {
        switch (choice) {
            case "1":
                addContact();
                break;
            case "2":
                viewContacts();
                break;
            case "3":
                modifyContact();
                break;
            case "4":
                deleteContact();
                break;
            case "5":
                console.log("Exiting application...");
                rl.close();
                break;
            default:
                console.log("Invalid option.");
                mainMenu();
        }
    });
}
function addContact() {
    rl.question("Enter ID: ", (id) => {
        rl.question("Enter Name: ", (name) => {
            rl.question("Enter Email: ", (email) => {
                rl.question("Enter Phone: ", (phone) => {
                    const newContact = {
                        id: Number(id),
                        name,
                        email,
                        phone
                    };
                    manager.addContact(newContact);
                    mainMenu();
                });
            });
        });
    });
}
function viewContacts() {
    const contacts = manager.viewContacts();
    if (contacts.length > 0) {
        console.log("\nContact List:");
        contacts.forEach(contact => {
            console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        });
    }
    mainMenu();
}
function modifyContact() {
    rl.question("Enter ID to modify: ", (id) => {
        rl.question("Enter new name (leave blank to skip): ", (name) => {
            rl.question("Enter new email (leave blank to skip): ", (email) => {
                rl.question("Enter new phone (leave blank to skip): ", (phone) => {
                    const updatedData = {};
                    if (name)
                        updatedData.name = name;
                    if (email)
                        updatedData.email = email;
                    if (phone)
                        updatedData.phone = phone;
                    manager.modifyContact(Number(id), updatedData);
                    mainMenu();
                });
            });
        });
    });
}
function deleteContact() {
    rl.question("Enter ID to delete: ", (id) => {
        manager.deleteContact(Number(id));
        mainMenu();
    });
}
mainMenu();
