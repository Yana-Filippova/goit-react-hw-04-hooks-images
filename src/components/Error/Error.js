import errorImage from './no_result_found.jpg';
import './Error.module.css';

export default function ErrorComponent() {
  return (
    <div role="alert" className="Wrapper">
      <img
        className="errorImg"
        src={errorImage}
        width="500"
        alt="no_result_found"
      />
    </div>
  );
}
