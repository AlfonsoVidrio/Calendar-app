import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEvent, CalendarModal, FabAddNew } from "../";

import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';

export const CalendarPage = () => {
    
    const { toggleDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();

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

    const onSelect = ( event ) => {
        // setActiveEvent( event );
    } 

    const onClick = () => {
        onSelect(); 
        toggleDateModal();  
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
                // onDoubleClickEvent={  }
                onSelectEvent={ onClick }
                onView={ onViewChanged }
            />

            <CalendarModal/>
            <FabAddNew/>
        </>
    )
}
