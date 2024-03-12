import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar un regalo',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Alfonso'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: { 
        events: [
            tempEvent
        ],
        activeE1: null
    },
    reducers: { 

    },
});

export const { 
    events
} = calendarSlice.actions;