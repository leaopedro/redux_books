import React, { PropTypes } from 'react';
import './style.less';

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        addSubreddit: '',
      },
    };

    // NO SENSE, BUT NEEDED FOR EVERY CLASS METHOD CALLED IN RENDER!
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onAddSubreddit(this.state.form.addSubreddit);
  }

  onChangeSearchBox(e) {
    let newForm = Object.assign({}, this.state.form);
    newForm[e.target.name] = e.target.value;

    const newState = Object.assign({}, this.state, { form: newForm });
    this.setState(newState);
  }


  render() {
    return (
      <div className="search-container">
        <input type="text" onChange={this.onChangeSearchBox} />
        <button className="search-btn" onClick={this.onSubmit}> Buscar</button>
      </div>
    );
  }

}

Options.propTypes = {
  onSearch: PropTypes.func.isRequired
};


export default Options;
