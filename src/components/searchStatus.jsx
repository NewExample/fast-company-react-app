import React from "react";
const SearchStatus = ({ users }) => {
  const renderPhrase = (number) => {
    number = users.length;
    let inc = String(number);
    inc = inc.slice(inc.length - 1, inc.length);
    let del = Number(inc);
    if (del === 0 && number === 0) {
      return "Никто с тобой не тусанёт";
    } else if (del > 1 && del < 5) {
      return `${number} человека тусанут с тобой сегодня`;
    } else {
      return `${number} человек тусанёт с тобой сегодня`;
    }
  };
  return (
    <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
      {renderPhrase()}
    </span>
  );
};

export default SearchStatus;
