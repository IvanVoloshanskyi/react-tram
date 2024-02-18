import React, { useState } from 'react';

const ChangeTicket = () => {
    const [ticketNumber, setTicketNumber] = useState('№1164'); // Початкове значення номера квитка

    const handleClick = () => {
        // Після натискання на елемент, змінюємо номер квитка
        const newTicketNumber = prompt('Введіть новий номер квитка:', ticketNumber);
        if (newTicketNumber !== null) {
            setTicketNumber(newTicketNumber);
        }
    };

    return (
        <p className="lviv-info__ticket__num" onClick={handleClick}>
            {ticketNumber}
        </p>
    );
}

export default ChangeTicket;
