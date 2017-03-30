import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(){
    return !(this.state.playlist.length > 0 && this.state.playlist.length < 17);
  }

  onChange(event){
    this.setState({playlist: event.target.value})
    console.log(this.state.playlist);
  }

  onSubmit(event){
    event.preventDefault();

    axios.post('/api/playlists/', {name: this.state.playlist})
    .then( (res) => res.data)
    .then ( (newPlaylist) => {
      this.setState({playlist: ''});
    })
  }

  render() {
    return (
      <div>
        < NewPlaylist onSubmit={this.onSubmit} onChange={this.onChange} initialValue={this.state.playlist} validation={this.validateInput}/>
      </div>
    )
  }
}
