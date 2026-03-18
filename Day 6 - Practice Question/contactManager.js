"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactManager = void 0;
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        var exists = this.contacts.find(function (c) { return c.id === contact.id; });
        if (exists) {
            console.log("Error: Contact with this ID already exists.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully.");
    };
    ContactManager.prototype.viewContacts = function () {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = this.contacts.find(function (c) { return c.id === id; });
        if (!contact) {
            console.log("Error: Contact does not exist.");
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact updated successfully.");
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.log("Error: Contact does not exist.");
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully.");
    };
    return ContactManager;
}());
exports.ContactManager = ContactManager;
