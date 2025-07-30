import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchbar/SearchBar";

const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setAllUsers(res.data);
        setFilteredUsers(res.data);
      } catch (err) {
        console.error("Error fetching users");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    if (query) {
      setFilteredUsers(
        allUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.username.toLowerCase().includes(query)
        )
      );
    } else {
      setFilteredUsers(allUsers);
    }
    setCurrentPage(1);
  }, [searchQuery, allUsers]);

  useEffect(() => {
    const indexOfLast = currentPage * usersPerPage;
    const indexOfFirst = indexOfLast - usersPerPage;
    setDisplayedUsers(filteredUsers.slice(indexOfFirst, indexOfLast));
  }, [filteredUsers, currentPage, usersPerPage]);

  const handleEdit = (user) => {
    const newName = prompt("Edit user name:", user.name);
    if (newName && newName.trim() !== "") {
      setAllUsers((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, name: newName } : u))
      );
    }
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setAllUsers((prev) => prev.filter((u) => u.id !== userId));
    }
  };

  return (
    <>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search users..."
      />

      <UserList
        users={displayedUsers}
        onViewDetails={(id) => navigate(`/user/${id}`)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {filteredUsers.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
          onPageChange={setCurrentPage}
          totalItems={filteredUsers.length}
          itemsPerPage={usersPerPage}
          onItemsPerPageChange={setUsersPerPage}
        />
      )}
    </>
  );
};

export default User;
