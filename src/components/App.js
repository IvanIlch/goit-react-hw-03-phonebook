import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./form/Form";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Layout from "./layuot/Layout";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.contacts !== this.state.contacts) {
      console.log("не равны, записуем в лс");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    const contactsFromLS = localStorage.getItem("contacts");
    if (contactsFromLS) {
      this.setState({
        contacts: JSON.parse(contactsFromLS),
      });
    }
  }

  searchContact = (filter) => {
    this.setState({ filter });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addToContacts = (state) => {
    const { name, number } = state;
    if (name === "" || number === "") {
      alert("Заповніть всі поля");
    } else {
      if (
        this.state.contacts.find(
          (contact) => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} вже є у списку контактів`);
      } else {
        this.setState((prevState) => {
          return {
            contacts: [
              ...prevState.contacts,
              { name: name, id: uuidv4(), number: number },
            ],
          };
        });
      }
    }
  };
  onDelete = (id) => {
    return this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm addToContacts={this.addToContacts} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} searchContact={this.searchContact} />
        ) : (
          <h3>Список контактів пустий</h3>
        )}

        {contacts.length > 0 && (
          <ContactList
            visibleContact={visibleContact}
            onDelete={this.onDelete}
          />
        )}
      </Layout>
    );
  }
}
