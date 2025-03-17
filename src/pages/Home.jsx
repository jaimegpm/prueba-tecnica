import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Página de Inicio</h1>
      <img src="/images/icons/logo.svg" alt="Logo" className="logo" />
      <p>Bienvenido a la prueba técnica para Hiberus</p>
      <Link to="/perfil" className="link">Ver perfil</Link>
    </div>
  );
}

export default Home; 