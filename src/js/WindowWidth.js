class WindowWidth {
    ratingFieldChanges(windowWidth) {
        if(windowWidth.matches) {
            // document.body.style.backgroundColor = "yellow";
        } else {
            // document.body.style.backgroundColor = "pink";
        }
    }
    constructor(windowWidth) {
        windowWidth.addListener(this.ratingFieldChanges(windowWidth));
    }
}

export default WindowWidth;