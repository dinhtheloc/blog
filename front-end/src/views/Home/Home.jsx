import React from 'react';
import {
    Link
  } from "react-router-dom";
function Home(props) {
    return (
        <>
            <div id="blog-blog-1" title="blog/blog-1.html">
                <section class="slice-xl delimiter-top">
                    <div class="container">
                        <div class="mb-5 text-center">
                            <h3>Chia sẻ kiến thức chuyên sâu về Frontend</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="mb-5 mb-lg-0" data-animate-hover="1">
                                    <div class="animate-this">
                                        <Link to="/article/slug-hihi">
                                            <img alt="Image placeholder" class="img-fluid rounded shadow" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-1-800x600.jpg" />
                                        </Link>
                                    </div>
                                    <div class="pt-4">
                                        <small class="text-uppercase">Oct 15, 2019</small>
                                        <h5>Beware the mountain</h5>
                                        <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-5 mb-lg-0" data-animate-hover="1">
                                    <div class="animate-this">
                                        <a href="#">
                                            <img alt="Image placeholder" class="img-fluid rounded shadow" 
                                            src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-1-800x600.jpg" />
                                        </a>
                                    </div>
                                    <div class="pt-4">
                                        <small class="text-uppercase">Oct 15, 2019</small>
                                        <h5>Listen to the nature</h5>
                                        <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div data-animate-hover="1">
                                    <div class="animate-this">
                                        <a href="#">
                                            <img alt="Image placeholder" class="img-fluid rounded shadow" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-1-800x600.jpg" />
                                        </a>
                                    </div>
                                    <div class="pt-4">
                                        <small class="text-uppercase">Oct 15, 2019</small>
                                        <h5>Rules not to follow</h5>
                                        <p class="mt-3">When we strive to become better than we are, everything around us becomes better, too.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;