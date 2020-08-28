import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
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
              <p className={'large-heading'}>Punctuation</p>

              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>

                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>

                <p className={'text'}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>नहजो यहाँको आएको नियो</span>
                  <span className={styles.text_5}>? </span>
                  <span className={styles.text_6}>पल्लो घरको दाइ।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_8}>: Two speakers. "</span>
                  <span className={styles.text_9}>पल्लो घरको दाइ</span>
                  <span className={styles.text_8}>" is an</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>
                  answer to a specific question.
                </p>
                <p className={styles.block_136}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>खेतकोिाली</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_8}>
                    : No context to suggest "
                  </span>
                  <span className={styles.text_9}>खेतकोिाली</span>
                  <span className={styles.text_8}>" is a</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>
                  sentence; treat as a fragment.
                </p>
                <p className={styles.block_136}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>भोनल पाटीमा जािे</span>
                  <span className={styles.text_5}>?</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_8}>
                    : Dropping the subject and main verb
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>
                  here sounds natural as a complete sentence.
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>Punctuate as sentence</p>
                <p className={styles.block_77}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>खेतमाकाम गदै</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_8}>
                    : Sounds like a web search as opposed to
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_122}>
                  a dropped subject. Punctuate as fragment.
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_123}>&nbsp;</p>
                <p className={styles.block_137}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_138}>&nbsp;</p>
                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>ओहो।</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_8}>: interjection</span>
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-17" className={styles.block_20}>
                  &nbsp;
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre4}>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_5}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>िमस्कार।</span>
                        </p>
                      </td>
                      <td className={styles.td_6}>
                        <p className={styles.block_139}>
                          <span className={styles.text_}>E</span>
                          <span className={styles.text_}>XPLANATION</span>
                          <span className={styles.text_}>: greeting</span>
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_5}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>
                            तपाईँ लाईधेरैधेरैशुभकामिा।
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_6}>
                        <p className={styles.block_139}>
                          <span className={styles.text_}>E</span>
                          <span className={styles.text_}>XPLANATION</span>
                          <span className={styles.text_}>
                            : Entire phrase is being used as an
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_5}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                      <td className={styles.td_6}>
                        <p className={styles.block_139}>interjection.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className={'text'}>
                  Add end punctuation to sentence fragments that sound like the
                  end of a sentence. For fragments that do not clearly sound
                  like the end of a sentence, leave out punctuation. Note that
                  sentence fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_141}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँ लाईकेलाग्छ</span>
                  <span className={styles.text_1}>? </span>
                  <span className={styles.text_2}>मािौ यो त</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    निकैगाह्रो छ। यसलेकु अिविैराख्दैि।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_143}>&nbsp;</p>
                <p className={styles.block_144}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: </span>
                  <span className={styles.text_14}>िास्तिमैकनठि छ</span>
                  <span className={styles.text_13}>, </span>
                  <span className={styles.text_14}>त्यसैलेहतास हुिुआिश्यक</span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>छैि।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    मलाई यो सटवसाहुजी यसको दाम कनत हो
                  </span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    काम गरररहेकानियौँतैपनिसनकिेछाँट
                  </span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_143}>&nbsp;</p>
                <p className={styles.block_146}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Sentence-initial fragment ends mid-stream.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_147}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Sentence-final fragment begins mid-stream.
                  </span>
                </p>
                <p className={styles.block_148}>&nbsp;</p>
                <p className={styles.block_149}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Audio was cut off at the beginning.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_150}>&nbsp;</p>
                <p className={styles.block_151}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not put a period, hyphen, or ellipsis after a fragment
                    even if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_152}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Sounds like the middle of a sentence; beginning and end
                    were cut off.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_153}>&nbsp;</p>
                <p className={styles.block_154}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not punctuate it as a sentence.
                </p>

                <p className={'heading'}>Commas</p>

                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-18" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    म यस घरमा धेरैसमयदेन्दखकाम गदैआएको छु।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_156}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>म यस घरमा</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>धेरैसमयदेन्दख</span>
                  <span className={styles.text_1}>,</span>
                  <span className={styles.text_2}>काम गदैआएको छु।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_157}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Even if the speaker uses long pauses in these places, do
                    not use a comma. There are places where commas are allowed
                    or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_158}>&nbsp;</p>
                <p className={styles.block_159}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_160}>&nbsp;</p>
                <p className={styles.block_161}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: </span>
                  <span className={styles.text_14}>नठक छ</span>
                  <span className={styles.text_13}>, </span>
                  <span className={styles.text_14}>
                    मलाई तपाईँ कोआफ्िो कम्पिी राम्ररी
                  </span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>
                    चलेकोछ जस्तो लागेकोनियो।
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_162}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>धत्तेरी</span>
                  <span className={styles.text_1}>,</span>
                  <span className={styles.text_2}>छोरी।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>हुन्छ</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>म गछुव।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>म यो काम गिवसक्छु।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>हुन्छ। म यो काम गरौँला।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    ओहो। यो त िास्तिमैराम्रो छ।
                  </span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_163}>&nbsp;</p>
                <p className={styles.block_164}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XPLANATION</span>
                  <span className={styles.text_13}>
                    : Discourse word. Other examples of discourse words in
                    Neplai include "
                  </span>
                  <span className={styles.text_14}>तर</span>
                  <span className={styles.text_13}>", "</span>
                  <span className={styles.text_14}>त्यसो भए</span>
                  <span className={styles.text_13}>", and "</span>
                  <span className={styles.text_14}>भए पनि</span>
                  <span className={styles.text_13}>".</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_89}>&nbsp;</p>
                <p className={styles.block_165}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XPLANATION</span>
                  <span className={styles.text_13}>
                    : Interjection. Other examples of interjections include "
                  </span>
                  <span className={styles.text_14}>अोोहो</span>
                  <span className={styles.text_13}>", "</span>
                  <span className={styles.text_14}>छ्या</span>
                  <span className={styles.text_13}>", "</span>
                  <span className={styles.text_14}>हाहा</span>
                  <span className={styles.text_13}>", and others.</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_153}>&nbsp;</p>
                <p className={styles.block_149}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>: yes/no word</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_13}>&nbsp;</p>
                <p className={styles.block_149}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>: yes/no word</span>
                </p>
                <p className={styles.block_77}>&nbsp;</p>
                <p className={styles.block_113}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : substantial pause after "
                  </span>
                  <span className={styles.text_2}>हुन्छ</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_113}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : substantial pause after "
                  </span>
                  <span className={styles.text_2}>अोोहो</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_131}>&nbsp;</p>
                <p className={styles.block_110}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_68}>&nbsp;</p>
                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Ok Google</span>
                </p>
                <p className={styles.block_77}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: Ok Google, </span>
                  <span className={styles.text_2}>ठुलाघरहरूका तन्दिरहरू</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: Ok Google, </span>
                  <span className={styles.text_2}>
                    मलाई निभागीय प्रमुखकोअनफस जािे
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_129}>िाटो देखाउिुहोस्।</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: Ok Google, </span>
                  <span className={styles.text_2}>
                    िेपालकोप्रधािमन्त्रीको िाम केहो
                  </span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-19" className={styles.block_20}>
                  &nbsp;
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>

                <p className={'text'}>
                  Punctuate the following as questions: 1) All queries
                  syntactically built as questions, regardless of intonation. 2)
                  All queries which sound like they are being used as questions,
                  regardless of sentence structure.
                </p>

                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>तपाईँकहाँिस्नुहुन्छ</span>
                  <span className={styles.text_1}>?</span>
                </p>

                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>३</span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>०० िजेनिहाि</span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_163}>&nbsp;</p>
                <p className={styles.block_168}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Syntactically built as a question, so punctuate as a
                    question regardless of intonation.
                  </span>
                </p>
                <p className={styles.block_169}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Rising intonation suggests it is a question, so punctuate
                    as a question regardless of structure.
                  </span>
                </p>

                <p className={styles.block_119}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_5}>: </span>
                  <span className={styles.text_6}>काठमान्ौँकोमौसम</span>
                  <span className={styles.text_7}>
                    <span className={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span className={styles.text_8}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_8}>
                    : Query has rising intonation, but is most
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_170}>
                  likely a web search rather than a true question.
                </p>

                <p className={styles.block_171}>
                  <span className={styles.text_16}>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation point. If there is any doubt, err on the side of
                    using a purnaviram "
                  </span>
                  <span className={styles.text_17}>।</span>
                  <span className={styles.text_16}>".</span>
                </p>
                <p className={styles.block_172}>&nbsp;</p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre4}>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_7}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>ए हो</span>
                          <span className={styles.text_1}>!</span>
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_173}>
                          <span className={styles.text_}>E</span>
                          <span className={styles.text_}>XPLANATION</span>
                          <span className={styles.text_}>
                            : Speaker sounds enthusiastic.
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_7}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: </span>
                          <span className={styles.text_2}>ए हो।</span>
                        </p>
                      </td>
                      <td className={styles.td_8}>
                        <p className={styles.block_173}>
                          <span className={styles.text_}>E</span>
                          <span className={styles.text_}>XPLANATION</span>
                          <span className={styles.text_}>
                            : Speaker sounds unenthused.
                          </span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>

                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>

                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मेरोभाइलेभन्यो</span>
                  <span className={styles.text_1}>, "</span>
                  <span className={styles.text_2}>रानरिय जिािर गाई</span>
                  <span className={styles.text_1}>"</span>
                  <span className={styles.text_2}>।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मेरोभाइलेभन्यो</span>
                  <span className={styles.text_1}>, "</span>
                  <span className={styles.text_2}>रानरिय जिािर गाई।</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मेरोभाइलेभन्यो</span>
                  <span className={styles.text_1}> "</span>
                  <span className={styles.text_2}>रानरिय जिािर गाई।</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>मेरोभाइलेभन्यो</span>
                  <span className={styles.text_1}> "</span>
                  <span className={styles.text_2}>रानरिय जिािर गाई</span>
                  <span className={styles.text_1}>"</span>
                  <span className={styles.text_2}>।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_176}>&nbsp;</p>
                <p className={styles.block_113}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_1}>: The word "</span>
                  <span className={styles.text_2}>भन्नु</span>
                  <span className={styles.text_1}>"is the most common</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_177}>
                  <span className={styles.text_16}>
                    reported speech verb in Nepali, but other words ("
                  </span>
                  <span className={styles.text_17}>िताउिु</span>
                  <span className={styles.text_16}>","</span>
                  <span className={styles.text_17}>जिाफ नदिु</span>
                  <span className={styles.text_16}>","</span>
                  <span className={styles.text_17}>फकावउिु</span>
                  <span className={styles.text_16}>")can be used for</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_149}>reported speech.</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-20" className={styles.block_20}>
                  &nbsp;
                </p>
                <table className={styles.table_}>
                  <tbody className={styles.calibre4}>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_9}>
                        <p className={styles.block_111}>
                          <span className={styles.text_1}>C</span>
                          <span className={styles.text_1}>ORRECT</span>
                          <span className={styles.text_1}>: "</span>
                          <span className={styles.text_2}>काका</span>
                          <span className={styles.text_1}>" </span>
                          <span className={styles.text_2}>भि।</span>
                        </p>
                      </td>
                      <td className={styles.td_10}>
                        <p className={styles.block_178}>
                          <span className={styles.text_}>E</span>
                          <span className={styles.text_}>XPLANATION</span>
                          <span className={styles.text_}>
                            : Omit the comma if the verb is in the
                          </span>
                        </p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td rowspan="2" className={styles.td_9}>
                        <p className={styles.block_113}>
                          <span className={styles.text_1}>I</span>
                          <span className={styles.text_1}>NCORRECT</span>
                          <span className={styles.text_1}>: "</span>
                          <span className={styles.text_2}>काका</span>
                          <span className={styles.text_1}>", </span>
                          <span className={styles.text_2}>भि।</span>
                        </p>
                      </td>
                      <td className={styles.td_10}>
                        <p className={styles.block_178}>imperative.</p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr className={styles.calibre5}>
                      <td className={styles.td_10}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                      <td className={styles.td_2}>
                        <p className={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className={'text'}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_180}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>गीतालेभनिि्</span>
                  <span className={styles.text_1}>,"</span>
                  <span className={styles.text_2}>आज ३</span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>०० िजेहामी भेटौँ।</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>गीतालेभनिि्</span>
                  <span className={styles.text_1}>,"</span>
                  <span className={styles.text_2}>आज ३</span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>०० िजेहामी भेटौँ।</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>रामलेसोध्यो</span>
                  <span className={styles.text_1}>, "</span>
                  <span className={styles.text_2}>केआज हामी ३</span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>०० िजेभेट्छौँ</span>
                  <span className={styles.text_1}>?"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>रामलेसोध्यो</span>
                  <span className={styles.text_1}>, "</span>
                  <span className={styles.text_2}>केआज हामी ३</span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>०० िजेभेट्छौँ</span>
                  <span className={styles.text_1}>?"</span>
                  <span className={styles.text_2}>।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_181}>&nbsp;</p>
                <p className={styles.block_182}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: "</span>
                  <span className={styles.text_14}>
                    म त्यहाँआइपुग्छु।मेरोकायवक्रमनिनित भएको छ।
                  </span>
                  <span className={styles.text_13}>" </span>
                  <span className={styles.text_14}>रामलेसिैलाईसुिायो।</span>
                </p>
                <p className={styles.block_17}>&nbsp;</p>
                <p className={styles.block_183}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Text in quotation marks qualifies as sentences. Do not
                    alter its end punctuation even though the quote is within a
                    sentence.
                  </span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_184}>&nbsp;</p>
                <p className={styles.block_185}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_32}>&nbsp;</p>
                <p className={styles.block_185}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>

                <p className={'text'}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>
                    अङ्ग्रेजीमाअिुिादगिुवहोस्
                  </span>
                  <span className={styles.text_1}>:</span>
                  <span className={styles.text_2}>तपाईँ लाईकस्तो छ</span>
                  <span className={styles.text_1}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>&nbsp;</p>
                <p className={styles.block_188}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>अङ्ग्रेजीमा</span>
                  <span className={styles.text_1}>"</span>
                  <span className={styles.text_2}>नतम्रो िाम केहो</span>
                  <span className={styles.text_1}>?" </span>
                  <span className={styles.text_2}>अिुिादगिवहोस्।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_189}>&nbsp;</p>
                <p className={styles.block_190}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: "</span>
                  <span className={styles.text_14}>म नतमीलाई माया गछुव।</span>
                  <span className={styles.text_13}>"</span>
                  <span className={styles.text_14}>तपाईँफ्रन्सेलीभाषामा</span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>कसरी भन्नुहुन्छ</span>
                  <span className={styles.text_13}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_191}>
                  <span className={styles.text_13}>I</span>
                  <span className={styles.text_13}>NCORRECT</span>
                  <span className={styles.text_13}>: "</span>
                  <span className={styles.text_14}>म नतमीलाई माया गछुव</span>
                  <span className={styles.text_13}>",</span>
                  <span className={styles.text_14}>तपाईँफ्रन्सेलीभाषामा</span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>कसरी भन्नुहुन्छ</span>
                  <span className={styles.text_13}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_192}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: example@gmail.com </span>
                  <span className={styles.text_14}>लाई</span>
                  <span className={styles.text_13}>: </span>
                  <span className={styles.text_14}>अोोहो</span>
                  <span className={styles.text_13}>, </span>
                  <span className={styles.text_14}>तपाईँ को</span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>नदि कस्तो रह्यो</span>
                  <span className={styles.text_13}>?</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_123}>&nbsp;</p>
                <p className={styles.block_193}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The quote follows the command, so use a colon and omit
                    quotation marks.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_70}>&nbsp;</p>
                <p className={styles.block_194}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The quote is in the middle of a sentence, so use quotation
                    marks and omit colon.
                  </span>
                </p>
                <p className={styles.block_117}>&nbsp;</p>
                <p className={styles.block_195}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: Omit commas after "</span>
                  <span className={styles.text_2}>भन्नुहुन्छ</span>
                  <span className={styles.text_1}>
                    "verbs in translation requests.
                  </span>
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-21" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>इमेल</span>
                  <span className={styles.text_1}>example@gmail.com </span>
                  <span className={styles.text_2}>मा पठाउिुहोस्</span>
                  <span className={styles.text_1}>:</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_4}>अोोहो</span>
                  <span className={styles.text_3}>,</span>
                  <span className={styles.text_4}>
                    {' '}
                    तपाईँ कोनदि कस्तो रह्यो
                  </span>
                  <span className={styles.text_3}>?</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>

                <p className={'text'}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>

                <p className={'text'}>
                  Apart from Nepali letters and the English letters a through z,
                  you should not use any other
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_197}>
                  <span className={'text'}>symbol than: 0-9 </span>
                  <span className={'text'}>०</span>
                  <span className={'text'}>-</span>
                  <span className={'text'}>९</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_62}>
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ²³,?!~^\
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p
                  className={styles.block_62}
                >{`'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;`}</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>

                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_138}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>नठक छ</span>
                  <span className={styles.text_1}> ( </span>
                  <span className={styles.text_2}>डट</span>
                  <span className={styles.text_1}>) (</span>
                  <span className={styles.text_2}>डट</span>
                  <span className={styles.text_1}>) (</span>
                  <span className={styles.text_2}>डट</span>
                  <span className={styles.text_1}>)</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>नठक छ</span>
                  <span className={styles.text_1}>...</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_181}>&nbsp;</p>
                <p className={styles.block_200}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: </span>
                  <span className={styles.text_14}>िमस्कार</span>
                  <span className={styles.text_13}> (</span>
                  <span className={styles.text_14}>अल्पनिराम</span>
                  <span className={styles.text_13}>) </span>
                  <span className={styles.text_14}>तपाईँ लाईकस्तो छ</span>
                  <span className={styles.text_13}> (</span>
                  <span className={styles.text_14}>प्रश्न</span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>नचन्ह</span>
                  <span className={styles.text_13}>)</span>
                  <span className={styles.text_14}> मलाई सन्चैछ </span>
                  <span className={styles.text_13}>(</span>
                  <span className={styles.text_14}>पूर्वनिराम</span>
                  <span className={styles.text_13}>)</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_12}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िमस्कार</span>
                  <span className={styles.text_1}>, </span>
                  <span className={styles.text_2}>तपाईँ लाईकस्तो छ</span>
                  <span className={styles.text_1}>? </span>
                  <span className={styles.text_2}>मलाई सन्चैछ।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_201}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>नठक छ डट डट डट</span>
                  <span className={styles.text_1}> "</span>
                </p>

                <p className={styles.block_}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XAMPLE AUDIO</span>
                  <span className={styles.text_13}>: " </span>
                  <span className={styles.text_18}>
                    िमस्कारअल्पनिराम तपाईँ लाईकस्तो छ
                  </span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_18}>
                    प्रश्न नचन्हमलाई सन्चैछ पूर्वनिराम
                  </span>
                  <span className={styles.text_13}>"</span>
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-22" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_13}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_13}>: </span>
                  <span className={styles.text_14}>उसलेमलाई भन्यो</span>
                  <span className={styles.text_13}>, (</span>
                  <span className={styles.text_14}>उद्धरर् नचन्ह</span>
                  <span className={styles.text_13}>) </span>
                  <span className={styles.text_14}>कु कु र</span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_14}>िल्याउिुहोस्।</span>
                  <span className={styles.text_13}>(</span>
                  <span className={styles.text_14}>उद्धरर् नचन्ह</span>
                  <span className={styles.text_13}>)</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>उसलेमलाई भन्यो</span>
                  <span className={styles.text_1}>, "</span>
                  <span className={styles.text_2}>कु कुिल्याउिुहोस्।र</span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: (</span>
                  <span className={styles.text_2}>हँनसलोअिुहार</span>
                  <span className={styles.text_1}>)</span>
                </p>
                <p className={styles.block_203}>&nbsp;</p>
                <p className={styles.block_204}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_}>: :-)</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>हँनसलोअिुहार</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XAMPLE AUDIO</span>
                  <span className={styles.text_13}>: " </span>
                  <span className={styles.text_18}>
                    उसलेमलाई भन्यो उद्धरर् नचन्ह कु कु र
                  </span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_18}>
                    िल्याउिुहोस्उद्धरर् नचन्ह
                  </span>
                  <span className={styles.text_13}>"</span>
                </p>

                <p className={styles.block_19}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>हँनसलोअिुहार</span>
                  <span className={styles.text_1}>"</span>
                </p>

                <p className={'text'}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>म होटलको कोठा िम्बर ४</span>
                  <span className={styles.text_1}>-</span>
                  <span className={styles.text_2}>क मा िस्छु।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>म होटलको कोठा िम्बर ४</span>
                  <span className={styles.text_1}>(</span>
                  <span className={styles.text_2}>ड्यास</span>
                  <span className={styles.text_1}>)</span>
                  <span className={styles.text_2}>क मा िस्छु।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>म होटलको कोठा िम्बर चार</span>
                  <span className={styles.text_1}>(</span>
                  <span className={styles.text_2}>ड्यास</span>
                  <span className={styles.text_1}>)</span>
                  <span className={styles.text_2}>क मा िस्छु।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_10}>&nbsp;</p>
                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: www.fake-domain.com</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: www (</span>
                  <span className={styles.text_2}>डट</span>
                  <span className={styles.text_1}>) fake (</span>
                  <span className={styles.text_2}>हाइफि</span>
                  <span className={styles.text_1}>) domain (</span>
                  <span className={styles.text_2}>डट</span>
                  <span className={styles.text_1}>) com</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िम्रता एउटी अनभिेत्री</span>
                  <span className={styles.text_1}>/</span>
                  <span className={styles.text_2}>मोडेलहुि्।</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_116}>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: </span>
                  <span className={styles.text_2}>िम्रता एउटी अनभिेत्री</span>
                  <span className={styles.text_1}>(</span>
                  <span className={styles.text_2}>स्लास</span>
                  <span className={styles.text_1}>) </span>
                  <span className={styles.text_2}>मोडेलहुि्।</span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_158}>&nbsp;</p>
                <p className={styles.block_207}>
                  <span className={styles.text_13}>E</span>
                  <span className={styles.text_13}>XAMPLE AUDIO</span>
                  <span className={styles.text_13}>: " </span>
                  <span className={styles.text_18}>
                    म होटलको कोठा िम्बर ४ ड्यास क मा
                  </span>
                  <span className={styles.text_13}> </span>
                  <span className={styles.text_18}>िस्छु</span>
                  <span className={styles.text_13}>"</span>
                </p>

                <p className={styles.block_208}>&nbsp;</p>
                <p className={styles.block_19}>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XAMPLE AUDIO</span>
                  <span className={styles.text_1}>: " </span>
                  <span className={styles.text_10}>
                    िम्रता एउटी अनभिेत्रीस्लास मोडेलहुि्
                  </span>
                  <span className={styles.text_1}>"</span>
                </p>
                <p className={styles.block_13}>&nbsp;</p>
                <p className={styles.block_209}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_}>
                    : We consider slash to be word-level punctuation.
                  </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_20}>&nbsp;</p>
                <p className={styles.block_210}>&nbsp;</p>
                <p className={styles.block_211}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_72}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: (</span>
                  <span className={styles.text_2}>अधवनिराम</span>
                  <span className={styles.text_1}>)</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: (</span>
                  <span className={styles.text_2}>निराम नचन्ह</span>
                  <span className={styles.text_1}>)</span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_115}>
                  <span className={styles.text_1}>C</span>
                  <span className={styles.text_1}>ORRECT</span>
                  <span className={styles.text_1}>: (</span>
                  <span className={styles.text_2}>निस्मयानदिोधक नचन्ह</span>
                  <span className={styles.text_1}>)</span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
