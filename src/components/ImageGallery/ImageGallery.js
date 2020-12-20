import React, { Component } from 'react';

import searchImg from '../services/apiPixabay';
import ButtonLoadMore from '../ButtonLoadMore';
import s from './ImageGallery.module.css';
import ItemImg from '../ImageGalleryItem';
import Modal from '../Modal';
import Loader from '../Loader';

class ImageGallery extends Component {
  state = {
    images: null,
    modalShow: false,
    modalIndex: 0,
    loading: false,
  };

  apiSearch = new searchImg();

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sword !== this.props.sword) {
      // console.log('Змінилось пошукове слово !');
      this.apiSearch.resetPage();
      this.setState({ images: null });

      this.fetchImg();
    }
  }

  fetchImg = () => {
    this.apiSearch.queryWord = this.props.sword;
    this.setState({ loading: true });
    setTimeout(() => {
      this.apiSearch
        .searchImg()
        .then(res => {
          this.setState({ images: res.hits });
          // console.log(res);
        })
        .finally(this.setState({ loading: false }));
    }, 1000);
  };

  async onCkickLoadMore(even) {
    // console.log('click more');

    await this.apiSearch.incrementPage();
    await this.apiSearch.searchImg().then(res => {
      this.setState(({ images }) => ({
        images: [...images, ...res.hits],
      }));

      // console.log(res);
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    // this.apiSearch.incrementPage();
    // this.fetchImg();
    // console.log(this);
  }

  modalShow = () => {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
  };

  handlerModal = id => {
    const numId = Number(id);

    const isLargeNumber = element => element.id === numId;

    const indexModsl = this.state.images.findIndex(isLargeNumber);
    this.setState({ modalIndex: indexModsl });
    this.modalShow();
  };

  render() {
    const { images, modalIndex, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
        <ul className={s.imageGallery}>
          {images &&
            images.map(item => {
              return (
                <ItemImg
                  key={item.id}
                  img={item}
                  onClickM={this.handlerModal}
                />
              );
            })}
        </ul>
        {images && <ButtonLoadMore onClick={() => this.onCkickLoadMore()} />}
        {this.state.modalShow && (
          <Modal toggleModal={this.modalShow} item={images[modalIndex]} />
        )}
      </>
    );
  }
}

export default ImageGallery;
