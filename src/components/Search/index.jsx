import React, { PropTypes } from 'react';
import './style.less';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    // NO SENSE, BUT NEEDED FOR EVERY CLASS METHOD CALLED IN RENDER!
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
  }

  onSubmit(e) {
    console.log('onSubmit');
    this.props.onSearchRequest(this.state.query);
  }

  onChangeSearchBox(e) {
    console.log('onChangeSearchBox');
    let text = e.target.value;
    const newState = Object.assign({}, this.state, { query: text });
    this.setState(newState);
  }


  render() {
    return (
      <div className="search-container">
        <div className="field-container">
          <input className="search-field" type="text" onChange={this.onChangeSearchBox} />
          <button className="btn default-btn search-btn" onClick={this.onSubmit}>
            <i className="fa fa-search"> </i>
          </button>
        </div>
      </div>
    );
  }

}

Search.propTypes = {
  onSearchRequest: PropTypes.func.isRequired
};


export default Search;
