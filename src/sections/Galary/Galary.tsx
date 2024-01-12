import React, { FC } from 'react';
import one from '../../assets/image/1.png'
import two from '../../assets/image/2.png'
import tree from '../../assets/image/3.png'
import four from '../../assets/image/4.png'
import five from '../../assets/image/5.png'
import six from '../../assets/image/6.png'


const Galary: FC = () => {
    return (
        <section className="galery">
            <div className="galery_name">
                <h3 className="gall_neon">ГАЛЕРЕЯ</h3>
                <h3 className="neon_gall">ГАЛЕРЕЯ</h3>
                <h3 className="gallary_neon">ГАЛЕРЕЯ</h3>
                <h3 className="neon_gallary">ГАЛЕРЕЯ</h3>
            </div>
            <div className="galery_photo container">
                <img src={one} alt="paint" />
                <img src={two} alt="paint" />
                <img src={tree} alt="paint" />
                <img src={four} alt="paint" />
                <img src={five} alt="paint" />
                <img src={six} alt="paint" />
            </div>
        </section>
    );
};

export default Galary;