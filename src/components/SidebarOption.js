import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./SidebarOption.css";

const SidebarOption = ({ spotify, id, title, Icon }) => {
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id, e) => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      id: id,
    });

    spotify.getPlaylistTracks(id).then((response) => {
      dispatch({
        type: "SET_TRACKS",
        tracks: response,
      });
    });
  };

  return (
    <div className="sidebar-option">
      {Icon && <Icon fontSize="large" className="sidebar-option-icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={(e) => changePlaylist(id, e)}>{title}</p>
      )}
    </div>
  );
};

export default SidebarOption;
