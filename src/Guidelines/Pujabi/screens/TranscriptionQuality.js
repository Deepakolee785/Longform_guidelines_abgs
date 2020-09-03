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
            <PageContentHeader currentPage="longform Pujabi" />
            <div className="content text">
              <p className={'heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_220}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_223}>Correct: ਰਾਮ ਨ ਰਟੀ ਖਾਧਾ।</p>
                <p className={styles.block_224}>Incorrect: ਰਾਮ ਨ ਰਟੀ ਖਾਧੀ।</p>
                <p className={styles.block_225}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਰਾਮ ਨ ਰਟੀ ਖਾਧਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_226}>
                  Explanation: ਭਾਵ ਿਕ 'ਰਟੀ ਖਾਧਾ' ਪਜਾਬੀ ਦ ਮਾਨਕ
                </p>
                <p className={styles.block_227}>
                  ਿਵਆਕਰਨਕ ਿਨਯਮ ਦ ਿਖਲਾਫ ਹ, ਪਰ ਿਫਰ ਵੀ ਇਸਨ 'ਰਟੀ
                </p>
                <p className={styles.block_228}>
                  ਖਾਧਾ' ਟਰ ਸਕ ਾਇਬ ਕੀਤਾ ਿਗਆ ਹ ਅਤ ਇਸਨ 'ਰਟੀ ਖਾਧੀ'
                </p>
                <p className={styles.block_229}>'ਚ ਨਹ ਬਦਿਲਆ ਿਗਆ।</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_7}>
                    Correct: ਮ ਕਲ 21 ਦਾ ਹ ਜਾਵ ਗਾ।{' '}
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਮ ਕਲ ਇਕੀ ਦਾ ਹ ਜਾਵ ਗਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_234}>
                  Incorrect: ਮ ਕਲ 21 ਸਾਲ ਦਾ ਹ ਜਾਵ ਗਾ।
                </p>
                <p className={styles.block_235}>
                  Explanation: ਹਾਲ ਿਕ ਵਾਕ "ਸਾਲ" ਤ ਿਬਨ ਅਿਵਆਕਰਨਕ
                </p>
                <p className={styles.block_236}>
                  ਹ, ਪਰ ਵਕਤਾ ਨ ਇਸਨ ਬਿਲਆ ਨਹ ਇਸ ਲਈ ਇਸਨ
                </p>
                <p className={styles.block_237}>ਟਰ ਸਕ ਾਈਬ ਨਾ ਕੀਤਾ ਜਾਵ।</p>
                <p className={styles.block_238}>
                  Correct: ਇਕ ਸਮਸ ਲਈ ₹50 ਬਹਤ ਿਜਆਦਾ ਹਨ।
                </p>
                <p className={styles.block_239}>
                  Incorrect: ਇਕ ਸਮਸ ਲਈ 50 ਬਹਤ ਿਜਆਦਾ ਹਨ।
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਇਕ ਸਮਸ ਲਈ ਪਜਾਹ ਬਹਤ ਿਜਆਦਾ{' '}
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_5}>ਹਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_242}>
                  Explanation: ਭਾਵ ਿਕ ਬਲਣ ਵਾਲ ਨ "ਪਜਾਹ ਰਪਏ" ਨਹ
                </p>
                <p className={styles.block_243}>
                  ਿਕਹਾ ਪਰ ਇਸਨ ₹50 ਹੀ ਟਰ ਸਕ ਾਈਬ ਕਰਨਾ ਹ ਿਕ ਿਕ
                </p>
                <p className={styles.block_244}>
                  ਇਹ ਇਕ ਸਮਸ ਲਈ ਸਬਿਧਤ ਕਰਸੀ ਵਲ ਸਕਤ ਕਰਦਾ ਹ।
                </p>
                <p className={styles.block_245}>
                  Correct: 6:50 ਲਈ ਇਕ ਅਲਾਰਮ ਸ ਟ ਕਰ।
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਛ ਪਜਾਹ ਲਈ ਇਕ ਅਲਾਰਮ ਸ ਟ ਕਰ{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  Incorrect: ਛ 50 ਲਈ ਇਕ ਅਲਾਰਮ ਸ ਟ ਕਰ।
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_8}>" </span>
                  <span className={styles.text_9}>
                    <sub className={styles.calibre1}>
                      Explanation: ਪ ਸਗ ਦ ਿਹਸਾਬ ਨਾਲ ਇਹ ਸਮ ਵਲ ਇ ਾਰਾ
                    </sub>
                  </span>
                </p>
                <p className={styles.block_249}>
                  ਕਰਦਾ ਹ, ਸ ਇਹ ":" ਨਾਲ ਟਰ ਸਕ ਾਈਬ ਕੀਤਾ ਿਗਆ।
                </p>
                <p className={styles.block_250}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_251}>Correct: ਯਿਟਊਬ ਯਿਟਊਬ ਯਿਟਊਬ</p>
                <p className={styles.block_252}>Incorrect: ਯਿਟਊਬ</p>
                <p className={styles.block_253}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਯਿਟਊਬ ਯਿਟਊਬ ਯਿਟਊਬ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_254}>
                  Explanation: ਹਾਲ ਿਕ ਵਕਤਾ ਦਾ ਮਤਲਬ ਿਤਨ ਵਾਰੀ
                </p>
                <p className={styles.block_255}>
                  ਯਿਟਊਬ ਨਹ ਬਲਣਾ ਸੀ, ਪਰ ਉਸਨ ਬਿਲਆ। ਇਸਨ ਿਤਨ
                </p>
                <p className={styles.block_256}>
                  ਵਾਰੀ ਟਰ ਸਕ ਾਇਬ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।
                </p>
                <p className={styles.block_257}>Correct: ਥ ਿਕਨ ਅਬ ਸਬ ਪਏ ਹਨ?</p>
                <p className={styles.block_253}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਥ ਿਕਨ ਅਬ ਸਬ ਪਏ ਹਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_258}>Incorrect: ਥ ਿਕਨ ਅਬ ਪਏ ਹਨ?</p>
                <p className={styles.block_259}>
                  Explanation: ਹਾਲ ਿਕ ਵਕਤਾ ਦਾ ਮਤਲਬ ਿਸਰਫ "ਸਬ" ਸੀ
                </p>
                <p className={styles.block_260}>
                  ਅਤ ਉਹ "ਅਬ" ਗਲਤੀ ਨਾਲ ਕਿਹ ਿਗਆ, ਪਰ ਤਸ ਦਵ ਬਦ
                </p>
                <p className={styles.block_261}>ਟਰ ਸਕ ਾਇਬ ਕਰਨ ਹਨ।</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_264}>
                  Correct: ਮ ਸਬਜੀ ਵਾਲ ਕਲ ਜਾਣਾ ਹ।
                </p>
                <p className={styles.block_265}>
                  Incorrect: ਮ ਫਲ ਵਾਲ ਕਲ ਜਾਣਾ ਹ।
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਮ ਸਬਜੀ ਵਾਲ ਕਲ ਜਾਣਾ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_267}>
                  Explanation: ਸਹੀ ਟਰ ਸਿਕ ਪ ਨ 'ਚ "ਸਬਜੀ ਵਾਲ" ਹੀ
                </p>
                <p className={styles.block_268}>
                  ਿਲਖਣਾ ਹ ਿਜਵ ਿਕ ਵਕਤਾ ਨ ਬਿਲਆ ਹ ਨਾ ਿਕ "ਫਲ ਵਾਲ"
                </p>
                <p className={styles.block_269}>ਿਲਖਣਾ ਹ।</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_272}>
                  Correct: ਿਹਮਾਿਲਆ ਦੀ ਉਚਾਈ ਿਕਨੀ ਹ?
                </p>
                <p className={styles.block_273}>
                  Incorrect: ਿਹਮਾਿਲਆ ਦੀ ਉਚਾਈ _ਿਕਨੀ ਹ?
                </p>
                <p className={styles.block_274}>
                  Explanation: ਅਡਰਸਕਰ ਇਸ ਗਲ ਵਲ ਇ ਾਰਾ ਕਰਦਾ ਹ
                </p>
                <p className={styles.block_275}>
                  ਿਕ "ਉਚਾਈ" ਅਤ "ਿਕਨੀ" ਦ ਿਵਚਕਾਰ ਇਕ ਫਾਲਤ ਸਪਸ ਹ।
                </p>
                <p className={styles.block_276}>
                  ਹਰ ਬਦ ਦ ਿਵਚਕਾਰ ਕਵਲ ਇਕ ਸਪਸ ਹਣੀ ਚਾਹੀਦੀ ਹ।
                </p>
                <p className={styles.block_277}>
                  Correct: ਮਨ ਵੀ ਐਵ ਹੀ ਲਗਦਾ ਹ। ਚਲ ਕਿ ਕਰੀਏ।
                </p>
                <p className={styles.block_278}>
                  Incorrect: ਮਨ ਵੀ ਐਵ ਹੀ ਲਗਦਾ ਹ। _ਚਲ ਕਿ ਕਰੀਏ।
                </p>
                <p className={styles.block_279}>
                  Explanation: ਅਡਰਸਕਰ ਇ ਾਰਾ ਕਰਦਾ ਹ ਿਕ "।" ਅਤ
                </p>
                <p className={styles.block_280}>
                  "ਚਲ" ਦ ਿਵਚਕਾਰ ਇਕ ਫਾਲਤ ਸਪਸ ਹ। ਦ ਵਾਕ ਦ
                </p>
                <p className={styles.block_281}>
                  ਿਵਚਕਾਰ ਕਵਲ ਇਕ ਸਪਸ ਹਣੀ ਚਾਹੀਦੀ ਹ।
                </p>
                <p className={styles.block_282}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_283}>Correct: ਕੀ ਤਸ ਆ ਰਹ ਹ?</p>
                <p className={styles.block_284}>Incorrect: ਕੀ ਤਸ ਆ ਰਹ ਹ ?</p>
                <p className={styles.block_285}>
                  Explanation: "?" ਤ ਪਿਹਲ ਕਈ ਸਪਸ ਨਹ ਹਣੀ
                </p>
                <p className={styles.block_286}>ਚਾਹੀਦੀ।</p>
                <p className={styles.block_287}>
                  Correct: ਸਿਤ ੀ ਅਕਾਲ, ਮ ਡਾ. ਸਰਜੀਤ ਿਸਘ ਹ ।
                </p>
                <p className={styles.block_288}>
                  Incorrect: ਸਿਤ ੀ ਅਕਾਲ , ਮ ਡਾ . ਸਰਜੀਤ ਿਸਘ ਹ ।
                </p>
                <p className={styles.block_289}>
                  Explanation: "ਡਾ." ਦ ਸਖਪ ਰਪ ਅਤ ਿਵ ਰਾਮ ਿਚਨ "." 'ਚ
                </p>
                <p className={styles.block_290}>ਕਈ ਸਪਸ ਨਹ ਹਣੀ ਚਾਹੀਦੀ।</p>
                <p className={styles.block_291}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_292}>
                  Correct: ਰਾਮ ਨ ਿਕਹਾ, "ਮ ਤਹਾਨ ਿਪਆਰ ਕਰਦਾ ਹ ।"
                </p>
                <p className={styles.block_293}>
                  Incorrect: ਰਾਮ ਨ ਿਕਹਾ, "ਮ ਤਹਾਨ ਿਪਆਰ ਕਰਦਾ ਹ ।_"
                </p>
                <p className={styles.block_294}>
                  Explanation: "_" ਸਪਸ ਨ ਿਦਖਾ ਦਾ ਹ। ਵਾਕ ਦ ਅਤ 'ਚ
                </p>
                <p className={styles.block_295}>
                  "।" ਅਤ ਉਲਟ ਕਾਮਾ ਦ ਿਵਚਕਾਰ ਕਈ ਸਪਸ ਨਹੀ ਹਣੀ
                </p>
                <p className={styles.block_296}>ਚਾਹੀਦੀ।</p>
                <p className={styles.block_297}>
                  Correct: "ਸਬ"_ਦਾ ਅਗਰਜੀ 'ਚ ਅਨਵਾਦ ਕਰ।
                </p>
                <p className={styles.block_298}>
                  Incorrect: "ਸਬ"ਦਾ ਅਗਰਜੀ 'ਚ ਅਨਵਾਦ ਕਰ।
                </p>
                <p className={styles.block_299}>
                  Explanation: "_" ਸਪਸ ਨ ਿਦਖਾ ਦਾ ਹ। ਬਦ ਦ ਅਤਲ
                </p>
                <p className={styles.block_300}>
                  ਿਵ ਰਾਮ ਿਚਨ ਤ ਬਾਅਦ ਇਕ ਸਪਸ ਹਣੀ ਚਾਹੀਦੀ ਹ ਿਕ ਿਕ
                </p>
                <p className={styles.block_301}>ਇਸ ਤ ਬਾਅਦ ਇਕ ਨਵ ਬਦ ਆ ਿਰਹਾ ਹ।</p>
              </div>
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
