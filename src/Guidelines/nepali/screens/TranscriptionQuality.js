import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
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
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_54}>&nbsp;</p>
              <p className={styles.block_62}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>

                <p className={styles.block_62}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_63}>&nbsp;</p>
                <p className={styles.block_110}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre4}>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>
                            देशलेनिकैनिकास गरेकोछ।
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_112}>
                          <span className={styles.text_1}>E</span>
                          <span className={styles.text_1}>XPLANATION</span>
                          <span className={styles.text_1}>: "</span>
                          <span className={styles.text_2}>निकास</span>
                          <span className={styles.text_1}>
                            " is the standard spelling, not
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td rowspan="2" className={styles.td_}>
                        <p className={styles.block_113}>
                          <span className={styles.text_1}>I</span>
                          <span className={styles.text_1}>NCORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>
                            देशलेनिकैनिकास गरेकोछ।
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_1}>
                        <p className={styles.block_112}>
                          <span className={styles.text_3}>"</span>
                          <span className={styles.text_4}>निकास</span>
                          <span className={styles.text_3}>".</span>
                        </p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_1}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>

                <p className={styles.block_114}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-14" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मैलेयही नकताि पढेकोहो।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मैलेएइनकताि पढेकोहो।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_117}>&nbsp;</p>
                <p className={styles.block_118}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_63}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मैलेमन्दिरमा फू लचढाएँ।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मैलेमन्दिरमा फु लचढाएँ।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    मेरोघर यहाँिाटपूिवनदशानतर पदवछ।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    मेरोघर यहाँिाटपूिवनदसानतर पदवछ।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>तपाईँ लेफ</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_6}>ररकोनसस गिुवपदवछ।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_8}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_8}>: </span>
                  <span className={styles.text_9}>तपाईँ लेफ</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_9}>रीकोनसस गिुवपदवछ।</span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>

                <p className={styles.block_120}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_121}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>नहजो मैलेमान्छेदेखेँ।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>नहजो मैलेमान्छेदेखेँ</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_8}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_8}>: </span>
                  <span className={styles.text_9}>
                    नहजो मैलेएउटा मान्छेदेखेँ।
                  </span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_8}>: Do not add omitted "</span>
                  <span className={styles.text_9}>एउटा</span>
                  <span className={styles.text_8}>".</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>यो नकतािको मूल्यरु</span>
                  <span className={styles.text_5}>.</span>
                  <span className={styles.text_6}>४५० हो।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    यो नकतािको मूल्यचार सय पचास हो।
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_8}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_8}>: </span>
                  <span className={styles.text_9}>यो नकतािको मूल्य४५० हो।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_8}>
                    : Implied currency, add "
                  </span>
                  <span className={styles.text_9}>रु</span>
                  <span className={styles.text_8}>." even though</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>it is not spoken.</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_123}>&nbsp;</p>
                <p className={styles.block_124}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-15" className={styles.block_20}>
                  &nbsp;
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre4}>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_3}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>
                            आजको िेपाललाईनिस्तार निकास चानहएको छ।
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_4}>
                        <p className={styles.block_125}>
                          <span className={styles.text_}>E</span>
                          <span className={styles.text_}>XPLANATION</span>
                          <span className={styles.text_}>
                            : Speaker clearly corrected themselves
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_3}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                      <td className={styles.td_4}>
                        <p className={styles.block_126}>
                          <span className={styles.text_3}>
                            after mistakenly saying "
                          </span>
                          <span className={styles.text_4}>निस्तार</span>
                          <span className={styles.text_3}>".</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>

                <p className={styles.block_62}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    िेपालकोसिैभिाठुलोताल कु होि
                  </span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    िेपालकोसिैभिाठुलोताल कु होि
                  </span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_128}></p>
                <p className={styles.block_78}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    मोहि निकैमेहितीछ। उसलाई हामी सिैलेमद्दत
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_129}>गिुवपछव।</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मोहि निकैमेहितीछ।</span>
                  <span className={styles.text_1}> _</span>
                  <span className={styles.text_2}>उसलाई हामी सिैले</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_130}>मद्दत गिुवपछव</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_132}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँ लाईसन्चैछ</span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँ लाईसन्चैछ</span>
                  <span className={styles.text_1}> ?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>प्रा</span>
                  <span className={styles.text_1}>. </span>
                  <span className={styles.text_2}>पोखरेलआइपुग्नुभयो।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>प्रा</span>
                  <span className={styles.text_1}> . </span>
                  <span className={styles.text_2}>पोखरेलआइपुग्नुभयो।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>नहजो मात्रमैलेदाल</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>चामल र तेलनकिेँ।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>नहजो मात्रमैलेदाल</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>चामल र तेलनकिेँ।</span>
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-16" className={styles.block_133}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_3}>&nbsp;</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
