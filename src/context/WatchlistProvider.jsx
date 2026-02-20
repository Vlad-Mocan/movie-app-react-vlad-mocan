// import { useCallback, useEffect, useMemo, useState } from "react";
// import { WatchlistContext } from "./WatchlistContext";

// const key = "watchlists";

// export default function WatchlistProvider({ children }) {
//   const [watchlists, setWatchlists] = useState(() => {
//     try {
//       const item = localStorage.getItem(key);

//       return item ? JSON.parse(item) : {};
//     } catch (error) {
//       console.error("Error parsing watchlists:", error);

//       return {};
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(watchlists));
//   }, [watchlists]);

//   const addMovieToList = (listName, movie) => {
//     if (!movie || !listName?.trim()) return;

//     setWatchlists((prev) => {
//       const currentList = prev[listName] || [];

//       const isDuplicate = currentList.some(
//         (m) => m.toLowerCase() === movie.toLowerCase(),
//       );

//       if (isDuplicate) return prev;

//       return {
//         ...prev,
//         [listName]: [...currentList, movie],
//       };
//     });
//   };

//   const removeMovieFromList = (listName, movie) => {
//     setWatchlists((prev) => {
//       const currentList = prev[listName] || [];

//       const updatedList = currentList.filter(
//         (m) => m.toLowerCase() !== movie.toLowerCase(),
//       );

//       return {
//         ...prev,
//         [listName]: updatedList,
//       };
//     });
//   };

//   const getWatchlistsOfMovie = useCallback(
//     (movie) => {
//       return Object.entries(watchlists)
//         .filter(([, movies]) => movies.includes(movie))
//         .map(([name]) => name);
//     },
//     [watchlists],
//   );

//   const moviesSavedInWatchlists = useMemo(() => {
//     return Object.values(watchlists).flat();
//   }, [watchlists]);

//   return (
//     <WatchlistContext.Provider
//       value={{
//         watchlists,
//         watchlistNames: Object.keys(watchlists),
//         addMovieToList,
//         removeMovieFromList,
//         moviesSavedInWatchlists,
//         getWatchlistsOfMovie,
//       }}
//     >
//       {children}
//     </WatchlistContext.Provider>
//   );
// }
