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
            <PageContentHeader currentPage="Longform EnglishUK" />
            <div className="context text">
              <p className={'large-heading'}>Format</p>

              <p className={'text'}>
                <span className={styles.text_2}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={styles.block_406}>
                  <span className={styles.text_2}>
                    Cardinals and ordinals from 0 to 9 are written with letters
                    (except for measures and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    currency - see Currency and Unit). Use digits for cardinals
                    and ordinals 10 and above,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    even if they are coordinated with numbers under 10.
                    Transcribe all decimal numbers as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>digits.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_21}>
                    Correct: There are nine students in the class.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: numbers less than 10
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>
                    Correct: There are 13 students in the class.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.calibre2}>
                    Correct: I have two blue ducks and 12 pink chickens.
                  </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.calibre2}>
                    Explanation: Follow this rule even if the noun phrases with
                    numbers are coordinated.
                  </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_21}>Correct: 101 cats </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    one hundred and one cats{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: This is my third marriage.{' '}
                  </span>
                </p>
                <p className={styles.block_411}>Correct: 20th anniversary</p>
                <p className={styles.block_273}>
                  <span className={styles.text_21}>Correct: 3.14 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>three point one four </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_2}>
                    When two or more numbers refer to the same noun, and one
                    number is 10 or greater,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe both as numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.calibre2}>
                    Correct: They got 9 or 10 goldfish from the pet
                  </span>
                </p>
                <p className={styles.block_413}>store.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: We're going to need four wheelbarrows
                  </span>
                </p>
                <p className={styles.block_414}>and 14 shovels.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: They speak three or four languages
                  </span>
                </p>
                <p className={styles.block_167}>each.</p>
                <p className={styles.block_152}>
                  <span className={styles.calibre2}>
                    Correct: There were 7 to 14 orange trees in the
                  </span>
                </p>
                <p className={styles.block_415}>orchard.</p>
                <p className={styles.block_416}>
                  <span className={styles.text_2}>
                    If a large number consists of only a number followed by
                    "million", "billion", "trillion", or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    higher, then transcribe as a numeral plus word. Otherwise,
                    transcribe as numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_21}>Correct: 7 billion </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>seven billion </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: a million geese{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>a million geese </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: 1 million geese{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>one million geese </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_21}>Correct: 1,000 geese </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>one thousand geese </span>
                  <span className={styles.text_36}>" Example audio: " </span>
                  <span className={styles.text_37}>a thousand geese </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_21}>Correct: 7.18 billion </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    seven point one eight billion{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_21}>Correct: 7,234,435 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      seven million two hundred and thirty-four thousand four
                      hundred and thirty-five
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_21}>
                    Correct: 7 billion two{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>seven billion two </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_22}>
                    Explanation: Speaker gets cut off.{' '}
                  </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_21}>Correct: £1.5 million </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    one point five million pounds{' '}
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_423}>Correct: £1.5 million</p>
                <p className={styles.block_424}>
                  Incorrect: one and a half million pounds Incorrect: 1 and 1/2
                  million pounds Incorrect: 1 and a half million pounds
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    one and a half million pounds{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.calibre2}>
                    Explanation: For mixed numbers before "million", "billion",
                    etc., use decimals.
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_21}>
                    Correct: £12.25 million{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      twelve point two five million pounds
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      twelve and a quarter million{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_20}>pounds </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_25}>
                    Write lists of numbers with digits and without commas.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_21}>
                    Correct: 1 0 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      one zero one two three five eight thirteen
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_21}>
                    Correct: 5 4 3 2 1 blast off{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: list of numbers, no comma if just counting
                    </span>
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_38}>
                    For long numbers (4+ digits) indicating quantity, use comma
                    [,] as a thousand separator.
                  </span>
                  <span className={styles.text_39}> </span>
                  <span className={styles.text_28}>Correct: 10,000 </span>
                  <span className={styles.text_40}>Example audio: " </span>
                  <span className={styles.text_41}>ten thousand </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_2}>
                    Where a number is said in isolation and is ambiguous (e.g.
                    between a time, currency, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    year) transcribe without formatting.
                  </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_21}>Correct: 630 </span>
                  <span className={styles.text_22}>
                    Incorrect: £6.30 Incorrect: 6:30 Incorrect: 6.30
                  </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>six thirty </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_21}>
                    Correct: I'll meet you at 6:30.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    i'll meet you at six thirty{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 699 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>six ninety nine </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: This costs £6.99.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    this costs six ninety nine{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 1350 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>thirteen fifty </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: Wake me up at 13:50.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    wake me up at thirteen fifty{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 1999 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>nineteen ninety nine </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_21}>
                    Correct: You will need to pay £19.99 per month.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      you will need to pay nineteen ninety nine per month
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_25}>
                    Transcribe numbers accompanied by a suffix in the following
                    way:
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_21}>
                    Correct: If you fight in this bar, you will be 86ed.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      if you fight in this bar you will be eighty sixed
                    </span>
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.calibre2}>
                    Correct: The San Francisco 49ers played terribly.
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      the san francisco forty niners played terribly
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_21}>
                    Correct: Philadelphia 76ers{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    philadelphia seventy sixers{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_2}>
                    Write bible chapters and verses separated by a colon, with
                    ranges of verses separated{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>by a hyphen.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_21}>
                    Correct: Corinthians 13:13{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      corinthians chapter thirteen verse thirteen
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    corinthians thirteen thirteen{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_21}>
                    Correct: Proverbs 31:25-26{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      proverbs chapter thirty one verses twenty five to twenty
                      six
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      proverbs thirty one twenty five{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_20}>to twenty six </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_38}>
                    Write sports scores separated by a hyphen and without any
                    spaces.
                  </span>
                  <span className={styles.text_39}> </span>
                  <span className={styles.text_28}>
                    Correct: Villa Old Stars win 8-2.{' '}
                  </span>
                  <span className={styles.text_40}>Example audio: " </span>
                  <span className={styles.text_41}>
                    villa old stars win eight two{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_21}>
                    Correct: It's 2-0 at half-time.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    it's two nil at half time{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_2}>
                    In maths expressions or units &amp; measures, transcribe
                    fraction words using numerals{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>and slashes.</span>
                </p>
                <p className={styles.block_453}>
                  Correct: They need 1/4 lb of sugar.
                </p>
                <p className={styles.block_454}>
                  <span className={styles.calibre2}>
                    Incorrect: They need a quarter of a pound of sugar.
                  </span>
                </p>
                <p className={styles.block_455}>
                  Incorrect: They need a 1/4 lb of sugar. Incorrect: They need 1
                  / 4 lb of sugar. Incorrect: They need ¼ lb of sugar.
                </p>
                <p className={styles.block_456}>
                  Incorrect: They need 0.25 lb of sugar.
                </p>
                <p className={styles.block_457}>
                  Correct: In 3/4 km, turn right.
                </p>
                <p className={styles.block_458}>
                  <span className={styles.calibre2}>
                    Incorrect: In three quarters of a kilometre, turn right.
                  </span>
                </p>
                <p className={styles.block_459}>
                  Incorrect: In 3/4 of a kilometre, turn right. Incorrect: In
                  3/4 of a km, turn right.
                </p>
                <p className={styles.block_460}>Correct: 2/3 x 5/16</p>
                <p className={styles.block_461}>
                  Incorrect: two thirds x five sixteenths Incorrect: two thirds
                  times five sixteenths Incorrect: 2/3 times 5/16
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      they need a quarter of a pound of sugar
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.calibre2}>
                    Explanation: Don't include "of a" or "a" before or after the
                    fraction in the transcription. Also, be careful not to
                    include spaces or pre-combined fraction characters.
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      in three quarters of a kilometre turn right
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.calibre2}>
                    Explanation: Don't include "of a" or "a" after the fraction.
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      two thirds times five sixteenths{' '}
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_21}>
                    Correct: We need a 1/4-m plank of wood.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      we need a quarter of a metre plank of wood
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.calibre2}>
                    Explanation: This is a prenominal use, so you
                  </span>
                </p>
                <p className={styles.block_469}>
                  include the "a" and a hyphen after the fraction.
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_2}>
                    For mixed numbers in maths and units &amp; measures, do not
                    use "and a" between the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    number and the fraction.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_21}>Correct: 3 1/2 km </span>
                  <span className={styles.text_22}>
                    Explanation: three and a half kilometers{' '}
                  </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.calibre2}>
                    Correct: The koala weighed 12 1/3 lb yesterday.
                  </span>
                </p>
                <p className={styles.block_472}>Correct: 5 1/2-month-old</p>
                <p className={styles.block_473}>
                  Incorrect: 5 and 1/2-month-old Incorrect: 5 and a
                  1/2-month-old Incorrect: 5.5-month-old
                </p>
                <p className={styles.block_474}>Incorrect: 5 1/2 month old</p>
                <p className={styles.block_475}>Correct: 1/3 + 3 1/2</p>
                <p className={styles.block_158}>Incorrect: 1/3 + 3 and 1/2</p>
                <p className={styles.block_156}>Incorrect: 1/3 + 3 and a 1/2</p>
                <p className={styles.block_156}>
                  Incorrect: 1/3 + 3 and a half
                </p>
                <p className={styles.block_158}>
                  Incorrect: 1 / 3 + 3 and 1 / 2
                </p>
                <p className={styles.block_258}>
                  <span className={styles.calibre2}>
                    Explanation: The koala weighed twelve and a third pounds
                    yesterday.
                  </span>
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    five and a half month old{' '}
                  </span>
                  <span className={styles.text_19}>" Example audio: " </span>
                  <span className={styles.text_20}>
                    one third plus three and a half{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_2}>
                    When referring to items (not units or measures), write
                    fractions out in words. With{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    mixed numbers, write the whole number part out in words if
                    it is under ten, otherwise{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>write it with numerals.</span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_21}>
                    Correct: Give me half of the pie.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Give me 1/2 of the pie. Incorrect: Give me 0.5 of
                    the pie.
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_21}>
                    Correct: five sixteenths of an apple{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: 5/16 of an apple Incorrect: 0.3125 of an apple
                  </span>
                </p>
                <p className={styles.block_479}>Correct: I'm half sure.</p>
                <p className={styles.block_158}>Incorrect: I'm 1/2 sure.</p>
                <p className={styles.block_156}>Incorrect: I'm 0.5 sure.</p>
                <p className={styles.block_480}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    give me half of the pie{' '}
                  </span>
                  <span className={styles.text_19}>" Example audio: " </span>
                  <span className={styles.text_20}>
                    five sixteenths of an apple{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_21}>
                    Correct: He half smiled at me on the tube.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Here "half" is used more figuratively, and it
                      is written out as a word.
                    </span>
                  </span>
                </p>
                <p className={styles.block_482}>
                  Correct: three and a half oranges
                </p>
                <p className={styles.block_483}>Incorrect: 3.5 oranges</p>
                <p className={styles.block_484}>Incorrect: 3 and 1/2 oranges</p>
                <p className={styles.block_483}>
                  Incorrect: 3 and a half oranges
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_21}>
                    Correct: 12 and a half apple pies were made.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: 12.5 apple pies were made.{' '}
                  </span>
                </p>
                <p className={styles.block_486}>
                  Explanation: three and a half oranges
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      twelve and a half apple pies were made
                    </span>
                  </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.calibre2}>
                    Incorrect: twelve and a half apple pies were
                  </span>
                </p>
                <p className={styles.block_489}>made.</p>
                <p className={styles.block_490}>
                  <span className={styles.text_25}>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_21}>
                    Correct: Could you lend me £2.50?{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      could you lend me two and a half pounds
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.calibre2}>
                    Correct: She bought the penthouse for £7.5 million.
                  </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      she bought the penthouse for seven and a half million
                      pounds
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_2}>
                    Transcribe percentages using numerals and the % sign. (In
                    the unlikely case that you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    encounter a number of a million or greater used as a
                    percentage, spell it out.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>Correct: 2% milk</p>
                <p className={styles.block_139}>Correct: 1 million percent</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: There's 50% off all shoes in Topshop
                  </span>
                </p>
                <p className={styles.block_495}>this weekend.</p>
                <p className={styles.block_496}>
                  <span className={styles.text_2}>
                    When numbers appear in prenominals (units preceding nouns),
                    use hyphen. Transcribe{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    as digits if paired with units; otherwise, write them out in
                    words if they are under 10.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_21}>Correct: 8-ft wave </span>
                  <span className={styles.text_22}>
                    Explanation: eight foot wave
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>
                    Correct: four-door Toyota{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: four door Toyota{' '}
                  </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_21}>
                    Correct: It was a £100 handbag.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      it was a hundred pound handbag{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.calibre2}>
                    Explanation: Because the pound symbol{' '}
                  </span>
                </p>
                <p className={styles.block_499}>
                  <span className={styles.calibre2}>
                    precedes and is attached to the quantity, there
                  </span>
                </p>
                <p className={styles.block_500}>
                  is no opportunity to add a hyphen here.
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_2}>
                    If a number appears in a context which calls for a certain
                    formatting in your language,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    use that formatting. Otherwise, default to the general rule
                    for transcribing numbers.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_25}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_21}>Correct: World War II </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>world war two </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: King Henry VIII{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>king henry the eighth </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: Pope Benedict XVI{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    pope benedict the sixteenth{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_38}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_39}> </span>
                  <span className={styles.text_28}>
                    Correct: season 3 episode 2{' '}
                  </span>
                  <span className={styles.text_40}>Example audio: " </span>
                  <span className={styles.text_41}>
                    season three episode two{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_25}>
                    If it is a product type or statistic, use the common written
                    form.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_21}>Correct: 4x4 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>four by four </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_506}>
                  Explanation: as in a car type
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_21}>Correct: .22 calibre </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>twenty two calibre </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_21}>
                    Correct: .317 batting average{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      three seventeen batting average{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_2}>
                    Transcribe phone numbers using the most common format in the
                    transcription{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_2}>
                    Transcribe phone numbers as you would write them down in
                    their natural blocks. Use{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Google to establish the locale and local conventions, such
                    as use of dashes.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_21}>Correct: 01223 897385 </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: UK phone number with a four-digit area code
                    </span>
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_21}>
                    Correct: 0356 123 4567{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: UK phone number with a three-digit area code
                    </span>
                  </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_21}>
                    Correct: 021 1234 5678{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: UK phone number with a two-digit area code
                    </span>
                  </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_21}>Correct: 07934 123456 </span>
                  <span className={styles.text_22}>
                    Explanation: UK mobile number{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: 44 1793 133345
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>
                    Correct: +44 1793 133345{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>plus four four </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_21}>
                    Correct: 0800 123 4567{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      oh eight hundred one two three four five six seven
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_516}>
                  Explanation: toll-free number
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_21}>
                    Correct: 0966 123 4567{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      oh nine six six one two three four five six seven
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_518}>
                  Explanation: premium-rate number
                </p>
                <p className={styles.block_139}>
                  Correct: 650-253-0000 (US phone number)
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_2}>
                    Transcribe alpha-digit sequences (product codes etc.) in
                    their most natural way{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (possibly several ways accepted). Do not transcribe
                    something which is identifiable as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    credit card number (see Difficult Utterances &gt; Skipping a
                    Prompt).
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>Correct: XT 660 or XT660</p>
                <p className={styles.block_520}>
                  <span className={styles.text_2}>
                    If it really sounds like a maths expression, then transcribe
                    it with numbers and symbols,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_21}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      five divided by six to the power of three
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    five divided by six to the third{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    five divided by six cubed{' '}
                  </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_423}>Correct: What is 5 x 6?</p>
                <p className={styles.block_524}>
                  Incorrect: What is five times six? Incorrect: What is 5 times
                  6? Incorrect: What is 5 * 6?
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    what is five times six{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_42}>
                    <sub className={styles.calibre3}>Correct: √3 </sub>
                  </span>
                  <span className={styles.text_43}>Example audio: " </span>
                  <span className={styles.text_44}>square root of three </span>
                  <span className={styles.text_43}>" Example audio: " </span>
                  <span className={styles.text_44}>
                    the square root of three{' '}
                  </span>
                  <span className={styles.text_43}>" </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_21}>
                    Correct: How much is 8 hours x £12?{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      how much is eight hours times twelve pounds
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.calibre2}>
                    Correct: How much is three alligators divided by two
                    iguanas?
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_530}>
                  <span className={styles.calibre2}>
                    Explanation: Does not sound like a true maths expression
                    with useful units.
                  </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_25}>
                    Transcribe currencies as commonly written in the
                    transcription language.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_2}>
                    Use symbols for currency amounts in dollars, euros, and
                    pounds (sterling). Use the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    symbol "$" if they say dollar(s), "€" if they say "euro(s)",
                    and "£" if they say "pound(s)" or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"pound(s) sterling".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_21}>Correct: £10 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>ten pounds </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: $12.50 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    twelve dollars and fifty cents{' '}
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>
                    Correct: It only cost £5.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    it only cost five pounds{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_21}>
                    Correct: How much is €20 in pounds?{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      how much is twenty euros in pounds
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_2}>
                    If it is obvious from context that a number reflects an
                    amount of currency, transcribe{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with the pound sign.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.calibre2}>
                    Correct: The house was on the market for £1.5 million.
                  </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      the house was on the market for one point five million
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_21}>
                    Correct: The lunch special is only £6.99.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      the lunch special is only six ninety nine
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_2}>
                    For pence-only quantities, the word "pence" or letter "p"
                    (as spoken) should follow the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>amount.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_21}>
                    Correct: 20 pence change{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>twenty pence change </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 50p </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>fifty p </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_38}>
                    For all other currencies and slang terms for money, spell
                    out the words.
                  </span>
                  <span className={styles.text_39}> </span>
                  <span className={styles.text_28}>
                    Correct: Can you lend me a tenner, mate?{' '}
                  </span>
                </p>
                <p className={styles.block_542}>Correct: I spent five grand.</p>
                <p className={styles.block_543}>
                  <span className={styles.calibre2}>
                    Correct: They stole 40 quid from my grandmother.
                  </span>
                </p>
                <p className={styles.block_544}>
                  Correct: That's going to cost you five bucks. Correct: Here's
                  a ten bob note.
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      they stole forty quid from my grandmother
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_21}>Correct: 200 yen </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>two hundred yen </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 350 krona </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    three hundred and fifty krona{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_25}>
                    When a speaker uses words like "pound" without specifying a
                    quantity, spell them out.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_21}>
                    Correct: I owe you £1. Here's a pound coin.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      i owe you a pound here's a pound coin
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_244}>
                  Correct: just a couple of euros
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: currency conversion between Indian
                  </span>
                </p>
                <p className={styles.block_356}>rupee and US dollar</p>
                <p className={styles.block_549}>
                  <span className={styles.text_2}>
                    Write out denominations of currency (the face values of
                    bills, notes, coins, etc). Use{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>hyphens as needed.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  Correct: a crisp twenty-pound note
                </p>
                <p className={styles.block_152}>
                  Correct: hundred-dollar bills
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_38}>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                  </span>
                  <span className={styles.text_39}> </span>
                  <span className={styles.text_28}>
                    Correct: I need four or five hundred pounds.
                  </span>
                </p>
                <p className={styles.block_551}>
                  Correct: one to five hundred pounds
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_21}>
                    Correct: 100 to 500 pounds{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      one hundred to five hundred pounds
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_21}>
                    Correct: 9 to 12 euros{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>nine to twelve euros </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: a dollar or two{' '}
                  </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_25}>
                    For degrees, use the ° symbol.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_21}>Correct: It's 20°. </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>it's twenty degrees </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: It's 20° C. </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    it's twenty degrees celsius{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_21}>Correct: It's 20° C. </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      it's twenty degrees centigrade{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_21}>
                    Correct: It's 72° F today.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      it's seventy-two degrees fahrenheit today
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_21}>Correct: It's 20 C. </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>it's twenty celsius </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_21}>
                    Correct: It's -5 in Broadbottom today.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      it's minus five in broadbottom today
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_21}>
                    Correct: It's -5° in Broadbottom today.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      it's minus five degrees in broadbottom today
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_25}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_21}>
                    Correct: My family bought 10 L of orange juice.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      my family bought ten litres of orange juice
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.calibre2}>
                    Correct: He bought 10 kilos of potatoes from the market.
                  </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.calibre2}>
                    Incorrect: He bought 10 kg of potatoes from the market.
                  </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      he bought ten kilos of potatoes from the market
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.calibre2}>
                    Explanation: Where the unit is a slang word, write the word
                    in full.
                  </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_25}>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Correct: The charity received £1 million in
                  </span>
                </p>
                <p className={styles.block_215}>donations.</p>
                <p className={styles.block_177}>
                  <span className={styles.calibre2}>
                    Incorrect: The charity received £1,000,000 in
                  </span>
                </p>
                <p className={styles.block_216}>donations.</p>
                <p className={styles.block_91}>
                  Correct: The kitten weighed 2 lb.
                </p>
                <p className={styles.block_139}>
                  Correct: I lived there for 6 months.
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_2}>
                    For lengths, widths, and heights: use "x" instead of any
                    preposition, but only when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    numbers are unaccompanied by units.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_21}>
                    Correct: Luggage size is 20x20x40.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      luggage size is twenty by twenty by forty
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_21}>
                    Correct: a 9x12-in cake tin{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    a nine by twelve inch cake tin{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: I need a 2x4.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>i need a two by four </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_21}>
                    Correct: I need a 3 ft by 7 ft mirror.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      i need a three foot by seven foot mirror
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.calibre2}>
                    Correct: Search for 1024x768 computer wallpapers.
                  </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      search for ten twenty four by seven sixty eight computer
                      wallpapers
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>format it as such.</span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_21}>
                    Correct: Petrol is £1.10 a litre.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    petrol is one ten a litre{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: Milk is £1.50.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>milk is one fifty </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: Set alarm for 5:45.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    set alarm for five forty five{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_2}>
                    Similarly, transcribe foot/inch heights (with
                    non-directional quotes/apostrophes) even if{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>not spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.calibre2}>
                    Correct: I'm 6'1", weigh 80 kg, and I like to take long
                    walks on the beach.
                  </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_25}>
                    Common technical abbreviations
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>megabyte - MB </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>kilobyte - kB </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>gigabyte - GB </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>terabyte - TB </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_25}>
                    Slang terms (spell them out)
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>kilo </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>gigs </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>bucks </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>quid </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      i'm six one weigh eighty kilograms and i like to take long
                      walks on the beach
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>
                    grand (thousands of [units in currency]){' '}
                  </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_45}>
                    Common measurements of distance and rate
                  </span>
                  <span className={styles.text_46}> </span>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>inch - in</span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>foot - ft </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>yard - yd </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>millimetre - mm </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>centimetre - cm </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>metre - m </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>mile - mile </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>kilometre - km </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>miles per hour - mph </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>miles an hour - mph </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>
                    kilometres per hour - km/h{' '}
                  </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_25}>
                    Common measurements of area
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>square inch - in² </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>square foot - ft² </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_47}>● </span>
                  <span className={styles.text_48}>
                    square centimetre - cm²{' '}
                  </span>
                  <span className={styles.text_47}>● </span>
                  <span className={styles.text_48}>square metre - m² </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>metre squared - m² </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_47}>● </span>
                  <span className={styles.text_48}>
                    square kilometre - km²{' '}
                  </span>
                  <span className={styles.text_47}>● </span>
                  <span className={styles.text_48}>hectare - ha </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>acre - acre </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_25}>
                    Common scientific terms
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>decibel - dB </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Newton - N </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Joule - J </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>parsec - parsec </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>ampere - amp </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Hertz - Hz </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Watt - W </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Kilowatt - kW </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>mole - mol </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>lumen - lm </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>degree(s) - ° </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Fahrenheit - F </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Celsius - C </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Centigrade - C</span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>Kelvin - K </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_25}>
                    Common measurements of weight and volume
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>pound - lb </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>ounce - oz </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>quart - q </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>litre - L </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>teaspoon - tsp </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>tablespoon - tbsp </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>gram - g </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>milligram - mg </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>kilogram - kg </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>cubic unit - ³ </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>cubic metre - m³ </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>cubic inch - in³ </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_593}>
                  <span className={styles.text_25}>
                    Transcribe dates as they are said.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_21}>
                    Correct: July the 12th 1964{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      july the twelfth nineteen sixty four
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_21}>
                    Correct: July 12th 1964{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      july twelfth nineteen sixty four{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_21}>
                    Correct: 12th July 1964{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      twelfth july nineteen sixty four{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_21}>
                    Correct: in the summer of 78{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      in the summer of seventy eight{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_21}>
                    Correct: the 12th of July{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>the twelfth of july </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: 3rd of January{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>third of january </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: Monday the 2nd of March{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    monday the second of march{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: July in 1964 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    july in nineteen sixty four{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: reminiscent of the 90s{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    reminiscent of the nineties{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: Wednesday March 6th{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>wednesday march sixth </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_2}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Don't transcribe zeros unless the speaker pronounces them.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_21}>Correct: 7/12/2010 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      seven slash twelve slash twenty ten
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_21}>Correct: 07/12/2010 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      oh seven slash twelve slash twenty ten
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_21}>
                    Correct: The expiry date is 05/6/2012.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      the expiry date is oh five six two thousand and twelve
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_602}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_2}>
                    Write times in (h)h:mm format whenever possible, unless it
                    would look unnatural to do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>so.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_21}>Correct: 3:00 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>three o'clock </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: I'll see you at 4.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>i'll see you at four </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 3:15 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>three fifteen </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 6:05 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>six oh five </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 3:15 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>quarter past three </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 1:50 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>ten to two </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 18:00 </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    eighteen hundred hours{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: a few minutes after 3{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    a few minutes after three{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_21}>
                    Correct: I'll be home between 7 and 8.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      i'll be home between seven and eight
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_21}>Correct: around 8ish </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>around eightish </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_22}>
                    Explanation: Looks unnatural with 8:00ish.
                  </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_25}>
                    Use p.m. and a.m. if spoken.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_21}>Correct: 12:00 p.m. </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>twelve o'clock p m </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: 7:00 a.m. </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>seven a m </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_21}>
                    Correct: Set alarm for 6:28 a.m.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      set alarm for six twenty eight a m
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_25}>
                    For "noon" and "midnight", use the written form.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_21}>Correct: at noon </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>at noon </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: We went to the midnight showing.{' '}
                  </span>
                </p>
                <p className={styles.block_612}>
                  Correct: I'll meet you around midday.
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_21}>
                    Correct: Set alarm for midnight.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    set alarm for midnight{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_25}>
                    Transcribe the construction "N-TIME UNIT-old" with digits
                    and hyphen.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.calibre2}>
                    Correct: He got sick from eating a 2-week-old
                  </span>
                </p>
                <p className={styles.block_413}>steak.</p>
                <p className={styles.block_139}>
                  Correct: My cousins are 6-year-old twins.
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_21}>
                    Correct: They have a 3 1/2-year-old.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      they have a three and a half year old
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_2}>
                    Some of these are written out because it would be unnatural
                    to abbreviate them but{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    must still be flagged as units because we want to have
                    numeric values written in{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    numerals before them. For these, singular and plural forms
                    are required.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>second(s) </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>minute(s) </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>hour(s) </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>week(s) </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>day(s) </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>month(s) </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>year(s) </span>
                </p>
              </div>
              <div id="address">
                <p className={'text'}>Address</p>
                <p className={styles.block_620}>
                  <span className={styles.text_2}>
                    Favour full spellings over abbreviations where natural, but
                    use abbreviations when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>explicitly spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.text_2}>
                    Use the most natural written form for addresses, depending
                    on the locale and context. If{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speaker uses an abbreviated form, transcribe the abbreviated
                    form without an{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    accompanying full stop. (The same holds for street suffixes
                    like "Ave".) If the speaker{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    says "number" before the house (or building) number,
                    transcribe this.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_21}>
                    Correct: 10 Downing Street, London, SW1A 2AA{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      ten downing street london s w one a two a a
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.calibre2}>
                    Correct: number 751 Jefferson Street, New York City
                  </span>
                </p>
                <p className={styles.block_624}>
                  Incorrect: 751 Jefferson Street, New York City
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      number seven fifty-one jefferson street new york city
                    </span>
                  </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_319}>
                  Correct: She lives on Hollyshaw Terrace.
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_21}>
                    Correct: College Road, Aylesbury, Bucks{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>bucks </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_21}>
                    Correct: Take me to Shaftesbury Ave.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: "ave", sentence-final{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: They spent last summer in California.
                  </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_21}>Correct: Brighton, UK </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>brighton u k </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_2}>
                    Use commas between address, town, and county. As a rule of
                    thumb for commas within{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    location queries, include a comma if going from subset
                    (smaller) to superset (bigger),{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    but not if going from superset to subset.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_21}>
                    Correct: 32 Ainsdale Ave, Bury, Lancashire{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: 32 Ainsdale Ave Bury Lancashire Incorrect: 32
                    Ainsdale Avenue Bury Lancashire Incorrect: 32 Ainsdale
                    Avenue, Bury, Lancashire
                  </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      thirty two ainsdale ave bury lancashire
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_21}>
                    Correct: London Pitfield Street Hackney{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No comma between elements in the wrong order.
                    </span>
                  </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_2}>
                    If a speaker uses an incorrect postcode or address, stick to
                    what was said and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalise it.</span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_25}>
                    Use commas for ENTITY, LOCATION.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  Correct: McDonald's, Castro Street
                </p>
                <p className={styles.block_139}>
                  Correct: coffee shops, Islington
                </p>
                <p className={styles.block_139}>
                  Correct: Joe Smith, San Francisco
                </p>
                <p className={styles.block_91}>Correct: Argos, Hammersmith</p>
                <p className={styles.block_139}>Correct: Hammersmith Argos</p>
                <p className={styles.block_139}>
                  Correct: Islington coffee shops
                </p>
                <p className={styles.block_139}>
                  Correct: Boots, Oxford Street
                </p>
                <p className={styles.block_91}>Correct: weather, Dublin</p>
                <p className={styles.block_139}>
                  Correct: circular saw, Sheffield
                </p>
                <p className={styles.block_139}>
                  Correct: showtimes for Inception, Edinburgh
                </p>
                <p className={styles.block_633}>
                  Do not capitalise cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_634}>
                  <span className={styles.calibre2}>
                    Correct: I'll meet you on the south side of the building.
                  </span>
                </p>
                <p className={styles.block_635}>
                  Correct: Doncaster is in South Yorkshire.
                </p>
                <p className={styles.block_636}>
                  <span className={styles.calibre2}>
                    Correct: This is an eastbound Piccadilly line service to
                    Cockfosters.
                  </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.calibre2}>
                    Correct: We're going for some drinks in the West End this
                    evening.
                  </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.calibre2}>
                    Explanation: No need to capitalise "south" because it's not
                    part of a proper place name.
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>

                <p className={styles.block_639}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalise them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_21}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      w w w dot google dot c o dot k r{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_21}>Correct: amazon.com </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>amazon dot com </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_21}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      h t t p colon slash slash one two three dot com
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_21}>
                    Correct: mike@example.org{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    mike at example dot org{' '}
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.calibre2}>
                    Correct: It's been a beautiful adventure. #selfie
                    #newzealand
                  </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      it's been a beautiful adventure hashtag selfie hashtag new
                      zealand
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_21}>
                    Correct: #hungry Where's my pizza?{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      hashtag hungry where's my pizza{' '}
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.calibre2}>
                    Correct: I'm so #hungry I could eat a whole pizza.
                  </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      i'm so hashtag hungry i could eat a whole pizza
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_2}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"backslash".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_21}>
                    Correct: http://nytimes.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      h t t p colon slash slash n y times dot com
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_21}>
                    Correct: http:\\mail.yahoo.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      h t t p colon backslash backslash mail dot yahoo dot com
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    errors. If the speaker doesn't say the "w"s at all, do not
                    add them.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_21}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    w w dot amazon dot com{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww",
                  </span>
                </p>
                <p className={styles.block_654}>transcribe "www".</p>
                <p className={styles.block_613}>
                  <span className={styles.text_21}>Correct: google.co.uk </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>google dot co u k </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.calibre2}>
                    Explanation: Also transcribe the dot in an
                  </span>
                </p>
                <p className={styles.block_656}>
                  <span className={styles.calibre2}>
                    obvious URL, even if the speaker did not{' '}
                  </span>
                </p>
                <p className={styles.block_657}>include it.</p>
                <p className={styles.block_658}>
                  <span className={styles.text_21}>
                    Correct: www.buzzfeed.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    w w w buzzfeed dot com{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>w w facebook dot com </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_2}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>letters.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_21}>
                    Correct: www.pinterest.com{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      w w w dot p i n t e r e s t dot c o m
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_662}>
                  <span className={styles.text_2}>
                    Use full stops to indicate standard abbreviated forms, such
                    as i.e., etc., et al., ft., ibid.,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    viz., Ltd., Co., Inc., P.S., c.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_21}>
                    Correct: England vs. Ireland{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: England versus Ireland{' '}
                  </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    england versus ireland{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_21}>Correct: Roe v Wade </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>roe v wade </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_666}>
                  <span className={styles.calibre2}>
                    Explanation: Special exception: use the bare
                  </span>
                </p>
                <p className={styles.block_667}>
                  <span className={styles.calibre2}>
                    abbreviation 'v' (with no full stop) for court
                  </span>
                </p>
                <p className={styles.block_668}>cases</p>
                <p className={styles.block_669}>
                  <span className={styles.text_21}>
                    Correct: Beyoncé Crazy in Love ft. Jay Z{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      beyoncé crazy in love featuring jay z
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_670}>
                  Explanation: in the context of song titles
                </p>
                <p className={styles.block_671}>
                  <span className={styles.calibre2}>
                    Correct: It happened in August, i.e. 2 months ago.
                  </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      it happened in august i e two months ago
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_21}>
                    Correct: cats, dogs, etc.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>cats dogs et cetera </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_38}>
                    Capitalise and abbreviate titles for people only when they
                    precede proper names.
                  </span>
                  <span className={styles.text_39}> </span>
                  <span className={styles.text_28}>
                    Correct: I know Dr. Schuster.{' '}
                  </span>
                </p>
                <p className={styles.block_542}>Correct: Dr. Dre</p>
                <p className={styles.block_139}>
                  Correct: My doctor says to exercise more.
                </p>
                <p className={styles.block_139}>
                  Correct: Mrs. Jones isn't available.
                </p>
                <p className={styles.block_91}>
                  Correct: Hey mister, she's my sister.
                </p>
                <p className={styles.block_139}>
                  Correct: Karl Rove Jr. was there.
                </p>
                <p className={styles.block_139}>
                  Correct: She's a junior this year.
                </p>
                <p className={styles.block_152}>
                  Correct: St. Paul died in the year 67 AD.
                </p>
                <p className={styles.block_139}>
                  Correct: I saw President Obama on TV today.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Barack Obama is the president of the
                  </span>
                </p>
                <p className={styles.block_356}>United States.</p>
                <p className={styles.block_139}>
                  Correct: I have to meet Professor Smith today.
                </p>
                <p className={styles.block_139}>
                  Correct: I really like my professor.
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_2}>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If in{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    doubt, do not abbreviate the title.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_21}>
                    Correct: Saint Paul, Minnesota{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The city's name is always spelled "Saint
                      Paul" on official documents.
                    </span>
                  </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_21}>
                    Correct: St. Louis, Missouri{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The city's name is always spelled "St. Louis"
                      on official documents.
                    </span>
                  </span>
                </p>
                <p className={styles.block_678}>
                  <span className={styles.text_21}>
                    Correct: Navigate to Saint Francis High School.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Both "Saint Francis" and "St. Francis" are
                      attested, so default to "Saint
                    </span>
                  </span>
                </p>
                <p className={styles.block_679}>Francis".</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: When is the season finale of Doctor
                  </span>
                </p>
                <p className={styles.block_680}>Who?</p>
                <p className={styles.block_681}>
                  <span className={styles.text_21}>
                    Correct: Mount Everest{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Both "Mt." and "Mount" are attested, so
                      default to "Mount".
                    </span>
                  </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_21}>
                    Correct: Mount Vernon, Washington{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This particular town's name is always spelled
                      "Mount Vernon".
                    </span>
                  </span>
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_25}>
                    In acronyms, do not use full stops between letters.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_21}>Correct: BT, MP3, HMV </span>
                  <span className={styles.text_22}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.calibre2}>
                    Correct: UK, USA, Washington DC, Samuel L Jackson, OJ
                    Simpson
                  </span>
                </p>
                <p className={styles.block_685}>
                  Explanation: geographic and personal names
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_21}>
                    Correct: NASA, NATO, PIN number, AIDS{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: pronounced as words{' '}
                  </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_21}>
                    Correct: omg, wtf, lol{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    <span className={styles.calibre2}>
                      oh em jhii double-u tii ef el oh el
                    </span>
                  </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_687}>
                  Explanation: interjection acronyms
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_21}>Correct: lol </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>lol </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_28}>
                    Correct: scuba, radar, taser{' '}
                  </span>
                  <span className={styles.text_29}>
                    Explanation: extremely lexicalised acronyms{' '}
                  </span>
                  <span className={styles.text_38}>
                    If a brand name uses a full stop, include the full stop.
                  </span>
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_21}>Correct: H. Samuel </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Official brand name as seen in the privacy
                      policy includes full stops.
                    </span>
                  </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_25}>
                    Omit commas from proper names and titles.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Correct: They found the example of Martin{' '}
                  </span>
                </p>
                <p className={styles.block_691}>Luther King Jr. inspiring.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Washington DC is humid in the{' '}
                  </span>
                </p>
                <p className={styles.block_215}>summer.</p>
                <p className={styles.block_613}>
                  <span className={styles.text_21}>
                    Correct: I wish I worked at Google Inc.{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    i wish i worked at google inc{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
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
