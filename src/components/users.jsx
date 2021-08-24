import React, { useState } from "react";
import API from "../API";
const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const renderPhrase = (number) => {
    number = users.length;
    let inc = String(number);
    inc = inc.slice(inc.length - 1, inc.length);
    let del = Number(inc);
    if (del === 0) {
      return "Никто с тобой не тусанёт";
    } else if (del > 1 && del < 5) {
      return `${number} человека тусанут с тобой сегодня`;
    } else {
      return `${number} человек тусанёт с тобой сегодня`;
    }
  };
  const handleDelete = (userID) => {
    return setUsers(users.filter((user) => user._id !== userID));
  };
  return (
    <>
      <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
        {renderPhrase()}
      </span>
      {users.length > 0 && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Кол-во встреч</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      key={item._id}
                      className={"badge m-1 bg-" + item.color}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
