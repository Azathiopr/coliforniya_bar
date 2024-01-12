import React, { FC } from 'react';
import map from '../../assets/image/карта.png'
import icon from '../../assets/image/icon.png'


const Location: FC = () => {
    return (
        <section className="map">
            <img className="map_photo" src={map} alt="paint" />
            <img className="map_logo" src={icon} alt="logo" />
        </section>
    );
};

export default Location;