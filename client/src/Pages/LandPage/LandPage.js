import React from "react";
import "./LandPage.css";

const LandPage = () => {
    return (
        <section className="intro-slide">
            <div className="container">
                <div className="range">
                    <div className="col-md-6">
                        <h1 className="txt-62">
                            Intelligent Online <br />
                            Lost & Found
                        </h1>
                        <p className="intro">
                            Lostings is an entirely new intelligent lost and
                            found matching system & inventory management
                            software all in one. We have taken a different
                            approach than the traditional lost & founds by
                            creating a multi-level platform for businesses and
                            individuals to submit lost or found items into our
                            matching system. Once the lost or found items are
                            submitted and placed into our matching system, we
                            intelligently help find and locate the misplaced
                            goods and who has them.
                        </p>
                        <div className="col-md-12">
                            <span className="bordred">
                                <a className="btn-link" href="./found">
                                    Submit Found Item
                                </a>
                            </span>{" "}
                            <span class="bordredColor">
                                <a className="btn-link" href="./lost">
                                    Submit Lost Item
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://www.lostings.com/public/assets/images/image01.png"
                            alt="..."
                            width={600}
                        />
                    </div>
                </div>
            </div>
            <div className="container blue">
                <div className="col-lg-12">
                    <div className="col-lg-6">
                        <h3 className="white-txt-post">Featured LOST ITEMS</h3>
                        <ul className="">
                            <li className="items-link">
                                <a href="#">
                                    <img src="https://via.placeholder.com/90" />
                                </a>
                                <div className="list-link">
                                    <a className="list-link-a" href="#">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                    </a>
                                    <div className="readm">
                                        <a className="read" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="items-link">
                                <a href="#">
                                    <img src="https://via.placeholder.com/90" />
                                </a>
                                <div className="list-link">
                                    <a className="list-link-a" href="#">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                    </a>
                                    <div className="readm">
                                        <a className="read" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="items-link">
                                <a href="#">
                                    <img src="https://via.placeholder.com/90" />
                                </a>
                                <div className="list-link">
                                    <a className="list-link-a" href="#">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                    </a>
                                    <div className="readm">
                                        <a className="read" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="white-txt-post">Featured FOUND ITEMS</h3>
                        <ul className="posts">
                            <li className="items-link">
                                <a href="#">
                                    <img src="https://via.placeholder.com/90" />
                                </a>
                                <div className="list-link">
                                    <a className="list-link-a" href="#">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                    </a>
                                    <div className="readm">
                                        <a className="read" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="items-link">
                                <a href="#">
                                    <img src="https://via.placeholder.com/90" />
                                </a>
                                <div className="list-link">
                                    <a className="list-link-a" href="#">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                    </a>
                                    <div className="readm">
                                        <a className="read" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="items-link">
                                <a href="#">
                                    <img src="https://via.placeholder.com/90" />
                                </a>
                                <div className="list-link">
                                    <a className="list-link-a" href="#">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                    </a>
                                    <div className="readm">
                                        <a className="read" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandPage;
