import React, { useRef, useState } from "react";
import Image from './Image'
import Slider from 'react-slick';
import './slick.css'
import './slick-theme.css';


const MyCarousel = (props) => {
    const images = props.images;
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: props.slidesToShow,
        slidesToScroll: 1,
        afterChange: function (index) {
            if(props.slidesToShow != 1){
                props.indexHandler(index);
            }
        }
    };
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [freeze, setFreeze] = useState(0);
    // const freezeIndex = () => {
    //     console.log(currentIndex);
    //     setFreeze(!freeze)
    //     if (freeze != 0) {
    //         setCurrentIndex(0);
    //     }
    // }

    return (
        <div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}>

                {images.map((image) => {
                    return <Image src={image.src} />
                })}

            </Slider>


            {/* bottom part */}
            {
                !props.frozen 
                ? (<div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                {/* <div style={{ width: '50%' }}>
                                    <input type="checkbox" name="" id="" onClick={freezeIndex} />Freeze item
                                </div> */}
                <div>
                    <br /><br />
                    <button className="button" onClick={previous}>
                        Previous
                    </button>
                    <button className="button" onClick={next}>
                        Next
                    </button>
                </div>

            </div>) : <div></div>

            }


        </div>
    );
};

export default MyCarousel;
