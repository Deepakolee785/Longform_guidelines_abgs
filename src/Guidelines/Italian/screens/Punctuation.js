import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
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
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of Italian. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_286}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_287}>
                  In general, a complete sentence contains a verb.
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Lavora da casa oggi. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: Includes verb. </span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Chiama. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: consists of a verb. </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : E non mi piace neanche.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Includes verb. Sounds like a whole{' '}
                  </span>
                </p>
                <p className={styles.block_291}>
                  utterance rather than just a conjunction to a larger sentence.
                </p>
                <p className={styles.block_292}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Chi ha bussato alla porta? Il nostro vicino.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: two speakers </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: il nostro vicino </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : No context to suggest this is a sentence;
                  </span>
                </p>
                <p className={styles.block_295}>treat it as a fragment.</p>
                <p className={styles.block_296}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: immagini di cani </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Andato bene l'esame? </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: meteo a Roma </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : This is asking for information, but the{' '}
                  </span>
                </p>
                <p className={styles.block_299}>
                  most likely interpretation is as a sentence fragment on its
                  own.
                </p>
                <p className={styles.block_300}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Accidenti. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: interjection </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ciao. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: greeting </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Va bene. Arrivederci.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : This includes both a yes/no word and a{' '}
                  </span>
                </p>
                <p className={styles.block_304}>
                  farewell, with a long pause between.
                </p>
                <p className={styles.block_305}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: preparare il tiramisù </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Preparare il tiramisù.{' '}
                  </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: immagini della Spagna </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Immagini della Spagna.{' '}
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : i film più famosi ambientati nell'antica Roma
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : I film più famosi ambientati nell'antica Roma.
                  </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : filmografia di Giuseppe Tornatore{' '}
                  </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Filmografia di Giuseppe Tornatore.{' '}
                  </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Gli Incredibili Monsters &amp; Co. WALL-E{' '}
                  </span>
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Gli Incredibili Monsters &amp; Co. WALL-E.
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Gli Incredibili, Monsters &amp; Co., WALL-E.
                  </span>
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Gli Incredibili. Monsters &amp; Co. WALL-E
                  </span>
                </p>
                <p className={styles.block_316}>
                  If the speaker utters a line containing a web search and a
                  full sentence, separate the two segments with a period (.).
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il Decamerone Dante. No, volevo dire Boccaccio.
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Il Decamerone Dante, no, volevo dire Boccaccio
                  </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Apri Google. testo ultima canzone Tiziano Ferro
                  </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Apri Google. Testo ultima canzone Tiziano{' '}
                  </span>
                </p>
                <p className={styles.block_320}>Ferro.</p>
                <p className={styles.block_321}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Apri Google, testo ultima canzone Tiziano Ferro.
                  </span>
                </p>
                <p className={styles.block_322}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Sono d'accordo. Tuttavia bisogna{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Begins as complete sentence and ends{' '}
                  </span>
                </p>
                <p className={styles.block_324}>mid-stream.</p>
                <p className={styles.block_325}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : comprarne uno nuovo. Tu cosa hai fatto?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Fragment is the end of a sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : ancora stabilito, quindi aspetta che te ne diano conferma.
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Begins mid-stream but ends completely; part of complete
                    sentence.
                  </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : molto difficile, quindi non scoraggiarti.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sto andando al bar. Ordinerò un Quanto costa un
                    cappuccino?
                  </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not put a period, hyphen, or ellipsis, even if another
                    sentence follows.
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Quanto costa il Dov'è che{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_332}>sentences.</p>
                <p className={styles.block_333}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Dov'è Dov'è la spiaggia?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Repeated beginning of the sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : andando via ma poi ha deciso di{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sounds like the middle of a sentence;{' '}
                  </span>
                </p>
                <p className={styles.block_335}>
                  beginning and end were cut off.
                </p>
                <p className={styles.block_336}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Dov'è la più vicina stazione di servizio?{' '}
                  </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Dov'è, la più vicina, stazione di servizio?
                  </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Even if the speaker uses long pauses in these places, do
                    not use a comma. There are places where commas are allowed
                    or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_342}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Castel Sant'Elmo, è vicino?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: topic-comment </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Pomodoro, frutto o vegetale?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: topic-comment </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Oggi pizza, la adoro.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: topicalization </span>
                </p>
                <p className={styles.block_346}>
                  Put a comma after common sentence openers such as
                  parenthetical clauses or phrases, absolute phrases, vocatives
                  and appositions.
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Maria, che comunque trovo davvero simpatica, mi sembra un
                    po' invadente.
                  </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>: parenthetical clause </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Essendo malato, Fabrizio non è andato a scuola.
                  </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>: absolute phrase </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Mamma, aiutami tu! </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: vocative </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Carla, l'amica di Giovanna, è nata in India.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: apposition </span>
                </p>
                <p className={styles.block_353}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Beh, ho pensato che fossi in compagnia.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Discourse word. Other examples of{' '}
                  </span>
                </p>
                <p className={styles.block_355}>
                  discourse words in Italian include "ehm", "mah", "vabbè" and
                  "va bè".
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Scusami, tesoro. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Interjection. Other examples of{' '}
                  </span>
                </p>
                <p className={styles.block_357}>
                  interjections include "wow", "ehi", "haha", and others.
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Wow, magnifico. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: Interjection </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ok, farò quello che vuoi.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Yes/no word. Other examples of these{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  types items include "sì", "no", "certo", and others.
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sì, lo so. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: Yes/no word. </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Certo, posso farlo. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : No pause after "certo".{' '}
                  </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Certo. Posso farlo. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Substantial pause after "certo".{' '}
                  </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Bene, mi fa molto piacere.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Use a comma when there is no pause,{' '}
                  </span>
                </p>
                <p className={styles.block_365}>
                  or when there is a pause that isn't long.
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Bene. Mi fa molto piacere.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Use a period when there is a substantial{' '}
                  </span>
                </p>
                <p className={styles.block_367}>pause after "bene".</p>
                <p className={styles.block_368}>Use commas in lists.</p>
                <p className={styles.block_369}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il mio nuovo appartamento è spazioso, bello, luminoso.
                  </span>
                </p>
                <p className={styles.block_370}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il presidente degli Stati Uniti, Barack Obama, era al
                    summit.
                  </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Non-restrictive modifier. "Barack Obama" does not change
                    the core meaning of "il presidente degli Stati Uniti", it
                    just adds additional information about the US president.
                  </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : I clienti che possiedono la carta fedeltà potranno
                    ritirare un regalo alla cassa.
                  </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Restrictive modifier. The relative clause "che possiedono
                    la carta fedeltà" restricts which people we are talking
                    about, it doesn't just add additional information about an
                    already delineated
                  </span>
                </p>
                <p className={styles.block_375}>group of people.</p>
                <p className={styles.block_376}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il Presidente Obama, che è stato eletto nel 2008, ha
                    iniziato il suo mandato nel 2009.
                  </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Non-restrictive modifier. As a rule of thumb, if you ask
                    yourself: "quale presidente degli Stati Uniti" or "quale
                    compagno di classe" and the answer is not absolutely clear,
                    don't use commas.
                  </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il presidente che è stato eletto nel 2008 ha iniziato il
                    suo mandato nel 2009.
                  </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Unless there are significant pauses after "presidente" and
                    "2008", you should assume this is a restrictive modifier.
                  </span>
                </p>
                <p className={styles.block_380}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: A presto, Sergio </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: A presto Sergio </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: A presto, Sergio. </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Con affetto, Mirella </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Con affetto Mirella </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Con affetto, Mirella. </span>
                </p>
                <p className={styles.block_387}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Ciao. </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Ciao Danilo. </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Ciao, sono Gloria. </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ciao Danilo, sono Gloria.{' '}
                  </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ciao Danilo. Sono Gloria.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Long pause between "Ciao Danilo." and{' '}
                  </span>
                </p>
                <p className={styles.block_393}>
                  "Sono Gloria." Treat as separate sentences.
                </p>
                <p className={styles.block_394}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Martina, richiamami. </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Come stai, Riccardo? </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Marco, ciao, sono Tania.{' '}
                  </span>
                </p>
                <p className={styles.block_397}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Ok Google </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ok Google, immagini di gattini{' '}
                  </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ok Google, mostrami le informazioni di contatto di Flavio.
                  </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ok Google, quando è Pasqua quest'anno?{' '}
                  </span>
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ne sei sicuro? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Intonation sounds more like a statement{' '}
                  </span>
                </p>
                <p className={styles.block_405}>than a question.</p>
                <p className={styles.block_406}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Alle 3:00 di mattina?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Utterance uses rising intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: E Caterina, anche? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Utterance uses rising intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: meteo a Napoli </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Query uses rising intonation, but is most
                  </span>
                </p>
                <p className={styles.block_408}>
                  likely a web search rather than a true question.
                </p>
                <p className={styles.block_409}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Smettila! </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Evviva! </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Evviva. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Sei proprio uno sciocco.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Buon compleanno! </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ti auguro una bella giornata.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ho superato l'esame! </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Do not use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il mio amico ha detto "alligatore coccodrillo".
                  </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Il mio amico ha detto, "alligatore coccodrillo."
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Il mio amico ha detto "alligatore coccodrillo."
                  </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Il mio amico ha detto, "alligatore coccodrillo".
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The word "dire" is the most common reported speech verb in
                    Italian, but other words ("chiedere", "rispondere",
                    "affermare") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_422}>
                  Prioritize the punctuation of the frame sentence over the
                  quoted text. If the text in quotation marks qualifies as more
                  than one sentence, punctuate it. But do not punctuate it right
                  before the
                </p>
                <p className={styles.block_423}>
                  punctuation mark of the frame sentence, unless it contains a
                  question or an exclamation mark. Avoid a sequence of two
                  identical punctuaction marks (for example: "Capito?"?).
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Anna disse "Incontriamoci alle 3:00".{' '}
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Anna disse "Incontriamoci alle 3:00."{' '}
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The word "dire" is the most common reported speech verb in
                    Italian, but other words ("chiedere", "rispondere",
                    "affermare") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Irene ha chiesto "Ci vediamo alle 3:00?".{' '}
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Irene ha chiesto "Ci vediamo alle 3:00".{' '}
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Irene ha chiesto "Ci vediamo alle 3:00?"{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Irene ha davvero detto "Incontriamoci lì"?
                  </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Irene ha davvere detto "Incontriamoci lì."?
                  </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Luca ha fatto "Ci sarò. Te lo prometto" senza neanche
                    controllare il calendario.
                  </span>
                </p>
                <p className={styles.block_432}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Traduci in islandese: Come stai?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : The quote follows the command, so use{' '}
                  </span>
                </p>
                <p className={styles.block_434}>a colon.</p>
                <p className={styles.block_435}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Traduci "Come ti chiami?" in russo.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : The quote is in the middle of a sentence,
                  </span>
                </p>
                <p className={styles.block_436}>so use quotation marks.</p>
                <p className={styles.block_437}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Come si dice "Ti amo" in arabo?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Capitalize "Ti amo" because it is a full{' '}
                  </span>
                </p>
                <p className={styles.block_438}>sentence.</p>
                <p className={styles.block_439}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Come si dice in olandese: Voglio un caffè.
                  </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : A example@gmail.com: Ehi, com'è andata la tua giornata?
                  </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Manda email a example@gmail.com con testo: Ehi, com'è
                    andata la tua giornata?
                  </span>
                </p>
                <p className={styles.block_442}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Crea un appuntamento per domani alle 3:30 del pomeriggio:
                    appuntamento dal medico.
                  </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Manda messaggio a Carmela: Il pacco non arriverà prima di
                    mercoledì.
                  </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Manda un messaggio a Sara dicendo che sarò lì fra cinque
                    minuti.
                  </span>
                </p>
                <p className={styles.block_446}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Traduci "ciao" in croato.{' '}
                  </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Ciao. </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Traduci in spagnolo: tornare.{' '}
                  </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Tornare. </span>
                </p>
                <p className={styles.block_451}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Definisci metempsicosi.{' '}
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Definisci "metempsicosi".{' '}
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ha appena detto la parola abete.{' '}
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Ha appena detto la parola "abete".{' '}
                  </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Letale è un palindromo sillabico.{' '}
                  </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : "Letale" è un palindromo sillabico.{' '}
                  </span>
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the Italian letters a through z, you should not use
                  any other symbol than: 0-9 äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿ
                  žÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸ Ž23ao,?! ȳ Ȳ
                  ~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_459}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : L'Aquila è situata alla sinistra dell'Aterno.
                  </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il tuffo di Alessandro è stato un po' goffo.
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : L'amica di Mirella è dell'88 e mangia solo da McDonald's.
                  </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il protagonista di Assassin's Creed è Altaïr Ibn-La'Ahad.
                  </span>
                </p>
                <p className={styles.block_464}>
                  Put a space before and after an hyphen if it is opposing two
                  words. Do not use spaces for compund words or numbers.
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sei andato a San Siro a vedere Milan - Sampdoria?
                  </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Alfredo preferisce fare la tratta Londra - Parigi in
                    treno.
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Luna si è iscritta al corso di danza latino- americana,
                    non a quello di lotta greco-romana.
                  </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Mirella e Alessandro hanno litigato per un loro ex-amico.
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : L'Italia ha battuto la Scozia 22-19.{' '}
                  </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Gli anni 70-80 sono sopravvalutati.{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il meeting è alle 19-19:15, ma il mio orario di lavoro è
                    9-18.
                  </span>
                </p>
                <p className={styles.block_471}>
                  Never use a final apostrophe to replace an accent.
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Giosuè arrivò in città.{' '}
                  </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Giosue' arrivo' in citta'.{' '}
                  </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Perché, è di sua maestà?{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Perche', e' di sua maesta'?{' '}
                  </span>
                </p>
                <p className={styles.block_476}>
                  Never use spaces with slashes indicating alternatives.
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sono richieste la residenza fiscale e/o il domicilio.
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Sono richieste la residenza fiscale e / o il domicilio.
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    sono richieste la residenza fiscale e o il domicilio{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Il/la sottoscritto/a </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Il / la sottoscritto / a{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : La ragazza/modella è già in sala trucco.{' '}
                  </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : La ragazza / modella è già in sala trucco.
                  </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Come va {`{punto di domanda}`}{' '}
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>: Come va? </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Come va punto di domanda{' '}
                  </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Come va punto di domanda?{' '}
                  </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    come va punto di domanda{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_491}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_492}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: {`{punto}`} </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    :{` {punto di domanda}`}{' '}
                  </span>
                </p>
                <p className={styles.block_495}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sto partendo adesso{` {punto} `}Quanto dura il tragitto?
                  </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    sto partendo adesso punto quanto dura il tragitto [rising
                    intonation]{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
