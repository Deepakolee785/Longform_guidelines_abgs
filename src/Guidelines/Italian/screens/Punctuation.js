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
              <p class="block_282">Punctuation</p>
              <p class="block_283">
                Follow the punctuation regulations of Italian. Additional
                conventions are outlined in this section.
              </p>
              <p class="block_284">Fragments versus sentences</p>
              <p class="block_285">
                Add punctuation where needed, but err on the side of keeping it
                minimal.
              </p>
              <p class="block_286">
                Full sentences should start with an uppercase letter and end
                with a punctuation mark.
              </p>
              <p class="block_287">
                In general, a complete sentence contains a verb.
              </p>
              <p class="block_288">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Lavora da casa oggi. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Includes verb. </span>
              </p>
              <p class="block_289">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Chiama. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: consists of a verb. </span>
              </p>
              <p class="block_290">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: E non mi piace neanche. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Includes verb. Sounds like a whole{' '}
                </span>
              </p>
              <p class="block_291">
                utterance rather than just a conjunction to a larger sentence.
              </p>
              <p class="block_292">
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a specific question, or
                if it's an example where dropping the subject sounds completely
                natural as a complete sentence.
              </p>
              <p class="block_293">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Chi ha bussato alla porta? Il nostro vicino.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: two speakers </span>
              </p>
              <p class="block_294">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: il nostro vicino </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : No context to suggest this is a sentence;
                </span>
              </p>
              <p class="block_295">treat it as a fragment.</p>
              <p class="block_296">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: immagini di cani </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Google search for images </span>
              </p>
              <p class="block_297">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Andato bene l'esame? </span>
              </p>
              <p class="block_298">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: meteo a Roma </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : This is asking for information, but the{' '}
                </span>
              </p>
              <p class="block_299">
                most likely interpretation is as a sentence fragment on its own.
              </p>
              <p class="block_300">
                Interjections, greetings, and farewells said in isolation should
                be considered complete sentences and punctuated as such.
              </p>
              <p class="block_301">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Accidenti. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: interjection </span>
              </p>
              <p class="block_302">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ciao. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: greeting </span>
              </p>
              <p class="block_303">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Va bene. Arrivederci. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : This includes both a yes/no word and a{' '}
                </span>
              </p>
              <p class="block_304">farewell, with a long pause between.</p>
              <p class="block_305">
                Do not capitalize or punctuate phrases that are intended to be
                used by the speaker as a web search, not as full sentences.
              </p>
              <p class="block_306">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: preparare il tiramisù </span>
              </p>
              <p class="block_307">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Preparare il tiramisù. </span>
              </p>
              <p class="block_308">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: immagini della Spagna </span>
              </p>
              <p class="block_210">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Immagini della Spagna. </span>
              </p>
              <p class="block_309">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : i film più famosi ambientati nell'antica Roma
                </span>
              </p>
              <p class="block_310">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : I film più famosi ambientati nell'antica Roma.
                </span>
              </p>
              <p class="block_311">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: filmografia di Giuseppe Tornatore </span>
              </p>
              <p class="block_312">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Filmografia di Giuseppe Tornatore. </span>
              </p>
              <p class="block_313">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Gli Incredibili Monsters &amp; Co. WALL-E{' '}
                </span>
              </p>
              <p class="block_314">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Gli Incredibili Monsters &amp; Co. WALL-E.
                </span>
              </p>
              <p class="block_315">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Gli Incredibili, Monsters &amp; Co., WALL-E.
                </span>
              </p>
              <p class="block_314">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Gli Incredibili. Monsters &amp; Co. WALL-E
                </span>
              </p>
              <p class="block_316">
                If the speaker utters a line containing a web search and a full
                sentence, separate the two segments with a period (.).
              </p>
              <p class="block_317">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il Decamerone Dante. No, volevo dire Boccaccio.
                </span>
              </p>
              <p class="block_310">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Il Decamerone Dante, no, volevo dire Boccaccio
                </span>
              </p>
              <p class="block_318">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Apri Google. testo ultima canzone Tiziano Ferro
                </span>
              </p>
              <p class="block_319">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Apri Google. Testo ultima canzone Tiziano{' '}
                </span>
              </p>
              <p class="block_320">Ferro.</p>
              <p class="block_321">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Apri Google, testo ultima canzone Tiziano Ferro.
                </span>
              </p>
              <p class="block_322">
                Capitalize sentence fragments that sound like the beginning of a
                sentence. Add end punctuation to sentence fragments that sound
                like the end of a sentence. For fragments that do not clearly
                sound like the beginning or end of a sentence, leave out
                capitalization and punctuation. Note that sentence fragments may
                be a result of cut-off audio samples.
              </p>
              <p class="block_323">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sono d'accordo. Tuttavia bisogna </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Begins as complete sentence and ends{' '}
                </span>
              </p>
              <p class="block_324">mid-stream.</p>
              <p class="block_325">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : comprarne uno nuovo. Tu cosa hai fatto?{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Fragment is the end of a sentence.{' '}
                </span>
              </p>
              <p class="block_326">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : ancora stabilito, quindi aspetta che te ne diano conferma.
                </span>
              </p>
              <p class="block_327">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Begins mid-stream but ends completely; part of complete
                  sentence.
                </span>
              </p>
              <p class="block_328">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : molto difficile, quindi non scoraggiarti.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Audio was cut off at the beginning.{' '}
                </span>
              </p>
              <p class="block_329">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Sto andando al bar. Ordinerò un Quanto costa un cappuccino?
                </span>
              </p>
              <p class="block_330">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Do not put a period, hyphen, or ellipsis, even if another
                  sentence follows.
                </span>
              </p>
              <p class="block_331">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Quanto costa il Dov'è che </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Both sound like beginnings of </span>
              </p>
              <p class="block_332">sentences.</p>
              <p class="block_333">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Dov'è Dov'è la spiaggia? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Repeated beginning of the sentence.{' '}
                </span>
              </p>
              <p class="block_334">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: andando via ma poi ha deciso di </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Sounds like the middle of a sentence;{' '}
                </span>
              </p>
              <p class="block_335">beginning and end were cut off.</p>
              <p class="block_336">
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not capitalize or punctuate it as a
                sentence.
              </p>
              <p class="block_337">Commas</p>
              <p class="block_338">
                Only use commas where required. Err on the side of minimal
                punctuation. Do not rely on intonation.
              </p>
              <p class="block_339">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Dov'è la più vicina stazione di servizio?{' '}
                </span>
              </p>
              <p class="block_340">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Dov'è, la più vicina, stazione di servizio?
                </span>
              </p>
              <p class="block_341">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Even if the speaker uses long pauses in these places, do not
                  use a comma. There are places where commas are allowed or
                  required, but this example contains neither.
                </span>
              </p>
              <p class="block_342">
                For complete sentences that follow a single word or phrase that
                focuses the meaning of a sentence, put a comma after the single
                word or phrase.
              </p>
              <p class="block_343">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Castel Sant'Elmo, è vicino? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: topic-comment </span>
              </p>
              <p class="block_344">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Pomodoro, frutto o vegetale? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: topic-comment </span>
              </p>
              <p class="block_345">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Oggi pizza, la adoro. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: topicalization </span>
              </p>
              <p class="block_346">
                Put a comma after common sentence openers such as parenthetical
                clauses or phrases, absolute phrases, vocatives and appositions.
              </p>
              <p class="block_347">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Maria, che comunque trovo davvero simpatica, mi sembra un
                  po' invadente.
                </span>
              </p>
              <p class="block_348">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">: parenthetical clause </span>
              </p>
              <p class="block_349">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Essendo malato, Fabrizio non è andato a scuola.
                </span>
              </p>
              <p class="block_350">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">: absolute phrase </span>
              </p>
              <p class="block_351">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Mamma, aiutami tu! </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: vocative </span>
              </p>
              <p class="block_352">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Carla, l'amica di Giovanna, è nata in India.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: apposition </span>
              </p>
              <p class="block_353">
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However: If there is a long pause
                between a discourse word, interjection, or yes/no word and a
                full sentence that follows it, treat that initial word as a
                separate sentence.
              </p>
              <p class="block_354">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Beh, ho pensato che fossi in compagnia.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Discourse word. Other examples of </span>
              </p>
              <p class="block_355">
                discourse words in Italian include "ehm", "mah", "vabbè" and "va
                bè".
              </p>
              <p class="block_356">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Scusami, tesoro. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Interjection. Other examples of </span>
              </p>
              <p class="block_357">
                interjections include "wow", "ehi", "haha", and others.
              </p>
              <p class="block_358">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Wow, magnifico. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Interjection </span>
              </p>
              <p class="block_359">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ok, farò quello che vuoi. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Yes/no word. Other examples of these{' '}
                </span>
              </p>
              <p class="block_360">
                types items include "sì", "no", "certo", and others.
              </p>
              <p class="block_361">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sì, lo so. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Yes/no word. </span>
              </p>
              <p class="block_362">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Certo, posso farlo. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: No pause after "certo". </span>
              </p>
              <p class="block_363">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Certo. Posso farlo. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Substantial pause after "certo". </span>
              </p>
              <p class="block_364">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Bene, mi fa molto piacere. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Use a comma when there is no pause,{' '}
                </span>
              </p>
              <p class="block_365">or when there is a pause that isn't long.</p>
              <p class="block_366">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Bene. Mi fa molto piacere. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Use a period when there is a substantial{' '}
                </span>
              </p>
              <p class="block_367">pause after "bene".</p>
              <p class="block_368">Use commas in lists.</p>
              <p class="block_369">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il mio nuovo appartamento è spazioso, bello, luminoso.
                </span>
              </p>
              <p class="block_370">
                Use commas for non-restrictive modifiers, but do not use commas
                for restrictive modifiers. The basic test for this is whether
                the modifier can be dropped from the sentence and still keep
                basically the same meaning.
              </p>
              <p class="block_371">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il presidente degli Stati Uniti, Barack Obama, era al
                  summit.
                </span>
              </p>
              <p class="block_372">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Non-restrictive modifier. "Barack Obama" does not change the
                  core meaning of "il presidente degli Stati Uniti", it just
                  adds additional information about the US president.
                </span>
              </p>
              <p class="block_373">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : I clienti che possiedono la carta fedeltà potranno ritirare
                  un regalo alla cassa.
                </span>
              </p>
              <p class="block_374">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Restrictive modifier. The relative clause "che possiedono la
                  carta fedeltà" restricts which people we are talking about, it
                  doesn't just add additional information about an already
                  delineated
                </span>
              </p>
              <p class="block_375">group of people.</p>
              <p class="block_376">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il Presidente Obama, che è stato eletto nel 2008, ha
                  iniziato il suo mandato nel 2009.
                </span>
              </p>
              <p class="block_377">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Non-restrictive modifier. As a rule of thumb, if you ask
                  yourself: "quale presidente degli Stati Uniti" or "quale
                  compagno di classe" and the answer is not absolutely clear,
                  don't use commas.
                </span>
              </p>
              <p class="block_378">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il presidente che è stato eletto nel 2008 ha iniziato il suo
                  mandato nel 2009.
                </span>
              </p>
              <p class="block_379">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Unless there are significant pauses after "presidente" and
                  "2008", you should assume this is a restrictive modifier.
                </span>
              </p>
              <p class="block_380">
                Use commas in sign-offs, such as those at the end of a message.
                Do not use end punctuation.
              </p>
              <p class="block_381">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: A presto, Sergio </span>
              </p>
              <p class="block_382">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: A presto Sergio </span>
              </p>
              <p class="block_383">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: A presto, Sergio. </span>
              </p>
              <p class="block_384">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Con affetto, Mirella </span>
              </p>
              <p class="block_385">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Con affetto Mirella </span>
              </p>
              <p class="block_386">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Con affetto, Mirella. </span>
              </p>
              <p class="block_387">
                Do not use commas in sentences that consist only of a greeting
                and an addressee. If a greeting occurs at the beginning of a
                sentence or fragment, place a comma after the greeting. If the
                greeting includes an addressee, place the comma after the
                addressee.
              </p>
              <p class="block_388">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ciao. </span>
              </p>
              <p class="block_389">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ciao Danilo. </span>
              </p>
              <p class="block_390">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ciao, sono Gloria. </span>
              </p>
              <p class="block_391">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ciao Danilo, sono Gloria. </span>
              </p>
              <p class="block_392">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ciao Danilo. Sono Gloria. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Long pause between "Ciao Danilo." and{' '}
                </span>
              </p>
              <p class="block_393">
                "Sono Gloria." Treat as separate sentences.
              </p>
              <p class="block_394">
                Except in greetings, sentence-initial and sentence-final
                addressees should be separated by a comma.
              </p>
              <p class="block_395">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Martina, richiamami. </span>
              </p>
              <p class="block_221">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Come stai, Riccardo? </span>
              </p>
              <p class="block_396">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Marco, ciao, sono Tania. </span>
              </p>
              <p class="block_397">
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".
              </p>
              <p class="block_398">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ok Google </span>
              </p>
              <p class="block_399">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ok Google, immagini di gattini </span>
              </p>
              <p class="block_400">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ok Google, mostrami le informazioni di contatto di Flavio.
                </span>
              </p>
              <p class="block_401">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ok Google, quando è Pasqua quest'anno?{' '}
                </span>
              </p>
              <p class="block_402">Intonation marks</p>
              <p class="block_403">
                Capitalize and punctuate the following as questions: 1) All
                queries syntactically built as questions, regardless of
                intonation. 2) All queries which sound like they are being used
                as questions, regardless of sentence structure.
              </p>
              <p class="block_404">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ne sei sicuro? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Intonation sounds more like a statement{' '}
                </span>
              </p>
              <p class="block_405">than a question.</p>
              <p class="block_406">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Alle 3:00 di mattina? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Utterance uses rising intonation. </span>
              </p>
              <p class="block_406">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: E Caterina, anche? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Utterance uses rising intonation. </span>
              </p>
              <p class="block_407">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: meteo a Napoli </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Query uses rising intonation, but is most
                </span>
              </p>
              <p class="block_408">
                likely a web search rather than a true question.
              </p>
              <p class="block_409">
                If a speaker uses clearly exclamatory intonation, use an
                exclamation point. If there is any doubt, err on the side of
                using period.
              </p>
              <p class="block_410">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Smettila! </span>
              </p>
              <p class="block_411">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Evviva! </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Speaker sounds enthusiastic. </span>
              </p>
              <p class="block_412">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Evviva. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Speaker sounds unenthused. </span>
              </p>
              <p class="block_413">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sei proprio uno sciocco. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Spoken dispassionately. </span>
              </p>
              <p class="block_414">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Buon compleanno! </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Spoken with enthusiasm. </span>
              </p>
              <p class="block_415">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ti auguro una bella giornata. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: pleasant neutral tone </span>
              </p>
              <p class="block_414">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ho superato l'esame! </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Spoken with enthusiasm. </span>
              </p>
              <p class="block_416">Colon and quotation</p>
              <p class="block_417">
                Do not use a comma between reported speech verbs and direct
                quotations. Do not put punctuation within quotation marks unless
                the punctuation belongs to the reported speech.
              </p>
              <p class="block_418">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il mio amico ha detto "alligatore coccodrillo".
                </span>
              </p>
              <p class="block_419">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Il mio amico ha detto, "alligatore coccodrillo."
                </span>
              </p>
              <p class="block_420">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Il mio amico ha detto "alligatore coccodrillo."
                </span>
              </p>
              <p class="block_419">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Il mio amico ha detto, "alligatore coccodrillo".
                </span>
              </p>
              <p class="block_421">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : The word "dire" is the most common reported speech verb in
                  Italian, but other words ("chiedere", "rispondere",
                  "affermare") can be used for reported speech.
                </span>
              </p>
              <p class="block_422">
                Prioritize the punctuation of the frame sentence over the quoted
                text. If the text in quotation marks qualifies as more than one
                sentence, punctuate it. But do not punctuate it right before the
              </p>
              <p class="block_423">
                punctuation mark of the frame sentence, unless it contains a
                question or an exclamation mark. Avoid a sequence of two
                identical punctuaction marks (for example: "Capito?"?).
              </p>
              <p class="block_424">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Anna disse "Incontriamoci alle 3:00".{' '}
                </span>
              </p>
              <p class="block_425">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Anna disse "Incontriamoci alle 3:00."{' '}
                </span>
              </p>
              <p class="block_421">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : The word "dire" is the most common reported speech verb in
                  Italian, but other words ("chiedere", "rispondere",
                  "affermare") can be used for reported speech.
                </span>
              </p>
              <p class="block_426">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Irene ha chiesto "Ci vediamo alle 3:00?".{' '}
                </span>
              </p>
              <p class="block_427">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Irene ha chiesto "Ci vediamo alle 3:00".{' '}
                </span>
              </p>
              <p class="block_428">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Irene ha chiesto "Ci vediamo alle 3:00?"{' '}
                </span>
              </p>
              <p class="block_429">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Irene ha davvero detto "Incontriamoci lì"?
                </span>
              </p>
              <p class="block_430">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Irene ha davvere detto "Incontriamoci lì."?
                </span>
              </p>
              <p class="block_431">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Luca ha fatto "Ci sarò. Te lo prometto" senza neanche
                  controllare il calendario.
                </span>
              </p>
              <p class="block_432">
                Use a colon but no quotation marks in quotative voice actions
                when the quote follows the command. Use quotation marks when the
                quote is in the middle of the sentence.
              </p>
              <p class="block_433">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Traduci in islandese: Come stai? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : The quote follows the command, so use{' '}
                </span>
              </p>
              <p class="block_434">a colon.</p>
              <p class="block_435">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Traduci "Come ti chiami?" in russo.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : The quote is in the middle of a sentence,
                </span>
              </p>
              <p class="block_436">so use quotation marks.</p>
              <p class="block_437">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Come si dice "Ti amo" in arabo? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Capitalize "Ti amo" because it is a full{' '}
                </span>
              </p>
              <p class="block_438">sentence.</p>
              <p class="block_439">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Come si dice in olandese: Voglio un caffè.
                </span>
              </p>
              <p class="block_440">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : A example@gmail.com: Ehi, com'è andata la tua giornata?
                </span>
              </p>
              <p class="block_441">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Manda email a example@gmail.com con testo: Ehi, com'è andata
                  la tua giornata?
                </span>
              </p>
              <p class="block_442">
                Leave text after colons lowercase unless capitalization is
                required (can stand alone as complete sentence).
              </p>
              <p class="block_443">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Crea un appuntamento per domani alle 3:30 del pomeriggio:
                  appuntamento dal medico.
                </span>
              </p>
              <p class="block_444">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Manda messaggio a Carmela: Il pacco non arriverà prima di
                  mercoledì.
                </span>
              </p>
              <p class="block_445">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Manda un messaggio a Sara dicendo che sarò lì fra cinque
                  minuti.
                </span>
              </p>
              <p class="block_446">
                When speakers make a request for single words to be translated
                into another language, don't punctuate or capitalize the words,
                even if you'd consider the words as sentences in other
                situations.
              </p>
              <p class="block_447">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Traduci "ciao" in croato. </span>
              </p>
              <p class="block_448">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ciao. </span>
              </p>
              <p class="block_449">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Traduci in spagnolo: tornare. </span>
              </p>
              <p class="block_450">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Tornare. </span>
              </p>
              <p class="block_451">
                Do not use quotation marks for metalinguistic uses of words or
                phrases. These uses include defining the word, talking about the
                spelling of the word, or any other type of reference to the word
                itself as a thing.
              </p>
              <p class="block_209">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Definisci metempsicosi. </span>
              </p>
              <p class="block_452">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Definisci "metempsicosi". </span>
              </p>
              <p class="block_453">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ha appena detto la parola abete. </span>
              </p>
              <p class="block_454">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Ha appena detto la parola "abete". </span>
              </p>
              <p class="block_455">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Letale è un palindromo sillabico. </span>
              </p>
              <p class="block_456">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : "Letale" è un palindromo sillabico.{' '}
                </span>
              </p>
              <p class="block_457">Other symbols</p>
              <p class="block_458">
                Apart from the Italian letters a through z, you should not use
                any other symbol than: 0-9 äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿ
                žÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸ Ž23ao,?! ȳ Ȳ
                ~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
              </p>
              <p class="block_459">
                Transcribe apostrophes as they are normally used.
              </p>
              <p class="block_460">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : L'Aquila è situata alla sinistra dell'Aterno.
                </span>
              </p>
              <p class="block_461">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il tuffo di Alessandro è stato un po' goffo.
                </span>
              </p>
              <p class="block_462">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : L'amica di Mirella è dell'88 e mangia solo da McDonald's.
                </span>
              </p>
              <p class="block_463">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il protagonista di Assassin's Creed è Altaïr Ibn-La'Ahad.
                </span>
              </p>
              <p class="block_464">
                Put a space before and after an hyphen if it is opposing two
                words. Do not use spaces for compund words or numbers.
              </p>
              <p class="block_369">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Sei andato a San Siro a vedere Milan - Sampdoria?
                </span>
              </p>
              <p class="block_465">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Alfredo preferisce fare la tratta Londra - Parigi in treno.
                </span>
              </p>
              <p class="block_466">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Luna si è iscritta al corso di danza latino- americana, non
                  a quello di lotta greco-romana.
                </span>
              </p>
              <p class="block_467">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Mirella e Alessandro hanno litigato per un loro ex-amico.
                </span>
              </p>
              <p class="block_468">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : L'Italia ha battuto la Scozia 22-19.{' '}
                </span>
              </p>
              <p class="block_469">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Gli anni 70-80 sono sopravvalutati.{' '}
                </span>
              </p>
              <p class="block_470">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il meeting è alle 19-19:15, ma il mio orario di lavoro è
                  9-18.
                </span>
              </p>
              <p class="block_471">
                Never use a final apostrophe to replace an accent.
              </p>
              <p class="block_472">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Giosuè arrivò in città. </span>
              </p>
              <p class="block_473">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Giosue' arrivo' in citta'. </span>
              </p>
              <p class="block_474">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Perché, è di sua maestà? </span>
              </p>
              <p class="block_475">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Perche', e' di sua maesta'? </span>
              </p>
              <p class="block_476">
                Never use spaces with slashes indicating alternatives.
              </p>
              <p class="block_477">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Sono richieste la residenza fiscale e/o il domicilio.
                </span>
              </p>
              <p class="block_478">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Sono richieste la residenza fiscale e / o il domicilio.
                </span>
              </p>
              <p class="block_479">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  sono richieste la residenza fiscale e o il domicilio{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_480">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Il/la sottoscritto/a </span>
              </p>
              <p class="block_481">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Il / la sottoscritto / a </span>
              </p>
              <p class="block_482">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : La ragazza/modella è già in sala trucco.{' '}
                </span>
              </p>
              <p class="block_483">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : La ragazza / modella è già in sala trucco.
                </span>
              </p>
              <p class="block_484">Spoken punctuation</p>
              <p class="block_485">
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.)
              </p>
              <p class="block_486">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Come va {`{punto di domanda}`} </span>
              </p>
              <p class="block_487">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Come va? </span>
              </p>
              <p class="block_488">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Come va punto di domanda </span>
              </p>
              <p class="block_489">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Come va punto di domanda? </span>
              </p>
              <p class="block_490">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">come va punto di domanda </span>
                <span class="text_">" </span>
              </p>
              <p class="block_491">
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.
              </p>
              <p class="block_492">
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.
              </p>
              <p class="block_493">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: {`{punto}`} </span>
              </p>
              <p class="block_494">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">:{` {punto di domanda}`} </span>
              </p>
              <p class="block_495">
                Treat spoken punctuation as you would regular symbols, and
                capitalize the following sentence as normal.
              </p>
              <p class="block_496">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Sto partendo adesso{` {punto} `}Quanto dura il tragitto?
                </span>
              </p>
              <p class="block_497">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  sto partendo adesso punto quanto dura il tragitto [rising
                  intonation]{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_498">Format</p>
              <p class="block_499">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <p class="block_500">Number</p>
              <p class="block_501">
                Use numbers or spelling depending on your intuition as a native
                speaker of Italian. Normally, we write small numbers (0-9) as
                words and larger numbers using digits; however, we may write
                small numbers using digits if they appear in a list, in a
                mathematical expression, as street numbers, as a measure or time
                unit.
              </p>
              <p class="block_502">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Marina dà da mangiare a due o tre gatti del vicinato.
                </span>
              </p>
              <p class="block_503">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Quest'anno si sono iscritte solo 13 matricole.
                </span>
              </p>
              <p class="block_504">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sono lunghi 2 cm ciascuno. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Small number, but used for describing{' '}
                </span>
              </p>
              <p class="block_254">an exact quantity.</p>
              <p class="block_505">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Costerà 35 milioni di euro. </span>
              </p>
              <p class="block_506">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ci sono 7 miliardi di persone sulla terra, di cui 60 milioni
                  in Italia.
                </span>
              </p>
              <p class="block_507">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Use "7" instead of "sette" to be consistent with the
                  following number "60".
                </span>
              </p>
              <p class="block_508">
                Ordinals from 0 to 9 should be written as words unless they are
                part of a list of numbers, maths, degrees etc. Above 10, use
                digits combined with the correct feminine or masculine ordinal
                indicators a and o. Please don't confuse the masculine ordinal
                indicator o with the degree sign °.
              </p>
              <p class="block_509">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Il primo è arrivato, il secondo non ancora.
                </span>
              </p>
              <p class="block_510">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 10o </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">decimo </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_510">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 10a </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">decima </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_511">
                Transcribe ordinals used as plural adjectives as words.
              </p>
              <p class="block_512">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Sono arrivati ventesimi. </span>
              </p>
              <p class="block_513">
                Write lists of numbers with digits and without commas.
              </p>
              <p class="block_514">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 0 1 1 2 3 5 8 13 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">zero uno uno due tre cinque otto </span>
              </p>
              <p class="block_515">
                <span class="text_13">tredici </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_516">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 5 4 3 2 1 lancio </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: list of numbers, no comma if just </span>
              </p>
              <p class="block_517">counting</p>
              <p class="block_518">
                For long numbers (4+ digits) indicating quantity, insert a dot
                every three digits.
              </p>
              <p class="block_519">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 10.000 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">diecimila </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_520">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p class="block_521">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ha bisogno di 1/4 L di acqua. </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : Ha bisogno di un quarto di litro di acqua.
                </span>
              </p>
              <p class="block_522">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  ha bisogno di un quarto di litro di acqua{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_523">
                <span class="text_">I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Ha bisogno di 1 / 4 L di acqua. I</span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">
                  : Ha bisogno di 1⁄4 L di acqua. (bad because it includes the
                  pre-combined fraction 1⁄4) I
                </span>
                <span class="text_9">NCORRECT</span>
                <span class="text_">: Ha bisogno di 0,25 L di acqua. </span>
              </p>
              <p class="block_524">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Be careful not to include spaces or pre- combined fraction
                  characters.
                </span>
              </p>
              <p class="block_525">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Tra 2/3 km, girare a destra. </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : Tra due terzi di chilometro, girare a destra. I
                </span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : Tra 2/3 chilometro, girare a destra. I
                </span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : Tra due terzi km, girare a destra.{' '}
                </span>
              </p>
              <p class="block_526">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 2/3 * 5/16 </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: due terzi x cinque sedicesimi I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: due terzi per cinque sedicesimi I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 2/3 per 5/16 </span>
              </p>
              <p class="block_527">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">due terzi per cinque sedicesimi </span>
                <span class="text_">" </span>
              </p>
              <p class="block_528">
                When referring to items (not units or measures), write fractions
                out in words. With mixed numbers, write the whole number part
                out in words if it is under ten, otherwise write it with
                numerals.
              </p>
              <p class="block_529">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Dammi metà della torta. </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Dammi 1/2 della torta. I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Dammi 0,5 della torta. </span>
              </p>
              <p class="block_530">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">dammi metà della torta </span>
                <span class="text_">" </span>
              </p>
              <p class="block_531">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: un terzo della mela </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 1/3 della mela I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 0,33 della mela </span>
              </p>
              <p class="block_532">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">un terzo della mela </span>
                <span class="text_">" </span>
              </p>
              <p class="block_533">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Il pollo era cotto a metà. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Here "a metà" is used more figuratively,{' '}
                </span>
              </p>
              <p class="block_534">and it is written out as a word.</p>
              <p class="block_535">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: tre arance e mezzo </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 3,5 arance I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 3 arance e 1/2 I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 3 arance e mezzo </span>
              </p>
              <p class="block_536">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">tre arance e mezzo </span>
                <span class="text_">" </span>
              </p>
              <p class="block_537">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Sono state fatte 12 torte e mezzo.{' '}
                </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Sono state fatte 12,5 torte. I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : Sono state fatte dodici torte e mezzo.{' '}
                </span>
              </p>
              <p class="block_538">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  sono state fatte dodici torte e mezzo{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_539">
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <p class="block_540">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Puoi prestarmi €2,50? </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">puoi prestami due euro e mezzo </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_541">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ha acquistato la casa al mare per 7,5 milioni di euro.
                </span>
              </p>
              <p class="block_542">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  ha acquistato la casa al mare per sette milioni di euro e
                  mezzo{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_543">
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <p class="block_544">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ha completato il 20% del lavoro. </span>
              </p>
              <p class="block_545">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: 1 milione percento </span>
              </p>
              <p class="block_546">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Il 50% dei biscotti è scomparso. </span>
              </p>
              <p class="block_547">
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p class="block_548">
                Use Roman numerals only when part of an official name or title.
              </p>
              <p class="block_549">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Assassin's Creed II </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">assassin's creed due </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_550">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Enrico VIII </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">enrico ottavo </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_551">
                Transcribe seasons and episodes of television shows with
                numerals.
              </p>
              <p class="block_552">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: stagione 3 episodio 2 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">stagione tre episodio due </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_553">
                Transcribe phone numbers using the most common format in the
                transcription language.
              </p>
              <p class="block_554">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 0039 333 45 67 890 </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: 003 933 34 56789 0 </span>
              </p>
              <p class="block_479">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  zero zero tre nove tre tre tre quattro cinque sei sette otto
                  nove zero{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_555">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: +39 333 45 67 890 </span>
              </p>
              <p class="block_556">
                Transcribe alpha-digit sequences (product codes etc.) in their
                most natural way (possibly several ways accepted). Do not
                transcribe credit card numbers, etc.
              </p>
              <p class="block_557">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: XT 660 or XT660 </span>
              </p>
              <p class="block_558">
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.
              </p>
              <p class="block_559">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 5 / 6 ^ 3 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  cinque diviso sei alla terza or cinque{' '}
                </span>
              </p>
              <p class="block_560">
                <span class="text_13">diviso sei al cubo </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_561">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Quanto fa 5 * 6? </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Quanto fa cinque per sei? I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Quanto fa 5 per 6? I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Quanto fa 5 x 6? </span>
              </p>
              <p class="block_562">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">quanto fa cinque per sei </span>
                <span class="text_">" </span>
              </p>
              <p class="block_563">
                <span class="text_15">C</span>
                <span class="text_16">ORRECT</span>
                <span class="text_17">: √3 </span>
                <span class="text_18">E</span>
                <span class="text_19">XAMPLE AUDIO</span>
                <span class="text_18">: " </span>
                <span class="text_20">radice quadrata di tre </span>
                <span class="text_18">" </span>
              </p>
              <p class="block_564">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: e ^ -0 = 1 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">e alla meno zero uguale uno </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_565">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 4x4 </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : person said "quattro per quattro" as in a
                </span>
              </p>
              <p class="block_566">truck type.</p>
              <p class="block_567">Currency and unit</p>
              <p class="block_568">
                Transcribe currencies as commonly written in the transcription
                language.
              </p>
              <p class="block_569">
                When a speaker uses words like "dollar" without specifying a
                quantity, spell them out.
              </p>
              <p class="block_570">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Il valore dell'euro è crollato. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">il valore dell'euro è crollato </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_571">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: solo pochi dollari </span>
              </p>
              <p class="block_572">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : calcolare conversione da euro a yen{' '}
                </span>
              </p>
              <p class="block_573">
                For ranges or non-specific currency quantities, write everything
                out as spoken.
              </p>
              <p class="block_574">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ho bisogno di quattro o cinquecento euro.{' '}
                </span>
              </p>
              <p class="block_575">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ha un valore compreso tra i 100 e i 500 dollari.
                </span>
              </p>
              <p class="block_576">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  ha un valore compreso tra i cento e i cinquecento dollari{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_577">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: da 9 a 12 euro </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">da nove a dodici euro </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_578">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: un euro o due </span>
              </p>
              <p class="block_579">
                Abbreviate all units that follow numeric values.
              </p>
              <p class="block_580">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Mia madre ha comprato 3 kg di mele.{' '}
                </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">mia madre ha comprato tre chili di </span>
              </p>
              <p class="block_581">
                <span class="text_13">mele </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_582">
                Use the symbol "°" for gradi, but do not add "C" unless spoken.
              </p>
              <p class="block_583">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: È luglio e a Dublino ci sono 7°C. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">è luglio e a dublino ci sono sette </span>
              </p>
              <p class="block_584">
                <span class="text_13">gradi centigradi </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_585">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: È luglio e a Dublino ci sono 7°. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">è luglio e a dublino ci sono sette </span>
              </p>
              <p class="block_586">
                <span class="text_13">gradi </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_587">
                Transcribe all numeric values preceding units in numeral form,
                even if under 10.
              </p>
              <p class="block_588">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : La cassiera mi ha dato €3 di resto.{' '}
                </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : la cassiera mi ha dato tre euro di resto{' '}
                </span>
              </p>
              <p class="block_589">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Il bambino pesa 4 kg. </span>
              </p>
              <p class="block_590">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ho vissuto a Parigi per 6 mesi. </span>
              </p>
              <p class="block_591">
                If it is clear from context that a number or number sequence
                refers to currency or time, format it as such.
              </p>
              <p class="block_592">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: La benzina costa €1,72 al litro. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">la benzina costa un euro e </span>
              </p>
              <p class="block_593">
                <span class="text_13">settandadue al litro </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_594">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Il latte viene €2,55. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">il latte viene due euro e </span>
              </p>
              <p class="block_595">
                <span class="text_13">cinquantacinque </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_596">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sono le 3:30 del pomeriggio. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  sono le tre e trenta del pomeriggio{' '}
                </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_597">Common technical abbreviations</p>
              <p class="block_598">• un megabyte - 1 MB</p>
              <p class="block_599">• un kilobyte - 1 kB</p>
              <p class="block_600">• un gigabyte - 1 GB</p>
              <p class="block_601">• un terabyte - 1 TB</p>
              <p class="block_602">Slang terms (spell them out)</p>
              <p class="block_603">• kilo</p>
              <p class="block_604">Common measurements of distance and rate</p>
              <p class="block_605">• un millimetro - 1 mm</p>
              <p class="block_606">• un centimetro - 1 cm</p>
              <p class="block_607">• un metro - 1 m</p>
              <p class="block_606">• un chilometro - 1 km</p>
              <p class="block_608">• un chilometro orario - 1 km/h</p>
              <p class="block_609">• un chilometro all'ora - 1 km/h</p>
              <p class="block_610">Common measurements of area</p>
              <p class="block_611">• un centimetro quadrato - 1 cm2</p>
              <p class="block_612">• un metro quadro - 1 m2</p>
              <p class="block_613">• un metro quadrato - 1 m2</p>
              <p class="block_614">• un chilometro quadrato - 1 km2</p>
              <p class="block_615">• un chilometro quadro - 1 km2</p>
              <p class="block_616">• un ettaro - 1 ha</p>
              <p class="block_617">• un'ara - 1 ara</p>
              <p class="block_618">Common scientific terms</p>
              <p class="block_619">• un decibel - 1 dB</p>
              <p class="block_620">• un Newton - 1 N</p>
              <p class="block_621">• un joule - 1 J</p>
              <p class="block_606">• un parsec - 1 parsec</p>
              <p class="block_622">• un ampere - 1 amp</p>
              <p class="block_616">• un Hertz - 1 Hz</p>
              <p class="block_623">• un watt - 1 W</p>
              <p class="block_624">• un chilowatt - 1 kW</p>
              <p class="block_625">• un mole - 1 mol</p>
              <p class="block_626">• una candela - 1 cd</p>
              <p class="block_627">• un lumen - 1 lm</p>
              <p class="block_628">• un grado - 1°</p>
              <p class="block_629">• sei gradi - 6°</p>
              <p class="block_630">• Fahrenheit - F</p>
              <p class="block_631">• Celsius - C</p>
              <p class="block_632">• un grado centigrado - 1°C</p>
              <p class="block_607">• un Kelvin - 1 K</p>
              <p class="block_633">Common measurements of weight and volume</p>
              <p class="block_634">• un millilitro - 1 ml</p>
              <p class="block_635">• un litro - 1 L</p>
              <p class="block_636">• un grammo - 1 g</p>
              <p class="block_637">• un milligrammo - 1 mg</p>
              <p class="block_638">• un centigrammo - 1 cg</p>
              <p class="block_639">• un kilogrammo - 1 kg</p>
              <p class="block_640">• un'unità cubica - 1 3</p>
              <p class="block_641">• un metro cubo - 1 m3</p>
              <p class="block_642">• un centimetro cubo - 1 cm3</p>
              <p class="block_643">Date and time</p>
              <p class="block_644">
                Use the natural form for transcribing dates.
              </p>
              <p class="block_645">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 12 luglio 1964 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">dodici luglio mille e </span>
              </p>
              <p class="block_646">
                <span class="text_13">novecentosessantaquattro </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_647">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Gli anni 70-90 sono sopravvalutati.{' '}
                </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">gli anni settanta novanta sono </span>
              </p>
              <p class="block_648">
                <span class="text_13">sopravvalutati </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_649">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: È nato negli anni 80. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">è nato negli anni ottanta </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_650">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: domenica 17 febbraio </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">domenica diciassette febbraio </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_651">
                Exception: When the date is spoken as a sequence of numbers,
                transcribe as such.
              </p>
              <p class="block_652">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 12/7/2010 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">dodici barra sette barra duemila e </span>
              </p>
              <p class="block_653">
                <span class="text_13">dieci </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_654">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: La data di scadenza era 05/06/88. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  la data di scadenza era zero cinque{' '}
                </span>
              </p>
              <p class="block_655">
                <span class="text_13">zero sei ottantotto </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_656">
                Use the natural form for transcribing times whenever possible.
              </p>
              <p class="block_657">
                Write times in hh:mm format whenever possible, unless it would
                look unnatural to do so.
              </p>
              <p class="block_658">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sono le 3:00. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">sono le tre </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_659">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: alle 4:00 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">alle quattro </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_660">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 3:15 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">tre e un quarto </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_661">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 6:05 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">sei e zero cinque </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_662">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 3:15 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">tre e quindici </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_663">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 1:50 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">due meno dieci </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_664">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: 18:00 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">diciotto e zero zero </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_665">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: pochi minuti dopo le 3:00 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">pochi minuti dopo le tre </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_666">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Ci vediamo alle 6:45. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">ci vediamo a un quarto alle sette </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_667">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: verso le 8:00 </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">verso le otto </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_668">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">: Looks unnatural with 8. </span>
              </p>
              <p class="block_669">Address</p>
              <p class="block_670">
                Favor full spellings over abbreviations where natural, but use
                abbreviations when explicitly spoken.
              </p>
              <p class="block_671">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Abita in Via Piave. </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Abita in V. Piave. I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Abita in v. Piave. I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Abita in via Piave. </span>
              </p>
              <p class="block_672">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: a Piazza Dante </span>
              </p>
              <p class="block_673">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Via Modigliani 4B, Albizzate, Varese{' '}
                </span>
              </p>
              <p class="block_674">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Via Pirandello 29 bis </span>
              </p>
              <p class="block_675">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Abitano al 751 Jefferson Street a New York.
                </span>
              </p>
              <p class="block_676">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : 1600 Amphitheatre Parkway, Mountain View, California 94043
                </span>
              </p>
              <p class="block_677">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  california novantaquattro zero quattro tre{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_678">
                In an address, transcribe the word "numero" or "numero civico"
                as "n.".
              </p>
              <p class="block_583">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Abito in Via Roma n. 20 a Napoli </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">abito in via roma numero venti a </span>
              </p>
              <p class="block_679">
                <span class="text_13">napoli </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_680">
                If a street name contains a number, capitalize it as with proper
                nouns. If the number is part of a date, look for its official
                format (cardinal, ordinal, Roman number) on Google Maps Italy.
                If no specific context is given in the audio and more than one
                number format is possible, choose the most commonly used format
                (search for the different options on google.it and pick the one
                that produces more results).
              </p>
              <p class="block_681">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Via Tre Castelli </span>
              </p>
              <p class="block_682">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Via XX Settembre, Brignole, Genova </span>
              </p>
              <p class="block_683">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Piazza Primo Maggio </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : "Primo Maggio": 1.340.000 results; "1 Maggio": 448k; "1o
                  Maggio": 448k; "I Maggio": 171k
                </span>
              </p>
              <p class="block_684">Use commas for ENTITY, LOCATION.</p>
              <p class="block_685">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: McDonald's, Via Roma </span>
              </p>
              <p class="block_200">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: bar, 50092 </span>
              </p>
              <p class="block_686">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Angelo Rossi, Savona </span>
              </p>
              <p class="block_687">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: dott. Riccardi, Como </span>
              </p>
              <p class="block_688">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Craigslist, Detroit </span>
              </p>
              <p class="block_689">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: meteo, Ravenna </span>
              </p>
              <p class="block_690">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: seghe circolari, Airola </span>
              </p>
              <p class="block_691">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : orari per Il ritorno del re, Firenze{' '}
                </span>
              </p>
              <p class="block_692">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Via Caduti del Lavoro 3, 56122 Pisa{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : No comma between a postal code and a{' '}
                </span>
              </p>
              <p class="block_693">town.</p>
              <p class="block_694">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Via Roma, Albosaggia (SO) </span>
              </p>
              <p class="block_695">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Via Persico, Roma, Garbatella </span>
              </p>
              <p class="block_696">
                Do not capitalize cardinal directions unless part of a specific
                place name.
              </p>
              <p class="block_697">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Prosegui fino all'uscita Firenze Sud.{' '}
                </span>
              </p>
              <p class="block_698">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Sono stato nella zona nord di Caserta.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : No need to capitalize "nord" because it's
                </span>
              </p>
              <p class="block_699">not part of a proper place name.</p>
              <p class="block_700">Web</p>
              <p class="block_670">
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.
              </p>
              <p class="block_701">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: www.google.it </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">w w w punto google punto it </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_702">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: amazon.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">amazon punto com </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_703">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: http://123.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  h t t p due punti sbarra sbarra uno{' '}
                </span>
              </p>
              <p class="block_704">
                <span class="text_13">due tre punto com </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_705">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: alessandro@gmail.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">alessandro chiocciola gmail punto </span>
              </p>
              <p class="block_706">
                <span class="text_13">com </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_707">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Amo la pizza. #affamato </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">amo la pizza hashtag affamato </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_708">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: #affamato Dov'è la mia pizza? </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">hashtag affamato dov'è la mia </span>
              </p>
              <p class="block_709">
                <span class="text_13">pizza </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_710">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Sono così #affamato che potrei mangiare una pizza intera.
                </span>
              </p>
              <p class="block_711">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">
                  sono così hashtag affamato che potrei mangiare una pizza
                  intera{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_712">
                Do not correct speaker errors such as transcribing a slash when
                the user actually says "backslash".
              </p>
              <p class="block_713">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: http://repubblica.it </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">h t t p due punti slash slash </span>
              </p>
              <p class="block_714">
                <span class="text_13">repubblica punto it </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_715">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: http:\mail.yahoo.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">h t t p backslash backslash mail </span>
              </p>
              <p class="block_716">
                <span class="text_13">punto yahoo punto com </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_717">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: www.forbes.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">w w w forbes punto com </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_718">
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <p class="block_719">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: www.amazon.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">w w punto amazon punto com </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_720">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : If the user mistakenly says "ww", transcribe "www".
                </span>
              </p>
              <p class="block_721">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: google.it </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">google punto it </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_722">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Also transcribe the dot in an obvious URL, even if the
                  speaker did not include it.
                </span>
              </p>
              <p class="block_723">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: www.libero.it </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">w w w libero punto it </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_724">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: www.facebook.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">w w facebook punto com </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_725">
                If a URL is spelled out in individual letters, transcribe
                without spaces between individual letters.
              </p>
              <p class="block_726">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: www.target.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  w w w punto t a r g e t punto c o m{' '}
                </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_727">Abbreviation</p>
              <p class="block_728">
                Do not abbreviate unless the speaker says an abbreviated form.
              </p>
              <p class="block_729">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Juventus versus Fiorentina </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Juventus vs. Fiorentina </span>
              </p>
              <p class="block_730">
                <span class="text_">E</span>
                <span class="text_9">XAMPLE AUDIO</span>
                <span class="text_">: " </span>
                <span class="text_1">juventus versus fiorentina </span>
                <span class="text_">" </span>
              </p>
              <p class="block_731">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Juventus vs Fiorentina </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">juventus v s fiorentina </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_732">
                In acronyms, do not use periods between letters.
              </p>
              <p class="block_733">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: BMW, MP3 </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: brands and products </span>
              </p>
              <p class="block_734">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : US, USA, Washington DC, John F Kennedy{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: geographic and personal names </span>
              </p>
              <p class="block_735">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: NASA, UNESCO, FIAT, ONU </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: pronounced as words </span>
              </p>
              <p class="block_736">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: omg, lol, rofl </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  o emme gi [pause] elle o elle [pause]{' '}
                </span>
              </p>
              <p class="block_737">
                <span class="text_12">erre o effe elle </span>
                <span class="text_10">" </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: interjection acronyms </span>
              </p>
              <p class="block_738">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: lol </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">lol </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_739">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: modem, radar </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: extremely lexicalized acronyms </span>
              </p>
              <p class="block_740">
                If a brand name uses periods, include the periods.
              </p>
              <p class="block_741">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: E. Leclerc </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Official brand name as seen in the{' '}
                </span>
              </p>
              <p class="block_742">
                <span class="text_7">privacy policy includes periods. </span>
              </p>
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
