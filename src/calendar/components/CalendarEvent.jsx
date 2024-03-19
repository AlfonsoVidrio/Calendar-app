
export const CalendarEvent = ({ event }) => {
    
    const { title, notes } = event;
    
    return (
        <>
            <strong>{ title }</strong>
            <strong>{ notes }</strong>
        </>
    )
}
