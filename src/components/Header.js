import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navOpen, setNavOpen] = useState(false); // For mobile nav toggle

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setShow(true);
            } else if (window.scrollY < lastScrollY) {
                setShow(true);
            } else {
                setShow(false);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close nav on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) setNavOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`${styles.header} ${show ? styles.headerAnimated : styles.headerHidden}`}>
            <div  className={`d-flex w-100 m-0 ${styles.header_left_content}`}>
                <div className={`col-auto ${styles.logo}`}>
                    <Image src="/images/logo.svg" width={200} height={80} quality={100}  />
                </div>
                {/* Nav links: hidden on mobile/tablet unless toggled, always visible on lg+ */}
                <nav
                    className={`col ${styles.nav} ${navOpen ? 'd-flex flex-column position-absolute top-100 start-0 w-100 bg-white shadow-lg p-4 px-5 z-3' : 'd-none'} d-lg-flex flex-lg-row position-lg-static w-lg-auto bg-lg-none shadow-lg-none p-lg-0 z-lg-auto`}
                    style={navOpen ? { left: 0 } : {}}
                >
                    <div className={styles.megaMenuWrapper}>
                        <a href="#" className={styles.link} onClick={e => {e.preventDefault();}}>Lorem</a>
                        <div className={styles.megaMenu}>
                            <div className={styles.megaMenuContent}>
                                <div className={styles.megaMenuLeft}>
                                    <h3><span>01</span> International baccalaureate</h3>
                                    <h3><span>02</span> British curriculum</h3>
                                    <h3><span>03</span> Homeschooling</h3>
                                </div>
                                <div className={styles.megaMenuRight}>
                                    <a href='/ibdp' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu1.png" alt="Box 1" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>IBDP</h4>
                                    </a>
                                    <a href='/career' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu2.png" alt="Box 2" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>Career</h4>
                                    </a>
                                    <a href='/act' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu3.png" alt="Box 3" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>Act</h4>
                                    </a>
                                    <a href='/ap' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu4.png" alt="Box 4" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>Ap</h4>
                                    </a>
                                    <a href='/ib' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu4.png" alt="Box 4" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>IB</h4>
                                    </a>
                                    <a href='/subject-tutoring' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu4.png" alt="Box 4" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>Subject Tutoring</h4>
                                    </a>
                                    <a href='/tutors' className={styles.megaMenuBox}>
                                        <img src="/images/header-menu4.png" alt="Box 4" data-scroll data-scroll-class="is-clipped" data-scroll-repeat="true" />
                                        <h4>Our Tutors</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/about" className={styles.link}>About</a>
                    <a href="/maincourse" className={styles.link}>MainCourse</a>
                    <a href="/home-schooling" className={styles.link}>HomeSchooling</a>
                </nav>
            </div>
            <div className={`d-flex justify-content-end w-100 m-0 ${styles.header_right_content}`}>
                <div className="col-auto p-0  d-sm-block">
                    <button>
                        <Image src="/images/mobile.png" width={25} height={25} quality={100} />
                        Call
                    </button>
                </div>
                <div className="col-auto p-0  d-sm-block">
                    <button>
                        <Image src="/images/whatsapp.png" width={25} height={25} quality={100} />
                        Whatsapp
                    </button>
                </div>
                {/* Hamburger toggle button for mobile/tablet */}
                <button
                    className={`d-lg-none ${styles.toggleButton}`}
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={() => setNavOpen((open) => !open)}
                    style={{ border: 'none', background: 'transparent' }}
                >
                    <Image src="/images/hamburger.png" width={35} height={35} quality={100} />
                </button>
            </div>
        </header>
    );
};

export default Header;  