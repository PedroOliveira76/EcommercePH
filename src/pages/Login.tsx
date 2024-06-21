

const Login = () => {
  return (
    <div className="screenLog">
        <div className="cardLogin">

            <div className="">
              <h1>Login</h1>
            </div>

            <div className="content">
              <div className="labelInput">
                <label htmlFor="">Email:</label>
                <input type="text" />
              </div>

              <div className="labelInput">
                <label htmlFor="">Senha:</label>
                <input type="text" />
              </div>
              <div className="">
                <button>Entrar</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login