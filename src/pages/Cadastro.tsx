const Cadastro = () => {
  return (
    <div className="screenCad">
      <div className="cardLogin">

        <div className="">
          <h1>Cadastrar</h1>
        </div>

        <div className="content">

          <div className="labelInput">
            <label htmlFor="">NickName:</label>
            <input type="text" />
          </div>

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

export default Cadastro