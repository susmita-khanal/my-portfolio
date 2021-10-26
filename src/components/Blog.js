import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <>
            <div className="blog">
                <h2>Our Latest Featured Projects</h2>
                <p>who are in extremely love with eco friendly system</p>
                <div className="catagories">
                    <div className="catagory-part">All</div>
                    <div className="catagory-part">Vector</div>
                    <div className="catagory-part">Raster</div>
                    <div className="catagory-part">UI/UX</div>
                    <div className="catagory-part">Printing</div>
                </div>
                <div className="blog-parts">
                    <div className="blog-images-area">
                        <img src="images/image-1.jpg" alt="" />
                        <div className="blog-part-title">3D Helmet Design</div>
                        <p className="blog-part-paragraph">client-project</p>
                    </div>
                    <div className="blog-images-area">
                        <img src="images/book.jpg" alt="" />
                        <div className="blog-part-title">2D Venyl Design</div>
                        <p className="blog-part-paragraph">client-project</p>
                    </div>
                    <div className="blog-images-area">
                        <img src="images/flower.jpg" alt="" />
                        <div className="blog-part-title">
                            Embosed Logo Design
                        </div>
                        <p className="blog-part-paragraph">client-project</p>
                    </div>
                    <div className="blog-images-area">
                        <img src="images/holi.jpg" alt="" />
                        <div className="blog-part-title">3D Helmet Design</div>
                        <p className="blog-part-paragraph">client-project</p>
                    </div>
                </div>
                <div className="blog-botton-area">
                    <button className="blog-botton">Load More Items</button>
                </div>
            </div>
        </>
    );
};

export default Blog;
