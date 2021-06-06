import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import Zoom from "react-reveal/Zoom";

function Body({ spotify }) {
  const [{ current_playlist, tracks, track, discover_weekly }, dispatch] =
    useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1E35jI8gotbcvR`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <img
          src={
            current_playlist
              ? current_playlist?.images[0].url
              : "https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"
          }
          alt=""
        />
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>{current_playlist?.name}</h2>
          <p>{current_playlist?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon fontSize="large" className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>

        {tracks?.items.map((track) => (
          <Zoom>
            <SongRow track={track.track} key={track.track.id} />
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Body;
