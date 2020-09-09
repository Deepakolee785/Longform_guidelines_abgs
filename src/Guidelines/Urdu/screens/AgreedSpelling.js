import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Urdu" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_11}>Correct: </span>
                  <span dir="rtl" className={styles.text_11}>
                    ا​ ھ​ ک​ ن​ پ
                  </span>
                  <span className={styles.text_11}> </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ا
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ھ
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ک
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ن
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    پ
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_11}>Correct: </span>
                  <span dir="rtl" className={styles.text_11}>
                    ی​ ک​ ڑ​ ل
                  </span>
                  <span className={styles.text_11}>​ </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span dir="rtl" className={styles.text_14}>
                    ی
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ک
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ڑ
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ل
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    غ​ ع​ ظ​ ط​ ض​ ص​ ش​ س​ ژ​ ز​ ڑ​ ر​ ذ​ ڈ​ د​ خ​ ح​ چ​ ج​ ث​
                    ٹ​ ت​ پ​ ب​ ا
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_520}>
                  <span dir="rtl" className={styles.text_}>
                    آ​ ے​ ی​ ء​ ہ​ و​ ن​ م​ ل​ گ​ ک​ ق​ ف
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_}>Explanation: ۔ ​ ​ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    فو
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_11}>Correct: </span>
                  <span dir="rtl" className={styles.text_11}>
                    وا​ یا
                  </span>
                  <span className={styles.text_11}>​ </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span dir="rtl" className={styles.text_14}>
                    وا
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    یا
                  </span>
                  <span className={styles.text_15}>​ </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_}>Explanation: ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    م
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_9}>Correct: ​ </span>
                  <span dir="rtl" className={styles.text_9}>
                    آ​ یو
                  </span>
                  <span className={styles.text_9}> </span>
                  <span className={styles.text_10}>Explanation: ​ ​ ​ </span>
                  <span dir="rtl" className={styles.text_10}>
                    آ​ یو
                  </span>
                  <span className={styles.text_10}> </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_6}>Correct: ، </span>
                  <span className={styles.text_24}>
                    <sub className={styles.calibre2}>ُ </sub>
                  </span>
                  <span className={styles.text_6}>​ </span>
                  <span className={styles.text_24}>
                    <sub className={styles.calibre2}>ُ </sub>
                  </span>
                  <span className={styles.text_6}>، ​ ، ، </span>
                </p>
                <p className={styles.block_528}>Correct:</p>
                <p className={styles.block_529}>Incorrect:</p>
                <p className={styles.block_530}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>​ ​ ​ ​ </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_}>Explanation: ۔ ​ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ا ا ​ ر​ ہد ز
                  </span>
                  <span className={styles.text_}>​ ​ </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling and punctuation for proper names. Google
                  them and pay attention to the correct format. Official format
                  and spelling of a proper name may supersede the usual written
                  transcription conventions detailed in this document.
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_}>Correct: ۔ ​ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    م ​ ​ نوز ا​ ہو
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_}>Correct: ۔ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ق ا​ ​ - ​ روا
                  </span>
                  <span className={styles.text_}>​ ​ ​ ​ </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_9}>Correct: </span>
                  <span dir="rtl" className={styles.text_9}>
                    ب
                  </span>
                  <span className={styles.text_9}> </span>
                  <span className={styles.text_10}>Explanation: </span>
                  <span dir="rtl" className={styles.text_10}>
                    ب
                  </span>
                  <span className={styles.text_10}> </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_}>Correct: ​ eBay ۔ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ا
                  </span>
                  <span className={styles.text_}> ​ ​ </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_9}>Correct: ​ </span>
                  <span className={styles.text_10}>Explanation: ​ </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_10}>Explanation: </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_}>Correct: ۔ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ر​ ھ ​ آ​ ور​ ​ ہو
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_}>Correct: ۔ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    د​ ارڈ​ ​ روا​ ا
                  </span>
                  <span className={styles.text_}> ​ ​ </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    آ​ ​ ر
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_}>Correct: ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    وا​ ​ ​ ے
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_546}>Correct: ​ ​</p>
                <p className={styles.block_547}>
                  <span className={styles.text_}>Correct: ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ی ​ ​ ی
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_548}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_549}>Correct: Ok Google</p>
                <p className={styles.block_550}>Correct: Ok Google Now</p>
                <p className={styles.block_551}>
                  <span className={styles.text_}>Correct: Ok Google، ؟ ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ں ​ ر
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_}>Correct: Ok Google، </span>
                  <span dir="rtl" className={styles.text_}>
                    و
                  </span>
                  <span className={styles.text_}> </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_555}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    ود​ ُا​ ​: ڈ​ فآ​ ل ​ فآ
                  </span>
                  <span className={styles.text_}>​ ​ </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    ر ۔ؤ ​ ز اڈ
                  </span>
                  <span className={styles.text_}>​ </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_}>Correct: ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    ر ​ ا​ ​ وآ
                  </span>
                  <span className={styles.text_}>​ ​ ​ ​ </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_}>Correct: ۔ </span>
                  <span dir="rtl" className={styles.text_}>
                    د​ ​ ​ ےد​ ر
                  </span>
                  <span className={styles.text_}> </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    ظ
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_}>Incorrect: </span>
                  <span dir="rtl" className={styles.text_}>
                    ض
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    ز
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_}>Incorrect: </span>
                  <span dir="rtl" className={styles.text_}>
                    ذ
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_}>Explanation: ​ </span>
                  <span dir="rtl" className={styles.text_}>
                    تر
                  </span>
                </p>

                <p className={styles.block_568}>
                  <span className={styles.text_4}></span>
                  <span className={styles.text_5}>۔ ​ </span>
                  <span dir="rtl" className={styles.text_5}>
                    ل ا​ ​ ​ ​ ​ ​ ​ و
                  </span>
                  <span className={styles.text_5}>​ </span>
                </p>
                <p className={styles.block_569}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_11}>Correct: ۔ ​ </span>
                  <span dir="rtl" className={styles.text_11}>
                    ر
                  </span>
                  <span className={styles.text_11}> ​ </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>​ </span>
                  <span dir="rtl" className={styles.text_14}>
                    ر
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_15}>​ </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_9}>Correct: ۔ ​ </span>
                  <span dir="rtl" className={styles.text_9}>
                    ا
                  </span>
                  <span className={styles.text_9}> </span>
                  <span className={styles.text_8}>Example audio: " " </span>
                </p>
                <p className={styles.block_572}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_}>Correct: </span>
                  <span dir="rtl" className={styles.text_}>
                    ا
                  </span>
                  <span className={styles.text_}>​ </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_}>Incorrect: </span>
                  <span dir="rtl" className={styles.text_}>
                    ا
                  </span>
                  <span className={styles.text_}>​ </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_}>
                    Explanation: ​ ​ ​ ​ ​ ​ ​"{' '}
                  </span>
                  <span dir="rtl" className={styles.text_}>
                    ا​ " ​ ر
                  </span>
                  <span className={styles.text_}> </span>
                </p>
                <p className={styles.block_576}>
                  <span dir="rtl" className={styles.text_4}></span>
                  <span dir="rtl" className={styles.text_5}>
                    ۔ ​ ل
                  </span>
                  <span className={styles.text_5}> ​ </span>
                </p>
                <p className={'text'}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
