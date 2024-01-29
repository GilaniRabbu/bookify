import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const BookDetailPage = () => {
  const params = useParams();
  const firebase = useFirebase();

  const [qty, setQty] = useState(1);
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getBookById(params.bookId).then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);

  const placeOrder = async () => {
    const result = await firebase.placeOrder(params.bookId, qty);
  };

  if (data == null) {
    return <h1 className="container my-3">Loading...</h1>;
  }

  return (
    <div className="container my-5">
      <h1>{data.name}</h1>
      <img src={url} className="view-img" />
      <h1 className="my-2">Details</h1>
      <p className="h5">Price: ${data.price}</p>
      <p className="h5">ISBN Number: {data.isbn}</p>
      <h1 className="my-2">Owner Details</h1>
      <p className="h5">Name: {data.displayName}</p>
      <p className="h5">Email: {data.userEmail}</p>
      <Form.Group className="mb-3" controlId="formBasicDesc">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          type="Number"
          placeholder="Enter Quantity"
        />
      </Form.Group>
      <Button onClick={placeOrder} variant="success" className="my-2">
        Buy Now
      </Button>
    </div>
  );
};

export default BookDetailPage;
