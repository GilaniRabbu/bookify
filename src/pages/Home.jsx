import React, { useContext, useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Cards";
import CardGroup from "react-bootstrap/CardGroup";

const HomePage = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, []);

  return (
    <div className="container my-3">
      <a href="/login" className="log-title">
        Log Out
      </a>
      <CardGroup>
        {books.map((book) => (
          <BookCard
            link={`https://gilani-ra-bookify.netlify.app/book/view/${book.id}`}
            key={book.id}
            id={book.id}
            {...book.data()}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;
