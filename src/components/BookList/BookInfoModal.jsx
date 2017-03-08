/*
{
    "kind": "books#volume",
    "id": "oIuPl6RZHjQC",
    "etag": "QnBeVdyc3eU",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/oIuPl6RZHjQC",
    "volumeInfo": {
    "title": "Peter",
        "authors": [
        "Kate Walker"
    ],
        "publisher": "Houghton Mifflin Harcourt",
        "publishedDate": "2001-04",
        "description": "An ordinary fifteen-year-old Australian kid, who enjoys riding his dirt bike and wants to be a photographer, becomes confused about his sexuality when he finds he is attracted to a gay friend of his older brother.",
        "industryIdentifiers": [
        {
            "type": "ISBN_10",
            "identifier": "0618111301"
        },
        {
            "type": "ISBN_13",
            "identifier": "9780618111305"
        }
    ],
        "readingModes": {
        "text": false,
            "image": true
    },
    "pageCount": 240,
        "printType": "BOOK",
        "categories": [
        "Juvenile Fiction"
    ],
        "averageRating": 4.0,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.0.1.0.preview.1",
        "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=oIuPl6RZHjQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=oIuPl6RZHjQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
        "previewLink": "http://books.google.com.br/books?id=oIuPl6RZHjQC&printsec=frontcover&dq=peter&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com.br/books?id=oIuPl6RZHjQC&dq=peter&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.com.br/books/about/Peter.html?hl=&id=oIuPl6RZHjQC"
},
    "saleInfo": {
    "country": "BR",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
},
    "accessInfo": {
    "country": "BR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": false
    },
    "pdf": {
        "isAvailable": false
    },
    "webReaderLink": "http://books.google.com.br/books/reader?id=oIuPl6RZHjQC&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
},
    "searchInfo": {
    "textSnippet": "An ordinary fifteen-year-old Australian kid, who enjoys riding his dirt bike and wants to be a photographer, becomes confused about his sexuality when he finds he is attracted to a gay friend of his older brother."
}
},
*/

import React, { PropTypes } from 'react';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';
import './bookInfoModal.less';

class BookInfoModal extends React.Component {

    constructor(props) {
        super(props);

        this.hideModal = this.hideModal.bind(this);
    }

    hideModal() {
        this.props.onCloseRequest();
    };

    render() {
        return (
            <Modal isOpen={this.props.isActive} onRequestHide={this.hideModal}>
                <ModalHeader>
                    <ModalClose onClick={this.hideModal}/>
                    <ModalTitle>{(this.props.bookData)?this.props.bookData.volumeInfo.title:''}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <img src={
                    (this.props.bookData && this.props.bookData.volumeInfo.imageLinks)?this.props.bookData.volumeInfo.imageLinks.smallThumbnail
                    :
                    'https://www.riobeauty.co.uk/images/product_image_not_found_thumb.gif'
                    }/>
                    <p>{(this.props.bookData)?this.props.bookData.volumeInfo.description:''}</p>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-default' onClick={this.hideModal}>
                        Close
                    </button>
                </ModalFooter>
            </Modal>
        );
    }

}

BookInfoModal.propTypes = {

};
export default BookInfoModal;
