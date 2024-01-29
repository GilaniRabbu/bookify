import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const ViewOrderDetail = () => {
  const params = useParams();
  const firebase = useFirebase();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, []);

  return (
    <div className="container my-2">
      <h1>Orders</h1>
      {orders.map((order) => {
        const data = order.data();
        return (
          <div className="my-3 box">
            <h5 className="mt-2">Book Order Details:</h5>
            <h6>Qty: {data.qty}</h6>
            <p>Email: {data.userEmail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewOrderDetail;
