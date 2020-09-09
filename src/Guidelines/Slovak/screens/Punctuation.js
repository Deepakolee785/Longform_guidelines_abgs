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
            <PageContentHeader currentPage="Longform Slovak" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation </p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={'text'}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_4}>
                    Correct: O kom hovoríš? O chlapíkovi odvedľa.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Two speakers. "O chlapíkovi{' '}
                  </span>
                </p>
                <p className={styles.block_258}>
                  odvedľa." is an answer to a specific question.
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_4}>
                    Correct: chlapík odvedľa{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_260}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_4}>Correct: Vonku prší. </span>
                  <span className={styles.text_5}>
                    Explanation: Dropping the subject here sounds
                  </span>
                </p>
                <p className={styles.block_262}>
                  natural as a complete sentence. Punctuate as a
                </p>
                <p className={styles.block_263}>sentence.</p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>
                    Correct: umývať šteniatka vo vani{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  opposed to a dropped subject. Punctuate as a
                </p>
                <p className={styles.block_263}>fragment.</p>
                <p className={styles.block_266}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_4}>Correct: Fuj. </span>
                  <span className={styles.text_5}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_4}>Correct: Ahoj. </span>
                  <span className={styles.text_5}>Explanation: greeting </span>
                </p>
                <p className={styles.block_269}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_4}>
                    Correct: Čo myslíš? Nie je to akoby{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Begins as complete sentence and
                  </span>
                </p>
                <p className={styles.block_271}>ends mid-stream.</p>
                <p className={styles.block_272}>
                  <span className={styles.text_4}>
                    Correct: oveľa ťažšie. Nedáva to žiaden zmysel.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Fragment is the end of a sentence.
                  </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_4}>
                    Correct: naozaj zložité, tak sa nenechaj odradiť.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Audio was cut off at the beginning.
                  </span>
                </p>
                <p className={styles.block_274}>
                  Correct: Idem do kaviarne. Objednám Koľko
                </p>
                <p className={styles.block_275}>stojí kapučíno?</p>
                <p className={styles.block_276}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_277}>
                  ellipsis after a fragment, even if another
                </p>
                <p className={styles.block_278}>sentence follows.</p>
                <p className={styles.block_279}>
                  <span className={styles.text_4}>
                    Correct: Koľko stojí Kde je{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_280}>sentences.</p>
                <p className={styles.block_281}>
                  <span className={styles.text_4}>
                    Correct: Kde je Kde je pláž?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_263}>sentence.</p>
                <p className={styles.block_282}>
                  <span className={styles.text_4}>
                    Correct: na odchode, ale potom sa rozhodli{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_283}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_284}>
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
                <p className={styles.block_287}>
                  Correct: Kde je najbližšia čerpacia stanica?
                </p>
                <p className={styles.block_288}>
                  Incorrect: Kde je, najbližšia, čerpacia stanica?
                </p>
                <p className={styles.block_289}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_290}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_291}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_292}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_293}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_4}>
                    Correct: Teda, myslel som, že máš spoločnosť.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Discourse word. Other examples
                  </span>
                </p>
                <p className={styles.block_295}>
                  of discourse words in Slovak include "ale", "tak",
                </p>
                <p className={styles.block_296}>and "tiež".</p>
                <p className={styles.block_297}>
                  <span className={styles.text_4}>
                    Correct: Pravdupovediac, nepáči sa mi to.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Discourse word.{' '}
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_4}>
                    Correct: Skrátka, nemal by si to robiť.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Discourse word.{' '}
                  </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_4}>
                    Correct: Prepáč, zlato.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection.{' '}
                  </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_4}>Correct: Haha, vtipné. </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_300}>
                  interjections include "fíha", "hej", "haha", "hihi",
                </p>
                <p className={styles.block_301}>"chichi" and others.</p>
                <p className={styles.block_302}>
                  <span className={styles.text_4}>
                    Correct: Hej, ako sa voláš?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection.{' '}
                  </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>Correct: Áno, urobím. </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/No word.{' '}
                  </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>Correct: Nie, nechcem. </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/No word.{' '}
                  </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>
                    Correct: Iste, že to spravím.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/No word.{' '}
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>
                    Correct: Iste. Spravím to.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_304}>
                  substantial pause after "iste".
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>
                    Correct: Teda. To je pekné.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_305}>
                  substantial pause after "teda".
                </p>
                <p className={styles.block_306}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_307}>Correct: Ok Google</p>
                <p className={styles.block_308}>
                  Correct: Ok Google, obrázky olivovníkov
                </p>
                <p className={styles.block_309}>
                  Correct: Ok Google, ukáž mi Deanove kontaktné
                </p>
                <p className={styles.block_310}>informácie.</p>
                <p className={styles.block_311}>
                  Correct: Ok Google, kedy je tento rok Veľká noc?
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
                <p className={styles.block_314}>
                  <span className={styles.text_4}>
                    Correct: To myslíš vážne?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Syntactically built as a question, so
                  </span>
                </p>
                <p className={styles.block_315}>
                  punctuate as a question regardless of
                </p>
                <p className={styles.block_316}>intonation.</p>
                <p className={styles.block_317}>
                  <span className={styles.text_4}>Correct: O 3:00 ráno? </span>
                  <span className={styles.text_5}>
                    Explanation: Rising intonation suggests it is a
                  </span>
                </p>
                <p className={styles.block_318}>
                  question, so punctuate as a question regardless
                </p>
                <p className={styles.block_319}>of structure.</p>
                <p className={styles.block_320}>
                  <span className={styles.text_4}>
                    Correct: počasie v Tucsone{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_321}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_322}>question.</p>
                <p className={styles.block_323}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_4}>Correct: Jéj! </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_4}>Correct: Jéj. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use standard Slovak quotation marks (9966 quotation marks).
                </p>
                <p className={styles.block_328}>
                  Correct: Preložiť „večer“ do nemčiny.
                </p>
                <p className={styles.block_329}>
                  Incorrect: Preložiť "večer" do nemčiny.
                </p>
                <p className={styles.block_330}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_331}>
                  Correct: Môj kamarát povedal, „aligátor
                </p>
                <p className={styles.block_332}>krokodíl“.</p>
                <p className={styles.block_333}>
                  Incorrect: Môj kamarát povedal, „aligátor
                </p>
                <p className={styles.block_334}>krokodíl.“</p>
                <p className={styles.block_335}>
                  Incorrect: Môj kamarát povedal „aligátor
                </p>
                <p className={styles.block_334}>krokodíl.“</p>
                <p className={styles.block_335}>
                  Incorrect: Môj kamarát povedal „aligátor
                </p>
                <p className={styles.block_334}>krokodíl“.</p>
                <p className={styles.block_336}>
                  Explanation: The word "povedať" is the most
                </p>
                <p className={styles.block_337}>
                  common reported speech verb in Slovak, but
                </p>
                <p className={styles.block_338}>
                  other words ("spýtať sa", "odpovedať", "odvetiť")
                </p>
                <p className={styles.block_339}>
                  can be used for reported speech.
                </p>
                <p className={styles.block_340}>
                  Correct: Povedz „onomatopoja“.
                </p>
                <p className={styles.block_341}>
                  Incorrect: Povedz, „onomatopoja“.
                </p>
                <p className={styles.block_342}>
                  Explanation: Omit the comma if the verb is in
                </p>
                <p className={styles.block_343}>the imperative.</p>
                <p className={styles.block_344}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_345}>
                  Correct: Anna povedala, „Stretnime sa o 3:00.“
                </p>
                <p className={styles.block_346}>
                  Incorrect: Anna povedala, „Stretnime sa o
                </p>
                <p className={styles.block_347}>3:00.“.</p>
                <p className={styles.block_348}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_349}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_350}>
                  Correct: Jana sa spýtala, „Stretneme sa o
                </p>
                <p className={styles.block_351}>3:00?“</p>
                <p className={styles.block_352}>
                  Incorrect: Jana sa spýtala, „Stretneme sa o
                </p>
                <p className={styles.block_353}>3:00?“.</p>
                <p className={styles.block_348}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_354}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_355}>
                  Correct: Povedala Jana, „Stretneme sa.“
                </p>
                <p className={styles.block_356}>
                  Incorrect: Povedala Jana, „Stretneme sa.“.
                </p>
                <p className={styles.block_357}>
                  Correct: Josh sa zatváril, „Budem tam.
                </p>
                <p className={styles.block_358}>
                  Sľubujem.“ bez toho, aby si skontroloval diár.
                </p>
                <p className={styles.block_359}>
                  Explanation: The text in quotation marks
                </p>
                <p className={styles.block_360}>
                  qualifies as sentences. Do not alter its end
                </p>
                <p className={styles.block_361}>
                  punctuation even though the quote is within a
                </p>
                <p className={styles.block_362}>sentence.</p>
                <p className={styles.block_363}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_364}>
                  Correct: Prelož do francúzštiny: Koľko máš
                </p>
                <p className={styles.block_365}>rokov?</p>
                <p className={styles.block_366}>
                  Explanation: The quote follows the command,
                </p>
                <p className={styles.block_367}>
                  so use a colon and omit quotation marks.
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_4}>
                    Correct: Prelož „Ako sa voláš?“ do francúzštiny.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quote is in the middle of a
                  </span>
                </p>
                <p className={styles.block_369}>
                  sentence, so use quotation marks and omit the
                </p>
                <p className={styles.block_370}>colon.</p>
                <p className={styles.block_371}>
                  Correct: Ako sa povie „Milujem ťa.“ vo
                </p>
                <p className={styles.block_372}>francúzštine?</p>
                <p className={styles.block_373}>
                  Incorrect: Ako sa povie, „Milujem ťa.“ vo
                </p>
                <p className={styles.block_374}>francúzštine?</p>
                <p className={styles.block_375}>
                  Explanation: Omit commas after "povedať"
                </p>
                <p className={styles.block_376}>
                  verbs in translation requests.
                </p>
                <p className={styles.block_377}>
                  Correct: Poslať mail priklad@gmail.com so
                </p>
                <p className={styles.block_378}>znením: Hej, aký si mal deň?</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the Latin letters a through z, you should not use
                  any other symbol than: 0-9
                  äáčďéèëěíĺľňóôöŕřšťúüůýžÄÁČĎÉÈËĚÍĹĽŇÓÔÖŔŘŠŤÚÜŮÝŽ23,?!~^\'„“"_°:.()&lt;&gt;
                  {}[]√/@#$€ £+=%*&amp;-.;
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
                <p className={styles.block_382}>
                  Correct: OK {`{bodka} {bodka} {bodka}`}
                </p>
                <p className={styles.block_383}>Incorrect: OK...</p>
                <p className={styles.block_384}>
                  Incorrect: OK bodka bodka bodka
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ok bodka bodka bodka </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_386}>
                  Correct: Ahoj {`{čiarka} ako sa máš {otáznik}`}
                </p>
                <p className={styles.block_387}>Mám sa dobre {`{bodka}`}</p>
                <p className={styles.block_388}>
                  Incorrect: Ahoj, ako sa máš? Mám sa dobre.
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ahoj čiarka ako sa máš </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_1}>
                    otáznik mám sa dobre bodka{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_391}>
                  Correct: Ahoj {`{čiarka}`} ako sa máš {`{otáznik}`}
                </p>
                <p className={styles.block_387}>Mám sa dobre {`{bodka}`}</p>
                <p className={styles.block_388}>
                  Incorrect: Ahoj, ako sa máš? Mám sa dobre.
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ahoj čiarka ako sa máš </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_1}>
                    otáznik mám sa dobre bodka{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_392}>
                  Correct: Povedal mi, {`{začiatok citácie}`} Neprines
                </p>
                <p className={styles.block_393}>mačku. {`{koniec citácie}`}</p>
                <p className={styles.block_394}>
                  Incorrect: Povedal mi, „Neprines mačku.“
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    povedal mi citácia neprines{' '}
                  </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_1}>mačku koniec citácie </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_397}>Correct: {`{smajlík}`}</p>
                <p className={styles.block_398}>Incorrect: :-)</p>
                <p className={styles.block_399}>Incorrect: smajlík</p>
                <p className={styles.block_400}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>smajlík </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_401}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_402}>
                  Correct: Bývam v apartmáne 4-A.
                </p>
                <p className={styles.block_403}>
                  Incorrect: Bývam v apartmáne 4 {`{pomlčka}`} A.
                </p>
                <p className={styles.block_404}>
                  Incorrect: Bývam v apartmáne štyri {`{pomlčka}`}
                </p>
                <p className={styles.block_405}>A.</p>
                <p className={styles.block_406}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    bývam v apartmáne štyri{' '}
                  </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_1}>pomlčka a </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_408}>Correct: www.fake-domain.com</p>
                <p className={styles.block_409}>
                  Incorrect:{` www {bodka} fake {spojovník}`}
                </p>
                <p className={styles.block_410}>domain {`{bodka}`} com</p>
                <p className={styles.block_411}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    w w w bodka fake spojovník{' '}
                  </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_1}>domain bodka com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_413}>Correct: Je herečka/modelka.</p>
                <p className={styles.block_414}>
                  Incorrect: Je herečka {`{lomka}`} modelka.
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    je herečka lomka modelka{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_416}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_417}>Correct: {`{dvojbodka}`}</p>
                <p className={styles.block_418}>Correct: {`{podčiarkovník}`}</p>
                <p className={styles.block_419}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_420}>
                  Correct: Odchádzam {`{bodka}`} Koľko trvá cesta?
                </p>
                <p className={styles.block_421}>
                  Incorrect: Odchádzam {`{bodka}`} koľko trvá cesta?
                </p>
                <p className={styles.block_422}>
                  Incorrect: Odchádzam bodka Koľko trvá cesta?
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
