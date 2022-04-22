import { Link } from 'react-router-dom';
import * as query from '../contract/query';
import { useState, useEffect } from 'react';
import WalletAddress from '../components/WalletAddress';
import { useConnectedWallet } from '@terra-money/wallet-provider';

const Leaderboard = () => {
  const [scores, setScores] = useState();
  const [loading, setLoading] = useState(true);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    setLoading(true);
    const prefetch = async () => {
      if (connectedWallet && connectedWallet.network.name === 'testnet') {
        setScores((await query.getScores(connectedWallet)).scores);
        setLoading(false);
      }
    };

    prefetch();
  }, [connectedWallet]);

  const renderScores = (scores) => {
    if (!scores || scores.length < 1) {
      return <div> No scores available :( </div>;
    }

    return scores.map((score, index) => {
      return (
        <div key={index} className="score">
          {/* Format score[0] : score[1] */}
          {/* Slice score[0] to first 5 and last 4 digits */}
          <span>
            {score[0].slice(0, 5) + '...' + score[0].slice(-4)}:{' '}
            {score[1].toString().padStart(2, '0')}
          </span>
        </div>
      );
    });
  };

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
        <h3>Scoreboard</h3>
        {/* If loading, show loading, else render */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          renderScores(scores)
        )}
        
        <div></div>
      </div>
    </main>
  );
};

export default Leaderboard;
