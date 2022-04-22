import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

export const ConnectWallet = () => {
    const { status, availableConnectTypes, connect, disconnect } = useWallet();

    console.log("status is ", status);
    console.log("availableConnectTypes is ", availableConnectTypes);

    const renderConnectButton = () => {
        if (status === WalletStatus.WALLET_NOT_CONNECTED) {
            return (
                <div className="connect-wallet-div">
                    <img alt="connect-wallet" className="connect-wallet-img" src="/pepe.png" />

                    <button
                        type="button"
                        key={`connect-EXTENSION`}
                        onClick={() => connect("EXTENSION")}
                        className="cta-button connect-wallet-button"
                    >
                        Connect wallet
                    </button>
                </div>
            );
        }
    };

    const renderDisconnectButton = () => {
        if (status === WalletStatus.WALLET_CONNECTED) {
            return (
                <button type="button" onClick={() => disconnect()} className="cta-button connect-wallet-button">
                    Disconnect
                </button>
            );
        }
    };

    return (
        <div>
            {renderConnectButton()}
            {renderDisconnectButton()}
        </div>
    );
};
