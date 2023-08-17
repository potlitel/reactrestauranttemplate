function App() {
  return (
    <div className="app">
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <a
            href="ddd"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <h1>
              Jassa<span>.</span>
            </h1>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#chefs">Chefs</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="fdfg">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="dfgdgdfg">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="dfgdfgdfg">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="dfgdfg">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="fghfgh">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="fghgfhfg#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#fghgfhfgh">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="fghfghgf#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#fhgfhf">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#fhgfh">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <a className="btn-book-a-table" href="#book-a-table">
            Book a Table
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" className="btn-book-a-table">
                  Book a Table
                </a>
                <a
                  href="https://youtu.be/lE8NzMhdmK8"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src="./assets/img/hero-img.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                Learn More <span>About Us</span>
              </p>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-7 position-relative about-img"
                style={{ backgroundImage: "url(./assets/img/about.jpg)" }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="call-us position-absolute">
                  <h4>Book a Table</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              <div
                className="col-lg-5 d-flex align-items-end"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div className="position-relative mt-4">
                    <img
                      src="./assets/img/about-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <a
                      href="https://youtu.be/lE8NzMhdmK8"
                      className="glightbox play-btn"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="why-box">
                  <h3>Why Choose Jassa?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis.
                  </p>
                  <div className="text-center">
                    <a href="cbcvbcvb#" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-center">
                <div className="row gy-4">
                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Corporis voluptates officia eiusmod</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-gem"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-inboxes"></i>
                      <h4>Labore consequatur incidid dolore</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats-counter" className="stats-counter">
          <div className="container" data-aos="zoom-out">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Menu</h2>
              <p>
                Check Our <span>Jassa Menu</span>
              </p>
            </div>

            <ul
              className="nav nav-tabs d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-starters"
                  href="asdasd"
                >
                  <h4>Starters</h4>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-breakfast"
                  href="asdasd"
                >
                  <h4>Breakfast</h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-lunch"
                  href="asdasd"
                >
                  <h4>Lunch</h4>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-dinner"
                  href="asdasd"
                >
                  <h4>Dinner</h4>
                </a>
              </li>
            </ul>

            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="tab-pane fade active show" id="menu-starters">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Starters</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-breakfast">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Breakfast</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-lunch">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Lunch</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=" "
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="menu-dinner">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Dinner</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$5.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$14.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$8.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$12.95</p>
                  </div>

                  <div className="col-lg-4 menu-item">
                    <a
                      href="./assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="./assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price">$9.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>
                What Are They <span>Saying About Us</span>
              </p>
            </div>

            <div
              className="slides-1 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim
                            donec porttitora entum suscipit rhoncus. Accusantium
                            quam, ultricies eget id, aliquam eget nibh et.
                            Maecen aliquam, risus at semper.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="./assets/img/testimonials/testimonials-1.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae
                            irure esse labore quem cillum quid cillum eram malis
                            quorum velit fore eram velit sunt aliqua noster
                            fugiat irure amet legam anim culpa.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="./assets/img/testimonials/testimonials-2.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna
                            enim sint quorum nulla quem veniam duis minim tempor
                            labore quem eram duis noster aute amet eram fore
                            quis sint minim.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="./assets/img/testimonials/testimonials-3.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram
                            irure aliqua veniam tempor noster veniam enim culpa
                            labore duis sunt culpa nulla illum cillum fugiat
                            legam esse veniam culpa fore nisi cillum quid.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>John Larson</h3>
                          <h4>Entrepreneur</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src="./assets/img/testimonials/testimonials-4.jpg"
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="events" className="events">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h2>Events</h2>
              <p>
                Share <span>Your Moments</span> In Our Restaurant
              </p>
            </div>

            <div
              className="slides-3 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide event-item d-flex flex-column justify-content-end"
                  style={{ backgroundImage: "url(./assets/img/events-1.jpg)" }}
                >
                  <h3>Custom Parties</h3>
                  <div className="price align-self-start">$99</div>
                  <p className="description">
                    Quo corporis voluptas ea ad. Consectetur inventore sapiente
                    ipsum voluptas eos omnis facere. Enim facilis veritatis id
                    est rem repudiandae nulla expedita quas.
                  </p>
                </div>

                <div
                  className="swiper-slide event-item d-flex flex-column justify-content-end"
                  style={{ backgroundImage: "url(./assets/img/events-2.jpg)" }}
                >
                  <h3>Private Parties</h3>
                  <div className="price align-self-start">$289</div>
                  <p className="description">
                    In delectus sint qui et enim. Et ab repudiandae inventore
                    quaerat doloribus. Facere nemo vero est ut dolores ea
                    assumenda et. Delectus saepe accusamus aspernatur.
                  </p>
                </div>

                <div
                  className="swiper-slide event-item d-flex flex-column justify-content-end"
                  style={{ backgroundImage: "url(./assets/img/events-3.jpg)" }}
                >
                  <h3>Birthday Parties</h3>
                  <div className="price align-self-start">$499</div>
                  <p className="description">
                    Laborum aperiam atque omnis minus omnis est qui assumenda
                    quos. Quis id sit quibusdam. Esse quisquam ducimus officia
                    ipsum ut quibusdam maxime. Non enim perspiciatis.
                  </p>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="chefs" className="chefs section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Chefs</h2>
              <p>
                Our <span>Proffesional</span> Chefs
              </p>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="./assets/img/chefs/chefs-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="dasdasd">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="sdfsdfsdf">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="sdfsdfsdf">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="sfddsfsdf">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>
                      Velit aut quia fugit et et. Dolorum ea voluptate vel
                      tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                      minima enim corporis et voluptate.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="./assets/img/chefs/chefs-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="sdfsf">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="sfdsfsdf">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="sdfsfsf">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="sdfsdfsd">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis. Voluptate
                      sed quas reiciendis animi neque sapiente.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="./assets/img/chefs/chefs-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="sdfsf">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="sdfsdf">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="sfddsf">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="sdfsdf">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="book-a-table" className="book-a-table">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Book A Table</h2>
              <p>
                Book <span>Your Stay</span> With Us
              </p>
            </div>

            <div className="row g-0">
              <div
                className="col-lg-4 reservation-img"
                style={{ backgroundImage: "url(./assets/img/reservation.jpg)" }}
                data-aos="zoom-out"
                data-aos-delay="200"
              ></div>

              <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
                <form
                  action="forms/book-a-table.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="date"
                        className="form-control"
                        id="date"
                        placeholder="Date"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="time"
                        id="time"
                        placeholder="Time"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        name="people"
                        id="people"
                        placeholder="# of people"
                        data-rule="minlen:1"
                        data-msg="Please enter at least 1 chars"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your booking request was sent. We will call back or send
                      an Email to confirm your reservation. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Book a Table</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>gallery</h2>
              <p>
                Check <span>Our Gallery</span>
              </p>
            </div>

            <div className="gallery-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-1.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-2.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-3.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-4.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-5.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-6.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-7.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="./assets/img/gallery/gallery-8.jpg"
                  >
                    <img
                      src="./assets/img/gallery/gallery-8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact</h2>
              <p>
                Need Help? <span>Contact Us</span>
              </p>
            </div>

            <div className="mb-3">
              {/* <iframe
                style={{ border: "0", width: "100%", height: "350px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>

            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-map flex-shrink-0"></i>
                  <div>
                    <h3>Our Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e2818d8c96838196a2879a838f928e87cc818d8f"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item  d-flex align-items-center">
                  <i className="icon bi bi-share flex-shrink-0"></i>
                  <div>
                    <h3>Opening Hours</h3>
                    <div>
                      <strong>Mon-Sat:</strong> 11AM - 23PM;
                      <strong>Sunday:</strong> Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              action="#"
              method="post"
              role="form"
              className="php-email-form p-3 p-md-4"
            >
              <div className="row">
                <div className="col-xl-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-xl-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                  1266 <br />
                  Ludhiana, Punjab 141008 - IND
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="a7cec9c1c8e7c2dfc6cad7cbc289c4c8ca"
                  >
                    [email&#160;protected]
                  </a>
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#dfdfg" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#dfgdfg" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#dfgfdg" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#dgfdg" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Jassa</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            with love <a href="https://therichpost.com/">therichpost</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </div>
  );
}

export default App;
