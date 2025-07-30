import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Album.module.scss";

const Album = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cached = sessionStorage.getItem("cachedPhotos");
    if (cached) {
      const data = JSON.parse(cached);
      setPhotos(data);
      setFilteredPhotos(data);
      setLoading(false);
    } else {
      fetch("https://picsum.photos/v2/list?page=1&limit=100")
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data);
          setFilteredPhotos(data);
          sessionStorage.setItem("cachedPhotos", JSON.stringify(data));
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }

    return () => {
      sessionStorage.clear();
    };
  }, []);

  useEffect(() => {
    const filtered = photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPhotos(filtered);
    setCurrentPage(1);
  }, [searchQuery, photos]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <p className={styles["album-loading"]}>Loading...</p>;
  if (!photos || photos.length === 0)
    return <p className={styles["album-error"]}>Image not found</p>;

  return (
    <div className={styles["album-container"]}>
      <h2>Image Album</h2>

      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search users..."
      />

      {!loading && filteredPhotos.length === 0 && (
        <p className={styles["album-error"]}>
          No photos found for "{searchQuery}"
        </p>
      )}

      <div className={styles["card-grid"]}>
        {currentItems.map((photo) => (
          <Link
            to={`/album/${photo.id}`}
            className={styles["album-card"]}
            key={photo.id}
          >
            <img
              src={`https://picsum.photos/id/${photo.id}/200/200.jpg`}
              alt={photo.author}
            />
            <div className={styles["card-body"]}>
              <h4>{photo.author?.slice(0, 20)}...</h4>
              <p>ID: {photo.id}</p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPhotos.length / itemsPerPage)}
        totalItems={filteredPhotos.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={() => {}}
        showPageSizeOptions={false}
      />
    </div>
  );
};

export default Album;
