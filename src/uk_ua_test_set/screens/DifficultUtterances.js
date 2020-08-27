import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../Components/common/PageContentHeader'
import RightContentNav from '../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'

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
            <PageContentHeader />
            <div className="content">
              <h1 id="calibre_link-39" class="block_23">
                Difficult utterances
              </h1>
              <p class="block_24">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <h2 id="calibre_link-40" class="block_">
                Skipping a prompt
              </h2>
              <p class="block_25"></p>
              <p class="block_24">
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.
              </p>
              <p class="block_25"></p>
              <p class="block_24">
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.
              </p>
              <div class="calibre1">
                <div class="block_27">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">
                    No Audio: The audio doesn't load.
                  </span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">
                    No Sound: The waveform indicates there is audio but I can't
                    hear anything.
                  </span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">
                    Other Locale: All of the speech is in a different language.
                  </span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">
                    Silent Audio: The entire utterance is silent
                  </span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">
                    Noisy Audio: The entire utterance is too noisy.
                  </span>
                </div>
                <div class="block_29">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">
                    Other: Other reason (Please explain).
                  </span>
                </div>
              </div>
              <p class="block_25"></p>
              <p class="block_24">
                For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.
              </p>
              <h2 id="calibre_link-41" class="block_">
                Hesitations and truncations
              </h2>
              <p class="block_25"></p>
              <p class="block_24">
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: непопулярний</p>
                    </td>
                    <td class="td_1">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> непо непопулярний </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: більший ніж</p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> бі більший ніж </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: біль більший ніж</p>
                    </td>
                    <td class="td_5">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> біль [пауза] більший ніж </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_25"></p>
              <p class="block_24">
                If a user repeats a sentence for the sake of the phone, format
                the repetition as a sentence if it's restating (as a sentence)
                what the person has said.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: знайти дитячий магазин іграшок знайти дитячий
                        магазин іграшок
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Покажи мені погоду в Києві. Покажи погоду в
                        Києві.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_5">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Які інструменти потрібні для обробки саду?
                        обробляти сад
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: If the repeated phrase is part of the
                        sentence that just happens to form a sentence on its own
                        (possibly under a different interpretation), format it
                        as a fragment. While "обробляти сад" can be a command,
                        it is ambiguous and is most likely a fragment in this
                        context.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_25"></p>
              <p class="block_24">
                Complete words that have been truncated only if a very small
                portion of the word is missing (one syllable or less in a
                multisyllable word) and it is obvious what the word should be.
                In cases of ambiguity, do not transcribe the cut-off word. Do
                not put punctuation at the end of truncated words.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Я живу в Сан-Франциско</p>
                    </td>
                    <td class="td_1">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> я живу в сан-франциск- </i>"
                      </p>
                      <p class="block_16">
                        Explanation: Final sound "o" was truncated.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_2">
                      <p class="block_15">Correct: Де</p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> де телефо- </i>"
                      </p>
                      <p class="block_16">
                        Explanation: Unclear whether they would have said
                        "телефон", "телефонний" or another form of the word.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_4">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: де купити мобільний телефон
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> де купити мобільний телеф- </i>"
                      </p>
                      <p class="block_16">
                        Explanation: The context clarifies which form of the
                        truncated word is used, so the word should be completed.
                        However, do not add any end punctuation - this could be
                        the end of the sentence, but it's also possible that the
                        speaker intended to continue the sentence.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: фільм Одного разу в Америці.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> -ільм одного разу в америці </i>"
                      </p>
                      <p class="block_16">
                        Explanation: Initial "ф" was cut off.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_25"></p>
              <p class="block_24">
                If a truncation occurs mid-quote, use an end quotation mark even
                if there is possibly more intended content.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_2">
                    <td class="td_7">
                      <p class="block_15">
                        Correct: Олеся сказала: "А давай ми"
                      </p>
                    </td>
                    <td class="td_8">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> oлеся сказала а давай ми- </i>"
                      </p>
                      <p class="block_16">
                        Explanation: End of quote was truncated. Include closing
                        quotation mark.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_25"></p>
              <p class="block_24">
                For numbers, stick to what is uttered, even if you know this is
                not all the speaker is going to say.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_2">
                    <td class="td_7">
                      <p class="block_15">
                        Correct: пісня Океану Ельзи дев'ять один
                      </p>
                    </td>
                    <td class="td_8">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          пісня океану ельзи дев'ять один{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: Speaker was going to say "дев'ять один
                        один" but was cut off.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_25"></p>
              <p class="block_24">
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.
              </p>
              <div class="calibre1">
                <div class="block_27">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">um</span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">uh</span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">right</span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">you know</span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">so</span>
                </div>
                <div class="block_29">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">like</span>
                </div>
              </div>
              <p class="block_25"></p>
              <p class="block_24">
                Below is a list of all filler words that should only be
                transcribed if affirmations or answers to a question.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">
                        Correct: I need to get a new um telephone.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: Do you like it? Mhm.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="calibre1">
                <div class="block_27">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">ah</span>
                </div>
                <div class="block_28">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">er</span>
                </div>
                <div class="block_29">
                  <span class="bullet_">●&nbsp;</span>
                  <span class="calibre2">mhm</span>
                </div>
              </div>
              <p class="block_25"></p>
              <p class="block_24">
                Only transcribe foreign words if they are common in your
                language or if speakers of your language would understand it. If
                it is foreign and speakers of your language would not know this
                word, use the Foreign Speech label as instructed in: Longform
                generic rules &gt; Unintelligible or foreign or singing.
              </p>
              <h2 id="calibre_link-42" class="block_32">
                Background and foreground speech
              </h2>
              <h2 id="calibre_link-43" class="block_32">
                Foreign language
              </h2>
              <p class="block_25"></p>
              <p class="block_24">
                If a foreign-language word is usually written in Latin letters
                when used in Ukrainian, transcribe it with Latin letters. If you
                are unsure which is more common, use Latin letters. However, if
                the speaker adds a Ukrainian affixation to a foreign word,
                transcribe it using the Cyrillic alphabet. If the word is not in
                the reference dictionary, use the spelling with the most Google
                search results to determine the correct transliteration.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: Bluetooth</p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: завантажити по блютузу</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: Speaker conjugates the word "Bluetooth" as
                        a native word, so transliterate it.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Вона працює в компанії Google.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: Вона працює в Гуглі.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: Speaker conjugates the word "Google" as a
                        native word, so transliterate it.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_25"></p>
              <p class="block_24">
                Use the Cyrillic spellings of foreign personal names. To
                determine the correct spelling, you may refer to news articles,
                official websites, and Wikipedia. Foreign bands and music media
                titles should be written using the original spelling.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Де живе Дженніфер Еністон?
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_16">
                        Explanation: Foreign personal name, so use Cyrillic
                        spelling.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: фільм з Г'ю Джекменом</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: Foreign personal name, so use Cyrillic
                        spelling.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: пісні гурту Maroon 5</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: Foreign band name, so use Latin spelling.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: текст пісні Umbrella</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: Foreign music media title, so use Latin
                        spelling.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="calibre_link-44" class="block_">
                Accents
              </h2>
              <p class="block_25"></p>
              <p class="block_24">
                Correct non-standard pronunciations to their standard ones.
                Non-standard pronunciations could be from speakers of regional
                dialects, language learners, or speakers from different
                countries.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: що</p>
                    </td>
                    <td class="td_1">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> шо </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: ні</p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> нє </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: гарний</p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> ґарний </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: слухати музику</p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> слухать музику </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: скачати онлайн гру</p>
                    </td>
                    <td class="td_3">
                      <p class="block_26">
                        Example audio: "
                        <i class="calibre6"> скачати онлайн ігру </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: домовитись</p>
                    </td>
                    <td class="td_5">
                      <p class="block_26">
                        Example audio: "<i class="calibre6"> дамовитись </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
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
