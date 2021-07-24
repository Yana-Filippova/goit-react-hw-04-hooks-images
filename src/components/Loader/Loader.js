import Loader from 'react-loader-spinner';

export default function LoaderComponent() {
  return (
    <Loader
      type="Hearts"
      color="#3f51b5"
      height={160}
      width={160}
      timeout={3000}
    />
  );
}

//Class usage
// class LoaderComponent extends Component {
//   render() {
//     return (
//       <Loader
//         type="Hearts"
//         color="#3f51b5"
//         height={160}
//         width={160}
//         timeout={3000}
//       />
//     );
//   }
// }

// export default LoaderComponent;
