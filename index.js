let linkContainer=document.querySelector('.links');
let openSidebar=document.querySelector('.open-sidebar');
let section =document.querySelectorAll('.section')
const closeSidebar=document.querySelector('.close-sidebar')
const viewProject=document.querySelector('.viewproject');
let dropdown=document.querySelector('.drop-down');

removeSidebar();
// removong sidebar
function removeSidebar(){
    linkContainer.style.right='-100%';
}
//opening sidebar
function showSidebar(){
    linkContainer.style.right='-2rem';
}
// skill dropdown
function skillDropDown(){
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    }
}



linkContainer.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.classList.contains('link')){
        let tab=e.target.dataset.tab

        section.forEach(Cont => Cont.style.display='none')
       removeSidebar();

      let current= document.querySelector(`.link${tab}`).style.display='block';
    }
})
document.querySelector('.project').addEventListener('click',skillDropDown)

viewProject.addEventListener('click', function(e){
    e.preventDefault();
    showSidebar();
    skillDropDown()
    
})

closeSidebar.addEventListener('click', removeSidebar);
openSidebar.addEventListener('click', showSidebar)