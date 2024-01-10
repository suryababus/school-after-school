import React from "react";

const DataWidget: React.FC = () => {
  const cssBlock =
    "text-white flex flex-col items-center pl-10 width-20 border-l-4 border-white w-1/4";
  const cssNoBorder =
    "text-white flex flex-col items-center pl-10 width-20 border-white w-1/4";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "80%",
        marginLeft: "10%",
        borderRadius: "10px",
        marginBottom: "40px",
        backgroundColor: "#FD6B00",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div className={`${cssNoBorder}`}>
          <div className="text-3xl font-extrabold pb-2 mb-2">400</div>
          <div>Students</div>
        </div>
        <div className={`${cssBlock}`}>
          <div className="text-3xl font-extrabold pb-2">5000+</div>
          <div>Classes</div>
        </div>
        <div className={`${cssBlock}`}>
          <div className="text-3xl font-extrabold pb-2">100+</div>
          <div>Teachers</div>
        </div>
        <div className={`${cssBlock} `}>
          <div className="text-3xl font-extrabold pb-2">50000</div>
          <div>Meals</div>
        </div>
      </div>
    </div>
  );
};

export default DataWidget;
