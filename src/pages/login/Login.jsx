import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt a sunt! Error quos quisquam corrupti minima, deserunt quaerat unde. Pariatur et voluptatibus porro. Debitis asperiores voluptatibus velit culpa magnam.</p>
                    <span>Crie sua conta!</span>
                    <button>Cadastre-se</button>
                </div>
                <div className="right"></div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha"/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login