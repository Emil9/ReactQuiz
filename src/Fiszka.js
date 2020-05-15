import React, { useState } from 'react'

export default function Fiszka({ fiszka }) {
    const [odwrot, setOdwrot] = useState(false)

    return (
        <div 
        className={`karta ${odwrot ? 'odwrot' : ''}`}
        onClick={() => setOdwrot(!odwrot)}
        >
            <div className="przod">
                {fiszka.pytanie}
                <div className="fiszka-mozliwosci">
                    {fiszka.mozliwosci.map(mozliwosc => {
                        return <div className="fiszka-mozliwosc">{mozliwosc}</div>
                    })}
                </div>
            </div>
            <div className="tyl">
                {fiszka.odpowiedz}
            </div>
        </div>
    )
}
