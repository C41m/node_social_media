import './leftBar.scss';
import Friends from '../../assets/amigos.png';
import Groups from '../../assets/grupo.png';
import Market from '../../assets/market.png';
import Video from '../../assets/video.png';
import Memories from '../../assets/memorias.png';
import Events from '../../assets/eventos.png';
import Gaming from '../../assets/controle.png';
import Gallery from '../../assets/galeria.png';
import Messages from '../../assets/mensagens.png';
import Donation from '../../assets/doacao.png';


const leftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
            // src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // alt=""
            />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Video} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memórias</span>
          </div>
          <div className="item">
            <img src={Events} alt="" />
            <span>Eventos</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Jogos</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Galeria</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Mensagens</span>
          </div>
          <div className="item">
            <img src={Donation} alt="" />
            <span>Doaçao</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default leftBar;
