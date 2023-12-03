import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import {Game} from "../hooks/useGames"

interface Props{
    game: Game
}

function GameCard({game}: Props) {
  return(
    <Card>
        <Image src={game.background_image} />
        <CardBody>
            <Heading>{game.name}/</Heading>
            {game.parent_platforms.map( ({platform}) => <Text> {platform.name} </Text>)}
        </CardBody>
    </Card>
  )
}

export default GameCard