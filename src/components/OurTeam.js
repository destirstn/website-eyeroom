import React from 'react';
import './OurTeam.css';

function OurTeam() {
    return (
      <>
        <section className="page-section" style={{backgroundColor: '#587752'}} id="team">
            <div className="container-team" style={{backgroundColor: '#3E5539'}}>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Team</h2>
                    <h3 className="section-subheading text-muted">STUDENT OF SMK NEGERI 1 CIMAHI - TEKNIK ELEKTRONIKA DAYA & KOMUNIKASI.</h3>
                </div>
                <div className="row-team">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/bella.JPG" alt="..." />
                            <h4>Bella Anggraeni Putri</h4>
                            <p className="text-muted">UX Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/intan.jpeg" alt="..." />
                            <h4>Intan Nur Fatonah</h4>
                            <p className="text-muted">UX Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/miana.jpg" alt="..." />
                            <h4>Miana Nur Haliza</h4>
                            <p className="text-muted">Social Intervention / Web Programmer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/salwa.jpg" alt="..." />
                            <h4>Salwa Nurul Aisha</h4>
                            <p className="text-muted">Web Programmer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row-team" style={{backgroundColor: '#587752'}}>
                    <div className="col-lg-8 mx-auto text-center"><p class="large text-muted">EYEROOM @2021</p></div>
                </div>
        </section>
    </>
  );
}

export default OurTeam;