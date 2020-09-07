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
            <PageContentHeader currentPage="longform Hindi" />
            <div className="content text">
              <p className={'large-heading'}>Format </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <div id="number">
                <p className={'heading'}>Number </p>
                <p className={styles.block_150}>
                  Devanagari numerals should not be used, only Western Arabic
                  numerals should be used.{' '}
                </p>
                <p className={styles.block_151}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाथ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> numbers less than 10 </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> 47 </span>
                  <span className={styles.text_2}>िव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाथ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>
                    {' '}
                    numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> 9 </span>
                  <span className={styles.text_2}>या</span>
                  <span className={styles.text_3}> 10 </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लकर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आय।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>यहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घोड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> 20 </span>
                  <span className={styles.text_2}>बल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_3}>
                    If a large number consists of only a number followed by "
                  </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_3}>", "</span>
                  <span className={styles.text_2}>लाख</span>
                  <span className={styles.text_3}>", "</span>
                  <span className={styles.text_2}>करोड़</span>
                  <span className={styles.text_3}>
                    ", or higher, then transcribe as a numeral plus word.
                    Otherwise, transcribe as numerals.{' '}
                  </span>
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_3}>7 </span>
                  <span className={styles.text_2}>करोड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>सात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करोड़</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>1 </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लोग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लोग</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  Write lists of numbers with digits and without commas.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_3}>0 1 1 2 3 5 8 13 </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तरह</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_3}>10,000 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>दस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.{' '}
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> 1/4 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चौथाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> 1⁄4 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}>
                    {' '}
                    (bad because it includes the pre-combined fraction 1⁄4) NOT:{' '}
                  </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> 0.25 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चौथाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_169}>
                  <span className={styles.text_3}>3/4 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>मी</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दाए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चौथाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>मी</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दाए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: 0.75 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>मी</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दाए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चौथाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकलोमीटर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दाए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_3}>5 * 6 NOT: </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> * </span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_3}> NOT: 5 </span>
                  <span className={styles.text_2}>गना</span>
                  <span className={styles.text_3}> 6 </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_171}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals with "and".{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_3}>5 </span>
                  <span className={styles.text_2}>फट</span>
                  <span className={styles.text_3}> 3 1/2 </span>
                  <span className={styles.text_2}>इच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>फ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साढ़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इच</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_172}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.{' '}
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आधी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रोटी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दीिजय।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> 1/2 </span>
                  <span className={styles.text_2}>रोटी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दीिजय।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> 0.5 </span>
                  <span className={styles.text_2}>रोटी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दीिजय।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आधी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रोटी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दीिजय।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_173}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> $2.50 </span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सकत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ढाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉलर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सकत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>शीतल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> ₹7.5 </span>
                  <span className={styles.text_2}>करोड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ख़रीदा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>शीतल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साढ़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करोड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खरीदा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.){' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_3}>1 </span>
                  <span className={styles.text_2}>िमिलयन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ितशत</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>50% </span>
                  <span className={styles.text_2}>खाना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गायब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>था</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.{' '}
                </p>
                <p className={styles.block_151}>
                  Use Roman numerals only when part of an of cial name or title.{' '}
                </p>
                <p className={styles.block_163}>
                  Super Bowl XLVII{' '}
                  <i className={styles.calibre1}>"super bowl forty seven" </i>
                </p>
                <p className={styles.block_174}>
                  King Henry VIII{' '}
                  <i className={styles.calibre1}>"king henry the eighth" </i>
                </p>
                <p className={styles.block_151}>
                  Transcribe seasons and episodes of television shows with
                  numerals.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>सीज़न</span>
                  <span className={styles.text_3}> 3 </span>
                  <span className={styles.text_2}>एिपसोड</span>
                  <span className={styles.text_3}> 2 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>सीज़न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एिपसोड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>दख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एिपसोड</span>
                  <span className={styles.text_3}> 2 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>दख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एिपसोड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  If it is a product type or statistic, use the common written
                  form.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_3}>4x4 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बटा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>उसन</span>
                  <span className={styles.text_3}> 4.2 </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बाजी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>औसत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रखा।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>उसन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दशमलव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बाजी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>औसत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रखा।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.{' '}
                </p>
                <p className={styles.block_151}>
                  Transcribe phone numbers as you would write them down in their
                  natural blocks. Do not use hyphens between blocks. When
                  applicable, the STD code should be surounded by spaces.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_3}>+91 9897 034 241 </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_3}>91 22 3988 3988 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>91 022 3988 3988 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.{' '}
                </p>
                <p className={styles.block_163}>XT 660 or XT660 </p>
                <p className={styles.block_151}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_3}>5 / 6 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बटा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_175}>
                  <span className={styles.text_3}>5 * 6 </span>
                  <span className={styles.text_2}>िकतना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? NOT: </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बारी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? NOT: 5 </span>
                  <span className={styles.text_2}>गना</span>
                  <span className={styles.text_3}> 6 </span>
                  <span className={styles.text_2}>िकतना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_4}>" </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit </p>
                <p className={styles.block_177}>
                  Transcribe currencies as commonly written in the transcription
                  language.{' '}
                </p>
                <p className={styles.block_151}>
                  When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>बस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थोड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पए</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भारतीय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रकी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉलर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भारतीय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पािक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ानी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बराबर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नपाली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चािहए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रकी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉलर</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_142}>9/27/2018 hi-IN_TEST_SET </p>
                <p className={styles.block_142}>
                  For ranges or non-speci c currency quantities, write
                  everything out as spoken.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चािहए।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अमरीकी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉलर</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>100 </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> 400 </span>
                  <span className={styles.text_2}>पए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पए</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>9 </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> 12 </span>
                  <span className={styles.text_2}>पौड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>नौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पौड</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऑ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िलयाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉलर</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  Abbreviate all units that follow numeric values.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रवार</span>
                  <span className={styles.text_3}> 10 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>आल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लकर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रवार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लकर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मकान</span>
                  <span className={styles.text_3}> £1 </span>
                  <span className={styles.text_2}>करोड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मकान</span>
                  <span className={styles.text_3}> £1,00,00,000 </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>उसका</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वज़न</span>
                  <span className={styles.text_3}> 2 </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>उसका</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वज़न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वहा</span>
                  <span className={styles.text_3}> 6 </span>
                  <span className={styles.text_2}>महीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>महीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>गस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कीमत</span>
                  <span className={styles.text_3}> $1 </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लीटर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>गस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कीमत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉलर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लीटर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>दध</span>
                  <span className={styles.text_3}> ₹40 </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ध</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चालीस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>5:45 </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अलाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगाओ।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बजक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तालीस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमनट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अलाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगाओ।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Common technical abbreviations{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मगाबाइट</span>
                  <span className={styles.text_3}> - MB </span>
                  <span className={styles.text_2}>िकलोबाइट</span>
                  <span className={styles.text_3}> - KB </span>
                  <span className={styles.text_2}>गीगाबाइट</span>
                  <span className={styles.text_3}> - GB </span>
                  <span className={styles.text_2}>टराबाइट</span>
                  <span className={styles.text_3}> - TB </span>
                </p>
                <p className={styles.block_142}>
                  Slang terms (spell them out){' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>िकलो</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  Common measurements of distance and rate{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>इच</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>इच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>फट</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>फट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>याड</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>याड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मील</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>मील</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>िमली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मीटर</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>िम</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>मी</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>टी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मीटर</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> .</span>
                  <span className={styles.text_2}>मी</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>मीटर</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>मीटर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मीटर</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>मी</span>
                  <span className={styles.text_3}>. </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मील</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घटा</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>मील</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घटा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मील</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घटा</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>मील</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घटा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकलोमीटर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घटा</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>िकमी</span>
                  <span className={styles.text_3}>/</span>
                  <span className={styles.text_2}>घटा</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>Common measurements of area </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>वग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकलोमीटर</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>िकमी</span>
                  <span className={styles.text_3}>2 </span>
                </p>
                <p className={styles.block_142}>
                  Common measurements of weight and volume{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>ाम</span>
                  <span className={styles.text_3}> - . </span>
                  <span className={styles.text_2}>िमली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाम</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>िम</span>
                  <span className={styles.text_3}>. . </span>
                  <span className={styles.text_2}>िकलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाम</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>. . </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>
                  Use the natural form for transcribing dates.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>जलाई</span>
                  <span className={styles.text_3}> 12 1964 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>जलाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चौसठ</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>12 </span>
                  <span className={styles.text_2}>जलाई</span>
                  <span className={styles.text_3}> 1964 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जलाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चौसठ</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>70</span>
                  <span className={styles.text_2}>वी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सदी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दौरान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रवी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सदी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दौरान</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>आज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तारीख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> 5.10.2012 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>आज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तारीख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>12/07/2010 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दस</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>12.07.2010 </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इसक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खराब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>समय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हज़ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इसक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खराब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>समय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Use the natural form for transcribing times whenever possible.{' '}
                </p>
                <p className={styles.block_142}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>3:00 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>4:00 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>3:15 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>6:05 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>छह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बजक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमनट</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>3:15 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बजक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमनट</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>1:50 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बजन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमनट</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>6:45 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>पौन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सात</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>4:15 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>सवा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चार</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> 12:30 </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चगी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साढ़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बारह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चगी</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>8 </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पास</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>आठ</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>बज</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>क</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>आस</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>8:00{' '}
                  </span>
                  <span className={styles.text_2}>िलखना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>पास</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>ाभािवक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>Address </p>
                <p className={styles.block_142}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.{' '}
                </p>
                <p className={styles.block_142}>
                  Use commas for ENTITY, LOCATION.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>Pizza Hut, </span>
                  <span className={styles.text_2}>जनक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>परी</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>राजश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कमार</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>यमना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िवहार</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>होटल</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>पीतम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>परा</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>डॉ</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>आनद</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>मबई</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मोिहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पटल</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>आउटर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रोड</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मौसस</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>धम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>शाला</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>राउरकला</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>PK </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>समय</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>िबरसा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रोड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.{' '}
                </p>
                <p className={styles.block_142}>
                  www.google.co.kr{' '}
                  <i className={styles.calibre1}>
                    "w w w dot google dot c o dot k r"{' '}
                  </i>
                </p>
                <p className={styles.block_142}>
                  amazon.com{' '}
                  <i className={styles.calibre1}>"amazon dot com" </i>
                </p>
                <p className={styles.block_142}>
                  http://123.com{' '}
                  <i className={styles.calibre1}>
                    "h t t p colon slash slash one two three dot com"{' '}
                  </i>
                </p>
                <p className={styles.block_142}>
                  mike@example.org{' '}
                  <i className={styles.calibre1}>"mike at example dot org" </i>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पराठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पसद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> #</span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पराठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पसद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हशटग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>#</span>
                  <span className={styles.text_2}>भख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पराठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>हशटग</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".{' '}
                </p>
                <p className={styles.block_142}>
                  http://nytimes.com{' '}
                  <i className={styles.calibre1}>
                    "h t t p colon slash slash n y times dot com"{' '}
                  </i>
                </p>
                <p className={styles.block_142}>
                  http:\\mail.yahoo.com{' '}
                  <i className={styles.calibre1}>
                    "h t t p colon backslash backslash mail dot yahoo dot com"{' '}
                  </i>
                </p>
                <p className={styles.block_142}>
                  www.forbes.com{' '}
                  <i className={styles.calibre1}>"w w w forbes dot com" </i>
                </p>
                <p className={styles.block_142}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.{' '}
                </p>
                <p className={styles.block_142}>
                  www.amazon.com{' '}
                  <i className={styles.calibre1}>
                    <sup className={styles.calibre3}>"w </sup>
                    <sup className={styles.calibre3}>w</sup>
                    <sup className={styles.calibre3}> dot amazon dot com" </sup>
                  </i>
                </p>
                <p className={styles.block_142}>
                  If the user mistakenly says "ww", transcribe "www".{' '}
                </p>
                <p className={styles.block_142}>
                  google.co.uk{' '}
                  <i className={styles.calibre1}>
                    <sup className={styles.calibre3}>"google dot co u k" </sup>
                  </i>
                </p>
                <p className={styles.block_142}>
                  Also transcribe the dot in an obvious URL, even if the speaker
                  did not include it.{' '}
                </p>
                <p className={styles.block_142}>
                  www.forbes.com{' '}
                  <i className={styles.calibre1}>"w w w forbes dot com" </i>
                </p>
                <p className={styles.block_142}>
                  www.facebook.com{' '}
                  <i className={styles.calibre1}>"w w facebook dot com" </i>
                </p>
                <p className={styles.block_142}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.{' '}
                </p>
                <p className={styles.block_142}>
                  www.target.com{' '}
                  <i className={styles.calibre1}>
                    "w w w dot t a r g e t dot c o m"{' '}
                  </i>
                </p>
                <p className={styles.block_}>&nbsp;</p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>
                  Do not abbreviate unless the speaker says an abbreviated form.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>बनारस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िहद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ालय</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>बी</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>एच</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>बनारस</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>िहद</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>िव</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>िव</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ालय</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>भारतीय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जनता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाट</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>भाजपा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>भारतीय</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>जनता</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>पाट</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_142}>
                  In acronyms, do not use periods between letters.{' '}
                </p>
                <p className={styles.block_142}>
                  AT&amp;T, MP3 brands and products{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>यपी</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>एपी</span>
                  <span className={styles.text_3}> geographic names </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>भाजपा</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>इसरो</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>सपा</span>
                  <span className={styles.text_3}> pronounced as words </span>
                </p>
                <p className={styles.block_142}>
                  If a brand name uses periods, include the periods.{' '}
                </p>
                <p className={styles.block_142}>
                  J. C. Penney O cial brand name as seen in the privacy policy
                  includes periods.{' '}
                </p>
                <p className={styles.block_146}>&nbsp;</p>
                <p className={styles.block_146}>&nbsp;</p>
                <p className={styles.block_146}>&nbsp;</p>
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
