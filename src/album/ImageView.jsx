import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ImageView = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://picsum.photos/id/${id}/info`);
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  if (loading)
    return <p style={{ textAlign: "center", color: "#555" }}>Loading...</p>;
  if (!imageData)
    return <p style={{ textAlign: "center", color: "red" }}>Image not found</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Link
        to="/album"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "#2c3e50",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        ← Back to Browse
      </Link>

      <h2 style={{ fontSize: "1.8rem", color: "#2c3e50", fontWeight: "700" }}>
        {imageData.author}
      </h2>

      <img
        src={imageData.download_url}
        alt={imageData.author}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "20px 0",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        }}
      />

      <p>
        <strong>Album ID:</strong> 1
      </p>
      <p>
        <strong>ID:</strong> {imageData.id}
      </p>
    </div>
  );
};

export default ImageView;
