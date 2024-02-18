import React, {useEffect, useState} from 'react';

const GenerateId = () => {
    const [randomNumber, setRandomNumber] = useState(null); // Стан для зберігання рандомного числа

    useEffect(() => {
        const generateRandomNumber = () => {
            let randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Генеруємо рандомне восьмизначне число
            // Перевіряємо, чи перше число не є 0
            while (randomNumber.toString().charAt(0) === '0') {
                randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Якщо 0, то генеруємо нове число
            }
            return randomNumber;
        };

        const randomNum = generateRandomNumber();
        setRandomNumber(randomNum); // Зберігаємо рандомне число в стані
    }, []); // Викликаємо один раз при монтуванні компонента

    return (
        // Повертаємо рандомне число
        <span>{randomNumber}</span>
    );
}


export default GenerateId;
