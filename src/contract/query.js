import { LCDClient } from "@terra-money/terra.js";
import { contractAddress } from "./address";

export const getSpeed = async (wallet) => {
    const lcd = new LCDClient({
        URL: wallet.network.lcd,
        chainID: wallet.network.chainID,
    });

    console.log("contract address is ", contractAddress(wallet));
    return lcd.wasm.contractQuery(contractAddress(wallet), { get_speed: {} });
};

export const getScores = async (wallet) => {
    const lcd = new LCDClient({
        URL: wallet.network.lcd,
        chainID: wallet.network.chainID,
    });
    return lcd.wasm.contractQuery(contractAddress(wallet), { get_scores: {} });
};
