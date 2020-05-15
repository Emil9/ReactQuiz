import React, { useState, useEffect, useRef } from 'react'

export default function Fiszka({ fiszka }) {
    const [odwrot, setOdwrot] = useState(false)
    const [height, setHeight] = useState('initial')

    const przodEl = useRef()
    const tylEl = useRef()

    function setMaxHeight() {
        const przodHeight = przodEl.current.getBoundingClientRect().height
        const tylHeight = tylEl.current.getBoundingClientRect().height
        setHeight(Math.max(przodHeight, tylHeight, 100))
    }

    useEffect(setMaxHeight, [fiszka.question, fiszka.answer, fiszka.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])
    return (
        <div 
        className={`karta ${odwrot ? 'odwrot' : ''}`}
        style={{ height: height}}
        onClick={() => setOdwrot(!odwrot)}
        >
            <div className="przod" ref={przodEl}>
                {fiszka.question}
                <div className="fiszka-options">
                    {fiszka.options.map(option => {
                        return <div className="fiszka-option" key={option}>{option}</div>
                    })}
                </div>
            </div>
            <div className="tyl" ref={tylEl}>
                {fiszka.answer}
            </div>
        </div>
    )
}
