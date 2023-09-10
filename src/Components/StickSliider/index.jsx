import PropTypes from 'prop-types';
import Slider from "react-slick";
// slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StickSlider = ({ children }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {children}
            </Slider>
        </>
    );
}

StickSlider.propTypes = {
    children: PropTypes.node,
}

export default StickSlider;