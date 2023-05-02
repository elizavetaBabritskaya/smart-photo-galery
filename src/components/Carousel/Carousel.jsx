import React, { useEffect, useState, Children, cloneElement } from "react"
import { useDispatch, useSelector } from "react-redux";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './Carousel.css'
import IconClose from "./images/icons.svg"
import actionCloseCarousel from "../../actions/carousel/actionCloseCarousel"

 const Carousel = ({children}) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)
  const dispatch = useDispatch();
  const isSetting = useSelector((state) => state.carouselReducer.carouselIsOpen);


  const handleLeftArrowClick = () => {
    setOffset((current) => {
      return Math.min(current + PAGE_WIDTH, 0)
    })
  }

  const handleRightArrowClick = () => {
    setOffset((current) => {
      const newOffset = current - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }

  const closeCarousel = () => {
    dispatch(actionCloseCarousel())
  }

  const PAGE_WIDTH = 1320

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '100%',
            maxWitdh: '100%'
          },
        })
      })
    )
  }, [])

  return (
    <div className="carousel__container">
      <button onClick={closeCarousel}>
      <img src={IconClose} alt="close" className="carousel__close-botton"/>
      </button>
    <div className="carousel__main">
    <div className="block-arrow-left"><FaChevronLeft className="carousel__arrow" onClick={handleLeftArrowClick}/></div>
      <div className="carousel__window">
      
        <div className="carousel__all-item"
              style={{
                transform: `translateX(${offset}px)`
              }}
        >
          {pages}
        </div>
      </div>
      <div className="block-arrow-right"><FaChevronRight className="carousel__arrow" onClick={handleRightArrowClick}/></div>
    </div>
    </div>
  )
};

export default Carousel;