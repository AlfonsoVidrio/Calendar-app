import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks'
import './LoginPage.css'
import Swal from 'sweetalert2';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}


export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

    const loginSubmit = () => {
        event.preventDefault();
        startLogin({email:loginEmail, password:loginPassword});
        
    }

    useEffect(() => {
        if (errorMessage !== undefined){
            Swal.fire('Error en la autenticación', errorMessage, 'error')
        }
    }, [errorMessage])
    

    return (
        <div className="login-container">

            <div className="login-box">
                <h3 className="login-title">Ingreso</h3>
                <form onSubmit={ loginSubmit } className="login-form">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Correo"
                            className="input-text"
                            name='loginEmail'
                            value={ loginEmail }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="input-text"
                            name = 'loginPassword'
                            value={ loginPassword }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="submit"
                            value="Login"
                            className="submit-button"
                        />
                    </div>
                    <div className="register-link">
                        <a href="/auth/register">Crear cuenta</a>
                    </div>
                </form>
            </div>

        </div>
    )
}
