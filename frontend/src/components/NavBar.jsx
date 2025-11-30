import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getLoggedUser, logoutUser } from "../services/auth"


export default (props) => {

    const [account, setAccount] = useState(false)
    const [accountName, setAccountName] = useState({})

    
      useEffect(() => {
        const user = getLoggedUser();
        if (user) {
            setAccount(true);
            setAccountName(user.username);
        }
  }, []);

    const handleLogout = () => {
        logoutUser();
        window.location.reload();
    };
    



    return(
        <div className=" z-10 w-screen">
            <header className="flex justify-around items-center bg-pink-300 h-18 text-xl">
                <img src="./" alt="logomarca" />
                <nav>
                    <ul className="flex gap-6">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/cardapio">Cardápio</Link></li>
                        <li><Link to="/pedidos">Seus pedidos</Link></li>
                    </ul>
                </nav>
                <div>
                    {account ? <div className="flex gap-3 items-center">
                        <img className="w-15 rounded-4xl mr-5 " src="/src/assets/picUser.jpg" alt="perfil" />
                        <p className="text-xl text-white font-bold px-5">{accountName}</p>
                        <button className="text-red-700 px-8 py-4 rounded-3xl bg-red-400 cursor-pointer" onClick={handleLogout}>Sair</button>
                    </div> : 
                    <div className="flex gap-4">
                        <Link className="bg-pink-200 rounded-2xl text-pink-700 p-4 m-2 hover:bg-pink-300 hover:text-white duration-300 ease-in" to="/login">Entrar</Link>
                        <Link className="p-4 m-2 text-white border-2 border-pink-700 rounded-2xl hover:bg-pink-200 hover:text-pink-700 hover:border-none duration-300 ease-in" to="/createaccout">Criar Conta</Link>
                    </div>
                    }
                </div>
            </header>
            {props.children}
        </div>
    )
}