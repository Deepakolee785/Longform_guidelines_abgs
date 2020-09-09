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
            <PageContentHeader currentPage="Longform Russian" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_333}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_334}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_4}>
                    Correct: Я могу говорить по-русски.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Includes subject ("я") and verb
                  </span>
                </p>
                <p className={styles.block_336}>("могу").</p>
                <p className={styles.block_337}>
                  <span className={styles.text_4}>
                    Correct: А он даже не позвонил.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Includes subject and verb. Sounds
                  </span>
                </p>
                <p className={styles.block_338}>
                  like a whole utterance rather than part of a
                </p>
                <p className={styles.block_339}>larger sentence.</p>
                <p className={styles.block_340}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_4}>
                    Correct: Ты о ком говоришь? О соседе.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Two speakers. "О соседе." is an
                  </span>
                </p>
                <p className={styles.block_342}>
                  answer to a specific question.
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_4}>Correct: о соседе </span>
                  <span className={styles.text_7}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_344}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_4}>
                    Correct: Завтра приходишь?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Dropping the subject here sounds
                  </span>
                </p>
                <p className={styles.block_346}>
                  natural as a complete sentence. Punctuate as a
                </p>
                <p className={styles.block_347}>sentence.</p>
                <p className={styles.block_348}>
                  <span className={styles.text_4}>
                    Correct: погода в Лондоне{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: probably a search query, not a
                  </span>
                </p>
                <p className={styles.block_349}>sentence</p>
                <p className={styles.block_350}>
                  <span className={styles.text_4}>
                    Correct: фотографии собак{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_351}>
                  Correct: А он даже не позвонил. Мерзавец
                </p>
                <p className={styles.block_352}>какой.</p>
                <p className={styles.block_353}>
                  Explanation: Speaker paused between the last
                </p>
                <p className={styles.block_354}>
                  two words. Intonation makes it clear that two
                </p>
                <p className={styles.block_355}>
                  sentences are intended, even though the
                </p>
                <p className={styles.block_356}>
                  second sentence contains no verb.
                </p>
                <p className={styles.block_357}>
                  Correct: А он даже не позвонил, мерзавец
                </p>
                <p className={styles.block_352}>какой.</p>
                <p className={styles.block_358}>
                  Explanation: No pause before the last two
                </p>
                <p className={styles.block_359}>
                  words; intonation sounds like a single
                </p>
                <p className={styles.block_360}>sentence.</p>
                <p className={styles.block_361}>
                  The words "да" and "нет" should generally be considered
                  complete sentences when on their own. This should also apply
                  to words and phrases like "конечно", "ещё бы", "ладно", "ни за
                  что", and "ни в коем случае" when they are used as synonyms
                  for "да" and "нет".
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_4}>Correct: Да. </span>
                  <span className={styles.text_7}>Explanation: да </span>
                </p>
                <p className={styles.block_363}>
                  Correct: Ты идёшь к Паше на новоселье?
                </p>
                <p className={styles.block_364}>Конечно.</p>
                <p className={styles.block_365}>Explanation: two speakers</p>
                <p className={styles.block_366}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_4}>Correct: Блин. </span>
                  <span className={styles.text_7}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_4}>Correct: Привет. </span>
                  <span className={styles.text_7}>Explanation: greeting </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_4}>Correct: Ладно. Пока. </span>
                  <span className={styles.text_7}>
                    Explanation: This includes both a yes/no word
                  </span>
                </p>
                <p className={styles.block_370}>
                  and a farewell, with a long pause between them.
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_4}>
                    Correct: За твоё здоровье.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Entire phrase is being used as an
                  </span>
                </p>
                <p className={styles.block_372}>interjection.</p>
                <p className={styles.block_373}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_374}>Correct: фото кошек</p>
                <p className={styles.block_375}>Incorrect: Фото кошек.</p>
                <p className={styles.block_376}>
                  Correct: самые прибыльные фильмы о
                </p>
                <p className={styles.block_377}>древнем Риме</p>
                <p className={styles.block_378}>
                  Incorrect: Самые прибыльные фильмы о
                </p>
                <p className={styles.block_379}>древнем Риме.</p>
                <p className={styles.block_380}>
                  Correct: Михаил Боярский фильмы
                </p>
                <p className={styles.block_381}>
                  Incorrect: Михаил Боярский. Фильмы.
                </p>
                <p className={styles.block_382}>Correct: мыть щенка в ванне</p>
                <p className={styles.block_383}>
                  Incorrect: Мыть щенка в ванне.
                </p>
                <p className={styles.block_384}>
                  Explanation: In some contexts this could
                </p>
                <p className={styles.block_385}>
                  possibly be a command, but by itself it is
                </p>
                <p className={styles.block_386}>probably just a web search.</p>
                <p className={styles.block_387}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_388}>Correct: а потом мы</p>
                <p className={styles.block_389}>
                  <span className={styles.text_4}>
                    Correct: сколько заедешь за мной?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: First part of the sentence is{' '}
                  </span>
                </p>
                <p className={styles.block_390}>missing.</p>
                <p className={styles.block_391}>
                  <span className={styles.text_4}>
                    Correct: Я не понял ничего про{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Audio starts at the beginning of a
                  </span>
                </p>
                <p className={styles.block_392}>
                  sentence but ends mid-sentence.
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_4}>
                    Correct: чтобы ты был не против нашего{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Sounds like the middle part of the
                  </span>
                </p>
                <p className={styles.block_394}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_4}>
                    Correct: Как ты считаешь? По-моему{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Full sentence, then beginning of a
                  </span>
                </p>
                <p className={styles.block_396}>
                  sentence which is cut off. This transcription is
                </p>
                <p className={styles.block_394}>
                  correct regardless of whether there is one
                </p>
                <p className={styles.block_397}>speaker or two.</p>
                <p className={styles.block_398}>
                  Correct: гораздо труднее. Давай лучше
                </p>
                <p className={styles.block_399}>сделаем по-другому.</p>
                <p className={styles.block_400}>
                  Explanation: Audio starts in the middle of a
                </p>
                <p className={styles.block_401}>sentence.</p>
                <p className={styles.block_402}>
                  Correct: Я сейчас в кафе. Собираюсь
                </p>
                <p className={styles.block_403}>
                  заказать Почём шоколадное мороженое?
                </p>
                <p className={styles.block_404}>
                  Explanation: The whole utterance is spoken by
                </p>
                <p className={styles.block_405}>
                  one speaker. Do not put any punctuation after a
                </p>
                <p className={styles.block_406}>
                  fragment even if another sentence follows. See
                </p>
                <p className={styles.block_407}>
                  Difficult Utterances &gt; Background and
                </p>
                <p className={styles.block_408}>
                  Foreground Speech for what to do if there is
                </p>
                <p className={styles.block_409}>more than one speaker.</p>
                <p className={styles.block_410}>
                  <span className={styles.text_4}>
                    Correct: Сколько стоит Где здесь{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: The speaker begins and abandons
                  </span>
                </p>
                <p className={styles.block_411}>two sentences.</p>
                <p className={styles.block_412}>
                  Correct: Где ближайшая Где ближайшая
                </p>
                <p className={styles.block_413}>библиотека?</p>
                <p className={styles.block_414}>
                  Explanation: Repeated beginning of the
                </p>
                <p className={styles.block_401}>sentence.</p>
                <p className={styles.block_415}>
                  Correct: Я наконец взяла чемодан. купила
                </p>
                <p className={styles.block_416}>чемодан</p>
                <p className={styles.block_417}>
                  Explanation: "купила чемодан" sounds like a
                </p>
                <p className={styles.block_418}>
                  correction to the speaker's previous sentence.
                </p>
                <p className={styles.block_419}>
                  Unclear whether "купила чемодан" is the end
                </p>
                <p className={styles.block_420}>
                  of a sentence or a stand-alone fragment, so
                </p>
                <p className={styles.block_421}>
                  default to formatting it as a fragment.
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_4}>
                    Correct: Я не взял чемодан. Забыл.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "Забыл." is clearly a complete
                  </span>
                </p>
                <p className={styles.block_423}>
                  sentence with an omitted subject.
                </p>
                <p className={styles.block_424}>
                  A voice action is a query where the user requests a specific
                  action that a smartphone can complete. The action requested is
                  generally expressed by a trigger (most often a
                </p>
                <p className={styles.block_425}>
                  verb describing the action to be performed, but it can also be
                  any other part of speech denoting a change of state of the
                  device or of an app). If a voice action sounds complete, it
                  should be capitalized and punctuated as a full sentence. In
                  contrast to a voice action, a web search is a query where the
                  user does not request a specific action that a smartphone can
                  complete. Web searches are more often, but not always, spoken
                  as true fragments.
                </p>
                <p className={styles.block_426}>Correct: Включи музыку.</p>
                <p className={styles.block_427}>
                  Correct: Написать сообщение Саше.
                </p>
                <p className={styles.block_428}>Correct: Позвони Маше.</p>
                <p className={styles.block_429}>
                  Correct: Отправь сообщение с текстом: Я
                </p>
                <p className={styles.block_430}>дома.</p>
                <p className={styles.block_431}>
                  Correct: Покажи мне, как отсюда ехать
                </p>
                <p className={styles.block_432}>домой.</p>
                <p className={styles.block_433}>
                  Correct: Поставить будильник на 7:30 утра.
                </p>
                <p className={styles.block_434}>
                  Correct: Напомни вызвать такси через 5
                </p>
                <p className={styles.block_435}>минут.</p>
                <p className={styles.block_436}>
                  Correct: Включить калькулятор.
                </p>
                <p className={styles.block_437}>
                  Correct: Включить режим вождения.
                </p>
                <p className={styles.block_438}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_441}>
                  Correct: Где ближайшая заправка?
                </p>
                <p className={styles.block_442}>
                  Incorrect: Где, ближайшая, заправка?
                </p>
                <p className={styles.block_443}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_444}>
                  pauses, do not use commas to show those
                </p>
                <p className={styles.block_445}>
                  pauses. There are places where commas are
                </p>
                <p className={styles.block_446}>
                  allowed or required, but this example contains
                </p>
                <p className={styles.block_447}>neither.</p>
                <p className={styles.block_448}>
                  Use a comma to separate introductory words and phrases (e.g.,
                  "между прочим", "таким образом", "кажется" etc.) from the rest
                  of the sentence. Please note that introductory words/phrases
                  may also be found in the middle or at the end of a sentence.
                  See the appendix at the end of this subsection for a list of
                  many common introductory words/phrases.
                </p>
                <p className={styles.block_449}>
                  Correct: Между прочим, надо бы купить
                </p>
                <p className={styles.block_450}>гречки.</p>
                <p className={styles.block_451}>
                  Correct: Во-первых, ты уже съел конфету, а
                </p>
                <p className={styles.block_452}>во-вторых, тебе пора спать.</p>
                <p className={styles.block_453}>
                  Correct: Строго говоря, это тоже
                </p>
                <p className={styles.block_454}>неправильный плов.</p>
                <p className={styles.block_455}>
                  Correct: С другой стороны, я там никогда не
                </p>
                <p className={styles.block_430}>была.</p>
                <p className={styles.block_456}>
                  <span className={styles.text_4}>
                    Correct: Он, кстати, не ест мяса.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Here the introductory word{' '}
                  </span>
                </p>
                <p className={styles.block_457}>
                  "кстати" is inserted into the sentence. In these
                </p>
                <p className={styles.block_458}>
                  cases, use commas both before and after the
                </p>
                <p className={styles.block_459}>introductory word.</p>
                <p className={styles.block_460}>
                  Correct: Блины, по всей вероятности, уже
                </p>
                <p className={styles.block_461}>кончились.</p>
                <p className={styles.block_462}>
                  Explanation: Use commas before and after the
                </p>
                <p className={styles.block_463}>
                  introductory phrase "по всей вероятности".
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_4}>
                    Correct: Я приду вечером, наверное.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Here the introductory word{' '}
                  </span>
                </p>
                <p className={styles.block_457}>
                  "наверное" is used at the end of the sentence.
                </p>
                <p className={styles.block_465}>Use a comma before it.</p>
                <p className={styles.block_466}>
                  Correct: В отличие от Шопена, Чайковский
                </p>
                <p className={styles.block_467}>
                  написал много музыки для оркестра.
                </p>
                <p className={styles.block_468}>
                  Explanation: Phrases like "в отличие от ___", "в
                </p>
                <p className={styles.block_469}>
                  противоположность ___", "по мнению ___" are
                </p>
                <p className={styles.block_470}>included in this rule.</p>
                <p className={styles.block_471}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_4}>
                    Correct: Ну, тогда я пошла.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: discourse word{' '}
                  </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_4}>
                    Correct: Извини, я не знал.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: discourse word{' '}
                  </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_4}>
                    Correct: Я не знал, извини.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: When this type of word occurs at
                  </span>
                </p>
                <p className={styles.block_475}>
                  the end of a sentence, use a comma before it.
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_4}>Correct: Эй, берегись! </span>
                  <span className={styles.text_7}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>Correct: Да, хочу. </span>
                  <span className={styles.text_7}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>Correct: Нет, спасибо. </span>
                  <span className={styles.text_7}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_4}>Correct: Ладно, пошли. </span>
                  <span className={styles.text_7}>
                    Explanation: yes/no word, and no substantial
                  </span>
                </p>
                <p className={styles.block_479}>pause</p>
                <p className={styles.block_480}>
                  <span className={styles.text_4}>Correct: Ладно. Пошли. </span>
                  <span className={styles.text_7}>
                    Explanation: substantial pause between the{' '}
                  </span>
                </p>
                <p className={styles.block_479}>words</p>
                <p className={styles.block_481}>
                  Use commas before tag questions.
                </p>
                <p className={styles.block_482}>
                  Correct: Вкусный салат, правда?
                </p>
                <p className={styles.block_483}>
                  Correct: Он вам нравится, не так ли?
                </p>
                <p className={styles.block_484}>
                  Use a comma in conditionals of the forms "если А, Б" and "Б,
                  если А". (This rule also applies to similar phrases containing
                  "когда", "поскольку", "чтобы", etc.)
                </p>
                <p className={styles.block_485}>
                  Correct: Если хочешь, я могу помыть посуду.
                </p>
                <p className={styles.block_486}>
                  Correct: Я могу помыть посуду, если хочешь.
                </p>
                <p className={styles.block_487}>
                  Correct: Когда Коля вернётся, мы пойдём.
                </p>
                <p className={styles.block_487}>
                  Correct: Мы пойдём, когда Коля вернётся.
                </p>
                <p className={styles.block_488}>
                  Correct: Поскольку я вчера отдыхала,
                </p>
                <p className={styles.block_489}>сегодня мне надо работать.</p>
                <p className={styles.block_490}>
                  Correct: Мне сегодня надо работать,
                </p>
                <p className={styles.block_491}>поскольку вчера я отдыхала.</p>
                <p className={styles.block_311}>
                  Correct: Я следила за котом, чтобы он не
                </p>
                <p className={styles.block_492}>убежал.</p>
                <p className={styles.block_493}>
                  Correct: Чтобы кот не убежал, я за ним
                </p>
                <p className={styles.block_494}>следила.</p>
                <p className={styles.block_495}>
                  Use a comma when two independent clauses are connected by
                  conjunctions like "и", "да", "да и", "или", "либо", "но", etc.
                </p>
                <p className={styles.block_496}>
                  Correct: Я сегодня буду поздно, но скоро
                </p>
                <p className={styles.block_497}>позвоню.</p>
                <p className={styles.block_498}>
                  Correct: Он включил музыку, а я помыл
                </p>
                <p className={styles.block_499}>посуду.</p>
                <p className={styles.block_500}>
                  Explanation: Two independent clauses, so use a
                </p>
                <p className={styles.block_501}>comma.</p>
                <p className={styles.block_502}>
                  Correct: Он включил музыку и помыл
                </p>
                <p className={styles.block_499}>посуду.</p>
                <p className={styles.block_503}>
                  Explanation: Not independent clauses, so don't
                </p>
                <p className={styles.block_504}>use a comma.</p>
                <p className={styles.block_505}>
                  Correct: Я пообещала скоро закончить
                </p>
                <p className={styles.block_506}>
                  перевод, так что мне сегодня надо
                </p>
                <p className={styles.block_507}>поработать.</p>
                <p className={styles.block_508}>
                  Explanation: Sometimes independent clauses
                </p>
                <p className={styles.block_509}>
                  are connected by multi-word conjunctions such
                </p>
                <p className={styles.block_510}>
                  as "так что", "потому что", "ввиду того что",
                </p>
                <p className={styles.block_511}>
                  "благодаря тому что", etc. Use commas in
                </p>
                <p className={styles.block_512}>these cases as well.</p>
                <p className={styles.block_380}>
                  Correct: Он объелся так, что не мог
                </p>
                <p className={styles.block_513}>
                  Explanation: Here the words "так что" do not
                </p>
                <p className={styles.block_514}>пошевелиться.</p>
                <p className={styles.block_515}>
                  act as a multi-word conjunction but as two
                </p>
                <p className={styles.block_516}>
                  separate words. The word "что" begins a
                </p>
                <p className={styles.block_517}>
                  subordinate clause and must be set apart by a
                </p>
                <p className={styles.block_518}>
                  comma. (See rule on subordinate clauses
                </p>
                <p className={styles.block_447}>below.)</p>
                <p className={styles.block_519}>
                  <span className={styles.text_4}>
                    Correct: Неплохо, а у тебя?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "а у тебя" is a sentence with most
                  </span>
                </p>
                <p className={styles.block_520}>
                  of the content elided, so you should use a
                </p>
                <p className={styles.block_336}>comma.</p>
                <p className={styles.block_521}>
                  Correct: Либо мы пригласим Петровых в
                </p>
                <p className={styles.block_522}>
                  гости, либо мы все вместе пойдём в
                </p>
                <p className={styles.block_523}>ресторан.</p>
                <p className={styles.block_524}>
                  Explanation: Here two independent clauses are
                </p>
                <p className={styles.block_525}>
                  joined by the connecting words "либо...либо".
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_4}>
                    Correct: Ни он не помыл посуду, ни она.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "ни она" is a sentence with most
                  </span>
                </p>
                <p className={styles.block_520}>
                  of the content elided, so you should use a
                </p>
                <p className={styles.block_336}>comma.</p>
                <p className={styles.block_527}>Use commas in lists.</p>
                <p className={styles.block_528}>
                  Correct: Когда я буду в магазине, напомни
                </p>
                <p className={styles.block_529}>
                  мне, что надо купить помидоров, огурцов,
                </p>
                <p className={styles.block_530}>молока, муки и масла.</p>
                <p className={styles.block_531}>
                  Explanation: List of nouns. Do not use a
                </p>
                <p className={styles.block_532}>comma before "и".</p>
                <p className={styles.block_533}>
                  Correct: У меня завтра математика, история,
                </p>
                <p className={styles.block_534}>французский.</p>
                <p className={styles.block_535}>
                  Correct: Маленький, пушистый,
                </p>
                <p className={styles.block_536}>
                  симпатичный котёнок замяукал.
                </p>
                <p className={styles.block_537}>
                  Explanation: List of adjectives. Each adjective
                </p>
                <p className={styles.block_538}>modifies the noun "котёнок".</p>
                <p className={styles.block_539}>
                  <span className={styles.text_4}>
                    Correct: Шёл длинный товарный поезд.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Even though this sentence{' '}
                  </span>
                </p>
                <p className={styles.block_540}>
                  contains two consecutive adjectives, this is not
                </p>
                <p className={styles.block_541}>
                  a list of adjectives because the adjective
                </p>
                <p className={styles.block_542}>
                  "длинный" modifies the phrase "товарный
                </p>
                <p className={styles.block_543}>
                  поезд". Do not use a comma here.
                </p>
                <p className={styles.block_544}>
                  Correct: Саранча прилетела, села, всё съела
                </p>
                <p className={styles.block_545}>и улетела.</p>
                <p className={styles.block_546}>
                  Explanation: list of verbs and verb phrases
                </p>
                <p className={styles.block_547}>
                  When two or more words or phrases which are alike (e.g. two
                  noun phrases or two verbs) are joined by a conjunction (e.g.
                  "а", "но", "да") or multiple conjunctions (e.g. "как...так и",
                  "не столько...сколько", "хотя...но", "и...и", "то...то",
                  "ни...ни"), separate them with commas.
                </p>
                <p className={styles.block_548}>
                  Correct: Она то просыпалась, то опять
                </p>
                <p className={styles.block_545}>засыпала.</p>
                <p className={styles.block_549}>
                  Explanation: verb phrases joined by "то...то"
                </p>
                <p className={styles.block_550}>
                  Correct: Ему надо не телевизор смотреть, а
                </p>
                <p className={styles.block_551}>книжки читать.</p>
                <p className={styles.block_552}>
                  Explanation: verb phrases joined by "а"
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_4}>
                    Correct: Она говорила мало, но толково.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: adverbs joined by "но"{' '}
                  </span>
                </p>
                <p className={styles.block_544}>
                  Correct: Ей подарили и плюшевого мишку, и
                </p>
                <p className={styles.block_554}>игрушечного робота, и книгу.</p>
                <p className={styles.block_555}>
                  Explanation: noun phrases joined by "и...и...и"
                </p>
                <p className={styles.block_556}>
                  Correct: Он пропустил мимо ушей как
                </p>
                <p className={styles.block_557}>
                  замечания, так и комплименты.
                </p>
                <p className={styles.block_558}>
                  Explanation: nouns joined by "как...так и"
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_4}>
                    Correct: Ни он, ни она не помыли посуду.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: pronouns joined by "ни...ни"{' '}
                  </span>
                </p>
                <p className={styles.block_560}>
                  When a word is repeated for emphasis, use a comma between the
                  repetitions.
                </p>
                <p className={styles.block_561}>
                  Correct: Зимы ждала, ждала природа.
                </p>
                <p className={styles.block_562}>
                  Correct: Я очень, очень хочу спать.
                </p>
                <p className={styles.block_563}>
                  Use commas to set apart subordinate clauses.
                </p>
                <p className={styles.block_564}>
                  Correct: Я думаю, что вам надо
                </p>
                <p className={styles.block_565}>познакомиться.</p>
                <p className={styles.block_455}>
                  Correct: Оказалось, что мы живём на одной
                </p>
                <p className={styles.block_566}>улице.</p>
                <p className={styles.block_567}>
                  Correct: Женщину, с которой я вчера
                </p>
                <p className={styles.block_568}>познакомилась, зовут Люда.</p>
                <p className={styles.block_569}>
                  Explanation: Here the subordinate clause is in
                </p>
                <p className={styles.block_570}>
                  the middle of the sentence, so there should be
                </p>
                <p className={styles.block_571}>
                  commas both before and after it.
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_4}>
                    Correct: Иди, куда хочешь.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: This is sometimes written without
                  </span>
                </p>
                <p className={styles.block_573}>
                  a comma. However, we will standardize to
                </p>
                <p className={styles.block_574}>
                  always using commas with subordinate
                </p>
                <p className={styles.block_575}>clauses.</p>
                <p className={styles.block_576}>
                  Correct: Он хотел сделать, как лучше.
                </p>
                <p className={styles.block_577}>
                  Correct: Она мне рассказала, как пройти на
                </p>
                <p className={styles.block_578}>
                  Красную площадь, в какой музей надо
                </p>
                <p className={styles.block_579}>
                  обязательно сходить и где найти самое
                </p>
                <p className={styles.block_580}>вкусное мороженое.</p>
                <p className={styles.block_581}>
                  Explanation: When several subordinate clauses
                </p>
                <p className={styles.block_582}>
                  belong to one main clause, use commas
                </p>
                <p className={styles.block_583}>
                  between the subordinate clauses. However, do
                </p>
                <p className={styles.block_584}>
                  not use a comma when subordinate clauses
                </p>
                <p className={styles.block_585}>are connected by "и".</p>
                <p className={styles.block_586}>
                  Correct: Я не знаю ни как его зовут, ни где он
                </p>
                <p className={styles.block_587}>живёт.</p>
                <p className={styles.block_588}>
                  Incorrect: Я не знаю, ни как его зовут, ни где
                </p>
                <p className={styles.block_234}>он живёт.</p>
                <p className={styles.block_589}>
                  Explanation: When subordinate clauses is
                </p>
                <p className={styles.block_590}>
                  preceded by a negation (e.g. "не" or "ни") or a
                </p>
                <p className={styles.block_591}>
                  conjunction (e.g. "и"), do not use a comma to
                </p>
                <p className={styles.block_592}>
                  separate them from the main clause, but do
                </p>
                <p className={styles.block_593}>
                  use commas between subordinate clauses.
                </p>
                <p className={styles.block_594}>
                  Use commas to set apart participial phrases. (Participial
                  phrases are ones that contain verb participles such as
                  "читая", "смотря", "танцуя", "прочитав", "увидев".)
                </p>
                <p className={styles.block_595}>
                  Correct: Осторожно ступая, Саша медленно
                </p>
                <p className={styles.block_596}>спустилась по тропе.</p>
                <p className={styles.block_597}>
                  Correct: Учитель, пытаясь включить
                </p>
                <p className={styles.block_598}>
                  телевизор, случайно выключил свет.
                </p>
                <p className={styles.block_599}>
                  Correct: Щенок к нам подбежал, виляя
                </p>
                <p className={styles.block_494}>хвостом.</p>
                <p className={styles.block_490}>
                  Correct: Увидев кошку, пёс зарычал.
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_4}>
                    Correct: Мы ждём, затаив дыхание.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: This is sometimes written without
                  </span>
                </p>
                <p className={styles.block_573}>
                  a comma. However, we will standardize to
                </p>
                <p className={styles.block_601}>
                  always using commas with participial phrases.
                </p>
                <p className={styles.block_602}>
                  Use commas in comparisons that use words like "чем", "как",
                  "словно", "точно", "будто", etc.
                </p>
                <p className={styles.block_603}>
                  Correct: В Нью-Йорке живёт намного
                </p>
                <p className={styles.block_604}>
                  больше людей, чем в Сан-Франциско.
                </p>
                <p className={styles.block_605}>
                  Correct: Он поступил так же, как она.
                </p>
                <p className={styles.block_434}>
                  Correct: Он был взъерошен, словно злая
                </p>
                <p className={styles.block_606}>собака.</p>
                <p className={styles.block_607}>
                  Correct: Это был не кто иной, как его отец.
                </p>
                <p className={styles.block_576}>
                  Correct: Эта комната меньше, чем та.
                </p>
                <p className={styles.block_608}>
                  Correct: Он вернулся меньше чем через
                </p>
                <p className={styles.block_609}>полчаса.</p>
                <p className={styles.block_610}>
                  Incorrect: Он вернулся меньше, чем через
                </p>
                <p className={styles.block_611}>полчаса.</p>
                <p className={styles.block_612}>
                  Explanation: Do not use commas in
                </p>
                <p className={styles.block_613}>
                  constructions like "не более как", "(не) раньше
                </p>
                <p className={styles.block_614}>
                  чем", "(не) больше чем", etc., unless they are
                </p>
                <p className={styles.block_615}>
                  truly being used for comparison.
                </p>
                <p className={styles.block_616}>Correct: Я вам как чужой.</p>
                <p className={styles.block_617}>Incorrect: Я вам, как чужой.</p>
                <p className={styles.block_618}>
                  Explanation: Here "как чужой" is used as a
                </p>
                <p className={styles.block_619}>
                  predicate. This is not really a comparison, so do
                </p>
                <p className={styles.block_620}>not use a comma.</p>
                <p className={styles.block_621}>
                  Correct: Она посмотрела на него, как на
                </p>
                <p className={styles.block_622}>чужого.</p>
                <p className={styles.block_623}>
                  Use commas to set apart non-restrictive appositives, but not
                  restrictive ones. (Restrictive appositives help identify the
                  meaning of the preceding noun or noun phrase, whereas
                  non-restrictive appositives merely add additional information
                  about an already identified referent.)
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_4}>
                    Correct: Мне нравится город Москва.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Here the appositive "Москва" is
                  </span>
                </p>
                <p className={styles.block_625}>
                  restrictive: it clarifies which city the speaker is
                </p>
                <p className={styles.block_626}>
                  referring to. If the appositive was removed, the
                </p>
                <p className={styles.block_627}>
                  meaning of the sentence would entirely
                </p>
                <p className={styles.block_628}>change.</p>
                <p className={styles.block_629}>
                  Correct: Столица России, Москва, мне очень
                </p>
                <p className={styles.block_630}>нравится.</p>
                <p className={styles.block_631}>
                  Explanation: Here the appositive "Москва" is
                </p>
                <p className={styles.block_632}>
                  non-restrictive: the phrase "столица России"
                </p>
                <p className={styles.block_633}>
                  already makes clear which city the speaker is
                </p>
                <p className={styles.block_634}>
                  referring to, and the appositive merely adds
                </p>
                <p className={styles.block_634}>
                  information about this city. If the appositive
                </p>
                <p className={styles.block_635}>
                  was removed, the meaning of the sentence
                </p>
                <p className={styles.block_636}>would stay the same.</p>
                <p className={styles.block_637}>
                  Correct: Знакомьтесь. Это - мой друг Ваня
                </p>
                <p className={styles.block_638}>Сидоров.</p>
                <p className={styles.block_639}>
                  Explanation: restrictive appositive
                </p>
                <p className={styles.block_533}>
                  Correct: Один из моих друзей, Ваня Сидоров,
                </p>
                <p className={styles.block_640}>ходил со мной на рыбалку.</p>
                <p className={styles.block_641}>
                  Explanation: Here the appositive "Ваня
                </p>
                <p className={styles.block_642}>
                  Сидоров" is non-restrictive and merely adds
                </p>
                <p className={styles.block_643}>
                  more information. If it was removed, the
                </p>
                <p className={styles.block_644}>
                  sentence would have slightly less information
                </p>
                <p className={styles.block_355}>
                  but would retain the core of its meaning.
                </p>
                <p className={styles.block_645}>
                  Correct: Иван Петрович, учитель химии, шёл
                </p>
                <p className={styles.block_581}>
                  Explanation: Here the non-restrictive appositive
                </p>
                <p className={styles.block_545}>на работу.</p>
                <p className={styles.block_646}>
                  "учитель химии" merely adds some additional
                </p>
                <p className={styles.block_221}>
                  information about the subject of the sentence.
                </p>
                <p className={styles.block_647}>
                  Correct: Учитель химии Иван Петрович шёл
                </p>
                <p className={styles.block_545}>на работу.</p>
                <p className={styles.block_631}>
                  Explanation: The restrictive appositive "Иван
                </p>
                <p className={styles.block_648}>
                  Петрович" identifies which chemistry teacher
                </p>
                <p className={styles.block_649}>the speaker is referring to.</p>
                <p className={styles.block_650}>
                  <span className={styles.text_4}>
                    Correct: Она, бедняжка, совсем продрогла.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: non-restrictive appositive{' '}
                  </span>
                </p>
                <p className={styles.block_651}>
                  Use commas to set apart appositive adjectives, as in the
                  following examples.
                </p>
                <p className={styles.block_652}>
                  Correct: Котёнок, маленький и беззащитный,
                </p>
                <p className={styles.block_653}>сидел в углу и дрожал.</p>
                <p className={styles.block_654}>
                  Explanation: Сонная и усталая, она наконец
                </p>
                <p className={styles.block_655}>пошла домой.</p>
                <p className={styles.block_656}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_657}>
                  Correct: С уважением, Владимир
                </p>
                <p className={styles.block_658}>Владимирович Иванов</p>
                <p className={styles.block_151}>Correct: Желаю успехов, Лина</p>
                <p className={styles.block_659}>
                  If a greeting occurs in isolation or is followed by a
                  substantial pause, treat it as a full sentence. Otherwise,
                  separate it from the rest of the sentence with commas.
                </p>
                <p className={styles.block_660}>Correct: Привет.</p>
                <p className={styles.block_661}>Correct: Привет, Вася.</p>
                <p className={styles.block_662}>Correct: Привет, это Аня.</p>
                <p className={styles.block_663}>
                  Correct: Привет, Вася, это Аня.
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_4}>
                    Correct: Вася, привет, это Аня.{' '}
                  </span>
                  <span className={styles.text_7}>Explanation: no pause </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_4}>
                    Correct: Вася, привет. Это Аня{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Substantial pause between "Вася,
                  </span>
                </p>
                <p className={styles.block_666}>
                  привет." and "Это Аня." Treat as separate
                </p>
                <p className={styles.block_667}>sentences.</p>
                <p className={styles.block_668}>
                  Addressees should be separated from the rest of the sentence
                  by commas.
                </p>
                <p className={styles.block_669}>Correct: Маша, как дела?</p>
                <p className={styles.block_670}>
                  Correct: Ты меня слышишь, Вова?
                </p>
                <p className={styles.block_228}>
                  Correct: Знаешь, мама, я уже спать хочу.
                </p>
                <p className={styles.block_671}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_672}>Correct: Ok Google</p>
                <p className={styles.block_673}>Incorrect: О'кей Google</p>
                <p className={styles.block_674}>Incorrect: о'кей Google</p>
                <p className={styles.block_675}>Incorrect: Окей Google</p>
                <p className={styles.block_676}>Incorrect: Ok, Google.</p>
                <p className={styles.block_677}>
                  Correct: Ok Google, найди мне Валин номер.
                </p>
                <p className={styles.block_678}>
                  Correct: Ok Google, где находится самое
                </p>
                <p className={styles.block_679}>высокое здание в мире?</p>
                <p className={styles.block_680}>
                  Correct: Ok Google, картины деревьев
                </p>
                <p className={styles.block_681}>
                  Incorrect: Ok Google, картины деревьев.
                </p>
                <p className={styles.block_682}>
                  Explanation: "картины деревьев" is a
                </p>
                <p className={styles.block_683}>
                  fragment, so do not add end punctuation.
                </p>
                <p className={styles.block_684}>
                  Here are some common introductory words and phrases that
                  should be set apart with commas. This is not an exhaustive
                  list.
                </p>
                <p className={styles.block_685}>● без сомнения</p>
                <p className={styles.block_686}>● бывало</p>
                <p className={styles.block_687}>● вероятно</p>
                <p className={styles.block_688}>● видимо</p>
                <p className={styles.block_689}>● видишь (ли)</p>
                <p className={styles.block_690}>● возможно</p>
                <p className={styles.block_691}>● во-первых, во-вторых, etc.</p>
                <p className={styles.block_692}>● впрочем</p>
                <p className={styles.block_693}>● говорят</p>
                <p className={styles.block_694}>● должно быть</p>
                <p className={styles.block_695}>● допустим</p>
                <p className={styles.block_696}>● думается</p>
                <p className={styles.block_697}>● знать</p>
                <p className={styles.block_698}>● значит</p>
                <p className={styles.block_699}>● иначе (говоря)</p>
                <p className={styles.block_700}>● итак</p>
                <p className={styles.block_701}>● кажется</p>
                <p className={styles.block_702}>● к несчастью</p>
                <p className={styles.block_701}>● конечно</p>
                <p className={styles.block_703}>● короче (говоря)</p>
                <p className={styles.block_694}>● к сожалению</p>
                <p className={styles.block_704}>● кстати (сказать)</p>
                <p className={styles.block_705}>● к счастью</p>
                <p className={styles.block_706}>● между прочим</p>
                <p className={styles.block_707}>● может быть</p>
                <p className={styles.block_687}>● наверное</p>
                <p className={styles.block_687}>● наоборот</p>
                <p className={styles.block_708}>● например</p>
                <p className={styles.block_695}>● напротив</p>
                <p className={styles.block_709}>● (одним) словом</p>
                <p className={styles.block_710}>● очевидно</p>
                <p className={styles.block_711}>● по всей вероятности</p>
                <p className={styles.block_712}>● пожалуй</p>
                <p className={styles.block_713}>● пожалуйста</p>
                <p className={styles.block_687}>● положим</p>
                <p className={styles.block_714}>● помнится</p>
                <p className={styles.block_695}>● по-моему</p>
                <p className={styles.block_715}>● по моему мнению</p>
                <p className={styles.block_701}>● понятно</p>
                <p className={styles.block_709}>● понимаешь (ли)</p>
                <p className={styles.block_716}>● правда</p>
                <p className={styles.block_717}>● право</p>
                <p className={styles.block_718}>● признаться</p>
                <p className={styles.block_719}>● признаюсь</p>
                <p className={styles.block_720}>● (само собой) разумеется</p>
                <p className={styles.block_688}>● скажем</p>
                <p className={styles.block_721}>● следовательно</p>
                <p className={styles.block_722}>● собственно (говоря)</p>
                <p className={styles.block_723}>● стало быть</p>
                <p className={styles.block_724}>● строго говоря</p>
                <p className={styles.block_721}>● таким образом</p>
                <p className={styles.block_725}>● так сказать</p>
                <p className={styles.block_726}>● чай</p>
                <p className={styles.block_727}>● чего доброго</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_4}>
                    Correct: Когда ты будешь дома?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Syntactically built as a question, so
                  </span>
                </p>
                <p className={styles.block_421}>
                  punctuate as a question regardless of
                </p>
                <p className={styles.block_731}>intonation.</p>
                <p className={styles.block_732}>
                  <span className={styles.text_4}>Correct: В 3:00 ночи? </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>в три часа ночи </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_733}>
                  Explanation: Intonation suggests it is a
                </p>
                <p className={styles.block_734}>
                  question, so punctuate as a question regardless
                </p>
                <p className={styles.block_735}>of structure.</p>
                <p className={styles.block_736}>
                  <span className={styles.text_4}>
                    Correct: Катя тоже приходит?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Utterance uses question{' '}
                  </span>
                </p>
                <p className={styles.block_731}>intonation.</p>
                <p className={styles.block_736}>
                  <span className={styles.text_4}>
                    Correct: Ты будешь ужинать?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Utterance uses question{' '}
                  </span>
                </p>
                <p className={styles.block_731}>intonation.</p>
                <p className={styles.block_737}>
                  <span className={styles.text_4}>
                    Correct: погода в Иркутске{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_738}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_739}>question.</p>
                <p className={styles.block_740}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_672}>Correct: Заткнись!</p>
                <p className={styles.block_741}>
                  <span className={styles.text_4}>Correct: Ура! </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_4}>Correct: Ура. </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>
                    Correct: Какой ты ленивый.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_4}>
                    Correct: С днём рождения!{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_4}>
                    Correct: Приятного аппетита.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_4}>
                    Correct: У меня пятёрка по геометрии!{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a colon between reported speech verbs like "сказал" and
                  "ответил" and direct quotations.
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>
                    Correct: Она сказала: "Крокодил".{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: All reported speech starts with a
                  </span>
                </p>
                <p className={styles.block_750}>
                  capital letter, even if it cannot be considered as
                </p>
                <p className={styles.block_411}>a full sentence.</p>
                <p className={styles.block_751}>
                  In direct quotations the speaker's phrase, even if it is not a
                  complete sentence, should always begin with a capital letter.
                  Only in the case when the speaker's sentence is cut in the
                  middle by reporter's words, the second part of the speaker's
                  sentence will begin with a lowercase.
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_4}>
                    Correct: Он сказал: "Шоколад".{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: The speaker's quoted phrase is
                  </span>
                </p>
                <p className={styles.block_753}>
                  capitalized although it is not a complete
                </p>
                <p className={styles.block_754}>sentence.</p>
                <p className={styles.block_755}>
                  Correct: "Я завтра приду, - сказала она, -
                </p>
                <p className={styles.block_756}>только утром."</p>
                <p className={styles.block_404}>
                  Explanation: The speaker's quoted sentence is
                </p>
                <p className={styles.block_757}>
                  cut in the middle by the reporter's words, so the
                </p>
                <p className={styles.block_758}>
                  second half of the speaker's sentence begin
                </p>
                <p className={styles.block_759}>with a lowercase.</p>
                <p className={styles.block_760}>
                  If the text inside the quotation marks is a sentence that
                  would normally end with a period, do not put a period inside
                  the quotation marks. If the quotation is at the end of a
                  sentence, put the appropriate sentence-final punctuation after
                  the closing quotation mark. If the quotation is at the
                  beginning or in the middle of a sentence, put a comma and a
                  dash after the closing quotation mark.
                </p>
                <p className={styles.block_761}>
                  Correct: Ваня сказал: "Я устал".
                </p>
                <p className={styles.block_762}>
                  Incorrect: Ваня сказал: "Я устал."
                </p>
                <p className={styles.block_763}>
                  Explanation: No period inside the quotation
                </p>
                <p className={styles.block_764}>
                  marks. Put a period after the quotation.
                </p>
                <p className={styles.block_765}>
                  Incorrect: Ваня сказал: "Я устал.".
                </p>
                <p className={styles.block_766}>
                  Correct: Разве он не сказал: "Я хочу есть"?
                </p>
                <p className={styles.block_767}>
                  Incorrect: Разве он не сказал: "Я хочу есть."?
                </p>
                <p className={styles.block_763}>
                  Explanation: No period inside the quotation
                </p>
                <p className={styles.block_768}>
                  marks. The full sentence that contains the
                </p>
                <p className={styles.block_769}>
                  quote is a question, so put a question mark at
                </p>
                <p className={styles.block_770}>the end of the sentence.</p>
                <p className={styles.block_771}>
                  Correct: Он сказал: "Я обязательно приду", -
                </p>
                <p className={styles.block_763}>
                  Explanation: No period inside the quotation
                </p>
                <p className={styles.block_772}>даже не проверив расписание.</p>
                <p className={styles.block_773}>
                  Incorrect: Он сказал: "Я обязательно приду."
                </p>
                <p className={styles.block_774}>даже не проверив расписание.</p>
                <p className={styles.block_775}>
                  Incorrect: Он сказал: "Я обязательно приду",
                </p>
                <p className={styles.block_774}>даже не проверив расписание.</p>
                <p className={styles.block_776}>
                  marks. The quote is in the middle of a
                </p>
                <p className={styles.block_280}>
                  sentence, so put a comma and a dash after the
                </p>
                <p className={styles.block_777}>quote.</p>
                <p className={styles.block_778}>
                  Correct: "Я обязательно приду", - сказала
                </p>
                <p className={styles.block_779}>Таня.</p>
                <p className={styles.block_780}>
                  If the text inside the quotation marks is a question or
                  exclamation that would normally end with an intonation mark
                  (question mark or exclamation point), put that intonation mark
                  before the closing quotation mark unless a question mark
                  follows the quote. Do not put a period or comma after the
                  closing quotation mark. If the quote is in the middle of a
                  sentence, put a dash after the closing quotation mark.
                </p>
                <p className={styles.block_781}>
                  Correct: Он спросил: "Ты не устала?"
                </p>
                <p className={styles.block_782}>
                  Incorrect: Он спросил: "Ты не устала?".
                </p>
                <p className={styles.block_442}>
                  Incorrect: Он спросил: "Ты не устала".
                </p>
                <p className={styles.block_783}>
                  Explanation: The quote is a question, so put a
                </p>
                <p className={styles.block_784}>
                  question mark inside the quotes. Do not put a
                </p>
                <p className={styles.block_785}>period after the quote.</p>
                <p className={styles.block_786}>
                  Correct: Она ответила: "Хватит!"
                </p>
                <p className={styles.block_787}>
                  Incorrect: Она ответила: "Хватит!".
                </p>
                <p className={styles.block_788}>
                  Explanation: The quote is an exclamation, so
                </p>
                <p className={styles.block_789}>
                  put an exclamation point inside the quotes. Do
                </p>
                <p className={styles.block_790}>
                  not put a period after the quote.
                </p>
                <p className={styles.block_791}>
                  Incorrect: Она ответила: "Хватит".
                </p>
                <p className={styles.block_792}>
                  Correct: Верно ли, что она воскликнула:
                </p>
                <p className={styles.block_416}>"Давай"?</p>
                <p className={styles.block_793}>
                  Incorrect: Верно ли, что она воскликнула:
                </p>
                <p className={styles.block_794}>"Давай!"?</p>
                <p className={styles.block_793}>
                  Incorrect: Верно ли, что она воскликнула:
                </p>
                <p className={styles.block_795}>"Давай!"</p>
                <p className={styles.block_796}>
                  Explanation: The quote is an exclamation, but it
                </p>
                <p className={styles.block_797}>
                  comes at the end of a question, so it is
                </p>
                <p className={styles.block_789}>
                  followed by a question mark. Therefore, do not
                </p>
                <p className={styles.block_798}>use an exclamation point.</p>
                <p className={styles.block_799}>
                  Correct: Правильно ли я понял, что она
                </p>
                <p className={styles.block_800}>
                  спросила: "Сколько будет 2 х 2"?
                </p>
                <p className={styles.block_801}>
                  Incorrect: Правильно ли я понял, что она
                </p>
                <p className={styles.block_802}>
                  спросила: "Сколько будет 2 х 2?"
                </p>
                <p className={styles.block_801}>
                  Incorrect: Правильно ли я понял, что она
                </p>
                <p className={styles.block_803}>
                  спросила: "Сколько будет 2 х 2?"?
                </p>
                <p className={styles.block_804}>
                  Explanation: The quote is a question, but the
                </p>
                <p className={styles.block_805}>
                  sentence it is part of is also a question, so the
                </p>
                <p className={styles.block_806}>
                  sentence must end with a question mark.
                </p>
                <p className={styles.block_584}>
                  Therefore, do not put a question mark inside
                </p>
                <p className={styles.block_807}>the quotes.</p>
                <p className={styles.block_808}>
                  Correct: "Мама дома?" - спросил папа.
                </p>
                <p className={styles.block_809}>
                  Incorrect: "Мама дома?", - спросил папа.
                </p>
                <p className={styles.block_810}>
                  Incorrect: "Мама дома", - спросил папа.
                </p>
                <p className={styles.block_783}>
                  Explanation: The quote is a question, so put a
                </p>
                <p className={styles.block_784}>
                  question mark inside the quotes. Do not put a
                </p>
                <p className={styles.block_811}>
                  comma after the quote, but do put a dash.
                </p>
                <p className={styles.block_812}>
                  Correct: "Ура!" - воскликнула Таня.
                </p>
                <p className={styles.block_813}>
                  Incorrect: "Ура!", - воскликнула Таня.
                </p>
                <p className={styles.block_814}>
                  Incorrect: "Ура", - воскликнула Таня.
                </p>
                <p className={styles.block_815}>
                  Explanation: If the quote is spoken with marked
                </p>
                <p className={styles.block_816}>
                  enthusiasm, it should be transcribed with an
                </p>
                <p className={styles.block_817}>
                  exclamation point inside the quotes. Do not put
                </p>
                <p className={styles.block_818}>
                  a comma after the quote, but do put a dash.
                </p>
                <p className={styles.block_819}>
                  Do not use quotation marks for indirect quotes. Instead, use a
                  comma. Use syntax, context, and intonation to determine
                  whether a quote is direct or indirect.
                </p>
                <p className={styles.block_820}>
                  Correct: Дети сказали, что хотят есть.
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_4}>
                    Correct: Она говорит, там вкусный кофе.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Intonation implies indirect quote.
                  </span>
                </p>
                <p className={styles.block_821}>
                  Even though this is not the standard syntax for
                </p>
                <p className={styles.block_458}>
                  indirect quotes, this should be treated as one.
                </p>
                <p className={styles.block_822}>
                  <span className={styles.text_4}>
                    Correct: Она сказала: "Там вкусный кофе".{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Intonation implies direct quote.
                  </span>
                </p>
                <p className={styles.block_823}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_824}>
                  <span className={styles.text_4}>
                    Correct: Сообщение: Как дела?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Quotative voice actions include
                  </span>
                </p>
                <p className={styles.block_825}>
                  text messages, emails, translation queries, and
                </p>
                <p className={styles.block_826}>
                  any other commands that require the phone to
                </p>
                <p className={styles.block_827}>
                  use a verbatim quote from the speaker.
                </p>
                <p className={styles.block_828}>
                  Correct: Перевести на французский: Как
                </p>
                <p className={styles.block_829}>дела?</p>
                <p className={styles.block_830}>
                  Explanation: The quote follows the command,
                </p>
                <p className={styles.block_831}>
                  so use a colon and omit quotation marks.
                </p>
                <p className={styles.block_832}>
                  Correct: Как сказать "Как тебя зовут?"
                </p>
                <p className={styles.block_833}>по-французски?</p>
                <p className={styles.block_834}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_835}>
                  sentence, so use quotation marks and omit
                </p>
                <p className={styles.block_836}>colon.</p>
                <p className={styles.block_837}>
                  Correct: Перевести фразу "Меня зовут
                </p>
                <p className={styles.block_838}>Маша" на испанский.</p>
                <p className={styles.block_839}>
                  Incorrect: Перевести фразу "Меня зовут
                </p>
                <p className={styles.block_840}>Маша." на испанский.</p>
                <p className={styles.block_841}>
                  Explanation: no period at the end of a quote
                </p>
                <p className={styles.block_842}>
                  Correct: Скажи "Привет, мама" через 3
                </p>
                <p className={styles.block_364}>секунды.</p>
                <p className={styles.block_843}>
                  Correct: Напиши Маше "Я тебя люблю" и
                </p>
                <p className={styles.block_844}>отправь.</p>
                <p className={styles.block_845}>
                  <span className={styles.text_4}>
                    Correct: "Я тебя люблю" по-французски{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Quotes at the beginning of the
                  </span>
                </p>
                <p className={styles.block_846}>
                  sentence should use quotation marks as well.
                </p>
                <p className={styles.block_847}>
                  No period at the end of a quote.
                </p>
                <p className={styles.block_848}>
                  Correct: Я тебя люблю. Как это сказать
                </p>
                <p className={styles.block_413}>по-немецки?</p>
                <p className={styles.block_849}>
                  Incorrect: "Я тебя люблю". Как это сказать
                </p>
                <p className={styles.block_850}>по-немецки?</p>
                <p className={styles.block_851}>
                  Explanation: Here the translation query and the
                </p>
                <p className={styles.block_852}>
                  text to be translated are in separate sentences,
                </p>
                <p className={styles.block_853}>
                  so format them as separate sentences.
                </p>
                <p className={styles.block_854}>
                  Correct: Как будет по-японски: Я люблю
                </p>
                <p className={styles.block_855}>кофе.</p>
                <p className={styles.block_856}>
                  Correct: На адрес naprimer@gmail.ru: Как у
                </p>
                <p className={styles.block_857}>тебя прошёл день?</p>
                <p className={styles.block_858}>
                  Correct: Написать naprimer@gmail.ru и
                </p>
                <p className={styles.block_859}>
                  сказать: Не забудь купить масла.
                </p>
                <p className={styles.block_860}>
                  Correct: Отправь Андрею эсэмэску с
                </p>
                <p className={styles.block_861}>текстом: До завтра.</p>
                <p className={styles.block_862}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_863}>
                  Correct: Поставить будильник на 6:00:
                </p>
                <p className={styles.block_864}>раннее совещание.</p>
                <p className={styles.block_865}>
                  Incorrect: Поставить будильник на 6:00:
                </p>
                <p className={styles.block_866}>Раннее совещание.</p>
                <p className={styles.block_867}>
                  Correct: Послать Пете SMS: Мастер придёт в
                </p>
                <p className={styles.block_868}>среду.</p>
                <p className={styles.block_869}>
                  Incorrect: Послать Пете SMS: мастер придёт
                </p>
                <p className={styles.block_870}>в среду.</p>
                <p className={styles.block_871}>
                  Correct: Напиши Хане, что я буду через 5
                </p>
                <p className={styles.block_435}>минут.</p>
                <p className={styles.block_872}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_4}>
                    Correct: Переведи "привет" на французский.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Do not capitalize "привет" even
                  </span>
                </p>
                <p className={styles.block_573}>
                  though it can stand alone as a sentence in
                </p>
                <p className={styles.block_874}>other contexts.</p>
                <p className={styles.block_875}>Correct: Привет.</p>
                <p className={styles.block_876}>
                  Correct: Перевести на испанский: уйди.
                </p>
                <p className={styles.block_877}>Correct: Уйди.</p>
                <p className={styles.block_878}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_879}>
                  Correct: Что значит перепонка?
                </p>
                <p className={styles.block_880}>
                  Incorrect: Что значит "перепонка"?
                </p>
                <p className={styles.block_576}>
                  Correct: значение слова абракадабра
                </p>
                <p className={styles.block_881}>
                  Incorrect: значение слова "абракадабра"
                </p>
                <p className={styles.block_882}>
                  Correct: Он три раза повторил слово
                </p>
                <p className={styles.block_883}>баклажан.</p>
                <p className={styles.block_884}>
                  Incorrect: Он три раза повторил слово
                </p>
                <p className={styles.block_885}>"баклажан".</p>
                <p className={styles.block_886}>
                  Incorrect: Он три раза повторил слово:
                </p>
                <p className={styles.block_885}>"баклажан".</p>
                <p className={styles.block_887}>
                  Explanation: Even though this is similar to a
                </p>
                <p className={styles.block_888}>
                  direct quote, the phrasing makes it clear that
                </p>
                <p className={styles.block_889}>
                  "баклажан" is a metalinguistic reference to a
                </p>
                <p className={styles.block_890}>
                  word rather than a direct quote.
                </p>
                <p className={styles.block_891}>Correct: Анна - палиндром.</p>
                <p className={styles.block_892}>
                  Incorrect: "Анна" - палиндром.
                </p>
                <p className={styles.block_893}>
                  Correct: Моя любимая скороговорка - Карл у
                </p>
                <p className={styles.block_894}>Клары украл кораллы.</p>
                <p className={styles.block_895}>
                  Incorrect: Моя любимая скороговорка -
                </p>
                <p className={styles.block_896}>
                  "Карл у Клары украл кораллы".
                </p>
                <p className={styles.block_897}>
                  Explanation: metalinguistic use of a phrase
                </p>
                <p className={styles.block_898}>
                  <span className={styles.text_4}>
                    Correct: "майка" по-английски{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: However, do use quotation marks around words
                    and phrases to be translated.
                  </span>
                </p>
                <p className={styles.block_899}></p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the Russian letters and the letters a through z,
                  you should not use any other symbol than: 0-9
                  äáéèëñóúÄÁÉÈËÑÓÚ23,?!~^\'"_°:.()&lt;&gt;{}
                  []√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_902}>
                  Transcribe apostrophes that are part of a word's normal
                  spelling.
                </p>
                <p className={styles.block_903}>Correct: Жанна Д'Арк</p>
                <p className={styles.block_904}>Correct: Д'Артаньян</p>
                <p className={styles.block_905}>
                  Use the hyphen symbol "-" for both the hyphen (дефис) and the
                  dash (тире). When it is used as a dash, include spaces around
                  it.
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_4}>Correct: что-нибудь </span>
                  <span className={styles.text_7}>Explanation: hyphen </span>
                </p>
                <p className={styles.block_907}>
                  Correct: Кит - это водоплавающее
                </p>
                <p className={styles.block_908}>млекопитающее.</p>
                <p className={styles.block_524}>
                  Explanation: dash (use the hyphen symbol with
                </p>
                <p className={styles.block_909}>spaces around it)</p>
                <p className={styles.block_910}>
                  Use a dash when a word or phrase is followed by a predicate
                  which functions somewhat like a definition. Such definitions
                  are sometimes preceded by the word "это"; in other cases, the
                  word "это" could be inserted without changing the meaning. In
                  some cases, the hyphen stands in for the verb "есть".
                </p>
                <p className={styles.block_911}>
                  Correct: Оптика - это раздел физики.
                </p>
                <p className={styles.block_912}>
                  Correct: Оптика - раздел физики.
                </p>
                <p className={styles.block_437}>
                  Correct: Оптика есть раздел физики.
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_4}>
                    Correct: Шнауцер - это кошка или собака?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: This rule applies in questions, too.
                  </span>
                </p>
                <p className={styles.block_914}>
                  Correct: Шнауцер - кошка или собака?
                </p>
                <p className={styles.block_915}>
                  <span className={styles.text_4}>
                    Correct: Кит - не рыба.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: This rule also applies in negations.
                  </span>
                </p>
                <p className={styles.block_916}>Correct: Дельфин - рыба?</p>
                <p className={styles.block_917}>Correct: Он - друг или враг?</p>
                <p className={styles.block_918}>
                  <span className={styles.text_4}>
                    Correct: Кто твой учитель?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Do not use a dash after{' '}
                  </span>
                </p>
                <p className={styles.block_919}>
                  interrogative pronouns such as "кто" and "что".
                </p>
                <p className={styles.block_920}>
                  Correct: Мне нужно только одно - чай с
                </p>
                <p className={styles.block_921}>шоколадкой.</p>
                <p className={styles.block_922}>
                  Explanation: If the phrase "а именно" could be
                </p>
                <p className={styles.block_923}>
                  inserted without changing the meaning, use a
                </p>
                <p className={styles.block_924}>hyphen.</p>
                <p className={styles.block_925}>
                  Use a dash when some words are elided (absent but implied) in
                  the middle of a sentence (not at the beginning or end of a
                  clause). This can happen when the same words are present in a
                  different part of the sentence or when the omitted words are
                  obvious and can be inferred from context.
                </p>
                <p className={styles.block_926}>
                  Correct: Я играю на фортепиано, а он - на
                </p>
                <p className={styles.block_416}>скрипке.</p>
                <p className={styles.block_513}>
                  Explanation: The word "играет" is absent but
                </p>
                <p className={styles.block_927}>implied.</p>
                <p className={styles.block_928}>
                  <span className={styles.text_4}>
                    Correct: Ты заплатишь мне, или я - тебе?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: The word "заплачу" is absent but
                  </span>
                </p>
                <p className={styles.block_929}>implied.</p>
                <p className={styles.block_930}>
                  <span className={styles.text_4}>
                    Correct: Васе - котлету, а кошке - молока.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: The word "дать" (or one of its
                  </span>
                </p>
                <p className={styles.block_931}>
                  other forms) is absent but implied in this
                </p>
                <p className={styles.block_754}>sentence.</p>
                <p className={styles.block_932}>
                  Correct: Знание законов не желательно -
                </p>
                <p className={styles.block_933}>обязательно.</p>
                <p className={styles.block_934}>
                  Explanation: Here the dash replaces the
                </p>
                <p className={styles.block_935}>omitted "а".</p>
                <p className={styles.block_936}>
                  Correct: Ему нравится кататься на лыжах, и
                </p>
                <p className={styles.block_937}>мне тоже нравится.</p>
                <p className={styles.block_938}>
                  Explanation: Here the phrase "кататься на
                </p>
                <p className={styles.block_939}>
                  лыжах" is absent but implied, but there is
                </p>
                <p className={styles.block_940}>
                  nowhere to put a dash because if this phrase
                </p>
                <p className={styles.block_941}>
                  was present, it would be at the end of the
                </p>
                <p className={styles.block_754}>sentence.</p>
                <p className={styles.block_942}>
                  <span className={styles.text_4}>
                    Correct: Он что-то споёт, но я не знаю, что.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Here the phrase "он споёт" is{' '}
                  </span>
                </p>
                <p className={styles.block_821}>
                  absent but implied, but there is nowhere to put
                </p>
                <p className={styles.block_943}>
                  a dash because if this phrase was present, it
                </p>
                <p className={styles.block_944}>
                  would be at the end of the sentence.
                </p>
                <p className={styles.block_945}>
                  Correct: Я не знаю, что, но что-нибудь съесть
                </p>
                <p className={styles.block_779}>надо.</p>
                <p className={styles.block_946}>
                  Explanation: Here the word "съесть" is absent
                </p>
                <p className={styles.block_947}>
                  but implied after "что". Even though this is in
                </p>
                <p className={styles.block_948}>
                  the middle of a sentence, it is at the end of a
                </p>
                <p className={styles.block_949}>
                  clause, so do not use a dash.
                </p>
                <p className={styles.block_950}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a dash after the
                  single word or phrase.
                </p>
                <p className={styles.block_951}>
                  Correct: Таня - она талантливая, но никак не
                </p>
                <p className={styles.block_952}>может сосредоточиться.</p>
                <p className={styles.block_953}>
                  Explanation: "Таня" is the topic of the sentence,
                </p>
                <p className={styles.block_954}>
                  and the rest of the sentence is the comment.
                </p>
                <p className={styles.block_955}>Put a dash after the topic.</p>
                <p className={styles.block_956}>
                  Correct: И Даша, и Саша, и Маша - все пошли
                </p>
                <p className={styles.block_957}>в кино.</p>
                <p className={styles.block_958}>
                  Explanation: "И Даша, и Саша, и Маша" is the
                </p>
                <p className={styles.block_959}>
                  topic of the sentence, and "все пошли в кино"
                </p>
                <p className={styles.block_960}>
                  is the comment. Put a dash after the topic.
                </p>
                <p className={styles.block_961}>
                  Use a dash in implied conditionals of the following form,
                  without a word like "если".
                </p>
                <p className={styles.block_962}>
                  Correct: Любишь кататься - люби и саночки
                </p>
                <p className={styles.block_499}>возить.</p>
                <p className={styles.block_922}>
                  Explanation: This is an implied conditional: the
                </p>
                <p className={styles.block_963}>
                  full meaning is roughly "Если любишь
                </p>
                <p className={styles.block_964}>
                  кататься, то люби и саночки возить".
                </p>
                <p className={styles.block_832}>
                  Correct: Хочешь обедать - иди с нами.
                </p>
                <p className={styles.block_965}>
                  When a list is used to clarify a word or concept that comes
                  before it, use dashes before and after the list.
                </p>
                <p className={styles.block_966}>
                  Correct: Я всех своих дочерей - Машу, Сашу
                </p>
                <p className={styles.block_653}>и Дашу - очень люблю.</p>
                <p className={styles.block_967}>
                  Correct: Я люблю всех своих дочерей -
                </p>
                <p className={styles.block_968}>Машу, Сашу и Дашу.</p>
                <p className={styles.block_969}>
                  Explanation: In this case the list comes at the
                </p>
                <p className={styles.block_970}>
                  end of a sentence, so use a dash only before
                </p>
                <p className={styles.block_971}>the list.</p>
                <p className={styles.block_972}>
                  Use a dash between nouns that together describe a concept or a
                  relationship, as in the following examples.
                </p>
                <p className={styles.block_973}>
                  Correct: отношения учитель - ученик
                </p>
                <p className={styles.block_974}>
                  Correct: проблема человек - общество -
                </p>
                <p className={styles.block_975}>природа</p>
                <p className={styles.block_872}>
                  Use a hyphen in words and phrases typically written with a
                  hyphen. Check the reference dictionary for hyphenation.
                </p>
                <p className={styles.block_976}>Correct: Спой что-нибудь.</p>
                <p className={styles.block_977}>
                  Correct: Кто-то сидит в пруду.
                </p>
                <p className={styles.block_978}>
                  Correct: Мы-то не будем вас избегать.
                </p>
                <p className={styles.block_979}>
                  Correct: Мы же не будем вас избегать.
                </p>
                <p className={styles.block_980}>
                  Incorrect: Мы-же не будем вас избегать.
                </p>
                <p className={styles.block_981}>
                  Explanation: Do not use hyphens in contexts
                </p>
                <p className={styles.block_982}>
                  where they are not generally used.
                </p>
                <p className={styles.block_983}>
                  Correct: Здесь живут раки-отшельники.
                </p>
                <p className={styles.block_984}>Correct: Ростов-на-Дону</p>
                <p className={styles.block_985}>Correct: Рио-де-Жанейро</p>
                <p className={styles.block_986}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_987}>
                  Correct: truth: Завтра будет матч
                </p>
                <p className={styles.block_988}>Спартак-Зенит.</p>
                <p className={styles.block_989}>
                  Include a hyphen between locations in itineraries for flights,
                  train trips, etc.
                </p>
                <p className={styles.block_990}>Correct: рейс Москва-Париж</p>
                <p className={styles.block_991}>
                  Incorrect: рейс Москва - Париж
                </p>
                <p className={styles.block_992}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>рейс москва париж </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_993}>
                  Correct: Поезд Москва-Щёлково
                </p>
                <p className={styles.block_568}>отправляется через 5 минут.</p>
                <p className={styles.block_994}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>поезд москва щёлково </span>
                </p>
                <p className={styles.block_995}>
                  <span className={styles.text_1}>
                    отправляется через пять минут{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_998}>
                  Correct: Я иду домой {`{точка}`}
                </p>
                <p className={styles.block_999}>Incorrect: Я иду домой.</p>
                <p className={styles.block_1000}>
                  Incorrect: Я иду домой точка
                </p>
                <p className={styles.block_1001}>
                  Incorrect: Я иду домой точка.
                </p>
                <p className={styles.block_1002}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>я иду домой точка </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1003}>
                  Correct: Я еду домой {`{запятая}`} буду через
                </p>
                <p className={styles.block_609}>полчаса.</p>
                <p className={styles.block_1004}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    я еду домой запятая буду{' '}
                  </span>
                </p>
                <p className={styles.block_1005}>
                  <span className={styles.text_1}>через полчаса </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1006}>
                  Incorrect: Я еду домой запятая буду через
                </p>
                <p className={styles.block_611}>полчаса.</p>
                <p className={styles.block_1007}>
                  Incorrect: Я еду домой, буду через полчаса.
                </p>
                <p className={styles.block_1008}>
                  Correct: Как тебя зовут {`{знак вопроса}`}
                </p>
                <p className={styles.block_1009}>
                  Incorrect: Как тебя зовут знак вопроса
                </p>
                <p className={styles.block_1010}>Incorrect: Как тебя зовут?</p>
                <p className={styles.block_1011}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    как тебя зовут знак вопроса{' '}
                  </span>
                </p>
                <p className={styles.block_1012}>"</p>
                <p className={styles.block_1013}>
                  Correct: Ты кто {`{вопросительный знак}`}
                </p>
                <p className={styles.block_1014}>Incorrect: Ты кто?</p>
                <p className={styles.block_1015}>
                  Incorrect: Ты кто вопросительный знак
                </p>
                <p className={styles.block_1016}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ты кто вопросительный знак{' '}
                  </span>
                </p>
                <p className={styles.block_1012}>"</p>
                <p className={styles.block_1017}>
                  Correct: С днём рождения {`{восклицание}`}
                </p>
                <p className={styles.block_1018}>Incorrect: С днём рождения!</p>
                <p className={styles.block_1019}>
                  Incorrect: С днём рождения восклицание
                </p>
                <p className={styles.block_1020}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>с днём рождения </span>
                </p>
                <p className={styles.block_1021}>
                  <span className={styles.text_1}>восклицание </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1022}>
                  Correct: Ни за что {`{восклицательный знак}`}
                </p>
                <p className={styles.block_1023}>
                  Incorrect: Ни за что восклицательный знак
                </p>
                <p className={styles.block_1024}>Incorrect: Ни за что!</p>
                <p className={styles.block_1025}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ни за что восклицательный{' '}
                  </span>
                </p>
                <p className={styles.block_1026}>
                  <span className={styles.text_1}>знак </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1027}>
                  Correct: Молодец {`{знак восклицания}`}
                </p>
                <p className={styles.block_1028}>
                  Incorrect: Молодец знак восклицания
                </p>
                <p className={styles.block_1029}>Incorrect: Молодец!</p>
                <p className={styles.block_1030}>
                  Correct: Ладно {`{многоточие}`}
                </p>
                <p className={styles.block_268}>Incorrect: Ладно многоточие</p>
                <p className={styles.block_1031}>Incorrect: Ладно...</p>
                <p className={styles.block_1032}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ладно многоточие </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1033}>
                  Correct: У тебя есть {`{двоеточие}`} волк
                </p>
                <p className={styles.block_1034}>
                  {`{запятая} коза {запятая}`} капуста.
                </p>
                <p className={styles.block_1035}>
                  Incorrect: У тебя есть: волк, коза, капуста.
                </p>
                <p className={styles.block_1036}>
                  Incorrect: У тебя есть двоеточие волк
                </p>
                <p className={styles.block_1037}>
                  запятая коза запятая капуста.
                </p>
                <p className={styles.block_1038}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    у тебя есть двоеточие волк{' '}
                  </span>
                </p>
                <p className={styles.block_1039}>
                  <span className={styles.text_1}>
                    запятая коза запятая капуста{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1040}>
                  Correct: Тут надо поставить {`{тире}.`}
                </p>
                <p className={styles.block_1041}>
                  Incorrect: Тут надо поставить - .
                </p>
                <p className={styles.block_1004}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    тут надо поставить тире{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1042}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_1043}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_1044}>Correct: {`{двоеточие}`}</p>
                <p className={styles.block_1045}>Incorrect: :</p>
                <p className={styles.block_1046}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_1047}>
                  Correct: Ты где {`{вопросительный знак}`} Пора
                </p>
                <p className={styles.block_1048}>ехать точка Я уже выезжаю.</p>
                <p className={styles.block_1049}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ты где вопросительный знак{' '}
                  </span>
                </p>
                <p className={styles.block_1050}>
                  <span className={styles.text_1}>
                    пора ехать точка я уже выезжаю{' '}
                  </span>
                  <span className={styles.text_}>" </span>
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
