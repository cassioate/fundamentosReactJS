import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Fabio" idade={20} nerd={true}> </DiretaFilho>
            <DiretaFilho nome="Pedro" idade={30} nerd={false}> </DiretaFilho>
        </div>
    )
}