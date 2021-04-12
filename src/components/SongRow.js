import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./SongRow.css";

function SongRow({ track, playSong }) {
  const [{}, dispatch] = useDataLayerValue();
  const changeTrack = (e, track) => {
    dispatch({
      type: "SET_TRACK",
      track: track,
    });
    document.title = `${track.name} · ${track.artists
      .map((artist) => artist.name)
      .join(", ")}`;
  };

  return (
    <div className="songRow" onClick={(e) => changeTrack(e, track)}>
      <img className="songRow-album" src={track.album.images[0]?.url} alt="" />
      <div className="songRow-info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
        <p>{track.album.name}</p>
      </div>
    </div>
  );
}

export default SongRow;
