import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer'
import NewPlaylistContainer from './containers/NewPlaylistContainer'
import NewPlaylist from './components/NewPlaylist'
import Playlist from './components/Playlist'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer} >
      <Route path="/albums" component={Albums} />
      <Route path="/new-playlist" component={NewPlaylistContainer} />
      <Route path="playlists/:playlistId" component={Playlist} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);
