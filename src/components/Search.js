import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SongRow from "./SongRow";
import "./Search.css";
import Zoom from "react-reveal/Zoom";

function Search({ spotify }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return;
    let cancel = false;

    spotify.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.tracks.items.map((track) => {
          console.log("track", track);
          return track;
        })
      );
    });

    return () => (cancel = true);
  }, [search]);

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search for Artists, Songs, Podcasts"
          type="text"
        />
      </div>
      {searchResults.map((track) => (
        <Zoom>
          <SongRow key={track.id} track={track} />
        </Zoom>
      ))}
    </div>
  );
}

export default Search;
