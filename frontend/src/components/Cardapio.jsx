import NavBar from "./NavBar"
import { useEffect, useState } from "react";
import { getLoggedUser } from "../services/auth";
import { createPedido } from "../API/axiosPedidos";

export default () => {

    const [bolos, setBolos] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const [pedido, setPedido] = useState({
        cakename: '',
        price: "",
        client: '',
        clientNumber: "",
        description: ""
    })
    const [username, setUsername] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [descricaoPorCard, setDescricaoPorCard] = useState({});
   


    useEffect(() => {
        fetch("/cakes.json")     
            .then(res => res.json())
            .then(data => setBolos(data));

        const user = getLoggedUser()
        setUsername(user.username)
        setUserPhone(user.phone)
    }, []);


    const handlePedido = (id) => {
        setActiveCard(id);
    }

    const handleCancel = () => {
        setActiveCard(null);
    }

    const handleSubmit = async () => {
        try{
            if(pedido.description == "" || pedido.description == undefined) alert("preencha o campo de descrição")
            if(pedido.description !== ""){
                const response = await createPedido(pedido)
                alert("pedido gerado")
                setPedido({
                    cakename: "",
                    price: "",
                    client: "",
                    clientNumber: "",
                    description: ""
                })
            }

        }catch(err){
            console.log(err)
        }
    }


    return(
        <NavBar>
            <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bolos.map((bolo) => (
                <div
                    key={bolo.id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 duration-300"
                >
                <img
                    src={bolo.imagem ? `/cakes-img/${bolo.imagem}` : "https://placehold.co/300x200"}
                    alt={bolo.nome}
                    className="w-full h-40 object-cover"
                />

                <div className="p-5">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                        {bolo.nome}
                    </h2>

                    <p className="text-gray-700 mb-4">{bolo.descricao}</p>

                    <p className="text-xl font-bold text-green-700">
                        R$ {bolo.preco.toFixed(2)}
                    </p>


                    {activeCard === bolo.id ? (
                        <div>
                            <label className="text-medium mt-5 flex flex-col">
                                Descrição:
                                <textarea 
                                    className="border-1 border-pink-200 rounded-2xl w-full text-start h-40"
                                    placeholder="Coloque a Data e Hora que deseja buscar seu bolo!"
                                    value={descricaoPorCard[bolo.id] || ""}
                                    onChange={(e) => {
                                        setDescricaoPorCard({
                                            ...descricaoPorCard,
                                            [bolo.id]: e.target.value
                                        })
                                        setPedido({
                                            ...pedido,
                                            description: e.target.value || ""
                                        })
                                    }}
                                />
                            </label>

                            <button
                                onClick={() => {
                                    if(pedido.description == "" || pedido.description == undefined){
                                        handleCancel()                                       
                                    }else{
                                        handleSubmit()
                                    }
                                }}
                            
                                className="mt-4 w-full bg-pink-300 hover:bg-pink-500 text-white font-medium py-2 rounded-lg duration-300"
                            >
                                {pedido.description == "" || pedido.description == undefined ? "Cancelar" : "Finalizar"}
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                handlePedido(bolo.id)
                                setPedido({
                                    cakename: bolo.nome,
                                    price: bolo.preco.toFixed(2),
                                    client: username,
                                    clientNumber: userPhone,
                                })
                            }}
                            className="mt-4 w-full bg-pink-300 hover:bg-pink-500 text-white font-medium py-2 rounded-lg duration-300"
                        >
                            Fazer pedido
                        </button>
                    )}
                </div>
            </div>
            ))}
            </section>
        </NavBar>
    )
}
