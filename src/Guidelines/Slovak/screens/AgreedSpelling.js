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
            <PageContentHeader currentPage="longform Slovak" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_4}>
                    Correct: Orange o r a n g e{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Person said "orange" and then{' '}
                  </span>
                </p>
                <p className={styles.block_593}>spelled it.</p>
                <p className={styles.block_594}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x
                </p>
                <p className={styles.block_595}>y z</p>
                <p className={styles.block_596}>
                  Explanation: spelled out alphabet
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_599}>Correct: hahaha</p>
                <p className={styles.block_600}>Incorrect: hahahahaha</p>
                <p className={styles.block_601}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ha ha ha ha ha </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_602}>
                  Explanation: Do not transcribe more than three
                </p>
                <p className={styles.block_603}>syllables.</p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_606}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_4}>
                    Correct: Kristin Chenoweth{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The celebrity spells her name{' '}
                  </span>
                </p>
                <p className={styles.block_608}>
                  differently than the more common "Kristen".
                </p>
                <p className={styles.block_609}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_610}>Correct: Volanie Sophia.</p>
                <p className={styles.block_611}>Incorrect: Volanie Sofia.</p>
                <p className={styles.block_612}>
                  Explanation: Searching "Sophia meno" (without
                </p>
                <p className={styles.block_613}>
                  quotation marks) yields more results than
                </p>
                <p className={styles.block_614}>
                  "Sofia meno", even though searching "Sofia"
                </p>
                <p className={styles.block_615}>
                  yields more results than "Sophia" because Sofia
                </p>
                <p className={styles.block_616}>is the capital of Bulgaria.</p>
                <p className={styles.block_617}>Correct: McDonald</p>
                <p className={styles.block_618}>
                  Explanation: Searching "McDonald meno" yields
                </p>
                <p className={styles.block_619}>Incorrect: MacDonald</p>
                <p className={styles.block_620}>
                  more search results than "MacDonald meno".
                </p>
                <p className={styles.block_621}>
                  Note that this example refers to the surname,
                </p>
                <p className={styles.block_622}>not the restaurant chain.</p>
                <p className={styles.block_623}>
                  <span className={styles.text_4}>
                    Correct: Sophia McDonald{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Search full names to see if they
                  </span>
                </p>
                <p className={styles.block_624}>
                  refer to a celebrity. If the full name does not
                </p>
                <p className={styles.block_625}>
                  belong to a celebrity, use the most common
                </p>
                <p className={styles.block_626}>
                  spelling for each part of the name (e.g. search
                </p>
                <p className={styles.block_627}>
                  "Sophia name" and "McDonald name").
                </p>
                <p className={styles.block_628}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal differences" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_4}>
                    Correct: The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "The Lord of the Rings"{' '}
                  </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_4}>Correct: craiglist </span>
                  <span className={styles.text_5}>
                    Explanation: "craig list"; actual name "craigslist"
                  </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_4}>
                    Correct: Prehrať film Matrix.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Actual name is "The Matrix".{' '}
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits. Note that these names can be inflected
                  according to the syntactic context they appear in.
                </p>
                <p className={styles.block_634}>Correct: Pracuje v Amazone.</p>
                <p className={styles.block_635}>
                  Correct: Počul som, že Yahoo a T-Mobile sa
                </p>
                <p className={styles.block_636}>práve dohodli.</p>
                <p className={styles.block_637}>Correct: Burger King</p>
                <p className={styles.block_638}>Incorrect: BURGER KING</p>
                <p className={styles.block_639}>
                  Explanation: Do not spell "Burger King" all in
                </p>
                <p className={styles.block_640}>
                  uppercase as in the stylized form of the logo,
                </p>
                <p className={styles.block_641}>
                  stock to the official form as per the privacy
                </p>
                <p className={styles.block_642}>policy.</p>
                <p className={styles.block_269}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_643}>Correct: Ok Google</p>
                <p className={styles.block_418}>Correct: Ok Google Now</p>
                <p className={styles.block_151}>
                  Correct: Ok Google, kde je KFC?
                </p>
                <p className={styles.block_644}>Correct: Ok Google, tekvice</p>
                <p className={styles.block_645}>Correct: OK.</p>
                <p className={styles.block_646}>Correct: OK, David.</p>
                <p className={styles.block_647}>Correct: OK Monika, poďme.</p>
                <p className={styles.block_648}>
                  Spellings of common Brand and Product names
                </p>
                <p className={styles.block_649}>● 1D</p>
                <p className={styles.block_650}>● 3DS</p>
                <p className={styles.block_651}>● 4chan</p>
                <p className={styles.block_652}>● Abba</p>
                <p className={styles.block_653}>● Adidas</p>
                <p className={styles.block_654}>● Aldo</p>
                <p className={styles.block_655}>● Android Market</p>
                <p className={styles.block_656}>● Angry Birds</p>
                <p className={styles.block_657}>● Babies "R" Us</p>
                <p className={styles.block_658}>● Barclays</p>
                <p className={styles.block_659}>● BBC One</p>
                <p className={styles.block_660}>● Black &amp; Decker</p>
                <p className={styles.block_661}>● Black Ops 2</p>
                <p className={styles.block_662}>● BlackBerry</p>
                <p className={styles.block_663}>● B-182</p>
                <p className={styles.block_664}>● Burger King</p>
                <p className={styles.block_665}>● Casio</p>
                <p className={styles.block_666}>● Chanel</p>
                <p className={styles.block_667}>● Chrome</p>
                <p className={styles.block_668}>● Citroën</p>
                <p className={styles.block_669}>● Claire's</p>
                <p className={styles.block_670}>● Coca-Cola</p>
                <p className={styles.block_671}>● CrossFit</p>
                <p className={styles.block_667}>● DirecTV</p>
                <p className={styles.block_672}>● Domino's</p>
                <p className={styles.block_673}>● Dragon Quest IX</p>
                <p className={styles.block_674}>● Droid Razr</p>
                <p className={styles.block_662}>● e-cigarette</p>
                <p className={styles.block_675}>● Earth</p>
                <p className={styles.block_667}>● easyJet</p>
                <p className={styles.block_676}>● eBay</p>
                <p className={styles.block_670}>● eHarmony</p>
                <p className={styles.block_677}>● EVA Siri for Android</p>
                <p className={styles.block_659}>● Evernote</p>
                <p className={styles.block_678}>● Facebook</p>
                <p className={styles.block_654}>● FIFA</p>
                <p className={styles.block_679}>● Flickr</p>
                <p className={styles.block_680}>● Formula 1</p>
                <p className={styles.block_663}>● Gmail</p>
                <p className={styles.block_681}>● Google</p>
                <p className={styles.block_682}>● Google Apps</p>
                <p className={styles.block_683}>● Google Kalendár</p>
                <p className={styles.block_684}>● Google Earth</p>
                <p className={styles.block_660}>● Google Images</p>
                <p className={styles.block_685}>● Google mail</p>
                <p className={styles.block_686}>● Google Search</p>
                <p className={styles.block_687}>● Google Street View</p>
                <p className={styles.block_655}>● Google Toolbar</p>
                <p className={styles.block_688}>● GSMArena</p>
                <p className={styles.block_689}>● GSX-R/4</p>
                <p className={styles.block_690}>● GTA V</p>
                <p className={styles.block_691}>● Häagen-Dazs</p>
                <p className={styles.block_692}>● Haribo</p>
                <p className={styles.block_678}>● Hawk-Eye</p>
                <p className={styles.block_693}>● HobbyKing</p>
                <p className={styles.block_694}>● HomeShop18</p>
                <p className={styles.block_695}>● Hotmail</p>
                <p className={styles.block_696}>● IKEA</p>
                <p className={styles.block_676}>● iMac</p>
                <p className={styles.block_652}>● IMDb</p>
                <p className={styles.block_697}>● iOS</p>
                <p className={styles.block_654}>● iPad</p>
                <p className={styles.block_666}>● iPhone</p>
                <p className={styles.block_698}>● iPlayer</p>
                <p className={styles.block_699}>● iThemes</p>
                <p className={styles.block_700}>● ITV Player</p>
                <p className={styles.block_654}>● Jefit</p>
                <p className={styles.block_701}>● Kellogg's</p>
                <p className={styles.block_178}>● Kit Kat</p>
                <p className={styles.block_702}>● Land Rover</p>
                <p className={styles.block_680}>● LazyTown</p>
                <p className={styles.block_665}>● LEGO</p>
                <p className={styles.block_702}>● LEGOLAND</p>
                <p className={styles.block_703}>● edIn</p>
                <p className={styles.block_704}>● LOVEFILM</p>
                <p className={styles.block_705}>● Maroon 5</p>
                <p className={styles.block_706}>● McDonald's</p>
                <p className={styles.block_707}>● Megabus</p>
                <p className={styles.block_662}>● Mickey D's</p>
                <p className={styles.block_705}>● Minecraft</p>
                <p className={styles.block_703}>● Mini</p>
                <p className={styles.block_703}>● Mk4</p>
                <p className={styles.block_708}>● NAPA Auto Parts</p>
                <p className={styles.block_709}>● Nesquik</p>
                <p className={styles.block_178}>● Netflix</p>
                <p className={styles.block_710}>● NeXT</p>
                <p className={styles.block_711}>● Nice 'n Easy</p>
                <p className={styles.block_712}>● Nike</p>
                <p className={styles.block_178}>● Odeon</p>
                <p className={styles.block_713}>● Oral-B</p>
                <p className={styles.block_698}>● Picasa</p>
                <p className={styles.block_657}>● PizzaExxpres</p>
                <p className={styles.block_687}>● Plants vs. Zombies</p>
                <p className={styles.block_714}>● PlayStation 4</p>
                <p className={styles.block_714}>● PlayStation 1</p>
                <p className={styles.block_715}>● Politico</p>
                <p className={styles.block_659}>● PornHub</p>
                <p className={styles.block_671}>● Porsche</p>
                <p className={styles.block_716}>
                  ● post office (unless referring to a specific place, i.e. Ann
                  Arbor Post Office)
                </p>
                <p className={styles.block_717}>● PowerPoint</p>
                <p className={styles.block_718}>● PS4</p>
                <p className={styles.block_671}>● Ray-Ban</p>
                <p className={styles.block_704}>● RealPlayer</p>
                <p className={styles.block_717}>● Rolls-Royce</p>
                <p className={styles.block_719}>● Samsung Galaxy</p>
                <p className={styles.block_720}>● Samsung Galaxy S II</p>
                <p className={styles.block_721}>● Samsung Galaxy S III</p>
                <p className={styles.block_722}>● Samsung Galaxy S4</p>
                <p className={styles.block_722}>● Samsung Galaxy S5</p>
                <p className={styles.block_723}>● SimCity</p>
                <p className={styles.block_724}>● Siri</p>
                <p className={styles.block_678}>● Smart car</p>
                <p className={styles.block_706}>● Snow+Rock</p>
                <p className={styles.block_656}>● SpongeBob</p>
                <p className={styles.block_725}>● Starbucks</p>
                <p className={styles.block_659}>● T-Mobile</p>
                <p className={styles.block_678}>● T.J. Maxx</p>
                <p className={styles.block_660}>● Texas hold 'em</p>
                <p className={styles.block_685}>● TobyGames</p>
                <p className={styles.block_662}>● PewDiePie</p>
                <p className={styles.block_726}>● TomTom</p>
                <p className={styles.block_660}>● Tour de France</p>
                <p className={styles.block_727}>● Toys "R" Us</p>
                <p className={styles.block_702}>● Travelodge</p>
                <p className={styles.block_681}>● Tumblr</p>
                <p className={styles.block_666}>● Twitter</p>
                <p className={styles.block_728}>● Virgin Media</p>
                <p className={styles.block_703}>● Visa</p>
                <p className={styles.block_670}>● WhatsApp</p>
                <p className={styles.block_729}>● WrestleMania XXX</p>
                <p className={styles.block_730}>● WWE '13</p>
                <p className={styles.block_731}>● Xbox</p>
                <p className={styles.block_707}>● Xbox 360</p>
                <p className={styles.block_732}>● Xbox One</p>
                <p className={styles.block_733}>● Yahoo</p>
                <p className={styles.block_658}>● YouPorn</p>
                <p className={styles.block_734}>● YouTube</p>
                <p className={styles.block_663}>● Zagat</p>
                <p className={styles.block_675}>● ZBox</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_737}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_738}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_739}>
                  Correct: screenshoty Call of Duty: Black Ops 2
                </p>
                <p className={styles.block_740}>
                  <span className={styles.text_4}>
                    Correct: Prehrať Diamonds od Rihanny.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The proper name "Rihanna" needs
                  </span>
                </p>
                <p className={styles.block_741}>to be inflected here.</p>
                <p className={styles.block_742}>
                  Correct: Prehrať Richard Müller Cigaretka na
                </p>
                <p className={styles.block_743}>dva ťahy.</p>
                <p className={styles.block_744}>
                  Incorrect: Prehrať Richard Müller „Cigaretka na
                </p>
                <p className={styles.block_745}>dva ťahy“.</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_747}>Correct: dizajn</p>
                <p className={styles.block_748}>Incorrect: design</p>
                <p className={styles.block_749}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_750}>Correct: Jasnačka</p>
                <p className={styles.block_751}>Correct: bezďák</p>
                <p className={styles.block_645}>Correct: čus</p>
                <p className={styles.block_752}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_4}>Correct: tvrdohlávka </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker meant "tvrdý" but added
                  </span>
                </p>
                <p className={styles.block_754}>an extra suffix.</p>
                <p className={styles.block_755}>
                  <span className={styles.text_4}>Correct: nervolezec </span>
                  <span className={styles.text_5}>
                    Explanation: Unsure whether speaker intended
                  </span>
                </p>
                <p className={styles.block_265}>
                  to say "nervy" or "lezec", but clearly articulated
                </p>
                <p className={styles.block_271}>and easy to spell.</p>
                <p className={styles.block_756}>
                  Slang words and colloquialisms
                </p>
                <p className={styles.block_692}>● absťák</p>
                <p className={styles.block_652}>● alkáč</p>
                <p className={styles.block_757}>● bejby</p>
                <p className={styles.block_668}>● bezďák</p>
                <p className={styles.block_758}>● bufeťák</p>
                <p className={styles.block_652}>● buzík</p>
                <p className={styles.block_650}>● cica</p>
                <p className={styles.block_676}>● čoko</p>
                <p className={styles.block_759}>● depka</p>
                <p className={styles.block_650}>● fízel</p>
                <p className={styles.block_696}>● foter</p>
                <p className={styles.block_760}>● nazdar</p>
                <p className={styles.block_651}>● páčko</p>
                <p className={styles.block_692}>● prdlajs</p>
                <p className={styles.block_178}>● servus</p>
                <p className={styles.block_761}>
                  <span className={styles.text_6}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or singing.{' '}
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
