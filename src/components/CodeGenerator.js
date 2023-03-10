import React, { useState } from "react";

export default function CodeGenerator(props) {
  return (
    <div className="container mt-1">
    <p
      className="text-center fs-1 mt-1"
      style={{
        fontFamily: "Rampart One, cursive",
       color: props.theme === "primary" ? "#0d6efd" : "white",
      }}
    >
      QR Code Generator
    </p>
</div>
  )
}
