import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEvent, CalendarModal } from "../";
import { addHours } from 'date-fns';
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

const events = [{
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar un regalo',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Alfonso'
    }
}]

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log({ event, start, end, isSelected })
    
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            // fontSize: '0.7rem',
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        console.log({ doubleClick: event })
    }

    const onSelect = ( event ) => {
        console.log({ click: event})
    }

    const onViewChanged = ( event) => {
        localStorage.setItem('lastView', event);
        setLastView(event);
    }

    return (
        <>
            <Navbar />

            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px )' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

            <CalendarModal/>
        </>
    )
}