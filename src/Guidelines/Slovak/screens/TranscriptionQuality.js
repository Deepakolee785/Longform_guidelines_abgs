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
            <PageContentHeader currentPage="Longform Slovak" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_218}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_219}>
                  Correct: Skontrolujte, či som na Facebook.
                </p>
                <p className={styles.block_220}>
                  Incorrect: Skontrolujte, či som na Facebok.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_223}>Correct: Rada počúvam rock.</p>
                <p className={styles.block_224}>Incorrect: Rada počúvam rok.</p>
                <p className={styles.block_225}>
                  Correct: Plod arónie obsahuje veľa C vitamínu.
                </p>
                <p className={styles.block_226}>
                  Incorrect: Plot arónie obsahuje veľa C vitamínu.
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_229}>
                  Correct: 3,49 € je priveľa za čokoládu.
                </p>
                <p className={styles.block_230}>
                  Incorrect: 349 je priveľa za čokoládu.
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tri štyridsaťdeväť je priveľa za{' '}
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_1}>čokoládu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_233}>
                  Explanation: Implied currency, add € even
                </p>
                <p className={styles.block_234}>though not spoken.</p>
                <p className={styles.block_235}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_4}>
                    Correct: Koľko je tam malín čučoriedok?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_237}>themselves after "malín".</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_241}>
                  Correct: Ktorá budova je najvyššia v New
                </p>
                <p className={styles.block_242}>Yorku?</p>
                <p className={styles.block_243}>
                  Incorrect: Ktorá budova je najvyššia v _New
                </p>
                <p className={styles.block_244}>Yorku?</p>
                <p className={styles.block_245}>
                  Correct: Aj ja si myslím. Skúsme to.
                </p>
                <p className={styles.block_246}>
                  Incorrect: Aj ja si myslím. _Skúsme to.
                </p>
                <p className={styles.block_247}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_248}>Correct: Ideš?</p>
                <p className={styles.block_249}>Incorrect: Ideš ?</p>
                <p className={styles.block_250}>Correct: Ahoj, tu Dr. Smith.</p>
                <p className={styles.block_251}>
                  Incorrect: Ahoj, tu Dr . Smith.
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_6}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.{' '}
                  </span>
                </p>
              </div>
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
