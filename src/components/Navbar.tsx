import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo/jompha-logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchText: string) => void;
}

function Navbar({ onSearch}: Props) {
  return (
    <HStack padding='10px'>
        <Image src={ logo } boxSize='60px' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar