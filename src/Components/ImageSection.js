import React from 'react';
import about from '../img/valere.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Valere Chihisa</span></h4>
                <p className="about-text">
                   
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Valere Chihisa</p>
                        <p>: 23</p>
                        <p>: Congolaise</p>
                        <p>: French,swahili, English</p>
                        <p>: Himbi 1 quarter , Goma DRC</p>
                        <p>: Democratique Republic of congo</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
