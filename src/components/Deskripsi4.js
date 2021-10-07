import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar4 from './DeskripsiNavbar4';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi4() {
    return (
        <>
        <DeskripsiNavbar4/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/bilberry-carrot.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">BILBERRY CARROT</h2>
            <li>
                <a href=" ">
                <img src="images/bilberry-carrot-2.jpg" style={{}}/>
                <span>Obat Tradisional</span>
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
        Bilberry Carrot adalah obat tradisional yang memiliki kandungan ekstrak vaccium myrtillus fructus (buah bilberry), Daucus caarota (wortel), vitamin C, vitamin B2 sebagai zat aktifnya dalam bentuk sediaan kapsul.
        Bilberry Carrot secara tradisional dapat membantu memelihara kesehatan mata dan membantu menghambat mata minus. Serta, membanyu penyembuhan penyakit glaukoma dan gangguan retina.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Vaccinium Myrtillus (Buah Bilberry) 100 mg (Terstandarisasi 32% Antosianin)</li>
                        <li>Daucus Carota (Wortel) 400 mg (Setara Dengan 2.400 I.U. Vit.A)</li>
                        <li>Vit. C60 mg (AKG 65%)</li>
                        <li>Vit. B2 1,5 mg (AKG 125%)</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Membantu memelihara kesehatan mata</li>
                        <li>Mengatasi mata lelah atau gangguan mata karena banyak membaca, nonton TV, di depan komputer, mengendarai kendaraan, dll</li>
                        <li>Menghambat proses mata minus</li>
                        <li>Mencegah dan membantu masa penyembuhan akibat penyakit glaukoma, katarak, gangguan retina, diabetic retinopathy, dll</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                        <li>Dewasa: 1 x sehari satu kapsul</li>
                        <li>Anak usia 6-12 tahun: 1 x sehari 1/2 kapsul, atau sesuai petunjuk dokter</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>WAKTU PENYAJIAN</Accordion.Header>
        <Accordion.Body>
        <p>Sesudah makan</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PERINGATAN</Accordion.Header>
        <Accordion.Body>
        <ul>
                        <li>Baca petunjuk penggunaan</li>
                        <li>Jika keluhan berlanjut hubungi dokter</li>
                        <li>Tidak dianjurkan untuk wanita hamil dan menyusui</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan pada suhu ruangan dan terlindungi dari cahaya</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp64.800 - Rp151.200,-/botol</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>30 kapsul transparan / botol</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/v6iq6kvru12g0pj3h86nalvac4/all/row/10/page/1/order/4/DESC/search/0/SD152347091">SD152347091</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>PT INDUSTRI JAMU DAN FARMASI SIDO MUNCUL TBK - Kota Semarang, Jawa Tengah</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi4;