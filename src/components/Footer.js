import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className={`fade-in-section ${styles.footerWrap}`}
      style={{ animationDelay: "0.2s" }}>
      <div
        className={`fade-in-section ${styles.footerTop}`}
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        style={{ animationDelay: "0.1s" }}
      >
        <div className={styles.footerContactRow}>
          <span className="SubHeading">CONTACT US</span>
        </div>
        <h2 className={styles.footerTitle}>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
        </h2>
        <div className={styles.footerMainRow}>
          <div
            className={styles.footerTop}
          >
            <img
              src="/images/footerImage.jpg"
              data-scroll
              data-scroll-class="is-clipped"
              data-scroll-repeat="true"
              data-scroll-offset="-10%"
              alt="Footer"
              className={`${styles.footerMainImg}`}
            />
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"

            className={`fade-in-section ${styles.footerTop}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className={styles.footerDesc}>
              Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
            </div>
            <div className={styles.footerNewsletterWrap}>
              <div className={styles.footerNewsletterLabel}>SUBSCRIBE TO OUR NEWSLETTER</div>
              <form className={styles.footerNewsletterForm} onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Email" className={styles.footerNewsletterInput} />
                <button className={styles.footerNewsletterBtn} type="submit">
                  <img src="/images/right-arrow-blue.png" alt="Subscribe" width={28} height={28} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinksRow}>
        {[0, 1, 2].map((colIdx) => (
          <div
            key={colIdx}
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"

            className={`fade-in-section ${styles.footerTop}`}
            style={{ animationDelay: `${0.4 + colIdx * 0.1}s` }}
          >
            <div className={styles.footerLinksCol}>
              <div className={styles.footerLinksTitle}>LOREM</div>
              <ul>
                <li>Lorem Ipsum Dolor</li>
                <li>Lorem Ipsum Dolor Sit</li>
                <li>Lorem Ipsum Dolor</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum Dolor Sit</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerBottomRow}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.7s" }}
        >
          <div className={styles.footerAddressLabel}>ADDRESS</div>
          <div className={styles.footerAddress}>1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai</div>
          <div className={styles.footerAddress}>Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai - United Arab Emirates</div>
        </div>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.8s" }}
        >
          <div className={styles.footerContactLabel}>CONTACT</div>
          <div className={styles.footerContact}>+00 97686 93485</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 