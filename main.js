function divSize(element, scale) {
  const headerHeight = document.querySelector('header').offsetHeight;
  document.getElementById(element).style.minHeight = `calc(100vh - ${headerHeight * scale}px)`;
}

divSize('hero', 1);
divSize('program', 2);
divSize('speakers', 2);

const menuBtn = document.querySelector('#menuBtn');
let open = false;
menuBtn.addEventListener('click', () => {
  const menuIcon = document.querySelector('#menuIcon');
  if (open) {
    menuIcon.className = 'fas fa-bars';
    open = false;
  } else {
    menuIcon.className = 'fas fa-times';
    open = true;
  }
});

const speakers = {
  data: [
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: '/assets/speaker_01.png',
    },
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: 'https://researchroof.com/wp-content/uploads/2021/12/Untitled-design-83-1.png',
    },
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: '/assets/speaker_01.png',
    },
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: '/assets/speaker_01.png',
    },
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: '/assets/speaker_01.png',
    },
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: '/assets/speaker_01.png',
    },
  ],
};

const speakdersCards = document.querySelector('#speakers-cards');

function addSpeakers() {
  for (let i = 0; i < speakers.data.length; i += 1) {
    const count = () => {
      if (i > 1) {
        return 'd-none d-md-block hideOnSmall';
      } return 'd-block';
    };
    const btn = () => {
      if (i === 2) {
        return `
        <button id="seeMoreBtn" type="button" class="btn btn-outline-light text-dark d-md-none d-block col-12">See More <i class="fas fa-chevron-down text-primary"></i></button>
        `;
      } return '';
    };
    const spTemplate = `
    ${btn()}
    <div class="${count()} col-md-6 col-12">
    <div class="card align-items-center text-align-center mb-5 p-1 p-md-2 flex-row border-0 col-12">
        <img class="card-img-top m-1 m-lg-3 w-md-auto w-25 speaker-img img-fluid" src="${speakers.data[i].img}" alt="Card image cap">
        <div class="card-body flex-column pb-1">
            <h5 class="card-title text-dark">${speakers.data[i].name}</h5>
            <p class="card-subtitle text-primary card-text-font fst-italic fw-bold">${speakers.data[i].org}</p>
            <div class="divider text-gray-500 col-1"><hr></div>
            <p class="card-text text-dark card-text-font col-12">${speakers.data[i].desc}</p>
        </div>
    </div>
  </div>
    `;
    speakdersCards.innerHTML += spTemplate;
  }
}

window.onload = addSpeakers();

const seeMoreBtn = document.querySelector('#seeMoreBtn');
seeMoreBtn.addEventListener('click', () => {
  const tar = document.querySelectorAll('.hideOnSmall');
  tar.forEach((ele) => {
    ele.classList.remove('d-none');
    seeMoreBtn.classList.add('d-none');
  });
});
