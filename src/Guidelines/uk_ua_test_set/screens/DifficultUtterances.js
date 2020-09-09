import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import CorrrectIncorrect from '../../../Components/common/CorrrectIncorrect'

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
            <PageContentHeader currentPage="Longform uk_ua_test_set" />
            <div className="content">
              <h1 id="calibre_link-39" class="block_23">
                Difficult utterances
              </h1>
              <p class="block_24">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <h2 class="block_">Skipping a prompt</h2>
                <p class="block_25"></p>
                <p class="block_24">
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
                <p class="block_25"></p>
                <p class="block_24">
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
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
                      No Sound: The waveform indicates there is audio but I
                      can't hear anything.
                    </span>
                  </div>
                  <div class="block_28">
                    <span class="bullet_">●&nbsp;</span>
                    <span class="calibre2">
                      Other Locale: All of the speech is in a different
                      language.
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
              </div>
              <div id="hesitations-and-truncations">
                <h2 id="calibre_link-41" class="block_">
                  Hesitations and truncations
                </h2>
                <p class="block_25"></p>
                <p class="block_24">
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <CorrrectIncorrect
                  correctText="непопулярний"
                  audioText='"непо непопулярний"'
                />
                <CorrrectIncorrect
                  correctText="більший ніж"
                  audioText='"бі більший ніж"'
                />
                <CorrrectIncorrect
                  correctText="біль більший ніж"
                  audioText='"біль [пауза] більший ніж"'
                />

                <p class="text">
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.
                </p>
                <CorrrectIncorrect correctText="знайти дитячий магазин іграшок знайти дитячий магазин іграшок" />
                <CorrrectIncorrect correctText="Покажи мені погоду в Києві. Покажи погоду вkиєві." />
                <CorrrectIncorrect
                  correctText="Які інструменти потрібні для обробки саду? обробляти сад"
                  audioText=""
                  explainationText='If the repeated phrase is part of the sentence that just happens to form a sentence on its own (possibly under a different interpretation), format it as a fragment. While "обробляти сад" can be a command, it is ambiguous and is most likely a fragment in this context.'
                />

                <p class="text">
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <CorrrectIncorrect
                  correctText="Я живу в Сан-Франциско"
                  audioText='"я живу в сан-франциск"'
                  explainationText='Final sound "o" was truncated.'
                />
                <CorrrectIncorrect
                  correctText="Де"
                  audioText='"де телефо-"'
                  explainationText='Unclear whether they would have said
                          "телефон", "телефонний" or another form of the word.'
                />
                <CorrrectIncorrect
                  correctText="де купити мобільний телефон"
                  audioText='"де купити мобільний телеф-"'
                  explanationText={`he context clarifies which form of the
                          truncated word is used, so the word should be
                          completed. However, do not add any end punctuation -
                          this could be the end of the sentence, but it's also
                          possible that the speaker intended to continue the
                          sentence.`}
                />
                <CorrrectIncorrect
                  correctText="фільм Одного разу в Америці."
                  audioText='"-ільм одного разу в америці"'
                  explainationText={`Initial "ф" was cut off`}
                />

                <p class="text">
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.
                </p>
                <CorrrectIncorrect
                  correctText='Олеся сказала: "А давай ми"'
                  audioText='"oлеся сказала а давай ми-"'
                  explainationText="End of quote was truncated. Include closing quotation mark."
                />
                <CorrrectIncorrect
                  correctText='Олеся сказала: "А давай ми"'
                  audioText='"oлеся сказала а давай ми-"'
                  explainationText="End of quote was truncated. Include closing quotation mark."
                />
                <p class="text">
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.
                </p>
                <CorrrectIncorrect
                  correctText="пісня Океану Ельзи дев'ять один"
                  audioText={`пісня океану ельзи дев'ять один`}
                  explainationText='Speaker was going to say "дев"ять один один" but was cut off.'
                />

                <p class="text">
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <ul>
                  <li>um</li>
                  <li>uh</li>
                  <li>right</li>
                  <li>you know</li>
                  <li>so</li>
                  <li>like</li>
                </ul>
                <br />
                <p class="text">
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <CorrrectIncorrect correctText="I need to get a new um telephone." />
                <CorrrectIncorrect correctText="Do you like it? Mhm." />
                <CorrrectIncorrect correctText="Do you like it? Mhm." />
                <ul>
                  <li>ah</li>
                  <li>er</li>
                  <li>mhm</li>
                </ul>

                <p class="text">
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <h2 id="calibre_link-42" class="block_32">
                  Background and foreground speech
                </h2>
              </div>
              <div id="foreign-language">
                <h2 id="calibre_link-43" class="block_32">
                  Foreign language
                </h2>
                <p class="block_24">
                  If a foreign-language word is usually written in Latin letters
                  when used in Ukrainian, transcribe it with Latin letters. If
                  you are unsure which is more common, use Latin letters.
                  However, if the speaker adds a Ukrainian affixation to a
                  foreign word, transcribe it using the Cyrillic alphabet. If
                  the word is not in the reference dictionary, use the spelling
                  with the most Google search results to determine the correct
                  transliteration.
                </p>
                <CorrrectIncorrect correctText="Bluetooth" />
                <CorrrectIncorrect
                  correctText="завантажити по блютузу"
                  explainationText='Speaker conjugates the word "Bluetooth" as a native word, so transliterate it.'
                />
                <CorrrectIncorrect correctText=" Вона працює в компанії Google." />
                <CorrrectIncorrect
                  correctText=" Вона працює в Гуглі."
                  explainationText='Speaker conjugates the word "Google" as a native word, so transliterate it.'
                />
                <p class="text">
                  Use the Cyrillic spellings of foreign personal names. To
                  determine the correct spelling, you may refer to news
                  articles, official websites, and Wikipedia. Foreign bands and
                  music media titles should be written using the original
                  spelling.
                </p>
                <CorrrectIncorrect
                  correctText=" Де живе Дженніфер Еністон?"
                  explainationText="oreign personal name, so use Cyrillic spelling."
                />
                <CorrrectIncorrect
                  correctText=" фільм з Г'ю Джекменом"
                  explainationText="Foreign personal name, so use Cyrillic spelling."
                />
                <CorrrectIncorrect
                  correctText=" пісні гурту Maroon 5"
                  explainationText="Foreign band name, so use Latin spelling."
                />
                <CorrrectIncorrect
                  correctText=" текст пісні Umbrella"
                  explainationText="Foreign music media title, so use Latin spelling."
                />
              </div>
              <div id="accents">
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
                <CorrrectIncorrect correctText=" що" audioText='"шо"' />
                <CorrrectIncorrect correctText=" ні" audioText='"нє"' />
                <CorrrectIncorrect correctText=" гарний" audioText='"ґарний"' />
                <CorrrectIncorrect
                  correctText="  слухати музику"
                  audioText='"слухать музику"'
                />
                <CorrrectIncorrect
                  correctText="скачати онлайн гру"
                  audioText='"скачати онлайн ігру"'
                />
                <CorrrectIncorrect
                  correctText="домовитись"
                  audioText='"дамовитись"'
                />
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
