import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css'

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const listaFavoritos = localStorage.getItem('filmes')
        setFilmes(JSON.parse(listaFavoritos) || [])
    }, [])

    function removeMovie(filmeId) {
        // Vai chegar o Id do filme e se esse Id tiver no array filmes, ele será filtrado e excluido
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== filmeId) 
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    }

    return (
        <div>
            <div className="favoritos">
                <h1>Seus filmes favoritos</h1>
                <ul className="lista-favoritos">
                    {filmes.map((filme, index) => {
                        return(
                            <li key={filme.id}>
                                <p>{index+1}. {filme.nome}</p>
                                <Link to={`/filme/${filme.id}`} className="seeDetails">Detalhes</Link>
                                <button onClick={() => removeMovie(filme.id)}> <i className='bx bxs-trash-alt'></i> </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}

export default Favoritos;