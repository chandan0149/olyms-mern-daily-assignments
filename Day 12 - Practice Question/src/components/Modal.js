import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "40%",
        background: "white",
        padding: "20px",
        border: "2px solid black",
        boxShadow: "0px 0px 10px gray",
      }}
    >
      {children}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;