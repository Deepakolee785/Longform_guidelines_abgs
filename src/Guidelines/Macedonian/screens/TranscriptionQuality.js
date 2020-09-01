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
            <PageContentHeader currentPage="longform Macedonian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_220}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_221}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_222}>
                  Correct: Петар работи во канцеларијата на
                </p>
                <p className={styles.block_223}>Амазон во Скопје.</p>
                <p className={styles.block_224}>
                  Explanation: Сопствените именки како
                </p>
                <p className={styles.block_225}>
                  "Петар", "Амазон" и "Скопје" треба да бидат
                </p>
                <p className={styles.block_226}>со големи букви.</p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_229}>Correct: Јас сум лут.</p>
                <p className={styles.block_230}>Incorrect: Јас сум луд.</p>
                <p className={styles.block_231}>
                  Explanation: "Лут" и "луд" звучат исто во
                </p>
                <p className={styles.block_232}>
                  македонскиот јазик, но правилниот збор за
                </p>
                <p className={styles.block_233}>
                  контекстот би била придавката "лут", а не
                </p>
                <p className={styles.block_234}>придавката "луд".</p>
                <p className={styles.block_235}>
                  Correct: Вие не сакате да дојдете со нас.
                </p>
                <p className={styles.block_236}>
                  Incorrect: Вие нѐ сакате да дојдете со нас.
                </p>
                <p className={styles.block_237}>
                  Explanation: "Не" и "нѐ" звучат исто во
                </p>
                <p className={styles.block_238}>
                  говорниот македонски јазик, но во овој
                </p>
                <p className={styles.block_239}>
                  контекст е потребно користење честичката
                </p>
                <p className={styles.block_240}>
                  "не", а не кратката заменска множинска
                </p>
                <p className={styles.block_241}>форма "нѐ".</p>
                <p className={styles.block_242}>
                  Correct: Ти се восхитувам на храброста.
                </p>
                <p className={styles.block_243}>
                  Explanation: "Се" и "сѐ" звучи исто во
                </p>
                <p className={styles.block_244}>
                  Incorrect: Ти cѐ восхитувам на храброста.
                </p>
                <p className={styles.block_245}>
                  говорниот македонски јазик, но во овој
                </p>
                <p className={styles.block_246}>
                  контекст е правилна употребата на глаголот
                </p>
                <p className={styles.block_247}>"се", а не на заменката "сѐ"</p>
                <p className={styles.block_248}>
                  Correct: Дваесет и три момчиња се
                </p>
                <p className={styles.block_249}>
                  Explanation: "Дваесет и три" и "дваесет итри"
                </p>
                <p className={styles.block_250}>
                  пријавиле на годинешниот спортски
                </p>
                <p className={styles.block_251}>натпревар.</p>
                <p className={styles.block_252}>
                  Incorrect: Дваесет итри момчиња се
                </p>
                <p className={styles.block_253}>
                  пријавиле на годинешниот спортски
                </p>
                <p className={styles.block_254}>натпревар.</p>
                <p className={styles.block_237}>
                  се синтаксички хомофони, но во овој
                </p>
                <p className={styles.block_255}>
                  контекст треба да се искористи бројот
                </p>
                <p className={styles.block_256}>
                  "дваесет и три", а не номиналната фраза
                </p>
                <p className={styles.block_257}>
                  "дваесет итри" составена од број и
                </p>
                <p className={styles.block_258}>придавка.</p>
                <p className={styles.block_259}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_260}>
                  Correct: Клучен услов за напредок е
                </p>
                <p className={styles.block_261}>
                  соживотот на мултинационалното
                </p>
                <p className={styles.block_262}>општеството.</p>
                <p className={styles.block_263}>
                  Incorrect: Клучен услов за напредок е со
                </p>
                <p className={styles.block_264}>
                  животот на мултинационалното општество.
                </p>
                <p className={styles.block_265}>
                  Explanation: "Соживот" и "со живот" звучат
                </p>
                <p className={styles.block_266}>
                  исто во говорниот македонски јазик, но во
                </p>
                <p className={styles.block_267}>
                  овој контекст е потребно користење на
                </p>
                <p className={styles.block_268}>
                  именката "соживот", а не номиналната
                </p>
                <p className={styles.block_269}>
                  фраза "со живот" составена од предлог и
                </p>
                <p className={styles.block_270}>именка.</p>
                <p className={styles.block_271}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_272}>
                  Correct: Тој збора македонски.
                </p>
                <p className={styles.block_273}>
                  Incorrect: Тој зборуе македонски.
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>тој збора македонски </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_275}>
                  Explanation: Иако "тој збора" не е според
                </p>
                <p className={styles.block_276}>
                  стандардните граматички правила, сепак е
                </p>
                <p className={styles.block_277}>
                  транскибирано како "тој збора" и не е
                </p>
                <p className={styles.block_278}>
                  променето во правилната форма "тој
                </p>
                <p className={styles.block_279}>зборува".</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_282}>
                  Correct: Сакам да го гледам Панкот е мртов.
                </p>
                <p className={styles.block_283}>
                  Incorrect: Сакам да го гледам Панкот не е
                </p>
                <p className={styles.block_284}>мртов.</p>
                <p className={styles.block_285}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    сакам да го гледам панкот{' '}
                  </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_1}>не е мртов </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_287}>
                  Explanation: Иако "Панкот е мртов" не е
                </p>
                <p className={styles.block_288}>
                  правилното име на филмот, сепак е
                </p>
                <p className={styles.block_289}>
                  транскибирано како "Панкот е мртов" и не е
                </p>
                <p className={styles.block_290}>
                  променето во правилната форма "Панкот не
                </p>
                <p className={styles.block_291}>е мртов".</p>
                <p className={styles.block_292}>
                  Correct: Намести будилник во 6:45.
                </p>
                <p className={styles.block_293}>
                  Incorrect: Намести будилник во шест и 45.
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    намести будилник во седум{' '}
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_1}>без черек </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    намести будилник во седум{' '}
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_1}>без петнаесет </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_298}>
                  Explanation: Според контекстот, ова е
                </p>
                <p className={styles.block_299}>
                  пример за имплицирано време и се
                </p>
                <p className={styles.block_300}>транскрибира со ":".</p>
                <p className={styles.block_301}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_302}>Correct: Јутуб Јутуб Јутуб</p>
                <p className={styles.block_303}>Incorrect: Јутуб</p>
                <p className={styles.block_304}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>јутуб јутуб јутуб </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_305}>
                  Explanation: Говорителот ненамерно рече
                </p>
                <p className={styles.block_306}>
                  "Јутуб" три пати, но кога веќе е речено, мора
                </p>
                <p className={styles.block_307}>
                  три пати да биде транскрибирано.
                </p>
                <p className={styles.block_308}>
                  Correct: Колку малинки, боровинки имате?
                </p>
                <p className={styles.block_309}>
                  Incorrect: Колку боровинки имате?
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    колку малинки боровинки{' '}
                  </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_1}>имате </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_312}>
                  Explanation: Иако говорителот мислел само
                </p>
                <p className={styles.block_313}>
                  на "боровинки", но по грешка рекол и
                </p>
                <p className={styles.block_314}>
                  "малинки", треба да ги транскрибирате и
                </p>
                <p className={styles.block_315}>двете.</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_318}>Correct: Одведи ме во Вили.</p>
                <p className={styles.block_319}>
                  Incorrect: Одведи ме во Лесковац.
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>одведи ме во вили </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_321}>
                  Explanation: Правилна транскрипција е таа
                </p>
                <p className={styles.block_322}>
                  што го содржи ресторанот кој говорителот
                </p>
                <p className={styles.block_323}>
                  го кажал и не се заменува со различен
                </p>
                <p className={styles.block_324}>ресторан.</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_327}>
                  Correct: Кој е највисок врв во Македонија?
                </p>
                <p className={styles.block_328}>
                  Incorrect: Кој е највисок врв во_
                </p>
                <p className={styles.block_329}>Македонија?</p>
                <p className={styles.block_330}>
                  Explanation: Долната црта означува едно
                </p>
                <p className={styles.block_331}>
                  празно место повеќе помеѓу "во" и
                </p>
                <p className={styles.block_332}>
                  "Македонија". Потребно е само едно празно
                </p>
                <p className={styles.block_333}>место помеѓу зборовите.</p>
                <p className={styles.block_334}>
                  Correct: Мислам. Ајде барем да пробаме.
                </p>
                <p className={styles.block_335}>
                  Incorrect: Мислам. _Ајде барем да пробаме.
                </p>
                <p className={styles.block_330}>
                  Explanation: Долната црта означува едно
                </p>
                <p className={styles.block_238}>
                  празно место повеќе помеѓу "." и "Ајде".
                </p>
                <p className={styles.block_336}>
                  Потребно е само едно празно место помеѓу
                </p>
                <p className={styles.block_337}>речениците.</p>
                <p className={styles.block_338}>
                  Do not put a space between the punctuation and the preceding
                  word.
                </p>
                <p className={styles.block_339}>Correct: Доаѓаш?</p>
                <p className={styles.block_340}>Incorrect: Доаѓаш ?</p>
                <p className={styles.block_341}>
                  Explanation: Не треба да има празно место
                </p>
                <p className={styles.block_342}>пред "?"</p>
                <p className={styles.block_343}>
                  Correct: Здраво, овде е проф. Смилевски.
                </p>
                <p className={styles.block_344}>
                  Incorrect: Здраво , овде е проф. Смилевски.
                </p>
                <p className={styles.block_345}>
                  Explanation: Не треба да стои запирка
                </p>
                <p className={styles.block_346}>
                  помеѓу интерпункцискиот знак и
                </p>
                <p className={styles.block_347}>кратенката.</p>
                <p className={styles.block_348}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not after the closing
                  punctuation.
                </p>
                <p className={styles.block_349}>
                  Correct: Антонио рече "Те сакам".
                </p>
                <p className={styles.block_350}>
                  Incorrect: Антонио рече "Те сакам_".
                </p>
                <p className={styles.block_351}>
                  Explanation: Долната црта "_" претставува
                </p>
                <p className={styles.block_352}>
                  празно место. Не треба да има празно
                </p>
                <p className={styles.block_353}>
                  место помеѓу точката и крајните
                </p>
                <p className={styles.block_354}>наводници.</p>
                <p className={styles.block_355}>
                  Correct: Преведете го зборот "куче"_на
                </p>
                <p className={styles.block_351}>
                  Explanation: Долната црта "_" претставува јапонски. празно
                  место. Мора да има празно место
                </p>

                <p className={styles.block_358}>
                  Incorrect: Преведете го зборот "куче"на јапонски. помеѓу
                  крајните наводници, затоа што после нив следи друг збор.
                </p>
              </div>
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
