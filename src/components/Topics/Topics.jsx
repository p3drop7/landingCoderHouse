import React from 'react'
import { VscMegaphone } from 'react-icons/vsc'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import "./Topics.css"

function Topics() {
    return (
        <div className="topicsContainer">

            <div className="topicsCard topicsCard--1">
                
                <div className="topicsCard__innerContainer">
                    <div className="topicsCard__frontBrackground--1">
                        <div className="topicsCard__circle"><VscMegaphone className="card_icon" /></div>
                        <div className="topicsCard__description">
                            <div className="topicsCard__title">MARKETING</div>
                            <div className="topicsCard__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque temporibus ipsum modi placeat alias expedita.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="topicsCard topicsCard--2">
                <div className="topicsCard__frontBrackground--2">
                    <div className="topicsCard__circle"><MdOutlineDesignServices className="card_icon" /></div>
                    <div className="topicsCard__description">
                        <div className="topicsCard__title">DISEÑO UX/UI</div>
                        <div className="topicsCard__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque temporibus ipsum modi placeat alias expedita quisquam.</div>
                    </div>
                </div>
            </div>

            <div className="topicsCard topicsCard--3">
                <div className="topicsCard__frontBrackground--3">
                    <div className="topicsCard__circle"><BsCodeSlash className="card_icon" /></div>
                    <div className="topicsCard__description">
                        <div className="topicsCard__title">PROGRAMACION</div>
                        <div className="topicsCard__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque temporibus ipsum modi placeat alias expedita quisquam.</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topics
