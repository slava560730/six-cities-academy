import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';
import {INITIAL_CITY} from '../../const';

function Logo(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Link className="header__logo-link" to="/"
      onClick={() => {
        dispatch(changeCity(INITIAL_CITY));
      }}
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

export default Logo;
