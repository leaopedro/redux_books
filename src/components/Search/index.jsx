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
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onSubmit(e) {
      if(!this.props.isLoading){
          this.props.onSearchRequest(this.state.query);
      }
  }


  onChangeSearchBox(e) {
    let text = e.target.value;
    const newState = Object.assign({}, this.state, { query: text });
    this.setState(newState);
  }
  onKeyPress(e) {
    var code = e.keyCode || e.which;
    if(code == 13) { //Enter keycode
        if(!this.props.isLoading){
            this.props.onSearchRequest(this.state.query);
        }
    }
  }


  render() {
      console.log(this.props.isLoading);
      return (
      <div className="search-container">
        <div className="field-container">
          <input className="search-field" type="text" onChange={this.onChangeSearchBox} onKeyPress={this.onKeyPress} />
          <button className="btn default-btn search-btn" onClick={this.onSubmit}>
              {
              (this.props.isLoading)?
                  <i className="fa fa-spin fa-spinner"> </i>
                  :
                  <i className="fa fa-search"> </i>
              }
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
