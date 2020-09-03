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
            <PageContentHeader currentPage="longform Slovene" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Write small numbers (0 to 9) as words and larger numbers (10
                  and above) using digits. However, you may write small numbers
                  using digits if they appear in a list, in mathematical
                  expression, as street numbers, as a measure or time unit.
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_4}>
                    Correct: V razredu je devet učencev.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: numbers less than 10{' '}
                  </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_4}>
                    Correct: V razredu je 13 učencev.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: numbers 10 or above{' '}
                  </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_4}>
                    Correct: Imam šest psov in 12 papig.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Follow this rule even if the noun
                  </span>
                </p>
                <p className={styles.block_412}>
                  phrases with numbers are coordinated.
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_4}>Correct: 3,14 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>tri cele štirinajst </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_414}>Explanation: decimal numbers</p>
                <p className={styles.block_415}>
                  If a large number consists of only a number followed by
                  "milijon", "milijarde", or higher, then transcribe as a
                  numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_4}>
                    Correct: 1 milijon gosi{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>en milijon gosi </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_4}>Correct: milijon gosi </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>milijon gosi </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_4}>Correct: 1.000 gosi </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>tisoč gosi </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_4}>
                    Correct: 1,5 milijarde USD{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    ena cela pet milijarde dolarjev{' '}
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_10}>" </span>
                  <span className={styles.text_11}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_12}>
                    <sub className={styles.calibre2}>
                      milijarda in pol dolarjev{' '}
                    </sub>
                  </span>
                  <span className={styles.text_11}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_4}>
                    Correct: 1,5 milijarde EUR{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    ena cela pet milijarde evrov{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>milijarda in pol evrov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_423}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    nič ena ena dve tri pet osem{' '}
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_1}>trinajst </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_4}>Correct: 3 2 1 bum </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>tri dve ena bum </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_427}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_428}>counting</p>
                <p className={styles.block_220}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_4}>
                    Correct: Potrebujejo 1/4 kg sladkorja.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    potrebujejo četrt kilograma{' '}
                  </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_1}>sladkorja </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_4}>
                    Correct: Potrebuješ 3/8-1 nasadni ključ.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>potrebuješ triosminski </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_1}>enonasadni ključ </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_433}>
                  Explanation: This is a prenominal use, so use a
                </p>
                <p className={styles.block_434}>hyphen after the fraction.</p>
                <p className={styles.block_435}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_4}>
                    Correct: Ali mi lahko posodiš 2,50 EUR?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    ali mi lahko posodiš dva evra{' '}
                  </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_1}>in pol </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_4}>
                    Correct: Kupila je hišo za 7,5 milijona evrov.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kupila je hišo za sedem in pol{' '}
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_1}>milijona evrov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_440}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_441}>Correct: 2 % mleko</p>
                <p className={styles.block_442}>Correct: milijon odstotkov</p>
                <p className={styles.block_443}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_4}>
                    Correct: kraljica Elizabeta II{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kraljica elizabeta druga{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_4}>
                    Correct: revija Jana, letnik XX, št. 17{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    revija jana letnik dvajset{' '}
                  </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_1}>številka sedemnajst </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_4}>
                    Correct: Ulica XIV. divizije 16a{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    ulica štirinajste divizije{' '}
                  </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_1}>šestnajst a </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_449}>Explanation: address</p>
                <p className={styles.block_450}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>Correct: 040 123 456 </span>
                  <span className={styles.text_7}>
                    Explanation: mobile phone number{' '}
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_4}>Correct: 03 123 45 67 </span>
                  <span className={styles.text_7}>Explanation: landline </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_4}>
                    Correct: +386 1 123 45 67{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    plus tri osem šest ena ena dva{' '}
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_1}>
                    tri štiri pet šest sedem{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_455}>
                  Explanation: landline with country code
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_4}>
                    Correct: 123 456 78 interna 54{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    ena dva tri štiri pet šest sedem{' '}
                  </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_1}>
                    osem interna štiriinpetdeset{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_4}>Correct: 080 17 00 </span>
                  <span className={styles.text_7}>
                    Explanation: toll-free number{' '}
                  </span>
                </p>
                <p className={styles.block_459}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_460}>Correct: XT 660 or XT660</p>
                <p className={styles.block_461}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_4}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    pet deljeno s šest na tretjo{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    pet deljeno s šest na tretjo{' '}
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_1}>potenco </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    pet deljeno s šest na tri{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    pet deljeno s šest na kub{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_4}>
                    Correct: Koliko je 5 x 6?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    koliko je pet krat šest{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_13}>Correct: √3 </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>koren iz tri </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>kvadratni koren iz tri </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_4}>
                    Correct: Koliko je 8 ur x 12 EUR?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    koliko je osem ur krat dvanajst{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_1}>evrov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_471}>
                  Correct: Koliko je pet hrušk deljeno s tremi
                </p>
                <p className={styles.block_472}>jabolki?</p>
                <p className={styles.block_473}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_474}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>Correct: 10 EUR </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>deset evrov </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_4}>
                    Correct: Koliko je 20 EUR v USD?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    koliko je dvajset evrov v{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_1}>ameriških dolarjih </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_480}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_481}>
                  Correct: Porabil sem pet jurjev.
                </p>
                <p className={styles.block_482}>
                  Incorrect: Porabil sem 5.000 EUR.
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>porabil sem pet jurjev </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_484}>Correct: 200 jenov</p>
                <p className={styles.block_485}>Incorrect: 200 ¥</p>
                <p className={styles.block_486}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>dvesto jenov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_487}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_488}>Correct: Zunaj je 20°.</p>
                <p className={styles.block_489}>
                  Correct: Na Gorenjskem je pet pod ničlo.
                </p>
                <p className={styles.block_490}>
                  Incorrect: Na Gorenjskem je -5.
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    na gorenjskem je pet pod ničlo{' '}
                  </span>
                </p>
                <p className={styles.block_492}>"</p>
                <p className={styles.block_493}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_4}>
                    Correct: Spili smo 7 l vina.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    spili smo sedem litrov vina{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_4}>
                    Correct: Kupila bo 3 kg grozdja.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kupila bo tri kilograme grozdja{' '}
                  </span>
                </p>
                <p className={styles.block_495}>"</p>
                <p className={styles.block_496}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_497}>
                  Correct: Nastavi budilko ob 5.45.
                </p>
                <p className={styles.block_498}>
                  Incorrect: Nastavi budilko ob 545.
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>nastavi budilko ob pet </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_1}>petinštirideset </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_4}>
                    Correct: 12. julij 1964{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    dvanajsti julij tisoč devetsto{' '}
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_1}>štiriinšestdeset </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_4}>Correct: jeseni 78. </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    jeseni oseminsedemdeset{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_4}>
                    Correct: glasba iz 80. let{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    glasba iz osemdesetih let{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_4}>
                    Correct: sreda, 6. marca{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>sreda šestega marca </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_16}>
                    Write times in hh.mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                </p>
                <p className={styles.text_17}>
                  <sub className={styles.calibre2}>Correct: ob 3.00 </sub>
                </p>
                <p className={styles.text_18}>
                  <sub className={styles.calibre2}>
                    Example audio: "ob treh"{' '}
                  </sub>
                </p>

                <p className={styles.block_509}>
                  <span className={styles.text_4}>
                    Correct: Nastavi budilko ob 4.00.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    nastavi budilko ob štirih{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_4}>Correct: 1.50 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>deset do dveh </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_4}>Correct: okrog 8.00 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>okrog osmih </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_512}>
                  For "poldne" and "polnoč", use the written form.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_4}>Correct: poldne </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>poldne </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_4}>Correct: polnoč </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>polnoč </span>
                  <span className={styles.text_5}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_517}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_518}>
                  Correct: McDonald's, Čopova ulica
                </p>
                <p className={styles.block_519}>Correct: kavarne, 4000 Kranj</p>
                <p className={styles.block_520}>
                  Correct: Frizerstvo Petra, Ulica XX. divizije 16a,
                </p>
                <p className={styles.block_521}>
                  3250 Rogaška Slatina kavarne, 4000 Kranj
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    frizerstvo petra ulica dvajsete{' '}
                  </span>
                </p>
                <p className={styles.block_523}>
                  divizije šestnajst a tritisoč dvesto petdeset
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_1}>rogaška slatina </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_525}>
                  Correct: Osrednja knjižnica Celje, Muzejski trg
                </p>
                <p className={styles.block_526}>1a</p>
                <p className={styles.block_527}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    osrednja knjižnica celje{' '}
                  </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_1}>muzejski trg ena a </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_529}>
                  Explanation: If the speaker does not say the
                </p>
                <p className={styles.block_530}>
                  postal code, do not include it.
                </p>
                <p className={styles.block_531}>
                  Correct: prof. Novak, Ljubljana
                </p>
                <p className={styles.block_532}>Correct: krožna žaga, Stihl</p>
                <p className={styles.block_533}>
                  Correct: spored za film Levji kralj, Celje
                </p>
                <p className={styles.block_534}>
                  Correct: Gostilna Šestica, Slovenska cesta
                </p>
                <p className={styles.block_535}>
                  Correct: Hala Tivoli, Ljubljana
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_4}>Correct: www.google.si </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    w w w pika google pika s i{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>amazon pika com </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_4}>
                    Correct: mike@example.org{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    mike at example dot org{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_4}>
                    Correct: Obožujem pico. #lačen{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    obožujem pico hashtag lačen{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_542}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_4}>Correct: www.google.si </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    w w pika google pika s i{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_544}>
                  Explanation: If the user mistakenly says "ww",
                </p>
                <p className={styles.block_545}>transcribe "www".</p>
                <p className={styles.block_546}>
                  <span className={styles.text_4}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>w w w forbes pika com </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_547}>
                  Explanation: Also transcribe the dot in an
                </p>
                <p className={styles.block_548}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_549}>include it.</p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_552}>Correct: gospa Novak</p>
                <p className={styles.block_553}>Incorrect: ga. Novak</p>
                <p className={styles.block_554}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>gospa novak </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_555}>
                  Correct: Grem v Bosno in Hercegovino.
                </p>
                <p className={styles.block_556}>Incorrect: Grem v BiH.</p>
                <p className={styles.block_557}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    grem v bosno in hercegovino{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_558}>
                  Correct: Janez Kovač je diplomirani inženir.
                </p>
                <p className={styles.block_559}>
                  Incorrect: Janez Kovač je dipl. inž.
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    janez kovač je diplomirani{' '}
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_1}>inženir </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_561}>Correct: Ljubljana, SLO</p>
                <p className={styles.block_562}>
                  Incorrect: Ljubljana, Slovenija
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ljubljana slo </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_564}>
                  Do not capitalise titles for people.
                </p>
                <p className={styles.block_565}>Correct: Poznam dr. Novaka.</p>
                <p className={styles.block_566}>
                  Correct: Moj doktor mi je predpisal dieto.
                </p>
                <p className={styles.block_567}>Correct: Kličem g. Medveda.</p>
                <p className={styles.block_568}>Correct: Prišli so gospodje.</p>
                <p className={styles.block_569}>
                  Correct: Jože Jazbec ml. je bil tu.
                </p>
                <p className={styles.block_570}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_571}>
                  Correct: MP3 predvajalnik, EMŠO, NUK, RTV
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
