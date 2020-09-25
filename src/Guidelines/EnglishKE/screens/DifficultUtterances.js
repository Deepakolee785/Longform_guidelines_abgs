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
            <PageContentHeader currentPage="Longform EnglishKE" />
            <div className="content text">
              {' '}
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  different language varieties.
                </span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={styles.block_477}>
                  <span className={styles.text_2}>
                    For Loft 1.0: If you can't understand part of the audio,
                    transcribe only the part you can{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    understand. For the part you cannot understand, create a
                    separate speaker segment{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and add the Unintelligible label as instructed in: Longform
                    generic rules &gt;{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Unintelligible or foreign or singing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_2}>
                    For Loft 2.0: Below is a list of reasons to skip the audio
                    that may be available for you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    to choose from. Each contain a description of when is an
                    appropriate time to use it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>
                    No Audio: The audio doesn't load.{' '}
                  </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_37}>● </span>
                  <span className={styles.text_38}>
                    No Sound: The waveform indicates there is audio but I can't
                    hear anything.{' '}
                  </span>
                  <span className={styles.text_37}>● </span>
                  <span className={styles.text_38}>
                    Other Locale: All of the speech is in a different language.
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>
                    Silent Audio: The entire utterance is silent
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>
                    Noisy Audio: The entire utterance is too noisy.
                  </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>
                    Other: Other reason (Please explain).{' '}
                  </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_2}>
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    synthesized, transcribe all of it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={styles.block_486}>
                  <span className={styles.text_2}>
                    If a speaker says only the beginning part of the word,
                    transcribe it if it can be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    considered a word on its own. Otherwise do not transcribe
                    the false start.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_12}>Correct: unpopular </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>unpop- unpopular </span>
                  <span className={styles.text_14}>" </span>
                  <span className={styles.text_12}>Correct: bigger than </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>bi- bigger than </span>
                  <span className={styles.text_14}>"</span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_12}>
                    Correct: big bigger than{' '}
                  </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>
                    big- [pause] bigger than{' '}
                  </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_2}>
                    If a user repeats a sentence for the sake of the phone,
                    format the repetition as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence if it's restating (as a sentence) what the person
                    has said.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.calibre2}>
                    Correct: Search for baby foxes. Search for baby
                  </span>
                </p>
                <p className={styles.block_490}>foxes.</p>
                <p className={styles.block_387}>
                  <span className={styles.calibre2}>
                    Correct: Show me the weather in Stockholm.
                  </span>
                </p>
                <p className={styles.block_402}>Show me Stockholm's weather.</p>
                <p className={styles.block_491}>
                  <span className={styles.calibre2}>
                    Correct: What tools can you use to weed a garden? weed a
                    garden
                  </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.calibre2}>
                    Explanation: If the repeated phrase is part of the sentence
                    that just happens to form a sentence on its own (possibly
                    under a different interpretation), format it as a fragment.
                    While "weed a garden" can be a command, it is ambiguous and
                    is most likely a fragment in this context.
                  </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_2}>
                    Complete words that have been truncated only if a very small
                    portion of the word is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    missing (one syllable or less in a multisyllable word) and
                    it is obvious what the word{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    should be. In cases of ambiguity, do not transcribe the
                    cut-off word. Do not put{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation at the end of truncated words.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_12}>
                    Correct: I live in San Francisco{' '}
                  </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>
                    i live in san francisc{' '}
                  </span>
                  <span className={styles.text_14}>" </span>
                  <span className={styles.text_13}>
                    Explanation: Final sound "o" was truncated.
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_12}>Correct: chicken pot </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>chicken pot pi- </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.calibre2}>
                    Explanation: Unclear whether they would have
                  </span>
                </p>
                <p className={styles.block_496}>said "pie" or "pies".</p>
                <p className={styles.block_414}>
                  <span className={styles.text_12}>
                    Correct: Team Fortress video game{' '}
                  </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>
                    -eam fortress video game{' '}
                  </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_2}>
                    If a truncation occurs mid-quote, use an end quotation mark
                    even if there is possibly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>more intended content.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_498}>
                  Correct: Erica said, "We should totally"
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_2}>
                    For numbers, stick to what is uttered, even if you know this
                    is not all the speaker is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>going to say.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_12}>
                    Correct: Xbox three six{' '}
                  </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>xbox three six- </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_2}>
                    Transcribe any filler words that are applicable and used in
                    the target language. Below{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    are examples of filler words in the English language. These
                    may or may not be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    applicable in the target language. Again, only transcribe
                    filler words that exist in and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    are used in the target language.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>um </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>uh </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>right </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>you know </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>so </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>like</span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_2}>
                    Below is a list of all filler words that should only be
                    transcribed if affirmations or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>answers to a question.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_498}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_387}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>ah </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>er </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>mhm </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_2}>
                    Only transcribe foreign words if they are common in your
                    language or if speakers of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    your language would understand it. If it is foreign and
                    speakers of your language{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    would not know this word, use the Foreign Speech label as
                    instructed in: Longform{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    generic rules &gt; Unintelligible or foreign or singing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={styles.block_508}>
                  <span className={styles.text_2}>
                    If an utterance is in a foreign language, tag with [skip],
                    unless it is an easily{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    identifiable media title or a foreign language phrase
                    commonly understood in the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcription language. Stick to the capitalisation and
                    punctuation conventions of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>your target language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_12}>Correct: Cómo estás? </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: This is a very common phrase that most
                      English-speakers know, spelled as in
                    </span>
                  </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.calibre2}>
                    Spanish but only using the English single{' '}
                  </span>
                </p>
                <p className={styles.block_511}>question mark.</p>
                <p className={styles.block_512}>
                  <span className={styles.text_12}>
                    Correct: La Vie en Rose{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Follow Australian English conventions for
                      capitalisation of media titles.
                    </span>
                  </span>
                </p>
                <p className={styles.block_350}>Correct: La Vita È Bella</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={styles.block_514}>
                  <span className={styles.text_2}>
                    Correct non-standard pronunciations to their standard ones.
                    Non-standard{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    pronunciations could be from speakers of regional dialects,
                    language learners, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speakers from different countries.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_12}>
                    Correct: Where is that?{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: Where is dat?{' '}
                  </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_12}>Correct: Thank you. </span>
                  <span className={styles.text_13}>Incorrect: Sank you. </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.calibre2}>
                    Explanation: Person said "that" with a "d" sound, but it
                    should still be spelled as standard.
                  </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.calibre2}>
                    Explanation: Person said "thank you" in French accent, using
                    an "s" instead of a "th" sound.
                  </span>
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
