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
            <PageContentHeader currentPage="longform Urdu" />
            <div className="content text">
              <p className={styles.block_278}>Punctuation</p>
              <p className={styles.block_279}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <p className={styles.block_280}>Fragments versus sentences</p>
              <p className={styles.block_281}>
                Add punctuation where needed, but err on the side of keeping it
                minimal.
              </p>
              <p className={styles.block_282}>
                In general, a complete sentence contains a subject and a verb.
              </p>
              <p className={styles.block_283}>
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a specific question, or
                if it's an example where dropping the subject sounds completely
                natural as a complete sentence.
              </p>
              <p className={styles.block_284}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ں ؟ ​ ر​ ​ ت ​ ​ ےر
                </span>
                <span className={styles.text_9}> ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: "۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  با ​ ​ لا "۔ ​ ​ ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_285}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ود ا ؟ ​ ​ پآ
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: "۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  با ​ ​ لا ​ ​ " ۔ ​ ود ا
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_286}>
                <span className={styles.text_}>Correct: ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ں
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_287}>
                <span className={styles.text_9}>Correct: ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  او​ س ​ خ
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ، ​ ​ ​ ​ ​ ق ​ و​ ق
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_288}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ر
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_289}>
                <span className={styles.text_}>Correct: ؟ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر​ آ​ ​ ر
                </span>
                <span className={styles.text_}> ​ </span>
              </p>
              <p className={styles.block_290}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ل ا
                </span>
                <span className={styles.text_9}>​ </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ۔ ​ ​ ​ ​ د و ​ ​ ​ ​ ​ روا
                </span>
                <span className={styles.text_10}>​ </span>
              </p>
              <p className={styles.block_291}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ف وا​ ز ر​ روا​ ​ ​ ر ​ ​ ​ ​ ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_292}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ا​ ​ ​ ں
                </span>
                <span className={styles.text_}> ِ ​ ​ </span>
              </p>
              <p className={styles.block_293}>
                <span className={styles.text_9}>Correct: ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ںو
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا​ ​ ​ ​ ر​ ​ ش ​ او​ ​ ​ ​ و
                </span>
                <span className={styles.text_10}>​ </span>
              </p>
              <p className={styles.block_294}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ف وا​ ز ر​ روا​ ​ ​ ر ​ ​ و ​ ​ ا
                </span>
                <span className={styles.text_5}> ۔ ​ ​ ​ ​ </span>
              </p>
              <p className={styles.block_295}>
                Interjections, greetings, and farewells said in isolation should
                be considered complete sentences and punctuated as such.
              </p>
              <p className={styles.block_296}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  فُا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
              </p>
              <p className={styles.block_297}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  ہوا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
              </p>
              <p className={styles.block_298}>
                <span className={styles.text_9}>Correct: ۔ </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ت
                </span>
                <span className={styles.text_10}> ​ </span>
              </p>
              <p className={styles.block_299}>
                <span className={styles.text_9}>Correct: ۔ </span>
                <span dir="rtl" className={styles.text_9}>
                  آ​ ش
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ت
                </span>
                <span className={styles.text_10}> ​ </span>
              </p>
              <p className={styles.block_298}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  م ا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ت
                </span>
                <span className={styles.text_10}> ​ </span>
              </p>
              <p className={styles.block_300}>
                <span className={styles.text_9}>Correct: ۔ </span>
                <span dir="rtl" className={styles.text_9}>
                  ود​ ے ​ آ​ ش
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ل ا​ ​ ر ​ ​ ​ ​ ​ ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_300}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ل ا​ ​ ر ​ ​ ​ ​ ​ ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_300}>
                <span className={styles.text_9}>Correct: ۔ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا ​ ے ​ ہوا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ل ا​ ​ ر ​ ​ ​ ​ ​ ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_301}>
                Add end punctuation to sentence fragments that sound like the
                end of a sentence. For fragments that do not clearly sound like
                the beginning or end of a sentence, leave out punctuation. Note
                that sentence fragments may be a result of cut-off audio
                samples.
              </p>
              <p className={styles.block_302}>
                <span className={styles.text_9}>Correct: </span>
                <span dir="rtl" className={styles.text_9}>
                  ا​ ​ ​ ​ ؟ ​ ل ​ ​ ار
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ن رد
                </span>
                <span className={styles.text_10}>​ </span>
              </p>
              <p className={styles.block_303}>
                <span className={styles.text_9}>Correct: ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا
                </span>
                <span className={styles.text_9}> ؟ ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ن رد​ ​ ا ا
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_303}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  د​ ​ راز ​ ​ ​ ۔تر
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ن رد​ ​ ا ا
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_304}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  سا ۔ ​ روز
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ن رد​ ​ ی آ
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_305}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ ، ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ے
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  عو ​ ڈآ
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_306}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ ​ ، ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  او
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  عو ​ ڈآ
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_307}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ آ​ ​ ​ ؟ ​ ں ​ ۔ں ​ ​ ​ راز
                </span>
                <span className={styles.text_9}> ​ </span>
                <span className={styles.text_10}>Explanation: ، ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ل ا ’۔۔۔۔‘ روا
                </span>
                <span className={styles.text_10}> ’-‘ ، ​ ​ ​ ​ </span>
              </p>
              <p className={styles.block_308}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ں ​ ​ ​ روا​ ا​ ​ ا
                </span>
                <span className={styles.text_5}>​ </span>
              </p>
              <p className={styles.block_307}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا​ ا​ ​ ںو رڈرآ​ ۔ں ​ ر​ ​ پ
                </span>
                <span className={styles.text_9}> ​ </span>
                <span className={styles.text_10}>Explanation: ، ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ل ا ’۔۔۔۔‘ روا
                </span>
                <span className={styles.text_10}> ’-‘ ، ​ ​ ​ ​ </span>
              </p>
              <p className={styles.block_308}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ں ​ ​ ​ روا​ ا​ ​ ا
                </span>
                <span className={styles.text_5}>​ </span>
              </p>
              <p className={styles.block_309}>
                <span className={styles.text_9}>Correct: ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ں
                </span>
                <span className={styles.text_9}> ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ر​ ​ ز آ​ ​ ​ ں ود
                </span>
                <span className={styles.text_10}>​ </span>
              </p>
              <p className={styles.block_310}>
                <span className={styles.text_9}>Correct: ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا ​ ​ ا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ر​ ​ ز آ​ ​ ​ ں ود
                </span>
                <span className={styles.text_10}>​ </span>
              </p>
              <p className={styles.block_311}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ ​ ں
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا د​ ز آ
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_311}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ ​ ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا د​ ز آ
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_312}>
                <span className={styles.text_9}>Correct: ​ ​ ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ​ م ا​ روا​ ز آ ، ​ ر​ ​ ​ ​ ن رد
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_313}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_312}>
                <span className={styles.text_9}>Correct: ​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ر
                </span>
                <span className={styles.text_9}>​ </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ​ م ا​ روا​ ز آ ، ​ ر​ ​ ​ ​ ن رد
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_313}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_314}>
                A voice action is a query where the user requests a specific
                action that a smartphone can complete. The action requested is
                generally expressed by a trigger (in Urdu most often a noun, or
                the object of the action to be performed, but it can also be any
                other part of speech denoting a change of state of the device or
                of an app). If a voice action sounds complete, it should be
                capitalized and punctuated as a full sentence. In contrast to a
                voice action, a web search is a query where the user does not
                request a specific action that a smartphone can complete. Web
                searches are more often, but not always, spoken as true
                fragments.
              </p>
              <p className={styles.block_315}>
                <span className={styles.text_}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ؤ ​ ڈ
                </span>
                <span className={styles.text_}> ​ </span>
              </p>
              <p className={styles.block_316}>
                <span className={styles.text_}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ؤ د​ ​ ​ ل ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_317}>
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not punctuate it as a sentence.
              </p>
              <p className={styles.block_318}>Commas</p>
              <p className={styles.block_319}>
                Only use commas where required. Err on the side of minimal
                punctuation. Do not rely on intonation.
              </p>
              <p className={styles.block_320}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ں
                </span>
                <span className={styles.text_9}> ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ل ا​ ​ ، ​ ر​ ​ و​ ​ ر
                </span>
                <span className={styles.text_10}> ​ </span>
              </p>
              <p className={styles.block_321}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ید​ وا​ ​ ​ ​ یرو ​ ل ا​ ​ ​ ​ ں ​ ​ ​ ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_322}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ا​ ​ ل
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_323}>
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However: If there is a long pause
                between a discourse word, interjection, or yes/no word and a
                full sentence that follows it, treat that initial word as a
                separate sentence.
              </p>
              <p className={styles.block_324}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  س ​ ےر ​ ​ ، ا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  روا ،" رد" ،" ​ ا" ،" " ،" " ۔ف ​ سر ڈ
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_325}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ فو ​ سر ڈ​ ​ ودرا
                </span>
                <span className={styles.text_5}>​" " </span>
              </p>
              <p className={styles.block_326}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  و​ سُا
                </span>
                <span className={styles.text_9}>​ ، </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  روا ،" رد" ،" ​ ا" ،" " ،" " ۔ف ​ سر ڈ
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_327}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ فو ​ سر ڈ​ ​ ودرا
                </span>
                <span className={styles.text_5}>​" " </span>
              </p>
              <p className={styles.block_312}>
                <span className={styles.text_9}>Correct: ۔ </span>
                <span dir="rtl" className={styles.text_9}>
                  آ​ ہ
                </span>
                <span className={styles.text_9}> ​ ، </span>
                <span className={styles.text_10}>Explanation: ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ودرا​" س ا" ،" " ،"ہاو
                </span>
                <span className={styles.text_10}>" ۔ </span>
              </p>
              <p className={styles.block_328}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_312}>
                <span className={styles.text_9}>Correct: ۔ ،</span>
                <span dir="rtl" className={styles.text_9}>
                  تر
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ودرا​" س ا" ،" " ،"ہاو
                </span>
                <span className={styles.text_10}>" ۔ </span>
              </p>
              <p className={styles.block_328}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_329}>
                <span className={styles.text_9}>Correct: ۔ ،</span>
                <span dir="rtl" className={styles.text_9}>
                  یر
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ودرا​" س ا" ،" " ،"ہاو
                </span>
                <span className={styles.text_10}>" ۔ </span>
              </p>
              <p className={styles.block_328}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_330}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ ​ ،ں
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ف ​ / ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_330}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا ​ ​ ہو
                </span>
                <span className={styles.text_9}> ، </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ف ​ / ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_331}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ ​ ​ ،رو
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  ف ​ / ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_332}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ ​ ​ ۔رو
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: " ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ل ا​ ​ ا​ ​ و​ ​ ​ ​" رو
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_328}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_333}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا​ او​ ہو ۔ ا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: " ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ل ا​ ​ ا​ ​ و​ ​ ​ ​" ا
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_328}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_334}>
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".
              </p>
              <p className={styles.block_335}>Correct: Ok Google</p>
              <p className={styles.block_336}>
                <span className={styles.text_}>Correct: Ok Google، </span>
                <span dir="rtl" className={styles.text_}>
                  و ​ ​ ں رد​ ​ ن ز
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_337}>
                <span className={styles.text_}>Correct: Ok Google، ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ؤ د​ ت ​ ​ ار​ ​ ڈ
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_338}>
                <span className={styles.text_}>Correct: Ok Google، ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ےڈ​ ر ​ ل ​ سا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_339}>Intonation marks</p>
              <p className={styles.block_340}>
                Punctuate the following as questions: 1) All queries
                syntactically built as questions, regardless of intonation. 2)
                All queries which sound like they are being used as questions,
                regardless of sentence structure.
              </p>
              <p className={styles.block_341}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ے
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ، ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ​ ​ ​ ​ ​ ​ ؤ
                </span>
                <span className={styles.text_10}> ​ ​ </span>
              </p>
              <p className={styles.block_342}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ ​ ​ ، ​ ل ا​ م ا​ ف ​ ں ​ ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_343}>
                <span className={styles.text_9}>Correct: </span>
                <span dir="rtl" className={styles.text_9}>
                  تار
                </span>
                <span className={styles.text_9}> ؟ ​ </span>
                <span className={styles.text_10}>Explanation: ، ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ​ ​ ​ ​ ​ ​ ​ ؤ
                </span>
                <span className={styles.text_10}> ​ ​ </span>
              </p>
              <p className={styles.block_342}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ ​ ​ ، ​ ل ا​ م ا​ ف ​ ں ​ ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_290}>
                <span className={styles.text_9}>Correct: ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ر
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  چ ​ و​ ​ ​ لا ​ ​ ​ ​ ؤ
                </span>
                <span className={styles.text_10}> ​ ​ </span>
              </p>
              <p className={styles.block_290}>
                <span className={styles.text_9}>Correct: </span>
                <span dir="rtl" className={styles.text_9}>
                  و
                </span>
                <span className={styles.text_9}>​ ​ </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  چ ​ و​ ​ ​ لا ​ ​ ​ ​ ؤ
                </span>
                <span className={styles.text_10}> ​ ​ </span>
              </p>
              <p className={styles.block_344}>
                If a speaker uses clearly exclamatory intonation, use an
                exclamation point. If there is any doubt, err on the side of
                using period.
              </p>
              <p className={styles.block_345}>
                <span className={styles.text_9}>Correct: !</span>
                <span dir="rtl" className={styles.text_9}>
                  ں
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ر​ ​ ش ​ ر
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_346}>
                <span className={styles.text_9}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_9}>
                  ں
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ر​ ​ ​ ش ​ ر
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_347}>Colon and quotation</p>
              <p className={styles.block_348}>
                Do not use a comma between reported speech verbs and direct
                quotations, but do use quotation marks for reported speech.
              </p>
              <p className={styles.block_349}>
                <span className={styles.text_}>Correct: "۔ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ے " ​ ​ ز
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_350}>
                <span className={styles.text_}>Incorrect: ۔ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ے " ، ​ ​ ز
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_351}>
                <span className={styles.text_}>Explanation: ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  واو​ ہو​ ​ ​ ف ​ ​ ف ​ ظ ا​ ​ ر ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_352}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ​ ل ا​ ​ ​ ​ آ
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_353}>
                If the text in quotation marks qualifies as a sentence,
                punctuate as if it were its own utterance. Do not alter its end
                punctuation even if the quote is within a sentence. Do not add
                excess punctuation after end quotation marks.
              </p>
              <p className={styles.block_354}>Correct: ۔ ​ ​ ​ ​ " ، ​ ​ "</p>
              <p className={styles.block_355}>Incorrect: ۔"۔ ​ ​ " ، ​ ​</p>
              <p className={styles.block_356}>
                <span className={styles.text_}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ف واز ر​ ا ۔ ​ ​ ظ ا​ ن رد​ ​ واو
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_357}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​(-) ، ​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  واو​ ​ ل ​ ​ ید​ وا​ ​ ۔ ​ ​ ل ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_358}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ل ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_359}>
                <span className={styles.text_}>Correct: ، ​ "؟ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر
                </span>
                <span className={styles.text_}>​ ​ ​ ​ ​ " </span>
              </p>
              <p className={styles.block_360}>
                <span className={styles.text_}>Incorrect: ۔"؟ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر
                </span>
                <span className={styles.text_}>​ ​ ​ ، ​ " </span>
              </p>
              <p className={styles.block_361}>
                <span className={styles.text_}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ف وا​ ز ر​ ا ۔ ​ ​ ظ ا​ ن رد​ ​ واو
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_362}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ل ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_363}>
                <span className={styles.text_}>Correct: "۔ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ں و​ ، ​ ​ ہر
                </span>
                <span className={styles.text_}> " </span>
              </p>
              <p className={styles.block_364}>
                <span className={styles.text_}>Incorrect: ؟"۔ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ں و​ ، ​ ​ ہر
                </span>
                <span className={styles.text_}> " </span>
              </p>
              <p className={styles.block_361}>
                <span className={styles.text_}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ف وا​ ز ر​ ا ۔ ​ ​ ظ ا​ ن رد​ ​ واو
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_362}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ​ ل ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_365}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ر ​ ا "۔ں ​ ​ ہ و​ ۔ ​ ں ​ ں و​ ، ​ ​ ش
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_366}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_11}>
                  ۔ ​ د
                </span>
                <span className={styles.text_11}>​ " </span>
              </p>
              <p className={styles.block_367}>
                <span className={styles.text_}>Explanation: </span>
                <span dir="rtl" className={styles.text_}>
                  ز ر​ ​ آ​ ا ۔ ​ ​ ظ ا​ ن رد​ ​ واو
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_368}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ن رد​ ​ ​ واو​ ، ​ ​ ​ ف وا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_369}>
                Use a colon but no quotation marks in quotative voice actions
                when the quote follows the command. Use quotation marks when the
                quote is in the middle of the sentence.
              </p>
              <p className={styles.block_370}>
                <span className={styles.text_9}>Correct: ؟ ​ ​: </span>
                <span dir="rtl" className={styles.text_9}>
                  و ​ ​ ​ ا
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  روا​ ​ ل ا​(:) ار​ ا ، ​ ​ ​ ​ ل
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_371}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ د​ ڑ ​("") واو
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_372}>
                <span className={styles.text_9}>Correct: </span>
                <span dir="rtl" className={styles.text_9}>
                  ار " ۔و ​ ​ ​ ا ​ ؟ ​ ​ م
                </span>
                <span className={styles.text_9}> " </span>
                <span className={styles.text_10}>Explanation: ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ل ا​ واو​ ا ، ​ ​ ن رد​ ​ ​ ل
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_373}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ د​ ڑ ​ ار​ روا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_374}>
                <span className={styles.text_}>Correct: ؟ ​ ​ "۔</span>
                <span dir="rtl" className={styles.text_}>
                  ں ​ ​ ر ​ ​ ​ " ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_375}>
                <span className={styles.text_}>Incorrect: </span>
                <span dir="rtl" className={styles.text_}>
                  پآ ؟ ​ "۔ں ​ ​ ر ​ ​ ​ ، ​ ا
                </span>
                <span className={styles.text_}> " </span>
              </p>
              <p className={styles.block_376}>
                <span className={styles.text_}>Explanation: ۔ </span>
                <span dir="rtl" className={styles.text_}>
                  د​ ڑ ​ ار​ ​ ​ ل ا​ واو
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_377}>
                <span className={styles.text_}>Correct: ؟ </span>
                <span dir="rtl" className={styles.text_}>
                  ر​ ​ ند​ ار ، ​: ​ ​ ​ ​ یا
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_378}>example@gmail.com</p>
              <p className={styles.block_379}>Other symbols</p>
              <p className={styles.block_380}>
                <span className={styles.text_12}>
                  Apart from the English letters a through z and Urdu letters{' '}
                </span>
                <span dir="rtl" className={styles.text_12}>
                  ا
                </span>
                <span className={styles.text_12}> through </span>
                <span dir="rtl" className={styles.text_12}>
                  ے
                </span>
                <span className={styles.text_12}>
                  , you should not use any other symbol than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ
                </span>
                <span className={styles.text_13}>
                  23,?!؛؟،۔ ~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
                </span>
              </p>
              <p className={styles.block_381}>Spoken punctuation</p>
              <p className={styles.block_382}>
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.)
              </p>
              <p className={styles.block_383}>
                <span className={styles.text_}>Correct: {`{`} </span>
                <span dir="rtl" className={styles.text_}>
                  {'وا{ ٹاڈ} { ٹاڈ} { ٹا`}ڈ'}{' '}
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_384}>
                <span className={styles.text_}>Incorrect: ۔۔۔ </span>
                <span dir="rtl" className={styles.text_}>
                  وا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_385}>
                <span className={styles.text_6}>Example audio: " </span>
                <span dir="rtl" className={styles.text_6}>
                  وا
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ٹاڈ
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ٹاڈ
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ٹاڈ
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_386}>
                <span className={styles.text_}>
                  Correct: {`{ ​{ } ​ ​ ​{`}{' '}
                </span>
                <span dir="rtl" className={styles.text_}>
                  {'  {ن ​ ا ​} }ں '}
                </span>
                <span className={styles.text_}> ​ ​{` { `}</span>
              </p>
              <p className={styles.block_387}>
                <span className={styles.text_}>Incorrect: ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ں
                </span>
                <span className={styles.text_}> ​ ​ ؟ ​ ​ ، </span>
              </p>
              <p className={styles.block_388}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ن
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ا
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ں
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ ​ ​ </span>
              </p>
              <p className={styles.block_389}>"</p>
              <p className={styles.block_390}>
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.
              </p>
              <p className={styles.block_391}>
                <span className={styles.text_}>Correct: A-4 ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ں ​ ر​ ​ ر ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_392}>
                <span className={styles.text_}>Incorrect:{` } 4 } A`} ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ں ​ ر​ ​ ر ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_393}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ر
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ a </span>
                <span dir="rtl" className={styles.text_6}>
                  ں
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ر
                </span>
                <span className={styles.text_7}>​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ر ا
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_394}>
                <span className={styles.text_}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  لڈ / ہر ادا​ ا​ ہو
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_395}>
                <span className={styles.text_}>Incorrect: </span>
                <span dir="rtl" className={styles.text_}>
                  {' '}
                  {' و} ​ لڈ { } ہر ادا​ ا​ ہو '}
                </span>
                <span className={styles.text_}>{`}`} </span>
              </p>
              <p className={styles.block_396}>
                <span className={styles.text_6}>Example audio: " </span>
                <span dir="rtl" className={styles.text_6}>
                  و
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  لڈ ر ادا
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ا
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ہو
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_397}>
                <span className={styles.text_}>Explanation: ۔ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ف وا​ ز ر
                </span>
                <span className={styles.text_}>​ ​ ​ ​ ​(/) </span>
              </p>
              <p className={styles.block_398}>
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.
              </p>
              <p className={styles.block_399}>
                <span className={styles.text_}>Correct:{` {`} </span>
                <span dir="rtl" className={styles.text_}>
                  ار
                </span>
                <span className={styles.text_}>{`} `}</span>
              </p>
              <p className={styles.block_400}>Correct: {}</p>
              <p className={styles.block_401}>
                Treat spoken punctuation as you would regular symbols.
              </p>
              <p className={styles.block_402}>
                <span className={styles.text_}>Correct: ؟</span>
                <span dir="rtl" className={styles.text_}>
                  ںو{` ​ ​ ​{ ن ​ ا } ​ ​ ​`} و
                </span>
                <span className={styles.text_}> ​ ​ </span>
              </p>
              <p className={styles.block_403}>
                <span className={styles.text_}>Incorrect: ؟</span>
                <span dir="rtl" className={styles.text_}>
                  ںو ​ ​ ​ ن ​ ا ​ ​ ​ ​ و
                </span>
                <span className={styles.text_}> ​ ​ </span>
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
