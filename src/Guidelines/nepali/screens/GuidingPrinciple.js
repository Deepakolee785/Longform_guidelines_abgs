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
            <PageContentHeader currentPage="Nepali" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p className={'large-heading'}>
                Transcription guiding principles
              </p>
              <p className={'text'}>
                This document summarizes the guiding principles for certain
                types of phrases, that are transcribed in ways that conflict
                with standard grammar rules for transcription language. For
                language specific transcription, follow the language specific
                written domain convention.
              </p>
              <div id="difficult-utterance">
                <p className={'heading'}>Difficult utterances</p>
                <p className={'text'}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or different language varieties.
                </p>
                <p className={styles.block_8}>&nbsp;</p>
                <p className={styles.block_9}>Skipping a prompt</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_11}>
                    &#x25cf;&nbsp;If you can't understand part of the audio,
                    transcribe only the part you can understand. For the part
                    you cannot understand, create a separate speaker segment and
                    add the Unintelligible label.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_12}>
                    &#x25cf;&nbsp;For utterances that contain speech that is
                    user-generated, pre-recorded, or synthesized, transcribe all
                    of it.
                  </div>
                </div>
                <p className={styles.block_13}>&nbsp;</p>
                <p className={styles.block_9}>Hesitations and truncations</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_14}>
                    &#x25cf;&nbsp;If a very small part of a word (at most one
                    syllable) has been cut off, and you know what the word is
                    supposed to be, transcribe the entire word. If you are not
                    sure what the word should be, do not transcribe the word at
                    all. Do not put punctuation after words that have been cut
                    off.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;If a quotation is cut off in the middle, use
                    an end quotation mark anyway.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_16}>
                    &#x25cf;&nbsp;Transcribe only numbers that you hear even if
                    the speaker didn't finish saying the entire number.
                  </div>
                </div>
                <p className={styles.block_17}>&nbsp;</p>
                <p className={styles.block_9}>Accents</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_18}>
                    &#x25cf;&nbsp;If you hear a word with non-standard
                    pronunciation, transcribe the word using the standard
                    spelling
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>where is
                    dat
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Where is that?
                  </div>
                </div>
              </div>
              <div id="aggreed-spelling">
                <p className={styles.block_2}>Agreed spelling</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-2" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_22}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.
                </p>
                <p className={styles.block_13}>&nbsp;</p>
                <p className={styles.block_9}>Spelling out</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_23}>
                    &#x25cf;&nbsp;If a word is spelled out, write it with spaces
                    in between. This rule does not apply to acronyms, URLs, or
                    email addresses.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>how do you
                    get to c o s t c o
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    How do you get to c o s t c o?
                  </div>
                </div>
                <p className={styles.block_9}>Interjections</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_25}>
                    &#x25cf;&nbsp;Transcribe words representing laughter or
                    other non speech vocalizations. Some of these words might
                    be:
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;huh, woah, okay, yep, uh-huh, mhm, nah
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;This list is not exhaustive of all true
                    interjections.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Annotate laughter that is included within
                    speech.
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Proper names</p>
                <p className={styles.block_24}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;For proper names, always use the official
                    spelling and punctuation.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>will i am
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    will.i.am
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_26}>
                    &#x25cf;&nbsp;If a personal name could have multiple
                    spellings and context does not help choose a spelling, use
                    the spelling that yields the most Google search hits when
                    you search for the name followed by the word "name" (without
                    quotation marks) (e.g. "Anna name").
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>
                    mcdonald
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    MacDonald
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Brand and product</p>
                <p className={styles.block_13}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Format brand and company names as officially
                    formatted
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>the team
                    is sponsored by united healthcare
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    The team is sponsored by UnitedHealthcare.
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Media title</p>
                <p className={styles.block_24}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Write media titles as they are most commonly
                    written.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>
                    screenshots of call of duty black ops two
                  </div>
                </div>
                <p className={styles.block_19}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div id="calibre_link-3" className={styles.block_27}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    screenshots of Call of Duty: Black Ops 2
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Multiple spellings</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_28}>
                    &#x25cf;&nbsp;If you hear a word that does not sound like a
                    standard word of your language because there is a small
                    sound change (i.e. accent, speech errors, speech impairment,
                    etc.), transcribe the intended word.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>where is
                    the nearest liberry
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Where is the nearest library?
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_29}>
                    &#x25cf;&nbsp;If you hear a word that does not sound like a
                    standard word of your language, but it is obviously based on
                    real words, suffixes, prefixes, infixes or circumfixes,
                    transcribe as is.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    interpretate
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_30}>
                    &#x25cf;&nbsp;If you hear a word that does not sound like a
                    standard word of your language because it appears to be
                    nonsense, first search for the word in Google. If there is a
                    clear candidate, transcribe that word. If there is not a
                    clear candidate, but it is easy to spell and articulated
                    clearly, transcribe it anyway. If there is no clear
                    candidate and it is not easy to spell, create a separate
                    speaker segment and add the Unintelligible label.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Souk Abdali
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_31}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre3}>Explanation: </i>
                    User says Souk Abdali. Transcriber searches “sukabdali”,
                    finds correct
                    <i className={styles.calibre3}> </i>results. Transcribe Souk
                    Abdali.
                  </div>
                </div>
              </div>
              <p className={styles.block_32}>&nbsp;</p>
              <div id="punctuation">
                <p className={styles.block_2}>Punctuation</p>
                <p className={styles.block_6}>&nbsp;</p>
                <p className={styles.block_33}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in this section.
                </p>
                <p className={styles.block_13}>&nbsp;</p>
                <p className={styles.block_9}>Fragments versus sentences</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_34}>
                    &#x25cf;&nbsp;Answers to questions and sentences with
                    dropped subjects should be transcribed with ending
                    punctuation.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Who are you talking about? The guy next door.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Explanation: </i>
                    two speakers
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Commas</p>
                <p className={styles.block_24}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Only use commas if they are required according
                    to language grammar.
                  </div>
                </div>
                <p className={styles.block_17}>&nbsp;</p>
                <p className={styles.block_9}>Colon and quotation</p>
                <p className={styles.block_24}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;If a speaker is quoting another person,
                    transcribe a comma before the quoted speech.
                  </div>
                </div>
                <p className={styles.block_19}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div id="calibre_link-4" className={styles.block_27}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>my friend
                    said alligator crocodile
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>My
                    friend said, "alligator crocodile".
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_34}>
                    &#x25cf;&nbsp;If the quoted text is a complete sentence,
                    transcribe ending punctuation inside the quotation marks. In
                    cases like these, do not add an additional ending
                    punctuation after the main sentence.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>jane asked
                    are we meeting at three o clock
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Jane asked, "Are we meeting at 3:00?"
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_35}>
                    &#x25cf;&nbsp;Do not use quotation marks for metalinguistic
                    uses of words or phrases. These uses include defining the
                    word, talking about the spelling of the word, or any other
                    type of reference to the word itself as a thing.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>He
                    just said the word zucchini.
                  </div>
                </div>
                <p className={styles.block_6}>&nbsp;</p>
                <p className={styles.block_9}>Other symbols</p>
                <p className={styles.block_24}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Apart from standard letters, you should not
                    use any other symbol than: 0-9
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_36}>
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£₹+=%*
                </p>
                <p className={styles.block_37}>&amp;-.;</p>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;When two opposing teams are mentioned, include
                    a hyphen between their names.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>are you
                    going to the saints bears game
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Are you going to the Saints-Bears game?
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Include a hyphen between locations in flight
                    itineraries.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>rome
                    london flight
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Rome-London flight
                  </div>
                </div>
                <p className={styles.block_6}>&nbsp;</p>
                <p className={styles.block_9}>Spoken punctuation</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_38}>
                    &#x25cf;&nbsp;For sentence-level spoken punctuation, write
                    out the full word or words between curly brackets. Do not
                    add punctuation symbols after spoken punctuation. Be careful
                    with homonyms.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>okay dot
                    dot dot
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Okay {`{dot} {dot} {dot}`}
                  </div>
                </div>
              </div>
              <div id="format">
                <p className={styles.block_21}>&nbsp;</p>
                <p className={styles.block_2}>Format</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p className={styles.block_39}>&nbsp;</p>
                <p className={styles.block_40}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this section.
                </p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-5" className={styles.block_41}>
                  Number
                </p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_42}>
                    &#x25cf;&nbsp;Cardinals and ordinals from 0 to 9 are written
                    with letters (except for measures and currency - see
                    Currency and Unit). Use digits for cardinals and ordinals 10
                    and above, even if they are coordinated with numbers under
                    10. Transcribe all decimal numbers as digits.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>I
                    have six dogs and 12 parakeets.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_42}>
                    &#x25cf;&nbsp;In math expressions or units &amp; measures,
                    transcribe fraction words using numerals and slashes. Be
                    careful not to use pre-combined fractions like "1⁄4".
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>in three
                    fourths of a mile turn right
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>In
                    3/4 of a mi, turn right.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_43}>
                    &#x25cf;&nbsp;For mixed numbers in math expressions and
                    units &amp; measures, transcribe them using numerals.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>the koala
                    weight twelve and a third pounds yesterday
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    The koala weighed 12 and 1/3 lb yesterday.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_30}>
                    &#x25cf;&nbsp;When referring to items (not units or
                    measures), write fractions out in words. With mixed numbers,
                    write the whole number part out in words if it is under ten,
                    otherwise write it with numerals.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>
                    twelve and a half pumpkin pies were made
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>12
                    and a half pumpkin pies were made.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_44}>
                    &#x25cf;&nbsp;Transcribe percentages using numerals followed
                    by the "%" sign. In the unlikely case that you encounter a
                    number of a million or greater used as a percentage, spell
                    it out.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>two
                    percent milk
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>2%
                    milk
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Use Roman numerals only when part of an
                    official name or title.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>king henry
                    the eighth
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    King Henry VIII
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Transcribe seasons and episodes of television
                    shows with numerals.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>
                    season three episode two
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    season 3 episode 2
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_45}>
                    &#x25cf;&nbsp;Transcribe phone numbers using the most common
                    format(s) in the transcription language.
                  </div>
                </div>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-6" className={styles.block_20}>
                  &nbsp;
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_16}>
                    &#x25cf;&nbsp;Transcribe phone numbers as you would write
                    them down in their natural groups. When applicable, the STD
                    code should be surrounded by spaces.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_46}>
                    &#x25cf;&nbsp;Math expressions should be transcribed with
                    numerals and math symbols with spaces in between them.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>five times
                    six to the third
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>5
                    / 6 ^ 3
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Currency and unit</p>
                <p className={styles.block_24}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Transcribe currencies as commonly written in
                    transcription locale.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Abbreviate all units that follow numeric
                    values.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>my family
                    bought ten liters of orange juice
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>My
                    family bought 10 L of orange juice.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_34}>
                    &#x25cf;&nbsp;If it is clear from context that a number or
                    number sequence refers to currency or time, format it as
                    such.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>milk is
                    two ninety nine
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Milk is $2.99.
                  </div>
                </div>
                <p className={styles.block_6}>&nbsp;</p>
                <p className={styles.block_9}>Date and time</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_47}>
                    &#x25cf;&nbsp;Use the common form for transcribing dates and
                    times as used in transcription language.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_48}>
                    &#x25cf;&nbsp;Write times in hh:mm format whenever possible,
                    unless it would look unnatural to do so.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>a few
                    minutes after three
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>a
                    few minutes after 3:00
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Address</p>
                <p className={styles.block_10}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_49}>
                    &#x25cf;&nbsp;Write out the full names of locations, roads,
                    states, etc. Only use abbreviations when explicitly spoken.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    751 Jefferson Street, New York City
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Transcribe entities and locations by using a
                    comma between them "ENTITY,
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_50}>LOCATION"</p>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    McDonald's, Castro Street
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Web</p>
                <p className={styles.block_19}>&nbsp;</p>
                <p id="calibre_link-7" className={styles.block_20}>
                  &nbsp;
                </p>
                <div className={styles.calibre1}>
                  <div className={styles.block_51}>
                    &#x25cf;&nbsp;Write URLs, email addresses, and Twitter
                    hashtags as they are spoken and don't capitalize them.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>im so
                    hashtag hungry i could eat a whole pizza
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    I'm so #hungry I could eat a whole pizza.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_34}>
                    &#x25cf;&nbsp;Do not correct speaker errors such as
                    transcribing a slash when the user actually says
                    "backslash".
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>h t t p
                    colon backslash backslash mail dot yahoo dot com
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    http:\mail.yahoo.com
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_31}>
                    &#x25cf;&nbsp;If the speaker drops a "w" or dots and it's an
                    obvious URL, you should correct these errors. If the speaker
                    doesn't say the "w"s at all, do not add them.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>w w
                    facebook dot com
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    www.facebook.com
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_52}>
                    &#x25cf;&nbsp;If a URL is spelled out in individual letters,
                    transcribe without spaces between individual letters.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;
                    <i className={styles.calibre2}>Example Audio: </i>w w w dot
                    t a r g e t dot c o m”
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    www.target.com
                  </div>
                </div>
                <p className={styles.block_24}>&nbsp;</p>
                <p className={styles.block_9}>Abbreviation</p>
                <p className={styles.block_13}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;Do not abbreviate unless the speaker says an
                    abbreviated form.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    Warriors versus Lakers
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;In acronyms, do not use periods between
                    letters.
                  </div>
                </div>
                <p className={styles.block_}>&nbsp;</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_15}>
                    &#x25cf;&nbsp;<i className={styles.calibre2}>Correct: </i>
                    NASA, NASCAR, AAMCO, ZIP code
                  </div>
                </div>
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
