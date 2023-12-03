import { useEffect, useState } from "react";
import apiClients from "../services/api-services"
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}

interface FetchGenreRespnse{
    count: number; 
    results: Genre[]
}

const useGeneres = () => {
    const [genres, setGenres] =  useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect( () => {
        const controller = new AbortController();

        setLoading(true);
        apiClients.get<FetchGenreRespnse>("/genres", { signal: controller.signal })
        .then( (res) => {
            setGenres( res.data.results );
            setLoading(false);
        })
        .catch( err => {
            if( err instanceof CanceledError ) return;
            setError( err.message )
            setLoading(false);
        })

        return () => controller.abort();
    }, [])

    return { genres, error, isLoading }
}

export default useGeneres;