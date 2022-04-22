import './App.css';

import GameMenu from './components/GameMenu';
import WalletAddress from './components/WalletAddress';

import { ConnectWallet } from './components/ConnectWallet';
import {
  useWallet,
  useConnectedWallet,
  WalletStatus,
} from '@terra-money/wallet-provider';

function App() {
  const { status } = useWallet();
  const connectedWallet = useConnectedWallet();

  return connectedWallet?.network?.name === "mainnet" ? (
    <span>Please connect to the Bombay testnet!</span>
  ) : (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>⚔ Goblin War ⚔</h1>
          <p>Only you can save us from Goblin town</p>
        </div>

        <WalletAddress />
      </header>

        {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <GameMenu />
          </div>
        )}

      <ConnectWallet />

    </main>
  );
}

export default App;
