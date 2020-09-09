import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Kannada" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                This section covers spelling conventions for things such as
                proper names, media titles, acronyms, slang words, and more.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled out, write it with spaces in between.
                  This rule does not apply to acronyms, URLs or email addresses.
                </p>
                <p className={styles.block_358}>Correct: ಬರ ರದ ಬ ರ ರ ದ</p>
                <p className={styles.block_359}>
                  Transcribe all acronyms and initialisms with capital letters
                  and no spaces. Do not include periods between letters.
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  If the speaker uses words representing laughter, crying,
                  singing, etc. transcribe them up to three syllables. Do not
                  transcribe actual laughter.
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_8}>Correct: ಹ ಹ ಹ </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಹ ಹ ಹ ಹ ಹ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  If a personal name could have multiple spellings, use the
                  spelling that has the most Google search hits when you search
                  for the name followed by the word " ಸರು" (e.g. "ಒಂದು ಸರು").
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Always use the official spelling and formatting for the
                  following types of terms. If you are not sure about the
                  spelling or formatting, transcribe them as they are spelled
                  and formatted on their Wikipedia page in your country. Note,
                  this only applies to terms in your language. For instruction
                  on transcribing English terms, refer to the English subsection
                  in Foreign Language.
                </p>
                <p className={styles.block_367}>● Technical terms</p>
                <p className={styles.block_368}>● Proper names</p>
                <p className={styles.block_369}>● Celebrity names</p>
                <p className={styles.block_370}>● Holidays</p>
                <p className={styles.block_371}>● Brand names</p>
                <p className={styles.block_372}>● Product names</p>
                <p className={styles.block_373}>
                  Spellings of common Proper Names
                </p>

                <p className={styles.block_375}>● ಳ ನ </p>
                <p className={styles.block_375}>● ಟ</p>
                <p className={styles.block_376}>● ಉ ಹ ಂದ</p>
                <p className={styles.block_377}>● ಸಂ ೕಷ</p>
                <p className={styles.block_378}>● ನ ತ</p>
                <p className={styles.block_375}>● ಬೂ</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title </p>
                <p className={'text'}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_381}>Correct: ಮ</p>
                <p className={styles.block_382}>Incorrect: "ಮ "</p>
                <p className={styles.block_383}>Correct: ಮ ಯ</p>
                <p className={styles.block_384}>Incorrect: " ಮ ಯ "</p>
                <p className={styles.block_385}>Correct:</p>
                <p className={styles.block_386}>Incorrect: " "</p>
                <p className={styles.block_387}>Correct: ಎ ಸು ಮಲ ಸು</p>
                <p className={styles.block_388}>Incorrect: "ಎ ಸು ಮಲ ಸು"</p>
                <p className={styles.block_389}>
                  Transcribe all media titles with their original punctuation.
                  If punctuation from the title occurs at the end of a sentence,
                  do not transcribe another punctuation mark (a danda, question
                  mark, or exclamation mark) for end of the sentence.
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  If a word has multiple correct spellings, use the first
                  spelling in your language's standard dictionary. If there is
                  no entry, Google the word and use the spelling with the most
                  results.
                </p>
                <p className={styles.block_392}>
                  Transcribe slang and colloquialisms as they are commonly
                  written in your language. Do not change non-standard speech
                  that the speaker wouldn't want corrected.
                </p>
                <p className={styles.block_393}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech.
                </p>
                <p className={styles.block_394}>Correct: ತಲುಪಲು ತಡ ತ .</p>
                <p className={styles.block_395}>Incorrect: ನ ಬ .</p>
                <p className={styles.block_396}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ತಲುಪಲು ತಡ ತ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_397}>
                  Explanation: " " is a common contraction for
                </p>
                <p className={styles.block_398}>
                  " ". It should not be transcribed as
                </p>
                <p className={styles.block_399}>
                  " ", but instead left as spoken.
                </p>
                <p className={styles.block_400}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_401}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is. If you hear a word
                  that does not sound like a standard word of your language
                  because it appears to be nonsense, do a Google search for the
                  word. If there is a clear candidate, transcribe that word.
                </p>
                <p className={styles.block_402}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={'text'}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
