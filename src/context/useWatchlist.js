import { useContext } from "react";
import { WatchlistContext } from "./WatchlistContext";

export default function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (context === undefined) throw new Error("Could not access context.");

  return context;
}
