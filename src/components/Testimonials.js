import React from "react";
import "./Testimonials.css";
import ReactStars from "react-rating-stars-component";

const Testimonials = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className="testimonials">
                <div className="testimonial-top">
                    <h2>Testimonials</h2>
                    <p>
                        If you are looking at blank cassettes on the web, you
                        may be very confused at the difference in price. You may
                        see some for as low as $.17 each.
                    </p>
                </div>
                <div className="testimonials-last">
                    <div className="testimonial-parts">
                        <div className="textimonial-para">
                            <em>
                                {" "}
                                If you are looking at blank cassettes on the
                                web, you may be very confused at the difference
                                in price. You may see some for as low as $.17
                                each.
                            </em>
                        </div>
                        <h3>fanny spencer</h3>
                        <div>
                            <ReactStars
                                count={4}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                }
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                color="#ffd700"
                            />
                        </div>
                    </div>

                    <div className="testimonial-parts">
                        <div className="textimonial-para">
                            <em>
                                {" "}
                                If you are looking at blank cassettes on the
                                web, you may be very confused at the difference
                                in price. You may see some for as low as $.17
                                each.
                            </em>
                        </div>
                        <h3>fanny spencer</h3>
                        <div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                }
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                color="#ffd700"
                            />
                        </div>
                    </div>
                    <div className="testimonial-parts">
                        <div className="textimonial-para">
                            <em>
                                {" "}
                                If you are looking at blank cassettes on the
                                web, you may be very confused at the difference
                                in price. You may see some for as low as $.17
                                each.
                            </em>
                        </div>
                        <h3>fanny spencer</h3>
                        <div>
                            <ReactStars
                                count={4}
                                onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                }
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                color="#ffd700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
