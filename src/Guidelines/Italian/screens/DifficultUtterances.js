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
            <PageContentHeader currentPage="Longform Italian" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  If you can't understand part of the audio, transcribe only the
                  part you can understand. For the part you cannot understand,
                  create a separate speaker segment and add the Unintelligible
                  label as instructed in: Longform generic rules &gt;
                  Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_942}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={styles.block_944}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Cerca cuccioli di volpe. Cerca cuccioli di volpe.
                  </span>
                </p>
                <p className={styles.block_946}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Fammi vedere il tempo a Palermo. Fammi vedere il tempo a
                    Palermo.
                  </span>
                </p>
                <p className={styles.block_947}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Cosa serve per costruire una casa sull'albero? costruire
                    una casa sull'albero
                  </span>
                </p>
                <p className={styles.block_948}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : If the repeated phrase is part of the sentence that just
                    happens to form a sentence on its own (possibly under a
                    different interpretation), format it as a fragment.
                  </span>
                </p>
                <p className={styles.block_949}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Vivo a Bologna </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>vivo a bologn- </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_951}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Final sound "a" was truncated and yet the word is easily
                    understandable. Transcribe the whole word and punctuate the
                    sentence accordingly.
                  </span>
                </p>
                <p className={styles.block_952}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: torta alle </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>torta alle me- </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_953}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Unclear whether they would have said "mele" or "meringhe"
                    or something else.
                  </span>
                </p>
                <p className={styles.block_954}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : GTA: San Andreas videogioco{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    -ta san andreas videogioco{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_955}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_956}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Erica ha detto "Dovremmo decisamente".{' '}
                  </span>
                </p>
                <p className={styles.block_957}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_958}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Xbox tre sei </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>xbox tre sei- </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_959}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_960}>• um</p>
                <p className={styles.block_782}>• uh</p>
                <p className={styles.block_795}>• right</p>
                <p className={styles.block_961}>• you know</p>
                <p className={styles.block_782}>• so</p>
                <p className={styles.block_962}>• like</p>
                <p className={styles.block_963}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_964}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : I need to get a new um telephone.{' '}
                  </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Do you like it? Mhm. </span>
                </p>
                <p className={styles.block_965}>• ah</p>
                <p className={styles.block_966}>• er</p>
                <p className={styles.block_967}>• mhm</p>
                <p className={styles.block_968}>
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
                <p className={styles.block_972}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Hai comprato la stampante?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Person said "stampante" with "mb" and{' '}
                  </span>
                </p>
                <p className={styles.block_973}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Hai comprato la stambande? "d" sound (voicing of consonant
                    clusters in some
                  </span>
                </p>
                <p className={styles.block_974}>
                  southern Italian dialects), but it should still be spelled as
                  standard.
                </p>
                <p className={styles.block_975}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Grazie. </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Crazie. </span>
                </p>
                <p className={styles.block_976}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Person said "grazie" in German accent, using an "c"
                    instead of a "g" sound.
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
