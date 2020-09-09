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
            <PageContentHeader currentPage="Longform Korean" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_602}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). This rule does not
                  apply to acronyms or initialisms, or to spelled-out web or
                  email addresses.
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : 코스트코 코 스 트 코{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>
                    : " 코스트코 코 스 트 코 "{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 하하하 </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 하하하하 </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 하 하 하 하 " </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Do not transcribe more than three syllables.
                  </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={styles.block_611}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_612}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_20}>C</span>
                  <span className={styles.text_21}>ORRECT</span>
                  <span className={styles.text_20}>: The 5.6.7.8's </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : Spelled this way in privacy policy.{' '}
                  </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: will.i.am </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_20}>C</span>
                  <span className={styles.text_21}>ORRECT</span>
                  <span className={styles.text_20}>: Kristin Chenoweth </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : The celebrity spells her name differently
                  </span>
                </p>
                <p className={styles.block_616}>
                  than the more common "Kristen".
                </p>
                <p className={styles.block_617}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling. If unsure,
                  refer to news articles, official city or celebrity websites,
                  IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                  box above the list of Google Search results) in that order.
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_618}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 혜연이한테 전화하기. </span>
                </p>
                <p className={styles.block_620}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 해연이한테 전화하기. </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : The name "혜연" is more common than the name "해연".
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  For Global Company names, transcribe them as their official
                  name. If they have a Korean branch and they use transliterated
                  names in Korea, transcribe them in Hangeuls. Otherwise, format
                  brand names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy.
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 유튜브 </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: YouTube </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 유튜브 " </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 페이스북 </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Facebook </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 페이스북 " </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 트위터 </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Twitter </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 트위터 " </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: ASUS 컴퓨터 </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Burger King </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: BURGER KING </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Do not spell "Burger King" all in uppercase as in the
                    stylized form of the logo, stick to the official form as per
                    the privacy policy.
                  </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: LEGO </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Lego </span>
                </p>
                <p className={styles.block_634}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_18}>E</span>
                  <span className={styles.text_19}>XAMPLE </span>
                  <span className={styles.text_20}>C</span>
                  <span className={styles.text_21}>ORRECT</span>
                  <span className={styles.text_20}>: Ok Google </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_6}>AUDIO</span>
                  <span className={styles.text_7}>: " 오케이 구글 " </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: OK Google </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : Ok Google, 엄마한테 전화해 줘.{' '}
                  </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : Ok Google, 강아지 사진{' '}
                  </span>
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
                <p className={styles.block_641}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_642}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 국제시장 보여 줘. </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: "국제시장" 보여 줘. </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 국제시장 보여 줘 " </span>
                </p>
                <p className={styles.block_234}>
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
                <p className={styles.block_645}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 우리 흑성탈출: 반격의 서막 보러 갈까?{' '}
                  </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 우리 흑성탈출 반격의 서막 보러갈까?{' '}
                  </span>
                </p>
                <p className={styles.block_647}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 로스트 </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Lost </span>
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
                <p className={styles.block_652}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 개 </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 게 </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "개" is more frequently used than "게".{' '}
                  </span>
                </p>
                <p className={styles.block_655}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 바다에서 막 잡아서 그런지 게가 참 맛있네.
                  </span>
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 바다에서 막 잡아서 그런지 개가 참 맛있 네.
                  </span>
                </p>
                <p className={styles.block_658}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 아스마에취 시럽 </span>
                </p>
                <p className={styles.block_660}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 야 인마 </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 야 임마 </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 야 인마 " </span>
                </p>
                <p className={styles.block_664}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 재밌다 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 재밌다 " </span>
                </p>
                <p className={styles.block_666}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 재미있다 </span>
                </p>
                <p className={styles.block_667}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 오빠 뭐 해 </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 오빠 모해 </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 오빠 모해 " </span>
                </p>
                <p className={styles.block_668}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 자깝스럽다 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 자깝스럽다 " </span>
                </p>
                <p className={styles.block_670}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 파쿠르 </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XAMPLE AUDIO</span>
                  <span className={styles.text_16}>: " 파꾸르 " </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : The transcriber searched "파꾸르" and the results returned
                    "파쿠르" as the correct spelling.
                  </span>
                </p>
                <p className={styles.block_672}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 발전나루타 </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: [skip] </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 발전나루타 " </span>
                </p>
                <p className={styles.block_675}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
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
