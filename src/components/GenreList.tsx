import useGeneres from "../hooks/useGenres"


function GenreList() {

   const {genres} = useGeneres()

  return (
    <div>
        {genres.map( (genre) => 
            <li key={genre.id}>
                {genre.name}
            </li>
        )}
    </div>
  )
}

export default GenreList