import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import CorrectIncorrect from '../../../Components/common/CorrrectIncorrect'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'

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
            <PageContentHeader currentPage="longform nl_nl_test_set" />

            <div className="content">
              <h1 className="large-heading">Punctuation</h1>
              <p className="text">
                {' '}
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>

              <div id="fragment-vrsus-sentences">
                <h2 className="heading">Fragments versus sentences</h2>
                <ul>
                  <li>
                    {' '}
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.{' '}
                  </li>
                  <li>
                    {' '}
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.{' '}
                  </li>
                  <li>
                    {' '}
                    In general, a complete sentence contains a subject and a
                    verb.{' '}
                    <CorrectIncorrect
                      correctText=" Hij werkt vandaag thuis."
                      explainationText="Includes subject (hij) and verb (werkt)."
                    />
                  </li>
                  <li>
                    Sometimes a phrase which is not obviously grammatically a
                    sentence should nevertheless be treated as a sentence
                    because of its context, e.g. if it's an answer to a specific
                    question, or if it's an example where dropping the subject
                    sounds completely natural as a complete sentence.
                    <CorrectIncorrect
                      correctText="Wie vertelde jou dat het buurtfeest niet doorging? De buurman van nummer 36. "
                      explainationText='Two speakers. "de buurman van nummer 36" is an answer to a specific question. '
                    />
                    <CorrectIncorrect
                      correctText="Dat nieuwe boek van Lars Kepler al gelezen?"
                      explainationText="Dropping the subject and main verb here sounds natural as a complete sentence. Punctuate as sentence. "
                    />
                    <CorrectIncorrect
                      correctText="de buurman"
                      explainationText=" No context to suggest this is a sentence; treat as a fragment."
                    />
                    <CorrectIncorrect
                      correctText=" puppy's in bad doen"
                      explainationText=" Sounds like a web search as opposed to a dropped subject. Punctuate as fragment. "
                    />
                  </li>
                  <li>
                    Interjections, greetings, and farewells said in isolation
                    should be considered complete sentences and punctuated as
                    such.{' '}
                    <CorrectIncorrect
                      correctText=" Verrek."
                      explainationText="  interjection "
                    />
                    <CorrectIncorrect
                      correctText=" Hoi."
                      explainationText=" greeting "
                    />
                    <CorrectIncorrect
                      correctText="  Proost, op je gezondheid.."
                      explainationText=" Entire phrase is being used as an interjection."
                    />
                  </li>
                  <li>
                    Do not capitalize or punctuate phrases that are intended to
                    be used by the speaker as a web search, not as full
                    sentences.{' '}
                    <CorrectIncorrect
                      correctText=" filmografie Ted Danson"
                      incorrectText="filmografie Ted Danson."
                    />
                    <CorrectIncorrect
                      correctText=" The Incredibles Monsters en co. WALL-E studio"
                      incorrectText=" The Incredibles Monsters en co. WALL-E studio."
                    />
                    <CorrectIncorrect incorrectText="The Incredibles, Monsters en co., WALL-E, studio." />
                    <CorrectIncorrect incorrectText=" The Incredibles. Monsters en co. WALL-E. studio" />
                    <CorrectIncorrect
                      correctText=" Hoe bak je aardappels?"
                      incorrectText=" hoe bak je aardappels"
                      explainationText="This is a full sentence, so it should be capitalized and punctuated, even if it might be a web search. "
                    />
                  </li>
                  <li>
                    Capitalize sentence fragments that sound like the beginning
                    of a sentence. Add end punctuation to sentence fragments
                    that sound like the end of a sentence. For fragments that do
                    not clearly sound like the beginning or end of a sentence,
                    leave out capitalization and punctuation. Note that sentence
                    fragments may be a result of cut-off audio samples.
                    <CorrectIncorrect
                      correctText=" Wat denk jij daar nou van? Ik bedoel, hij"
                      explainationText=" Begins as complete sentence and ends mid-stream."
                    />
                    <CorrectIncorrect
                      correctText="is een loodgieter. Dan kan hij toch minstens deze wc ontstoppen."
                      explainationText="Sentence-final fragment begins mid-stream."
                    />
                    <CorrectIncorrect
                      correctText=" best lastig, dus laat dat je niet ontmoedigen."
                      explainationText="Audio was cut off at the beginning."
                    />
                    <CorrectIncorrect
                      correctText="Ik loop even naar Starbucks. Ik zal wel Hoeveel kost een cappuccino tegenwoordig? "
                      explainationText="Do not put a period, hyphen, or ellipsis after a fragment even if another sentence follows. "
                    />
                    <CorrectIncorrect
                      correctText=" Hoeveel kost een Waar ga jij naartoe?"
                      explainationText="Both sound like beginnings of sentences."
                    />
                    <CorrectIncorrect
                      correctText="Waar is Waar is het strand?"
                      explainationText=" Repeated beginning of the sentence."
                    />
                    <CorrectIncorrect
                      correctText="gingen weg maar toen besloten we toch"
                      explainationText="Sounds like the middle of a sentence; beginning and end were cut off. "
                    />
                  </li>
                  <li>
                    A voice action is a query where the user requests a specific
                    action that a smartphone can complete. The action requested
                    is generally expressed by a trigger (most often a verb
                    describing the action to be performed, but it can also be
                    any other part of speech denoting a change of state of the
                    device or of an app). If a voice action sounds complete, it
                    should be capitalized and punctuated as a full sentence. In
                    contrast to a voice action, a web search is a query where
                    the user does not request a specific action that a
                    smartphone can complete. Web searches are more often, but
                    not always, spoken as true fragments.{' '}
                    <CorrectIncorrect correctText=" Bel thuis." />
                    <CorrectIncorrect correctText="  Verstuur WhatsApp bericht aan Anita: Hoe gaat het?" />
                    <CorrectIncorrect correctText=" Open mail." />
                    <CorrectIncorrect correctText=" Speel muziek." />
                    <CorrectIncorrect correctText=" Zet de locatie aan." />
                    <CorrectIncorrect correctText="  Zet timer op 10 minuten." />
                    <CorrectIncorrect correctText="  Herinner me zaterdag om 12 uur: sauna." />
                  </li>
                  <li>
                    If an utterance is not clearly a sentence according to the
                    above rules and examples, do not capitalize or punctuate it
                    as a sentence.{' '}
                  </li>
                </ul>
              </div>
              <div id="commas">
                <h2 className="heading">Commas</h2>
                <ul>
                  <li>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on intonation.{' '}
                    <CorrectIncorrect
                      correctText="Waar is de dichtstbijzijnde Albert Heijn?"
                      incorrectText="Waar is, de dichtstbijzijnde, Albert Heijn?"
                      explainationText="Even if the speaker uses long pauses in these places, do not use a comma. There are places where commas are allowed or required, but this example contains neither. "
                    />
                  </li>
                  <li>
                    For complete sentences that follow a single word or phrase
                    that focuses the meaning of a sentence, put a comma after
                    the single word or phrase.
                    <CorrectIncorrect
                      correctText="Taipei, waar ligt dat?"
                      explainationText=" Taipei is a phrase that focuses the meaning of the sentence."
                    />
                  </li>
                  <li>
                    Use a comma when a sentence starts with a discourse word,
                    interjection, or yes/no word. However: If there is a long
                    pause between a discourse word, interjection, or yes/no word
                    and a full sentence that follows it, treat that initial word
                    as a separate sentence.
                    <CorrectIncorrect
                      correctText="Ja, ik kom morgen ook wel even langs op kraamvisite."
                      explainationText="  yes/no word"
                    />
                    <CorrectIncorrect
                      correctText=" Wow, dat is een mooie bak."
                      explainationText='Interjection. Other examples of interjections include "hey", "haha", and others. '
                    />
                    <CorrectIncorrect
                      correctText=" Nou ja, ik zou natuurlijk liever ergens aan een zonnig strand liggen. "
                      explainationText=" Interjection"
                    />
                    <CorrectIncorrect
                      correctText="Ja, ik wil."
                      explainationText="yes/no word"
                    />
                    <CorrectIncorrect
                      correctText="Tuurlijk, komt voor de bakker."
                      explainationText="  yes/no word"
                    />
                    <CorrectIncorrect
                      correctText="Tuurlijk. Komt voor de bakker."
                      explainationText=' Substantial pause after "tuurlijk".'
                    />
                  </li>
                  <li>
                    Use commas in lists.
                    <CorrectIncorrect
                      correctText="Ik ga op reis en ik neem mee: drie jassen, twee koffers, acht boeken. "
                      explainationText=" list of noun phrases"
                    />
                    <CorrectIncorrect
                      correctText=" Iedereen aanbidt haar fantastisch leuke, schattige, lieve baby."
                      explainationText="list of adjectives"
                    />
                  </li>
                  <li>
                    Use commas for non-restrictive modifiers, but do not use
                    commas for restrictive modifiers. The basic test for this is
                    whether the modifier can be dropped from the sentence and
                    still keep basically the same meaning.
                    <CorrectIncorrect
                      correctText="  Klanten die een tafel gereserveerd hebben worden als eerste bediend."
                      explainationText={`Restrictive modifier. The relative clause "die een tafel gereserveerd hebben" restricts which people we are talking about, it doesn't just add additional information about an already delineated group of people. `}
                    />
                    <CorrectIncorrect
                      correctText="Mark Rutte, die sinds 2010 minister-president van Nederland is, werd geboren in 1967. "
                      explainationText={` Non-restrictive modifier. As a rule of thumb, if you ask yourself: "which Mark Rutte" and the answer is absolutely clear, use commas. `}
                    />
                  </li>
                  <li>
                    Use commas in sign-offs, such as those at the end of a
                    message. Do not use end punctuation.
                    <CorrectIncorrect correctText=" Hartelijke groet, Pieter" />
                  </li>
                  <li>
                    Do not use commas in sentences that consist only of a
                    greeting and an addressee. If a greeting occurs at the
                    beginning of a sentence or fragment, place a comma after the
                    greeting. If the greeting includes an addressee, place the
                    comma after the addressee.
                    <CorrectIncorrect correctText="Hoi." />
                    <CorrectIncorrect correctText=" Hoi Hanna." />
                    <CorrectIncorrect correctText="  Hoi, Joost hier." />
                    <CorrectIncorrect
                      correctText="  Hoi Hanna. Joost hier."
                      explainationText='  Long pause between "Hoi Hanna." and "Joost hier." Treat as separate sentences. '
                    />
                  </li>
                  <li>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated by a comma.
                    <CorrectIncorrect correctText=" Elly, bel je me even terug?." />
                    <CorrectIncorrect correctText=" Hoe gaat het ermee, Maaike?" />
                    <CorrectIncorrect
                      correctText=" Daan, Joost hier. We moeten even met elkaar zitten over die verzekeringsclaim. "
                      explainationText='   Note that this is a difficult edge case: "Daan, Joost."'
                    />
                    <CorrectIncorrect correctText=" Hanna, hoi, ik ben Dorien." />
                  </li>
                  <li>
                    The phrase "Ok Google" in isolation is transcribed without a
                    comma or end punctuation. When the phrase appears before
                    longer utterances, place a comma after "Google".
                    <CorrectIncorrect correctText="Ok Google" />
                    <CorrectIncorrect correctText=" Ok Google, foto's van olijfbomen" />
                    <CorrectIncorrect correctText=" Ok Google, laat de contactgegevens van Bart zien." />
                    <CorrectIncorrect
                      correctText=" Ok Google, wanneer is Pasen dit jaar?
	"
                    />
                  </li>
                </ul>
              </div>
              <div id="intonation-marks">
                <h2 className="heading">Intonation marks</h2>
                <ul>
                  <li>
                    Capitalize and punctuate the following as questions: 1) All
                    queries syntactically built as questions, regardless of
                    intonation. 2) All queries which sound like they are being
                    used as questions, regardless of sentence structure.
                    <CorrectIncorrect
                      correctText=" Meen je dat?"
                      explainationText="Syntactically built as a question, so punctuate as a question regardless of intonation. "
                    />
                    <CorrectIncorrect
                      correctText="  Om 3 uur?"
                      explainationText=" Rising intonation suggests it is a question, so punctuate as a question regardless of structure. "
                    />
                    <CorrectIncorrect
                      correctText=" weer in Amsterdam"
                      explainationText="Query has rising intonation, but is most likely a web search rather than a true question. "
                    />
                  </li>
                  <li>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation point. If there is any doubt, err on the side of
                    using period.
                    <CorrectIncorrect
                      correctText="Hoera!"
                      explainationText="Speaker sounds enthusiastic. "
                    />
                    <CorrectIncorrect
                      correctText="Hoera."
                      explainationText="Speaker sounds unenthused."
                    />
                  </li>
                </ul>
              </div>
              <div id="colon-and-quotation">
                <h2 className="heading">Colon and quotation</h2>
                <ul>
                  <li>
                    Use a colon between reported speech verbs and direct
                    quotations. Do not put punctuation within quotation marks
                    unless the punctuation belongs to the reported speech.
                    <CorrectIncorrect
                      correctText='Mijn vrienden zeiden: "Dat gaat je nooit lukken."'
                      explainationText='The word "zeggen" is the most common reported speech verb in Dutch, but other words ("vragen", "antwoorden") can be used for reported speech. '
                    />
                    <CorrectIncorrect incorrectText=' Mijn vrienden zeiden, "dat gaat je nooit ' />
                    <CorrectIncorrect incorrectText=' Mijn vrienden zeiden "dat gaat je nooit ' />
                    <CorrectIncorrect incorrectText=' Mijn vrienden zeiden "Dat gaat je nooit lukken". ' />
                    <CorrectIncorrect
                      correctText='Zeg eens "Liesje leerde Lotje lopen langs de lange Lindelaan".'
                      incorrectText=' Zeg eens: "Liesje leerde Lotje lopen langs de lange Lindelaan". '
                      explainationText=" Omit the comma if the verb is in the imperative."
                    />
                  </li>
                  <li>
                    If the text in quotation marks qualifies as a sentence,
                    punctuate as if it were its own utterance. Do not alter its
                    end punctuation even if the quote is within a sentence. Do
                    not add excess punctuation after end quotation marks.
                    <CorrectIncorrect
                      correctText='Tom zei: "Laten we bij de HEMA afspreken."'
                      incorrectText='Tom zei: "laten we bij de HEMA afspreken.". '
                      explainationText=" Text in quotation marks qualifies as a sentence. Do not add excess punctuation. "
                    />
                    <CorrectIncorrect
                      correctText='Tom zei: "Zullen we bij de HEMA afspreken?"'
                      incorrectText='Tom zei, "zullen we bij de HEMA afspreken?".'
                      explainationText=" Text in quotation marks qualifies as sentences. Do not alter its end punctuation even though the quote is within a sentence."
                    />
                    <CorrectIncorrect
                      correctText='osh heeft gelijk zoiets van, "Ik ben er ook bij. Beloofd." zonder überhaupt even naar zijn agenda te kijken. '
                      explainationText="Text in quotation marks qualifies as sentences. Do not alter its end punctuation even though the quote is within a sentence. "
                    />
                  </li>
                  <li>
                    Use a colon but no quotation marks in quotative voice
                    actions when the quote follows the command. Use quotation
                    marks when the quote is in the middle of the sentence.
                    <CorrectIncorrect
                      correctText=" Vertaal naar het Frans: Hoe gaat het met jou?"
                      explainationText=" The quote follows the command, so use a colon and omit quotation marks. "
                    />
                    <CorrectIncorrect
                      correctText=' Vertaal "Hoe gaat het met jou" naar het Frans.'
                      explainationText="Explanation: The quote is in the middle of a sentence, so use quotation marks and omit colon."
                    />
                    <CorrectIncorrect correctText="Aan example@gmail.com: Hey, hoe was je dag?" />
                    <CorrectIncorrect correctText="Stuur een e-mail aan example@gmail.com met de inhoud: Hey, hoe was je dag? " />
                  </li>
                  <li>
                    Do not capitalize the first word after a colon in
                    enumerations, but use uppercase if the part of the utterance
                    after the colon can be a full sentence.
                    <CorrectIncorrect correctText=" Vertaal naar het Frans: Hoe gaat het met jou?" />
                    <CorrectIncorrect
                      correctText="  Neem voor mij het volgende mee: drie appels, twee bananen en een peer. "
                      explainationText="This is an enumeration, so you should not capitalize the first letter. "
                    />
                  </li>
                  <li>
                    When speakers make a request for single words to be
                    translated into another language, don't punctuate or
                    capitalize the words, even if you'd consider the words as
                    sentences in other situations.
                    <CorrectIncorrect
                      correctText=' Vertaal "hallo" naar het Frans.'
                      explainationText='Do not capitalize "hallo" even though it can stand alone as a sentence in other contexts. '
                    />
                    <CorrectIncorrect
                      correctText=" Vertaal naar het Spaans: verdwijn."
                      explainationText=' Do not capitalize "verdwijn" even though it can stand alone as a sentence in other contexts. '
                    />
                  </li>
                  <li>
                    Do not use quotation marks for metalinguistic uses of words
                    or phrases. These uses include defining the word, talking
                    about the spelling of the word, or any other type of
                    reference to the word itself as a thing.
                    <CorrectIncorrect
                      correctText="Hoe schrijf je takata?."
                      incorrectText=' Hoe schrijf je "takata"?'
                    />
                    <CorrectIncorrect
                      correctText=" Hij zei alleen komkommer."
                      incorrectText='Hij zei alleen "komkommer".'
                    />
                    <CorrectIncorrect
                      correctText="Anna is een palindroom."
                      incorrectText=' "Anna" is een palindroom.'
                    />
                  </li>
                </ul>
              </div>
              <div id="other-symbols">
                <h2 className="heading">Other symbols</h2>
                <ul>
                  <li>
                    {`Apart from standard letters, you should not use any other symbol than: 0-9 äâàßçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ²³,?!'"_°:.()<>{}[]√/@#$€£+=%*&-.; `}
                  </li>
                  <li>
                    Transcribe apostrophes as they are normally used.
                    <CorrectIncorrect correctText="Correct: hits uit de jaren '80" />
                    <CorrectIncorrect correctText="Dit is Renee's huis." />
                  </li>
                  <li>
                    When two opposing teams are mentioned, include a hyphen
                    between their names.
                    <CorrectIncorrect correctText="Ajax-PSV is 1-2 geworden." />
                  </li>
                  <li>
                    Include a hyphen between locations in flight itineraries.
                    <CorrectIncorrect
                      correctText=" goedkope retourtjes Amsterdam-Londen
	"
                    />
                  </li>
                  <li>
                    Use hyphen in phrases and compounds typically written with
                    hyphen. If in doubt, use hyphen. Check your locale's
                    dictionary for hyphenation.{' '}
                    <CorrectIncorrect correctText="Nederlandse marinefregatten voeren de rood-wit-blauwe vlag." />
                    <CorrectIncorrect correctText="Berkel-Enschot is een plaats bij Tilburg." />
                  </li>
                </ul>
              </div>
              <div id="spoken-punctuation">
                <h2 className="heading">Spoken Punctuation</h2>
                <ul>
                  <li>
                    For sentence-level spoken punctuation, write out the full
                    word or words between curly brackets. Do not add punctuation
                    symbols after spoken punctuation. Be careful with homonyms.
                    (See exceptions in the next rule.)
                  </li>
                  <li>
                    Don't spell out internal punctuation like hyphens in web
                    pages, email addresses, addresses, phone numbers, or other
                    word-level punctuation.{' '}
                  </li>
                  <li>
                    If a word that can refer to a punctuation mark is spoken in
                    isolation, it should be written out between curly brackets.{' '}
                    <CorrectIncorrect
                      correctText=" {laag streepje}"
                      incorrectText="_"
                      explainationText=' " laag streepje "'
                    />
                    <CorrectIncorrect
                      correctText=" {streepje}"
                      incorrectText="-"
                      explainationText=' " streepje "'
                    />
                  </li>
                  <li>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following sentence as normal.{' '}
                    <CorrectIncorrect
                      correctText="  Ik ga nu weg {punt} Hoe laat ben jij thuis {vraagteken}"
                      explainationText=' " ik ga nu weg punt hoe laat ben jij thuis vraagteken "'
                    />
                  </li>
                </ul>
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
  rightNavList: {
    marginTop: '-1.3rem',
    borderLeft: '4px solid #1a73e8',
    listStyleType: 'none',
    listStylePosition: 'revert',
  },
  rightNavListItem: {
    marginLeft: '-2rem',
  },
}))
