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
            <PageContentHeader currentPage="Longform Korean" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Transcribe cardinal and ordinal numbers under 10 in Hangeuls.
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 사과가 세 개 있어요. </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 사과가 3 개 있어요. </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 사과가 세개 있어요 "{' '}
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Use a space between numbers in Hangeuls and the count
                    word.
                  </span>
                </p>
                <p className={styles.block_421}>
                  Transcribe foreign (e.g. Chinese or English) numbers and any
                  native number greater than 10 in arabic numbers.
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 35 </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 삼십오 </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 삼십오 " </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 102 </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 백이 </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 빽이 " </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 937 </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 구백삼십칠 </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 구백삼십칠 " </span>
                </p>
                <p className={styles.block_430}>
                  Although a prompt includes numbers, if it is an entry word
                  transcribe it in Hangeuls.
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 삼각관계 </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 3 각관계 </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 삼각관계 " </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 삼거리 </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 3 거리 </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 삼거리 " </span>
                </p>
                <p className={styles.block_436}>
                  If a large number consists of only a number followed by "만",
                  "억", "조", or higher, then transcribe as a numeral plus word.
                  Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 1 조 5 천억 원 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 일조 오천억 원 " </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Before "만", "억" and "조", use Arabic numerals.
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 3 만 명 </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 55 억 년 전 </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 700 조 원 </span>
                </p>
                <p className={styles.block_442}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 1 2 3 4 5 6 7 8 9 10 </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 일 이 삼 사 오 육 칠 팔 구 십{' '}
                  </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 일 이 삼 사 오 육 칠 팔 구 십 "{' '}
                  </span>
                </p>
                <p className={styles.block_446}>
                  Write lists of counting numbers in Hangeuls without commas.
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열
                  </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 1 2 3 4 5 6 7 8 9 10 </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열 "
                  </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : list of counting numbers, no comma if just counting
                  </span>
                </p>
                <p className={styles.block_451}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 10,000,000 </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 10000000 </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 천만 " </span>
                </p>
                <p className={styles.block_454}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 2/3 만 채워 주세요. </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 삼분의 이만 채워 주세요.{' '}
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 삼분의 이만 채워 주세요 "{' '}
                  </span>
                </p>
                <p className={styles.block_456}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals.
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 2m 21cm </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 2.21 m </span>
                </p>
                <p className={styles.block_459}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 저는 반만 주세요. </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 저는 1/2 만 주세요 </span>
                </p>
                <p className={styles.block_462}>
                  Use decimals only when the mixed numbers that represent
                  currency amounts are mentioned.
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : 예산이 6.5 조 원이래.{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>
                    : " 예산이 육 점 오조 원이래 "{' '}
                  </span>
                </p>
                <p className={styles.block_464}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 삼성 판매량이 20% 올랐다.{' '}
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 삼성 판매량이 20 퍼센트 올랐다.{' '}
                  </span>
                </p>
                <p className={styles.block_467}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_468}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 블레이드 III </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 블레이드 3 </span>
                </p>
                <p className={styles.block_471}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 오피스 시즌 9 에피소드 3{' '}
                  </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 오피스 시즌 구 에피소드 삼{' '}
                  </span>
                </p>
                <p className={styles.block_474}>
                  If it is a product type, use the common written form.
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: .22 구경의 </span>
                </p>
                <p className={styles.block_476}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 010-9267-3771 </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 01092673771 </span>
                </p>
                <p className={styles.block_479}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 삼성 갤럭시 S6 </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 삼성 갤럭시 에스 식스{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: XT 660 or XT660 </span>
                </p>
                <p className={styles.block_483}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 2 * 6 / 3 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>
                    : " 이 곱하기 육 나누기 삼 "{' '}
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={'text'}>Transcribe all currencies in Hangeuls.</p>
                <p className={styles.block_488}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 50 달러 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 오십 달러 " </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: $50 </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 15,000 원 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 만오천원 " </span>
                </p>
                <p className={styles.block_491}>
                  For cent-only quantities, the word "전" should follow the
                  amount.
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 5 전 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 오 전 " </span>
                </p>
                <p className={styles.block_493}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : 오늘 온도는 20° 입니다.{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>
                    : " 오늘 온도는 이십도 입니다 "{' '}
                  </span>
                </p>
                <p className={styles.block_495}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 3m 50cm </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 3 미터 50 센티미터 </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 삼 미터 오십 센티미터 "{' '}
                  </span>
                </p>
                <p className={styles.block_498}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 23°. </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 이십삼도 입니다 </span>
                </p>
                <p className={styles.block_501}>
                  For lengths, widths, and heights: use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 1024x768 벽지 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>
                    : " 천이십사 대 칠백육십팔 벽지 "{' '}
                  </span>
                </p>
                <p className={styles.block_503}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 기름값이 리터당 2,500 원이네.{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 기름값이 리터당 2,500 이네.{' '}
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 기름값이 리터당 이천 오백 이네 "{' '}
                  </span>
                </p>
                <p className={styles.block_507}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_17}>• </span>
                  <span className={styles.text_7}>메가 바이트 - MB </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>킬로바이트 - kB </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>기가 바이트 - GB </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>테라 바이트 - TB </span>
                </p>
                <p className={styles.block_512}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_17}>• </span>
                  <span className={styles.text_7}>인치 - in </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>피트 - ft </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>야드 - yd </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>마일 - mi </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>밀리미터 - mm </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>센티미터 - cm </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>미터 - m </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>킬로미터 - km </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>시간당 마일 - mph </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>시간당 킬로미터 - km/h </span>
                </p>
                <p className={styles.block_523}>Common measurements of area</p>
                <p className={styles.block_524}>
                  <span className={styles.text_17}>• </span>
                  <span className={styles.text_7}>제곱 인치 - in2 </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>제곱 피트 - ft2 </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>제곱 마일 - mi2 </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>제곱 센티미터 - cm2 </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>제곱 미터 - m2 </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>제곱 킬로미터 - km2 </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>에이커 - acre </span>
                </p>
                <p className={styles.block_529}>Common scientific terms</p>
                <p className={styles.block_530}>
                  <span className={styles.text_17}>• </span>
                  <span className={styles.text_7}>데시벨 - dB </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>뉴턴 - N </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>줄 - J </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>파섹 - parsec </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>암페어 - amp </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>헤르츠 - Hz </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>와트 - W </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>킬로와트 - kW </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>몰 - mol </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>칸델라 - cd </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>루멘 - lm </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>도 - ° </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>화씨 - F </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>섭씨 - C </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>켈빈 - K </span>
                </p>
                <p className={styles.block_543}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_17}>• </span>
                  <span className={styles.text_7}>파운드 - lb </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>액량 온스 - oz </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>쿼트 - q </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>리터 - L </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>그램 - g </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>밀리그램 - mg </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>킬로그램 - kg </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>입방 - 3 </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>입방 미터 - m3 </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_7}>입방 인치 - in3 </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 2015 년 4 월 15 일 </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 2015 년 4/15 </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 이천십오년 사월 십오일 "{' '}
                  </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 80 년대 음악 </span>
                </p>
                <p className={styles.block_558}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 2015/04/15 </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 2015 4 15 </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 이천십오 사 십오 " </span>
                </p>
                <p className={styles.block_561}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_562}>
                  Write times in arabic number format.
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 오후 2 시 30 분 </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 오후 두시 삼십분 </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 오후 두시 삼십분 " </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 오전 5 시 정각 </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: 3PM </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 쓰리 피엠 " </span>
                </p>
                <p className={styles.block_567}>
                  For "정오" and "한밤중", use the written form.
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 정오 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 정오 " </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: 12PM </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_572}>
                  Use commas for LOCATION, ENTITY.
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 여의도, 닥터 로빈스 </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 여의도 닥터 로빈스 </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_576}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: www.naver.com </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>
                    : " 더블류 더블류 더블류 점 엔 에이 브{' '}
                  </span>
                </p>
                <p className={styles.block_578}>이 이 얼 점 컴 "</p>
                <p className={styles.block_579}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: jkmvko@gmail.com </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Jkmvko@gmail.com </span>
                </p>
                <p className={styles.block_581}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: www.naver.com </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: ww.naver.com </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 더블류 더블류 점 엔 에이 브이 이 얼 점 컴 "
                  </span>
                </p>
                <p className={styles.block_585}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_18}>E</span>
                  <span className={styles.text_19}>XAMPLE </span>
                  <span className={styles.text_20}>C</span>
                  <span className={styles.text_21}>ORRECT</span>
                  <span className={styles.text_20}>: naver.com </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_6}>AUDIO</span>
                  <span className={styles.text_7}>
                    : " 엔 에이 브 이 얼 점 컴 "{' '}
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 엔 에이 브 이 얼 점 컴{' '}
                  </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 오케이, 이따 봐. </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 오케, 이따 봐 </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 오케이 이따 봐 " </span>
                </p>
                <p className={styles.block_593}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: HOT 노래 틀어 줘. </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: H.O.T 노래 틀어 줘 </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 에이치오티 노래 틀어 줘 "{' '}
                  </span>
                </p>
                <p className={styles.block_596}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 제이.씨. 페니 </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 제이씨페니 </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Official brand name as seen in the privacy policy includes
                    periods.
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
