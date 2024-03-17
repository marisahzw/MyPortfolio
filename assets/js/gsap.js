//textrevealfx
//anime js
const rfx1 = document.querySelector('#rfx1');

// Function to hide the text initially
function hideText() {
    const words = rfx1.textContent.split(' ');
    let hiddenWords = '';
    words.forEach((word) => {
        hiddenWords += '<span style="opacity: 0;">' + word + ' </span>';
    });
    rfx1.innerHTML = hiddenWords;
}

// Hide the text initially
hideText();

// Define the reveal settings for rfx1
const revealSettings1 = {
    bgColors: generateBackgroundColors(rfx1.textContent),
    duration: 600,
    delay: 100,
    direction: 'lr',
    onHalfway: function (contentEl, revealerEl) {
        // Reveal text word by word as animation progresses
        const words = contentEl.children;
        Array.from(words).forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = 1;
            }, index * 90); // Adjust the delay time as needed
        });
    }
};


// Function to generate background colors for each word
function generateBackgroundColors(text) {
    const words = text.split(' ');
    const colors = [];
    words.forEach(() => {
        colors.push('#08f3f3'); // Push the initial color for each word
    });
    return colors;
}


// Create RevealFx instances for rfx1
const revealerEffect1 = new RevealFx(rfx1, {
    layers: 1,
    isContentHidden: false,
    revealSettings: revealSettings1
});

let isRevealed1 = false;

// Function to handle scroll event
function handleScroll() {
    if (!isRevealed1 && isInViewport(rfx1)) {
        // Trigger reveal effect for rfx1
        revealerEffect1.reveal();
        isRevealed1 = true;
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Trigger initial check in case elements are already in viewport
handleScroll();


//frontend text
const test = new Letterize({
    targets: ".front" 
});

const animation = anime.timeline({
    targets: test.listAll,
    delay: anime.stagger(50),
    loop: true
});

animation
    .add({
        translateY: -40
    });


