import '../styles/hero.css'
import ChannelWelcome from '../assets/svgs/chnl-wlcm.svg';
import GetStarted from '../assets/svgs/get-started-button.svg';
import SupportServer from '../assets/svgs/support-server-button.svg';

function SupportServerLink() {
    var url = 'https://discord.gg/voiceplus';
    window.open(url, '_blank');
  }

function Hero() {
    return (
        <main className="hero-section">
            <div className='hero-content'>
                <h1 className='hero-title'><span onClick={SupportServerLink} className='voice-plus-text'>Voice+</span> is your all-in-one voice channel manager</h1>
                <p className='hero-subtitle'>Managing your temporary voice channels have never been easier.</p>
                <img className='get-started-button' src={GetStarted} alt='get-started-button' draggable='false'></img>
                <img src={SupportServer} className='support-server-button' alt='support-server-button' draggable='false'></img>

                <img src={ChannelWelcome} alt='chnl-wlcm' className='hero-image'></img>
            </div>
        </main>
    )
}

export default Hero;