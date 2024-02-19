function getSuccessButtonhide(elementId){
   const element= document.getElementById(elementId);
   element.classList.add('hidden');
}

function getApplybuttonshow(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-400');
}


