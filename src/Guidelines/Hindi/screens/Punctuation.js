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
            <PageContentHeader currentPage="longform Hindi" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation </p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences </p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.{' '}
                </p>
                <p className={styles.block_151}>
                  Full sentences should end with a punctuation mark.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तमस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तमस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करता</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  In general, a complete sentence contains a subject and a verb.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>वह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>काम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करगा।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पसद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Includes subject and verb. Sounds like a whole utterance
                    rather than just a conjunction to a larger sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a speci c question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_2}>सोलह।</span>
                  <span className={styles.text_3}> two speakers </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>िपछली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बार</span>
                  <span className={styles.text_3}>
                    {' '}
                    No context to suggest this is a sentence; treat it as a
                    fragment.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>फलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}>
                    {' '}
                    Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>खान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कल</span>
                  <span className={styles.text_3}>
                    ? Although the subject is dropped, this still sounds
                    completely natural and should be treated as a complete
                    sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मौसम</span>
                  <span className={styles.text_3}>
                    {' '}
                    This is asking for information, but the most likely
                    interpretation is as a sentence fragment on its own.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>वाह</span>
                  <span className={styles.text_3}>! interjection </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> greeting </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमलत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>
                    {' '}
                    This includes both a yes/no word and a farewell, with a long
                    pause between.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  Below are some examples of common interjections.{' '}
                </p>
                <p className={styles.block_155}>
                  <span className={styles.text_2}>ओह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हाहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ओ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भगवान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हाय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>धत</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_157}>
                  Do punctuate phrases that are intended to be used by the
                  speaker as a web search, not as full sentences.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>इिडया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>इिडया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>अिमताभ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>अिमताभ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_2}>ऐसा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}>
                    {' '}
                    Begins as complete sentence and ends mid-stream.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>था।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कोई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मतलब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Fragment is the end of a sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सजय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करना।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Audio was cut o at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>दकान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चाय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>
                    ? Do not put a period, hyphen, or ellipsis, even if another
                    sentence follows.{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ारा</span>
                  <span className={styles.text_3}>
                    {' '}
                    Both sound like beginnings of sentences.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}>
                    ? Repeated beginning of the sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>जा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>परत</span>
                  <span className={styles.text_3}>
                    {' '}
                    Sounds like the middle of a sentence; beginning and end were
                    cut o .{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.{' '}
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas </p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.{' '}
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>अगला</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकधर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? NOT: </span>
                  <span className={styles.text_2}>अगला</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>पट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पप</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>िकधर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>?? </span>
                </p>
                <p className={styles.block_142}>
                  Even if the speaker uses long pauses in these places, do not
                  use a comma. There are places where commas are allowed or
                  required, but this example contains neither.{' '}
                </p>
                <p className={styles.block_1}>&nbsp;</p>
                <p className={styles.block_142}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single{' '}
                </p>
                <p className={styles.block_142}>word or phrase. </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>ताज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>महल</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>बद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}>? topic-comment </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>कदद</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>फल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}>? topic-comment </span>
                </p>
                <p className={styles.block_151}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between{' '}
                </p>
                <p className={styles.block_151}>
                  a discourse word, interjection, or yes/no word and a full
                  sentence that follows it, treat that initial word as a
                  separate sentence.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>लिकन</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सकता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> Discourse word. </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>वाह</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>बटा।</span>
                  <span className={styles.text_3}> Interjection. </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> , </span>
                  <span className={styles.text_2}>जो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सावधानी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करना।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Yes/no word. Other examples of these types items include "
                  </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}>", "</span>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}>" and others. </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीकार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> Yes/no word. </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>शायद</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>पर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पता।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Use a comma when there is no pause, or when there is a pause
                    that isn't long.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>शायद।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पता।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Use a period when there is a substantial pause after "
                  </span>
                  <span className={styles.text_2}>शायद</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_151}>Use commas in lists. </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बटा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भोला</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>छोटा</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ारा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नटखट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Use commas for non-restrictive modi ers, but do not use commas
                  for restrictive modi ers. The basic test for this is whether
                  the modi er can be dropped from the sentence and still keep
                  basically the same meaning.{' '}
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>इिडया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>धान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>नर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मोदी</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>अम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रका</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थ।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>
                    Non-restrictive modi er. "
                  </span>
                  <span className={styles.text_2}>नर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मोदी</span>
                  <span className={styles.text_3}>
                    " does not change the core meaning of "
                  </span>
                  <span className={styles.text_2}>इिडया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>धान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}>
                    ", it just adds additional information about the Indian
                    prime minister.{' '}
                  </span>
                </p>
                <p className={styles.block_160}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ारी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> , </span>
                  <span className={styles.text_2}>सोनाली</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िवनोद।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> , </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अजिल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नहा</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पजा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नहा।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पजा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> Long pause between "</span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नहा।</span>
                  <span className={styles.text_3}>" and "</span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पजा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>
                    ". Treat as separate sentences.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  Except in greetings, sentence-initial and sentence- nal
                  addressees should be separated by a comma.{' '}
                </p>
                <p className={styles.block_162}>
                  <span className={styles.text_2}>सिचन</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कॉल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कर।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कसी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>मनीषा</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>मनोज</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> , </span>
                  <span className={styles.text_2}>िववक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".{' '}
                </p>
                <p className={styles.block_163}>Ok Google </p>
                <p className={styles.block_153}>
                  <span className={styles.text_3}>Ok Google, </span>
                  <span className={styles.text_2}>फलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदखाओ।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>Ok Google, </span>
                  <span className={styles.text_2}>रॉक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डाउनलोड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_3}>Ok Google, </span>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदवाली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_158}>Intonation marks </p>
                <p className={styles.block_150}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_3}>
                    ? Utterance uses rising intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाती</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>
                    ? Utterance uses rising intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मौसम</span>
                  <span className={styles.text_3}>
                    {' '}
                    Query uses rising intonation, but is most likely a web
                    search rather than a true question.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>चप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कर</span>
                  <span className={styles.text_3}>! </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>िबलकल</span>
                  <span className={styles.text_3}>
                    ! Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डरपोक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मबारक</span>
                  <span className={styles.text_3}>
                    ! Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation </p>
                <p className={styles.block_151}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.{' '}
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}>, "</span>
                  <span className={styles.text_2}>मगरमछ</span>
                  <span className={styles.text_3}>"</span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}>, "</span>
                  <span className={styles.text_2}>मगरमछ।</span>
                  <span className={styles.text_3}>" NOT: </span>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>मगरमछ।</span>
                  <span className={styles.text_3}>" NOT: </span>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>मगरमछ</span>
                  <span className={styles.text_3}>"</span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>The word "</span>
                  <span className={styles.text_2}>बोलना</span>
                  <span className={styles.text_3}>
                    " is the most common reported speech verb in English, but
                    other words ("
                  </span>
                  <span className={styles.text_2}>पछना</span>
                  <span className={styles.text_3}>", "</span>
                  <span className={styles.text_2}>कहना</span>
                  <span className={styles.text_3}>
                    ") can be used for reported speech.{' '}
                  </span>
                </p>
                <p className={styles.block_164}>
                  If the text in quotation marks quali es as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>नहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोली</span>
                  <span className={styles.text_3}>, "</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमलत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>" NOT: </span>
                  <span className={styles.text_2}>नहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोली</span>
                  <span className={styles.text_3}>, "</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमलत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>"</span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>
                    {' '}
                    <sup className={styles.calibre3}>The word "</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>बोलना</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>
                      " is the most common reported speech verb in English, but
                      other words ("
                    </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>पछना</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>", "</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>कहना</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>
                      ") can be used for reported speech.{' '}
                    </sup>
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>जितन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पछा</span>
                  <span className={styles.text_3}>, " </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}>?" NOT: </span>
                  <span className={styles.text_2}>जितन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पछा</span>
                  <span className={styles.text_3}>, " </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}>?"</span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तमस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}>" </span>
                  <span className={styles.text_2}>कस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>
                    {' '}
                    ? The quote is in the middle of a sentence, so use quotation
                    marks.{' '}
                  </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>जापानी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> : </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पीनी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>example@gmail.com </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ईमल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भजो</span>
                  <span className={styles.text_3}>: </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आओग</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_165}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>िनश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> " </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अनवाद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include de ning the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अभी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पापा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अभी</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>पापा</span>
                  <span className={styles.text_3}>" </span>
                  <span className={styles.text_2}>बोला।</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols </p>
                <p className={styles.block_150}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£₹+=%*&amp;-.;{' '}
                </p>
                <p className={styles.block_150}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तमन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भारत</span>
                  <span className={styles.text_3}>-</span>
                  <span className={styles.text_2}>पाक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दखा</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_151}>
                  Include a hyphen between locations in ight itineraries.{' '}
                </p>
                <p className={styles.block_166}>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मबई</span>
                  <span className={styles.text_3}>-</span>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उड़ान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? NOT: </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मबई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उड़ान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_151}>
                  Use hyphen in phrases and compounds typically written with
                  hyphen. If in doubt, use hyphen.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>मर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>माता</span>
                  <span className={styles.text_3}>-</span>
                  <span className={styles.text_2}>िपता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बरली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>वहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कभी</span>
                  <span className={styles.text_3}>-</span>
                  <span className={styles.text_2}>कभी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}>? </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation </p>
                <p className={styles.block_150}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.){' '}
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> {`{`} </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> {`} `}NOT: </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}>? NOT: </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> ? </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_167}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.{' '}
                </p>
                <p className={styles.block_151}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_3}>{`{`}</span>
                  <span className={styles.text_2}>पण</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िवराम</span>
                  <span className={styles.text_3}>{`}`} </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>{`{`}</span>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िवराम</span>
                  <span className={styles.text_3}>{`}`} </span>
                </p>
                <p className={styles.block_146}>&nbsp;</p>
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
