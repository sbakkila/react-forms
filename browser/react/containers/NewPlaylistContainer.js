import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: '',
      initLoad: true
    };

    this.onChange = this.onChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  validateInput(){
    return !(this.state.playlist.length > 0 && this.state.playlist.length < 17);
  }

  onChange(event){
    this.setState({
      playlist: event.target.value,
      initLoad: false
    })
    console.log(this.state.playlist);
  }

  onSubmit(event){
    event.preventDefault();
    const addPlaylist = this.props.addPlaylist;
    addPlaylist(this.state.inputValue);
    .then ( (newPlaylist) => {
      this.setState({playlist: '', initLoad: true});
    })
  }

  render() {
    return (
      <div>
        < NewPlaylist onSubmit={this.onSubmit} onChange={this.onChange} initialValue={this.state.playlist} validation={this.validateInput} initLoad={this.state.initLoad}/>
      </div>
    )
  }
}
