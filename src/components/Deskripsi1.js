import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar1 from './DeskripsiNavbar1';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi1() {
    return (
        <>
        <DeskripsiNavbar1/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/alcon-tears.mp3"
        autoPlay
        controls
        />
        </div>
        <div className="container-deskripsi">
            <ul className="gallery">
              <h2 className="drug-name">ALCON TEARS NATURALE II</h2>
            <li>
                <a href=" ">
                <img src="images/alcon-tears-2.jpg" style={{}}/>
                <span>Obat Tetes Mata</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
        </div>
        <div className="container-deskripsi" style={{marginBottom:'10px'}}>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DESKRIPSI</Accordion.Header>
        <Accordion.Body>
        Alcon Tears Naturale II adalah obat tetes mata untuk mencegah mata terasa kering dan teriritasai. Penyebab utama mata kering adalah angin, sinar matahari, pemanas atau pendingin ruangan (terutama yang menggunakan freon), menggunakan layar komputer atau smartphone, membaca, dan menggunakan obat-obatan tertentu.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <p>Tiap mL Tear Naturale mengandung:</p>
                    <ul>
                      <li>Dextran 10 mg</li>
                      <li>Hidroksimetilselulosa 30 mg</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Menjaga agar mata tetap lembab</li>
                        <li>Membantu melindungi mata dari luka dan infeksi</li>
                        <li>Mengurangi atau meringankan gejala mata kering seperti perih, gatal, dan sensasi seperti ada yang mengganjal pada mata</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <p>Dosis: 1-2 tetes ke dalam mata sesuai kebutuhan</p>
                  <p>Cara Penggunaan:
                    <ol>
                      <li>Tengadahkan kepala ke atas</li>
                      <li>Tempatkan telunjuk jari pada bagian bawah mata dan tarik dengan lembut sampai terbentuk kantung “V” antara mata dan kelopak mata bawah</li>
                      <li>Teteskan 1 atau 2 tetes ke kantung V.Hindarkan sentuhan antara mata dengan ujung botol</li>
                    </ol>
                  </p>
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
        <ul>
            <li>Jangan dipakai jika larutan berubah warna atau keruh</li>
            <li>Untuk mencegah kontaminasi jangan memegang ujung botol</li>
            <li>Botol ditutup rapat setalah dipakai</li>
            <li>Jauhkan dari jangkauan anak-anak</li>
            <li>Jika terasa sakit, gangguan pengiihatan, terjadi kemerahan dan iritasi berlanjut atau keadaan makin parah lebih dari 72 jam, hentikan pemakaian dan konsultasi kedokter</li>
            <li>Jika tertelan,segera hubungi dokter</li>
        </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan pada suhu 25° – 30° C di ruang yang bersih dan kering</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp48.000 - Rp85.000 /botol</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Dus @ botol @ 15 ml, TETES MATA 0.1%, 0.3%</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/DTI9586001546A1">DTI9586001546A1</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>PT Tempo Scan Pacific - Indonesia</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi1;