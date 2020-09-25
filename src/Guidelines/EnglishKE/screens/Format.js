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
            <PageContentHeader currentPage="Longform EnglishKE" />
            <div className="context text">
              <p className={'large-heading'}>Format </p>
              <p className={'text'}>
                <span className={styles.text_10}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this section.{' '}
                </span>
              </p>
              <div id="number">
                <p className={'heading'}>Number </p>
                <p className={styles.block_290}>
                  <span className={styles.calibre2}>
                    Cardinals and ordinals from 0 to 9 are written with letters
                    (except for measures and currency - see Currency and Unit).
                    Use digits for cardinals and ordinals 10 and above, even if
                    they are coordinated with numbers under 10. Transcribe all
                    decimal numbers as digits.
                  </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_12}>
                    Correct: There are eight students in the class.{' '}
                  </span>
                  <span className={styles.text_13}>
                    Explanation: numbers less than 10{' '}
                  </span>
                  <span className={styles.text_12}>
                    Correct: There are 14 students in the class{' '}
                  </span>
                  <span className={styles.text_13}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                  <span className={styles.text_12}>Correct: 3.14 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>three point one four </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.calibre2}>
                    Correct: Kenyatta University is the second largest public
                    university in Kenya.
                  </span>
                </p>
                <p className={styles.block_196}>
                  Explanation: Ordinals below 10.
                </p>
                <p className={styles.block_293}>
                  <span className={styles.calibre2}>
                    If a large number consists of only a number followed by
                    "million", "billion", "trillion", or higher, then transcribe
                    as a numeral plus word. Otherwise, transcribe as numerals.
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_12}>
                    Correct: a million geese{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>a million geese </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_12}>Correct: 1,000 geese </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>one thousand geese </span>
                  <span className={styles.text_13}>" Example audio: " </span>
                  <span className={styles.text_29}>a thousand geese </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_12}>Correct: 1.5 million </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    one point five million{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.calibre2}>
                    Correct: Nairobi is among the counties whose population is
                    more than 1 million.
                  </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      nairobi is among the counties whose population is more
                      than one million
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_299}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_12}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      zero one one two three five eight thirteen
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_12}>
                    Correct: 5 4 3 2 1 blast off{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: list of numbers, no comma if just counting
                    </span>
                  </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.calibre2}>
                    For long numbers (4+ digits) indicating quantity, insert the
                    relevant separator (comma, decimal point, or space,
                    depending on language).
                  </span>
                </p>
                <p className={styles.block_303}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_248}>
                  Correct: They need 1/4 lb of flour.
                </p>
                <p className={styles.block_304}>
                  Incorrect: They need a quarter pound of flour.
                </p>
                <p className={styles.block_305}>
                  Correct: In 2/3 km, turn left.
                </p>
                <p className={styles.block_306}>
                  Incorrect: In two thirds kilometers, turn left.
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      they need a quarter pound of flour
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.calibre2}>
                    Explanation: Here, the "a" before "quarter" is part of the
                    fraction, so don't include it in the transcription. Also, be
                    careful not to include spaces or pre-combined fraction
                    characters.
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      in two thirds kilometers turn left
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.calibre2}>
                    Explanation: If the speaker does not use "of a" or "a" after
                    the fraction, leave it out of the transcription.
                  </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_12}>
                    Correct: We need a 5/16-in screw.{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      we need a five sixteenth inch screw
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.calibre2}>
                    Explanation: This is a prenominal use, so you
                  </span>
                </p>
                <p className={styles.block_313}>
                  include the "a" and a hyphen after the fraction.
                </p>
                <p className={styles.block_314}>
                  <span className={styles.calibre2}>
                    When referring to items (not units or measures), write
                    fractions out in words. With mixed numbers, write the whole
                    number part out in words if it is under ten, otherwise write
                    it with numerals.
                  </span>
                </p>
                <p className={styles.block_315}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_12}>
                    Correct: Can you lend me Ksh 9.50?{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      can you lend me nine and a half shillings
                    </span>
                  </span>
                  <span className={styles.text_13}>"</span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.calibre2}>
                    Transcribe percentages using numerals and the % sign. (In
                    the unlikely case that you encounter a number of a million
                    or greater used as a percentage, spell it out.)
                  </span>
                </p>
                <p className={styles.block_318}>Correct: 2% milk</p>
                <p className={styles.block_319}>Correct: 1 million percent</p>
                <p className={styles.block_320}>
                  <span className={styles.calibre2}>
                    If a number appears in a context which calls for a certain
                    formatting in your language, use that formatting. Otherwise,
                    default to the general rule for transcribing numbers.
                  </span>
                </p>
                <p className={styles.block_321}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_322}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_323}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_12}>
                    Correct: +254 0722 250 330{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      plus two fifty four oh seven triple two fifty three thirty
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.calibre2}>
                    Explanation: Kenyan mobile number with{' '}
                  </span>
                </p>
                <p className={styles.block_326}>country code</p>
                <p className={styles.block_327}>
                  <span className={styles.text_12}>
                    Correct: +254 250 3300{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Kenyan landline number with country code
                    </span>
                  </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_12}>Correct: 020 6761784 </span>
                  <span className={styles.text_13}>
                    Explanation: Kenyan landline phone number
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_12}>Correct: 0734 600663 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      kenyan mobile phone number{' '}
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_12}>Correct: 0800 123 123 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>toll-free number </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.calibre2}>
                    Transcribe alpha-digit sequences (product codes etc.) in
                    their most natural way (possibly several ways accepted). Do
                    not transcribe credit card numbers, etc.
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.calibre2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols, with spaces in between.
                  </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_12}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      five divided by six to the third{' '}
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    five divided by six cubed{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_334}>Correct: What is 5 * 6?</p>
                <p className={styles.block_335}>
                  Incorrect: What is five times six? Incorrect: What is 5 times
                  6? Incorrect: What is 5 x 6?
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>what is five times six </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_30}>
                    <sub className={styles.calibre3}>Correct: √3 </sub>
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>square root of three </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.calibre2}>
                    Correct: How much is three alligators divided by two
                    iguanas?
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.calibre2}>
                    Explanation: Does not sound like a true math expression with
                    useful units.
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_341}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_12}>
                    Correct: How much is Ksh 1,000 in US Dollars?{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      how much is one thousand kenyan shillings in us dollars
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_12}>
                    Correct: Do you have $10?{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    do you have ten dollars{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_13}>
                    For all other currencies and slang terms for money, spell
                    out the words.{' '}
                  </span>
                  <span className={styles.text_12}>
                    Correct: I gave him 20 bob.{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>i gave him twenty bob </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_12}>Correct: 200 yen </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>two hundred yen </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_346}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_347}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_12}>Correct: It's 11°. </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>it's eleven degrees </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_12}>
                    Correct: It's 27° C in Nairobi{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      it's twenty seven degrees celsius in nairobi
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_350}>Correct: It's 20° C.</p>
                <p className={styles.block_351}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_352}>
                  <span className={styles.calibre2}>
                    Correct: How much is 5 Kg of sugar at Naivas Supermarket?
                  </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      how much is five kilograms of sugar at naivas supermarket
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_354}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_355}>
                  <span className={styles.calibre2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time, format it as such.
                  </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_12}>
                    Correct: Milk is Ksh 70.{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      milk is seventy kenyan shillings{' '}
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_12}>
                    Correct: Equity Bank opens at 8:30.{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      equity bank opens at eight thirty
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_358}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one megabyte - 1 MB </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one kilobyte - 1 kB </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one gigabyte - 1 GB </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one terabyte - 1 TB </span>
                </p>
                <p className={styles.block_362}>Slang terms (spell them out)</p>
                <p className={styles.block_363}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>kilo </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>gigs </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>bucks</span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    grand (thousands of [units in currency]){' '}
                  </span>
                </p>
                <p className={styles.block_366}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one inch - 1 in </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one foot - 1 ft </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one yard - 1 yd </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one mile - 1 mi </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one millimeter - 1 mm </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one centimeter - 1 cm </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one meter - 1 m </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one kilometer - 1 km </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one miles per hour - 1 mph{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one miles an hour - 1 mph{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one kilometers per hour - 1 km/h{' '}
                  </span>
                </p>
                <p className={styles.block_366}>Common measurements of area</p>
                <p className={styles.block_363}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one square inch - 1 in²{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one square foot - 1 ft²{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one square mile - 1 mi²{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one square centimeter - 1 cm²{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one square meter - 1 m²{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one meter squared - 1 m²{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>
                    one square kilometer - 1 km²{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one acre - 1 acre </span>
                </p>
                <p className={styles.block_366}>Common scientific terms</p>
                <p className={styles.block_359}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one decibel - 1 dB </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Newton - 1 N </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Joule - 1 J </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one parsec - 1 parsec</span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one ampere - 1 amp </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Hertz - 1 Hz </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Watt - 1 W </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Kilowatt - 1 kW </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one mole - 1 mol </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Candela - 1 cd </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one lumen - 1 lm </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one degree(s) - 1° </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Fahrenheit - 1 F </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Celsius - 1 C </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Centigrade - 1 C </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one Kelvin - 1 K </span>
                </p>
                <p className={styles.block_366}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one pound - lb </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one ounce - oz </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one quart - q </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one liter - L </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one teaspoon - tsp </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one tablespoon - Tbsp </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one gram - g </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one milligram - mg </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one kilogram - kg </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one cubic unit - ³ </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one cubic meter - m³ </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_33}>● </span>
                  <span className={styles.text_34}>one cubic inch - in³ </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_371}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_372}>
                  <span className={styles.calibre2}>
                    Correct: Kenya became independent on December 12, 1964.
                  </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      kenya became independent on december twelve nineteen sixty
                      four
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_12}>
                    Correct: music of the '80s{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>music of the eighties </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.calibre2}>
                    Correct: She is coming back on thursday, November 3rd.
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      she is coming back on thursday november third
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_377}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such. Use the natural form for transcribing
                  times whenever possible.
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_13}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_12}>Correct: 5:00 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>five o'clock </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_12}>Correct: 3:15 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>three fifteen </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_12}>Correct: around 8ish </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>around eightish </span>
                  <span className={styles.text_13}>
                    " Explanation: Looks unnatural with 8:00ish.
                  </span>
                </p>
                <p className={styles.block_380}>Use p.m. and a.m. if spoken.</p>
                <p className={styles.block_348}>
                  <span className={styles.text_12}>Correct: 12:00 p.m. </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>twelve o'clock p m </span>
                  <span className={styles.text_13}>"</span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.calibre2}>
                    Correct: Kenyatta National Hospital lunchtime visits starts
                    from 1:00 p.m.
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_383}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    <span className={styles.calibre2}>
                      kenyatta national hospital lunchtime visits starts from
                      one o'clock p m
                    </span>
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.calibre2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when explicitly spoken.
                  </span>
                </p>
                <p className={styles.block_385}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_386}>
                  Correct: The Karen Hub, Dagoretti Road
                </p>
                <p className={styles.block_387}>
                  Correct: Hilton Hotel, Kenyatta Avenue
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_389}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_12}>
                    Correct: www.google.co.ke{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      w w w dot google dot c o dot k e{' '}
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_12}>
                    Correct: info@nairobiy.co.ke{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      info at nairobi y dot c o dot k e
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.calibre2}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says "backslash".
                  </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.calibre2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these errors. If the speaker doesn't say
                    the "w"s at all, do not add them.
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_12}>
                    Correct: www.digitaly.co.ke{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre2}>
                      w w dot digitaly do c o dot k e{' '}
                    </span>
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww",
                  </span>
                </p>
                <p className={styles.block_396}>transcribe "www".</p>
                <p className={styles.block_397}>
                  <span className={styles.text_10}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual letters.{' '}
                  </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation </p>
                <p className={styles.block_398}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_12}>
                    Correct: Nairobi Hospital, Nairobi{' '}
                  </span>
                  <span className={styles.text_13}>
                    Incorrect: Nrb Hospital, Nairobi{' '}
                  </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    nairobi hospital hairobi{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_401}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.
                </p>
                <p className={styles.block_386}>
                  <span className={styles.calibre2}>
                    Correct: Mrs. Kayo is a teacher at Thika Junior
                  </span>
                </p>
                <p className={styles.block_402}>School.</p>
                <p className={styles.block_387}>
                  <span className={styles.calibre2}>
                    Correct: I met the doctor in charge at the
                  </span>
                </p>
                <p className={styles.block_403}>Doctors' Plaza.</p>
                <p className={styles.block_404}>
                  <span className={styles.calibre2}>
                    Correct: Dr. Eustace is the best pediatrician I
                  </span>
                </p>
                <p className={styles.block_405}>know in Nairobi.</p>
                <p className={styles.block_406}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_407}>
                  <span className={styles.calibre2}>
                    Correct: MP3 player, NASA, NASCAR, AAMCO,{' '}
                  </span>
                </p>
                <p className={styles.block_408}>ZIP code</p>
                <p className={styles.block_319}>
                  Correct: NASCOP, KEMRI, AMREF
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
