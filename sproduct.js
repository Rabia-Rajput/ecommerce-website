var mainimg = document.getElementById('mainimg');
        var smallImg = document.getElementsByClassName('small-img');

        smallImg[0].onclick = function(){
            mainimg.src = smallImg[0].src;
        }
        smallImg[1].onclick = function(){
            mainimg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function(){
            mainimg.src = smallImg[2].src;
        }
        smallImg[3].onclick = function(){
            mainimg.src = smallImg[3].src;
        }
