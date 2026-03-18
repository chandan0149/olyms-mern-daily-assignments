import { Contact } from "./contact";

export class ContactManager {

    private contacts: Contact[] = [];

    addContact(contact: Contact): void {
        const exists = this.contacts.find(c => c.id === contact.id);

        if (exists) {
            console.log("Error: Contact with this ID already exists.");
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully.");
    }

    viewContacts(): Contact[] {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        return this.contacts;
    }

    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const contact = this.contacts.find(c => c.id === id);

        if (!contact) {
            console.log("Error: Contact does not exist.");
            return;
        }

        Object.assign(contact, updatedContact);
        console.log("Contact updated successfully.");
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index === -1) {
            console.log("Error: Contact does not exist.");
            return;
        }

        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully.");
    }
}
