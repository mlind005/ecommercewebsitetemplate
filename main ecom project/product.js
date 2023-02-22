var mainImg =  document.getElementById('mainimg')
    console.log(mainImg)
    var smallImg = document.getElementsByClassName('small-img')
    console.log(smallImg)

    smallImg[0].onclick = function(){
        mainImg.src = smallImg[0].src
    }
    smallImg[1].onclick = function(){
        mainImg.src = smallImg[1].src
    }
    smallImg[2].onclick = function(){
        mainImg.src = smallImg[2].src
    }
    smallImg[3].onclick = function(){
        mainImg.src = smallImg[3].src
    }
    