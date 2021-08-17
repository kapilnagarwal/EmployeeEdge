import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openJob, setOpenJob] = React.useState(false);

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes_value = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleOpenJob = () => {
    setOpenJob(true);
  };

  const handleCloseJob = () => {
    setOpenJob(false);
  };

  return (
    <>
      <header
        {...props}
        className={classes_value}
      >
        <div className="container menu-header">
          <div className={
            classNames(
              'site-header-inner',
              bottomDivider && 'has-bottom-divider'
            )}>
            <Logo />
            {!hideNav &&
              <>
                <button
                  ref={hamburger}
                  className="header-nav-toggle"
                  onClick={isActive ? closeMenu : openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={nav}
                  className={
                    classNames(
                      'header-nav',
                      isActive && 'is-active'
                    )}>
                  <div className="header-nav-inner">
                    <ul className={
                      classNames(
                        'list-reset text-xs',
                        navPosition && `header-nav-${navPosition}`
                      )}>
                      <li>
                        <Link className="menu" to="#0" onClick={closeMenu}>HOME</Link>
                      </li>
                      <li>
                        <Link className="menu" to="#0" onClick={closeMenu}>ABOUT US</Link>
                      </li>
                      <li>
                        <Link className="menu" to="#0" onClick={closeMenu} onClick={handleClickOpen}>JOB VACANCY</Link>
                      </li>
                      <li>
                        <Link className="menu" to="#0" onClick={closeMenu}>CLIENT</Link>
                      </li>
                      <li>
                        <Link className="menu" to="#0" onClick={closeMenu}>TESTIMONIALS</Link>
                      </li>
                      <li>
                        <Link className="menu" to="#0" onClick={closeMenu}>CONTACT</Link>
                      </li>

                    </ul>
                    {/* {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="#0" className="button button-header button-wide-mobile button-sm" onClick={closeMenu}>FREE CONSULTATION</Link>
                      </li>
                    </ul>} */}
                  </div>
                </nav>
              </>}

          </div>

        </div>
      </header>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="row pt-5 ml-3 mr-1" id="job_vacan">
          <div className="col-sm-6">
            <div className="client_list">
              <div className="row">
                <div className="col-sm-12 text_area">
                  <h4 className="pl-3">Job Name </h4>
                  <div className="row pl-3">
                    
                    
                    <div className="col-6">
                      <p className="salary_head"> <i class="fa fa-suitcase" aria-hidden="true"></i> Salary </p>
                      <p className="salary_value"> 10LPA </p>
                    </div>
                    <div className="col-6">
                      <p className="salary_head"> <i class="fa fa-map-marker" aria-hidden="true"></i> Location </p>
                      <p className="salary_value"> Delhi </p>
                    </div>
                    <div className="col-6">
                      <p className="salary_head"> <i class="fa fa-list-ol" aria-hidden="true"></i> Vacancy </p>
                      <p className="salary_value"> 1 </p>
                    </div>
                    <div className="col-6">
                      <p className="salary_head"> <i class="fa fa-clock-o" aria-hidden="true"></i> Exp </p>
                      <p className="salary_value"> 1 </p>
                    </div>

                    <div className="col-12">

                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Dialog>



      <Dialog fullScreen open={openJob} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseJob} aria-label="close">
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="row mt-5 ml-1 mr-1">
          <div className="col-sm-4">
            <Card className={classes.root}>
              <CardContent >
                <div>
                  <h6 className="job_name"> Job Name </h6>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-6">
                    <span className="salary_head"> Salary </span>
                  </div>
                  <div className="col-sm-6">
                    <span> 15 LPA </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <span className="salary_head"> LOCATION </span>
                  </div>
                  <div className="col-sm-6">
                    <span> DELHI </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <span className="salary_head"> VACANCY </span>
                  </div>
                  <div className="col-sm-6">
                    <span> +5 </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <span className="salary_head"> QUALIFICATION </span>
                  </div>
                  <div className="col-sm-6">
                    <span> MCA </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <span className="salary_head"> EXPERIENCE </span>
                  </div>
                  <div className="col-sm-6">
                    <span> 1-2 year </span>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-12">
                    <span className="salary_head"> DETAILS </span>
                  </div>
                  <div className="col-sm-12">
                    <span> Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever. </span>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-6">
                    <button className="read_more"> Read More  </button>
                  </div>
                  <div className="col-sm-6">
                    <button className="apply_button"> Apply Now </button>
                  </div>
                </div>


              </CardContent>
            </Card>
          </div>

        </div>
      </Dialog>



    </>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
