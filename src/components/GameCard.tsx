import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import {Game} from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import croppedImageUrl from "../services/cropped-image"
import GameRating from "./GameRating"

interface Props{
    game: Game
}

function GameCard({game}: Props) {
  return(
    <Card>
        <Image src={ croppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent="space-between">
                <PlatformIconList 
                    platforms={ game.parent_platforms.map( p => p.platform )}
                    />
                <CriticScore score={game.metacritic}/>

            </HStack>
            <Heading>{game.name}/</Heading>
            <GameRating rating={game.rating_top}/>
        </CardBody>
    </Card>
  )
}

export default GameCard