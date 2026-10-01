import { useState } from 'react';

function Card({ 
  bannerImg, 
  avatarImg, 
  name, 
  username, 
  description, 
  initialLikes 
}) {
  // State untuk interaksi tombol Like dengan emotikon Love
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="profile-card">
      {/* 1. Banner Section */}
      <div 
        className="card-banner" 
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>

      <div className="card-content">
        {/* 2. Avatar Section (Tombol Edit dihapus) */}
        <div className="card-header-top">
          <img src={avatarImg} alt={name} className="profile-avatar" />
        </div>

        {/* 3. Name Section (Tombol Follow dan Chat dihapus) */}
        <div className="card-main-info">
          <div className="user-titles">
            <h2 className="user-name">
              {name} 
            </h2>
            <p className="user-handle">{username}</p>
          </div>
        </div>

        {/* 4. About Section (Sekarang Rata Kiri) */}
        <div className="card-about">
          <h4>About</h4>
          <p>{description}</p>
        </div>

        {/* 5. Like Button & Text Section (Menggantikan section stats) */}
        <div className="card-like-section">
          <button className="btn-like-love" onClick={handleLike}>
            ❤️
          </button>
          {/* Teks jumlah like, diformat agar ada titik ribuannya misal: 124.000 */}
          <span className="like-text">{likes.toLocaleString('id-ID')} telah disukai</span>
        </div>
      </div>
    </div>
  );
}

export default Card;