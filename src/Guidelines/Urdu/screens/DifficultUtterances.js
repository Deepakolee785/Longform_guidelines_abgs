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
            <PageContentHeader currentPage="longform Urdu" />
            <div className="content text">
              <p className={styles.text_26}>Difficult utterances </p>
              <p className={styles.block_578}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <p className={styles.block_579}>Skipping a prompt</p>
              <p className={styles.block_580}>
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.
              </p>
              <p className={styles.block_581}>
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.
              </p>
              <p className={styles.block_582}>
                ● No Audio: The audio doesn't load.
              </p>
              <p className={styles.block_583}>
                ● No Sound: The waveform indicates there is audio but I can't
                hear anything.
              </p>
              <p className={styles.block_584}>
                ● Other Locale: All of the speech is in a different language.
              </p>
              <p className={styles.block_585}>
                ● Silent Audio: The entire utterance is silent
              </p>
              <p className={styles.block_586}>
                ● Noisy Audio: The entire utterance is too noisy.
              </p>
              <p className={styles.block_587}>
                ● Other: Other reason (Please explain).
              </p>
              <p className={styles.block_588}>
                For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.
              </p>
              <p className={styles.block_589}>Hesitations and truncations</p>
              <p className={styles.block_590}>
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.
              </p>
              <p className={styles.block_591}>
                <span className={styles.text_11}>Correct: </span>
                <span dir="rtl" className={styles.text_11}>
                  ید
                </span>
                <span className={styles.text_11}> ​ ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ید
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_592}>
                <span className={styles.text_9}>Correct: ​ ​ ​ </span>
                <span className={styles.text_8}>Example audio: " </span>
                <span className={styles.text_16}>​ ​ ​ </span>
                <span className={styles.text_8}>" </span>
              </p>
              <p className={styles.block_593}>
                Complete words that have been truncated only if a very small
                portion of the word is missing (one syllable or less in a
                multisyllable word) and it is obvious what the word should be.
                In cases of ambiguity, do not transcribe the cut-off word. Do
                not put punctuation at the end of truncated words.
              </p>
              <p className={styles.block_594}>
                <span className={styles.text_11}>Correct: </span>
                <span dir="rtl" className={styles.text_11}>
                  ں ​ ر​ ​ ا
                </span>
                <span className={styles.text_11}> ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_595}>
                <span className={styles.text_}>Explanation: "۔ ​ ​ ​" </span>
                <span dir="rtl" className={styles.text_}>
                  ں
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_596}>
                <span className={styles.text_11}>Correct: ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  و​ س ر
                </span>
                <span className={styles.text_11}> ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  و
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  س ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_597}>
                <span className={styles.text_}>Explanation: "۔ ​ ​ ​" </span>
                <span dir="rtl" className={styles.text_}>
                  ٹ
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_482}>
                <span className={styles.text_11}>Correct: ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  ید
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ید
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_598}>
                <span className={styles.text_}>Explanation: " ​" </span>
                <span dir="rtl" className={styles.text_}>
                  ؤ " ​ ا ​ ​ ​ ​ او
                </span>
                <span className={styles.text_}> ​ ". </span>
              </p>
              <p className={styles.block_429}>
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.
              </p>
              <p className={styles.block_599}>● um</p>
              <p className={styles.block_600}>● uh</p>
              <p className={styles.block_601}>● right</p>
              <p className={styles.block_602}>● you know</p>
              <p className={styles.block_600}>● so</p>
              <p className={styles.block_603}>● like</p>
              <p className={styles.block_604}>
                Below is a list of all filler words that should only be
                transcribed if affirmations or answers to a question.
              </p>
              <p className={styles.block_605}>
                Correct: I need to get a new um telephone.
              </p>
              <p className={styles.block_606}>Correct: Do you like it? Mhm.</p>
              <p className={styles.block_607}>● ah</p>
              <p className={styles.block_608}>● er</p>
              <p className={styles.block_609}>● mhm</p>
              <p className={styles.block_610}>
                Only transcribe foreign words if they are common in your
                language or if speakers of your language would understand it. If
                it is foreign and speakers of your language would not know this
                word, use the Foreign Speech label as instructed in: Longform
                generic rules &gt; Unintelligible or foreign or singing.
              </p>
              <p className={styles.block_611}>
                Background and foreground speech
              </p>
              <p className={styles.block_612}>Foreign language</p>
              <p className={styles.block_613}>
                If an utterance is in a foreign language, tag with [skip],
                unless it is an easily identifiable media title or a foreign
                language phrase commonly understood in the transcription
                language. Stick to the punctuation conventions of your target
                language.
              </p>
              <p className={styles.block_614}>
                <span className={styles.text_9}>Correct: </span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ ں آ
                </span>
                <span className={styles.text_9}>​ ! </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ہد ز​ ​ ​ ​ ​ م<span className={styles.calibre3}> ​ </span>
                </span>
                <span dir="rtl" className={styles.text_10}>
                  او
                </span>
                <span className={styles.text_10}>
                  <span className={styles.calibre3}>​ ​ ​ ​ ​ </span>
                </span>
              </p>
              <p className={styles.block_615}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ او​ او​ ​ ودرا
                </span>
                <span className={styles.text_5}>​ </span>
              </p>
              <p className={styles.block_616}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ن ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_617}>
                <span className={styles.text_}>Incorrect: </span>
                <span dir="rtl" className={styles.text_}>
                  ن
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_618}>
                <span className={styles.text_6}>Example audio: " </span>
                <span dir="rtl" className={styles.text_6}>
                  ن ا
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_619}>Accents</p>
              <p className={styles.block_620}>
                Correct non-standard pronunciations to their standard ones.
                Non-standard pronunciations could be from speakers of regional
                dialects, language learners, or speakers from different
                countries.
              </p>
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
