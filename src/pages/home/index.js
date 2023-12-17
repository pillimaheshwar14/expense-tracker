import React from "react";
import "./home.css";
import ExpenseList from "../../components/expense-list";
import TopFold from "../../components/topfold";

const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
