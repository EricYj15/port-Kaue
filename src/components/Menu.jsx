import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link className="text-white text-lg hover:underline" to="/">Sobre Mim</Link>
        </li>
        <li>
          <Link className="text-white text-lg hover:underline" to="/projects">Projetos</Link>
        </li>
        <li>
          <Link className="text-white text-lg hover:underline" to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
