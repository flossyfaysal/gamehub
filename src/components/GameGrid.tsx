import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {

    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) { <Text>{error}</Text> }

    return (
        <SimpleGrid columns={3} spacing={5}>
            {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
            )}
            {data.map((game) => (
                <GameCardContainer key={game.name}>
                    <GameCard key={game.name} game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    )
}

export default GameGrid