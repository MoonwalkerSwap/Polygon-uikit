import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import Torus from "./icons/Torus";
import WalletConnect from "./icons/WalletConnect";
import Portis from "./icons/Portis";
import Fortmatic from "./icons/Fortmatic";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Torus",
    icon: Torus,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Portis",
    icon: Portis,
    connectorId: ConnectorNames.Polygon,
  },
  {
    title: "Fortmatic",
    icon: Fortmatic,
    connectorId: ConnectorNames.Polygon,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
