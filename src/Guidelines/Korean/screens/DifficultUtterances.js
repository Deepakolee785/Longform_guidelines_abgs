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
            <PageContentHeader currentPage="longform Korean" />
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
                <p className={styles.block_680}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={'text'}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 여의도로 가는 길 안내. 여의도로 가는 길 안 내.
                  </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 여의도로 가는 길 안내.{' '}
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 여의도로 가는 길 안내 여의도로 가 는 길 안내 "
                  </span>
                </p>
                <p className={styles.block_685}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 샌프란시스코로 갈 거예요.{' '}
                  </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 센프란으로 갈꺼에요. </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 센프란으로 갈꺼에요 "{' '}
                  </span>
                </p>
                <p className={styles.block_688}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 정 교수는 "어떤 주제를 다루느냐에 따라"{' '}
                  </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 정 교수는 "어떤 주제를 다루느냐에 따라{' '}
                  </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 정 교수는 어떤 주제를 다루느냐에 따라 "
                  </span>
                </p>
                <p className={styles.block_692}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 은하철도 구구 </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 은하철도 999 </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 은하철도 구구 " </span>
                </p>
                <p className={styles.block_695}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_4}>• </span>
                  <span className={styles.text_2}>um </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>uh </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>right </span>
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>you know </span>
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>so </span>
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>like </span>
                </p>
                <p className={styles.block_702}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I need to get a new um telephone.{' '}
                  </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Do you like it? Mhm. </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_4}>• </span>
                  <span className={styles.text_2}>ah </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>er </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_2}>mhm </span>
                </p>
                <p className={styles.block_708}>
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

                <p className={styles.block_711}>
                  If an utterance is in a foreign language, tag with [skip],
                  unless it is an easily identifiable media title or a foreign
                  language phrase commonly understood in the transcription
                  language. Stick to the punctuation conventions of your target
                  language. Full sentences written in Latin script should start
                  with an uppercase and end with punctuation.
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Come back home. </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: come back home </span>
                </p>
                <p className={styles.block_714}>
                  Web searches written in latin script should not be capitalized
                  nor punctuated.
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : nearest restaurant location{' '}
                  </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Nearest restaurant location{' '}
                  </span>
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 저는 좋아요 </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 지는 좋아유 </span>
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 밥 먹었니? </span>
                </p>
                <p className={styles.block_722}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 밥 묵었나? </span>
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
