import React from 'react';
import {books} from '../data'
import Book from '../ui/book';

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Discounted <span className="purple">Books</span>
            </h2>
          </div>
          <div className="books">
            {books
              .filter((book) => book.salePrice !== null)
              .map((book) => <Book book={book} key={book.id} />)
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
