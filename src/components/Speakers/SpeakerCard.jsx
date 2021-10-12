import React from 'react'
import { BsLinkedin } from 'react-icons/bs';

function SpeakerCard() {
    return (
        <div className="speakerCard">
            <div className="speakerCard__photo" />
            
            <div className="speakerCard__description">
                <div className="speakerCard__description__name-job">
                    <div className="speakerCard__name">ASTRID MIRKIN</div>
                    <div className="speakerCard__job">General Manager</div>
                </div>
                <BsLinkedin className="linkedIn_icon"/>
            </div>

        </div>
    )
}

export default SpeakerCard
