import React, { useState, useEffect } from "react";
import "./DeliveryQueue.css";

const DeliveryQueue = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/deliverys");
      const result = await response.json();
      setDeliveries(result);
    };

    fetchData();
  }, []);

  return (
    <div className="logistic-queue">
      <table className="delivery-list">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Pick Up Location</th>
            <th>Drop off Location</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.customerId}</td>
              <td>{delivery.customerName}</td>
              <td>{delivery.pickUpLocation}</td>
              <td>{delivery.dropOffLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryQueue;
