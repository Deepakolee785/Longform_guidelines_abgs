import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Slovak" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances </p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_765}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_766}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_767}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_768}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_769}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_770}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_771}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_772}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_775}>
                  <span className={styles.text_4}>Correct: väčší než </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>vä- väčší než </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_4}>Correct: naj najlepší </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>naj- najlepší </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_777}>
                  <span className={styles.text_4}>Correct: nepopulárny </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>nepo- nepopulárny </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_778}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_779}>
                  <span className={styles.text_4}>
                    Correct: Bývam vo Zvolene{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>bývam vo zvolen- </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_780}>
                  Explanation: Final sound "e" was truncated.
                </p>
                <p className={styles.block_781}>
                  <span className={styles.text_4}>Correct: kuracia </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>kuracia po- </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_782}>
                  Explanation: Unclear whether they would have
                </p>
                <p className={styles.block_783}>
                  said "polievka" or "pomazánka".
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>
                    Correct: Team Fortress video hra{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    -eam fortress video hra{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_784}>
                  Explanation: Initial sound "ve" was truncated.
                </p>
                <p className={styles.block_785}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be
                </p>
                <p className={styles.block_786}>
                  applicable in the target language. Again, only transcribe
                  filler words that exist in and are used in the target
                  language.
                </p>
                <p className={styles.block_724}>● um</p>
                <p className={styles.block_787}>● uh</p>
                <p className={styles.block_654}>● right</p>
                <p className={styles.block_732}>● you know</p>
                <p className={styles.block_788}>● so</p>
                <p className={styles.block_789}>● like</p>
                <p className={styles.block_790}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_219}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_791}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_792}>● ah</p>
                <p className={styles.block_793}>● er</p>
                <p className={styles.block_675}>● mhm</p>
                <p className={styles.block_794}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_799}>
                  <span className={styles.text_4}>
                    Correct: Môžeme sa večer zastaviť?{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    môžme sa večer zastaviť{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_800}>
                  Explanation: Person said "môžme" instead of
                </p>
                <p className={styles.block_801}>
                  "môžeme", but it should still be spelled as
                </p>
                <p className={styles.block_802}>standard.</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
