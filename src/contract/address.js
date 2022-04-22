// sync-ed from root via `tr sync-refs`
import config from "../refs.terrain.json"

export const contractAddress = (wallet) => config[wallet.network.name].blank.contractAddresses.default
