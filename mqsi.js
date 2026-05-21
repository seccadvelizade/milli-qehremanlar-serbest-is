const heroes = [
    {
        ad: "Mübariz İbrahimov",
        rutbe: "Baş leytenant",
        il: "1988 – 2010",
        sekil: "im.png",
        melumat: "Mübariz İbrahimov 2010-cu il aprelin 18-də Ağdərə rayonunun Çaylı kəndi istiqamətindəki döyüşdə düşmən mövqelərinə hücum edərkən qəhrəmanlıqla həlak olub. Azərbaycan Respublikasının Milli Qəhrəmanı adına layiq görülüb."
    },

    {
        ad: "Albert Aqarunov",
        rutbe: "Kiçik leytenant",
        il: "1969 – 1992",
        sekil: "aa.png",
        melumat: "Albert Aqarunov 1992-ci ildə Qarabağ müharibəsində həlak olub. Cəsurluğu və qəhrəmanlığı ilə tanınan igid vətənini canından çox sevərdi. Azərbaycan Respublikasının Milli Qəhrəmanı adına layiq görülüb."
    },

    {
        ad: "Çingiz Mustafayev",
        rutbe: "Xüsusi müxbir, operator",
        il: "1960 – 1992",
        sekil: "mc.png",
        melumat: "Çingiz Mustafayev AzərTV-nin operatoru olaraq Dağlıq Qarabağ münaqişəsini dünyaya tanıdan kadrları lentə almışdır. 1992-ci ildə Ağdam rayonu yaxınlığında atışma zamanı həlak olmuşdur."
    },
    {
        ad: "Polad Həşimov",
        rutbe: "General mayor",
        il: "1975 – 2020",
        sekil: "hp.png",
        melumat: "Polad Həşimov iyulun 14-də səhər saatlarında Tovuz rayonu istiqamətində tabeliyində olan əsgərlərlə bir yerdə döyüş zamanı ön xətdə şəhid olmuşdur."
    },
    {
        ad: "Cəbrayıl Dövlətzadə",
        rutbe: "Əsgər",
        il: "2001 – 2020",
        sekil: "dc.png",
        melumat: " Cəbrayıl Dövlətzadə 2020-ci il sentyabrın 27-də Azərbaycan Silahlı Qüvvələri tərəfindən Ermənistan işğalı altında olan ərazilərin azad edilməsi və Azərbaycanın ərazi bütövlüyünün bərpa olunması üçün başlanan İkinci Qarabağ müharibəsi zamanı Murovdağ istiqamətində gedən döyüşlərdə savaşıb. Cəbrayıl Dövlətzadə sentyabrın 28-də Murovdağ döyüşləri zamanı Kəlbəcər rayonu ərazisində şəhid olub."
    },
    {
        ad: "Emin Bağırov",
        rutbe: "Kiçik gizir",
        il: "1996 – 2016",
        sekil: "be.png",
        melumat: "Xüsusi Təyinatlı Qüvvələrin təlimlərindən uğurla keçən Emin Bağırov xidmətini burada davam etdirib. XTQ-in üzvü Emin Bağırov 2016-cı ilin aprel ayının 4-də baş verən döyüşlər zamanı şəhid olur."
    },
    
];
function kartYarat(hero) {
    const div = document.createElement('div');
    div.className = 'kart';

    const sekilHtml = hero.sekil
        ? `<img class="kart-sekil" src="${hero.sekil}" alt="${hero.ad}">`
        : `<div class="kart-sekil-yox">★</div>`;

    div.innerHTML = `
        ${sekilHtml}
        <div class="kart-govde">
          ${hero.rutbe ? `<div class="kart-rutbe">${hero.rutbe}</div>` : ''}
          <div class="kart-ad">${hero.ad}</div>
          ${hero.il ? `<div class="kart-il">${hero.il}</div>` : ''}
          <div class="kart-melumat">${hero.melumat}</div>
        </div>
      `;
    return div;
}

const set = document.getElementById('qehremanlar-seti');
heroes.forEach(hero => set.appendChild(kartYarat(hero)));