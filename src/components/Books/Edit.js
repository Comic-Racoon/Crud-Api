import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const history = useHistory();
  const [book, setBook] = useState({
    Author: "",
    Title: "",
    ISBN: "",
    ReleaseDate: "",
  });

  useEffect(() => {
    async function getBookData() {
      try {
        const book = await axios.get(`http://localhost:3333/bookData/${id}`);
        // console.log(book.data)
        setBook(book.data);
      } catch (error) {
        console.error("Something is wrong");
      }
    }
    getBookData();
  }, [id]);

  function onTextFieldChange(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/bookData/${id}`, book);
      history.push("/");
    } catch (error) {
      console.log("Something is wrong");
    }
  }

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <Box>
        <h2> Edit Book Info </h2>
      </Box>

      <LibForm>
        <h3> Add Book </h3>
        <form action="">
          <input
            name="Author"
            type="text"
            placeholder="Add the name of Author*"
            className="input-field"
            value={book.Author}
            onChange={(e) => onTextFieldChange(e)}
          />
          <br />

          <input
            name="Title"
            type="text"
            placeholder="Add the Title*"
            className="input-field"
            value={book.Title}
            onChange={(e) => onTextFieldChange(e)}
          />
          <br />

          <input
            name="ISBN"
            type="number"
            placeholder="Add the ISBN*"
            className="input-field"
            value={book.ISBN}
            onChange={(e) => onTextFieldChange(e)}
          />
          <br />

          <input
            name="ReleaseDate"
            type="text"
            placeholder=" Release Date"
            className="input-field"
            value={book.ReleaseDate}
            onChange={(e) => onTextFieldChange(e)}
          />
          <br />

          <button onClick={(e) => onFormSubmit(e)}> Update List </button>

          <button onClick={handleClick}>Back to Home </button>
        </form>
      </LibForm>
    </>
  );
}

export default Edit;

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
