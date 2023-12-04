import useGeneres from "../hooks/useGenres"

function GenreList() {

   const {data} = useGeneres();

  return (
    <div>
        {data.map( (genre) => 
            <li key={genre.id}>
                {genre.name}
            </li>
        )}
    </div>
  )
}

export default GenreList