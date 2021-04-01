import React from 'react'
import seriesImg4 from './../../../assets/series-4.png'
import seriesImg5 from './../../../assets/series-5.png'
import seriesImg6 from './../../../assets/series-6.png'

const Ebony = () => {
    const ebony = [{
        id: 4,
        image: `${seriesImg4}`,
        title: 'Tomia Ebony',
        oldPrice: '1.280.000',
        newPrice: '960.000',
        type: 'Ebony'
    },
    {
        id: 5,
        image: `${seriesImg5}`,
        title: 'Mori',
        newPrice: '950.000',
        type: 'Ebony'
    },
    {
        id: 6,
        image: `${seriesImg6}`,
        title: 'Alor',
        newPrice: '1.170.000',
        type: 'Ebony'
    }]
    return (
        <div className="col-4">
        <h2 className="series__title title">Ebony Series</h2>
        {ebony.map(e => {
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

export default Ebony;