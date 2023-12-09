import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs"

interface Props{
    onSelectSortOrder : (sortOrder: string) => void;
    sortOrder: string; 
}

function SortSelector({onSelectSortOrder, sortOrder}: Props) {

    const sortOrders = [
        { label: '', value: 'Relavence'},
        { label: '-added', value: 'Date Added'},
        { label: '-name', value: 'Name'},
        { label: '-released', value: 'Release Date'},
        { label: '-metacritic', value: 'Popularity'},
        { label: '-rating', value: 'Average Rating'}
    ];

    const currentSortOrder = sortOrders.find( order => order.value == sortOrder);

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order By: {currentSortOrder?.label || "Relavence"}
        </MenuButton>
        <MenuList>
           { sortOrders.map( order => 
           <MenuItem 
            onClick={() => onSelectSortOrder( order.value )}
            key={order.label} value={order.value}>{order.value}
            </MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector