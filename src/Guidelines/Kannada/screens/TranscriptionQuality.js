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
            <PageContentHeader currentPage="longform Kannada" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                The following general rules must be obeyed at all times when
                transcribing.
              </p>
              <p className={'heading'}>Typo</p>
              <p className={'text'}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p className={'text'}>
                For English proper nouns that must be transcribed in Latin
                script, please use proper capitalization.
              </p>
              <p className={styles.block_221}>
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_222}>
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p className={styles.block_223}>
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.
              </p>
              <p className={styles.block_224}>
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_225}>
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.
              </p>
              <p className={styles.block_226}>
                <span className={styles.text_4}>
                  Use only one space between words and sentences.{' '}
                </span>
              </p>
              <p className={'heading'}>Foreign language </p>
              <p className={styles.block_227}>
                Do not skip audio that contains foreign words. First indicate
                whether it contains English or another language, then transcribe
                the utterance according to the following rules.
              </p>
              <p className={styles.block_228}>English</p>
              <p className={styles.block_229}>
                Please transliterate all English media titles.
              </p>
              <p className={styles.block_230}>Correct:</p>
              <p className={styles.block_231}>Incorrect: Titanic</p>
              <p className={styles.block_232}>Keep URLs in Latin script.</p>
              <p className={styles.block_233}>Correct: www.google.co.in</p>
              <p className={styles.block_234}>
                Use the spelling "Ok" for the phrase "Ok Google", as well as
                related phrases like "Ok Google Now" and "Ok Glass". For all
                other cases, transcribe the word as "okay".
              </p>
              <p className={styles.block_235}>Correct: Ok Google</p>
              <p className={styles.block_236}>Incorrect: Okay Google</p>
              <p className={styles.block_237}>
                Use the spelling "Ok" for the phrase "Ok Google", as well as
                related phrases like "Ok Google Now" and "Ok Glass". For all
                other cases, transliterate the word "okay" as "ಒ " in Kannada
                script.
              </p>
              <p className={styles.block_238}>Correct: Ok Google</p>
              <p className={styles.block_239}>Incorrect: OK Google.</p>
              <p className={styles.block_240}>
                <span className={styles.text_6}>Correct: Ok Google Now </span>
                <span className={styles.text_7}>
                  Explanation: The phrase Ok Google Now is a{' '}
                </span>
              </p>
              <p className={styles.block_241}>
                derivation of "Ok Google" and must be
              </p>
              <p className={styles.block_242}>transcribed exactly like this.</p>
              <p className={styles.block_243}>Correct: Ok Google, ೕ ಎ ?</p>
              <p className={styles.block_244}>Incorrect: Ok Google ೕ ಎ ?</p>
              <p className={styles.block_245}>
                Transcribe English companies in English. Do not transliterate.
              </p>
              <p className={styles.block_246}>Correct: Amazon</p>
              <p className={styles.block_247}>Incorrect: అ</p>
              <p className={styles.block_248}>Correct: Google</p>
              <p className={styles.block_249}>Incorrect: ಗೂಗ</p>
              <p className={styles.block_250}>Correct: Facebook</p>
              <p className={styles.block_251}>Incorrect: ಸು</p>
              <p className={styles.block_252}>
                Below are some common company names that should be transcribed
                in English with Latin characters
              </p>
              <p className={styles.block_253}>● Apple</p>
              <p className={styles.block_254}>● Facebook</p>
              <p className={styles.block_255}>● Google</p>
              <p className={styles.block_256}>● Instagram</p>
              <p className={styles.block_257}>● Netflix</p>
              <p className={styles.block_258}>● Skype</p>
              <p className={styles.block_259}>● Snapchat</p>
              <p className={styles.block_260}>● Twitter</p>
              <p className={styles.block_261}>● WhatsApp</p>
              <p className={styles.block_262}>● Yahoo</p>
              <p className={styles.block_263}>● YouTube</p>
              <p className={styles.block_264}>
                Transliterate common English words into your language.
              </p>
              <p className={styles.block_265}>Correct: ಹ ೕ.</p>
              <p className={styles.block_266}>Incorrect: Hello.</p>
              <p className={styles.block_267}>
                If the speaker in the audio is speaking in English and says a
                word in your language transliterate it to English.
              </p>
              <p className={styles.block_268}>
                Correct: Tomorrow morning I want to make
              </p>
              <p className={styles.block_269}>some rava idli.</p>
              <p className={styles.block_270}>
                Incorrect: Tomorrow morning I want to make
              </p>
              <p className={styles.block_271}>some ರ ಇ .</p>
              <p className={styles.block_272}>
                If someone says an English texting initialism, abbreviation, or
                acronym, transcribe it in English with lowercase letters.
              </p>
              <p className={styles.block_273}>Correct: lol</p>
              <p className={styles.block_274}>Incorrect: LOL</p>
              <p className={styles.block_275}>Correct: lmao</p>
              <p className={styles.block_276}>Incorrect: LMAO</p>
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
