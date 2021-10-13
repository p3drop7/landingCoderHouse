import React from 'react'
import "./Counter.css"

function CounterDetails({timeLeft}) {
    
    return (
        <>
            <div>
                <h2>{timeLeft.days}</h2>
                <p>DIAS</p>
            </div>
            <div>
                <h2>{timeLeft.hours}</h2>
                <p>HORAS</p>
            </div>
            <div>
                <h2>{timeLeft.minutes}</h2>
                <p>MINUTOS</p>
            </div>
            <div>
                <h2>{timeLeft.seconds}</h2>
                <p>SEGUNDOS</p>
            </div>
        </>
    )
}

export default CounterDetails
