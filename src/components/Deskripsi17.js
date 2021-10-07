import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar17 from './DeskripsiNavbar17';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi17() {
    return (
        <>
        <DeskripsiNavbar17/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/Madu Vitoma.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">MADU VITOMATA</h2>
            <li>
                <a href=" ">
                <img src="images/madu-vitomata-2.png" style={{}}/>
                <span>Vitamin & Suplemen</span>
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
            Madu Vitomata merupakan ramuan tradisional nenek moyang yang diproses secara modern dan higienis yang dikemas dalam bentuk liquid dengan 100% mengandung ekstrak herbal alam. 
            Madu Vitomata teruji secara ilmiah dapat membantu menjaga kesehatan mata dan mengatasi masalah kesehatan mata Anda dan keluarga.
            Madu Vitomata bereaksi cepat karena diracik dan diformulasikan khusus dari bahan-bahan ekstraksi herbal terbaik dalam bentuk Liquid sehingga sangat mudah menyerap ke dalam tubuh Anda.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Madu hutan murni.</li>
                <li>Bilberry.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Menjaga kesehatan mata, membuat mata lebih cemerlang dan segar.</li>
                <li>Membantu mengatasi mata lelah atau gangguan mata karena terlalu lama membaca, menonton TV, bermain komputer, mengendarai kendaraan, dll.</li>
                <li>Membantu menghambat proses mata minus.</li>
                <li>Mencegah dan membantu masa pemulihan akibat penyakit glaucoma, katarak, gangguan retina, diabetic retinopathy, dll.</li>
                <li>Mencegah terjadinya rabun senja.</li>
                <li>Mengatasi Mata Merah, Berair, Gatal, Belekan, dan Bengkak.</li>
                <li>Menghilangkan kantung mata.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Dewasa: 1 x sehari satu kapsul</li>
                <li>Anak usia 6-12 tahun: 1 x sehari 1/2 kapsul, atau sesuai petunjuk dokter</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
            Sesudah makan.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Baca petunjuk penggunaan.</li>
                <li>Jika keluhan berlanjut hubungi dokter.</li>
                <li>Tidak dianjurkan untuk wanita hamil dan menyusui.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
            <p>Simpan pada suhu ruangan dan terlindungi dari cahaya.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp 145.000,-/botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>280 gram/botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
            <a href="https://cekbpom.pom.go.id//home/produk/vne8p5vace3cgrovmh72mljl50/all/row/10/page/1/order/4/DESC/search/0/TR203641411">TR203641411</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p>oleh PT. Elanazma Prima.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi17;