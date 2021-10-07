import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar10 from './DeskripsiNavbar10';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi10() {
    return (
        <>
        <DeskripsiNavbar10/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/eyevit.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">EYEVIT TABLET</h2>
            <li>
                <a href=" ">
                <img src="images/eyevit-2.jpg" style={{}}/>
                <span>Suplemen Terapi Penunjang</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
        </div>
        <div className="container-deskripsi" style={{padding: '20px', marginTop:'20px', marginBottom:'20px'}}>
        <Accordion defaultActiveKey="0" style={{marginBottom:'10px', background: '#91C788'}}>

        <Accordion.Item eventKey="0" style={{background: '#91C788'}}>
        <Accordion.Header>DESKRIPSI</Accordion.Header>
        <Accordion.Body>
            Eyevit adalah suplemen yang mengandung Ekstrak Billberry, Vitamin A, Beta karoten, Vitamin E, 
            Lutein, Zeaxanthin, Selenium dan Zinc digunakan untuk memenuhi kebutuhan nutrisi pada mata. 
            Eyevit tersedia dalam bentuk sediaan tablet dan sirup. Eyevit sirup dapat dikonsumsi oleh semua kalangan usia, baik untuk anak-anak, orang dewasa, maupun manula.
            Biasanya Eyevit dalam bentuk sediaan Tablet digunakan untuk anak usia diatas 12 tahun dan orang dewasa, sedangkan Eyevit dalam bentuk sirup digunakan untuk anak usia dibawah 12 tahun.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
            <li>Ekstrak kering bilberry 80 mg</li>
            <li>Retinol 1.600 IU</li>
            <li>β-carotene 5 mg</li>
            <li>Vitamin E 40 mg</li>
            <li>Lutein 250 mcg</li>
            <li>Zeaxanthin 60 mcg</li>
            <li>Selenium 15 mcg</li>
            <li>Zinc 5 mg</li>
        </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
            <li>Menangkal radikal bebas yang dapat merusak sel-sel mata seperti radiasi yang dipancarkan layar komputer atau TV.</li>
            <li>Mencegah terjadinya katarak.</li>
            <li>Mempertajam penglihatan mata.</li>
            <li>Mempercepat adaptasi dalam gelap.</li>
        </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>Dosis Penggunaan Eyevit Tablet:</li>
            <p>Dosis penggunaan untuk dewasa: diminum 2-3x sehari 1 tablet.</p>
            <li>Dosis penggunaan Eyevit Sirup:</li>
                <ol>
                    <li>Dewasa: 1 sendok takar (5 ml), diminum 2-3 kali sehari.</li>
                    <li>Anak-anak: 1 sendok takar (5 ml), diminum 1 kali sehari.</li>
                </ol>
        </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
        <p>Sesudah makan.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
        <p>Bagi penderita hipersensitif terhadap obat. Konsultasikan terlebih dahulu ke dokter sebelum digunakan.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan pada suhu di bawah 30 derajat Celcius, di tempat kering dan terhindar dari cahaya.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp 37.000,-/botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>60 ml/botol</li>
            <li>6 tablet/strip</li>
        </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
                <a href="https://cekbpom.pom.go.id//home/produk/lkp4c2873ndt0g65te660phe54/all/row/10/page/0/order/4/DESC/search/1/eyevit">SD202515311</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>oleh Lapi Laboratories.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi10;