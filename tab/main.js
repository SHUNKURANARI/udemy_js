'use strict';
{
const tabLabels = document.querySelectorAll('.tab__label li a')
const tabContents = document.querySelectorAll('.tab__content')

console.log(tabLabels)

tabLabels.forEach(clickedLabel =>{
    clickedLabel.addEventListener('click',e =>{
        e.preventDefault();
        tabLabels.forEach(label =>{
            label.classList.remove('active');
        });
        clickedLabel.classList.add('active');
        tabContents.forEach(content =>{
            content.classList.remove('active');
        })
        //clickedLabel = 選択されたタブ　dataset = そのタブのid
    document.getElementById(clickedLabel.dataset.id).classList.add('active')
    })


})
}