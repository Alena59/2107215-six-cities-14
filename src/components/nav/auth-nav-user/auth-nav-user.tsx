import {Link} from 'react-router-dom';
import {logoutAction} from '../../../store/api-actions';
import {useAppDispatch} from '../../../hooks';
import {AppRoute} from '../../../const';

function AuthNavUser() {
  const dispatch = useAppDispatch();

  return (
    <>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">3</span>

        </a>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Login}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default AuthNavUser;
