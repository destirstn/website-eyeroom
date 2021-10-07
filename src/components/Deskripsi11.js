import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar11 from './DeskripsiNavbar11';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi11() {
    return (
        <>
        <DeskripsiNavbar11/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/hialid.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">HIALID 0.1% EYE DROPS</h2>
            <li>
                <a href=" ">
                <img src="images/hialid-2.jpg" style={{}}/>
                <span>Tetes Mata</span>
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
            Hialid 0,1% Eye Drops adalah obat yang digunakan untuk menghilangkan sensasi terbakar, iritasi dan ketidaknyamanan akibat mata kering. Obat tetes mata ini juga digunakan untuk mempercepat proses penyembuhan luka pada permukaan mata. Hialid 0,1% Eye Drops mengandung Sodium Hyaluronate yang merupakan garam natrium dari Hyaluronic acid, suatu senyawa glikosaminoglikan.Berikut ini adalah informasi lengkap obat Hialid 0,1% Eye Drops.
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{background: '#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
            <p>Tiap kemasan obat Hialid 0,1% Eye Drops mengandung zat aktif yaitu Sodium Hyaluronate 0.1%</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: '#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Menghilangkan sensasi terbakar, iritasi dan ketidaknyamanan akibat mata kering.</li>
                <li>Mempercepat proses penyembuhan luka pada permukaan mata yang rusak seperti pada Sjogren's & sicca syndrome.</li>
            </ol>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" style={{background: '#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
            <p>Dosis: 1 tetes, 5–6 kali sehari</p>
                <p>Aturan Pakai:</p>
                  <ul>
                      <li>Diteteskan ke mata yang teriritasi.</li>
                      <li>Obat ini hanya digunakan sebagai tetes mata saja.</li>
                      <li>Jangan menyentuh mata dengan ujung botol secara langsung agar terhindar dari kontaminasi.</li>
                  </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" style={{background: '#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
            <p>Sesuai kebutuhan.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" style={{background: '#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Jangan digunakan untuk pasien yang memiliki riwayat alergi terhadap Sodium hyaluronate</li>
                <li>Jangan menggunakan obat tetes mata ini pada saat menggunakan lensa kontak lunak (soft contact lenses)</li>
                <li> setelah penggunaan obat sebaiknya tunggu minimal 10 menit sebelum menggunakan kembali lensa kontak</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" style={{background: '#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
            <p>Simpan di bawah 30° C, ditempat yang kering, dan jauhkan dari paparan sinar matahari langsung.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" style={{background: '#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Rp84.000 - Rp147.000 /botol.</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" style={{background: '#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
            <p>Botol 5 mL tetes mata 0,1%</p>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" style={{background: '#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/DKI0467600746A1">DKI0467600746A1</a>
            </div>
        </div>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" style={{background: '#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
            <p>oleh FERRON PAR PHARMACEUTICALS - Indonesia.</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        </>
    )
}
export default Deskripsi11;