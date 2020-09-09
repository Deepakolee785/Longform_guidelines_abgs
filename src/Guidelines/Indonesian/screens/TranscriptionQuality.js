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
            <PageContentHeader currentPage="Longform Indonesian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_191}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_193}>
                  <span className={styles.text_}>
                    We encourage you to always refer to the Official Bahasa
                    Indonesia Dictionary to make everyone’s spelling
                    standardised. Here is the :{' '}
                  </span>
                  <span className={styles.text_1}>
                    https :// kbbi . kemdikbud . go . id /{' '}
                  </span>
                </p>
                <p className={styles.block_194}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_195}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_196}>
                  Correct: Cek aku di dalam Facebook.
                </p>
                <p className={styles.block_197}>
                  Incorrect: Cek aku di dalam Fesbuk.
                </p>
                <p className={styles.block_198}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_19}>
                  Correct: Wilayah itu kini disebut Kalimantan.
                </p>
                <p className={styles.block_199}>
                  Incorrect: Wilayah itu kini disebut kalimantan.
                </p>
                <p className={styles.block_83}>
                  Correct: Itu adalah kucing persia.
                </p>
                <p className={styles.block_200}>
                  Incorrect: Itu adalah kucing Persia.
                </p>
                <p className={styles.block_201}>
                  Correct: arah pulang ke rumah
                </p>
                <p className={styles.block_75}>
                  Incorrect: Arah pulang ke rumah.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_203}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_148}>
                  Correct: Ucapannya sarat makna.
                </p>
                <p className={styles.block_204}>
                  Incorrect: Ucapannya syarat makna.
                </p>
                <p className={styles.block_205}>Correct: paskibraka provinsi</p>
                <p className={styles.block_206}>Incorrect: paskibra provinsi</p>
                <p className={styles.block_207}>Correct: Kita SMS-an saja.</p>
                <p className={styles.block_208}>Incorrect: Kita SMSan saja.</p>
                <p className={styles.block_209}>Correct: Saya masih S1.</p>
                <p className={styles.block_210}>
                  Incorrect: Saya masih es satu.
                </p>
                <p className={styles.block_211}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_212}>
                  Correct: Tempat tinggalnya di kontrakan.
                </p>
                <p className={styles.block_96}>
                  Incorrect: Tempat tinggalnya dikontrakan.
                </p>
                <p className={styles.block_213}>
                  Correct: Tidak ada massa yang tersisa.
                </p>
                <p className={styles.block_214}>
                  Incorrect: Tidak ada masa yang tersisa.
                </p>
                <p className={styles.block_215}>
                  Correct: Kalau sangsi, sebaiknya kamu tanyakan kepadanya.
                </p>
                <p className={styles.block_216}>
                  Incorrect: Kalau sanksi, sebaiknya kamu tanyakan kepadanya.
                </p>
                <p className={styles.block_217}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_218}>
                  Correct: Dia pertaruhan nyawa.
                </p>
                <p className={styles.block_219}>
                  Incorrect: Dia pertaruhkan nyawa.
                </p>
                <p className={styles.block_101}>
                  Example audio: " dia pertaruhan nyawa "
                </p>
                <p className={styles.block_220}>Correct: Dia taruhan nyawa.</p>
                <p className={styles.block_219}>
                  Incorrect: Dia pertaruhkan nyawa.
                </p>
                <p className={styles.block_163}>
                  Example audio: " dia taruhan nyawa "
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_222}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_71}>Correct: Saya pergi sekolah.</p>
                <p className={styles.block_223}>
                  Explanation: Do not add the preposition "ke".
                </p>
                <p className={styles.block_148}>
                  Correct: Harga permen ini Rp500.
                </p>
                <p className={styles.block_64}>
                  Example audio: " harga permen ini lima ratus "
                </p>
                <p className={styles.block_209}>Correct: Set alarm 4.00.</p>
                <p className={styles.block_224}>
                  Example audio: " set alarm empat nol nol "
                </p>
                <p className={styles.block_225}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_219}>
                  Correct: YouTube YouTube YouTube
                </p>
                <p className={styles.block_226}>
                  Correct: Saya tinggal di Makassar kasar kasar kasar.
                </p>
                <p className={styles.block_227}>
                  Correct: Saya membeli soto bakso di pertigaan.
                </p>
                <p className={styles.block_228}>
                  Explanation: Speaker clearly corrected themselves after
                  "soto".
                </p>
                <p className={styles.block_229}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-” wherever the false start is happening
                </p>
                <p className={styles.block_43}>
                  Correct: I need to get a new tele- telephone
                </p>
                <p className={styles.block_230}>
                  Correct: The driver got out of the driver got into the car.
                </p>
                <p className={styles.block_231}>
                  Correct: I really don't think Hey that's a good idea, let's do
                  that!
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_232}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_44}>
                  Correct: Kami berbelanja di Matahari.
                </p>
                <p className={styles.block_233}>
                  Incorrect: Kami berbelanja di Sogo.
                </p>
                <p className={styles.block_234}>
                  Example audio: " kami berbelanja di matahari "
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_235}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_236}>
                  Correct: Bagaimana cuaca hari ini di Jakarta?
                </p>
                <p className={styles.block_227}>
                  Incorrect: Bagaimana cuaca hari ini di _Jakarta?
                </p>
                <p className={styles.block_237}>
                  Correct: Saya di kantor. Kamu di mana?
                </p>
                <p className={styles.block_238}>
                  Incorrect: Saya di kantor. _Kamu di mana?.
                </p>
                <p className={styles.block_137}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_239}>Correct: Kamu mau ke mana?</p>
                <p className={styles.block_240}>
                  Incorrect: Kamu mau ke mana ?
                </p>
                <p className={styles.block_241}>Correct: Berhenti di situ!</p>
                <p className={styles.block_208}>
                  Incorrect: Berhenti di situ !
                </p>
                <p className={styles.block_61}>
                  Correct: Halo, bisa bicara dengan H. Anang?
                </p>
                <p className={styles.block_227}>
                  Incorrect: Halo , bisa bicara dengan H . Anang ?
                </p>
                <p className={styles.block_242}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_243}>
                  Correct: Ayah berkata, "Jagalah kesehatanmu."
                </p>
                <p className={styles.block_244}>
                  Incorrect: Ayah berkata, " Jagalah kesehatanmu. "
                </p>
                <p className={styles.block_245}>
                  Correct: Terjemahkan "bulan" ke dalam bahasa Korea.
                </p>
                <p className={styles.block_246}>
                  Incorrect: Terjemahkan "bulan"ke dalam bahasa korea.
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
