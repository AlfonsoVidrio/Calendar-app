import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//     _id: new Date().getTime(),
//     title: 'Cumpleaños del jefe',
//     notes: 'Hay que comprar un regalo',
//     start: new Date(),
//     end: addHours(new Date(), 2),
//     bgColor: '#fafafa',
//     user: {
//         _id: '123',
//         name: 'Alfonso'
//     }
// }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
            // tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        // reducer para agregar un nuevo evento
        onAddNewEvent: (state, { payload }) => {
            // agregar el nuevo evento al array de eventos
            state.events.push(payload);
            // actualizar el evento activo
            state.activeEvent = null;
        },
        // reducer para actualizar un evento
        onUpdateEvent: (state, { payload }) => {
            // actualizar el evento en el array de eventos
            state.events = state.events.map(event => {
                // si el evento es igual al evento que se esta actualizando
                if (event._id === payload._id) {
                    // retornar el evento actualizado
                    return payload;
                }
                // si no es el evento que se esta actualizando, retornar el evento sin cambios
                return event;
            });
        },
        // reducer para eliminar un evento
        onDeleteEvent: (state) => {
            // si existe un evento activo
            if (state.activeEvent) {
                // filtrar el array de eventos para eliminar el evento activo
                state.events = state.events.filter(event => event._id !== state.activeEvent._id);
                // actualizar el evento activo a null
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            // state.events = payload;
            payload.forEach( event => {
                const exists = state.events.some( dbEvent  => dbEvent.id === event.id );
                if ( !exists ) {
                    state.events.push( event );
                }
            })
        }
    },
});

export const {
    onSetActiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent,
    onLoadEvents
} = calendarSlice.actions;