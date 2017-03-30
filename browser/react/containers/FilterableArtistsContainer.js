import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.collectVal = this.collectVal.bind(this);
  }
  collectVal(event){
    this.setState({inputValue: event.target.value});
  }
  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
    return (
      <div>
        <FilterInput handleChange={this.collectVal}/>
        <Artists artists={filteredArtists} />
      </div>
    )
  }
}
