import React from "react";
import "./Pagination.css";

const pagination = () => {
  return (
    <div className="center">
      <div className="pagination">
        <button href="#">&laquo;</button>
        <button href="#" className="active">
          1
        </button>
        <button href="#">2</button>
        <button href="#">3</button>
        <button href="#">4</button>
        <button href="#">5</button>
        <button href="#">6</button>
        <button href="#">&raquo;</button>
      </div>
    </div>
  );
};

export default pagination;
