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
            <PageContentHeader currentPage="Longform uk_ua_test_set" />
            <div className="content text">
              <h1 id="calibre_link-18" className={styles.block_23}>
                Punctuation
              </h1>
              <p className={styles.block_24}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <h2 id="calibre_link-19" className={styles.block_}>
                  Fragments versus sentences
                </h2>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  In general, a complete sentence contains a subject and a verb,
                  and should be punctuated accordingly. However, sentences
                  without a subject or verb could also be legal in some cases,
                  and are especially common in informal speech.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Сьогодні він працює вдома.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Includes subject (він) and verb (працює).
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Сьогодні він вдома.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            сьогодні він вдома{' '}
                          </i>
                          "
                        </p>
                        <p className={styles.block_16}>
                          Explanation: Permitted sentence, includes subject
                          (він) and no verb.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Можеш прийти завтра.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            можеш прийти завтра{' '}
                          </i>
                          "
                        </p>
                        <p className={styles.block_16}>
                          Explanation: Sounds like a whole utterance, possibly
                          an answer to a specific question. The subject pronoun
                          was left out by the speaker.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Включи ліхтарик.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> включи ліхтарик </i>"
                        </p>
                        <p className={styles.block_16}>
                          Explanation: Imperative sentences that serve as
                          commands should be formatted as complete sentences.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: З ким ти розмовляєш? З нашими сусідами.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Two speakers. "With our neighbors." is an
                          answer to a specific question.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: з нашими сусідами
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: No context to suggest this is a sentence;
                          treat it as a fragment.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Йдеш на вечірку завтра?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Dropping the subject is permitted.
                          Punctuate as a sentence.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: купати кошенят в домашніх умовах
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Sounds like a web search as opposed to a
                          dropped subject. Punctuate as fragment.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Отакої.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: interjection
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Привіт.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>Explanation: greeting</p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Добре. Хай щастить.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Entire phrase is being used as an
                          interjection.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: як варити картоплю
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Як варити картоплю.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Океан Ельзи пісні
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Океан Ельзи. Пісні.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: слухати музику
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Слухати музику.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Іnfinitive phrases should be
                          non-capitalized and non-punctuated.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: включити телефон включити телефон включити
                          телефон
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Repeated infinitive phrases should be
                          separated by spaces only.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Що ти думаєш? Це не так, ніби
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Sentence-initial fragment ends
                          mid-stream.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: набагато важче. Це безглуздо.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Sentence-final fragment begins
                          mid-stream.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: дуже важко, але не треба засмучуватися.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Audio was cut off at the beginning.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я зараз йду до кав'ярні. Я замовлю одне
                          Скільки коштує капучино?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Do not put a period, hyphen, or ellipsis
                          after a fragment even if another sentence follows.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Скільки коштує в А де знаходиться
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Both sound like beginnings of sentences.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Де знаходиться Де знаходиться пляж?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Repeated beginning of the sentence.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: їхали додому та після
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Sounds like the middle of a sentence;
                          beginning and end were cut off.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  The words "так", "ні", "ото ж", and similar items expressing
                  an affirmative or negative answer, should generally be
                  considered as complete sentences when on their own.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Так.
                        </p>
                        <p className={styles.block_16}>Incorrect: так.</p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Йдеш до неї на весілля? Авжеж.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Йдеш до неї на весілля? авжеж
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Two speakers. "Авжеж" is an answer to a
                          specific question.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
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
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Рома Сандрека Набрати.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Відкрий програму Clash of Clans.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Додати нагадування: робота.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Встановити будильник на 9:05.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <h2 id="calibre_link-20" className={styles.block_}>
                  Commas
                </h2>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Де найближча заправка?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Де, найближча, заправка?
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_16}>
                          Explanation: Even if the speaker uses long pauses in
                          these places, do not use a comma. There are places
                          where commas are allowed or required, but this example
                          contains neither.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Буенос Айрес, це де?
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_16}>
                          Explanation: topic-comment
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Безперечно, він дуже талановитий.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: adverbial
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Перебування в Києві, уяви собі, багато дало
                          мені для п'єси.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: introductory clause
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: По-перше, я не чула про цю угоду.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: introductory clause
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він, до речі, не дуже зацікавлений.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: introductory clause
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: То, певна річ, була помилка.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: introductory clause
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Переглядаючи фотокартки, Олена посміхалася.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: introductory participial phrase
                          "переглядаючи фотокартки"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Повечерявши, усі полягали спати.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: introductory verb participle phrase
                          "повечерявши"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Прощаючись, Микола пообіцяв собі повернутися.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: introductory verb participle phrase
                          "прощаючись"
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Дійсно, з батареї відкривався вид майже
                          всього розташування російських військ.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Дійсно з батареї відкривався вид майже
                          всього розташування російських військ.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Discourse word.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Так, я згодна.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Так я згодна.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Yes/no word.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Вибач, я був неправий.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Вибач я був неправий
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Interjection. Other examples are "вау",
                          "гей", etc.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Добре, я спробую.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Добре я спробую.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Yes/no word.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Добре. Я спробую.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Добре я спробую.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Yes/no word. Substantial pause after
                          "Добре".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  List of interjections and discourse words that are separated
                  by comma.
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_27}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бач</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бачиш</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бачте</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>безперечно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>безсумнівно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>безумовно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бувало</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>видимо</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>видно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>відома річ</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>власне</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>головне</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>головним чином</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>далебі</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>до речі</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>звичайно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>звісно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>здавалось</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>здається</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>значить</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>зрозуміло</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>кажуть</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>коротко кажучи</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>либонь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>мабуть</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>між іншим</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>мовляв</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>може</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>можливо</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>навпаки</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>на жаль</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>на мій погляд</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>на нашу думку</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>наприклад</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>нарешті</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>на щастя</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>немає сумніву</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>отже</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>очевидно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>певна річ</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>певно</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>по-перше</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>по-друге</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>правда</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>проте</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>однак</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>сказати б</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>справді</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>щоправда</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>як видимо</span>
                  </div>
                  <div className={styles.block_29}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ясна річ</span>
                  </div>
                </div>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  List of interjections and discourse words that are not
                  separated by comma.
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_27}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>адже</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>все-таки</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>все ж таки</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>наче</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>начебто</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>немов</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>немовби</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ніби</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>нібито</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>от</span>
                  </div>
                  <div className={styles.block_29}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>принаймні</span>
                  </div>
                </div>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use commas before tag questions and sentence-final "будь
                  ласка", "вибач", "правда", etc.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Цікава була лекція, чи не так?
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Tag question.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Тут гарно, правда?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Sentence-final "правда".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Допоможіть, будь ласка.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Sentence-final "будь ласка".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use commas to set apart independent clauses.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Якщо Оля не піде, то я теж не піду.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: conditional clause "якщо"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Коли немає натхнення, то немає і праці.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: conditional clause "коли"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ми мусимо більше працювати, оскільки наша
                          команда невелика.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: conditional clause "оскільки"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Щоб виконати цю вправу, потрібен конспект.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: conditional clause "щоб"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Потрібен конспект, щоб виконати цю вправу.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: День закінчився, і ми вирішили їхати додому.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Independent clause that starts with "і".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я вважаю, що вам не зашкодить познайомитися.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Subordinate clause that begins with "що".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я бачу, як багато ти працюєш.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Subordinate clause that begins with "як".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a comma in comparisons that use words like "як", "немов",
                  "наче", "мов", "ніби", etc.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: сяють, як зорі у небі
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Comparison that starts with "як".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: легке, немов пір'я
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Comparison that starts with "немов".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use commas in lists where members are coordinated, belong to
                  the same grammatical category and define the same part of the
                  sentence.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Там стояли червоні, сині, зелені столи.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: list of adjectives
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Нам потрібні помідори, картопля, м'ясо і
                          олія.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Нам потрібні помідори, картопля, м'ясо, і
                          олія.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: List of nouns, do not use a comma before
                          "і".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Йшов довгий товарний потяг.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Йшов довгий, товарний потяг.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: List of adjectives defining different
                          qualities, do not use commas in between.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Мені подобається місто Київ.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Мені подобається місто, Київ.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Restrictive modifier. The appositive
                          "Київ" restricts which city the speaker is referring
                          to.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Столиця України, Київ, мені дуже подобається.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Столиця України Київ мені дуже подобається.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Non-restrictive modifier. The appositive
                          "Київ" merely adds information about the city. If the
                          appositive was removed, the meaning of the sentence
                          would remain the same.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Доброго дня. Ось мій друг Олег Боднаренко.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Доброго дня. Ось мій друг, Олег Боднаренко.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Restrictive modifier.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Мій найкращий друг, Іван Потопальський,
                          сьогодні завітав до мене.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Мій найкращий друг Іван Потопальський
                          сьогодні завітав до мене.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: The appositive "Іван Потопальський" is
                          non-restrictive and merely adds more information. If
                          it was removed, the sentence would have slightly less
                          information, but would retain the core of its meaning.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  When two or more words or phrases of the same grammatical
                  category (e.g. two noun phrases or two verbs) are joined by a
                  conjunction "а", "але", "та", "однак", "проте", "а проте",
                  "зате", "так", "зате" or multiple conjunctions "і...і"
                  ("й...й"), "ні...ні" (vані...ані"), "то...то" ("не то...не
                  то"), "чи...чи" ("чи то...чи то"), "або...або", separate them
                  with commas. Do not put a comma between words that belong to
                  fixed phrasal sets, among which are: "і так і сяк", "і туди і
                  сюди", "і вдень і вночі", "ні туди ні сюди", "ні сяк ні так",
                  "ні се ні те", "ні вдень ні вночі", "ні риба ні м'ясо".
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Тобі треба не фільм дивитися, а домашнє
                          завдання робити.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Verb phrases joined by conjunction "а".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він гарний хлопець, але дуже впертий.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Adjectival phrases joined by conjunction
                          "але".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Тече вода, та не витікає.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Adjectival phrases joined by conjunction
                          "та".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ми працювали і вдень і вночі.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ми працювали і вдень, і вночі.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Noun phrases joined by conjunctions
                          "і...і". The words "і вдень і вночі" belong to the
                          fixed phrase, thus do not put a comma.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Вона то просиналась, то знов засинала.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Verb phrases joined by conjunctions
                          "то...то".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він не хотів ані одружуватись, ані працювати.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Verb phrases joined by conjunctions
                          "ані...ані".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Важко сказати, чи то вечір, чи ніч на дворі.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Noun phrases joined by conjunctions
                          "чи...чи".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: З любов'ю, Тарас
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Sentence-initial, mid sentence and sentence-final addressees
                  should always be separated from the rest of the sentence by
                  commas, even when sentence consists of only of a greeting and
                  addressee.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Привіт, Олено.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Addressee should always be separated by
                          commas.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Іване, принеси мені води.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Як тебе не вистачає, люба Україно!
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Здрастуй, моя Наталко, як довго ми не
                          бачилися!
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ok Google
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: зображення собак
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ok Google, увімкни GPS.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ok Google, зустрітися завтра з Іваном о
                          другій годині.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="intonation-marks">
                <h2 id="calibre_link-21" className={styles.block_}>
                  Intonation marks
                </h2>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Як справи?
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Syntactically built as a question, so
                          punctuate as a question regardless of intonation.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: О третій ранку?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Rising intonation suggests it is a
                          question, so punctuate as a question regardless of
                          structure.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: землетрус на Львівщині
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Query uses rising intonation, but is most
                          likely a web search rather than a true question.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ура!
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Speaker sounds enthusiastic.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ура.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Speaker sounds unenthused.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Приємно познайомитись.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Spoken dispassionately.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Замовч!
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Spoken with enthusiasm.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="colon-and-quotation">
                <h2 id="calibre_link-22" className={styles.block_}>
                  Colon and quotation
                </h2>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a colon between reported speech verbs like "сказав" and
                  "відповів" and direct quotations.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він сказав: "Я дуже хочу пити".
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Він сказав, "Я дуже хочу пити".
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Use a colon before the beginning of
                          reported speech.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Моя мама відповіла: "Ми поїдемо в Карпати
                          завтра".
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Моя мама відповіла, "Ми поїдемо в Карпати
                          завтра".
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Use a colon before the beginning of
                          reported speech.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  If the text in quotation marks qualifies as an affirmative
                  sentence, capitalize but do not punctuate. If the quotation is
                  at the end of a sentence, put the appropriate sentence-final
                  punctuation after the closing quotation mark. If the quotation
                  is at the beginning or in the middle of a sentence, put a
                  comma and a dash after the closing quotation mark.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_4}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ганна сказала: "Давай зустрінемось о третій".
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна сказала: "Давай зустрінемось о
                          третій."
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна сказала: "Давай зустрінемось о
                          третій.".
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: No period inside the quotation marks. Put
                          a period after the quotation.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_4}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Хіба Ганна не сказала: "Давай зустрінемось о
                          третій"?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна сказала: "Давай зустрінемось о
                          третій?"
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна сказала: "Давай зустрінемось о
                          третій."?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: No period inside the quotation marks. Put
                          a question mark after the quotation.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_4}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: "Давай зустрінемось о третій", - сказала
                          Ганна.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: "Давай зустрінемось о третій", сказала
                          Ганна.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: "Давай зустрінемось о третій." - сказала
                          Ганна.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: No period inside the quotation marks. Put
                          a comma and a dash after the quotation.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  If the text inside the quotation marks is a question or
                  exclamation that would normally end with an intonation mark
                  (question mark or exclamation point), put that intonation mark
                  before the closing quotation mark unless a question mark
                  follows the quote. Do not add excess punctuation. If the quote
                  is in the middle of a sentence, put a dash after the closing
                  quotation mark.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_4}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ганна спитала: "Ми можемо зустрітися о
                          третій?"
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна спитала: "Ми можемо зустрітися о
                          третій"?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна спитала: "Давай зустрінемось о
                          третій?".
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: The quote is a question, so put a
                          question mark inside the quotes. Do not put a period
                          after the quote.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ганна вигукнула: "Нарешті!"
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна вигукнула: "Нарешті"!
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ганна вигукнула: "Нарешті!".
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: The quote is an exclamation, so put an
                          exclamation point inside the quotes. Do not put a
                          period after the quote.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Do not use quotation marks for indirect quotes. Instead, use a
                  comma between the clauses. Use sentence structure and
                  intonation to determine whether a quote is direct or indirect.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Діти сказали, що вони голодні.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Intonation implies indirect quote.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Батько спитав, чи хочу я поїхати з ним до
                          Києва.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Intonation and sentence structure imply
                          indirect quote.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Батько спитав: "Хочеш поїхати зі мною до
                          Києва?"
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Intonation and sentence structure imply
                          direct quote.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Відправити повідомлення Іванові: Я запізнюсь.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: The quote follows the command, so use a
                          colon and omit quotation marks.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Оновити Google+: Я працюю вдома.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Надіслати повідомлення на 063 933 55 67:
                          Привіт!
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            надіслати повідомлення на нуль шість три дев'ять три
                            три п'ять п'ять шість сім привіт{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Як сказати "Я тебе кохаю" французькою?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Як сказати: "я тебе кохаю" французькою?
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Omit colon after verb "сказати" in
                          translation requests.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Додай нагадування на завтра о 15:30: зустріч
                          з Олесею.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Напиши смс татові: Буду о восьмій.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Напиши смс татові, що буду вдома о восьмій.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Переклади "привіт" французькою.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Do not capitalize "привіт" even though it
                          can stand alone as a sentence in other contexts.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Переклади німецькою: дякую.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: що таке білатеральність
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: що таке "білатеральність"
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він три рази повторив слово мама.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Він три рази повторив слово "мама".
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Білатеральність важко вимовити по буквах
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: "Білатеральність" важко вимовити по буквах.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Казак читається однаково в обох напрямках.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: "Казак" читається однаково в обох
                          напрямках.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="other-symbols">
                <h2 id="calibre_link-23" className={styles.block_}>
                  Other symbols
                </h2>
                <p className={styles.block_25}></p>
                <p className={styles.block_30}>
                  Apart from the Ukrainian letters and the Latin letters a
                  through z, you should not use any other symbol than: 0-9
                  äàéèëñóöÄÀÁÉÈËÑÓÖ²³,?!~^\'"_°:.()&lt;&gt;{}
                  []√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Це будинок Мар'яни.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: В'ячеслав живе із матір'ю.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: На подвір'ї росте бур'ян.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ти йдеш на матч Динамо-Шахтар?
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: рейс Київ-Харків
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: рейс Київ - Харків
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: рейс Київ Харків
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a hyphen in phrases and compounds typically written with a
                  hyphen. If in doubt, use a hyphen. Check your locale's
                  dictionary for hyphenation.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він живе бозна-де.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Зустрінемось віч-на-віч.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Кам'янець-Подільський
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a hyphen with spaces around it between nouns that together
                  describe a concept or a relationship.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: відносини професор - студент
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: проблема людина - суспільство - природа
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a hyphen with spaces around it if the subject and the
                  predicate are expressed by the same lexico-grammatical
                  categories.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Київ - столиця України.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Жити - не байдики бити.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a hyphen with spaces around it when some words are elided
                  (absent but implied) in the middle of a sentence (not at the
                  beginning or end of a clause). This can happen when the same
                  words are present in a different part of the sentence or when
                  the omitted words are obvious and can be inferred from
                  context.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я граю на фортепіано, а він - на скрипці.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Мені - котлету, а Олені - борщу!
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a hyphen with spaces around it when a word or phrase is
                  followed by a predicate which functions like a definition.
                  Such definitions are often preceded by the words "це", "оце",
                  "ось", "то", "значить".
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Очі - то зеркало душі.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ранок - це найкраща пора дня.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Токіо - ось де я хочу жити!
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Жити без праці - значить не жити.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Вона - медсестра чи лікар?
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Use a hyphen with spaces around it in implied conditionals of
                  the following form, without a word like "якщо".
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Кохаєш її - одружуйся.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: This is an implied conditional. The full
                          meaning is "Якщо кохаєш її, то одружуйся".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Хочеш чогось досягти - працюй наполегливіше.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: This is an implied conditional. The full
                          meaning is "Якщо хочеш чогось досягти, то працюй
                          наполегливіше".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="spoken-punctuation">
                <h2 id="calibre_link-24" className={styles.block_}>
                  Spoken punctuation
                </h2>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Як справи {`{знак питання}`}
                        </p>
                        <p className={styles.block_16}>Incorrect: Як справи?</p>
                        <p className={styles.block_16}>
                          Incorrect: Як справи {`{знак питання}`}?
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            як справи знак питання{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Добре {`{крапка} {крапка} {крапка}`}
                        </p>
                        <p className={styles.block_16}>Incorrect: Добре...</p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            добре крапка крапка крапка{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Привіт Андрію {'{кома}'} побачимося завтра{' '}
                          {`  {крапка}`}
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Привіт Андрію, побачимося завтра.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            привіт андрію кома побачимося завтра крапка{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: {`{Усміхнений смайлик}`}
                        </p>
                        <p className={styles.block_16}>Incorrect: :-)</p>
                        <p className={styles.block_16}>
                          Incorrect: усміхнений смайлик
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            усміхнений смайлик{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_5}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я мешкаю на вулиці Старокиївській 8/12.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Я мешкаю на вулиці Старокиївській 8 дріб
                          12.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Я мешкаю на вулиці Старокиївській вісім
                          дріб дванадцять.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: www.fake-domain.com
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: www{` {крапка}`} fake {`{дефіс}`} domain{' '}
                          {`{крапка}`} com
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            дабл'ю дабл'ю дабл'ю крапка фейк дефіс домен крапка
                            ком{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Він знає 3-4 мови.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Він знає 3{` {дефіс}`} 4 мови.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Він знає три {`{дефіс}`} чотири мови.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            він знає три чотири мови{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: {`{тире}`}
                        </p>
                        <p className={styles.block_16}>Incorrect: -</p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: {`{знак оклику}`}
                        </p>
                        <p className={styles.block_16}>Incorrect: !</p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_5}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я виїжджаю {`{крапка}`} Що на вечерю{' '}
                          {`{знак питання}`}
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Я виїжджаю. Що на вечерю?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Я виїжджаю {`{крапка}`} що на вечерю{' '}
                          {`{знак питання}`}
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            я виїжджаю крапка що на вечерю знак питання{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
