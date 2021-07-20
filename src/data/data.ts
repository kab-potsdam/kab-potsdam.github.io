import hospital from "./hospital.jpg";
import pediatrician from "./pediatrician.jpg";
import telephone from "./telephone.jpg";

export const categories = [
  {
    id: 1,
    title: "Krankenhäuser",
    path: "/hospitals",
    description: "",
    src: hospital,
  },
  {
    id: 2,
    title: "Kinderärzte",
    path: "/pediatricians",
    description: "",
    src: pediatrician,
  },
  {
    id: 3,
    title: "Kontakte",
    path: "/contacts",
    description: "",
    src: telephone,
  },
  {
    id: 4,
    title: "Bereitschaft",
    path: "/bereitschaftsdienst",
    description: "",
    src: pediatrician,
  }
];

export const hospitals = {
    title: "Krankenhäuser",
    list: [
      {
        id: 1,
        name: "Ernst von Bergmann Klinikum",
        address: {
          PLZ: "14467 Potsdam",
          location: "Schopenhauerstraße",
        },
        tel: "+49 331 964603",
        ref: "http://www.kinderarzt-potsdam.com/",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.3601440880951!2d13.047909992357189!3d52.39789277746202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5ce6abb71e1%3A0xb701337d148bf734!2sDr.%20med.%20Martina%20Petzold%2C%20Praxis%20f%C3%BCr%20Kinder-%20und%20Jugendmedizin!5e0!3m2!1sde!2sde!4v1625431905340!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
      },
      {
        id: 2,
        name: "Alexianer",
        address: {
          PLZ: "14467 Potsdam",
          location: "Schopenhauerstraße",
        },
        tel: "+49 331 964603",
        ref: "http://www.kinderarzt-potsdam.com/",
        map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.3601440880951!2d13.047909992357189!3d52.39789277746202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5ce6abb71e1%3A0xb701337d148bf734!2sDr.%20med.%20Martina%20Petzold%2C%20Praxis%20f%C3%BCr%20Kinder-%20und%20Jugendmedizin!5e0!3m2!1sde!2sde!4v1625431905340!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
      },
    ],
};

export const pediatricians = {
  title: "Kinderärzte",
  list: [{
    id: 1,
    name: "Dr. med. Martina Petzold",
    address: {
      PLZ: "14467 Potsdam",
      location: "Schopenhauerstraße 35",
    },
    tel: "+49 331 964603",
    ref: "http://www.kinderarzt-potsdam.com/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.3601440880951!2d13.047909992357189!3d52.39789277746202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5ce6abb71e1%3A0xb701337d148bf734!2sDr.%20med.%20Martina%20Petzold%2C%20Praxis%20f%C3%BCr%20Kinder-%20und%20Jugendmedizin!5e0!3m2!1sde!2sde!4v1625431905340!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 2,
    name: "Dr. med. Simone Dröscher, Dr. med. Jörg Ketteler & Constanze Fuchs",
    address: {
      PLZ: "14467 Potsdam",
      location: "Kurfürstenstraße 19",
    },
    tel: "+49 331 2800804",
    ref: "",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.1397021806633!2d13.060638151817779!3d52.40414425246128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5a408500d07%3A0x602b12211e5f4c29!2sBAG%20Dr%C3%B6scher%20und%20Ketteler%2C%20GbR!5e0!3m2!1sde!2sde!4v1625432392026!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 3,
    name: "Dr. med. S. Holz, Dr. med. F. Hanzlick & Dr. med. B. Dietrich",
    address: {
      PLZ: "14467 Potsdam",
      location: "Charlottenstraße 72",
    },
    tel: "+49 331 24133311",
    ref: "http://poliklinikevb.de/index.php?id=427#tab1",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.3584743884953!2d13.062999351817771!3d52.40017905275478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5dc5d769fd3%3A0x955acfc3824907fd!2sFrau%20Dr.%20med.%20Sabine%20Holz!5e0!3m2!1sde!2sde!4v1625432562201!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 4,
    name: "Dr. med. Nicole Josiger & Dr. med. Steffanie Harder",
    address: {
      PLZ: "14469 Potsdam",
      location: "Graf-von-Schwerin-Str. 3",
    },
    tel: "+49 331 58114333",
    ref: "http://kinderaerzte-am-volkspark.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3440.7701666378603!2d13.052486206884307!3d52.42494414762842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc22769220ad09768!2sKinder%C3%A4rzte%20am%20Volkspark%2C%20Dr.%20Josiger%2F%20Dr.%20Harder!5e0!3m2!1sde!2sde!4v1625572673531!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 5,
    name: "Dipl.-Med. Valentina Manukow",
    address: {
      PLZ: "14469 Potsdam",
      location: "Friedrich-Ebert-Straße 38",
    },
    tel: "+49 331 292301",
    ref: "http://www.kinderarztpraxis-manukow-potsdam.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1721.1463975066367!2d13.05710280730779!3d52.40543331425997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5d9da6e934b%3A0x21dbb6b4e868e24f!2sKinderarztpraxis%20Valentina%20Manukow!5e0!3m2!1sde!2sde!4v1625572807858!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 6,
    name: "Dipl.-Med. Andreas Knoblauch, Andrea Rohbeck & Steven Rohbeck",
    address: {
      PLZ: "14471 Potsdam",
      location: "Luisenpl. 1",
    },
    tel: "+49 331 2016553",
    ref: "http://www.potsdamer-kinderaerzte.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.362110189032!2d13.045114316332825!3d52.40011315285869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5d9ec71e5e1%3A0x67f83ac65ec389c3!2sKinderarztpraxis%20Dipl.-Med.%20Andreas%20Knoblauch%20%26%20Andrea%20Rohbeck%20%26%20Steven%20Rohbeck!5e0!3m2!1sde!2sde!4v1625586439921!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 7,
    name: "Dr. med. Sevim Yilmaz",
    address: {
      PLZ: "14467 Potsdam",
      location: "Schopenhauerstraße",
    },
    tel: "+49 331 964620",
    ref: "https://www.kinderkardiologie-potsdam.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.525960870931!2d13.042671316332807!3d52.39714325307849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5cdce9c969d%3A0xde335762a00b0953!2sDr.%20Sevim%20Yilmaz!5e0!3m2!1sde!2sde!4v1625586599652!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 8,
    name: "Dr. med. Manuela Theophil",
    address: {
      PLZ: "14473 Potsdam",
      location: "Heinrich-Mann-Allee 54a, 14473 Potsdam",
    },
    tel: "+49 331 74094978",
    ref: "https://neuropaediatrie-potsdam.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.4717342405365!2d13.075888615802306!3d52.37999817978798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5acbc80f59f%3A0x23514e2cb9528949!2sFach%C3%A4rzte%20der%20Neurologie%20f%C3%BCr%20Kinder-%20und%20Jugendliche%20%7C%20Dr.%20Axel%20Panzer%20und%20Dr.%20Manuela%20Theophil!5e0!3m2!1sde!2sde!4v1626381854247!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 9,
    name: "Dipl.-Med. Sylvia Richter",
    address: {
      PLZ: "14478 Potsdam",
      location: "Saarmunder Str. 48, 14478 Potsdam",
    },
    tel: "+49 331 8873864",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.37442191009!2d13.091143516465728!3d52.36363047978505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f78e6489431%3A0x3709d70bbdc4bfce!2sRichter%2C%20Sylvia%20Dipl.-Med.!5e0!3m2!1sde!2sde!4v1626381992740!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 10,
    name: "Dipl.-Med. Kornelia List",
    address: {
      PLZ: "14478 Potsdam",
      location: "Saarmunder Str. 48",
    },
    tel: "+49 331 8873860",
    ref: "https://www.hausarztpraxis-list.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.37442191009!2d13.091143516465728!3d52.36363047978505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f78e6489431%3A0x548ec8854d428604!2sPraxis%20Dipl.-Med.%20Kornelia%20List!5e0!3m2!1sde!2sde!4v1626382401776!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 11,
    name: "Dipl.-Med. Kerstin Müller & Alexander Tauchnitz",
    address: {
      PLZ: "14480 Potsdam",
      location: "Anni-von-Gottberg-Straße 6A",
    },
    tel: "+49 331 621066",
    ref: "http://www.praxis-mueller-tauchnitz.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.468458708884!2d13.133878316465681!3d52.36192517978463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f015475f697%3A0x96345c9d66d9eed0!2sDipl.-Med.%20Kerstin%20M%C3%BCller%20und%20Alexander%20Tauchnitz!5e0!3m2!1sde!2sde!4v1626382578539!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 12,
    name: "Dr. med. Susanne Krumpe & Dr. med. Beate Schmeltzer",
    address: {
      PLZ: "14480 Potsdam",
      location: "Konrad-Wolf-Allee 1-3",
    },
    tel: "+49 331 622633",
    ref: "http://www.kinderarztpraxis-krumpe.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0295393478686!2d13.139370216465803!3d52.369884379786114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f1c796436e5%3A0x7800be131f4026bf!2sKinderarztpraxis%20Dr.%20med.%20Susanne%20Krumpe!5e0!3m2!1sde!2sde!4v1626382789451!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 13,
    name: "Dr. med. Thomas Schnellbacher & Dr. med. Maja Thyen",
    address: {
      PLZ: "14480 Potsdam",
      location: "Konrad-Wolf-Allee 57",
    },
    tel: "+49 331 622733",
    ref: "http://www.praxis-schnellbacher.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.1868480755584!2d13.13472841744385!3d52.3670319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f1c796436e5%3A0x9d740d1d0f785f3d!2sDr.%20Thomas%20Schnellbacher!5e0!3m2!1sde!2sde!4v1626383107317!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 14,
    name: "Dr. med. Cornelia Reibis",
    address: {
      PLZ: "14482 Potsdam",
      location: "Anhaltstraße 6",
    },
    tel: "+49 331 705049",
    ref: "http://www.praxis-reibis.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.901667472948!2d13.098725315802655!3d52.39033287978983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f58ffb821f7%3A0x469a709fa1519260!2sCornelia%20Reibis!5e0!3m2!1sde!2sde!4v1626388136400!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 15,
    name: "Dr. med. Annika Marx",
    address: {
      PLZ: "14482 Potsdam",
      location: "Alt Nowawes 67",
    },
    tel: "+49 331 710006",
    ref: "http://www.poliklinikevb.de/index.php?id=135#tab1",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.572119324624!2d13.087892316466396!3d52.39630657979086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f5f087bbd3cf%3A0xcb790d3d6e3f1c4d!2sA.%20Marx!5e0!3m2!1sde!2sde!4v1626388241473!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  {
    id: 16,
    name: "Dr. med. Jan-Dirk Lafrenz",
    address: {
      PLZ: "14482 Potsdam",
      location: "Großbeerenstraße 123-135",
    },
    tel: "+49 331 7408053",
    ref: "http://www.familienpraxis-potsdam.de/",
    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.1583113010647!2d13.10612921646617!3d52.38568037978896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f5c95e97423%3A0x4f6fd62d90d36c6c!2sHerr%20Dr.%20med.%20Jan-Dirk%20Lafrenz!5e0!3m2!1sde!2sde!4v1626388336369!5m2!1sde!2sde" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  ],
};
