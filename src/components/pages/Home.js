import React from "react";
import styled from "styled-components";
import List from "../Books/List";
import axios from "axios";
import { useState } from "react";
function Home() {
  const [book, setBook] = useState({
    Author: " ",
    Title: " ",
    ISBN: " ",
    ReleaseDate: " ",
  });

  const [status, setStatus] = useState(false);

  function onTextFieldChange(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
    console.log(book);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/bookData`, book);
      setStatus(true);
      setBook({
        Author: "",
        Title: "",
        ISBN: "",
        ReleaseDate: "",
      });
    } catch (error) {
      console.log("Something is wrong");
    }
  }

  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box>
        <h2> React Crud Library </h2>
      </Box>

      <LibForm>
        <h3> Add Book </h3>
        <form>
          <input
            name="Author"
            type="text"
            placeholder="Add the name of Author*"
            className="input-field"
            onChange={(e) => onTextFieldChange(e)}
            required
          />
          <br />

          <input
            name="Title"
            type="text"
            placeholder="Add the Title*"
            className="input-field"
            onChange={(e) => onTextFieldChange(e)}
            required
          />
          <br />

          <input
            name="ISBN"
            type="number"
            placeholder="Add the ISBN*"
            className="input-field"
            onChange={(e) => onTextFieldChange(e)}
            required
          />
          <br />

          <input
            name="ReleaseDate"
            type="text"
            placeholder=" Release Date"
            className="input-field"
            onChange={(e) => onTextFieldChange(e)}
          />
          <br />

          <button onClick={(e) => onFormSubmit(e)}> ADD Book To List </button>
        </form>
      </LibForm>

      <List />
    </>
  );
}

export default Home;

const Box = styled.div`
  text-align: center;
  background: #826bca;
  padding: 7px;
  font-size: 2rem;
  color: white;
`;

const LibForm = styled.div`
  text-align: center;
  h3 {
    color: white;
    background: green;
    font-size: 1.5rem;
    padding: 3px;
    margin-top: 2px;
  }

  input {
    font-size: 1rem;
    border-style: 1px;
    border-color: 90918a;
  }

  button {
    margin-top: 10px;
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    background-image: -o-linear-gradient(top, #3498db, #2980b9);
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Georgia;
    color: #ffffff;
    font-size: 12px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }
`;
