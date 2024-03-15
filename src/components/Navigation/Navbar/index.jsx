import { Link } from "react-router-dom"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-6 bg-ac">
                <Link to={'/'} className="text-white font-bold text-2xl">MIANIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar