import React, { PropTypes } from 'react';
import BookItem from './BookItem.jsx';
import './style.less';

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(e) {
    let pageNum = Number(e.target.dataset.value);
    if(pageNum !== this.props.currentPage){
      this.props.onPageChoice(pageNum);
    }
  }

  render() {
    let pageItems = [];
    for(let i=1;i<=this.props.totalPages;i++){
      pageItems.push(<span key={i} data-value={i} className={(i==this.props.currentPage)?"page-item active":"page-item"} onClick={this.onChangePage}>{i}</span>);
    }
    return (
      <div className="list-container">
        <div className="row">
          {
            (this.props.bookList.length > 0)?
              this.props.bookList.map((item) => {
                return (
                  <BookItem key={item.id} showBookInfo={this.props.showBookInfo} bookItem={item}> </BookItem>
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
  onPageChoice: PropTypes.func.isRequired,
  bookList: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};


export default Page;
