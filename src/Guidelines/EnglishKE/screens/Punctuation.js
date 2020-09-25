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
            <PageContentHeader currentPage="Longform EnglishKE" />

            <div className="content text">
              {' '}
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
                <p className={styles.block_193}>
                  <span className={styles.text_8}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_6}> </span>
                  <span className={styles.text_8}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_6}> </span>
                  <span className={styles.text_8}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_194}>
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
                <p className={styles.block_195}>
                  <span className={styles.calibre2}>
                    Correct: Who are you talking about? The guy next door.
                  </span>
                </p>
                <p className={styles.block_196}>Explanation: two speakers</p>
                <p className={styles.block_197}>
                  <span className={styles.text_12}>
                    Correct: washing puppies in a tub{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: No context to suggest this is a sentence;
                      treat it as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_12}>
                    Correct: On my way to Thika.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Dropping the subject sounds natural.
                    </span>
                  </span>
                </p>
                <p className={styles.block_199}>Correct: weather in Mombasa</p>
                <p className={styles.block_200}>
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
                <p className={styles.block_201}>
                  <span className={styles.text_12}>Correct: Ati. </span>
                  <span className={styles.text_13}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_12}>Correct: Hello. </span>
                  <span className={styles.text_13}>Explanation: greeting </span>
                </p>
                <p className={styles.block_203}>
                  <span className={styles.text_12}>Correct: Sure. Bye. </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: This includes both a yes/no word and a
                      farewell, with a long pause between.
                    </span>
                  </span>
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_12}>
                    Correct: Cheers to my best friend.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Here, "cheers" is not being used as an
                      interjection on its own, but rather the entire
                    </span>
                  </span>
                </p>
                <p className={styles.block_205}>
                  sentence is being used as an interjection.
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_8}>
                    Below are some examples of common interjections.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>cheers </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>congratulations </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>haha </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>hey </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>sorry </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>oh </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>oh my gosh </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>wow</span>
                </p>
                <p className={styles.block_210}>
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
                <p className={styles.block_211}>
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
                <p className={styles.block_212}>
                  <span className={styles.text_12}>
                    Correct: Activate flight mode.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: This sentence requests a change of state of
                      the device, therefore it is a voice
                    </span>
                  </span>
                </p>
                <p className={styles.block_213}>action.</p>
                <p className={styles.block_214}>
                  <span className={styles.text_12}>
                    Correct: Show me a map of Nairobi city.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: The verb functions as a trigger for the
                      action.
                    </span>
                  </span>
                </p>
                <p className={styles.block_215}>
                  Correct: Raise volume by one.
                </p>
                <p className={styles.block_149}>Correct: Set volume to five.</p>
                <p className={styles.block_216}>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_217}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.calibre2}>
                    Correct: Please let me know how much I need to pay.
                  </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.calibre2}>
                    Incorrect: Please, let me know, how much I need to pay.
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.calibre2}>
                    Explanation: Even if the speaker uses long pauses in these
                    places, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_221}>
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
                <p className={styles.block_222}>
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
                <p className={styles.block_223}>
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
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_12}>
                    Correct: Yes, I'll call you later.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Yes/no word. Other examples of these types of
                      items include "yes", "no", "sure",
                    </span>
                  </span>
                </p>
                <p className={styles.block_225}>and others.</p>
                <p className={styles.block_226}>
                  <span className={styles.text_12}>
                    Correct: Well, that's really hard.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Use a comma when there is no pause, or when
                      there is a pause that isn't long.
                    </span>
                  </span>
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_12}>
                    Correct: Well. That's really hard.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Use a period when there is a substantial
                      pause after "well".
                    </span>
                  </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_8}>Use commas in lists.</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_229}>
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
                <p className={styles.block_230}>
                  <span className={styles.text_2}>
                    Use commas in sign-offs, such as those at the end of a
                    message. Do not use end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                </p>
                <p className={styles.block_231}>
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
                <p className={styles.block_232}>
                  <span className={styles.text_2}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>by a comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_233}>
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
                <p className={styles.block_156}>Correct: Ok Google</p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, how far is Lake Naivasha
                  </span>
                </p>
                <p className={styles.block_234}>from Nairobi?</p>
                <p className={styles.block_149}>
                  Correct: Ok Google, where is Jacaranda Hotel?
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_236}>
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
                <p className={styles.block_237}>
                  <span className={styles.text_12}>
                    Correct: Are you serious?{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Intonation sounds more like a statement than
                      a question.
                    </span>
                  </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_12}>
                    Correct: All that in one day?{' '}
                  </span>
                  <span className={styles.text_13}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_12}>
                    Correct: weather in Kisumu{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Query uses rising intonation, but is most
                      likely a web search rather than a true
                    </span>
                  </span>
                </p>
                <p className={styles.block_240}>question.</p>
                <p className={styles.block_241}>
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
                <p className={styles.block_101}>Correct: Shut up!</p>
                <p className={styles.block_242}>
                  <span className={styles.text_12}>Correct: Exactly! </span>
                  <span className={styles.text_13}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_18}>Correct: Exactly. </span>
                  <span className={styles.text_19}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_244}>
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
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_12}>
                    Correct: She said, "huge baboon".{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: My friend said, "huge baboon." Incorrect: My
                    friend said "huge baboon." Incorrect: My friend said "huge
                    baboon".
                  </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.calibre2}>
                    Explanation: The word "say" is the most common reported
                    speech verb in English, but other words ("ask", "respond",
                    "reply") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_247}>
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
                </p>
                <p className={styles.block_248}>
                  Correct: Anthony said, "I will be there by noon."
                </p>
                <p className={styles.block_249}>
                  <span className={styles.calibre2}>
                    Incorrect: Anthony said, "I will be there by noon.".
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_12}>
                    Correct: She asked, "Are you there?"{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: She asked, "Are you there?".{' '}
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_12}>
                    Correct: Did Jane say, "Meet me there."{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: Did Jane say, "Meet me there."?
                  </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.calibre2}>
                    Explanation: The word "say" is the most common reported
                    speech verb in English, but other words ("ask", "respond",
                    "reply") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_253}>
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
                <p className={styles.block_254}>
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
                <p className={styles.block_255}>
                  <span className={styles.text_12}>
                    Correct: Translate into French: How are you?{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: The quote follows the command, so use a
                      colon.
                    </span>
                  </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.calibre2}>
                    Correct: Translate "What's your name?" into French.
                  </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.calibre2}>
                    Correct: How do you say in Russian: I want coffee.
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.calibre2}>
                    Explanation: The quote is in the middle of a sentence, so
                    use quotation marks.
                  </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.calibre2}>
                    Correct: To abbo@gmail.com: How was your{' '}
                  </span>
                </p>
                <p className={styles.block_260}>day?</p>
                <p className={styles.block_261}>
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
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_263}>
                  <span className={styles.text_2}>
                    Apart from the English letters a through z, you should not
                    use any other symbol than: 0-
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>9 </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_22}>
                    äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿ
                  </span>
                  <span className={styles.text_23}>ȳ</span>
                  <span className={styles.text_24}>
                    žÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸ
                  </span>
                  <span className={styles.text_23}>Ȳ</span>
                  <span className={styles.text_24}>Ž²³,?!~^\'"</span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    _°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
                  </span>
                  <span className={styles.text_27}> </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_2}>
                    Use hyphen in phrases and compounds typically written with
                    hyphen. If in doubt, use{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    hyphen. Check Merriam-Webster for hyphenation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_101}>
                  <span className={styles.calibre2}>
                    Correct: Show me play-by-play coverage of the
                  </span>
                </p>
                <p className={styles.block_150}>match.</p>
                <p className={styles.block_149}>
                  Correct: Can you get me a to-go box?
                </p>
                <p className={styles.block_103}>
                  Correct: The information is available on a need
                </p>
                <p className={styles.block_180}>to-know basis.</p>
                <p className={styles.block_149}>
                  Correct: I've been playing catch-up all day.
                </p>
                <p className={styles.block_158}>Incorrect: catch up</p>
                <p className={styles.block_167}>Correct: the long-haired man</p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: He's an accident-prone little guy, isn't
                  </span>
                </p>
                <p className={styles.block_150}>he?</p>
                <p className={styles.block_149}>Correct: Bye-bye.</p>
                <p className={styles.block_158}>Incorrect: Buh-bye.</p>
                <p className={styles.block_102}>Incorrect: Bye bye.</p>
                <p className={styles.block_158}>Incorrect: Buh bye</p>
                <p className={styles.block_266}>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={styles.block_267}>
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
                <p className={styles.block_268}>
                  <span className={styles.text_12}>
                    Correct: Is that all {`{question mark}`}{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: Is that all?{' '}
                  </span>
                </p>
                <p className={styles.block_269}>
                  Incorrect: Is that all question mark Incorrect: Is that all
                  question mark?
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_12}>
                    Correct: Okay {`{dot} {dot} {dot}`}{' '}
                  </span>
                  <span className={styles.text_13}>Incorrect: Okay... </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    is that all question mark{' '}
                  </span>
                  <span className={styles.text_6}>" Example audio: " </span>
                  <span className={styles.text_7}>okay dot dot dot </span>
                  <span className={styles.text_6}>"</span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_12}>
                    Correct: {`{smiley face}`}{' '}
                  </span>
                  <span className={styles.text_13}>Incorrect: :-) </span>
                </p>
                <p className={styles.block_273}>Incorrect: smiley face</p>
                <p className={styles.block_274}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>smiley face </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_275}>
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
                <p className={styles.block_276}>
                  Correct: We are located at Afya Centre room 9- C.
                </p>
                <p className={styles.block_277}>
                  <span className={styles.calibre2}>
                    Incorrect: We are located at Afya Centre room 9 {`{dash}`} C
                  </span>
                </p>
                <p className={styles.block_278}>Correct: www.google.co.ke</p>
                <p className={styles.block_279}>
                  Incorrect:{` www {dot} google {dot} co {dot}`} ke
                </p>
                <p className={styles.block_280}>
                  Correct: capital of Trans-Nzoia
                </p>
                <p className={styles.block_279}>
                  Incorrect: capital of Trans {`{dash}`} Nzoia
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      we are located at afya centre room nine dash c
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      w w w dot google dot co dot ke{' '}
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    capital of trans dash nzoia{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.calibre2}>
                    Explanation: We consider dash to be word-level punctuation.
                  </span>
                </p>
                <p className={styles.block_285}>
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
                <p className={styles.block_156}>Correct: {`{colon}`}</p>
                <p className={styles.block_149}>Correct: {`{underscore}`}</p>
                <p className={styles.block_286}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_12}>
                    Correct: We're not discussing this further {`{period}`} What
                    is the next item in the agenda?{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: We're not discussing this further {`{perdiod} `}
                    what is the next item in the agenda?
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_10}>
                    Incorrect: We're not discussing this further. What is the
                    next item in the agenda?{' '}
                  </span>
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
