import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';

function App() {
  return (
    <Carousel slide={false} variant="dark">
      <Carousel.Item>
        <img src={img1} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7} alt="Logo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8} alt="Logo" />
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
