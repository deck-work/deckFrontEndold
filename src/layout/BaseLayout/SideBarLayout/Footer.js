import React from "react";
export default function Footer() {
    return (
        < >
 <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Explore</h2>
          <ul className="footer_li mt-4">
            {/* <li><a href="">About</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Become A Teacher</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Pricing Plans</a></li>
            <li><a href="">Teachers</a></li> */}
            <li><a href="">Register Now</a></li>
            <li><a href="">Classes</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>About</h2>
          <p className="mt-4 w-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  </footer>

  <div className="botom_footer">
    <div className="container">
      <div className="col-md-12">
        <div className="d-flex justify-content-between bottom-foot">
          <div className="copy_right">
            © Copyright 2022 by Decker.au | Powered by: Ankul
          </div>
          <div className="footer-social">
            <i className="icofont-twitter"></i>
            <i className="icofont-facebook"></i>
            <i className="icofont-instagram me-0"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

        </ >
    )
}