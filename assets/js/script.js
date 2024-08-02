/*
1.Javascript will add a "visible" class to the content-box 
element.
2. When user clickt eh button, add the class
3. This class will have css that sets display:block;
*/


document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('content-box').classList.add("visible");
});
