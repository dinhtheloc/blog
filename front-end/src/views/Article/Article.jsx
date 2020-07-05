import React from 'react';
import {
    useParams
  } from "react-router-dom";

function Article(props) {
    let { slug } = useParams();
    console.log(slug);
    return (
        <>
            <section class="slice slice-lg" data-offset-top="#header-main" style={{paddingTop: 89}}>
                <div class="container pt-6">
                    <div class="row justify-content-center">
                        <div class="col-md-9">
                            <h1 class="lh-150 mb-3">Keep your face always toward the sunshine - and shadows will fall behind you.</h1>
                            <p class="lead text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                            <div class="media align-items-center mt-5">
                                <div>
                                    <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="Image placeholder" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/team-6-800x800.jpg" />
                                    </a>
                                </div>
                                <div class="media-body">
                                    <span class="d-block h6 mb-0">John Sullivan</span>
                                    <span class="text-sm text-muted">25 Jan 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-cover bg-size--cover"
                style={{
                    height: 600,
                    backgroundImage: 'url("https://preview.webpixels.io/purpose-website-ui-kit/assets/img/backgrounds/img-1-1920x800.jpg")',
                    backgroundPosition: 'top center'
                }}></section>
            <section class="slice">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <article>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                <h5>First thing you need to do</h5>
                                <figure class="figure">
                                    <img alt="Image placeholder" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-3-800x600.jpg" class="img-fluid rounded" />
                                    <figcaption class="mt-3 text-muted">Figure one: Type here your description</figcaption>
                                </figure>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <h5>Second thing you need to do</h5>
                                <figure class="figure">
                                    <img alt="Image placeholder" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-4-800x600.jpg" class="img-fluid rounded" />
                                    <figcaption class="mt-3 text-muted">Figure two: Type here your description</figcaption>
                                </figure>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </article>
                            <hr />
                            <h5 class="mb-4">Comments</h5>
                            <div class="mb-3">
                                <div class="media media-comment">
                                    <img alt="Image placeholder" class="rounded-circle shadow mr-4" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/team-2-800x800.jpg" style={{ width: "64px" }} />
                                    <div class="media-body">
                                        <div class="media-comment-bubble left-top">
                                            <h6 class="mt-0">Alexis Ren</h6>
                                            <p class="text-sm lh-160">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                            <div class="icon-actions">
                                                <a href="#" class="love active">
                                                    <i class="far fa-heart"></i>
                                                    <span class="text-muted">10 likes</span>
                                                </a>
                                                <a href="#">
                                                    <i class="far fa-comment"></i>
                                                    <span class="text-muted">1 reply</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="media media-comment">
                                    <img alt="Image placeholder" class="rounded-circle shadow mr-4" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/team-2-800x800.jpg" style={{ width: "64px" }} />
                                    <div class="media-body">
                                        <div class="media-comment-bubble left-top">
                                            <h6 class="mt-0">Tom Cruise</h6>
                                            <p class="text-sm lh-160">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                            <div class="icon-actions">
                                                <a href="#" class="love active">
                                                    <i class="far fa-heart"></i>
                                                    <span class="text-muted">20 likes</span>
                                                </a>
                                                <a href="#">
                                                    <i class="far fa-comment"></i>
                                                    <span class="text-muted">3 replies</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="media media-comment align-items-center">
                                    <img alt="Image placeholder" class="avatar rounded-circle shadow mr-4" src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/team-2-800x800.jpg" />
                                    <div class="media-body">
                                        <form>
                                            <div class="form-group mb-0">
                                                <div class="input-group input-group-merge border">
                                                    <textarea class="form-control" data-toggle="autosize" placeholder="Write your comment" rows="1"
                                                        style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: 346 }}></textarea>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" type="button">
                                                            <span class="far fa-paper-plane"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Article;