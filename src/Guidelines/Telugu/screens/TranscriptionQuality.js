import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Telugu" />
            <div className="content text">
              <p className={styles.block_214}>Transcription quality</p>
              <p className={styles.block_215}>
                The following general rules must be obeyed at all times when
                transcribing.
              </p>
              <p className={styles.block_216}>Typo</p>
              <p className={styles.block_217}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p className={styles.block_218}>
                Use proper capitalization for proper nouns, names and titles,
                unless it would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_145}>
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_219}>
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p className={styles.block_220}>
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.
              </p>
              <p className={styles.block_221}>
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.
              </p>
              <p className={styles.block_222}>
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.
              </p>
              <p className={styles.block_223}>
                <span className={styles.text_4}>
                  Use only one space between words and sentences.{' '}
                </span>
                <span className={styles.text_5}>Foreign language </span>
              </p>
              <p className={styles.block_224}>
                Do not skip audio that contains foreign words. First indicate
                whether it contains English or another language, then transcribe
                the utterance according to the following rules.
              </p>
              <p className={styles.block_225}>English</p>
              <p className={styles.block_226}>
                Please transliterate all English media titles.
              </p>
              <p className={styles.block_227}>Correct: ఆ ఆ న ల ఉ డ</p>
              <p className={styles.block_228}>
                Incorrect: ఆ Game of Thrones ల ఉ డ
              </p>
              <p className={styles.block_229}>
                Explanation: "Game of Thrones" is an American
              </p>
              <p className={styles.block_230}>
                television program, so its name has been
              </p>
              <p className={styles.block_231}>
                transliterated into Telugu script.
              </p>
              <p className={styles.block_232}>Correct: అ మ న బ</p>
              <p className={styles.block_233}>Incorrect: అ మ న Brad Pitt</p>
              <p className={styles.block_234}>
                Correct: ఆ య అన ాట బ ా ా చుర ంల
              </p>
              <p className={styles.block_235}>ఉం</p>
              <p className={styles.block_236}>
                Incorrect: Shape of You అన ాట బ ా
              </p>
              <p className={styles.block_237}>ా చుర ంల ఉం</p>
              <p className={styles.block_238}>Keep URLs in Latin script.</p>
              <p className={styles.block_239}>Correct: www.google.co.in</p>
              <p className={styles.block_240}>
                Transcribe English companies in English. Do not transliterate.
              </p>
              <p className={styles.block_241}>Correct: అ YouTube ల ఉంట ం</p>
              <p className={styles.block_242}>Incorrect: అ య ట బ ల ఉంట ం</p>
              <p className={styles.block_243}>Explanation: "య ట " అన ఇం కం ,</p>
              <p className={styles.block_244}>అందువలన ఇం ష ల ల ట ల ాయం .</p>
              <p className={styles.block_245}>
                Below are some common company names that should be transcribed
                in English with Latin characters
              </p>
              <p className={styles.block_246}>● Apple</p>
              <p className={styles.block_247}>● Facebook</p>
              <p className={styles.block_248}>● Google</p>
              <p className={styles.block_249}>● Instagram</p>
              <p className={styles.block_178}>● Netflix</p>
              <p className={styles.block_250}>● Skype</p>
              <p className={styles.block_251}>● Snapchat</p>
              <p className={styles.block_252}>● Twitter</p>
              <p className={styles.block_253}>● WhatsApp</p>
              <p className={styles.block_254}>● Yahoo</p>
              <p className={styles.block_255}>● YouTube</p>
              <p className={styles.block_256}>
                Transliterate common English words into your language.
              </p>
              <p className={styles.block_257}>Correct: హల</p>
              <p className={styles.block_258}>Incorrect: hello</p>
              <p className={styles.block_259}>Explanation: ల గ ఉప ం ా రణ</p>
              <p className={styles.block_260}>ఇం ష ప ల ా ం కరణ యం .</p>
              <p className={styles.block_261}>
                If the speaker in the audio is speaking in English and says a
                word in your language transliterate it to English.
              </p>
              <p className={styles.block_262}>
                Correct: I need a recipe for dondakai pacchadi.
              </p>
              <p className={styles.block_263}>
                Incorrect: I need a recipe for ండ ాయ పచ .
              </p>
              <p className={styles.block_264}>
                Explanation: వక ఇం ష ల మ ట డ త ఒక ల గ
              </p>
              <p className={styles.block_265}>ప ఉచ ం డ , " ండ ాయ పచ " అ .</p>
              <p className={styles.block_266}>అప డ ఆ ల గ ప ఇం ష ల ా ం కరణ</p>
              <p className={styles.block_267}>యం , ల గ ాడకం .</p>
              <p className={styles.block_268}>
                If someone says an English texting initialism, abbreviation, or
                acronym, transcribe it in English with lowercase letters.
              </p>
              <p className={styles.block_269}>Correct: jk, wtf, lol</p>
              <p className={styles.block_270}>Incorrect: JK, WTF, LOL</p>
              <p className={styles.block_271}>
                Use the spelling "Ok" for the phrase "Ok Google", as well as
                related phrases like "Ok Google Now" and "Ok Glass". For all
                other cases, transliterate the word "okay" as "ఓ " in Telugu
                script.
              </p>
              <p className={styles.block_272}>Correct: Ok Google</p>
              <p className={styles.block_273}>Incorrect: Okay Google</p>
              <p className={styles.block_274}>
                Explanation: "Google" మ ందు "Ok" వసు ం , ఇక
              </p>
              <p className={styles.block_275}>ం "Ok" "okay" ాదు.</p>
              <p className={styles.block_276}>
                <span className={styles.text_6}>Correct: Ok Google Now </span>
                <span className={styles.text_7}>
                  Explanation: Ok Google Now "Ok Google"{' '}
                </span>
              </p>
              <p className={styles.block_277}>ర ాంతరం అందువలన య తథం ా ాయ .</p>
              <p className={styles.block_278}>
                Correct: Ok Google, Starbucks ఎక డ?
              </p>
              <p className={styles.block_279}>
                Incorrect: Ok Google Starbucks ఎక డ?
              </p>
              <p className={styles.block_280}>
                Explanation: ఓ గ గ తర ాత ామ ట తర ా
              </p>
              <p className={styles.block_281}>ప ాయటం స ా ాయటం ంద వసు ం .</p>
              <p className={styles.block_282}>Correct: ఓ , ం .</p>
              <p className={styles.block_283}>Incorrect: ఓ ం .</p>
              <p className={styles.block_284}>
                Explanation: "ఓ " "Ok" ా వలం "Google"
              </p>
              <p className={styles.block_285}>మ ందు మ త ాయ .</p>
              <p className={styles.block_286}>Other foreign languages</p>
              <p className={styles.block_287}>
                If you hear a foreign word (besides English) that is commonly
                understood by speakers of your language, transcribe it in your
                script.
              </p>
              <p className={styles.block_288}>Correct: ను ఒ ా ర ా</p>
              <p className={styles.block_289}>
                <span className={styles.text_8}>Incorrect: ను </span>
                <span className={styles.text_9}>折り紙 </span>
                <span className={styles.text_8}>ర ా </span>
              </p>
              <p className={styles.block_290}>Explanation: ఇ ఇం ష ా న అ ా రణ</p>
              <p className={styles.block_291}>జప పదం. క జప నప ట</p>
              <p className={styles.block_292}>ఇం ష ల ా ం కరణ యం .</p>
              <p className={styles.block_293}>Correct: డ క ట ా ం ా సుల ళ డ</p>
              <p className={styles.block_294}>
                Incorrect: డ ుక 태권도 ా సుల ళ డ
              </p>
              <p className={styles.block_295}>Explanation: ట ా ం య పద నప ట</p>
              <p className={styles.block_296}>ల గ ారంద అ అర మవ త ం . క య</p>
              <p className={styles.block_297}>నప ట దయ ల గ ల</p>
              <p className={styles.block_298}>ాయం .</p>
              <p className={styles.block_299}>Accents</p>
              <p className={styles.block_300}>
                If you hear a word with non-standard pronunciation, transcribe
                the word using the standard spelling according to your
                language's official dictionary.
              </p>
              <p className={styles.block_301}>Correct: ఎక ఎల డ ?</p>
              <p className={styles.block_302}>Incorrect: ఎక డ ?</p>
              <p className={styles.block_303}>
                Explanation: "ఎల డ " అన మ ండ ా " డ "
              </p>
              <p className={styles.block_304}>అ ా మ ణ క ప బదుల ా వక ా డ , ా</p>
              <p className={styles.block_305}>ఇక డ ా మ ణ క " డ " అ మ త ాయ .</p>
              <p className={styles.block_306}>Correct: ాం ల .</p>
              <p className={styles.block_307}>Incorrect: సు ాం ల .</p>
              <p className={styles.block_308}>
                Explanation: " " బదుల మ ండ క "సు" వక
              </p>
              <p className={styles.block_309}>ా డ . ా మ ణ క షల " ాం ల " అ</p>
              <p className={styles.block_310}>ాయం .</p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
