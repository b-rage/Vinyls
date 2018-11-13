import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class UsersGallery extends Component {  
  responsive = {
    0: { items: 4},
    600: { items: 8 },
    1024: { items: 12 }
  }
  
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }
  
  galleryItems() {
    return (
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
        <div key={`key-${i}`} className='yours-custom-class'><h2>{item}</h2></div>
      ))
    )
  };
  
  render() {
    const items = this.galleryItems();

    return (
      <AliceCarousel
        items={items}
        duration={400}
        startIndex = {1}
        buttonsDisabled={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        dotsDisabled={true}
        responsive={this.responsive}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    )
  }
}

export default UsersGallery