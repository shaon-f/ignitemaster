// src/pages/_app.js

import "@/styles/globals.css";
//Home Page Css
import "@/styles/home/Hero.css";
import "@/styles/home/Course.css";
import "@/styles/home/About.css";
import "@/styles/home/Test.css";
import "@/styles/home/MovingBanner.css";
import "@/styles/home/Subjects.css";
import "@/styles/home/Alumni.css";
import "@/styles/home/Usps.css";
import "@/styles/home/Trainers.css";
import "@/styles/home/Testimonial.css";
import "@/styles/home/Blog.css";

//Blog Page Css
import "@/styles/blog/Blogpg.css";


//IBDP page Css
import "@/styles/ibdp/Ibdp.css";

//IBDP page Css
import "@/styles/slug/slug.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useRouter } from "next/router";
import Home from "./Home";
import IBDP from "./ibdp";
import Blog from "./blog";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    let RenderedComponent = null;

    if (router.pathname === "/") {
        RenderedComponent = <Home />;
    } else if (router.pathname === "/ibdp") {
        RenderedComponent = <IBDP />;
    }
    else if (router.pathname === "/blog") {
        RenderedComponent = <Blog />;
    } else {
        RenderedComponent = <Component {...pageProps} />;
    }

    return (
        <>
            <Header />
            {RenderedComponent}
            <Footer />
        </>
    );
}
