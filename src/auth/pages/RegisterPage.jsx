import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks'
import './RegisterPage.css'
import { useEffect } from 'react';

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPasswordConfirm: '',
}

export const RegisterPage = () => {

    const { startRegister, errorMessage } = useAuthStore();

    const { registerName, registerEmail, registerPassword, registerPasswordConfirm, onInputChange } = useForm( registerFormFields );

    const registerSubmit = () => {
        event.preventDefault();
        if ( registerPassword !== registerPasswordConfirm){
            Swal.fire('Error en registro', 'Las contraseñas no coinciden', 'error');
            return 
        }
        startRegister( {name:registerName, email:registerEmail, password:registerPassword});
    }

    useEffect(() => {
        if (errorMessage !== undefined){
            Swal.fire('Error en la autenticación', errorMessage, 'error')
        }
    }, [errorMessage])
    

    return (
        <div className="register-container">

            <div className="register-box">
                <h3 className="register-title">Registro</h3>
                <form onSubmit={registerSubmit} className="register-form">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="input-text"
                            name='registerName'
                            value={ registerName }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Correo"
                            className="input-text"
                            name='registerEmail'
                            value={ registerEmail }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="input-text"
                            name='registerPassword'
                            value={ registerPassword }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="input-field">

                        <input
                            type="password"
                            placeholder="Repita la contraseña"
                            className="input-text"
                            name='registerPasswordConfirm'
                            value={ registerPasswordConfirm }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="submit"
                            value="Crear cuenta"
                            className="submit-button"
                        />
                    </div>
                    <div className="login-link">
                        <a href="/auth/login">Ya tengo cuenta</a>
                    </div>
                </form>
            </div>

        </div>
    )
}
