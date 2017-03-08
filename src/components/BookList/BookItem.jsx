import React, { PropTypes } from 'react';
import './bookItem.less';
import FavoriteContainer from '../../containers/FavoriteContainer'

class BookItem extends React.Component {

   constructor(props) {
     super(props);

     this.onClickCard = this.onClickCard.bind(this);
   }
   onClickCard(e) {
     this.props.showBookInfo(this.props.bookItem);
   }
  render() {
    let title = this.props.bookItem.volumeInfo.title;
    let index = title.toLowerCase().indexOf(this.props.currentQuery.toLowerCase());
    console.log(title.substr(index, this.props.currentQuery.length));
    if(index!==-1){
      title = <h1 className="book-title">{title.substring(0, index)}<b>{title.substr(index,this.props.currentQuery.length)}</b>{title.substring(index+this.props.currentQuery.length)}</h1>
    }else{
      title = <h1 className="book-title">{this.props.bookItem.volumeInfo.title}</h1>;
    }

    return (
      <div className="book-item col-xs-12 col-sm-4 col-md-3">
        <div className="card row" onClick={this.onClickCard}>
          <div className="book-thumb col-xs-5 col-sm-12">
            <img src={(this.props.bookItem.volumeInfo.imageLinks)?this.props.bookItem.volumeInfo.imageLinks.smallThumbnail:'https://www.riobeauty.co.uk/images/product_image_not_found_thumb.gif'} />
          </div>
          <div className="book-info col-xs-7 col-sm-12">
            {title}
          </div>
          <div className="options row">
            <FavoriteContainer bookId={this.props.bookItem.id} />
          </div>

        </div>
      </div>
    );
  }
}

BookItem.propTypes = {
  bookItem: PropTypes.object.isRequired,
  showBookInfo: PropTypes.func.isRequired
  // bookList: PropTypes.array.isRequired
};

export default BookItem;
