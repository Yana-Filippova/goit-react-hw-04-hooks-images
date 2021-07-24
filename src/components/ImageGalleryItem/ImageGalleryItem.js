import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ src, alt, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={styles.ImageGalleryItemImage}
        onClick={toggleModal}
      />

      {showModal && (
        <Modal onClose={toggleModal} src={largeImageURL} alt={alt} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

//Class usage
// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   static propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { src, alt, largeImageURL } = this.props;
//     const { showModal } = this.state;

//     return (
//       <li className={styles.ImageGalleryItem}>
//         <img
//           src={src}
//           alt={alt}
//           className={styles.ImageGalleryItemImage}
//           onClick={this.toggleModal}
//         />

//         {showModal && (
//           <Modal onClose={this.toggleModal} src={largeImageURL} alt={alt} />
//         )}
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;
