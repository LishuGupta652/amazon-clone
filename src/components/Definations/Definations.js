import React from "react";
import "./Definations.css";

const Definations = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) => {
          console.log(mean);
        })
      )}
    </div>
  );
};

export default Definations;
