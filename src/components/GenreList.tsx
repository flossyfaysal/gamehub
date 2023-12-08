import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react"
import useGeneres, { Genre } from "../hooks/useGenres"
import croppedImageUrl from "../services/cropped-image"

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({selectedGenre, onSelectGenre}: Props) {

   const {data, isLoading, error} = useGeneres()

   if( error ) return null;

   if( isLoading ) return <Spinner />

  return (
    <List>
        {data.map( (genre) => 
            <ListItem key={genre.id} paddingY={'1'}>
                <HStack>
                  <Image width='30px' borderRadius='5px' src={croppedImageUrl(genre.image_background)} />
                  <Button 
                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                    variant="link" 
                    onClick={() => onSelectGenre(genre)}
                    whiteSpace={'pre-wrap'}
                    textAlign={'left'}
                    >
                      {genre.name}
                    </Button>
                </HStack>
            </ListItem>
        )}
    </List>
  )
}

export default GenreList