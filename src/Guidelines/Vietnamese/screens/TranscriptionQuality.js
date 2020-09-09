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
            <PageContentHeader currentPage="Longform Vietnamese" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_66}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Theo tôi trên Twitter.{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Theo tôi trên Twittor.{' '}
                  </span>
                </p>
                <p className={styles.block_67}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_70}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Chúng ta giành lại Tự Do.{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Chúng ta dành lại Tự Do.{' '}
                  </span>
                </p>
                <p className={styles.block_71}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_74}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : 500đ cho thỏi kẹo này thì quá mắc.{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : 500 cho thỏi kẹo này thì quá mắc.{' '}
                  </span>
                </p>
                <p className={styles.block_75}>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    năm trăm cho thỏi kẹo này thì quá mắc{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Implied currency, add "đồng" symbol even though it is not
                    spoken.
                  </span>
                </p>
                <p className={styles.block_76}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_77}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : YouTube YouTube YouTube{' '}
                  </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Có bao nhiêu trái xoài đu đủ?{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_79}>
                  themselves after mistakenly saying "xoài".
                </p>
                <p className={styles.block_80}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-”
                </p>
                <p className={styles.block_81}>
                  wherever the false start is happening
                </p>
                <p className={styles.block_82}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I need to get a new tele- telephone{' '}
                  </span>
                </p>
                <p className={styles.block_83}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : The driver got out of the driver got into the car.
                  </span>
                </p>
                <p className={styles.block_84}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I really don't think Hey that's a good idea, let's do
                    that!
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_87}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : nhân vật của Star Wars{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : nhân vật của Star Trek{' '}
                  </span>
                </p>
                <p className={styles.block_88}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>nhân vật của star wars </span>
                  <span className={styles.text_2}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_90}>
                  • Use only one space between words and sentences.
                </p>
                <p className={styles.block_91}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Toà nhà cao nhất ở New York là gì?{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Toà nhà cao nhất ở _New York là gì?{' '}
                  </span>
                </p>
                <p className={styles.block_92}>
                  • For most types of punctuation, do not put a space between
                  the preceding word and the punctuation.
                </p>
                <p className={styles.block_93}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Bạn có đi không? </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: Bạn có đi không ? </span>
                </p>
                <p className={styles.block_94}>
                  • For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_95}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Phượng nói, "Em yêu anh."{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Phượng nói, "Em yêu anh. "{' '}
                  </span>
                </p>
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
