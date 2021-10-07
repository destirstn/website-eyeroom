import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar12 from './DeskripsiNavbar12';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi12() {
    return (
        <>
        <DeskripsiNavbar12/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/konilife.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">KONILIFE VISION - BIRU</h2>
            <li>
                <a href=" ">
                <img src="images/konilife-2.jpg" style={{}}/>
                <span>Suplemen</span>
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
            Konilife Vision adalah suplemen makanan yang memiliki kandungan vitamin A, lutein, dan zink yang berguna untuk memelihara kesehatan mata. Konilife Vision tersedia dalam bentuk kapsul lunak yang diproduksi oleh Konimex.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Lutein ester 10% 20 mg.</li>
                <li>Vitamin A palmitat 16 mg.</li>
                <li>Zinc Gluconate 80 mg.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Membantu memelihara kesehatan mata.</li>
                <li>Mencegah dan mengurangi gejala AMD (Age-related Macular Degeneration).</li>
                <li>Mengurangi risiko katarak.</li>
                <li>Membantu penglihatan pada penderita katarak ringan.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <p>1 kapsul lunak per hari atau sesuai anjuran dokter.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Hindari penggunaan Konilife Vision pada pasien yang memiliki indikasi hipersensitif terhadap komposisinya.</li>
                <li>Jika terjadi efek samping yang tidak diinginkan, hentikan penggunaan dan segera hubungi Dokter.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
            <p>Simpan pada suhu dibawah 30ºC. Dalam wadah tertutup rapat.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp 90.000-Rp 186.882/botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Dus @ botol plastik @ 30 kapsul.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
            <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/SD171350071">SD171350071</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p>oleh PT. Konimex.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi12;