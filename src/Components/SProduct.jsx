import React from "react";

const SProduct = ({Image, Description}) => {
  return (
    <div className="card shadow-sm">
      <img src={Image} alt="" style={{height: "200px", width:"100%", objectFit: "cover"}}/>
      <div className="card-body">
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default SProduct;
