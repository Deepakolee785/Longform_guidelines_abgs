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
            <PageContentHeader currentPage="Longform Italian" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling </p>
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
                <p className={styles.block_746}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Coop c o o p </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Person said "coop" and then spelled it.{' '}
                  </span>
                </p>
                <p className={styles.block_747}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Come si arriva alla c o o p?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    come si arriva alla c o o p{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_748}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : parole che terminano in a r e{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    parole che terminano in a r e{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : a b c d e f g h i l m n o p q r s t u v z{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: spelled out alphabet </span>
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: amazon.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>amazon punto c o m </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_751}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : In URLs domains, do not insert spaces between the letters.
                  </span>
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: PDF </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>p d f </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not insert spaces between letters in acronyms.
                  </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: FIFA </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Pronounced the word "FIFA", or spelled{' '}
                  </span>
                </p>
                <p className={styles.block_754}>out "f i f a".</p>
                <p className={styles.block_755}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: ASAP </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Pronounced the word "ASAP", or spelled{' '}
                  </span>
                </p>
                <p className={styles.block_756}>out "a s a p".</p>
                <p className={styles.block_757}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: NCAA </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker says "n c a a".{' '}
                  </span>
                </p>
                <p className={styles.block_758}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: AAA </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker says "a a a".{' '}
                  </span>
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: t-shirt </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>t-shirt </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: email </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>email </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_761}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: LDAP </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>el-dap </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : DivX, iPhone, USA, IBM, xkcd{' '}
                  </span>
                </p>
                <p className={styles.block_763}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_764}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : parole che iniziano con la lettera J{' '}
                  </span>
                </p>
                <p className={styles.block_765}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Pronuncia meglio la R.{' '}
                  </span>
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : In pagella ha tutte A e B.{' '}
                  </span>
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Quante A ci sono nella parola banana?{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : he, ha, hi, haha, hahaha, hehe, hehehe, hihi, hihihi,
                    lalala
                  </span>
                </p>
                <p className={styles.block_771}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: hahaha </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>ha ha ha ha ha </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_772}>
                  Spell common interjections as demonstrated in the appendix on
                  this page. Do not transcribe non-speech vocalizations that are
                  not in this list.
                </p>
                <p className={styles.block_773}>
                  Spellings of common interjections. If on their own, use
                  exclamation mark.
                </p>
                <p className={styles.block_774}>• ah</p>
                <p className={styles.block_775}>• ah ah (beccato!)</p>
                <p className={styles.block_776}>• ahi/ahia/ahio/uhi</p>
                <p className={styles.block_777}>• ahimé</p>
                <p className={styles.block_778}>• ahm</p>
                <p className={styles.block_779}>• ahó</p>
                <p className={styles.block_780}>• alé</p>
                <p className={styles.block_781}>• alè</p>
                <p className={styles.block_782}>• alt</p>
                <p className={styles.block_783}>• altolà</p>
                <p className={styles.block_784}>• azz</p>
                <p className={styles.block_785}>• beh</p>
                <p className={styles.block_779}>• boh</p>
                <p className={styles.block_786}>• brr</p>
                <p className={styles.block_779}>• buh</p>
                <p className={styles.block_778}>• bum</p>
                <p className={styles.block_779}>• deh</p>
                <p className={styles.block_787}>• eccì/etcì/ecciù</p>
                <p className={styles.block_782}>• eh</p>
                <p className={styles.block_780}>• ehi</p>
                <p className={styles.block_788}>• ehlà</p>
                <p className={styles.block_789}>• ehm</p>
                <p className={styles.block_780}>• eja</p>
                <p className={styles.block_790}>• embè</p>
                <p className={styles.block_791}>• evviva</p>
                <p className={styles.block_792}>• gnam gnam</p>
                <p className={styles.block_793}>• jà</p>
                <p className={styles.block_794}>• macché</p>
                <p className={styles.block_795}>• mah</p>
                <p className={styles.block_796}>• marsch</p>
                <p className={styles.block_797}>• mmm (buono/sono indeciso)</p>
                <p className={styles.block_798}>• mo</p>
                <p className={styles.block_790}>• muah</p>
                <p className={styles.block_799}>• muahaha/buahaha</p>
                <p className={styles.block_779}>• neh</p>
                <p className={styles.block_782}>• oh</p>
                <p className={styles.block_779}>• ohé</p>
                <p className={styles.block_781}>• ohi</p>
                <p className={styles.block_800}>• ohilà</p>
                <p className={styles.block_801}>• ohibò</p>
                <p className={styles.block_780}>• olé</p>
                <p className={styles.block_784}>• ops</p>
                <p className={styles.block_778}>• orsù</p>
                <p className={styles.block_786}>• prr</p>
                <p className={styles.block_784}>• pss</p>
                <p className={styles.block_617}>• shh (silenzio)</p>
                <p className={styles.block_802}>• spe'</p>
                <p className={styles.block_803}>• toh (sorpresa)</p>
                <p className={styles.block_804}>• ts</p>
                <p className={styles.block_782}>• ué</p>
                <p className={styles.block_805}>• uelà</p>
                <p className={styles.block_782}>• uff</p>
                <p className={styles.block_782}>• uh</p>
                <p className={styles.block_806}>• ups</p>
                <p className={styles.block_807}>• urrà</p>
                <p className={styles.block_808}>• va be'</p>
                <p className={styles.block_809}>• vabbè</p>
                <p className={styles.block_800}>• voilà</p>
                <p className={styles.block_778}>• wow</p>
                <p className={styles.block_810}>• yeah</p>
                <p className={styles.block_783}>• yuppi</p>
                <p className={styles.block_811}>Proper names</p>
                <p className={styles.block_812}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_813}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_814}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Gué Pequeno </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Spelled this way in privacy policy.{' '}
                  </span>
                </p>
                <p className={styles.block_815}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: will.i.am </span>
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: L'aura Abela </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : The celebrity spells her name differently
                  </span>
                </p>
                <p className={styles.block_817}>
                  from the more common "Laura".
                </p>
                <p className={styles.block_818}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling. If unsure,
                  refer to news articles, official city or celebrity websites,
                  IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                  box above the list of Google Search results) in that order.
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_819}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_820}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Chiama Sofia. </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Chiama Sophia. </span>
                </p>
                <p className={styles.block_821}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Searching "nome Sophia" (without quotation marks)
                    redirects to search results for "nome Sofia" (more common in
                    Italian).
                  </span>
                </p>
                <p className={styles.block_822}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Iurato </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Jurato </span>
                </p>
                <p className={styles.block_823}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Searching "cognome Iurato" yields more search results than
                    "cognome Jurato".
                  </span>
                </p>
                <p className={styles.block_824}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sofia Iurato </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Search full names to see if they refer to
                  </span>
                </p>
                <p className={styles.block_825}>
                  a celebrity. If the full name does not belong to a celebrity,
                  use the most common spelling for each part of the name (e.g.
                  search "nome Sofia" and "cognome Iurato").
                </p>
                <p className={styles.block_826}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google Search results. If no box
                  appears, defer to Wikipedia's formatting, and if there is no
                  Wikipedia article, use the most common format according to
                  Google Search results.
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : A Capodanno festeggiamo a casa di Elena.{' '}
                  </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Nel 2015 Pasqua si festeggia in aprile.{' '}
                  </span>
                </p>
                <p className={styles.block_829}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Felice Yule! </span>
                </p>
                <p className={styles.block_830}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Buon Natale e felice anno nuovo.{' '}
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'heading'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_833}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Lavora per Amazon. </span>
                </p>
                <p className={styles.block_834}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : FIAT e Chrysler hanno appena raggiunto un accordo.
                  </span>
                </p>
                <p className={styles.block_835}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Non mangio spesso da Burger King e Subway.
                  </span>
                </p>
                <p className={styles.block_836}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: YouTube </span>
                </p>
                <p className={styles.block_837}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ho comprato questo gioco da Toys "R" Us.{' '}
                  </span>
                </p>
                <p className={styles.block_835}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Gira a sinistra dopo il distributore Q8.{' '}
                  </span>
                </p>
                <p className={styles.block_838}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: craigslist </span>
                </p>
                <p className={styles.block_839}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: ASUS </span>
                </p>
                <p className={styles.block_840}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: TIM </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Officially "TIM", and it also reflects the
                  </span>
                </p>
                <p className={styles.block_841}>
                  initials of the words "Telecom Italia Mobile".
                </p>
                <p className={styles.block_842}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: ampm </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Officially "ampm" and is pronounced as{' '}
                  </span>
                </p>
                <p className={styles.block_843}>an initialism.</p>
                <p className={styles.block_844}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: eHarmony </span>
                </p>
                <p className={styles.block_845}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ho comprato questo videogioco per la PlayStation.
                  </span>
                </p>
                <p className={styles.block_846}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>: camel case </span>
                </p>
                <p className={styles.block_847}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Burger King </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: BURGER KING </span>
                </p>
                <p className={styles.block_848}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not spell "Burger King" all in upper case as in the
                    stylized form of the logo, stick to the official form as per
                    the privacy policy.
                  </span>
                </p>
                <p className={styles.block_849}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: LEGO </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Lego </span>
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
                <p className={styles.block_852}>
                  Only capitalize the first word of the title of works such as
                  books, movies, TV programs, comics, video games, magazines
                  etc. Keep capitalization on words that would be capitalized in
                  any other case (proper nouns).
                </p>
                <p className={styles.block_853}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : L'uomo che sussurrava ai cavalli{' '}
                  </span>
                </p>
                <p className={styles.block_854}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Bastardi senza gloria </span>
                </p>
                <p className={styles.block_855}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il mondo di Honey Boo Boo{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Giorgia Gocce di memoria{' '}
                  </span>
                </p>
                <p className={styles.block_856}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : L'infinito di Leopardi{' '}
                  </span>
                </p>
                <p className={styles.block_857}>
                  Exception: some very limited media titles might be capitalized
                  differently. Choose the
                </p>
                <p className={styles.block_858}>
                  most natural and common Italian spelling.
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Divina Commedia </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Divina commedia </span>
                </p>
                <p className={styles.block_860}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: I Trionfi </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: I trionfi </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Il Principe </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Il principe </span>
                </p>
                <p className={styles.block_862}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Il fiore delle Mille e una notte{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Il fiore delle mille e una notte{' '}
                  </span>
                </p>
                <p className={styles.block_863}>
                  Articles (or sometimes prepositions) at the beginning of a
                  media title can be incorporated into a preceding preposition,
                  when they are used in a sentence. If this is the case,
                  capitalize the first word following the preposition.
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : I promessi topi è una parodia dei Promessi sposi.
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : "I" in "I promessi sposi" was incorporated into the
                    preposition "di". Do not capitalize "dei".
                  </span>
                </p>
                <p className={styles.block_865}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : la madeleine della Ricerca del tempo perduto di Proust
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : "Alla" in "Alla ricerca del tempo perduto" was
                    incorporated into the preposition "della". Only capitalize
                    "Ricerca".
                  </span>
                </p>
                <p className={styles.block_866}>
                  If the title of a work is in a foreign language, use
                  capitalization on every word except determiners and
                  prepositions (unless these are in initial position).
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : The Curious Case of Benjamin Button{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : First of the Year (Equinox){' '}
                  </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: American Dad! </span>
                </p>
                <p className={styles.block_869}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Bienvenue chez les Ch'tis{' '}
                  </span>
                </p>
                <p className={styles.block_870}>
                  If the title is followed by a subheading, use a period to
                  separate the two parts.
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : I Buddenbrook. Decadenza di una famiglia{' '}
                  </span>
                </p>
                <p className={styles.block_872}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Viaggio della saggezza. Anticlaudianus. Discorso sulla
                    sfera intelligibile
                  </span>
                </p>
                <p className={styles.block_873}>
                  Exception: use a hyphen for movies and TV series, and a colon
                  for video games.
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ace Ventura - Missione Africa{' '}
                  </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Brothers &amp; Sisters - Segreti di famiglia
                  </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : The Elder Scrolls V: Skyrim{' '}
                  </span>
                </p>
                <p className={styles.block_877}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : The Legend of Zelda: A to the Past{' '}
                  </span>
                </p>
                <p className={styles.block_878}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_879}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Skyfall </span>
                </p>
                <p className={styles.block_880}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : immagini di Call of Duty: Black Ops 2{' '}
                  </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Riproduci Diamonds di Rihanna.{' '}
                  </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: la Repubblica </span>
                </p>
                <p className={styles.block_883}>
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
                <p className={styles.block_884}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : In Mi presenti i tuoi? ha recitato Ben Stiller?
                  </span>
                </p>
                <p className={styles.block_885}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Controlla in che anno è uscito Shall We Dance?
                  </span>
                </p>
                <p className={styles.block_886}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Transformers 2 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : for "Transformers: La vendetta del{' '}
                  </span>
                </p>
                <p className={styles.block_888}>caduto"</p>
                <p className={styles.block_889}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Star Wars Episodio III{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : for "Star Wars: Episodio III - La vendetta
                  </span>
                </p>
                <p className={styles.block_890}>del Sith"</p>
                <p className={styles.block_698}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : for "The Fox (What Does the Fox Say?)"{' '}
                  </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: The Next Generation </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : for "Star Trek: The Next Generation"{' '}
                  </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Riproduci Teen Spirit dei Nirvana.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Correct title is "Smells Like Teen Spirit".
                  </span>
                </p>
                <p className={styles.block_893}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Voglio ascoltare Taylor Swift Trouble.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Correct title is "I Knew You Were{' '}
                  </span>
                </p>
                <p className={styles.block_894}>Trouble".</p>
                <p className={styles.block_895}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_896}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : YouTube We are the champions my friends, and we'll keep on
                    fighting till the end.{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : YouTube We Are the Champions my friends, and we'll keep on
                    fighting till the end. I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : YouTube We Are the Champions My Friends And We'll Keep on
                    Fighting till the End.
                  </span>
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : They are quoting lyrics that just happen to contain the
                    title; format as full sentence.
                  </span>
                </p>
                <p className={styles.block_898}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tu chiamale se vuoi emozioni.{' '}
                  </span>
                </p>
                <p className={styles.block_899}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_900}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Y Tu Mamá También </span>
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
                <p className={styles.block_903}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: pasticciere </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: pasticcere </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : "pasticciere" is the first spelling choice in the Treccani
                    dictionary.
                  </span>
                </p>
                <p className={styles.block_905}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: È passato un anno. </span>
                </p>
                <p className={styles.block_907}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Hanno un cane. </span>
                </p>
                <p className={styles.block_908}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_909}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Pseudotsuga menziesii </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: E. coli </span>
                </p>
                <p className={styles.block_911}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Metronidazolo </span>
                </p>
                <p className={styles.block_912}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Amó, chiamami. </span>
                </p>
                <p className={styles.block_914}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Se potrei aiutarti, lo farei.{' '}
                  </span>
                </p>
                <p className={styles.block_915}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_916}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Han fatto tardi. </span>
                </p>
                <p className={styles.block_917}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Hanno fatto tardi. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker clearly said two distinct words.{' '}
                  </span>
                </p>
                <p className={styles.block_918}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_919}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Lucia deve andare a casa.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    lucia dev'andare a casa{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_558}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_920}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Gangnam Style </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>gangdam style </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: aeroplano </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "aeroplano" pronounced in a way that{' '}
                  </span>
                </p>
                <p className={styles.block_922}>sounds like "aereoplano".</p>
                <p className={styles.block_923}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Dov'è la biblioteca più vicina?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    dov'è la bibloteca più vicina [rising{' '}
                  </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_13}>intonation] </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Bruce Springsteen </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>bruce springsting </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: collutorio </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Person said "colluttorio".{' '}
                  </span>
                </p>
                <p className={styles.block_926}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_927}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: redigere </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : even if they meant "redarre".{' '}
                  </span>
                </p>
                <p className={styles.block_928}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: funzia </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : even if they meant "funziona".{' '}
                  </span>
                </p>
                <p className={styles.block_929}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_930}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Kaloli </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : User says "Kaloli". This might sound like
                  </span>
                </p>
                <p className={styles.block_931}>
                  nonsense at first, but the transcriber guesses the spelling
                  "kalolli" and is by corrected Google Search to
                </p>
                <p className={styles.block_932}>
                  "Kaloli", a gasoline tanker and place in Hawaii. Transcribe
                  Kaloli.
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Souk Abdali </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : User says "Souk Abdali". Transcriber{' '}
                  </span>
                </p>
                <p className={styles.block_934}>
                  searches "sukabdali", finds correct results. Transcribe Souk
                  Abdali.
                </p>
                <p className={styles.block_935}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: vapruffo </span>
                </p>
                <p className={styles.block_937}>
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
