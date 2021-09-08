import React from "react";
import Qualite from "./qualite";
import Bookmark from "./bookmark";

const User = ({ user, onDelete }) => {
  return (
    <tbody>
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          <Qualite user={user} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td className="marks">
          <Bookmark user={user} status={false} />
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
            delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
