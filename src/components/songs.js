import React from 'react';
import './../styles/songs.css';

export const SongList = props => {
  if (props.songs === undefined) {
    return <div className="SongList"></div>;
  }
  return (
    <div className="SongList">
      {
        props.songs.map(song =>
          <Song key={song.Id} {...song} artist={props.artist} deleteSong={props.deleteSong} />
        )
      }
    </div>
  )
}

export const Song = props => {
  return (
    <div className="Song">
      {props.Name}
      <div className="Song-delete" onClick={e => props.deleteSong(props)}>
        <i className="fa fa-times" />
      </div>
    </div>
  )
}

export class AddSongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: props.artist,
      songName: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const song = {
      artistId: this.state.artist.Id,
      name: this.state.songName,
      lengthSeconds: 0,
      isFavoriteArtist: false
    }

    this.props.onSubmit(song);
    this.setState({ songName: "" });
  }

  render() {
    return (
      <form className="SongForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.songName}
          onChange={event => this.setState({ songName: event.target.value })}
          placeholder="Add new song"
          required
        />
        <button type="submit">+</button>
      </form>
    )
  }
}
