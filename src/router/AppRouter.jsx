import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth'
import { CalendarPage } from '../calendar';
import { RegisterPage } from '../auth/pages/RegisterPage';

export const AppRouter = () => {

    const authStatus = 'authenticated' //'not-authenticated';

    return (
        <Routes>

            {
                (authStatus === 'not-authenticated')
                    ? <>
                        <Route path="/auth/register" element={<RegisterPage />} />
                        <Route path="/auth/login" element={<LoginPage />} />

                    </>
                    : <Route path="/*" element={<CalendarPage />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login" />} />

        </Routes>
    )
}