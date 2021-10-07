import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar3 from './DeskripsiNavbar3';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi3() {
    return (
        <>
        <DeskripsiNavbar3/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/berry-vision.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">BERRY VISION DISPERSIBLE</h2>
            <li>
                <a href=" ">
                <img src="images/berry-vision-2.jpg" style={{}}/>
                <span>Suplemen Terapi Penunjang</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
        </div>
        <div className="container-deskripsi" style={{padding: '20px', marginTop:'20px', marginBottom:'20px'}}>
        <Accordion defaultActiveKey="0" style={{marginBottom:'10px', background: '#91C788'}}>

        <Accordion.Item eventKey="0" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DESKRIPSI</Accordion.Header>
        <Accordion.Body>
        Berry Vision adalah suplemen yang banyak digunakan untuk membantu memelihara atau menjaga kesehatan mata. Kesehatan mata penting untuk dijaga agar mengurangi terjadinya gangguan terhadap mata, seperti rabun jauh, rabun dekat, atau gangguan mata lainnya yang disebabkan oleh beberapa kondisi.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Bilberry dry extr 80 mg</li>
                        <li>Retinol 1,600 IU</li>
                        <li>Vitamin E 40 mg</li>
                        <li>β-carotene 5 mg</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <p>Berry Vision digunakan sebagai suplemen untuk menjaga kesehatan mata</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                    <li>Dewasa: 1-2 tablet, diminum 2-3 kali sehari</li>
                    <li>Anak usia 6-12 tahun: 1 tablet, diminum 3 kali sehari</li>
                    <li>Anak 1-6 tahun: ½ tablet, diminum 3 kali sehari</li>
                  </ul>
                  <p>Cara Penyajian:</p>
                    <ol>
                      <li>Larutkan Berry Vision tablet dispersible ke dalam 1 sendok air matang</li>
                      <li>Diamkan selama 30-40 detik sampai seluruh tablet hancur</li>
                      <li>Suspensi yang terbentuk dapat langsung diberikan</li>
                    </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan pada suhu di bawah 30 derajat Celcius, di tempat kering dan sejuk</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp25.000 - Rp45.000 /strip</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Box, 10 Strip @ 10 Tablet Dispersible</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/SD031509361">SD031509361</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>PT SANBE FARMA - Kota Bandung, Jawa Barat</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi3;