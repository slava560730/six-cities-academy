import Logo from '../logo/logo';
import { HeaderAuth } from './header-auth';
import { HeaderNoAuth } from './header-no-auth';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Header (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ? <HeaderAuth /> : <HeaderNoAuth />}
        </div>
      </div>
    </header>
  );
}

export {Header};
