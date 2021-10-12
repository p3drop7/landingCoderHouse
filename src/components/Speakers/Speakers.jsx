import React from 'react'
import SpeakerCard from './SpeakerCard'
import "./Speakers.css"

function Speakers() {
    return (
        <div className="speakersContainer">

            <div className="speakers_title__container">
                <div className="speakers__title">SPEAKERS</div>
                <div className="spreakers__speakers">RAPPI  /  MERCADO LIBRE  /  SANTANDER  /  GOOGLE  /  UALA  /  ACCENTURE  /  MURAL  /  AUTOMATIC</div>
            </div>
            
            <div className="speakerCard__container">    
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
            </div>
        </div>
    )
}

export default Speakers
