import React, { PropTypes } from 'react';
import BookItem from './BookItem.jsx';
import './style.less';

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(e) {
    console.log('onChangePage', e.target.key);
  }


  render() {
    let pageItems = [];
    for(let i=1;i<=this.props.totalPages;i++){
      pageItems.push(<div key={i} className="page-item" onClick={this.onChangePage}>{i}</div>);
    }
    return (
      <div className="list-container">
        <div className="row container">
          {
            (this.props.bookList.length > 0)?
              this.props.bookList.map((item) => {
                return (
                  <BookItem key={item.id} bookItem={item}> </BookItem>
                );
              })
              :
              ''
          }
        </div>
        <div className="pages-container">
          {pageItems}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  bookList: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};


export default Page;
