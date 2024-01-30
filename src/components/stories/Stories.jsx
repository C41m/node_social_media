import './stories.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Stories = () => {
  
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/19798304/pexels-photo-19798304/free-photo-of-arquitetura-ponte-espaco-construcao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/19798304/pexels-photo-19798304/free-photo-of-arquitetura-ponte-espaco-construcao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/19798304/pexels-photo-19798304/free-photo-of-arquitetura-ponte-espaco-construcao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'https://i.pinimg.com/564x/47/14/4b/47144be735f48cdf694b9b0a724272e9.jpg',
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
