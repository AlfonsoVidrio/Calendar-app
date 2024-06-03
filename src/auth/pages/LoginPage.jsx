import { useForm } from '../../hooks'
import './LoginPage.css'

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}


export const LoginPage = () => {

    const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

    const loginSubmit = () => {
        event.preventDefault();
        console.log(loginEmail, loginPassword);
    }

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
