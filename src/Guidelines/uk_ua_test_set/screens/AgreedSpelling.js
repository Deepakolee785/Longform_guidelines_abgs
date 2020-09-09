import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
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
              <h1 id="calibre_link-32" className={styles.block_23}>
                Agreed spelling
              </h1>
              <p className={styles.block_24}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <h2 className={'heading'}>Spelling out</h2>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <table className={`${styles.table_}`}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className="blue-text">Correct: Кучма к у ч м а</p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Person said "Кучма" and then spelled it.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: а б в г ґ д е є ж з и і ї й к л м н о п р с т
                          у ф х ц ч ш щ ь ю я
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            а бе ве ге ґе де е йе же зе и і йі йот ка ел ем ен о
                            пе ер ес те у еф ха це че ша шча м'який знак йу йа{' '}
                          </i>
                          "
                        </p>
                        <p className={styles.block_16}>
                          Explanation: spelled out alphabet
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: ВНЗ
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> ве ен зе </i>"
                        </p>
                        <p className={styles.block_16}>
                          Explanation: common acronym
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: СБУшник
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> ес бе у шник </i>"
                        </p>
                        <p className={styles.block_16}>
                          Explanation: acronym with suffix "шник"
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: всі слова на букву К
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            всі слова на букву ка{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: В тебе є план Б?
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> в тебе є план бе </i>"
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="interjection">
                <h2 id="calibre_link-34" className={styles.block_}>
                  Interjections
                </h2>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: гей, ха, хаха, хахаха
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: хахаха
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: хахахахахахаха
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            ха ха ха ха ха ха ха{' '}
                          </i>
                          "
                        </p>
                        <p className={styles.block_16}>
                          Explanation: Do not transcribe more than three
                          syllables.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  List of Ukrainian common interjections.
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_27}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>о</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>а</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ану</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>гей</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ой</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>агов</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>на</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ех</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>овва</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>от тобі і на</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>геть</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>киць-киць</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>тпру</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>цок-цок</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>жах</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>боже</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>леле</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>отакої</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>фу</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>гайда</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>пхе</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>цить</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>алло</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ну</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>нумо</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ціп-ціп</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>йой</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>годі</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ого</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>гм</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>хм</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>диви</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>цур тобі</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>вау</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ку-ку</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>тю</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ба</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>так</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>окей</span>
                  </div>
                  <div className={styles.block_29}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ок</span>
                  </div>
                </div>
              </div>

              <h2 id="calibre_link-35" className={styles.block_}>
                Proper names
              </h2>
              <p className={styles.block_25}></p>
              <p className={'text'}>
                Use official spelling, capitalization, and punctuation for
                proper names. Google them and pay attention to the correct
                format. Official format and spelling of a proper name may
                supersede the usual written transcription conventions detailed
                in this document.
              </p>
              <p className={styles.block_25}></p>
              <p className={styles.block_24}>
                Defer to official spellings of celebrity names.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: пісні Beatles
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_16}>
                        Explanation: Unless there is an official name in
                        Cyrillics, base your spelling on top hits from Google.
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_2}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: новий альбом Брітні Спірс
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_16}>
                        Explanation: Foreign personal name, use Cyrillics to
                        transcribe it.
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: композиція Ріанни Diamonds
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_16}>
                        Explanation: Foreign personal name, use Cyrillics; for
                        band names use original spelling.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_25}></p>
              <p className={'text'}>
                If proper names include diacritics uncommon in your language (é,
                ü, ç, etc), include them in your spelling. If unsure, refer to
                news articles, official city or celebrity websites, IMDb,
                Wikipedia, Google Maps, or knowledge cards (the answer box above
                the list of Google Search results) in that order. When no other
                source can be used to decide between spellings, choose the
                spelling used in the first hit(s) on Google.
              </p>
              <p className={styles.block_25}></p>
              <p className={'text'}>
                If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_7}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: Йоганн Вольфганг фон Гете
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Йоганн Вольфґанґ фон Ґете
                      </p>
                    </td>
                    <td className={styles.td_8}>
                      <p className={'text'}>
                        Explanation: Searching "Вольфганг Гете" yields more
                        results than "Вольфґанґ Ґете", so use the more common
                        spelling. Both variants are orthographically acceptable.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_25}></p>
              <p className={'text'}>
                If a speaker makes a small mistake in a proper name, capitalize
                it anyway as long as the difference is minimal. "Minimal
                difference" refers to adding or dropping articles, possessives,
                and plurals.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: Володарі перснів
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_16}>
                        Explanation: Actual name is "Володар перснів".
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_4}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: грати в Майкрафт
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_16}>
                        Explanation: Actual name is "Майнкрафт".
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_25}></p>
              <p className={'text'}>
                Spell and capitalize holidays as they are formatted within the
                answer box above the list of Google Search results. If no box
                appears, defer to Wikipedia's formatting, and if there is no
                Wikipedia article, use the most common format according to
                Google Search results.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: З Новим Роком і Різдвом Христовим!
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_4}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: Майже всі в Україні святкують Великдень.
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_25}></p>
              <p className={'text'}>
                Capitalize words used as titles and names when they are used
                that way.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: Голова Верховної Ради України Володимир
                        Гройсман
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_16}>
                        Explanation: "Голова Верховної Ради" is a title.
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_4}>
                      <p className={`${styles.block_15} blue-text`}>
                        Correct: письменник Квітка-Основ'яненко
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_16}>
                        Explanation: "письменник" is not a title.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div id="brand-and-product">
                <h2 id="calibre_link-36" className={'heading'}>
                  Brand and product
                </h2>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Я чув, що Yahoo та T-Mobile нещодавно
                          погодились.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            я чув що яху та ті мобайл нещодавно погодились{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Toys "R" Us
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> тойз ар ас </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Google
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> гугл </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Burger King
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: BURGER KING
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Do not spell "Burger King" all in
                          uppercase as in the stylized form of the logo, stick
                          to the official form as per the privacy policy.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: LEGO
                        </p>
                        <p className={styles.block_16}>Incorrect: Lego</p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Мобільні ТелеСистеми
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: officially camel case
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Кока-Кола
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Official name in Cyrillics is available
                          and widely used.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: ROSHEN
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: ЮГОК
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases. Outside of this phrase, use the spelling "окей",
                  and do not capitalize this word unless it begins a sentence.
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
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> окей гугл </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ok Google Now
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> окей гугл нау </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ok Google, гарбуз
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> окей гугл гарбуз </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ok Google, де Хрещатик?
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            окей гугл де хрещатик{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Oкей, Оксано.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Oкей, пішли в кав'ярню.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  In addition to the flexibility detailed in Agreed Spelling
                  &gt; Proper Names, slight differences in word order are also
                  acceptable. This applies only to order &mdash; if words not
                  found in the correct name are added to the attempted name, do
                  not capitalize these extra words.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Баттерфляй Ультрамарин.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: official name
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ультрамарин Баттерфляй.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: slight reordering
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ми йдемо в Ультрамарин дивитись новий фільм.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: omitted non-essential part of business
                          name
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: кінотеатр Ультрамарин
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: "Ультрамарин" is essential part of title;
                          "кінотеатр" describes the nature of the business.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  List of common brands and products.
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_27}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Нафтогаз</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Укрзалізниця</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Укрнафта</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Укртатнафта</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Енергоатом</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Епіцентр</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Донецьксталь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Запоріжсталь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>АТБ-Маркет</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Київстар</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Рошен</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Укртелеком</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Лукойл</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>АероСвіт</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Фуршет</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Оболонь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Славутич</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>МАУ</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Харківобленерго</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Київміськбуд</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Технополіс</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Макдональдз</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ТНТ</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Центрегерго</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Мотор Січ</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Конті</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Хортиця</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Рогань</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Чернігівське</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Славутич</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Львівське</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Балтика</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Житомирське</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>АВЕК</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Фоззі</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Самсунг</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Філіп Моріс</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Нестле</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Сандора</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Азовзагальмаш</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Велика Кишеня</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Сільпо</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Укрпошта</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Nemiroff</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Миргородська</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Світоч</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Чумак</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>Ласуня</span>
                  </div>
                  <div className={styles.block_29}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>АВК</span>
                  </div>
                </div>
              </div>
              <div id="media-title">
                <h2 id="calibre_link-37" className={styles.block_}>
                  Media title
                </h2>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Capitalize only the first word in media titles in Ukrainian.
                  If there is a proper noun in the title, capitalize it as well.
                  Capitalize foreign media titles in accordance with the
                  capitalization conventions of the media title's original
                  language. For English media titles, capitalize every word
                  except articles, conjunctions, and prepositions unless they
                  are the first word.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: дивитись серіал Картковий будинок
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Дивитись серіал Картковий Будинок.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: дивитись фільм Містер Бін на відпочинку
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: "Бін" is a proper noun, so capitalize it
                          as well.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: слухати пісню Rolling in the Deep
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={'text'}>
                          Explanation: In English titles, all the words are
                          capitalized except articles, conjunctions and
                          prepositions.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  Do not use quotation marks for media titles.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: дивитись фільм Весільний майстер
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: грати пісню Це зі мною Бумбокс
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Третій зайвий 2
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> третій зайвий два </i>
                          "
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Transcribe all media titles with original punctuation. In
                  cases where original punctuation falls at the end of a
                  sentence, do not transcribe sentence-level punctuation. That
                  is, media title punctuation trumps sentence level punctuation
                  when in conflict. If a popular media title consists of an
                  entire sentence but the official spelling is without
                  punctuation, then don't punctuate the title. If an utterance
                  is ambiguous between a media title and a sentence or web
                  search, use your judgment for which is more likely and treat
                  it accordingly.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: В якому році вийшов Володар перснів: Дві
                          вежі?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: В якому році вийшов Володар перснів. Дві
                          вежі.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: дивитись фільм Чувак, де моя машина?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: дивитись фільм Чувак де моя машина.
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_3}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: знайти фільм Іронія долі, або З легкою парою!
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: знайти фільм Іронія долі або з легкою парою
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Трансформери 2
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Official title is "Трансформери 2: Помста
                          померлих".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Іронія долі
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Official title is "Іронія долі, або З
                          легкою парою!"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: текст пісні Океану Ельзи Дівчина
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_16}>
                          Explanation: Official title is "Дівчина (з іншого
                          життя)".
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: слухати Джамала Верше
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Official title is "Верше мій, верше".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: YouTube Я не здамся без бою.
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: YouTube Я не здамся Без бою.
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_16}>
                          Explanation: They are quoting lyrics that just happen
                          to contain the title "Без бою"; format as full
                          sentence.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="multiple-spelling">
                <h2 id="calibre_link-38" className={styles.block_}>
                  Multiple spellings
                </h2>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the 2008 online dictionary by the Ukrainian Academy of
                  Sciences on http://lcorp.ulif.org.ua/dictua/, and search for
                  the word in the multi-dictionary search bar. If there is no
                  entry, Google the word and use the form with the most hits.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Сьєрра-Леоне
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Сієрра-Леоне
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Сьєрра-Лєонє
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_16}>
                          Explanation: The reference dictionary states
                          "Сьєрра-Леоне".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Час швидко мине.
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: мене
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Псевдотсуга Мензіса
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: E. coli
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Метронідазол
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ти підеш на фізру?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Ти підеш на фізкультуру?
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Вік, іди-но сюди!
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Віко, іди-но сюди!
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_17}></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={'text'}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech, like "що", "скільки" for "шо", "скіки".
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Що трапилось?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Шо трапилось?
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> шо трапилось </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Скільки коштує хліб?
                        </p>
                        <p className={styles.block_16}>
                          Incorrect: Скіки коштує хліб?
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> скіки коштує хліб </i>
                          "
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Лос-Анджелес
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> лас енджилес </i>"
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_2}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Здрастуйте!
                        </p>
                      </td>
                      <td className={styles.td_3}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> здґастуйте </i>"
                        </p>
                        <p className={styles.block_16}>
                          Explanation: Speaker has trouble pronouncing "р"
                          sound.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Візьми мене з собою.
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}>
                            {' '}
                            вісьми мине с сабою{' '}
                          </i>
                          "
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_}>
                      <td className={styles.td_}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: інтерпрувати
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_16}>
                          Explanation: Speaker meant "інтерпретувати" but
                          skipped a syllable.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tr_}>
                      <td className={styles.td_4}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: відповідувати
                        </p>
                      </td>
                      <td className={styles.td_5}>
                        <p className={styles.block_16}>
                          Explanation: Speaker meant "відповідати" but added an
                          extra syllable.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={styles.block_24}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_2}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: Ашрафія
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_16}>
                          Explanation: User says "ашрафія". Transcriber searches
                          "ашрафія", finds correct results. Transcribe
                          "Ашрафія".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.block_25}></p>
                <p className={'text'}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre5}>
                    <tr className={styles.tr_1}>
                      <td className={styles.td_7}>
                        <p className={`${styles.block_15} blue-text`}>
                          Correct: вабріація
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_26}>
                          Example audio: "
                          <i className={styles.calibre6}> вабріація </i>"
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className={'text'}>
                  List of common onomatopoeias. When an onomatopoeia is repeated
                  two or more times, it should be concatenated and connected
                  with a hyphen (e.g. "ха-ха-ха", "няв-няв", "чік-чірік").
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_27}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>плюх</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>грюк</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>гуп</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>шубовсь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>кукуріку</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>няв</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>гав</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ай</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ам</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>геп</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>пугу-пугу</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бринь-бринь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>цок-цок</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>шур-шур</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>тук-тук</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бум</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>скрип-скрип</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>дзинь</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бах</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бабах</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>брр</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>га</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ха-ха</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ха</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ж-ж-ж</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>і-го-го</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>кап-кап</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>кря-кря</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>кар-кар</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>мур</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>піф-паф</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>плюх</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>тсс</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>р-р-р</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>тьху</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>тяв</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>хі-хі</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>хрю</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>цап</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>циц</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>чух</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>шмиг</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ш-ш</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>топ</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>туп-туп</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>бух</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ляп</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ку-ку</span>
                  </div>
                  <div className={styles.block_28}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>ля-ля</span>
                  </div>
                  <div className={styles.block_29}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={styles.calibre2}>жу-жу</span>
                  </div>
                </div>
                <p className={'text'}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
