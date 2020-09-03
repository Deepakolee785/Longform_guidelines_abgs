import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Format = () => {
  const classes = useStyles()

  const headingIds = [
    'number',
    'currency-and-unit',
    'date-and-time',
    'address',
    'web',
    'abbreviation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Slovak" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_4}>
                    Correct: V triede je deväť študentov.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: numbers less than 10{' '}
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_4}>
                    Correct: V triede je 13 študentov.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_4}>
                    Correct: Mám šesť psov a 12 papagájov.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Follow this rule even if the noun
                  </span>
                </p>
                <p className={styles.block_430}>
                  phrases with numbers are coordinated.
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_4}>Correct: 3,14 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>tri celých štrnásť </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_432}>Explanation: decimal numbers</p>
                <p className={styles.block_433}>
                  If a large number consists of only a number followed by
                  "milión", "miliárd", or higher, then transcribe as a numeral
                  plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_4}>Correct: 1 milión husí </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>jeden milión husí </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_4}>Correct: 1 000 husí </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>jeden tisíc husí </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_4}>Correct: 1,5 miliárd $ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    jedna celá päť milliard dolárov{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jeden a pol miliardy dolárov{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_438}>
                  Explanation: For mixed numbers before "milión",
                </p>
                <p className={styles.block_439}>
                  "miliárd", etc., use decimals.
                </p>
                <p className={styles.block_440}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    nula jedna jedna dva tri päť{' '}
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_1}>osem trinásť </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_4}>Correct: 3 2 1 štart </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>tri dva jedna štart </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_444}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_445}>counting</p>
                <p className={styles.block_446}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_447}>
                  Correct: Potrebujú 1/4 lb cukru.
                </p>
                <p className={styles.block_448}>
                  Incorrect: Potrebujú štvrtinu lb cukru.
                </p>
                <p className={styles.block_341}>
                  Incorrect: Potrebujú 1 / 4 lb cukru.
                </p>
                <p className={styles.block_449}>
                  Incorrect: Potrebujú 1⁄4 lb cukru.
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    potrebujú štvrtinu libry cukru{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>
                    Correct: O 3/4 km odbočte doprava.{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    o trištvrte míle odbočte vpravo{' '}
                  </span>
                </p>
                <p className={styles.block_452}>"</p>
                <p className={styles.block_453}>
                  Correct: O 2/3 km zabočte doľava.
                </p>
                <p className={styles.block_454}>
                  Incorrect: O dve tretiny km zabočte doľava.
                </p>
                <p className={styles.block_455}>
                  Incorrect: O 2/3 killometra zabočte doľava.
                </p>
                <p className={styles.block_456}>
                  Incorrect: O dve tretiny killometra zabočte
                </p>
                <p className={styles.block_457}>doľava.</p>
                <p className={styles.block_458}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    o dve tretiny killometra{' '}
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_1}>zabočte doľava </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_460}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_4}>
                    Correct: Mohol by si mi požičať 2,50 $?{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    mohol by si mi požičať dva a{' '}
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_1}>pol doláru </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_463}>
                  Correct: Kúpila si plážový domček za 7,5
                </p>
                <p className={styles.block_464}>miliónov €.</p>
                <p className={styles.block_465}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    kúpila si plážový domček za{' '}
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_1}>
                    sedem a pol miliónov euro{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_467}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_468}>Correct: 2% mlieka</p>
                <p className={styles.block_469}>Correct: 1 milión percent</p>
                <p className={styles.block_470}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_471}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_4}>Correct: 041 456 7890 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    nula štyroch človek štyri päť{' '}
                  </span>
                </p>
                <p className={styles.block_473}>
                  šesť sedem osem deväť nula klapka
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_1}>päťdesiatštyri </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  Explanation: landline with two-digit area code
                </p>
                <p className={styles.block_476}>preceded by leading "0"</p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>Correct: 0910 123 456 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    nula deväť človek päť človek{' '}
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_1}>
                    dvoma troch štyroch päť šesť{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_479}>
                  Explanation: mobile phone number
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_4}>
                    Correct: +421 41 456 7890{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    plus štyristodvadsaťjedna{' '}
                  </span>
                </p>
                <p className={styles.block_481}>
                  štyridsaťjedna štyristopäťdesiatšesť
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_1}>
                    sedemtisícosemstodeväťdesiat{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  Explanation: landline with two-digit area code
                </p>
                <p className={styles.block_483}>
                  and country code (the leading "0" is removed)
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_4}>
                    Correct: 041 456 7890 klapka 54{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    nula štyri jeden štyri päť šesť{' '}
                  </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_1}>
                    sedem osem deväť nula klapka päťdesiatštyri{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_4}>Correct: 02 1234 1234 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    nula dvoma človek dvoma{' '}
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_1}>
                    troch štyroch človek dvoma troch štyroch{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  Explanation: landline with one-digit area code
                </p>
                <p className={styles.block_476}>preceded by leading "0"</p>
                <p className={styles.block_488}>
                  <span className={styles.text_4}>Correct: 0800 123 456 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    nula osem nula nula človek{' '}
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_1}>
                    dvoma troch štyroch päť šesť{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_489}>
                  Explanation: toll-free number
                </p>
                <p className={styles.block_490}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_4}>Correct: 5 : 6 3 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    päť deleno šesť na tretiu{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_4}>
                    Correct: Koľko je 5 x 6?{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>koľko je päť krát šesť </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_10}>Correct: √3 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>odmocnina z troch </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_4}>
                    Correct: Koľko je 8 hodín x 12 $?{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    koľko je osem hodín krát{' '}
                  </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_1}>dvanásť dolárov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_496}>
                  Correct: Koľko sú traja aligátori rozdelení medzi
                </p>
                <p className={styles.block_497}>dvoch leguánov?</p>
                <p className={styles.block_498}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_499}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_4}>Correct: 10 $ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>desať dolárov </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_4}>
                    Correct: Koľko je 20 € v US dolároch?{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    koľko je dvadsať euro v{' '}
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_1}>amerických dolároch </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_4}>
                    Correct: Dlžím ti euro. Nech sa páči jedno euro.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: When referring to the currency
                  </span>
                </p>
                <p className={styles.block_506}>
                  itself and not to an amount of money, spell out
                </p>
                <p className={styles.block_322}>the word.</p>
                <p className={styles.block_507}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_508}>Correct: Minul som 5 litrov.</p>
                <p className={styles.block_509}>
                  Incorrect: Minul som 5 000 $.
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>minul som päť litrov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_511}>Correct: 200 yenov</p>
                <p className={styles.block_512}>Incorrect: 200 ¥</p>
                <p className={styles.block_513}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>dvesto yenov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_514}>
                  For degrees, use the °C symbol.
                </p>
                <p className={styles.block_515}>Correct: Vonku je 20 °C.</p>
                <p className={styles.block_516}>
                  Correct: V Bratislava je -5 °C.
                </p>
                <p className={styles.block_517}>
                  Incorrect: V Bratislava je -5.
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    v bratislava je minus päť{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_519}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_520}>
                  Correct: Moja rodina si kúpila 10 L
                </p>
                <p className={styles.block_521}>pomarančového džúsu.</p>
                <p className={styles.block_522}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    moja rodina si kúpila desať{' '}
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_1}>
                    litrov pomarančového džúsu{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_4}>
                    Correct: Je to odtiaľto tak 100 m.{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    je to odtiaľto tak sto metrov{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_525}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_526}>
                  Correct: Nastav budík na 5:45.
                </p>
                <p className={styles.block_527}>
                  Incorrect: Nastav budík na 545.
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>nastav budík na päť </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_1}>štyridsaťpäť </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_530}>Slang terms (spell them out)</p>
                <p className={styles.block_531}>● litrov</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_4}>Correct: 12. júla 1964 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    dvanásteho júla tisíc deväťsto{' '}
                  </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_1}>šesťdesiatštyri </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_4}>
                    Correct: Streda, 6. marca{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>streda šiesteho marca </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_537}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_13}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_14}>
                    <sub className={styles.calibre2}>Correct: 3:00 </sub>
                  </span>
                  <span className={styles.text_15}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_16}>
                    <sub className={styles.calibre2}>tri hodiny </sub>
                  </span>
                  <span className={styles.text_15}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_4}>
                    Correct: Nastav budík na 4:00.{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>nastav budík na švrtú </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_4}>Correct: 1:50 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>jedna päťdesiat </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_4}>Correct: okolo 8 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>okolo ôsmej </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_542}>
                  Correct: Stretneme sa o 17:00.
                </p>
                <p className={styles.block_543}>
                  Incorrect: Stretneme sa o 5 poobede.
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    stretneme sa o piatej poobede{' '}
                  </span>
                </p>
                <p className={styles.block_545}>"</p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_548}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_549}>
                  Correct: Martinus, Obchodná 26
                </p>
                <p className={styles.block_550}>
                  Correct: športové potreby, 040 18
                </p>
                <p className={styles.block_551}>
                  Correct: MUDr. Anita Hajašová, Nitra
                </p>
                <p className={styles.block_552}>Correct: cirkulárka, Trnava</p>
                <p className={styles.block_553}>
                  Correct: predstavenie Testosterón, Nitra
                </p>
                <p className={styles.block_551}>
                  Correct: Natur Vital, Grösslingova 33
                </p>
                <p className={styles.block_554}>
                  Correct: Zimný štadión Pavla Demitru, Trenčín
                </p>
                <p className={styles.block_555}>
                  Correct: Eurovea Galleria, Bratislava
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_4}>Correct: www.google.sk </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    w w w bodka google bodka s k{' '}
                  </span>
                </p>
                <p className={styles.block_452}>"</p>
                <p className={styles.block_559}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>amazon bodka com </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_4}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    h t t p dvojbodka lomka lomka{' '}
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_1}>
                    jedna dva tri bodka com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_4}>
                    Correct: mike@priklad.org{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    mike zavináč priklad bodka{' '}
                  </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_1}>org </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_4}>
                    Correct: Milujem pizzu. #hladný{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    milujem pizzu hashtag hladný{' '}
                  </span>
                </p>
                <p className={styles.block_452}>"</p>
                <p className={styles.block_564}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_4}>
                    Correct: www.google.com.ph{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    w w bodka google bodka com{' '}
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_1}>bodka p h </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_566}>
                  Explanation: If the user mistakenly says "ww",
                </p>
                <p className={styles.block_567}>transcribe "www".</p>
                <p className={styles.block_568}>
                  <span className={styles.text_4}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>w w w forbes bodka com </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_569}>
                  Explanation: Also transcribe the dot in an
                </p>
                <p className={styles.block_570}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_571}>include it.</p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_574}>
                  Correct: Poslanci schválili takzvaný
                </p>
                <p className={styles.block_575}>protischránkový zákon.</p>
                <p className={styles.block_576}>
                  Incorrect: Poslanci schválili tzv.
                </p>
                <p className={styles.block_577}>protischránkový zákon.</p>
                <p className={styles.block_578}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    poslanci schválili takzvaný{' '}
                  </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_1}>protischránkový zákon </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_580}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.
                </p>
                <p className={styles.block_581}>
                  Correct: Poznám MUDr. Hollého.
                </p>
                <p className={styles.block_582}>
                  Correct: P. Stránska nie je k dispozícii.
                </p>
                <p className={styles.block_583}>
                  Correct: Hej, pane, je to moja sestra.
                </p>
                <p className={styles.block_584}>
                  Correct: Bol tam Ján Šuster ml.
                </p>
                <p className={styles.block_585}>
                  Correct: Tento rok je juniorka.
                </p>
                <p className={styles.block_586}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_4}>
                    Correct: MP3, J&amp;T, SAV{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Format" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Format

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
