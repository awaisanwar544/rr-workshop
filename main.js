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
      name: 'Dr. Muhammad Khaleel',
      org: 'CEO ResearchRoof',
      desc: 'He received his Ph.D. from the University Sains Malaysia. He is attached to the Department of International Business. He has 12 years of Research experience in various fields. His work experience varies from the Social Sciences, Humanities, financial sector, international non-profit organization, manufacturing sector, shared services sector organization, and consultancy.',
      img: './assets/image202283.png',
    },
    {
      name: 'Dr. Irfan Ullah Khan',
      org: 'MD ResearchRoof',
      desc: 'I am Irfan Ullah born in Pushkalavati (Peshawar) the western capital of ancient Buddhist Gandhāra, Pakistan. Peshawar. I completed my Ph.D. in September 2020 from the Centre for Global Archaeological Research Universiti Sains Malaysia under the title (THE INDUS SEALS FROM HARAPPA: A STUDY ON THE ORIGIN OF RAW MATERIAL AND PRODUCTION TECHNOLOGY).',
      img: './assets/image202282.png',
    },
    {
      name: 'Dr. Mahmoud Ibrahim',
      org: 'Consultant ResearchRoof',
      desc: 'I am currently pursuing research in the field of extended UTAUT to examine the actual usage of AI services technology in Jordan as well as I have a good background in software models as SDLC, Agile DevOps, and quality assurance. My work is focused on investigating the significance of the emotional expectancy of accepting technology containing AI in daily life. Besides I am an agent for all Malaysian universities, UK, Australia China, Egypt, Turkey, Canada, and Ireland.',
      img: './assets/image202281.png',
    },
    {
      name: 'Dr. Sowmya Ramachandran',
      org: 'Editor ResearchRoof',
      desc: 'I am currently pursuing research in the field of pharmaceutical technology. My work is focused on producing Dry Powder Inhalations to treat MDR-TB. I have a demonstrated history of research in the higher education industry like the Indian Institute of Technology (Indian Institute of Technology-Kanpur, Madras, and Delhi) and Jamia Milia Islamia, Delhi with an experience of over six years. I also have part-time experience in content writing in print media back in India and Malaysia.',
      img: './assets/image20228.png',
    },
    {
      name: 'Dr. Muhammad Khaleel',
      org: 'CEO ResearchRoof',
      desc: 'He received his Ph.D. from the University Sains Malaysia. He is attached to the Department of International Business. He has 12 years of Research experience in various fields. His work experience varies from the Social Sciences, Humanities, financial sector, international non-profit organization, manufacturing sector, shared services sector organization, and consultancy.',
      img: './assets/image202283.png',
    },
    {
      name: 'Dr. Irfan Ullah Khan',
      org: 'MD ResearchRoof',
      desc: 'I am Irfan Ullah born in Pushkalavati (Peshawar) the western capital of ancient Buddhist Gandhāra, Pakistan. Peshawar. I completed my Ph.D. in September 2020 from the Centre for Global Archaeological Research Universiti Sains Malaysia under the title (THE INDUS SEALS FROM HARAPPA: A STUDY ON THE ORIGIN OF RAW MATERIAL AND PRODUCTION TECHNOLOGY).',
      img: './assets/image202282.png',
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
        <img class="card-img-top m-1 align-self-start m-lg-3 w-md-auto w-25 speaker-img img-fluid" src="${speakers.data[i].img}" alt="Card image cap">
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
