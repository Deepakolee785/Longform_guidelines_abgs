import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
// import styles from '../css/styles.module.css'

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
            <PageContentHeader currentPage="longform Indonesian" />
            <div className="content text">
              <p class="large-heading">Difficult utterances</p>
              <p class="text">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <p class="heading">Skipping a prompt</p>
                <p class="text">
                  If you can't understand part of the audio, transcribe only the
                  part you can understand. For the part you cannot understand,
                  create a separate speaker segment and add the Unintelligible
                  label as instructed in: Longform generic rules &gt;
                  Unintelligible or foreign or singing.
                </p>
                <p class="block_768">
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p class="heading">Hesitations and truncations</p>
                <p class="text">
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p class="block_474">
                  Correct: Cari hotel di Kemang. Cari hotel di Kemang.
                </p>
                <p class="block_770">
                  Correct: Tunjukkan saya cuaca di Depok. Tunjukkan saya cuaca
                  Depok.
                </p>
                <p class="block_771">
                  Correct: Bagaimana cara membuat gado-gado? membuat gado-gado
                </p>
                <p class="block_772">
                  Explanation: If the repeated phrase is part of the sentence
                  that just happens to form a sentence on its own (possibly
                  under a different interpretation), format it as a fragment.
                  While "membuat gado-gado" can be a command, it is ambiguous
                  and is most likely a fragment in this context.
                </p>
                <p class="block_394">
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p class="block_314">Correct: Saya tinggal di Surabaya</p>
                <p class="block_365">
                  Example audio: " saya tinggal di surabay "
                </p>
                <p class="block_280">
                  Explanation: Final sound "a" was truncated.
                </p>
                <p class="block_145">Correct: kacamata</p>
                <p class="block_70">Example audio: " kacamata kam- "</p>
                <p class="block_773">
                  Explanation: Unclear whether they would have said "kami" or
                  "kamu".
                </p>
                <p class="block_418">Correct: Putar lagu.</p>
                <p class="block_97">Example audio: " -tar lagu "</p>
                <p class="block_774">
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p class="block_245">
                  Correct: Pak Totok berkata, "Kita perlu alat itu segera"
                </p>
                <p class="block_775">
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p class="block_208">Correct: kamera tiga enam</p>
                <p class="block_776">Example audio: " kamera tiga enam- "</p>
                <p class="block_659">
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p class="block_777">
                  <span class="text_2">um</span>
                  <span class="text_3">
                    <sub class="calibre1">uh </sub>
                  </span>
                </p>
                <p class="block_658">right</p>
                <p class="block_707">you know</p>
                <p class="block_778">so</p>
                <p class="block_519">like</p>
                <p class="block_779">
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p class="block_224">
                  Correct: I need to get a new um telephone.
                </p>
                <p class="block_737">Correct: Do you like it? Mhm.</p>
                <p class="block_780">
                  <span class="text_2">ah</span>
                  <span class="text_3">
                    <sub class="calibre1">ermhm </sub>
                  </span>
                </p>
                <p class="block_781">
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p class="heading">Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p class="heading">Foreign language</p>
              </div>
              <div id="accents">
                <p class="heading">Accents</p>
                <p class="text">
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p class="block_169">Correct: Saya memakai baju merah.</p>
                <p class="block_44">Incorrect: Saya memakai baju melah.</p>
                <p class="block_783">
                  Explanation: Person said "r" sound in "merah" with "l" sound,
                  but it should still be spelled as standard.
                </p>
                <p class="block_109">Correct: Terima kasih.</p>
                <p class="block_681">Incorrect: Terima kasyi.</p>
                <p class="block_784">
                  Explanation: Person said "terima kasih" in Korean accent,
                  using "syi" instead of a "sih" sound.
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
