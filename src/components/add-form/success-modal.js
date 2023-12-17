import React from "react";
import "./success-modal.css";
import Modal from "react-modal";
// import successFullyPic from "../../image/success.jpg"

import { Link } from "react-router-dom";

const SuccessModal = ({ ModalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      backgroundColor: "#71ccca",
    },
  };

  return (
    <Modal isOpen={ModalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          src={require("../../Images/successfully.jpg")}
          alt="Expense Added"
          className="added-image"
        />{" "}
        <Link to="/">
          <div className="take-home-button">
            <i class="fa-solid fa-house"> Home</i>
          </div>
        </Link>
      </div>
    </Modal>
  );
};
export default SuccessModal;
