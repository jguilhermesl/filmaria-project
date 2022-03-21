import { useEffect, useState } from 'react'
import './filme.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api'


function Filme() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)
            // console.log(response.data)

            if (response.data.length === 0) {
                //Tentou acessar com um ID que não existe
                history.replace('/');
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()

        return () => {
            console.log('COMPONENTE DESMONTADO')
        }

    }, [history, id])

    function saveMovie() {

        const myList = localStorage.getItem('filmes');

        let savedMovies = JSON.parse(myList) || [];
        // Se tiver algum filme savo com esse mesmo id precisa ignorar
        const hasFilme = savedMovies.some((savedMovie) => savedMovie.id === filme.id)

        if (hasFilme) {
            alert('Você já possui esse filme salvo.');
            return
            //Execução do código finaliza aqui.
        }

        savedMovies.push(filme)
        localStorage.setItem('filmes', JSON.stringify(savedMovies));
        alert('Filme salvo com sucesso.')
    }

    if (loading) {
        return (
            <div className="box-filme-loading">
                <div className="filme-loading"></div>
            </div>
        )
    }
    return (
        <div>
            <div className="container-filme">
                <img src={filme.foto} alt={filme.nome} />
                <h1>{filme.nome}</h1>
                <div className="stars-filme"><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i></div>
                <h3>Sinopse</h3>
                <p>{filme.sinopse}</p>
                <div className="buttons-filme">
                    <button onClick={saveMovie}>Salvar</button>
                    <button><a href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`} target="_blank" >Trailer</a></button>
                </div>
            </div>
        </div>
    )
}

export default Filme