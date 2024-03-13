import React from 'react';
import SingleBook from './SingleBook';

const BooksList = ({ books }) => {
  return (
    <div className="container" >
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 g-4">
      {books.map(book => (
        <div className="col mx-auto" key={book.asin}>
          <SingleBook book={book} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default BooksList;

