import useData from "./useData";

interface Genre{
    id: number;
    name: string;
}

const useGeneres = () => useData<Genre>("/genres");

export default useGeneres;