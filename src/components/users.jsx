import React from "react";
import User from "./user";
const Users = ({ users, onDelete }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Кол-во встреч</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {users.map((user) => (
            <User key={user._id} user={user} onDelete={onDelete} />
          ))}
        </table>
      )}
    </>
  );
};

export default Users;
