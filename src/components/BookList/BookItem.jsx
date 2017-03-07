import React, { PropTypes } from 'react';
import './bookItem.less';

class BookItem extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   // this.onSubmit = this.onSubmit.bind(this);
  // }

  // onChangeSearchBox(e) {
  //   console.log('onChangeSearchBox');
  //   let text = e.target.value;
  //   const newState = Object.assign({}, this.state, { query: text });
  //   this.setState(newState);
  // }


  render() {
    return (
      <div className="book-item">

      </div>
    );
  }
}

BookItem.propTypes = {
  // bookList: PropTypes.array.isRequired
};



export default BookItem;
