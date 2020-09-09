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
            <PageContentHeader currentPage="Longform uk_ua_test_set" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content">
              <h2 id="calibre_link-1" className="large-heading">
                Transcription guiding principles
              </h2>
              <p className="text">
                This document summarizes the guiding principles for certain
                types of phrases, that are transcribed in ways that conflict
                with standard grammar rules for transcription language. For
                language specific transcription, follow the language specific
                written domain convention.
              </p>
              <div id="difficult-utterance">
                <h3 className="heading">Difficult utterances</h3>
                <p className="text">
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or different language varieties.
                </p>
                <p className={styles.block_4}>Skipping a prompt</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If you can't understand part of the audio, transcribe only
                      the part you can understand. For the part you cannot
                      understand, create a separate speaker segment and add the
                      Unintelligible label.
                    </span>
                  </div>
                  <div className={styles.block_6}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      For utterances that contain speech that is user-generated,
                      pre-recorded, or synthesized, transcribe all of it.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Hesitations and truncations</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If a very small part of a word (at most one syllable) has
                      been cut off, and you know what the word is supposed to
                      be, transcribe the entire word. If you are not sure what
                      the word should be, do not transcribe the word at all. Do
                      not put punctuation after words that have been cut off.
                    </span>
                  </div>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If a quotation is cut off in the middle, use an end
                      quotation mark anyway.
                    </span>
                  </div>
                  <div className={styles.block_6}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe only numbers that you hear even if the speaker
                      didn't finish saying the entire number.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Accents</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If you hear a word with non-standard pronunciation,
                      transcribe the word using the standard spelling
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> where is
                      dat
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Where is that?
                    </span>
                  </div>
                </div>
              </div>
              <div id="aggreed-spelling">
                <h3 className={styles.block_2}>Agreed spelling</h3>
                <p className={styles.block_3}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.
                </p>
                <p className={styles.block_4}>Spelling out</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If a word is spelled out, write it with spaces in between.
                      This rule does not apply to acronyms, URLs, or email
                      addresses.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> how do
                      you get to c o s t c o
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> How do you get
                      to c o s t c o?
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Interjections</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe words representing laughter or other non speech
                      vocalizations. Some of these words might be:
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      huh, woah, okay, yep, uh-huh, mhm, nah
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      This list is not exhaustive of all true interjections.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_6}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Annotate laughter that is included within speech.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Proper names</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      For proper names, always use the official spelling and
                      punctuation.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> will i
                      am
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> will.i.am
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If a personal name could have multiple spellings and
                      context does not help choose a spelling, use the spelling
                      that yields the most Google search hits when you search
                      for the name followed by the word "name" (without
                      quotation marks) (e.g. "Anna name").
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> mcdonald
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> MacDonald
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Brand and product</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Format brand and company names as officially formatted
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> the team
                      is sponsored by united healthcare
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> The team is
                      sponsored by UnitedHealthcare.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Media title</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Write media titles as they are most commonly written.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i>{' '}
                      screenshots of call of duty black ops two
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> screenshots of
                      Call of Duty: Black Ops 2
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Multiple spellings</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If you hear a word that does not sound like a standard
                      word of your language because there is a small sound
                      change (i.e. accent, speech errors, speech impairment,
                      etc.), transcribe the intended word.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> where is
                      the nearest liberry
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Where is the
                      nearest library?
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If you hear a word that does not sound like a standard
                      word of your language, but it is obviously based on real
                      words, suffixes, prefixes, infixes or circumfixes,
                      transcribe as is.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> interpretate
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If you hear a word that does not sound like a standard
                      word of your language because it appears to be nonsense,
                      first search for the word in Google. If there is a clear
                      candidate, transcribe that word. If there is not a clear
                      candidate, but it is easy to spell and articulated
                      clearly, transcribe it anyway. If there is no clear
                      candidate and it is not easy to spell, create a separate
                      speaker segment and add the Unintelligible label.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Souk Abdali
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Explanation:</i> User says
                      Souk Abdali. Transcriber searches “sukabdali”, finds
                      correct results. Transcribe Souk Abdali.
                    </span>
                  </div>
                </div>
              </div>
              <div id="punctuation">
                <h3 className={styles.block_2}>Punctuation</h3>
                <p className={styles.block_3}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in this section.
                </p>
                <p className={styles.block_4}>Fragments versus sentences</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Answers to questions and sentences with dropped subjects
                      should be transcribed with ending punctuation.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Who are you
                      talking about? The guy next door.
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Explanation:</i> two
                      speakers
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Commas</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_11}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Only use commas if they are required according to language
                      grammar.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Colon and quotation</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If a speaker is quoting another person, transcribe a comma
                      before the quoted speech.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> my
                      friend said alligator crocodile
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> My friend
                      said, "alligator crocodile".
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If the quoted text is a complete sentence, transcribe
                      ending punctuation inside the quotation marks. In cases
                      like these, do not add an additional ending punctuation
                      after the main sentence.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> jane
                      asked are we meeting at three o clock
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Jane asked,
                      "Are we meeting at 3:00?"
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Do not use quotation marks for metalinguistic uses of
                      words or phrases. These uses include defining the word,
                      talking about the spelling of the word, or any other type
                      of reference to the word itself as a thing.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> He just said
                      the word zucchini.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Other symbols</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Apart from standard letters, you should not use any other
                      symbol than: 0-9
                      äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;
                      {}[]√/@#$€£₹+=%*&amp;-.;
                    </span>
                  </div>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      When two opposing teams are mentioned, include a hyphen
                      between their names.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> are you
                      going to the saints bears game
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Are you going
                      to the Saints-Bears game?
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Include a hyphen between locations in flight itineraries.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> rome
                      london flight
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Rome-London
                      flight
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Spoken punctuation</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      For sentence-level spoken punctuation, write out the full
                      word or words between curly brackets. Do not add
                      punctuation symbols after spoken punctuation. Be careful
                      with homonyms.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> okay dot
                      dot dot
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Okay{' '}
                      {`{dot} {dot} {dot}`}
                    </span>
                  </div>
                </div>
              </div>
              <div id="format">
                <h3 className={styles.block_2}>Format</h3>
                <p className={styles.block_3}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this section.
                </p>
                <p className={styles.block_4}>Number</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Cardinals and ordinals from 0 to 9 are written with
                      letters (except for measures and currency - see Currency
                      and Unit). Use digits for cardinals and ordinals 10 and
                      above, even if they are coordinated with numbers under 10.
                      Transcribe all decimal numbers as digits.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> I have six
                      dogs and 12 parakeets.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      In math expressions or units &amp; measures, transcribe
                      fraction words using numerals and slashes. Be careful not
                      to use pre-combined fractions like "1⁄4".
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> in three
                      fourths of a mile turn right
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> In 3/4 of a
                      mi, turn right.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      For mixed numbers in math expressions and units &amp;
                      measures, transcribe them using numerals.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> the
                      koala weight twelve and a third pounds yesterday
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> The koala
                      weighed 12 and 1/3 lb yesterday.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      When referring to items (not units or measures), write
                      fractions out in words. With mixed numbers, write the
                      whole number part out in words if it is under ten,
                      otherwise write it with numerals.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> twelve
                      and a half pumpkin pies were made
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> 12 and a half
                      pumpkin pies were made.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe percentages using numerals followed by the "%"
                      sign. In the unlikely case that you encounter a number of
                      a million or greater used as a percentage, spell it out.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> two
                      percent milk
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> 2% milk
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Use Roman numerals only when part of an official name or
                      title.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> king
                      henry the eighth
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> King Henry
                      VIII
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe seasons and episodes of television shows with
                      numerals.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> season
                      three episode two
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> season 3
                      episode 2
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe phone numbers using the most common format(s)
                      in the transcription language.
                    </span>
                  </div>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe phone numbers as you would write them down in
                      their natural groups. When applicable, the STD code should
                      be surrounded by spaces.
                    </span>
                  </div>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Math expressions should be transcribed with numerals and
                      math symbols with spaces in between them.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> five
                      times six to the third
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> 5 / 6 ^ 3
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Currency and unit</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe currencies as commonly written in transcription
                      locale.
                    </span>
                  </div>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Abbreviate all units that follow numeric values.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> my
                      family bought ten liters of orange juice
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> My family
                      bought 10 L of orange juice.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If it is clear from context that a number or number
                      sequence refers to currency or time, format it as such.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> milk is
                      two ninety nine
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Milk is $2.99.
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Date and time</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Use the common form for transcribing dates and times as
                      used in transcription language.
                    </span>
                  </div>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Write times in hh:mm format whenever possible, unless it
                      would look unnatural to do so.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> a few
                      minutes after three
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> a few minutes
                      after 3:00
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Address</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Write out the full names of locations, roads, states, etc.
                      Only use abbreviations when explicitly spoken.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> 751 Jefferson
                      Street, New York City
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Transcribe entities and locations by using a comma between
                      them "ENTITY, LOCATION"
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> McDonald's,
                      Castro Street
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Web</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Write URLs, email addresses, and Twitter hashtags as they
                      are spoken and don't capitalize them.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> im so
                      hashtag hungry i could eat a whole pizza
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> I'm so #hungry
                      I could eat a whole pizza.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Do not correct speaker errors such as transcribing a slash
                      when the user actually says "backslash".
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> h t t p
                      colon backslash backslash mail dot yahoo dot com
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i>{' '}
                      http:\mail.yahoo.com
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If the speaker drops a "w" or dots and it's an obvious
                      URL, you should correct these errors. If the speaker
                      doesn't say the "w"s at all, do not add them.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> w w
                      facebook dot com
                    </span>
                  </div>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i>{' '}
                      www.facebook.com
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      If a URL is spelled out in individual letters, transcribe
                      without spaces between individual letters.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Example Audio:</i> w w w
                      dot t a r g e t dot c o m”
                    </span>
                  </div>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> www.target.com
                    </span>
                  </div>
                </div>
                <p className={styles.block_7}>Abbreviation</p>
                <div className={styles.calibre1}>
                  <div className={styles.block_5}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      Do not abbreviate unless the speaker says an abbreviated
                      form.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_9}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> Warriors
                      versus Lakers
                    </span>
                  </div>
                </div>
                <div className={styles.calibre1}>
                  <div className={styles.block_8}>
                    <span className={styles.bullet_}>●&nbsp;</span>
                    <span className={'text'}>
                      In acronyms, do not use periods between letters.
                    </span>
                  </div>
                </div>
                <div className={styles.calibre3}>
                  <div className={styles.block_10}>
                    <span className={styles.bullet_}>○&nbsp;</span>
                    <span className={'text'}>
                      <i className={styles.calibre4}>Correct:</i> NASA, NASCAR,
                      AAMCO, ZIP code
                    </span>
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
