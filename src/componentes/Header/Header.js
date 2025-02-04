import React, { useState, useEffect } from "react";
import "./Header.css";
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from "../../assets/icons/search.png";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

const Header = ({ setIsSearchActive }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const [showPlaylists, setShowPlaylists] = useState(true);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setShowPlaylists(true);
            setArtists([]);
            setIsSearchActive(false)
            return;
        }

        const fetchArtists = async () => {
            try {
                const response = await fetch(`http://localhost:3001/artists?name_like=${searchTerm}`);
                const data = await response.json();
                setArtists(data);
                setShowPlaylists(false);
                setIsSearchActive(true);
            } catch (error) {
                
            }
        };
        fetchArtists();
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    return (
        <>
            <nav className="header__navigation">
                <div className="navigation">
                    <button className="left-arrow">
                        <img src={smallLeft} alt="Seta esquerda" />
                    </button>
                    <button className="right-arrow">
                        <img src={smallRight} alt="Seta direita" />
                    </button>
                </div>
                <div className="header__search">
                    <img src={search} alt="" />
                    <input
                        id="search-input"
                        type="text"
                        maxLength="800"
                        placeholder="O que você quer ouvir?"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>


            <div className="search-results">
                {!showPlaylists && (
                    <div className="grid-container">
                        {artists.map((artist) => (
                            <div key={artist.id} className="artist-card">
                                <div className="card-img">
                                    <img src={artist.urlImg} alt={artist.name} className="artist-img" />
                                    <div className="play">
                                    <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                </div>
                                <div className="card-text">
                                    <span className="artist-name">{artist.name}</span>
                                    <span className="artist-categorie">Artista</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </>
    );
};

export default Header;