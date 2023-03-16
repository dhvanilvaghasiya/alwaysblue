import React, { useState } from "react";

export default function Noteskeeper(props) {
  return (
    <>
      <div className="container mt-1">
        <p
          className="text-center fs-1 mt-1"
          style={{
            fontFamily: "Rampart One, cursive",
            color: props.theme === "primary" ? "#0d6efd" : "white",
          }}
        >
          Notes Keeper
        </p>
      </div>
    </>
  );
}
