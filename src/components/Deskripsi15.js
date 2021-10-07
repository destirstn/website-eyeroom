import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar15 from './DeskripsiNavbar15';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi15() {
    return (
        <>
        <DeskripsiNavbar15/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/nutrimax.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">NUTRIMAX BILBERRY EXTRACT</h2>
            <li>
                <a href=" ">
                <img src="images/nutrimax-bilberry-2.jpg" style={{}}/>
                <span>Suplemen Herbal</span>
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
            Nutrimax Bilberry Extract adalah suatu produk kesehatan yang menggunakan Standarized ekstrak Bilberry, mengandung minimal 25% anthocyanosides. Bilberry sangat membantu kerja rhodopsin untuk mengoptimalkan penglihatan di malam hari, juga berfungsi sebagai antioksidan & melancarkan sirkulasi darah makro dan mikro terutama menuju mata.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Nutrimax Bilberry Extract hanya menggunakan Standardized ekstrak Bilberry.</li>
                <li>mengandung minimal 25% anthocyanosides.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Membantu mencegah dan terapi penyembuhan berbagai masalah mata (iritasi, infeksi, radang, mata lelah, merah, pedih, gatal,glaukoma, katarak, rabun senja/kebutaan, dsb).</li>
                <li>Mengoptimalkan fungsi retina agar dapat menang­kap cahaya dengan baik dan menjaga keutuhan kornea mata.</li>
                <li>Membantu meningkatkan sirkulasi darah mikro, suplai oksigen & nutrisi ke mata.</li>
                <li>Membantu memperbaiki sirkulasi darah makro ke seluruh tubuh, membantu terapi diabetes, ateroskle­rosis, varises dan wasir.</li>
                <li>Membantu memperkuat struktur kolagen sebagai protein penting pembentuk tulang, otot & kulit.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <p>Dewasa: 1 – 2 Kapsul sehari.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
            <p>Setelah makan pagi atau siang.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Bilberry Extract Nutrimax tidak dianjurkan bagi wanita hamil & menyusui.</li>
                <li>Tidak dianjurkan untuk anak-anak (di bawah 12 tahun).</li>
                <li>Hasil optimal dapat dikombi­nasikan dengan Nutrimax™ Clear Vision.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan di bawah suhu 30°C, hindari sinar matahari langsung. Jauhkan dari jangkauan anak-anak.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp400.000 - Rp500.000 /botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Botol plastik @ 30 dan 60 kapsul.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
            <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/TR212314871">TR212314871</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p>oleh PT SURYAPRANA NUTRISINDO - Kota Jakarta Pusat, DKI Jakarta.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi15;