import useData from "./useData";

interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGeneres = () => useData<Genre>("/genres");

export default useGeneres;