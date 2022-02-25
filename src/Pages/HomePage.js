import React from 'react'
import Header from '../Component/Header'
// temp import
import vegi1 from '../assets/images/red-chilli.jpg'
import vegi2 from '../assets/images/potato.jpg'
import vegi3 from '../assets/images/tomato.jpg'
import vegi4 from '../assets/images/cucumber.jpg'
import callHelp from '../assets/images/call-help.jpg'
import Footer from '../Component/Footer'
const temArr = [
    {
        imgSrc: vegi1,
        name: 'Red Chilli'
    },
    {
        imgSrc: vegi2,
        name: 'Potato'
    },
    {
        imgSrc: vegi3,
        name: 'Tomato'
    },
    {
        imgSrc: vegi4,
        name: 'Cucumber'
    },
]
function HomePage() {
    return (
        <>
            <Header />

            <header className="row tm-welcome-section">
                <h2 className="col-12 text-center tm-section-title">Welcome to Kishan Darshan</h2>
                <p className="col-12 text-center">----About the Website ----
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel libero obcaecati ullam, dolorem error alias natus veniam labore quis eaque deserunt ratione. Molestiae, voluptas. Ad maiores corporis nobis adipisci aliquam facilis earum?
                </p>
            </header>
            <div className="home-nav-list">
                <ul>
                    <li className="tm-paging-item"><a href="#vege" className="tm-paging-link">Vegetables</a></li>
                    <li className="tm-paging-item"><a href="#p-and-i" className="tm-paging-link">Pesticides and Insectisides</a></li>
                    <li className="tm-paging-item"><a href="#mac" className="tm-paging-link">Machineries</a></li>
                </ul>
            </div>
            <div id="products">
                <br id="vege" />
                <br />
                <center><h1>Vegetables</h1></center>
                <br />
                <br />
                <div id="vegetables">
                    {
                        temArr.map((item, index) => {
                            return (

                                <article key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                    <figure>
                                        <img src={item.imgSrc} alt="Image" className="img-fluid tm-gallery-img" />
                                        <figcaption>
                                            <h4 className="tm-gallery-title">{item.name}</h4>
                                            <p className="tm-gallery-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <p className="tm-gallery-price">Rs. 50/kg</p>
                                        </figcaption>
                                    </figure>
                                </article>

                            )
                        })
                    }
                </div>
                <br id="p-and-i" />
                <br />
                <center><h1>Pesticides and Insectisides</h1></center>
                <br />
                <br />
                <div id="vegetables">
                    {
                        temArr.map((item, index) => {
                            return (

                                <article key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                    <figure>
                                        <img src={item.imgSrc} alt="Image" className="img-fluid tm-gallery-img" />
                                        <figcaption>
                                            <h4 className="tm-gallery-title">{item.name}</h4>
                                            <p className="tm-gallery-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <p className="tm-gallery-price">Rs. 50/kg</p>
                                        </figcaption>
                                    </figure>
                                </article>

                            )
                        })
                    }
                </div>



                <br id="mac" />
                <br />
                <center><h1>Machineries</h1></center>
                <br />
                <br />
                <div id="vegetables">
                    {
                        temArr.map((item, index) => {
                            return (

                                <article key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                                    <figure>
                                        <img src={item.imgSrc} alt="Image" className="img-fluid tm-gallery-img" />
                                        <figcaption>
                                            <h4 className="tm-gallery-title">{item.name}</h4>
                                            <p className="tm-gallery-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <p className="tm-gallery-price">Rs. 50/kg</p>
                                        </figcaption>
                                    </figure>
                                </article>

                            )
                        })
                    }
                </div>
            </div>
            <div class="tm-section tm-container-inner">
                <div class="row">
                    <div class="col-md-6">
                        <figure class="tm-description-figure">
                            <img src={callHelp} alt="Image" height="100px" class="img-fluid" />
                        </figure>
                    </div>
                    <div class="col-md-6">
                        <div class="tm-description-box">
                            <h4 class="tm-gallery-title">Expert Call</h4>
                            <p class="tm-mb-45">
                                <br/>
                                    <br/>
                                        If you have any Query
                                        <br/>
                                            feel free to <a href="http://">request a Call</a> or <a href="contact.html">Leave a Messege here</a>
                                        </p>
                                        <a href="about.html" class="tm-btn tm-btn-default tm-right">Read More</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <Footer />
                </>
                )
}

                export default HomePage