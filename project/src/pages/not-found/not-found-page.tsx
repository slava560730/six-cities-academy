import {Helmet} from 'react-helmet-async';

function NotFoundPage (): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <h1>404</h1>
      <p> Страница не найдена </p>
    </div>
  );
}

export {NotFoundPage};
