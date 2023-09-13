import '../styles/nav.css'
import Logo from '../assets/svgs/icon.svg';

function Nav() {
    return (
        <main className='navbar'>
            <div className='navbar-content'>
                <img alt='logo' src={Logo} draggable='false' className='nav-logo'></img>

                <div className='nav-btns'>
                    <a>Features</a>
                    <a>Team</a>
                    <a>Appeals</a>
                    <a>More</a>
                </div>

            </div>
        </main>
    )
}

export default Nav;