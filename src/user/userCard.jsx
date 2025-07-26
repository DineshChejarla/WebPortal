// import React from "react";
// import "./User.css";

// const UserCard = ({ user, onCardClick, onEdit, onDelete }) => {
//   const handleEditClick = (e) => {
//     e.stopPropagation();
//     onEdit(user);
//   };

//   const handleDeleteClick = (e) => {
//     e.stopPropagation();
//     onDelete(user.id);
//   };

//   return (
//     <div className="user-card" onClick={() => onCardClick(user)}>
//       <h2>{user.name}</h2>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
//       <p>
//         <strong>Username:</strong> {user.username}
//       </p>
//       <p>
//         <strong>Phone:</strong> {user.phone}
//       </p>
//       <div className="user-actions" onClick={(e) => e.stopPropagation()}>
//         <button onClick={handleEditClick} className="edit-btn">
//           Edit
//         </button>
//         <button onClick={handleDeleteClick} className="delete-btn">
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import React from "react";
import "./User.css";

const UserCard = ({ user, onClick, onEdit, onDelete }) => {
  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit(user);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(user.id);
  };

  return (
    <div className="user-card" onClick={() => onClick(user)}>
      <div className="card-header">
        <div className="user-avatar">{user.name.charAt(0)}</div>
        <div className="card-header-text">
          <h3>{user.name}</h3>
          <p className="user-email">{user.email}</p>
        </div>
      </div>

      <div className="card-body">
        <p>
          <span>👤</span> {user.username}
        </p>
        <p>
          <span>📞</span> {user.phone}
        </p>
      </div>

      <div className="card-actions" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleEditClick} className="edit-btn">
          ✏️ Edit
        </button>
        <button onClick={handleDeleteClick} className="delete-btn">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
