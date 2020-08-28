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
            <PageContentHeader currentPage="Nepali" />
            <div className="content">
              <p className={'large-heading'}>Format</p>

              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>

              <div id="number">
                <p className={'heading'}>Number</p>

                <p className={'text'}>
                  <span className={styles.text_16}>
                    Cardinals and ordinals from{' '}
                  </span>
                  <span className={styles.text_17}>०</span>
                  <span className={styles.text_16}> to </span>
                  <span className={styles.text_17}>९</span>
                  <span className={styles.text_16}>
                    are written with letters (except for measures and currency -
                    see Currency and Unit). Use Devanagari digits for cardinals
                    and ordinals{' '}
                  </span>
                  <span className={styles.text_17}>१०</span>
                  <span className={styles.text_16}>
                    and above, even if they are coordinated with numbers under{' '}
                  </span>
                  <span className={styles.text_17}>१०</span>
                  <span className={styles.text_16}>
                    . Transcribe all decimal numbers as digits.
                  </span>
                </p>

                <p className={styles.block_214}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    कक्षामा आठजिा निद्यािी छि्।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    हाम्रो देशमा२५ जिा मन्त्रीहरू छि्।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_181}>&nbsp;</p>
                <p className={styles.block_144}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: </span>
                  <span className={styles.text_14}>
                    मैलेपाँचिटाकिा तिा २१ िटा कनिताहरू लेखेक
                  </span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>छु।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_215}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>यसको माि ३</span>
                  <span className={styles.text_1}>.</span>
                  <span className={styles.text_2}>१४ हो।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_216}>&nbsp;</p>
                <p className={styles.block_149}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>: numbers less than 10</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_13}>&nbsp;</p>
                <p className={styles.block_149}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>: numbers 10 or above</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_217}>&nbsp;</p>
                <p className={styles.block_151}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Follow this rule even if the noun phrases with numbers are
                    coordinated.
                  </span>
                </p>
                <p className={styles.block_218}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    यसको माि नति दशमलि एक चार हो
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_203}>&nbsp;</p>
                <p className={styles.block_149}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>: decimal numbers</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_163}>&nbsp;</p>
                <p className={styles.block_219}>
                  <span className={styles.text_16}>
                    If a large number consists of only a number followed by "
                  </span>
                  <span className={styles.text_17}>दश लाख</span>
                  <span className={styles.text_16}>", "</span>
                  <span className={styles.text_17}>अिव</span>
                  <span className={styles.text_16}>","</span>
                  <span className={styles.text_17}>खिव</span>
                  <span className={styles.text_16}>
                    ",or higher, then transcribe as a numeral plus word.
                    Otherwise, transcribe as numerals.
                  </span>
                </p>
                <p className={styles.block_57}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>१ करोड िाख्रा</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>एक करोड िाख्रा</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>करोड िाख्रा</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>करोड िाख्रा</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>१</span>
                  <span className={styles.text_5}>,</span>
                  <span className={styles.text_6}>००० राँगाहरू</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>एक हजार राँगाहरू</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>रु</span>
                  <span className={styles.text_5}>. </span>
                  <span className={styles.text_6}>१</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>५ करोड</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    एक दशमलि पाँचकरोड रुपैयाँ
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_19}>a</span>
                  <span className={styles.text_10}>डेढकरोड रुपैयाँ</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_221}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : For mixed numbers before "
                  </span>
                  <span className={styles.text_2}>करोड</span>
                  <span className={styles.text_1}>",</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_221}>
                  <span className={styles.text_3}>"</span>
                  <span className={styles.text_4}>अिव</span>
                  <span className={styles.text_3}>",etc., use decimals.</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  Write lists of numbers with digits and without commas.
                </p>

                <p className={styles.block_223}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>० १ २ ३ ४ ५ ६ ७ ८ ९</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    शून्यएक दुईनति चार पाँचछ सात आठ
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>िौ </span>
                  <span className={styles.text_3}>"</span>
                </p>

                <p id="calibre_link-24" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : list of numbers, no comma if just
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>counting</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_123}>&nbsp;</p>
                <p className={styles.block_62}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>मलाई १</span>
                  <span className={styles.text_5}>/</span>
                  <span className={styles.text_6}>४ पाउन् नचिी चानहएको छ।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    मलाई एक चौिाइ पाउन् नचिी चानहएको
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>छ </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_203}>&nbsp;</p>
                <p className={styles.block_122}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not include spaces or pre-combined
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>fraction characters.</p>
                <p className={styles.block_77}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>एक माइलको ३</span>
                  <span className={styles.text_5}>/</span>
                  <span className={styles.text_6}>
                    ४ पुगेपनछदानहिेघुम्िुहोस्।
                  </span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    एक माइलको नति चौिाइ पुगेपनछदानहिे
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>घुम्िुहोस्</span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>२</span>
                  <span className={styles.text_5}>/</span>
                  <span className={styles.text_6}>
                    ३ नकमीमा देब्रेनतरघुम्िुहोस्।
                  </span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    दुईनतहाइ नकमीमा देब्रेनतरघुम्िुहोस्
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>हामीलाई५</span>
                  <span className={styles.text_5}>/</span>
                  <span className={styles.text_6}>१६ इन्चकोुर्क्स</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_6}>चानहन्छ।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    हामीलाई पाँचकामुनिसोह्रो इन्चकोुर्क्स
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>चानहन्छ </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>तपाईँमलाई रु</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>२</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>५ नदि सक्नुहुन्छ</span>
                  <span className={styles.text_5}>?</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    तपाईँमलाई साढेदुईरुपैयाँनदि
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>सक्नुहुन्छ</span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>उसलेत्यो घर रु</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>८</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>५ लाखमा नकन्यो।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    उसलेत्यो घर साढेआठ लाख रुपैयाँमा
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>नकन्यो </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_224}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_210}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>२</span>
                  <span className={styles.text_1}>% </span>
                  <span className={styles.text_2}>पािी</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>१ लाख प्रनतशत</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_225}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>

                <p id="calibre_link-25" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_17}>&nbsp;</p>
                <p className={styles.block_62}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_172}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>९८५</span>
                  <span className={styles.text_1}>-</span>
                  <span className={styles.text_2}>१०४</span>
                  <span className={styles.text_1}>-</span>
                  <span className={styles.text_2}>७८९०</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>१ ९८५</span>
                  <span className={styles.text_1}>-</span>
                  <span className={styles.text_2}>१०४</span>
                  <span className={styles.text_1}>-</span>
                  <span className={styles.text_2}>७८९</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: +</span>
                  <span className={styles.text_6}>१ ९८५</span>
                  <span className={styles.text_5}>-</span>
                  <span className={styles.text_6}>१०४</span>
                  <span className={styles.text_5}>-</span>
                  <span className={styles.text_6}>७८९०</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_19}>plus</span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_10}>एक</span>
                  <span className={styles.text_19}>…</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>९८५</span>
                  <span className={styles.text_5}>-</span>
                  <span className={styles.text_6}>१०४</span>
                  <span className={styles.text_5}>-</span>
                  <span className={styles.text_6}>७८९० एक्सटेन्सि५४</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_19}>-</span>
                  <span className={styles.text_10}>एक्सटेन्सिचौिन्न</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_226}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_158}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>५</span>
                  <span className={styles.text_5}> / </span>
                  <span className={styles.text_6}>६</span>
                  <span className={styles.text_5}> ^ </span>
                  <span className={styles.text_6}>३</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    पाँचलाईछको घिलेभाग गदाव
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>५</span>
                  <span className={styles.text_5}> * </span>
                  <span className={styles.text_6}>६</span>
                  <span className={styles.text_5}>?</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>पाँचगुर्ाछ कनत हो</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: √3</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>तीिको िगवमूल</span>
                  <span className={styles.text_1}>"</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>८ घन्टा</span>
                  <span className={styles.text_1}>* </span>
                  <span className={styles.text_2}>१२ डलर कनत हुन्छ</span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_181}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    िौ भालुलाईदुईस्याललेभाग गदावकनत हुन्छ
                  </span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_12}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    ९ भालुलाई२ स्याललेभाग गदावकनत हुन्छ
                  </span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_227}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    आठ घन्टागुर्ािाह्र डलर कनत हुन्छ
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_176}>&nbsp;</p>
                <p className={styles.block_228}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Does not sound like a true math expression with useful
                    units.
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={styles.block_60}>Currency and unit</p>
                <p className={styles.block_62}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>रु</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>२०</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>निस रुपैयाँ</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>रु</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>
                    २०० को अमेररकीडलरमा कनत हुन्छ
                  </span>
                  <span className={styles.text_5}>?</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    दुईसय रुपैयाँकोअमेररकीडलरमा कनत
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>हुन्छ </span>
                  <span className={styles.text_3}>"</span>
                </p>

                <p id="calibre_link-26" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_62}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>

                <p className={styles.block_229}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    मैलेपाँचिटाहात्ती खचवगरेँ।
                  </span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_143}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>
                    मैलेपाँचिटाहात्ती खचवगरेँ
                  </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>

                <p className={styles.block_231}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मैलेरु</span>
                  <span className={styles.text_1}>.</span>
                  <span className={styles.text_2}>५००० खचवगरेँ।</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>२०० डलर</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_17}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_78}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>दुईसय डलर </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>

                <p className={styles.block_231}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_12}>NCORRECT</span>
                  <span className={styles.text_1}>: $</span>
                  <span className={styles.text_2}>२००</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_232}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िानहरको तापक्रम २०</span>
                  <span className={styles.text_1}>° </span>
                  <span className={styles.text_2}>छ।</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>आज पोखरामा माइिस पाँचछ।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_17}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_233}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>
                    आज पोखरामा माइिस पाँचछ{' '}
                  </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>

                <p className={styles.block_231}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>आज पोखरामा</span>
                  <span className={styles.text_1}> -</span>
                  <span className={styles.text_2}>५ छ</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>
                    नहजो हामी १० नकमी नहँड्यौँ।
                  </span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    नहजो हामी दस नकलोनमटर नहँड्यौँ
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_234}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>५</span>
                  <span className={styles.text_5}>:</span>
                  <span className={styles.text_6}>४५ को आलमवलगाउिुहोस्।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    पाँचपैँतानलसकोआलमवलगाउिुहोस्
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>५४५ को आलमवलगाउिुहोस्।</span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>

                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>माघ १५</span>
                  <span className={styles.text_5}>, </span>
                  <span className={styles.text_6}>२०२०</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>माध पन्ध्र दुईहजार निस</span>
                  <span className={styles.text_1}> "</span>
                </p>

                <p id="calibre_link-27" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>२०५० को नहउँदमा</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    दुईहजार पचासको नहउँदामा
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>४० को दशकको आिोलि</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>चानलसको दशकको आिोलि</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>आइतिार</span>
                  <span className={styles.text_5}>, </span>
                  <span className={styles.text_6}>फागुि१४</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>आइतिार फागुिचौध</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>४</span>
                  <span className={styles.text_5}>:</span>
                  <span className={styles.text_6}>००</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>चार िजे</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>४</span>
                  <span className={styles.text_5}>:</span>
                  <span className={styles.text_6}>
                    ०० िजेकोआलामवनमलाउिुहोस्
                  </span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    चारिजेकोआलामवनमलाउिुहोस्
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>१</span>
                  <span className={styles.text_5}>:</span>
                  <span className={styles.text_6}>५०</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>दुईिज्न दस नमिेटिाँकी</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_235}>&nbsp;</p>
                <p className={styles.block_197}>
                  <span className={styles.text_3}>Use "</span>
                  <span className={styles.text_4}>मध्यान्ह</span>
                  <span className={styles.text_3}>", "</span>
                  <span className={styles.text_4}>अपरान्ह</span>
                  <span className={styles.text_3}>", "</span>
                  <span className={styles.text_4}>पूिावन्ह</span>
                  <span className={styles.text_3}>","</span>
                  <span className={styles.text_4}>निहाि</span>
                  <span className={styles.text_3}>" and "</span>
                  <span className={styles.text_4}>िेलुका</span>
                  <span className={styles.text_3}>",ifspoken.</span>
                </p>
                <p className={styles.block_236}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>४ िजेअपरान्ह</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>५ िजेिेलुका</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>७ िजेनिहाि</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>१२</span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>०० मध्यान्ह</span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>

                <p className={styles.block_237}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_238}>&nbsp;</p>
                <p className={styles.block_62}>
                  Use commas for ENTITY, LOCATION.
                </p>

                <p id="calibre_link-28" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>निशाल िजार</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>न्युरोड</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>कृ नषनिकास िैङ्क</span>
                  <span className={styles.text_1}>,</span>
                  <span className={styles.text_2}>कमलपोखरी</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>नत्र</span>
                  <span className={styles.text_1}>.</span>
                  <span className={styles.text_2}>नि</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>कीनतवपुर</span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_239}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.co.kr</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    डब्लुडब्लुडब्लुट गुगलडट नस ओ डट
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>केआर </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: kathmandutoday.com</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>काठमान्ुटुडेम</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: bisal@example.org</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    निसाल एट एक्जाम्पल डट अगव
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    निसाल एट द रेटएक्जाम्पल डट ओ आर
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_220}>
                  <span className={styles.text_20}>जी </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>मलाई भात मि पछव।</span>
                  <span className={styles.text_5}>#</span>
                  <span className={styles.text_6}>भोक</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    मलाई भात मि पछवह्यासट्याग भोक
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_240}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_153}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.com.ph</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    डब्लुडब्लुगुगलडट कम डट नप एच
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: www.nagarik.com</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    डब्लुडब्लुडब्लुिागररक डट कम
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>Keep URLs in Latin script.</p>

                <p className={styles.block_241}>&nbsp;</p>
                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_15}>ORRECT</span>
                  <span className={styles.text_}>: www.google.com</span>
                </p>

                <p id="calibre_link-29" className={styles.block_20}>
                  &nbsp;
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>

                <p className={styles.block_62}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>

                <p className={styles.block_223}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िेपालनिरुद्ध भारत</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_184}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_210}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>िेपालनिरुद्ध भारत </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>

                <p className={styles.block_231}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िेपालनि</span>
                  <span className={styles.text_1}>. </span>
                  <span className={styles.text_2}>भारत</span>
                </p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>निश्वनिद्यालय क्याम्पस</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>नत्रनि</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_12}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>निश्वनिद्यालय क्याम्पस</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>नत्रभुििनिश्वनिद्याल</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>
                    निश्वनिद्यालय क्याम्पस नत्रनि
                  </span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_242}>&nbsp;</p>

                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_117}>&nbsp;</p>
                <p className={styles.block_62}>
                  Abbreviate titles for people only when they precede proper
                  names.
                </p>
                <p className={styles.block_172}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>प्रा</span>
                  <span className={styles.text_1}>. </span>
                  <span className={styles.text_2}>कमल कृ ष्णरेग्मी</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_1}>. </span>
                  <span className={styles.text_2}>सोमिाि पन्दित</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>स्व</span>
                  <span className={styles.text_1}>. </span>
                  <span className={styles.text_2}>हररप्रसाद</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>डा</span>
                  <span className={styles.text_1}>. </span>
                  <span className={styles.text_2}>नशिशङ्कर</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िास्ट</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>िासा</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>युनिसेफ</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>एमाले</span>
                  <span className={styles.text_1}>,</span>
                  <span className={styles.text_2}>प्यािसि</span>
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
