import { useForm } from '../../hooks'
import './RegisterPage.css'

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPasswordConfirm: '',
}

export const RegisterPage = () => {

    const { registerName, registerEmail, registerPassword, registerPasswordConfirm, onInputChange } = useForm( registerFormFields );

    const registerSubmit = () => {
        event.preventDefault();
        console.log('hola', registerName, registerEmail, registerPassword, registerPasswordConfirm);
    }

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
