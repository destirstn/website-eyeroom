import React, {useState, useEffect} from 'react';
import './SearchNavbar.css';
import data from './data';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import CardItem from './CardItem';

const Search = () => {
    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!false);

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

   useEffect(() => {
       showButton();
   }, []);

    window.addEventListener('resize', showButton);

    return (
        <section>
            <nav className="navbar-search">
                <div className="navbar-draf">

                <a href="./services"><button type="button" class="btn btn-success"style={{width:'100px',height:'40px', borderRadius:'10%', }}>Back</button></a>

                    <Form className="d-flex" >
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={filter}
                        onChange={searchText.bind(this)}
                        style={{width:'300px' }}
                        />
                    </Form>
                       <img src="/images/logo-eyeroom.png" className='img-logo' onClick={closeMobileMenu} style={{}}/>
                </div>  
            </nav>

            {/* <video src="/videos/video-5.mp4" autoPlay loop muted/> */}
            <div className='cards'  style={{marginTop:'0px', padding:'20px'}}>
            <div className="cards__wrapper" style={{marginTop:'0px'}}></div>
            <div className="row justify-content-center">


                {dataSearch.map((item, index) => {
                    return(


            <div className="col-11 col-md-2 col-lg-3 mx-0 mb-4">
                <div className="cards__items">
                <CardItem 
                    url={item.img}
                    text={item.text}
                    label={item.label}
                    src={item.href}
                    >
                    </CardItem>
                    </div>
                </div>

                    )
                })}
            </div>
            </div> 
        </section>

    )
}

export default Search;