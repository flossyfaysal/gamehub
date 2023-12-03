
// show score 
// pass props
// use interface 
// good look and feel 
// green, yellow, and red 

import { Badge } from "@chakra-ui/react"

interface Props{
    score: number;
}

function CriticScore({score}: Props) {

    let color = score > 75 ? 'green' : score > 55 ? 'yellow' : 'red';

  return (
    <Badge colorScheme={color} fontSize={'15px'} paddingX={3}>{score}</Badge>
  )
}

export default CriticScore