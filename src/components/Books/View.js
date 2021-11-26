import React from 'react'
import styled from 'styled-components';
import {useParams, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function View() {
    const {id} = useParams();
    const [book, setBook] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        async function getBookData(){
            try{
                const book = await axios.get(`http://localhost:3333/bookData/${id}`);
                // console.log(book.data)
                setBook(book.data);
            }
            catch(error){
                console.error("Something is wrong")
            }
        }
        getBookData();
    },[id]);

    

    function handleClick(){
        history.push('/');
    }
    return (
        <LibList>
              
              <h3> Books Details </h3>
              
              <table className="center">
                  <thead>
                      <tr>
                          <td>
                              Author
                          </td>
  
                          <td>
                              Title
                          </td>
  
                          <td>
                              ISBN
                          </td>
  
                          <td>
                              Release Date  
                          </td>
                      </tr>
                  </thead>
  
                  <tbody>
                      <tr>
                          <td> {book.Author} </td>
                          <td> {book.Title} </td>
                          <td> {book.ISBN} </td>
                          <td> {book.ReleaseDate}</td>
                      </tr>
                  </tbody>
              </table>  

              <button onClick={handleClick}>Back to Home </button>
        </LibList>
    )
}

export default View

const LibList = styled.div`
    text-align: center;
    .center{
        margin-left: auto;
        margin-right: auto;
    }

    .actionIcon{
        margin:5px;
    }
    
    h3{
        color: white;
        background: #f29e29;
        font-size: 1.5rem;
        padding: 3px;
        margin-top:2px;
    }

    button{
        margin-top:10px;
        background: #3498db;
        background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
        background-image: -moz-linear-gradient(top, #3498db, #2980b9);
        background-image: -ms-linear-gradient(top, #3498db, #2980b9);
        background-image: -o-linear-gradient(top, #3498db, #2980b9);
        background-image: linear-gradient(to bottom, #3498db, #2980b9);
        -webkit-border-radius: 10;
        -moz-border-radius: 10;
        border-radius: 10px;
        font-family: Arial;
        color: #ffffff;
        font-size: 10px;
        background: #3498db;
        padding: 10px 20px 10px 20px;
        text-decoration: none;
    }
`