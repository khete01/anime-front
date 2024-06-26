import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Popular from "./popular";

const App1 = () => {
  const animeData = {
    data: [
      {
        id: "12",
        type: "anime",
        links: {
          self: "/anime/12",
        },
        attributes: {
          createdAt: "2013-02-20T16:00:25.722Z",
          updatedAt: "2024-06-24T06:25:48.918Z",
          slug: "one-piece",
          synopsis:
            'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n[Written by MAL Rewrite]',
          description:
            'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n[Written by MAL Rewrite]',
          coverImageTopOffset: 50,
          titles: {
            en: "One Piece",
            en_jp: "One Piece",
            ja_jp: "ONE PIECE",
          },
          canonicalTitle: "One Piece",
          abbreviatedTitles: ["ワンピース"],
          averageRating: "83.86",
          ratingFrequencies: {
            "2": "7815",
            "3": "171",
            "4": "592",
            "5": "109",
            "6": "519",
            "7": "116",
            "8": "9330",
            "9": "151",
            "10": "1623",
            "11": "241",
            "12": "2767",
            "13": "315",
            "14": "21634",
            "15": "683",
            "16": "7739",
            "17": "1183",
            "18": "8474",
            "19": "1193",
            "20": "94049",
          },
          userCount: 307627,
          favoritesCount: 10229,
          startDate: "1999-10-20",
          endDate: null,
          nextRelease: "2024-06-30T09:30:00.000+09:00",
          popularityRank: 14,
          ratingRank: 36,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or older",
          subtype: "TV",
          status: "current",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/12/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/12/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/12/small.jpg",
            medium: "https://media.kitsu.io/anime/poster_images/12/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/12/original.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/12/cover_image/tiny-cd1b0729d5c15400bfa2441ea3751e86.jpeg",
            large:
              "https://media.kitsu.io/anime/12/cover_image/large-3e72f400a87b5241780c5082f0582611.jpeg",
            small:
              "https://media.kitsu.io/anime/12/cover_image/small-8d0cbc39cac65d5d7c4db5f5b3742ae7.jpeg",
            original:
              "https://media.kitsu.io/anime/12/cover_image/21ecb556255bd46b95aea4779d19789f.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: null,
          episodeLength: 24,
          totalLength: 30720,
          youtubeVideoId: "CmTeYj2FmRc",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/12/relationships/genres",
              related: "/anime/12/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/12/relationships/categories",
              related: "/anime/12/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/12/relationships/castings",
              related: "/anime/12/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/12/relationships/installments",
              related: "/anime/12/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/12/relationships/mappings",
              related: "/anime/12/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/12/relationships/reviews",
              related: "/anime/12/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/12/relationships/media-relationships",
              related: "/anime/12/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/12/relationships/characters",
              related: "/anime/12/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/12/relationships/staff",
              related: "/anime/12/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/12/relationships/productions",
              related: "/anime/12/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/12/relationships/quotes",
              related: "/anime/12/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/12/relationships/episodes",
              related: "/anime/12/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/12/relationships/streaming-links",
              related: "/anime/12/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/12/relationships/anime-productions",
              related: "/anime/12/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/12/relationships/anime-characters",
              related: "/anime/12/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/12/relationships/anime-staff",
              related: "/anime/12/anime-staff",
            },
          },
        },
      },
      {
        id: "46320",
        type: "anime",
        links: {
          self: "/anime/46320",
        },
        attributes: {
          createdAt: "2022-08-09T15:11:35.147Z",
          updatedAt: "2024-06-24T06:01:56.658Z",
          slug: "dungeon-meshi",
          synopsis:
            "Dungeons, dragons...and delicious monster stew!? Adventurers foray into a cursed buried kingdom to save their friend, cooking up a storm along the way.\n\n(Source: Netflix)\n\nNote: A world premiere screening of Episode 1 was shown in the Studio TRIGGER panel at Anime Expo on July 1, 2023.",
          description:
            "Dungeons, dragons...and delicious monster stew!? Adventurers foray into a cursed buried kingdom to save their friend, cooking up a storm along the way.\n\n(Source: Netflix)\n\nNote: A world premiere screening of Episode 1 was shown in the Studio TRIGGER panel at Anime Expo on July 1, 2023.",
          coverImageTopOffset: 0,
          titles: {
            en: "Delicious in Dungeon",
            en_jp: "Dungeon Meshi",
            ja_jp: "ダンジョン飯",
          },
          canonicalTitle: "Dungeon Meshi",
          abbreviatedTitles: [
            "Dungeon Food",
            "Dungeon Meal",
            "Tragones y Mazmorras",
            "Gloutons et Dragons",
            "Подземелье вкусностей",
            "던전밥",
            "สูตรลับตำรับดันเจียน",
            "Mỹ vị hầm ngục",
            "Підземелля смакоти",
            "迷宫饭",
            "מבוכים ומטעמים",
          ],
          averageRating: "84.78",
          ratingFrequencies: {
            "2": "1",
            "3": "0",
            "4": "1",
            "5": "1",
            "6": "5",
            "7": "0",
            "8": "19",
            "9": "2",
            "10": "6",
            "11": "3",
            "12": "30",
            "13": "11",
            "14": "159",
            "15": "33",
            "16": "213",
            "17": "72",
            "18": "190",
            "19": "47",
            "20": "366",
          },
          userCount: 4481,
          favoritesCount: 59,
          startDate: "2024-01-04",
          endDate: "2024-06-13",
          nextRelease: null,
          popularityRank: 2813,
          ratingRank: 20,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or older",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/46320/poster_image/tiny-b1d4436f3b06f4f707d4362bbf7a4197.jpeg",
            large:
              "https://media.kitsu.io/anime/46320/poster_image/large-9d404bdee1ca826c60e32864e0502999.jpeg",
            small:
              "https://media.kitsu.io/anime/46320/poster_image/small-1586f1529d000463eb462dcca0bf2593.jpeg",
            medium:
              "https://media.kitsu.io/anime/46320/poster_image/medium-feb3c7544b2d91902c9c6a38bf1f5944.jpeg",
            original:
              "https://media.kitsu.io/anime/46320/poster_image/05f649f22ee66eea5ba81af1da813f2c.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/46320/cover_image/tiny-b394a8b1099e487a75e8e9fccb06f21d.jpeg",
            large:
              "https://media.kitsu.io/anime/46320/cover_image/large-6159a844933a365b1c3a6ba605d56578.jpeg",
            small:
              "https://media.kitsu.io/anime/46320/cover_image/small-c06316e228c82c8053456ffbf0bc2023.jpeg",
            original:
              "https://media.kitsu.io/anime/46320/cover_image/0011c01145d14caec9eb53bf3dc16a94.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 24,
          episodeLength: 26,
          totalLength: 0,
          youtubeVideoId: "aXfVHMILKJg",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/46320/relationships/genres",
              related: "/anime/46320/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/46320/relationships/categories",
              related: "/anime/46320/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/46320/relationships/castings",
              related: "/anime/46320/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/46320/relationships/installments",
              related: "/anime/46320/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/46320/relationships/mappings",
              related: "/anime/46320/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/46320/relationships/reviews",
              related: "/anime/46320/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/46320/relationships/media-relationships",
              related: "/anime/46320/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/46320/relationships/characters",
              related: "/anime/46320/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/46320/relationships/staff",
              related: "/anime/46320/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/46320/relationships/productions",
              related: "/anime/46320/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/46320/relationships/quotes",
              related: "/anime/46320/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/46320/relationships/episodes",
              related: "/anime/46320/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/46320/relationships/streaming-links",
              related: "/anime/46320/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/46320/relationships/anime-productions",
              related: "/anime/46320/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/46320/relationships/anime-characters",
              related: "/anime/46320/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/46320/relationships/anime-staff",
              related: "/anime/46320/anime-staff",
            },
          },
        },
      },
      {
        id: "7442",
        type: "anime",
        links: {
          self: "/anime/7442",
        },
        attributes: {
          createdAt: "2013-02-20T17:55:59.054Z",
          updatedAt: "2024-06-24T07:38:25.742Z",
          slug: "attack-on-titan",
          synopsis:
            "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.\n\n(Source: MAL Rewrite)",
          description:
            "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.\n\n(Source: MAL Rewrite)",
          coverImageTopOffset: 263,
          titles: {
            en: "Attack on Titan",
            en_jp: "Shingeki no Kyojin",
            en_us: "Attack on Titan",
            ja_jp: "進撃の巨人",
          },
          canonicalTitle: "Attack on Titan",
          abbreviatedTitles: ["AoT"],
          averageRating: "84.81",
          ratingFrequencies: {
            "2": "11383",
            "3": "275",
            "4": "1100",
            "5": "212",
            "6": "1073",
            "7": "211",
            "8": "18461",
            "9": "345",
            "10": "3529",
            "11": "597",
            "12": "6988",
            "13": "904",
            "14": "60247",
            "15": "2212",
            "16": "26863",
            "17": "4002",
            "18": "27767",
            "19": "2779",
            "20": "208260",
          },
          userCount: 555653,
          favoritesCount: 9238,
          startDate: "2013-04-07",
          endDate: "2013-09-29",
          nextRelease: null,
          popularityRank: 1,
          ratingRank: 19,
          ageRating: "R",
          ageRatingGuide: "Violence, Profanity",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/7442/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/7442/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/7442/small.jpg",
            medium:
              "https://media.kitsu.io/anime/poster_images/7442/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/7442/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/cover_images/7442/tiny.jpg",
            large: "https://media.kitsu.io/anime/cover_images/7442/large.jpg",
            small: "https://media.kitsu.io/anime/cover_images/7442/small.jpg",
            original:
              "https://media.kitsu.io/anime/cover_images/7442/original.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 25,
          episodeLength: 24,
          totalLength: 600,
          youtubeVideoId: "LHtdKWJdif4",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/7442/relationships/genres",
              related: "/anime/7442/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/7442/relationships/categories",
              related: "/anime/7442/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/7442/relationships/castings",
              related: "/anime/7442/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/7442/relationships/installments",
              related: "/anime/7442/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/7442/relationships/mappings",
              related: "/anime/7442/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/7442/relationships/reviews",
              related: "/anime/7442/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/7442/relationships/media-relationships",
              related: "/anime/7442/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/7442/relationships/characters",
              related: "/anime/7442/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/7442/relationships/staff",
              related: "/anime/7442/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/7442/relationships/productions",
              related: "/anime/7442/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/7442/relationships/quotes",
              related: "/anime/7442/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/7442/relationships/episodes",
              related: "/anime/7442/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/7442/relationships/streaming-links",
              related: "/anime/7442/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/7442/relationships/anime-productions",
              related: "/anime/7442/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/7442/relationships/anime-characters",
              related: "/anime/7442/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/7442/relationships/anime-staff",
              related: "/anime/7442/anime-staff",
            },
          },
        },
      },
      {
        id: "11469",
        type: "anime",
        links: {
          self: "/anime/11469",
        },
        attributes: {
          createdAt: "2015-10-27T22:39:09.949Z",
          updatedAt: "2024-06-24T07:11:35.349Z",
          slug: "boku-no-hero-academia",
          synopsis:
            "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…\n\n(Source: Viz Media)",
          description:
            "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…\n\n(Source: Viz Media)",
          coverImageTopOffset: 200,
          titles: {
            en: "My Hero Academia",
            en_jp: "Boku no Hero Academia",
            en_us: "My Hero Academia",
            ja_jp: "僕のヒーローアカデミア",
          },
          canonicalTitle: "Boku no Hero Academia",
          abbreviatedTitles: [],
          averageRating: "84.01",
          ratingFrequencies: {
            "2": "11597",
            "3": "324",
            "4": "853",
            "5": "215",
            "6": "1059",
            "7": "243",
            "8": "17053",
            "9": "377",
            "10": "3324",
            "11": "702",
            "12": "5965",
            "13": "1170",
            "14": "62967",
            "15": "2799",
            "16": "24340",
            "17": "3984",
            "18": "18378",
            "19": "2003",
            "20": "189105",
          },
          userCount: 513326,
          favoritesCount: 5623,
          startDate: "2016-04-03",
          endDate: "2016-06-26",
          nextRelease: null,
          popularityRank: 2,
          ratingRank: 35,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or older",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/11469/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/11469/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/11469/small.jpg",
            medium:
              "https://media.kitsu.io/anime/poster_images/11469/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/11469/original.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/cover_images/11469/tiny.jpg",
            large: "https://media.kitsu.io/anime/cover_images/11469/large.jpg",
            small: "https://media.kitsu.io/anime/cover_images/11469/small.jpg",
            original:
              "https://media.kitsu.io/anime/cover_images/11469/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 13,
          episodeLength: 23,
          totalLength: 312,
          youtubeVideoId: "D5fYOnwYkj4",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/11469/relationships/genres",
              related: "/anime/11469/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/11469/relationships/categories",
              related: "/anime/11469/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/11469/relationships/castings",
              related: "/anime/11469/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/11469/relationships/installments",
              related: "/anime/11469/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/11469/relationships/mappings",
              related: "/anime/11469/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/11469/relationships/reviews",
              related: "/anime/11469/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/11469/relationships/media-relationships",
              related: "/anime/11469/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/11469/relationships/characters",
              related: "/anime/11469/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/11469/relationships/staff",
              related: "/anime/11469/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/11469/relationships/productions",
              related: "/anime/11469/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/11469/relationships/quotes",
              related: "/anime/11469/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/11469/relationships/episodes",
              related: "/anime/11469/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/11469/relationships/streaming-links",
              related: "/anime/11469/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/11469/relationships/anime-productions",
              related: "/anime/11469/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/11469/relationships/anime-characters",
              related: "/anime/11469/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/11469/relationships/anime-staff",
              related: "/anime/11469/anime-staff",
            },
          },
        },
      },
      {
        id: "12268",
        type: "anime",
        links: {
          self: "/anime/12268",
        },
        attributes: {
          createdAt: "2016-06-26T19:09:26.437Z",
          updatedAt: "2024-06-24T07:11:37.555Z",
          slug: "boku-no-hero-academia-2nd-season",
          synopsis:
            "Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all around will decide who is the top Hero in training.\n\n(Source: Anime News Network)",
          description:
            "Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all around will decide who is the top Hero in training.\n\n(Source: Anime News Network)",
          coverImageTopOffset: 200,
          titles: {
            en: "My Hero Academia Season 2",
            en_jp: "Boku no Hero Academia 2",
            ja_jp: "僕のヒーローアカデミア２",
          },
          canonicalTitle: "Boku no Hero Academia 2",
          abbreviatedTitles: [],
          averageRating: "84.35",
          ratingFrequencies: {
            "2": "11797",
            "3": "312",
            "4": "801",
            "5": "229",
            "6": "1119",
            "7": "279",
            "8": "16735",
            "9": "389",
            "10": "2749",
            "11": "651",
            "12": "4525",
            "13": "1012",
            "14": "59171",
            "15": "2675",
            "16": "21626",
            "17": "4247",
            "18": "18967",
            "19": "2175",
            "20": "188692",
          },
          userCount: 501512,
          favoritesCount: 2227,
          startDate: "2017-04-01",
          endDate: "2017-09-30",
          nextRelease: null,
          popularityRank: 3,
          ratingRank: 27,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or older",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/12268/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/12268/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/12268/small.jpg",
            medium:
              "https://media.kitsu.io/anime/poster_images/12268/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/12268/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/cover_images/12268/tiny.jpg",
            large: "https://media.kitsu.io/anime/cover_images/12268/large.jpg",
            small: "https://media.kitsu.io/anime/cover_images/12268/small.jpg",
            original:
              "https://media.kitsu.io/anime/cover_images/12268/original.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 25,
          episodeLength: 24,
          totalLength: 600,
          youtubeVideoId: "9ZIgCYSn3e8",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/12268/relationships/genres",
              related: "/anime/12268/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/12268/relationships/categories",
              related: "/anime/12268/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/12268/relationships/castings",
              related: "/anime/12268/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/12268/relationships/installments",
              related: "/anime/12268/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/12268/relationships/mappings",
              related: "/anime/12268/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/12268/relationships/reviews",
              related: "/anime/12268/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/12268/relationships/media-relationships",
              related: "/anime/12268/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/12268/relationships/characters",
              related: "/anime/12268/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/12268/relationships/staff",
              related: "/anime/12268/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/12268/relationships/productions",
              related: "/anime/12268/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/12268/relationships/quotes",
              related: "/anime/12268/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/12268/relationships/episodes",
              related: "/anime/12268/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/12268/relationships/streaming-links",
              related: "/anime/12268/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/12268/relationships/anime-productions",
              related: "/anime/12268/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/12268/relationships/anime-characters",
              related: "/anime/12268/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/12268/relationships/anime-staff",
              related: "/anime/12268/anime-staff",
            },
          },
        },
      },
      {
        id: "10740",
        type: "anime",
        links: {
          self: "/anime/10740",
        },
        attributes: {
          createdAt: "2015-03-07T16:34:36.575Z",
          updatedAt: "2024-06-24T07:11:39.300Z",
          slug: "one-punch-man",
          synopsis:
            "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nThis all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process.\n\n(Source: MAL Rewrite)",
          description:
            "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nThis all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process.\n\n(Source: MAL Rewrite)",
          coverImageTopOffset: 350,
          titles: {
            en_jp: "One Punch Man",
            en_us: "One Punch Man",
            ja_jp: "ワンパンマン",
          },
          canonicalTitle: "One Punch Man",
          abbreviatedTitles: ["One Punch-Man", "OPM", "One-Punch Man"],
          averageRating: "83.64",
          ratingFrequencies: {
            "2": "13177",
            "3": "336",
            "4": "1035",
            "5": "190",
            "6": "827",
            "7": "242",
            "8": "19414",
            "9": "314",
            "10": "2729",
            "11": "561",
            "12": "4834",
            "13": "830",
            "14": "54328",
            "15": "2177",
            "16": "23914",
            "17": "4054",
            "18": "24713",
            "19": "2412",
            "20": "180006",
          },
          userCount: 487559,
          favoritesCount: 4055,
          startDate: "2015-10-05",
          endDate: "2015-12-21",
          nextRelease: null,
          popularityRank: 4,
          ratingRank: 38,
          ageRating: "R",
          ageRatingGuide: "Violence, Profanity",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/10740/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/10740/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/10740/small.jpg",
            medium:
              "https://media.kitsu.io/anime/poster_images/10740/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/10740/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/cover_images/10740/tiny.jpg",
            large: "https://media.kitsu.io/anime/cover_images/10740/large.jpg",
            small: "https://media.kitsu.io/anime/cover_images/10740/small.jpg",
            original:
              "https://media.kitsu.io/anime/cover_images/10740/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 12,
          episodeLength: 24,
          totalLength: 288,
          youtubeVideoId: "tMblzsXwAKo",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/10740/relationships/genres",
              related: "/anime/10740/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/10740/relationships/categories",
              related: "/anime/10740/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/10740/relationships/castings",
              related: "/anime/10740/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/10740/relationships/installments",
              related: "/anime/10740/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/10740/relationships/mappings",
              related: "/anime/10740/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/10740/relationships/reviews",
              related: "/anime/10740/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/10740/relationships/media-relationships",
              related: "/anime/10740/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/10740/relationships/characters",
              related: "/anime/10740/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/10740/relationships/staff",
              related: "/anime/10740/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/10740/relationships/productions",
              related: "/anime/10740/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/10740/relationships/quotes",
              related: "/anime/10740/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/10740/relationships/episodes",
              related: "/anime/10740/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/10740/relationships/streaming-links",
              related: "/anime/10740/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/10740/relationships/anime-productions",
              related: "/anime/10740/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/10740/relationships/anime-characters",
              related: "/anime/10740/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/10740/relationships/anime-staff",
              related: "/anime/10740/anime-staff",
            },
          },
        },
      },
      {
        id: "13881",
        type: "anime",
        links: {
          self: "/anime/13881",
        },
        attributes: {
          createdAt: "2017-09-29T18:20:02.301Z",
          updatedAt: "2024-06-24T07:11:39.692Z",
          slug: "boku-no-hero-academia-3rd-season",
          synopsis:
            "Summer is here, and the heroes of Class 1-A and 1-B are in for the toughest training camp of their lives! A group of seasoned pros pushes everyone's Quirks to new heights as the students face one overwhelming challenge after another. Braving the elements in this secret location becomes the least of their worries when routine training turns into a critical struggle for survival.\n\n(Source: Crunchyroll)",
          description:
            "Summer is here, and the heroes of Class 1-A and 1-B are in for the toughest training camp of their lives! A group of seasoned pros pushes everyone's Quirks to new heights as the students face one overwhelming challenge after another. Braving the elements in this secret location becomes the least of their worries when routine training turns into a critical struggle for survival.\n\n(Source: Crunchyroll)",
          coverImageTopOffset: 0,
          titles: {
            en: "My Hero Academia Season 3",
            en_jp: "Boku no Hero Academia 3",
            ja_jp: "僕のヒーローアカデミア３",
          },
          canonicalTitle: "Boku no Hero Academia 3",
          abbreviatedTitles: [],
          averageRating: "84.39",
          ratingFrequencies: {
            "2": "11305",
            "3": "316",
            "4": "780",
            "5": "203",
            "6": "857",
            "7": "235",
            "8": "15184",
            "9": "318",
            "10": "2544",
            "11": "655",
            "12": "4103",
            "13": "984",
            "14": "50336",
            "15": "2348",
            "16": "16900",
            "17": "3690",
            "18": "14015",
            "19": "2020",
            "20": "171878",
          },
          userCount: 463148,
          favoritesCount: 2518,
          startDate: "2018-04-07",
          endDate: "2018-09-29",
          nextRelease: null,
          popularityRank: 5,
          ratingRank: 25,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or older",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/13881/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/13881/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/13881/small.jpg",
            medium:
              "https://media.kitsu.io/anime/poster_images/13881/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/13881/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/cover_images/13881/tiny.jpg",
            large: "https://media.kitsu.io/anime/cover_images/13881/large.jpg",
            small: "https://media.kitsu.io/anime/cover_images/13881/small.jpg",
            original:
              "https://media.kitsu.io/anime/cover_images/13881/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 25,
          episodeLength: 24,
          totalLength: 600,
          youtubeVideoId: "JezE6iZUWxo",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/13881/relationships/genres",
              related: "/anime/13881/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/13881/relationships/categories",
              related: "/anime/13881/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/13881/relationships/castings",
              related: "/anime/13881/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/13881/relationships/installments",
              related: "/anime/13881/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/13881/relationships/mappings",
              related: "/anime/13881/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/13881/relationships/reviews",
              related: "/anime/13881/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/13881/relationships/media-relationships",
              related: "/anime/13881/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/13881/relationships/characters",
              related: "/anime/13881/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/13881/relationships/staff",
              related: "/anime/13881/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/13881/relationships/productions",
              related: "/anime/13881/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/13881/relationships/quotes",
              related: "/anime/13881/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/13881/relationships/episodes",
              related: "/anime/13881/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/13881/relationships/streaming-links",
              related: "/anime/13881/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/13881/relationships/anime-productions",
              related: "/anime/13881/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/13881/relationships/anime-characters",
              related: "/anime/13881/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/13881/relationships/anime-staff",
              related: "/anime/13881/anime-staff",
            },
          },
        },
      },
      {
        id: "1376",
        type: "anime",
        links: {
          self: "/anime/1376",
        },
        attributes: {
          createdAt: "2013-02-20T16:22:02.337Z",
          updatedAt: "2024-06-24T07:08:03.709Z",
          slug: "death-note",
          synopsis:
            "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm.\n\nHigh school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be.\n\nWith this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L.\n\n(Source: MAL Rewrite)",
          description:
            "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm.\n\nHigh school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be.\n\nWith this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L.\n\n(Source: MAL Rewrite)",
          coverImageTopOffset: 53,
          titles: {
            en: "Death Note",
            en_jp: "Death Note",
            en_us: "Death Note",
            ja_jp: "デスノート",
          },
          canonicalTitle: "Death Note",
          abbreviatedTitles: ["DN"],
          averageRating: "83.51",
          ratingFrequencies: {
            "2": "10331",
            "3": "237",
            "4": "903",
            "5": "203",
            "6": "876",
            "7": "177",
            "8": "17364",
            "9": "286",
            "10": "2796",
            "11": "550",
            "12": "6355",
            "13": "801",
            "14": "51055",
            "15": "1910",
            "16": "24396",
            "17": "3468",
            "18": "27512",
            "19": "2913",
            "20": "155920",
          },
          userCount: 456948,
          favoritesCount: 7022,
          startDate: "2006-10-04",
          endDate: "2007-06-27",
          nextRelease: null,
          popularityRank: 6,
          ratingRank: 42,
          ageRating: "R",
          ageRatingGuide: "Violence, Profanity",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/poster_images/1376/tiny.jpg",
            large: "https://media.kitsu.io/anime/poster_images/1376/large.jpg",
            small: "https://media.kitsu.io/anime/poster_images/1376/small.jpg",
            medium:
              "https://media.kitsu.io/anime/poster_images/1376/medium.jpg",
            original:
              "https://media.kitsu.io/anime/poster_images/1376/original.png",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/cover_images/1376/tiny.jpg",
            large: "https://media.kitsu.io/anime/cover_images/1376/large.jpg",
            small: "https://media.kitsu.io/anime/cover_images/1376/small.jpg",
            original:
              "https://media.kitsu.io/anime/cover_images/1376/original.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 37,
          episodeLength: 23,
          totalLength: 851,
          youtubeVideoId: "NlJZ-YgAt-c",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/1376/relationships/genres",
              related: "/anime/1376/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/1376/relationships/categories",
              related: "/anime/1376/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/1376/relationships/castings",
              related: "/anime/1376/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/1376/relationships/installments",
              related: "/anime/1376/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/1376/relationships/mappings",
              related: "/anime/1376/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/1376/relationships/reviews",
              related: "/anime/1376/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/1376/relationships/media-relationships",
              related: "/anime/1376/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/1376/relationships/characters",
              related: "/anime/1376/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/1376/relationships/staff",
              related: "/anime/1376/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/1376/relationships/productions",
              related: "/anime/1376/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/1376/relationships/quotes",
              related: "/anime/1376/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/1376/relationships/episodes",
              related: "/anime/1376/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/1376/relationships/streaming-links",
              related: "/anime/1376/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/1376/relationships/anime-productions",
              related: "/anime/1376/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/1376/relationships/anime-characters",
              related: "/anime/1376/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/1376/relationships/anime-staff",
              related: "/anime/1376/anime-staff",
            },
          },
        },
      },
      {
        id: "44911",
        type: "anime",
        links: {
          self: "/anime/44911",
        },
        attributes: {
          createdAt: "2021-07-19T13:34:20.876Z",
          updatedAt: "2024-06-24T06:00:10.958Z",
          slug: "kono-subarashii-sekai-ni-shukufuku-wo-3",
          synopsis:
            "The third season of Kono Subarashii Sekai ni Shukufuku wo!\n\nThe dysfunctional party is back, but they may be short a member soon ’cause Kazuma is over it. Disillusioned with adventure, he wants to become a monk, but Aqua, Megumin, and Darkness call bull. However, the career dispute gets put on hold when a princess requests to hear all about their tales. Will the taste of fame at the royal castle keep them together or will this mark their farewell tour?\n\n(Source: Crunchyroll)",
          description:
            "The third season of Kono Subarashii Sekai ni Shukufuku wo!\n\nThe dysfunctional party is back, but they may be short a member soon ’cause Kazuma is over it. Disillusioned with adventure, he wants to become a monk, but Aqua, Megumin, and Darkness call bull. However, the career dispute gets put on hold when a princess requests to hear all about their tales. Will the taste of fame at the royal castle keep them together or will this mark their farewell tour?\n\n(Source: Crunchyroll)",
          coverImageTopOffset: 0,
          titles: {
            en: "KonoSuba: God's Blessing on This Wonderful World! 3",
            en_jp: "Kono Subarashii Sekai ni Shukufuku wo! 3",
            ja_jp: "この素晴らしい世界に祝福を！新作アニメ 3",
          },
          canonicalTitle: "Kono Subarashii Sekai ni Shukufuku wo! 3",
          abbreviatedTitles: [],
          averageRating: "84.07",
          ratingFrequencies: {
            "2": "4",
            "3": "0",
            "4": "0",
            "5": "0",
            "6": "0",
            "7": "0",
            "8": "9",
            "9": "0",
            "10": "11",
            "11": "1",
            "12": "18",
            "13": "4",
            "14": "116",
            "15": "33",
            "16": "120",
            "17": "53",
            "18": "110",
            "19": "20",
            "20": "228",
          },
          userCount: 6217,
          favoritesCount: 21,
          startDate: "2024-04-10",
          endDate: "2024-06-19",
          nextRelease: null,
          popularityRank: 2292,
          ratingRank: 32,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or older",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/44911/poster_image/tiny-b780378eef6cee3fbe9c09354947d77e.jpeg",
            large:
              "https://media.kitsu.io/anime/44911/poster_image/large-8a42bb8e9658fb275a902a821a797be9.jpeg",
            small:
              "https://media.kitsu.io/anime/44911/poster_image/small-3f994e54a27ba48f15d9306456d80252.jpeg",
            medium:
              "https://media.kitsu.io/anime/44911/poster_image/medium-ee286079ae98bf0eafc9901ec2ec3424.jpeg",
            original:
              "https://media.kitsu.io/anime/44911/poster_image/04af94f3b0c7fe47f1a28c5d45737fe1.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/44911/cover_image/tiny-c5a637c9fc5bd7245cbb1b8cd3838d39.jpeg",
            large:
              "https://media.kitsu.io/anime/44911/cover_image/large-a77e327e8a133c6798e55609871f19f1.jpeg",
            small:
              "https://media.kitsu.io/anime/44911/cover_image/small-7561be507f14b72dccf784f115bd5867.jpeg",
            original:
              "https://media.kitsu.io/anime/44911/cover_image/3fe2121c534ee19d0a63d2e27356dd8c.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 11,
          episodeLength: 23,
          totalLength: 0,
          youtubeVideoId: "Meo3mO98huE",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/44911/relationships/genres",
              related: "/anime/44911/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/44911/relationships/categories",
              related: "/anime/44911/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/44911/relationships/castings",
              related: "/anime/44911/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/44911/relationships/installments",
              related: "/anime/44911/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/44911/relationships/mappings",
              related: "/anime/44911/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/44911/relationships/reviews",
              related: "/anime/44911/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/44911/relationships/media-relationships",
              related: "/anime/44911/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/44911/relationships/characters",
              related: "/anime/44911/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/44911/relationships/staff",
              related: "/anime/44911/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/44911/relationships/productions",
              related: "/anime/44911/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/44911/relationships/quotes",
              related: "/anime/44911/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/44911/relationships/episodes",
              related: "/anime/44911/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/44911/relationships/streaming-links",
              related: "/anime/44911/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/44911/relationships/anime-productions",
              related: "/anime/44911/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/44911/relationships/anime-characters",
              related: "/anime/44911/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/44911/relationships/anime-staff",
              related: "/anime/44911/anime-staff",
            },
          },
        },
      },
      {
        id: "46474",
        type: "anime",
        links: {
          self: "/anime/46474",
        },
        attributes: {
          createdAt: "2022-09-13T05:36:19.002Z",
          updatedAt: "2024-06-24T06:00:10.958Z",
          slug: "sousou-no-frieren",
          synopsis:
            "After the party of heroes defeated the Demon King, they restored peace to the land and returned to lives of solitude. Generations pass, and the elven mage Frieren comes face to face with humanity’s mortality. She takes on a new apprentice and promises to fulfill old friends’ dying wishes. Can an elven mind make peace with the nature of life and death? Frieren embarks on her quest to find out.\n\n(Source: Crunchyroll)",
          description:
            "After the party of heroes defeated the Demon King, they restored peace to the land and returned to lives of solitude. Generations pass, and the elven mage Frieren comes face to face with humanity’s mortality. She takes on a new apprentice and promises to fulfill old friends’ dying wishes. Can an elven mind make peace with the nature of life and death? Frieren embarks on her quest to find out.\n\n(Source: Crunchyroll)",
          coverImageTopOffset: 0,
          titles: {
            en: "Frieren: Beyond Journey’s End",
            en_jp: "Sousou no Frieren",
            it_it: "Frieren: Oltre la Fine del Viaggio",
            ja_jp: "葬送のフリーレン",
            ko_kr: "장송의 프리렌",
            pt_br: "Frieren e a Jornada para o Além",
            th_th: "คำอธิษฐานในวันที่จากลา Frieren",
            zh_cn: "葬送的芙莉蓮",
          },
          canonicalTitle: "Sousou no Frieren",
          abbreviatedTitles: ["Frieren at the Funeral"],
          averageRating: "87.28",
          ratingFrequencies: {
            "2": "144",
            "3": "1",
            "4": "8",
            "5": "0",
            "6": "4",
            "7": "2",
            "8": "187",
            "9": "2",
            "10": "21",
            "11": "4",
            "12": "30",
            "13": "8",
            "14": "383",
            "15": "44",
            "16": "261",
            "17": "145",
            "18": "609",
            "19": "230",
            "20": "2447",
          },
          userCount: 11389,
          favoritesCount: 276,
          startDate: "2023-09-29",
          endDate: "2024-03-22",
          nextRelease: null,
          popularityRank: 1404,
          ratingRank: 1,
          ageRating: "PG",
          ageRatingGuide: "Teens 13 or Older",
          subtype: "TV",
          status: "finished",
          tba: null,
          posterImage: {
            tiny: "https://media.kitsu.io/anime/46474/poster_image/tiny-f77201d59d7f322510e3d28bc1930e29.jpeg",
            large:
              "https://media.kitsu.io/anime/46474/poster_image/large-ec9b98dd5fbf8f92532d1edb45f9e882.jpeg",
            small:
              "https://media.kitsu.io/anime/46474/poster_image/small-2dc1165f5acd773939c7befb0949d258.jpeg",
            medium:
              "https://media.kitsu.io/anime/46474/poster_image/medium-23e1293e41a0b54b6621eb589c3f0d62.jpeg",
            original:
              "https://media.kitsu.io/anime/46474/poster_image/99d7df09d8cb9360b1e02825372ce612.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 110,
                  height: 156,
                },
                large: {
                  width: 550,
                  height: 780,
                },
                small: {
                  width: 284,
                  height: 402,
                },
                medium: {
                  width: 390,
                  height: 554,
                },
              },
            },
          },
          coverImage: {
            tiny: "https://media.kitsu.io/anime/46474/cover_image/tiny-dccb49f6ea01f1fc1f93b10b6bc2608c.jpeg",
            large:
              "https://media.kitsu.io/anime/46474/cover_image/large-167edf3e01fac59ce6aacfeb47df5634.jpeg",
            small:
              "https://media.kitsu.io/anime/46474/cover_image/small-2467fb0c4f1283988febe4abd715a9b8.jpeg",
            original:
              "https://media.kitsu.io/anime/46474/cover_image/883c308356a4db76a9c0af900ada96ed.jpg",
            meta: {
              dimensions: {
                tiny: {
                  width: 840,
                  height: 200,
                },
                large: {
                  width: 3360,
                  height: 800,
                },
                small: {
                  width: 1680,
                  height: 400,
                },
              },
            },
          },
          episodeCount: 28,
          episodeLength: 24,
          totalLength: null,
          youtubeVideoId: "qgQunxD0qCk",
          showType: "TV",
          nsfw: false,
        },
        relationships: {
          genres: {
            links: {
              self: "/anime/46474/relationships/genres",
              related: "/anime/46474/genres",
            },
          },
          categories: {
            links: {
              self: "/anime/46474/relationships/categories",
              related: "/anime/46474/categories",
            },
          },
          castings: {
            links: {
              self: "/anime/46474/relationships/castings",
              related: "/anime/46474/castings",
            },
          },
          installments: {
            links: {
              self: "/anime/46474/relationships/installments",
              related: "/anime/46474/installments",
            },
          },
          mappings: {
            links: {
              self: "/anime/46474/relationships/mappings",
              related: "/anime/46474/mappings",
            },
          },
          reviews: {
            links: {
              self: "/anime/46474/relationships/reviews",
              related: "/anime/46474/reviews",
            },
          },
          mediaRelationships: {
            links: {
              self: "/anime/46474/relationships/media-relationships",
              related: "/anime/46474/media-relationships",
            },
          },
          characters: {
            links: {
              self: "/anime/46474/relationships/characters",
              related: "/anime/46474/characters",
            },
          },
          staff: {
            links: {
              self: "/anime/46474/relationships/staff",
              related: "/anime/46474/staff",
            },
          },
          productions: {
            links: {
              self: "/anime/46474/relationships/productions",
              related: "/anime/46474/productions",
            },
          },
          quotes: {
            links: {
              self: "/anime/46474/relationships/quotes",
              related: "/anime/46474/quotes",
            },
          },
          episodes: {
            links: {
              self: "/anime/46474/relationships/episodes",
              related: "/anime/46474/episodes",
            },
          },
          streamingLinks: {
            links: {
              self: "/anime/46474/relationships/streaming-links",
              related: "/anime/46474/streaming-links",
            },
          },
          animeProductions: {
            links: {
              self: "/anime/46474/relationships/anime-productions",
              related: "/anime/46474/anime-productions",
            },
          },
          animeCharacters: {
            links: {
              self: "/anime/46474/relationships/anime-characters",
              related: "/anime/46474/anime-characters",
            },
          },
          animeStaff: {
            links: {
              self: "/anime/46474/relationships/anime-staff",
              related: "/anime/46474/anime-staff",
            },
          },
        },
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular</Text>
      <FlatList
        horizontal
        style={styles.box}
        data={animeData.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Popular anime={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#040B1C",
    padding: 15,
  },
});

export default App1;
