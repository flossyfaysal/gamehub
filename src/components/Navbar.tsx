import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo/jompha-logo.png'
import ColorModeSwitch from './ColorModeSwitch'

function Navbar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={ logo } boxSize='60px' />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar