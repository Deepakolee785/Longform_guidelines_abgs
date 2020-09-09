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
            <PageContentHeader currentPage="Longform Kannada" />
            <div className="content text">
              <span className={'heading'}>Difficult utterances </span>
              <p className={'text'}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.
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
                <p className={styles.block_346}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_347}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_348}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_349}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_350}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_351}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_352}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_353}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
                <p className={'heading'}>Things to ignore</p>
                <p className={'text'}>
                  Do not transcribe filler words unless intended by the speaker
                  to be transcribed. Never lengthen them.
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_8}>Correct: ಅದು ನ ೕ ? </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಅದು ನ ಆ ೕ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_8}>Correct: ನು </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>[ ೕ ದ ಉ ಟ] ಅ </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_11}>ನು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_287}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_288}>● um</p>
                <p className={styles.block_289}>● uh</p>
                <p className={styles.block_290}>● right</p>
                <p className={styles.block_291}>● you know</p>
                <p className={styles.block_292}>● so</p>
                <p className={styles.block_293}>● like</p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>
                  Hesitations truncations and repetitions
                </p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_8}>Correct: ಅದ ಂತ ಡ ದು </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಅ ಅದ ಂತ ಡ ದು </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_6}>Correct: </span>
                  <span className={styles.text_13}>Example audio: " " </span>
                </p>
                <p className={styles.block_298}>
                  If a speaker repeats part of the end of a sentence, add ending
                  punctuation before the repeated phrase. Do not include ending
                  punctuation after the repeated phrase (unless the repeated
                  part is a complete sentence).
                </p>
                <p className={styles.block_299}>Correct: ಕನ ಡ ಒಂದು ಡ .</p>
                <p className={styles.block_300}>ಡ</p>
                <p className={styles.block_301}>Incorrect: ಕನ ಡ ಒಂದು ಡ</p>
                <p className={styles.block_302}>ಡ .</p>
                <p className={styles.block_303}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you know what the word is supposed to be,
                  transcribe the entire word.
                </p>
                <p className={styles.block_304}>Correct: ನು ನ ಸು</p>
                <p className={styles.block_305}>Incorrect: ನು ನ ಸು -</p>
                <p className={styles.block_306}>Incorrect: ನು ನ</p>
                <p className={styles.block_307}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ನು ನ ಸು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_308}>
                  Explanation: Since only one lettter was cut
                </p>
                <p className={styles.block_309}>
                  off, the full word is transcribed with the
                </p>
                <p className={styles.block_310}>missing " ".</p>
                <p className={styles.block_311}>
                  <span className={styles.text_8}>Correct: ಸೂ ಟ </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಟ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_312}>
                  Explanation: The beginning letter "ಸ" was cut
                </p>
                <p className={styles.block_313}>
                  off, but since it was only one letter, the whole
                </p>
                <p className={styles.block_314}>word "ಸೂ ಟ " is transcribed.</p>
                <p className={styles.block_315}>
                  If you are not sure what the word should be, do not transcribe
                  the word at all. Do not put punctuation after words that have
                  been cut off. If a quotation is cut off in the middle, use an
                  end quotation mark anyway.
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_8}>Correct: ನನ ತ ದ, " ನು" </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ನನ ತ ದ ನು </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_317}>
                  If a speaker repeats a word five times or less, transcribe
                  each repetition (without fillers). But if a word is repeated
                  more than five times, skip the prompt.
                </p>
                <p className={styles.block_318}>Correct: ನು ಒಂದು ೕಟನು ಖ ಸ</p>
                <p className={styles.block_319}>ಖ ಸ .</p>
                <p className={styles.block_320}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ನು ಒಂದು ೕಟನು </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_11}>ಖ ಸ ಖ ಸ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_322}>
                  Explanation: Since speaker said "ಖ ಸ"
                </p>
                <p className={styles.block_323}>twice, transcribe it twice.</p>
                <p className={styles.block_324}>
                  <span className={styles.text_14}>Correct: [skip] </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ೕ ೕ ೕ ೕ </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_11}>ೕ ೕ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_326}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.
                </p>
                <p className={styles.block_327}>Correct: ಬ ವ ಯ ಏಳ ನು ರ ಎರಡು</p>
                <p className={styles.block_328}>ರ</p>
                <p className={styles.block_329}>
                  Incorrect: ಬ ವ ಯ ಏಳ ನು ರ ಎರಡು
                </p>
                <p className={styles.block_330}>ರ ಹ ಂಟು</p>
                <p className={styles.block_331}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಬ ವ ಯ ಏಳ ನು ರ ಎರಡು ರ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_332}>
                  Explanation: The speaker meant to say "ಎರಡು
                </p>
                <p className={styles.block_333}>ರ ಹ ಂಟು" but got cut off.</p>
              </div>
              <divs id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
                <p className={styles.block_335}>
                  If one person clearly speaks in the foreground and someone
                  speaks in the background, transcribe the foreground speaker
                  and ignore the rest.
                </p>
                <p className={styles.block_336}>
                  If two people take turns speaking, are not speaking at the
                  same time, and are both in the foreground at approximately the
                  same volume, transcribe the speech of both speakers as
                  different sentences. Separate different speakers' sentences
                  with end punctuation.
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_8}>Correct: ನು ಬರು ? ದು. </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ನು ಬರು ದು </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_338}>
                  Explanation: Both speakers are in the
                </p>
                <p className={styles.block_339}>
                  foreground so both sentences are transcribed.
                </p>
                <p className={styles.block_340}>
                  The speech of the two speakers is separated by
                </p>
                <p className={styles.block_341}>punctuation.</p>
                <p className={styles.block_342}>
                  If one person clearly speaks in the foreground and someone
                  interrupts at the same volume with a brief (less than a
                  second) overlapping speech segment, transcribe the main
                  speaker and ignore the rest.
                </p>
                <p className={styles.block_343}>
                  If there are two or more people speaking, one talking to the
                  device and the other not, transcribe only the speaker speaking
                  to the device.
                </p>
              </divs>
              <div id="foreign-language">
                <p className={'heading'}>Other foreign languages</p>
                <p className={'text'}>
                  If you hear a foreign word (besides English) that is commonly
                  understood by speakers of your language, transcribe it in your
                  script.
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling according to your
                  language's official dictionary.{' '}
                </p>
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
