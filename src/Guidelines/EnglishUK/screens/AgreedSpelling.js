import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'proper-names',
    // 'brand-and-product',
    // 'media-title',
    // 'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform EnglishUK" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper{' '}
                </span>
                <span className={styles.text_3}></span>
                <span className={styles.text_2}>names.</span>
                <span className={styles.text_3}></span>
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_695}>
                  <span className={styles.text_2}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    is said (often done for foreign names or businesses, for
                    example). Use lowercase letters{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    for the spelled-out portion. This rule does not apply to
                    acronyms or initialisms, or to{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    spelled-out web or email addresses.
                  </span>
                  <span className={styles.text_3}></span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_21}>
                    Correct: Costco c o s t c o{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "costco" and then spelled it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_21}>
                    Correct: How do you get to c o s t c o?{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    how do you get to c o s t c o{' '}
                  </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>
                    Correct: words ending in i n g{' '}
                  </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>words ending in i n g </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.calibre2}>
                    Correct: a b c d e f g h i k l m n o p q r s t u v w x y z
                  </span>
                </p>
                <p className={styles.block_192}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_21}>Correct: amazon.co.uk </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>
                    amazon dot c o dot u k{' '}
                  </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: CEO </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>c e o </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_21}>
                    Correct: All VIPs will sit in front.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: spelled out "v i p" with plural "s"
                  </span>
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_21}>Correct: FIFA </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced the word "FIFA", or spelled out "f
                      i f a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_21}>Correct: ASAP </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced the word "ASAP", or spelled out "a
                      s a p".
                    </span>
                  </span>
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_21}>Correct: NCAA </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Speaker says "n c double a", or "n c a a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_21}>Correct: AAA </span>
                  <span className={styles.text_22}>
                    Explanation: Speaker says "triple a", or "a a a".{' '}
                  </span>
                  <span className={styles.text_21}>Correct: T-shirt </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>t-shirt </span>
                  <span className={styles.text_36}>"</span>
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_21}>Correct: email </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>email </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>Correct: LDAP </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>el-dap </span>
                  <span className={styles.text_36}>" </span>
                  <span className={styles.text_21}>
                    Correct: A-Rod, iPhone, USA, IBM, xkcd{' '}
                  </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_2}>
                    For uses of single letters, either referring to the letter
                    itself or some other meaning{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    associated with it, use capital letters (with apostrophes
                    for plurals to avoid ambiguity{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    with e.g. "As", "Is", and "Us").
                  </span>
                  <span className={styles.text_3}></span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.calibre2}>
                    Correct: A's should definitely get you into
                  </span>
                </p>
                <p className={styles.block_705}>university.</p>
                <p className={styles.block_139}>Correct: Roll your R's.</p>
                <p className={styles.block_91}>
                  Correct: Cross the T's and dot the I's.
                </p>
                <p className={styles.block_139}>
                  Correct: How many A's are in the word banana?
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_707}>
                  <span className={styles.text_2}>
                    Transcribe words representing laughter or other non-speech
                    vocalisations with up to{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    three syllables, but no more.
                  </span>
                  <span className={styles.text_3}></span>
                </p>
                <p className={styles.block_89}>
                  <span className={styles.calibre2}>
                    Correct: heh, ha, haha, hahaha, hehe, hehehe,
                  </span>
                </p>
                <p className={styles.block_356}>boo hoo, boo hoo hoo, lalala</p>
                <p className={styles.block_210}>
                  <span className={styles.text_21}>Correct: hahaha </span>
                  <span className={styles.text_36}>Example audio: " </span>
                  <span className={styles.text_37}>ha ha ha ha ha </span>
                  <span className={styles.text_36}>" </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_2}>
                    Spell common interjections as demonstrated in the appendix
                    on this page. Do not{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    transcribe non-speech vocalisations that are not in this
                    list.
                  </span>
                  <span className={styles.text_3}></span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_25}>
                    Spellings of common interjections
                  </span>
                  <span className={styles.text_19}></span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>
                    ah (as in "Ah, I see."){' '}
                  </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>aha </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>
                    aw (as in "Aw, what a cute kitten."){' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>blah </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>duh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>eh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>gah </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>hiya </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>huh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>jeez </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>mhm (meaning "yes") </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>mm-mm (meaning "no") </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>mwah </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>oh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>oi </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>okie dokie </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>
                    ooh (rhymes with "shoe"){' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>ooer </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>oops </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>psst </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>shh </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>tada </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>ugh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>
                    uh-huh (meaning "yes"){' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>uh-oh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>whoops </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>woah </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>woo </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_27}>woohoo</span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={styles.block_711}>
                  <span className={styles.text_2}>
                    Use official spelling, capitalisation, and punctuation for
                    proper names. Google them and{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    pay attention to the correct format. Official format and
                    spelling of a proper name may{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    supersede the usual written transcription conventions
                    detailed in this document.
                  </span>
                  <span className={styles.text_3}></span>
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_25}>
                    Defer to official spellings of celebrity names.
                  </span>
                  <span className={styles.text_19}></span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_21}>
                    Correct: The 5.6.7.8's{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Spelled this way in privacy policy.{' '}
                  </span>
                  <span className={styles.text_21}>Correct: will.i.am </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_21}>
                    Correct: Kristin Scott Thomas{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The celebrity spells her name differently
                      from the more common "Kristen".
                    </span>
                  </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.calibre2}>
                    Correct: Khloé Kardashian and Kourtney Kardashian
                  </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.calibre2}>
                    Explanation: These celebrities spell their names differently
                    from the more common "Chloe" and "Courtney".
                  </span>
                </p>
                <p className={styles.block_717}>
                  <span className={styles.text_2}>
                    If proper names include diacritics uncommon in your language
                    (é, ü, ç, etc), include{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    them in your spelling. If unsure, refer to news articles,
                    official city or celebrity websites,{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                    box above the list of{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    Google Search results) in that order. When no other source
                    can be used to decide{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    between spellings, choose the spelling used in the first
                    hit(s) on Google.
                  </span>
                  <span className={styles.text_3}></span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_2}>
                    If a personal name could have multiple spellings and context
                    does not help choose a{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    spelling, use the spelling that yields the most Google
                    search hits when you search for{' '}
                  </span>
                  <span className={styles.text_3}></span>
                  <span className={styles.text_2}>
                    the name followed by the word "name" (without quotation
                    marks) (e.g. "Anna name").
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
