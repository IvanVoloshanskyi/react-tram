// MainPage.js
import React from 'react';
import './MainPage.css'; // Імпортуємо файл CSS
import CurrentData from "./CurrentData";
import ChangeTicket from "./ChangeTicket";
import GenerateId from "./GenerateId";
import Timer from "./Timer";
const MainPage = () => {
    return (
        <div className="main-container">
            <div className="header">
                <div className="arrow-text">
                    <div className="arrow-back">←</div>
                    <div className="archive-text">Архів</div>
                </div>
                <div className="buttons">
                    <button className="ticket-button active">Квиток</button>
                    <button className="ticket-button">Проїзний</button>
                </div>
            </div>

            <div className="content">
                <div className="lviv-info">
                    <img className="small-pic" src={require('../images/small_pic.png')} alt={'png'}/>
                    <div className="lviv-info help-text">
                        <p>Львів</p>
                        <p>ЛЬВІВЕЛЕКТРОТРАНС</p>
                        <p>Серія <span style={{fontWeight: 600}}><GenerateId></GenerateId></span></p>
                    </div>
                </div>
                <div className="lviv-info__ticket">
                    <img className="big-pic" src={require('../images/big_picture.png')} alt={'png'}/>
                    <p className="lviv-info__ticket__num"><ChangeTicket></ChangeTicket></p>
                    <p className="lviv-info__ticket__tram" style={{color: "#a6a6a6"}}>Тролейбус</p>
                </div>
                <CurrentData></CurrentData>
                <Timer></Timer>
            </div>

            <div className="footer">
                <button className="qr-button">Відсканувати QR-код</button>
            </div>
        </div>
    );
}

export default MainPage;
