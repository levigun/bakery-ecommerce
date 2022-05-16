import React from 'react'
import imageOne from '../../images/background-one.jpg'
import imageTwo from '../../images/background-two.jpg'
import imageThree from '../../images/team-picture.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const styles = {
    text: {
        color: 'white',
        fontSize: "500%",
        position: "fixed",
        zIndex: 1,
        margin: "0 auto",
    }
}

export default function Home() {
    return (
        <div className='carousel-wrapper'>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className='vh-100 vw-100 d-flex justify-content-center align-items-center text-center'>
                    <img src={imageOne} />
                    <p style={styles.text}>Bake fresh everyday</p>
                </div>
                <div className='vh-100 vw-100 d-flex justify-content-center align-items-center text-center'>
                    <img src={imageTwo} />
                    <p style={styles.text}>Quality ingredients</p>
                </div>
                <div className='vh-100 vw-100 d-flex justify-content-center align-items-center text-center'>
                    <img src={imageThree} />
                    <p style={styles.text}>Priority service</p>
                </div>
            </Carousel>
        </div>
    )
}




