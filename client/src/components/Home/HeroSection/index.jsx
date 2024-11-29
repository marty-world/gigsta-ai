import React from "react";
import "./herosection.scss"

const HeroSection = () => {
    return (
        <>
            <section className="main__heading heading">
                <div className="container p-4 mx-auto">
                    <h1 className="heading__title text-white">
                        <span>
                            Join
                        </span>
                        the Ultimate Community for Designers
                        <span>
                            and
                        </span>
                        Creatives
                    </h1>
                </div>
            </section>
            <section className="main__count count">
                <div className="container p-4 mx-auto">
                    <div className="count__inner">
                        <a className="count__item count-item flex flex-col justify-between items-center" href="courses.html">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        Website Design
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Designs to make <br />you stand out.
                                </p>
                            </div>
                        </a>
                        <a className="count__item count-item flex flex-col justify-between items-center" href="groups.html">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        WordPress
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Customize your <br />website
                                </p>
                            </div>
                        </a>
                        <a className="count__item count-item flex flex-col justify-between items-center" href="members.html">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        Logo Design
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Build your <br />brand
                                </p>
                            </div>
                        </a>
                        <a className="count__item count-item flex flex-col justify-between items-center" href="#">
                            <div className="count-item__icon">
                                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons">
                                        <path id="Icon"
                                            d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                            stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="count-item__text">
                                    <span>
                                        AI Services
                                    </span>
                                </p>
                                <p className="count-item__subtext">
                                    Add AI with <br />experts who get it
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HeroSection;