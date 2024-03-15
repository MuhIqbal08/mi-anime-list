import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const InputSearch = () => {
  const searchRef = useRef();
  const navigate = useNavigate()

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if(!keyword || keyword.trim() === "") return
    
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input type="text" className="w-full rounded p-2" placeholder="Cari anime..." ref={searchRef} onKeyDown={handleSearch} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
