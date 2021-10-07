import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Deskripsi1.css';
import DeskripsiNavbar6 from './DeskripsiNavbar6';
import ReactAudioPlayer from 'react-audio-player';

function Deskripsi6() {
    return (
        <>
        <DeskripsiNavbar6/>
        <video src="/videos/video-5.mp4" autoPlay loop muted/>
        <div className="audio">
        <ReactAudioPlayer
        src="voice/blackmores.mp3"
        autoPlay
        controls
        /></div>
        <div className="container-deskripsi">
            <ul className="gallery">
            <h2 className="drug-name">BLACKMORES LUTEIN-VISION</h2>
            <li>
                <a href=" ">
                <img src="images/blackmores-2.jpg" style={{}}/>
                <span>Suplemen Lutein & Selenium</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
        </div>
        <div className="container-deskripsi" style={{padding: '20px', marginTop:'20px', marginBottom:'20px'}}>
        <Accordion defaultActiveKey="0" style={{marginBottom:'10px', background: '#91C788'}}>

        <Accordion.Item eventKey="0" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header >DESKRIPSI</Accordion.Header>
        <Accordion.Body>
        <h6>Blackmores Lutein-Vision merupakan suplemen kesehatan mata yang mengandung nutrisi Lutein dan Selenium yang keduanya berperan penting dalam membantu mendukung fungsi kesehatan mata dan juga dapat membantu mengurangi kerusakan makula (bagian tengah retina mata) akibat radikal bebas.</h6>
          <h6>Blackmores Lutein-Vision ini sangat efektif dikonsumsi bagi mereka yang sudah berusia 35-40 tahun yang mengalami masalah rabun dekat (plus), selain itu suplemen ini juga dapat dikonsumsi sebagai asupan nutrisi untuk menjaga kesehatan mata agar terhindar dari kerusakan makula (bagian tengah retina mata) akibat penggunaan gadget seperti laptop, tab, handphone dengan intensitas tinggi.</h6>
          <h6>Seiring dengan bertambahnya usia, masalah mata seperti rabun dekat, rabun jauh, silinder dan gangguan mata lainnya akan mulai muncul. Namun dengan tingginya penggunaan gadget (handphone, laptop, dll), serta menipisnya lapisan ozone yang menyebabkan meningkatkan radiasi sinar matahari, maka kerusakan mata pun dapat terjadi di usia muda. Oleh karena itu untuk membantu mencegah hal itu terjadi, maka sangat diperlukan asupan nutrisi Lutein & Zeaxanthin yang bagus untuk kesehatan mata.</h6>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>KOMPOSISI</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Ekstrak Marigold 80mg (setara dengan bunga kering 600mg)</li>
                        <li>Lutein 6mg</li>
                        <li>Selenomethonin (Selenium 26 µg) 64.5 µg</li>
                        <li>d-alpha-Tokoferol (vitamin E alami  250 IU) 168 mg</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>MANFAAT</Accordion.Header>
        <Accordion.Body>
        <ol>
                        <li>Membantu mengurangi kelelahan pada mata</li>
                        <li>Membantu melindungi makula (bagian tengah retina mata) dari kerusakan akibat radikal bebas (yang dapat menyebabkan kehilangan penglihatan bagian tengah, namun masih bisa melihat pada bagian tepi) berkat kandungan antioksidan</li>
                        <li>Memberikan nutrisi untuk meningkatkan kepadatan pigmen makula pelindung retina</li>
                        <li>Membantu menyaring cahaya, baik sinar UV dari sinar matahari dan sinar biru dari gadget</li>
                      </ol>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>DOSIS & CARA PENGGUNAAN</Accordion.Header>
        <Accordion.Body>
        <p>Dewasa: 1 kapsul sehari setelah makan, atau sesuai petunjuk dokter</p>
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
                        <li>Bagi ibu hamil dan menyusui harap konsultasikan terlebih dahulu kepada dokter</li>
                        <li>Produk ini mengandung Selenium yang akan berbahaya jika dikonsumsi berlebih. Jumlah yang disarankan adalah 150 µg</li>
                        <li>Blackmores jenis ini mengandung ikan dan sulfit, sehingga perlu diwaspadai bagi Anda yang memiliki alergi terhadap bahan-bahan tersebut</li>
                    </ul>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PETUNJUK PENYIMPANAN</Accordion.Header>
        <Accordion.Body>
        <p>Simpan di bawah 30° C, ditempat yang kering, dan jauhkan dari paparan sinar matahari langsung</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>HARGA PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>Rp400.200 - Rp691.200,-/botol</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>ISI PER PRODUK</Accordion.Header>
        <Accordion.Body>
        <p>60 kapsul lunak / botol kaca</p>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>BPOM</Accordion.Header>
        <Accordion.Body>
        <a href="https://cekbpom.pom.go.id//home/produk/jnd8h4u9idps0b5r2lqet4kkc2/all/row/10/page/1/order/4/DESC/search/0/SI164307161">SI164307161</a>
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" style={{backgroundColor:'#91C788'}}>
        <Accordion.Header>PRODUKSI</Accordion.Header>
        <Accordion.Body>
        <p>oleh Kalbe Blackmores Nutrition</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
        </>
    )
}
export default Deskripsi6;