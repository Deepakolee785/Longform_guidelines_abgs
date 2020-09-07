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
            <PageContentHeader currentPage="longform Vietnamese" />
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
                <p className={styles.block_508}>
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
                <p className={styles.block_511}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Cho tôi xem thời tiết ở Sapa. Cho tôi xem thời tiết ở
                    Sapa.
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Bạn dùng dụng cụ nào để phát quang cái vườn? phát quang
                    cái vườn
                  </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : While "phát quang cái vườn" can be a command, it is
                    ambiguous and is most likely a fragment in this context.
                  </span>
                </p>
                <p className={styles.block_514}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tôi sống ở Thành phố Hồ Chí Minh{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    tôi sống ở thành phố hồ chí mi-{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "nh" was cut off at end.{' '}
                  </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Tiệm phở Tàu bay </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>tiệm phở tàu ba- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "y" was cut off at end.{' '}
                  </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : trò chơi điện tử Grand Theft Auto{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    trò chơi điện tử -rand theft auto{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>: "G" was cut off. </span>
                </p>
                <p className={styles.block_521}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Kiệt nói, "Chúng ta nên hoàn toàn"{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    kiệt nói chúng ta nên hoàn{' '}
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_9}>toàn- </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : End of quote was truncated. Include closing quotation
                    mark.
                  </span>
                </p>
                <p className={styles.block_525}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Cửa Hàng Ăn Uống Một Bảy Sáu 100{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    cửa hàng ăn uống một bảy sáu{' '}
                  </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_9}>một trăm- </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Speaker was going to say "Cửa Hàng Ăn Uống Một Bảy Sáu một
                    trăm bảy mươi sáu" but was cut off.
                  </span>
                </p>
                <p className={styles.block_529}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>um </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>uh </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>right </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>you know </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>so </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>like </span>
                </p>
                <p className={styles.block_536}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I need to get a new um telephone.{' '}
                  </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Do you like it? Mhm. </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>ah </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>er </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mhm </span>
                </p>
                <p className={styles.block_542}>
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
                <p className={styles.block_547}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: con lợn </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>con nợn </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Transcribe "con lợn" as this is the only accepted way of
                    writing it.
                  </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: chân </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>chưn </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đàn ông </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>đờn ông </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đàn bà </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>đờn bà </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: quí nhân </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>quới nhơn </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đi về </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>đi dề </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: trúng số </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>chúng số </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: quả xoài </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>quả xài </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: không dám đâu </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>hổng dám đâu </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: chia tay </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>chia tai </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đàn vịt </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>đàn dịch </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: hết tiền </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>hớt tiền </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
                  </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đúng rồi </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>đúng gồi </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : different pronunciation due to regional dialect
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
