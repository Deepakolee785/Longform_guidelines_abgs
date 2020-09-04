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
            <PageContentHeader currentPage="longform Telugu" />
            <div className="content text">
              <p className={styles.block_311}>Difficult utterances</p>
              <p className={styles.block_312}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.
              </p>
              <p className={styles.block_313}>Things to ignore</p>
              <p className={styles.block_314}>
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.
              </p>
              <p className={styles.block_315}>
                <span className={styles.text_10}>Correct: అ ా ? </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>అ హ ా </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_316}>
                <span className={styles.text_10}>Correct: రల అనుక ంట స . </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_13}>[ </span>
                <span className={styles.text_12}>ట ర ల క గట ఊ </span>
                <span className={styles.text_13}>] </span>
                <span className={styles.text_12}>రల </span>
              </p>
              <p className={styles.block_317}>
                <span className={styles.text_14}>అనుక ంట స </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_318}>
                <span className={styles.text_10}>Correct: అతను "ఆ " అ డ </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>ాడ అ అల ా </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_319}>Explanation: ఈ ఉ హరణల వక "అ "</p>
              <p className={styles.block_320}>అ లనుక డ కనుక మనం అ ాయ వలం</p>
              <p className={styles.block_321}>ఒక " " ట మ త .</p>
              <p className={styles.block_322}>
                <span className={styles.text_10}>
                  Correct: అత అంట ప ా ఆస ఉం .{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>అత అంట ప ా ఆస ఉం </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_323}>
                Explanation: "అంట " ప రక పద నప ట ావల
              </p>
              <p className={styles.block_324}>అన ందువలన ాయటం జ ం .</p>
              <p className={styles.block_325}>
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.
              </p>
              <p className={styles.block_326}>● um</p>
              <p className={styles.block_327}>● uh</p>
              <p className={styles.block_328}>● right</p>
              <p className={styles.block_329}>● you know</p>
              <p className={styles.block_327}>● so</p>
              <p className={styles.block_330}>● like</p>
              <p className={styles.block_331}>
                Hesitations truncations and repetitions
              </p>
              <p className={styles.block_332}>
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.
              </p>
              <p className={styles.block_333}>Correct: ద</p>
              <p className={styles.block_334}>Incorrect: ద</p>
              <p className={styles.block_335}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_16}>- </span>
                <span className={styles.text_14}>ద </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_336}>
                Explanation: " " స యం ా ఒక పదం ానందున ఆ
              </p>
              <p className={styles.block_337}>అసంద ా ాయకం .</p>
              <p className={styles.block_338}>
                <span className={styles.text_17}>Example </span>
                <span className={styles.text_18}>Correct: ద ద </span>
              </p>
              <p className={styles.block_339}>
                <span className={styles.text_15}>audio: " </span>
                <span className={styles.text_14}>ద </span>
                <span className={styles.text_16}>- </span>
                <span className={styles.text_14}>ద </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_340}>Incorrect: ద</p>
              <p className={styles.block_341}>
                Explanation: " ద " స త ా పదం ావటం
              </p>
              <p className={styles.block_342}>
                "-" ల "..." సహ ారం ల క ం ాయటం జ ం
              </p>
              <p className={styles.block_343}>
                If a speaker repeats part of the end of a sentence, add ending
                punctuation before the repeated phrase. Do not include ending
                punctuation after the repeated phrase (unless the repeated part
                is a complete sentence).
              </p>
              <p className={styles.block_344}>Correct: ను ఏ ? ను</p>
              <p className={styles.block_345}>Incorrect: ఏ ను ను?</p>
              <p className={styles.block_346}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_14}>ఏ ను ను </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_347}>Explanation: ఇక డ ను అన ప ాక ం</p>
              <p className={styles.block_348}>ానందున వర ప ర ామ ాడటం</p>
              <p className={styles.block_349}>జరగల దు.</p>
              <p className={styles.block_350}>
                If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word.
              </p>
              <p className={styles.block_351}>Correct: ఇల ద ాబ దు</p>
              <p className={styles.block_352}>Incorrect: ఇల ద ాబ -</p>
              <p className={styles.block_353}>Incorrect: ఇల</p>
              <p className={styles.block_354}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_14}>ఇల ద ాబ </span>
                <span className={styles.text_16}>- </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_355}>
                Explanation: వ "ఉ" ారం ం యటం జ నప ట
              </p>
              <p className={styles.block_356}>ప ప ాయటం జ ం .</p>
              <p className={styles.block_357}>
                <span className={styles.text_10}>Correct: ట ంప ర </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>ప ర </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_358}>
                Explanation: మ ందు "ట ం" అ రం ల క నప ట
              </p>
              <p className={styles.block_359}>
                అ వలం ఒ అ రం ావటం త ం పదం "ట ంప "
              </p>
              <p className={styles.block_360}>"ట ం" జ ం ాయటం జ ం .</p>
              <p className={styles.block_361}>
                If you are not sure what the word should be, do not transcribe
                the word at all. Do not put punctuation after words that have
                been cut off.
              </p>
              <p className={styles.block_362}>
                If a quotation is cut off in the middle, use an end quotation
                mark anyway.
              </p>
              <p className={styles.block_363}>
                <span className={styles.text_10}>
                  Correct: సుజ త ం , "మనం"{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>సుజ ాత ం మనం </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_364}>
                Explanation: సుజ త న మ ట మధ ల ం ార .
              </p>
              <p className={styles.block_365}>మ ట ప ా న దు ానప ట వ ల ట ష</p>
              <p className={styles.block_366}>మ ర ప ంచటం జ ం . "మనం స ా " అన</p>
              <p className={styles.block_367}>ప ాక ం ానందున ాక ం వర ామ హ ం</p>
              <p className={styles.block_368}>ట ల దు.</p>
              <p className={styles.block_369}>
                If a speaker repeats a word five times or less, transcribe each
                repetition (without fillers). But if a word is repeated more
                than five times, skip the prompt.
              </p>
              <p className={styles.block_370}>Correct: ను .</p>
              <p className={styles.block_371}>Incorrect: ను హ .</p>
              <p className={styles.block_372}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_14}>ను హ </span>
              </p>
              <p className={styles.block_373}>
                <span className={styles.text_11}>" </span>
                <span className={styles.text_19}>
                  <sub className={styles.calibre2}>
                    Explanation: వక " " అ ండ ార అన ందున
                  </sub>
                </span>
              </p>
              <p className={styles.block_374}>ండ ార ాయం . మధ ల ప రకం "హ "</p>
              <p className={styles.block_375}>ాయకం .</p>
              <p className={styles.block_376}>
                <span className={styles.text_20}>Correct: [skip] </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>హల హల హల హల హల హల </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_377}>
                Transcribe only numbers that you hear even if the speaker didn't
                finish saying the entire number.
              </p>
              <p className={styles.block_288}>Correct: ప సు త సంవత రం 2010</p>
              <p className={styles.block_378}>
                Incorrect: ప సు త సంంవత రం 2017
              </p>
              <p className={styles.block_379}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_14}>ప మ ణ ారం ండ ల ప </span>
              </p>
              <p className={styles.block_380}>
                <span className={styles.text_11}>" </span>
                <span className={styles.text_19}>
                  <sub className={styles.calibre2}>
                    Explanation: వక " ండ ల ప డ " అన ప ట
                  </sub>
                </span>
              </p>
              <p className={styles.block_381}>నుల వలం " ండ ల ప " వర న దు</p>
              <p className={styles.block_382}>అ ం , అందు "2017" బదుల ా ర న</p>
              <p className={styles.block_383}>"2010" మ త ాయం .</p>
              <p className={styles.block_384}>
                Background and foreground speech
              </p>
              <p className={styles.block_385}>
                Only transcribe foreground speech. A user's speech may go from
                the foreground to the background based on the volume of their
                speech and who they are speaking to.
              </p>
              <p className={styles.block_386}>
                <span className={styles.text_10}>Correct: ల ల </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>ల ల అంట ల అ ల ల </span>
              </p>
              <p className={styles.block_387}>
                <span className={styles.text_14}>త క త ం </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_388}>
                Explanation: " ల ల " అన పదం గట ా
              </p>
              <p className={styles.block_389}>ఉచ ంచబ ం . గ మ టల మంద ం ా బ</p>
              <p className={styles.block_390}>ండ ల వ ప టం జ ం . అందుక బ</p>
              <p className={styles.block_391}>ం మ టల ఇక డ ాయట దు.</p>
              <p className={styles.block_392}>Correct: అ ా ంల ట టల త క . మనం</p>
              <p className={styles.block_393}>అక ా ళ త ం?</p>
              <p className={styles.block_394}>
                Explanation: వక దట మ టల నుల ప టం
              </p>
              <p className={styles.block_395}>జ ం . ం ాక ం వ గట ా ప టం</p>
              <p className={styles.block_396}>క ాయటం జ ం .</p>
              <p className={styles.block_397}>
                If one person clearly speaks in the foreground and someone
                speaks in the background, transcribe the foreground speaker and
                ignore the rest.
              </p>
              <p className={styles.block_398}>
                <span className={styles.text_10}>Correct: అమ ావ </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>అమ ావ ాదు అ అం ల </span>
              </p>
              <p className={styles.block_399}>
                <span className={styles.text_14}>ఉం </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_400}>Explanation: ండవ వక బ ండ ల ఉ డ</p>
              <p className={styles.block_401}>అందుక అతను ల ఆ మ టల ాయల దు</p>
              <p className={styles.block_402}>
                If two people take turns speaking, are not speaking at the same
                time, and are both in the foreground at approximately the same
                volume, transcribe the speech of both speakers as different
                sentences. Separate different speakers' sentences with end
                punctuation.
              </p>
              <p className={styles.block_403}>
                <span className={styles.text_10}>Correct: వసు ా? వసు ను. </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>వసు ాా వసు ను </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_404}>
                Explanation: ఇద ర వక ల మ ందు ప నుం
              </p>
              <p className={styles.block_405}>
                మ ట నందు వలన ండ ా ా లను ాయటం జ ం .
              </p>
              <p className={styles.block_277}>ఇద వక ల మ టలను ామ ల ర యటం</p>
              <p className={styles.block_406}>జ ం .</p>
              <p className={styles.block_407}>
                <span className={styles.text_10}>
                  Correct: ఐ ం. ా క జ ా ా .{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>ఐ ం ా క జ ా ా </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_408}>
                Explanation: "ఐ " అన పదం ప ాక ం
              </p>
              <p className={styles.block_409}>
                ానప ట ఇద ర వక ల మ టలను ామ హ ం ర
              </p>
              <p className={styles.block_410}>యటం జ ం .</p>
              <p className={styles.block_411}>
                <span className={styles.text_10}>
                  Correct: బ ా ఉ ా? . అ బ వ ం !{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>బ ా ా ఉ ా అ బ వ ం </span>
              </p>
              <p className={styles.block_412}>
                <span className={styles.text_11}>" </span>
                <span className={styles.text_19}>
                  <sub className={styles.calibre2}>
                    Explanation: ఈ మ టల ఇద ర వక ల మధ స ష ం ా
                  </sub>
                </span>
              </p>
              <p className={styles.block_413}>
                జ న సం షణ. అందుక ఇద వక ల మ టల ా
              </p>
              <p className={styles.block_414}>ాట ామ ల ర యటం జ ం .</p>
              <p className={styles.block_415}>
                If one person clearly speaks in the foreground and someone
                interrupts at the same volume with a brief (less than a second)
                overlapping speech segment, transcribe the main speaker and
                ignore the rest.
              </p>
              <p className={styles.block_416}>Correct: అ మం మ క ? ను మ</p>
              <p className={styles.block_417}>చూ లనుక ంట ను.</p>
              <p className={styles.block_418}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_14}>అ మం మ క అవ ను </span>
              </p>
              <p className={styles.block_419}>
                <span className={styles.text_14}>ను మ చూ లనుక ంట ను </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_420}>
                Explanation: ం వక మధ ల అవ ను ల దట
              </p>
              <p className={styles.block_421}>వక మ టల అంత ాయం క ం డ . ం వక</p>
              <p className={styles.block_422}>మ టల ాయల దు.</p>
              <p className={styles.block_423}>
                Correct: రంగ పట ంప అంత ల దు క ? ఏ
              </p>
              <p className={styles.block_424}>ప ా ల దు క ? ఏ .</p>
              <p className={styles.block_425}>
                <span className={styles.text_15}>Example audio: " </span>
                <span className={styles.text_14}>
                  రంగ పట ంప అంత ల దు క ఏ ప ా ల దు క ల దు ఏ{' '}
                </span>
                <span className={styles.text_15}>" </span>
              </p>
              <p className={styles.block_426}>
                Explanation: ఒక వక అడ గ త ండ ా "రంగ పట ంప
              </p>
              <p className={styles.block_427}>
                ల దు క ? ఏ ప ా ల దు క ?" అ ం వక "ల దు"
              </p>
              <p className={styles.block_428}>ఓవ ల ార . అందుక ం వక "ల దు"</p>
              <p className={styles.block_429}>ాయల దు.</p>
              <p className={styles.block_430}>
                <span className={styles.text_10}>
                  Correct: అ ంట ? ను ఏ ఒకట ా ను.{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>అ ంట ఆగ ను ఏ ఒకట ా ను </span>
              </p>
              <p className={styles.block_431}>"</p>
              <p className={styles.block_432}>
                Explanation: ఒక వక "అ ంట ?" అ అడ గ త ండ ా ,
              </p>
              <p className={styles.block_433}>ఇం వక "ఆగ " ఓవ ల ాడ . ం వక</p>
              <p className={styles.block_434}>"ఆగ " ాయల దు.</p>
              <p className={styles.block_435}>
                If there are two or more people speaking, one talking to the
                device and the other not, transcribe only the speaker speaking
                to the device.
              </p>
              <p className={styles.block_436}>Skipping a prompt</p>
              <p className={styles.block_437}>
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.
              </p>
              <p className={styles.block_438}>
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.
              </p>
              <p className={styles.block_439}>
                ● No Audio: The audio doesn't load.
              </p>
              <p className={styles.block_440}>
                ● No Sound: The waveform indicates there is audio but I can't
                hear anything.
              </p>
              <p className={styles.block_441}>
                ● Other Locale: All of the speech is in a different language.
              </p>
              <p className={styles.block_442}>
                ● Silent Audio: The entire utterance is silent
              </p>
              <p className={styles.block_443}>
                ● Noisy Audio: The entire utterance is too noisy.
              </p>
              <p className={styles.block_444}>
                ● Other: Other reason (Please explain).
              </p>
              <p className={styles.block_445}>
                <span className={styles.text_4}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.{' '}
                </span>
              </p>
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
