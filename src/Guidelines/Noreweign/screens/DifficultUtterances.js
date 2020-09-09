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
            <PageContentHeader currentPage="Longform Noreweign" />
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
                <p className={styles.block_903}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_904}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_905}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_906}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_907}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_908}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_909}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_910}>
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
                <p className={styles.block_913}>
                  <span className={styles.text_4}>Correct: upopulær </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>upop- upopulær </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_914}>
                  <span className={styles.text_4}>Correct: større enn </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>stø- større enn </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_915}>
                  <span className={styles.text_4}>
                    Correct: stor større enn{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    stor- [pause] større enn{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_916}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_917}>
                  Correct: Søk på reveunger. Søk på reveunger.
                </p>
                <p className={styles.block_832}>
                  Correct: Vis meg været i Oslo. Vis meg
                </p>
                <p className={styles.block_517}>Osloværet.</p>
                <p className={styles.block_918}>
                  Correct: Hvilke redskaper trenger man til å luke
                </p>
                <p className={styles.block_919}>i hagen? luke i hagen</p>
                <p className={styles.block_920}>
                  Explanation: If the repeated phrase is part of
                </p>
                <p className={styles.block_921}>
                  the sentence that just happens to form a
                </p>
                <p className={styles.block_922}>
                  sentence on its own (possibly under a different
                </p>
                <p className={styles.block_923}>
                  interpretation), format it as a fragment. While
                </p>
                <p className={styles.block_924}>
                  "luke i hagen" can be a command, it is
                </p>
                <p className={styles.block_925}>
                  ambiguous and is most likely a fragment in this
                </p>
                <p className={styles.block_926}>context.</p>
                <p className={styles.block_927}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_928}>
                  <span className={styles.text_4}>
                    Correct: Jeg bor i Bergen{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>jeg bor i berge </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_929}>
                  Explanation: Final nasal "n" was truncated.
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_4}>Correct: oreo </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>oreo ka- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_930}>
                  Explanation: Unclear whether they would have
                </p>
                <p className={styles.block_931}>said "kake" or "kaker".</p>
                <p className={styles.block_932}>
                  <span className={styles.text_4}>
                    Correct: Team Fortress-videospillet{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    -eam fortress-videospillet{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_933}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_934}>
                  Correct: Erik sa, "Vi burde absolutt"
                </p>
                <p className={styles.block_935}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_4}>Correct: Xbox tre seks </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>xbox tre seks- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_937}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_938}>● um</p>
                <p className={styles.block_939}>● uh</p>
                <p className={styles.block_940}>● right</p>
                <p className={styles.block_648}>● you know</p>
                <p className={styles.block_939}>● so</p>
                <p className={styles.block_941}>● like</p>
                <p className={styles.block_942}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_943}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_944}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_945}>● ah</p>
                <p className={styles.block_946}>● er</p>
                <p className={styles.block_947}>● mhm</p>
                <p className={styles.block_948}>
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
                <p className={styles.block_952}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_953}>Correct: Multekrem?</p>
                <p className={styles.block_794}>Incorrect: Moltekrem</p>
                <p className={styles.block_954}>
                  Explanation: Person said "multe" with a "o"
                </p>
                <p className={styles.block_955}>
                  sound, but it should still be spelled as standard.
                </p>
                <p className={styles.block_956}>Correct: Flytt bilen.</p>
                <p className={styles.block_957}>Incorrect: Flutt bilen.</p>
                <p className={styles.block_958}>
                  Explanation: Person said "flytt bilen" in
                </p>
                <p className={styles.block_959}>
                  Egersundsmål, Sør-Rogaland, using an "u"
                </p>
                <p className={styles.block_960}>instead of a "y" sound.</p>
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
