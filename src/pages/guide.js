import { Link } from 'react-router-dom';
import WalletAddress from '../components/WalletAddress';

const Guide = () => {
  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>⚔ Goblin War ⚔️</h1>
            <p>Only you can save us from Goblin town</p>
          </div>
        </Link>
        <WalletAddress />
      </header>

      <div className="score-board-container">
        <h3>How to play</h3>
        
        <div>
          <span className="help">
            Click as many goblins as you can within 30 seconds!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Guide;
