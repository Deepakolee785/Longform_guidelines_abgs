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
            <PageContentHeader currentPage="Longform Noreweign" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: null en en to tre fem åtte tretten
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_4}>
                    Correct: 5 4 3 2 1 pang{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: list of numbers, no comma if just
                  </span>
                </p>
                <p className={styles.block_553}>counting</p>
                <p className={styles.block_554}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_555}>
                  Correct: De trenger 1/4 kg sukker.
                </p>
                <p className={styles.block_556}>
                  Incorrect: De trenger en kvart kg sukker.
                </p>
                <p className={styles.block_557}>
                  Incorrect: De trenger 1 / 4 kg sukker.
                </p>
                <p className={styles.block_558}>
                  Incorrect: De trenger 1⁄4 kg sukker. (bad because
                </p>
                <p className={styles.block_559}>
                  it includes the pre-combined fraction 1⁄4)
                </p>
                <p className={styles.block_489}>
                  Incorrect: De trenger 0,25 kg sukker.
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    de trenger en kvart kilo sukker{' '}
                  </span>
                </p>
                <p className={styles.block_561}>"</p>
                <p className={styles.block_562}>
                  Correct: Etter 1/2 km, sving til venstre.
                </p>
                <p className={styles.block_563}>
                  Incorrect: Etter en halv kilometer, sving til
                </p>
                <p className={styles.block_564}>venstre.</p>
                <p className={styles.block_565}>
                  Incorrect: Etter 0,5 km, sving til venstre.
                </p>
                <p className={styles.block_566}>
                  Incorrect: Etter en todels kilometer, sving til
                </p>
                <p className={styles.block_564}>venstre.</p>
                <p className={styles.block_567}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    etter en halv kilometer sving til{' '}
                  </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_1}>venstre </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_569}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_570}>
                  Correct: Gi meg halvparten av paien.
                </p>
                <p className={styles.block_571}>
                  Incorrect: Gi meg 1/2 av paien.
                </p>
                <p className={styles.block_572}>
                  Incorrect: Gi meg 0,5 av paien.
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    gi meg halvparten av paien{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_574}>
                  Correct: fem seksdeler av et eple
                </p>
                <p className={styles.block_575}>Incorrect: 5/16 av et eple</p>
                <p className={styles.block_576}>Incorrect: 0,3125 av et eple</p>
                <p className={styles.block_577}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    fem seksdeler av et eple{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_578}>
                  Correct: tre og en halv appelsin
                </p>
                <p className={styles.block_579}>Incorrect: 3,5 appelsin</p>
                <p className={styles.block_580}>Incorrect: 3 1/2 appelsin</p>
                <p className={styles.block_581}>
                  Incorrect: 3 og en halv appelsin
                </p>
                <p className={styles.block_582}>
                  Explanation: tre og en halv appelsin
                </p>
                <p className={styles.block_583}>
                  Correct: 12 og en halv gresskarpai ble bakt.
                </p>
                <p className={styles.block_584}>
                  Incorrect: 12,5 gresskarpai ble bakt.
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tolv og en halv gresskarpai ble{' '}
                  </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_1}>bakt </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_587}>
                  Incorrect: tolv og en halv gresskarpai ble bakt.
                </p>
                <p className={styles.block_588}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_4}>
                    Correct: Kan du låne meg 20,50 kr?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    kan du låne meg tjue kroner og{' '}
                  </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_1}>femti øre </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_4}>
                    Correct: Hun kjøpte hytta for 1 million.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hun kjøpte hytta for en million{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_591}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_592}>Correct: 2% fett</p>
                <p className={styles.block_593}>Correct: 1 million prosent</p>
                <p className={styles.block_594}>
                  Correct: 50% av kakene forsvant.
                </p>
                <p className={styles.block_595}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_596}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_4}>Correct: Kong Olav V </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>kong olav den femte </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_598}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_4}>
                    Correct: sesong 3 episode 2{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>sesong tre episode to </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_600}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_4}>Correct: 22 42 63 25 </span>
                  <span className={styles.text_5}>Explanation: landline </span>
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_4}>Correct: 815 00 015 </span>
                  <span className={styles.text_5}>
                    Explanation: toll-free number{' '}
                  </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_4}>Correct: 913 84 242 </span>
                  <span className={styles.text_5}>
                    Explanation: mobile number{' '}
                  </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_4}>
                    Correct: +47 22 42 63 25{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: landline with country code{' '}
                  </span>
                </p>
                <p className={styles.block_605}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_606}>Correct: XT 660 or XT660</p>
                <p className={styles.block_607}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_4}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    fem delt på seks i tredje{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_609}>Correct: Hva er 5 * 6?</p>
                <p className={styles.block_610}>
                  Incorrect: Hva er fem ganger seks?
                </p>
                <p className={styles.block_611}>
                  Incorrect: Hva er 5 ganger 6?
                </p>
                <p className={styles.block_612}>Incorrect: Hva er 5 x 6?</p>
                <p className={styles.block_613}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>hva er fem ganger seks </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_8}>Correct: √3 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>kvadratroten av tre </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_4}>
                    Correct: Hvor mye er 8 timer * 12 kr?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hvor mye er åtte timer ganger{' '}
                  </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_1}>tolv kroner </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_4}>
                    Correct: Hvor mye er to elg delt på en hval?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Does not sound like a true math
                  </span>
                </p>
                <p className={styles.block_618}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_621}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_622}>
                  Correct: Jeg trenger femten eller tjue kroner.
                </p>
                <p className={styles.block_318}>Correct: ti femten kroner</p>
                <p className={styles.block_623}>
                  <span className={styles.text_4}>
                    Correct: 100 til 500 kroner{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hundre til femhundre kroner{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_4}>Correct: 9 til 12 euro </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ni til tolv euro </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_625}>Correct: en eller to kroner</p>
                <p className={styles.block_626}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_4}>
                    Correct: Familien kjøpte 10 l eplesaft.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    familen kjøpte ti liter eplesaft{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_628}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_629}>
                  Correct: De mottok 1 millioner kr in donasjoner.
                </p>
                <p className={styles.block_630}>
                  Incorrect: De mottok 1,000,000 kr i donasjoner.
                </p>
                <p className={styles.block_631}>
                  Correct: Jeg har bodd her i 6 måneder.
                </p>
                <p className={styles.block_632}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_4}>
                    Correct: Bensin er 13 kr literen.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    bensin er tretten kroner literen{' '}
                  </span>
                </p>
                <p className={styles.block_634}>"</p>
                <p className={styles.block_635}>
                  <span className={styles.text_4}>
                    Correct: Boller er 5 kr stykket.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    boller er fem kroner stykket{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_4}>
                    Correct: Sett alarmen til 5:45.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sett alarmen til fem førtifem{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_637}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_638}>● megabyte - MB</p>
                <p className={styles.block_639}>● kilobyte - kB</p>
                <p className={styles.block_640}>● gigabyte - GB</p>
                <p className={styles.block_641}>● terabyte - TB</p>
                <p className={styles.block_642}>Slang terms (spell them out)</p>
                <p className={styles.block_643}>● kilo</p>
                <p className={styles.block_644}>● gigs</p>
                <p className={styles.block_645}>● spenn</p>
                <p className={styles.block_646}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_647}>● millimeter - mm</p>
                <p className={styles.block_647}>● centimeter - cm</p>
                <p className={styles.block_648}>● meter - m</p>
                <p className={styles.block_649}>● kilometer - km</p>
                <p className={styles.block_650}>● kilometer i timen - km/h</p>
                <p className={styles.block_651}>Common measurements of area</p>
                <p className={styles.block_650}>● kvadratcentimeter - cm2</p>
                <p className={styles.block_652}>● kvadratmeter - m2</p>
                <p className={styles.block_653}>● kvadratkilometer - km2</p>
                <p className={styles.block_654}>Common scientific terms</p>
                <p className={styles.block_655}>● desibel - dB</p>
                <p className={styles.block_656}>● Newton - N</p>
                <p className={styles.block_657}>● Joule - J</p>
                <p className={styles.block_658}>● parsec - parsec</p>
                <p className={styles.block_659}>● ampere - amp</p>
                <p className={styles.block_660}>● Hertz - Hz</p>
                <p className={styles.block_657}>● Watt - W</p>
                <p className={styles.block_661}>● Kilowatt - kW</p>
                <p className={styles.block_662}>● mol - mol</p>
                <p className={styles.block_663}>● Candela - cd</p>
                <p className={styles.block_664}>● lumen - lm</p>
                <p className={styles.block_665}>● grader - °</p>
                <p className={styles.block_666}>● Fahrenheit - F</p>
                <p className={styles.block_667}>● Celsius - C</p>
                <p className={styles.block_668}>● grad(er) Celsius - C</p>
                <p className={styles.block_669}>● Kelvin - K</p>
                <p className={styles.block_670}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_671}>● liter - l</p>
                <p className={styles.block_672}>● teskje - ts</p>
                <p className={styles.block_666}>● spiseskje - ss</p>
                <p className={styles.block_673}>● gram - g</p>
                <p className={styles.block_674}>● milligram - mg</p>
                <p className={styles.block_661}>● kilogram - kg</p>
                <p className={styles.block_675}>● kubikkenhet - 3</p>
                <p className={styles.block_676}>● kubikkmeter - m3</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_4}>
                    Correct: 12. juli, 1964{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    tolvte juli nitten sekstifire{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_4}>Correct: høsten 78 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>høsten syttiåtte </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_4}>
                    Correct: rest fra 90-tallet{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>rest fra nittitallet </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_4}>
                    Correct: Onsdag 6. mars{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>onsdag sjette mars </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_683}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_4}>Correct: 7.12.2010 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sju punktum tolv punktum to{' '}
                  </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_1}>tusen og ti </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>
                    Correct: Utløpsdatoen er 05.10.2012.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    utløpsdatoen er null fem{' '}
                  </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_1}>
                    punktum ti punktum to tusen og tolv{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_688}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_11}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_12}>
                    <sub className={styles.calibre2}>Correct: 3:00 </sub>
                  </span>
                  <span className={styles.text_13}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_14}>
                    <sub className={styles.calibre2}>klokken tre </sub>
                  </span>
                  <span className={styles.text_13}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_4}>Correct: 4:00 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>fire </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_4}>Correct: 3:15 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>kvart over tre </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_692}>
                  <span className={styles.text_4}>Correct: 6:05 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>fem over seks </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_4}>Correct: 3:15 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tre femten </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_4}>Correct: 1:50 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ti på to </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_4}>Correct: 18:00 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>klokken atten </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_4}>
                    Correct: noen minutter etter 3:00{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    noen minutter etter tre{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_4}>Correct: kvart på 2:50 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>kvart på eh ti på tre </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_4}>Correct: rundt 8 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>rundt åtte </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_701}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_702}>
                  Correct: Paléet, Karl Johans gate
                </p>
                <p className={styles.block_703}>
                  Correct: Postboks 2674 Solli, 0203 Oslo
                </p>
                <p className={styles.block_704}>
                  Correct: Henrik Ibsens gate 110, Oslo
                </p>
                <p className={styles.block_705}>Correct: Volvat, Oslo</p>
                <p className={styles.block_706}>Correct: kino, Ålesund</p>
                <p className={styles.block_212}>
                  Correct: forestillinger, Et Dukkehjem, Bergen
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_4}>
                    Correct: www.google.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>w w w punktum google </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_1}>punktum com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>amazon punktum com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_4}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p kolon skråstrek{' '}
                  </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_1}>
                    skråstrek one two three punktum com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_4}>
                    Correct: mike@eksempel.org{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    mike krøllalfa eksempel{' '}
                  </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_1}>punktum org </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_4}>
                    Correct: Jeg elsker pizza. #sulten{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    jeg elsker pizza hashtag{' '}
                  </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_1}>sulten </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_717}>
                  <span className={styles.text_4}>
                    Correct: #sulten Hvor er pizzaen min?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hashtag sulten hvor er pizzaen{' '}
                  </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_1}>min </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_719}>
                  Correct: Jeg er så #sulten at jeg kunne spist en
                </p>
                <p className={styles.block_387}>hel pizza.</p>
                <p className={styles.block_720}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jeg er så hashtag sulten at jeg{' '}
                  </span>
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_1}>
                    kunne spist en hel pizza{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_722}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_723}>
                  <span className={styles.text_4}>
                    Correct: http://aftenposten.no{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p kolon skråstrek{' '}
                  </span>
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_1}>
                    skråstrek aftenposten punktum n o{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_4}>
                    Correct: http:\\mail.yahoo.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>h t t p kolon omvendt </span>
                </p>
                <p className={styles.block_726}>
                  skråstrek omvendt skråstrek mail punktum
                </p>
                <p className={styles.block_727}>
                  <span className={styles.text_1}>yahoo punktum com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_683}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_4}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>w w punktum amazon </span>
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_1}>punktum com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_730}>
                  Explanation: If the user mistakenly says "ww",
                </p>
                <p className={styles.block_731}>transcribe "www".</p>
                <p className={styles.block_711}>
                  <span className={styles.text_4}>Correct: google.co.uk </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>google punktum co u k </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_732}>
                  Explanation: Also transcribe the dot in an
                </p>
                <p className={styles.block_733}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_734}>include it.</p>
                <p className={styles.block_623}>
                  <span className={styles.text_4}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w w forbes punktum com{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_735}>
                  <span className={styles.text_4}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w facebook punktum com{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_357}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_4}>
                    Correct: www.target.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w w punktum t a r g e t{' '}
                  </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_1}>punktum c o m </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_740}>
                  Correct: Warriors versus Lakers
                </p>
                <p className={styles.block_741}>
                  Incorrect: Warriors vs. Lakers
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>warriors versus lakers </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>
                    Correct: Warriors v s Lakers{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>warriors v s lakers </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_744}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_4}>Correct: AT&amp;T, MP3 </span>
                  <span className={styles.text_5}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
                <p className={styles.block_746}>
                  Correct: US, USA, Washington DC, John F
                </p>
                <p className={styles.block_747}>Kennedy, TJ Smith</p>
                <p className={styles.block_748}>
                  Explanation: geographic and personal names
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>
                    Correct: NASA, SAS, PIN-kode{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: pronounced as words{' '}
                  </span>
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_4}>Correct: wtf, lol </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>el oh el </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_751}>
                  Explanation: interjection acronyms
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_4}>Correct: lol </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>lol </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_4}>Correct: scuba, radar </span>
                  <span className={styles.text_5}>
                    Explanation: extremely lexicalized acronyms
                  </span>
                </p>
                <p className={styles.block_754}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_755}>
                  <span className={styles.text_4}>
                    Correct: Joh. Johannson{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Official brand name as seen in the
                  </span>
                </p>
                <p className={styles.block_756}>
                  privacy policy includes periods.
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
