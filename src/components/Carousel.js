import React from 'react'

function Carousel() {
  return (
    <>
       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://picsum.photos/200?random=1" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://picsum.photos/200?random=2" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://picsum.photos/200?random=3" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="/carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a className="carousel-control-next" href="/carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>
    </>
    
  )
}

export default Carousel