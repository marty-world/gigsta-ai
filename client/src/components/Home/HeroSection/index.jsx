import React from "react";
import "./herosection.scss"

const HeroSection = () => {
    return (
        <>
            <section className="main__heading heading">
                <div className="container p-4 mx-auto">
                    <h1 className="heading__title">
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
                <div className="container mx-auto">
                    <div className="count__inner">
                        <a className="count__item count-item" href="members.html">
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
                            <p className="count-item__text">
                                <span>
                                    39K+
                                </span>
                            </p>
                            <p className="count-item__subtext">
                                members
                            </p>
                        </a>
                        <a className="count__item count-item" href="groups.html">
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
                            <p className="count-item__text">
                                <span>
                                    230+
                                </span>
                            </p>
                            <p className="count-item__subtext">
                                groups
                            </p>
                        </a>
                        <a className="count__item count-item" href="courses.html">
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
                            <p className="count-item__text">
                                <span>
                                    50+
                                </span>
                            </p>
                            <p className="count-item__subtext">
                                online courses
                            </p>
                        </a>
                        <a className="count__item count-item" href="#">
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
                            <p className="count-item__text">
                                <span>
                                    4.9
                                </span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="icons" clip-path="url(#clip0_114_9488)">
                                        <path id="Vector"
                                            d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                            fill="#F9D442" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_114_9488">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                            <p className="count-item__subtext">
                                320+ ratings
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HeroSection;