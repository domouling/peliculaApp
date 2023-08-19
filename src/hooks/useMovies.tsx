import { useEffect, useState } from 'react';
import { Movie, MovieDbMoviesResponse } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
    nowPlaying: Movie[];
    popular:    Movie[];
    upcoming:   Movie[];
    topRated:   Movie[];
}

export const useMovies = () => {

    const [ isLoading, setisLoading ] = useState(true);
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular:    [],
        upcoming:   [],
        topRated:   [],
    });

    const getMovies = async () => {

        const nowplayingPromise = movieDB.get<MovieDbMoviesResponse>('/now_playing');
        const popularPromise    = movieDB.get<MovieDbMoviesResponse>('/popular');
        const topRatedPromise   = movieDB.get<MovieDbMoviesResponse>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDbMoviesResponse>('/upcoming');

        const resp = await Promise.all([
            nowplayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular:    resp[1].data.results,
            topRated:   resp[2].data.results,
            upcoming:   resp[3].data.results,
        });

        setisLoading(false);
    };

    useEffect(() => {
        //now_playing
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};
