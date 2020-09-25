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
            <PageContentHeader currentPage="Longform EnglishKE" />
            <div className="content text">
              {' '}
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_152}>
                <span className={styles.text_8}>
                  Comply with the standard rules of the writing system.
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_154}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_155}>
                  <span className={styles.text_2}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as "complete".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Correct: It's easier to use a taxi than a personal
                  </span>
                </p>
                <p className={styles.block_157}>car in the city centre.</p>
                <p className={styles.block_158}>
                  <span className={styles.calibre2}>
                    Incorrect: It's easier to use a taxi than a
                  </span>
                </p>
                <p className={styles.block_159}>
                  personal car in the city cente.
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: On your left is the Kenyatta National
                  </span>
                </p>
                <p className={styles.block_160}>Hospital.</p>
                <p className={styles.block_158}>
                  <span className={styles.calibre2}>
                    Incorrect: On your left is the Kenyata National
                  </span>
                </p>
                <p className={styles.block_161}>Hospital.</p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_163}>
                  <span className={styles.text_2}>
                    A context error occurs when a real word is used incorrectly
                    or when the incorrect form{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of a word is used. This includes homophones and punctuation,
                    among other things.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>Correct: Where is your car?</p>
                <p className={styles.block_158}>
                  Incorrect: Where is you're car?
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: Would you live behind the Nairobi
                  </span>
                </p>
                <p className={styles.block_164}>university students' hotels?</p>
                <p className={styles.block_102}>
                  <span className={styles.calibre2}>
                    Incorrect: Would you leave behind the Nairobi
                  </span>
                </p>
                <p className={styles.block_165}>university students' hotels?</p>
                <p className={styles.block_166}>
                  <span className={styles.text_2}>
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    disambiguation. Look up words if you are unsure.
                  </span>
                </p>
                <p className={styles.block_167}>
                  Correct: Hell's Gate National Park
                </p>
                <p className={styles.block_102}>
                  Incorrect: Hills Gate National Park
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_169}>
                  <span className={styles.text_2}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speaker. Avoid putting words in the speaker's mouth.
                    However, do transcribe implied{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    times and units of currency.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_12}>
                    Correct: Take tea and bread.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Do not add the omitted quantifier "some".
                    </span>
                  </span>
                </p>
                <p className={styles.block_171}>
                  <span className={styles.text_12}>
                    Correct: Set alarm for 7:15.{' '}
                  </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>
                    set alarm for seven fifteen{' '}
                  </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_2}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    interjections and non-speech vocalizations, refer to Agreed
                    Spelling &gt; Interjections and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Difficult Utterances &gt; Hesitations and Truncations.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  Correct: YouTube YouTube YouTube
                </p>
                <p className={styles.block_173}>
                  <span className={styles.calibre2}>
                    Correct: I leave left Nakuru immediately after submitting
                    the paper.
                  </span>
                </p>
                <p className={styles.block_175}>
                  <span className={styles.calibre2}>
                    Explanation: Speaker clearly corrected themselves after
                    "leave".
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>

                <p className={styles.block_176}>
                  <span className={styles.text_2}>
                    A substitution error occurs when another standard word is
                    transcribed instead of what{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    was meant by the speaker. If what the speaker said falls
                    into another category (Context{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Error, Proper Name, Media Title, etc.), see the relevant
                    section.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_178}>
                  <span className={styles.text_8}>
                    Use only one space between words and sentences.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.calibre2}>
                    Correct: The Karen Hub is easily accessible
                  </span>
                </p>
                <p className={styles.block_180}>through Ngong Road.</p>
                <p className={styles.block_158}>
                  <span className={styles.calibre2}>
                    Incorrect: The Karen Hub is easily accessible
                  </span>
                </p>
                <p className={styles.block_181}>through _Ngong Road.</p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: Would you like to come with us? We are
                  </span>
                </p>
                <p className={styles.block_182}>on our way to Naivasha.</p>
                <p className={styles.block_158}>
                  <span className={styles.calibre2}>
                    Incorrect: Would like to come with us? _We are
                  </span>
                </p>
                <p className={styles.block_183}>on our way to Naivasha.</p>
                <p className={styles.block_184}>
                  <span className={styles.text_2}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>Correct: Are you coming?</p>
                <p className={styles.block_158}>Incorrect: Are you coming ?</p>
                <p className={styles.block_149}>
                  Correct: Do you live in Nairobi?
                </p>
                <p className={styles.block_158}>
                  Incorrect: Do you live in Nairobi ?
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: Uasin Gishu, Trans-Nzoia and Nakuru
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.calibre2}>
                    are the top three maize producing counties in
                  </span>
                </p>
                <p className={styles.block_186}>Kenya.</p>
                <p className={styles.block_187}>
                  <span className={styles.calibre2}>
                    Incorrect: Uasin Gishu , Trans-Nzoia and Nakuru
                  </span>
                </p>
                <p className={styles.block_188}>
                  <span className={styles.calibre2}>
                    are the top three maize producing counties in
                  </span>
                </p>
                <p className={styles.block_161}>Kenya.</p>
                <p className={styles.block_189}>
                  <span className={styles.text_2}>
                    For quotation marks and similar punctuation, put a space
                    before the opening{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation, but not necessarily after the closing
                    punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
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
