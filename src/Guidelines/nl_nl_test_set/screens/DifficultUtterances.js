import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import CorrrectIncorrect from '../../../Components/common/CorrrectIncorrect'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'

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
            <PageContentHeader currentPage="Longform nl_nl_test_set" />

            <div className="content">
              <h1 className="large-heading">Difficult Utterances</h1>
              <p className="text">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.{' '}
              </p>
              <div id="skipping-a-prompt">
                <h2 className="heading">Skipping a prompt</h2>
                <ul>
                  <li>
                    For Loft 1.0: If you can't understand part of the audio,
                    transcribe only the part you can understand. For the part
                    you cannot understand, create a separate speaker segment and
                    add the Unintelligible label as instructed in: Longform
                    generic rules &gt; Unintelligible or foreign or singing.{' '}
                  </li>
                  <li>
                    For Loft 2.0: Below is a list of reasons to skip the audio
                    that may be available for you to choose from. Each contain a
                    description of when is an appropriate time to use it.
                    <ul className="blue-text">
                      <li>No Audio: The audio doesn't load.</li>
                      <li>
                        {' '}
                        No Sound: The waveform indicates there is audio but I
                        can't hear anything.{' '}
                      </li>
                      <li>
                        Other Locale: All of the speech is in a different
                        language.
                      </li>
                      <li>Silent Audio: The entire utterance is silent</li>
                      <li>Noisy Audio: The entire utterance is too noisy.</li>
                      <li>Other: Other reason (Please explain).</li>
                    </ul>
                  </li>
                  <li>
                    {' '}
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or synthesized, transcribe all of it.{' '}
                  </li>
                </ul>
              </div>
              <div id="hesitations-and-truncations">
                <h2 className="heading">Hesitations and truncations</h2>
                <ul>
                  <li>
                    If a speaker says only the beginning part of the word,
                    transcribe it if it can be considered a word on its own.
                    Otherwise do not transcribe the false start.
                    <CorrrectIncorrect
                      correctText=" groter dan"
                      audioText='" gro- groter dan "'
                    />
                    <CorrrectIncorrect
                      correctText="groot groter dan"
                      audioText='" groot- groter dan "'
                    />
                  </li>
                  <li>
                    If a user repeats a sentence for the sake of the phone,
                    format the repetition as a sentence if it's restating (as a
                    sentence) what the person has said.
                    <CorrrectIncorrect correctText=" Laat foto's van katten zien. Laat foto's van katten zien." />
                    <CorrrectIncorrect correctText=" Wat is het weer in Leiden? Wat is het weer in Leiden?" />
                    <CorrrectIncorrect
                      correctText=" Waarmee kun je het beste onkruid verdelgen? onkruid verdelgen"
                      explainationText='If the repeated phrase is part of the sentence that just happens to form a sentence on its own (possibly under a different interpretation), format it as a fragment. While "onkruid verdelgen" can be a command, it is ambiguous and is most likely a fragment in this context. '
                    />
                  </li>
                  <li>
                    If a truncation occurs mid-quote, use an end quotation mark
                    even if there is possibly more intended content.
                    <CorrrectIncorrect
                      correctText='Erik antwoordde: "We moeten echt"'
                      audioText='" erik antwoordde we moeten echt- "'
                      explainationText="End of quote was truncated. Include closing quotation mark."
                    />
                  </li>
                  <li>
                    For numbers, stick to what is uttered, even if you know this
                    is not all the speaker is going to say.
                    <CorrrectIncorrect
                      correctText="Xbox three six"
                      audioText='" xbox three six- "'
                    />
                  </li>
                  <li>
                    Transcribe any filler words that are applicable and used in
                    the target language. Below are examples of filler words in
                    the English language. These may or may not be applicable in
                    the target language. Again, only transcribe filler words
                    that exist in and are used in the target language.
                    <ul className="blue-text">
                      <li>um</li>
                      <li>uh</li>
                      <li>right</li>
                      <li>you know</li>
                      <li>so</li>
                      <li>like</li>
                    </ul>
                  </li>
                  <li>
                    Below is a list of all filler words that should only be
                    transcribed if affirmations or answers to a question.
                    <CorrrectIncorrect correctText=" I need to get a new um telephone." />
                    <CorrrectIncorrect correctText=" Do you like it? Mhm." />
                    <ul className="blue-text">
                      <li>ah</li>
                      <li>er</li>
                      <li>mhm</li>
                    </ul>
                  </li>
                  <li>
                    Only transcribe foreign words if they are common in your
                    language or if speakers of your language would understand
                    it. If it is foreign and speakers of your language would not
                    know this word, use the Foreign Speech label as instructed
                    in: Longform generic rules &gt; Unintelligible or foreign or
                    singing.
                  </li>
                </ul>
              </div>
              <div id="background-and-foreground-speech">
                <h2 className="heading">Background and foreground speech</h2>
              </div>
              <div id="foreign-language">
                <h2 className="heading">Foreign Language</h2>
              </div>

              <div id="accents">
                <h2 className="heading">Accents</h2>
                <ul>
                  <li>
                    Correct non-standard pronunciations to their standard ones.
                    Non-standard pronunciations could be from speakers of
                    regional dialects, language learners, or speakers from
                    different countries.
                    <CorrrectIncorrect
                      correctText="Waar is dat?"
                      incorrectText="Waar is da?"
                      explainationText='Speaker said "da" instead of "dat", but it should be spelled as standard. '
                    />
                  </li>
                </ul>
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
