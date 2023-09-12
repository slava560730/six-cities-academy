import './spinner.css';
import { getServerError } from '../../store/app-data/selectors';
import { useAppSelector } from '../../hooks';

function LoadingScreen(): JSX.Element {
  const isServerError = useAppSelector(getServerError);

  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      {isServerError ? <h1>The server is unavailable</h1> : ''}
    </div>
  );
}

export {LoadingScreen};
