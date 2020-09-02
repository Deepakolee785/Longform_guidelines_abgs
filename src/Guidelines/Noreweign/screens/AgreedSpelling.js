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
            <PageContentHeader currentPage="longform Noreweign" />
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
                <p className={styles.block_761}>
                  <span className={styles.text_4}>
                    Correct: Dagbladet d a g b l a d e t{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Person said "dagbladet" and then
                  </span>
                </p>
                <p className={styles.block_349}>spelled it.</p>
                <p className={styles.block_762}>
                  <span className={styles.text_4}>
                    Correct: Har du d a g b l a d e t?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    har du d a g b l a d e t{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_763}>
                  <span className={styles.text_4}>
                    Correct: ord som ender på i n g{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ord som ender på i n g </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_764}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x
                </p>
                <p className={styles.block_507}>y z æ ø å</p>
                <p className={styles.block_765}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_4}>Correct: amazon.co.uk </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    amazon punktum c o punktum{' '}
                  </span>
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_1}>u k </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_4}>Correct: CEO </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>c e o </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_769}>
                  <span className={styles.text_4}>
                    Correct: Alle VIPer sitter fremst.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: spelled out "v i p" with plural "er"
                  </span>
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_4}>Correct: FIFA </span>
                  <span className={styles.text_5}>
                    Explanation: Pronounced the word "FIFA", or
                  </span>
                </p>
                <p className={styles.block_771}>spelled out "f i f a".</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Correct: ASAP </span>
                  <span className={styles.text_5}>
                    Explanation: Pronounced the word "ASAP", or
                  </span>
                </p>
                <p className={styles.block_773}>spelled out "a s a p".</p>
                <p className={styles.block_774}>
                  <span className={styles.text_4}>Correct: AAA </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker says "trippel a", or "a a a".
                  </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_4}>Correct: T-skjorte </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>t-skjorte </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_775}>
                  <span className={styles.text_4}>Correct: e-post </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>e-post </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_4}>Correct: LDAP </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>el-dap </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_777}>
                  Correct: A-Rod, iPhone, USA, IBM, xkcd, mp3
                </p>
                <p className={styles.block_778}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_779}>
                  Correct: ord som begynner med J
                </p>
                <p className={styles.block_780}>Correct: rulle-R</p>
                <p className={styles.block_781}>
                  Correct: Hun fikk A på eksamen.
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_210}>
                  Correct: heh, ha, haha, hahaha, hehe, hehehe,
                </p>
                <p className={styles.block_784}>boo hoo, boo hoo hoo, lalala</p>
                <p className={styles.block_785}>
                  <span className={styles.text_4}>Correct: hahaha </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ha ha ha ha ha </span>
                  <span className={styles.text_6}>" </span>
                </p>
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
                <p className={styles.block_788}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_4}>Correct: The 5.6.7.8's </span>
                  <span className={styles.text_5}>
                    Explanation: Spelled this way in privacy policy.
                  </span>
                </p>
                <p className={styles.block_790}>Correct: will.i.am</p>
                <p className={styles.block_791}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling. If unsure,
                  refer to news articles, official city or celebrity websites,
                  IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                  box above the list of Google Search results) in that order.
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_792}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_793}>Correct: Ring Sophia.</p>
                <p className={styles.block_794}>Incorrect: Ring Sofia.</p>
                <p className={styles.block_795}>
                  Explanation: Searching "Sophia name" (without
                </p>
                <p className={styles.block_796}>
                  quotation marks) yields more results than
                </p>
                <p className={styles.block_797}>
                  "Sofia name", even though searching "Sofia"
                </p>
                <p className={styles.block_798}>
                  yields more results than "Sophia" because Sofia
                </p>
                <p className={styles.block_799}>is the capital of Bulgaria.</p>
                <p className={styles.block_800}>Correct: Lorentzen</p>
                <p className={styles.block_801}>Incorrect: Lorentsen</p>
                <p className={styles.block_802}>
                  Explanation: Searching "Lorentzen name" yields
                </p>
                <p className={styles.block_803}>
                  more search results than "Lorentsen name".
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_4}>
                    Correct: Sofia Lorentzen{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Search full names to see if they
                  </span>
                </p>
                <p className={styles.block_805}>
                  refer to a celebrity. If the full name does not
                </p>
                <p className={styles.block_806}>
                  belong to a celebrity, use the most common
                </p>
                <p className={styles.block_807}>
                  spelling for each part of the name (e.g. search
                </p>
                <p className={styles.block_808}>
                  "Sofia name" and "Lorentzen name").
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_811}>
                  Correct: Han jobber for Amazon.
                </p>
                <p className={styles.block_812}>
                  Correct: Jeg hørte at Yahoo og T-Mobile
                </p>
                <p className={styles.block_813}>akkurat har blitt enige.</p>
                <p className={styles.block_814}>
                  Correct: Det hender jeg spiser på Burger King
                </p>
                <p className={styles.block_327}>og Subway.</p>
                <p className={styles.block_437}>Correct: YouTube</p>
                <p className={styles.block_815}>
                  Correct: Vålerenga Fotball vant Tippeligaen i
                </p>
                <p className={styles.block_816}>2001.</p>
                <p className={styles.block_817}>
                  <span className={styles.text_4}>Correct: Craigslist </span>
                  <span className={styles.text_5}>
                    Explanation: Officially "craigslist" per its privacy
                  </span>
                </p>
                <p className={styles.block_818}>policy, but capitalize it.</p>
                <p className={styles.block_819}>
                  <span className={styles.text_4}>Correct: a-ha </span>
                  <span className={styles.text_5}>
                    Explanation: Officially "a-ha".{' '}
                  </span>
                </p>
                <p className={styles.block_820}>Correct: iTunes</p>
                <p className={styles.block_821}>Correct: Burger King</p>
                <p className={styles.block_822}>Incorrect: BURGER KING</p>
                <p className={styles.block_823}>
                  Explanation: Do not spell "Burger King" all in
                </p>
                <p className={styles.block_824}>
                  upper case as in the stylized form of the logo,
                </p>
                <p className={styles.block_825}>
                  stick to the official form as per the privacy
                </p>
                <p className={styles.block_826}>policy.</p>
                <p className={styles.block_827}>Correct: LEGO</p>
                <p className={styles.block_828}>Incorrect: Lego</p>
                <p className={styles.block_829}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_830}>Correct: Ok Google</p>
                <p className={styles.block_831}>Correct: Ok Google Now</p>
                <p className={styles.block_832}>
                  Correct: Ok Google, hvor er Starbucks?
                </p>
                <p className={styles.block_833}>Correct: Ok Google, gresskar</p>
                <p className={styles.block_834}>Correct: Okay.</p>
                <p className={styles.block_835}>Correct: Okay, David.</p>
                <p className={styles.block_836}>
                  Correct: Okay Regine, da stikker vi.
                </p>
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
                <p className={styles.block_839}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_840}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_841}>Correct: Skyfall</p>
                <p className={styles.block_842}>
                  Correct: skjermdump fra Call of Duty: Black Ops
                </p>
                <p className={styles.block_843}>
                  <span className={styles.text_16}>
                    <sub className={styles.calibre2}>
                      Correct: Spill The Wheel av Motorpsycho.
                    </sub>
                  </span>
                </p>
                <p className={styles.block_541}>Correct: Aftenposten</p>
                <p className={styles.block_844}>
                  Transcribe all media titles with original punctuation. In
                  cases where original punctuation falls at the end of a
                  sentence, do not transcribe sentence-level punctuation. That
                  is, media title punctuation trumps sentence level punctuation
                  when in conflict. If a popular media title consists of an
                  entire sentence but the official spelling is without
                  punctuation, then don't punctuate the title. If an utterance
                  is ambiguous between a media title and a sentence or web
                  search, use your judgment for which is more likely and treat
                  it accordingly.
                </p>
                <p className={styles.block_845}>
                  Correct: Sjekk hvilket år Shall We Dance? kom
                </p>
                <p className={styles.block_846}>ut.</p>
                <p className={styles.block_847}>
                  Correct: Hvem var det som spilte i Dude,
                </p>
                <p className={styles.block_848}>Where's My Car?</p>
                <p className={styles.block_326}>
                  Correct: Familiens favoritt er What About Bob?
                </p>
                <p className={styles.block_849}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_850}>
                  <span className={styles.text_4}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Transformers: Revenge of the
                  </span>
                </p>
                <p className={styles.block_851}>Fallen"</p>
                <p className={styles.block_355}>
                  <span className={styles.text_4}>
                    Correct: Star Wars Episode III{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Star Wars Episode III: Revenge
                  </span>
                </p>
                <p className={styles.block_852}>of the Sith"</p>
                <p className={styles.block_853}>
                  <span className={styles.text_4}>
                    Correct: What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "The Fox (What Does the Fox
                  </span>
                </p>
                <p className={styles.block_854}>Say?)"</p>
                <p className={styles.block_855}>
                  <span className={styles.text_4}>
                    Correct: The Next Generation{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Star Trek: The Next{' '}
                  </span>
                </p>
                <p className={styles.block_856}>Generation"</p>
                <p className={styles.block_857}>
                  <span className={styles.text_4}>
                    Correct: Spill Teen Spirit av Nirvana.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Correct title is "Smells Like Teen
                  </span>
                </p>
                <p className={styles.block_858}>Spirit".</p>
                <p className={styles.block_460}>
                  <span className={styles.text_4}>
                    Correct: Jeg vil høre Taylor Swift Trouble.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Correct title is "I Knew You Were
                  </span>
                </p>
                <p className={styles.block_859}>Trouble".</p>
                <p className={styles.block_860}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_861}>
                  Correct: YouTube We are the champions my
                </p>
                <p className={styles.block_862}>
                  friends, and we'll keep on fighting till the end.
                </p>
                <p className={styles.block_863}>
                  Incorrect: YouTube We Are the Champions my
                </p>
                <p className={styles.block_864}>
                  friends, and we'll keep on fighting till the end.
                </p>
                <p className={styles.block_863}>
                  Incorrect: YouTube We Are the Champions My
                </p>
                <p className={styles.block_865}>
                  Friends And We'll Keep on Fighting till the End.
                </p>
                <p className={styles.block_445}>
                  Explanation: They are quoting lyrics that just
                </p>
                <p className={styles.block_866}>
                  happen to contain the title; format as full
                </p>
                <p className={styles.block_867}>sentence.</p>
                <p className={styles.block_868}>
                  Correct: ground control to Major Tom
                </p>
                <p className={styles.block_869}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_870}>Correct: Y Tu Mama También</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_873}>Correct: fram</p>
                <p className={styles.block_874}>Incorrect: frem</p>
                <p className={styles.block_875}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_876}>
                  Correct: Det er ikke verdt prisen.
                </p>
                <p className={styles.block_877}>Correct: verdt</p>
                <p className={styles.block_878}>Incorrect: vært</p>
                <p className={styles.block_879}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_880}>
                  Correct: Pseudotsuga menziesii
                </p>
                <p className={styles.block_881}>Correct: E. coli</p>
                <p className={styles.block_882}>Correct: Imidazol</p>
                <p className={styles.block_883}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_884}>Correct: Det ække det.</p>
                <p className={styles.block_885}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_4}>Correct: skjønner </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>kjønner </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_4}>Correct: julaften </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>juleaften </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_888}>
                  <span className={styles.text_4}>Correct: du </span>
                  <span className={styles.text_5}>
                    Explanation: Person said "do" in German{' '}
                  </span>
                </p>
                <p className={styles.block_889}>accent.</p>
                <p className={styles.block_890}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_4}>Correct: Kaloli </span>
                  <span className={styles.text_5}>
                    Explanation: User says "Kaloli". This might
                  </span>
                </p>
                <p className={styles.block_892}>
                  sound like nonsense at first, but the transcriber
                </p>
                <p className={styles.block_893}>
                  guesses the spelling "kalolli" and is by
                </p>
                <p className={styles.block_407}>
                  corrected Google Search to "Kaloli", a gasoline
                </p>
                <p className={styles.block_894}>
                  tanker and place in Hawaii. Transcribe Kaloli.
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_4}>Correct: Souk Abdali </span>
                  <span className={styles.text_5}>
                    Explanation: User says "Souk Abdali".{' '}
                  </span>
                </p>
                <p className={styles.block_895}>
                  Transcriber searches "sukabdali", finds correct
                </p>
                <p className={styles.block_896}>
                  results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_897}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_898}>Correct: taggenbrope</p>
                <p className={styles.block_899}>
                  <span className={styles.text_17}>
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
