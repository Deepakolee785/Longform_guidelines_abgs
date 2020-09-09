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
            <PageContentHeader currentPage="Longform Italian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_204}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_205}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Aggiungimi su Facebook.{' '}
                  </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Aggiungimi su Facebok.{' '}
                  </span>
                </p>
                <p className={styles.block_208}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Francesco vive in Italia.{' '}
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Francesco vive in italia.{' '}
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Lavora all'Enel. </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Lavora all'enel. </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Portami a casa. </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Portami a Casa. </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Sono andato a casa. </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Sono andato ha casa. </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Hai dimenticato le chiavi.{' '}
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Ai dimenticato le chiavi.{' '}
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Ho mangiato un'alice. </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Ho mangiato un'Alice. </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Davide ha un aquilone.{' '}
                  </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Davide ha un'aquilone.{' '}
                  </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : C'è un'ape tra i fiori.{' '}
                  </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : C'è un ape tra i fiori.{' '}
                  </span>
                </p>
                <p className={styles.block_227}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Carlo ha incontrato Giulia al parco.{' '}
                  </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Carlo a incontrato Giulia al parco.{' '}
                  </span>
                </p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Avete comprato il regalo a Stefano?{' '}
                  </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Avete comprato il regalo ha Stefano?{' '}
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Hanno ballato tutta la notte.{' '}
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Anno ballato tutta la notte.{' '}
                  </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Si è laureata un anno fa.{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Si è laureata un hanno fa.{' '}
                  </span>
                </p>
                <p className={styles.block_236}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Credo che ha ragione. </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Credo che abbia ragione.{' '}
                  </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>credo che ha ragione </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Lei amo la pizza. </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Lei ama la pizza. </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>lei amo la pizza </span>
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
                <p className={styles.block_245}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Voglio andare a vedere film degli X-Men.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Do not add the omitted article "il".{' '}
                  </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : €2,50 è davvero troppo per un caffè.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    due e cinquanta è davvero troppo{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_13}>per un caffè </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Imposta la sveglia alle 6:50.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    imposta la sveglia alle sei cinque{' '}
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_13}>zero </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_250}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : YouTube YouTube YouTube{' '}
                  </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sotto la panca la capra panca.{' '}
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ho visto un aeroplano deltaplano.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker clearly corrected themselves{' '}
                  </span>
                </p>
                <p className={styles.block_254}>after "aeroplano".</p>
                <p className={styles.block_255}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-” wherever the false start is happening
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : I need to get a new tele- telephone{' '}
                  </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : The driver got out of the driver got into the car.
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : I really don't think Oh that's a good idea, let's do that!
                  </span>
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
                <p className={styles.block_261}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Portami da Burger King.{' '}
                  </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Portami da McDonald's.{' '}
                  </span>
                </p>
                <p className={styles.block_263}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>portami da burger king </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Qual è la capitale della Norvegia?{' '}
                  </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Qual è la _capitale della Norvegia?{' '}
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sono d'accordo. Proviamoci.{' '}
                  </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Sono d'accordo. _Proviamoci.{' '}
                  </span>
                </p>
                <p className={styles.block_270}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Vieni con noi? </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Vieni con noi ? </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: State zitti! </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: State zitti ! </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Scusa, ho letto il messaggio solo ora.{' '}
                  </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Scusa , ho letto il messaggio solo ora.{' '}
                  </span>
                </p>
                <p className={styles.block_277}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Antonio disse "Ti amo".{' '}
                  </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Antonio disse, " Ti amo. "{' '}
                  </span>
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Traduci "cane" in giapponese.{' '}
                  </span>
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Traduci "cane"in giapponese.{' '}
                  </span>
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
