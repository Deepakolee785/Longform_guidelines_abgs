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
            <PageContentHeader currentPage="Longform Mongolian" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances </p>
              <p className={'text'}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.{' '}
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt </p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </p>
                <p className={styles.block_380}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.{' '}
                </p>
                <p className={styles.block_381}>
                  ● No Audio: The audio doesn't load.{' '}
                </p>
                <p className={styles.block_382}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.{' '}
                </p>
                <p className={styles.block_383}>
                  ● Other Locale: All of the speech is in a different language.{' '}
                </p>
                <p className={styles.block_384}>
                  ● Silent Audio: The entire utterance is silent{' '}
                </p>
                <p className={styles.block_385}>
                  ● Noisy Audio: The entire utterance is too noisy.{' '}
                </p>
                <p className={styles.block_386}>
                  ● Other: Other reason (Please explain).{' '}
                </p>
                <p className={styles.block_387}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.{' '}
                </p>
              </div>
              <p className={'heading'}>Things to ignore </p>
              <p className={styles.block_303}>
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.{' '}
              </p>
              <p className={styles.block_304}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_8}>: Энэ танай байшин уу? </span>
                <span className={styles.text_6}>E</span>
                <span className={styles.text_7}>XAMPLE AUDIO</span>
                <span className={styles.text_6}>: " </span>
                <span className={styles.text_17}>энэ танай ай байшин уу </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_305}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_8}>
                  : Чи тэгж хэлж байгаа бол{' '}
                </span>
                <span className={styles.text_6}>E</span>
                <span className={styles.text_7}>XAMPLE AUDIO</span>
                <span className={styles.text_6}>: " </span>
                <span className={styles.text_17}>
                  [санаа алдах эсвэл уртаар амьсгалах]{' '}
                </span>
              </p>
              <p className={styles.block_306}>
                <span className={styles.text_1}>чи тэгж хэлж байгаа бол </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_307}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_8}>: Тэр "ах" гэсэн </span>
                <span className={styles.text_6}>E</span>
                <span className={styles.text_7}>XAMPLE AUDIO</span>
                <span className={styles.text_6}>: " </span>
                <span className={styles.text_17}>тэр ахххх гэсэн </span>
                <span className={styles.text_6}>" </span>
              </p>
              <p className={styles.block_308}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : In this example the speaker intended to say "ах" so it is
                  transcribed as "ах" with only one "х".{' '}
                </span>
              </p>
              <p className={styles.block_309}>
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                Mongolian language.{' '}
              </p>
              <p className={styles.block_310}>● мм </p>
              <p className={styles.block_311}>● аа </p>
              <p className={styles.block_312}>● тэгэхээр </p>
              <div id="hesitations-and-truncations">
                <p className={styles.block_313}>
                  Hesitations truncations and repetitions{' '}
                </p>
                <p className={styles.block_314}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.{' '}
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: төсөвлөх </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: тө төсөвлөх </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>тө- төсөвлөх </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Since "тө" is not a word, do no transcribe this false
                    start.{' '}
                  </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: төсөв төсөвлөх </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: төсөвлөх </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    төсөв- [түр зогсов] төсөвлөх{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Since "төсөв" is a word on its own it is transcribed
                    before "төсөвлөх" without "\-" or "..."{' '}
                  </span>
                </p>
                <p className={styles.block_323}>
                  If a speaker repeats part of the end of a sentence, add ending
                  punctuation before the repeated phrase. Do not include ending
                  punctuation after the repeated phrase (unless the repeated
                  part is a complete sentence).{' '}
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Миний гар утас хаана байна? миний гар утас{' '}
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Миний гар утас хаана байна миний гар утас?{' '}
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    миний гар утас хаана байна миний гар утас{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The ending punctuation is transcribed before the repeated
                    phrase "миний гар утас". Note, "миний гар утас" by itself is
                    not a complete sentence so there is no punctuation after it.{' '}
                  </span>
                </p>
                <p className={styles.block_328}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you know what the word is supposed to be,
                  transcribe the entire word.{' '}
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : би Улаанбаатарт амьдардаг{' '}
                  </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : би Улаанбаатарт амьдарда-{' '}
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: би Улаанбаатарт </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    би улаанбаатарт амьдарда{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Final "г" was truncated, but since only one letter was cut
                    off, the full word is transcribed with the missing "г".{' '}
                  </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Багийн фортрес видео тоглоом{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    агийн фортрес видео тоглоом{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Initial "б" was cut off, but since it is only one letter,
                    the whole word, "багийн" is transcribed with the missing "б"
                    added.{' '}
                  </span>
                </p>
                <p className={styles.block_336}>
                  If you are not sure what the word should be, do not transcribe
                  the word at all. Do not put punctuation after words that have
                  been cut off.{' '}
                </p>
                <p className={styles.block_337}>
                  If a quotation is cut off in the middle, use an end quotation
                  mark anyway.{' '}
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Эрика "Бид үнэхээр тэгэх хэрэгтэй" гэж хэлсэн{' '}
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    эрика бид үнэхээр тэгэх хэрэгтэй гэж хэлсэн{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker's quotation of Erica was truncated. Even
                    though the end of the quotation was not recorded, an end
                    quotation mark must be transcribed at the end of the quote.
                    Since "We should totally" is not a complete sentence, it is
                    not transcribed with a period at the end.{' '}
                  </span>
                </p>
                <p className={styles.block_341}>
                  If a speaker repeats a word five times or less, transcribe
                  each repetition (without fillers). But if a word is repeated
                  more than five times, skip the prompt.{' '}
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би борооны цув авмаар авмаар байна{' '}
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Би борооны цув авмаар мм авмаар байна{' '}
                  </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    би борооны цув авмаар мм авмаар байна{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Since speaker said "авмаар" twice, transcribe it twice. Do
                    not include the filler "мм".{' '}
                  </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: [skip] </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    сайн уу сайн уу сайн уу сайн уу сайн уу{' '}
                  </span>
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_1}>сайн уу </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_348}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.{' '}
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech </p>
                <p className={styles.block_350}>
                  Only transcribe foreground speech. A user's speech may go from
                  the foreground to the background based on the volume of their
                  speech and who they are speaking to.{' '}
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: пиранья </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    пиранья энэ үгийг хэлэхэд пиранья{' '}
                  </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_1}>хайж эхэлнэ </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The word "пиранья" is said loudly, in the foreground. The
                    rest of the speech is said in a lower volume in the
                    background to another person. The background speech is not
                    transcribed.{' '}
                  </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Эрдэнэтээс Хаанбууз олоорой. Бид тийшээ явж байгаа тийм
                    үү?{' '}
                  </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker's first sentence is spoken to the phone. The
                    second sentence is spoken to another person, but it is still
                    loud, so it is also transcribed.{' '}
                  </span>
                </p>
                <p className={styles.block_356}>
                  If one person clearly speaks in the foreground and someone
                  speaks in the background, transcribe the foreground speaker
                  and ignore the rest.{' '}
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Цэцэрлэг руу явах чиглэл{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    цэцэрлэг руу явах чиглэл үгүй ээ{' '}
                  </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_1}>эрдэнэт байдаг </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The second speaker is in the background, his or her speech
                    is not transcribed.{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  If two people take turns speaking, are not speaking at the
                  same time, and are both in the foreground at approximately the
                  same volume, transcribe the speech of both speakers as
                  different sentences. Separate different speakers' sentences
                  with end punctuation.{' '}
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Ирж байна уу? Тийм ээ.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>ирж байна уу тийм ээ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Both speakers are in the foreground so both sentences are
                    transcribed. The speech of the two speakers is separated by
                    punctuation.{' '}
                  </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Мөхөөлдөс. Гэхдээ би пицца хүссэн.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    мөхөөлдөс гэхдээ би пицца хүссэн{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even though "мөхөөлдөс" is not a complete sentence, a
                    period is used in order to separate the speech of the two
                    speakers.{' '}
                  </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>
                    : Чи зүгээр үү? Ммхм. Гайхалтай!{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_7}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_17}>
                    чи зүгээр үү ммхм гайхалтай{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speech alternates between two speakers in the
                    foreground. The speech of both speakers is transcribed,
                    separated by punctuation.{' '}
                  </span>
                </p>
                <p className={styles.block_367}>
                  If one person clearly speaks in the foreground and someone
                  interrupts at the same volume with a brief (less than a
                  second) overlapping speech segment, transcribe the main
                  speaker and ignore the rest.{' '}
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Гоё кино байна тийм үү? Би дахиад үзмээр байна.{' '}
                  </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    гоё кино байна тийм үү ммхан би дахиад үзмээр байна{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_370}>
                  {' '}
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The second speaker interrupts with a brief ммхан while the
                    first speaker is still speaking. The second speaker is not
                    transcribed.{' '}
                  </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Чи өнгөнд үнэхээр ач холбогдол өгдөг үү? Ямар ч өнгө байж
                    болно тийм үү? Тийм ээ болно.{' '}
                  </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    чи өнгөнд үнэхээр ач холбогдол өгдөг үү ямар ч өнгө байж
                    болно тийм үү хмм тийм ээ болно{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : While one speaker was still asking "Чи өнгөнд үнэхээр ач
                    холбогдол өгдөг үү?"; another speaker responded with an
                    overlapping "хмм". The second speaker's "хмм" is not
                    transcribed.{' '}
                  </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Энэ яаралтай юу? Би энэ талаар ямар нэг юм хийх хэрэгтэй.{' '}
                  </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_10}>
                    энэ яаралтай юу хүлээгээрэй би энэ талаар ямар нэг юм хийх
                    хэрэгтэй{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : While one speaker was still asking "Is it urgent?";
                    another speaker interrupted her with an overlapping
                    "Wait.".The second speaker's "Wait." is not transcribed.{' '}
                  </span>
                </p>
                <p className={styles.block_377}>
                  If there are two or more people speaking, one talking to the
                  device and the other not, transcribe only the speaker speaking
                  to the device.{' '}
                </p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language </p>
                <p className={'text'}>
                  Do not skip audio that contains foreign words. First indicate
                  whether it contains English or another language, then
                  transcribe the utterance according to the following rules.{' '}
                </p>
                <p className={'bold-heading'}>English </p>
                <p className={styles.block_233}>
                  Please transliterate all English media titles.{' '}
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би Гэйм оф Трөүнст дуртай.{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : би Game of Thrones-т дуртай.{' '}
                  </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Game of Thrones" is an English TV show title, so please
                    transliterate it.{' '}
                  </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Брэд Пит хаана төрсөн бэ?{' '}
                  </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Brad Pitt хаана төрсөн бэ?{' '}
                  </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Brad Pitt" is an American celebrity, so please
                    transliterate the name into your script.{' '}
                  </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би Шэйп оф юүг сонсмоор байна{' '}
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : би Shape of You-г сонсмоор байна{' '}
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Shape of You" is an English song, so please transliterate
                    the song into your script.{' '}
                  </span>
                </p>
                <p className={styles.block_243}>Keep URLs in Latin script. </p>
                <p className={styles.block_244}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: www.google.com </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: www.гүүгл.com </span>
                </p>
                <p className={styles.block_246}>
                  Transcribe English companies in English. Do not transliterate.{' '}
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Youtube-г хэн эзэмшдэг вэ?{' '}
                  </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Ютүбийг хэн эзэмшдэг вэ?{' '}
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "YouTube" is an English company, so transcribe it in
                    English using Latin characters.{' '}
                  </span>
                </p>
                <p className={styles.block_250}>
                  Below are some common company names that should be transcribed
                  in English with Latin characters{' '}
                </p>
                <p className={styles.block_251}>● Apple </p>
                <p className={styles.block_252}>● Netflix </p>
                <p className={styles.block_253}>● Skype </p>
                <p className={styles.block_254}>● Snapchat </p>
                <p className={styles.block_255}>● WhatsApp </p>
                <p className={styles.block_256}>● Yahoo </p>
                <p className={styles.block_257}>● YouTube </p>
                <p className={styles.block_258}>
                  Exception: Transliterate company names if it would be
                  unnatural for it to be in English. Refer to the following list
                  for the proper spelling of company names.{' '}
                </p>
                <p className={styles.block_259}>● Фэйсбүүк </p>
                <p className={styles.block_260}>● Инстаграм </p>
                <p className={styles.block_261}>● Твиттер </p>
                <p className={styles.block_262}>
                  Transliterate common English words into your language.{' '}
                </p>
                <p className={styles.block_263}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Хэллөү </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Hello </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Please transliterate common English words.{' '}
                  </span>
                </p>
                <p className={styles.block_266}>
                  Use the spelling "Ok" for the phrase "Ok Google", as well as
                  related phrases like "Ok Google Now" and "Ok Glass". For all
                  other cases, transcribe the word as "okay".{' '}
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Ok Google </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Окэй Google </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Ok" appears before "Google", it is spelled "Ok" and not
                    "Окэй".{' '}
                  </span>
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: Ok Google Now </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_11}>
                    : The phrase Ok Google Now is a derivation{' '}
                  </span>
                </p>
                <p className={styles.block_271}>
                  of "Ok Google" and must be transcribed exactly like this.{' '}
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ok Google, Tom N Toms хаана байна вэ?{' '}
                  </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Ok Google Tom N Toms хаана байна вэ?{' '}
                  </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The correct transcription includes a comma after the
                    phrase "Ok Google".{' '}
                  </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XPLANATION</span>
                  <span className={styles.text_11}>: </span>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_8}>: Окей, Дэвид. </span>
                </p>
                <p className={styles.block_276}>
                  The word "Окей" is only transcribed as{' '}
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Ok, Дэвид. </span>
                </p>
                <p className={styles.block_278}>
                  "Ok" when it appears before "Google".{' '}
                </p>
                <p className={styles.block_279}>
                  If the speaker in the audio is speaking in English and says a
                  word in your language transliterate it to English.{' '}
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I need a recipe for khuushuur{' '}
                  </span>
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : I need a recipe for хуушуур{' '}
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The speaker is speaking in English but says a Mongolian
                    word, "хуушуур" Transliterate the Mongolian word into
                    English, do not use Mongolian script.{' '}
                  </span>
                </p>

                <p className={'bold-heading'}>Other foreign languages </p>
                <p className={styles.block_284}>
                  If you hear a foreign word (besides English) that is commonly
                  understood by speakers of your language, transcribe it in your
                  script.{' '}
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Энэ нь кимчи юм. </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_13}>I</span>
                  <span className={styles.text_14}>NCORRECT</span>
                  <span className={styles.text_15}>: Энэ нь 김치 юм. </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : This is a very common phrase that most Mongolian speakers
                    know. Even if you know the script of the original language,
                    please transliterate it into Mongolian.{' '}
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Би оригами сурмаар байна{' '}
                  </span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_13}>I</span>
                  <span className={styles.text_14}>NCORRECT</span>
                  <span className={styles.text_13}>: Би </span>
                  <span className={styles.text_16}>折り紙​ </span>
                  <span className={styles.text_13}>сурмаар байна </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : This is a very common word that most Mongolian speakers
                    know. Even if you know the script of the original language,
                    transliterate it into Mongolian.{' '}
                  </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Миний хүү таэквондогийн ангид явдаг{' '}
                  </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_13}>I</span>
                  <span className={styles.text_14}>NCORRECT</span>
                  <span className={styles.text_15}>
                    : Миний хүү 태권도 -н ангид явдаг{' '}
                  </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : This is a very common phrase that most Mongolian speakers
                    know. Even if you know the script of the original language,
                    please transliterate it into Mongolian.{' '}
                  </span>
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents </p>
                <p className={'text'}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling according to your
                  language's official dictionary.{' '}
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: хэр хол вэ? </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: хир хол вэ? </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Speaker said "хир", a non-standard variant of "хэр", but
                    it should be spelled as the standard "хэр".{' '}
                  </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Баярлалаа </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Баярллаа </span>
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
