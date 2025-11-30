import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import { getAllPedidos } from "../API/axiosPedidos"
import { getLoggedUser } from "../services/auth"

export default () => {

    useEffect( () => {
        try{
            async function setOrder() {
                const order = await getAllPedidos()
                const userLogged = getLoggedUser()

                if(userLogged.email != "karla@gmail.com" && userLogged.usename != "karla"){
                    const pedido = order.data.filter((u) => 
                        u.clientNumber === userLogged.phone
                    )
                    return setPedido(pedido)
                }else{
                    return setPedido(order.data)
                }
                
                
            } 
            setOrder()
            
        }catch(err){console.log(err)}
    },[])
    
    const [pedido, setPedido] = useState([])

    console.log(pedido)

    return(
        <NavBar>
            <section className="w-full px-6 py-10 bg-pink-50">
            <h2 className="text-2xl font-semibold text-pink-700 mb-6">
        Pedidos de Bolos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pedido.map((order) => (
                <div
                    key={order.id}
                    className="bg-white shadow-md rounded-xl p-5 border border-pink-200 hover:shadow-lg transition"
                >
                <h3 className="text-xl font-bold text-pink-600 mb-1">
              {order.client}
                </h3>

            {/* Número */}
                <p className="text-pink-700 mb-3">
              <span className="font-semibold">Número:</span> {order.clientNumber}
                </p>

            {/* Bolo */}
                <p className="text-pink-700">
              <span className="font-semibold">Bolo:</span> {order.cakename}
                </p>

            {/* Preço */}
                <p className="text-pink-700">
              <span className="font-semibold">Preço:</span> R$ {order.price}
                </p>

            {/* Descrição */}
                <p className="text-pink-700 mt-2">
              <span className="font-semibold">Descrição:</span> <br />
              {order.description}
                </p>
            </div>
            ))}
            </div>
            </section>
        </NavBar>
    )
}