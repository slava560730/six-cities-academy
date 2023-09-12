import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {useRef, FormEvent} from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PASSWORD_NOTIFY, INITIAL_CITY, CITIES} from '../../const';
import {changeCity} from '../../store/app-process/app-process';
import {getRandomArrayElement} from '../../utils';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(changeCity(INITIAL_CITY));
    }
  };

  const showToast = () => {
    toast(PASSWORD_NOTIFY);
  };

  const randomCity = getRandomArrayElement(CITIES);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <ToastContainer />
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  pattern="^(?=.*[A-Za-zА-Яа-яЁё])(?=.*[0-9]).{0,16}$"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                onClick={showToast}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
              <ToastContainer />
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span
                  onClick={() => {
                    dispatch(changeCity(randomCity));
                  }}
                >
                  {randomCity}
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {LoginPage};
