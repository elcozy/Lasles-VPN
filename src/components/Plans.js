import React from "react";
import PlanIllustration from "../assets/img/Plans-Illustration.svg";
import Map from "../assets/img/Huge-Global.svg";
import Netflix from "../assets/icon/Netflix.svg";
import Discord from "../assets/icon/Discord.svg";
import Reddit from "../assets/icon/Reddit.svg";
import Spotify from "../assets/icon/spotify.svg";
import Amazon from "../assets/icon/Amazon.svg";

import Netflix_1 from "../assets/icon/Netflix-1.svg";
import Discord_1 from "../assets/icon/Discord-1.svg";
import Reddit_1 from "../assets/icon/Reddit-1.svg";
import Spotify_1 from "../assets/icon/spotify-1.svg";
import Amazon_1 from "../assets/icon/Amazon-1.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Container, Button } from "react-bootstrap";

const Plans = () => {
  return (
    <div className="grey_bg">
      <Container>
        <div className="plans el_cozy">
          <div className="plans-heading">
            <p className="fsz-1">Choose Your Plan</p>
            <p className="fsz-3">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <div className="plans-selection">
            <div className="plans-type col-md px-5">
              <div className="plan-description">
                <img
                  src={PlanIllustration}
                  className="img-fluid"
                  alt="play-type-img"
                />
                <p className="plan-type">Free Plan</p>

                <ul>
                  <li>Unlimited Bandwitch</li>
                  <li>Encrypted Connection</li>
                  <li>No Traffic Logs</li>
                  <li>Works on All Devices</li>
                </ul>
              </div>
              <div className="plan-cost">
                <p className="plan-price">
                  <span>Free</span>
                </p>
                <Button variant="outline-secondary" className="mt-3">
                  Select
                </Button>
              </div>
            </div>

            <div className="plans-type col-md px-5">
              <div className="plan-description">
                <img
                  src={PlanIllustration}
                  className="img-fluid"
                  alt="play-type-img"
                />
                <p className="plan-type">Standard Plan</p>

                <ul>
                  <li>Unlimited Bandwitch</li>
                  <li>Encrypted Connection</li>
                  <li>No Traffic Logs</li>
                  <li>Works on All Devices</li> <li>Connect Anyware</li>
                </ul>
              </div>
              <div className="plan-cost">
                <p className="plan-price">
                  <span>$9 </span>/ mo
                </p>
                <Button variant="outline-secondary" className="mt-3">
                  Select
                </Button>
              </div>
            </div>

            <div className="plans-type col-md px-5">
              <div className="plan-description">
                <img
                  src={PlanIllustration}
                  className="img-fluid"
                  alt="play-type-img"
                />
                <p className="plan-type">Premium Plan</p>

                <ul>
                  <li>Unlimited Bandwitch</li>
                  <li>Encrypted Connection</li>
                  <li>No Traffic Logs</li>
                  <li>Works on All Devices</li>
                  <li>Get New Features</li>
                  <li>Connect Anyware</li>
                </ul>
              </div>
              <div className="plan-cost">
                <p className="plan-price">
                  <span>$12 </span>/ mo
                </p>
                <Button variant="outline-secondary" className="mt-3">
                  Select
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="fast-vpn">
          <div className="vpn-heading">
            <p className="fsz-1">
              Huge Global Network <br /> of Fast VPN
            </p>
            <p className="fsz-3">
              See <span>LaslesVPN</span> everywhere to make it easier for you
              when you move locations.
            </p>
          </div>
          <div className="map">
            <img src={Map} className="img-fluid" alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="sponsored">
          <img
            src={Netflix_1}
            onMouseOver={(e) => (e.currentTarget.src = Netflix)}
            onMouseOut={(e) => (e.currentTarget.src = Netflix_1)}
            alt=""
          />
          <img
            src={Reddit_1}
            onMouseOver={(e) => (e.currentTarget.src = Reddit)}
            onMouseOut={(e) => (e.currentTarget.src = Reddit_1)}
            alt=""
          />
          <img
            src={Amazon_1}
            onMouseOver={(e) => (e.currentTarget.src = Amazon)}
            onMouseOut={(e) => (e.currentTarget.src = Amazon_1)}
            alt=""
          />
          <img
            src={Discord_1}
            onMouseOver={(e) => (e.currentTarget.src = Discord)}
            onMouseOut={(e) => (e.currentTarget.src = Discord_1)}
            alt=""
          />
          <img
            src={Spotify_1}
            onMouseOver={(e) => (e.currentTarget.src = Spotify)}
            onMouseOut={(e) => (e.currentTarget.src = Spotify_1)}
            alt=""
          />
        </div>
      </Container>
      <Container>
        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              gap: "0.6rem",
              autoWidth: true,
              rewind: true,
              // autoplay: true,
              interval: 10000,
              focus: 0,
            }}
          >
            <SplideSlide>
              <div className="testimony">
                <div className="client-details">
                  <div className="contact">
                    <img src="https://i.pravatar.cc/50" alt="logo" />
                    <div className="name">
                      <p className="fsz-3">Viezh Robert</p>
                      <p className="fsz-4">Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="star">
                    <span>4.5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="client-testimony">
                  <p className="fsz-3">
                    “Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best.”
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="testimony">
                <div className="client-details">
                  <div className="contact">
                    <img src="https://loremflickr.com/50/50" alt="logo" />
                    <div className="name">
                      <p className="fsz-3">Viezh Robert</p>
                      <p className="fsz-4">Shanxi, China</p>
                    </div>
                  </div>
                  <div className="star">
                    <span>4.5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="client-testimony">
                  <p className="fsz-3">
                    “I like it because I like to travel far and still can
                    connect with high speed.”
                  </p>
                </div>
              </div>{" "}
            </SplideSlide>
            <SplideSlide>
              <div className="testimony">
                <div className="client-details">
                  <div className="contact">
                    <img src="https://i.pravatar.cc/50" alt="logo" />
                    <div className="name">
                      <p className="fsz-3">Viezh Robert</p>
                      <p className="fsz-4">Seoul, South Korea</p>
                    </div>
                  </div>
                  <div className="star">
                    <span>4.5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="client-testimony">
                  <p className="fsz-3">
                    “This is very unusual for my business that currently
                    requires a virtual private network that has high security.”
                  </p>
                </div>
              </div>{" "}
            </SplideSlide>
            <SplideSlide>
              <div className="testimony">
                <div className="client-details">
                  <div className="contact">
                    <img src="https://loremflickr.com/50/50" alt="logo" />
                    <div className="name">
                      <p className="fsz-3">Viezh Robert</p>
                      <p className="fsz-4">Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="star">
                    <span>4.5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="client-testimony">
                  <p className="fsz-3">
                    “Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best.”
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </div>
  );
};

export default Plans;
