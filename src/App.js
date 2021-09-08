import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./API";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userID) => {
    console.log("delete");
    return setUsers(users.filter((user) => user._id !== userID));
  };
  return (
    <div>
      <SearchStatus users={users} />
      <Users users={users} onDelete={handleDelete} />
    </div>
  );
};

export default App;
