import React from 'react'

import '../style/home.css'
// temp import
import { Vegetables, Machinerires, Fruits, ProductCard } from './Products'
import ProductHeader from '../Component/ProductHeader'


function HomePage() {
    return (
        <>
            <ProductHeader />
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg"
                            className="d-block w-100 gallery"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img
                            src="https://previews.123rf.com/images/movingmoment/movingmoment1702/movingmoment170200096/71879129-sfondo-di-molti-cereali-e-legumi-in-piatti-di-ceramica-bianca-.jpg"
                            className="d-block w-100 gallery"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img
                            src="https://p1.nicelocal.in/preview/MmR8h-I_CUXnvVWZsON03A/630x384x85/1/e/b/original_60903940ddc19b04bf0317f6_6179d4e6827b6.jpg"
                            className="d-block w-100 gallery"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img
                            src="https://www.powertiller.in/images/10.jpg"
                            className="d-block w-100 gallery"
                            alt=""
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <br />
            <div className="Home">
                {/* <div className="card category-button">
                    <a className="category-btn" href="#fruits-veg">
                        <button className="btn fandv">Fruits and Vegetables</button>
                    </a>
                    <a className="category-btn" href="#grains-pulses">
                        <button className="btn gandp">Grains and Pulses</button>
                    </a>
                    <a className="category-btn" href="#pest-insect">
                        <button className="btn pandi">Pesticides and Fertilizer</button>
                    </a>
                    <a className="category-btn" href="#mach-farm">
                        <button className="btn mandf">Machineries and Farming Tools</button>
                    </a>
                </div> */}
                <br />
                <div className="container">
                    <h3 className="text-center mt-4">
                        Fruits
                    </h3>
                    <div className="card-wrap">
                        {
                            Fruits.map((item, index) => {
                                return (
                                    <ProductCard index={index} data={item} />
                                )
                            })
                        }
                    </div>
                    <hr />
                    <div className="categories-wrap">
                        <h3 className="text-center mt-4">
                            Vegitables
                        </h3>
                        <div className="card-wrap">
                            {
                                Vegetables.map((item, index) => {
                                    return (
                                        <ProductCard index={index} data={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-center mt-4">
                        Machineries
                    </h3>
                    <div className="card-wrap">
                        {
                            Machinerires.map((item, index) => {
                                return (
                                    <ProductCard index={index} data={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="call-us">
                    <div className="call-img">
                        <img
                            src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            loading="lazy"
                            className="img-block"
                            alt="Customer Care Executive"
                        />
                    </div>
                    <div className="call-para">
                        <h3>Need Help? Talk to our Experts</h3>
                        <p>
                            If you have any Query feel free to{" "}
                            <a href="...">Request a Call</a> or{" "}
                            <a href="...">Leave a Messege here</a>
                        </p>
                    </div>
                </div>
                <footer>
                    <div className="cont-detail">
                        <p>Full Address Please</p>
                        <p>
                            <a href="mailto:himanshubari789@gmail.com" translate="no">
                                himanshubari789@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+918849959488">8849959488</a>
                        </p>
                    </div>
                    <div className="footer">
                        <button>About us</button>
                        <button>Contact us</button>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default HomePage