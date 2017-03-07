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
      <div className="book-item col-xs-12 col-sm-4 col-md-3">
        <div className="card row">
          <div className="book-thumb col-xs-5 col-sm-12">
            <img src={(this.props.bookItem.volumeInfo.imageLinks)?this.props.bookItem.volumeInfo.imageLinks.smallThumbnail:'https://www.riobeauty.co.uk/images/product_image_not_found_thumb.gif'} />
          </div>
          <div className="book-info col-xs-7 col-sm-12">
            <h1 className="book-title">
              {this.props.bookItem.volumeInfo.title}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

BookItem.propTypes = {
  bookItem: PropTypes.object.isRequired
  // bookList: PropTypes.array.isRequired
};



export default BookItem;
