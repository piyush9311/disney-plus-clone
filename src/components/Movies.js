import React from 'react'
import styled from 'styled-components'
import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from "react-redux"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies() {
    const movies = useSelector(selectMovies);
    console.log("hello movies there", movies);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Carousel {...settings}>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2018/09/simpsons_header-h_2018.jpg" />
                </Wrap>

            </Carousel>
        </Container>
    )
}

export default Movies

const Container = styled.section`
    padding: 0.5rem 0;
    h4
    {
        font-size: 1.7rem;
        text-transform: uppercase;
        font-weight: 300 !important;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
        margin: 2vh 0 1vh 2rem;

        @media screen and (max-width: 991px){
            font-size: 1.1rem;
        }

        @media screen and (max-width: 550px){
            font-size: 0.9rem;
        }
    }

`

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }
    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }

`
const Wrap = styled.div`
    position: relative;

    div {
        border-radius: 4px;
        padding: 5px;
        display: block;
        opacity: 1;
        z-index: 2000;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: default;
        object-position: center;
    }
    img {
        border: 4px solid transparent;
        border-radius: 4px
        width: 15vw;
        height: 15vh;
        object-fit: fill;
        opacity: 1;
        z-index: 1500;
        position: relative;

        @media screen and (max-width: 991px){
            width: 100%;
            object-fit: cover;
            height: auto;
        }
    }
        &:hover {
            padding: 1px;
            opacity: 1;
            z-index: 2000;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
    }
`