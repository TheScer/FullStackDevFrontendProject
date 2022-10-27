import React from "react";
import { NewsItem } from "./NewsItem";

export const NewsList = (props) => {
  const newsItems = [
    {
      id: 1,
      by: "muhfukah",
      title: "craaaazy story name",
      url: "https://swurl.com/?q=Paul+Graham+y+combinator",
    },
    {
      id: 2,
      by: "muhfukah2",
      title: "craaaazy story name2",
      url: "tuni.fi",
    },
    {
      id: 3,
      by: "muhfukah3",
      title: "craaaazy story name3",
      url: "https://tamko.fi/tamko-in-english/",
    },
  ];

  /*

  OSCAR!!

  This is the object NewsList will now receive make handler accordingly 
  {
    "by": "lukehollis",
    "descendants": 194,
    "id": 33357197,
    "kids": [
        33359797,
        33363948,
        33358826,
        33361529,
        33361544,
        33360747,
        33358183,
        33363853,
        33359891,
        33359455,
        33357735,
        33363566,
        33360398,
        33362283,
        33363394,
        33362970,
        33360086,
        33363536,
        33360894,
        33359092,
        33360356,
        33361461,
        33362887,
        33362791,
        33358004,
        33360524,
        33361897,
        33361158,
        33363125,
        33358082,
        33358960,
        33360806,
        33359789,
        33362061,
        33363118,
        33361080,
        33358475,
        33359385,
        33358574,
        33360426,
        33358416,
        33363420,
        33361220,
        33361081,
        33357939,
        33357878,
        33357854,
        33358344,
        33362179,
        33358820,
        33358551,
        33359370,
        33358778,
        33363548,
        33359077,
        33359762,
        33362452,
        33358477,
        33361442,
        33359442,
        33358053,
        33358530,
        33360290,
        33358708,
        33360175,
        33359222,
        33360381,
        33358264,
        33357898,
        33359667,
        33357988,
        33360959,
        33358237,
        33358060,
        33358844,
        33360429,
        33359056,
        33359386,
        33363117,
        33357952,
        33358591
    ],
    "score": 973,
    "text": "Hey HN, I 3d scanned the interior of the Great Pyramid &#x2F; Khufu&#x27;s pyramid for the Giza Project this summer and just finished the guided version to share. Would love feedback and&#x2F;or problems you encounter.<p>I used both a Leica BLK 360 and Matterport Pro 2 to do the scanning and the Matterport SDK for the web viewer. Matterport&#x27;s web display with Three.js has been the most accessible to a wide audience in the past (previous iterations are in Unity and Unreal, but difficult to download over slower connections).<p>I&#x27;ve been interviewing social studies teachers around the 6th grade level to create teaching materials as well, and these along with other monuments that I&#x27;ve scanned at Giza are up at <a href=\"https:&#x2F;&#x2F;giza.mused.org&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;giza.mused.org&#x2F;</a><p>Cheers from Cairo--and thanks for any feedback.",
    "time": 1666877485,
    "title": "Show HN: I 3D scanned the interior of the Great Pyramid at Giza",
    "type": "story",
    "url": "https://giza.mused.org/en/guided/266/inside-the-great-pyramid"
}

  */

// SOME JSX error for u to fix - https://sentry.io/answers/unique-key-prop/


  return (
    //console.log(props.news),
    <div>
      <ul>
        {/* testing for now, will change it to props.newsItems or destructure after */}
        {props.news.map((item) => (
          <NewsItem
            by={item.by}
            id={item.id}
            title={item.title}
            url={item.url}
            time={item.time}
          />
        ))}
      </ul>
    </div>
  );
};
