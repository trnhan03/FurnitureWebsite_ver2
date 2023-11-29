//script for slider homepage
    const imgPosition = document.querySelectorAll(".slider-image img")
    
    const imgContainer = document.querySelector('.slider-image')
    let index = 0;
    let imgNumber = imgPosition.length
    let space = 100
    imgPosition.forEach((image) =>{
        //console.log(image.src)
        image.style.left = index*space + "%"
    })
    function imgSlide() {
        index++;
        //console.log(index)
        if(index >= imgNumber)
        {
            index = 0;
            imgPosition.forEach(function(image, index) {
            image.style.left = index*space + "%"})
    }
    imgContainer.style.left = "-" + index*space + "%"
    
}

    setInterval(imgSlide, 5000)