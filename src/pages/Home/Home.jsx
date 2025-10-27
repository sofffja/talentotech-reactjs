import './Home.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/productos');
  };

  return (
    <div className="home">
      <h2>Bienvenidxs a la tienda</h2>
      <p>Encuentra los mejores productos</p>
      <div className="home__button">
        <Button onClick={handleExploreClick}>Explorar</Button>
      </div>
    </div>
  );
}
