const divSize = (element, height) => {
  document.getElementById(element).style.minHeight = `calc(100vh - ${height}px)`;
};

const headerHeight = document.querySelector('header').offsetHeight;
divSize('hero', headerHeight);
divSize('program', headerHeight * 2);
divSize('speakers', headerHeight * 2);

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
      img: 'https://picsum.photos/200',
    },
    {
      name: 'Awais Anwar',
      org: 'University of Lahore',
      desc: 'A quick brown fox jumped over the lazy dogs',
      img: 'https://picsum.photos/200',
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
    const spTemplate = `
    <div class="d-block col-md-6 col-12">
    <div class="card align-items-center mb-5 p-1 p-md-2 flex-row border-0 col-12">
        <img class="speaker-img align-self-start card-img-top m-1 m-lg-3" src="${speakers.data[i].img}" alt="Card image cap">
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
