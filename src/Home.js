import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <div className="home_image"> */}
                <Carousel interval="4000" home_images >
                    <Carousel.Item>
                        <img
                            className=" home_image "
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ODdjMjU1NTIt-w3000._CB655065472_.jpg "
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" home_image "
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ZGU1MTFjY2Mt-w1500._CB669562935_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" home_image "
                            src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Homestead/AHM_Week-1_Gateway_Desktop_1500x600-V4._CB655178950_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_2x-3000x1200._CB661646560_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Revelation-GatewayHeroDesktop-English-2x-3000x1200-V03._CB655334651_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/TV/PNCC_S1_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD6984._CB669237417_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZWUxZjhhODUt/ZWUxZjhhODUt-MjBhMjNkODIt-w1500._CB667092055_.jpg"
                            alt=""
                        // style={{ height: "100vh" }}
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />

          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

