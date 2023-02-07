import React, { useState } from "react";
import "./Planner.css";

const Planner = () => {
  const [planner, setPlanner] = useState({});

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = getDates();

  const handleDrop = (e, date, slot) => {
    e.preventDefault();
    const delivery = JSON.parse(e.dataTransfer.getData("delivery"));
    setPlanner((prevPlanner) => ({
      ...prevPlanner,
      [date]: {
        ...prevPlanner[date],
        [slot]: delivery,
      },
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="planner">
      <table className="planner-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Slot 1</th>
            <th>Slot 2</th>
            <th>Slot 3</th>
            <th>Slot 4</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date) => (
            <tr key={date}>
              <td>{date.toDateString()}</td>
              <td
                onDrop={(e) => handleDrop(e, date, "slot1")}
                onDragOver={handleDragOver}
              >
                {planner[date] && planner[date].slot1
                  ? planner[date].slot1.customerName
                  : ""}
              </td>
              <td
                onDrop={(e) => handleDrop(e, date, "slot2")}
                onDragOver={handleDragOver}
              >
                {planner[date] && planner[date].slot2
                  ? planner[date].slot2.customerName
                  : ""}
              </td>
              <td
                onDrop={(e) => handleDrop(e, date, "slot3")}
                onDragOver={handleDragOver}
              >
                {planner[date] && planner[date].slot3
                  ? planner[date].slot3.customerName
                  : ""}
              </td>
              <td
                onDrop={(e) => handleDrop(e, date, "slot4")}
                onDragOver={handleDragOver}
              >
                {planner[date] && planner[date].slot4
                  ? planner[date].slot4.customerName
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Planner;
