import React from 'react'
import "./Topics.css"

function Topics() {
    return (
        <div className="topicsContainer">

            <div className="topicsCard topicsCard--1">
                <div className="topicsCard__circle" />
                
                <div className="topicsCard__description">
                    <div className="topicsCard__title">MARKETING</div>
                    <div className="topicsCard__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque temporibus ipsum modi placeat alias expedita.</div>
                </div>
            </div>

            <div className="topicsCard topicsCard--2">
                <div className="topicsCard__circle" />
                
                <div className="topicsCard__description">
                    <div className="topicsCard__title">DISEÑO UX/UI</div>
                    <div className="topicsCard__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque temporibus ipsum modi placeat alias expedita quisquam.</div>
                </div>
            </div>

            <div className="topicsCard topicsCard--3">
                <div className="topicsCard__circle" />

                <div className="topicsCard__description">
                    <div className="topicsCard__title">PROGRAMACION</div>
                    <div className="topicsCard__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque temporibus ipsum modi placeat alias expedita quisquam.</div>
                </div>
               
            </div>
            
        </div>
    )
}

export default Topics
