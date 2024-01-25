import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Rede Social</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt a sunt! Error quos quisquam corrupti minima, deserunt quaerat unde. Pariatur et voluptatibus porro. Debitis asperiores voluptatibus velit culpa magnam.</p>
          <span>Faça o Login!</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registre-se</h1>
          <form>
            <input type="text" placeholder="Usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="Nome" />
            <button>Registre-se</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register