import React, { useEffect, useState } from 'react'
import './index.css'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }
  const slideStyles = {
     width: '100%',
     height: '100%',
     backgroundImage: `url(${slides[currentIndex].url})`,
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     transition: 'all 0.5s linear',
  }

  const leftArrowStyles = {
     position: 'absolute',
     top: '50%',
     transform: 'translate(0, -50%)',
     left: '32px',
     fontSize: '45px',
     color: '#fff',
     zIndex: '1',
     cursor: 'pointer',
     padding: '1rem 2rem',
     background: '#000',
     opacity: '0.3 ',
     borderRadius: '50%',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer',
    padding: '1rem 2rem',
    background: '#000',
    opacity: '0.3',
    borderRadius: '50%',
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '90%',
    width: '100%',
    margin: '0 auto',
  }

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
    width: '10px',
    height: '10px',
    border: '1px solid black',
    borderRadius: '50%',
    background: '#fff',
    opacity: '0.5',
    zIndex: '1',
  }

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
     const isLastSlide = currentIndex === slides.length - 1;
     const newIndex = isLastSlide ? 0 : currentIndex + 1;
     setCurrentIndex(newIndex);
  }

  const gotoSlides = (slideIndex) => {
      if (currentIndex) {
        setCurrentIndex(slideIndex)
      }
  }

  useEffect(() => {
    let autoSlide = setInterval(() => {
        const lastIndex = currentIndex === slides.length - 1
        if (lastIndex) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1)
        }
    }, 5000)

    return () => clearInterval(autoSlide)
  }, [currentIndex])


  return (  
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrev}><i className="fa-solid fa-angle-left"></i></div>
        <div style={rightArrowStyles} onClick={goToNext}><i className="fa-solid fa-angle-right"></i></div>
        <div style={slideStyles}></div>
        <div style={dotsContainerStyles}>
          {
            slides.map((slide, slideIndex) => (
              <div key={slideIndex} style={dotStyles} onClick={() => gotoSlides(slideIndex)}></div>
            ))
          }
        </div>
      </div> 
  )
}

export default ImageSlider