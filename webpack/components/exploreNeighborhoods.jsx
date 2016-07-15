import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 30
  },
  gridList: {
    width: 900,
    height: 800,
    overflow: 'auto',
    marginBottom: 24,
    opacity: 0.7, 
  },
};

const tilesData = [
  {
    img:'https://a1.muscache.com/locations/uploads/neighborhood/hero/926/0_4910_194_2329_hero_Austin_-_Hyde_Park_-_1.jpg', 
    title: 'Austin',
    author: 'Hyde Park',
  },
  {
    img: 'https://a2.muscache.com/locations/uploads/photo/image/22327/0_4200_0_2800_one_silver-lake-shopping-street-yellow-road-bike-devon0046.jpg',
    title: 'Los Angeles',
    author: 'Silver Lake',
  },
  {
    img:'http://www.urbancondospaces.com/wp-content/blogs.dir/1/files/2010/01/QA.profile.31.jpg', 
    title: 'Seattle',
    author: 'Queen Anne',
  },
   {
    img:'https://a2.muscache.com/locations/uploads/photo/image/2799/0_4200_84_2716_two_marcolivierleblanc_9270.jpg', 
    title: 'San Francisco',
    author: 'The Castro',
  },
  {
    img:'http://c8.alamy.com/comp/E4JMY4/restaurants-on-depasquale-square-off-atwells-avenue-federal-hill-district-E4JMY4.jpg', 
    title: 'Providence',
    author: 'Federal Hill',
  },
  {
    img: 'https://a0.muscache.com/locations/uploads/neighborhood/hero/888/0_3000_169_1473_hero_Boston_-_Harvard_Square_-_1.jpg', 
    title: 'Boston',
    author: 'Harvard Square',
  },
];

const ExploreNeighborhoods = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={220}
      style={styles.gridList}
    >
      <Subheader><h5 className="center"><i className="tiny material-icons">grade</i>Feautured Neighborhoods<i className="tiny material-icons">grade</i></h5></Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default ExploreNeighborhoods;