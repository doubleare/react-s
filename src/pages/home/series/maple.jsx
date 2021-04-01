import React from 'react'
import seriesImg1 from './../../../assets/series-1.png'
import seriesImg2 from './../../../assets/series-2.png'
import seriesImg3 from './../../../assets/series-3.png'

const Maple = () => {
    const maple = [{
        id: 1,
        image: `${seriesImg1}`,
        title: 'Way Kambas Maple',
        newPrice: '1.280.000'
    },
    {
        id: 2,
        image: `${seriesImg2}`,
        title: 'Kaili',
        newPrice: '950.000'
    },
    {
        id: 3,
        image: `${seriesImg3}`,
        title: 'Sunda',
        newPrice: '1.170.000'
    }]
    return (
        <div className="col-4">
        <h2 className="series__title title">Maple Series</h2>
        {maple.map(e => {
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

export default Maple;