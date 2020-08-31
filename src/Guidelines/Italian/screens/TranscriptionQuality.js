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
            <PageContentHeader currentPage="longform Italian" />
            <div className="content text">
              <p class="block_201">Transcription quality</p>
              <p class="block_202">
                Comply with the standard rules of the writing system.
              </p>
              <p class="block_203">Typo</p>
              <p class="block_204">
                A typo results in the unintentional creation of a non-word.
              </p>
              <p class="block_205">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p class="block_206">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Aggiungimi su Facebook. </span>
              </p>
              <p class="block_207">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Aggiungimi su Facebok. </span>
              </p>
              <p class="block_208">
                Use the proper capitalization for standard words that require
                it.
              </p>
              <p class="block_209">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Francesco vive in Italia. </span>
              </p>
              <p class="block_210">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Francesco vive in italia. </span>
              </p>
              <p class="block_211">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Lavora all'Enel. </span>
              </p>
              <p class="block_212">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Lavora all'enel. </span>
              </p>
              <p class="block_213">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Portami a casa. </span>
              </p>
              <p class="block_214">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Portami a Casa. </span>
              </p>
              <p class="block_215">Context error</p>
              <p class="block_216">
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <p class="block_217">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Sono andato a casa. </span>
              </p>
              <p class="block_218">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Sono andato ha casa. </span>
              </p>
              <p class="block_219">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Hai dimenticato le chiavi. </span>
              </p>
              <p class="block_220">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Ai dimenticato le chiavi. </span>
              </p>
              <p class="block_221">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ho mangiato un'alice. </span>
              </p>
              <p class="block_222">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Ho mangiato un'Alice. </span>
              </p>
              <p class="block_223">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Davide ha un aquilone. </span>
              </p>
              <p class="block_224">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Davide ha un'aquilone. </span>
              </p>
              <p class="block_225">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: C'è un'ape tra i fiori. </span>
              </p>
              <p class="block_226">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: C'è un ape tra i fiori. </span>
              </p>
              <p class="block_227">
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p class="block_228">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Carlo ha incontrato Giulia al parco.{' '}
                </span>
              </p>
              <p class="block_229">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Carlo a incontrato Giulia al parco.{' '}
                </span>
              </p>
              <p class="block_230">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Avete comprato il regalo a Stefano?{' '}
                </span>
              </p>
              <p class="block_231">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Avete comprato il regalo ha Stefano?{' '}
                </span>
              </p>
              <p class="block_232">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Hanno ballato tutta la notte. </span>
              </p>
              <p class="block_233">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Anno ballato tutta la notte. </span>
              </p>
              <p class="block_234">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Si è laureata un anno fa. </span>
              </p>
              <p class="block_235">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Si è laureata un hanno fa. </span>
              </p>
              <p class="block_236">
                Do not correct speaker's grammar if they intentionally say
                something, even if what they say does not follow the standard
                grammatical rules of the transcription language.
              </p>
              <p class="block_237">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Credo che ha ragione. </span>
              </p>
              <p class="block_238">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Credo che abbia ragione. </span>
              </p>
              <p class="block_239">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">credo che ha ragione </span>
                <span class="text_">" </span>
              </p>
              <p class="block_240">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Lei amo la pizza. </span>
              </p>
              <p class="block_241">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Lei ama la pizza. </span>
              </p>
              <p class="block_242">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">lei amo la pizza </span>
                <span class="text_">" </span>
              </p>
              <p class="block_243">Added or missing words</p>
              <p class="block_244">
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times and units
                of currency.
              </p>
              <p class="block_245">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Voglio andare a vedere film degli X-Men.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Do not add the omitted article "il".{' '}
                </span>
              </p>
              <p class="block_246">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : €2,50 è davvero troppo per un caffè.{' '}
                </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">due e cinquanta è davvero troppo </span>
              </p>
              <p class="block_247">
                <span class="text_13">per un caffè </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_248">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Imposta la sveglia alle 6:50. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">imposta la sveglia alle sei cinque </span>
              </p>
              <p class="block_249">
                <span class="text_13">zero </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_250">
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <p class="block_251">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: YouTube YouTube YouTube </span>
              </p>
              <p class="block_252">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Sotto la panca la capra panca. </span>
              </p>
              <p class="block_253">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ho visto un aeroplano deltaplano. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Speaker clearly corrected themselves{' '}
                </span>
              </p>
              <p class="block_254">after "aeroplano".</p>
              <p class="block_255">
                A false start occurs only when the speaker says part of a word
                and then stops. A false start does not happen if the speaker
                re-directs their speech mid sentence. False starts should be
                marked with a dash “-” wherever the false start is happening
              </p>
              <p class="block_256">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : I need to get a new tele- telephone{' '}
                </span>
              </p>
              <p class="block_257">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : The driver got out of the driver got into the car.
                </span>
              </p>
              <p class="block_258">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : I really don't think Oh that's a good idea, let's do that!
                </span>
              </p>
              <p class="block_259">Substitution</p>
              <p class="block_260">
                A substitution error occurs when another standard word is
                transcribed instead of what was meant by the speaker. If what
                the speaker said falls into another category (Context Error,
                Proper Name, Media Title, etc.), see the relevant section.
              </p>
              <p class="block_261">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Portami da Burger King. </span>
              </p>
              <p class="block_262">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Portami da McDonald's. </span>
              </p>
              <p class="block_263">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">portami da burger king </span>
                <span class="text_">" </span>
              </p>
              <p class="block_264">Spacing</p>
              <p class="block_265">
                Use only one space between words and sentences.
              </p>
              <p class="block_266">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Qual è la capitale della Norvegia? </span>
              </p>
              <p class="block_267">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Qual è la _capitale della Norvegia?{' '}
                </span>
              </p>
              <p class="block_268">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Sono d'accordo. Proviamoci. </span>
              </p>
              <p class="block_269">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Sono d'accordo. _Proviamoci. </span>
              </p>
              <p class="block_270">
                For most types of punctuation, do not put a space between the
                preceding word and the punctuation.
              </p>
              <p class="block_271">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Vieni con noi? </span>
              </p>
              <p class="block_272">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Vieni con noi ? </span>
              </p>
              <p class="block_273">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: State zitti! </span>
              </p>
              <p class="block_274">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: State zitti ! </span>
              </p>
              <p class="block_275">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Scusa, ho letto il messaggio solo ora.{' '}
                </span>
              </p>
              <p class="block_276">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Scusa , ho letto il messaggio solo ora.{' '}
                </span>
              </p>
              <p class="block_277">
                For quotation marks and similar punctuation, put a space before
                the opening punctuation, but not necessarily after the closing
                punctuation.
              </p>
              <p class="block_278">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Antonio disse "Ti amo". </span>
              </p>
              <p class="block_279">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Antonio disse, " Ti amo. " </span>
              </p>
              <p class="block_280">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Traduci "cane" in giapponese. </span>
              </p>
              <p class="block_281">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Traduci "cane"in giapponese. </span>
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
