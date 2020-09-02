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
            <PageContentHeader currentPage="longform Russian" />
            <div className="content text">
              <p className={styles.block_214}>Transcription quality</p>
              <p className={styles.block_215}>
                Comply with the standard rules of the writing system.
              </p>
              <p className={styles.block_216}>Typo</p>
              <p className={styles.block_217}>
                A typo results in the unintentional creation of a non-word.
              </p>
              <p className={styles.block_174}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p className={styles.block_218}>
                Correct: На лугу паслась корова.
              </p>
              <p className={styles.block_219}>
                Incorrect: На лугу паслась карова.
              </p>
              <p className={styles.block_220}>
                Explanation: See Agreed Spelling &gt; Multiple
              </p>
              <p className={styles.block_221}>
                Spellings for guidance on what to do if you are
              </p>
              <p className={styles.block_222}>
                uncertain about a word's spelling.
              </p>
              <p className={styles.block_223}>Correct: деревянная дверь</p>
              <p className={styles.block_224}>Incorrect: деревяная дверь</p>
              <p className={styles.block_225}>
                Use the proper capitalization for standard words that require
                it.
              </p>
              <p className={styles.block_226}>
                Correct: Она приехала из Австралии.
              </p>
              <p className={styles.block_227}>
                Incorrect: Она приехала из австралии.
              </p>
              <p className={styles.block_228}>
                Correct: Этот американец замечательно
              </p>
              <p className={styles.block_229}>говорит по-французски.</p>
              <p className={styles.block_230}>
                Incorrect: Этот Американец замечательно
              </p>
              <p className={styles.block_231}>говорит по-Французски.</p>
              <p className={styles.block_232}>
                Correct: У меня дома интернет не работает.
              </p>
              <p className={styles.block_233}>
                Incorrect: У меня дома Интернет не
              </p>
              <p className={styles.block_234}>работает.</p>
              <p className={styles.block_235}>
                Explanation: Both forms are used, but
              </p>
              <p className={styles.block_236}>standardize to "интернет".</p>
              <p className={styles.block_237}>Correct: собака овчарка</p>
              <p className={styles.block_238}>Incorrect: собака Овчарка</p>
              <p className={styles.block_239}>
                Do not capitalize any form of the pronoun "вы", even when it
                refers to one person.
              </p>
              <p className={styles.block_240}>Correct: Как вы думаете?</p>
              <p className={styles.block_241}>Incorrect: Как Вы думаете?</p>
              <p className={styles.block_242}>Correct: Я к вам пишу.</p>
              <p className={styles.block_243}>Incorrect: Я к Вам пишу.</p>
              <p className={styles.block_244}>Context error</p>
              <p className={styles.block_245}>
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <p className={styles.block_246}>Correct: Что тебе снится?</p>
              <p className={styles.block_247}>Incorrect: Что тебе сниться?</p>
              <p className={styles.block_248}>Correct: Нам надо созвониться.</p>
              <p className={styles.block_152}>
                Incorrect: Нам надо созвонится.
              </p>
              <p className={styles.block_249}>Correct: деревянная дверь</p>
              <p className={styles.block_250}>Incorrect: деревянное дверь</p>
              <p className={styles.block_251}>
                Correct: Он тоже съел бутерброд.
              </p>
              <p className={styles.block_252}>
                Incorrect: Он то же съел бутерброд.
              </p>
              <p className={styles.block_253}>
                Correct: Он съел то же, что и она.
              </p>
              <p className={styles.block_254}>
                Incorrect: Он съел тоже, что и она.
              </p>
              <p className={styles.block_255}>
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p className={styles.block_256}>
                Correct: Флаг развевался на ветру.
              </p>
              <p className={styles.block_257}>
                Incorrect: Флаг развивался на ветру.
              </p>
              <p className={styles.block_258}>Correct: Маленькие дети быстро</p>
              <p className={styles.block_259}>развиваются.</p>
              <p className={styles.block_254}>
                Incorrect: Маленькие дети быстро
              </p>
              <p className={styles.block_260}>развеваются.</p>
              <p className={styles.block_261}>
                Correct: избирательная кампания
              </p>
              <p className={styles.block_252}>
                Incorrect: избирательная компания
              </p>
              <p className={styles.block_262}>
                Do not correct speaker's grammar if they intentionally say
                something, even if what they say does not follow the standard
                grammatical rules of the transcription language.
              </p>
              <p className={styles.block_263}>
                Correct: У Оли есть маленький кошка.
              </p>
              <p className={styles.block_264}>
                Incorrect: У Оли есть маленькая кошка.
              </p>
              <p className={styles.block_265}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  у оли есть маленький кошка{' '}
                </span>
              </p>
              <p className={styles.block_266}>"</p>
              <p className={styles.block_267}>Correct: Сколько время?</p>
              <p className={styles.block_268}>Incorrect: Сколько времени?</p>
              <p className={styles.block_269}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>сколько время </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_270}>Added or missing words</p>
              <p className={styles.block_271}>
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times.
              </p>
              <p className={styles.block_272}>Correct: Он живёт Франции.</p>
              <p className={styles.block_273}>
                Incorrect: Он живёт во Франции.
              </p>
              <p className={styles.block_274}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>он живёт франции </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_275}>
                Explanation: Do not add the omitted word "во".
              </p>
              <p className={styles.block_276}>Correct: Он придёт в 6:00.</p>
              <p className={styles.block_277}>Incorrect: Он придёт в шесть.</p>
              <p className={styles.block_278}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>он придёт в шесть </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_279}>
                Explanation: In this context, the number
              </p>
              <p className={styles.block_280}>
                "шесть" clearly refers to a time, so transcribe it
              </p>
              <p className={styles.block_281}>
                according to the usual rules for transcribing
              </p>
              <p className={styles.block_282}>
                times (see Format &gt; Date and Time).
              </p>
              <p className={styles.block_283}>
                <span className={styles.text_4}>
                  Correct: Поставить будильник на 6:50.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>поставить будильник на </span>
              </p>
              <p className={styles.block_284}>
                <span className={styles.text_1}>шесть пять ноль </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_285}>
                Explanation: Even though this is an unusual
              </p>
              <p className={styles.block_286}>
                way to say a time, it clearly refers to a time and
              </p>
              <p className={styles.block_287}>should be transcribed as such.</p>
              <p className={styles.block_288}>
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <p className={styles.block_289}>
                Correct: YouTube YouTube YouTube
              </p>
              <p className={styles.block_290}>Incorrect: YouTube</p>
              <p className={styles.block_291}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>ю тюб ю тюб ю тюб </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_292}>
                Correct: На дворе трава. На траве двора
              </p>
              <p className={styles.block_293}>дрова.</p>
              <p className={styles.block_294}>
                Incorrect: На дворе трава. На траве дрова.
              </p>
              <p className={styles.block_295}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>на дворе трава на траве </span>
              </p>
              <p className={styles.block_296}>
                <span className={styles.text_1}>двора- дрова </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_297}>
                Explanation: Speaker corrected themselves
              </p>
              <p className={styles.block_298}>
                after mistakenly saying "двора".
              </p>
              <p className={styles.block_299}>
                <span className={styles.text_4}>
                  Correct: Сколько у тебя черники малины?{' '}
                </span>
                <span className={styles.text_7}>
                  Explanation: Speaker corrected themselves{' '}
                </span>
              </p>
              <p className={styles.block_300}>
                after mistakenly saying "черники".
              </p>
              <p className={styles.block_301}>Substitution</p>
              <p className={styles.block_302}>
                A substitution error occurs when another standard word is
                transcribed instead of what was meant by the speaker. If what
                the speaker said falls into another category (Context Error,
                Proper Name, Media Title, etc.), see the relevant section.
              </p>
              <p className={styles.block_303}>Correct: Я не люблю яблоки.</p>
              <p className={styles.block_304}>Incorrect: Я не люблю ягоды.</p>
              <p className={styles.block_305}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>я не люблю яблоки </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_306}>Spacing</p>
              <p className={styles.block_307}>
                Use only one space between words and sentences.
              </p>
              <p className={styles.block_308}>
                Correct: Какая в России самая высокая
              </p>
              <p className={styles.block_309}>гора?</p>
              <p className={styles.block_230}>
                Incorrect: Какая в России самая _высокая
              </p>
              <p className={styles.block_310}>гора?</p>
              <p className={styles.block_311}>
                Correct: Я так считаю. Давай попробуем.
              </p>
              <p className={styles.block_312}>
                Incorrect: Я так считаю. _Давай попробуем.
              </p>
              <p className={styles.block_313}>
                For most types of punctuation, do not put a space between the
                preceding word and the punctuation.
              </p>
              <p className={styles.block_314}>Correct: Ты идёшь?</p>
              <p className={styles.block_315}>Incorrect: Ты идёшь ?</p>
              <p className={styles.block_316}>Correct: Заткнись!</p>
              <p className={styles.block_317}>Incorrect: Заткнись !</p>
              <p className={styles.block_318}>Correct: Открыть yandex.ru.</p>
              <p className={styles.block_319}>Incorrect: Открыть yandex.ru .</p>
              <p className={styles.block_320}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>открыть яндекс ру </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_321}>
                For quotation marks and similar punctuation, put a space before
                the opening punctuation, but not necessarily after the closing
                punctuation.
              </p>
              <p className={styles.block_322}>Correct: Он сказал: "Пошли?"</p>
              <p className={styles.block_323}>
                Incorrect: Он сказал: "Пошли? "
              </p>
              <p className={styles.block_324}>Incorrect: Он сказал:"Пошли?"</p>
              <p className={styles.block_325}>
                Correct: Как по-японски "собака"?
              </p>
              <p className={styles.block_326}>
                Incorrect: Как по-японски "собака" ?
              </p>
              <p className={styles.block_327}>
                Correct: Как будет "собака" по-японски?
              </p>
              <p className={styles.block_328}>
                Incorrect: Как будет "собака"по-японски?
              </p>
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
