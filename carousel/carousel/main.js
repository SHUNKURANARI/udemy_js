'use strict';
{
    // document.addEventListener('DOMContentLoaded',()=>{
    //     setInterval(()=>{
    //         let target = currentIndex + 1;
    //         if(target===images.length){
    //             target =0
    //         }
    // document.querySelectorAll('.carousel__thumbnails > li')[target].click();
    // console.log(currentIndex);
    //     },2000)
    // })
        window.addEventListener('load',()=>{
        // setInterval(()=>{}, 1000*60);
        // setTimeout(()=>{},1000*60);
        setInterval(()=>{
            let target = Math.floor(Math.random()*images.length)
            if(target===images.length){
                target =0
            }
            document.querySelectorAll('.carousel__thumbnails > li')[target].click();
            console.log(currentIndex);
                },2000)
    })
        console.log(Math.random())
        // for(let i = 0 ; i < 6; i++){
        //     console.log(Math.floor(Math.random()*5))

        // }
    const images=[
        'images/image000.jpg',
        'images/image002.jpg',
        'images/image003.jpg',
        'images/image001.jpg',
        'images/image004.jpg',
        'images/image005.jpg',
        'images/image006.jpg',
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById('carousel__main');
    mainImage.src = images[currentIndex];
    console.log(mainImage.src)

    //for of
    for(let [index,image] of images.entries()){
        console.log(index,image)
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if(index === currentIndex){
            li.classList.add('current')
        }

        li.addEventListener('click',() =>{
            mainImage.src =image;
            mainImage.classList.add('active');

            setTimeout(()=>{
                mainImage.classList.remove('active');
            },800)

            const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index
            thumbnails[currentIndex].classList.add('current');
        })

        li.appendChild(img);
        document.querySelector('.carousel__thumbnails').appendChild(li)

    } 
    const next = document.getElementById('carousel__next');
    next.addEventListener('click',()=>{
        let target = currentIndex + 1;
        if(target===images.length){
            target =0
        }
   document.querySelectorAll('.carousel__thumbnails > li')[target].click()

    })
    const prev = document.getElementById('carousel__prev');
    prev.addEventListener('click',()=>{
        let target = currentIndex -1;
        if(target < 0){
            target = images.length -1;
        }
   document.querySelectorAll('.carousel__thumbnails > li')[target].click()

    })


    

}