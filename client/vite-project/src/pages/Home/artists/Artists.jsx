import React, { useState } from 'react';
import './Artists.css';

function Artists() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const artistsCount = artists.length;

  const scrollLeft = () => {
    setScrollPosition((scrollPosition - 3 + artistsCount) % artistsCount);
  };

  const scrollRight = () => {
    setScrollPosition((scrollPosition + 3) % artistsCount);
  };

  const getArtistsToDisplay = () => {
    const artistsToDisplay = [];
    const startIndex = scrollPosition % artists.length;
    let count = 0;

    while (count < 3) {
      artistsToDisplay.push(artists[startIndex + count]);
      count++;
    }

    return artistsToDisplay;
  };

  return (
    <div className="artistC">
      <div className='order'>
         <h3 className="titleOurArtists">OUR ARTISTS</h3>
      <div className="line11">
       
      {getArtistsToDisplay().map((artist, index) => (
  <div className="imgArtist" key={index}>
    <div>
      <img className="imgA" src={artist.image} alt={artist.name}></img>
    </div>
    <div className="artistName">{artist.artistName}</div>
  </div>
))}
      </div></div>
      <div className="scrollButtons">
        <button className="scrollButton" onClick={scrollLeft}> ←</button>
        <button className="scrollButton" onClick={scrollRight}>
        →
        </button>
      </div>
    </div>
  );
}

const artists = [
  { name: 'David Guetta', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/David_Guetta_live_%40_MTV_EMA_2018.png/220px-David_Guetta_live_%40_MTV_EMA_2018.png' , artistName: 'David Guetta' },
  { name: 'LMartin Garrix', image: 'https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTUyOTYxMzkzOTcxMTc3MDgw/martin-garrix.jpg' , artistName: 'Steve Aoki'},
  { name: 'Armin van Buuren', image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Armin_Van_Buuren_2.jpg' , artistName:'Armin van Buuren'},
  { name: 'Tiësto', image: 'https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgzNTczMTg1MjMxMzk4MzA2/tiesto-821-2.jpg', artistName:'Tiësto' },
  { name: 'Dimitri Vegas & Like Mike', image: 'https://p16.resso.me/img/tos-alisg-i-0000/bee3afe038774bcf9d3fadfe2dd9a09d~c5_750x750.jpg', artistName: 'Dimitri Vegas & Like Mike'},
  { name: 'Amber_Broos', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amber_broos-1630433763.jpg/266px-Amber_broos-1630433763.jpg' , artistName:'Amber_Broos'},
  { name: 'Afrojack', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeoF6wYHgsjMIPoPqw-Sjp3LrbiW5HysvRdHBi2rKXGEeenEcbTj1qGeAyarluUVdvMg&usqp=CAU' , artistName:'Armin van Buuren'},
  { name: 'Steve Aoki', image: 'https://s.yimg.com/ny/api/res/1.2/cCrjItaH0nmWv0yIxg4sIg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/coindesk_75/b1dc09144bae09053b4e686ca9fb8e7b' , artistName:'Martin Garrix'},
  { name: 'Hardwell', image: 'https://www.youredm.com/wp-content/uploads/2016/03/HardwellColumbusEDM-26.jpg' , artistName:'Marshmello'},
];

export default Artists;