export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  current_playlist: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
  tracks: null,
  track: null,
};

const reducer = (state, action) => {
  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_CURRENT_PLAYLIST": {
      let currentPlaylist = null;
      state.playlists.items.forEach((playlist) => {
        if (playlist.id === action.id) {
          currentPlaylist = playlist;
        }
      });
      return {
        ...state,
        current_playlist: currentPlaylist,
      };
    }

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_TRACKS": {
      return {
        ...state,
        tracks: action.tracks,
      };
    }
    case "SET_TRACK": {
      return {
        ...state,
        track: action.track,
      };
    }

    default:
      return state;
  }
};

export default reducer;
