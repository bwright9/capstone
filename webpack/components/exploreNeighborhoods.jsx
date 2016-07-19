import React from 'react';
import { Link } from 'react-router';
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
    width: 1000,
    height: 800,
    overflow: 'auto',
    marginBottom: 24,
  },
  tile_img: {
    opacity: 0.5,
  }
};



const tilesData = [
  {
    img: "assets/neighborhoods/hyde_park.jpg", 
    title: 'Austin',
    author: 'Hyde Park',
    url: 'austin',
  },
  {
    img: "assets/neighborhoods/silver_lake.jpg",
    title: 'Los Angeles',
    author: 'Silver Lake',
    url: 'silverlake',
  },
  {
    img: "assets/neighborhoods/queen_anne.jpg", 
    title: 'Seattle',
    author: 'Queen Anne',
    url: 'queenanne',
  },
   {
    img: "assets/neighborhoods/castro.jpg", 
    title: 'San Francisco',
    author: 'The Castro',
    url: 'thecastro',
  },
  {
    img: "assets/neighborhoods/federal_hill.jpg",
    title: 'Providence',
    author: 'Federal Hill',
    url: 'federalhill',
  },
  {
    img: "assets/neighborhoods/harvard_square.jpg",
    title: 'Boston',
    author: 'Harvard Square',
    url: 'harvardsquare',
  },
];

const ExploreNeighborhoods = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={250}
      style={styles.gridList}
      >
      <Subheader><h5 className="center"><i className="tiny material-icons">grade</i>Feautured Neighborhoods<i className="tiny material-icons">grade</i></h5></Subheader>
      {tilesData.map((tile) => (
        <Link to={tile.url}>
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} style={styles.tile_img}/>
        </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

export default ExploreNeighborhoods;