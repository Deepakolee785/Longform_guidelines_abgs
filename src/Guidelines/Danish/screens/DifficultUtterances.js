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
            <PageContentHeader currentPage="Longform Danish" />
            <div className="content text">
              <span className={'large-heading'}>Difficult utterances </span>
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
                <p className={styles.block_596}>
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
                    generic rules &gt; Unintelligible{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>or foreign or singing.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_2}>
                    For Loft 2.0: Below is a list of reasons to skip the audio
                    that may be available for you to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    choose from. Each contain a description of when is an
                    appropriate time to use it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    No Audio: The audio doesn't load.{' '}
                  </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    No Sound: The waveform indicates there is audio but I can't
                    hear anything.{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    Other Locale: All of the speech is in a different language.
                  </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    Silent Audio: The entire utterance is silent
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    Noisy Audio: The entire utterance is too noisy.
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    Other: Other reason (Please explain).{' '}
                  </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_2}>
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or synthesized,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>transcribe all of it.</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={styles.block_602}>
                  <span className={styles.text_2}>
                    If a speaker says only the beginning part of the word,
                    transcribe it if it can be considered{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a word on its own. Otherwise do not transcribe the false
                    start.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_23}>Correct: upopulær </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>upo- upopulær </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: større end </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>stø- større end </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: bonde bonderose{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    bonde- [pause] bonderose{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_2}>
                    If a user repeats a sentence for the sake of the phone,
                    format the repetition as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence if it's restating (as a sentence) what the person
                    has said.
                  </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.calibre2}>
                    Correct: Søg efter kattekillinger. Søg efter kattekillinger.
                  </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.calibre2}>
                    Correct: Vis mig hvordan vejret er i København. Vis mig
                    vejrudsigten for København.
                  </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.calibre2}>
                    Correct: Hvilke redskaber kan man bruge til at slå græs? slå
                    græs
                  </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.calibre2}>
                    Explanation: If the repeated phrase is part of the sentence
                    that just happens to form a sentence on its own (possibly
                    under a different interpretation), format it as a fragment.
                    While "slå græs" can be a command, it is ambiguous and is
                    most likely a fragment in this context.
                  </span>
                </p>
                <p className={styles.block_609}>
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
                <p className={styles.block_610}>
                  <span className={styles.text_23}>
                    Correct: Han bor i San Francisco{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    han bor i san francisc{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_24}>
                    Explanation: Final sound "o" was truncated.
                  </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_23}>
                    Correct: Team Fortress computerspil{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    -eam fortress computerspil{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_2}>
                    If a truncation occurs mid-quote, use an end quotation mark
                    even if there is possibly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>more intended content.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Nina sagde: "Vi skal helt klart"
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_2}>
                    For numbers, stick to what is uttered, even if you know this
                    is not all the speaker is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>going to say.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_23}>
                    Correct: Xbox tre hundrede{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>xbox tre hundrede- </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_614}>
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
                    filler words that exist in and are{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    used in the target language.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>um </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>uh </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>right </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>you know </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>so </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>like </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_2}>
                    Below is a list of all filler words that should only be
                    transcribed if affirmations or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>answers to a question.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_94}>Correct: Do you like it? Mhm.</p>
                <p className={styles.block_617}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ah </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>er </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>mhm </span>
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_2}>
                    Only transcribe foreign words if they are common in your
                    language or if speakers of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    your language would understand it. If it is foreign and
                    speakers of your language would{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not know this word, use the Foreign Speech label as
                    instructed in: Longform generic{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    rules &gt; Unintelligible or foreign or singing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={styles.block_621}>
                  <span className={styles.text_2}>
                    If an utterance is in a foreign language, tag with [skip],
                    unless it is an easily identifiable{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    media title or a foreign language phrase commonly understood
                    by Danish-speakers.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Capitalize principal words in foreign language media titles.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_23}>Correct: What's up? </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: This is a very common phrase that most
                      Danish-speakers know.
                    </span>
                  </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_23}>
                    Correct: La Vie en Rose{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Follow conventions for capitalization of
                      foreign language media titles.
                    </span>
                  </span>
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={styles.block_624}>
                  <span className={styles.text_2}>
                    Correct non-standard pronunciations to their standard ones.
                    Non-standard{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    {' '}
                    pronunciations could be from speakers of regional dialects,
                    language learners, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speakers from different countries.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_23}>
                    Correct: en sandwich med kylling.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: en sandwich med killing.{' '}
                  </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.calibre2}>
                    Explanation: Person said "kylling" with an accent, using an
                    "i" instead of a "y" sound.
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
