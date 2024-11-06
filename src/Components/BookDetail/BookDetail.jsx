import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();

    const id = parseInt(bookId);

    //console.log(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    console.log(book);


    const {bookId: currentBookId, image} = book;



    //console.log(data);

    return (
        <div className='my-12'>
            <h2>Book details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button className="btn btn-outline mr-4 btn-accent">Read</button>
            <button className="btn btn-accent">WishList</button>
        </div>
    );
};

export default BookDetail;

