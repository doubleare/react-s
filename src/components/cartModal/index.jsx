import React from 'react';
import Item from './item';
import { useSelector } from 'react-redux';
import './style.scss';
const CartModal = ({ setModalActive }) => {
  const modalRef = React.useRef();
  React.useEffect(() => {
    const modalWrapper = modalRef.current;
    const checkClick = (event) => {
      if (!event.path.includes(modalWrapper) && !event.path.includes('widgets__cart') ) {
        setModalActive(false)
      };
    };
    document.addEventListener('click', checkClick);
    return () => {
      document.removeEventListener('click', checkClick);
    };
  }, []);

  let items = useSelector((state) => state.watchesReducer.items);
  let totalWatchesPrice = items.reduce((a,b) => a + b.totalPrice,0)

  return (
    <div className='modal'>
      <div ref={modalRef} className='modal__wrapper'>
        {items.map(e => {return <Item {...e} item={e} />})}
        <div className='modal__checkout'>
          <div className='modal__left'>
            <span className='modal__promo'>Kode Promo</span>
            <input className='modal__input' type='text' placeholder='Type your Promocode' />
            <span className='modal__discount'>35% OFF</span>
          </div>
          <div className='modal__right'>
            <span className='modal__subtotal'>Subtotal</span>
            <div className='modal__total'>
              <div className='modal__total-old-price'>Rp {totalWatchesPrice}</div>
              <div className='modal__total-new-price'>Rp {totalWatchesPrice}</div>
            </div>
          </div>
          <button className='modal__btn'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
