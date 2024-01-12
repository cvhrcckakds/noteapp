import React from "react";
import { Link } from "react-router-dom";

const NoteItems = ({ note }) => {
  console.log(note);
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 15 ? note.title.substr(0, 15) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItems;
