import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getInfoById } from "../../fetchApiFilm";
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {

    const [infoOfFilm, setInfoOfFilm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { movieId } = useParams();

    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies");

    useEffect(() => {
        async function getData () {
            try {
                setError(false);
                setLoading(true);
                const data = await getInfoById(movieId);
                setInfoOfFilm(data);
            }
            catch (error) {
                 setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        getData();

    }, [movieId]);

    const imageUrl = `https://image.tmdb.org/t/p/w1280${infoOfFilm.backdrop_path}`;
    const releaseDate = infoOfFilm.release_date ? infoOfFilm.release_date.slice(0, 4) : '';
    const votePercentage = infoOfFilm.vote_average ? Math.round(infoOfFilm.vote_average * 10) : null;
    const genresOfArray = infoOfFilm.genres ? infoOfFilm.genres.map(ganre => ganre.name).join(', ') : '';
    
    return (
        <div className={css.container}>
            <div className={css.containeForTop}>
            <Link to={backLinkRef.current} className={css.backLink}>Go back</Link>
            {loading && <h4 className={css.loading}>Loading...</h4>}
            <img src={imageUrl} alt="Poster of the movie" className={css.poster} />
            <h4 className={css.title}>{infoOfFilm.title}({releaseDate})</h4>
            <p className={css.score}>User score: {votePercentage}%</p>
            <h5 className={css.sectionTitle}>Overview</h5>
            <p className={css.overview}>{infoOfFilm.overview}</p>
            <h5 className={css.sectionTitle}>Genres</h5>
            <p className={css.genres}>{genresOfArray}</p>
            {error && <h4 className={css.error}>Error, please reloading page</h4>}
            </div>

            <ul className={css.navLinks}>
                <li>
                   <NavLink to='cast' className={css.navLink}>Cast</NavLink> 
                </li>
                <li>
                   <NavLink to='reviews' className={css.navLink}>Reviews</NavLink> 
                </li>
            </ul>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
           
        </div>   
    );
}
