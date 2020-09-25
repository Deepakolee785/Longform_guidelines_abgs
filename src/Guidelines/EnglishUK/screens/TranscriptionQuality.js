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
            <PageContentHeader currentPage="Longform EnglishUK" />
            <div className="content text">
              {' '}
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_143}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_144}>
                  <span className={styles.calibre1}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items as "complete".
                  </span>
                </p>
                <p className={styles.block_145}>
                  Correct: Look me up on Facebook.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Look me up on Facebok.
                </p>
                <p className={styles.block_91}>Correct: That's really weird.</p>
                <p className={styles.block_90}>
                  Incorrect: That's really wierd.
                </p>
                <p className={styles.block_146}>
                  Use the proper capitalisation for standard words that require
                  it.
                </p>
                <p className={styles.block_147}>Correct: She is Australian.</p>
                <p className={styles.block_148}>
                  Incorrect: She is australian.
                </p>
                <p className={styles.block_139}>
                  Correct: That is a tabby cat.
                </p>
                <p className={styles.block_148}>
                  Incorrect: That is a Tabby cat.
                </p>
                <p className={styles.block_139}>Correct: Navigate home.</p>
                <p className={styles.block_90}>Incorrect: Navigate Home.</p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_150}>
                  <span className={styles.calibre1}>
                    A context error occurs when a real word is used incorrectly
                    or when the incorrect form of a word is used. This includes
                    homophones and punctuation, among other things.
                  </span>
                </p>
                <p className={styles.block_89}>Correct: I ate apples.</p>
                <p className={styles.block_148}>Incorrect: I eight apples.</p>
                <p className={styles.block_139}>
                  Correct: your favourite movie
                </p>
                <p className={styles.block_148}>
                  Incorrect: you're favourite movie
                </p>
                <p className={styles.block_139}>
                  Correct: Whose ugly jumper is that?
                </p>
                <p className={styles.block_148}>
                  Incorrect: Who's ugly jumper is that?
                </p>
                <p className={styles.block_139}>
                  Correct: You're my best friend.
                </p>
                <p className={styles.block_90}>
                  Incorrect: You re my best friend.
                </p>
                <p className={styles.block_91}>
                  Correct: Don't judge a book by its cover.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Don't judge a book by it's cover.
                </p>
                <p className={styles.block_151}>
                  <span className={styles.calibre1}>
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone disambiguation. Look up words if you
                    are unsure.
                  </span>
                </p>
                <p className={styles.block_145}>Correct: He went over there.</p>
                <p className={styles.block_148}>
                  Incorrect: He went over their.
                </p>
                <p className={styles.block_152}>
                  <span className={styles.calibre2}>
                    Correct: Have you seen the polar bear{' '}
                  </span>
                </p>
                <p className={styles.block_153}>exhibition?</p>
                <p className={styles.block_148}>
                  Incorrect: the polar bare exhibition
                </p>
                <p className={styles.block_139}>
                  Correct: I have four tablets.
                </p>
                <p className={styles.block_148}>
                  Incorrect: I have four tablet.
                </p>
                <p className={styles.block_154}>
                  <span className={styles.calibre1}>
                    Do not correct speaker's grammar if they intentionally say
                    something, even if what they say does not follow the
                    standard grammatical rules of the transcription language.
                  </span>
                </p>
                <p className={styles.block_155}>Correct: She isn't cool.</p>
                <p className={styles.block_156}>Incorrect: She ain't cool.</p>
                <p className={styles.block_157}>Correct: She ain't cool.</p>
                <p className={styles.block_158}>Incorrect: She isn't cool.</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>she isn't cool </span>
                  <span className={styles.text_19}>" Example audio: " </span>
                  <span className={styles.text_20}>she ain't cool </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_161}>
                  <span className={styles.calibre1}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the speaker. Avoid putting words
                    in the speaker's mouth. However, do transcribe implied times
                    and units of currency.
                  </span>
                </p>
                <p className={styles.block_162}>
                  <span className={styles.text_21}>
                    Correct: I want to go see X-Men movie.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Do not add the omitted article "the".
                    </span>
                  </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.calibre2}>
                    Correct: £10.50 is way too much for a cinema ticket.
                  </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      ten fifty is way too much for a cinema ticket
                    </span>
                  </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_165}>
                  <span className={styles.text_21}>
                    Correct: Set alarm for 6:50.{' '}
                  </span>
                  <span className={styles.text_23}>Example audio: " </span>
                  <span className={styles.text_24}>
                    set alarm for six fifty{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_166}>
                  <span className={styles.calibre1}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For interjections and non-speech
                    vocalisations, refer to Agreed Spelling &gt; Interjections
                    and Difficult Utterances &gt; Hesitations and Truncations.
                  </span>
                </p>
                <p className={styles.block_89}>
                  Correct: YouTube YouTube YouTube
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: How much wood would a woodchuck{' '}
                  </span>
                </p>
                <p className={styles.block_167}>chuck chuck?</p>
                <p className={styles.block_168}>
                  <span className={styles.calibre2}>
                    Correct: How many raspberries blueberries are there?
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_170}>
                  <span className={styles.calibre2}>
                    Explanation: Speaker clearly corrected themselves after
                    "raspberries".
                  </span>
                </p>
                <p className={styles.block_171}>
                  <span className={styles.calibre1}>
                    A substitution error occurs when another standard word is
                    transcribed instead of what was meant by the speaker. If
                    what the speaker said falls into another category (Context
                    Error, Proper Name, Media Title, etc.), see the relevant
                    section.
                  </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_21}>
                    Correct: Take me to Pizza Hut.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Take me to Domino's.{' '}
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_174}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>take me to pizza hut </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_175}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_176}>
                  <span className={styles.calibre2}>
                    Correct: What is the highest mountain in Europe?
                  </span>
                </p>
                <p className={styles.block_177}>
                  <span className={styles.calibre2}>
                    Incorrect: What is the highest _mountain in
                  </span>
                </p>
                <p className={styles.block_178}>Europe?</p>
                <p className={styles.block_91}>
                  Correct: I think so. Let's just try.
                </p>
                <p className={styles.block_90}>
                  Incorrect: I think so. _Let's just try.
                </p>
                <p className={styles.block_179}>
                  <span className={styles.calibre1}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the punctuation.
                  </span>
                </p>
                <p className={styles.block_89}>Correct: Are you coming?</p>
                <p className={styles.block_148}>Incorrect: Are you coming ?</p>
                <p className={styles.block_139}>Correct: Shut up!</p>
                <p className={styles.block_148}>Incorrect: Shut up !</p>
                <p className={styles.block_139}>
                  Correct: Hello, this is Dr. Smith.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Hello , this is Dr . Smith .
                </p>
                <p className={styles.block_180}>
                  <span className={styles.calibre1}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.
                  </span>
                </p>
                <p className={styles.block_181}>
                  Correct: Antonio said, "I love you."
                </p>
                <p className={styles.block_148}>
                  Incorrect: Antonio said, " I love you. "
                </p>
                <p className={styles.block_152}>
                  Correct: Translate "dog" into Japanese.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Translate "dog"into Japanese.
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
