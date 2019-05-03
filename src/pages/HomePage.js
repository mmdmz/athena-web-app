import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'	;
import Typography from '@material-ui/core/Typography'	;
import Grid from '@material-ui/core/Grid'	;
import Navbar from '../components/Navbar'
import Notifications from '../components/Notifications'
import Calendar from '../components/Calendar'
import firebase from '../firebase'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import lums from './lums.jpg';
import iba from './iba.jpg';
import UCP from './UCP.jpg';


const styles = theme => ({
  root: {
    width: '30%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: '1px',
  },
  paperUni: {
   
    alignItems: 'left',
    padding: '1px',
    boxShadow: '2px 2px grey',
   
  },
  calendar:{
    marginTop: theme.spacing.unit * 8,
  },
  greeting:{
    marginTop: '5%',
    marginLeft: '35%'
  },
  roottt: {
  	width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  
    justify: 'space-evenly',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
     color: theme.palette.primary.light,
    //  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  pictures: {
  position: 'absolute',
  top: '370px',

	},
	uniimg: {
		height: '300px',
		width: '600px',
		boxShadow: '5' ,
		boxShadow: '10',
	},

});





const tileData = [
{
  img: lums,
  title: 'LUMS',
  
},
	 {
  img: UCP,
  title: 'UCP',

},
 {
  img: iba,
  title: 'IBA',
},

];




class HomePage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const { classes } = this.props
		return (
			<div>
		    	<Navbar/>
					<Typography className = {classes.greeting}component="h2" variant="h3">
	        			Hi, {this.name ? this.name.split(' ')[0] : ''}
	      			</Typography>
	      			<Grid container = {true}>
					<Grid item = {true} xs = {12}>
						<div className={classes.root}>
						<Paper className={classes.paper}>
							<Notifications/>
						</Paper>
						</div>
						<div  className={classes.roottt} >
							<div className={classes.paperUni}>	
								<Paper>
									<Typography variant="h5" align='center' style={{ color: '64b5f6'}}>
						        			Partnered Universities
						      		</Typography>
					      		</Paper>
					      	</div>

					      <GridList className={classes.gridList} cellHeight={'auto'} col={1} row={1}>

					        {tileData.map(tile => (
					          <GridListTile key={tile.img}>
					            <img className={classes.uniimg} src={tile.img} alt={tile.title} />
					            <GridListTileBar
					              title={tile.title}
					              classes={{
					                root: classes.titleBar,
					                title: classes.title,
					              }}
					              // actionIcon={
					              //   <IconButton>
					              //     <StarBorderIcon className={classes.title} />
					              //   </IconButton>
					              // }
					            />
					          </GridListTile>
					        ))}
					      </GridList>
				    	</div>
					</Grid>
				</Grid>
			</div>
		
		
    	
		)
	}
}

/*<Grid item = {true} xs = {4}>
		<div className = {classes.calendar} >
			<Calendar/>
		</div>
</Grid>*/

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage)