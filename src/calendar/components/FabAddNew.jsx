import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();


    const handleClickNew = () => {
        // limpiamos la nota anterior
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#ffffff',
            user: {
                _id: '123',
                name: 'Alfonso'
            }
        });
        // abrimos el modal
        openDateModal();
    }

    return (
        <button
            onClick={ handleClickNew }
            className="btn btn-primary fab"
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
