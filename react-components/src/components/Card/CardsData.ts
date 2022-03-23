interface Card {
  id: string;
  created_at: string;
  color: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  links: {
    html: string;
    download: string;
  };
  likes: number;
  user: {
    id: string;
    username: string;
    name: string;
  };
  views: number;
  downloads: number;
}

const CardsData: Card[] = [
  {
    id: 'BYgDxSJBqJw',
    created_at: '2017-05-29T22:54:06-04:00',
    color: '#a68c8c',
    alt_description: 'cooked food',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1496112774951-bf41010eed5e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/BYgDxSJBqJw',
      download:
        'https://unsplash.com/photos/BYgDxSJBqJw/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 47,
    user: {
      id: 'mA08QQzQf8Y',
      username: 'charlesdeluvio',
      name: 'charlesdeluvio',
    },
    views: 1645451,
    downloads: 2720,
  },
  {
    id: 'DpPutJwgyW8',
    created_at: '2017-08-01T00:07:08-04:00',
    color: '#0c2626',
    alt_description: 'people walking near buildings at night',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1501560379-05951a742668?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/DpPutJwgyW8',
      download:
        'https://unsplash.com/photos/DpPutJwgyW8/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 778,
    user: {
      id: 'oOg8lRiuXvU',
      username: 'agk42',
      name: 'Alex Knight',
    },
    views: 5376631,
    downloads: 42954,
  },
  {
    id: 'a5ToDH34m0I',
    created_at: '2016-08-03T16:38:58-04:00',
    color: '#260c0c',
    alt_description: 'man holding menu',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1470256699805-a29e1b58598a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/a5ToDH34m0I',
      download:
        'https://unsplash.com/photos/a5ToDH34m0I/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 619,
    user: {
      id: 'C07HLqskwx0',
      username: 'alvapratt',
      name: 'Alva Pratt',
    },
    views: 9553923,
    downloads: 38503,
  },
  {
    id: 'ZOnO0l7hAc8',
    created_at: '2020-12-25T11:55:13-05:00',
    color: '#262626',
    alt_description: 'woman in white shirt and black pants walking on sidewalk during daytime',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1608915179748-941838727906?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/ZOnO0l7hAc8',
      download:
        'https://unsplash.com/photos/ZOnO0l7hAc8/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 1,
    user: {
      id: 'DBTXryCYGFc',
      username: 'ivanyeors',
      name: 'Ivan Yeo',
    },
    views: 19517,
    downloads: 77,
  },
  {
    id: 'qom5MPOER-I',
    created_at: '2018-05-14T13:32:46-04:00',
    color: '#262626',
    alt_description: 'Ramen dish',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1526318896980-cf78c088247c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/qom5MPOER-I',
      download:
        'https://unsplash.com/photos/qom5MPOER-I/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 588,
    user: {
      id: 'ONsUd_dcUXo',
      username: 'bonvivant',
      name: 'Bon Vivant',
    },
    views: 13491815,
    downloads: 51018,
  },
  {
    id: 'hW-guOoqfVE',
    created_at: '2020-12-25T11:55:13-05:00',
    color: '#404040',
    alt_description: 'people walking on street during daytime',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1608915193332-81c4d9bf2142?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/hW-guOoqfVE',
      download:
        'https://unsplash.com/photos/hW-guOoqfVE/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 0,
    user: {
      id: 'DBTXryCYGFc',
      username: 'ivanyeors',
      name: 'Ivan Yeo',
    },
    views: 6696,
    downloads: 30,
  },
  {
    id: 'EHK-EH1SRzQ',
    created_at: '2017-08-10T07:26:11-04:00',
    color: '#262626',
    alt_description: 'man in chef suit',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/EHK-EH1SRzQ',
      download:
        'https://unsplash.com/photos/EHK-EH1SRzQ/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 564,
    user: {
      id: 'LRWAwiMfsdY',
      username: 'thomas',
      name: 'Thomas Marban',
    },
    views: 4687279,
    downloads: 33419,
  },
  {
    id: 'D-vDQMTfAAU',
    created_at: '2017-05-29T23:50:53-04:00',
    color: '#f3f3f3',
    alt_description: 'three white dimsum on brown bowl',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/D-vDQMTfAAU',
      download:
        'https://unsplash.com/photos/D-vDQMTfAAU/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 1760,
    user: {
      id: 'mA08QQzQf8Y',
      username: 'charlesdeluvio',
      name: 'charlesdeluvio',
    },
    views: 26325110,
    downloads: 133826,
  },
  {
    id: 'VIv0srmK78g',
    created_at: '2017-12-25T03:22:05-05:00',
    color: '#260c0c',
    alt_description: 'cooked sushi',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/VIv0srmK78g',
      download:
        'https://unsplash.com/photos/VIv0srmK78g/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 136,
    user: {
      id: 'A61M-EAptbk',
      username: 'bady',
      name: 'bady abbas',
    },
    views: 2187841,
    downloads: 14226,
  },
  {
    id: 'sxgRZMimJx0',
    created_at: '2017-01-30T20:49:52-05:00',
    color: '#260c0c',
    alt_description: 'octopus on gray tray',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1485827329522-c625acce0067?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/sxgRZMimJx0',
      download:
        'https://unsplash.com/photos/sxgRZMimJx0/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 397,
    user: {
      id: 'oOg8lRiuXvU',
      username: 'agk42',
      name: 'Alex Knight',
    },
    views: 7677278,
    downloads: 24091,
  },
  {
    id: 'LDxq4MnYB5U',
    created_at: '2016-02-01T08:45:42-05:00',
    color: '#262626',
    alt_description: "seafood's on round black bowl",
    urls: {
      regular:
        'https://images.unsplash.com/photo-1454334281609-87a89762912c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/LDxq4MnYB5U',
      download:
        'https://unsplash.com/photos/LDxq4MnYB5U/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 478,
    user: {
      id: 'S4T8zxLq1vI',
      username: 'alienowicz',
      name: 'Artur Rutkowski',
    },
    views: 5559005,
    downloads: 28292,
  },
  {
    id: 'U5RZnjxU2hs',
    created_at: '2020-12-06T04:27:25-05:00',
    color: '#f3f3f3',
    alt_description: 'sliced meat on white ceramic plate',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1607246749144-7bc0e401623c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/U5RZnjxU2hs',
      download:
        'https://unsplash.com/photos/U5RZnjxU2hs/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 13,

    user: {
      id: 'qVg3BvZVaLo',
      username: 'flyd2069',
      name: 'FLY:D',
    },
    views: 471920,
    downloads: 1433,
  },
  {
    id: 'slyyeNC6qzY',
    created_at: '2016-09-05T16:12:46-04:00',
    color: '#262626',
    alt_description: 'woman standing facing man sitting on barstool',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1473106328154-ae21d6ff7836?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/slyyeNC6qzY',
      download:
        'https://unsplash.com/photos/slyyeNC6qzY/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 249,

    user: {
      id: 'm_UB47oDarM',
      username: 'lanipham',
      name: 'Lan Pham',
    },
    views: 5957762,
    downloads: 18470,
  },
  {
    id: 'nipCGHE-M98',
    created_at: '2020-06-18T03:53:20-04:00',
    color: '#737373',
    alt_description: 'assorted food on black wooden shelf',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1592466741848-20145fe5d6d7?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/nipCGHE-M98',
      download:
        'https://unsplash.com/photos/nipCGHE-M98/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 33,
    user: {
      id: 'K91YLXQvbEA',
      username: 'f9lco',
      name: 'Falco Negenman',
    },
    views: 757967,
    downloads: 1929,
  },
  {
    id: 'hPeGDIGHnoI',
    created_at: '2016-10-09T19:24:38-04:00',
    color: '#0c260c',
    alt_description: 'man stainding near wall',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1476055439777-977cdf3a5699?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/hPeGDIGHnoI',
      download:
        'https://unsplash.com/photos/hPeGDIGHnoI/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 303,

    user: {
      id: 'I3QbsJrk8gc',
      username: 'joshwilburne',
      name: 'Josh Wilburne',
    },
    views: 5674236,
    downloads: 22116,
  },
  {
    id: 'Zz_piqu6fqU',
    created_at: '2020-01-26T10:27:05-05:00',
    color: '#735959',
    alt_description: 'white ceramic plate with white cream',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1580052380706-16fcc67ee1da?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/Zz_piqu6fqU',
      download:
        'https://unsplash.com/photos/Zz_piqu6fqU/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 16,

    user: {
      id: 'lmTQsPOiB9c',
      username: 'uomo_libero',
      name: 'uomo libero',
    },
    views: 26524,
    downloads: 591,
  },
  {
    id: 'Oqndf3dU8OA',
    created_at: '2019-06-20T16:20:49-04:00',
    color: '#260c0c',
    alt_description: 'plate of noodles',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1561062034-3a3c718e5291?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/Oqndf3dU8OA',
      download:
        'https://unsplash.com/photos/Oqndf3dU8OA/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 20,

    user: {
      id: 'fIGNGafk7gw',
      username: 'as4284',
      name: 'Amy Syiek',
    },
    views: 278082,
    downloads: 892,
  },
  {
    id: 'ztz-09sW-4o',
    created_at: '2020-08-31T22:44:28-04:00',
    color: '#262626',
    alt_description: 'assorted food display on glass shelf',
    urls: {
      regular:
        'https://images.unsplash.com/photo-1598927837286-82f12546ff83?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    },
    links: {
      html: 'https://unsplash.com/photos/ztz-09sW-4o',
      download:
        'https://unsplash.com/photos/ztz-09sW-4o/download?ixid=MnwyNzA3MDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc5ODEyNTA',
    },
    likes: 15,

    user: {
      id: '3tGd9M8x_tY',
      username: 'thirdcultureken',
      name: 'Kentaro Toma',
    },
    views: 58295,
    downloads: 392,
  },
];

export default CardsData;
