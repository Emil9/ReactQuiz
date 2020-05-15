import React from 'react'
import Fiszka from './Fiszka'

export default function ListaFiszek({ fiszki }) {
    return (
        <div className="pole-fiszek">
            {fiszki.map(fiszka => {
                return <Fiszka fiszka={fiszka} key={fiszka.id} />
            })}
        </div>
    )
}
