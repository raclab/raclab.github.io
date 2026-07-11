const targets = document.querySelectorAll('.target')

const options = {
   threshold:0.3
}

const callBack = (entries)=>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.add('active')
      }
      else{
         entry.target.classList.remove('active')
      }
   })
}



const observer = new IntersectionObserver(callBack, options);

targets.forEach((target)=>{
   observer.observe(target)
})
window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault(); // ctrl + mouse scroll engellenir
    }
}, { passive: false });

window.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault(); // ctrl + + veya ctrl + - engellenir
    }
});