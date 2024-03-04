import { useState } from 'react'
import MyCarousel from './components/MyCarousel'
import { FreezeCarausal } from './components/FreezeCarausal';

function App() {
  const images = [{ src: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" },
  { src: "https://images.unsplash.com/photo-1707305313174-6bd1374ce76a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" },
  { src: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
  { src: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
  { src: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" }]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [freeze, setFreeze] = useState(false);
  const freezeIndex = () => {
    console.log(currentIndex);
    setFreeze(!freeze)
    // old freeze state
    if (freeze) {
      setCurrentIndex(0);
    }
  }

  const indexHandler = (index) => {
      setCurrentIndex(index);
  }
  return (
    <>
      {
        freeze 
        ? <FreezeCarausal images={images.slice(currentIndex)} indexHandler={indexHandler}/> 
        : <MyCarousel images={images} indexHandler={indexHandler} slidesToShow={2}/>
      }
      <div>
        <input type="checkbox" name="" id="" onClick={freezeIndex} frozen={false} />Freeze item
      </div>
    </>
  )
}

export default App
