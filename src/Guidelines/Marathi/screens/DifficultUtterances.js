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
            <PageContentHeader currentPage="Longform Marathi" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_428}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_429}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_430}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_431}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_432}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_433}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_434}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_4}>
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or synthesized, transcribe all of it.{' '}
                  </span>
                </p>
              </div>
              <p className={'heading'}>Things to ignore</p>
              <p className={styles.block_321}>
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.
              </p>
              <p className={styles.block_322}>
                <span className={styles.text_10}>
                  Correct: तो तजा प क आह का?{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>तो उच तजा प क आह का </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_323}>
                <span className={styles.text_10}>
                  Correct: त असा णतोस तर ठ क आह.{' '}
                </span>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_12}>
                  [sigh or loud breath] त असा{' '}
                </span>
              </p>
              <p className={styles.block_324}>
                <span className={styles.text_9}>णतोस तर ठ क आह </span>
                <span className={styles.text_8}>" </span>
              </p>
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
              <div id="hesitations-and-truncations">
                <p className={'heading'}>
                  Hesitations truncations and repetitions
                </p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_333}>Correct: काय करतोस?</p>
                <p className={styles.block_334}>Incorrect: क- काय करतोस</p>
                <p className={styles.block_335}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>क- काय करतोस </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_336}>
                  Explanation: Since क is not a word on its own, do
                </p>
                <p className={styles.block_337}>not transcribe it.</p>
                <p className={styles.block_338}>Correct: सम सम ात जात आहो</p>
                <p className={styles.block_339}>Incorrect: सम ात जात आहो</p>
                <p className={styles.block_340}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    सम [pause] सम ात जात आहो{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_341}>
                  Explanation: Since "सम" is a word on its own, it is
                </p>
                <p className={styles.block_342}>
                  transcribed without "-" or "..."
                </p>
                <p className={styles.block_343}>
                  If a speaker repeats part of the end of a sentence, add ending
                  punctuation before the repeated phrase. Do not include ending
                  punctuation after the repeated phrase (unless the repeated
                  part is a complete sentence).
                </p>
                <p className={styles.block_344}>Correct: राम घरी आला का? राम</p>
                <p className={styles.block_345}>
                  Incorrect: राम घरी आला का राम?
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>राम घरी आला का राम </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_347}>
                  Explanation: The ending punctuation is
                </p>
                <p className={styles.block_348}>
                  transcribed before the repeated phrase "राम ".
                </p>
                <p className={styles.block_349}>
                  Note, "राम " by itself is not a complete sentence
                </p>
                <p className={styles.block_350}>
                  so there is no punctuation after it.
                </p>
                <p className={styles.block_351}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you know what the word is supposed to be,
                  transcribe the entire word.
                </p>
                <p className={styles.block_352}>Correct: तच घर कोकणात आह</p>
                <p className={styles.block_353}>Incorrect: तच घर कोकण-</p>
                <p className={styles.block_354}>Incorrect: तच घर कोक</p>
                <p className={styles.block_355}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>तच घर कोकणात </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_356}>
                  Explanation: "आह" चा उ ार नाही झाला कारण तो
                </p>
                <p className={styles.block_357}>
                  truncated होता. पण श ाि ब कला, आह ला
                </p>
                <p className={styles.block_358}>सोडन.</p>
                <p className={styles.block_359}>
                  <span className={styles.text_10}>Correct: ि कट चा गम </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>कट चा गम </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_360}>
                  Explanation: Initial "ि " was cut off, but since it is
                </p>
                <p className={styles.block_361}>
                  only one letter, the whole word, "ि कट" is
                </p>
                <p className={styles.block_362}>
                  transcribed with the missing "ि " added.
                </p>
                <p className={styles.block_363}>
                  If you are not sure what the word should be, do not transcribe
                  the word at all. Do not put punctuation after words that have
                  been cut off.
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_10}>
                    Correct: मी राहतो तम ा{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>मी राहतो तम ा स- </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_365}>
                  Explanation: There are multiple possible words
                </p>
                <p className={styles.block_366}>
                  the last word could be and there is no way to
                </p>
                <p className={styles.block_367}>
                  tell what the speaker meant to say for it. In this
                </p>
                <p className={styles.block_368}>
                  case, do not transcribe the word and do not
                </p>
                <p className={styles.block_369}>include ending punctuation.</p>
                <p className={styles.block_370}>
                  If a quotation is cut off in the middle, use an end quotation
                  mark anyway.
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_10}>
                    Correct: तो णल, "मी उ ा"{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>तो णल मी उ ा </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_372}>
                  Explanation: The speaker's quotation was cut off.
                </p>
                <p className={styles.block_373}>
                  Even though the "मी उ ा" isn't a complete
                </p>
                <p className={styles.block_374}>
                  sentence, it is still transcribed with an ending
                </p>
                <p className={styles.block_375}>quotation mark.</p>
                <p className={styles.block_376}>
                  If a speaker repeats a word five times or less, transcribe
                  each repetition (without fillers). But if a word is repeated
                  more than five times, skip the prompt.
                </p>
                <p className={styles.block_377}>
                  Correct: मला एक साडी साडी ायची आह.
                </p>
                <p className={styles.block_378}>
                  Incorrect: मला एक साडी व साडी ायची आह.
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    मला एक साडी व साडी ायची{' '}
                  </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_9}>आह </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_381}>
                  Explanation: Since speaker said "साडी" twice,
                </p>
                <p className={styles.block_382}>
                  transcribe it twice. Do not include the filler "व".
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_13}>Correct: [skip] </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>हलो हलो हलो हलो हलो </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_384}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_14}>Example </span>
                  <span className={styles.text_15}>
                    Correct: 568 नारायण पठ टीळकवाडा पण तीन.{' '}
                  </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_11}>audio: " </span>
                  <span className={styles.text_12}>
                    पाचश साठ आठ नारायण पठ टीळकवाडा पण तीन-{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                  <span className={styles.text_16}>
                    Incorrect: 568 नारायण पठ टीळकवाडा पण 30.{' '}
                  </span>
                </p>
                <p className={styles.block_387}>
                  Explanation: The speaker meant to say "पाचश
                </p>
                <p className={styles.block_387}>
                  साठ आठ नारायण पठ टीळकवाडा पण तीस" but the
                </p>
                <p className={styles.block_387}>
                  microphone only recorded "पाचश साठ आठ
                </p>
                <p className={styles.block_387}>
                  नारायण पठ टीळकवाडा पण तीन-" . Even if you
                </p>
                <p className={styles.block_388}>
                  know based on context it should be "30" and not
                </p>
                <p className={styles.block_388}>
                  "3", transcribe the number 3 and not 30 since that
                </p>
                <p className={styles.block_388}>
                  is what you hear. Since 3 is less than 10, it should
                </p>
                <p className={styles.block_387}>be spelled out as "तीन"</p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
                <p className={'text'}>
                  Only transcribe foreground speech. A user's speech may go from
                  the foreground to the background based on the volume of their
                  speech and who they are speaking to.
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_10}>Correct: िपरा ास </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>
                    िपरा ास बोला आ ण त िपरा ास{' '}
                  </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_9}>आपोआप शअरच करणार </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_387}>
                  Explanation: The word "िपरा ास" is said loudly in
                </p>
                <p className={styles.block_388}>
                  the foreground. The rest of the speech is quiet
                </p>
                <p className={styles.block_388}>
                  and in the background so it is not transcribed.
                </p>
                <p className={styles.block_393}>
                  Correct: फा ड चतळ शॉप इन पण. ततच चाललो
                </p>
                <p className={styles.block_393}>आहोत ना?</p>
                <p className={styles.block_392}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    फा ड चतळ शॉप इन पण ततच चाललो आहोत ना{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_388}>
                  Explanation: The speaker's first sentence is
                </p>
                <p className={styles.block_388}>
                  spoken to the phone. The second sentence is
                </p>
                <p className={styles.block_388}>
                  spoken to another person, but it is still loud, so
                </p>
                <p className={styles.block_388}>it is also transcribed.</p>
                <p className={styles.block_394}>
                  If one person clearly speaks in the foreground and someone
                  speaks in the background, transcribe the foreground speaker
                  and ignore the rest.
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_10}>Correct: िडरकशन मबई </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>
                    [speaker one] िडरकशन मबई{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>[speaker two] इन महारा </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_397}>
                  Explanation: The second speaker is in the
                </p>
                <p className={styles.block_398}>
                  background, so only transcribe the first
                </p>
                <p className={styles.block_399}>speaker.</p>
                <p className={styles.block_400}>
                  If two people take turns speaking, are not speaking at the
                  same time, and are both in the foreground at approximately the
                  same volume, transcribe the speech of both speakers as
                  different sentences. Separate different speakers' sentences
                  with end punctuation.
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_10}>
                    Correct: त यतोस का? हो.{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>
                    [speaker one] त यतोस का{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>[speaker two] हो </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_403}>
                  Explanation: Both speakers are in the
                </p>
                <p className={styles.block_404}>
                  foreground so both sentences are transcribed.
                </p>
                <p className={styles.block_405}>
                  The speech of the two speakers is separated by
                </p>
                <p className={styles.block_406}>punctuation.</p>
                <p className={styles.block_407}>
                  <span className={styles.text_10}>
                    Correct: इस म. पण मला िप झा हवा.{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>इस म पण मला िप झा हवा </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_408}>
                  Explanation: Even though "इस म" is not a
                </p>
                <p className={styles.block_409}>
                  complete sentence, a period is used in order to
                </p>
                <p className={styles.block_410}>
                  separate the speech of the two speakers.
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_10}>
                    Correct: तला बारा वाटाय? हो. बर ठ क आह.{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>
                    [speaker one] तला बारा वाटाय{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>[speaker two] हो </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    [speaker one] बर ठ क आह{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_414}>
                  Explanation: The speech alternates between
                </p>
                <p className={styles.block_415}>
                  two speakers in the foreground. The speech of
                </p>
                <p className={styles.block_416}>
                  both speakers is transcribed, separated by
                </p>
                <p className={styles.block_406}>punctuation.</p>
                <p className={styles.block_417}>
                  If one person clearly speaks in the foreground and someone
                  interrupts at the same volume with a brief (less than a
                  second) overlapping speech segment, transcribe the main
                  speaker and ignore the rest.
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_10}>
                    Correct: त यतोस का? मला एक साडी ायची आह.{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>
                    [speaker one] त यतोस का{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>[speaker two] हो </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    [speaker one] मला एक साडी{' '}
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_9}>ायची आह </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_421}>
                  Explanation: The second speaker interrupts with
                </p>
                <p className={styles.block_422}>
                  a brief "हो" (less than a second) while the first
                </p>
                <p className={styles.block_423}>
                  speaker is still speaking. The short "हो" from the
                </p>
                <p className={styles.block_424}>
                  second speaker is not transcribed.
                </p>
                <p className={styles.block_425}>
                  If there are two or more people speaking, one talking to the
                  device and the other not, transcribe only the speaker speaking
                  to the device.
                </p>
              </div>
              <div id="foreign-language">
                <span className={'heading'}>Foreign language </span>
                <p className={styles.block_226}>
                  Do not skip audio that contains foreign words. First indicate
                  whether it contains English or another language, then
                  transcribe the utterance according to the following rules.
                </p>
                <p className={styles.block_227}>English</p>
                <p className={styles.block_228}>
                  Please transliterate all English media titles.
                </p>
                <p className={styles.block_229}>
                  Correct: मला गम ऑफ ो बघायला आवडत
                </p>
                <p className={styles.block_230}>
                  Incorrect: मला Game of Thrones बघायला आवडत.
                </p>
                <p className={styles.block_231}>
                  Explanation: "Game of Thrones" is an English
                </p>
                <p className={styles.block_232}>
                  TV show title, so transliterate the name.
                </p>
                <p className={styles.block_233}>
                  Correct: ड िपट हा च गला अ भन ी आह
                </p>
                <p className={styles.block_234}>
                  Incorrect: Brad Pitt हा च गला अ भन ी आह.
                </p>
                <p className={styles.block_235}>
                  Explanation: "Brad Pitt" is an American
                </p>
                <p className={styles.block_236}>
                  celebrity, so transliterate his name.
                </p>
                <p className={styles.block_237}>
                  Correct: शप ऑफ य ह नवीन गाण आह.
                </p>
                <p className={styles.block_238}>
                  Incorrect: Shape of You ह नवीन गाण आह.
                </p>
                <p className={styles.block_239}>
                  Explanation: "Shape of You" is an English song,
                </p>
                <p className={styles.block_240}>so transliterate the name.</p>
                <p className={styles.block_241}>Keep URLs in Latin script.</p>
                <p className={styles.block_242}>Correct: www.google.com.in</p>
                <p className={styles.block_243}>
                  Always transcribe the phrase "Ok Google" in Latin script, as
                  well as related phrases like "Ok Google Now", "Ok Glass" and
                  "Hey Google". For all other cases, transliterate the words
                  "okay" and "hey" into Devanagari.
                </p>
                <p className={styles.block_244}>Correct: Ok Google</p>
                <p className={styles.block_245}>Incorrect: Okay Google.</p>
                <p className={styles.block_246}>
                  Explanation: "Ok" appears before "Google", it is
                </p>
                <p className={styles.block_247}>spelled "Ok" and not "okay".</p>
                <p className={styles.block_248}>
                  <span className={styles.text_6}>Correct: Ok Google Now </span>
                  <span className={styles.text_7}>
                    Explanation: The phrase Ok Google Now is a{' '}
                  </span>
                </p>
                <p className={styles.block_249}>
                  derivation of "Ok Google" and must be
                </p>
                <p className={styles.block_250}>
                  transcribed exactly like this.
                </p>
                <p className={styles.block_251}>
                  Correct: Ok Google, नागपर म वातावरण कस
                </p>
                <p className={styles.block_252}>आह?</p>
                <p className={styles.block_253}>
                  Incorrect: ओकाय गगळ नागपर म वातावरण कस
                </p>
                <p className={styles.block_254}>आह?</p>
                <p className={styles.block_255}>
                  Explanation: The correct transcription includes
                </p>
                <p className={styles.block_256}>
                  a comma after the phrase "Ok Google" and
                </p>
                <p className={styles.block_257}>
                  does not transliterate "Ok Google" into
                </p>
                <p className={styles.block_258}>Devanagari.</p>
                <p className={styles.block_259}>Correct: ओकाय</p>
                <p className={styles.block_260}>Incorrect: Ok</p>
                <p className={styles.block_261}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>ओकाय </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_262}>
                  Explanation: If "okay" is said in any other
                </p>
                <p className={styles.block_263}>
                  context, it should be transliterated into
                </p>
                <p className={styles.block_264}>Devanagari.</p>
                <p className={styles.block_265}>
                  Transcribe English companies in English. Do not transliterate.
                </p>
                <p className={styles.block_266}>
                  Correct: याच कारण वत मानकालीन YouTube
                </p>
                <p className={styles.block_267}>समजन</p>
                <p className={styles.block_268}>
                  Incorrect: याच कारण वत मानकालीन यौतब समजन
                </p>
                <p className={styles.block_269}>
                  Explanation: "YouTube" is an English company,
                </p>
                <p className={styles.block_270}>
                  so transcribe it in English using Latin
                </p>
                <p className={styles.block_271}>characters.</p>
                <p className={styles.block_272}>
                  Below are some common company names that should be transcribed
                  in English with Latin characters
                </p>
                <p className={styles.block_273}>● Apple</p>
                <p className={styles.block_274}>● Facebook</p>
                <p className={styles.block_275}>● Instagram</p>
                <p className={styles.block_276}>● Netflix</p>
                <p className={styles.block_277}>● Skype</p>
                <p className={styles.block_278}>● Snapchat</p>
                <p className={styles.block_279}>● Twitter</p>
                <p className={styles.block_280}>● WhatsApp</p>
                <p className={styles.block_281}>● Yahoo</p>
                <p className={styles.block_282}>● YouTube</p>
                <p className={styles.block_283}>● Google</p>
                <p className={styles.block_284}>
                  Transliterate common English words into your language.
                </p>
                <p className={styles.block_285}>Correct: हलो</p>
                <p className={styles.block_286}>Incorrect: hello</p>
                <p className={styles.block_287}>
                  Explanation: Use Devanagari characters to
                </p>
                <p className={styles.block_288}>
                  transliterate common English words.
                </p>
                <p className={styles.block_289}>
                  If someone says an English texting initialism, abbreviation,
                  or acronym, transcribe it in English with lowercase letters.
                </p>
                <p className={styles.block_290}>Correct: jk, wtf, lol</p>
                <p className={styles.block_291}>Incorrect: JK, WTF, LOL</p>
                <p className={styles.block_292}>
                  If the speaker in the audio is speaking in English and says a
                  word in your language transliterate it to English.
                </p>
                <p className={styles.block_293}>
                  Correct: I need a recipe for masala cana sundal
                </p>
                <p className={styles.block_294}>
                  Incorrect: I need a recipe for मसाला चना स ल.
                </p>
                <p className={styles.block_295}>
                  Explanation: The speaker is speaking in English
                </p>
                <p className={styles.block_296}>
                  but says a Marathi word, "मसाला चना स ल"
                </p>
                <p className={styles.block_297}>
                  Transliterate the Marathi word into English, do
                </p>
                <p className={styles.block_298}>not use Devanagari.</p>
                <p className={styles.block_299}>Other foreign languages</p>
                <p className={styles.block_300}>
                  If you hear a foreign word (besides English) that is commonly
                  understood by speakers of your language, transcribe it in your
                  script.
                </p>
                <p className={styles.block_301}>Correct: बावा</p>
                <p className={styles.block_302}>Incorrect: બાવા</p>
                <p className={styles.block_303}>
                  Explanation: This is a very common Gujarati
                </p>
                <p className={styles.block_304}>
                  word that most Marathi speakers know. Even if
                </p>
                <p className={styles.block_305}>
                  you know Gujarati script, transliterate it into
                </p>
                <p className={styles.block_306}>Marathi.</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling according to the Oxford
                  English Marathi Dictionary.
                </p>
                <p className={styles.block_309}>Correct: पाणी</p>
                <p className={styles.block_310}>Incorrect: पानी</p>
                <p className={styles.block_311}>
                  Explanation: Speaker said "पानी", a non-standard
                </p>
                <p className={styles.block_312}>
                  variant of "पाणी", but it should be spelled as the
                </p>
                <p className={styles.block_313}>standard "पाणी".</p>
                <p className={styles.block_314}>Correct: सकाळ</p>
                <p className={styles.block_315}>Incorrect: सकाल</p>
                <p className={styles.block_316}>
                  Explanation: Speaker said "सकाल" with a regional
                </p>
                <p className={styles.block_312}>
                  accent from the south, using "ल" instead of "ळ".
                </p>
                <p className={styles.block_317}>
                  Spell it as the standard "सकाळ".
                </p>
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
