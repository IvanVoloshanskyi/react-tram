// Ваш компонент React
import React, {useState, useEffect} from 'react';

const CurrentData = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const currentDateObj = new Date();
            const day = currentDateObj.getDate();
            const month = currentDateObj.getMonth() + 1;
            const year = currentDateObj.getFullYear();
            setCurrentDate(`${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`);
        };

        getCurrentDate(); // Викликаємо функцію для отримання поточної дати один раз після монтування компонента
    }, []); // Запускаємо тільки один раз після монтування

    return (
        <div className="info-section">
            <div className="info">
                <p className="info-header">Дата</p>
                <p className="info-date">{currentDate}</p>
            </div>
            <div className="info">
                <p className="info-header">Час</p>
                <p className="info-date">{getCurrentTime()}</p>
            </div>
            <div className="info">
                <p className="info-header">Стандартний</p>
                <p className="info-date">1 шт.</p>
            </div>
        </div>
    );
}

function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default CurrentData;
