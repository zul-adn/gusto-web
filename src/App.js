import React from 'react';

import './css/glide.core.min.css';
import './css/main.css';

import Slider from "react-slick";


const App = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <section>
      <nav>
        <h5>Logo.</h5>
        <ul>
          <li>Home</li>
          <li>Collections</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="search">
          <i className="fa fa-search"></i>
        </div>
      </nav>

      <div className="content">
        <div className="side-indicator">
          <div className="line"></div>
          <div className="index one">
            <p>1</p>
          </div>
          <div className="index two">
            <p>2</p>
          </div>
          <div className="index three">
            <p>3</p>
          </div>
          <div className="index four">
            <p>4</p>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text">
            <div id="title">
              {/* <h4>INDONESIA</h4> */}
              {/* <h4>KERALA</h4>
              <h4>BALI</h4>
              <h4>THAILAND</h4> */}
            </div>
            <div id="description">
              <p>
                As the larget archipelagic country in the world, Indonesia is
                blessed with so many different people, cultures, customs,
                traditions, artworks, food, animals, plants, landscapes, and
                everything that made it almost like 100 (or even 200)countries
                melted beautifully into one.
              </p>
              <p>
                Kerala, a state on India's tropical Malabar Coast, has nearly
                600km of Arabian Sea shoreline. It's known for its palm-lined
                beaches and backwaters, a network of canals. Inland are the
                Western Ghats, mountains whose slopes support tea, coffee and
                spice plantations as well as wildlife.
              </p>
              <p>
                Bali is an Indonesian island known for its forested volcanic
                mountains, iconic rice paddies, beaches and coral reefs. The
                island is home to religious sites such as cliffside Uluwatu
                Temple. To the south, the beachside city of Kuta has lively
                bars, while Seminyak, Sanur and Nusa Dua are popular resort
                towns.
              </p>
              <p>
                Thailand is a Southeast Asian country. It's known for tropical
                beaches, opulent royal palaces, ancient ruins and ornate temples
                displaying figures of Buddha. In Bangkok, the capital, an
                ultramodern cityscape rises next to quiet canalside communities
                and the iconic temples of Wat Arun, Wat Pho and the Emerald
                Buddha Temple (Wat Phra Kaew).
              </p>
            </div>
            {/* <div className="btn">
              <p>Explore</p>
              <i className="fa fa-arrow-right"></i>
            </div> */}
          </div>
        </div>
        <div>
          {/* <div className="glide">
            <Slider {...settings}>
              <div>
                <div className="slider-image">
                  <img src="https://i.pinimg.com/originals/bb/89/ee/bb89ee0b2434ec247081cc1458abba83.gif" />
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div> */}

          <div className="glide">
            <div className="glide_cover"></div>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <div className="slide one">

                    <div className="slider-image">
                      <img src="https://i.pinimg.com/originals/bb/89/ee/bb89ee0b2434ec247081cc1458abba83.gif" />
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="slide two">
                    <div className="slider-image">
                      <img src="https://uploads.toptal.io/blog/image/124464/toptal-blog-image-1508845777150-847ff1a13b29d4b832694404acb67f7a.gif" />
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="slide three">
                    <div className="slider-image">
                      <img src="https://static.wixstatic.com/media/ade75f_75a585aa1797487ca840645e0784988f~mv2.gif" />
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="slide four">
                    <div className="slider-image">
                      <img src="https://norwegianscitechnews.com/wp-content/uploads/2019/11/vr.gif" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-glide-el="controls" className="controls">
              <div data-glide-dir="<" id="prev">
                <i className="fa fa-arrow-left"></i>
              </div>
              <div data-glide-dir=">" id="next">
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="background"></div>
    </section>
  );
};

export default App;