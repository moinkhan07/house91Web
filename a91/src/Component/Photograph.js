import React, { useState } from "react";
import "../Style/Photograph.css";
import { IoMdCamera } from "react-icons/io";
import { GoVideo } from "react-icons/go";

const Photograph = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  // Handle photo upload
  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = {
          id: Date.now(),
          src: e.target.result,
          alt: file.name,
        };
        setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  };

  // Handle video upload
  const handleAddVideo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newVideo = {
        id: Date.now(),
        src: URL.createObjectURL(file), // Create object URL for the video
        alt: file.name,
      };
      setVideos((prevVideos) => [...prevVideos, newVideo]);
    }
  };

  // Handle photo delete
  const handleDeletePhoto = (id) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
  };

  // Handle video delete with cleanup
  const handleDeleteVideo = (id) => {
    const videoToDelete = videos.find((video) => video.id === id);
    if (videoToDelete) {
      URL.revokeObjectURL(videoToDelete.src); // Revoke the object URL
    }
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };
  const handleReload = (id) => {
    console.log(`Reload photo with ID: ${id}`);
  };
  return (
    <div className="photo-video-container">
      {/* Photo Upload Section */}
      <h1 className="photo-h1">Photos</h1>
      <div className="photo-grid">
        <div className="add-photo-card">
          <input
            type="file"
            accept="image/*"
            id="upload-photo"
            style={{ display: "none" }}
            onChange={handleAddPhoto}
          />
          <label
            htmlFor="upload-photo"
            className="add-photo-label"
            style={{ cursor: "pointer" }}
          >
            <div className="add-photo-icon">
              <IoMdCamera />
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--primary)",
              }}
            >
              Add a Photo
            </p>
          </label>
        </div>
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.src} alt={photo.alt} />
            <button
              className="delete-btn"
              onClick={() => handleDeletePhoto(photo.id)}
            >
              ✖
            </button>
            <button
              className="reload-btn"
              onClick={() => handleReload(photo.id)}
            >
              ↻
            </button>
          </div>
        ))}
      </div>

      {/* Video Upload Section */}
      <h1 className="photo-h1" style={{ marginTop: "26px" }}>
        Video
      </h1>
      <div className="video-grid">
        <div className="add-video-card">
          <input
            type="file"
            accept="video/*"
            id="upload-video"
            style={{ display: "none" }}
            onChange={handleAddVideo}
          />
          <label
            htmlFor="upload-video"
            className="add-video-label"
            style={{ cursor: "pointer" }}
          >
            <div className="add-video-icon">
              <GoVideo />
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--primary)",
              }}
            >
              Add a Video
            </p>
          </label>
        </div>
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <video src={video.src} controls />
            <button
              className="delete-btn"
              onClick={() => handleDeleteVideo(video.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photograph;
