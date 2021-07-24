import { useState, useEffect } from 'react';
import LoaderComponent from './components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './components/Searchbar';
import Container from './components/Container';
import ImageGallery from './components/ImageGallery';
import pixabayAPI from './services/pixabay-api';
import Button from './components/Button';
import ErrorComponent from './components/Error';
import './App.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchForm = imageName => {
    setImageName(imageName);
    setImages([]);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setStatus(Status.PENDING);

    pixabayAPI
      .fetchImage(imageName, currentPage)
      .then(images => {
        if (images.total === 0) {
          toast.dark('No images found. Please submit another query!');
          setStatus(Status.REJECTED);
          return;
        }

        setImages(prevState => [...prevState, ...images.hits]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(() => {
        setTimeout(() => {
          window.scrollBy({
            top: 500,
            behavior: 'smooth',
          });
        }, 500);
      });
  }, [currentPage, imageName, error]);

  const onClickLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSearchForm} />

      {status === Status.IDLE && (
        <div
          style={{
            margin: '15px auto',
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '25px',
            fontStyle: 'italic',
          }}
        >
          Please enter a query!
        </div>
      )}

      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <Button onClickLoadMore={onClickLoadMore} />
        </>
      )}

      {status === Status.PENDING && (
        <>
          <LoaderComponent />
        </>
      )}

      {status === Status.REJECTED && (
        <>
          <ErrorComponent />
        </>
      )}

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

//Class usage
// class App extends Component {
//   state = {
//     imageName: '',
//   };

//   handleSearchForm = imageName => {
//     this.setState({ imageName });
//   };

//   render() {
//     const { imageName } = this.state;

//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleSearchForm} />
//         <ImageGalleryInfo
//           imageName={imageName}
//           currentPage={this.props.currentPage}
//         />
//         <ToastContainer autoClose={3000} />
//       </Container>
//     );
//   }
// }

// export default App;
