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
            <PageContentHeader currentPage="Longform Slovene" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_217}>Correct: šipkov čaj</p>
                <p className={styles.block_147}>Incorrect: čipkov čaj</p>
                <p className={styles.block_218}>Correct: opera</p>
                <p className={styles.block_219}>Incorrect: poera</p>
                <p className={styles.block_220}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_221}>
                  Correct: Za stike s prijatelji uporabljam
                </p>
                <p className={styles.block_222}>Facebook.</p>
                <p className={styles.block_223}>
                  Incorrect: Za stike s prijatelji uporabljam
                </p>
                <p className={styles.block_224}>Facebok.</p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_227}>
                  Correct: Deklica se je udarila ob rob mize.
                </p>
                <p className={styles.block_228}>
                  Incorrect: Deklica se je udarila ob rop mize.
                </p>
                <p className={styles.block_229}>
                  Correct: Na nebu je en velik bel oblak.
                </p>
                <p className={styles.block_230}>
                  Incorrect: Na nebu je en velik bev oblak.
                </p>
                <p className={styles.block_231}>Correct: Jutri me žal ne bo.</p>
                <p className={styles.block_232}>
                  Incorrect: Jutri me žal nebo.
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'hading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_4}>
                    Correct: Rad bi si ogledal X-Men.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    rad bi si ogledal x-men{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_236}>
                  Incorrect: Rad bi si ogledal film X-Men. Explanation: Do not
                  add the omitted noun "film".
                </p>
                <p className={styles.block_237}>
                  Correct: Ali si prebral Vojno in mir?
                </p>
                <p className={styles.block_238}>
                  Incorrect: Ali si prebral roman Vojna in mir?
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ali si prebral vojno in mir{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_240}>
                  Explanation: Do not add omitted "roman".
                </p>
                <p className={styles.block_241}>
                  Correct: 3.50 EUR je preveč za čokolado.
                </p>
                <p className={styles.block_242}>
                  Incorrect: 350 je preveč za čokolado.
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tri petdeset je preveč za{' '}
                  </span>
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_1}>čokolado </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_245}>
                  Explanation: Implied currency, add "EUR" even
                </p>
                <p className={styles.block_246}>though it is not spoken.</p>
                <p className={styles.block_247}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_4}>
                    Correct: Koliko robid malin raste tukaj.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_249}>
                  themselves after saying "robid".
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_252}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_253}>
                  Correct: Katera je najvišja stavba v Ljubljani?
                </p>
                <p className={styles.block_254}>
                  Incorrect: Katera je najvišja stavba v _Ljubljani?
                </p>
                <p className={styles.block_255}>
                  Correct: Mislim, da. Kar poskusimo.
                </p>
                <p className={styles.block_256}>
                  Incorrect: Mislim, da. _Kar poskusimo.
                </p>
                <p className={styles.block_257}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_258}>Correct: Prideš?</p>
                <p className={styles.block_259}>Incorrect: Prideš ?</p>
                <p className={styles.block_260}>
                  Correct: Pozdravljeni, tu dr. Novak.
                </p>
                <p className={styles.block_261}>
                  Incorrect: Pozdravljeni, tu dr . Novak.
                </p>
                <p className={styles.block_262}>
                  Correct: Pozdravljeni, iščem g. Novaka
                </p>
                <p className={styles.block_263}>
                  Incorrect: Pozdravljeni, iščem g . Novaka
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_8}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.{' '}
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
