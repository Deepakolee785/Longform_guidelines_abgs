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
            <PageContentHeader currentPage="longform Noreweign" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
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
                <p className={styles.block_221}>
                  Correct: Sjekk meg ut på Facebook.
                </p>
                <p className={styles.block_222}>
                  Incorrect: Sjekk meg ut på Facebok.
                </p>
                <p className={styles.block_223}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_224}>Correct: Hun heter Anne.</p>
                <p className={styles.block_225}>Incorrect: Hun heter anne.</p>
                <p className={styles.block_226}>
                  Correct: Han ligger på Lovisenberg sykehus.
                </p>
                <p className={styles.block_227}>
                  Incorrect: Han ligger på lovisenberg sykehus.
                </p>
                <p className={styles.block_228}>Correct: Henrik Ibsens gate.</p>
                <p className={styles.block_229}>
                  Incorrect: Henrik Ibsens Gate.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_232}>Correct: Det vil jeg gjerne.</p>
                <p className={styles.block_233}>
                  Incorrect: Det vil jeg hjerne.
                </p>
                <p className={styles.block_234}>
                  Correct: Det er verdt hver krone.
                </p>
                <p className={styles.block_235}>
                  Incorrect: Det er vært hver krone.
                </p>
                <p className={styles.block_236}>
                  Correct: Hvert hus har en unik stil.
                </p>
                <p className={styles.block_237}>
                  Incorrect: Vært hus har en unik stil.
                </p>
                <p className={styles.block_238}>
                  Correct: Nå er det jul igjen.
                </p>
                <p className={styles.block_239}>
                  Incorrect: Nå er det hjul igjen.
                </p>
                <p className={styles.block_240}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_241}>
                  Correct: Vi dekket panelet med tjære.
                </p>
                <p className={styles.block_242}>
                  Incorrect: Vi dekket panelet med kjære.
                </p>
                <p className={styles.block_243}>
                  Correct: Hvem er aftenens vert?
                </p>
                <p className={styles.block_244}>
                  Incorrect: Hvem er aftenens hvert
                </p>
                <p className={styles.block_245}>
                  Correct: sterk nordøstlig vind
                </p>
                <p className={styles.block_246}>
                  Incorrect: sterk nordøstlig vinn
                </p>
                <p className={styles.block_247}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_248}>
                  Correct: Det er verdt hver krone.
                </p>
                <p className={styles.block_249}>
                  Incorrect: Det er verd hver krone.
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    det er verdt hver krone{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_251}>
                  Correct: Det er verd hver krone.
                </p>
                <p className={styles.block_252}>
                  Incorrect: Det er verdt hver krone.
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>det er verd hver krone </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_4}>
                    Correct: Vil du se film ikveld?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Do not add the omitted article "en".
                  </span>
                </p>
                <p className={styles.block_257}>
                  Correct: 20 kr. er altfor dyrt for en
                </p>
                <p className={styles.block_258}>sjokoladeplate.</p>
                <p className={styles.block_259}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tjue er altfor dyrt for en{' '}
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_1}>sjokoladeplate </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_4}>
                    Correct: Sett alarmen til 6:30.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sett alarmen til seks tretti{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_262}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_263}>
                  Correct: YouTube YouTube YouTube
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>
                    Correct: Hvor mange bringebær blåbær er det?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  themselves after "bringebær".
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_268}>
                  Correct: Vis meg veien til Peppes Pizza.
                </p>
                <p className={styles.block_269}>
                  Incorrect: Vis meg veien til Dolly Dimple's.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    vis meg veien til peppes pizza{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_273}>
                  Correct: Hva er det høyeste fjellet i Norge?
                </p>
                <p className={styles.block_274}>
                  Incorrect: Hva er det høyeste _fjellet i Norge?
                </p>
                <p className={styles.block_275}>
                  Correct: I think so. La oss prøve.
                </p>
                <p className={styles.block_237}>
                  Incorrect: I think so. _La oss prøve.
                </p>
                <p className={styles.block_276}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_277}>Correct: Kommer du?</p>
                <p className={styles.block_278}>Incorrect: Kommer du ?</p>
                <p className={styles.block_279}>Correct: Hold kjeft!</p>
                <p className={styles.block_280}>Incorrect: Hold kjeft !</p>
                <p className={styles.block_234}>
                  Correct: Mitt navn er Dr. Larsen.
                </p>
                <p className={styles.block_281}>
                  Incorrect: Mitt navn er Dr . Larsen .
                </p>
                <p className={styles.block_282}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_283}>
                  Correct: Anton sa, "Jeg elsker deg."
                </p>
                <p className={styles.block_284}>
                  Incorrect: Anton sa, " Jeg elsker deg ."
                </p>
                <p className={styles.block_285}>
                  Correct: Oversett "hund" til japansk.
                </p>
                <p className={styles.block_286}>
                  Incorrect: Oversett "hund"til japansk.
                </p>
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
