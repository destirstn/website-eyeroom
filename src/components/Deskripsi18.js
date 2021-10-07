import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar18 from './DeskripsiNavbar18';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi18() {
    return (
        <>
        <DeskripsiNavbar18/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/y-rins.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">Y-RINS EYE LIQUID 12 ml</h2>
            <li>
                <a href=" ">
                <img src="images/y-rins-2.jpg" style={{}}/>
                <span>Larutan Steril Pembersih Mata</span>
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
            Y-Rins adalah obat cuci mata yang dapat membantu membersihkan, menyejukkan, dan menyegarkan mata yang lelah dan sakit.    
            Obat pembersih mata Y-Rins juga bisa meringankan iritasi ringan pada mata yang disebabkan oleh udara yang berdebu atau berasap, dan mata lelah akibat mengemudi atau pekerjaan yang memerlukan penglihatan dekat.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Distilled witch hazel 13.0%</li>
                <li>Benzalkonium chloride 0,005%</li>
            </ul>
                <p>Obat cuci mata Y-Rins tidak mengandung bahan pengawet sehingga aman digunakan setiap hari.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Membersihkan, menyejukkan, dan menyegarkan kembali mata yang lelah dan sakit.</li>
                <li>Meringankan iritasi ringan pada mata yang disebabkan oleh udara berdebu atau berasap.</li>
                <li>Menyegarkan mata lelah akibat mengemudi atau pekerjaan yang memerlukan penglihatan dekat.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <p>Dosis: gunakan sesuai dengan kebutuhan</p>
            <p>Cara penggunaan:</p>
                <ol>
                    <li>Bersihkan eyebath (mangkuk/wadah untuk larutan pencuci mata Y-Rins) sebelum digunakan.</li>
                    <li>Apabila kelopak mata kurang bersih, misalnya ada sisa-sisa make-up, bersihkan terlebih dahulu sehingga mata, kelopak mata, dan bulu mata sudah bebas kosmetik saat menggunakan Y-Rins.</li>
                    <li>Isi wadah eyebath dengan larutan Y-Rins.</li>
                    <li>Tundukkan kepala sedikit ke depan, sentuhkan eyebath ke sekeliling kelopak mata. Jaga agar kelopak mata tetap terbuka agar larutan pembersih dapat mengalir bebas di seluruh permukaan mata maupun di bawah kelopak mata.</li>
                    <li>Posisi kepala tetap menunduk ke depan, goyangkan kepala ke kiri dan kanan sehingga larutan dapat tersebar ke seluruh permukaan mata dan efek pembersihan menjadi lebih sempurna. Lakukan kurang lebih selama 30 detik.</li>
                    <li>Setelah selesai membersihkan mata, lepaskan wadah eyebath dari kelopak mata, tutup mata sebentar, lalu bersihkan sisa larutan dengan tisu bersih.</li>
                    <li>Buang larutan Y-Rins di dalam eyebath setelah pemakaian dan bersihkan kembali eyebath sebelum disimpan.</li>
                </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
            <p>Gunakan Y-Rins sesuai kebutuhan di pagi hari (sebelum beraktivitas) dan malam hari (setelah beraktivitas).</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Jangan gunakan Y-Rins secara rutin dan untuk jangka panjang. Jika gejala mata lelah atau iritasi telah hilang, hentikan penggunaan obat.</li>
                <li>Untuk pengguna lensa kontak, saat menggunakan larutan pembersih Y-Rins, lepaskan dulu lensa kontak. Beri jeda waktu setidaknya 30 menit sebelum memakai lensa kontak kembali.</li>
                <li>Hentikan penggunaan Y-Rins dan segera periksakan ke dokter apabila Anda mengalami gejala hipersensitivas setelah menggunakan Y-Rins.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Simpan di tempat yang kering di bawah suhu 30 derajat Celcius.</li>
                <li>Y-Rins sebaiknya dibuang setelah kemasan produk dibuka selama 3 bulan.</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp6.000 - Rp20.000 /botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>12 ml/botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/DBL0231522045A1">DBL0231522045A1</a>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p>oleh PRATAPA NIRMALA - Indonesia.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi18;