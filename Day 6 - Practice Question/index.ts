import { ContactManager } from "./contactManager";
import { Contact } from "./contact";
import * as readline from "readline";

const manager = new ContactManager();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu(): void {
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

function addContact(): void {
    rl.question("Enter ID: ", (id) => {
        rl.question("Enter Name: ", (name) => {
            rl.question("Enter Email: ", (email) => {
                rl.question("Enter Phone: ", (phone) => {

                    const newContact: Contact = {
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

function viewContacts(): void {
    const contacts = manager.viewContacts();

    if (contacts.length > 0) {
        console.log("\nContact List:");
        contacts.forEach(contact => {
            console.log(
                `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`
            );
        });
    }

    mainMenu();
}

function modifyContact(): void {
    rl.question("Enter ID to modify: ", (id) => {
        rl.question("Enter new name (leave blank to skip): ", (name) => {
            rl.question("Enter new email (leave blank to skip): ", (email) => {
                rl.question("Enter new phone (leave blank to skip): ", (phone) => {

                    const updatedData: Partial<Contact> = {};

                    if (name) updatedData.name = name;
                    if (email) updatedData.email = email;
                    if (phone) updatedData.phone = phone;

                    manager.modifyContact(Number(id), updatedData);
                    mainMenu();
                });
            });
        });
    });
}

function deleteContact(): void {
    rl.question("Enter ID to delete: ", (id) => {
        manager.deleteContact(Number(id));
        mainMenu();
    });
}

mainMenu();
