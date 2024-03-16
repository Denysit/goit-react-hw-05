import { useParams } from "react-router-dom";
import { getCast } from "../../fetchApiFilm";
import { useState, useEffect } from "react";
import css from './MovieCast.module.css'; 

export default function MovieCast() {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getDataCast() {
            try {
                setError(false);
                setLoading(true);
                const data = await getCast(movieId);
                setCast(data.cast.slice(0, 10));
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getDataCast();
    }, [movieId]);

    return (
        <div className={css.container}>
            {loading && <h4>Loading...</h4>}
            {cast.map(actor => (
                <div key={actor.id} className={css.actor}>
                    <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt="Photo the actor" className={css.image}/>
                    <h5 className={css.name}>{actor.name}</h5>
                    <p className={css.character}>Character: {actor.character}</p>
                </div>
            ))}
            {error && <h4 className={css.error}>Error, please reloading page</h4>}
        </div>
    )
}
