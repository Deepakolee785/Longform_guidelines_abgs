import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'

const GuidingPrinciples = () => {
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
            <PageContentHeader currentPage="longform nl_nl_test_set" />

            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content">
              <div>
                <h1 className="heading"> Transcription guiding principles</h1>
                <p className="text">
                  This document summarizes the guiding principles for certain
                  types of phrases, that are transcribed in ways that conflict
                  with standard grammar rules for transcription language. For
                  language specific transcription, follow the language specific
                  written domain convention.
                </p>
              </div>
              <div className="principles">
                <div id="difficult-utterance">
                  <h1 className="sub-heading">Difficult utterances</h1>
                  <p className="text">
                    Everything relating to problematic utterances (background
                    noise, false starts, etc.) or different language varieties.
                  </p>

                  <div className="principle">
                    <h2 className="bold-heading">Skipping a prompt</h2>
                    <ul>
                      <li>
                        If you can't understand part of the audio, transcribe
                        only the part you can understand. For the part you
                        cannot understand, create a separate speaker segment and
                        add the Unintelligible label.
                      </li>
                      <li>
                        For utterances that contain speech that is
                        user-generated, pre-recorded, or synthesized, transcribe
                        all of it.
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">
                      Hesitations and truncations
                    </h2>
                    <ul>
                      <li>
                        If a very small part of a word (at most one syllable)
                        has been cut off, and you know what the word is supposed
                        to be, transcribe the entire word. If you are not sure
                        what the word should be, do not transcribe the word at
                        all. Do not put punctuation after words that have been
                        cut off.
                      </li>
                      <li>
                        If a quotation is cut off in the middle, use an end
                        quotation mark anyway.
                      </li>
                      <li>
                        Transcribe only numbers that you hear even if the
                        speaker didn't finish saying the entire number.
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Accents</h2>
                    <ul>
                      <li>
                        If you hear a word with non-standard pronunciation,
                        transcribe the word using the standard spelling
                        <ul>
                          <li>
                            <em>Example Audio:</em> where is dat
                          </li>
                          <li>
                            <em>Correct:</em> Where is that?
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="aggreed-spelling">
                  <h1 className="sub-heading">Agreed spelling</h1>
                  <p className="text">
                    Spelling conventions for words where several options are
                    thinkable, as well as proper names.
                  </p>

                  <div className="principle">
                    <h2 className="bold-heading">Spelling out</h2>
                    <ul>
                      <li>
                        If a word is spelled out, write it with spaces in
                        between. This rule does not apply to acronyms, URLs, or
                        email addresses.
                        <ul>
                          <li>
                            <em>Example Audio:</em> how do you get to c o s t c
                            o
                          </li>
                          <li>
                            <em>Correct:</em> How do you get to c o s t c o?
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Interjections</h2>
                    <ul>
                      <li>
                        Transcribe words representing laughter or other non
                        speech vocalizations. Some of these words might be:
                        <ul>
                          <li>huh, woah, okay, yep, uh-huh, mhm, nah</li>
                          <li>
                            This list is not exhaustive of all true
                            interjections.
                          </li>
                        </ul>
                      </li>
                      <li>Annotate laughter that is included within speech.</li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Proper names</h2>
                    <ul>
                      <li>
                        For proper names, always use the official spelling and
                        punctuation.
                        <ul>
                          <li>
                            <em>Example Audio:</em> will i am
                          </li>
                          <li>
                            <em>Correct:</em> will.i.am
                          </li>
                        </ul>
                      </li>
                      <li>
                        If a personal name could have multiple spellings and
                        context does not help choose a spelling, use the
                        spelling that yields the most Google search hits when
                        you search for the name followed by the word "name"
                        (without quotation marks) (e.g. "Anna name").
                        <ul>
                          <li>
                            <em>Example Audio:</em> mcdonald
                          </li>
                          <li>
                            <em>Correct:</em> MacDonald
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Brand and product</h2>
                    <ul>
                      <li>
                        Format brand and company names as officially formatted
                        <ul>
                          <li>
                            <em>Example Audio:</em> the team is sponsored by
                            united healthcare
                          </li>
                          <li>
                            <em>Correct:</em> The team is sponsored by
                            UnitedHealthcare.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Media title</h2>
                    <ul>
                      <li>
                        Write media titles as they are most commonly written.
                        <ul>
                          <li>
                            <em>Example Audio:</em> screenshots of call of duty
                            black ops two
                          </li>
                          <li>
                            <em>Correct:</em> screenshots of Call of Duty: Black
                            Ops 2
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Multiple spellings</h2>
                    <ul>
                      <li>
                        If you hear a word that does not sound like a standard
                        word of your language because there is a small sound
                        change (i.e. accent, speech errors, speech impairment,
                        etc.), transcribe the intended word.
                        <ul>
                          <li>
                            <em>Example Audio:</em> where is the nearest liberry
                          </li>
                          <li>
                            <em>Correct:</em> Where is the nearest library?
                          </li>
                        </ul>
                      </li>
                      <li>
                        If you hear a word that does not sound like a standard
                        word of your language, but it is obviously based on real
                        words, suffixes, prefixes, infixes or circumfixes,
                        transcribe as is.
                        <ul>
                          <li>
                            <em>Correct:</em> interpretate
                          </li>
                        </ul>
                      </li>
                      <li>
                        If you hear a word that does not sound like a standard
                        word of your language because it appears to be nonsense,
                        first search for the word in Google. If there is a clear
                        candidate, transcribe that word. If there is not a clear
                        candidate, but it is easy to spell and articulated
                        clearly, transcribe it anyway. If there is no clear
                        candidate and it is not easy to spell, create a separate
                        speaker segment and add the Unintelligible label.
                        <ul>
                          <li>
                            <em>Correct:</em> Souk Abdali
                          </li>
                          <li>
                            <em>Explanation:</em>User says Souk Abdali.
                            Transcriber searches “sukabdali”, finds correct
                            results. Transcribe Souk Abdali.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="punctuation">
                  <h1 className="sub-heading">Punctuation</h1>
                  <p className="text">
                    Follow the punctuation regulations of your locale.
                    Additional conventions are outlined in this section.
                  </p>

                  <div className="principle">
                    <h2 className="bold-heading">Fragments versus sentences</h2>
                    <ul>
                      <li>
                        Answers to questions and sentences with dropped subjects
                        should be transcribed with ending punctuation.
                        <ul>
                          <li>
                            <em>Correct:</em> Who are you talking about? The guy
                            next door.
                          </li>
                          <li>
                            <em>Explanation: </em> two speakers
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Commas</h2>
                    <ul>
                      <li>
                        Only use commas if they are required according to
                        language grammar.
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Colon and quotation</h2>
                    <ul>
                      <li>
                        If a speaker is quoting another person, transcribe a
                        comma before the quoted speech.
                        <ul>
                          <li>
                            <em>Example Audio:</em> my friend said alligator
                            crocodile
                          </li>
                          <li>
                            <em>Correct: </em> My friend said, "alligator
                            crocodile".
                          </li>
                        </ul>
                      </li>
                      <li>
                        If the quoted text is a complete sentence, transcribe
                        ending punctuation inside the quotation marks. In cases
                        like these, do not add an additional ending punctuation
                        after the main sentence.
                        <ul>
                          <li>
                            <em>Example Audio:</em> jane asked are we meeting at
                            three o clock
                          </li>
                          <li>
                            <em>Correct: </em> Jane asked, "Are we meeting at
                            3:00?"
                          </li>
                        </ul>
                      </li>
                      <li>
                        Do not use quotation marks for metalinguistic uses of
                        words or phrases. These uses include defining the word,
                        talking about the spelling of the word, or any other
                        type of reference to the word itself as a thing.
                        <ul>
                          <li>
                            <em>Correct: </em> He just said the word zucchini.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Other symbols</h2>
                    <ul>
                      <li>
                        {`Apart from standard letters, you should not use any other
                    symbol than: 0-9
                    äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()<>{}[]√/@#$€£₹+=%*&-.;`}
                      </li>
                      <li>
                        When two opposing teams are mentioned, include a hyphen
                        between their names.
                        <ul>
                          <li>
                            <em>Example Audio:</em>are you going to the saints
                            bears game
                          </li>
                          <li>
                            <em>Correct: </em> Are you going to the Saints-Bears
                            game?
                          </li>
                        </ul>
                      </li>
                      <li>
                        Include a hyphen between locations in flight
                        itineraries.
                        <ul>
                          <li>
                            <em>Example Audio:</em> jrome london flight
                          </li>
                          <li>
                            <em>Correct: </em> Rome-London flight
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Spoken punctuation</h2>
                    <ul>
                      <li>
                        For sentence-level spoken punctuation, write out the
                        full word or words between curly brackets. Do not add
                        punctuation symbols after spoken punctuation. Be careful
                        with homonyms.
                      </li>
                      <li>
                        When two opposing teams are mentioned, include a hyphen
                        between their names.
                        <ul>
                          <li>
                            <em>Example Audio:</em>okay dot dot dot
                          </li>
                          <li>
                            <em>Correct: </em> Okay {`{dot} {dot} {dot}`}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="format">
                  <h1 className="sub-heading">Format</h1>
                  <p className="text">
                    Transcribe numbers, abbreviations etc. following the
                    formatting conventions in this section.
                  </p>

                  <div className="principle">
                    <h2 className="bold-heading">Number</h2>
                    <ul>
                      <li>
                        Cardinals and ordinals from 0 to 9 are written with
                        letters (except for measures and currency - see Currency
                        and Unit). Use digits for cardinals and ordinals 10 and
                        above, even if they are coordinated with numbers under
                        10. Transcribe all decimal numbers as digits.
                        <ul>
                          <li>
                            <em>Correct:</em> I have six dogs and 12 parakeets.
                          </li>
                        </ul>
                      </li>
                      <li>
                        In math expressions or units & measures, transcribe
                        fraction words using numerals and slashes. Be careful
                        not to use pre-combined fractions like "1⁄4".
                        <ul>
                          <li>
                            <em>Example Audio:</em> in three fourths of a mile
                            turn right
                          </li>
                          <li>
                            <em>Correct:</em> In 3/4 of a mi, turn right.
                          </li>
                        </ul>
                      </li>
                      <li>
                        For mixed numbers in math expressions and units &
                        measures, transcribe them using numerals.
                        <ul>
                          <li>
                            <em>Example Audio:</em> the koala weight twelve and
                            a third pounds yesterday
                          </li>
                          <li>
                            <em>Correct:</em> The koala weighed 12 and 1/3 lb
                            yesterday.
                          </li>
                        </ul>
                      </li>
                      <li>
                        When referring to items (not units or measures), write
                        fractions out in words. With mixed numbers, write the
                        whole number part out in words if it is under ten,
                        otherwise write it with numerals.
                        <ul>
                          <li>
                            <em>Example Audio:</em> twelve and a half pumpkin
                            pies were made
                          </li>
                          <li>
                            <em>Correct:</em> 12 and a half pumpkin pies were
                            made.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Transcribe percentages using numerals followed by the
                        "%" sign. In the unlikely case that you encounter a
                        number of a million or greater used as a percentage,
                        spell it out.
                        <ul>
                          <li>
                            <em>Example Audio:</em> two percent milk
                          </li>
                          <li>
                            <em>Correct:</em> 2% milk
                          </li>
                        </ul>
                      </li>
                      <li>
                        Use Roman numerals only when part of an official name or
                        title.
                        <ul>
                          <li>
                            <em>Example Audio:</em> king henry the eighth
                          </li>
                          <li>
                            <em>Correct:</em> King Henry VIII
                          </li>
                        </ul>
                      </li>
                      <li>
                        Transcribe seasons and episodes of television shows with
                        numerals.
                        <ul>
                          <li>
                            <em>Example Audio:</em> season three episode two
                          </li>
                          <li>
                            <em>Correct:</em> season 3 episode 2
                          </li>
                        </ul>
                      </li>
                      <li>
                        Transcribe phone numbers using the most common format(s)
                        in the transcription language.
                      </li>
                      <li>
                        Transcribe phone numbers as you would write them down in
                        their natural groups. When applicable, the STD code
                        should be surrounded by spaces.
                      </li>
                      <li>
                        Math expressions should be transcribed with numerals and
                        math symbols with spaces in between them.
                        <ul>
                          <li>five times six to the third</li>
                          <li>5 / 6 ^ 3</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Currency and unit</h2>
                    <ul>
                      <li>
                        Transcribe currencies as commonly written in
                        transcription locale.
                      </li>
                      <li>
                        Abbreviate all units that follow numeric values.
                        <ul>
                          <li>
                            <em>Example Audio:</em> my family bought ten liters
                            of orange juice
                          </li>
                          <li>
                            <em>Correct:</em> My family bought 10 L of orange
                            juice.
                          </li>
                        </ul>
                      </li>
                      <li>
                        If it is clear from context that a number or number
                        sequence refers to currency or time, format it as such.
                        <ul>
                          <li>
                            <em>Example Audio:</em> milk is two ninety nine
                          </li>
                          <li>
                            <em>Correct:</em> $2.99.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Date and time</h2>
                    <ul>
                      <li>
                        Use the common form for transcribing dates and times as
                        used in transcription language.
                      </li>
                      <li>
                        Write times in hh:mm format whenever possible, unless it
                        would look unnatural to do so.
                        <ul>
                          <li>
                            <em>Example Audio:</em> a few minutes after three
                          </li>
                          <li>
                            <em>Correct:</em> a few minutes after 3:00
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Address</h2>
                    <ul>
                      <li>
                        Write out the full names of locations, roads, states,
                        etc. Only use abbreviations when explicitly spoken.
                        <ul>
                          <li>
                            <em>Correct:</em> 751 Jefferson Street, New York
                            City
                          </li>
                        </ul>
                      </li>
                      <li>
                        Transcribe entities and locations by using a comma
                        between them "ENTITY, LOCATION"
                        <ul>
                          <li>
                            <em>Correct:</em> McDonald's, Castro Street
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Web</h2>
                    <ul>
                      <li>
                        Write URLs, email addresses, and Twitter hashtags as
                        they are spoken and don't capitalize them.
                        <ul>
                          <li>
                            <em>Example Audio:</em> im so hashtag hungry i could
                            eat a whole pizza
                          </li>
                          <li>
                            <em>Correct:</em> I'm so #hungry I could eat a whole
                            pizza.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Do not correct speaker errors such as transcribing a
                        slash when the user actually says "backslash".
                        <ul>
                          <li>
                            <em>Example Audio:</em> h t t p colon backslash
                            backslash mail dot yahoo dot com
                          </li>
                          <li>
                            <em>Correct:</em> http:\mail.yahoo.com
                          </li>
                        </ul>
                      </li>
                      <li>
                        If the speaker drops a "w" or dots and it's an obvious
                        URL, you should correct these errors. If the speaker
                        doesn't say the "w"s at all, do not add them.
                        <ul>
                          <li>
                            <em>Example Audio:</em> w w facebook dot com
                          </li>
                          <li>
                            <em>Correct:</em> www.facebook.com
                          </li>
                        </ul>
                      </li>
                      <li>
                        If a URL is spelled out in individual letters,
                        transcribe without spaces between individual letters.
                        <ul>
                          <li>
                            <em>Example Audio:</em> w w w dot t a r g e t dot c
                            o m”
                          </li>
                          <li>
                            <em>Correct:</em> www.target.com
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="principle">
                    <h2 className="bold-heading">Abbreviation</h2>
                    <ul>
                      <li>
                        Do not abbreviate unless the speaker says an abbreviated
                        form.
                        <ul>
                          <li>
                            <em>Correct:</em> Warriors versus Lakers
                          </li>
                        </ul>
                      </li>
                      <li>
                        In acronyms, do not use periods between letters.
                        <ul>
                          <li>
                            <em>Correct:</em> NASA, NASCAR, AAMCO, ZIP code
                          </li>
                        </ul>
                      </li>
                    </ul>
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

export default GuidingPrinciples

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
  rightNavList: {
    marginTop: '-1.3rem',
    borderLeft: '4px solid #1a73e8',
    listStyleType: 'none',
    listStylePosition: 'revert',
  },
  rightNavListItem: {
    marginLeft: '-2rem',
  },
}))
