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
            <PageContentHeader currentPage="Longform Slovene" />
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
                  of its context, e.g. if it's an answer to a
                </p>
                <p className={styles.block_269}>
                  specific question, or if it's an example where dropping the
                  subject sounds completely natural as a complete sentence.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_4}>
                    Correct: Kdo je trkal? Sosedov fant.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Two speakers. "Sosedov fant." is
                  </span>
                </p>
                <p className={styles.block_271}>
                  an answer to a specific question.
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_4}>Correct: sosedov fant </span>
                  <span className={styles.text_7}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_273}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_4}>
                    Correct: kopanje kužkov{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_275}>
                  opposed to a dropped subject. Punctuate as
                </p>
                <p className={styles.block_276}>fragment.</p>
                <p className={styles.block_277}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_4}>Correct: Presneto. </span>
                  <span className={styles.text_7}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_4}>Correct: Živio. </span>
                  <span className={styles.text_7}>Explanation: greeting </span>
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_4}>
                    Correct: Na zdravje mojemu prijatelju.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Entire phrase is being used as an
                  </span>
                </p>
                <p className={styles.block_281}>interjection.</p>
                <p className={styles.block_282}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_4}>
                    Correct: Kaj meniš? Ni tako kot{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Begins as complete sentence and
                  </span>
                </p>
                <p className={styles.block_284}>ends mid-stream.</p>
                <p className={styles.block_285}>
                  Correct: precej težje. To nima nobenega
                </p>
                <p className={styles.block_286}>smisla.</p>
                <p className={styles.block_287}>
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_4}>
                    Correct: es težko, zato kar pogumno.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Audio was cut off at the beginning.
                  </span>
                </p>
                <p className={styles.block_289}>
                  Correct: Grem v kavarno. Naročil bom Koliko
                </p>
                <p className={styles.block_290}>stane kapučino?</p>
                <p className={styles.block_291}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_292}>
                  ellipsis after a fragment, even if another
                </p>
                <p className={styles.block_293}>sentence follows.</p>
                <p className={styles.block_294}>
                  <span className={styles.text_4}>
                    Correct: Koliko stane Kje je{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_295}>sentences.</p>
                <p className={styles.block_296}>
                  <span className={styles.text_4}>
                    Correct: Kje je Kje je plaža?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_297}>sentence.</p>
                <p className={styles.block_298}>
                  <span className={styles.text_4}>
                    Correct: odhajali smo, a se nato odločili{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_299}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_300}>
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
                <p className={styles.block_303}>
                  Correct: Kje je najbližja črpalka?
                </p>
                <p className={styles.block_149}>
                  Incorrect: Kje je, najbližja črpalka?
                </p>
                <p className={styles.block_304}>
                  Correct: Knjiga ima več kot 1.000 strani.
                </p>
                <p className={styles.block_305}>
                  Incorrect: Knjiga ima več, kot 1.000 strani.
                </p>
                <p className={styles.block_306}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_307}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_308}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_309}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_310}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_4}>
                    Correct: No, mislila sem, da imaš družbo.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Discourse word. Other examples of
                  </span>
                </p>
                <p className={styles.block_312}>
                  discourse words in Slovenian include "torej" and
                </p>
                <p className={styles.block_313}>"tako".</p>
                <p className={styles.block_314}>
                  <span className={styles.text_4}>Correct: Ej, punči. </span>
                  <span className={styles.text_7}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_315}>
                  interjections include "hej", "oj", "av", "hehe" and
                </p>
                <p className={styles.block_316}>others.</p>
                <p className={styles.block_317}>
                  <span className={styles.text_4}>Correct: Ja, bom. </span>
                  <span className={styles.text_7}>
                    Explanation: Yes/no word.{' '}
                  </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_4}>
                    Correct: Seveda, naredil bom to.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Yes/no word.{' '}
                  </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_4}>
                    Correct: Seveda. Naredil bom to.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Substantial pause after "seveda".
                  </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_4}>
                    Correct: No. To je res prijazno.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Substantial pause after "no".{' '}
                  </span>
                </p>
                <p className={styles.block_321}>Use commas in lists.</p>
                <p className={styles.block_322}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_323}>Correct: Ok Google</p>
                <p className={styles.block_324}>
                  Correct: Ok Google, slike oljk
                </p>
                <p className={styles.block_325}>
                  Correct: Ok Google, pokaži Dejanove kontakte.
                </p>
                <p className={styles.block_326}>
                  Correct: Ok Google, kdaj je letos pust?
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
                <p className={styles.block_329}>
                  <span className={styles.text_4}>
                    Correct: Ali misliš resno?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Syntactically built as a question, so
                  </span>
                </p>
                <p className={styles.block_330}>
                  punctuate as a question regardless of
                </p>
                <p className={styles.block_331}>intonation.</p>
                <p className={styles.block_332}>
                  <span className={styles.text_4}>Correct: Ob 3.00? </span>
                  <span className={styles.text_7}>
                    Explanation: Rising intonation suggests it is a
                  </span>
                </p>
                <p className={styles.block_333}>
                  question, so punctuate as a question regardless
                </p>
                <p className={styles.block_334}>of structure.</p>
                <p className={styles.block_335}>
                  <span className={styles.text_4}>
                    Correct: vreme v Mariboru{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_336}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_337}>question.</p>
                <p className={styles.block_338}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_4}>Correct: Joj! </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_4}>Correct: Joj. </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker sounds unenthused.{' '}
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
                <p className={styles.block_343}>
                  Correct: Moj prijatelj je rekel "povodni konj".
                </p>
                <p className={styles.block_344}>
                  Incorrect: Moj prijatelj je rekel, "povodni konj."
                </p>
                <p className={styles.block_345}>
                  Incorrect: Moj prijatelj je rekel "povodni konj."
                </p>
                <p className={styles.block_346}>
                  Incorrect: Moj prijatelj je rekel, "povodni konj".
                </p>
                <p className={styles.block_347}>
                  Explanation: The word "reči" is the most
                </p>
                <p className={styles.block_348}>
                  common reported speech verb in Slovenian, but
                </p>
                <p className={styles.block_349}>
                  other words ("vprašati", "odgovoriti", "povedati",
                </p>
                <p className={styles.block_350}>
                  "dejati") can be used for reported speech.
                </p>
                <p className={styles.block_351}>
                  Correct: Reci "onomatopoija".
                </p>
                <p className={styles.block_352}>
                  Incorrect: Reci, "onomatopoija".
                </p>
                <p className={styles.block_353}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_354}>
                  Correct: Ana je rekla: "Dobimo se ob 3.00."
                </p>
                <p className={styles.block_355}>
                  Incorrect: Ana je rekla: "Dobimo se ob 3.00.".
                </p>
                <p className={styles.block_356}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_357}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_358}>
                  Correct: Jana je vprašala: "Se dobimo ob 3.00?"
                </p>
                <p className={styles.block_359}>
                  Incorrect: Jana je vprašala: "Se dobimo ob
                </p>
                <p className={styles.block_360}>3.00?".</p>
                <p className={styles.block_361}>
                  Correct: Ali je Jana rekla: "Dobimo se tam."
                </p>
                <p className={styles.block_346}>
                  Incorrect: Ali je Jana rekla: "Dobimo se tam."?
                </p>
                <p className={styles.block_362}>
                  Correct: Jože je dejal: "Pridem. Obljubim.", ne
                </p>
                <p className={styles.block_363}>da bi preveril svoj urnik.</p>
                <p className={styles.block_364}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_4}>
                    Correct: Prevedi v francoščino: Kako si?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: The quote follows the command,
                  </span>
                </p>
                <p className={styles.block_366}>
                  so use a colon and omit quotation marks.
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_4}>
                    Correct: Prevedi "Kako ti je ime?" v francoščino.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: The quote is in the middle of a
                  </span>
                </p>
                <p className={styles.block_368}>
                  sentence, so use quotation marks and omit
                </p>
                <p className={styles.block_369}>colon.</p>
                <p className={styles.block_370}>
                  Correct: Kako se reče "Ljubim te." po
                </p>
                <p className={styles.block_371}>francosko?</p>
                <p className={styles.block_372}>
                  Incorrect: Kako se reče, "Ljubim te." po
                </p>
                <p className={styles.block_373}>francosko?</p>
                <p className={styles.block_374}>
                  Explanation: Omit commas after "reče" verbs in
                </p>
                <p className={styles.block_375}>translation requests.</p>
                <p className={styles.block_376}>
                  Correct: Za example@gmail.com: Hej, kako si
                </p>
                <p className={styles.block_377}>se imel danes?</p>
                <p className={styles.block_378}>
                  Correct: Pošlji e-pošto za Za
                </p>
                <p className={styles.block_379}>
                  example@gmail.com s sporočilom: Hej, kako si
                </p>
                <p className={styles.block_377}>se imel danes?</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the letters a through z, you should not use any
                  other symbol than: 0-9
                  äáčćéèëêíòóôöšžÄÁČĆÉÈËÊÍÒÓÔÖŠŽ23,?!~^\'"_°:.()&lt;&gt;{}
                  []√/@#$€£+=%*&amp;-.;
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
                <p className={styles.block_383}>
                  Correct: Kako si {`{vprašaj}`}
                </p>
                <p className={styles.block_384}>Incorrect: Kako si?</p>
                <p className={styles.block_385}>Incorrect: Kako si vprašaj?</p>
                <p className={styles.block_386}>Incorrect: Kako si vprašaj</p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>kako si vprašaj </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_388}>
                  Explanation: The only phrases that are used as
                </p>
                <p className={styles.block_348}>
                  spoken punctuation are "vejica", "pika", "vprašaj"
                </p>
                <p className={styles.block_389}>and "klicaj ".</p>
                <p className={styles.block_390}>
                  <span className={styles.text_4}>
                    Correct: Velja {`{pika pika pika}`}{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>velja pika pika pika </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_391}>
                  Correct: Velja {`{tri pike}`}
                </p>
                <p className={styles.block_392}>Incorrect: Velja tri pike</p>
                <p className={styles.block_393}>Incorrect: Velja...</p>
                <p className={styles.block_394}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>velja tri pike </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_395}>
                  Explanation: Even though "tri pike" is being used
                </p>
                <p className={styles.block_396}>
                  in a similar way to "pika" above, it is not one of
                </p>
                <p className={styles.block_397}>
                  the five allowed spoken punctuation phrases.
                </p>
                <p className={styles.block_398}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_399}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_400}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_401}>
                  Correct: Odhajam pika Kako dolga je vožnja?
                </p>
                <p className={styles.block_402}>
                  Incorrect: Odhajam pika kako dolga je vožnja?
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    odhajam pika kako dolga je{' '}
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_1}>vožnja </span>
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
