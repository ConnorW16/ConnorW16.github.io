class ImageZoomer {
    constructor(image) {
      let parentEl = image.parentNode;
      this.image = image;
      this.zoomedImage = image.cloneNode();
      this.zoomWindow = createZoomWindow(this.zoomedImage);
      this.zoomBox = createZoomBox();
      this.zoomContainer = createZoomContainer(image, this.zoomBox);
      parentEl.appendChild(this.zoomContainer);
      parentEl.appendChild(this.zoomWindow);
    }
  }
  function createZoomBox() {
    let zoomBox = document.createElement('div');
    zoomBox.classList.add('zoom-box');
    return zoomBox;
  }
  function createZoomContainer(image, zoomBox) {
    let zoomContainer = document.createElement('div');
    zoomContainer.classList.add('zoom-container');
    zoomContainer.appendChild(image);
    zoomContainer.appendChild(zoomBox);
    return zoomContainer;
  }
  function createZoomWindow(zoomedImage) {
    let zoomWindow = document.createElement('div');
    zoomWindow.classList.add('zoom-window');
    zoomedImage.setAttribute('aria-hidden', 'true');
    zoomWindow.appendChild(zoomedImage);
    return zoomWindow;
  }
  let image = document.querySelector('.image-zoomer-demo img');
  let zoomer = new ImageZoomer(image);