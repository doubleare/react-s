import React from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import cart from '../../assets/cart.svg';
import { NavLink } from 'react-router-dom';
import CartModal from '../cartModal';
import {useSelector} from 'react-redux'

const Header = () => {
  const [modalActive, setModalActive] = React.useState(false);

  const onClickModal = () => {
    setModalActive(true);
  };
  let item = useSelector((state) => state.watchesReducer.items)
  let count = item.reduce((a,b) => a+b.count,0)
  return (
    <header className='header'>
      {modalActive && <CartModal  setModalActive={setModalActive}/>}
      <div className='container'>
        <div className='header__inner'>
          <div className='header__logo'>
            <NavLink to='/home'>
              <img src={logo} />
            </NavLink>
          </div>
          <nav>
            <ul className='header__list'>
              <li className='header__item'>
                <NavLink to='/watches'>Watches</NavLink>
              </li>
              <li className='header__item'>
                <NavLink to='/Eyewear'>Eyewear</NavLink>
              </li>
              <li className='header__item'>
                <NavLink to='/Accessories'>Accessories</NavLink>
              </li>
              <li className='header__item'>
                <NavLink to='/News'>News</NavLink>
              </li>
            </ul>
          </nav>
          <div className='widgets'>
            <a href='#' className='widgets__seacrh'>
              <img src={search} />
            </a>
            <a href='#' className='widgets__user'>
              <img src={user} /> <span>Log In</span>
            </a>
            <button onClick={onClickModal} className='widgets__cart'>
              <img src={cart} />
              <span>{count}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
