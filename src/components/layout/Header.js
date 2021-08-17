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
import axios from 'axios';


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
    backgroundColor:'#9E1818',
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
  const [openApply, setOpenApply] = React.useState(false);

  const [data, setData] = React.useState([])
  const [detail, setDetail] = React.useState([])

  const [loading, setLoading] = React.useState(true)
  const [loadingDetail, setLoadingDetail] = React.useState(true)


  const [isActive, setIsactive] = useState(false);

    const [ids, setId] = React.useState([])

    const [files, setFile] = React.useState([])
    const [exp, setExp] = React.useState([])

    const [job_name, setJob] = React.useState([])

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


  const ApiData = () => {

    axios({
      method: 'get',
      url: 'https://sustained-truck-318614.de.r.appspot.com/jobsapi/',
      })
        .then((result) => {
          setLoading(false)
          setData(result.data)
        })
        .catch((error) => {
          console.log(error)
        })

  }

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
    ApiData()
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const jobDetail = (id) => {

    axios({
      method: 'POST',
      url: 'https://sustained-truck-318614.de.r.appspot.com/jobsapi/',
      data: {
        id : id
      }
    })
        .then((result) => {
          console.log(result.data)
          setDetail(result.data)
          setLoadingDetail(false)
        })
        .catch((error) => {
          console.log(error)
        })

  };

  const handleOpenJob = (id) => {
    jobDetail(id);
    setOpenJob(true);
  };
  const handleCloseJob = () => {
    setOpenJob(false);
  };

  const handleOpenApply = (id, name) => {
    setOpenApply(true);
    setId(id)
      setJob(name)
  };

  const handleCloseApply = () => {
    setOpenApply(false);
  };


  const postData = (e) => {
    e.preventDefault()
    const { name, email, phone, pos, org, prev, quali ,state, city} = e.target.elements

      console.log(files)


      const forms = new FormData();
        forms.append('name', name.value)
          forms.append('email',email.value)
          forms.append('phone',phone.value)
          forms.append('pos',pos.value)
          forms.append('exp',exp)
          forms.append('org',org.value)
          forms.append('prev',prev.value)
          forms.append('quali',quali.value)
          forms.append('state',state.value)
          forms.append('city',city.value)
          forms.append('file',files, files.name)
          forms.append('job_id',job_name)

      axios({
          method:'POST',
          url:'https://sustained-truck-318614.de.r.appspot.com/applyapi/',
          data:forms
      })
          .then((r) => {
              console.log(r)
          })
          .catch((e) => {
              console.log(e)
          })
  }

  const getImage = (e) => {
    setFile(e.target.files[0])
  }

  const getChoose = (e) => {
    setExp(e.target.value)
  }

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
                        <a href={"home"} className="menu" onClick={closeMenu}>HOME</a>
                      </li>
                      <li>
                        <a href={"#about"} className="menu" onClick={closeMenu}>ABOUT US</a>
                      </li>
                      <li>
                        <Link className="menu" onClick={closeMenu} onClick={handleClickOpen}>JOB VACANCY</Link>
                      </li>
                      <li>
                        <a href={"#client"} className="menu" onClick={closeMenu}>CLIENT</a>
                      </li>
                      <li>
                        <a href={"#contact"} className="menu" onClick={closeMenu}>CONTACT</a>
                      </li>

                    </ul>
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

        <div className="row pt-5 ml-1 mr-1" id="job_vacan">

          {loading ? (
              <> <h1>Loading ....</h1>  </>
          ) : (
              <>
                {data.map((item, index) => {
                  return(
                      <>

                        <div className="col-sm-6">
                          <div className={classes.root} className="card" id="job_card">
                            <div className="card-body">
                              <div>
                                <span className="job_name"> {item.name} </span>
                              </div>
                              <hr />

                              <div className="row">
                                <div className="col-sm-3">
                                  <span className="salary_head"> Salary </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.salary} </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_head"> LOCATION </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.location} </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-3">
                                  <span className="salary_head"> VACANCY </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.vacancy} </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_head"> QUALIFICATION </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.qualification} </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-3">
                                  <span className="salary_head"> EXPERIENCE </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value">
                                    {item.exp}</span>
                                </div>
                              </div>
                              <hr/>

                              <div className="row">
                                <div className="col-sm-6">
                                  <button className="read_more" onClick={() => handleOpenJob(item.id)}> Read More  </button>
                                </div>
                                <div className="col-sm-6">
                                  <button className="apply_button" onClick={() => handleOpenApply(item.id, item.name)}> Apply Now </button>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                      </>
                  )
                })}

              </>
          )}


          
          
        </div>
      </Dialog>

{/* =========================================================================================================================================== */}

      <Dialog fullScreen open={openJob} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseJob} aria-label="close">
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="row mt-5 ml-1 mr-1">

          {loadingDetail ? (
              <> <h1> Loading .....  </h1> </>
          ) : (
              <>

                {detail.map((item, index) => {
                  return(
                      <>

                        <div className="col-sm-12">
                          <Card className={classes.root}>
                            <CardContent >
                              <div>
                                <span className="job_name"> {item.name} </span>
                              </div>
                              <hr />

                              <div className="row">
                                <div className="col-sm-3">
                                  <span className="salary_head"> Salary </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.salary} </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_head"> LOCATION </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.location} </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-3">
                                  <span className="salary_head"> VACANCY </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.vacancy} </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_head"> QUALIFICATION </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value"> {item.qualification} </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-3">
                                  <span className="salary_head"> EXPERIENCE </span>
                                </div>
                                <div className="col-sm-3">
                                  <span className="salary_value">
                                    {item.exp}</span>
                                </div>
                              </div>
                              <hr/>

                              <div className="row">
                                <div className="col-sm-12">
                                  <span className="salary_head"> DETAILS </span>
                                </div>
                                <div className="col-sm-12">
                                  <span> {item.detail} </span>
                                </div>
                              </div>
                              <hr/>

                              <div className="row">
                                <div className="col-sm-6">
                                  <button className="apply_button" onClick={() => handleOpenApply(item.id, item.name)}> Apply Now </button>
                                </div>
                              </div>

                            </CardContent>
                          </Card>
                        </div>

                      </>
                  )
                })}

              </>
          )}

          
        </div>
      </Dialog>

{/* =========================================================================================================================================== */}


      <Dialog fullScreen open={openApply} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseApply} aria-label="close">
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="row mt-5 ml-1 mr-1">
          <div className="col-sm-12">
            <Card className={classes.root}>
              <CardContent >
                  <span className={"job_name"}> Job Name </span>
                  <hr />
                  <form onSubmit={postData}>
                  <div className="row">



                      <div className="col-sm-6">
                        <input type="text" required className="form-control" name="name" placeholder="Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="email" required className="form-control" name="email" placeholder="Email" />
                      </div>

                      <div className="col-sm-6 mt-2">
                        <input type="tel" required className="form-control" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col-sm-6 mt-2">
                        <input type="text" required className="form-control" name="pos" placeholder="Apply Position" />
                      </div>

                      <div className="col-sm-6 mt-2">
                        <select class="form-control" required id="exampleFormControlSelect1" onChange={getChoose} name={"exp"}>
                          <option value="fresher_experience"> Fresher / Experience </option>
                          <option value="fresher"> Fresher </option>
                          <option value="experience"> Experience </option>
                        </select>
                      </div>

                      <div className="col-sm-6 mt-2">
                        <input type="text" required className="form-control" name="org" placeholder="Current Organization" />
                      </div>

                      <div className="col-sm-6 mt-2">
                        <input type="text" required className="form-control" name="prev" placeholder="Current / Previous Salary" />
                      </div>

                      <div className="col-sm-6 mt-2">
                        <input type="text" required className="form-control" name="quali" placeholder="Highest Qualififcation" />
                      </div>

                      <div className="col-sm-6 mt-2">
                          <input type="text" required className="form-control" name="state" placeholder="State" />
                      </div>

                      <div className="col-sm-6 mt-2">
                        <input type="text"  required className="form-control" name="city" placeholder="City" />
                      </div>

                      <div className="col-sm-12 mt-2">
                        <input type="file" required className="form-control" name="resume" onChange={getImage} />
                      </div>

                      <div className="col-sm-12 mt-2">
                      <hr />
                        <button type={"submit"} className="apply_button"> Apply Now </button>
                      </div>


                  </div>
                  </form>
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