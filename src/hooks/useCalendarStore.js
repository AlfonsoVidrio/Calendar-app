import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";

export const useCalendarStore = () => {

    const {
        events,
        activeEvent
    } = useSelector( state => state.calendar);
    const { user } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) ) 
    }

    const startSavingEvent = async ( calendarEvent ) => {
  
      if( calendarEvent._id ){
        // actualizar
        dispatch( onUpdateEvent ( {...calendarEvent} ))
      } else {
        // crear
        const { data } = await calendarApi.post('/events', calendarEvent);

        dispatch( onAddNewEvent({...calendarEvent, id: data.event.id, user}) );
      }
    }

    const startDeletingEvent = () => {
      dispatch( onDeleteEvent() );
    }

  return {
    // Propiedades
    events,
    activeEvent,
    // si es null va a retornar false, si es un objeto va a retornar true
    hasEventSelected: !!activeEvent,
    // Métodos,
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,

  }
}