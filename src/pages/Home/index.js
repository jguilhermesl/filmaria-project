import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'
import Banner from '../../assets/spiderman.jpg'

function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {

        async function loadFilmes() {
            // https://sujeitoprogramador.com + r-api/?api=filmes/
            const response = await api.get('r-api/?api=filmes/')

            setFilmes(response.data)
            setLoading(false)

        }

        loadFilmes()

        
    }, [])

    if(loading === true ) {
        return(
            <div className="box-filme-loading">
                <div className="filme-loading"></div>
            </div>
        )
    }


    return (
        <>
            <div className="container">
                <div>
                    <div className="movie-wrapper">
                        <div className="img-wrapper">
                            <img src={Banner} />
                        </div>
                        <div className="text-wrapper">
                            <h2>Homem Aranha: Sem Volta pra Casa</h2>
                            <p>A vida de Peter Parker (Tom Holland) se tornou um verdadeiro caos depois que sua identidade foi revelada para o mundo pelo vilão Mysterio. 
Parker procura o parceiro Doutor Estranho (Benedict Cumberbatch) e pergunta se ele não conseguiria retirar essa informação da memória das pessoas. 
O arriscado feitiço foi colocado em prática, mas ao alterar a realidade eles criaram uma situação ainda mais perigosa.</p>
                            <Link to="/" className="button-home"><i className='bx bx-play' ></i> Ver trailer</Link>
                        </div>
                    </div>
                </div>
                <h1 className="movies-high">Filmes em Alta</h1>
                <div className="movies-list">
                    {filmes.map((filme) => {
                        return (
                            <div key={filme.id} className="box-movie">
                                <img src={filme.foto} alt={filme.nome} />
                                <h2>{filme.nome}</h2>
                                <div className="stars"><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i></div>
                                <Link to={`/Filme/${filme.id}`} className="button-movies">Acessar</Link>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;