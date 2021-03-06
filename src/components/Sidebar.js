import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";
import { Link } from "react-router-dom";

function Sidebar({ spotify }) {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <Link to="/">
        <img
          className="sidebar-logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="Spotify Logo"
        />
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <SidebarOption Icon={SearchIcon} title="Search" />
      </Link>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          id={playlist.id}
          key={playlist.id}
          spotify={spotify}
        />
      ))}
    </div>
  );
}

export default Sidebar;
