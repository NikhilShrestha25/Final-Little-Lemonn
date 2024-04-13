import React from 'react';
import bannerImg from '../images/restauranfood.jpg'

function Header(){
    return(
        <header className='header'>
            <section>
                {/* banner text */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button aria-label='On Click'>Reserve Table</button>
                </div>

                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;