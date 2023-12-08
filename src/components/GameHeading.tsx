import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App"

interface Props{
    gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
    const heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`
  return (
    <Heading as={"h1"} paddingBottom={5}>
        {heading}
    </Heading>
  )
}

export default GameHeading