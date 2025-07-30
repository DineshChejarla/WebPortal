import React from "react";
import styles from "./User.module.scss";

const UserCard = ({ user, onViewDetails, onEdit, onDelete }) => {
  if (!user) {
    return <div className={styles.error}>User data not available</div>;
  }

  return (
    <div className={styles.userCard} onClick={() => onViewDetails(user.id)}>
      <h2>{user.name || "No name"}</h2>
      <p>
        <strong>Email:</strong> {user.email || "No email"}
      </p>
      <p>
        <strong>Username:</strong> {user.username || "No username"}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone || "No phone"}
      </p>
      <div className={styles.userActions}>
        <button
          className={`${styles.actionBtn} ${styles.editBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            onEdit(user);
          }}
        >
          Edit
        </button>
        <button
          className={`${styles.actionBtn} ${styles.deleteBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
