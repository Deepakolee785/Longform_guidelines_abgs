import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
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
              <p class={'large-heading'}>Difficult utterances</p>
              <p class={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <p class={'heading'}>Skipping a prompt</p>

                <p class={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>

                <p class={'text'}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>
                    &#9679;&nbsp;No Audio: The audio doesn't load.
                  </div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>
                    &#9679;&nbsp;No Sound: The waveform indicates there is audio
                    but I can't hear anything.
                  </div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>
                    &#9679;&nbsp;Other Locale: All of the speech is in a
                    different language.
                  </div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>
                    &#9679;&nbsp;Silent Audio: The entire utterance is silent
                  </div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>
                    &#9679;&nbsp;Noisy Audio: The entire utterance is too noisy.
                  </div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>
                    &#9679;&nbsp;Other: Other reason (Please explain).
                  </div>
                </div>

                <p class={styles.block_270}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p class={'heading'}>Hesitations and truncations</p>

                <p class={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>

                <p class={styles.block_273}>
                  <span class={styles.text_1}>C</span>
                  <span class={styles.text_1}>ORRECT</span>
                  <span class={styles.text_1}>: </span>
                  <span class={styles.text_2}>झि ठू लोमान्छे</span>
                </p>
                <p class={styles.block_145}>&nbsp;</p>
                <p class={styles.block_274}>&nbsp;</p>
                <p class={styles.block_230}>
                  <span class={styles.text_}>E</span>
                  <span class={styles.text_15}>XAMPLE AUDIO</span>
                  <span class={styles.text_}>: "</span>
                </p>
                <p class={styles.block_145}>&nbsp;</p>
                <p class={styles.block_13}>&nbsp;</p>
                <p class={styles.block_19}>
                  <span class={styles.text_20}>झ</span>
                  <span class={styles.text_24}>-</span>
                  <span class={styles.text_20}> झि ठूलोमान्छे</span>
                  <span class={styles.text_3}>"</span>
                </p>

                <p class={styles.block_19}>&nbsp;</p>
                <p class={styles.block_20}>&nbsp;</p>
                <p class={styles.block_273}>
                  <span class={styles.text_1}>C</span>
                  <span class={styles.text_1}>ORRECT</span>
                  <span class={styles.text_1}>: </span>
                  <span class={styles.text_2}>निस्तार निस्तारैजािू</span>
                </p>

                <p class={styles.block_230}>
                  <span class={styles.text_}>E</span>
                  <span class={styles.text_15}>XAMPLE AUDIO</span>
                  <span class={styles.text_}>: "</span>
                </p>
                <p class={styles.block_145}>&nbsp;</p>

                <p class={styles.block_19}>
                  <span class={styles.text_20}>निस्तार</span>
                  <span class={styles.text_24}>-</span>
                  <span class={styles.text_20}> निस्तारैजािू</span>
                  <span class={styles.text_3}>"</span>
                </p>

                <p class={'text'}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p class={styles.block_121}>&nbsp;</p>
                <p class={styles.block_276}>
                  <span class={styles.text_5}>C</span>
                  <span class={styles.text_5}>ORRECT</span>
                  <span class={styles.text_5}>: </span>
                  <span class={styles.text_6}>म निराटिगरमा िस्छु।</span>
                  <span class={styles.text_7}>
                    <span class={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span class={styles.text_1}>E</span>
                  <span class={styles.text_1}>XAMPLE AUDIO</span>
                  <span class={styles.text_1}>: " </span>
                  <span class={styles.text_10}>म निराटिगमा िस्छु</span>
                  <span class={styles.text_1}>"</span>
                </p>

                <p class={styles.block_277}>
                  <span class={styles.text_1}>E</span>
                  <span class={styles.text_1}>XPLANATION</span>
                  <span class={styles.text_1}>: Final "</span>
                  <span class={styles.text_2}>र</span>
                  <span class={styles.text_1}>" was truncated.</span>
                </p>

                <p class={styles.block_276}>
                  <span class={styles.text_5}>C</span>
                  <span class={styles.text_5}>ORRECT</span>
                  <span class={styles.text_5}>: </span>
                  <span class={styles.text_6}>टेिलमाभएको िटुकोर</span>
                  <span class={styles.text_7}>
                    <span class={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span class={styles.text_1}>E</span>
                  <span class={styles.text_1}>XAMPLE AUDIO</span>
                  <span class={styles.text_1}>: " </span>
                  <span class={styles.text_10}>टेिलमाभएको िटुकोर कटौ</span>
                  <span class={styles.text_19}>-</span>
                  <span class={styles.text_1}> "</span>
                </p>
                <p class={styles.block_13}>&nbsp;</p>
                <p class={styles.block_278}>
                  <span class={styles.text_}>E</span>
                  <span class={styles.text_15}>XPLANATION</span>
                  <span class={styles.text_}>
                    : Unclear whether the speaker would
                  </span>
                </p>

                <p class={styles.block_277}>
                  <span class={styles.text_3}>have said "</span>
                  <span class={styles.text_4}>कटौरो</span>
                  <span class={styles.text_3}>" or "</span>
                  <span class={styles.text_4}>कटौरी</span>
                  <span class={styles.text_3}>".</span>
                </p>

                <p class={styles.block_276}>
                  <span class={styles.text_5}>C</span>
                  <span class={styles.text_5}>ORRECT</span>
                  <span class={styles.text_5}>: </span>
                  <span class={styles.text_6}>इलामेलीसङ्गीत समारोह</span>
                  <span class={styles.text_7}>
                    <span class={styles.tab}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </span>
                  <span class={styles.text_1}>E</span>
                  <span class={styles.text_12}>XAMPLE AUDIO</span>
                  <span class={styles.text_1}>: " </span>
                  <span class={styles.text_19}>-</span>
                  <span class={styles.text_10}>लामेलीसङ्गीत समारोह</span>
                  <span class={styles.text_1}> "</span>
                </p>

                <p class={styles.block_277}>
                  <span class={styles.text_1}>E</span>
                  <span class={styles.text_1}>XPLANATION</span>
                  <span class={styles.text_1}>: Initial "</span>
                  <span class={styles.text_2}>इ</span>
                  <span class={styles.text_1}>" was cut off.</span>
                </p>

                <p class={'text'}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;um</div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;uh</div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;right</div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;you know</div>
                </div>
                <p class={styles.block_19}>&nbsp;</p>
                <div class={styles.calibre1}>
                  <div id="calibre_link-36" class={styles.block_81}>
                    &#9679;&nbsp;so
                  </div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;like</div>
                </div>

                <p class={styles.block_269}>&nbsp;</p>
                <p class={'text'}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p class={styles.block_281}>&nbsp;</p>
                <p class={styles.block_69}>
                  <span class={styles.text_}>C</span>
                  <span class={styles.text_}>ORRECT</span>
                  <span class={styles.text_}>
                    : I need to get a new um telephone.
                  </span>
                </p>

                <p class={styles.block_6}>&nbsp;</p>
                <p class={styles.block_69}>
                  <span class={styles.text_}>C</span>
                  <span class={styles.text_}>ORRECT</span>
                  <span class={styles.text_}>: Do you like it? Mhm.</span>
                </p>

                <p class={styles.block_10}>&nbsp;</p>
                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;ah</div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;er</div>
                </div>

                <div class={styles.calibre1}>
                  <div class={styles.block_83}>&#9679;&nbsp;mhm</div>
                </div>

                <p class={'text'}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p class={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p class={'heading'}>Foreign language</p>
              </div>
              <div id="accents">
                <p class={'heading'}>Accents</p>

                <p class={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p class={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-37" class={styles.block_20}>
                  &nbsp;
                </p>
                <table class={styles.table_}>
                  <tbody class={styles.calibre4}>
                    <tr class={styles.calibre5}>
                      <td class={styles.td_15}>
                        <p class={styles.block_111}>
                          <span class={styles.text_1}>C</span>
                          <span class={styles.text_1}>ORRECT</span>
                          <span class={styles.text_1}>: </span>
                          <span class={styles.text_2}>देशमानिकास गिुवपछव।</span>
                        </p>
                      </td>
                      <td class={styles.td_16}>
                        <p class={styles.block_282}>
                          <span class={styles.text_1}>E</span>
                          <span class={styles.text_1}>XPLANATION</span>
                          <span class={styles.text_1}>: Speaker said "</span>
                          <span class={styles.text_2}>डेस</span>
                          <span class={styles.text_1}>"instead of "</span>
                          <span class={styles.text_2}>देस</span>
                          <span class={styles.text_1}>",but it</span>
                        </p>
                      </td>
                    </tr>
                    <tr class={styles.calibre5}>
                      <td rowspan="2" class={styles.td_15}>
                        <p class={styles.block_113}>
                          <span class={styles.text_1}>I</span>
                          <span class={styles.text_1}>NCORRECT</span>
                          <span class={styles.text_1}>: </span>
                          <span class={styles.text_2}>डेसमानिकास गिुवपछव।</span>
                        </p>
                      </td>
                      <td class={styles.td_16}>
                        <p class={styles.block_283}>
                          should be spelled as standard.
                        </p>
                      </td>
                      <td class={styles.td_2}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr class={styles.calibre5}>
                      <td class={styles.td_16}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                      <td class={styles.td_2}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr class={styles.calibre5}>
                      <td class={styles.td_15}>
                        <p class={styles.block_111}>
                          <span class={styles.text_1}>C</span>
                          <span class={styles.text_1}>ORRECT</span>
                          <span class={styles.text_1}>: </span>
                          <span class={styles.text_2}>हामी यो काम गरौँ।</span>
                        </p>
                      </td>
                      <td class={styles.td_16}>
                        <p class={styles.block_282}>
                          <span class={styles.text_1}>E</span>
                          <span class={styles.text_1}>XPLANATION</span>
                          <span class={styles.text_1}>: Speaker said "</span>
                          <span class={styles.text_2}>गरम</span>
                          <span class={styles.text_1}>" with a dialectal</span>
                        </p>
                      </td>
                      <td class={styles.td_2}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr class={styles.calibre5}>
                      <td rowspan="2" class={styles.td_15}>
                        <p class={styles.block_113}>
                          <span class={styles.text_1}>I</span>
                          <span class={styles.text_1}>NCORRECT</span>
                          <span class={styles.text_1}>: </span>
                          <span class={styles.text_2}>हामी यो काम गरम।</span>
                        </p>
                      </td>
                      <td class={styles.td_16}>
                        <p class={styles.block_283}>
                          accent. Spell as standard.
                        </p>
                      </td>
                      <td class={styles.td_2}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                    <tr class={styles.calibre5}>
                      <td class={styles.td_16}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                      <td class={styles.td_2}>
                        <p class={styles.block_19}>&nbsp;</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class={styles.block_19}>&nbsp;</p>
                <p class={styles.block_19}>&nbsp;</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
