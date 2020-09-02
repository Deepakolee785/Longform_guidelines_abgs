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
            <PageContentHeader currentPage="longform Mongolian" />
            <div className="content text">
              <p className={'large-heading'}>Format </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <div id="number">
                <p className={'heading'}>Number </p>
                <p className={'text'}>
                  Only Western Arabic numerals should be used.{' '}
                </p>
                <p className={styles.block_504}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).{' '}
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ангид есөн оюутан байна{' '}
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Ангид 9 оюутан байна </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Numbers less than 10 should be written out, so the number
                    9 should be written out as "есөн".{' '}
                  </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ангид 13 оюутан байна{' '}
                  </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Ангид арван гурван оюутан байна{' '}
                  </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Numbers 10 or above use digits. The number 13 should not
                    be written out as "арван гурван", just use the digits "13".{' '}
                  </span>
                </p>
                <p className={styles.block_511}>
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10.{' '}
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : надад зургаан нохой, 12 шувуу байгаа.{' '}
                  </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : надад 6 нохой, 12 шувуу байгаа.{' '}
                  </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though this sentence has "нохой" and "шувуу"
                    coordinated with numbers, since 6 is less than 10, it should
                    be written out as "зургаан", while 12 should use digits.{' '}
                  </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : надад зургаан нохой арван хоёр шувуу байгаа{' '}
                  </span>
                </p>
                <p className={styles.block_516}>
                  Transcribe all decimal numbers as digits.{' '}
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 3,14 </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : гурав зууны арван дөрөв{' '}
                  </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гурав зууны арван дөрөв{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though 3,14 is less than 10, the correct
                    transcription uses digits and does not spell out "3,14" as
                    "гурав зууны арван дөрөв" because decimal numbers always use
                    digits.{' '}
                  </span>
                </p>
                <p className={styles.block_521}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.{' '}
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : тэд амьтны дэлгүүрээс 9, 10 алтан загас авсан.{' '}
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : тэд амьтны дэлгүүрээс ес, 10 алтан загас авсан.{' '}
                  </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though 9 is less than 10, both numbers refer to
                    "амьтны" and one of the numbers is 10 or greater so write
                    out both numbers using digits "9 or 10".{' '}
                  </span>
                </p>
                <p className={styles.block_525}>
                  If a large number consists of only a number followed by
                  "million", "billion", "trillion", or higher, then transcribe
                  as a numeral plus word. Otherwise, transcribe as numerals.{' '}
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 7 тэрбум </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 7000000000 </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>долоон тэрбум </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Here, the number 7 is followed by a "тэрбум" so it should
                    be transcribed as the numeral "7" with the word "тэрбум"
                    written out after it.{' '}
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: сая галуу </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1000000 галуу </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>сая галуу </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 1000 галуу </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1 мянган галуу </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>нэг мянган галуу </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Only write out "сая" or any higher amount. In this
                    example, "нэг мянган" is small enough to be transcribed
                    using digits "1000".{' '}
                  </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 7,18 тэрбум </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    долоо зууны арван найман тэрбум{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 7018000000 E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker says the number at the{' '}
                  </span>
                </p>
                <p className={styles.block_539}>
                  beginning as a decimal so just write "долоо зууны арван
                  найман" using digits "7,18" and the write out "тэрбум" after
                  it.{' '}
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 7234435 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    долоон сая хоёр зуун гучин дөрвөн{' '}
                  </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_1}>
                    мянга дарван зуун гучин тав{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Here the number is in the millions where number 7 is
                    followed by million, but it's further specified, so write
                    out the whole number with numerals as "7234435".{' '}
                  </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 7 тэрбум хоёр </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 7 тэрбум 2 </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>долоон тэрбум хоёр </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Speaker gets cut off. Since the number is not complete, do
                    not write it out as numerals but transcribe the initial
                    number with digits "7" then write out "тэрбум" and the
                    number 2 as "хоёр".{' '}
                  </span>
                </p>
                <p className={styles.block_547}>
                  Write lists of numbers with digits and without commas.{' '}
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 0 1 1 2 3 5 8 13 </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : 0, 1, 1, 2, 3, 5, 8, 13{' '}
                  </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    тэг нэг нэг хоёр гурав тав найм арван гурав{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Because the numbers are listed, all of them are
                    transcribed as numbers even though some are less than 10 and
                    there are no commas used.{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 3 2 1 яваад </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 3, 2, 1 яваад </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>гурав хоёр нэг яваад </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though "3 2 1" is part of a sentence, the numbers are
                    still transcribed using digits and without commas because
                    they are considered a list of numbers.{' '}
                  </span>
                </p>
                <p className={styles.block_556}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.{' '}
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Тэдэнд 1/2 килограмм будаа хэрэгтэй.{' '}
                  </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Тэдэнд хоёрны нэг килограмм будаа хэрэгтэй.{' '}
                  </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Тэдэнд 0,5 килограмм будаа хэрэгтэй.{' '}
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    тэдэнд хагас килограмм будаа хэрэгтэй{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE </span>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : 2/3 км яваад, зүүн эргэ.{' '}
                  </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_3}>AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гуравны хоёр километр яваад зүүн{' '}
                  </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : 2/3 километр яваад, зүүн эргэ.{' '}
                  </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_1}>эргэ </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 2/3 * 5/16 </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 2/3 үржих нь 5/16 </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гуравны хоёрыг үржих нь арван зургааны тав{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : This is a math expression so transcribe the numbers using
                    slashes and numerals.{' '}
                  </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_4}>
                    For mixed numbers in math and units &amp; measures, use
                    numerals with "
                  </span>
                  <span className={styles.text_20}>бүхэл</span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 3 бүхэл 1/2 км </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 3 1/2 км </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гурван бүхэл хоёрны нэг километр{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "гурван бүхэл хоёрны нэг" is a mixed number so write out
                    the number and fraction with numerals and slashes with the
                    word "бүхэл" (meaning "integer").{' '}
                  </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 1/3 + 3 бүхэл 1/2 </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1/3 + 3 1/2 </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гуравны нэг дээр нэмэх гурван бүхэл хоёрны нэг{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : In a math equation, mixed numbers should be transcribed as
                    numerals and slashes with the word "бүхэл" (meaning
                    "integer") in between the first number and fraction.{' '}
                  </span>
                </p>
                <p className={styles.block_578}>
                  If a fraction is referring to items (not measurement units or
                  math equations), transcribe the fraction in words.{' '}
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : алимыг арван зургаа хуваасны тав{' '}
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: алимыг 5/16 </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    алимыг арван зургаа хуваасны тав{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "арван зургаа хуваасны тав" is a fraction that represents
                    part of an item (an apple) so do not use numerals and
                    slashes to transcribe. Write the fraction out.{' '}
                  </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би хагас итгэлтэй байна{' '}
                  </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Би 1/2 итгэлтэй байна{' '}
                  </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The "хагас" in this example is used figuratively and does
                    not refer to an item or a unit of measurement so write the
                    fraction out.{' '}
                  </span>
                </p>
                <p className={styles.block_585}>
                  Mixed numbers that refer to items should be written out in
                  words if it's under 10, otherwise write it with numerals.{' '}
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : гурван бүхэл нэг тал жүрж{' '}
                  </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 3 1/2 жүрж </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Mixed numbers that refer to items (here, it refers to
                    жүрж) should be written out in words as in this example
                    "гурван бүхэл нэг тал".{' '}
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 12 бүхэл нэг тал хулуу хийсэн.{' '}
                  </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Арван хоёр бүхэл нэг тал хулуу хийсэн.{' '}
                  </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though this is a mixed number, you should follow the
                    rule about using numerals for numbers greater than 9. 12 is
                    greater than 9 so use numerals but for the fraction part of
                    the mixed number, write it out in words.{' '}
                  </span>
                </p>
                <p className={styles.block_591}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.{' '}
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 2,50 доллар зээлэх үү?{' '}
                  </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Хоёр доллар 50 цент зээлэх үү?{' '}
                  </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    хоёр доллар тавин цент зээлэх үү{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Хоёр доллар тавин цент" is a mixed number but since it
                    refers to currency, use the standard currency format "2,50
                    доллар".{' '}
                  </span>
                </p>
                <p className={styles.block_596}>
                  Transcribe percentages using numerals followed by the % sign.
                  In the unlikely case that you encounter a number of a million
                  or greater used as a percentage, spell it out.{' '}
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 2% сүү </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 2 хувийн сүү </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>хоёр хувийн сүү </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Amount has percentages so use numerals and the percent
                    sign "2%", don't write out the words.{' '}
                  </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 1 сая хувь </span>
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1 сая % </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>нэг сая хувь </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The rule regarding amounts in the millions or greater
                    applies here so spell out "сая" and "хувь" but use the digit
                    for the number in front ("1" not "нэг").{' '}
                  </span>
                </p>
                <p className={styles.block_605}>
                  Use Roman numerals only when part of an official name or
                  title.{' '}
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: XXI Олимпийн наадам </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 21-р Олимпийн наадам </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    хорин нэгдүгээр олимпийн наадам{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The Olympic Games refers to an official name of a sports
                    event and is stylized by using Roman{' '}
                  </span>
                </p>
                <p className={styles.block_609}>
                  numerals for the game number so write "хорин нэгдүгээр" as
                  "XXI".{' '}
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : VIII Богд Жавзандамба{' '}
                  </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    наймдугаар богд жавзандамба{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 8-р Богд Жавзандамба </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "наймдугаар богд жавзандамба" refers to the official title
                    of a king so the phrase "наймдугаар" should be transcribed
                    as "VIII".{' '}
                  </span>
                </p>
                <p className={styles.block_614}>
                  Transcribe seasons and episodes of television shows with
                  numerals.{' '}
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: улирал 3 анги 2 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    улирал гурав анги хоёр{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though "3" and "2" are less than 10, they should be
                    transcribed as numerals here since they refer to the season
                    and episode of a television show.{' '}
                  </span>
                </p>
                <p className={styles.block_617}>
                  Transcribe phone numbers with no spaces in the main phone
                  number body. Include a space between the country code and the
                  main phone number when spoken.{' '}
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 80091112 </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 8009-1112 </span>
                </p>
                <p className={styles.block_620}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    найм тэг тэг ес нэг нэг нэг хоёр{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The correct transcription of this Mongolian phone number
                    does not include spaces. Do not use dashes or parenthesis.{' '}
                  </span>
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 976 80090123 </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 976-8009-0123 </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    ес долоо зургаа найм тэг тэг ес тэг нэг хоёр гурав{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The correct transcription includes a space between the
                    country code, 976, and the phone number.{' '}
                  </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: +976 80090123 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    нэмэх ес долоо зургаа найм тэг тэг ес{' '}
                  </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_1}>тэг нэг хоёр гурав </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Since the speaker said the country calling code with a
                    "нэмэх" before the number, transcribe the spoken "нэмэх" as
                    the plus symbol, "+".{' '}
                  </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 80090123 дотуур утас 54{' '}
                  </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 80090123 54 </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    найм тэг тэг ес тэг нэг хоёр гурав дотуур утас тавин дөрөв{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Since the speaker says "дотуур утас" aloud, transcribe the
                    whole word, followed by the numbers spoken after "дотуур
                    утас" as digits "54".{' '}
                  </span>
                </p>
                <p className={styles.block_630}>
                  Transcribe alpha-digit sequences (product codes, car models,
                  etc.) in their most natural way (there may be more than one
                  way to transcribe). Do not transcribe credit card numbers or
                  any other personal information numbers.{' '}
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Мерседес Бенз CLS450 эсвэл Мерседес Бенз CLS 450{' '}
                  </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    мерседес бенз си л с дөрөв тавь{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Here the letter sequence followed by digits can be
                    transcribed either all together "CLS450" or with a space
                    between the letters and numbers "CLS 450".{' '}
                  </span>
                </p>
                <p className={styles.block_634}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.{' '}
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 5 / 6 ^ 3 </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 5/6^3 </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    тавыг хуваах нь зургаагийн гурван зэрэг{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    тавыг хуваах нь зургаагийн куб{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The spoken sentence sounds like a math expression so the
                    corresponding math symbols and numerals are used to
                    transcribe it.{' '}
                  </span>
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 5 * 6 хэд вэ? </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    тавыг үржих нь зургаа хэд вэ{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 5 үржих нь 6 хэд вэ? </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    тавыг зургаагаар үржээд хэд вэ{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The correct transcription uses the asterisk symbol for
                    multiplication "*", and not "x".{' '}
                  </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_14}>ORRECT</span>
                  <span className={styles.text_15}>: √3 </span>
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 3-ын квадрат язгуур </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>гурвын квадрат язгуур </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 8 цаг * 12$ хэд вэ? </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : 8 цаг * 12 доллар хэд вэ?{' '}
                  </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    найман цагийг үржих нь арван хоёр доллар хэд вэ{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "цаг" is spelled out because it is a unit of measurement.
                    However, currency is the one exception to this rule, so
                    "доллар" is transcribed with the symbol, "$".{' '}
                  </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_11}>: </span>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Гурван матрыг хоёр гүрвэлд хуваахаар хэд{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_18}>
                    "матар" and "гүрвэл" are not useful units{' '}
                  </span>
                  <span className={styles.text_19}>вэ? </span>
                </p>
                <p className={styles.block_475}>
                  of measurement, so this is not a true math expression.{' '}
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : 3 матар / 2 гүрвэл хэд вэ?{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  The numbers and math operators should be written out.{' '}
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit </p>
                <p className={'text'}>
                  Transcribe currencies with your currency symbol followed by
                  digits.{' '}
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_21}>C</span>
                  <span className={styles.text_22}>ORRECT</span>
                  <span className={styles.text_21}>: 10</span>
                  <span className={styles.text_23}>₮ </span>
                  <span className={styles.text_24}>E</span>
                  <span className={styles.text_25}>XAMPLE AUDIO</span>
                  <span className={styles.text_24}>: " </span>
                  <span className={styles.text_26}>арван төгрөг </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_14}>XPLANATION</span>
                  <span className={styles.text_13}>
                    : "арван төгрөг" is an amount of currency. In Mongolian,
                    төгрөг amounts are generally written with a төгрөг sign (
                  </span>
                  <span className={styles.text_27}>₮</span>
                  <span className={styles.text_13}>
                    ) preceded by a numeral.{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : 20€ хэдэн ам доллар болох вэ?{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    хорин евро хэдэн ам доллар болох{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_1}>вэ </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Since Euros is a currency that is commonly referenced in
                    Mongolian, it is transcribed with the "€" symbol, and is not
                    spelled out.{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with a currency symbol.{' '}
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_14}>ORRECT</span>
                  <span className={styles.text_13}>
                    : Өдрийн багц хоол ердөө 7900
                  </span>
                  <span className={styles.text_27}>₮</span>
                  <span className={styles.text_13}>. </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Өдрийн багц хоол ердөө 7900.{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    өдрийн багц хоол ердөө долоо мянга есөн зуу{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_14}>XPLANATION</span>
                  <span className={styles.text_13}>
                    : Here the speaker is referring to the price of food so it
                    should also be transcribed with a currency sign and numerals
                    as "7,900
                  </span>
                  <span className={styles.text_27}>₮</span>
                  <span className={styles.text_13}>". </span>
                </p>
                <p className={styles.block_479}>
                  For all other currencies and slang terms for money, spell out
                  the words.{' '}
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Надад таван ногоон зээлээч ахаа?{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Надад 5$ зээлээч ахаа?{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though "ногоон" is slang for dollars in Mongolian,
                    transcribe it as the word "ногоон" and write out the number
                    "5" as "таван". Don't transcribe using the dollar sign.{' '}
                  </span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 200 иен </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>хоёр зуун иен </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "иен" refers to a foreign currency that is not often
                    referenced in Mongolian so transcribe the numbers as digits
                    "200" and write out the word "иен". Don't use the yen
                    symbol.{' '}
                  </span>
                </p>
                <p className={styles.block_657}>
                  When a speaker uses a currency name without specifying a
                  quantity, spell it out.{' '}
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Энэтхэг рупий ба монгол төгрөгийн хооронд валют хөрвүүлэх{' '}
                  </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker is referring to the rupee and tögrög in
                    general with no specific amounts, so write out the words
                    "рупий" and "төгрөгийн".{' '}
                  </span>
                </p>
                <p className={styles.block_660}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.{' '}
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : нэгээс таван зуун төгрөг{' '}
                  </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1-500 төгрөг </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker refers to a range of tugrik that could be
                    interpreted as "1-500" or "100-500".{' '}
                  </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 100-500 төгрөг </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    зуугаас таван зуун төгрөг{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The exact amount of the range of tugrik is definitely
                    "100-500" not "1-500" so transcribe the numbers using digits
                    followed by the word "төгрөг" written out.{' '}
                  </span>
                </p>
                <p className={styles.block_666}>
                  Keep units of measurement in English. Do not transliterate.{' '}
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: MB </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Мегабайт </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Please use the abbreviation "MB" instead of writing out
                    the whole word.{' '}
                  </span>
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: km </span>
                </p>
                <p className={styles.block_670}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: километр </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Please use the abbreviation "km" instead of writing out
                    the whole word.{' '}
                  </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: cm2 </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: сантиметр квадрат </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Please use the abbreviation "cm2" instead of writing out
                    the whole word.{' '}
                  </span>
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: g </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: грамм </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Please use the abbreviation "g" instead of writing out the
                    whole word.{' '}
                  </span>
                </p>
                <p className={styles.block_678}>
                  Common technical abbreviations{' '}
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>MB </span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>KB </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>GB </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_28}>● </span>
                  <span className={styles.text_29}>TB </span>
                </p>
                <p className={styles.calibre1}>
                  Common measurements of distance and rate{' '}
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>in </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>ft </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>yd </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>mi </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>mm </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>cm </span>
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>m </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>km </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>mph </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>km/h </span>
                </p>
                <p className={styles.block_692}>Common measurements of area </p>
                <p className={styles.block_693}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>km2 </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>in2 </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>ft2 </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>mi2 </span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>cm2 </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>m2 </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>km2 </span>
                </p>
                <p className={styles.block_698}>
                  Common measurements of weight and volume{' '}
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>g </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>mg </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>kg </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>L </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>m3 </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>● </span>
                  <span className={styles.text_5}>in3 </span>
                </p>
                <p className={styles.block_700}>
                  For degrees, use the ° symbol.{' '}
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Гадаа 20° C байна. </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Гадаа 20 цельсийн хэм байна.{' '}
                  </span>
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гадаа хорин цельсийн хэм байна{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker explicitly says "цельсийн" here so use the
                    symbol for celsius "C" after the degree symbol.{' '}
                  </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Гадаа 20° байна. </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Гадаа 20° C байна. </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>гадаа хорин хэм байна </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : If the speaker refers to the temperature in degrees, but
                    does not actually say the word "цельсийн", do not transcribe
                    the word.{' '}
                  </span>
                </p>
                <p className={styles.block_708}>
                  Abbreviate all units of measurement that are after numbers.{' '}
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Манайх 10 L жүржийн шүүс худалдан авсан.{' '}
                  </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    манайх арван литр жүржийн шүүс худалдан авсан{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>: I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Манайх 10 литр жүржийн шүүс худалдан{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  Since "литр" appears after the number 10, авсан.{' '}
                </p>
                <p className={styles.block_475}>
                  it is abbreviated as "L" with a space between "10" and "L".{' '}
                </p>
                <p className={styles.block_479}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.{' '}
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Муужгай 1 кг жинтэй байсан.{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Муужгай нэг кг жинтэй байсан.{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    муужгай нэг килограмм жинтэй байсан{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though 1 is less than 10, it should not be written
                    out as "нэг" here since it comes before a unit of
                    measurement "килограмм".{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Би тэнд 6 сар амьдарсан.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    би тэнд зургаан сар амьдарсан{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though 6 is less than 10, it should not be written
                    out as "зургаан" since it comes before a unit of time "сар".{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  For lengths, widths, and heights: use "x" instead of any
                  preposition.{' '}
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Онгоцонд авч орох тээшний дээд хэмжээ 20х20х40.{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Онгоцонд авч орох тээшний дээд хэмжээ 20 харьцах нь 20
                    харьцах нь 40.{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    онгоцонд авч орох тээшний дээд хэмжээ хорь харьцах нь хорь
                    харьцах нь дөч{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The numbers here are referring to the length, width, and
                    height of a luggage, transcribe it with "x" in between the
                    numbers (no spaces).{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Би 9х12 м байшинтай болмоор байна.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    би есийг харьцах нь арван хоёр метр{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_1}>
                    байшинтай болмоор байна{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "есийг харьцах нь арван хоёр" is referring to the
                    measurement of a house. Instead of writing out "нь", use
                    "x".{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  If a speaker says a number without saying "am", "pm" or
                  "o'clock", format it as time if it is obvious that the number
                  refers to a time.{' '}
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : сэрүүлгээ 5:45-д тавиарай.{' '}
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : сэрүүлгээ тав 45-д тавиарай.{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    сэрүүлгээ тав дөчин тавд тавиарай{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Although the speaker did not say"өглөө" or "орой" or
                    "цагт", it is obvious that the speaker is{' '}
                  </span>
                </p>
                <p className={styles.block_711}>
                  referring to a time. Therefore, "тав дөчин тавд" is
                  transcribed using time format: with ":" in between "5" and
                  "45".{' '}
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time </p>
                <p className={'text'}>
                  When transcribing dates, write out the year in numeral form
                  followed by the full name of the month and the date in the
                  ordinal form.{' '}
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 1964 оны 1 дүгээр сарын 12-ны өдөр{' '}
                  </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1964-01-12 </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    мянга есөн зуун жаран дөрвөн оны нэгдүгээр сарын арван
                    хоёрны өдөр{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Proper transcription is four digit year, followed by month
                    and date.{' '}
                  </span>
                </p>
                <p className={styles.block_717}>
                  If the speaker refers to a decade without specifying the
                  century, transcribe it with an apostrophe and a plural s.{' '}
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 80-аад оны дуунууд </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>наяад оны дуунууд </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Here, the word "наяад" is referring to a decade so the
                    numbers are transcribed as digits. A "-аад" suffix should be
                    added after the numbers because it refers to multiple years
                    in the decade.{' '}
                  </span>
                </p>
                <p className={styles.block_720}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe it as numerals with the proper punctuation
                  separating the month, date, and year.{' '}
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 2010-07-12 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    хоёр мянга арав зураас тэг долоо{' '}
                  </span>
                </p>
                <p className={styles.block_722}>
                  <span className={styles.text_1}>зураас арван хоёр </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_723}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker is saying the date aloud so transcribe the
                    numbers and numerals and the "зураас" as the symbol "-".{' '}
                  </span>
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Хүчинтэй хугацаа 2012-10-05.{' '}
                  </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Хүчинтэй хугацаа 20121005.{' '}
                  </span>
                </p>
                <p className={styles.block_726}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    хүчинтэй хугацаа хоёр мянга арван хоёр арав тэг тав{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_727}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though the speaker doesn't say "зураас", since it is
                    referring to a date, use the correct{' '}
                  </span>
                </p>
                <p className={styles.block_728}>
                  format for expiration dates with numerals separated by
                  hyphens.{' '}
                </p>
                <p className={styles.block_729}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.{' '}
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 3:00 </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 3 цаг </span>
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>гурван цаг </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_732}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "цаг" in Mongolian refers to the exact hour on a 12-hour
                    clock so it should be transcribed as "3:00".{' '}
                  </span>
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 4:00 цагт сэрүүлэг тавиарай{' '}
                  </span>
                </p>
                <p className={styles.block_734}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : 4 цагт сэрүүлэг тавиарай{' '}
                  </span>
                </p>
                <p className={styles.block_735}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    дөрвөн цагт сэрүүлэг тавиарай{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Although the speaker did not say "цаг" simply saying a
                    number in reference to time means on the hour so it should
                    be transcribed as "4:00".{' '}
                  </span>
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 3:15 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>гурав арван тав </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 6:05 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>зургаа тав </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_738}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 3:30 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>гурав хагас </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_739}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : When referring to time, a half is equal to 30 minutes so
                    transcribe "гурав хагас" as 3:30.{' '}
                  </span>
                </p>
                <p className={styles.block_740}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 1:50 </span>
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 2-т 10 дутуу </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>хоёрт арав дутуу </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Do not transcribe "хоёрт арав дутуу" using only words if
                    it refers to the time, use the hh:mm format. Here, "хоёрт
                    арав дутуу" is equal to "нэг (цаг) тавин (минут)" and should
                    be transcribed as "1:50".{' '}
                  </span>
                </p>
                <p className={styles.block_743}>
                  For "noon" and "midnight", use the written form.{' '}
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: үд дунд </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 12 цагт </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though "үд дунд" means the same thing as "12:00 цагт"
                    write it out in words.{' '}
                  </span>
                </p>
                <p className={styles.block_747}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Бид шөнө дундын шоунд явсан{' '}
                  </span>
                </p>
                <p className={styles.block_748}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Бид 00 цагийн шоунд явсан{' '}
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address </p>
                <p className={'text'}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.{' '}
                </p>
                <p className={styles.block_751}>
                  Use commas for ENTITY, LOCATION.{' '}
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Моннис цамхаг, Чингисийн өргөн чөлөө{' '}
                  </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_11}>
                    : The entity "Моннис цамхаг" that the{' '}
                  </span>
                </p>
                <p className={styles.block_753}>
                  speaker is referring to is located on Чингисийн өргөн чөлөө,
                  so a comma is used in between the two.{' '}
                </p>
                <p className={styles.block_754}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: кофе шоп, 14200 </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_11}>
                    : The speaker is looking for coffee shops{' '}
                  </span>
                </p>
                <p className={styles.block_755}>
                  within the zip code 14200, so there is a comma in between the
                  entity, "кофе шоп" and the location, "14200" .{' '}
                </p>
                <p className={styles.block_756}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Отгонбаяр Ганхуягын, Баянхонгор{' '}
                  </span>
                </p>
                <p className={styles.block_757}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Хөх толбот хүмүүс киноны гарах цагууд, Дархан{' '}
                  </span>
                </p>
                <p className={styles.block_758}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker is looking for showtimes for the movie "Хөх
                    толбот хүмүүс" in theaters in Дархан so there is a comma in
                    between the entity "Хөх толбот хүмүүс киноны гарах цагууд"
                    and the location "Дархан".{' '}
                  </span>
                </p>
                <p className={styles.block_759}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.{' '}
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би Өмнөд Каролина руу явсан.{' '}
                  </span>
                </p>
                <p className={styles.block_761}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Би өмнөд Каролина руу явсан.{' '}
                  </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Өмнөд" is part of the state name here so capitalize the
                    first letter "Ө".{' '}
                  </span>
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Барилгын өмнө талд уулзъя.{' '}
                  </span>
                </p>
                <p className={styles.block_763}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Барилгын Өмнө талд уулзъя.{' '}
                  </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : No need to capitalize "өмнө" because it's not part of a
                    proper place name.{' '}
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web </p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.{' '}
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: www.google.co.kr </span>
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : {`www {цэг} Google {цэг} co {цэг} `}kr{' '}
                  </span>
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    w w w цэг google цэг c o цэг k r{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Although the speaker said "цэг" aloud, these are symbols
                    that are associated with URLs and should be transcribed as
                    "." and not spelled out in curly brackets.{' '}
                  </span>
                </p>
                <p className={styles.block_769}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: http://123.com </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    h t t p тодорхойлох цэг ташуу зураас{' '}
                  </span>
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_1}>
                    ташуу зураас нэг хоёр гурав цэг ком{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_771}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The "h t t p тодорхойлох цэг ташуу зураас ташуу зураас" is
                    part of the web URL format and should be written using
                    punctuation symbols "http://".{' '}
                  </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: mike@example.org </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>майк эт жишээ цэг орг </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Email and other account names that have "эт" before the
                    website name should be transcribed with the "@" symbol.{' '}
                  </span>
                </p>
                <p className={styles.block_774}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би пиццанд дуртай. #өлсөжбайна{' '}
                  </span>
                </p>
                <p className={styles.block_775}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Би пиццанд дуртай #Өлсөжбайна{' '}
                  </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    би пиццанд дуртай хаштаг өлсөж байна{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The pound symbol "#" is used to transcribe "хаштаг". A
                    period is included between "дуртай" and "#өлсөжбайна"
                    because "#өлсөжбайна" is not considered part of the
                    preceding sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : #өлсөжбайна Миний пицца хаана байна?{' '}
                  </span>
                </p>
                <p className={styles.block_777}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : #Өлсөжбайна Миний пицца хаана байна?{' '}
                  </span>
                </p>
                <p className={styles.block_778}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    хаштаг өлсөж байна миний пицца хаана байна{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The "ө" in "өлсөжбайна" is not capitalized because words
                    in hashtags are never capitalized, even if they appear at
                    the beginning of a sentence. There shouldn't be punctuation
                    between "өлсөжбайна" and "Миний".{' '}
                  </span>
                </p>
                <p className={styles.block_779}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".{' '}
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE </span>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: http:\mail.yahoo.com </span>
                </p>
                <p className={styles.block_780}>
                  <span className={styles.text_3}>AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    h t t p тодорхойлох цэг урагшаа ташуу{' '}
                  </span>
                </p>
                <p className={styles.block_781}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : http://mail.yahoo.com{' '}
                  </span>
                </p>
                <p className={styles.block_782}>
                  <span className={styles.text_1}>
                    зураас урагшаа ташуу зураас mail цэг yahoo цэг com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_783}>
                  If the speaker drops a "w" or "dot" and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.{' '}
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: www.facebook.com </span>
                </p>
                <p className={styles.block_785}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: ww facebook.com </span>
                </p>
                <p className={styles.block_786}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>w w facebook цэг ком </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker doesn't say the "цэг" before "facebook" and
                    only says two "w"s so add the missing dot and missing "w"
                    when transcribing.{' '}
                  </span>
                </p>
                <p className={styles.block_787}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.{' '}
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: www.target.com </span>
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: www.t a r g e t.com </span>
                </p>
                <p className={styles.block_790}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    w w w цэг t a r g e t цэг ком{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Although the speaker spells out "target", write the URL
                    all together without spaces "www.target.com".{' '}
                  </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={styles.block_792}>Abbreviation </p>
                <p className={styles.block_793}>
                  Do not transcribe abbreviated forms of words unless the
                  speaker says an abbreviated form.{' '}
                </p>
                <p className={styles.block_794}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Администраторт хандаарай.{' '}
                  </span>
                </p>
                <p className={styles.block_795}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Админд хандаарай. </span>
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    администраторт хандаарай{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though "администраторт" can be abbreviated as
                    "админд", the speaker used the full word so it is
                    transcribed as "администраторт".{' '}
                  </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Админд хандаарай. </span>
                </p>
                <p className={styles.block_799}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Администраторт хандаарай.{' '}
                  </span>
                </p>
                <p className={styles.block_800}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>админд хандаарай </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_801}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Администраторт" is often said as "админд", so transcribe
                    it just as "админд".{' '}
                  </span>
                </p>
                <p className={styles.block_802}>
                  For other proper names involving titles, use the official
                  spelling of the proper name. If you are not sure, do not
                  abbreviate the title.{' '}
                </p>
                <p className={styles.block_803}>
                  In acronyms and initialisms, do not use periods between
                  letters.{' '}
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: МАХН </span>
                </p>
                <p className={styles.block_805}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: М.А.Х.Н </span>
                </p>
                <p className={styles.block_806}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : АНУ, Вашингтон ДС, ТЖ Смит{' '}
                  </span>
                </p>
                <p className={styles.block_807}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : А.Н.У, Вашингтон Д.С, Т.Ж Смит{' '}
                  </span>
                </p>
                <p className={styles.block_808}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: ГХЯ, БНМАУ, ХХБ </span>
                </p>
                <p className={styles.block_809}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Г.Х.Я, Б.Н.М.А.У, Х.Х.Б{' '}
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
