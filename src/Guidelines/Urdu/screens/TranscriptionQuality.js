import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
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
              <p className={styles.block_216}>Transcription quality</p>
              <p className={styles.block_217}>
                Comply with the standard rules of the writing system.
              </p>
              <p className={styles.block_218}>Typo</p>
              <p className={styles.block_219}>
                A typo results in the unintentional creation of a non-word.
              </p>
              <p className={styles.block_220}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p className={styles.block_221}>
                <span className={styles.text_}>Correct: ۔ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ظ
                </span>
                <span className={styles.text_}> ​ </span>
              </p>
              <p className={styles.block_222}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ط
                </span>
                <span className={styles.text_}> ​ </span>
              </p>
              <p className={styles.block_223}>
                <span className={styles.text_}>Explanation: ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ڈر ر​ ​ ​ ، ​" ظ " ​ رد
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_224}>
                <span dir="rtl" className={styles.text_}>
                  ود​ ​ ​ ​ ​ ڈر ​ ​ روا​ ​ فو ​ ​ ​ ​ ودرا
                </span>
                <span className={styles.text_}> ۔ ​ ​ ​ </span>
              </p>
              <p className={styles.block_225}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  د​ ​ ​ ف ​ روا​ ​ ​ ا​ ​ ​ ؛ ​ ​ فو
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_226}>
                <span dir="rtl" className={styles.text_}>
                  ل ، ​ ن ا​ ​ ​ ں ​ ​ ​ ​ ودرا​ ​ ا ​ ​ ​ ​ سا
                </span>
                <span className={styles.text_}> ۔ </span>
              </p>
              <p className={styles.block_227}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ م ​ ا​ ​ ​" ط " ​ ر
                </span>
                <span className={styles.text_5}> ​ </span>
              </p>
              <p className={styles.block_228}>
                <span className={styles.text_}>Correct: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ا​ ن
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_229}>
                <span className={styles.text_}>Explanation: " ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ح ​ ​ ا​ روا​ ​ ظ ا​ زاوآ​ ​" " روا
                </span>
                <span className={styles.text_}>​" </span>
              </p>
              <p className={styles.block_230}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ا​ ن
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_231}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ا​ ن
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_232}>
                <span dir="rtl" className={styles.text_}>
                  سا ۔ ​ ​ ​ ​ ​ ے ود
                </span>
                <span className={styles.text_}>​ ​ ​" " ​ ۔ ​ </span>
              </p>
              <p className={styles.block_233}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ا​’ ذ‘ روا​’ ز‘ ں ود​ ​ ​ ​ و
                </span>
                <span className={styles.text_5}>​ ​ ​ </span>
              </p>
              <p className={styles.block_234}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  سا ۔ ​ ​ ​" " ​" " ​ ل ​ ی ود
                </span>
                <span className={styles.text_5}> ۔ ​ </span>
              </p>
              <p className={styles.block_235}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ ​ ​ ​ ​ ​ ےر ​ روا
                </span>
                <span className={styles.text_5}>​ ​ ​ ​ ​ </span>
              </p>
              <p className={styles.block_236}>Context error</p>
              <p className={styles.block_237}>
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <p className={styles.block_238}>
                <span className={styles.text_}>Correct: ۔ ​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ں ​ م ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_239}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ں ​ مآ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_240}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ں
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  م
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ا
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_241}>
                <span className={styles.text_}>Explanation: ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  د​ وا​" م " ، ​ ظ ا​ زاوآ
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_242}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ل ا​ ں ​ ​ ​ ​ ​ ا​" مآ
                </span>
                <span className={styles.text_5}>​" ​ ​ ​ ​ </span>
              </p>
              <p className={styles.block_243}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_244}>
                <span className={styles.text_8}>Example </span>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ت ا
                </span>
                <span className={styles.text_9}>​ </span>
              </p>
              <p className={styles.block_245}>
                <span className={styles.text_6}>audio: " </span>
                <span className={styles.text_7}>​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ت ا
                </span>
                <span className={styles.text_7}>​ </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_246}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ت ا
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_247}>
                <span className={styles.text_}>Explanation: " ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ح ​ ا​ ں ود ۔ ​ ظ ا​ زاوآ​ ​" ​" روا
                </span>
                <span className={styles.text_}>​" </span>
              </p>
              <p className={styles.block_248}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ق ​ و​ ق ​ ​ ​ سا​ ​ ​ ظ ا​ رد​ روا
                </span>
                <span className={styles.text_5}>​ ​ </span>
              </p>
              <p className={styles.block_249}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ رد
                </span>
                <span className={styles.text_5}>​" " </span>
              </p>
              <p className={styles.block_250}>
                Do not correct speaker's grammar if they intentionally say
                something, even if what they say does not follow the standard
                grammatical rules of the transcription language.
              </p>
              <p className={styles.block_251}>Added or missing words</p>
              <p className={styles.block_252}>
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times and units
                of currency.
              </p>
              <p className={styles.block_253}>
                <span className={styles.text_}>Correct: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  رز​ ن
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_254}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  رز​ ا​ ن
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_255}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  رز
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ن
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_256}>
                <span className={styles.text_}>Explanation: " ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  رز​ ا​ ن " ​ ​ روا
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_257}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ا ​ ​" ا" ا​ ​ ​ ل ا​" ا" ​ ​ ر
                </span>
                <span className={styles.text_5}> ​ </span>
              </p>
              <p className={styles.block_258}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ ​ ​ </span>
              </p>
              <p className={styles.block_259}>Correct: ​ Rs 2,000 ۔ ​</p>
              <p className={styles.block_260}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  را
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ود
                </span>
                <span className={styles.text_7}>​ ​ </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_261}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  را ​ ود
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_262}>
                <span className={styles.text_}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ہو​ ​ ​ ​ ید​ ​ ​ ​ ور
                </span>
                <span className={styles.text_}>​ ​ ​ </span>
              </p>
              <p className={styles.block_263}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ ​ </span>
              </p>
              <p className={styles.block_264}>
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <p className={styles.block_265}>
                <span className={styles.text_9}>Correct: ؟ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ی ​ ی ​ سر​ ​ ں
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  پآ​ ا​ ​ ​ ​" ی ​ سر" ​ ​ ​ ر
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_266}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ رد
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_267}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  م
                </span>
                <span className={styles.text_9}> ​ ​ </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  پآ​ ا​ ​ ​ ​" " ​ ​" م
                </span>
                <span className={styles.text_10}> " ​ </span>
              </p>
              <p className={styles.block_268}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ر ۔ ​ ​ ​ رد
                </span>
                <span className={styles.text_5}>​ </span>
              </p>
              <p className={styles.block_269}>Substitution</p>
              <p className={styles.block_270}>Spacing</p>
              <p className={styles.block_271}>
                <span className={styles.text_}>
                  Use one space only when the words end at joiners. Urdu has
                  both joining (e.g.{' '}
                </span>
                <span dir="rtl" className={styles.text_}>
                  ی،ت،ق،ج،گ،ک،پ،ب
                </span>
                <span className={styles.text_}>
                  {' '}
                  etc.), and non-joining alphabets (e.g.{' '}
                </span>
                <span dir="rtl" className={styles.text_}>
                  ے،و ،ز ،ذ ،ڑ ،ر ،ا
                </span>
                <span className={styles.text_}>
                  etc.). So when there is a non-joining alphabet at the end,
                  there is no need to add even a single space. Whereas when the
                  words end at joining alphabets, then the space must be
                  inserted.
                </span>
              </p>
              <p className={styles.block_272}>
                <span className={styles.text_}>Correct: ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  تر ​ ​ ​ ​ ​ کر
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_273}>
                <span className={styles.text_}>Incorrect: ؟ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر ​ ​ ​ ​ ر
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_274}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ل ​ ے ۔ ​ د
                </span>
                <span className={styles.text_}>​ ۔ ​ ​ ​ ​ </span>
              </p>
              <p className={styles.block_275}>
                <span className={styles.text_}>Incorrect: ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ل ے ۔ د
                </span>
                <span className={styles.text_}> ۔ ​ </span>
              </p>
              <p className={styles.block_276}>
                <span className={styles.text_}>Correct: ؟ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر​ آ
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_277}>
                <span className={styles.text_}>Incorrect: ؟ </span>
                <span dir="rtl" className={styles.text_}>
                  رآ
                </span>
                <span className={styles.text_}></span>
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
