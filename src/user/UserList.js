import React from "react";
import UserCard from "./UserCard";
import styles from "./User.module.scss";

const UserList = ({ users, onViewDetails, onEdit, onDelete }) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.userListHeader}>
        <h1>User Management</h1>
      </div>
      <div className={styles.usersGrid}>
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onViewDetails={onViewDetails}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className={styles.noResults}>No users found</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
