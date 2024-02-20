import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [purchaseTime, setPurchaseTime] = useState(Date.now());
    const [timer, setTimer] = useState('59:59');

    useEffect(() => {
        const calculateTimeDifference = () => {
            const currentTime = Date.now();
            const timeDifferenceInSeconds = Math.floor((currentTime - purchaseTime) / 1000);

            if (timeDifferenceInSeconds >= 0) {
                const remainingTimeInSeconds = 3599 - timeDifferenceInSeconds;
                const minutes = Math.floor(remainingTimeInSeconds / 60);
                const seconds = remainingTimeInSeconds % 60;
                setTimer(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
            }
        };

        const timerInterval = setInterval(calculateTimeDifference, 1000);

        return () => clearInterval(timerInterval);
    }, [purchaseTime]);

    const handleChangeTime = () => {
        const currentTime = Date.now();
        const timeDifferenceInSeconds = Math.floor((currentTime - purchaseTime) / 1000);
        const remainingTimeInSeconds = 3599 - timeDifferenceInSeconds;
        const minutes = Math.floor(remainingTimeInSeconds / 60);
        const seconds = remainingTimeInSeconds % 60;
        setTimer(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        setPurchaseTime(currentTime - timeDifferenceInSeconds * 1000);
    }

    return (
        <div className="ticket">
            <p className="ticket_header">Квиток разового використання</p>
            <p className="ticket_timer" onClick={handleChangeTime}>
                {timer}
            </p>
        </div>
    );
}

export default Timer;
