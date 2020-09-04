import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Tamil" />
            <div className="content text">
              <p className={styles.block_207}>Transcription quality</p>
              <p className={styles.block_208}>
                The following general rules must be obeyed at all times when
                transcribing.
              </p>
              <p className={styles.block_209}>Typo</p>
              <p className={styles.block_210}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p className={styles.block_211}>
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_212}>
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p className={styles.block_213}>
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.
              </p>
              <p className={styles.block_214}>
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_215}>
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.
              </p>
              <p className={styles.block_216}>
                Use only one space between words and sentences.
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
