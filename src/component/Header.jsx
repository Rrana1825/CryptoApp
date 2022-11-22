import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} bgColor={'blackAlpha.900'} shadow={'base'}>
        <Button varient={'unstyled'} color={'Black'}>
            <Link to='/'>Home</Link>
        </Button>
        <Button varient={'unstyled'} color={'Black'}>
            <Link to='/exchanges'>Exchange</Link>
        </Button>
        <Button varient={'unstyled'} color={'Black'}>
            <Link to='/coins'>Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header