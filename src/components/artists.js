import React from 'react'
import Collapsible from 'react-collapsible'
import { SongList, AddSongForm } from './songs.js'
import '../styles/artists.css'
import '../styles/font-awesome.min.css'

const ArtistList = props => {
  if (!props.artists) {
    return <div></div>
  }
  return (
    <div className="ArtistList">
      {
        props.artists.map(artist =>
          <Artist key={artist.Id} {...artist} addSong={props.addSong} deleteArtist={props.deleteArtist} deleteSong={props.deleteSong} />
        )
      }
    </div>
  )
}

const Artist = props => {
  return (
    <Collapsible className="Artist" openedClassName="Artist" trigger={artistTitle(props)} transitionTime={200}>
      <AddSongForm artist={props} onSubmit={props.addSong} />
      <SongList artist={props} songs={props.Songs} deleteSong={props.deleteSong} />
    </Collapsible>
  )
}

const artistTitle = props => {
  return (
    <div>
      {props.Name}
      <i className="fa fa-fw fa-chevron-down" />
      <i className="fa fa-fw fa-chevron-up" />
      <i className="fa fa-minus" onClick={event => {
        event.stopPropagation();
        props.deleteArtist(props);
      }} />
    </div>
  )
}

class AddArtistForm extends React.Component {
  state = {
    artistName: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddArtist({ name: this.state.artistName });
    this.setState({ artistName: "" });
  }

  render() {
    return (
      <form className="ArtistForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.artistName}
          onChange={event => this.setState({ artistName: event.target.value })}
          placeholder="Add new artist"
          required
        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export {
  ArtistList,
  AddArtistForm
}
