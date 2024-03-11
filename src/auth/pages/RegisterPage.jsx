import './RegisterPage.css'

export const RegisterPage = () => {
    return (
        <div className="register-container">

            <div className="register-box">
                <h3 className="register-title">Registro</h3>
                <form className="register-form">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="input-text"
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
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
                            type="password"
                            placeholder="Repita la contraseña"
                            className="input-text"
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
