import React from 'react';

const BooksGrid = ({ books }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">
      {books.map(book => (
        <div className="col" key={book.asin}>
          <div className="card h-100 position-relative shadow-sm">
            <img src={book.img} className="card-img-top"  alt={book.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">Price: ${book.price}</p>
              <p className="card-text">Category: {book.category}</p>
              <button className="btn btn-info mt-auto">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksGrid;
