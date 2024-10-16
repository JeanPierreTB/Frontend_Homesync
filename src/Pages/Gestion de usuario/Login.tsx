import React, { useState } from 'react';
import './PageLogin.css'; // Asegúrate de crear este archivo CSS

const PageLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log('Iniciando sesión con:', { username, password });
    };

    return (
        <div className="login-container">
            <h1>Página de Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default PageLogin;
