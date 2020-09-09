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
            <PageContentHeader currentPage="Longform Kannada" />
            <div className="content text">
              <p className={'large-heading'}>Format </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Only Western Arabic numerals should be used.
                </p>
                <p className={styles.block_220}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                </p>
                <p className={styles.block_407}>Correct: ತರಗ ಯ ಒಂಬತು ಜನ</p>
                <p className={styles.block_408}>ಗ</p>
                <p className={styles.block_409}>
                  Explanation: Numbers less than 10 should be
                </p>
                <p className={styles.block_410}>
                  written out, so the number 9 should be
                </p>
                <p className={styles.block_411}>written out as "ಒಂಬತು ".</p>
                <p className={styles.block_412}>
                  <span className={styles.text_20}>
                    Correct: ತರಗ ಯ 13 ಜನ ಗ .{' '}
                  </span>
                  <span className={styles.text_21}>
                    Explanation: Numbers 10 or above use digits.
                  </span>
                </p>
                <p className={styles.block_413}>
                  The number 13 should not be written out as
                </p>
                <p className={styles.block_414}>
                  "ಹ ಮೂರು", just use the digits "13".
                </p>
                <p className={styles.block_415}>
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10.
                </p>
                <p className={styles.block_416}>Correct: ನನ ಬ ಆರು ಗ ಮತು 12</p>
                <p className={styles.block_417}>ಗ .</p>
                <p className={styles.block_418}>
                  Transcribe all decimal numbers as digits.
                </p>
                <p className={styles.block_419}>Correct: 3.14</p>
                <p className={styles.block_420}>Incorrect: ಮೂರು ಂ ಒಂದು ಲು</p>
                <p className={styles.block_421}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಮೂರು ಂ ಒಂದು </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_11}>ಲು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_423}>
                  Explanation: Even though 3.14 is less than 10,
                </p>
                <p className={styles.block_424}>
                  the correct transcription uses digits and does
                </p>
                <p className={styles.block_425}>
                  not spell out "3.14" as "ಮೂರು ಂ
                </p>
                <p className={styles.block_426}>
                  ಒಂದು ಲು " because decimal numbers
                </p>
                <p className={styles.block_427}>always use digits.</p>
                <p className={styles.block_428}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_429}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_430}>Correct: 0 1 1 2 3 5 8 13</p>
                <p className={styles.block_431}>
                  Incorrect: 0, 1, 1, 2, 3, 5, 8, 13
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಒಂದು ಒಂದು ಎರಡು </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_11}>ಮೂರು ಐದು ಎಂಟು ಹ ಮೂರು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_434}>
                  If the speaker in the audio says one number followed by "ಲ ",
                  " ೕ ", "ನೂರು
                </p>
                <p className={styles.block_435}>
                  ೕ ", " ಯ " or higher, then transcribe as a numeral followed by
                  the word. Otherwise, transcribe as numerals following the
                  rules below.
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_13}>Example </span>
                  <span className={styles.text_6}>Correct: 1 lakh </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_12}>audio: " </span>
                  <span className={styles.text_11}>ಒಂದು ಲ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_438}>Incorrect: 1,00,000</p>
                <p className={styles.block_439}>
                  Use the Indian numbering system to format large numbers when
                  the speaker says "ಲ ", " ೕ ", "ನೂರು ೕ ".
                </p>
                <p className={styles.block_440}>Correct: 12,12,12,123</p>
                <p className={styles.block_441}>Incorrect: 121,212,123</p>
                <p className={styles.block_442}>
                  Explanation: This number is transcribed
                </p>
                <p className={styles.block_443}>
                  following the formatting rules of the Indian
                </p>
                <p className={styles.block_444}>
                  numbering system because the speaker said
                </p>
                <p className={styles.block_445}>"ಲ " and " ೕ ".</p>
                <p className={styles.block_446}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).
                </p>
                <p className={styles.block_447}>
                  For long numbers (4+ digits) indicating quantity, use a comma
                  to separate groups of three digits. However, if the number is
                  said with "ల ", " ", "వంద ", please follow the accepted format
                  for transcribing these numbers.
                </p>
                <p className={styles.block_448}>Correct: 10,000</p>
                <p className={styles.block_449}>Incorrect: 10000</p>
                <p className={styles.block_450}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಹತು ರ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_451}>Correct: 200,000</p>
                <p className={styles.block_438}>Incorrect: 2,00,000</p>
                <p className={styles.block_452}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಇನೂ ರು ರ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_453}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_8}>
                    Correct: ಅವ 1/4 . ಸಕ ಯ ಅವಶ ಕ ಇ .{' '}
                  </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಅವ ಒಂದು ಲು </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_11}>ೕ ಂ ಸಕ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_456}>Correct: ಒಂದು ಯ 3/4, ಬಲ ರು</p>
                <p className={styles.block_457}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals.
                </p>
                <p className={styles.block_458}>Correct: 3 1/2 km</p>
                <p className={styles.block_459}>Correct: 1/3 + 3 1/2</p>
                <p className={styles.block_460}>
                  If a fraction is referring to items (not measurement units or
                  math equations), transcribe the fraction in words.
                </p>
                <p className={styles.block_461}>
                  Mixed numbers that refer to items should be written out in
                  words if it's under 10, otherwise write it with numerals.
                </p>
                <p className={styles.block_462}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_463}>Correct: ನನ ಲ ರೂ.85.50</p>
                <p className={styles.block_464}>ಡು ?</p>
                <p className={styles.block_465}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ನನ ಲ ಎರಡೂವ ರೂ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_466}>Correct: ಅವ ಸನು 7.5 ಯ</p>
                <p className={styles.block_467}>ಲ ಂಡು ಂಡ .</p>
                <p className={styles.block_468}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>
                    ಅವ ಸನು ಏ ವ ಯ ಲರನು ಟು ಂಡು ಂಡ{' '}
                  </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_469}>
                  Explanation: Since the "seven and a half"
                </p>
                <p className={styles.block_470}>
                  represents currency, use the standard
                </p>
                <p className={styles.block_471}>
                  currency form "ರೂ.7.5" and since it's a value in
                </p>
                <p className={styles.block_472}>
                  the millions, write out the word " ಯ "
                </p>
                <p className={styles.block_473}>after.</p>
                <p className={styles.block_474}>
                  Transcribe percentages using numerals followed by the % sign.
                  In the unlikely case that you encounter a number of a million
                  or greater used as a percentage, spell it out.
                </p>
                <p className={styles.block_475}>Correct: 2%</p>
                <p className={styles.block_476}>
                  <span className={styles.text_20}>Correct: 1 ಯ ಪ ಶತ </span>
                  <span className={styles.text_21}>
                    Explanation: The rule regarding amounts in
                  </span>
                </p>
                <p className={styles.block_477}>
                  the millions or greater applies here so spell
                </p>
                <p className={styles.block_478}>
                  out " ಯ " and "ಪ ಶತ" but use the digit
                </p>
                <p className={styles.block_479}>
                  for the number in front ("1" not "one").
                </p>
                <p className={styles.block_480}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_481}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_482}>
                  For landline phone numbers, transcribe a space after the
                  operating code then transcribe the remaining digits together
                  with no spaces. For mobile numbers, transcribe a space after
                  the country code, and a dash after the fourth digit of the
                  phone number. Only transcribe a "+" is the speaker says
                  "plus".
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_6}>Correct: 011 20000198 </span>
                  <span className={styles.text_7}>
                    Explanation: This is a landline number so there
                  </span>
                </p>
                <p className={styles.block_484}>
                  is a dash after the operator code, 011. The rest
                </p>
                <p className={styles.block_485}>
                  of the digits are transcribed without spaces or
                </p>
                <p className={styles.block_486}>dashes.</p>
                <p className={styles.block_487}>
                  <span className={styles.text_6}>
                    Correct: 91 1234 123456{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: This is a mobile number so there is
                  </span>
                </p>
                <p className={styles.block_488}>
                  a dash after the country code, "91", and after the
                </p>
                <p className={styles.block_489}>
                  fourth digit of the phone number, "4". The
                </p>
                <p className={styles.block_490}>
                  remaining six digits are transcribed without
                </p>
                <p className={styles.block_491}>spaces or dashes.</p>
                <p className={styles.block_492}>
                  <span className={styles.text_14}>
                    Correct: +91 1234 123456{' '}
                  </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಪ ಒಂಬತು ಒಂದು ಒಂದು </span>
                </p>
                <p className={styles.block_493}>
                  ಎರಡು ಮೂರು ಲು ಒಂದು ಎರಡು ಮೂರು ಲು
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_11}>ಐದು ಆರು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_495}>
                  Explanation: Since the speaker says the word
                </p>
                <p className={styles.block_496}>
                  "ಪ " before the country code, a "+" sign is
                </p>
                <p className={styles.block_497}>transcribed.</p>
                <p className={styles.block_498}>
                  Transcribe alpha-digit sequences (product codes, car models,
                  etc.) in their most natural way (there may be more than one
                  way to transcribe). Do not transcribe credit card numbers or
                  any other personal information numbers.
                </p>
                <p className={styles.block_499}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.
                </p>
                <p className={styles.block_500}>Correct: 5 / 6 ^ 3</p>
                <p className={styles.block_501}>Incorrect: 5/6^3</p>
                <p className={styles.block_502}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಆರ ಐದರ ಘನಮೂಲ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_503}>Correct: 5 * 6 ಎಂದ ನು?</p>
                <p className={styles.block_504}>
                  <span className={styles.text_22}>Correct: √3 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಮೂರರ ವಗ ಮೂಲ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_8}>
                    Correct: 8 ಗಂ * ರೂ.12 ಎ ?{' '}
                  </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಎಂಟು ಗಂ ಸಮಯವನು </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_11}>ಹ ರಡು ಲ ನ ಗ ಎ ತ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_507}>
                  Explanation: "ಗಂ " is spelled out because it is
                </p>
                <p className={styles.block_508}>
                  a unit of measurement. However, currency is
                </p>
                <p className={styles.block_509}>
                  the one exception to this rule, so " ಲ ನ "
                </p>
                <p className={styles.block_510}>
                  is transcribed with the symbol, "$".
                </p>
                <p className={styles.block_511}>Correct: ಮೂರು ಸ ಯನು ಎರಡು</p>
                <p className={styles.block_512}>ಇ ನ ಂದ ಗ ಎ ತ ?</p>
                <p className={styles.block_513}>Explanation: " ಸ ಯನು " and</p>
                <p className={styles.block_514}>
                  "ಇ ನ ಂದ" are not useful units of
                </p>
                <p className={styles.block_515}>
                  measurement, so this is not a true math
                </p>
                <p className={styles.block_516}>
                  expression. The numbers and math operators
                </p>
                <p className={styles.block_517}>should be written out.</p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies with "ರೂ." followed by digits with no
                  spaces in between. Make sure to add the full stop "." after
                  "ರೂ".
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_8}>Correct: ರೂ.10 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಹತು ರೂ ಗ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_521}>
                  Explanation: Because "ಹತು ರೂ ಗ " is
                </p>
                <p className={styles.block_522}>
                  an amount of currency, it is written using the
                </p>
                <p className={styles.block_523}>
                  abbreviation "ರೂ." and the numeral "10".
                </p>
                <p className={styles.block_524}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with a currency symbol.
                </p>
                <p className={styles.block_525}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_526}>Correct: 300 ಯು ೕಗ</p>
                <p className={styles.block_527}>Incorrect: €300</p>
                <p className={styles.block_528}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಮೂರು ನೂರು ಯು ೕಗ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_529}>
                  Explanation: "ಯು ೕಗ " refers to a foreign
                </p>
                <p className={styles.block_530}>
                  currency. Transcribe the numbers as digits
                </p>
                <p className={styles.block_531}>
                  "300" and write out the word "ಯು ೕಗ ".
                </p>
                <p className={styles.block_532}>Don't use the euro symbol.</p>
                <p className={styles.block_533}>
                  When a speaker uses a currency name without specifying a
                  quantity, spell it out.
                </p>
                <p className={styles.block_534}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken. Keep units of measurement in
                  English. Do not transliterate.
                </p>
                <p className={styles.block_535}>Correct: 4 MB</p>
                <p className={styles.block_536}>Incorrect: 4 ಟ</p>
                <p className={styles.block_537}>Correct: 3 in</p>
                <p className={styles.block_538}>Incorrect: 3 ಇಂಚುಗ</p>
                <p className={styles.block_539}>Correct: 80 km/h</p>
                <p className={styles.block_540}>Incorrect: ಗಂ ೕ ಟ</p>
                <p className={styles.block_541}>Correct: 40 mi2</p>
                <p className={styles.block_542}>Incorrect: 40 ಚದುರ ಗ</p>
                <p className={styles.block_543}>Correct: 2 L</p>
                <p className={styles.block_544}>Incorrect: 2 ಟ</p>
                <p className={styles.block_545}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_546}>● MB</p>
                <p className={styles.block_547}>● KB</p>
                <p className={styles.block_548}>● GB</p>
                <p className={styles.block_547}>● TB</p>
                <p className={styles.block_549}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_550}>● in</p>
                <p className={styles.block_551}>● ft</p>
                <p className={styles.block_552}>● yd</p>
                <p className={styles.block_289}>● mi</p>
                <p className={styles.block_553}>● mm</p>
                <p className={styles.block_554}>● cm</p>
                <p className={styles.block_555}>● m</p>
                <p className={styles.block_554}>● km</p>
                <p className={styles.block_556}>● mph</p>
                <p className={styles.block_557}>● km/h</p>
                <p className={styles.block_558}>Common measurements of area</p>
                <p className={styles.block_559}>● km2</p>
                <p className={styles.block_560}>● in2</p>
                <p className={styles.block_561}>● ft2</p>
                <p className={styles.block_293}>● mi2</p>
                <p className={styles.block_562}>● cm2</p>
                <p className={styles.block_547}>● m2</p>
                <p className={styles.block_563}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_564}>● g</p>
                <p className={styles.block_554}>● mg</p>
                <p className={styles.block_289}>● kg</p>
                <p className={styles.block_565}>● L</p>
                <p className={styles.block_547}>● m3</p>
                <p className={styles.block_560}>● in3</p>
                <p className={styles.block_566}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_567}>
                  Abbreviate all units of measurement that are after numbers.
                </p>
                <p className={styles.block_568}>Correct: ನನ ಟುಂಬ 10 ತ ಸನು</p>
                <p className={styles.block_569}>ದು ಂ ತು.</p>
                <p className={styles.block_570}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ನನ ಟುಂಬ ಹತು ಟ </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_11}>ತ ಸನು ದು ಂ ತು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_572}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_573}>
                  For lengths, widths, and heights: use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_574}>
                  If a speaker says a number without saying "am", "pm" or
                  "o'clock", format it as time if it is obvious that the number
                  refers to a time.
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_8}>
                    Correct: ಅಲ ಂ ಅನು 5:45 ಇಡು.{' '}
                  </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಅಲ ಂನ ಐದೂ ನಲವ ದ </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_11}>ಇಡು </span>
                  <span className={styles.text_12}>" </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  When transcribing dates, write out the full name of the month
                  followed by the date in the ordinal form followed by a comma,
                  then the year in numeral form.
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_14}>Correct: 12, 1964 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಹ ರಡು ರದ </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_11}>ಒಂ ನೂರ ಅರವ ಲು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_8}>Correct: 80ರ ಸಂ ತ </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಎಂಬತ ರ ಸಂ ತ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_8}>Correct: ಬುಧ ರ, 6 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಆರ ಬುಧ ರ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_583}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe it as numerals with the proper punctuation
                  separating the month, date, and year.
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_23}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <sub className={styles.calibre3}>Correct: 3:00 </sub>
                  </span>
                  <span className={styles.text_25}>
                    <sub className={styles.calibre3}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_26}>
                    <sub className={styles.calibre3}>ಮೂರು ಗಂ </sub>
                  </span>
                  <span className={styles.text_25}>
                    <sub className={styles.calibre3}>" </sub>
                  </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_8}>
                    Correct: 4:00 ಗಂ ಅಲ ಂ ಇಡು{' '}
                  </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಲ ಅಲ ಂ ಇಡು </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_14}>Correct: 1:50 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಹತ ಂದ ಎರಡು </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_587}>
                  For "ಮ ಹ " and "ಮಧ ", use the written form.
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_590}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_591}>Correct: , ಂಗ ರು</p>
                <p className={styles.block_592}>Correct: , ಂಗ ರು</p>
                <p className={styles.block_593}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken.
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_14}>Correct: amazon.com </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಅ </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_8}>Correct: ಐ ಲ ಯೂ . #ಹಂ </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಐ ಲ ಯೂ </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_11}>ಹಂ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_599}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_600}>
                  If the speaker drops a "w" or "dot" and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_601}>Correct: www.google.com.ph</p>
                <p className={styles.block_602}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not transcribe abbreviated forms of words unless the
                  speaker says an abbreviated form.
                </p>
                <p className={styles.block_605}>Correct: ಉಡು , ದ.ಕ</p>
                <p className={styles.block_606}>Incorrect: ಉಡು , ದ ಣ ಕನ ಡ</p>
                <p className={styles.block_607}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಉಡು ದ ಕ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={'text'}>
                  For other proper names involving titles, use the official
                  spelling of the proper name. If you are not sure, do not
                  abbreviate the title.{' '}
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
