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
        sizeZoomBox(this.zoomBox, image, this.zoomWindow, this.zoomedImage);
        this.activate = this.activate.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.listenForMouseEnter();
        this.imageBounds = toDocumentBounds(image.getBoundingClientRect());
        this.zoomBoxBounds = toDocumentBounds(this.zoomBox.getBoundingClientRect());
    }

    activate() {
        this.zoomBox.classList.add('active');
        this.zoomWindow.classList.add('active');
        this.listenForMouseMove();
    }
      
    handleMouseMove(event) {
        if (this.isMoveScheduled) {
            return;
        }

        window.requestAnimationFrame(() => {
            if (isWithinImage(this.imageBounds, event)) {
                this.updateUI(event.pageX, event.pageY);
            } 
            else {
                this.deactivate();
            }
            this.isMoveScheduled = false;
          });
        this.isMoveScheduled = true;
    }
      
    listenForMouseEnter() {
        let { image, zoomBox } = this;
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        image.addEventListener('mouseenter', this.activate);
        zoomBox.addEventListener('mouseenter', this.activate);
    }
      
    listenForMouseMove() {
        let { image, zoomBox } = this;
        image.removeEventListener('mouseenter', this.activate);
        zoomBox.removeEventListener('mouseenter', this.activate);
        document.body.addEventListener('mousemove', this.handleMouseMove);
    }

    updateUI(mouseX, mouseY) {
        let { imageBounds, zoomBox, zoomBoxBounds } = this;
        let { x: xOffset, y: yOffset } = getZoomBoxOffset(mouseX, mouseY, zoomBoxBounds, imageBounds);
        zoomBox.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        this.moveZoomedImage(xOffset / imageBounds.width, yOffset / imageBounds.height);
    }

    deactivate() {
        this.zoomBox.classList.remove('active');
        this.zoomWindow.classList.remove('active');
        this.listenForMouseEnter();
    }

    moveZoomedImage(xPercent, yPercent) {
        let { zoomedImage } = this;
        let xOffset = Math.round(zoomedImage.clientWidth * xPercent) * -1;
        let yOffset = Math.round(zoomedImage.clientHeight * yPercent) * -1;
        zoomedImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
}

function sizeZoomBox(zoomBox, image, zoomWindow, zoomedImage) {
    let widthPercentage = zoomWindow.clientWidth / zoomedImage.clientWidth;
    let heightPercentage = zoomWindow.clientHeight / zoomedImage.clientHeight;
    zoomBox.style.width = Math.round(image.clientWidth * widthPercentage) + 'px';
    zoomBox.style.height = Math.round(image.clientHeight * heightPercentage) + 'px';
}

function isWithinImage(imageBounds, event) {
    let { bottom, left, right, top } = imageBounds;
    let { pageX, pageY } = event;
    return pageX > left && pageX < right && pageY > top && pageY < bottom;
}

function containNum(num, lowerBound, upperBound) {
    if (num < lowerBound) {
      return lowerBound;
    }
    if (num > upperBound) {
      return upperBound;
    }
    return num;
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

function toDocumentBounds(bounds) {
    let { scrollX, scrollY } = window;
    let { bottom, height, left, right, top, width } = bounds;
    return {
      bottom: bottom + scrollY,
      height,
      left: left + scrollX,
      right: right + scrollX,
      top: top + scrollY,
      width
    };
}

function getZoomBoxOffset(mouseX, mouseY, zoomBoxBounds, imageBounds) {
    let x = mouseX - (zoomBoxBounds.width / 2);
    let y = mouseY - (zoomBoxBounds.height / 2);
    x = containNum(x, imageBounds.left, imageBounds.right - zoomBoxBounds.width);
    y = containNum(y, imageBounds.top, imageBounds.bottom - zoomBoxBounds.height);
    x -= zoomBoxBounds.left;
    y -= zoomBoxBounds.top;
    return {x: Math.round(x), y: Math.round(y)};
}

let image = document.querySelector('.image-zoomer-demo img');
let zoomer = new ImageZoomer(image);