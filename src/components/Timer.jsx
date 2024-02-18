import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState('59:59');

    useEffect(() => {
        const countdownTimer = () => {
            setTimer(prevTimer => {
                let [minutes, seconds] = prevTimer.split(':').map(Number);

                seconds--;
                if (seconds < 0) {
                    minutes--;
                    seconds = 59;
                }

                if (minutes < 0) {
                    clearInterval(timerInterval);
                    // Тут можна додати дій, що виконуються після закінчення таймера
                }

                return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            });
        };

        const timerInterval = setInterval(countdownTimer, 1000);

        return () => clearInterval(timerInterval); // Очищаємо інтервал при виході з компонента
    }, []); // Запускаємо тільки один раз після монтування

    const handleChangeTime = () => {
        setTimer(prevTimer => {
            let [minutes, seconds] = prevTimer.split(':').map(Number);
            const newMinutes = minutes - 3;

            if (newMinutes < 0) {
                return '00:00'; // Заборонити від'ємний час
            }

            return `${newMinutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        });
    }

    return (
        <div className="ticket">
            <p className="ticket_header">Квиток разового використання</p>
            <p
                className="ticket_timer"
                onClick={handleChangeTime}
            >
                {timer}
            </p>
        </div>
    );
}

export default Timer;