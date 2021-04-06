import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCompass, faMap, faHeart } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header__logo-box'>
          <img src='../images/logo.png' className='header__logo' alt='LogoTangerine'></img>
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>WDevelopment</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>
          <a href='#' className='btn btn--white btn--animated'>
            our services
          </a>
        </div>
      </header>
      {/*  <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>Col 1 of 2</div>
          <div className='col-1-of-2'>Col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-2-of-3'>Col 2 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-2-of-4'>Col 2 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-3-of-4'>Col 3 of 4</div>
        </div>
      </section> */}
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Exciting for your new Project</h2>
          </div>
          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className='heading-tertiary u-margin-bottom-small'>Web Services</h3>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis eius
                provident aliquam unde necessitatibus soluta ut doloremque mollitia incidunt sunt,
                totam qui architecto est accusantium non ad minus consequatur.
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'>Web App</h3>
              <p className='paragraph'>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corrupti aliquid
                ad soluta facere ullam pariatur amet dolorem! Dolorum officia perspiciatis unde
                repellat praesentium et doloremque architecto illum impedit delectus.
              </p>
              <a href='#' className='btn-text'>
                Learn More &rarr;
              </a>
            </div>
            <div className='col-1-of-2'>
              <div className='composition'>
                <img
                  src='../images/service1.jpeg'
                  alt='service1'
                  className='composition__photo composition__photo--p1'
                />
                <img
                  src='../images/service2.png'
                  alt='service2'
                  className='composition__photo composition__photo--p2'
                />
                <img
                  src='../images/service3.png'
                  alt='service3'
                  className='composition__photo composition__photo--p3'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <FontAwesomeIcon className='feature-box__icon icon-basic-world ' icon={faGlobe} />
                <h3 className='heading-tertiary u-margin-bottom-small'>Explore the web</h3>
                <p className='feature-box__text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet fugiat
                  libero, ipsam explicabo
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <FontAwesomeIcon className='feature-box__icon icon-basic-world ' icon={faCompass} />
                <h3 className='heading-tertiary u-margin-bottom-small'>Explore the web</h3>
                <p className='feature-box__text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet fugiat
                  libero, ipsam explicabo
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <FontAwesomeIcon className='feature-box__icon icon-basic-world ' icon={faMap} />
                <h3 className='heading-tertiary u-margin-bottom-small'>Explore the web</h3>
                <p className='feature-box__text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet fugiat
                  libero, ipsam explicabo
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <FontAwesomeIcon className='feature-box__icon icon-basic-world ' icon={faHeart} />
                <h3 className='heading-tertiary u-margin-bottom-small'>Explore the web</h3>
                <p className='feature-box__text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet fugiat
                  libero, ipsam explicabo
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section-tours'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Choose plan for you</h2>
          </div>
          <div className='row'>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture-1'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--1'>
                      Coding Exploring
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Immersion in Tools</li>
                      <li>HTTP World</li>
                      <li>Ui-Ux technlogies</li>
                      <li>Front-end language</li>
                      <li>Frameworks</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-1'>
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='only-price'>Only</p>
                      <p className='only-value'>297€</p>
                    </div>
                    <a href='' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture-2'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--2'>
                      Project with us
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Lorem icsi</li>
                      <li>Application D</li>
                      <li>Storage technlogies</li>
                      <li>Back-end language</li>
                      <li>Frameworks</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-2'>
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <div className='only-price'>Only</div>
                      <div className='only-value'>€307</div>
                    </div>
                    <a href='' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture-3'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--3'>
                      Lorem sit Amend
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>Lorem icsi</li>
                      <li>Application D</li>
                      <li>Storage technlogies</li>
                      <li>Back-end language</li>
                      <li>Frameworks</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='only-price'>Only</p>
                      <p className='only-value'>€290</p>
                    </div>
                    <a href='' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn btn--green'>
              Explore all Project
            </a>
          </div>
        </section>
        <section className='section-story'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src='../images/bg-video.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>People who have changed their lives</h2>
          </div>
          <div className='row '>
            <div className='story '>
              <figure className='story__shape'>
                <img className='story__img' src='../images/pro-pic.jpeg' alt='profile picture' />
                <figcaption className='story__caption'>Golden Ramsey</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>My first exp</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora provident libero
                  optio obcaecati atque iste est dolores enim veritatis itaque consectetur
                  laboriosam, porro incidunt. Consequuntur eos natus quibusdam error mollitia!
                </p>
              </div>
            </div>
          </div>
          <div className='row '>
            <div className='story '>
              <figure className='story__shape'>
                <img className='story__img' src='../images/pro-pic-2.jpeg' alt='profile picture' />
                <figcaption className='story__caption'>Silver Gourmet</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  My life is changed since this
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora provident libero
                  optio obcaecati atque iste est dolores enim veritatis itaque consectetur
                  laboriosam, porro incidunt. Consequuntur eos natus quibusdam error mollitia!
                </p>
              </div>
            </div>
          </div>
          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn-text'>
              Learn More &rarr;
            </a>
          </div>
        </section>
        <section className='section-book'>
          <div className='book'>
            <div className='book__form'>
              <form action=''>
                <div className='u-margin-bottom-medium'>
                  <h2 className='heading-secondary'>Start booking now!</h2>
                </div>
                <div className='form__group'>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    className='form__input'
                    placeholder='Email Address'
                    autoComplete={'none'}
                    required
                  />
                  <label className='form__label' htmlFor='email'>
                    Email
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    autoComplete='false'
                    className='form__input'
                    placeholder='Full name'
                    required
                  />
                  <label className='form__label' htmlFor='name'>
                    Full name
                  </label>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>
    </React.Fragment>
  )
}

export default Home
