import './post.scss';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min atrás</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon className="icon" />
            ) : (
              <FavoriteBorderOutlinedIcon className="icon" />
            )}
            <span>12 Gostei</span>
          </div>
          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <ChatOutlinedIcon className="icon" />
            <span>12 Comentários</span>
          </div>
          <div className="item">
            <ShareIcon className="icon" />
            <span>12 Compartilhamentos</span>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
