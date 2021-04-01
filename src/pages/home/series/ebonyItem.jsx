import React from 'react';

const EbonyItem = () => {
  return (
    <div className='col-4'>
      <h2 className='series__title title'>Ebony Series</h2>
      <div className='series__item'>
        <div className='series__inner'>
          <div className='series__img'>
            <img src='{item.image}' alt='тут картина' />
          </div>
          <div className='product__info'>
            <div className='series__name'>тут имя</div>
            <div className='series__price'>Rp тут цена</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbonyItem;
