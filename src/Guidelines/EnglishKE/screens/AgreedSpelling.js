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
    'brand-and-product',
    'media-title',
    'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform EnglishKE" />
            <div className="content text">
              {' '}
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                <span className={styles.calibre2}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.
                </span>
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_412}>
                  <span className={styles.calibre2}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it is said (often done for
                    foreign names or businesses, for example). Use lowercase
                    letters for the spelled-out portion. This rule does not
                    apply to acronyms or initialisms, or to spelled-out web or
                    email addresses.
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_12}>Correct: CEO </span>
                  <span className={styles.text_14}>Example audio: " </span>
                  <span className={styles.text_15}>c e o </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_12}>
                    Correct: All VIPs will sit in front.{' '}
                  </span>
                  <span className={styles.text_13}>
                    Explanation: spelled out "v i p" with plural "s"
                  </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_12}>Correct: FIFA </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced the word "FIFA", or spelled out "f
                      i f a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_12}>Correct: JKIA </span>
                  <span className={styles.text_13}>Explanation: j k i a </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_417}>
                  <span className={styles.calibre2}>
                    Transcribe words representing laughter or other non-speech
                    vocalizations with up to three syllables, but no more.
                  </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.calibre2}>
                    Correct: heh, ha, haha, hahaha, hehe, hehehe,
                  </span>
                </p>
                <p className={styles.block_419}>boo hoo, boo hoo hoo, lalala</p>
                <p className={styles.block_420}>
                  <span className={styles.text_18}>Correct: hahaha </span>
                  <span className={styles.text_35}>Example audio: " </span>
                  <span className={styles.text_36}>ha ha ha ha ha </span>
                  <span className={styles.text_35}>" </span>
                </p>
              </div>
              <div id="proper-names">
                <span className={'heading'}>Proper names </span>
                <p className={styles.block_421}>
                  <span className={styles.calibre2}>
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and pay attention to the correct
                    format. Official format and spelling of a proper name may
                    supersede the usual written transcription conventions
                    detailed in this document.
                  </span>
                </p>
                <p className={styles.block_422}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_423}>
                  <span className={styles.calibre2}>
                    If proper names include diacritics uncommon in your language
                    (é, ü, ç, etc), include them in your spelling. If unsure,
                    refer to news articles, official city or celebrity websites,
                    IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                    box above
                  </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.calibre2}>
                    the list of Google Search results) in that order. When no
                    other source can be used to decide between spellings, choose
                    the spelling used in the first hit(s) on Google.
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.calibre2}>
                    If a personal name could have multiple spellings and context
                    does not help choose a spelling, use the spelling that
                    yields the most Google search hits when you search for the
                    name followed by the word "name" (without quotation marks)
                    (e.g. "Anna name").
                  </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_12}>Correct: Call Joanne. </span>
                  <span className={styles.text_13}>
                    Incorrect: Call Joann.{' '}
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_12}>Correct: Adia Abdu </span>
                  <span className={styles.text_13}>Incorrect: Adya Abdu </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "Joanne name" (without quotation
                    marks) yields more results than "Joann name", even though
                    searching "Sofia" yields more results than "Sophia" because
                    Sofia is the capital of Bulgaria.
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "Adia name" yields more search
                    results than "Adya name". Note that this example refers to
                    the surname, not the restaurant chain.
                  </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.calibre2}>
                    If a speaker makes a small mistake in a proper name,
                    capitalize it anyway as long as the difference is minimal.
                    "Minimal differences" refers to adding or dropping articles,
                    possessives, and plurals.
                  </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_18}>Correct: Ngong Hill </span>
                  <span className={styles.text_19}>
                    Explanation: official name "Ngong Hills"{' '}
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product </p>
                <p className={styles.block_432}>
                  <span className={styles.calibre2}>
                    Format proper names as they are most commonly formatted on
                    the entity's website (especially official documents), if
                    available, or the Wikipedia or IMDb page. In cases of
                    ambiguity, defer to their privacy policy. If no other
                    sources, use top Google hits.
                  </span>
                </p>
                <p className={styles.block_404}>Correct: Mr Price</p>
                <p className={styles.block_433}>Incorrect: Mr. Price</p>
                <p className={styles.block_319}>Correct: YouTube</p>
                <p className={styles.block_387}>Correct: LEGO</p>
                <p className={styles.block_434}>Incorrect: Lego</p>
                <p className={styles.block_435}>
                  <span className={styles.calibre2}>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and "Ok Glass", require their own
                    particular spelling of "okay". This spelling is unique to
                    these cases.
                  </span>
                </p>
                <p className={styles.block_418}>Correct: Ok Google</p>
                <p className={styles.block_319}>Correct: Ok Google Now</p>
                <p className={styles.block_387}>
                  Correct: Ok Google, Muchai Drive
                </p>
                <p className={styles.block_319}>
                  Correct: Ok Google, Lake Nakuru
                </p>
                <p className={styles.block_319}>Correct: Okay.</p>
                <p className={styles.block_319}>Correct: Okay, Aluna.</p>
                <p className={styles.block_436}>
                  <span className={styles.calibre2}>
                    Correct: Okay Nelly, just make sure you're back on time.
                  </span>
                </p>
                <p className={styles.block_437}>
                  Spellings of common Brand and Product names
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>1D </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>3DS </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>4chan </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Adidas </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Amazon </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Android Market </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Angry Birds </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Babies "R" Us </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Barclays </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>BBC One </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Black &amp; Decker </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Black Ops 2 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>BlackBerry </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>B-182 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Burger King </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Casio </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Chanel </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Chrome </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Citroën </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Claire's </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Coca-Cola </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>CrossFit </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>DirecTV </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Domino's</span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Dragon Quest IX </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Droid Razr </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>e-cigarette </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Earth </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>easyJet </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>eBay </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>eHarmony </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Evernote </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Facebook </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>FIFA </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Flickr </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Formula 1 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Gmail </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Apps </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Calendar </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Earth </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Images </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google mail </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Search </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Street View </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Google Toolbar </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>GSMArena </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>GSX-R/4 </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>GTA V </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Häagen-Dazs </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Haribo </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Hawk-Eye </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>HobbyKing </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Hotmail </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>IKEA</span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>iMac </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>IMDb </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>iOS </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>iPad </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>iPhone </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>iPlayer </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>iThemes </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>ITV Player </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Kellogg's </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Kit Kat </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Land Rover </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>LazyTown </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>LEGO </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>LEGOLAND </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>edIn </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Maroon 5 </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>McDonald's </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Megabus </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Minecraft </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Mini </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Mk4 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Nesquick </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Netflix </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Nike </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Oral-B </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Picasa </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Plants vs. Zombies </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>PlayStation 4 </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>PlayStation 1 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Politico </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>PornHub</span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Porsche </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>PowerPoint </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>PS4 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Ray-Ban </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>RealPlayer </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Rolls-Royce </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Samsung Galaxy </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Samsung Galaxy S II </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Samsung Galaxy S III </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Samsung Galaxy S4 </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Samsung Galaxy S5 </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>SimCity </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Siri </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Smart car </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Snow+Rock </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Starbucks </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>T-Mobile </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Texas hold 'em </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>TomTom </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Tour de France </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Toys "R" Us </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Tumblr </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Twitter </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Virgin Media </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Visa </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>WhatsApp </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>WrestleMania XXX </span>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>WWE '13 </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Xbox </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Xbox 360 </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Xbox One</span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Yahoo </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>YouPorn </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>YouTube </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>Zagat </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_16}>● </span>
                  <span className={styles.text_17}>ZBox </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_455}>
                  <span className={styles.calibre2}>
                    Refer to the Google Play Store for official spellings of
                    media titles. For film/television, IMDb is also available.
                    If an utterance is ambiguous between a media title and a
                    sentence or web search, use your judgment for which is more
                    likely; if truly unclear, default to media title.
                  </span>
                </p>
                <p className={styles.block_456}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_457}>
                  Correct: The show is Mother-in-law.
                </p>
                <p className={styles.block_319}>
                  Correct: Have you watched Game of Thrones?
                </p>
                <p className={styles.block_458}>
                  <span className={styles.calibre2}>
                    Transcribe all media titles with original punctuation. In
                    cases where original punctuation falls at the end of a
                    sentence, do not transcribe sentence-level punctuation. That
                    is, media title punctuation trumps sentence level
                    punctuation when in conflict. If a popular media title
                    consists of an entire sentence but the official spelling is
                    without punctuation, then don't punctuate the title. If an
                    utterance is ambiguous between a media title and a sentence
                    or web search, use your judgment for which is more likely
                    and treat it accordingly.
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.calibre2}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you understand them.
                  </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_461}>
                  <span className={styles.calibre2}>
                    When multiple spellings are attested, use the first spelling
                    used in the reference dictionary for your language. If there
                    is no entry, Google the word and use the form with the most
                    hits.
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_12}>Correct: centre </span>
                  <span className={styles.text_13}>Incorrect: center </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.calibre2}>
                    Explanation: "centre" is preferred by Oxford English
                    Dictionary.
                  </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.calibre2}>
                    Guess the most likely spelling given the context. When
                    context is insufficient, rely on Google hits.
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.calibre2}>
                    Transcribe slang and colloquialisms as spoken according to
                    the appendix on this page. Do not alter non-standard speech
                    that the speaker probably wouldn't want corrected.
                  </span>
                </p>
                <p className={styles.block_465}>Correct: I ain't joking.</p>
                <p className={styles.block_387}>Correct: He love coffee.</p>
                <p className={styles.block_466}>
                  <span className={styles.calibre2}>
                    Write commonly accepted contractions as usual. Transcribe
                    contractions when you hear them spoken.
                  </span>
                </p>
                <p className={styles.block_404}>Correct: I'm running late.</p>
                <p className={styles.block_467}>
                  <span className={styles.text_12}>
                    Correct: I am running late.{' '}
                  </span>
                  <span className={styles.text_13}>
                    <span className={styles.calibre2}>
                      Explanation: Speaker clearly said two distinct words.
                    </span>
                  </span>
                </p>
                <p className={styles.block_468}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_469}>
                  <span className={styles.calibre2}>
                    If you hear a word that does not sound like a standard word
                    of your language because there is a small sound change (i.e.
                    accent, speech error, speech impairment, etc), transcribe
                    the intended word.
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.calibre2}>
                    If you hear a word that does not sound like a standard word
                    of your language, but it is obviously based on real words,
                    suffixes, or prefixes, transcribe as is.
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_12}>
                    Correct: Aks her to come.{' '}
                  </span>
                  <span className={styles.text_13}>
                    Explanation: Speaker meant "ask".{' '}
                  </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.calibre2}>
                    If you hear a word that does not sound like a standard word
                    of your language because it appears to be nonsense, first
                    perform a Google search for the word. If there is a clear
                    candidate, transcribe that word.
                  </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.calibre2}>
                    If a word appears to be nonsense and a Google search returns
                    no clear results but it is easy to spell and articulated
                    clearly, transcribe it anyway.
                  </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.calibre2}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or singing.
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
