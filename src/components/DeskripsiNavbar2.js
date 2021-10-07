import React, {useState, useEffect} from 'react';
import './DeskripsiNavbar.css';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

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
        <>
            <nav className="navbar-desc">
                <div className="navbar-deskripsi">
                <a href="./coba"><button type="button" class="btn btn-success"style={{width:'100px',height:'40px', marginLeft:'110px',position: 'relative'}}>Back</button></a>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Nav>
                            <NavDropdown style={{marginTop:'20px', marginLeft:'600px'}}
                            id="nav-dropdown-dark-example"
                            title="More Information"
                             >
                            <NavDropdown.Item href="#">Testimoni 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Testimoni 2</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="https://www.halodoc.com/obat-dan-vitamin/alletrol-compositum-eye-drop-5-ml"><img src="https://t3.ftcdn.net/jpg/02/96/91/42/240_F_296914204_8F0EmCJh8nVo7c0MYJtwUdEqnG1xs6Bq.jpg" style={{width: '20px', height: '20px'}}/><h9> with browser</h9></NavDropdown.Item>
                            
                            <NavDropdown.Item href="https://www.tokopedia.com/search?navsource=home&shop_tier=2&source=universe&st=product&q=alletrol%20compositum%20tetes%20mata%205%20ml"><img src="https://t3.ftcdn.net/jpg/03/03/05/78/240_F_303057896_UOqpWEaLAEwRVFlh5OUq0RIB3EfHNnAi.jpg" style={{width: '20px', height: '20px'}}/><h9> with olshop</h9></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </ul>
                </div> 
            </nav>
        </>
    );
}

export default Navbar;