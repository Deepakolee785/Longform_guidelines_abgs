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
            <PageContentHeader currentPage="longform Noreweign" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
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
                <p className={styles.block_291}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_292}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_4}>
                    Correct: Han jobber hjemmefra idag.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_4}>
                    Correct: Og jeg liker ham ikke engang.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Includes subject and verb. Sounds
                  </span>
                </p>
                <p className={styles.block_295}>
                  like a whole utterance rather than just a
                </p>
                <p className={styles.block_296}>
                  conjunction to a larger sentence.
                </p>
                <p className={styles.block_297}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_298}>
                  Correct: Hvem er det du snakker om? Fyren fra
                </p>
                <p className={styles.block_299}>naboleiligheten.</p>
                <p className={styles.block_300}>
                  Explanation: to samtalepartnere
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_4}>
                    Correct: fyren fra naboleiligheten{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_302}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>
                    Correct: bilder av hunder{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_304}>Correct: På fest ikveld?</p>
                <p className={styles.block_305}>
                  <span className={styles.text_4}>Correct: været i Oslo </span>
                  <span className={styles.text_5}>
                    Explanation: This is asking for information, but
                  </span>
                </p>
                <p className={styles.block_306}>
                  the most likely interpretation is as a sentence
                </p>
                <p className={styles.block_307}>fragment on its own.</p>
                <p className={styles.block_308}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_4}>Correct: Fanken. </span>
                  <span className={styles.text_5}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_4}>Correct: Hei. </span>
                  <span className={styles.text_5}>Explanation: greeting </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_4}>Correct: Greit. Hadet. </span>
                  <span className={styles.text_5}>
                    Explanation: This includes both a yes/no word
                  </span>
                </p>
                <p className={styles.block_312}>
                  and a farewell, with a long pause between.
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_4}>
                    Correct: Hadet til dere alle sammen.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Here, "hadet" is not being used as
                  </span>
                </p>
                <p className={styles.block_314}>
                  an interjection on its own, but rather the entire
                </p>
                <p className={styles.block_315}>
                  sentence is being used as an interjection.
                </p>
                <p className={styles.block_316}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_317}>
                  Correct: hvordan bake krumkaker
                </p>
                <p className={styles.block_222}>
                  Incorrect: Hvordan bake krumkaker.
                </p>
                <p className={styles.block_318}>Correct: bilder av Spania</p>
                <p className={styles.block_319}>Incorrect: Bilder av spania.</p>
                <p className={styles.block_320}>
                  Correct: filmene med høyest budsjett redigert
                </p>
                <p className={styles.block_321}>av kvinner</p>
                <p className={styles.block_322}>
                  Incorrect: Filmene med høyest budsjett redigert
                </p>
                <p className={styles.block_323}>av kvinner.</p>
                <p className={styles.block_324}>
                  Correct: Henrik Ibsen biografi
                </p>
                <p className={styles.block_325}>
                  Incorrect: Henrik Ibsen biografi.
                </p>
                <p className={styles.block_326}>
                  Correct: Flåklypa Grand Prix, Caprino. Sandrew
                </p>
                <p className={styles.block_327}>Metronome</p>
                <p className={styles.block_328}>
                  Incorrect: Flåklypa Grand Prix, Caprino.
                </p>
                <p className={styles.block_329}>Sandrew Metronome.</p>
                <p className={styles.block_330}>
                  Incorrect: Flåklypa Grand Prix, Caprino.,
                </p>
                <p className={styles.block_329}>Sandrew Metronome.</p>
                <p className={styles.block_331}>
                  Incorrect: Flåklypa Grand Prix, Caprino, Sandrew
                </p>
                <p className={styles.block_332}>Metronome</p>
                <p className={styles.block_333}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_4}>
                    Correct: Hva synes du? Det er ikke som om{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Begins as complete sentence and
                  </span>
                </p>
                <p className={styles.block_335}>ends mid-stream.</p>
                <p className={styles.block_336}>
                  <span className={styles.text_4}>
                    Correct: mye vanskeligere. Det blir bare tull.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Fragment is the end of a sentence.
                  </span>
                </p>
                <p className={styles.block_337}>
                  Correct: mer omfattende, så husk at dette bare
                </p>
                <p className={styles.block_338}>
                  er en del av det store bildet.
                </p>
                <p className={styles.block_339}>
                  Explanation: Begins mid-stream but ends
                </p>
                <p className={styles.block_340}>
                  completely; part of complete sentence.
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_4}>
                    Correct: veldig vanskelig, så ikke mist motet.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Audio was cut off at the beginning.
                  </span>
                </p>
                <p className={styles.block_342}>
                  Correct: Jeg stikker til Kaffebrenneriet. Jeg
                </p>
                <p className={styles.block_343}>
                  bestiller en Hvor mye koster en latte?
                </p>
                <p className={styles.block_344}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_345}>
                  ellipsis, even if another sentence follows.
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_4}>
                    Correct: Hva koster Hvor er{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_347}>sentences.</p>
                <p className={styles.block_348}>
                  <span className={styles.text_4}>
                    Correct: Hvor er Hvor er kulturhuset?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_349}>sentence.</p>
                <p className={styles.block_350}>
                  <span className={styles.text_4}>
                    Correct: skulle dra men bestemte oss for{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_351}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_4}>
                    Correct: Jeg lånte skoene. kjøpte dem{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Unclear whether "bought them" is
                  </span>
                </p>
                <p className={styles.block_353}>
                  the end of a sentence or a stand-alone
                </p>
                <p className={styles.block_354}>
                  fragment, so default to formatting it as a
                </p>
                <p className={styles.block_349}>fragment.</p>
                <p className={styles.block_355}>
                  <span className={styles.text_4}>
                    Correct: Jeg lånte skoene. Elsket dem.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Loved them." is clearly a complete
                  </span>
                </p>
                <p className={styles.block_356}>
                  sentence with an omitted subject.
                </p>
                <p className={styles.block_357}>
                  A voice action is a query where the user requests a specific
                  action that a smartphone can complete. The action requested is
                  generally expressed by a trigger (most often a verb describing
                  the action to be performed, but it can also be any other part
                  of speech denoting a change of state of the device or of an
                  app). If a voice action sounds complete, it should be
                  capitalized and punctuated as a full sentence. In contrast to
                  a voice action, a web search is a query where the user does
                  not request a specific action that a smartphone can complete.
                  Web searches are more often, but not always, spoken as true
                  fragments.
                </p>
                <p className={styles.block_358}>Correct: Ring Brita mobil.</p>
                <p className={styles.block_359}>
                  Correct: Send melding til Torgrim med innhold:
                </p>
                <p className={styles.block_360}>test.</p>
                <p className={styles.block_361}>
                  Correct: Hvor langt er det fra Horten til
                </p>
                <p className={styles.block_362}>Tønsberg?</p>
                <p className={styles.block_363}>Correct: Åpne kalenderen.</p>
                <p className={styles.block_364}>
                  Correct: Åpne tidtaker 9 minutter.
                </p>
                <p className={styles.block_365}>Correct: Vekk meg 7:00.</p>
                <p className={styles.block_366}>
                  Correct: Minn meg om 10 minutter.
                </p>
                <p className={styles.block_367}>Correct: Skriv et notat.</p>
                <p className={styles.block_368}>
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
                <p className={styles.block_371}>
                  Correct: Hvor er den nærmeste
                </p>
                <p className={styles.block_372}>bensinstasjonen?</p>
                <p className={styles.block_252}>
                  Incorrect: Hvor er, den nærmeste,
                </p>
                <p className={styles.block_373}>bensinstasjonen?</p>
                <p className={styles.block_374}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_375}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_376}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_377}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_378}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_4}>
                    Correct: Frognerparken, den er stengt?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_4}>
                    Correct: Tomat, frukt eller grønnsak?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_4}>
                    Correct: Baguetter, liker jeg.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: topicalization{' '}
                  </span>
                </p>
                <p className={styles.block_382}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className={styles.block_383}>
                  Correct: Nå som du nevner det, bør vi handle
                </p>
                <p className={styles.block_384}>inn litt mat.</p>
                <p className={styles.block_385}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_386}>
                  Correct: Apropos dem, hvor var de når de
                </p>
                <p className={styles.block_387}>trengtes?</p>
                <p className={styles.block_385}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_388}>
                  Correct: Merkelig nok, begge festene fant sted
                </p>
                <p className={styles.block_389}>samme kveld.</p>
                <p className={styles.block_390}>Explanation: adverbial</p>
                <p className={styles.block_391}>
                  Correct: På den annen side, er det en
                </p>
                <p className={styles.block_299}>spennende bok.</p>
                <p className={styles.block_392}>
                  Explanation: prepositional phrase
                </p>
                <p className={styles.block_393}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_4}>
                    Correct: OK, jeg trodde du hadde besøk.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Discourse word. Other examples
                  </span>
                </p>
                <p className={styles.block_395}>
                  of discourse words in Norwegian include
                </p>
                <p className={styles.block_396}>
                  "liksom", "vel", "altså", "faktisk", and "men".
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_4}>
                    Correct: Unnskyld, skatt.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_398}>
                  interjections include "hei", "ops", "haha", and
                </p>
                <p className={styles.block_399}>others.</p>
                <p className={styles.block_400}>
                  <span className={styles.text_4}>
                    Correct: Jøss, det er dritkult.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection{' '}
                  </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_4}>
                    Correct: OK, vi følger etter deg.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/no word. Other examples of
                  </span>
                </p>
                <p className={styles.block_402}>
                  these types items include "ja", "nei", "okei", and
                </p>
                <p className={styles.block_399}>others.</p>
                <p className={styles.block_403}>
                  <span className={styles.text_4}>
                    Correct: Ja, det gjør jeg.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/no word.{' '}
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_4}>
                    Correct: OK, det kan jeg gjøre.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No pause after "OK".{' '}
                  </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_4}>
                    Correct: OK. Det kan jeg gjøre.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Substantial pause after "OK".{' '}
                  </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_4}>
                    Correct: Jøss, det var veldig snilt.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a comma when there is no{' '}
                  </span>
                </p>
                <p className={styles.block_407}>
                  pause, or when there is a pause that isn't long.
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_4}>
                    Correct: Jøss. Det var veldig snilt.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_409}>
                  substantial pause after "Jøss".
                </p>
                <p className={styles.block_410}>Use commas in lists.</p>
                <p className={styles.block_411}>
                  Correct: Den søte, lille, pjuskete kattungen
                </p>
                <p className={styles.block_412}>
                  åpnet øynene for første gang.
                </p>
                <p className={styles.block_413}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_414}>
                  Correct: USAs president, Barack Obama, deltok
                </p>
                <p className={styles.block_415}>på toppmøtet.</p>
                <p className={styles.block_416}>
                  Explanation: Non-restrictive modifier. "Barack
                </p>
                <p className={styles.block_417}>
                  Obama" does not change the core meaning of
                </p>
                <p className={styles.block_418}>
                  "USAs president", it just adds additional
                </p>
                <p className={styles.block_419}>
                  information about the US president.
                </p>
                <p className={styles.block_420}>
                  Correct: De kundene som har reservert vil bli
                </p>
                <p className={styles.block_421}>
                  Explanation: Restrictive modifier. The relative
                </p>
                <p className={styles.block_422}>betjent først.</p>
                <p className={styles.block_423}>
                  clause "som har reservert" restricts which
                </p>
                <p className={styles.block_424}>
                  people we are talking about, it doesn't just add
                </p>
                <p className={styles.block_418}>
                  additional information about an already
                </p>
                <p className={styles.block_425}>delineated group of people.</p>
                <p className={styles.block_426}>
                  Correct: President Obama, som ble valgt i 2008,
                </p>
                <p className={styles.block_427}>
                  Explanation: Non-restrictive modifier. As a rule
                </p>
                <p className={styles.block_372}>ble innviet i 2009.</p>
                <p className={styles.block_428}>
                  of thumb, if you ask yourself: "hvilken av USAs
                </p>
                <p className={styles.block_429}>
                  presidenter" and the answer is not absolutely
                </p>
                <p className={styles.block_430}>clear, don't use commas.</p>
                <p className={styles.block_431}>
                  Correct: Presidenten som ble valgt i 2008 ble
                </p>
                <p className={styles.block_389}>innviet i 2009.</p>
                <p className={styles.block_432}>
                  Explanation: Unless there are significant
                </p>
                <p className={styles.block_433}>
                  pauses after "president" and "2008", you should
                </p>
                <p className={styles.block_434}>
                  assume this is a restrictive modifier.
                </p>
                <p className={styles.block_435}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_436}>Correct: Hei.</p>
                <p className={styles.block_437}>Correct: Hei Lars.</p>
                <p className={styles.block_365}>Correct: Hei, det er Lise.</p>
                <p className={styles.block_245}>
                  Correct: Hei Lars, det er Lise.
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_4}>
                    Correct: Hei Lars. Det er Lise.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Long pause between "Hei Lars."
                  </span>
                </p>
                <p className={styles.block_439}>
                  and "Det er Lise." Treat as separate sentences.
                </p>
                <p className={styles.block_440}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_441}>
                  Correct: Camilla, ring meg opp.
                </p>
                <p className={styles.block_442}>
                  Correct: Hvordan går det, Johan?
                </p>
                <p className={styles.block_443}>
                  Correct: Johan, Camilla. Vi møtes om fem
                </p>
                <p className={styles.block_444}>minutter.</p>
                <p className={styles.block_445}>
                  Explanation: Note that this is a difficult edge
                </p>
                <p className={styles.block_446}>
                  case: "Johan, Camilla." appears to be a
                </p>
                <p className={styles.block_447}>
                  shortened version of "Johan, det er Camilla.", so
                </p>
                <p className={styles.block_448}>
                  we treat it as a full sentence.
                </p>
                <p className={styles.block_449}>
                  Correct: Camilla, hei, dette er Johan.
                </p>
                <p className={styles.block_450}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_451}>Correct: Ok Google</p>
                <p className={styles.block_452}>
                  Correct: Ok Google, bilder av oliventrær
                </p>
                <p className={styles.block_453}>
                  Correct: Ok Google, vis meg Petters
                </p>
                <p className={styles.block_454}>kontaktinformasjon.</p>
                <p className={styles.block_455}>
                  Correct: Ok Google, når en pinsen i år?
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
                <p className={styles.block_458}>
                  <span className={styles.text_4}>
                    Correct: Mener du det seriøst?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Intonation sounds more like a{' '}
                  </span>
                </p>
                <p className={styles.block_459}>statement than a question.</p>
                <p className={styles.block_460}>
                  <span className={styles.text_4}>Correct: Klokka 3:30? </span>
                  <span className={styles.text_5}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_4}>
                    Correct: Og Pia kommer også?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_4}>
                    Correct: været i Bergen{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_462}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_463}>question.</p>
                <p className={styles.block_464}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_465}>Correct: Hold kjeft!</p>
                <p className={styles.block_466}>
                  <span className={styles.text_4}>Correct: Herlig! </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_4}>Correct: OK. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_4}>
                    Correct: Du er så feig.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_4}>Correct: Gratulerer! </span>
                  <span className={styles.text_5}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_4}>
                    Correct: Ha en fin dag.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_4}>
                    Correct: Jeg sto på prøven!{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_473}>
                  Correct: Kameraten min sa, "alligator."
                </p>
                <p className={styles.block_474}>
                  Incorrect: Kameraten min sa "alligator."
                </p>
                <p className={styles.block_474}>
                  Incorrect: Kameraten min sa "alligator".
                </p>
                <p className={styles.block_475}>
                  Explanation: The word "si" is the most common
                </p>
                <p className={styles.block_476}>
                  reported speech verb in Norwegian, but other
                </p>
                <p className={styles.block_477}>
                  words ("spørre", "svare", "uttale") can be used
                </p>
                <p className={styles.block_478}>for reported speech.</p>
                <p className={styles.block_479}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_480}>
                  Correct: Ann sa, "Vi møtes klokka 3:00."
                </p>
                <p className={styles.block_481}>
                  Incorrect: Ann sa, "Vi møtes klokka 3:00.".
                </p>
                <p className={styles.block_482}>
                  Explanation: The word "si" is the most common
                </p>
                <p className={styles.block_429}>
                  reported speech verb in Norwegian, but other
                </p>
                <p className={styles.block_483}>
                  words ("spørre", "svare", "uttale") can be used
                </p>
                <p className={styles.block_484}>for reported speech.</p>
                <p className={styles.block_485}>
                  Correct: Astrid spurte, "Møtes vi klokka 3:00?"
                </p>
                <p className={styles.block_486}>
                  Incorrect: Astrid spurte, "Møtes vi klokka
                </p>
                <p className={styles.block_487}>3:00?".</p>
                <p className={styles.block_488}>
                  Correct: Sa Astrid, "Møt meg der."
                </p>
                <p className={styles.block_489}>
                  Incorrect: Sa Astrid, "Møt meg der."?
                </p>
                <p className={styles.block_490}>
                  Correct: Jan liksom, "Jeg lover å møte opp."
                </p>
                <p className={styles.block_491}>
                  Explanation: The "liksom" construction
                </p>
                <p className={styles.block_492}>
                  uten engang å sjekke kalenderen sin.
                </p>
                <p className={styles.block_493}>
                  introduces a direct quotation, so a comma is
                </p>
                <p className={styles.block_494}>needed.</p>
                <p className={styles.block_495}>
                  <span className={styles.text_4}>
                    Correct: Si "onomatopoeia."{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Omit the comma if the verb is in
                  </span>
                </p>
                <p className={styles.block_496}>the imperative.</p>
                <p className={styles.block_497}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_4}>
                    Correct: Oversett til fransk: Hvordan går det?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quote follows the command,
                  </span>
                </p>
                <p className={styles.block_499}>so use a colon.</p>
                <p className={styles.block_500}>
                  <span className={styles.text_4}>
                    Correct: Oversett "Hva heter du?" til fransk.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quote is in the middle of a
                  </span>
                </p>
                <p className={styles.block_501}>
                  sentence, so use quotation marks.
                </p>
                <p className={styles.block_502}>
                  Correct: Hvordan sier du "Jeg elsker deg" på
                </p>
                <p className={styles.block_503}>fransk?</p>
                <p className={styles.block_504}>
                  Explanation: Omit commas after "si" verbs in
                </p>
                <p className={styles.block_505}>translation requests.</p>
                <p className={styles.block_506}>
                  Correct: Hvordan sier man på japansk: Jeg vil
                </p>
                <p className={styles.block_507}>ha kaffe.</p>
                <p className={styles.block_508}>
                  Correct: Til eksempel@gmail.com: Hvordan går
                </p>
                <p className={styles.block_509}>det?</p>
                <p className={styles.block_510}>
                  Correct: Send e-post til eksempel@gmail.com
                </p>
                <p className={styles.block_511}>som sier: Hvordan går det?</p>
                <p className={styles.block_512}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_4}>
                    Correct: Sett avtale imorgen 3:30: legetime.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sett avtale imorgen klokken tre{' '}
                  </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_1}>legetime </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_515}>
                  Correct: Tekst Karin: Snekkeren kommer ikke
                </p>
                <p className={styles.block_516}>før mandag.</p>
                <p className={styles.block_326}>
                  Correct: Tekst Sara og si at jeg vil være der om
                </p>
                <p className={styles.block_517}>5 minutter.</p>
                <p className={styles.block_518}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_519}>
                  Correct: Oversett "hallo." til fransk.
                </p>
                <p className={styles.block_520}>Correct: Hallo.</p>
                <p className={styles.block_521}>
                  Correct: Oversett til spansk: dra.
                </p>
                <p className={styles.block_522}>Correct: Dra.</p>
                <p className={styles.block_523}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_524}>
                  Correct: Definer ambidekstri.
                </p>
                <p className={styles.block_525}>
                  Incorrect: Definer "ambidekstri."
                </p>
                <p className={styles.block_526}>
                  Correct: Han sa akkurat ordet gresskar.
                </p>
                <p className={styles.block_286}>
                  Incorrect: Han sa akkurat "gresskar."
                </p>
                <p className={styles.block_320}>
                  Correct: Sus staves likt forlengs og baklengs.
                </p>
                <p className={styles.block_284}>
                  Incorrect: "Sus" staves likt forlengs og
                </p>
                <p className={styles.block_527}>baklengs.</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_530}>
                  Use hyphens in compound words where one part consists of an
                  acronym or abbreviation.
                </p>
                <p className={styles.block_531}>Correct: CD-hylle</p>
                <p className={styles.block_532}>Correct: DVD-spiller</p>
                <p className={styles.block_533}>Correct: ABS-bremser</p>
                <p className={styles.block_534}>
                  Transcribe all nouns that ends with the letter "s" and has a
                  possessive "s" suffix with "s'" word-finally.
                </p>
                <p className={styles.block_535}>
                  Correct: Damaskus' eldste café
                </p>
                <p className={styles.block_536}>
                  Correct: Laurits' hattebutikk
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
                <p className={styles.block_538}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_539}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_540}>Correct: {`{kolon}`}</p>
                <p className={styles.block_541}>Correct: {`{understrek}`}</p>
                <p className={styles.block_542}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_543}>
                  Correct: Jeg drar nå {`{punktum}`} Hvor langt er
                </p>
                <p className={styles.block_544}>det å kjøre?</p>
                <p className={styles.block_545}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jeg drar nå punktum hvor langt{' '}
                  </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_1}>er det å kjøre </span>
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
