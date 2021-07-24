import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Please, enter necessary information');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}></span>
        </button>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageName"
          value={imageName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

//Class usage
// class Searchbar extends Component {
//   state = {
//     imageName: '',
//   };

//   handleNameChange = event => {
//     this.setState({ imageName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.imageName.trim() === '') {
//       toast.error('Please, enter necessary information!');
//       return;
//     }

//     this.props.onSubmit(this.state.imageName);
//     this.setState({ imageName: '' });
//   };

//   render() {
//     return (
//       <header className={styles.Searchbar}>
//         <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <span className={styles.SearchFormButtonLabel}></span>
//           </button>
//           <input
//             className={styles.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="imageName"
//             value={this.state.imageName}
//             onChange={this.handleNameChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
