import { Link } from "react-router-dom"


export default () => {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300 text-gray-800 px-5">
      

      <div className="text-center max-w-2xl">
        
     
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md animate-fade-in">
          🍰 Confeitaria dos Sonhos
        </h1>

      
        <p className="text-lg leading-relaxed animate-slide-up delay-150">
          Desde <span className="font-semibold">2015</span>, a Confeitaria dos Sonhos tem como missão 
          proporcionar a sensação definitiva de degustar um bolo perfeito aquele 
          que derrete na boca, desperta memórias e transforma momentos simples em 
          instantes especiais.  
        </p>

        <p className="text-lg leading-relaxed mt-3 animate-slide-up delay-300 mb-10">
          Aqui você encontra bolos, doces, sabores e experiências pensadas com 
          carinho para adoçar o seu dia. ✨
        </p>

       
        <Link to="/cardapio" className="mt-7 px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105 animate-bounce-slow">
          Ver nosso cardápio 🍓
        </Link>
      </div>

     
      <div className="absolute bottom-10 left-10 text-pink-600 text-4xl animate-floating-slow">
        🍰
      </div>
      <div className="absolute top-30 right-12 text-pink-600 text-4xl animate-floating-slower">
        🧁
      </div>

    </div>
    )
}