import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar8 from './DeskripsiNavbar8';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi8() {
    return (
        <>
        <DeskripsiNavbar8/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/cendo-vasacon.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">CENDO VASACON A EYE DROPS</h2>
            <li>
                <a href=" ">
                <img src="images/cendo-vasacon-2.jpg" style={{}}/>
                <span>Tetes Mata Nafazolin HCl</span>
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
        <h6>Cendo Vasacon adalah obat tetes mata yang mengandung Nafazolin HCl sebagai zat aktifnya. Cendo Vasacon digunakan untuk membantu mengurangi pembengkakan serta membantu mengurangi kepekaan mata terhadap cahaya. Cendo Vasacon juga digunakan untuk membantu meredakan mata merah, mata terasa gatal dan pedih karena alergi serta dapat juga membantu meredakan peradangan karena alergi.</h6>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Nafazolin HCl 0,05 %</li>
                        <li>Antazolin Fosfat 0,5 %</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Mengurangi kepekaan terhadap cahaya, mata merah</li>
                        <li>Mata terasa gatal dan pedih karena alergi, konjungtivitis karena alergi</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                        <li>Dosis penggunaan : Penggunaan Obat Ini Harus Sesuai Dengan Petunjuk Dokter. Atas Anjuran Dokter</li>
                        <li>Cara Penggunaan : Bersihkan area mata terlebih dahulu, kemudian teteskan pada mata yang sakit</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
        <p>Sesuai Kebutuhan</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
        <p>HARUS DENGAN RESEP DOKTER. Hipersensitif terhadap komponen obat.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan dalam wadah kering yang tertutup pada suhu ruangan dan terhindar dari sinar matahari langsung.</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp17.100 - Rp30.800,-/Botol</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Botol @ 5 ml dan 15 ml</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/fcjl6rno4s0rdh51qnpvpm9th2/all/row/10/page/1/order/4/DESC/search/0/DKL7603809946A1">DKL7603809946A1</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>Cendo Pharmaceutical</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi8;