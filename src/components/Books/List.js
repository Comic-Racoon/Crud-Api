import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {

    const[books, setBooks] = useState([]);
    
    useEffect(()=>{
        async function getBookData(){
        try{
            const books = await axios.get("http://localhost:3333/bookData");
            // console.log(books.data)
            setBooks(books.data);
        }
        catch(error){
            console.error("Something is wrong")
        }
    }
        getBookData();
    })

    const handleDelete = async id => {
        await axios.delete(`http://localhost:3333/bookData/${id}`);
        var newbook = books.filter((item)=>{
            return item.id !== id;

        })
        setBooks(newbook);
    }

    return (
        <>

            <LibList>
              
            <h3> Books List </h3>
            
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

                        <td>
                            Action  
                        </td>
                    </tr>
                </thead>

                <tbody>
                    {
                        books.map((book, i )=>{
                            return(
                                <tr key={i}>
                                    <td>{book.Author} </td>
                                    <td> {book.Title} </td>
                                    <td> {book.ISBN} </td>
                                    <td> {book.ReleaseDate}</td>
                                    <td>
                                        <Link to={`/view/${book.id}`}>                               
                                            <FontAwesomeIcon icon={faEye} className="actionIcon"/>
                                        </Link>

                                        <Link to={`/edit/${book.id}`}>
                                            <FontAwesomeIcon icon={faEdit} className="actionIcon"/>                                    
                                        </Link>
                                        <button onClick={()=> handleDelete(book.id)}>
                                            <FontAwesomeIcon icon={faTrashAlt} className="actionIcon"/>

                                        </button>
                                       
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>  
            </LibList>
        </>
    )
}

export default List

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
        background: #e5e529;
        font-size: 1.5rem;
        padding: 3px;
        margin-top:2px;
    }
`