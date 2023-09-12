import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {changeCity} from '../../store/app-process/app-process';
import {INITIAL_CITY} from '../../const';
import {useAppDispatch} from '../../hooks';

function NotFoundPage (): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <h1>404</h1>
      <p> Страница не найдена </p>
      <Link to="/"
        onClick={() => {
          dispatch(changeCity(INITIAL_CITY));
        }}
      >
        <h3> Вернуться на главную страницу </h3>
      </Link>
    </div>
  );
}

export {NotFoundPage};
