import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Rating from '../ui/Rating';
import Price from '../ui/Price';
import Book from '../ui/book';

const BookInfo = ({books, addToCart, cart}) => {
  
  const {id} = useParams();
  const book = books.find(book => book.id === +id)
  
  function addBookToCart(book) {
    addToCart(book)
  }

  function boookExists() {
    return cart.find(book => book.id === +id)
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__Link">
                <FontAwesomeIcon style={{ color: "black" }} icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__Link">
                <h2
                  style={{ color: "black" }}
                  className="book__selected--title--top"
                >
                  Books
                </h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img alt = "Book"src={book.url} className="book__selected--img"></img>
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    salesPrice={book.salesPrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates assumenda sapiente suscipit nihil, quae accusamus
                    provident voluptas veritatis molestias esse excepturi
                    incidunt est a possimus praesentium eaque doloremque numquam
                    nobis.
                  </p>
                </div>
                {
                  boookExists() ? (<Link to="/cart">
                  <button className="btn">Checkout</button>
                  </Link>)
                  : (<button className="btn" onClick={() => addBookToCart(book)}>Add To Cart</button>)
                }
                
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id).slice(0,4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
