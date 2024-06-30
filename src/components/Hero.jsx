import '../App.css'

function HeroSection() {
    return (
        <main className='hero container'>
            <div className="hero-content">
                <h1>YOUR FEET
                    DESERVE
                    THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='Secondary-btn'>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="shopping-img">
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                        <img src="/images/amazon.png" alt="amazon-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="" />
            </div>

        </main>
    )
}

export default HeroSection;