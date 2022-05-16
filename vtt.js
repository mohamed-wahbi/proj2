var radio = document.getElementById("radio");
var carouselExampleIndicators = document.getElementById("carouselExampleIndicators");
var content1 = document.getElementById("content1");
var aside =document.getElementById("aside");


if(screen.width<=991){
    radio.style.display="none";
    carouselExampleIndicators.style.display="flex";
    content1.style.display="none";


}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");

output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}
slider.addEventListener("change",()=>{
    if(parseInt(output.innerHTML)>0 && parseInt(output.innerHTML)<=25){
        s1.style.display="flex"
    }
    else{
        s1.style.display="none"

    }})
    slider.addEventListener("change",()=>{
        if(parseInt(output.innerHTML)>25 && parseInt(output.innerHTML)<=50){
            s2.style.display="flex"
        }
        else{
            s2.style.display="none"
    
        }})
        slider.addEventListener("change",()=>{
            if(parseInt(output.innerHTML)>50 && parseInt(output.innerHTML)<=75){
                s3.style.display="flex"
            }
            else{
                s3.style.display="none"
        
            }})
            slider.addEventListener("change",()=>{
                if(parseInt(output.innerHTML)>75 && parseInt(output.innerHTML)<=100){
                    s4.style.display="flex"
                }
                else{
                    s4.style.display="none"
            
                }})

        








