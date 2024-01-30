import './posts.scss';
import Post from '../post/Post';

const Posts = () => {
  //
  const posts = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui.',
      img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'John Doe',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui.',
      img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'John Doe',
      userId: 3,
      profilePic:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui.',
      img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'John Doe',
      userId: 4,
      profilePic:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui.',
      img: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
