import { Image, ImageProps } from "@chakra-ui/react";
import { BsAlarm, BsApple, BsArrowDownLeft } from "react-icons/bs";

interface Props{
    rating: number;
}

function GameRating({rating}: Props) {

    if( rating < 3 ) null;

    const ratingMap: {[key:number] : ImageProps} = {
        3: { src: <BsAlarm/>, alt:'meh'},
        4: { src: <BsApple />, alt:'recommended'},
        5: { src: <BsArrowDownLeft/>, alt: 'great'}
    }

  return (
    <div>
        <Image {...ratingMap[rating]}/>
    </div>
  )
}

export default GameRating