import React from "react";
const Qualite = ({ user }) => {
  return (
    <>
      {user.qualities.map((item) => (
        <span key={item._id} className={"badge m-1 bg-" + item.color}>
          {item.name}
        </span>
      ))}
    </>
  );
};

export default Qualite;
