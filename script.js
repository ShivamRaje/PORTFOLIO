const sideMenu=document.querySelector('#sideMenu');
const navBar =document.querySelector("nav");
const navLinks =document.querySelector("nav ul");



function openMenu()
{
    sideMenu.style.transform='translateX(-16rem)'
}

function closeMenu()
{
    sideMenu.style.transform='translateX(16rem)'
}
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLink = document.getElementById('read-more');
    const shortText = document.getElementById('short-text');
    const fullText = document.getElementById('full-text');
    
    readMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (fullText.classList.contains('hidden')) {
            fullText.classList.remove('hidden');
            readMoreLink.innerHTML = 'Read less <img src="./images/left-arrow.png" alt="" class="w-4">';
            shortText.style.display = 'none'; // Optionally hide the short text
        } else {
            fullText.classList.add('hidden');
            readMoreLink.innerHTML = 'Read more <img src="./images/rightwrrowdarj.png" alt="" class="w-4">';
            shortText.style.display = 'block'; // Optionally show the short text
        }
    });
});

// for readmore and less in intership section

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLink = document.getElementById('read-more1');
    const shortText = document.getElementById('short-text1');
    const fullText = document.getElementById('full-text1');
    
    readMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (fullText.classList.contains('hidden')) {
            fullText.classList.remove('hidden');
            readMoreLink.innerHTML = 'Read less <img src="./images/left-arrow.png" alt="" class="w-4">';
            shortText.style.display = 'none'; // Optionally hide the short text
        } else {
            fullText.classList.add('hidden');
            readMoreLink.innerHTML = 'Read more <img src="./images/rightwrrowdarj.png" alt="" class="w-4">';
            shortText.style.display = 'block'; // Optionally show the short text
        }
    });
});

// for scroll nav bar
window.addEventListener('scroll',()=>{
    if(scrollY > 50)
    {
        navBar.classList.add('bg-white', 'bg-opacity-50','backdrop-blur-lg', 'shadow-sm' , 'dark:bg-darkTheme' , 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50' ,'dark:border' , 'dark:border-white/50' , 'dark:bg-transparent');
    }
    else
    {
        navBar.classList.remove('bg-white', 'bg-opacity-50','backdrop-blur-lg', 'shadow-sm' , 'dark:bg-darkTheme' , 'dark:shadow-white/20');
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50' ,'dark:border' , 'dark:border-white/50' , 'dark:bg-transparent');
    }
})

//--------------light mode and darkmode ---------------
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }
    else{
        localStorage.theme = 'light';
    }
  }



  let showMore = document.querySelector("#showmore");
  let showLess = document.querySelector("#showLess");
  let fourDiv = document.querySelectorAll("#fourdiv, #fivediv");
  
  // Show More button functionality
  showMore.addEventListener("click", () => {
      // Remove the 'four' class to show the elements
      fourDiv.forEach(div => {
          div.classList.remove("four"); // Show content
      });
  
      // Hide the "Show More" button and show the "Show Less" button
      showMore.style.display = "none"; // Hide "Show More"
      showLess.style.display = "inline-flex"; // Show "Show Less"
  });
  
  // Show Less button functionality
  showLess.addEventListener("click", () => {
      // Add the 'four' class to hide the elements
      fourDiv.forEach(div => {
          div.classList.add("four"); // Hide content
      });
  
      // Hide the "Show Less" button and show the "Show More" button again
      showLess.style.display = "none"; // Hide "Show Less"
      showMore.style.display = "inline-flex"; // Show "Show More"
  });
  