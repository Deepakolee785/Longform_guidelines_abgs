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
            <PageContentHeader currentPage="longform Urdu" />
            <div className="content text">
              <p className={styles.block_404}>Format</p>
              <p className={styles.block_405}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <p className={styles.block_406}>Number</p>
              <p className={styles.block_407}>
                Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit). Use
                digits for cardinals and ordinals 10 and above, even if they are
                coordinated with numbers under 10. Transcribe all decimal
                numbers as digits.
              </p>
              <p className={styles.block_408}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ں ​ ر
                </span>
                <span className={styles.text_9}> ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: 10 </span>
                <span dir="rtl" className={styles.text_10}>
                  دا
                </span>
                <span className={styles.text_10}> ​ ​ </span>
              </p>
              <p className={styles.block_409}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: 10 </span>
                <span dir="rtl" className={styles.text_10}>
                  دا
                </span>
                <span className={styles.text_10}> ​ ​ </span>
              </p>
              <p className={styles.block_410}>
                <span className={styles.text_9}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  آ​ ​20 ے
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: 10 </span>
                <span dir="rtl" className={styles.text_10}>
                  د ​ ا
                </span>
                <span className={styles.text_10}> ​ ​10 </span>
              </p>
              <p className={styles.block_411}>
                <span className={styles.text_9}>Correct: ۔ ​ ​13 ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ی
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: ۱۰ </span>
                <span dir="rtl" className={styles.text_10}>
                  د ​ ا
                </span>
                <span className={styles.text_10}> ​ ۱۰ </span>
              </p>
              <p className={styles.block_412}>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​12 </span>
                <span dir="rtl" className={styles.text_9}>
                  روا​ ​ ​ س ​ ے
                </span>
                <span className={styles.text_9}> </span>
                <span className={styles.text_10}>Explanation: </span>
                <span dir="rtl" className={styles.text_10}>
                  دا ​ ​ ​10 روا​ ​ ​ ​ ل ا​ و​ ​ ​ ں
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_413}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ ​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ل ا​ دا ا​ ​ ​ دا ​ ہد ز​ ​10 ​10 روا​ ظ ا
                </span>
                <span className={styles.text_5}>​ ​ </span>
              </p>
              <p className={styles.block_313}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_414}>
                <span className={styles.text_11}>Correct: 3.14 </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_415}>
                <span className={styles.text_}>Explanation: </span>
                <span dir="rtl" className={styles.text_}>
                  دا ا​ ر ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_416}>
                <span className={styles.text_}>
                  If a large number consists of only a number followed by " " ,"{' '}
                </span>
                <span dir="rtl" className={styles.text_}>
                  ڑو " ," ب
                </span>
                <span className={styles.text_}>
                  ", or higher, then transcribe as a numeral plus word.
                  Otherwise, transcribe as numerals.
                </span>
              </p>
              <p className={styles.block_417}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ڑو
                </span>
                <span className={styles.text_}> ​ </span>
              </p>
              <p className={styles.block_418}>
                <span className={styles.text_11}>Correct: 10 ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  جار
                </span>
                <span className={styles.text_11}>​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  جار
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  سد
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_419}>
                <span className={styles.text_11}>Correct: 1 ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  جار
                </span>
                <span className={styles.text_11}>​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  جار
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_420}>
                <span className={styles.text_11}>Correct: ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  جار​ را
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  جار
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  را
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_421}>
                <span className={styles.text_11}>Correct: 1.5 </span>
                <span dir="rtl" className={styles.text_11}>
                  اڈ​ برا
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  اڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  برا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_422}>
                <span className={styles.text_6}>Example audio: " </span>
                <span dir="rtl" className={styles.text_6}>
                  ڈ
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  اڈ
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  برا
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ھ
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_423}>
                <span className={styles.text_}>Explanation: ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  دا ا​ ​ ​ ​ ​" " ," ڑو " ," برا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_424}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ل ا​ ر ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_425}>
                Write lists of numbers with digits and without commas.
              </p>
              <p className={styles.block_426}>
                <span className={styles.text_11}>
                  Correct: 0 1 1 2 3 5 8 13{' '}
                </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ہ
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_427}>
                <span className={styles.text_}>Explanation: ۔ ​ ​ ، ​ </span>
                <span dir="rtl" className={styles.text_}>
                  دا ا​ ف ​ ​ ​ ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_428}>
                <span className={styles.text_11}>Correct: 3 2 1 ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_427}>
                <span className={styles.text_}>Explanation: ۔ ​ ​ ، ​ </span>
                <span dir="rtl" className={styles.text_}>
                  دا ا​ ف ​ ​ ​ ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_429}>
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p className={styles.block_430}>
                <span className={styles.text_11}>Correct: ۔ ​ ​ ​1/4 ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  نُا
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  نُا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_431}>
                <span className={styles.text_}>Explanation: ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ا ا ​ ​ ظ ا​ ​ دا ا​ ی
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_432}>
                <span className={styles.text_4}></span>
                <span className={styles.text_5}>​ </span>
                <span dir="rtl" className={styles.text_5}>
                  ل ا​ ​ ​ ​ دا ا​ ی ۔ ​ ​ ​ ل ا​ ​ روا​ ں
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_328}>
                <span dir="rtl" className={styles.text_4}></span>
                <span className={styles.text_5}>۔ </span>
              </p>
              <p className={styles.block_433}>
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <p className={styles.block_434}>
                <span className={styles.text_11}>Correct: ؟ ​ ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  ےد​ ر دُا​$2.50 ​ پآ
                </span>
                <span className={styles.text_11}>​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ےد
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر دُا
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  اڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڑا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  پآ
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_435}>
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <p className={styles.block_436}>
                <span className={styles.text_11}>Correct: 2% </span>
                <span dir="rtl" className={styles.text_11}>
                  ھدود
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ھدود
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_437}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ا
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_438}>
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p className={styles.block_439}>
                Transcribe phone numbers using the most common format in the
                transcription language.
              </p>
              <p className={styles.block_440}>
                <span className={styles.text_9}>
                  Correct: +92 309-456-7890{' '}
                </span>
                <span className={styles.text_8}>Example audio: " </span>
                <span className={styles.text_16}>​ </span>
                <span className={styles.text_8}>" </span>
              </p>
              <p className={styles.block_441}>
                <span className={styles.text_9}>Correct: 92 309-456-7890 </span>
                <span className={styles.text_8}>Example audio: " </span>
                <span className={styles.text_16}>​ </span>
                <span className={styles.text_8}>" </span>
              </p>
              <p className={styles.block_442}>
                <span className={styles.text_9}>Correct: 0309-456-7890 </span>
                <span className={styles.text_8}>Example audio: " </span>
                <span className={styles.text_16}>​ </span>
                <span className={styles.text_8}>" </span>
              </p>
              <p className={styles.block_443}>
                <span className={styles.text_11}>
                  Correct: 042-3456-7890 54{' '}
                </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_17}>
                  <sub className={styles.calibre2}>ّ </sub>
                </span>
                <span className={styles.text_15}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  آ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ت
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
              </p>
              <p className={styles.block_444}>"</p>
              <p className={styles.block_445}>
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.
              </p>
              <p className={styles.block_446}>
                <span className={styles.text_11}>Correct: 10/2 </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  سد
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_447}>
                <span className={styles.text_11}>Correct: 5٭3 ؟ ​ ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  د
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_448}>
                <span className={styles.text_18}>Correct: √3 </span>
                <span className={styles.text_19}>Example audio: " </span>
                <span className={styles.text_20}>​ </span>
                <span dir="rtl" className={styles.text_19}>
                  ٹور
                </span>
                <span className={styles.text_20}>​ ​ </span>
                <span className={styles.text_19}>" </span>
              </p>
              <p className={styles.block_449}>
                <span className={styles.text_11}>Correct: 8 ؟ ​ ​ $12 ٭ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  آ
                </span>
                <span className={styles.text_15}>​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  اڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ہر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ب
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_450}>
                <span className={styles.text_9}>Correct: ؟ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ود
                </span>
                <span className={styles.text_9}>​ ​ ​ </span>
                <span className={styles.text_10}>Explanation: ۔ </span>
                <span dir="rtl" className={styles.text_10}>
                  ر​ ​ ​ ​ ​ ر
                </span>
                <span className={styles.text_10}>​ ​ </span>
              </p>
              <p className={styles.block_451}>Currency and unit</p>
              <p className={styles.block_452}>
                Transcribe currencies as commonly written in the transcription
                language.
              </p>
              <p className={styles.block_453}>
                <span className={styles.text_11}>Correct: Rs 100 </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ور
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_454}>
                <span className={styles.text_11}>Correct: $10 </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  اڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  سد
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_455}>
                <span className={styles.text_11}>Correct: €20 ؟ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  ز اڈ​ ا
                </span>
                <span className={styles.text_11}>​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ز اڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ؤ
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_456}>
                For all other currencies and slang terms for money, spell out
                the words.
              </p>
              <p className={styles.block_457}>Correct: 200</p>
              <p className={styles.block_458}>Incorrect: ¥200</p>
              <p className={styles.block_459}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ود
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_460}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  اڈ​ سد
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_461}>Incorrect: $10</p>
              <p className={styles.block_462}>
                <span className={styles.text_6}>Example audio: " </span>
                <span dir="rtl" className={styles.text_6}>
                  اڈ
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  سد
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_463}>
                <span className={styles.text_}>Explanation: ​ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ےر ​ ​ ​ ​ ​ ​ ​ اڈ
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_464}>
                <span dir="rtl" className={styles.text_4}></span>
                <span dir="rtl" className={styles.text_5}>
                  ۔ ​ ل ا
                </span>
                <span className={styles.text_5}> </span>
              </p>
              <p className={styles.block_465}>For degrees, use the ° symbol.</p>
              <p className={styles.block_466}>
                <span className={styles.text_}>Correct: ۔ ​20° </span>
                <span dir="rtl" className={styles.text_}>
                  ترا ​ رد
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_467}>
                <span className={styles.text_}>Correct: ۔ ​1° </span>
                <span dir="rtl" className={styles.text_}>
                  ترا ​ رد
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_468}>
                <span className={styles.text_}>Write all units ( ،</span>
                <span dir="rtl" className={styles.text_}>
                  ما ، رد ،ؤ
                </span>
                <span className={styles.text_}>
                  ، (kilo, pao, liter, gram, darjan)) as full words.
                </span>
              </p>
              <p className={styles.block_469}>
                <span className={styles.text_11}>Correct: ۔ ​ ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  س ​ ر ​ ​10 ​ ی
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  س
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  سد
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ی
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_470}>
                <span className={styles.text_11}>Correct: ۔</span>
                <span dir="rtl" className={styles.text_11}>
                  ے
                </span>
                <span className={styles.text_11}> ​ ​ ​5 ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ے
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ ​ ​ ​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_471}>
                If it is clear from context that a number or number sequence
                refers to currency or time, format it as such.
              </p>
              <p className={styles.block_472}>
                <span className={styles.text_}>Correct: 3:15 ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ؤ ​ مر آ
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_473}>
                <span className={styles.text_}>Incorrect: 315 ۔</span>
                <span dir="rtl" className={styles.text_}>
                  ؤ ​ مر آ
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_474}>
                <span className={styles.text_6}>Example audio: " </span>
                <span dir="rtl" className={styles.text_6}>
                  ؤ
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  مر آ
                </span>
                <span className={styles.text_7}>​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ہر
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_475}>Date and time</p>
              <p className={styles.block_476}>
                Use the natural form for transcribing dates.
              </p>
              <p className={styles.block_477}>
                <span className={styles.text_11}>Correct: 3 2002 </span>
                <span dir="rtl" className={styles.text_11}>
                  یر
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  را
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  یر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_478}>
                <span className={styles.text_11}>Correct: 78 </span>
                <span dir="rtl" className={styles.text_11}>
                  ںا
                </span>
                <span className={styles.text_11}> ​ ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ںا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_479}>
                <span className={styles.text_11}>Correct: ​ ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  د​ ​ ا
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  د
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_480}>
                <span className={styles.text_21}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.{' '}
                </span>
                <span className={styles.text_22}>
                  <sub className={styles.calibre2}>Correct: 3:00 </sub>
                </span>
                <span className={styles.text_17}>
                  <sub className={styles.calibre2}>Example audio: " </sub>
                </span>
                <span className={styles.text_23}>
                  <sub className={styles.calibre2}>​ </sub>
                </span>
                <span className={styles.text_17}>
                  <sub className={styles.calibre2}>" </sub>
                </span>
              </p>
              <p className={styles.block_481}>
                <span className={styles.text_11}>Correct: 3:00 ۔</span>
                <span dir="rtl" className={styles.text_11}>
                  ؤ ​ مر آ
                </span>
                <span className={styles.text_11}>​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ؤ
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  مر آ
                </span>
                <span className={styles.text_15}>​ ​ ​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_482}>
                <span className={styles.text_11}>Correct: 1:50 </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  س
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_483}>
                <span className={styles.text_}>Explanation: </span>
                <span dir="rtl" className={styles.text_}>
                  س ​ ا
                </span>
                <span className={styles.text_}> </span>
              </p>
              <p className={styles.block_484}>
                <span className={styles.text_11}>Correct: 8:00 ​ </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  آ
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_485}>
                Instead of a.m. and p.m., use the spoken time of day indicator.
              </p>
              <p className={styles.block_486}>
                <span className={styles.text_11}>Correct: ​12:00 ​ </span>
                <span dir="rtl" className={styles.text_11}>
                  ود
                </span>
                <span className={styles.text_11}> </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ہر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ود
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_487}>Address</p>
              <p className={styles.block_488}>
                Favor full spellings over abbreviations where natural, but use
                abbreviations when explicitly spoken.
              </p>
              <p className={styles.block_489}>
                Use commas for ENTITY, LOCATION.
              </p>
              <p className={styles.block_490}>Web</p>
              <p className={styles.block_491}>
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.
              </p>
              <p className={styles.block_492}>
                <span className={styles.text_11}>
                  Correct: www.google.co.kr{' '}
                </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  رآ
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  وا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_14}> </span>
              </p>
              <p className={styles.block_493}>"</p>
              <p className={styles.block_494}>
                <span className={styles.text_11}>Correct: amazon.com </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  م
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  نوز ا
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_495}>
                <span className={styles.text_11}>
                  Correct: mike@example.org{' '}
                </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  رآوا
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  آ
                </span>
                <span className={styles.text_15}>​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_496}>
                <span className={styles.text_11}>Correct: </span>
                <span dir="rtl" className={styles.text_11}>
                  مآ
                </span>
                <span className={styles.text_11}># </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  مآ
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_497}>
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <p className={styles.block_498}>
                <span className={styles.text_11}>
                  Correct: www.google.com.ph{' '}
                </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  ا
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  م
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ ​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_499}>
                <span className={styles.text_11}>Correct: www.forbes.com </span>
                <span className={styles.text_14}>Example audio: " </span>
                <span dir="rtl" className={styles.text_14}>
                  م
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ٹاڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ر
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_15}>​ </span>
                <span dir="rtl" className={styles.text_14}>
                  ڈ
                </span>
                <span className={styles.text_14}> </span>
                <span className={styles.text_14}>" </span>
              </p>
              <p className={styles.block_500}>Abbreviation</p>
              <p className={styles.block_501}>
                Do not abbreviate unless the speaker says an abbreviated form.
              </p>
              <p className={styles.block_502}>
                <span className={styles.text_}>Correct: ۔ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر​ د​ ن و
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_503}>
                <span className={styles.text_}>Incorrect: ۔ ​ </span>
                <span dir="rtl" className={styles.text_}>
                  ر​ د​ یو
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_504}>
                <span className={styles.text_6}>Example audio: " </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ر
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  د
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ن و
                </span>
                <span className={styles.text_7}>​ ​ </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_505}>
                <span className={styles.text_8}>Example </span>
                <span className={styles.text_9}>Correct: ۔ ​ ​ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_9}>
                  ا​ ا​ و​ ر ​ ن ​ لآ​ ہو
                </span>
                <span className={styles.text_9}> </span>
              </p>
              <p className={styles.block_506}>
                <span className={styles.text_6}>audio: " </span>
                <span className={styles.text_7}>​ ​ ​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ا
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ا
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  و
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ر
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ن
                </span>
                <span className={styles.text_6}> </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  لآ
                </span>
                <span className={styles.text_7}>​ </span>
                <span dir="rtl" className={styles.text_6}>
                  ہو
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <p className={styles.block_507}>
                <span className={styles.text_16}>​ </span>
                <span className={styles.text_8}>" </span>
                <span className={styles.text_10}>Incorrect: ۔ ​ ​ ​ </span>
                <span dir="rtl" className={styles.text_10}>
                  ا ا​ ہو
                </span>
                <span className={styles.text_10}> </span>
              </p>
              <p className={styles.block_508}>
                In acronyms, do not use periods between letters.
              </p>
              <p className={styles.block_509}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ا​ ا
                </span>
                <span className={styles.text_}>​ ​ </span>
              </p>
              <p className={styles.block_510}>Correct:</p>
              <p className={styles.block_511}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  ےا
                </span>
                <span className={styles.text_}>​ </span>
              </p>
              <p className={styles.block_512}>
                <span className={styles.text_}>Correct: </span>
                <span dir="rtl" className={styles.text_}>
                  یڈ​ ا
                </span>
                <span className={styles.text_}>​ </span>
              </p>
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
