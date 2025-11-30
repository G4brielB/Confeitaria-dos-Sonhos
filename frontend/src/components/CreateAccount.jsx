import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { useState } from "react"
import { createUser } from "../API/axiosUsers"

export default () => {

    const [account, setAccount] = useState({
        username: '',
        email: '',
        phone: '',
        senha: ''
    })
    const [view, setView] = useState(true)
    const [viewPassword, setViewPassword] = useState("password")

    const handleChange = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        })
    }

    const handleView = (bool) => {
        setView(bool)
        handlePassword()
    }

    const handlePassword = () => {
        if(view) {setViewPassword("text")}
        if(view == false) {setViewPassword("password")}     
    }

    const handleSubmit = async () => {
        await createUser(account)
        alert("usuario criado!")
        setAccount({
            username: '',
            email: '',
            phone: '',
            senha: ''            
        })
    }

    return(
        <NavBar>
            <section className="flex justify-center items-center w-screen h-screen z-0">
                <div className="shadow-2x1 flex flex-col border-1 border-black p-10 rounded-2xl">
                    <h1 className="text-center text-4xl mb-10">Crie sua conta!</h1>

                    <label className="text-xl mb-10 flex flex-col justify-start items-start">Nome:
                        <input type="text" name="username" value={account.username} onChange={handleChange} className="border-1 border-purple-200 rounded-2xl ml-5 h-10 w-sm mx-5 px-4 mt-5"/>
                    </label>

                    <label className="text-xl mb-10 flex flex-col justify-start items-start">Email:
                        <input type="email" name="email" value={account.email} onChange={handleChange}
                            className="border-1 border-purple-200 rounded-2xl ml-5 h-10 w-sm mx-5 px-4 mt-5 "
                            placeholder="email@exemplo.com"
                        />
                    </label>

                    <label className="text-xl mb-10 flex flex-col justify-start items-start">Telefone: 
                        <input type="text" name="phone" value={account.phone} onChange={handleChange} className="border-1 border-purple-200 rounded-2xl ml-5 h-10 w-sm mx-5 px-4 mt-5" />
                    </label>

                    <label className="text-xl flex flex-col relative">Senha: 
                        <input type={viewPassword} name="senha" value={account.senha} onChange={handleChange}
                            className="border-1 border-purple-200 rounded-2xl ml-5 h-10 w-sm mt-5 px-4"
                            
                        />


                    {view ?
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-14 right-8 hover:cursor-pointer" onClick={() => handleView(false)} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  absolute top-14 right-8 hover:cursor-pointer" onClick={() => handleView(true)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>}

                    </label>

                    <button className="mt-10 bg-pink-200 p-5 rounded-2xl text-xl text-pink-700 hover:bg-pink-700 hover:text-pink-50 duration-300 ease-in-out hover:cursor-pointer" onClick={handleSubmit}>Criar</button>
                    <Link to="/login" className="mt-10 text-center text-blue-500 text-lg">Já possuo uma conta!</Link>
                </div>
            </section>
        </NavBar>
    )
}