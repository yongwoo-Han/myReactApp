import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import * as common from '../api/Common';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {

    width: 500,
    height: 450,
    marginTop: '20px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));


const callApi = async(setState) => {

  let response = await common.axiosPost("http://localhost:8080/api/searchPerformanceList");
  setState({
      isLoading: true,
      info : response.body.msgData
  });
};

function SearchPerformance(){
  
  const classes = useStyles();
  const [state, setState] = useState({
    info : {
      perforList:[]
    }
  });

  useEffect(()=> {
    callApi(setState);
  }, [])
  
  return (
      <div className={classes.root}>
          {state.info.perforList.map((data, i) => {
              return (
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={data.thumbnail}
                      title={data.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              );
          })}
      </div>
  );
}

// function SearchPerformance() {
//     const useStyles = makeStyles(theme => ({
//         root: {
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-around',
//           overflow: 'hidden',
//           backgroundColor: theme.palette.background.paper,
//         },
//         gridList: {
//           width: 500,
//           height: 450,
//           marginTop: '20px',
//         },
//         icon: {
//           color: 'rgba(255, 255, 255, 0.54)',
//         },
//         content: {
//           flexGrow: 1,
//           height: '100vh',
//           overflow: 'auto',
//         },
//       }));

      
//     const classes = useStyles();
//     const [state, setState] = useState(true);

//     const callApi = async() => {

//       let response = await common.axiosPost("http://localhost:8080/api/searchPerformanceList");
//       setState({
//           isLoading: true,
//           info : response.body.msgData
//       });
      
//     };
    

//     callApi(setState);
//     const { info = {perforList:[]} } = state;
//     return (
//         <div className={classes.root}>
//           <GridList cellHeight={180} className={classes.gridList}>
//             <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//               <ListSubheader component="div">December</ListSubheader>
//             </GridListTile>
//           </GridList>
//             {info.perforList.map((data, i) => {
//                 return (
//                   <GridListTile>
//                     <GridListTileBar
//                       title={data.title}
//                       subtitle={<span>by: {data.author}</span>}
//                       // actionIcon=
//                       // {
//                       //   <IconButton className={classes.icon}>
//                       //     <InfoIcon />
//                       //   </IconButton>
//                       // }
//                     />
//                     {/* <span key={i}>{data.title}<br/></span> */}
//                   </GridListTile>
//                 );
//             })}
//         </div>
//     );
// };

export default SearchPerformance;