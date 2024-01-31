import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/AuthContext';

const Comments = () => {

  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aspernatur necessitatibus totam labore temporibus earum.',
      name: 'John Doe',
      userId: 1,
      profilePicture:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui architecto nam iusto nulla consequuntur assumenda blanditiis atque sapiente minima, unde, mollitia quisquam exercitationem, dolorem optio asperiores tempora voluptatum quam earum beatae omnis delectus hic! Molestias.',
      name: 'John Doe',
      userId: 2,
      profilePicture:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aspernatur necessitatibus totam labore temporibus earum.',
      name: 'John Doe',
      userId: 3,
      profilePicture:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='Comente...' />
        <button>Enviar</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
            <span className="date">1 hora atrás</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
