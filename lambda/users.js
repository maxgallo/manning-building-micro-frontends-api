const credentials = {
    'alan.turing': '1954',
    'bernhard.riemann': '1866',
    'david.hilbert': '1943',
    'isaac.newton': '1727',
};

const userSongs = {
    'alan.turing': [
        {
            artistName: 'Peter Gabriel',
            artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/e8/96/7f/e8967ffe-2f8a-ab0b-f446-96ef8800379e/source/100x100bb.jpg',
            collectionName: 'Scratch My Back (Special Edition)',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music3/v4/0a/d5/7a/0ad57a82-557e-5294-283b-454f80baf8af/mzaf_9087288924317663215.plus.aac.p.m4a',
            trackName: 'My Body Is a Cage',
        },
        {
            artistName: 'ANOHNI',
            artworkUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Music69/v4/0d/e5/ad/0de5ad26-2fa7-1d4a-6762-bc8bb501a832/source/100x100bb.jpg',
            collectionName: 'HOPELESSNESS',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music69/v4/45/78/3b/45783b89-14a2-b703-6836-d0a66b0ef4e3/mzaf_7787604250021340559.plus.aac.p.m4a',
            trackName: '4 Degrees',
        },
        {
            artistName: 'The Who',
            artworkUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/c6/be/c2/c6bec204-e964-71f1-bbf1-c8700b75d99a/source/100x100bb.jpg',
            collectionName: 'Tommy',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/ee/de/62/eede62c4-1531-ccaf-d013-279676a2e73b/mzaf_4701089181834717354.plus.aac.p.m4a',
            trackName: 'Pinball Wizard',
        },
        {
            artistName: 'Audioslave',
            artworkUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/8c/64/61/8c6461e2-0712-d9c1-f1d9-87efaefd440f/source/100x100bb.jpg',
            collectionName: 'Audioslave',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music/92/94/c5/mzm.qoyleepv.aac.p.m4a',
            trackName: 'Like a Stone',
        }
    ],
    'bernhard.riemann': [
        {
            artistName: 'Depeche Mode',
            artworkUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/7d/9d/fc/7d9dfcb5-6360-77aa-b196-d9fd3263f8c5/source/100x100bb.jpg',
            collectionName: 'Violator (Bonus Track Version)',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music/3c/f4/06/mzm.rmjdfizd.aac.p.m4a',
            trackName: 'Personal Jesus',
        },
        {
            artistName: 'The Cure',
            artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/64/68/13/6468131a-2236-5015-e4d5-a8650332aa28/source/100x100bb.jpg',
            collectionName: 'Disintegration (Deluxe Edition - Remastered)',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music/50/73/ea/mzm.wofhmvcw.aac.p.m4a',
            trackName: 'Pictures of You',
        },
        {
            artistName: 'Peter Gabriel',
            artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/e8/96/7f/e8967ffe-2f8a-ab0b-f446-96ef8800379e/source/100x100bb.jpg',
            collectionName: 'Scratch My Back (Special Edition)',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music3/v4/0a/d5/7a/0ad57a82-557e-5294-283b-454f80baf8af/mzaf_9087288924317663215.plus.aac.p.m4a',
            trackName: 'My Body Is a Cage',
        },
        {
            artistName: 'Temple of the Dog',
            artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/ca/1f/96/ca1f96cf-0db3-cdd1-03f9-78afa7390ec0/source/100x100bb.jpg',
            collectionName: 'Temple of the Dog',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/02/b4/95/02b4959a-392c-18e6-1f2e-11715f616f87/mzaf_962356635523196522.plus.aac.p.m4a',
            trackName: 'Call Me a Dog',
        }

    ],
    'david.hilbert': [
        {
            artistName: 'The Who',
            artworkUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/c6/be/c2/c6bec204-e964-71f1-bbf1-c8700b75d99a/source/100x100bb.jpg',
            collectionName: 'Tommy',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/ee/de/62/eede62c4-1531-ccaf-d013-279676a2e73b/mzaf_4701089181834717354.plus.aac.p.m4a',
            trackName: 'Pinball Wizard',
        },
        {
            artistName: 'Pink Floyd',
            artworkUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Music7/v4/e5/9f/fb/e59ffb3b-1283-ee80-56a5-1b983df53ab2/source/100x100bb.jpg',
            collectionName: 'The Wall',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music7/v4/8c/3b/31/8c3b3174-b79b-ddf8-707c-1ba7016da538/mzaf_7277949113137423986.plus.aac.p.m4a',
            trackName: 'Comfortably Numb',
        },
        {
            artistName: 'Marvin Gaye',
            artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ef/8f/fd/ef8ffd16-2163-6d73-d1ac-d91e7254b97e/source/100x100bb.jpg',
            collectionName: 'What\'s Going On',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/f6/7f/f1/f67ff1a5-14b1-8773-147c-5c03e487b189/mzaf_8491386495775845166.plus.aac.p.m4a',
            trackName: 'Inner City Blues (Make Me Wanna Holler)',
        }
    ],
    'isaac.newton': [
        {
            artistName: 'Pearl Jam',
            collectionName: 'Ten',
            trackName: 'Black',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview62/v4/8e/b2/26/8eb226d8-691f-10ca-2476-ce07afa9dd89/mzaf_6362323763366506830.plus.aac.p.m4a',
            artworkUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Music71/v4/86/27/f2/8627f2b9-0e43-9e25-b2fa-a44ffc6f42f2/source/100x100bb.jpg',
        },
        {
            artistName: 'Berlin Philharmonic & Herbert von Karajan',
            artworkUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/3e/d2/6f/3ed26ffe-83ac-8cde-99b3-0fc86a188920/source/100x100bb.jpg',
            collectionName: 'Holst: The Planets, Op. 32',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/a9/dd/1a/a9dd1abe-56bd-3fdf-8bf1-2771cc3417f0/mzaf_8740248165771161262.plus.aac.p.m4a',
            trackName: 'The Planets, Op. 32: IV. Jupiter, the Bringer of Jollity',
        },
        {
            artistName: 'Radiohead',
            artworkUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Music69/v4/cb/b4/83/cbb48306-e44c-d5ea-eaf6-aef3e320e176/source/100x100bb.jpg',
            collectionName: 'Kid A',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview60/v4/99/56/f3/9956f319-1bc1-d994-6400-b3f44aae9344/mzaf_2098782826074522995.plus.aac.p.m4a',
            trackName: 'Idioteque',
        },
        {
            artistName: 'Sigur Rós',
            artworkUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/7d/bc/13/7dbc1387-693b-2e1e-0dbb-195cc6c86209/source/100x100bb.jpg',
            collectionName: 'Takk...',
            previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/af/de/35/afde3538-0de9-358d-ef54-211842be85a4/mzaf_8947546713050107329.plus.aac.p.m4a',
            trackName: 'Hoppípolla',
        }
    ],
}

module.exports = {
    credentials,
    userSongs,
}
