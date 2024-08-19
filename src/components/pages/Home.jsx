import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { scroll, animate } from 'https://cdn.skypack.dev/motion@10.13.1';
import './Home.css';
import carImage from '../../images/car.png';
import cloudAnimation from '../../Cloud.json';
import ReactPlayer from 'react-player';

const API = "AIzaSyBH3S2BoDSqAQt2LSbic_GTifvQn8qgqDQ";
const channelId= "UC9H4onmkThYbMHrce2PceQg";

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=43`;

export const Home = () => {
  const [allvideos, setAllvideos] = useState([]);

  useEffect(() => {
    fetch(fetchurl).then((response) => response.json()) .then((responseJson) => {
        const result = responseJson.items.map(doc => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId
        }));
        setAllvideos(result);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
     console.log(allvideos)
    const $cardsWrapper = document.querySelector('#cards');
    const $cards = document.querySelectorAll('.card');
    
    const numCards = $cards.length;

    $cards.forEach(($card, index0) => {
      const index = index0 + 1;
      const reverseIndex = numCards - index0;
      const reverseIndex0 = numCards - index;

      $card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;
    
      scroll(
        animate($card, {
          scale: [1, 1 - (0.1 * reverseIndex0)],
        }), {
          target: $cardsWrapper,
          offset: [`${index0 / numCards * 100}%`, `${index / numCards * 100}%`],
        }
      );
    });
  }, []); 
  return (
    <div className="home-container">
      <div className="car-container">
        <div className="car-animation">
          <img src={carImage} alt="Car" className="car" />
        </div>
      </div>
     

      <section className="main">
        <div id="particles-js">
          <div className="heading">
            <h1>SAENITD</h1>
            <p>We are the society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur</p>
          </div>
        </div>
      </section>

      <div className="animated-line"></div>

      <section className="boxes">
        <div id="testimonial-box" className="container">
          <div className="subheading">
            <h2>We are present at</h2>
            <p>
              Various events and fests and numerous competitions and projects, we are not tires but enthusiast enough to achieve the sky
            </p>
          </div>
          
          <div className="card-container">
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>TEDx</h2>
                    <br />
                    <strong>Annual Fest</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title-1">
                    The TEDx event, hosted at NIT Durgapur annually by SAE in partnership with LC, is a globally recognized platform where motivational speakers share their transformative experiences, inspiring students to expand their worldview and ignite their passions, providing actionable insights and fresh outlooks
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>SDV</h2>
                    <br />
                    <strong>Flagship Event</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title-2">
                    The Self-Driving Workshop offers a practical learning experience in autonomous robotics and self-driving technology, focusing on robotic navigation and intelligent algorithms, and equips participants with the skills to build obstacle-sensing robots and apply theoretical knowledge in real-world scenarios
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>Aarohan</h2>
                    <br />
                    <strong>Annual Fest</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title-3">
                    SAE-NITD and Team Aavishkar host Aarohan, Eastern India's second-largest techno-management festival, featuring innovation, technology, and creativity through competitions and expert talks, including SAE-organised events like Flying the UAV and Roboliga
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="props">
        <div id="testimonial-box" className="container">
          <div className="props-heading">
            <h1>Our Professors</h1>
          </div>
          <div class="hi-container">
              <div class="hi">
                <div class="hi-photo-apurba"></div>
                <div class="hi-title">PROF(DR.) APURBA LAYEK
                  <br/>
                  <span>Department of Mechanical Engineering</span></div>
              </div>
              <div class="hi">
                <div class="hi-photo-niloptal"></div>
                <div class="hi-title">PROF(DR.) NILOPTAL BANERJEE
                  <br />
                  <span>Department of Mechanical Engineering</span></div>
              </div>
              <div class="hi">
                <div class="hi-photo-tapas"></div>
                <div class="hi-title">PROF(DR.) TAPAS KUMAR SAHA
                  <br />
                  <span>Department of Electrical Engineering</span></div>
              </div>
            </div>
        </div>  
      </section>

      <section className="about">
        <div id="container-fluis">
          <div className="about-content">
          <Lottie 
              animationData={cloudAnimation} 
              loop={true} 
              className="responsive-lottie" 
            />
            <div className="about-sae">
              <h1>About SAE</h1>
              <p>The <span>SAE</span> Collegiate Club of NIT Durgapur, the only automotive club of its kind, organises a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year, including F.I.S.T., webinars, SDV workshops, Drag and Drift Competition, and TEDX Talks.
As a pivotal force, SAE being a part of Team Aavishkar coordinates Aarohan, the second-largest techno-management festival in Eastern India, held at NIT Durgapur.
The club maintains a robust online presence through platforms like Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts.</p>
            </div>
           
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="hlo-sae">
                <h1>. . Our Active Participation . .</h1>
        </div>
        <main>
          <ul id="events">
            <li className="event" id="event_1">
              <div className="event__content">
                <div>
                  <h2>F.I.S.T</h2>
                  <p>Team SAE NIT Durgapur's "Forum for Ideas on Science and Technology" (F.I.S.T.) fosters a research-oriented culture through webinars and workshops on advanced topics like generative AI. By inviting experts, FIST bridges knowledge gaps, stimulates innovation, and empowers students to develop technology-driven solutions to real-world challenges.</p>
                </div>
                <figure>
                  <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="event" id="event_2">
              <div className="event__content">
                <div>
                  <h2>BAJA</h2>
                  <p>Baja SAEINDIA is a national event where university students design, build, and compete with off-road vehicles, promoting collaboration and engineering excellence.
                  NIT Durgapur's Team NDORS, comprising 25 students, achieved 38th position nationwide and 7th position among IITs and NITs. </p>
                </div>
                <figure>
                  <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="event" id="event_3">
              <div className="event__content">
                <div>
                  <h2>AI ML Worksop</h2>
                  <p>The workshop offers participants practical experience with AI and ML technologies, focusing on CNNs and deep learning models, to tackle real-world challenges and acquire hands-on expertise in designing neural network architectures and understanding their contemporary applications.</p>
                </div>
                <figure>
                  <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description" />
                </figure>
              </div>
            </li>
          </ul>
        </main>
      </section>
      
      <section className="ytr">
        <div className="yt-sae">
          <h1>Cryptech</h1>
        </div>
      </section>
      <section className="vid">
      <div className="video-container">
        <ReactPlayer
          className="react-player"
          controls
          url="https://youtu.be/-C2yRvTJ7Ss?si=fhgx8UplOGdec_LW"
          width="100%"
          height="100%"
        />
      </div>
    </section>

      <section className="yt">
        <div>
          {allvideos.map((item) => (
            <div >
              <iframe width="560" height="315" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          ))}
        </div>


      </section>


    </div>
  );
};







