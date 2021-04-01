import React from 'react'
import seriesImg7 from './../../../assets/series-7.png'
import seriesImg8 from './../../../assets/series-8.png'
import seriesImg9 from './../../../assets/series-9.png'

const Featured = () => {
    const featured = [{
        id: 7,
        image: `${seriesImg7}`,
        title: 'Sikka (Ebony & Maple)',
        newPrice: '1.198.000',
        type:'Featured'
    },
    {
        id: 8,
        image: `${seriesImg8}`,
        title: 'Lore Walnut',
        newPrice: '1.280.000',
        type:'Featured'
    },
    {
        id: 9,
        image: `${seriesImg9}`,
        title: 'Way Kambas Limited Edition',
        newPrice: '1.170.000',
        type:'Featured'
    }]
    return (
        <div className="col-4">
        <h2 className="series__title title">Featured</h2>
        {featured.map(e => {
            return (
                <div key={e.id} className="series__item">
                    <div className="series__inner">
                        <div className="series__img">
                            <img src={e.image} alt="" />
                        </div>
                        <div className="product__info">
                            <div className="series__name">{e.title}</div>
                            <div className="series__price">Rp {e.newPrice}</div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Featured;