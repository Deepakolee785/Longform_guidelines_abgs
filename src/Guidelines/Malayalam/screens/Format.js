import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Format = () => {
  const classes = useStyles()

  const headingIds = [
    'number',
    'currency-and-unit',
    'date-and-time',
    'address',
    'web',
    'abbreviation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Malayalam" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.
                </p>
                <p className={styles.block_23}>
                  ാ ിൽ ഒൻപത വിദ ാർഥികൾ ഉ . സംഖ 10ൽ കുറവായതാണ
                </p>
                <p className={styles.block_23}>
                  ാ ിൽ 13 കു ികൾ ഉ . സംഖ 10 അെ ിൽ അതിന മുകളിലാണ
                </p>
                <p className={styles.block_23}>എനി ആറ പ ികളും 12 ത കളും ഉ .</p>
                <p className={styles.block_33}>
                  <span className={styles.text_9}>3.14 </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>"</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre1}>മൂ േപായി ഒ നാല</sup>
                  </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>" </sup>
                  </span>
                </p>
                <p className={styles.block_23}>ദശാംശ സംഖ കൾ</p>
                <p className={styles.block_31}>
                  If a large number consists of only a number followed by
                  "million", "billion", "trillion", or higher, then transcribe
                  as a numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_23}>1 ദശല ം കിളികൾ</p>
                <p className={styles.block_23}>ദശല ം കിളികൾ</p>
                <p className={styles.block_23}>1,000 കിളികൾ</p>
                <p className={styles.block_23}>₹1.5 ല ം േകാടി</p>
                <p className={styles.block_31}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_7}>0 1 1 2 3 5 8 13</p>
                <p className={styles.block_31}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_23}>
                  അവർ 1/4 കിേലാ ഗാം പ സാര ആവശ മാണ.
                </p>
                <p className={styles.block_23}>
                  3/4 കിേലാമീ റിൽ, വലേ ാ തിരിയുക.
                </p>
                <p className={styles.block_}>
                  https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                  9/19
                </p>
                <p className={styles.block_}>3/23/2018 ml-IN_TEST_SET</p>
                <p className={styles.block_23}>
                  2/3 കിേലാമീ റിൽ, ഇടേ ാ തിരിയുക.
                </p>
                <p className={styles.block_23}>
                  ന ു ആവശ ം 5/16-മി ി മീ ർ ൂവാണ.
                </p>
                <p className={styles.block_31}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_2}>
                    നീ എനി ₹70.50 കടം തരുേമാ?{' '}
                  </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>"</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre1}>
                      നീ എനി എഴുപത രൂപ അൻപത ൈപസ കടം{' '}
                    </sup>
                  </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_11}>തരുേമാ</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_2}>
                    അവൾ ആ വീട വാ ിയത ₹7.5 ല ിനാണ.{' '}
                  </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>"</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre1}>
                      അവൾ ആ വീട വാ ിയത എഴര ല ിനാണ
                    </sup>
                  </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>" </sup>
                  </span>
                </p>
                <p className={styles.block_31}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_23}>2% പാൽ</p>
                <p className={styles.block_23}>1 ദശല ം ശതമാനം</p>
                <p className={styles.block_31}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_31}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_7}>0487 271452</p>
                <p className={styles.block_7}>+91 123-456-7890</p>
                <p className={styles.block_23}>123-456-7890 എക ൻഷൻ 54</p>
                <p className={styles.block_31}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_9}>5 / 6 ^ 3 </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>അ ഭാഗം ആറ തിവർ ം</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_2}>5 * 6 എ തയാണ? </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>അ ഗുണം ആറ എ തയാണ</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_2}>√3 </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>മൂ ിെ െ വർ മൂലം</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_2}>8 മണി ൂർ * ₹12 എ തയാണ? </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>
                    എ മണി ൂർ ഗുണം പ രൂപ എ തയാണ
                  </span>
                  <span className={styles.text_12}>" </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>

                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_9}>₹10 </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>പ രൂപ</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_2}>₹20 എ ത യുഎസ േഡാളറാണ? </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>
                    ഇരുപത രൂപ എ ത യുഎസ േഡാളറാണ
                  </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_17}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_2}>ഞാൻ അ േഡാളർ െചലവഴി ു. N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: ഞാൻ $5 െചലവഴി ു. </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_2}>200 യുവാൻ N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_9}>: ¥200 </span>
                </p>
                <p className={styles.block_17}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_46}>പുറ 20° ആണ താപനില.</p>
                <p className={styles.block_21}>
                  <span className={styles.text_2}>
                    അവിെട ഇതിന പ ിന താെഴയാണ വില. N
                  </span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>
                    : അവിെട ഇതിന -10 ആണ വില.{' '}
                  </span>
                </p>
                <p className={styles.block_16}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_35}>ഞാൻ 10 L ഓറ ജൂസ വാ ി.</p>
                <p className={styles.block_17}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_2}>ഞാൻ 5:45ന അലാറം െവ ു. N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: ഞാൻ 545ന അലാറം െവ ു. </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_2}>ജൂലായ 12, 1964 </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>
                    ജൂലായ പ ു ആയിര ി െതാ ായിര ി അറുപ ി ാൽ
                  </span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_42}>ചി ം 4, 2017</p>
                <p className={styles.block_42}>78െല െപാതുതിരെ ടു</p>
                <p className={styles.block_36}>80കളിെല സംഗീതം</p>
                <p className={styles.block_49}>
                  https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                  11/19
                </p>
                <p className={styles.block_}>3/23/2018 ml-IN_TEST_SET</p>
                <p className={styles.block_50}>ബുധൻ, മാർ 6</p>
                <p className={styles.block_51}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_52}>3:00</p>
                <p className={styles.block_36}>4:00ന അലാറം െവ ുക</p>
                <p className={styles.block_29}>
                  <span className={styles.text_9}>1:50</span>
                  <span className={styles.text_4}>
                    <sub className={styles.calibre2}>ഏകേദശം 8:00ന </sub>
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_16}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_35}>മെ ാണാൾ , കാേ ാ ീ</p>
                <p className={styles.block_36}>േകാഫി േഷാ , 95129</p>
                <p className={styles.block_42}>
                  റിേ ൺ ഓഫ ദി കംഗിെ പദർശന സമയ ൾ, സാൻ േജാസ
                </p>
                <p className={styles.block_36}>മ ാതി സി ി ഹാൾ, മനില</p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_9}>www.google.co.kr </span>
                  <span className={styles.text_12}>"w w w </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>google </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>c o </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>k r" </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_9}>amazon.com </span>
                  <span className={styles.text_12}>"amazon </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>com" </span>
                </p>
                <p className={styles.block_36}>എനി പിസ ഇ മാണ. #വിശ</p>
                <p className={styles.block_29}>
                  <span className={styles.text_9}>mike@example.org </span>
                  <span className={styles.text_12}>"mike </span>
                  <span className={styles.text_11}>അ </span>
                  <span className={styles.text_12}>example </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>org" </span>
                </p>
                <p className={styles.block_17}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>

                <p className={styles.block_41}>
                  <span className={styles.text_9}>www.amazon.com </span>
                  <span className={styles.text_12}>"w w </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>amazon </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>com" </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_9}>google.co.uk </span>
                  <span className={styles.text_12}>"google </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>co u k" </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_9}>www.forbes.com </span>
                  <span className={styles.text_12}>"w w w forbes </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>com" </span>
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_9}>www.facebook.com </span>
                  <span className={styles.text_12}>"w w facebook </span>
                  <span className={styles.text_11}>േഡാ </span>
                  <span className={styles.text_12}>com" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_55}>
                  <span className={styles.text_2}>േകരള പ ിക സർ ീസ ക N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: േകരള പി.എസ.സി ീഷൻ </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>"</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre1}>േകരള പ ിക സർ ീസ ക ീഷൻ</sup>
                  </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre1}>" </sup>
                  </span>
                </p>
                <p className={styles.block_56}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_46}>
                  എംപി3 െ യർ, നാസ, നാസ്കാർ, ആംേകാ, സിപ േകാഡ
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Format" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Format

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
