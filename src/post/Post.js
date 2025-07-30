import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Post.module.scss";
import FullPostView from "./FullPostView";
import  Header from "../header/Header";
import Footer from "../footer/Footer";

const Post = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          setCurrentPost(res.data);
        } else {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setAllPosts(res.data);
          setFilteredPosts(res.data);
        }
      } catch {
        console.error("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
      setCurrentPage(1);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [searchQuery, allPosts]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setDisplayedPosts(filteredPosts.slice(indexOfFirstPost, indexOfLastPost));
  }, [filteredPosts, currentPage, postsPerPage]);

  const handleViewDetails = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleDelete = (postId) => {
    setAllPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  const handleBack = () => {
    navigate("/post");
    setCurrentPost(null);
  };

  if (loading)
    return <p className={styles["post-loading"]}>Loading posts...</p>;

  return (
    <div className={styles["post-container"]}>
      {currentPost ? (
        <FullPostView post={currentPost} onBack={handleBack} />
      ) : (
        <>
        <Header />
          <h2>Post Management</h2>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
          />

          {filteredPosts.length === 0 ? (
            <p className={styles["post-error"]}>
              No posts found for "{searchQuery}"
            </p>
          ) : (
            <div className={styles["post-list-container"]}>
              {displayedPosts.map((post) => (
                <div
                  key={post.id}
                  className={styles["post-card"]}
                  onClick={() => handleViewDetails(post.id)}
                >
                  <h4>{post.title.slice(0, 30)}...</h4>
                  <p>ID: {post.id}</p>
                  <p>
                    <strong>User ID:</strong> {post.userId}
                  </p>
                  <div className={styles["post-details"]}>
                    {post.body.slice(0, 60)}...
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(post.id);
                      }}
                    >
                      View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(post.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredPosts.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
              totalItems={filteredPosts.length}
              itemsPerPage={postsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={() => {}}
              showPageSizeOptions={false}
            />
          )}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Post;
