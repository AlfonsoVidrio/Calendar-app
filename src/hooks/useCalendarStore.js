import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";

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
      
      if( calendarEvent._id ){
        // actualizar
      } else {
        // crear
        dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime()}) );
      }
    }

  return {
    // Propiedades
    events,
    activeEvent,
    // Métodos,
    setActiveEvent,
    startSavingEvent
  }
}