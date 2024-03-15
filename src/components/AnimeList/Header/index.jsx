import { Link } from 'react-router-dom';

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex flex-row justify-between items-center font-bold p-4">
      <h1 className="text-2xl text-primary">{title}</h1>
      {
        linkHref && linkTitle 
        ?
        <Link to={linkHref} className="md:text-xl text-md underline hover:text-indigo-500 transition-all text-primary hover:text-accent">
          {linkTitle}
        </Link>
        : 
        null
      }
    </div>
  );
};

export default Header;
