import React from 'react'
import './ProjectCarousel.scss'
import { ClickAwayListener, makeStyles } from '@material-ui/core'
import ResponsiveCarousel from '../ResponsiveCarousel'
import slideData from '../../resources/projects'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  modalContainer: {
    height: '100%',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    maxWidth: '100%'
  }
}));

// const slideData = [
//   {
//     index: 0,
//     title: 'New Fashion Apparel',
//     button: 'Shop now',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
//   },
//   {
//     index: 1,
//     title: 'In The Wilderness',
//     button: 'Book travel',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
//   },
//   {
//     index: 2,
//     title: 'For Your Current Mood',
//     button: 'Listen',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
//   },
//   {
//     index: 3,
//     title: 'Focus On The Writing',
//     button: 'Get Focused',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
//   }
// ]


// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = React.createRef()
  }

  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }

  imageLoaded(event) {
    event.target.style.opacity = 1
  }

  render() {
    const { button, title, index } = this.props.slide
    const src = this.props.slide.images[0]
    const current = this.props.current
    let classNames = 'slide'

    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={title}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <article className="slide__content">
          <h2 className="slide__headline">{title}</h2>
        </article>
      </li>
    )
  }
}


// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}

// =========================
// Modal
// =========================

const Modal = ({ current, handleClose }) => {
  const classes = useStyles()
  return (
    <div>
      <div id="myModal" class="modal">
        {/*<ClickAwayListener onClickAway={handleClose}>*/}
        <div className={classes.modalContainer}>
          <ChevronLeftIcon />
          <div className={classes.modal}>
            <span class="close" onClick={handleClose}>&times;</span>
            <p>Some text in the Modal..</p>
            <ResponsiveCarousel images={slideData[current].images} />
          </div>
          <ChevronRightIcon />
        </div>
        {/*</ClickAwayListener>*/}
      </div>
    </div>
  )
}


// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      modal: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
  }

  handlePreviousClick() {
    const previous = this.state.current - 1

    this.setState({
      current: (previous < 0)
        ? this.props.slides.length - 1
        : previous
    })
  }

  handleClose() {
    this.setState({ modal: false })
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: (next === this.props.slides.length)
        ? 0
        : next
    })
  }

  handleSlideClick(index) {
    console.log('clicked', index)
    if (this.state.current !== index) {
      this.setState({
        current: index
      })
    } else {
      this.setState({
        modal: true
      })
    }
  }

  render() {
    const { current, direction, modal } = this.state
    const { slides, heading } = this.props
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)`
    }

    return (
      <div>
        {modal && <Modal current={current} handleClose={this.handleClose} />}
        <div className='slider' aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} class="visuallyhidden">{heading}</h3>

            {slides.map((slide, i) => {
              return (
                <Slide
                  key={i}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              )
            })}
          </ul>

          <div className="slider__controls">
            <SliderControl
              type="previous"
              title="Go to previous slide"
              handleClick={this.handlePreviousClick}
            />

            <SliderControl
              type="next"
              title="Go to next slide"
              handleClick={this.handleNextClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

function ProjectCarousel() {
  return <Slider heading="Example Slider" slides={slideData} />
}

export default ProjectCarousel