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
            <PageContentHeader currentPage="longform Macedonian" />
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
                <p className={styles.block_366}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_367}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_4}>
                    Correct: Тој денес работи од дома.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Се состои од подметот "тој" и{' '}
                  </span>
                </p>
                <p className={styles.block_369}>прирокот "работи".</p>
                <p className={styles.block_370}>
                  <span className={styles.text_4}>
                    Correct: И јас дури не сакам да дојдам.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Се состои од подметот "јас" и{' '}
                  </span>
                </p>
                <p className={styles.block_371}>
                  прирокот "дојдам". Иако почнува со
                </p>
                <p className={styles.block_372}>
                  сврзник, изразот звучи како целосен изказ,
                </p>
                <p className={styles.block_373}>
                  а не како сврзник и дел од поголема
                </p>
                <p className={styles.block_374}>реченица.</p>
                <p className={styles.block_375}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_4}>
                    Correct: За кога зборуваш? За соседот.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Реченицата "за соседот" не е{' '}
                  </span>
                </p>
                <p className={styles.block_377}>
                  целосна реченица затоа што е без прирок,
                </p>
                <p className={styles.block_378}>
                  но треба да се транскрибира како целосна
                </p>
                <p className={styles.block_379}>
                  (со голема почетна буква и точка на крајот)
                </p>
                <p className={styles.block_380}>
                  затоа што е природен одговор на
                </p>
                <p className={styles.block_381}>
                  прашањето "За кога зборуваш?".
                </p>
                <p className={styles.block_382}>Correct: за соседот</p>
                <p className={styles.block_383}>Incorrect: За соседот.</p>
                <p className={styles.block_384}>
                  Explanation: Овде "за соседот" не е одговор
                </p>
                <p className={styles.block_289}>
                  на некое прашање и не е целосна реченица,
                </p>
                <p className={styles.block_385}>
                  така што нема голема почетна буква или
                </p>
                <p className={styles.block_386}>точка на крајот.</p>
                <p className={styles.block_387}>Correct: слика со кучиња</p>
                <p className={styles.block_388}>
                  Explanation: Овој пример нема подмет, нема
                </p>
                <p className={styles.block_389}>Incorrect: Слика со кучиња.</p>
                <p className={styles.block_390}>
                  конјугиран глагол, звучи неприродно и не е
                </p>
                <p className={styles.block_391}>
                  одговор на прашање. Најверојатно е
                </p>
                <p className={styles.block_322}>
                  пребарување на интернет. Не постапувајте
                </p>
                <p className={styles.block_392}>
                  кон него како целосна реченица,
                </p>
                <p className={styles.block_393}>
                  транскрибирајте го без точка или
                </p>
                <p className={styles.block_394}>
                  прашалник на крајот и не го пишувајте со
                </p>
                <p className={styles.block_395}>голема буква.</p>
                <p className={styles.block_396}>Correct: Утре во 9:00?</p>
                <p className={styles.block_397}>
                  Explanation: Иако се испуштени подметот и
                </p>
                <p className={styles.block_398}>Incorrect: утре во 9:00</p>
                <p className={styles.block_399}>
                  прирокот, оваа фраза треба да се
                </p>
                <p className={styles.block_400}>
                  транскрибира како целосна реченица
                </p>
                <p className={styles.block_289}>
                  (голема почетна буква "У" и точка на крајот)
                </p>
                <p className={styles.block_401}>
                  затоа што на овој начин природно се
                </p>
                <p className={styles.block_402}>
                  формулира прашање во македонскиот
                </p>
                <p className={styles.block_403}>јазик.</p>
                <p className={styles.block_404}>Correct: времето во Прилеп</p>
                <p className={styles.block_405}>
                  Explanation: Вака се бара информација, но би
                </p>
                <p className={styles.block_406}>
                  Incorrect: Времето во Прилеп?
                </p>
                <p className={styles.block_407}>
                  го толкувале како дел од реченица, затоа
                </p>
                <p className={styles.block_408}>
                  што веројатно е пребарување на интернет
                </p>
                <p className={styles.block_409}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_410}>Correct: Проклетство.</p>
                <p className={styles.block_411}>Incorrect: проклетство</p>
                <p className={styles.block_412}>
                  Explanation: Извици како "проклетство", "аи",
                </p>
                <p className={styles.block_413}>
                  "леле", "о" итн. можат да стојат сами како
                </p>
                <p className={styles.block_414}>
                  реченица и со правилна интерпункција.
                </p>
                <p className={styles.block_415}>
                  Затоа првата буква е голема и има точка на
                </p>
                <p className={styles.block_416}>крајот.</p>
                <p className={styles.block_417}>Correct: Здраво.</p>
                <p className={styles.block_418}>
                  Explanation: Поздравувањата и збогувањата
                </p>
                <p className={styles.block_419}>Incorrect: здраво</p>
                <p className={styles.block_420}>
                  како "здраво", "чао" итн., исто така, можат да
                </p>
                <p className={styles.block_421}>
                  се употребат како реченица со правилна
                </p>
                <p className={styles.block_402}>
                  интерпункција. Поради тоа правилната
                </p>
                <p className={styles.block_422}>
                  транскрипција на поздравот "здраво" е со
                </p>
                <p className={styles.block_423}>
                  голема почетна буква и точка на крајот.
                </p>
                <p className={styles.block_424}>Correct: Секако. Чао.</p>
                <p className={styles.block_425}>
                  Explanation: Двата збора, прилогот "секако"
                </p>
                <p className={styles.block_426}>Incorrect: Секако, чао.</p>
                <p className={styles.block_427}>
                  и збогувањето "чао" со долга пауза помеѓу
                </p>
                <p className={styles.block_428}>
                  нив, се третираат како одделни реченици и
                </p>
                <p className={styles.block_429}>
                  се користи соодветна интерпункција и
                </p>
                <p className={styles.block_430}>голема почетна буква.</p>
                <p className={styles.block_431}>
                  Correct: Поздрав до мојот најдобар другар.
                </p>
                <p className={styles.block_432}>
                  Explanation: "Поздрав" се третира како
                </p>
                <p className={styles.block_433}>
                  Incorrect: Поздрав. До мојот најдобар
                </p>
                <p className={styles.block_434}>другар.</p>
                <p className={styles.block_435}>
                  реченица кога е самостојно употребен, но
                </p>
                <p className={styles.block_436}>
                  овој случај не е, и затоа правилна
                </p>
                <p className={styles.block_437}>
                  транскрипција би била без точка после
                </p>
                <p className={styles.block_438}>"поздрав".</p>
                <p className={styles.block_439}>
                  Below are some examples of common interjections.
                </p>
                <p className={styles.block_440}>● Наздравје</p>
                <p className={styles.block_441}>● Честитки</p>
                <p className={styles.block_442}>● Уф</p>
                <p className={styles.block_443}>● хаха</p>
                <p className={styles.block_444}>● Еј</p>
                <p className={styles.block_445}>● Извини</p>
                <p className={styles.block_446}>● О, не</p>
                <p className={styles.block_447}>● О, Господе</p>
                <p className={styles.block_448}>● Леле</p>
                <p className={styles.block_449}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_450}>
                  Correct: како да испечеш компири
                </p>
                <p className={styles.block_451}>
                  Incorrect: Како да испечеш компири.
                </p>
                <p className={styles.block_452}>
                  Explanation: Оваа фраза е наменета за
                </p>
                <p className={styles.block_453}>
                  пребарување на интернет, така што не ја
                </p>
                <p className={styles.block_454}>
                  пишувајте со голема почетна буква "к" и не
                </p>
                <p className={styles.block_455}>
                  додавајте интерпункциски знаци на крајот.
                </p>
                <p className={styles.block_456}>Correct: слики од Шпанија</p>
                <p className={styles.block_457}>
                  Explanation: И оваа фраза е наменета за
                </p>
                <p className={styles.block_458}>Incorrect: Слики од Шпанија.</p>
                <p className={styles.block_459}>
                  пребарување на интернет, така што не ја
                </p>
                <p className={styles.block_454}>
                  пишувајте со голема почетна буква "с" и не
                </p>
                <p className={styles.block_455}>
                  додавајте интерпункциски знаци на крајот.
                </p>
                <p className={styles.block_460}>
                  Но, "Шпанија" мора да биде со голема
                </p>
                <p className={styles.block_461}>
                  почетна буква затоа што е сопствена имека
                </p>
                <p className={styles.block_462}>(име на држава).</p>
                <p className={styles.block_463}>
                  Correct: најпознати македонски актери во
                </p>
                <p className={styles.block_452}>
                  Explanation: Оваа фраза е наменета за
                </p>
                <p className={styles.block_464}>Европа</p>
                <p className={styles.block_465}>
                  Incorrect: Најпознати македонски актери во
                </p>
                <p className={styles.block_466}>Европа.</p>
                <p className={styles.block_467}>
                  пребарување на интернет, така што со
                </p>
                <p className={styles.block_468}>
                  голема почетна буква треба да биде само
                </p>
                <p className={styles.block_469}>
                  "Европа" затоа што е сопствена именка.
                </p>
                <p className={styles.block_470}>
                  Correct: филмографија на Милчо Манчевски
                </p>
                <p className={styles.block_471}>
                  Incorrect: Филмографија на Милчо
                </p>
                <p className={styles.block_472}>Манчевски.</p>
                <p className={styles.block_452}>
                  Explanation: Оваа фраза е наменета за
                </p>
                <p className={styles.block_473}>
                  пребарување на интернет, така што со
                </p>
                <p className={styles.block_474}>
                  голема почетна буква треба да бидат
                </p>
                <p className={styles.block_475}>
                  "Милчо" и "Манчевски" затоа што се
                </p>
                <p className={styles.block_476}>сопствени имиња.</p>
                <p className={styles.block_477}>
                  Correct: Господарот на прстените Светот на
                </p>
                <p className={styles.block_478}>
                  Јура Осуммината на Оушн Воли филмско
                </p>
                <p className={styles.block_479}>студио</p>
                <p className={styles.block_480}>
                  Incorrect: Господарот на прстените Светот
                </p>
                <p className={styles.block_481}>
                  на Јура Осуммината на Оушн Воли филмско
                </p>
                <p className={styles.block_482}>студио.</p>
                <p className={styles.block_483}>
                  Incorrect: Господарот на прстените, Светот
                </p>
                <p className={styles.block_484}>
                  на Јура, Осуммината на Оушн, Воли
                </p>
                <p className={styles.block_485}>филмско студио.</p>
                <p className={styles.block_486}>
                  Incorrect: Господарот на прстените. Светот
                </p>
                <p className={styles.block_487}>
                  на Јура. Осуммината на Оушн. Воли
                </p>
                <p className={styles.block_485}>филмско студио.</p>
                <p className={styles.block_488}>
                  Explanation: Кога насловот на филмовите е
                </p>
                <p className={styles.block_489}>
                  пребарување на интернет ("Господарот на
                </p>
                <p className={styles.block_490}>
                  прстените", "Светот на Јура", "Осуммината
                </p>
                <p className={styles.block_491}>
                  на Оушн", "Воли") тогаш треба да бидат
                </p>
                <p className={styles.block_492}>
                  правилно напишани со голема буква исто
                </p>
                <p className={styles.block_493}>
                  како и името на студиото "Воли", но
                </p>
                <p className={styles.block_494}>
                  "филмско студио" треба да биде напишано
                </p>
                <p className={styles.block_495}>
                  без голема почетна буква и без точка на
                </p>
                <p className={styles.block_496}>крајот.</p>
                <p className={styles.block_497}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_498}>
                  Correct: Што мислиш? Не е како да
                </p>
                <p className={styles.block_499}>
                  Incorrect: Што мислиш? Не е како да.
                </p>
                <p className={styles.block_360}>
                  Explanation: "Не е како да" е нецелосна
                </p>
                <p className={styles.block_500}>
                  реченица и јасно е дека е преполовена. Но
                </p>
                <p className={styles.block_501}>
                  бидејќи е почеток на реченица се пишува со
                </p>
                <p className={styles.block_502}>
                  голема почетна буква, а затоа што е
                </p>
                <p className={styles.block_503}>
                  нецелосна не се пишува точка на крајот.
                </p>
                <p className={styles.block_504}>
                  Correct: многу потешко. Нема смисла.
                </p>
                <p className={styles.block_505}>
                  Explanation: Очигледно е дека "многу
                </p>
                <p className={styles.block_506}>
                  Incorrect: Многу потешко. Нема смисла.
                </p>
                <p className={styles.block_507}>
                  потешко" е крај на реченица и дека и
                </p>
                <p className={styles.block_508}>
                  отстранет почетокот. Немајќи почеток,
                </p>
                <p className={styles.block_509}>
                  реченицата се пишува со мала буква, но
                </p>
                <p className={styles.block_510}>
                  затоа што е крај на реченицата пишува со
                </p>
                <p className={styles.block_511}>точка.</p>
                <p className={styles.block_512}>
                  <span className={styles.text_5}>Explanation: </span>
                  <span className={styles.text_4}>
                    Correct: многу тешко, немој да се{' '}
                  </span>
                </p>
                <p className={styles.block_513}>
                  Аудио датотеката е скратена на
                </p>
                <p className={styles.block_514}>разочаруваш.</p>
                <p className={styles.block_513}>
                  почетокот, така да не треба да се пишува со
                </p>
                <p className={styles.block_513}>
                  голема почетна буква, но на крајот треба да Incorrect: Многу
                  тешко, така да немој да се
                </p>
                <p className={styles.block_513}>
                  заврши реченицата со точка. разочаруваш.
                </p>
                <p className={styles.block_514}>
                  Correct: Одам во кафетеријата. Ќе нарачам
                </p>
                <p className={styles.block_514}>Колку чини капучиното?</p>
                <p className={styles.block_513}>
                  Incorrect: Одам во кафетеријата. Ќе
                </p>
                <p className={styles.block_513}>
                  нарачам- Колку чини капучиното?
                </p>
                <p className={styles.block_513}>
                  Incorrect: Одам во кафетеријата. Ќе
                </p>
                <p className={styles.block_513}>
                  нарачам... Колку чини капучиното?
                </p>
                <p className={styles.block_513}>
                  Incorrect: Одам во кафетеријата. Ќе
                </p>
                <p className={styles.block_513}>
                  нарачам. Колку чини капучиното?
                </p>
                <p className={styles.block_513}>
                  Explanation: После нецелосната реченица
                </p>
                <p className={styles.block_513}>
                  "ќе нарачам" не треба да користите три
                </p>
                <p className={styles.block_513}>
                  точки, точка, црта или интерпункциски знак.
                </p>
                <p className={styles.block_513}>
                  Правилна транскрипција би била со голема
                </p>
                <p className={styles.block_513}>
                  почетна буква "К", затоа што "Колку чини
                </p>
                <p className={styles.block_513}>
                  капучиното" е целосна реченица.
                </p>
                <p className={styles.block_514}>Correct: Колку чини Каде во</p>
                <p className={styles.block_513}>
                  Incorrect: Колку чини- Каде во-
                </p>
                <p className={styles.block_513}>
                  Incorrect: Колку чини... Каде во...
                </p>
                <p className={styles.block_513}>
                  Incorrect: Колку чини? Каде во?
                </p>
                <p className={styles.block_513}>
                  Explanation: Двата искази немаат завршеток
                </p>
                <p className={styles.block_513}>
                  и затоа обата се пишиваат без
                </p>
                <p className={styles.block_513}>
                  интерпункциски знак на крајот. Но, бидејќи
                </p>
                <p className={styles.block_513}>
                  двата се на почеток на реченица, "К" во
                </p>
                <p className={styles.block_513}>
                  "колку чини" и во "каде во" се пишува со
                </p>
                <p className={styles.block_513}>голема почетна буква.</p>
                <p className={styles.block_514}>
                  Correct: Каде е Каде е плажата?
                </p>
                <p className={styles.block_513}>
                  Incorrect: Каде е- Каде е плажата?
                </p>
                <p className={styles.block_513}>
                  Incorrect: Каде е каде е плажата?
                </p>
                <p className={styles.block_513}>
                  Explanation: Првото "Каде е" е нецелосен
                </p>
                <p className={styles.block_513}>
                  исказ така што не го означуваме со
                </p>
                <p className={styles.block_513}>
                  интерпункциски знак. Второто "Каде" има
                </p>
                <p className={styles.block_513}>
                  голема почетна буква "К" затоа што е на
                </p>
                <p className={styles.block_513}>
                  почеток на реченица и исказот завршува со
                </p>
                <p className={styles.block_513}>
                  "?" затоа што "Каде е плажата" е целосна
                </p>
                <p className={styles.block_513}>реченица.</p>
                <p className={styles.block_512}>
                  <span className={styles.text_4}>
                    Correct: заминувавме ама одлучивме да{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Оваа реченица звучи нецелосно{' '}
                  </span>
                </p>
                <p className={styles.block_513}>
                  и е без почеток и крај. Не се ставаат
                </p>
                <p className={styles.block_515}>
                  Incorrect: Заминувавме ама одлучивме да
                </p>
                <p className={styles.block_516}>
                  Incorrect: заминувавме ама одлучивме да.
                </p>
                <p className={styles.block_517}>
                  интерпункциски знаци на крајот или голема
                </p>
                <p className={styles.block_518}>буква на почетокот.</p>
                <p className={styles.block_519}>
                  Correct: Ги зајмив чевливе. ги купив.
                </p>
                <p className={styles.block_520}>
                  Incorrect: Ги зајмив чевливе. Ги купив.
                </p>
                <p className={styles.block_521}>
                  Incorrect: Ги зајмив чевливе, ги купив.
                </p>
                <p className={styles.block_522}>
                  Explanation: Овде не е целосно јасно дали
                </p>
                <p className={styles.block_523}>
                  "ги купив" е крај на реченица или е
                </p>
                <p className={styles.block_524}>
                  самостоен израз, но треба да се
                </p>
                <p className={styles.block_525}>
                  транскрибира како самостоен дел со
                </p>
                <p className={styles.block_526}>голема почетна буква.</p>
                <p className={styles.block_527}>
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
                <p className={styles.block_528}>Correct: Испрати е-пошта на</p>
                <p className={styles.block_529}>
                  example@gmail.com со содржина: Еј, како ти
                </p>
                <p className={styles.block_530}>помина денот?</p>
                <p className={styles.block_531}>
                  Incorrect: Испрати е-пошта на
                </p>
                <p className={styles.block_481}>
                  example@gmail.com со содржина: еј, како ти
                </p>
                <p className={styles.block_532}>помина денот?</p>
                <p className={styles.block_533}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    испрати е пошта на example{' '}
                  </span>
                </p>
                <p className={styles.block_534}>
                  gmail com со содржина еј како ти помина
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_1}>денот </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_536}>
                  Explanation: Говорна акција е целосна
                </p>
                <p className={styles.block_239}>
                  реченица и треба да се постапи со неа како
                </p>
                <p className={styles.block_537}>
                  таква, т.е. да се користи соодветна
                </p>
                <p className={styles.block_538}>интерпункција.</p>
                <p className={styles.block_539}>
                  Correct: Преведи на француски: Како си?
                </p>
                <p className={styles.block_540}>
                  Incorrect: Преведи на француски: како си
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    преведи на француски како{' '}
                  </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_1}>си </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_543}>
                  Explanation: Со оваа реченица побарување
                </p>
                <p className={styles.block_544}>
                  извршување на некое дејство од страна на
                </p>
                <p className={styles.block_545}>
                  уредот, така што е говорна акција и треба да
                </p>
                <p className={styles.block_546}>
                  биде со соодветна интерпункција и голема
                </p>
                <p className={styles.block_315}>буква.</p>
                <p className={styles.block_547}>
                  <span className={styles.text_4}>
                    Correct: Активирај авионски режим{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Оваа реченица предизвикува{' '}
                  </span>
                </p>
                <p className={styles.block_548}>
                  промена на состојбата на уредот, така што е
                </p>
                <p className={styles.block_549}>
                  говорна акција и треба да биде со
                </p>
                <p className={styles.block_550}>
                  соодветна интерпункција и голема буква.
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_4}>
                    Correct: Покажи ми ја мапата на Тетово.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Глаголот "покажи" служи како{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  поттикнувач на дејството и треба да биде
                </p>
                <p className={styles.block_553}>
                  транскрибиран како говорна акција со
                </p>
                <p className={styles.block_550}>
                  соодветна интерпункција и голема буква.
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_4}>
                    Correct: Повикај Тони канцеларија.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Глаголот "повикај" служи како{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  поттикнувач на дејството и треба да биде
                </p>
                <p className={styles.block_553}>
                  транскрибиран како говорна акција со
                </p>
                <p className={styles.block_550}>
                  соодветна интерпункција и голема буква.
                </p>
                <p className={styles.block_555}>
                  Correct: Намести потсетник утре 15:00:
                </p>
                <p className={styles.block_556}>Подигни ги намирниците.</p>
                <p className={styles.block_557}>
                  Explanation: Оваа реченица побарува уредот
                </p>
                <p className={styles.block_558}>
                  да изврши некоја акција, така што е говорна
                </p>
                <p className={styles.block_559}>
                  акција и треба да биде со соодветна
                </p>
                <p className={styles.block_560}>
                  интерпункција и голема буква.
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_4}>
                    Correct: Вклучи блиц светло.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Глаголот "вклучи" служи како{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  поттикнувач на дејството и треба да биде
                </p>
                <p className={styles.block_553}>
                  транскрибиран како говорна акција со
                </p>
                <p className={styles.block_550}>
                  соодветна интерпункција и голема буква.
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_4}>Correct: правец Битола </span>
                  <span className={styles.text_5}>
                    Explanation: Ова е пребарување на интернет{' '}
                  </span>
                </p>
                <p className={styles.block_563}>
                  и не се пишува со голема почетна буква или
                </p>
                <p className={styles.block_564}>со интерпункција на крајот.</p>
                <p className={styles.block_565}>
                  <span className={styles.text_4}>
                    Correct: мапа Кавадарци{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Ова е пребарување на интернет{' '}
                  </span>
                </p>
                <p className={styles.block_563}>
                  и не се пишува со голема почетна буква или
                </p>
                <p className={styles.block_564}>со интерпункција на крајот.</p>
                <p className={styles.block_566}>
                  Correct: распоред Враќањето на кралот,
                </p>
                <p className={styles.block_567}>Скопје</p>
                <p className={styles.block_568}>
                  Explanation: Ова е пребарување на интернет
                </p>
                <p className={styles.block_569}>
                  и не се пишува со голема почетна буква или
                </p>
                <p className={styles.block_570}>
                  со интерпункција на крајот. Измеѓу
                </p>
                <p className={styles.block_571}>
                  насловот "Враќањето на кралот" и локација
                </p>
                <p className={styles.block_572}>"Скопје" се става запирка.</p>
                <p className={styles.block_562}>
                  <span className={styles.text_4}>
                    Correct: ресторани Кичево{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Ова е пребарување на интернет{' '}
                  </span>
                </p>
                <p className={styles.block_563}>
                  и не се пишува со голема почетна буква или
                </p>
                <p className={styles.block_564}>со интерпункција на крајот.</p>
                <p className={styles.block_573}>
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
                <p className={styles.block_576}>
                  Correct: Каде е најблиската бензинска
                </p>
                <p className={styles.block_464}>пумпа?</p>
                <p className={styles.block_486}>
                  Incorrect: Каде е... најблиската... бензинска
                </p>
                <p className={styles.block_434}>пумпа?</p>
                <p className={styles.block_577}>
                  Incorrect: Каде е, најблиската, бензинска
                </p>
                <p className={styles.block_434}>пумпа?</p>
                <p className={styles.block_578}>
                  Explanation: Дури и ако говорителот прави
                </p>
                <p className={styles.block_579}>
                  долги паузи, не користете запирка. На некои
                </p>
                <p className={styles.block_580}>
                  места е задолжително користењето на
                </p>
                <p className={styles.block_581}>
                  запирка, но не и овој пример.
                </p>
                <p className={styles.block_582}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_583}>
                  Correct: Националниот парк Пелистер,
                </p>
                <p className={styles.block_584}>затворен е?</p>
                <p className={styles.block_585}>
                  Explanation: Oваа реченица содржи тема
                </p>
                <p className={styles.block_586}>
                  "Националниот парк Пелистер" и коментар
                </p>
                <p className={styles.block_587}>
                  "затворен е", па запирка треба да оди по
                </p>
                <p className={styles.block_588}>
                  темата и да вклучува соодветна
                </p>
                <p className={styles.block_589}>
                  интерпункција и капитализација.
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_4}>
                    Correct: Тиква, овошје или зеленчук?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Иако оваа реченица е составена
                  </span>
                </p>
                <p className={styles.block_591}>
                  од главни теми се пишува со голема
                </p>
                <p className={styles.block_592}>
                  почетна буква и соодветна интерпункција
                </p>
                <p className={styles.block_593}>
                  (со запирки кои ги делат темите и
                </p>
                <p className={styles.block_594}>
                  прашалник на крајот). Ова е нормален
                </p>
                <p className={styles.block_595}>
                  начин кога поставуваме прашање за
                </p>
                <p className={styles.block_596}>претпочитање на предмети.</p>
                <p className={styles.block_597}>
                  <span className={styles.text_4}>
                    Correct: Е, ѓевреци сакам.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Оваа реченица како тема има{' '}
                  </span>
                </p>
                <p className={styles.block_598}>
                  "ѓевреци" и коментар "сакам" и затоа
                </p>
                <p className={styles.block_599}>
                  запирката стои пред темата, исказот е со
                </p>
                <p className={styles.block_600}>
                  соодветна интерпункција и голема буква.
                </p>
                <p className={styles.block_601}>
                  Put a comma after a common sentence openers such as adverbial
                  phrases and introductory clauses.
                </p>
                <p className={styles.block_602}>
                  Correct: Кога веќе спомна, треба да купиме
                </p>
                <p className={styles.block_603}>повеќе намирници.</p>
                <p className={styles.block_604}>
                  Incorrect: Кога веќе спомна треба да купиме
                </p>
                <p className={styles.block_605}>повеќе намирници.</p>
                <p className={styles.block_606}>
                  Explanation: Фразата "кога веќе спомна" е
                </p>
                <p className={styles.block_607}>
                  воведна реченица и треба да биде
                </p>
                <p className={styles.block_608}>
                  напишана со голема почетна буква и со
                </p>
                <p className={styles.block_609}>
                  запирка измеѓу неа и другата реченица.
                </p>
                <p className={styles.block_610}>
                  Correct: Кога сме веќе кај тоа, каде беа тие
                </p>
                <p className={styles.block_611}>кога ни требаа?</p>
                <p className={styles.block_612}>
                  Explanation: Фразата "кога сме веќе кај тоа" е
                </p>
                <p className={styles.block_607}>
                  воведна реченица и треба да биде
                </p>
                <p className={styles.block_613}>
                  Incorrect: Кога сме веќе кај тоа каде беа тие
                </p>
                <p className={styles.block_614}>кога ни требаа?</p>
                <p className={styles.block_615}>
                  напишана со голема почетна буква и со
                </p>
                <p className={styles.block_609}>
                  запирка измеѓу неа и другата реченица.
                </p>
                <p className={styles.block_616}>
                  Correct: Чудно, двете забави беа на исти
                </p>
                <p className={styles.block_617}>ден.</p>
                <p className={styles.block_618}>
                  Incorrect: Чудно двете забави беа на исти
                </p>
                <p className={styles.block_619}>ден.</p>
                <p className={styles.block_620}>
                  Explanation: Прилогот "чудно" треба да биде
                </p>
                <p className={styles.block_621}>
                  одделен од другиот дел на реченицата со
                </p>
                <p className={styles.block_622}>запирка.</p>
                <p className={styles.block_623}>
                  Correct: Во Македонија, кафуле имаме на
                </p>
                <p className={styles.block_624}>секое ќоше.</p>
                <p className={styles.block_625}>
                  Incorrect: Во Македонија кафуле имаме на
                </p>
                <p className={styles.block_626}>секое ќоше.</p>
                <p className={styles.block_627}>
                  Explanation: Предлошката фраза "во
                </p>
                <p className={styles.block_628}>
                  Македонија" треба да биде одделена со
                </p>
                <p className={styles.block_402}>
                  запирка од другиот дел на реченицата.
                </p>
                <p className={styles.block_629}>
                  Correct: Од друга страна, папагалите се
                </p>
                <p className={styles.block_630}>супер миленичиња.</p>
                <p className={styles.block_631}>
                  Incorrect: Од друга страна папагалите се
                </p>
                <p className={styles.block_632}>супер миленичиња.</p>
                <p className={styles.block_633}>
                  Explanation: "Од друга страна" е предлошка
                </p>
                <p className={styles.block_634}>
                  фраза и треба да биде одделена со запирка
                </p>
                <p className={styles.block_635}>
                  од другиот дел на реченицата.
                </p>
                <p className={styles.block_636}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_637}>
                  Correct: А, мислев дека си со друштво.
                </p>
                <p className={styles.block_638}>
                  Incorrect: А мислев дека си со друштво.
                </p>
                <p className={styles.block_639}>
                  Explanation: "А" е честичка и треба да стои
                </p>
                <p className={styles.block_413}>
                  заедно со запирка дури и ако нема пауза
                </p>
                <p className={styles.block_640}>
                  после неа. Други примери во македонскиот
                </p>
                <p className={styles.block_641}>
                  јазик би биле: но, ли, не, по итн.
                </p>
                <p className={styles.block_642}>Correct: Еј, мила.</p>
                <p className={styles.block_643}>Incorrect: Еј мила.</p>
                <p className={styles.block_644}>
                  Explanation: Слично како претходно, ако се
                </p>
                <p className={styles.block_645}>
                  на почеток на реченица извици како "еј" се
                </p>
                <p className={styles.block_646}>
                  користат со запирка после нив. Други
                </p>
                <p className={styles.block_647}>
                  пример би биле: ау, о, хаха итн.
                </p>
                <p className={styles.block_648}>Correct: О, тоа е одлично.</p>
                <p className={styles.block_649}>
                  Explanation: "О" е извик и треба да следи
                </p>
                <p className={styles.block_650}>Incorrect: О тоа е одлично.</p>
                <p className={styles.block_651}>
                  запирка после него, т.е. пред остатокот на
                </p>
                <p className={styles.block_652}>реченицата.</p>
                <p className={styles.block_653}>Correct: Важи, ќе те следам.</p>
                <p className={styles.block_654}>
                  Incorrect: Важи ќе те следам.
                </p>
                <p className={styles.block_655}>
                  Explanation: "Важи" е да/не збор и после него
                </p>
                <p className={styles.block_656}>
                  следува запирка. Други примери од овој тип
                </p>
                <p className={styles.block_657}>се: да, не, можеби итн.</p>
                <p className={styles.block_658}>Correct: Да, сакам.</p>
                <p className={styles.block_659}>Incorrect: Да сакам.</p>
                <p className={styles.block_660}>
                  Explanation: Да/не збор така да ставете
                </p>
                <p className={styles.block_661}>запирка и после него.</p>
                <p className={styles.block_662}>
                  Correct: Секако. Ќе го сторам тоа.
                </p>
                <p className={styles.block_663}>
                  Incorrect: Секако, ќе го сторам тоа.
                </p>
                <p className={styles.block_664}>
                  Explanation: Во овој пример има голема
                </p>
                <p className={styles.block_268}>
                  пауза измеѓу "секако" и другиот дел од
                </p>
                <p className={styles.block_665}>
                  реченицата и затоа ставете точка, а не
                </p>
                <p className={styles.block_666}>
                  запирка, и започнете ја другата реченица со
                </p>
                <p className={styles.block_667}>голема почетна буква.</p>
                <p className={styles.block_668}>
                  Don't use commas between two or more adjectives if the first
                  adjective is definite.
                </p>
                <p className={styles.block_669}>
                  Correct: Слаткото мало бебе плаче.
                </p>
                <p className={styles.block_670}>
                  Incorrect: Слаткото, мало бебе плаче.
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    слаткото мало бебе плаче{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_672}>
                  Explanation: Првата придавка "слаткото" е
                </p>
                <p className={styles.block_503}>
                  членувана и затоа не се пишува запирка
                </p>
                <p className={styles.block_673}>после неа.</p>
                <p className={styles.block_674}>
                  Correct: Јаболкото беше мало, жолто,
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    јаболкото беше мало жолто{' '}
                  </span>
                </p>
                <p className={styles.block_676}>слатко и убаво.</p>
                <p className={styles.block_677}>
                  <span className={styles.text_1}>слатко и убаво </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_678}>
                  Incorrect: Јаболкото беше мало жолто
                </p>
                <p className={styles.block_679}>слатко и убаво.</p>
                <p className={styles.block_680}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_681}>
                  Correct: Македонскиот претседател, Георге
                </p>
                <p className={styles.block_682}>Иванов, беше на самитот.</p>
                <p className={styles.block_683}>
                  Incorrect: Македонскиот претседател Георге
                </p>
                <p className={styles.block_684}>Иванов беше на самитот.</p>
                <p className={styles.block_685}>
                  Explanation: Незадолжителор модификатор
                </p>
                <p className={styles.block_686}>
                  "Георге Иванов" не го менува значењето на
                </p>
                <p className={styles.block_687}>
                  "македонскиот претседател", туку само му
                </p>
                <p className={styles.block_688}>
                  додаде дополнителна информација за
                </p>
                <p className={styles.block_689}>
                  македонскиот претседател. Овај пример
                </p>
                <p className={styles.block_423}>
                  треба да биде транскрибиран со запира
                </p>
                <p className={styles.block_690}>пред и после модификаторот.</p>
                <p className={styles.block_691}>
                  Correct: Тие кои имаат резервација ќе бидат
                </p>
                <p className={styles.block_237}>
                  Explanation: Во овој случај среќаваме
                </p>
                <p className={styles.block_692}>послужени побрзо од другите.</p>
                <p className={styles.block_263}>
                  Incorrect: Тие, кои имаат резервација, ќе
                </p>
                <p className={styles.block_693}>
                  бидат послужени побрзо од другите.
                </p>
                <p className={styles.block_694}>
                  задолжителен модификатор. Зависната
                </p>
                <p className={styles.block_290}>
                  реченица "кои имаат резервација" објаснува
                </p>
                <p className={styles.block_695}>
                  на кои "тие" се мисли. Не додава
                </p>
                <p className={styles.block_696}>
                  дополнителни информации за веќе
                </p>
                <p className={styles.block_697}>
                  дефинирана група на луѓе и затоа "кои
                </p>
                <p className={styles.block_240}>
                  имаат резервации" се транскрибира без
                </p>
                <p className={styles.block_698}>запирки.</p>
                <p className={styles.block_699}>
                  Correct: Киро Глигоров, кој прв пат беше
                </p>
                <p className={styles.block_700}>Explanation: Ова е пример за</p>
                <p className={styles.block_701}>
                  избран во 1991, беше по втор пат изгласан
                </p>
                <p className={styles.block_702}>за претседател во 1994.</p>
                <p className={styles.block_703}>
                  Incorrect: Киро Глигоров кој прв пат беше
                </p>
                <p className={styles.block_704}>
                  избран во 1991 беше по втор пат изгласан
                </p>
                <p className={styles.block_705}>за претседател во 1994.</p>
                <p className={styles.block_706}>
                  незадолжителен модификатор и мора да
                </p>
                <p className={styles.block_707}>
                  биде транскрибиран со запирка. За
                </p>
                <p className={styles.block_276}>
                  проверка: ако се прашаме "кој претседател
                </p>
                <p className={styles.block_708}>
                  на Македонија?" или "кој соученик?" и
                </p>
                <p className={styles.block_709}>
                  одговорот не е јасен, тогаш не треба да
                </p>
                <p className={styles.block_710}>користиме запирки.</p>
                <p className={styles.block_711}>
                  Correct: Претседателот избран во 2008 беше
                </p>
                <p className={styles.block_223}>назначен во 2009.</p>
                <p className={styles.block_244}>
                  Incorrect: Претседателот, избран во 2008,
                </p>
                <p className={styles.block_712}>беше назначен во 2009.</p>
                <p className={styles.block_713}>
                  Explanation: Се додека нема значајна пауза
                </p>
                <p className={styles.block_714}>
                  после "претседател" и "2008" не се
                </p>
                <p className={styles.block_687}>
                  транскрибира запирка и треба да се смета
                </p>
                <p className={styles.block_715}>за задолжителен модификатор.</p>
                <p className={styles.block_716}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_717}>
                  Correct: Молител, Стојан Атанасов
                </p>
                <p className={styles.block_718}>
                  Incorrect: Молител, Стојан Атанасов.
                </p>
                <p className={styles.block_719}>
                  Explanation: Молител е именка со значење
                </p>
                <p className={styles.block_720}>
                  поднесувач и се користи за потпишување,
                </p>
                <p className={styles.block_689}>
                  така да после неа следи запирка, но не и
                </p>
                <p className={styles.block_721}>точка на крајот.</p>
                <p className={styles.block_722}>
                  <span className={styles.text_4}>
                    Correct: Срдечен поздрав, Катерина{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Срдечен поздрав" е уште еден{' '}
                  </span>
                </p>
                <p className={styles.block_723}>
                  израз за потпишување, т.е. збогување и
                </p>
                <p className={styles.block_563}>
                  треба после овој израз да следи запирка, но
                </p>
                <p className={styles.block_724}>не и точка на крајот.</p>
                <p className={styles.block_725}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_410}>Correct: Здраво Дени.</p>
                <p className={styles.block_726}>Incorrect: Здраво, Дени.</p>
                <p className={styles.block_727}>
                  Explanation: Овој пример се состои од
                </p>
                <p className={styles.block_402}>
                  поздравот "здраво" и примачот "Дени",
                </p>
                <p className={styles.block_233}>
                  такашто не треба да стои запирка помеѓу
                </p>
                <p className={styles.block_728}>нив.</p>
                <p className={styles.block_729}>Correct: Здраво, Глорија е.</p>
                <p className={styles.block_730}>
                  Explanation: Затоа што "Глорија е" е
                </p>
                <p className={styles.block_731}>Incorrect: Здраво Глорија е.</p>
                <p className={styles.block_427}>
                  реченица мора да се оддели поздравот од
                </p>
                <p className={styles.block_732}>реченицата со запирка.</p>
                <p className={styles.block_733}>
                  <span className={styles.text_4}>
                    Correct: Здраво Дени, Глорија е.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Здраво Дени" е поздрав, а{' '}
                  </span>
                </p>
                <p className={styles.block_734}>
                  "Глорија е" е реченица и стои помеѓу нив
                </p>
                <p className={styles.block_735}>запирка.</p>
                <p className={styles.block_736}>
                  <span className={styles.text_4}>
                    Correct: Здраво Дени. Глорија е.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Во овој пример помеѓу{' '}
                  </span>
                </p>
                <p className={styles.block_737}>
                  поздравот "здраво Дени" и реченицата
                </p>
                <p className={styles.block_563}>
                  "Глорија е" има долга пауза и затоа двете се
                </p>
                <p className={styles.block_738}>
                  третираат како одделни реченици. Во вакви
                </p>
                <p className={styles.block_739}>
                  пример се користи точка наместо запирка.
                </p>
                <p className={styles.block_740}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_4}>
                    Correct: Мери, повикај ме назад.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Мери" е на примач, кој стои на
                  </span>
                </p>
                <p className={styles.block_742}>
                  почеток на реченица, и треба да се
                </p>
                <p className={styles.block_743}>
                  транскрибира заедно со запирка после
                </p>
                <p className={styles.block_744}>него.</p>
                <p className={styles.block_590}>
                  <span className={styles.text_4}>
                    Correct: Како си, Јована?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Јована" е на примач, кој стои на
                  </span>
                </p>
                <p className={styles.block_745}>
                  крајот на реченица, и треба да се
                </p>
                <p className={styles.block_746}>
                  транскрибира заедно со запирка пред него.
                </p>
                <p className={styles.block_747}>
                  Correct: Клара, Сузана. Треба да зборувам
                </p>
                <p className={styles.block_748}>
                  со вас околу барањето за осигурување.
                </p>
                <p className={styles.block_644}>
                  Explanation: Обрнете внимание на тоа дека
                </p>
                <p className={styles.block_749}>
                  овој пример е доста тежок: "Клара, Сузана"
                </p>
                <p className={styles.block_750}>
                  се појавува како скратена верзија од "Клара,
                </p>
                <p className={styles.block_751}>
                  Сузана е", па постапуваме со него како
                </p>
                <p className={styles.block_752}>
                  целосна реченица и користиме точка на
                </p>
                <p className={styles.block_753}>крајот.</p>
                <p className={styles.block_754}>
                  <span className={styles.text_4}>
                    Correct: Марко, здраво, Јана е овде.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Кратката пауза помеѓу "Марко",
                  </span>
                </p>
                <p className={styles.block_755}>
                  "здраво" и "Јана е овде" се бележи со
                </p>
                <p className={styles.block_756}>запирки, а не со точки.</p>
                <p className={styles.block_757}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_758}>Correct: Ok Google</p>
                <p className={styles.block_759}>Incorrect: Ok, Google</p>
                <p className={styles.block_760}>Incorrect: Ok Google.</p>
                <p className={styles.block_761}>
                  Explanation: Фразата "Ok Google" е
                </p>
                <p className={styles.block_762}>
                  употребена самостојно и затоа не треба да
                </p>
                <p className={styles.block_763}>
                  се транскрибира точка или запирка.
                </p>
                <p className={styles.block_764}>
                  Correct: Ok Google, слики од маслинови
                </p>
                <p className={styles.block_765}>дрва.</p>
                <p className={styles.block_766}>
                  Explanation: "Ok Google" се наоѓа пред
                </p>
                <p className={styles.block_767}>
                  именската фраза "слики од маслинови
                </p>
                <p className={styles.block_768}>дрвја"</p>
                <p className={styles.block_769}>
                  Correct: Ok Google, покажи ми контакт
                </p>
                <p className={styles.block_611}>податоци Дејан</p>
                <p className={styles.block_766}>
                  Explanation: "Ok Google" се наоѓа пред
                </p>
                <p className={styles.block_770}>
                  командата "покажи контакт податоци
                </p>
                <p className={styles.block_771}>
                  Дејан", затоа треба да се оддвојат со
                </p>
                <p className={styles.block_772}>запирка.</p>
                <p className={styles.block_773}>
                  <span className={styles.text_4}>
                    Correct: Ok Google, кога е Божиќ годинава?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Ok Google" се наоѓа пред{' '}
                  </span>
                </p>
                <p className={styles.block_774}>
                  прашањето "кога е Божиќ годинава" и затоа
                </p>
                <p className={styles.block_775}>
                  треба да се оддвојат со запирка.
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className={styles.block_778}>Correct: Сериозен си?</p>
                <p className={styles.block_779}>Incorrect: Сериозен си.</p>
                <p className={styles.block_780}>
                  Explanation: Доколку изразот звучи како да
                </p>
                <p className={styles.block_608}>
                  било поставено прашање, тогаш истиот
                </p>
                <p className={styles.block_781}>
                  треба да се напише со голема почетна буква
                </p>
                <p className={styles.block_782}>и прашалник на крајот.</p>
                <p className={styles.block_783}>Correct: Во 3:00?</p>
                <p className={styles.block_419}>Incorrect: Во 3:00</p>
                <p className={styles.block_727}>
                  Explanation: Иако не е составено како
                </p>
                <p className={styles.block_784}>
                  прашање, "3:00" е изговорено со нагорна
                </p>
                <p className={styles.block_785}>
                  интонација што би значело дека е прашање.
                </p>
                <p className={styles.block_786}>
                  Затоа "Во" се транскрибира со голема
                </p>
                <p className={styles.block_787}>
                  почетна буква и се става прашалник на
                </p>
                <p className={styles.block_753}>крајот.</p>
                <p className={styles.block_788}>
                  <span className={styles.text_4}>
                    Correct: И Катето доаѓа?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Иако не е составено како{' '}
                  </span>
                </p>
                <p className={styles.block_789}>
                  прашање, "И Катето доаѓа" е изговорено со
                </p>
                <p className={styles.block_790}>
                  нагорна интонација што би значело дека е
                </p>
                <p className={styles.block_791}>
                  прашање. Затоа "И" се транскрибира со
                </p>
                <p className={styles.block_563}>
                  голема почетна буква и се става прашалник
                </p>
                <p className={styles.block_792}>на крајот.</p>
                <p className={styles.block_793}>
                  <span className={styles.text_4}>
                    Correct: времето во Охрид{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Дури и да се изговори со{' '}
                  </span>
                </p>
                <p className={styles.block_550}>
                  нагорна интонација, "времето во Охрид" е
                </p>
                <p className={styles.block_794}>
                  најверојатно пребарување на интернет, а не
                </p>
                <p className={styles.block_723}>
                  прашање и затоа "времето" останува со
                </p>
                <p className={styles.block_795}>
                  мала почетна буква и нема прашалник на
                </p>
                <p className={styles.block_753}>крајот.</p>
                <p className={styles.block_796}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_4}>Correct: Замолчи! </span>
                  <span className={styles.text_5}>
                    Explanation: Говорителот е гласен.{' '}
                  </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_4}>Correct: Јупи! </span>
                  <span className={styles.text_5}>
                    Explanation: Говорителот звучи{' '}
                  </span>
                </p>
                <p className={styles.block_799}>ентузијастички.</p>
                <p className={styles.block_800}>
                  <span className={styles.text_4}>Correct: Јеј. </span>
                  <span className={styles.text_5}>
                    Explanation: Не можеме да оцениме како{' '}
                  </span>
                </p>
                <p className={styles.block_315}>звучи.</p>
                <p className={styles.block_801}>
                  <span className={styles.text_4}>
                    Correct: Ти си кукавица.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Непристрасно изговорено.{' '}
                  </span>
                </p>
                <p className={styles.block_802}>
                  <span className={styles.text_4}>
                    Correct: Среќен роденден!{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Изговорено со ентузијазам.{' '}
                  </span>
                </p>
                <p className={styles.block_803}>
                  <span className={styles.text_4}>
                    Correct: Ви посакувам убав ден.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: пријатен неутрален тон.{' '}
                  </span>
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_4}>
                    Correct: Добив највисока оцена!{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Изговорено со ентузијазам.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Don't use comma between reported speech verbs and direct
                  quotations. Reported speech verbs and the direct quotations
                  stand next to each other without punctuation.
                </p>
                <p className={styles.block_807}>
                  Correct: Мојот пријател рече "алигатор
                </p>
                <p className={styles.block_808}>крокодил".</p>
                <p className={styles.block_631}>
                  Incorrect: Мојот пријател рече, "алигатор
                </p>
                <p className={styles.block_809}>крокодил."</p>
                <p className={styles.block_631}>
                  Incorrect: Мојот пријател рече, "алигатор
                </p>
                <p className={styles.block_809}>крокодил."</p>
                <p className={styles.block_631}>
                  Incorrect: Мојот пријател рече, "алигатор
                </p>
                <p className={styles.block_809}>крокодил".</p>
                <p className={styles.block_810}>
                  Explanation: Бидејќи глаголот "рече" ги
                </p>
                <p className={styles.block_811}>
                  пренесува точните зборови на говорителот
                </p>
                <p className={styles.block_812}>
                  и имаме директен говор, користиме
                </p>
                <p className={styles.block_813}>
                  наводници. Исто постапуваме и со други
                </p>
                <p className={styles.block_814}>
                  глаголи што означуваат индиректен говор
                </p>
                <p className={styles.block_815}>
                  како на пр. прашува, одговара итн. Не се
                </p>
                <p className={styles.block_816}>
                  користи точка внатре во наводниците
                </p>
                <p className={styles.block_817}>
                  крокодил" не е целосна реченица.
                </p>
                <p className={styles.block_818}>
                  поради тоа што фразата "алигатор
                </p>
                <p className={styles.block_819}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_820}>
                  <span className={styles.text_4}>
                    Correct: Ана рече "Да се сретнеме во 15:00."{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: После наводниците не треба да{' '}
                  </span>
                </p>
                <p className={styles.block_821}>
                  има точка, туку внатре во нив затоа што "Да
                </p>
                <p className={styles.block_790}>
                  се сретнеме во 15:00" е целосна реченица.
                </p>
                <p className={styles.block_822}>
                  Incorrect: Ана рече "Да се сретнеме во
                </p>
                <p className={styles.block_823}>15:00.".</p>
                <p className={styles.block_824}>
                  Correct: Милан праша "Ќе се сретнеме во
                </p>
                <p className={styles.block_825}>15?"</p>
                <p className={styles.block_826}>
                  Incorrect: Милан праша, "Ќе се сретнеме во
                </p>
                <p className={styles.block_827}>15?".</p>
                <p className={styles.block_828}>
                  Explanation: После наводниците не треба да
                </p>
                <p className={styles.block_829}>
                  има точка, туку внатре во нив треба да има
                </p>
                <p className={styles.block_656}>
                  прашалник затоа што "Ќе се сретнеме во 15"
                </p>
                <p className={styles.block_830}>е целосно прашање.</p>
                <p className={styles.block_831}>
                  Correct: Дали Јана рече "Ќе се сретнеме
                </p>
                <p className={styles.block_832}>тука."</p>
                <p className={styles.block_703}>
                  Incorrect: Дали Јана рече "Ќе се сретнеме
                </p>
                <p className={styles.block_833}>тука."?</p>
                <p className={styles.block_834}>
                  Explanation: Иако главната реченица е
                </p>
                <p className={styles.block_558}>
                  прашална, не се транскрибира прашалникот
                </p>
                <p className={styles.block_835}>
                  на крајот затоа што веќе имаме точка
                </p>
                <p className={styles.block_836}>внатре во наводниците.</p>
                <p className={styles.block_837}>
                  Correct: Марјан беше како "Ќе бидам таму,
                </p>
                <p className={styles.block_838}>
                  ветувам." без да провери во неговиот
                </p>
                <p className={styles.block_839}>календар.</p>
                <p className={styles.block_840}>
                  Explanation: Иако изјавата на Марјан е на
                </p>
                <p className={styles.block_841}>
                  средината на една поголема реченица,
                </p>
                <p className={styles.block_842}>
                  сепак треба да се транскрибира точката
                </p>
                <p className={styles.block_843}>внатре во наводниците.</p>
                <p className={styles.block_844}>
                  <span className={styles.text_4}>
                    Correct: Речи "ономатопеја".{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Исто така, не се става запирка
                  </span>
                </p>
                <p className={styles.block_845}>
                  доколку глаголот е во императив.
                </p>
                <p className={styles.block_846}>
                  Do not use quotation marks for indirect quotes. Use context
                  and intonation to determine whether a quote is direct or
                  indirect.
                </p>
                <p className={styles.block_847}>
                  Correct: Децата ми рекоја дека се гладни.
                </p>
                <p className={styles.block_848}>
                  Incorrect: Децата ми рекоја дека "се гладни".
                </p>
                <p className={styles.block_849}>
                  Explanation: Поради "дека" е индиректен
                </p>
                <p className={styles.block_331}>
                  говор и не се потребни наводници.
                </p>
                <p className={styles.block_850}>
                  Correct: Петар рече не може во сабота.
                </p>
                <p className={styles.block_236}>
                  Incorrect: Петар рече "не може во сабота."
                </p>
                <p className={styles.block_851}>
                  Explanation: Интонацијата покажува
                </p>
                <p className={styles.block_852}>индиректен говор.</p>
                <p className={styles.block_853}>
                  <span className={styles.text_4}>
                    Correct: Мила рече "Треба да тргнеме."{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Интонацијата покажува{' '}
                  </span>
                </p>
                <p className={styles.block_854}>
                  директен говор и затоа се искористени
                </p>
                <p className={styles.block_855}>наводни околу фразата.</p>
                <p className={styles.block_856}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_857}>
                  Correct: Преведи на француски: Како си?
                </p>
                <p className={styles.block_858}>
                  Incorrect: Преведи на француски: "Како си?"
                </p>
                <p className={styles.block_859}>
                  Explanation: Командата "преведи на
                </p>
                <p className={styles.block_720}>
                  француски" е проследена со говорот "како
                </p>
                <p className={styles.block_860}>
                  си" и во овој случај се користат две точки
                </p>
                <p className={styles.block_635}>
                  пред фразата, а не наводници.
                </p>
                <p className={styles.block_861}>
                  Correct: Преведи го "Како се викаш?" на
                </p>
                <p className={styles.block_862}>
                  Explanation: Говорот е на средина на
                </p>
                <p className={styles.block_863}>француски.</p>
                <p className={styles.block_864}>
                  реченицата и затоа се користат наводници.
                </p>
                <p className={styles.block_865}>
                  Correct: Како да кажеш "те сакам" на
                </p>
                <p className={styles.block_584}>француски?</p>
                <p className={styles.block_866}>
                  Explanation: Избегнувајте запирка после
                </p>
                <p className={styles.block_867}>
                  глаголи со значење "вели", "рече" , "изјавува"
                </p>
                <p className={styles.block_868}>итн.</p>
                <p className={styles.block_869}>
                  Correct: Како да кажеш на јапонски: Сакам
                </p>
                <p className={styles.block_765}>кафе.</p>
                <p className={styles.block_870}>
                  Correct: До example@gmail.com: Еј, како си
                </p>
                <p className={styles.block_871}>го помина денот?</p>
                <p className={styles.block_872}>Correct: Прати е-пошта на</p>
                <p className={styles.block_873}>
                  example@gmail.com со содржина: Еј, како си
                </p>
                <p className={styles.block_871}>го помина денот?</p>
                <p className={styles.block_874}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_875}>
                  Correct: Намести термин за утре во 15:30: на
                </p>
                <p className={styles.block_876}>доктор.</p>
                <p className={styles.block_877}>
                  Explanation: Поради тоа што фразата "на
                </p>
                <p className={styles.block_878}>
                  доктор" не може да стои сама како
                </p>
                <p className={styles.block_306}>
                  реченица, се пишува со мала почетна буква.
                </p>
                <p className={styles.block_879}>
                  Correct: Прати и порака на Кристина:
                </p>
                <p className={styles.block_880}>
                  Мајсторите за кровот нема да дојдат до
                </p>
                <p className={styles.block_881}>среда.</p>
                <p className={styles.block_882}>
                  Explanation: "Мајсторите за кровот нема да
                </p>
                <p className={styles.block_883}>
                  дојдат до среда" може да стои сама, па
                </p>
                <p className={styles.block_884}>
                  затоа е со голема почетна буква.
                </p>
                <p className={styles.block_885}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_886}>
                  Correct: Преведи "здраво" на француски
                </p>
                <p className={styles.block_625}>
                  Incorrect: Преведи "Здраво" на француски.
                </p>
                <p className={styles.block_887}>
                  Explanation: Ова е барање на превод и не
                </p>
                <p className={styles.block_888}>
                  треба да се пишува со големи букви или да
                </p>
                <p className={styles.block_889}>има точка.</p>
                <p className={styles.block_890}>
                  Correct: Преведи на шпански: замина.
                </p>
                <p className={styles.block_891}>
                  Incorrect: Преведи на шпански: Замина.
                </p>
                <p className={styles.block_887}>
                  Explanation: Ова е барање на превод и не
                </p>
                <p className={styles.block_500}>
                  треба да се пишува со големи букви, а има
                </p>
                <p className={styles.block_586}>
                  точка затоа што е на крајот на реченицата.
                </p>
                <p className={styles.block_892}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_893}>
                  Correct: Објаснете што е амбидекстерија.
                </p>
                <p className={styles.block_894}>
                  Incorrect: Објаснете што е "амбидекстерија."
                </p>
                <p className={styles.block_895}>
                  Explanation: Не користете наводници кога
                </p>
                <p className={styles.block_896}>објаснувате зборови.</p>
                <p className={styles.block_897}>
                  Correct: Тој го рече зборот тиквичка.
                </p>
                <p className={styles.block_898}>
                  Incorrect: Тој го рече зборот "тиквичка".
                </p>
                <p className={styles.block_899}>
                  Explanation: Не користете наводници кога се
                </p>
                <p className={styles.block_900}>однесува за некој збор.</p>
                <p className={styles.block_901}>
                  Correct: Панама се пишува исто и однапред
                </p>
                <p className={styles.block_902}>и одназад.</p>
                <p className={styles.block_903}>
                  Incorrect: "Панама" се пишува исто и
                </p>
                <p className={styles.block_904}>однапред и одназад.</p>
                <p className={styles.block_895}>
                  Explanation: Не користете наводници кога
                </p>
                <p className={styles.block_905}>
                  зборувате за како еден збор правилно се
                </p>
                <p className={styles.block_906}>пишува.</p>
                <p className={styles.block_907}>
                  A dash or line is used between two nouns that denote a single
                  term and constitute a compound.
                </p>
                <p className={styles.block_908}>Correct: жиро-сметка</p>
                <p className={styles.block_909}>Incorrect: жиросметка</p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>жиро сметка </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_911}>
                  Explanation: Иако се две именки, тие се
                </p>
                <p className={styles.block_912}>
                  поврзани со тире и означуваат еден збор.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the Cyrillic alphabet and the Latin letters a
                  through z, you should not use any other symbol than: 0-9
                  âàäáçëéèêïîíñöôóúüûùîÀÄÁÇËÉÈÉÊÏÎÍÑÖÓÚÜÛÙ23,?!~^\'„“"_&ndash;°:.()&lt;&gt;
                  {}[]√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_915}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className={styles.block_916}>Correct: 'Рбетот го боли.</p>
                <p className={styles.block_917}>
                  Correct: Темна м'гла земја покрива.
                </p>
                <p className={styles.block_918}>Correct: Дојде од село С'лп.</p>
                <p className={styles.block_919}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_920}>
                  <span className={styles.text_4}>
                    Correct: Ќе одиш на Челзи-Реал Мадрид?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Реал" и "Челзи" се спортски{' '}
                  </span>
                </p>
                <p className={styles.block_752}>
                  тимови и треба да се транскрибираат со
                </p>
                <p className={styles.block_921}>тире помеѓу нив.</p>
                <p className={styles.block_922}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_923}>Correct: Лет Рим-Лондон</p>
                <p className={styles.block_924}>Incorrect: Лет Рим Лондон</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_927}>
                  Correct: Како си {`{прашалник}`}
                </p>
                <p className={styles.block_928}>Incorrect: Како си?</p>
                <p className={styles.block_929}>Incorrect: Како си прашалник</p>
                <p className={styles.block_406}>
                  Incorrect: Како си прашалник?
                </p>
                <p className={styles.block_930}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>како си прашалник </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_931}>
                  Correct: Во ред {`{три точки}`}
                </p>
                <p className={styles.block_932}>Incorrect: Во ред...</p>
                <p className={styles.block_933}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>во ред три точки </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_934}>
                  Explanation: Говорителот изговорил "три
                </p>
                <p className={styles.block_413}>
                  точки" и тоа треба да се транскрибира во
                </p>
                <p className={styles.block_935}>
                  кадрави загради без никаков друг
                </p>
                <p className={styles.block_936}>интерпункциски знак.</p>
                <p className={styles.block_783}>Correct: {`{смајли}`}</p>
                <p className={styles.block_937}>Incorrect: :-)</p>
                <p className={styles.block_938}>Incorrect: смајли</p>
                <p className={styles.block_939}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>смајли </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_940}>
                  Explanation: "Смајли" е транскрибирано во
                </p>
                <p className={styles.block_941}>
                  заокружувачки загради, бидејќи тоа е
                </p>
                <p className={styles.block_942}>
                  говорен емотикон. Не го запишувај
                </p>
                <p className={styles.block_943}>
                  актуелниот емотикон, туку запиши го зборот
                </p>
                <p className={styles.block_944}>во заокружувачки загради.</p>
                <p className={styles.block_945}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_946}>Correct: Живеам во стан 4/а</p>
                <p className={styles.block_947}>
                  Incorrect: Живеам во стан 4 {`{коса црта}`} а
                </p>
                <p className={styles.block_948}>
                  Incorrect: Живеам во стан четири {`{коса`}
                </p>
                <p className={styles.block_466}>{`црта} а.`}</p>
                <p className={styles.block_949}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    живеам во стан четири коса{' '}
                  </span>
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_1}>црта а </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_951}>
                  интерпункција (4/а) и затоа во овој случај
                </p>
                <p className={styles.block_952}>
                  треба да се користат симболите, а не се
                </p>
                <p className={styles.block_953}>
                  Explanation: Стан 4/а е адреса со вградена
                </p>
                <p className={styles.block_954}>
                  пишуваат со букви во кадрави загради.
                </p>
                <p className={styles.block_955}>Correct: www.fake-domain.com</p>
                <p className={styles.block_956}>
                  Incorrect: www точка fake цртичка domain
                </p>
                <p className={styles.block_957}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    даблју даблју даблју точка{' '}
                  </span>
                </p>
                <p className={styles.block_958}>точка com</p>
                <p className={styles.block_959}>
                  <span className={styles.text_1}>
                    фејк цртичка домејн точка ком{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_960}>
                  Explanation: Иако говорителот ја изговори
                </p>
                <p className={styles.block_268}>
                  фразата, таа треба да се транскрибира
                </p>
                <p className={styles.block_961}>
                  според конвенциите на Web URL(локација
                </p>
                <p className={styles.block_423}>
                  на податоците на интернет), односно со
                </p>
                <p className={styles.block_962}>
                  знаците за точка, коса црта итн.
                </p>
                <p className={styles.block_963}>
                  Correct: Таа е актерка/модел.
                </p>
                <p className={styles.block_964}>
                  Incorrect: Таа е актерка {`{коса црта}`} модел.
                </p>
                <p className={styles.block_965}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    таа е актерка коса црта{' '}
                  </span>
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_1}>модел </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_312}>
                  Explanation: Бидејќи "коса црта" се смета за
                </p>
                <p className={styles.block_967}>
                  интерпункција на збор, симболот "/" се
                </p>
                <p className={styles.block_968}>користи и не се изговара.</p>
                <p className={styles.block_969}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_970}>Correct: {`{две точки}`}</p>
                <p className={styles.block_971}>Incorrect: :</p>
                <p className={styles.block_972}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>две точки </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_973}>
                  Explanation: Правилното пишување на
                </p>
                <p className={styles.block_415}>
                  фразата "две точки" е во кадрави загради, а
                </p>
                <p className={styles.block_322}>
                  не како симболот ":" затоа што е употребен
                </p>
                <p className={styles.block_974}>самостојно.</p>
                <p className={styles.block_424}>Correct: {`{долна црта}`}</p>
                <p className={styles.block_975}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>долна црта </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_976}>Incorrect: _</p>
                <p className={styles.block_224}>
                  Explanation: Правилното пишување на
                </p>
                <p className={styles.block_423}>
                  фразата "долна црта" е со користење на
                </p>
                <p className={styles.block_977}>
                  кадрави загради, а не како симболот "_"
                </p>
                <p className={styles.block_978}>
                  затоа што е употребен самостојно.
                </p>
                <p className={styles.block_979}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_980}>
                  Correct: Заминувам сега {`{точка}`} Колку долго
                </p>
                <p className={styles.block_981}>трае патувањето?</p>
                <p className={styles.block_891}>
                  Incorrect: Заминувам сега {`{точка}`} колку
                </p>
                <p className={styles.block_982}>долго трае патувањето?</p>
                <p className={styles.block_983}>
                  Incorrect: Заминувам сега точка колку долго
                </p>
                <p className={styles.block_984}>трае патувањето?</p>
                <p className={styles.block_985}>
                  Incorrect: Заминувам сега. Колку долго трае
                </p>
                <p className={styles.block_329}>патувањето?</p>
                <p className={styles.block_949}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    заминувам сега точка колку{' '}
                  </span>
                </p>
                <p className={styles.block_986}>
                  <span className={styles.text_1}>долго трае патувањето </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_987}>
                  Explanation: Говорителот гласно рекол
                </p>
                <p className={styles.block_988}>
                  "точка" и треба да напишеме "точка" во
                </p>
                <p className={styles.block_415}>
                  кадрави загради. Иако е во загради, "точка"
                </p>
                <p className={styles.block_952}>
                  ја има истата функција како симболот и
                </p>
                <p className={styles.block_989}>
                  затоа ја пишуваме почетната буква на
                </p>
                <p className={styles.block_333}>новата реченица голема.</p>
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
