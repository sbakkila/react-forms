import React from 'react';
import Songs from './Songs.js';

export default class Playlist extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const id = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(id);
  }

  render(){
    console.log('playlist props ', this.props);
    return(
        <div>
          <h3>{ this.props.selectedPlaylist.name }</h3>
          <Songs songs={this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
          { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
          <hr />
        </div>
      )
  }
}
