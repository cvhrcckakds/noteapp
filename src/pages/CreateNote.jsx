import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate ()
  console.log(date)
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = {
        id: uuid(),
        title, 
        details,
        date,
      };
      //notları not dizisine ekleme
      setNotes((prevNotes)=>[note, ...prevNotes]);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to={"/"} className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Kaydet
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Başlık"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          value={details}
          placeholder="Not Detayı..."
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
