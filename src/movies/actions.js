export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cdc2f8b7a8fb3f39d2eb0e3f63a64063&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').catch(() => {
      const cannedData = {
        page: 1,
        results: [{
          adult: false, backdrop_path: '/lIE7kfdLBRd0KENNtOaIqPPWNqh.jpg', genre_ids: [27, 18, 14], id: 590995, original_language: 'en', original_title: 'The Craft: Legacy', overview: 'An eclectic foursome of aspiring teenage witches get more than they bargained for as they lean into their newfound powers.', popularity: 2459.249, poster_path: '/lhMIra0pqWNuD6CIXoTmGwZ0EBS.jpg', release_date: '2020-10-28', title: 'The Craft: Legacy', video: false, vote_average: 6.2, vote_count: 170,
        }, {
          adult: false, backdrop_path: '/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg', genre_ids: [14, 10751, 12, 35, 27], id: 531219, original_language: 'en', original_title: "Roald Dahl's The Witches", overview: "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.", popularity: 1868.653, poster_path: '/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg', release_date: '2020-10-26', title: "Roald Dahl's The Witches", video: false, vote_average: 6.9, vote_count: 926,
        }, {
          adult: false, backdrop_path: '/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg', genre_ids: [28, 14, 878], id: 590706, original_language: 'en', original_title: 'Jiu Jitsu', overview: 'Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.', popularity: 1802.147, poster_path: '/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg', release_date: '2020-11-20', title: 'Jiu Jitsu', video: false, vote_average: 5.9, vote_count: 158,
        }, {
          adult: false, backdrop_path: '/wk58aoyWpMTVkKkdjw889XfWGdL.jpg', genre_ids: [53, 80, 9648], id: 646593, original_language: 'en', original_title: 'Wander', overview: "After getting hired to probe a suspicious death in the small town of Wander, a mentally unstable private investigator becomes convinced the case is linked to the same 'conspiracy cover up' that caused the death of his daughter.", popularity: 1678.596, poster_path: '/2AwPvNHphpZBJDqjZKVuMAbvS0v.jpg', release_date: '2020-12-04', title: 'Wander', video: false, vote_average: 5.6, vote_count: 24,
        }, {
          adult: false, backdrop_path: '/kvexLqnJKZSMEu2CWNzNjlcMCNJ.jpg', genre_ids: [27, 37, 36], id: 294963, original_language: 'en', original_title: 'Bone Tomahawk', overview: 'During a shootout in a saloon, Sheriff Hunt injures a suspicious stranger. One of the villagers takes care of him in prison. One day they both disappear – only the spear of a cannibal tribe is found. Hunt and a few of his men go in search of the prisoner and his nurse.', popularity: 1381.292, poster_path: '/ifdPXLsGmdspNOonv3DwU5pbyVC.jpg', release_date: '2015-10-23', title: 'Bone Tomahawk', video: false, vote_average: 6.8, vote_count: 1274,
        }, {
          adult: false, backdrop_path: '/ckfwfLkl0CkafTasoRw5FILhZAS.jpg', genre_ids: [28, 35, 14], id: 602211, original_language: 'en', original_title: 'Fatman', overview: 'A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.', popularity: 1290.474, poster_path: '/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg', release_date: '2020-11-13', title: 'Fatman', video: false, vote_average: 5.9, vote_count: 170,
        }, {
          adult: false, backdrop_path: '/zMcEalkxEiRjvmijliLBk0sYern.jpg', genre_ids: [35, 80, 53], id: 765123, original_language: 'de', original_title: 'Wir Können Nicht Anders', overview: "A man foils an attempted murder, then flees the crew of would-be killers along with their intended target as a woman he's just met tries to find him.", popularity: 1259.798, poster_path: '/ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg', release_date: '2020-12-04', title: 'Christmas Crossfire', video: false, vote_average: 5.2, vote_count: 21,
        }, {
          adult: false, backdrop_path: '/tYkMtYPNpUdLdzGDUTC5atyMh9X.jpg', genre_ids: [28, 53, 80, 18], id: 553604, original_language: 'en', original_title: 'Honest Thief', overview: "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.", popularity: 992.936, poster_path: '/zeD4PabP6099gpE0STWJrJrCBCs.jpg', release_date: '2020-09-03', title: 'Honest Thief', video: false, vote_average: 7.3, vote_count: 189,
        }, {
          adult: false, backdrop_path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg', genre_ids: [28, 53, 878], id: 577922, original_language: 'en', original_title: 'Tenet', overview: 'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', popularity: 960.791, poster_path: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg', release_date: '2020-08-22', title: 'Tenet', video: false, vote_average: 7.4, vote_count: 2967,
        }, {
          adult: false, backdrop_path: '/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg', genre_ids: [28, 35], id: 682377, original_language: 'en', original_title: 'Chick Fight', overview: 'When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.', popularity: 960.088, poster_path: '/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg', release_date: '2020-11-13', title: 'Chick Fight', video: false, vote_average: 5.8, vote_count: 64,
        }, {
          adult: false, backdrop_path: '/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg', genre_ids: [37], id: 729648, original_language: 'en', original_title: 'The Dalton Gang', overview: "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly", popularity: 959.676, poster_path: '/6OeGqp18oZucUGziMIRNhLouZ75.jpg', release_date: '2020-11-02', title: 'The Dalton Gang', video: false, vote_average: 4.5, vote_count: 42,
        }, {
          adult: false, backdrop_path: '/2ltadt0HtHS8qD3xREVds3PDxkP.jpg', genre_ids: [10751, 14, 35], id: 662546, original_language: 'en', original_title: 'Godmothered', overview: 'A young and unskilled fairy godmother that ventures out on her own to prove her worth by tracking down a young girl whose request for help was ignored. What she discovers is that the girl has now become a grown woman in need of something very different than a "prince charming."', popularity: 884.818, poster_path: '/ir8Qqi90mENhH7CDxEpdeCcm6UL.jpg', release_date: '2020-12-04', title: 'Godmothered', video: false, vote_average: 7.3, vote_count: 178,
        }, {
          adult: false, backdrop_path: '/qtq1mai9POAX2IRGcxhVpf8f6Aj.jpg', genre_ids: [27], id: 756278, original_language: 'en', original_title: 'Haunting of the Mary Celeste', overview: 'Rachel, a concerned researcher, and her team have set out to sea to prove that the disappearance of a family and crew from a merchant ship was for reasons having to do with the supernatural. Her theory that those on the Mary Celeste vanished into a "rift" between dimensions proves true as the boat breaks down and her crew begins to vanish one by one.', popularity: 815.467, poster_path: '/csTraKglBdSeU9bLMaw9e20hEIN.jpg', release_date: '2020-10-23', title: 'Haunting of the Mary Celeste', video: false, vote_average: 7.1, vote_count: 8,
        }, {
          adult: false, backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg', genre_ids: [28, 53], id: 724989, original_language: 'en', original_title: 'Hard Kill', overview: 'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.', popularity: 809.927, poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg', release_date: '2020-10-23', title: 'Hard Kill', video: false, vote_average: 4.9, vote_count: 245,
        }, {
          adult: false, backdrop_path: '/m7QpUAeI2xTCJyAVl9J9z5dBTSb.jpg', genre_ids: [878, 27, 28], id: 722603, original_language: 'en', original_title: 'Battlefield 2025', overview: 'Weekend campers, an escaped convict, young lovers and a police officer experience a night of terror when a hostile visitor from another world descends on a small Arizona town.', popularity: 792.617, poster_path: '/w6e0XZreiyW4mGlLRHEG8ipff7b.jpg', release_date: '2020-07-07', title: 'Battlefield 2025', video: false, vote_average: 5.6, vote_count: 92,
        }, {
          adult: false, backdrop_path: '/eo6pahstCYRUm0Lk4MORmfCs2SH.jpg', genre_ids: [16], id: 752455, original_language: 'en', original_title: "Angela's Christmas Wish", overview: 'A determined Angela makes a wish to reunite her family in time for Christmas, then launches a plan to find her way from Ireland to Australia.', popularity: 736.386, poster_path: '/eu747ko823mktL3ygo7ohdZznP7.jpg', release_date: '2020-12-01', title: "Angela's Christmas Wish", video: false, vote_average: 6.5, vote_count: 33,
        }, {
          adult: false, backdrop_path: '/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg', genre_ids: [53, 28, 18, 80], id: 671039, original_language: 'fr', original_title: 'Bronx', overview: 'Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.', popularity: 725.106, poster_path: '/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg', release_date: '2020-10-30', title: 'Rogue City', video: false, vote_average: 5.9, vote_count: 291,
        }, {
          adult: false, backdrop_path: '/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg', genre_ids: [28, 53], id: 524047, original_language: 'en', original_title: 'Greenland', overview: "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.", popularity: 684.542, poster_path: '/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg', release_date: '2020-07-29', title: 'Greenland', video: false, vote_average: 7.2, vote_count: 958,
        }, {
          adult: false, backdrop_path: '/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg', genre_ids: [28, 27, 53], id: 581392, original_language: 'ko', original_title: '반도', overview: 'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.', popularity: 653.148, poster_path: '/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg', release_date: '2020-07-15', title: 'Peninsula', video: false, vote_average: 6.9, vote_count: 900,
        }, {
          adult: false, backdrop_path: '/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg', genre_ids: [28, 53, 12, 18], id: 741067, original_language: 'en', original_title: 'Welcome to Sudden Death', overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.", popularity: 644.443, poster_path: '/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg', release_date: '2020-09-29', title: 'Welcome to Sudden Death', video: false, vote_average: 6.2, vote_count: 192,
        }],
        total_pages: 500,
        total_results: 10000,
      };
      return dispatch({
        type: 'GET_MOVIES',
        data: cannedData,
      });
    });
    const movies = await res.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cdc2f8b7a8fb3f39d2eb0e3f63a64063&language=en-US`);
    const movie = await res.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}
