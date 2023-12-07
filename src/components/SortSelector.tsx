import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs"

function SortSelector() {

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order By: Relavence
        </MenuButton>
        <MenuList>
           <MenuItem>Relavence</MenuItem>
           <MenuItem>Date Added</MenuItem>
           <MenuItem>Name</MenuItem>
           <MenuItem>Release Date</MenuItem>
           <MenuItem>Popularity</MenuItem>
           <MenuItem>Average Rating</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector