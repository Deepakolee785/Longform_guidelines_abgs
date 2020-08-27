import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const CorrrectIncorrect = ({
  correctText,
  incorrectText,
  audioText,
  explainationText,
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Divider />
      <div className={classes.root}>
        <div className={classes.divSection}>
          {correctText && (
            <p className="blue-text">
              <span className="capital">correct</span>:{' '}
              <span>{correctText}</span>
            </p>
          )}
          {incorrectText && (
            <p className="gray-text">
              <span className="capital">Incorrect</span>:{' '}
              <span>{incorrectText}</span>
            </p>
          )}
        </div>
        <div className={classes.divSection}>
          {audioText && (
            <p>
              <em className="capital">Example Audio</em>:{' '}
              <span> {audioText}</span>
            </p>
          )}
          {explainationText && (
            <p className="gray-text">
              <em className="capital">Explanation</em>:{' '}
              <span>{explainationText}</span>
            </p>
          )}
        </div>
      </div>
      <Divider />
      {/* <br /> */}
    </Fragment>
  )
}

// props checking
CorrrectIncorrect.prototype = {
  correctText: PropTypes.string,
  incorrectText: PropTypes.string,
  audioText: PropTypes.string,
  explainationText: PropTypes.string,
}

export default CorrrectIncorrect

//styles
const useStyles = makeStyles(() => ({
  root: {
    lineHeight: '1.22rem',
    fontSize: '0.86rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  divSection: {
    width: '45%',
  },
}))
