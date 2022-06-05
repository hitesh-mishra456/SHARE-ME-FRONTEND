import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '170px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    width: '12em',
    overflow: 'hidden',
    textOverflow:'ellipsis',
  },
  cardActions: {
    padding: '4px 0px 4px 16px',
    // display: 'flex',
    // alignContent:'stretch',
    // justifyContent: 'flex-end',
  },
  userNameDisplay:{
    marginRight:'17%',
    fontSize:'1rem'
  },
  cardAction: {
    display: 'inline-block',
    textAlign: 'initial',
  },
});
