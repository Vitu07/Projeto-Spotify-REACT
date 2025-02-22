import "./Sidebar.css";
import spotifyLogo from '../../assets/icons/logo-spotify.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faGlobe, faPlus} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="#">
                    <img src={spotifyLogo} alt="Logo" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="library">
            <div className="library__tab">
                <button className="library__button">
                    <span><FontAwesomeIcon icon={faBook} /></span>
                    <span>Sua Biblioteca</span>
                </button>
                <span><FontAwesomeIcon icon={faPlus} /></span>            
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">Criar playlist</button>
                </div>
            </section>
            <div className="cookies">
                <a href="#">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;