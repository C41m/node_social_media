import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {
  const { toggle } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>CaioSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: 'pointer' }} />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Procurar..." />
        </div>
      </div>
      <div className="right">
        <AccountCircleOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
