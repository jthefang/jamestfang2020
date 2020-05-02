import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators} from 'reactstrap';
import biopic1 from '../../images/biopics/biopic1.jpg';
import biopic2 from '../../images/biopics/biopic2.jpg';
import biopic3 from '../../images/biopics/biopic3.jpg';
import biopic4 from '../../images/biopics/biopic4.jpg';

const items = [
  { src: biopic1, altText: 'Slide 1', caption: 'Slide 1' },
  { src: biopic2, altText: 'Slide 2', caption: 'Slide 2' },
  { src: biopic3, altText: 'Slide 3', caption: 'Slide 3' },
  { src: biopic4, altText: 'Slide 4', caption: 'Slide 4' },
];

const PropicCarousel = (props) => {
  const showIndicators = false;
  const ride = "carousel"; //have the carousel auto cycle on load
  const cycleInterval = 8000; //ms

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} 
        onExited={() => setAnimating(false)} key={index}>
        <img src={item.src} className="img-fluid" alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} ride={ride} interval={cycleInterval}
      next={next} previous={previous}>
      { showIndicators && <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> }
      {slides}
    </Carousel>
  );
}

export default PropicCarousel;