import React from "react";

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" id={id} onClick={() => onDelete(id)}>
        Видалити
      </button>
    </li>
  );
}

//
