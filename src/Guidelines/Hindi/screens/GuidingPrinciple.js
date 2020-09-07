import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import styles from '../css/styles.module.css'
import Wrapper from '../Wrapper'

const GuidingPrinciplesUK_UA = () => {
  const classes = useStyles()
  const headingIds = [
    'difficult-utterance',
    'aggreed-spelling',
    'punctuation',
    'format',
  ]
  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Hindi" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p className={'large-heading'}>
                Transcription guiding principles{' '}
              </p>
              <p className={'text'}>
                This document summarizes the guiding principles for certain
                types of phrases, that are transcribed in ways that conflict
                with standard grammar rules for transcription language. For
                language specific transcription, follow the language specific
                written domain convention.{' '}
              </p>
              <div id="difficult-utterance">
                <p className={'heading'}>Difficult utterances </p>
                <p className={'text'}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or different language varieties.{' '}
                </p>
                <p className={styles.block_6}>Skipping a prompt </p>
                <p className={styles.block_7}>
                  ● If you can't understand part of the audio, transcribe only
                  the part you can understand. For the part you cannot
                  understand, create a separate speaker segment and add the
                  Unintelligible label.{' '}
                </p>
                <p className={styles.block_8}>
                  ● For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.{' '}
                </p>
                <p className={styles.block_9}>Hesitations and truncations </p>
                <p className={styles.block_10}>
                  ● If a very small part of a word (at most one syllable) has
                  been cut off, and you know what the word is supposed to be,
                  transcribe the entire word. If you are not sure what the word
                  should be, do not transcribe the word at all. Do not put
                  punctuation after words that have been cut off.{' '}
                </p>
                <p className={styles.block_11}>
                  ● If a quotation is cut off in the middle, use an end
                  quotation mark anyway.{' '}
                </p>
                <p className={styles.block_12}>
                  ● Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.{' '}
                </p>
                <p className={styles.block_13}>Accents </p>
                <p className={styles.block_14}>
                  ● If you hear a word with non-standard pronunciation,
                  transcribe the word using the standard spelling{' '}
                </p>
                <p className={styles.block_15}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>where is
                  dat{' '}
                </p>
                <p className={styles.block_16}>
                  ○ <i className={styles.calibre1}>Correct: </i>Where is that?{' '}
                </p>
              </div>
              <div id="aggreed-spelling">
                <p className={'heading'}>Agreed spelling </p>
                <p className={'text'}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.{' '}
                </p>
                <p className={styles.block_19}>Spelling out </p>
                <p className={styles.block_20}>
                  ● If a word is spelled out, write it with spaces in between.
                  This rule does not apply to acronyms, URLs, or email
                  addresses.{' '}
                </p>
                <p className={styles.block_21}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>how do you
                  get to c o s t c o{' '}
                </p>
                <p className={styles.block_22}>
                  ○ <i className={styles.calibre1}>Correct: </i>How do you get
                  to c o s t c o?{' '}
                </p>
                <p className={styles.block_23}>Interjections </p>
                <p className={styles.block_24}>
                  ● Transcribe words representing laughter or other non speech
                  vocalizations. Some of these words might be:{' '}
                </p>
                <p className={styles.block_25}>
                  ○ huh, woah, okay, yep, uh-huh, mhm, nah{' '}
                </p>
                <p className={styles.block_26}>
                  ○ This list is not exhaustive of all true interjections.{' '}
                </p>
                <p className={styles.block_27}>
                  ● Annotate laughter that is included within speech.{' '}
                </p>
                <p className={styles.block_28}>Proper names </p>
                <p className={styles.block_29}>
                  ● For proper names, always use the official spelling and
                  punctuation.{' '}
                </p>
                <p className={styles.block_30}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>will i am{' '}
                </p>
                <p className={styles.block_31}>
                  ○ <i className={styles.calibre1}>Correct: </i>will.i.am{' '}
                </p>
                <p className={styles.block_32}>
                  ● If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").{' '}
                </p>
                <p className={styles.block_33}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>mcdonald{' '}
                </p>
                <p className={styles.block_34}>
                  ○ <i className={styles.calibre1}>Correct: </i>MacDonald{' '}
                </p>
                <p className={styles.block_35}>Brand and product </p>
                <p className={styles.block_36}>
                  ● Format brand and company names as officially formatted{' '}
                </p>
                <p className={styles.block_37}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>the team
                  is sponsored by united healthcare{' '}
                </p>
                <p className={styles.block_38}>
                  ○ <i className={styles.calibre1}>Correct: </i>The team is
                  sponsored by UnitedHealthcare.{' '}
                </p>
                <p className={styles.block_39}>Media title </p>
                <p className={styles.block_40}>
                  ● Write media titles as they are most commonly written.{' '}
                </p>
                <p className={styles.block_41}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>
                  screenshots of call of duty black ops two{' '}
                </p>
                <p className={styles.block_42}>
                  ○ <i className={styles.calibre1}>Correct: </i>screenshots of
                  Call of Duty: Black Ops 2{' '}
                </p>
                <p className={styles.block_43}>Multiple spellings </p>
                <p className={styles.block_44}>
                  ● If you hear a word that does not sound like a standard word
                  of your language because there is a small sound change (i.e.
                  accent, speech errors, speech impairment, etc.), transcribe
                  the intended word.{' '}
                </p>
                <p className={styles.block_45}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>where is
                  the nearest liberry{' '}
                </p>
                <p className={styles.block_46}>
                  ○ <i className={styles.calibre1}>Correct: </i>Where is the
                  nearest library?{' '}
                </p>
                <p className={styles.block_47}>
                  ● If you hear a word that does not sound like a standard word
                  of your language, but it is obviously based on real words,
                  suffixes, prefixes, infixes or circumfixes, transcribe as is.{' '}
                </p>
                <p className={styles.block_48}>
                  ○ <i className={styles.calibre1}>Correct: </i>interpretate{' '}
                </p>
                <p className={styles.block_49}>
                  ● If you hear a word that does not sound like a standard word
                  of your language because it appears to be nonsense, first
                  search for the word in Google. If there is a clear candidate,
                  transcribe that word. If there is not a clear candidate, but
                  it is easy to spell and articulated clearly, transcribe it
                  anyway. If there is no clear candidate and it is not easy to
                  spell, create a separate speaker segment and add the
                  Unintelligible label.{' '}
                </p>
                <p className={styles.block_50}>
                  ○ <i className={styles.calibre1}>Correct: </i>Souk Abdali{' '}
                </p>
                <p className={styles.block_51}>
                  ○ <i className={styles.calibre1}>Explanation: </i>User says
                  Souk Abdali. Transcriber searches “sukabdali”, finds correct
                  results. Transcribe Souk Abdali.{' '}
                </p>
              </div>
              <div id="punctuation">
                <p className={'heading'}>Punctuation </p>
                <p className={styles.block_53}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in this section.{' '}
                </p>
                <p className={styles.block_54}>Fragments versus sentences </p>
                <p className={styles.block_55}>
                  ● Answers to questions and sentences with dropped subjects
                  should be transcribed with ending punctuation.{' '}
                </p>
                <p className={styles.block_56}>
                  ○ <i className={styles.calibre1}>Correct: </i>Who are you
                  talking about? The guy next door.{' '}
                </p>
                <p className={styles.block_57}>
                  ○ <i className={styles.calibre1}>Explanation: </i>two speakers{' '}
                </p>
                <p className={styles.block_58}>Commas </p>
                <p className={styles.block_59}>
                  ● Only use commas if they are required according to language
                  grammar.{' '}
                </p>
                <p className={styles.block_60}>Colon and quotation </p>
                <p className={styles.block_61}>
                  ● If a speaker is quoting another person, transcribe a comma
                  before the quoted speech.{' '}
                </p>
                <p className={styles.block_62}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>my friend
                  said alligator crocodile{' '}
                </p>
                <p className={styles.block_63}>
                  ○ <i className={styles.calibre1}>Correct: </i>My friend said,
                  "alligator crocodile".{' '}
                </p>
                <p className={styles.block_64}>
                  ● If the quoted text is a complete sentence, transcribe ending
                  punctuation inside the quotation marks. In cases like these,
                  do not add an additional ending punctuation after the main
                  sentence.{' '}
                </p>
                <p className={styles.block_65}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>jane asked
                  are we meeting at three o clock{' '}
                </p>
                <p className={styles.block_66}>
                  ○ <i className={styles.calibre1}>Correct: </i>Jane asked, "Are
                  we meeting at 3:00?"{' '}
                </p>
                <p className={styles.block_67}>
                  ● Do not use quotation marks for metalinguistic uses of words
                  or phrases. These uses include defining the word, talking
                  about the spelling of the word, or any other type of reference
                  to the word itself as a thing.{' '}
                </p>
                <p className={styles.block_68}>
                  ○ <i className={styles.calibre1}>Correct: </i>He just said the
                  word zucchini.{' '}
                </p>
                <p className={styles.block_69}>Other symbols </p>
                <p className={styles.block_70}>
                  ● Apart from standard letters, you should not use any other
                  symbol than: 0-9
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£₹+= %*&amp;-.;{' '}
                </p>
                <p className={styles.block_71}>
                  ● When two opposing teams are mentioned, include a hyphen
                  between their names.{' '}
                </p>
                <p className={styles.block_72}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>are you
                  going to the saints bears game{' '}
                </p>
                <p className={styles.block_26}>
                  ○ <i className={styles.calibre1}>Correct: </i>Are you going to
                  the Saints-Bears game?{' '}
                </p>
                <p className={styles.block_73}>
                  ● Include a hyphen between locations in flight itineraries.{' '}
                </p>
                <p className={styles.block_74}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>rome
                  london flight{' '}
                </p>
                <p className={styles.block_15}>
                  ○ <i className={styles.calibre1}>Correct: </i>Rome-London
                  flight{' '}
                </p>
                <p className={styles.block_75}>Spoken punctuation </p>
                <p className={styles.block_76}>
                  ● For sentence-level spoken punctuation, write out the full
                  word or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.{' '}
                </p>
                <p className={styles.block_77}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>okay dot
                  dot dot{' '}
                </p>
                <p className={styles.block_78}>
                  ○ <i className={styles.calibre1}>Correct: </i>Okay{' '}
                  {`{dot} {dot} {dot}`}{' '}
                </p>
              </div>
              <div id="format">
                <p className={'heading'}>Format </p>
                <p className={'text'}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this section.{' '}
                </p>
                <p className={styles.block_81}>Number </p>
                <p className={styles.block_82}>
                  ● Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.{' '}
                </p>
                <p className={styles.block_83}>
                  ○ <i className={styles.calibre1}>Correct: </i>I have six dogs
                  and 12 parakeets.{' '}
                </p>
                <p className={styles.block_84}>
                  ● In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes. Be careful not to
                  use pre-combined fractions like "1⁄4".{' '}
                </p>
                <p className={styles.block_85}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>in three
                  fourths of a mile turn right{' '}
                </p>
                <p className={styles.block_86}>
                  ○ <i className={styles.calibre1}>Correct: </i>In 3/4 of a mi,
                  turn right.{' '}
                </p>
                <p className={styles.block_87}>
                  ● For mixed numbers in math expressions and units &amp;
                  measures, transcribe them using numerals.{' '}
                </p>
                <p className={styles.block_88}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>the koala
                  weight twelve and a third pounds yesterday{' '}
                </p>
                <p className={styles.block_89}>
                  ○ <i className={styles.calibre1}>Correct: </i>The koala
                  weighed 12 and 1/3 lb yesterday.{' '}
                </p>
                <p className={styles.block_67}>
                  ● When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.{' '}
                </p>
                <p className={styles.block_90}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>twelve and
                  a half pumpkin pies were made{' '}
                </p>
                <p className={styles.block_91}>
                  ○ <i className={styles.calibre1}>Correct: </i>12 and a half
                  pumpkin pies were made.{' '}
                </p>
                <p className={styles.block_92}>
                  ● Transcribe percentages using numerals followed by the "%"
                  sign. In the unlikely case that you encounter a number of a
                  million or greater used as a percentage, spell it out.{' '}
                </p>
                <p className={styles.block_93}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>two
                  percent milk{' '}
                </p>
                <p className={styles.block_94}>
                  ○ <i className={styles.calibre1}>Correct: </i>2% milk{' '}
                </p>
                <p className={styles.block_95}>
                  ● Use Roman numerals only when part of an official name or
                  title.{' '}
                </p>
                <p className={styles.block_96}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>king henry
                  the eighth{' '}
                </p>
                <p className={styles.block_97}>
                  ○ <i className={styles.calibre1}>Correct: </i>King Henry VIII{' '}
                </p>
                <p className={styles.block_98}>
                  ● Transcribe seasons and episodes of television shows with
                  numerals.{' '}
                </p>
                <p className={styles.block_99}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>season
                  three episode two{' '}
                </p>
                <p className={styles.block_100}>
                  ○ <i className={styles.calibre1}>Correct: </i>season 3 episode
                  2{' '}
                </p>
                <p className={styles.block_101}>
                  ● Transcribe phone numbers using the most common format(s) in
                  the transcription language.{' '}
                </p>
                <p className={styles.block_102}>
                  ● Transcribe phone numbers as you would write them down in
                  their natural groups. When applicable, the STD code should be
                  surrounded by spaces.{' '}
                </p>
                <p className={styles.block_103}>
                  ● Math expressions should be transcribed with numerals and
                  math symbols with spaces in between them.{' '}
                </p>
                <p className={styles.block_104}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>five times
                  six to the third{' '}
                </p>
                <p className={styles.block_105}>
                  ○ <i className={styles.calibre1}>Correct: </i>5 / 6 ^ 3{' '}
                </p>
                <p className={styles.block_106}>Currency and unit </p>
                <p className={styles.block_107}>
                  ● Transcribe currencies as commonly written in transcription
                  locale.{' '}
                </p>
                <p className={styles.block_108}>
                  ● Abbreviate all units that follow numeric values.{' '}
                </p>
                <p className={styles.block_109}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>my family
                  bought ten liters of orange juice{' '}
                </p>
                <p className={styles.block_110}>
                  ○ <i className={styles.calibre1}>Correct: </i>My family bought
                  10 L of orange juice.{' '}
                </p>
                <p className={styles.block_47}>
                  ● If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.{' '}
                </p>
                <p className={styles.block_111}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>milk is
                  two ninety nine{' '}
                </p>
                <p className={styles.block_112}>
                  ○ <i className={styles.calibre1}>Correct: </i>Milk is $2.99.{' '}
                </p>
                <p className={styles.block_113}>Date and time </p>
                <p className={styles.block_114}>
                  ● Use the common form for transcribing dates and times as used
                  in transcription language.{' '}
                </p>
                <p className={styles.block_103}>
                  ● Write times in hh:mm format whenever possible, unless it
                  would look unnatural to do so.{' '}
                </p>
                <p className={styles.block_115}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>a few
                  minutes after three{' '}
                </p>
                <p className={styles.block_116}>
                  ○ <i className={styles.calibre1}>Correct: </i>a few minutes
                  after 3:00{' '}
                </p>
                <p className={styles.block_117}>Address </p>
                <p className={styles.block_118}>
                  ● Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.{' '}
                </p>
                <p className={styles.block_119}>
                  ○ <i className={styles.calibre1}>Correct: </i>751 Jefferson
                  Street, New York City{' '}
                </p>
                <p className={styles.block_120}>
                  ● Transcribe entities and locations by using a comma between
                  them "ENTITY, LOCATION"{' '}
                </p>
                <p className={styles.block_121}>
                  ○ <i className={styles.calibre1}>Correct: </i>McDonald's,
                  Castro Street{' '}
                </p>
                <p className={styles.block_122}>Web </p>
                <p className={styles.block_124}>
                  <sub className={styles.calibre2}>● </sub>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don’t capitalize them
                </p>
                <p className={styles.block_125}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>im so
                  hashtag hungry i could eat a whole pizza{' '}
                </p>
                <p className={styles.block_126}>
                  ○ <i className={styles.calibre1}>Correct: </i>I'm so #hungry I
                  could eat a whole pizza.{' '}
                </p>
                <p className={styles.block_12}>
                  ● Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".{' '}
                </p>
                <p className={styles.block_127}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>h t t p
                  colon backslash backslash mail dot yahoo dot com{' '}
                </p>
                <p className={styles.block_128}>
                  ○ <i className={styles.calibre1}>Correct: </i>
                  http:\mail.yahoo.com{' '}
                </p>
                <p className={styles.block_129}>
                  ● If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors.
                </p>
                <p className={styles.block_129}>
                  {' '}
                  If the speaker doesn't say the "w"s at all, do not add them.{' '}
                </p>
                <p className={styles.block_130}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>w w
                  facebook dot com{' '}
                </p>
                <p className={styles.block_131}>
                  ○ <i className={styles.calibre1}>Correct: </i>www.facebook.com{' '}
                </p>
                <p className={styles.block_132}>
                  ● If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.{' '}
                </p>
                <p className={styles.block_133}>
                  ○ <i className={styles.calibre1}>Example Audio: </i>w w w dot
                  t a r g e t dot c o m”{' '}
                </p>
                <p className={styles.block_134}>
                  ○ <i className={styles.calibre1}>Correct: </i>www.target.com{' '}
                </p>
                <p className={styles.block_135}>Abbreviation </p>
                <p className={styles.block_136}>
                  ● Do not abbreviate unless the speaker says an abbreviated
                  form.{' '}
                </p>
                <p className={styles.block_137}>
                  ○ <i className={styles.calibre1}>Correct: </i>Warriors versus
                  Lakers{' '}
                </p>
                <p className={styles.block_138}>
                  ● In acronyms, do not use periods between letters.{' '}
                </p>
                <p className={styles.block_139}>
                  ○ <i className={styles.calibre1}>Correct: </i>NASA, NASCAR,
                  AAMCO, ZIP code{' '}
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Guiding Principles"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default GuidingPrinciplesUK_UA

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
