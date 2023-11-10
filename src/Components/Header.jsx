import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="header">
            <div>
                <img className='logo' src="/ILlogo.svg" alt="" srcset="" />
            </div>
            <div className='header-button-container'>
                <div className='header-button-bg' >Get advice</div>
                <div className='header-button-no-bg' >Log in</div>
                <FontAwesomeIcon className='icon fa-lg' icon={faBars} />
            </div>
        </div>
    );
}

export default Header;