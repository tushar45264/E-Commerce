import {  Button,styled } from '@mui/material'
import React from 'react'
import {ButtonGroup} from '@mui/material'
const GroupedButton = () => {
  return (
    <Container>
        <ButtonItem>-</ButtonItem>
        <Button disabled>1</Button>
        <ButtonItem>+</ButtonItem>
    </Container>
  )
}

const Container = styled(ButtonGroup)`
    margin-top: 30px;
`;

const ButtonItem = styled(Button)`
    border-radius: 50%;
`;

export default GroupedButton 