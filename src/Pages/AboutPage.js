import React from 'react'
import Header from '../Component/Header'
import userImage from '../assets/images/user-logo.jpg'
import farmerGirl from '../assets/images/farmer-girl.jpg'
import Footer from '../Component/Footer'
function AboutPage() {
    return (
        <>
            <Header />
            <header className="row tm-welcome-section">
                <h2 className="col-12 text-center tm-section-title">About Kishan Darshan</h2>
                <p className="col-12 text-center">----About the Website ----
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel libero obcaecati ullam, dolorem error alias natus veniam labore quis eaque deserunt ratione. Molestiae, voluptas. Ad maiores corporis nobis adipisci aliquam facilis earum?
                </p>
            </header>
            <div className="container">
                <div class="row">
                    <article class="col-lg-6">
                        <figure class="tm-person">
                            <img src={userImage} alt="Image" class="img-fluid tm-person-img" />
                            <figcaption class="tm-person-description">
                                <h4 class="tm-person-name">Mr. Praveen Sharma</h4>
                                <p class="tm-person-title">Founder</p>
                                <p class="tm-person-about">Vivamus cursus leo nec sem feugiat sagittis.
                                    Duis ut feugiat odio, sit amet accumsan
                                    odio.</p>
                                <div>
                                    <a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
                                    <a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
                                    <a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
                                </div>
                            </figcaption>
                        </figure>
                    </article>
                    <article class="col-lg-6">
                        <figure class="tm-person">
                            <img src={userImage} alt="Image" class="img-fluid tm-person-img" />
                            <figcaption class="tm-person-description">
                                <h4 class="tm-person-name">Valentina Martin</h4>
                                <p class="tm-person-title">Culinary Director</p>
                                <p class="tm-person-about">Praesent non vulputate elit. Orci varius
                                    natoque penatibus et magnis montes, nascetur ridiculus mus.</p>
                                <div>
                                    <a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
                                    <a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
                                    <a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
                                    <a href="https://youtube.com" class="tm-social-link"><i class="fab fa-youtube tm-social-icon"></i></a>
                                </div>
                            </figcaption>
                        </figure>
                    </article>
                    <div className="bg-img-fix">
                        {/* Empty Space */}
                    </div>
                    <div class="tm-container-inner tm-features">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="tm-feature">
                                    <i class="fas fa-4x fa-pepper-hot tm-feature-icon"></i>
                                    <p class="tm-feature-description">Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                                    <a href="index.html" class="tm-btn tm-btn-primary">Read More</a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="tm-feature">
                                    <i class="fas fa-4x fa-seedling tm-feature-icon"></i>
                                    <p class="tm-feature-description">Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p>
                                    <a href="index.html" class="tm-btn tm-btn-success">Read More</a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="tm-feature">
                                    <i class="fas fa-4x fa-cocktail tm-feature-icon"></i>
                                    <p class="tm-feature-description">Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.</p>
                                    <a href="index.html" class="tm-btn tm-btn-danger">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tm-history-inner">
                    <img src={farmerGirl} alt="Image" class="img-fluid tm-history-img"/>
                        <div class="tm-history-text">
                            <h4 class="tm-history-title">How Our Website helps Farmer</h4>
                            <p class="tm-mb-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatem nulla corporis quasi impedit dolores nemo, eius excepturi nesciunt libero commodi praesentium dolore? Voluptatum, molestias. Vel soluta vero minima fugiat.</p>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage