import React from 'react';
import newsImage from '../../../assets/news-image.png';

import './style.scss';

const News = () => {
  return (
    <section className='news'>
      <div className='container'>
        <h3 className='news__title title'>Recent News</h3>
        <div className='news__row row'>
          <div className='col-4'>
            <div className='news-item'>
              <span className='news-item__suptitle'>Where To Travel</span>
              <p className='news-item__title'>Matoa Where To Travel? Yogyakarta</p>
              <a className='news-item__discover' href=''>
                Discover
              </a>
            </div>
          </div>
          <div className='col-8'>
            <div className='news-item'>
              <svg
                className='news-item__rectangle'
                width='741'
                height='692'
                viewBox='0 0 741 692'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect x='101' y='38' width='640' height='458' fill='#F1DDC9' />
                <path
                  d='M1 109L233 1L339 181L581 109L737 265'
                  stroke='#D84727'
                  stroke-opacity='0.61'
                />
                <path
                  d='M1 156L219 51L333 249L571 156L739 329'
                  stroke='#D84727'
                  stroke-opacity='0.4'
                />
                <path
                  d='M1 205L203 93L331 309L557 205L739 401'
                  stroke='#D84727'
                  stroke-opacity='0.2'
                />
                <path d='M366 519L546 411L674 627L765 565' stroke='#D84727' stroke-opacity='0.4' />
                <path d='M366 561L535 465L665 691L779 609' stroke='#D84727' stroke-opacity='0.61' />
              </svg>
              <img className="news-item__image" src={newsImage} alt='news-bg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
