import { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { 
    FaWindows, 
    FaPlaystation, 
    FaXbox, 
    FaApple, 
    FaLinux, 
    FaAndroid
} from 'react-icons/fa'


interface Props{
    platforms: Platform[]
}

function PlatformIconList( {platforms}: Props) {

    const iconMaps: { [key:string]: IconType } = {
        windows: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        apple: FaApple,
        linux: FaLinux,
        android: FaAndroid
    }

  return (
    <HStack margin={'10px'}>
        {platforms.map( (platform) => 
            <Icon as={ iconMaps[platform.slug]} color="grey.500" />

        )}
    </HStack>
  )
}

export default PlatformIconList