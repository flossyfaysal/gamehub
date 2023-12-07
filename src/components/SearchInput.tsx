import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    onSearch: (searchText: string) => void;
}

function SearchInput({onSearch}: Props) {

    const ref = useRef<HTMLInputElement>(null);

  return (
    <div style={{ width:'100%'}}>
        <form onSubmit={ (event) => {
            event.preventDefault();
            if(ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>} />
                <Input ref={ref} borderRadius={10} placeholder='Search Items..'/>
            </InputGroup>
        </form>
    </div>
  )
}

export default SearchInput