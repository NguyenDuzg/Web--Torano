const imgPosition=document.querySelectorAll(".aspect-ratio-169 img");  //danh sach all img
const imgContainer=document.querySelector(".aspect-ratio-169");         //khung chua anh?
const dotItem=document.querySelectorAll(".dot");                        //cac nut cham
    let imgNumber=imgPosition.length;                                       
    let index=0;
    imgPosition.forEach(function(image, index){

        image.style.left=index*100+"%";     
        dotItem[index].addEventListener("click", function(){        
            slider(index);  
        })
    })
    function imgSlide(){
        index++;
        console.log(index);
        if(index >= imgNumber){ 
            index=0;
        }
        slider(index);
    }
    
    // console.log(imgPosition);
    function slider(index){     // Chuyển ảnh khi click vào dot
        imgContainer.style.left= "-" + index * 100 + "%";
        const dotActive = document.querySelector(".active");
        dotActive.classList.remove("active");
        dotItem[index].classList.add("active");

    }
    setInterval(imgSlide,5000); 