import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {

  const {
    events,
    activeEvent
  } = useSelector(state => state.calendar);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {

    try {
      if (calendarEvent.id) {
        // actualizar
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return  
      } 
  
        // crear
        const { data } = await calendarApi.post('/events', calendarEvent);
  
        dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Ocurrió un error al guardar el evento', error.response.data?.msg, 'error');
    }



  }

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      dispatch( onLoadEvents( events ));

    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
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
    startLoadingEvents

  }
}