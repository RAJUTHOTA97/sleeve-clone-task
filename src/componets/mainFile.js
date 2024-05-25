import React from "react";
import img from "../componets/img.JPG";
import imge from "../componets/imgee.JPG";
import apple from "../images/AppMusic.png";
import spot from "../images/AppSpotify.png";
import dop from "../images/AppDoppler.png";
import logo from "../componets/apple.JPG";
import sound from "../images/ShelfCallout.png";
import arrow from "../componets/arrow_circle_right_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import ver from "../componets/ver.JPG";
import card from "../componets/card.JPG";
import card2 from "../componets/card2.JPG";
import card3 from "../componets/card3.JPG";
import card4 from "../componets/card4.JPG";
import music from "../componets/music.JPG";
import lspot from "../componets/lastsopt.JPG";
import last from "../componets/last.JPG";
import bgimage from "../images/bg-imge.jpg";
import art from "../images/IconArrayArtwork.png";
import art1 from "../images/Artwork1.jpg";
import art2 from "../images/Artwork2.jpg";
import art3 from "../images/Artwork3.jpg";
import track from "../images/IconArrayTrack.png";
import typo from "../images/Typography1.jpg";
import typo2 from "../images/Typography2.jpg";
import layout from "../images/IconArrayLayout.png";
import posi from "../images/IconPosition.png";
import inter from "../images/IconInterface.png";
import int1 from "../images/Interface1.jpg";
import int2 from "../images/Interface2.jpg";
import window from "../images/IconArrayWindow.png";
import hotkey from "../images/IconHotkeys.png";
import setting from "../images/IconSettings.png";
import set1 from "../images/Settings1.jpg";
import set2 from "../images/Settings2.jpg";
import set3 from "../images/Settings3.jpg";

import { Card, Col, Row, Container } from "react-bootstrap";
import "./style.css";
import { Parallax } from "react-parallax";

function MainFile() {
  return (
    <div>
      <center>
        <h1 className="head">Sleeve 2</h1>
        <h2>The ultimate music accessory for your Mac.</h2>
        <p className="sub-head">
          Sleeve sits on the desktop, displaying and controlling the music
          you’re <br />
          currently playing in <img width={"20px"} src={apple} /> Apple Music,{" "}
          <img width={"20px"} src={spot} /> Spotify, and{" "}
          <img width={"20px"} src={dop} /> Doppler.
        </p>
        <br />
        <div>
          <button className="buttons">
            {" "}
            <img src={logo} /> Mac app store
          </button>

          <button className="buttons2">
            Buy directly <button className="inbutton">$5.99</button>
          </button>
        </div>
        <br />

        <p className="para">
          No subscriptions. No in-app
          <br /> purchases. Requires macOS 11 Big Sur <br />
          or later.
        </p>

        <button className="scrol">
          {" "}
          <img src={sound} /> Now with <b>shelves and a progress bar.</b> See
          whats new in Sleeve 2.3 <img src={arrow} />
        </button>

        <br />
        <br />
        <br />
        <br />
        <p className="version">
          NEW IN <img src={ver} />
        </p>

        <h1 className="hed">Themes. Unlimited themes.</h1>
        <br />
        <h2 className="sub-hed">
          Themes in Sleeve make creating and switching between customizations
          easy. Share your own <br />
          creations with friends and install as many themes as you like with
          just a double-click.
        </h2>

        <br />
        <br />
        <br />
        <img src={img} alt="img" width="90%" />
        <br />
        <br />

        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="cardd">
                  <h3>Change it up</h3>
                  <span className="card-span">
                    Switch between themes
                    <br />
                    with just a click.
                    <br />
                    <br />
                    Modify the built-in themes
                    <br />
                    or create your own using
                    <br />
                    Sleeve’s extensive
                    <br />
                    preferences.
                  </span>
                  <img className="imgflow" src={card} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="cardd2">
                  <h3>Shareable</h3>
                  <span className="card-span">
                    Export your themes and share
                    <br />
                    them with friends using the
                    <br />
                    handy new Sleeve Theme file
                    <br />
                    format.
                    <br />
                    <br />
                    Install themes from anywhere
                    <br />
                    with a double-click or a drag
                    <br />
                    and drop.
                  </span>
                  <img className="imgflo" src={card2} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />

        <p className="cust">CUSTOMIZATION</p>
        <h1 className="countless">Countless ways to customize.</h1>
        <br />
        <h2 className="countless-sub">
          Customization is at the core of the Sleeve experience — choose from
          any <br />
          combination of design choices, behaviors and settings to make Sleeve
          at home on <br /> your desktop.
        </h2>

        <br />
        <br />
        <img src={imge} />
        <br />

     
        
        
        <div>

        <div className="parallax">
            <Parallax bgImage={bgimage} strength={500}>
              <div style={{ height: "550px" }}></div>
            </Parallax>
          </div>
          <div  className="grid">
          <div>
            <img src={art} alt="none" />
            <h1>Artwork </h1>
            <span>
              Scale artwork all the way up or all
              <br />
              the way down. Round the corners
              <br />
              or leave them square.
              <br />
              <br />
              Choose shadow and lighting
              <br />
              effects to bring your album
              <br />
              artwork to life.
              <br />
              <br />
              Or hide it completely.
            </span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={track} alt="none" />
            <h1>Typography </h1>
            <span>
              Pick the track info you want to
              <br />
              display, and then exactly how to
              <br />
              display it.
              <br />
              <br />
              Choose the fonts, weights, sizes,
              <br />
              and transparency to use for each
              <br />
              line, along with customizing color
              <br />
              and shadow.
              <br />
              <br />
            </span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={layout} alt="none" />
            <img src={posi} alt="none" />
            <img src={inter} alt="none" />
            <h1>Interface </h1>
            <span>
              Customize the layout, alignment
              <br />
              and position to fit your setup.
              <br />
              <br />
              <br />
              Show and hide playback controls.
              <br />
              Add a backdrop layer and
              <br />
              customize it.
              <br />
              <br />
              Or hide it completely.
            </span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={window} alt="none" />
            <img src={hotkey} alt="none" />
            <img src={setting} alt="none" />
            <br />
            <h1>Settings </h1>
            <br />
            <span>
              Decide if Sleeve stays out of
              <br />
              and position to fit your setup.
              <br />
              front of them — or only when
              <br />
              you need to see it.
              <br />
              <br />
              <br />
              Show it in the Dock, choose from
              <br />
              custom icons, or keep it on the
              <br />
              Desktop only.
              <br />
              <br />
              <br />
              Set your custom keyboard
              <br />
              shortcuts and integrate with the
              <br />
              apps you use.
            </span>
          </div>
          <div>
            <img src={art1} alt="none" />
            <br />
            <br />
            <img src={art2} alt="none" />
            <br />
            <br />
            <img src={art3} alt="none" />
            <br />
            <br />
            <br />
            <br />

            <br />
            <img src={typo} alt="none" />
            <br />
            <br />
            <img src={typo2} alt="none" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={int1} alt="none" />
            <br />
            <br />
            <img src={int2} alt="none" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={set1} alt="none" />
            <br />
            <br />
            <img src={set2} alt="none" />
            <br />
            <br />
            <img src={set3} alt="none" />
          </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />

        <p className="inti">INTEGRATIONS</p>

        <h1 className="like">Like, Scrobble.</h1>
        <br />
        <br />
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Card className="card3">
                <Card.Body className="card3">
                  <img src={card3} />
                  <br />
                  <br />
                  <span className="card-text">
                    Sleeve <b>integrates with</b> <br />
                    <b> Last.fm </b>so you never miss a<br />
                    track. Simply sign in and
                    <br />
                    start scrobbling.
                  </span>
                  <br />
                  <br />
                  <p style={{ color: "rgb(211,167,167)" }}>
                    Last.fm account required
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card4">
                <Card.Body className="card4">
                  <img src={card4} />
                  <br />
                  <br />
                  <br />
                  <span className="card-text-2">
                    With Sleeve 2 you can now <b>like</b> <br />
                    <b>tracks in Spotify</b>, without ever
                    <br />
                    having to switch away from
                    <br />
                    Sleeve.
                  </span>
                  <br />
                  <br />
                  <p style={{ color: "rgb(169,197,169)" }}>
                    A free Spotify Developer account is required
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <div className="last">
          <div class="card-body">
            <img src={music} />
            <div className="text">
              {" "}
              Sleeve integrates directly with Apple Music, Spotify and <br />{" "}
              Doppler. Control playback, like tracks and adjust volume
              <br /> seamlessly.
            </div>
          </div>
        </div>

        <br />
        <br />

        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <Card className="card5">
                <Card.Body className="card5">
                  <img src={lspot} className="imge" />
                  <span className="last-text">
                    View the quick guide to
                    <br />
                    connecting Sleeve to your Spotify
                    <br />
                    account.
                  </span>
                  <br />
                  <button className="lastbtn">View Guide</button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card6">
                <Card.Body className="card6">
                  <img src={last} className="imge" />
                  <span className="last-text1">
                    Want to use Sleeve with
                    <br />
                    your favorite music
                    <br />
                    app?
                  </span>
                  <br />
                  <button className="lastbtn1">Request Integration</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default MainFile;



