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
            <PageContentHeader currentPage="Longform Vietnamese" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  • Write small numbers (0 to 9) as words and larger numbers (10
                  and above) using digits. However, you may write small numbers
                  using digits if they appear in a list, in mathematical
                  expression, as street numbers, as a measure or time unit.
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Có hai học viên trong lớp.{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: numbers less than 10 </span>
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Có 13 học viên trong lớp.{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: numbers 10 or above </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 3,14 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Decimal numbers should be written{' '}
                  </span>
                </p>
                <p className={styles.block_229}>
                  using digits, even if less than 10.
                </p>
                <p className={styles.block_230}>
                  • When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Họ mua 9 hoặc 10 con cá vàng ở cửa hàng thú nuôi trong
                    nhà.
                  </span>
                </p>
                <p className={styles.block_232}>
                  • If a large number consists of only a number followed by
                  "triệu", "tỷ", or higher, then transcribe as a numeral plus
                  word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 1,5 tỷ </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>một phẩy năm tỷ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_234}>
                  • Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 3 4 5 6 13 </span>
                </p>
                <p className={styles.block_236}>
                  • For long numbers (4+ digits), use a dot as thousand
                  separator.
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 10.000 </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: 10 000 </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: 10,000 </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: 10000 </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>mười ngàn </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_241}>
                  • In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Quẹo trái trong 2/3 cây số.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    quẹo trái quẹo trái trong hai phần{' '}
                  </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_9}>ba cây số </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_244}>
                  • When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Đưa cho tôi nửa cái bánh.{' '}
                  </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Đưa cho tôi 1/2 cái bánh.{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    đưa cho tôi nửa cái bánh{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : đã làm xong 12 cái rưỡi bánh tét{' '}
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : đã làm xong 12 và 1/2 cái bánh tét{' '}
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    đã làm xong mười hai cái rưỡi bánh tét{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_251}>
                  • For mixed numbers that represent currency amounts, always
                  use decimals.
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Cô ấy mua căn nhà ở vùng biển trị giá 7,5 tỷ đồng.
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    cô ấy mua căn nhà ở vùng biển trị giá bảy tỷ năm trăm triệu
                    đồng{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_254}>
                  • Transcribe percentages using numerals and the % sign. (In
                  the unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: sữa có độ béo 2% </span>
                </p>
                <p className={styles.block_256}>
                  • If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_257}>
                  • Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: quốc hội khóa IX </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>quốc hội khoá chín </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_259}>
                  • Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: mùa 3 tập 2 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>mùa ba tập hai </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_261}>
                  • If it is a product type, use the common written form.
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đường kính trong 22 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    đường kính trong hai mươi hai{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_263}>
                  • Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 08 3872 2332 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : landline with one-digit area code{' '}
                  </span>
                </p>
                <p className={styles.block_265}>preceded by leading "0"</p>
                <p className={styles.block_266}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 0231 123 4567 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : landline with three-digit area{' '}
                  </span>
                </p>
                <p className={styles.block_267}>code preceded by leading "0"</p>
                <p className={styles.block_268}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 020 123 1234 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : landline with two-digit area code{' '}
                  </span>
                </p>
                <p className={styles.block_265}>preceded by leading "0"</p>
                <p className={styles.block_269}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: +84 8 1234 5678 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : landline with country code (the{' '}
                  </span>
                </p>
                <p className={styles.block_270}>leading "0" is removed)</p>
                <p className={styles.block_269}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 0084 8 1234 5678 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : landline with country code (the{' '}
                  </span>
                </p>
                <p className={styles.block_270}>leading "0" is removed)</p>
                <p className={styles.block_271}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 098 123 4567 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: mobile phone number </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 0124 123 4567 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: mobile phone number </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 1800 1234 </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: toll-free number </span>
                </p>
                <p className={styles.block_274}>
                  • Transcribe alpha-digit sequences (product codes etc.) in
                  their most natural way (possibly several ways accepted). Do
                  not transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: XT 660 or XT660 </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Lexus ES350 </span>
                </p>
                <p className={styles.block_277}>
                  • If it really sounds like a math expression, then transcribe
                  it with numbers and symbols with spaces in between.
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 5 x 6 </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>năm nhân sáu </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_11}>ORRECT</span>
                  <span className={styles.text_12}>: √3 </span>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XAMPLE AUDIO</span>
                  <span className={styles.text_13}>: " </span>
                  <span className={styles.text_14}>căn số bậc hai của ba </span>
                  <span className={styles.text_13}>" </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  • Transcribe currencies as commonly written in the
                  transcription language.
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 500đ </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 50.000đ </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 7,5 triệu đồng </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    bảy triệu năm trăm ngàn{' '}
                  </span>
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_9}>đồng </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 21.000 VNĐ bằng bao nhiêu đô la Mỹ?{' '}
                  </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    hai mươi mốt ngàn tiền vn bằng bao nhiêu đô la mỹ{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_288}>
                  • When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tôi nợ anh một vài đồng bạc.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    tôi nợ anh một vài đồng bạc{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: ít tiền euro </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : chuyển đổi giữa rupee Ấn Độ và đô la Mỹ{' '}
                  </span>
                </p>
                <p className={styles.block_292}>
                  • For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 9 đến 12 đồng Euro </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tôi cần 400 hoặc 500 đô la.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    tôi cần bốn trăm hoặc năm trăm đô la{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tôi cần một đến hai trăm đô la.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    tôi cần một đến hai trăm đô la{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_296}>
                  • For xu-only quantities, the word "xu" should follow the
                  amount.
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: 5 xu </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>năm xu </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_298}>
                  • For all other currencies and slang terms for money, spell
                  out the words.
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Tôi đã xài một lít. </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: Tôi đã xài 100.000đ. </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>tôi đã xài một lít </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Cho tôi mượn một củ có được không?{' '}
                  </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Cho tôi mượn 1.000.000đ có được không?{' '}
                  </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    cho tôi mượn một củ có được không{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 200 yên </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: ¥ 200 </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>hai trăm yên </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_308}>
                  • Write out denominations of currency (the face values of
                  bills, notes, coins, etc).
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : tờ giấy bạc một triệu đồng mới cáu{' '}
                  </span>
                </p>
                <p className={styles.block_310}>
                  • For degrees, use the ° symbol.
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Nhiệt độ bên ngoài là 40° C.{' '}
                  </span>
                </p>
                <p className={styles.block_312}>
                  • Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Chiều dài căn nhà là 20 m.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    chiều dài căn nhà là hai chục mét{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Tôi mua 3 kg. </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>tôi mua ba ký lô </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_315}>
                  • Transcribe all numeric values preceding units in numeral
                  form, even if under 10.
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Bé trai sơ sinh cân nặng 4 kg.{' '}
                  </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi sống ở đó 6 tháng.{' '}
                  </span>
                </p>
                <p className={styles.block_318}>
                  • If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : 500đ cho thỏi kẹo này thì quá mắc.{' '}
                  </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : 500 cho thỏi kẹo này thì quá mắc.{' '}
                  </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    năm trăm cho thỏi kẹo này thì quá mắc{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Implied currency, add “đồng” symbol even though it is not
                    spoken.
                  </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Đặt báo thức cho 5:45.{' '}
                  </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Đặt báo thức cho 545.{' '}
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    đặt báo thức cho năm bốn mươi lăm{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Implied time, format the numerals as time.
                  </span>
                </p>
                <p className={styles.block_327}>
                  • For lengths, widths, and heights, use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tìm hình nền có tỷ lệ 1024 x 768.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    tìm hình nền có tỷ lệ một không hai{' '}
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_9}>bốn nhân bảy sáu tám </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_330}>
                  • Common technical abbreviations
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>megabyte - MB </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>kilobyte - kB </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>gigabyte - GB </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>terabyte - TB </span>
                </p>
                <p className={styles.block_335}>
                  • Common measurements of distance and rate
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>inch - in </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>foot - ft </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>yard - yd </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mile - mi </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>milimét - mm </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>xentimét - cm </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mét - m </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>kilômét - km </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Dặm trên giờ - mph </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>
                    Kilômét trên giờ - km/h{' '}
                  </span>
                </p>
                <p className={styles.block_346}>
                  • Common measurements of area
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>inch vuông - in2 </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>foot vuông - ft2 </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mile vuông - mi2 </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>xentimét vuông - cm2 </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mét vuông - m2 </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>kilômét vuông - km2 </span>
                </p>
                <p className={styles.block_352}>• Common scientific terms</p>
                <p className={styles.block_353}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>decibel - dB </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Newton - N </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Joule - J </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>parsec - pc </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>ampe - A </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Hertz - Hz </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Watt - W </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Kilowatt - kW </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mol - mol </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Candela - cd </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>lumen - lm </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>độ - ° </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Fahrenheit - F </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Celsius - C </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Centigrade - C </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>Kelvin - K </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Common measurements of weight and volume{' '}
                  </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>pound - lb </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>ounce - oz </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>lít - L </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>gam - g </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>miligam - mg </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>kilôgam - kg </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>khối - 3 </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>mét khối - m3 </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_15}>❖ </span>
                  <span className={styles.text_16}>inch khối - in3 </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_369}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Use the natural form for transcribing dates.
                  </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Quán khai trương ngày 05 tháng 10 năm 2012.
                  </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                  </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ngày hết hạn là 23/8/2013.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    ngày hết hạn là hai mươi ba tám{' '}
                  </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_9}>hai không mười ba </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Use the natural form for transcribing times whenever
                    possible.
                  </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 4:20 chiều </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 3:15 sáng </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 3:00 khuya </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    For nouns like "giữa trưa", use the written form.
                  </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: giữa trưa </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: vào lúc 12:00 p.m. </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>giữa trưa </span>
                  <span className={styles.text_2}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_384}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when explicitly spoken.
                  </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Use commas for ENTITY, LOCATION.{' '}
                  </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : quán Khoái, Lê Quí Đôn, Quận 3{' '}
                  </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : giờ chiếu phim Boyhood, TP HCM{' '}
                  </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Do not capitalize cardinal directions unless part of a
                    specific place name.
                  </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đại lộ Đông Tây </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : The official name of the road is{' '}
                  </span>
                </p>
                <p className={styles.block_390}>East West Blvd.</p>
                <p className={styles.block_391}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi sẽ gặp anh ở cổng phía nam.{' '}
                  </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : No need to capitalize "nam" because it's not part of a
                    proper place name.
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_394}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't capitalize them.
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: www.google.com.vn </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>w w w chấm google chấm </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_9}>com chấm v n </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: amazon.com </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>amazon chấm com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says "backslash".
                  </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: http:\www.abc.com </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    h t t p hai chấm dấu chéo ngược{' '}
                  </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_9}>
                    w w w chấm a b c chấm com{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these errors. If the speaker doesn't say
                    the "w"s at all, do not add them.
                  </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: www.123.com </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    w w w một hai ba chấm com{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: www.facebook.com </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    w w chấm facebook chấm com{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : If the user mistakenly says "ww", transcribe "www".
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual letters.
                  </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: www.un.org </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    w w w chấm u n chấm o r g{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={styles.block_406}>Abbreviation</p>
                <p className={styles.block_407}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    Capitalize and abbreviate titles for people only when they
                    precede proper names.
                  </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi biết Bác sĩ Tánh.{' '}
                  </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi thấy tổng thống trên tivi hôm nay.{' '}
                  </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If in doubt, do not abbreviate
                    the title.
                  </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Bắc Kạn </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: Bắc Cạn </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>bắc cạn </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The city's name is officially spelled "Bắc Kạn".
                  </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Đắk Lắk </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_2}>: Đắc Lắc </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>đắc lắc </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The city's name is officially spelled "Đắk Lắk".
                  </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_2}>
                    In acronyms, do not use periods between letters.
                  </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: MP3, VTV, VFF </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: brands and products </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: 256 MB </span>
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
