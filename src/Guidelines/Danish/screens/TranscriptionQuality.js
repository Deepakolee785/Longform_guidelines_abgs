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
            <PageContentHeader currentPage="Longform Danish" />
            <div className="content text">
              <p className={'heading'}>Transcription quality</p>
              <p className={styles.block_137}>
                <span className={styles.text_17}>
                  Comply with the standard rules of the writing system.
                </span>
                <span className={styles.text_18}> </span>
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_86}>
                  <span className={styles.text_17}>
                    A typo results in the unintentional creation of a non-word.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_139}>
                  <span className={styles.text_2}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as "complete".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Find mig på Facebook.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Find mig på Facebok.
                </p>
                <p className={styles.block_140}>
                  Correct: Han er meget disciplineret.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Han er meget diciplineret.
                </p>
                <p className={styles.block_141}>
                  <span className={styles.text_17}>
                    Use the proper capitalization for standard words that
                    require it.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>
                  Correct: Han er fra Australien.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Han er fra australien.
                </p>
                <p className={styles.block_93}>
                  Correct: Man kan tydeligt se planeten Mars.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Man kan tydeligt se planeten mars.
                </p>
                <p className={styles.block_94}>
                  Correct: Hun spiser wienerbrød.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Hun spiser Wienerbrød.
                </p>
                <p className={styles.block_94}>Correct: Navigér hjem.</p>
                <p className={styles.block_143}>Incorrect: Navigér Hjem.</p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_145}>
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
                <p className={styles.block_146}>
                  Correct: Han kan ikke høre forskel.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Han kan ikke hører forskel.
                </p>
                <p className={styles.block_147}>
                  <span className={styles.text_23}>
                    Correct: De klarer sig godt.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: De klare sig godt.{' '}
                  </span>
                </p>
                <p className={styles.block_148}>
                  <span className={styles.text_23}>
                    Correct: Han har store planer.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Han har stor planer.{' '}
                  </span>
                </p>
                <p className={styles.block_148}>
                  <span className={styles.text_23}>
                    Correct: Det er Peters jakke.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Det er Peter's jakke.{' '}
                  </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Explanation: This use of apostrophes is an anglicism and
                    should only occur in English proper names such as
                    "McDonald's" or in genitive cases of names ending in s, x or
                    z.
                  </span>
                </p>
                <p className={styles.block_150}>
                  <span className={styles.text_2}>
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    disambiguation. Look up words if you are unsure.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Det er godt vejr i dag.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Det er godt hver i dag.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Det er godt værd i dag.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Det er godt vær i dag.
                </p>
                <p className={styles.block_94}>Correct: De bruges til jul.</p>
                <p className={styles.block_92}>
                  Incorrect: De bruges til hjul.
                </p>
                <p className={styles.block_151}>
                  <span className={styles.text_2}>
                    Do not correct speaker's grammar if they intentionally say
                    something, even if what they{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    say does not follow the standard grammatical rules of the
                    transcription language.
                  </span>
                </p>
                <p className={styles.block_152}>Correct: Mig kan selv.</p>
                <p className={styles.block_153}>Incorrect: Jeg kan selv.</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_155}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>mig kan selv </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_156}>
                  Explanation: child language or joking use.
                </p>
                <p className={styles.block_157}>
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
                <p className={styles.block_158}>
                  <span className={styles.text_23}>
                    Correct: Vil du række mig ske?{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: Do not add the omitted article "en".
                  </span>
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_23}>
                    Correct: 45 kr. for en kop kaffe er alt for dyrt.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      femogfyrre for en kop kaffe er alt for dyrt
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_23}>
                    Correct: Sæt alarmen til 06:50.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    sæt alarmen til ti i syv{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_161}>
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
                <p className={styles.block_91}>
                  Correct: YouTube YouTube YouTube
                </p>
                <p className={styles.block_94}>Correct: Far, får får får?</p>
                <p className={styles.block_162}>
                  <span className={styles.text_23}>
                    Correct: Hvor mange hindbær blåbær er der?{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Speaker clearly corrected themselves after
                      "hindbær".
                    </span>
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_164}>
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
                <p className={styles.block_165}>
                  Correct: Jeg skal bruge en kasse.
                </p>
                <p className={styles.block_166}>
                  Incorrect: Jeg skal bruge en masse.
                </p>
                <p className={styles.block_167}>
                  <span className={styles.text_23}>
                    Correct: Hvor den nærmeste Burger King?{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Hvor er den nærmeste McDonald's?
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_169}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    jeg skal bruge en kasse{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      hvor er den nærmeste burger king{' '}
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_171}>
                  <span className={styles.text_28}>
                    Use only one space between words and sentences.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Hvad er Danmarks højeste punkt?{' '}
                  </span>
                </p>
                <p className={styles.block_172}>
                  Incorrect: Hvad er Danmarks højeste _punkt?
                </p>
                <p className={styles.block_94}>
                  Correct: Det tror jeg. Lad os prøve.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Det tror jeg. _Lad os prøve.
                </p>
                <p className={styles.block_173}>
                  <span className={styles.text_28}>
                    Do not use spacing for compound words.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Han vil være filminstruktør.{' '}
                  </span>
                </p>
                <p className={styles.block_174}>
                  Incorrect: Han vil være film instruktør.
                </p>
                <p className={styles.block_140}>Correct: Hun elsker modetøj.</p>
                <p className={styles.block_92}>
                  Incorrect: Hun elsker mode tøj.
                </p>
                <p className={styles.block_175}>
                  <span className={styles.text_2}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Vil du med i teatret?
                </p>
                <p className={styles.block_92}>
                  Incorrect: Vil du med i teatret ?
                </p>
                <p className={styles.block_93}>Correct: Ti stille!</p>
                <p className={styles.block_92}>Incorrect: Ti stille !</p>
                <p className={styles.block_94}>
                  Correct: Hallo, det er dr. Petersen.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Hallo , det er dr . Petersen .
                </p>
                <p className={styles.block_176}>
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
                <p className={styles.block_146}>
                  Correct: Anton sagde: "Vi tager på skovtur."
                </p>
                <p className={styles.block_143}>
                  Incorrect: Anton sagde: " Vi tager på skovtur. "
                </p>
                <p className={styles.block_94}>
                  Correct: Oversæt "hund" til japansk.
                </p>
                <p className={styles.block_143}>
                  Incorrect: Oversæt "hund"til japansk.
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
