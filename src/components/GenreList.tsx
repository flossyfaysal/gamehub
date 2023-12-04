import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGeneres from "../hooks/useGenres"
import croppedImageUrl from "../services/cropped-image"


function GenreList() {

   const {data} = useGeneres()

  return (
    <List>
        {data.map( (genre) => 
            <ListItem key={genre.id} paddingY={'1'}>
                <HStack>
                  <Image width='30px' borderRadius='5px' src={croppedImageUrl(genre.image_background)} />
                  <Text>{genre.name}</Text>
                </HStack>
            </ListItem>
        )}
    </List>
  )
}

export default GenreList