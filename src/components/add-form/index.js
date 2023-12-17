import "./add-form.css";
import React, { useState } from "react";
import { categories } from "../../constants/add-expense.js";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./success-modal";

const AddForm = () => {
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter valis data!");
      notify();
      return;
    }

    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    setModalOpen(true);
    dispatch(addExpense(data));  
  };

  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <SuccessModal ModalOpen={ModalOpen} setModalOpen={setModalOpen} />

      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          className="amount-input"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div
          className="category"
          
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <div className="category-dropdown">
            <label>{category ? category.title : "Category"}</label>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon.default} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
