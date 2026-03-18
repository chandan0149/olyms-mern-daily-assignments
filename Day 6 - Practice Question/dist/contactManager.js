"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactManager = void 0;
class ContactManager {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        const exists = this.contacts.find(c => c.id === contact.id);
        if (exists) {
            console.log("Error: Contact with this ID already exists.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully.");
    }
    viewContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        return this.contacts;
    }
    modifyContact(id, updatedContact) {
        const contact = this.contacts.find(c => c.id === id);
        if (!contact) {
            console.log("Error: Contact does not exist.");
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact updated successfully.");
    }
    deleteContact(id) {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.log("Error: Contact does not exist.");
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully.");
    }
}
exports.ContactManager = ContactManager;
