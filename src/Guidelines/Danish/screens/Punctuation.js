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
    'fragment-versus-sentences',
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
            <PageContentHeader currentPage="Longform Danish" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>this section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="fragment-versus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={styles.block_180}>
                  <span className={styles.text_17}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_18}> </span>
                  <span className={styles.text_17}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_17}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_23}>
                    Correct: Han arbejder hjemmefra i dag.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_183}>
                  <span className={styles.text_23}>
                    Correct: Og jeg kan ikke engang lide ham.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Includes subject and verb. Sounds like a
                      whole utterance rather than just a
                    </span>
                  </span>
                </p>
                <p className={styles.block_184}>
                  conjunction to a larger sentence.
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_23}>
                    Correct: Han satte musik på og vaskede op.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: One subject, no comma.{' '}
                  </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_23}>
                    Correct: Han er læge, og hans kone er ingeniør.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Includes two main clauses connected by a
                      coordinating conjunction. This
                    </span>
                  </span>
                </p>
                <p className={styles.block_187}>requires a comma.</p>
                <p className={styles.block_188}>
                  <span className={styles.text_23}>
                    Correct: Han købte den fordi den var billig.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Includes a main and a subordinate clause
                      connected by a subordinating
                    </span>
                  </span>
                </p>
                <p className={styles.block_189}>
                  conjunction, so do not use a comma.
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_2}>
                    Sometimes a phrase which is not obviously grammatically a
                    sentence should{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    nevertheless be treated as a sentence because of its
                    context, e.g. if it's an answer to a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    specific question, or if it's an example where dropping the
                    subject sounds completely{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    natural as a complete sentence.
                  </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_23}>
                    Correct: Hvem taler du om? Min nabo.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: two speakers{' '}
                  </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_23}>Correct: min nabo </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: No context to suggest this is a sentence;
                      treat it as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_23}>
                    Correct: billeder af hunde{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_194}>
                  <span className={styles.text_23}>
                    Correct: Skal ind og besøge naboen.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like a whole utterance. The subject
                      pronoun was left out by the speaker.
                    </span>
                  </span>
                </p>
                <p className={styles.block_195}>
                  <span className={styles.text_23}>
                    Correct: Selvfølgelig.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Exception to the verb rule for utterances
                      like "Ja." and "Nej."
                    </span>
                  </span>
                </p>
                <p className={styles.block_196}>
                  <span className={styles.text_23}>
                    Correct: vejret i London{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: This is asking for information, but the most
                      likely interpretation is as a sentence
                    </span>
                  </span>
                </p>
                <p className={styles.block_197}>fragment on its own.</p>
                <p className={styles.block_198}>
                  <span className={styles.text_2}>
                    Interjections, greetings, and farewells said in isolation
                    should be considered complete{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentences and punctuated as such.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_23}>Correct: Pokkers. </span>
                  <span className={styles.text_24}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_23}>Correct: Hej. </span>
                  <span className={styles.text_24}>Explanation: greeting </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_23}>Correct: Ja. Farvel. </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: This includes both a yes/no word and a
                      farewell, with a long pause between.
                    </span>
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_23}>
                    Correct: Skål for min bedste ven.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Here, "skål" (cheers) is not being used as an
                      interjection on its own, but rather
                    </span>
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.calibre2}>
                    the entire sentence is being used as an{' '}
                  </span>
                </p>
                <p className={styles.block_203}>interjection.</p>
                <p className={styles.block_204}>
                  <span className={styles.text_2}>
                    Do not capitalize or punctuate phrases that are intended to
                    be used by the speaker as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    web search, not as full sentences.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: hvordan laver man æbleskiver
                </p>
                <p className={styles.block_92}>
                  Incorrect: Hvordan laver man æbleskiver?
                </p>
                <p className={styles.block_93}>Correct: billeder af katte</p>
                <p className={styles.block_92}>Incorrect: Billeder af katte.</p>
                <p className={styles.block_93}>
                  Correct: verdens dyreste film nogensinde
                </p>
                <p className={styles.block_92}>
                  Incorrect: Verdens dyreste film nogensinde.
                </p>
                <p className={styles.block_93}>
                  Correct: film med Mads Mikkelsen
                </p>
                <p className={styles.block_92}>
                  Incorrect: Film med Mads Mikkelsen.
                </p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: De utrolige Monsters, Inc. WALL-E
                  </span>
                </p>
                <p className={styles.block_205}>filmselskab</p>
                <p className={styles.block_143}>
                  <span className={styles.calibre2}>
                    Incorrect: De utrolige Monsters, Inc. WALL-E
                  </span>
                </p>
                <p className={styles.block_206}>filmselskab.</p>
                <p className={styles.block_207}>
                  <span className={styles.calibre2}>
                    Incorrect: De utrolige, Monsters, Inc., WALL-E,
                  </span>
                </p>
                <p className={styles.block_206}>filmselskab.</p>
                <p className={styles.block_143}>
                  <span className={styles.calibre2}>
                    Incorrect: De utrolige. Monsters, Inc. WALL-E.
                  </span>
                </p>
                <p className={styles.block_208}>Filmselskab</p>
                <p className={styles.block_209}>
                  <span className={styles.text_2}>
                    Capitalize sentence fragments that sound like the beginning
                    of a sentence. Add end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation to sentence fragments that sound like the end of
                    a sentence. For fragments{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that do not clearly sound like the beginning or end of a
                    sentence, leave out capitalization{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and punctuation. Note that sentence fragments may be a
                    result of cut-off audio{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>samples.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_23}>
                    Correct: Hvad synes du? Det er jo ikke fordi{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Begins as complete sentence and ends
                      mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.calibre2}>
                    Correct: meget sværere. Det giver ingen mening.
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.calibre2}>
                    Correct: mere følsom, så husk at det kun er en del af det.
                  </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.calibre2}>
                    Correct: meget vanskeligt, så du må ikke miste modet.
                  </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.calibre2}>
                    Correct: Jeg går ind på caféen. Jeg bestiller en Hvad koster
                    en cappucino?
                  </span>
                </p>
                <p className={styles.block_215}>
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className={styles.block_216}>
                  <span className={styles.calibre2}>
                    Explanation: Begins mid-stream but ends completely; part of
                    complete sentence.
                  </span>
                </p>
                <p className={styles.block_217}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_218}>
                  <span className={styles.calibre2}>
                    Explanation: Do not use a period, hyphen, or ellipsis, even
                    if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_23}>
                    Correct: Hvad koster Hvor er{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Both sound like beginnings of sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_23}>
                    Correct: Hvor er Hvor er stranden?{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Repeated beginning of the sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_23}>
                    Correct: skulle gå men så besluttede{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like the middle of a sentence;
                      beginning and end were cut off.
                    </span>
                  </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_23}>
                    Correct: Jeg lånte skoene. købte dem{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Unclear whether "købte dem" is the end of a
                      sentence or a stand-alone fragment, so
                    </span>
                  </span>
                </p>
                <p className={styles.block_223}>
                  default to formatting it as a fragment.
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_23}>
                    Correct: Jeg lånte skoene. Var vild med dem.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: "Var vild med dem." is clearly a complete
                      sentence with an omitted subject.
                    </span>
                  </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_2}>
                    A voice action is a query where the user requests a specific
                    action that a smartphone{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    can complete. The action requested is generally expressed by
                    a trigger (most often a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    verb describing the action to be performed, but it can also
                    be any other part of speech{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_2}>
                    denoting a change of state of the device or of an app). If a
                    voice action sounds{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    complete, it should be capitalized and punctuated as a full
                    sentence. In contrast to a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    voice action, a web search is a query where the user does
                    not request a specific action{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that a smartphone can complete. Web searches are more often,
                    but not always, spoken{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as true fragments.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: Aktiver GPS.</p>
                <p className={styles.block_94}>
                  Correct: Ring til Jonas derhjemme.
                </p>
                <p className={styles.block_93}>Correct: Sæt alarm til 06:50.</p>
                <p className={styles.block_140}>
                  Correct: Ring til 65 12 34 45.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Spil musik Amalie Marie Johansen Let
                  </span>
                </p>
                <p className={styles.block_227}>Me Tell You.</p>
                <p className={styles.block_94}>Correct: Åbn Google+.</p>
                <p className={styles.block_94}>
                  Correct: Tekst Anne med beskeden: Hej.
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_2}>
                    If an utterance is not clearly a sentence according to the
                    above rules and examples, do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not capitalize or punctuate it as a sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_230}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_23}>
                    Correct: Hvor er den nærmeste benzintank?{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Hvor er, den nærmeste, benzintank?
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.calibre2}>
                    Explanation: Even if the speaker uses long pauses in these
                    places, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_2}>
                    For complete sentences that follow a single word or phrase
                    that focuses the meaning of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a sentence, put a comma after the single word or phrase.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_23}>
                    Correct: Nationalmuseet, er det åbent?{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: topic-comment{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Tomaten, frugt eller grøntsag?{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: topic-comment
                  </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_23}>
                    Correct: Kanelsnegle, dem kan jeg lide.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: topicalization{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_2}>
                    Do not put a comma after common sentence openers such as
                    prepositional phrases{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and adverbials. Introductory clauses containing a finite
                    verb should, however, be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>followed by a comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.calibre2}>
                    Correct: På den anden side er papegøjer fantastiske kæledyr.
                  </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.calibre2}>
                    Correct: I USA er der en kaffebar på hvert gadehjørne.
                  </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.calibre2}>
                    Correct: Nu du siger det, skal vi huske at købe aftensmad.
                  </span>
                </p>
                <p className={styles.block_239}>
                  Explanation: prepositional phrase Explanation: prepositional
                  phrase Explanation: introductory clause
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_2}>
                    The words "ja", "jo", "nej", and similar items expressing
                    affirmative or negative, should{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    generally be considered as complete sentences when on their
                    own.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: Ja.</p>
                <p className={styles.block_92}>Incorrect: ja</p>
                <p className={styles.block_93}>Correct: Skal du i byen? Nej.</p>
                <p className={styles.block_241}>
                  <span className={styles.text_2}>
                    Use a comma when a sentence starts with a discourse word,
                    interjection, or yes/no{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    word. However: If there is a long pause between a discourse
                    word, interjection, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    yes/no word and a full sentence that follows it, treat that
                    initial word as a separate{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence.</span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_23}>
                    Correct: Okay, jeg gør bare ligesom dig.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Yes/no word. Other examples of these types
                      items include "ja", "nej", "jo" and
                    </span>
                  </span>
                </p>
                <p className={styles.block_243}>others.</p>
                <p className={styles.block_244}>
                  <span className={styles.text_23}>
                    Correct: Ja, det gør jeg.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Yes/no word.{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Undskyld, skat.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Interjection.{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Wow, det er fedt.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Interjection{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Ja, det kan jeg sagtens.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: No pause after "ja".{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Ja. Det kan jeg sagtens.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Substantial pause after "ja".
                  </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_23}>
                    Correct: Næh, hvor er det flot.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Use a comma when there is no pause, or when
                      there is a pause that isn't long.
                    </span>
                  </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_23}>
                    Correct: Næh. Hvor er det flot.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Use a period when there is a substantial
                      pause after "næh".
                    </span>
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_17}>
                    Below are some examples of common interjections.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>skål </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>tillykke </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>undskyld </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>wow </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hey </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>jah</span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>tja </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>tjo </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ha </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hov </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hovsa </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ups </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>nå </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>nåh </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ah </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>aha </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ih </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>åh </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>av </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>æv </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>øv </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>puh </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>pyh </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>pyha </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_28}>
                    Use commas before tag questions.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Det er en god film, ikke?{' '}
                  </span>
                </p>
                <p className={styles.block_252}>
                  Correct: Den var spændende, var den ikke? Correct: Du har ikke
                  set den, vel?
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_17}>
                    Use commas before conditional clauses.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.calibre2}>
                    Correct: Hvis det er det du vil have, så gør jeg det.
                  </span>
                </p>
                <p className={styles.block_140}>
                  Correct: Når Rasmus kommer, kan vi begynde.
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_17}>Use commas in lists.</span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>
                  <span className={styles.calibre2}>
                    Correct: Den søde, sjove, kloge baby tog sine
                  </span>
                </p>
                <p className={styles.block_256}>første skridt.</p>
                <p className={styles.block_257}>
                  <span className={styles.text_28}>
                    Do not use comma in lists before the conjunctions "og" and
                    "eller".
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Jeg hører pop, rock, klassisk og jazz.
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_2}>
                    Use commas for non-restrictive modifiers. For restrictive
                    relative clauses, use{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    "slutkomma" (end comma), but not "startkomma" (start comma,
                    i.e. no comma before{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    subordinate clauses). The basic test for restriction is
                    whether the modifier can be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    dropped from the sentence and still keep basically the same
                    meaning.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.calibre2}>
                    Correct: Den største danske å, Gudenåen, løber gennem
                    Silkeborg.
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.calibre2}>
                    Correct: Præsident Obama, som blev valgt i 2008, blev indsat
                    i embedet i 2009.
                  </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive modifier. "Gudenåen" does not
                    change the core meaning of "den største danske å", it just
                    adds the name of the stream, so startkomma is required.
                  </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive modifier. As a rule of thumb,
                    if you ask yourself: "which president of the United States"
                    or "which classmate" and the answer is not absolutely clear,
                    don't use
                  </span>
                </p>
                <p className={styles.block_263}>startkomma.</p>
                <p className={styles.block_264}>
                  <span className={styles.calibre2}>
                    Correct: De gæster som har reserveret bord, bliver betjent
                    før alle andre.
                  </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.calibre2}>
                    Correct: Den præsident som blev valgt i 2008, blev indsat i
                    embedet i 2009.
                  </span>
                </p>
                <p className={styles.block_266}>
                  <span className={styles.calibre2}>
                    Explanation: Restrictive modifier. The relative clause "som
                    har reserveret bord" restricts which guests we are talking
                    about, it doesn't just add additional information about an
                    already delineated group of people.
                  </span>
                </p>
                <p className={styles.block_267}>
                  Explanation: Restrictive modifier.
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_2}>
                    Do not use commas in sign-offs, such as those at the end of
                    a message. Do not use end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_146}>Correct: Fra Ole</p>
                <p className={styles.block_93}>
                  Correct: Med venlig hilsen Eva
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_2}>
                    Do not use commas in sentences that consist only of a
                    greeting and an addressee. If a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    greeting occurs at the beginning of a sentence or fragment,
                    place a comma after the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    greeting. If the greeting includes an addressee, place the
                    comma after the addressee.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: Hej.</p>
                <p className={styles.block_94}>Correct: Hej Dan.</p>
                <p className={styles.block_93}>Correct: Hej, det er Anne.</p>
                <p className={styles.block_94}>
                  Correct: Hej Peter, det er Anne.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_23}>
                    Correct: Hej Peter. Det er Anne.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Long pause between "Hej Peter." and "Det er
                      Anne." Treat as separate sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_2}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>by a comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Marie, ring til mig senere.
                </p>
                <p className={styles.block_94}>
                  Correct: Hvordan går det, Julie?
                </p>
                <p className={styles.block_94}>
                  Correct: Mark, hej, det er Anette.
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_2}>
                    The phrase "Ok Google" in isolation is transcribed without a
                    comma or end punctuation.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    When the phrase appears before longer utterances, place a
                    comma after "Google".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_146}>Correct: Ok Google</p>
                <p className={styles.block_93}>
                  Correct: Ok Google, billeder af oliventræer
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, vis mig Daniels{' '}
                  </span>
                </p>
                <p className={styles.block_273}>kontaktinformation.</p>
                <p className={styles.block_94}>
                  Correct: Ok Google, hvornår er det påske i år?
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_275}>
                  <span className={styles.text_2}>
                    Capitalize and punctuate the following as questions: 1) All
                    queries syntactically built as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    questions, regardless of intonation. 2) All queries which
                    sound like they are being used{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    as questions, regardless of sentence structure.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_23}>
                    Correct: Mener du det?{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Intonation sounds more like a statement than
                      a question.
                    </span>
                  </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_23}>Correct: Kl. 12:00? </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Utterance uses question intonation.
                    </span>
                  </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_23}>
                    Correct: Og Kate kommer også?{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Utterance uses question intonation.
                    </span>
                  </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_23}>
                    Correct: vejret i Frederikshavn{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Query uses question intonation, but is most
                      likely a web search rather than a
                    </span>
                  </span>
                </p>
                <p className={styles.block_280}>true question.</p>
                <p className={styles.block_281}>
                  <span className={styles.text_2}>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation point. If there is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    any doubt, err on the side of using period.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: Hør efter!</p>
                <p className={styles.block_282}>
                  <span className={styles.text_23}>Correct: Super! </span>
                  <span className={styles.text_24}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                  <span className={styles.text_23}>Correct: Super. </span>
                  <span className={styles.text_24}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Du er så fjollet.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Spoken dispassionately.
                  </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_23}>
                    Correct: Tillykke med fødselsdagen!{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: Hav en god dag.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_30}>
                    Correct: Jeg bestod køreprøven!{' '}
                  </span>
                  <span className={styles.text_31}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                  <span className={styles.text_33}> </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_285}>
                  <span className={styles.text_2}>
                    Use a colon between reported speech verbs and direct
                    quotations. Do not put{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation within quotation marks unless the punctuation
                    belongs to the reported{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>speech.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_23}>
                    Correct: Min veninde sagde: "Bøf med løg".{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Min veninde sagde, "Bøf med løg." Incorrect: Min
                    veninde sagde, "Bøf med løg". Incorrect: Min veninde sagde
                    "Bøf med løg." Incorrect: Min veninde sagde "Bøf med løg".
                  </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.calibre2}>
                    Explanation: The word "sige" is the most common reported
                    speech verb in Danish, but other words such as "spørge" and
                    "svare" can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_2}>
                    If the text in quotation marks qualifies as a sentence,
                    punctuate as if it were its own{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    utterance. Do not alter its end punctuation even if the
                    quote is within a sentence. Do not{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    add excess punctuation after end quotation marks.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_146}>
                  Correct: Anne sagde: "Vi mødes kl. 11:00."
                </p>
                <p className={styles.block_143}>
                  Incorrect: Anne sagde: "Vi mødes kl. 11:00.".
                </p>
                <p className={styles.block_143}>
                  Incorrect: Anne sagde: "Vi mødes kl. 11:00".
                </p>
                <p className={styles.block_140}>
                  Correct: Jan spurgte: "Ses vi kl. 17:00?"
                </p>
                <p className={styles.block_92}>
                  Incorrect: Jan spurgte: "Ses vi kl. 17.00?".
                </p>
                <p className={styles.block_143}>
                  Incorrect: Jan spurgte: "Ses vi kl. 17.00"?
                </p>
                <p className={styles.block_94}>
                  Correct: Sagde Anne: "Vi mødes under uret."
                </p>
                <p className={styles.block_143}>
                  Incorrect: Sagde Anne: "Vi mødes under uret."?
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_23}>
                    Correct: Sig "onomatopoietikon".{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Omit the colon if the verb is in the
                      imperative.
                    </span>
                  </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_2}>
                    Do not use quotation marks for indirect quotes. Use context
                    and intonation to determine{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    whether a quote is direct or indirect.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Børnene sagde at de var sultne.
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_2}>
                    Use a colon but no quotation marks in quotative voice
                    actions when the quote follows{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the command. Use quotation marks when the quote is in the
                    middle of the sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_23}>
                    Correct: Oversæt til fransk: Hvordan går det?{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: The quote follows the command, so use a colon.
                  </span>
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_23}>
                    Correct: Oversæt "Hvad hedder du?" til fransk.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: The quote is in the middle of a sentence, so
                      use quotation marks.
                    </span>
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.calibre2}>
                    Correct: Hvordan siger man "Jeg elsker dig." på fransk?
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.calibre2}>
                    Correct: Hvordan siger man på tysk: Jeg vil gerne have
                    kaffe.
                  </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.calibre2}>
                    Correct: Til example@gmail.com: Hej, har du haft en god dag?
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.calibre2}>
                    Correct: Send e-mail til example@gmail.com: Hej, har du haft
                    en god dag?
                  </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Explanation: Omit commas after "sige" verbs in translation
                    requests.
                  </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_2}>
                    Leave text after colons lowercase unless capitalization is
                    required (can stand alone as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>complete sentence).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_146}>
                  <span className={styles.calibre2}>
                    Correct: Opret aftale i morgen kl. 15:30:{' '}
                  </span>
                </p>
                <p className={styles.block_300}>lægebesøg.</p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Send sms til Kim: Håndværkerne{' '}
                  </span>
                </p>
                <p className={styles.block_273}>kommer først på onsdag.</p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Send sms til Sarah om at jeg kommer
                  </span>
                </p>
                <p className={styles.block_301}>om fem minutter.</p>
                <p className={styles.block_302}>
                  <span className={styles.text_2}>
                    When speakers make a request for single words to be
                    translated into another language,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    don't punctuate or capitalize the words, even if you'd
                    consider the words as sentences{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>in other situations.</span>
                </p>
                <p className={styles.block_140}>
                  Correct: Oversæt "hej" til fransk.
                </p>
                <p className={styles.block_94}>Correct: Hej.</p>
                <p className={styles.block_94}>
                  Correct: Oversæt til spansk: gå.
                </p>
                <p className={styles.block_93}>Correct: Gå.</p>
                <p className={styles.block_303}>
                  <span className={styles.text_2}>
                    Do not use quotation marks for metalinguistic uses of words
                    or phrases. These uses{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    include defining the word, talking about the spelling of the
                    word, or any other type of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    reference to the word itself as a thing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Definér ambidekstralitet.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Definér "ambidekstralitet".
                </p>
                <p className={styles.block_93}>
                  Correct: Han har lige sagt ordet zucchini.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Han har lige sagt ordet "zucchini".
                </p>
                <p className={styles.block_93}>
                  Correct: Kajak staves ens både forfra og bagfra.
                </p>
                <p className={styles.block_92}>
                  <span className={styles.calibre2}>
                    Incorrect: "Kajak" staves ens både forfra og
                  </span>
                </p>
                <p className={styles.block_304}>bagfra.</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_306}>
                  <span className={styles.text_2}>
                    Apart from standard letters, you should not use any other
                    symbol than: 0-9{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    åäâàæÆçÇéèëêïîñÑøôöóŒœüûùμÿÅÄÂÀÉÈËÊÏÎØÔÖÓÜÛÙŸ²³,?!'"_°:.()&lt;&gt;
                    {}[]√/\@#$€£+=
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>%*&amp;-.;</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_2}>
                    Apostrophes occur in genitive cases of names ending in s, x
                    and z, in endings added to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    abbreviations, in endings added to numbers and other
                    symbols, and in English proper{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    names and brand names such as "McDonald's".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Det er Jonas' taske og Villads'{' '}
                  </span>
                </p>
                <p className={styles.block_135}>madpakke.</p>
                <p className={styles.block_93}>
                  Correct: TV'et og PC'en virker ikke.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: USA's præsident skal mødes med FN's
                  </span>
                </p>
                <p className={styles.block_308}>generalsekretær.</p>
                <p className={styles.block_93}>
                  Correct: Det er linje 216's endestation.
                </p>
                <p className={styles.block_94}>
                  Correct: Vi skal på "McDonald's"
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_23}>
                    Correct: Han spiser ofte på Jensen's Bøfhus.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Danish company with incorrect, but frequent
                      use of apostrophe in its name.
                    </span>
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_28}>
                    When two opposing teams are mentioned, include a hyphen
                    between their names.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Skal du ind og se Brøndby-FCK?{' '}
                  </span>
                </p>
                <p className={styles.block_311}>
                  Include a hyphen between locations in flight, train, bus and
                  ship itineraries.
                </p>
                <p className={styles.block_140}>Correct: Rødby-Puttgarden</p>
                <p className={styles.block_92}>Incorrect: Rødby Puttgarden</p>
                <p className={styles.block_93}>
                  Correct: Jeg har købt en billet til København
                </p>
                <p className={styles.block_312}>Aarhus.</p>
                <p className={styles.block_313}>
                  <span className={styles.text_2}>
                    Use hyphens in compounds in which one of the parts is an
                    abbreviation, a number, a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    foreign word or consists of more than one word.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Projektet har modtaget EU-støtte.
                </p>
                <p className={styles.block_94}>
                  Correct: Hvem vinder fodbold-vm?
                </p>
                <p className={styles.block_94}>
                  Correct: Den ph.d.-studerende fra Max Planck
                </p>
                <p className={styles.block_314}>
                  Instituttet gav mig sin e-mailadresse.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Han samler på science fiction-romaner
                  </span>
                </p>
                <p className={styles.block_256}>
                  fra første del af 1900-tallet.
                </p>
                <p className={styles.block_94}>
                  Correct: Orkestret spillede en Carl Nielsen
                </p>
                <p className={styles.block_315}>symfoni.</p>
                <p className={styles.block_316}>
                  <span className={styles.calibre2}>
                    Correct: Hun er uddannet social- og sundhedsassistent.
                  </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.calibre2}>
                    Explanation: Hyphen replaces repetition of the same part of
                    a compound word.
                  </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>

                <p className={styles.block_319}>
                  <span className={styles.text_2}>
                    For sentence-level spoken punctuation, write out the full
                    word or words between curly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    brackets. Do not add punctuation symbols after spoken
                    punctuation. Be careful with{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    homonyms. (See exceptions in the next rule.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_2}>
                    Don't spell out internal punctuation like hyphens in web
                    pages, email addresses,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    addresses, phone numbers, or other word-level punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_2}>
                    If a word that can refer to a punctuation mark is spoken in
                    isolation, it should be written{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    out between curly brackets.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: {`{punktum}`}</p>
                <p className={styles.block_94}>Correct: {`{underscore}`}</p>
                <p className={styles.block_322}>
                  <span className={styles.text_23}>
                    Correct: Jeg bor i lejlighed 4-A.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      jeg bor i lejlighed fire bindestreg a
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.calibre2}>
                    Correct: Jeg tager afsted nu {`{punktum}`} Hvor langt er der
                    hjem?
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      jeg tager afsted nu punktum hvor langt er der hjem
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
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
