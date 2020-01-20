import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/book"
                >
                  Book Revews
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/join"
                >
                  Join the Club
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              555 End Street
              <br />
              St. John's
              <br />
              Canada
              <br />
              <i className="fa fa-phone fa-lg"></i>: +55555555
              <br />
              <i className="fa fa-fax fa-lg"></i>: +55555555
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="mailto:bookreviewclub@bar.net"
              >
                bookreviewclub@bar.net
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
