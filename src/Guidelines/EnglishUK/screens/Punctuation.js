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
            <PageContentHeader currentPage="Longform EnglishUK" />

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
                <p className={styles.block_185}>
                  <span className={styles.text_25}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_25}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_25}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_21}>
                    Correct: He works from home today.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_188}>
                  <span className={styles.text_21}>
                    Correct: And I don't even like him.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Includes subject and verb. Sounds like a
                      whole utterance rather than just a
                    </span>
                  </span>
                </p>
                <p className={styles.block_189}>
                  conjunction to a larger sentence.
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
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.calibre2}>
                    Correct: Who are you talking about? The guy next door.
                  </span>
                </p>
                <p className={styles.block_192}>Explanation: two speakers</p>
                <p className={styles.block_193}>
                  <span className={styles.text_21}>
                    Correct: the guy next door{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No context to suggest this is a sentence;
                      treat it as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_194}>
                  <span className={styles.text_21}>
                    Correct: images of dogs{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Google search for images{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Coming to the party tomorrow?{' '}
                  </span>
                </p>
                <p className={styles.block_195}>
                  <span className={styles.text_21}>
                    Correct: weather in London{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This is asking for information, but the most
                      likely interpretation is as a sentence
                    </span>
                  </span>
                </p>
                <p className={styles.block_196}>fragment on its own.</p>
                <p className={styles.block_197}>
                  <span className={styles.text_2}>
                    The words "yes", "yeah", "no", and similar items expressing
                    affirmative or negative,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    should generally be considered as complete sentences when on
                    their own.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>Correct: Yes.</p>
                <p className={styles.block_90}>Incorrect: yes</p>
                <p className={styles.block_91}>
                  Correct: Are you going for lunch? Yes.
                </p>
                <p className={styles.block_199}>
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
                <p className={styles.block_200}>
                  <span className={styles.text_21}>Correct: Damn. </span>
                  <span className={styles.text_22}>
                    Explanation: interjection{' '}
                  </span>
                  <span className={styles.text_21}>Correct: Hello. </span>
                  <span className={styles.text_22}>Explanation: greeting</span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_21}>Correct: Sure. Bye. </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This includes both a yes/no word and a
                      farewell, with a long pause between.
                    </span>
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_21}>
                    Correct: Cheers to my best friend.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Here, "cheers" is not being used as an
                      interjection on its own, but rather the entire
                    </span>
                  </span>
                </p>
                <p className={styles.block_203}>
                  sentence is being used as an interjection.
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_25}>
                    Below are some examples of common interjections.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>cheers </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>congratulations </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>oops </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>haha </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>hey </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>sorry </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>oh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>ahem </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>oh my gosh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>wow </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_2}>
                    Note the distinction between complete sentences with omitted
                    subjects and phrases{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that simply start with gerunds (the -ing form of a verb).
                    The latter are typically simple{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    search phrases and therefore should not be transcribed as
                    complete sentences. In{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    identifying the difference between a sentence and a
                    gerundive phrase, ask yourself if{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the user is describing an event or state (sentence) or is
                    simply searching for something{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>on the web (gerundive).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_21}>
                    Correct: Going to see the neighbours.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like a whole utterance; the subject
                      was left out by the speaker.
                    </span>
                  </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_21}>
                    Correct: washing puppies in a bath{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Sounds like a web search.
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>Correct: Having fun? </span>
                  <span className={styles.text_22}>
                    Explanation: interrogative intonation{' '}
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_21}>
                    Correct: planting spinach{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like a web search; doesn't sound like
                      a statement or a question.
                    </span>
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_2}>
                    Do not capitalise or punctuate phrases that are intended to
                    be used by the speaker as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    web search, not as full sentences.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  Correct: how to bake potatoes
                </p>
                <p className={styles.block_148}>
                  Incorrect: How to bake potatoes
                </p>
                <p className={styles.block_139}>Correct: pictures of Spain</p>
                <p className={styles.block_90}>Incorrect: Pictures of Spain.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: highest grossing movies from{' '}
                  </span>
                </p>
                <p className={styles.block_213}>
                  Australian directors set in ancient Rome
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Highest grossing movies from{' '}
                  </span>
                </p>
                <p className={styles.block_214}>
                  Australian directors set in ancient Rome.
                </p>
                <p className={styles.block_139}>
                  Correct: Leonardo DiCaprio filmography
                </p>
                <p className={styles.block_148}>
                  Incorrect: Leonardo DiCaprio filmography.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Incredibles Monsters, Inc. WALL-E
                  </span>
                </p>
                <p className={styles.block_215}>studio</p>
                <p className={styles.block_177}>
                  <span className={styles.calibre2}>
                    Incorrect: Incredibles Monsters, Inc. WALL-E
                  </span>
                </p>
                <p className={styles.block_216}>studio.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Incredibles, Monsters, Inc., WALL-E,
                  </span>
                </p>
                <p className={styles.block_217}>studio.</p>
                <p className={styles.block_90}>
                  <span className={styles.calibre2}>
                    Incorrect: Incredibles. Monsters, Inc. WALL-E.
                  </span>
                </p>
                <p className={styles.block_217}>studio</p>
                <p className={styles.block_218}>
                  <span className={styles.text_2}>
                    Capitalise sentence fragments that sound like the beginning
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
                    sentence, leave out{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    capitalisation and punctuation. Note that sentence fragments
                    may be a result of cut-off{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>audio samples.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_21}>
                    Correct: What do you think? It's not as if{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Begins as complete sentence and ends
                      mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.calibre2}>
                    Correct: a lot harder. It doesn't make any sense.
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.calibre2}>
                    Correct: more emotional, so remember that's just part of it.
                  </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.calibre2}>
                    Correct: really difficult, so don't get discouraged.
                  </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.calibre2}>
                    Correct: I'm going to the coffee shop. I'll order a How much
                    is a cappuccino?
                  </span>
                </p>
                <p className={styles.block_224}>
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className={styles.block_225}>
                  <span className={styles.calibre2}>
                    Explanation: Begins mid-stream but ends completely; part of
                    complete sentence.
                  </span>
                </p>
                <p className={styles.block_226}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_227}>
                  <span className={styles.calibre2}>
                    Explanation: Do not put a full stop, hyphen, or ellipsis,
                    even if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_21}>
                    Correct: How much is the Where in the{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Both sound like beginnings of sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_21}>
                    Correct: Where is the Where is the beach?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Repeated beginning of the sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_230}>
                  <span className={styles.text_21}>
                    Correct: were leaving but then decided to{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like the middle of a sentence;
                      beginning and end were cut off.
                    </span>
                  </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_21}>
                    Correct: I borrowed the shoes. bought them{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Unclear whether "bought them" is the end of a
                      sentence or a stand-alone
                    </span>
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.calibre2}>
                    fragment, so default to formatting it as a
                  </span>
                </p>
                <p className={styles.block_233}>fragment.</p>
                <p className={styles.block_234}>
                  <span className={styles.text_21}>
                    Correct: I borrowed the shoes. Loved them.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: "Loved them." is clearly a complete sentence
                      with an omitted subject.
                    </span>
                  </span>
                </p>
                <p className={styles.block_235}>
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
                <p className={styles.block_236}>
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
                <p className={styles.block_237}>
                  <span className={styles.calibre2}>
                    Correct: Send email to example@gmail.com saying: Hey, how
                    was your day?
                  </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.calibre2}>
                    Explanation: The voice action is a complete sentence. It
                    should thus be capitalized and punctuated as such.
                  </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_21}>
                    Correct: Translate into French: How are you?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This sentence requests an action for the
                      device to complete, therefore it is a
                    </span>
                  </span>
                </p>
                <p className={styles.block_240}>voice action.</p>
                <p className={styles.block_241}>
                  <span className={styles.text_21}>
                    Correct: Activate flight mode.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This sentence requests a change of state of
                      the device, therefore it is a voice
                    </span>
                  </span>
                </p>
                <p className={styles.block_242}>action.</p>
                <p className={styles.block_243}>
                  <span className={styles.text_21}>
                    Correct: Show me a map of Brighton.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The verb functions as a trigger for the
                      action.
                    </span>
                  </span>
                </p>
                <p className={styles.block_244}>Correct: Call Jack office.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Set a reminder tomorrow 3:00 p.m.:
                  </span>
                </p>
                <p className={styles.block_245}>Pick up shopping.</p>
                <p className={styles.block_246}>
                  <span className={styles.text_21}>
                    Correct: Flashlight on, please.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The particle functions as a trigger and
                      indicates that this is a voice action, as
                    </span>
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.calibre2}>
                    opposed to a web search. The discourse word
                  </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.calibre2}>
                    "please" also indicates that this is a voice
                  </span>
                </p>
                <p className={styles.block_249}>action.</p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>
                    Correct: directions to Lancaster{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No trigger here, this is a web search.
                    </span>
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_21}>
                    Correct: map of Birmingham{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: web search
                  </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.calibre2}>
                    Correct: showtimes for The Return of the King, Shepherd's
                    Bush
                  </span>
                </p>
                <p className={styles.block_192}>Explanation: web search</p>
                <p className={styles.block_253}>
                  <span className={styles.text_21}>
                    Correct: restaurants in Notting Hill Gate{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: web search{' '}
                  </span>
                </p>
                <p className={styles.block_139}>
                  Correct: Raise volume by one.
                </p>
                <p className={styles.block_139}>Correct: Set volume to five.</p>
                <p className={styles.block_254}>
                  <span className={styles.text_2}>
                    If an utterance is not clearly a sentence according to the
                    above rules and examples, do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not capitalise or punctuate it as a sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_256}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_21}>
                    Correct: Where is the nearest pub?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Where is, the nearest, pub?{' '}
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.calibre2}>
                    Explanation: Even if the speaker uses long pauses in these
                    places, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_259}>
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
                <p className={styles.block_260}>
                  <span className={styles.text_21}>
                    Correct: The London Eye, is it closed?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: topic-comment{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Pumpkin, fruit, or vegetable?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: topic-comment
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>
                    Correct: Now bagels, I like.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: topicalisation{' '}
                  </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_2}>
                    Put a comma after common sentence openers such as
                    prepositional phrases,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    adverbials, and introductory clauses.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.calibre2}>
                    Correct: Now that you mention it, we should buy some
                    supplies.
                  </span>
                </p>
                <p className={styles.block_263}>
                  <span className={styles.calibre2}>
                    Correct: While we're at it, where were they when we needed
                    them?
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.calibre2}>
                    Correct: Interestingly, both parties took place on the same
                    day.
                  </span>
                </p>
                <p className={styles.block_265}>
                  Explanation: introductory clause Explanation: introductory
                  clause Explanation: adverbial
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_21}>
                    Correct: On Wednesday, it was sunny.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: prepositional phrase{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: In the UK, it rains all the time.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: prepositional phrase{' '}
                  </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.calibre2}>
                    Correct: On the other hand, we sometimes have beautiful
                    weather in July.
                  </span>
                </p>
                <p className={styles.block_192}>
                  Explanation: prepositional phrase
                </p>
                <p className={styles.block_268}>
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
                <p className={styles.block_269}>
                  <span className={styles.text_21}>
                    Correct: Well, I thought you had company.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Discourse word. Other examples of discourse
                      words in English include "but", "so",
                    </span>
                  </span>
                </p>
                <p className={styles.block_270}>"actually", and "also".</p>
                <p className={styles.block_271}>
                  <span className={styles.text_21}>Correct: Sorry, babe. </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Interjection. Other examples of interjections
                      include "wow", "hey", "haha", and
                    </span>
                  </span>
                </p>
                <p className={styles.block_272}>others.</p>
                <p className={styles.block_273}>
                  <span className={styles.text_21}>
                    Correct: Wow, that's great.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Interjection{' '}
                  </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_21}>
                    Correct: Ok, I'll follow your lead.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Yes/no word. Other examples of these types
                      items include "yes", "no", "sure", and
                    </span>
                  </span>
                </p>
                <p className={styles.block_272}>others.</p>
                <p className={styles.block_275}>
                  <span className={styles.text_21}>
                    Correct: Hello, my name is Grace.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Common opener{' '}
                  </span>
                  <span className={styles.text_21}>Correct: Yes, I do. </span>
                  <span className={styles.text_22}>
                    Explanation: Yes/no word.{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Sure, I can do that.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: No pause after "sure".{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Sure. I can do that.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Substantial pause after "sure".
                  </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_21}>
                    Correct: Well, that's really nice.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Use a comma when there is no pause, or when
                      there is a pause that isn't long.
                    </span>
                  </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_21}>
                    Correct: Well. That's really nice.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Use a full stop when there is a substantial
                      pause after "well".
                    </span>
                  </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_2}>
                    Use commas before tag questions and sentence-final "too",
                    "also", "please", "however",{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"sorry", etc.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  Correct: That was interesting, wasn't it?
                </p>
                <p className={styles.block_139}>
                  Correct: I might wash my shirt again, too.
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_21}>
                    Correct: I love you too, mate.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No comma before "too" when not
                      sentence-final.
                    </span>
                  </span>
                </p>
                <p className={styles.block_280}>
                  Correct: Pass me the salt, please.
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_21}>Correct: Me, too. </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Even though the utterance is short, the "too"
                      in final position requires a comma
                    </span>
                  </span>
                </p>
                <p className={styles.block_282}>before it.</p>
                <p className={styles.block_283}>
                  <span className={styles.text_21}>
                    Correct: See you tonight, then.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: "Then" falls into this category when it means
                      "in that case", but not when it
                    </span>
                  </span>
                </p>
                <p className={styles.block_284}>means "at that time".</p>
                <p className={styles.block_285}>
                  <span className={styles.text_2}>
                    Use a comma in conditionals of the form "If X, Y" but not of
                    the form "Y if X". (This rule{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    also applies to similar phrases containing "because",
                    "after", "when", etc.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: If that's what you want, I can do that.
                </p>
                <p className={styles.block_152}>
                  Correct: I can do that if that's what you want.
                </p>
                <p className={styles.block_139}>
                  Correct: When Clare comes back, we can go.
                </p>
                <p className={styles.block_139}>
                  Correct: After Anna went home, she ate dinner.
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Because Olly played football yesterday,
                  </span>
                </p>
                <p className={styles.block_138}>his legs are aching.</p>
                <p className={styles.block_139}>
                  Correct: I am busy because I have to work.
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_21}>
                    Correct: I am working so I can go home later.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: "So" is treated this way when it's synonymous
                      with "so that".
                    </span>
                  </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_2}>
                    Use a comma when two independent clauses are connected by
                    the discourse{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    connectives "and", "but", "so", "or".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.calibre2}>
                    Correct: He put some music on, and I washed the dishes.
                  </span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.calibre2}>
                    Correct: He put some music on and washed the dishes.
                  </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.calibre2}>
                    Correct: I got myself into this, so now I feel committed.
                  </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.calibre2}>
                    Explanation: Two independent clauses, so use a comma.
                  </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.calibre2}>
                    Explanation: Not independent clauses, so don't use a comma.
                  </span>
                </p>
                <p className={styles.block_293}>
                  <span className={styles.calibre2}>
                    Correct: She took the job so she could get discounted cinema
                    tickets.
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.calibre2}>
                    Explanation: If the word "so" can be replaced with "so that"
                    and still have the same meaning, then you should not use a
                    comma.
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_21}>
                    Correct: Pretty good, and yours?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: "and yours" is a sentence with most of the
                      content elided, so you should use a
                    </span>
                  </span>
                </p>
                <p className={styles.block_296}>comma.</p>
                <p className={styles.block_297}>
                  <span className={styles.text_25}>Use commas in lists.</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Correct: The smart, funny, cute baby took her
                  </span>
                </p>
                <p className={styles.block_299}>first steps.</p>
                <p className={styles.block_300}>
                  <span className={styles.text_2}>
                    In a series of three or more items, use a comma after each
                    item, even if it comes before{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the word "and" or "or" (known as the Oxford comma or serial
                    comma).
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  Correct: I like golf, tennis, and badminton.
                </p>
                <p className={styles.block_90}>
                  Incorrect: I like golf, tennis and badminton.
                </p>
                <p className={styles.block_148}>
                  Incorrect: I like golf tennis and badminton.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Do you want to eat Indian, Chinese, or
                  </span>
                </p>
                <p className={styles.block_301}>Lebanese food tonight?</p>
                <p className={styles.block_90}>
                  <span className={styles.calibre2}>
                    Incorrect: Do you want to eat Indian, Chinese or
                  </span>
                </p>
                <p className={styles.block_302}>Lebanese food tonight?</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Do you want to eat Indian Chinese or
                  </span>
                </p>
                <p className={styles.block_178}>Lebanese food tonight?</p>
                <p className={styles.block_303}>
                  <span className={styles.text_2}>
                    Use commas for non-restrictive modifiers, but do not use
                    commas for restrictive{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    modifiers. The basic test for this is whether the modifier
                    can be dropped from the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence and still keep basically the same meaning.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.calibre2}>
                    Correct: The US president, Barack Obama, was at the summit.
                  </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.calibre2}>
                    Correct: The people who made reservations will get service
                    before everyone else.
                  </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.calibre2}>
                    Correct: President Obama, who was elected in 2008, was
                    inaugurated in 2009.
                  </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.calibre2}>
                    Correct: The president who was elected in 2008 was
                    inaugurated in 2009.
                  </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive modifier. "Barack Obama" does
                    not change the core meaning of "the US president", it just
                    adds additional information about the US president.
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.calibre2}>
                    Explanation: Restrictive modifier. The relative clause "who
                    made reservations" restricts which people we are talking
                    about, it doesn't just add additional information about an
                    already delineated group of people.
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive modifier. As a rule of thumb,
                    if you ask yourself: "which president of the United States"
                    or "which classmate" and the answer is not absolutely clear,
                    don't use
                  </span>
                </p>
                <p className={styles.block_311}>commas.</p>
                <p className={styles.block_312}>
                  <span className={styles.calibre2}>
                    Explanation: Unless there are significant pauses after
                    "president" and "2008", you should assume this is a
                    restrictive modifier.
                  </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_2}>
                    Use commas in sign-offs, such as those at the end of a
                    message. Do not use end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>Correct: From, Alicia</p>
                <p className={styles.block_152}>Correct: Sincerely, Madeeha</p>
                <p className={styles.block_314}>
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
                <p className={styles.block_198}>Correct: Hi.</p>
                <p className={styles.block_139}>Correct: Hi Alison.</p>
                <p className={styles.block_91}>Correct: Hi, it's Emma.</p>
                <p className={styles.block_315}>
                  <span className={styles.text_21}>
                    Correct: Hi Louise. It's Beth.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Long pause between "Hi Louise." and "It's
                      Beth." Treat as separate sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_2}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>by a comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  Correct: Tilly, call me back.
                </p>
                <p className={styles.block_139}>Correct: How are you, Grace?</p>
                <p className={styles.block_317}>
                  <span className={styles.calibre2}>
                    Correct: Clara, Susan. I need to talk to you about that
                    insurance claim.
                  </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.calibre2}>
                    Explanation: Note that this is a difficult edge case:
                    "Clara, Susan." appears to be a shortened version of "Clara,
                    it's Susan.", so we treat it as a full sentence.
                  </span>
                </p>
                <p className={styles.block_319}>
                  Correct: Adam, hi, this is Thomas.
                </p>
                <p className={styles.block_320}>
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
                <p className={styles.block_198}>Correct: Ok Google</p>
                <p className={styles.block_139}>
                  Correct: Ok Google, pictures of olive trees
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, show me Pete's contact
                  </span>
                </p>
                <p className={styles.block_321}>info.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, when is Pancake Day this
                  </span>
                </p>
                <p className={styles.block_322}>year?</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_324}>
                  <span className={styles.text_2}>
                    Capitalise and punctuate the following as questions: 1) All
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
                <p className={styles.block_325}>
                  <span className={styles.text_21}>
                    Correct: Are you serious?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Intonation sounds more like a statement than
                      a question.
                    </span>
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_21}>
                    Correct: At 3:00 a.m.?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Utterance uses rising intonation.{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: And Kate is coming, too?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_21}>
                    Correct: weather in Dublin{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Query uses rising intonation, but is most
                      likely a web search rather than a true
                    </span>
                  </span>
                </p>
                <p className={styles.block_328}>question.</p>
                <p className={styles.block_329}>
                  <span className={styles.text_2}>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation mark. If there is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    any doubt, err on the side of using a full stop.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>Correct: You stink!</p>
                <p className={styles.block_330}>
                  <span className={styles.text_21}>Correct: Yay! </span>
                  <span className={styles.text_22}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                  <span className={styles.text_21}>Correct: Yay. </span>
                  <span className={styles.text_22}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: You are such a chicken.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Spoken dispassionately.{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Hope you have a lovely holiday!{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_21}>
                    Correct: Have a nice day.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Spoken with a pleasant neutral tone
                    </span>
                  </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_28}>
                    Correct: I got an A in my biology exam!{' '}
                  </span>
                  <span className={styles.text_29}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                  <span className={styles.text_31}> </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_333}>
                  <span className={styles.text_2}>
                    Use a comma between reported speech verbs and direct
                    quotations. Do not put{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation within quotation marks unless the punctuation
                    belongs to the reported{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>speech.</span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_21}>
                    Correct: My friend said, "alligator crocodile".{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: My friend said, "alligator crocodile." Incorrect:
                    My friend said "alligator crocodile." Incorrect: My friend
                    said "alligator crocodile".
                  </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.calibre2}>
                    Explanation: The word "say" is the most common reported
                    speech verb in English, but other words ("ask", "respond",
                    "reply") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_336}>
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
                <p className={styles.block_337}>
                  <span className={styles.text_21}>
                    Correct: Henry said, "Let's meet at 3:00."{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Henry said, "Let's meet at 3:00.".
                  </span>
                </p>
                <p className={styles.block_338}>
                  Correct: Mark asked, "Are we meeting at 3:00?"
                </p>
                <p className={styles.block_339}>
                  <span className={styles.calibre2}>
                    Incorrect: Mark asked, "Are we meeting at 3:00?".
                  </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_21}>
                    Correct: Did David say, "Meet me there."{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Did David say, "Meet me there."?
                  </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.calibre2}>
                    Correct: Josh was like, "I'll be there. I promise." without
                    even checking his calendar.
                  </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.calibre2}>
                    Explanation: The word "say" is the most common reported
                    speech verb in English, but other words ("ask", "respond",
                    "reply") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.calibre2}>
                    Explanation: The "be like" construction introduces a direct
                    quotation, so a comma is needed.
                  </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_21}>
                    Correct: Say "onomatopoeia".{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Omit the comma if the verb is in the
                    imperative.
                  </span>
                </p>
                <p className={styles.block_345}>
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
                <p className={styles.block_198}>
                  <span className={styles.calibre2}>
                    Correct: The children told me that they're
                  </span>
                </p>
                <p className={styles.block_138}>hungry.</p>
                <p className={styles.block_346}>
                  <span className={styles.text_21}>
                    Correct: John said he can't be there Saturday.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Intonation implies indirect quote.{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Liz said, "We should just get going."{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Intonation implies direct quote.
                  </span>
                </p>
                <p className={styles.block_347}>
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
                <p className={styles.block_348}>
                  <span className={styles.text_21}>
                    Correct: Translate into French: How are you?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The quote follows the command, so use a
                      colon.
                    </span>
                  </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.calibre2}>
                    Correct: Translate "What's your name?" into French.
                  </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.calibre2}>
                    Explanation: The quote is in the middle of a sentence, so
                    use quotation marks.
                  </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_21}>
                    Correct: How do you say "I love you." in French?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Omit commas after "say" verbs in translation
                      requests.
                    </span>
                  </span>
                </p>
                <p className={styles.block_280}>
                  <span className={styles.calibre2}>
                    Correct: How do you say in Japanese: I want
                  </span>
                </p>
                <p className={styles.block_352}>coffee.</p>
                <p className={styles.block_152}>
                  <span className={styles.calibre2}>
                    Correct: To example@gmail.com: Hey, how{' '}
                  </span>
                </p>
                <p className={styles.block_353}>was your day?</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Send email to example@gmail.com{' '}
                  </span>
                </p>
                <p className={styles.block_215}>
                  saying: Hey, how was your day?
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_2}>
                    Leave text after colons lowercase unless capitalisation is
                    required (can stand alone as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>complete sentence).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.calibre2}>
                    Correct: Set appointment for tomorrow at 3:30
                  </span>
                </p>
                <p className={styles.block_138}>p.m.: doctor's appointment.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Text Beth: The roofers won't be there
                  </span>
                </p>
                <p className={styles.block_355}>until Wednesday.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Text Anna that I'll be there in 5
                  </span>
                </p>
                <p className={styles.block_356}>minutes.</p>
                <p className={styles.block_357}>
                  <span className={styles.text_2}>
                    When speakers make a request for single words to be
                    translated into another language,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    don't punctuate or capitalise the words, even if you'd
                    consider the words as sentences{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>in other situations.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: Translate "hello" into French.
                </p>
                <p className={styles.block_91}>Correct: Hello.</p>
                <p className={styles.block_139}>
                  Correct: Translate into Spanish: leave.
                </p>
                <p className={styles.block_152}>Correct: Leave.</p>
                <p className={styles.block_358}>
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
                <p className={styles.block_198}>
                  Correct: Define ambidexterity.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Define "ambidexterity".
                </p>
                <p className={styles.block_139}>
                  Correct: He just said the word zucchini.
                </p>
                <p className={styles.block_90}>
                  Incorrect: He just said the word "zucchini".
                </p>
                <p className={styles.block_91}>Correct: synonym for angry</p>
                <p className={styles.block_90}>
                  Incorrect: synonym for "angry"
                </p>
                <p className={styles.block_91}>Correct: What is a garfish?</p>
                <p className={styles.block_90}>
                  Incorrect: What is a "garfish"?
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Hannah is spelled the same backwards
                  </span>
                </p>
                <p className={styles.block_359}>and forwards.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: "Hannah" is spelled the same{' '}
                  </span>
                </p>
                <p className={styles.block_360}>backwards and forwards.</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_362}>
                  <span className={styles.text_2}>
                    Apart from the English letters a through z, you should not
                    use any other symbol than: 0-
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>9 </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_7}>
                    äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿ
                  </span>
                  <span className={styles.text_32}>ȳ</span>
                  <span className={styles.text_33}>
                    žÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸ
                  </span>
                  <span className={styles.text_32}>Ȳ</span>
                  <span className={styles.text_33}>Ž²³,?!~^\'"</span>
                  <span className={styles.text_34}> </span>
                  <span className={styles.text_35}>
                    _°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_25}>
                    Transcribe apostrophes as they are normally used.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  Correct: This is Mary's house.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: We haven't visited all of our{' '}
                  </span>
                </p>
                <p className={styles.block_356}>neighbours' houses yet.</p>
                <p className={styles.block_139}>
                  Correct: She can't stand pickled herring.
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Radio 4 plays the greatest hits of the
                  </span>
                </p>
                <p className={styles.block_365}>80s, 90s, and today.</p>
                <p className={styles.block_366}>
                  <span className={styles.text_2}>
                    Transcribe all possessives with "'s" at the end unless the
                    noun already has an "s" added{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    to the end that marks the plural, in which case only an
                    apostrophe should be added.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: the children's play group
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_21}>
                    Correct: When is Selena Gomez's birthday?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Clearly possessive, but pronounced simply as
                      "Gomez".
                    </span>
                  </span>
                </p>
                <p className={styles.block_244}>Correct: James' project</p>
                <p className={styles.block_152}>
                  <span className={styles.calibre2}>
                    Correct: Your neighbours' houses are all so
                  </span>
                </p>
                <p className={styles.block_138}>beautiful.</p>
                <p className={styles.block_368}>
                  <span className={styles.text_21}>
                    Correct: the Gunners' goal in the final minute{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Only an apostrophe is added because the noun
                      is plural in this example, e.g.
                    </span>
                  </span>
                </p>
                <p className={styles.block_369}>
                  "The Gunners ARE a sports team."
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_21}>
                    Correct: Morrisons' final earnings report{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Even though "Morrisons" is singular, it still
                      only receives an apostrophe at
                    </span>
                  </span>
                </p>
                <p className={styles.block_371}>
                  the end, not "'s", e.g. "Morrisons IS a company."
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_25}>
                    When two opposing teams are mentioned, include a hyphen
                    between their names.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  Correct: Are you going to the Leeds Utd
                </p>
                <p className={styles.block_373}>Chelsea match?</p>
                <p className={styles.block_374}>
                  <span className={styles.text_25}>
                    Include a hyphen between locations in flight itineraries.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>Correct: Rome-London flight</p>
                <p className={styles.block_90}>Incorrect: Rome London flight</p>
                <p className={styles.block_297}>
                  <span className={styles.text_25}>
                    Use Collins to determine whether to use a hyphen in phrases
                    and compounds.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Correct: Show me play-by-play coverage of the
                  </span>
                </p>
                <p className={styles.block_138}>match.</p>
                <p className={styles.block_152}>
                  Correct: Can you get me a to-go box?
                </p>
                <p className={styles.block_139}>
                  Correct: The information is available on a need
                </p>
                <p className={styles.block_375}>to-know basis.</p>
                <p className={styles.block_139}>
                  Correct: I've been playing catch-up all day.
                </p>
                <p className={styles.block_148}>Incorrect: catch up</p>
                <p className={styles.block_139}>Correct: the long-haired man</p>
                <p className={styles.block_139}>
                  Correct: He's an accident-prone boy, isn't he?
                </p>
                <p className={styles.block_139}>Correct: Bye-bye.</p>
                <p className={styles.block_148}>Incorrect: Buh-bye.</p>
                <p className={styles.block_148}>Incorrect: Bye bye.</p>
                <p className={styles.block_90}>Incorrect: Buh bye</p>
                <p className={styles.block_376}>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={styles.block_377}>
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
                <p className={styles.block_378}>
                  <span className={styles.text_21}>
                    Correct: Ok {`{dot} `}
                    {`{dot} `}
                    {`{dot} `}
                  </span>
                  <span className={styles.text_22}>Incorrect: Ok... </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>ok dot dot dot </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.calibre2}>
                    Correct: Hi {`{comma}`} how are you {`{question mark}`} I am
                    fine {`{full stop}`}
                  </span>
                </p>
                <p className={styles.block_381}>
                  Incorrect: Hi, how are you? I am fine.
                </p>
                <p className={styles.block_382}>
                  <span className={styles.calibre2}>
                    Correct: He told me, {`{quote} `}Don't bring the cat.{' '}
                    {`{end quote}`}
                  </span>
                </p>
                <p className={styles.block_383}>
                  Incorrect: He told me, "Don't bring the cat."
                </p>
                <p className={styles.block_384}>Correct: {`{smiley face}`}</p>
                <p className={styles.block_385}>Incorrect: :-)</p>
                <p className={styles.block_386}>Incorrect: smiley face</p>
                <p className={styles.block_387}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      hi comma how are you question mark i am fine full stop
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      he told me quote don't bring the cat end quote
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>smiley face </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_390}>
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
                <p className={styles.block_391}>
                  Correct: I live in apartment 4-A.
                </p>
                <p className={styles.block_392}>
                  Incorrect: I live in apartment 4 {`{dash}`} A. Incorrect: I
                  live in apartment four {`{dash}`} A.
                </p>
                <p className={styles.block_393}>Correct: www.fake-domain.com</p>
                <p className={styles.block_394}>
                  <span className={styles.calibre2}>
                    Incorrect: www {`{dot} `}fake {`{hyphen}`} domain {`{dot} `}
                    com
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    i live in apartment four dash a{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      w w w dot fake hyphen domain dot com
                    </span>
                  </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_21}>
                    Correct: She is an actress/model.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: She is an actress {`{slash}`} model.
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    she is an actress slash model{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.calibre2}>
                    Explanation: We consider slash to be word-level punctuation.
                  </span>
                </p>
                <p className={styles.block_399}>
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
                <p className={styles.block_89}>Correct: {`{colon}`}</p>
                <p className={styles.block_91}>Correct: {`{underscore}`}</p>
                <p className={styles.block_400}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalise the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.calibre2}>
                    Correct: I'm leaving now {`{full stop}`} How long is the
                    drive?
                  </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      i'm leaving now full stop how long is the drive
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
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
