import React from 'react'
import styled from '@emotion/styled'
import UseSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 20px;
    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

function Formulario() {
    
    const [state,SelectMonedas]= UseSelectMonedas('Elige tu Moneda', monedas)


    return (
        <form>
            <SelectMonedas/>
            {state}
           <InputSubmit type="submit" value="Cotizar"></InputSubmit> 
        </form>
    )
}

export default Formulario
