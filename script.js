const sideMenu=document.querySelector('#sideMenu');

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