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
            <PageContentHeader currentPage="Longform Vietnamese" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_424}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it is said (often done for
                    foreign names or businesses, for example). Use lowercase
                    letters for the spelled-out portion. This rule does not
                    apply to acronyms or initialisms, or to spelled-out web or
                    email addresses.
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: TGĐ </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>t g đ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>: common acronym </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Vinamilk v i n a m i l k{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    vinamilk v i n a m i l k{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    For uses of single letters, either referring to the letter
                    itself or some other meaning associated with it, use capital
                    letters (with apostrophes for plurals).
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : các từ bắt đầu với chữ X{' '}
                  </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : có bao nhiêu chữ A trong từ banana?{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_432}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Transcribe words representing laughter or other non-speech
                    vocalizations with up to three syllables, but no more.
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : heh, ha, haha, hahaha, hehe, hehehe, boo hoo, boo hoo hoo,
                    lalala
                  </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: hehehe </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: hehehehehe </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>he he he he he </span>
                  <span className={styles.text_6}>" </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Do not transcribe more than three syllables.
                  </span>
                </p>
                <p className={styles.block_436}>Proper names</p>
                <p className={styles.block_437}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and pay attention to the correct
                    format. Official format and spelling of a proper name may
                    supersede the usual written transcription conventions
                    detailed in this document.
                  </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Defer to official spellings of celebrity names.
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: will.i.am </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Sơn Tùng M-TP </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If proper names include diacritics uncommon in Vietnamese
                    (č, ü, ç, etc.), do not include them in your spelling.
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If a speaker makes a small mistake in a proper name,
                    capitalize it anyway as long as the difference is minimal.
                    "Minimal difference" refers to adding or dropping articles,
                    possessives, and plurals.
                  </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Vua Hùng Vươn </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : actual name is Vua Hùng Vương{' '}
                  </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Trận Bạc Đằn </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : actual name is Trận Bạch Đằng{' '}
                  </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Spell and capitalize holidays as they are formatted within
                    the answer box above the list of Google Search results. If
                    no box appears, defer to Wikipedia's formatting, and if
                    there is no Wikipedia article, use the most common format
                    according to Google Search results.
                  </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Tết Nguyên Đán </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Tết Trung Thu </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Lễ Giáng Sinh </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Capitalize words used as titles and names when they are used
                    that way.
                  </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi đi cùng với Bố, Mẹ, và Ông Bà Ngoại.{' '}
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
                <p className={styles.block_452}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: quán ăn Ngon </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi nghe đồn Kinh Đô tính mua lại Đức Phát.
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Co.op Food </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: YouTube </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: công ty Futech </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: ASUS </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Burger King </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: BURGER KING </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Do not spell "Burger King" all in upper case as in the
                    stylized form of the logo, stick to the official form as per
                    the privacy policy.
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: LEGO </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: Lego </span>
                  <span className={styles.text_17}>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and "Ok Glass", require their own
                    particular spelling of "okay". This spelling is unique to
                    these cases.
                  </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Ok Google </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Ok Google Now </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ok Google, amazon.com{' '}
                  </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Refer to the Google Play Store for official spellings of
                    media titles. For film/television, IMDb is also available.
                    If an utterance is ambiguous between a media title and a
                    sentence or web search, use your judgment for which is more
                    likely; if truly unclear, default to media title.
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Vua Trò Chơi Yu-Gi-Oh!{' '}
                  </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Capitalize media titles the way they are typically
                    capitalized.
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Do not use quotation marks for media titles.
                  </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Hãy chơi bài Apologize của Hồ Ngọc Hà.{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi đang nghe Anh Không Đòi Quà của Karik.
                  </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Transcribe all media titles with original punctuation. In
                    cases where original punctuation falls at the end of a
                    sentence, do not transcribe sentence-level
                  </span>
                </p>
                <p className={styles.block_472}>
                  punctuation. That is, media title punctuation trumps sentence
                  level punctuation when in conflict. If a popular media title
                  consists of an entire sentence but the official spelling is
                  without punctuation, then don't punctuate the title. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely and
                  treat it accordingly.
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ai đã đóng trong phim Ai đã Mưu hại Roger Rabbit?
                  </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Very common alternate or shortened versions of titles should
                    also be capitalized.
                  </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Mở phim Thế hệ Kế tiếp.{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Official title is "Star Trek: Thế hệ Kế{' '}
                  </span>
                </p>
                <p className={styles.block_476}>tiếp".</p>
                <p className={styles.block_477}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Do not capitalize a media title that happens to occur within
                    quoted lyrics. Format lyrics that form a sentence as you
                    would a normal sentence.
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : YouTube Hà Nội mùa này vắng những cơn mưa, cái rét đầu
                    đông, khăn em bay hiu hiu gió lạnh.{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : YouTube Hà Nội Mùa Này Vắng Những Cơn Mưa, cái rét đầu
                    đông, khăn em bay hiu hiu gió lạnh.
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : They are quoting lyrics that just happen to contain the
                    title; format as full sentence.
                  </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you understand them.
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Gone with the Wind </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    When multiple spellings are attested, use the first spelling
                    used in the reference dictionary for your language. If there
                    is no entry, Google the word and use the form with the most
                    hits.
                  </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: đi về </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>đi dề </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: axít </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>a xít </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Guess the most likely spelling given the context. When
                    context is insufficient, rely on Google hits.
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: đèn pha </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: bến phà </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: gia phả </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    Use official spelling and capitalization for technical
                    terms. Google them and pay attention to the correct format.
                  </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : xét nghiệm tuberculosis{' '}
                  </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If you hear a word that does not sound like a standard word
                    of your language because there is a small sound change (i.e.
                    accent, speech error, speech impairment, etc), transcribe
                    the intended word.
                  </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: flashmob performance </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>flashmab performance </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: kungfu martial art </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>kungfo martial art </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If you hear a word that does not sound like a standard word
                    of your language, but it is obviously based on real words,
                    suffixes, or prefixes, transcribe as is.
                  </span>
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Mua cho tôi champagnac cho buổi liên hoan.
                  </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: cheeseate </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If you hear a word that does not sound like a standard word
                    of your language because it appears to be nonsense, first
                    perform a Google search for the word. If there is a clear
                    candidate, transcribe that word.
                  </span>
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Souk Abdali </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : User says "Souk Abdali". Transcriber{' '}
                  </span>
                </p>
                <p className={styles.block_500}>
                  searches "sukabdali", finds correct results. Transcribe Souk
                  Abdali.
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
                    If a word appears to be nonsense and a Google search returns
                    no clear results but it is easy to spell and articulated
                    clearly, transcribe it anyway.
                  </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: cơm gà chihuahua </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_3}>
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
