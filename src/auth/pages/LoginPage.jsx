import './LoginPage.css'

export const LoginPage = () => {
    return (
        <div className="login-container">

            <div className="login-box">
                <h3 className="login-title">Ingreso</h3>
                <form className="login-form">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Correo"
                            className="input-text"
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="input-text"
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
