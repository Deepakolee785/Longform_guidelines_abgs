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
            <PageContentHeader currentPage="Longform Hindi" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality </p>

              <p className={'text'}>
                Comply with the standard rules of the writing system.{' '}
              </p>
              <div id="typo">
                <p className={'heading'}>Typo </p>

                <p className={styles.block_142}>
                  A typo results in the unintentional creation of a non-word.{' '}
                </p>
                <p className={styles.block_142}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error </p>

                <p className={styles.block_142}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>भख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>लगा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>मझ</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>भख</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>लगी</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ह।</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>भख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>लगी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>मझ</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>भख</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>लगा</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ह।</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words </p>

                <p className={styles.block_142}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>₹300 </span>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमठाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िलए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ादा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>तीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सौ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िमठाई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िलए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ादा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>3:15 </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अलाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगाय।</span>
                  <span className={styles.text_3}> </span>
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
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अलाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लगाय</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Dif cult
                  Utterances &gt; Hesitations and Truncations.{' '}
                </p>
                <p className={styles.block_142}>
                  YouTube YouTube YouTube{' '}
                  <i className={styles.calibre1}>"youtube youtube youtube" </i>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>सिचन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>फल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>फल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िकतनी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रसभरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बरीज़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>
                    {' '}
                    ? Speaker clearly corrected themselves after "
                  </span>
                  <span className={styles.text_2}>रसभरी</span>
                  <span className={styles.text_3}>". </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution </p>

                <p className={styles.block_142}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.{' '}
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing </p>

                <p className={styles.block_142}>
                  Use only one space between words and sentences.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>आपका</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? NOT: </span>
                  <span className={styles.text_2}>आपका</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> ? </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रमश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लोग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सनी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बलात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>मरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रमश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लोग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सनी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बलात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}>? NOT: </span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> ? </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>चप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो</span>
                  <span className={styles.text_3}>! NOT: </span>
                  <span className={styles.text_2}>चप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो</span>
                  <span className={styles.text_3}> ! </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> , </span>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉ</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>दीपक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> , </span>
                  <span className={styles.text_2}>यह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉ</span>
                  <span className={styles.text_3}>. </span>
                  <span className={styles.text_2}>दीपक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>सजय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}>, "</span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तमस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>" NOT: </span>
                  <span className={styles.text_2}>सजय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}>, " </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तमस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> " </span>
                </p>
                <p className={styles.block_145}>&nbsp;</p>
                <p className={styles.block_146}>&nbsp;</p>
                <p className={styles.block_146}>&nbsp;</p>
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
