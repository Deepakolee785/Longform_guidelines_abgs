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
            <PageContentHeader currentPage="longform Slovene" />
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
                  letters
                </p>
                <p className={'text'}>
                  for the spelled-out portion. This rule does not apply to
                  acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_577}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x
                </p>
                <p className={styles.block_578}>y z</p>
                <p className={styles.block_579}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>Correct: VIP-i </span>
                  <span className={styles.text_7}>
                    Explanation: spelled out v i p with plural "-i"
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>

                <p className={styles.block_582}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>Correct: hahaha </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>ha ha ha ha ha </span>
                  <span className={styles.text_5}>" </span>
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
                <p className={styles.block_586}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_587}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_588}>Correct: Pokliči Sofijo.</p>
                <p className={styles.block_589}>Incorrect: Pokliči Sofio.</p>
                <p className={styles.block_590}>
                  Explanation: Searching "ime Sofija" (without
                </p>
                <p className={styles.block_591}>
                  quotation marks) yields more results than "ime
                </p>
                <p className={styles.block_592}>
                  Sofia", even though searching "Sofia" yields
                </p>
                <p className={styles.block_593}>
                  more results than "Sofija" because Sofia is the
                </p>
                <p className={styles.block_594}>capital of Bulgaria.</p>
                <p className={styles.block_595}>Correct: MacDonald</p>
                <p className={styles.block_596}>
                  Explanation: Searching "ime MacDonald" yields
                </p>
                <p className={styles.block_597}>Incorrect: McDonald</p>
                <p className={styles.block_598}>
                  more search results than "ime McDonald". Note
                </p>
                <p className={styles.block_599}>
                  that this example refers to the surname, not the
                </p>
                <p className={styles.block_600}>restaurant chain.</p>
                <p className={styles.block_601}>
                  <span className={styles.text_4}>
                    Correct: Sofijo MacDonald{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Search full names to see if they
                  </span>
                </p>
                <p className={styles.block_602}>
                  refer to a celebrity. If the full name does not
                </p>
                <p className={styles.block_603}>
                  belong to a celebrity, use the most common
                </p>
                <p className={styles.block_604}>
                  spelling for each part of the name (e.g. search
                </p>
                <p className={styles.block_605}>
                  "ime Sofijo" and "ime MacDonald").
                </p>
                <p className={styles.block_606}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal difference" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_4}>
                    Correct: The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: actual name is "The Lord of the
                  </span>
                </p>
                <p className={styles.block_313}>Rings"</p>
                <p className={styles.block_296}>
                  <span className={styles.text_4}>Correct: Craiglist </span>
                  <span className={styles.text_7}>
                    Explanation: actual name is "Craigslist"{' '}
                  </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_4}>
                    Correct: Predvajaj film Matrix.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: actual name is "The Matrix"{' '}
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
                  use top Google hits.
                </p>
                <p className={styles.block_611}>Correct: Delam za Amazon.</p>
                <p className={styles.block_612}>
                  Correct: Slišal sem, da sta se Yahoo in T-Mobile
                </p>
                <p className={styles.block_613}>končno dogovorila.</p>
                <p className={styles.block_614}>Correct: Facebook</p>
                <p className={styles.block_615}>
                  <span className={styles.text_4}>Correct: ZPIZ </span>
                  <span className={styles.text_7}>
                    Explanation: Officially "ZPIZ" and is based on an
                  </span>
                </p>
                <p className={styles.block_616}>acronym.</p>
                <p className={styles.block_617}>
                  <span className={styles.text_4}>Correct: YouTube </span>
                  <span className={styles.text_7}>
                    Explanation: camel case{' '}
                  </span>
                </p>
                <p className={styles.block_618}>Correct: Burger King</p>
                <p className={styles.block_619}>Incorrect: BURGER KING</p>
                <p className={styles.block_620}>
                  Explanation: Do not spell "Burger King" all in
                </p>
                <p className={styles.block_621}>
                  upper case as in the stylized form of the logo,
                </p>
                <p className={styles.block_622}>
                  stick to the official form as per the privacy
                </p>
                <p className={styles.block_623}>policy.</p>
                <p className={styles.block_218}>Correct: LEGO</p>
                <p className={styles.block_624}>Incorrect: Lego</p>
                <p className={styles.block_282}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_625}>Correct: Ok Google</p>
                <p className={styles.block_626}>Correct: Ok Google Now</p>
                <p className={styles.block_627}>
                  Correct: Ok Google, kje je Starbucks?
                </p>
                <p className={styles.block_628}>Correct: Ok Google, buče</p>
                <p className={styles.block_629}>
                  <span className={styles.text_4}>Correct: OK. </span>
                  <span className={styles.text_7}>
                    Explanation: For uses other than with "Google",
                  </span>
                </p>
                <p className={styles.block_630}>use the format "OK".</p>
                <p className={styles.block_631}>Correct: OK, David.</p>
                <p className={styles.block_632}>
                  Correct: OK, Patricija, greva.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_634}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_635}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_636}>
                  Correct: zaslonske slike od Call of Duty: Black
                </p>
                <p className={styles.block_637}>Ops 2</p>
                <p className={styles.block_638}>
                  Correct: Predvajaj Diamonds od Rihanna.
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_4}>Correct: pica </span>
                  <span className={styles.text_7}>
                    Explanation: "pica" is preferred by Slovenian
                  </span>
                </p>
                <p className={styles.block_642}>orthography.</p>
                <p className={styles.block_643}>Incorrect: pizza</p>
                <p className={styles.block_644}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_645}>Correct: Ne se hecat.</p>
                <p className={styles.block_589}>Incorrect: Ne se hecati.</p>
                <p className={styles.block_646}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ne se hecat </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_647}>Correct: Trdo smo delal.</p>
                <p className={styles.block_648}>Incorrect: Trdo smo delali.</p>
                <p className={styles.block_649}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>trdo smo delal </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_650}>Correct: Rad ma kavo.</p>
                <p className={styles.block_651}>Incorrect: Rad ima kavo.</p>
                <p className={styles.block_652}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>rad ma kavo </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_653}>Correct: Medve grema domov.</p>
                <p className={styles.block_654}>
                  Incorrect: Midve greva domov.
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>medve grema domov </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_656}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech, like "sem" for "sm".
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_4}>
                    Correct: Bila sem pozna.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>bla sm pozna </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_658}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_4}>
                    Correct: Ostal sem brez kosilota.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker meant "kosila" but added
                  </span>
                </p>
                <p className={styles.block_659}>on extra suffix.</p>
                <p className={styles.block_660}>
                  <span className={styles.text_4}>
                    Correct: Povabila nas je na kočerjo.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Unsure whether speaker intended
                  </span>
                </p>
                <p className={styles.block_661}>
                  to say "kosilo" or "večerjo", but clearly
                </p>
                <p className={styles.block_662}>
                  articulated and easy to spell.
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_8}>
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
