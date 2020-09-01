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
              <p class="block_216">Transcription quality</p>
              <p class="block_217">
                Comply with the standard rules of the writing system.
              </p>
              <p class="block_218">Typo</p>
              <p class="block_219">
                A typo results in the unintentional creation of a non-word.
              </p>
              <p class="block_220">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <p class="block_221">
                Use the proper capitalization for standard words that require
                it.
              </p>
              <p class="block_222">Correct: Петар работи во канцеларијата на</p>
              <p class="block_223">Амазон во Скопје.</p>
              <p class="block_224">Explanation: Сопствените именки како</p>
              <p class="block_225">
                "Петар", "Амазон" и "Скопје" треба да бидат
              </p>
              <p class="block_226">со големи букви.</p>
              <p class="block_227">Context error</p>
              <p class="block_228">
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <p class="block_229">Correct: Јас сум лут.</p>
              <p class="block_230">Incorrect: Јас сум луд.</p>
              <p class="block_231">Explanation: "Лут" и "луд" звучат исто во</p>
              <p class="block_232">македонскиот јазик, но правилниот збор за</p>
              <p class="block_233">контекстот би била придавката "лут", а не</p>
              <p class="block_234">придавката "луд".</p>
              <p class="block_235">Correct: Вие не сакате да дојдете со нас.</p>
              <p class="block_236">
                Incorrect: Вие нѐ сакате да дојдете со нас.
              </p>
              <p class="block_237">Explanation: "Не" и "нѐ" звучат исто во</p>
              <p class="block_238">говорниот македонски јазик, но во овој</p>
              <p class="block_239">контекст е потребно користење честичката</p>
              <p class="block_240">"не", а не кратката заменска множинска</p>
              <p class="block_241">форма "нѐ".</p>
              <p class="block_242">Correct: Ти се восхитувам на храброста.</p>
              <p class="block_243">Explanation: "Се" и "сѐ" звучи исто во</p>
              <p class="block_244">Incorrect: Ти cѐ восхитувам на храброста.</p>
              <p class="block_245">говорниот македонски јазик, но во овој</p>
              <p class="block_246">
                контекст е правилна употребата на глаголот
              </p>
              <p class="block_247">"се", а не на заменката "сѐ"</p>
              <p class="block_248">Correct: Дваесет и три момчиња се</p>
              <p class="block_249">
                Explanation: "Дваесет и три" и "дваесет итри"
              </p>
              <p class="block_250">пријавиле на годинешниот спортски</p>
              <p class="block_251">натпревар.</p>
              <p class="block_252">Incorrect: Дваесет итри момчиња се</p>
              <p class="block_253">пријавиле на годинешниот спортски</p>
              <p class="block_254">натпревар.</p>
              <p class="block_237">се синтаксички хомофони, но во овој</p>
              <p class="block_255">контекст треба да се искористи бројот</p>
              <p class="block_256">"дваесет и три", а не номиналната фраза</p>
              <p class="block_257">"дваесет итри" составена од број и</p>
              <p class="block_258">придавка.</p>
              <p class="block_259">
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <p class="block_260">Correct: Клучен услов за напредок е</p>
              <p class="block_261">соживотот на мултинационалното</p>
              <p class="block_262">општеството.</p>
              <p class="block_263">Incorrect: Клучен услов за напредок е со</p>
              <p class="block_264">животот на мултинационалното општество.</p>
              <p class="block_265">
                Explanation: "Соживот" и "со живот" звучат
              </p>
              <p class="block_266">исто во говорниот македонски јазик, но во</p>
              <p class="block_267">овој контекст е потребно користење на</p>
              <p class="block_268">именката "соживот", а не номиналната</p>
              <p class="block_269">фраза "со живот" составена од предлог и</p>
              <p class="block_270">именка.</p>
              <p class="block_271">
                Do not correct speaker's grammar if they intentionally say
                something, even if what they say does not follow the standard
                grammatical rules of the transcription language.
              </p>
              <p class="block_272">Correct: Тој збора македонски.</p>
              <p class="block_273">Incorrect: Тој зборуе македонски.</p>
              <p class="block_274">
                <span class="text_">Example audio: " </span>
                <span class="text_1">тој збора македонски </span>
                <span class="text_">" </span>
              </p>
              <p class="block_275">Explanation: Иако "тој збора" не е според</p>
              <p class="block_276">стандардните граматички правила, сепак е</p>
              <p class="block_277">транскибирано како "тој збора" и не е</p>
              <p class="block_278">променето во правилната форма "тој</p>
              <p class="block_279">зборува".</p>
              <p class="block_280">Added or missing words</p>
              <p class="block_281">
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times and units
                of currency.
              </p>
              <p class="block_282">
                Correct: Сакам да го гледам Панкот е мртов.
              </p>
              <p class="block_283">Incorrect: Сакам да го гледам Панкот не е</p>
              <p class="block_284">мртов.</p>
              <p class="block_285">
                <span class="text_">Example audio: " </span>
                <span class="text_1">сакам да го гледам панкот </span>
              </p>
              <p class="block_286">
                <span class="text_1">не е мртов </span>
                <span class="text_">" </span>
              </p>
              <p class="block_287">Explanation: Иако "Панкот е мртов" не е</p>
              <p class="block_288">правилното име на филмот, сепак е</p>
              <p class="block_289">
                транскибирано како "Панкот е мртов" и не е
              </p>
              <p class="block_290">променето во правилната форма "Панкот не</p>
              <p class="block_291">е мртов".</p>
              <p class="block_292">Correct: Намести будилник во 6:45.</p>
              <p class="block_293">Incorrect: Намести будилник во шест и 45.</p>
              <p class="block_294">
                <span class="text_">Example audio: " </span>
                <span class="text_1">намести будилник во седум </span>
              </p>
              <p class="block_295">
                <span class="text_1">без черек </span>
                <span class="text_">" </span>
              </p>
              <p class="block_296">
                <span class="text_">Example audio: " </span>
                <span class="text_1">намести будилник во седум </span>
              </p>
              <p class="block_297">
                <span class="text_1">без петнаесет </span>
                <span class="text_">" </span>
              </p>
              <p class="block_298">Explanation: Според контекстот, ова е</p>
              <p class="block_299">пример за имплицирано време и се</p>
              <p class="block_300">транскрибира со ":".</p>
              <p class="block_301">
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <p class="block_302">Correct: Јутуб Јутуб Јутуб</p>
              <p class="block_303">Incorrect: Јутуб</p>
              <p class="block_304">
                <span class="text_">Example audio: " </span>
                <span class="text_1">јутуб јутуб јутуб </span>
                <span class="text_">" </span>
              </p>
              <p class="block_305">Explanation: Говорителот ненамерно рече</p>
              <p class="block_306">
                "Јутуб" три пати, но кога веќе е речено, мора
              </p>
              <p class="block_307">три пати да биде транскрибирано.</p>
              <p class="block_308">Correct: Колку малинки, боровинки имате?</p>
              <p class="block_309">Incorrect: Колку боровинки имате?</p>
              <p class="block_310">
                <span class="text_">Example audio: " </span>
                <span class="text_1">колку малинки боровинки </span>
              </p>
              <p class="block_311">
                <span class="text_1">имате </span>
                <span class="text_">" </span>
              </p>
              <p class="block_312">Explanation: Иако говорителот мислел само</p>
              <p class="block_313">на "боровинки", но по грешка рекол и</p>
              <p class="block_314">"малинки", треба да ги транскрибирате и</p>
              <p class="block_315">двете.</p>
              <p class="block_316">Substitution</p>
              <p class="block_317">
                A substitution error occurs when another standard word is
                transcribed instead of what was meant by the speaker. If what
                the speaker said falls into another category (Context Error,
                Proper Name, Media Title, etc.), see the relevant section.
              </p>
              <p class="block_318">Correct: Одведи ме во Вили.</p>
              <p class="block_319">Incorrect: Одведи ме во Лесковац.</p>
              <p class="block_320">
                <span class="text_">Example audio: " </span>
                <span class="text_1">одведи ме во вили </span>
                <span class="text_">" </span>
              </p>
              <p class="block_321">Explanation: Правилна транскрипција е таа</p>
              <p class="block_322">што го содржи ресторанот кој говорителот</p>
              <p class="block_323">го кажал и не се заменува со различен</p>
              <p class="block_324">ресторан.</p>
              <p class="block_325">Spacing</p>
              <p class="block_326">
                Use only one space between words and sentences.
              </p>
              <p class="block_327">
                Correct: Кој е највисок врв во Македонија?
              </p>
              <p class="block_328">Incorrect: Кој е највисок врв во_</p>
              <p class="block_329">Македонија?</p>
              <p class="block_330">Explanation: Долната црта означува едно</p>
              <p class="block_331">празно место повеќе помеѓу "во" и</p>
              <p class="block_332">"Македонија". Потребно е само едно празно</p>
              <p class="block_333">место помеѓу зборовите.</p>
              <p class="block_334">Correct: Мислам. Ајде барем да пробаме.</p>
              <p class="block_335">
                Incorrect: Мислам. _Ајде барем да пробаме.
              </p>
              <p class="block_330">Explanation: Долната црта означува едно</p>
              <p class="block_238">празно место повеќе помеѓу "." и "Ајде".</p>
              <p class="block_336">Потребно е само едно празно место помеѓу</p>
              <p class="block_337">речениците.</p>
              <p class="block_338">
                Do not put a space between the punctuation and the preceding
                word.
              </p>
              <p class="block_339">Correct: Доаѓаш?</p>
              <p class="block_340">Incorrect: Доаѓаш ?</p>
              <p class="block_341">Explanation: Не треба да има празно место</p>
              <p class="block_342">пред "?"</p>
              <p class="block_343">Correct: Здраво, овде е проф. Смилевски.</p>
              <p class="block_344">
                Incorrect: Здраво , овде е проф. Смилевски.
              </p>
              <p class="block_345">Explanation: Не треба да стои запирка</p>
              <p class="block_346">помеѓу интерпункцискиот знак и</p>
              <p class="block_347">кратенката.</p>
              <p class="block_348">
                For quotation marks and similar punctuation, put a space before
                the opening punctuation, but not after the closing punctuation.
              </p>
              <p class="block_349">Correct: Антонио рече "Те сакам".</p>
              <p class="block_350">Incorrect: Антонио рече "Те сакам_".</p>
              <p class="block_351">Explanation: Долната црта "_" претставува</p>
              <p class="block_352">празно место. Не треба да има празно</p>
              <p class="block_353">место помеѓу точката и крајните</p>
              <p class="block_354">наводници.</p>
              <p class="block_355">Correct: Преведете го зборот "куче"_на</p>
              <p class="block_351">Explanation: Долната црта "_" претставува</p>
              <p class="block_356">јапонски.</p>
              <p class="block_357">празно место. Мора да има празно место</p>
              <p class="block_358">Incorrect: Преведете го зборот "куче"на</p>
              <p class="block_359">јапонски.</p>
              <p class="block_360">помеѓу крајните наводници, затоа што</p>
              <p class="block_361">после нив следи друг збор.</p>
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
