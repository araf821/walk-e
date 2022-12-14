import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

 
export default function Explore() {
  return (
    <ImageList sx={{ width: 500, height: "100%" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.toronto.ca/wp-content/uploads/2017/11/91fc-20160429_125607-e1509638079487.jpg',
    title: 'Pedestrian Crossing',
    author: '@hannah.plky',
  },
  {
    img: 'https://nas-national-prod.s3.amazonaws.com/rock-pigeon_002_fall_washington_andyreagochrissymcclarren_flickrcc-by-2.0_adults.jpg',
    title: 'Pigeons',
    author: '@koroishi',
  },
  {
    img: 'https://www.tripsavvy.com/thmb/z9Y4qbzs4XNjho3kyifNwI28mjQ=/4000x3000/filters:no_upscale():max_bytes(150000):strip_icc()/mables-fables-5c0180c246e0fb00010bb068.jpg',
    title: 'Bookstore',
    author: '@hellobye',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Car_Parking_lot_in_Lima%2C_Peru.jpg',
    title: 'Red Car',
    author: '@ismailyk12',
  },
  {
    img: 'https://toronto.citynews.ca/wp-content/blogs.dir/sites/10/2017/12/12/CTCN_ROUNDABOUT_2017DEC12_01.jpg',
    title: 'Roundabout',
    author: '@jdhrkl',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/EasternGraySquirrel_GAm.jpg',
    title: 'Squirrel',
    author: '@karakartal06',
  },
  {
    img: 'https://www.lasalle.ca/en/our-community/resources/Crossovers/Stop-for-Pedestrians---Crossover-with-Flashing-Lights-Twitter-2022.jpg',
    title: 'Pedestrian Crossing',
    author: '@hannah.plky4',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG',
    title: 'Pigeons',
    author: '@koroishi4',
  },
  {
    img: 'https://techcrunch.com/wp-content/uploads/2016/01/a-real-bookstore.jpg',
    title: 'Bookstore',
    author: '@hellobye4',
  },
  {
    img: 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2017/11/931/506/010214_carreport_640.jpg?ve=1&tl=1',
    title: 'Red Car',
    author: '@ismailyk124',
  },
  {
    img: 'https://www.surrey.ca/sites/default/files/styles/21x9_1100w/public/2022-01/TrafficCircle.JPG?h=743579b7&itok=VVPa6eNh',
    title: 'Roundabout',
    author: '@jdhrkl4',
  },
  {
    img: 'https://www.eekwi.org/sites/default/files/2019-11/greysquirrel.jpg',
    title: 'Squirrel',
    author: '@karakartal064',
  },
];
