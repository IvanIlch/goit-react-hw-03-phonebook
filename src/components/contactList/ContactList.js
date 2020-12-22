import React from "react";
import PropTypes from "prop-types";

import ContactItem from "../contactItem/ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList({ visibleContact, onDelete }) {
  return (
    <>
      <ul className={styles.contacts}>
        {visibleContact.map((contact) => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  visibleContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
