import React, { Component } from 'react';
import { ArtistList, AddArtistForm } from './../components/artists.js';
import { getArtists, addArtist, addSong, deleteArtist, deleteSong } from './../actions/actions.js';
import './../styles/app.css';
import './../styles/font-awesome.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.store.dispatch(getArtists());
  }

  handleAddArtist = artist => {
    this.store.dispatch(addArtist(artist));
  }

  handleAddSong = song => {
    this.store.dispatch(addSong(song));
  }

  handleDeleteArtist = artist => {
    this.store.dispatch(deleteArtist(artist));
  }

  handleDeleteSong = song => {
    this.store.dispatch(deleteSong(song));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="App-logo fa fa-music" alt="logo" />
          <i className="App-logo fa fa-music" alt="logo" />
          <i className="App-logo fa fa-music" alt="logo" />
          <h1 className="App-title">Welcome to Music App !</h1>
        </header>
        <div className="App-body">
          <h1>Artists</h1>
          <AddArtistForm onAddArtist={this.handleAddArtist} />
          <ArtistList
            artists={this.store.getState().artists}
            addSong={this.handleAddSong}
            deleteArtist={this.handleDeleteArtist}
            deleteSong={this.handleDeleteSong} />
        </div>
      </div>
    )
  }
}

export default App;
