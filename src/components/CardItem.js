import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.url} alt='Travel Image' className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text' >{props.text}</h5>
                        <Button variant="primary" onClick={event => window.location.href=`${props.src}`}>Klik Untuk Deskripsi</Button>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
