import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
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
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-30" className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_176}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>पािी प ोा ि ोी</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    पािी पलाई आकार िलाई इकार
                  </span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_244}>&nbsp;</p>
                <p className={styles.block_245}>
                  <span className={styles.text_21}>C</span>
                  <span className={styles.text_21}>ORRECT</span>
                  <span className={styles.text_21}>: </span>
                  <span className={styles.text_22}>
                    अ आ इ ई उ ऊ ऋ ए एैओ औ अंअः क ख ग घ ङ्ग
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : spelled out the alphabet
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_22}>
                    चछजझञटठडढर्तिदधिपफिभमयरलिस
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_129}>श ष ह</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>मापसे</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>मा प से</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_203}>&nbsp;</p>
                <p className={styles.block_122}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>: common acronym</span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'test'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_210}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>हाहा</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>हेहे</span>
                  <span className={styles.text_1}>,</span>
                  <span className={styles.text_2}>ओहो</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>नहनह</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>लालाला</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>हाहाहा</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>हा हा हा हा हा</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_246}>&nbsp;</p>
                <p className={styles.block_122}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not transcribe more than three syllables.
                  </span>
                </p>
              </div>

              <p className={'heading'}>Proper names</p>

              <p className={'text'}>
                If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").
              </p>
              <p className={styles.block_19}>&nbsp;</p>
              <p id="calibre_link-31" className={styles.block_20}>
                &nbsp;
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre4}>
                  <tr className={styles.calibre5}>
                    <td className={styles.td_11}>
                      <p className={styles.block_111}>
                        <span className={styles.text_1}>C</span>
                        <span className={styles.text_1}>ORRECT</span>
                        <span className={styles.text_1}>: </span>
                        <span className={styles.text_2}>
                          निरेन्द्रलाईिोलाउिुहोस्।
                        </span>
                      </p>
                    </td>
                    <td className={styles.td_12}>
                      <p className={styles.block_248}>
                        <span className={styles.text_1}>E</span>
                        <span className={styles.text_1}>XPLANATION</span>
                        <span className={styles.text_1}>: Searching "</span>
                        <span className={styles.text_2}>निरेन्द्र</span>
                        <span className={styles.text_1}>
                          "(without quotes) yields
                        </span>
                      </p>
                    </td>
                    <td className={styles.td_2}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                  </tr>
                  <tr className={styles.calibre5}>
                    <td rowspan="2" className={styles.td_11}>
                      <p className={styles.block_113}>
                        <span className={styles.text_1}>I</span>
                        <span className={styles.text_1}>NCORRECT</span>
                        <span className={styles.text_1}>: </span>
                        <span className={styles.text_2}>
                          निरेन्द्रलाईिोलाउिुहोस्।
                        </span>
                      </p>
                    </td>
                    <td className={styles.td_12}>
                      <p className={styles.block_248}>
                        <span className={styles.text_3}>
                          more results than "
                        </span>
                        <span className={styles.text_4}>निरेन्द्र</span>
                        <span className={styles.text_3}>".</span>
                      </p>
                    </td>
                    <td className={styles.td_2}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                  </tr>
                  <tr className={styles.calibre5}>
                    <td className={styles.td_12}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                    <td className={styles.td_2}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                  </tr>
                  <tr className={styles.calibre5}>
                    <td className={styles.td_11}>
                      <p className={styles.block_111}>
                        <span className={styles.text_1}>C</span>
                        <span className={styles.text_1}>ORRECT</span>
                        <span className={styles.text_1}>: </span>
                        <span className={styles.text_2}>नसजविालामा</span>
                      </p>
                    </td>
                    <td className={styles.td_12}>
                      <p className={styles.block_248}>
                        <span className={styles.text_1}>E</span>
                        <span className={styles.text_1}>XPLANATION</span>
                        <span className={styles.text_1}>: "</span>
                        <span className={styles.text_2}>नसजविा</span>
                        <span className={styles.text_1}>
                          "is more popular than "
                        </span>
                        <span className={styles.text_2}>सृजिा</span>
                        <span className={styles.text_1}>".</span>
                      </p>
                    </td>
                    <td className={styles.td_2}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                  </tr>
                  <tr className={styles.calibre5}>
                    <td className={styles.td_11}>
                      <p className={styles.block_113}>
                        <span className={styles.text_1}>I</span>
                        <span className={styles.text_1}>NCORRECT</span>
                        <span className={styles.text_1}>: </span>
                        <span className={styles.text_2}>सृजिालामा</span>
                      </p>
                    </td>
                    <td className={styles.td_12}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                    <td className={styles.td_2}>
                      <p className={styles.block_19}>&nbsp;</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_19}>&nbsp;</p>
              <p className={styles.block_}>&nbsp;</p>
              <p className={styles.block_}>&nbsp;</p>
              <p className={styles.block_131}>&nbsp;</p>
              <p className={styles.block_249}>
                If a speaker makes a small mistake in a proper name, transcribe
                it anyway as long as the difference is minimal. "Minimal
                differences" refers to adding or dropping articles, possessives,
                and plurals.
              </p>
              <p className={styles.block_121}>&nbsp;</p>
              <p className={styles.block_119}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_5}>ORRECT</span>
                <span className={styles.text_5}>: </span>
                <span className={styles.text_6}>अन्नपूर्पोस्ट</span>
                <span className={styles.text_7}>
                  <span className={styles.tab}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </span>
                <span className={styles.text_8}>E</span>
                <span className={styles.text_11}>XPLANATION</span>
                <span className={styles.text_8}>: for "</span>
                <span className={styles.text_9}>अन्नपूर्वपोस्ट</span>
                <span className={styles.text_8}>"</span>
              </p>

              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>

                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_121}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>ऊ एिसेलमाकाम गछव।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    सामसुङ्गर एप्पललेसहमनत गरेभन्नेमैलेसुिेँ।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>युट्युि</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>कान्दिपुर</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_252}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: Ok Google, </span>
                  <span className={styles.text_2}>िेपालकोराजधािी केहो</span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>ओके ।</span>
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-32" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>ओकेदाइ।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: Ok Google, </span>
                  <span className={styles.text_2}>नततेकरेला</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>ओकेसािीहरू हो</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>अगानड जाँदैगरौँ।</span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_254}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>कान्दिपुरदैनिक</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>अन्नपूर्वपोस्ट</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>गोरखापत्र</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>राजधािी समाचारपत्</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_222}>&nbsp;</p>
                <p className={styles.block_62}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_127}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>कान्दिपुरदैनिक</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>अन्नपूर्वपोस्ट</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>गोरखापत्र</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>राजधािी समाचारपत्र</span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>

                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre4}>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_13}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>तन्दिर</span>
                        </p>
                      </td>
                      <td className={styles.td_14}>
                        <p className={styles.block_256}>
                          <span className={styles.text_1}>E</span>
                          <span className={styles.text_1}>XPLANATION</span>
                          <span className={styles.text_1}>: "</span>
                          <span className={styles.text_2}>तन्दिर</span>
                          <span className={styles.text_1}>
                            " is preferred by the Nepali
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td rowspan="2" className={styles.td_13}>
                        <p className={styles.block_113}>
                          <span className={styles.text_1}>I</span>
                          <span className={styles.text_1}>NCORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>तन्दस्वर</span>
                        </p>
                      </td>
                      <td className={styles.td_14}>
                        <p className={styles.block_257}>
                          dictionary of Nepal Academy.
                        </p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_14}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className={'text'}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_158}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>मसँगाँठछैि।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>मसँगाँठछैि</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मसँगपैसाछैि।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_259}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_138}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँिजारजािुस्।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँिजार जािुहोस्।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_216}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_201}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>तपाईँिजार जािुस्</span>
                  <span className={styles.text_3}>"</span>
                </p>
                <p className={styles.block_260}>&nbsp;</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँिजारजािुहोस्।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_203}>&nbsp;</p>
                <p className={styles.block_230}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: "</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_20}>तपाईँिजार जािुहोस्</span>
                  <span className={styles.text_3}>"</span>
                </p>

                <p className={'text'}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech, like "want to", "going to" for "wanna",
                  "gonna".
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>मैलेखाएको छ।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>मैलेखाको छ</span>
                  <span className={styles.text_1}> "</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_166}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_261}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>खुलस्तता</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_158}>&nbsp;</p>
                <p className={styles.block_262}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XPLANATION</span>
                  <span className={styles.text_13}>: Speaker meant "</span>
                  <span className={styles.text_14}>खुलस्त</span>
                  <span className={styles.text_13}>
                    "but added an extra suffix "
                  </span>
                  <span className={styles.text_14}>ता</span>
                  <span className={styles.text_13}>".</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    हामीलेअरूको परुपकार गिुवपछव।
                  </span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_246}>&nbsp;</p>
                <p className={styles.block_263}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Unsure whether speaker intended to say "
                  </span>
                  <span className={styles.text_2}>परोपकार</span>
                  <span className={styles.text_1}>" or "</span>
                  <span className={styles.text_2}>उपकार</span>
                  <span className={styles.text_1}>
                    ", but clearly articulated and easy to spell.
                  </span>
                </p>

                <p className={styles.block_203}>&nbsp;</p>
                <p className={'text'}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
