import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../";

import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';
import { to } from 'cli-color/move';

export const CalendarPage = () => {

    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const eventStyleGetter = (event, start, end, isSelected) => {
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
        openDateModal();

      }

    const onSelect = (event) => {
        // console.log({ click: event });
        setActiveEvent(event);

    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView(event)
    }



    return (
        <>
            <Navbar />

            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px )' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />

            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    )
}
