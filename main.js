const tombolNav = document.querySelector('.nav-toggler');
const navLink = document.querySelector('.nav-links');
const link = document.querySelectorAll('.link a');
const link2 = document.querySelectorAll('.link a');
const tombolHireme = document.querySelector('.hire-me');
const tombolClose = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');


// Untuk Memunculkan Nabar ketika di klik

tombolNav.addEventListener("click", open);

function open() {
    navLink.classList.toggle('active');
};


/* Untuk Membalikan Navbar pada posisi semula 
   ketika link di klik
*/

for (const links of link) {
    links.addEventListener('click', () => {
         navLink.classList.remove('active')
    });
};

// Untuk Smooth Scrool


for(const links2 of link2) {
   links2.addEventListener('click', smooth);
};

function smooth(a) {
    a.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll ({
        top: offsetTop,
        behavior: "smooth"
    });
};


// Untuk Menampilkan Modal 


tombolHireme.addEventListener('click', getModal);


function getModal() {
    modal.classList.toggle('open-modal');
};

// Untuk Menge-close Modal 

tombolClose.addEventListener('click', removeModal);

function removeModal() {
   modal.classList.toggle('open-modal');
};
