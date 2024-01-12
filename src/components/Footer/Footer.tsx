import React, { FC } from 'react';
import line from '../../assets/image/line.png'
import vk from '../../assets/image/bxl-vk.svg.png'
import instagram from '../../assets/image/bxl-instagram.svg.png'


const Footer: FC = () => {
    return (
        <footer>
            <div className="ftr">
                <h2>California Bar</h2>
                <p>ул. Арбат, 23, стр. 1</p>
                <p> + 7(499) 579-80-04</p>
                <p> Работаем круглосуточно</p>
            </div>
            <img className="underline" src={line} alt="photo" />
            <div className="logo">
                <img src={vk} alt="logo" />
                <img src={instagram} alt="logo" />
            </div>
        </footer>
    );
};

export default Footer;