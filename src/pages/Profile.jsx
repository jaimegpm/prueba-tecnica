import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Usuario from '../Usuario';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const usuarioData = Usuario.getUsuario();
      setUsuario(usuarioData);
    } else {
      setUsuario(null);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      <h1>Página de Perfil</h1>
      
      {isLoggedIn && usuario ? (
        <div className="profile-data">
          <img src="/images/icons/logo.svg" alt="Logo" className="logo" />
          <p><strong>Usuario:</strong> {usuario.username}</p>
          <p><strong>Nombre y Apellidos:</strong> {usuario.name} {usuario.lastname}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="login-container">
          <img src="/images/icons/logo.svg" alt="Logo" className="logo" />
          <p>Has cerrado sesión</p>
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
      
      <Link to="/" className="link">Volver al inicio</Link>
    </div>
  );
}

export default Profile; 