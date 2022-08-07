import ImageSlider from "./ImageSlider";
import SliderImage from './assets/slider-img-1.jpg'
import SliderImage2 from './assets/slider-img-2.jpg'
import SliderImage3 from './assets/slider-img-3.jpg'
import SliderImage4 from './assets/slider-img-4.jpg'
import SliderImage5 from './assets/slider-img-5.jpg'
import SliderImage6 from './assets/slider-img-6.jpg'

function App() {
  const slides = [
    {
      url: SliderImage, 
      title: 'camera',
    },

    {
      url: SliderImage2,
      tittle: 'lake',
    },

    {
      url : SliderImage3,
        title: 'coffee',
    },

    {url : SliderImage4, title: 'city'},
    {url : SliderImage5, title: 'forest'},
    {url : SliderImage6, title: 'bear'}
  ]

  const containerStyles = {
    width: '100vw',
    height: '50vw',
  };
    
  return (
    <div style={containerStyles}>
       <ImageSlider slides={slides} />
    </div>
  );
}

export default App;
