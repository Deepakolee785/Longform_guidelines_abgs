import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Kannada" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation </p>
              <p className={'text'}>
                Follow the punctuation regulations of your language. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={styles.block_611}>
                  Answers to questions and sentences with dropped subjects
                  should be transcribed as complete sentences.
                </p>
                <p className={styles.block_612}>Correct: ಮ ಬ ರು ತ ಡು ?</p>
                <p className={styles.block_613}>ಪಕ ದ ಮ ಯ ವ .</p>
                <p className={styles.block_614}>
                  Explanation: Even though "ಪಕ ದ ಮ ಯ ವ "
                </p>
                <p className={styles.block_615}>
                  is not a complete sentence, it should be
                </p>
                <p className={styles.block_616}>
                  transcribed as one since it is a natural
                </p>
                <p className={styles.block_617}>response to the question.</p>
                <p className={styles.block_618}>Correct: ಔತಣ ಟ ಬರು ?</p>
                <p className={styles.block_619}>
                  Interjections, greetings, and farewells said in isolation
                  should include ending punctuation.
                </p>
                <p className={styles.block_620}>Correct: ಓ .</p>
                <p className={styles.block_621}>Correct: ನಮ .</p>
                <p className={styles.block_622}>
                  Do not add ending punctuation to web search queries. Web
                  search queries are spoken versions of what a person might type
                  into a Foogle search bar. Note: Web search queries are
                  different from voice action requests because they do not
                  include a command directed to a device. Add ending punctuation
                  to phrases that sound like the end of a sentence. If they do
                  not clearly sound like the end of a sentence, leave out ending
                  punctuation. Remember that some sentences may sound incomplete
                  because the audio has been cut off.
                </p>
                <p className={styles.block_623}>
                  A voice action is a request or command spoken to a device and
                  includes a command verb. Transcribe all voice actions as
                  complete sentences.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Use commas only when necessary. If you are unsure whether to
                  use a comma, leave it out.
                </p>
                <p className={styles.block_626}>
                  Do not transcribe pauses with commas.
                </p>
                <p className={styles.block_627}>Correct: ಹ ರದ ಶ ಎ ?</p>
                <p className={styles.block_628}>Incorrect: ಹ ರದ, , ಶ ಎ ?</p>
                <p className={styles.block_629}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_630}>
                  pauses, do not use a comma. There are places
                </p>
                <p className={styles.block_631}>
                  where commas are allowed or required, but this
                </p>
                <p className={styles.block_632}>example contains neither.</p>
                <p className={styles.block_633}>Use commas in lists.</p>
                <p className={styles.block_634}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_635}>
                  Do not use commas in sentences that contain only a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_636}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_225}>
                  The phrase "Ok Google" by itself is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer sentences, place a comma after "Google".
                </p>
                <p className={styles.block_637}>Correct: Ok Google</p>
                <p className={styles.block_638}>Incorrect: Ok, Google</p>
                <p className={styles.block_639}>Incorrect: Ok Google.</p>
                <p className={styles.block_640}>
                  Explanation: "Ok Google" was spoken in
                </p>
                <p className={styles.block_641}>
                  isolation, so do not transcribe a comma or
                </p>
                <p className={styles.block_642}>period.</p>
                <p className={styles.block_643}>
                  Correct: Ok Google, ಆ ಮರಗಳ ತ ಗ
                </p>
                <p className={styles.block_644}>
                  Correct: Ok Google, ನನ ರ ಸಂಪಕ ದ
                </p>
                <p className={styles.block_645}>ಯನು ೕ ಸು.</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Question marks</p>
                <p className={'text'}>
                  Transcribe a sentence as a question if it is structured
                  grammatically as a sentence, or if it sounds like a question
                  because of its intonation.
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_649}>
                  Use a comma between reported speech verbs and direct
                  quotations, unless the speech verb is being used as a voice
                  command. Do not put punctuation within quotation marks unless
                  the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_650}>Correct: ನನ ತ ದ, "ಆ ಟ</p>
                <p className={styles.block_651}>ಸ ".</p>
                <p className={styles.block_652}>Incorrect: ನನ ತ ದ, "ಆ ಟ</p>
                <p className={styles.block_653}>ಸ ."</p>
                <p className={styles.block_654}>Incorrect: ನನ ತ ದ "ಆ ಟ</p>
                <p className={styles.block_653}>ಸ ."</p>
                <p className={styles.block_655}>Correct: "ಅನುಕರ ವ ಯಗ ".</p>
                <p className={styles.block_656}>
                  If the text in quotation marks is a complete sentence,
                  transcribe it as a complete sentence. Do not change the
                  punctuation of the quotation, and do not add punctuation
                  immediately after the quotation marks.
                </p>
                <p className={styles.block_657}>Correct: "ಕೃಷ ನು ದ, "3:00 ಗಂ</p>
                <p className={styles.block_658}>ೕಣ."</p>
                <p className={styles.block_659}>
                  Incorrect: ಕೃಷ ನು ದ, "3:00 ಗಂ
                </p>
                <p className={styles.block_660}>ೕಣ.".</p>
                <p className={styles.block_661}>Explanation: Since "3:00 ಗಂ</p>
                <p className={styles.block_662}>ೕಣ." is a complete sentence,</p>
                <p className={styles.block_663}>
                  there should be a period inside the quotation
                </p>
                <p className={styles.block_664}>
                  marks. Because of this, do not transcribe a
                </p>
                <p className={styles.block_665}>
                  period outside the quotation marks.
                </p>
                <p className={styles.block_666}>Correct: ನಸ ದ , " 3:00 ಗಂ</p>
                <p className={styles.block_667}>?"</p>
                <p className={styles.block_668}>Incorrect: ನಸ ದ , " 3:00 ಗಂ</p>
                <p className={styles.block_669}>?".</p>
                <p className={styles.block_670}>Correct: ನಸ ದ , "ಅ</p>
                <p className={styles.block_671}>ೕಣ ಂದು."</p>
                <p className={styles.block_672}>Explanation: ನಸ ದ , "ಅ</p>
                <p className={styles.block_673}>ೕಣ ಂದು."?</p>
                <p className={styles.block_674}>
                  Use a colon instead of quotation marks in voice actions when
                  the quote follows the command.
                </p>
                <p className={styles.block_675}>Correct: ಂ ಂತ : ?</p>
                <p className={styles.block_676}>Correct: arjeet@gmail.com ಇ-</p>
                <p className={styles.block_677}>ಕ ಸು : ತು ಇವತು ?</p>
                <p className={styles.block_678}>
                  Use quotation marks when the quote is in the middle of the
                  sentence.
                </p>
                <p className={styles.block_679}>Correct: ದು "ಐ ಲ ಯೂ."</p>
                <p className={styles.block_680}>ಂ ನ ?</p>
                <p className={styles.block_681}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_682}>
                  sentence, so use quotation marks.
                </p>
                <p className={styles.block_683}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate the words, even if
                  you'd consider the words as sentences in other situations.
                </p>
                <p className={styles.block_684}>
                  Do not use quotation marks when the speaker is using a word to
                  say something about the word itself.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_686}>
                  Apart from Kannada letters and the English letters a through
                  z, you should not use any other symbol than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'\_°:.()""{}[]√/@#+=%*&amp;-.;
                </p>
                <p className={styles.block_687}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_688}>
                  Include a hyphen between locations in flight itineraries.
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  If a speaker says the name of a punctuation mark, write out
                  the full word or words between curly brackets. Do not add
                  punctuation symbols after spoken punctuation.
                </p>
                <p className={styles.block_691}>Correct: {`{ಅಲ ಮ}`}</p>
                <p className={styles.block_692}>
                  {`{ಪ ಥ ಕ }`} ನು {`{ ಣ`}
                </p>
                <p className={styles.block_693}>{`ಮ}`}</p>
                <p className={styles.block_694}>Incorrect: , ? ನು</p>
                <p className={styles.block_695}>.</p>
                <p className={styles.block_696}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಅಲ ಮ </span>
                </p>
                <p className={styles.block_697}>ಪ ಥ ಕ ನು</p>
                <p className={styles.block_698}>
                  <span className={styles.text_11}>ಣ ಮ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_699}>
                  Correct: ಸ {} {} {}
                </p>
                <p className={styles.block_700}>Incorrect: ಸ ...</p>
                <p className={styles.block_701}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಸ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_702}>
                  However, don't spell out punctuation if it contradicts the
                  established transcription conventions of a certain phrase like
                  web pages, email addresses, addresses, phone numbers, etc.
                </p>
                <p className={styles.block_703}>Correct: www.fake-domain.com</p>
                <p className={styles.block_704}>Incorrect: ಡಬೂ ಡಬೂ ಡಬೂ {}</p>
                <p className={styles.block_705}>
                  {`{ಫ}`} {}
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಡಬೂ ಡಬೂ ಡಬೂ </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_11}>ಫ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_708}>
                  Explanation: Although the speaker said
                </p>
                <p className={styles.block_709}>" ", URLs have an esablished</p>
                <p className={styles.block_710}>
                  transcription convention that require the use
                </p>
                <p className={styles.block_711}>
                  of the symbols. So use a . instead of spelling it
                </p>
                <p className={styles.block_712}>out as {}.</p>
                <p className={styles.block_713}>
                  <span className={styles.text_14}>
                    Correct: +91 1234 123456{' '}
                  </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>ಪ ಒಂಬತು ಒಂದು ಒಂದು </span>
                </p>
                <p className={styles.block_714}>ಎರಡು ಮೂರು ಲು ಒಂದು ಎರಡು ಮೂರು</p>
                <p className={styles.block_715}>
                  <span className={styles.text_11}>ಲು ಐದು ಆರು </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_716}>
                  Explanation: Although the speaker said "ಪ ",
                </p>
                <p className={styles.block_717}>
                  phone numbers have an established
                </p>
                <p className={styles.block_710}>
                  transcription convention that require the use
                </p>
                <p className={styles.block_710}>
                  of the symbol. So use a "+" instead of spelling
                </p>
                <p className={styles.block_718}>it out as {`{ಪ }`}.</p>
                <p className={styles.block_719}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_720}>Correct: {`{ಪ ಥ ಕ }`}</p>
                <p className={styles.block_721}>Incorrect: ?</p>
                <p className={styles.block_722}>
                  <span className={styles.text_12}>Example audio: " </span>
                  <span className={styles.text_11}>ಪ ಥ ಕ </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_723}>
                  Treat spoken punctuation the same as regular punctuation, and
                  capitalize the following sentence as normal.
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
