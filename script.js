const joinBtnImage = document.getElementById('joinBtnImage');

joinBtnImage.addEventListener('mouseover', function() {
    joinBtnImage.src = '/asset/JOINUS_HOVER.png';
});

joinBtnImage.addEventListener('mouseout', function() {
    joinBtnImage.src = '/asset/JOINUS.png';
});

// Toggle the mobile menu and change the hamburger icon to X
function toggleMenu() {
    const menu = document.getElementById('navbarMobileMenu');
    const hamburger = document.getElementById('hamburger');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    
    // Toggle the "open" class to change the hamburger to X
    hamburger.classList.toggle('open');
}

try {
    const serviceCardRed = document.querySelector('.red');
    if (serviceCardRed) {
        serviceCardRed.style.cursor = 'pointer';
        serviceCardRed.addEventListener('click', function() {
            window.location.href = 'service1.html';
        });
    }

    const serviceCardBlue = document.querySelector('.blue');
    if (serviceCardBlue) {
        serviceCardBlue.style.cursor = 'pointer';
        serviceCardBlue.addEventListener('click', function() {
            window.location.href = 'service2.html';
        });
    }

    const serviceCardGreen = document.querySelector('.green');
    if (serviceCardGreen) {
        serviceCardGreen.style.cursor = 'pointer';
        serviceCardGreen.addEventListener('click', function() {
            window.location.href = 'service3.html';
        });
    }

    const serviceCardOrange = document.querySelector('.orange');
    if (serviceCardOrange) {
        serviceCardOrange.style.cursor = 'pointer';
        serviceCardOrange.addEventListener('click', function() {
            window.location.href = 'service4.html';
        });
    }
} catch (err) {
    console.error('Error setting up service card click handlers:', err);
}


// Simple carousel functionality
// List of image sources for the carousel
// Array to store the image sources
const imageSources = [
    '/asset/whyUs/1.mp4',
    '/asset/whyUs/2.mp4',
    '/asset/whyUs/3.mp4',
    '/asset/whyUs/4.mp4',
    '/asset/whyUs/5.mp4',
    '/asset/whyUs/6.mp4',
    '/asset/whyUs/7.mp4',
];

let startIndex = 0; // Starting index
const itemsPerView = 3;

const carouselContainer = document.querySelector('.carousel');

// Function to render images in the carousel with sliding transition
function renderCarouselImages(imageSources, carouselContainer, startIndex = 0) {
    try {
        carouselContainer.style.transition = 'transform 0.6s ease-in-out'; // Apply sliding transition
        carouselContainer.style.opacity = 0;
        setTimeout(() => {
        carouselContainer.style.opacity = 1;
        }, 100);

        // Clear previous items
        carouselContainer.innerHTML = '';

        // Create and append new items
        for (let i = 0; i < itemsPerView; i++) {
            const actualIndex = (startIndex + i) % imageSources.length;

            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');

            const video = document.createElement('video');
            video.src = imageSources[actualIndex];
            video.controls = true;
            video.muted = true;
            video.loop = true;
            video.autoplay = false;
            video.playsInline = true;
            video.style.maxWidth = '100%';

            carouselItem.appendChild(video);
            carouselContainer.appendChild(carouselItem);
        }
    } catch (err) {
        console.error('Error rendering carousel images:', err);
    }
}

// Initialize the carousel
try {
    if (carouselContainer) {
        renderCarouselImages(imageSources, carouselContainer, startIndex);
    }
} catch (err) {
    console.error('Error initializing carousel:', err);
}

const nextWhy = document.getElementById('nextWhy');
const prevWhy = document.getElementById('prevWhy');

// Event listener for the "next" button
try {
    if (nextWhy && prevWhy && carouselContainer) {
        nextWhy.addEventListener('click', function() {
            startIndex = (startIndex + 1) % imageSources.length;
            renderCarouselImages(imageSources, carouselContainer, startIndex);
        });

        prevWhy.addEventListener('click', function() {
            startIndex = (startIndex - 1 + imageSources.length) % imageSources.length;
            renderCarouselImages(imageSources, carouselContainer, startIndex);
        });
    }
} catch (err) {
    
}




const successVideos = [
    '/asset/successStories/videos/1. Fun language class life.mov',
    '/asset/successStories/videos/3. Client product search & purchase journey.mov',
    '/asset/successStories/videos/2. Client job application process.mov',
    '/asset/successStories/videos/4. Client travel experience.mov',
    '/asset/successStories/videos/5. One day beijing tour.mov',
    '/asset/successStories/videos/6. Student university life.mov',
    '/asset/successStories/videos/7. Preschoolers class.mov',
    '/asset/successStories/videos/8. Kids class.mov',
    '/asset/successStories/videos/9. Adult class.mov',
];

const videoTitle = [
    '/asset/successStories/1. Fun language class life.png',
    '/asset/successStories/2. Client job.png',
    '/asset/successStories/3. Client product research.png',
    '/asset/successStories/4. Client travel.png',
    '/asset/successStories/5. One day beijing tour.png',
    '/asset/successStories/6. Student university.png',
    '/asset/successStories/7. Preschooler Class.png',
    '/asset/successStories/8. Kids class.png',
    '/asset/successStories/9. Adult class.png',
]

let currentVideoIndex = 0;

const successCarousel = document.querySelector('.success-carousel');
const successPrevBtn = document.querySelector('.success-prev');
const successNextBtn = document.querySelector('.success-next');

// Function to render the video in the carousel
function renderSuccessVideo(index) {
    try {
        successCarousel.innerHTML = '';

        // Set the success title image
        const successTitle = document.querySelector('.success-title-img');
        if (successTitle) {
            successTitle.src = videoTitle[index];
            successTitle.alt = `Success Story ${index + 1}`;
        }

        const successItem = document.createElement('div');
        successItem.classList.add('success-item');

        const video = document.createElement('video');
        video.src = successVideos[index];
        video.controls = true;
        video.poster = `/asset/successStories/thumbnail/image 11-${index}.png`;
        video.loading = 'lazy';

        // Add play/pause button overlay for mobile
        successItem.appendChild(video);

        // Responsive sizing for mobile and desktop
        function setVideoSize() {
            if (window.innerWidth <= 600) {
                video.style.width = 'auto';
                video.style.height = '16vh';
            } else {
                video.style.width = 'auto';
                video.style.height = '60vh';
            }
        }
        setVideoSize();
        window.addEventListener('resize', setVideoSize);

        video.onplay = setVideoSize;

        successCarousel.appendChild(successItem);
    } catch (err) {
        console.error('Error rendering success video:', err);
    }
}

// Initialize with the first video
try{
    if (successCarousel) {
        renderSuccessVideo(currentVideoIndex);
    }
}catch(e){
    console.log(e);
}

// Next button event
if(successNextBtn){
    successNextBtn.addEventListener('click', function() {
        currentVideoIndex = (currentVideoIndex + 1) % successVideos.length;
        renderSuccessVideo(currentVideoIndex);
    });
}



// Previous button event
if(successPrevBtn){
    successPrevBtn.addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex - 1 + successVideos.length) % successVideos.length;
    renderSuccessVideo(currentVideoIndex);
});
}
// Desktop services dropdown toggle
document.getElementById('servicesDropdownBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.getElementById('servicesDropdownContent');
    // Toggle dropdown visibility
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    
    // Set the dropdown styles only when it is displayed
    if (dropdown.style.display === 'block') {
        dropdown.style.position = 'absolute';
        dropdown.style.width = '25vw';
        dropdown.style.flexDirection = 'row';
        dropdown.style.marginLeft = '-10vw';
        dropdown.style.marginTop = '2vh';
    }
});

// Close the dropdown if clicking outside
document.addEventListener('click', function(e) {
    const btn = document.getElementById('servicesDropdownBtn');
    const dropdown = document.getElementById('servicesDropdownContent');
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});



// Mobile services dropdown toggle
function toggleMobileServicesDropdown(event) {
    event.preventDefault();
    var content = document.getElementById('mobileServicesDropdownContent');
    content.style.display = content.style.display === 'none' ? 'flex' : 'none';
}

document.getElementById('mobileServicesDropdownBtn').onclick = function(e) {
    e.preventDefault();
    var content = document.getElementById('mobileServicesDropdownContent');
    content.style.display = content.style.display === 'none' ? 'flex' : 'none';
};

// Style adjustments for dropdown items and images
document.addEventListener('DOMContentLoaded', function() {
    // Style dropdown items
    const items = document.querySelectorAll('.dropdown-service-item');
    items.forEach((item, idx) => {
        if (idx < items.length - 1) {
            item.style.borderRight = '1px solid #e0e0e0';
        } else {
            item.style.borderRight = 'none';
        }
    });
});



document.getElementById('serviceLang').addEventListener('click', function() {
    window.location.href = 'service1.html';
});
document.getElementById('serviceStudy').addEventListener('click', function() {
    window.location.href = 'service2.html';
});
document.getElementById('serviceTour').addEventListener('click', function() {
    window.location.href = 'service3.html';
});
document.getElementById('serviceCareer').addEventListener('click', function() {
    window.location.href = 'service4.html';
});

let currFaQIndex = 0;


const parentFaQ = document.querySelector(".FaQ");
const faqIcons = document.querySelectorAll('.FaQOption .faq-icon');
const faqIconSrcs = [
    '/asset/faqOption/OPTIONS.png',
    '/asset/faqOption/OPTIONS-1.png',
    '/asset/faqOption/OPTIONS-2.png',
    '/asset/faqOption/OPTIONS-3.png'
];
const faqIconInactiveSrcs = [
    '/asset/faqOption/Inactive.png',
    '/asset/faqOption/Inactive-1.png',
    '/asset/faqOption/Inactive-2.png',
    '/asset/faqOption/Inactive-3.png'
];

const backgroundSrcs = [
    '/asset/faq/faq 1.png',
    '/asset/faq/faq 1-1.png',
    '/asset/faq/faq 1-2.png',
    '/asset/faq/faq 1-3.png',
];

const backgroundSrcsMobile = [
  '/asset/mobile/contact-us/faq-1.png',
  '/asset/mobile/contact-us/faq-2.png',
  '/asset/mobile/contact-us/faq-3.png',
  '/asset/mobile/contact-us/faq-4.png',
];

const bubbleSrcs = [
    '/asset/faq/BUBBLE1.png',
    '/asset/faq/BUBBLE2.png',
    '/asset/faq/BUBBLE3.png',
    '/asset/faq/BUBBLE4.png',
];
const faqBubbleImage = document.querySelector('.FaQBubble .faq-bubble-image');

let selectedBackgroundSrcs = backgroundSrcs;

if (window.innerWidth <= 430) {
    selectedBackgroundSrcs = backgroundSrcsMobile;
}

// Set default: index 0 active, others inactive
faqIcons.forEach((icon, idx) => {
    icon.src = (idx === 0) ? faqIconSrcs[0] : faqIconInactiveSrcs[idx];
});

// Set initial background and bubble image
parentFaQ.style.backgroundImage = `url('${selectedBackgroundSrcs[0]}')`;
if (faqBubbleImage) {
    faqBubbleImage.src = bubbleSrcs[0];
}

faqIcons.forEach((icon, idx) => {
    icon.addEventListener('click', function() {
        faqIcons.forEach((otherIcon, otherIdx) => {
            otherIcon.src = (otherIdx === idx) ? faqIconSrcs[otherIdx] : faqIconInactiveSrcs[otherIdx];
        });
        // Change background image based on selected icon
        parentFaQ.style.backgroundImage = `url('${selectedBackgroundSrcs[idx]}')`;
        // Change bubble image based on selected icon
        if (faqBubbleImage) {
            faqBubbleImage.src = bubbleSrcs[idx];
        }
    });
});



let currentIndex = 0;
const items = document.querySelectorAll('.carouselFaQ-images .carousel-item');
const totalItems = items.length;

function moveSlide(step) {
    if (step === 1) {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    } else if (step === -1) {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -(currentIndex * 33.33); // Move the carousel by one item's width
    document.querySelector('.carouselFaQ-images').style.transform = `translateX(${offset}%)`;
}



async function trackPageView() {
    const userSession = sessionStorage.getItem("visitedCiciMandarin");
    if (userSession) {
        console.log("✅ Session found:", userSession);
        console.log("Continuing process!");
        return;
    }

    try {
        console.log("❌ No session found. Calling API...");

        const res = await fetch(`https://captivating-victory-production.up.railway.app/api/page-views`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        console.log("📊 API Response:", data);
        sessionStorage.setItem("visitedCiciMandarin", "true");
    } catch (err) {
        console.error("⚠️ Error calling API:", err);
    }
}

trackPageView();

let startTime = Date.now();
let totalTime = 0;
let lastActive = startTime;

// Track tab visibility
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        totalTime += Date.now() - lastActive;
    } else {
        lastActive = Date.now();
    }
});

window.addEventListener("beforeunload", async () => {
    const userSession = sessionStorage.getItem("visitedCiciMandarin");

    if (!userSession) {
        console.log("⚠️ No session found. Redirecting...");
        window.location.href = "index.html"; 
        return;
    }

    totalTime += Date.now() - lastActive;
    let duration = Math.round(totalTime / 1000);

    try {
        await fetch(`https://captivating-victory-production.up.railway.app/api/session-duration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ duration })
        });
        console.log("⏳ Duration sent:", duration, "seconds");
    } catch (err) {
        console.error("⚠️ Failed to send session duration", err);
    }
});

