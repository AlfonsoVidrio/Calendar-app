import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const {
        events,
        activeEvent
    } = useSelector( state => state.calendar);

    const dispatch = useDispatch();

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) ) 
    }

    const startSavingEvent = async ( calendarEvent ) => {
        console.log(calendarEvent)
      if( calendarEvent._id ){
        // actualizar
        dispatch( onUpdateEvent ( {...calendarEvent} ))
      } else {
        // crear
        dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime()}) );
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