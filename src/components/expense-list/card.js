import React from "react";
import moment from "moment";
import "./card.css";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

const Card = ({ item ,  notifySuccess}) => {
  const time = moment(item.createdAt).fromNow();
  const dispath = useDispatch();
  const handleDelete =()=>{
    dispath(deleteExpense(item));
    notifySuccess();
  }
  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}`,  }}
    >
      <div className="card-image-container">
        <img
          style={{height:"40px"}}
          src={item.category.icon.default}
          alt={item.category.title} 
          className="card-image"
        />
      </div> 
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete} >
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
