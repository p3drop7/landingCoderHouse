import React from 'react'
import Counter from '../Counter/Counter'
import "./Header.css"

function Header() {
    return (
        <div className="headerCointainer">
            
            <div className="headerNav">
                <div className="headerNav__title">CODER<span>SUMMIT21</span></div>
                <div className="headerNav__navIcon">|||</div>
            </div>
            
            <div className="mainContainer">
                <div>
                    <div className="mainContainer__date">&lt; 21_<span>NOV</span>_2021 &gt;</div>
                    <div className="mainContainer__title">SE PARTE DE LO QUE SE VIENE</div>
                    <button>Inscribirse</button>
                </div>
            </div>

            <Counter />
        </div>
    )
}

export default Header
