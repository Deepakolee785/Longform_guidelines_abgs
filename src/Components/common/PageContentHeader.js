import React, { Fragment, useState } from 'react'
import Rating from '@material-ui/lab/Rating'
import WarningIcon from '@material-ui/icons/Warning'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

const PageContentHeader = () => {
  const [value, setValue] = useState(2)
  return (
    <Fragment>
      <div className="warning-msg">
        <WarningIcon />
        <p>
          <strong>Confidential material:</strong>
          This page is confidential. Do not share or discuss until authorized to
          do so.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '3rem 0',
        }}
      >
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          style={{ fontSize: '0.85rem' }}
        >
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link
            color="inherit"
            href="/"
            // onClick={handleClick}
          >
            Products
          </Link>
          <Typography
            color="textPrimary"
            style={{ fontSize: '0.85rem', fontWeight: 400 }}
          >
            longform nl_nl_test_set
          </Typography>
        </Breadcrumbs>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
      </div>
    </Fragment>
  )
}

export default PageContentHeader
