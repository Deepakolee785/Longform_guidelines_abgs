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
            <PageContentHeader currentPage="longform Italian" />
            <div className="content text">
              <p class="text_4">Agreed spelling </p>
              <p class="block_743">
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <p class="block_744">Spelling out</p>
              <p class="block_745">
                If a word is spelled or obvious pauses are made between letters,
                spell it into letters as it is said (often done for foreign
                names or businesses, for example). Use lowercase letters for the
                spelled-out portion. This rule does not apply to acronyms or
                initialisms, or to spelled-out web or email addresses.
              </p>
              <p class="block_746">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Coop c o o p </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Person said "coop" and then spelled it.{' '}
                </span>
              </p>
              <p class="block_747">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Come si arriva alla c o o p? </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">come si arriva alla c o o p </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_748">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: parole che terminano in a r e </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">parole che terminano in a r e </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_749">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : a b c d e f g h i l m n o p q r s t u v z{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: spelled out alphabet </span>
              </p>
              <p class="block_750">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: amazon.com </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">amazon punto c o m </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_751">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : In URLs domains, do not insert spaces between the letters.
                </span>
              </p>
              <p class="block_752">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: PDF </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">p d f </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_753">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Do not insert spaces between letters in acronyms.
                </span>
              </p>
              <p class="block_596">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: FIFA </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Pronounced the word "FIFA", or spelled{' '}
                </span>
              </p>
              <p class="block_754">out "f i f a".</p>
              <p class="block_755">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: ASAP </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Pronounced the word "ASAP", or spelled{' '}
                </span>
              </p>
              <p class="block_756">out "a s a p".</p>
              <p class="block_757">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: NCAA </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Speaker says "n c a a". </span>
              </p>
              <p class="block_758">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: AAA </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Speaker says "a a a". </span>
              </p>
              <p class="block_759">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: t-shirt </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">t-shirt </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_760">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: email </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">email </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_761">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: LDAP </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">el-dap </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_762">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: DivX, iPhone, USA, IBM, xkcd </span>
              </p>
              <p class="block_763">
                For uses of single letters, either referring to the letter
                itself or some other meaning associated with it, use capital
                letters (with apostrophes for plurals).
              </p>
              <p class="block_764">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : parole che iniziano con la lettera J{' '}
                </span>
              </p>
              <p class="block_765">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Pronuncia meglio la R. </span>
              </p>
              <p class="block_766">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: In pagella ha tutte A e B. </span>
              </p>
              <p class="block_767">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Quante A ci sono nella parola banana?{' '}
                </span>
              </p>
              <p class="block_768">Interjections</p>
              <p class="block_769">
                Transcribe words representing laughter or other non-speech
                vocalizations with up to three syllables, but no more.
              </p>
              <p class="block_770">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : he, ha, hi, haha, hahaha, hehe, hehehe, hihi, hihihi, lalala
                </span>
              </p>
              <p class="block_771">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: hahaha </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">ha ha ha ha ha </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_772">
                Spell common interjections as demonstrated in the appendix on
                this page. Do not transcribe non-speech vocalizations that are
                not in this list.
              </p>
              <p class="block_773">
                Spellings of common interjections. If on their own, use
                exclamation mark.
              </p>
              <p class="block_774">• ah</p>
              <p class="block_775">• ah ah (beccato!)</p>
              <p class="block_776">• ahi/ahia/ahio/uhi</p>
              <p class="block_777">• ahimé</p>
              <p class="block_778">• ahm</p>
              <p class="block_779">• ahó</p>
              <p class="block_780">• alé</p>
              <p class="block_781">• alè</p>
              <p class="block_782">• alt</p>
              <p class="block_783">• altolà</p>
              <p class="block_784">• azz</p>
              <p class="block_785">• beh</p>
              <p class="block_779">• boh</p>
              <p class="block_786">• brr</p>
              <p class="block_779">• buh</p>
              <p class="block_778">• bum</p>
              <p class="block_779">• deh</p>
              <p class="block_787">• eccì/etcì/ecciù</p>
              <p class="block_782">• eh</p>
              <p class="block_780">• ehi</p>
              <p class="block_788">• ehlà</p>
              <p class="block_789">• ehm</p>
              <p class="block_780">• eja</p>
              <p class="block_790">• embè</p>
              <p class="block_791">• evviva</p>
              <p class="block_792">• gnam gnam</p>
              <p class="block_793">• jà</p>
              <p class="block_794">• macché</p>
              <p class="block_795">• mah</p>
              <p class="block_796">• marsch</p>
              <p class="block_797">• mmm (buono/sono indeciso)</p>
              <p class="block_798">• mo</p>
              <p class="block_790">• muah</p>
              <p class="block_799">• muahaha/buahaha</p>
              <p class="block_779">• neh</p>
              <p class="block_782">• oh</p>
              <p class="block_779">• ohé</p>
              <p class="block_781">• ohi</p>
              <p class="block_800">• ohilà</p>
              <p class="block_801">• ohibò</p>
              <p class="block_780">• olé</p>
              <p class="block_784">• ops</p>
              <p class="block_778">• orsù</p>
              <p class="block_786">• prr</p>
              <p class="block_784">• pss</p>
              <p class="block_617">• shh (silenzio)</p>
              <p class="block_802">• spe'</p>
              <p class="block_803">• toh (sorpresa)</p>
              <p class="block_804">• ts</p>
              <p class="block_782">• ué</p>
              <p class="block_805">• uelà</p>
              <p class="block_782">• uff</p>
              <p class="block_782">• uh</p>
              <p class="block_806">• ups</p>
              <p class="block_807">• urrà</p>
              <p class="block_808">• va be'</p>
              <p class="block_809">• vabbè</p>
              <p class="block_800">• voilà</p>
              <p class="block_778">• wow</p>
              <p class="block_810">• yeah</p>
              <p class="block_783">• yuppi</p>
              <p class="block_811">Proper names</p>
              <p class="block_812">
                Use official spelling, capitalization, and punctuation for
                proper names. Google them and pay attention to the correct
                format. Official format and spelling of a proper name may
                supersede the usual written transcription conventions detailed
                in this document.
              </p>
              <p class="block_813">
                Defer to official spellings of celebrity names.
              </p>
              <p class="block_814">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Gué Pequeno </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Spelled this way in privacy policy.{' '}
                </span>
              </p>
              <p class="block_815">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: will.i.am </span>
              </p>
              <p class="block_816">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: L'aura Abela </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : The celebrity spells her name differently
                </span>
              </p>
              <p class="block_817">from the more common "Laura".</p>
              <p class="block_818">
                If proper names include diacritics uncommon in your language (é,
                ü, ç, etc), include them in your spelling. If unsure, refer to
                news articles, official city or celebrity websites, IMDb,
                Wikipedia, Google Maps, or knowledge cards (the answer box above
                the list of Google Search results) in that order. When no other
                source can be used to decide between spellings, choose the
                spelling used in the first hit(s) on Google.
              </p>
              <p class="block_819">
                If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").
              </p>
              <p class="block_820">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Chiama Sofia. </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Chiama Sophia. </span>
              </p>
              <p class="block_821">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Searching "nome Sophia" (without quotation marks) redirects
                  to search results for "nome Sofia" (more common in Italian).
                </span>
              </p>
              <p class="block_822">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Iurato </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Jurato </span>
              </p>
              <p class="block_823">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Searching "cognome Iurato" yields more search results than
                  "cognome Jurato".
                </span>
              </p>
              <p class="block_824">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Sofia Iurato </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Search full names to see if they refer to
                </span>
              </p>
              <p class="block_825">
                a celebrity. If the full name does not belong to a celebrity,
                use the most common spelling for each part of the name (e.g.
                search "nome Sofia" and "cognome Iurato").
              </p>
              <p class="block_826">
                Spell and capitalize holidays as they are formatted within the
                answer box above the list of Google Search results. If no box
                appears, defer to Wikipedia's formatting, and if there is no
                Wikipedia article, use the most common format according to
                Google Search results.
              </p>
              <p class="block_827">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : A Capodanno festeggiamo a casa di Elena.{' '}
                </span>
              </p>
              <p class="block_828">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Nel 2015 Pasqua si festeggia in aprile.{' '}
                </span>
              </p>
              <p class="block_829">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Felice Yule! </span>
              </p>
              <p class="block_830">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Buon Natale e felice anno nuovo. </span>
              </p>
              <p class="block_831">Brand and product</p>
              <p class="block_832">
                Format proper names as they are most commonly formatted on the
                entity's website (especially official documents), if available,
                or the Wikipedia or IMDb page. In cases of ambiguity, defer to
                their privacy policy. If no other sources, use top Google hits.
              </p>
              <p class="block_833">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Lavora per Amazon. </span>
              </p>
              <p class="block_834">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : FIAT e Chrysler hanno appena raggiunto un accordo.
                </span>
              </p>
              <p class="block_835">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Non mangio spesso da Burger King e Subway.
                </span>
              </p>
              <p class="block_836">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: YouTube </span>
              </p>
              <p class="block_837">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ho comprato questo gioco da Toys "R" Us.{' '}
                </span>
              </p>
              <p class="block_835">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Gira a sinistra dopo il distributore Q8.{' '}
                </span>
              </p>
              <p class="block_838">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: craigslist </span>
              </p>
              <p class="block_839">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: ASUS </span>
              </p>
              <p class="block_840">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: TIM </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Officially "TIM", and it also reflects the
                </span>
              </p>
              <p class="block_841">
                initials of the words "Telecom Italia Mobile".
              </p>
              <p class="block_842">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: ampm </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Officially "ampm" and is pronounced as{' '}
                </span>
              </p>
              <p class="block_843">an initialism.</p>
              <p class="block_844">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: eHarmony </span>
              </p>
              <p class="block_845">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Ho comprato questo videogioco per la PlayStation.
                </span>
              </p>
              <p class="block_846">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">: camel case </span>
              </p>
              <p class="block_847">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Burger King </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: BURGER KING </span>
              </p>
              <p class="block_848">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : Do not spell "Burger King" all in upper case as in the
                  stylized form of the logo, stick to the official form as per
                  the privacy policy.
                </span>
              </p>
              <p class="block_849">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: LEGO </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Lego </span>
              </p>
              <p class="block_850">Media title</p>
              <p class="block_851">
                Refer to the Google Play Store for official spellings of media
                titles. For film/television, IMDb is also available. If an
                utterance is ambiguous between a media title and a sentence or
                web search, use your judgment for which is more likely; if truly
                unclear, default to media title.
              </p>
              <p class="block_852">
                Only capitalize the first word of the title of works such as
                books, movies, TV programs, comics, video games, magazines etc.
                Keep capitalization on words that would be capitalized in any
                other case (proper nouns).
              </p>
              <p class="block_853">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: L'uomo che sussurrava ai cavalli </span>
              </p>
              <p class="block_854">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Bastardi senza gloria </span>
              </p>
              <p class="block_855">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Il mondo di Honey Boo Boo </span>
              </p>
              <p class="block_505">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Giorgia Gocce di memoria </span>
              </p>
              <p class="block_856">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: L'infinito di Leopardi </span>
              </p>
              <p class="block_857">
                Exception: some very limited media titles might be capitalized
                differently. Choose the
              </p>
              <p class="block_858">most natural and common Italian spelling.</p>
              <p class="block_859">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Divina Commedia </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Divina commedia </span>
              </p>
              <p class="block_860">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: I Trionfi </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: I trionfi </span>
              </p>
              <p class="block_861">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Il Principe </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Il principe </span>
              </p>
              <p class="block_862">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Il fiore delle Mille e una notte </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: Il fiore delle mille e una notte </span>
              </p>
              <p class="block_863">
                Articles (or sometimes prepositions) at the beginning of a media
                title can be incorporated into a preceding preposition, when
                they are used in a sentence. If this is the case, capitalize the
                first word following the preposition.
              </p>
              <p class="block_864">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : I promessi topi è una parodia dei Promessi sposi.
                </span>
              </p>
              <p class="block_327">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : "I" in "I promessi sposi" was incorporated into the
                  preposition "di". Do not capitalize "dei".
                </span>
              </p>
              <p class="block_865">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : la madeleine della Ricerca del tempo perduto di Proust
                </span>
              </p>
              <p class="block_421">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : "Alla" in "Alla ricerca del tempo perduto" was incorporated
                  into the preposition "della". Only capitalize "Ricerca".
                </span>
              </p>
              <p class="block_866">
                If the title of a work is in a foreign language, use
                capitalization on every word except determiners and prepositions
                (unless these are in initial position).
              </p>
              <p class="block_867">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : The Curious Case of Benjamin Button{' '}
                </span>
              </p>
              <p class="block_505">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: First of the Year (Equinox) </span>
              </p>
              <p class="block_868">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: American Dad! </span>
              </p>
              <p class="block_869">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Bienvenue chez les Ch'tis </span>
              </p>
              <p class="block_870">
                If the title is followed by a subheading, use a period to
                separate the two parts.
              </p>
              <p class="block_871">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : I Buddenbrook. Decadenza di una famiglia{' '}
                </span>
              </p>
              <p class="block_872">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Viaggio della saggezza. Anticlaudianus. Discorso sulla sfera
                  intelligibile
                </span>
              </p>
              <p class="block_873">
                Exception: use a hyphen for movies and TV series, and a colon
                for video games.
              </p>
              <p class="block_874">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Ace Ventura - Missione Africa </span>
              </p>
              <p class="block_875">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Brothers &amp; Sisters - Segreti di famiglia
                </span>
              </p>
              <p class="block_876">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: The Elder Scrolls V: Skyrim </span>
              </p>
              <p class="block_877">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: The Legend of Zelda: A to the Past </span>
              </p>
              <p class="block_878">
                Do not use quotation marks for media titles.
              </p>
              <p class="block_879">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Skyfall </span>
              </p>
              <p class="block_880">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : immagini di Call of Duty: Black Ops 2{' '}
                </span>
              </p>
              <p class="block_881">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Riproduci Diamonds di Rihanna. </span>
              </p>
              <p class="block_882">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: la Repubblica </span>
              </p>
              <p class="block_883">
                Transcribe all media titles with original punctuation. In cases
                where original punctuation falls at the end of a sentence, do
                not transcribe sentence-level punctuation. That is, media title
                punctuation trumps sentence level punctuation when in conflict.
                If a popular media title consists of an entire sentence but the
                official spelling is without punctuation, then don't punctuate
                the title. If an utterance is ambiguous between a media title
                and a sentence or web search, use your judgment for which is
                more likely and treat it accordingly.
              </p>
              <p class="block_884">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : In Mi presenti i tuoi? ha recitato Ben Stiller?
                </span>
              </p>
              <p class="block_885">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">
                  : Controlla in che anno è uscito Shall We Dance?
                </span>
              </p>
              <p class="block_886">
                Very common alternate or shortened versions of titles should
                also be capitalized.
              </p>
              <p class="block_887">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Transformers 2 </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : for "Transformers: La vendetta del{' '}
                </span>
              </p>
              <p class="block_888">caduto"</p>
              <p class="block_889">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Star Wars Episodio III </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : for "Star Wars: Episodio III - La vendetta
                </span>
              </p>
              <p class="block_890">del Sith"</p>
              <p class="block_698">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: What Does the Fox Say? </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : for "The Fox (What Does the Fox Say?)"{' '}
                </span>
              </p>
              <p class="block_891">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: The Next Generation </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : for "Star Trek: The Next Generation"{' '}
                </span>
              </p>
              <p class="block_892">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Riproduci Teen Spirit dei Nirvana.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Correct title is "Smells Like Teen Spirit".
                </span>
              </p>
              <p class="block_893">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : Voglio ascoltare Taylor Swift Trouble.{' '}
                </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Correct title is "I Knew You Were </span>
              </p>
              <p class="block_894">Trouble".</p>
              <p class="block_895">
                Do not capitalize a media title that happens to occur within
                quoted lyrics. Format lyrics that form a sentence as you would a
                normal sentence.
              </p>
              <p class="block_896">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">
                  : YouTube We are the champions my friends, and we'll keep on
                  fighting till the end.{' '}
                </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : YouTube We Are the Champions my friends, and we'll keep on
                  fighting till the end. I
                </span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">
                  : YouTube We Are the Champions My Friends And We'll Keep on
                  Fighting till the End.
                </span>
              </p>
              <p class="block_897">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : They are quoting lyrics that just happen to contain the
                  title; format as full sentence.
                </span>
              </p>
              <p class="block_898">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Tu chiamale se vuoi emozioni. </span>
              </p>
              <p class="block_899">
                Treat foreign titles the same way as titles in the transcription
                language if you understand them.
              </p>
              <p class="block_900">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Y Tu Mamá También </span>
              </p>
              <p class="block_901">Multiple spellings</p>
              <p class="block_902">
                When multiple spellings are attested, use the first spelling
                used in the reference dictionary for your language. If there is
                no entry, Google the word and use the form with the most hits.
              </p>
              <p class="block_903">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: pasticciere </span>
                <span class="text_7">I</span>
                <span class="text_8">NCORRECT</span>
                <span class="text_7">: pasticcere </span>
              </p>
              <p class="block_904">
                <span class="text_">E</span>
                <span class="text_9">XPLANATION</span>
                <span class="text_">
                  : "pasticciere" is the first spelling choice in the Treccani
                  dictionary.
                </span>
              </p>
              <p class="block_905">
                Guess the most likely spelling given the context. When context
                is insufficient, rely on Google hits.
              </p>
              <p class="block_906">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: È passato un anno. </span>
              </p>
              <p class="block_907">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Hanno un cane. </span>
              </p>
              <p class="block_908">
                Use official spelling and capitalization for technical terms.
                Google them and pay attention to the correct format.
              </p>
              <p class="block_909">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Pseudotsuga menziesii </span>
              </p>
              <p class="block_910">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: E. coli </span>
              </p>
              <p class="block_911">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Metronidazolo </span>
              </p>
              <p class="block_912">
                Transcribe slang and colloquialisms as spoken according to the
                appendix on this page. Do not alter non-standard speech that the
                speaker probably wouldn't want corrected.
              </p>
              <p class="block_913">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Amó, chiamami. </span>
              </p>
              <p class="block_914">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Se potrei aiutarti, lo farei. </span>
              </p>
              <p class="block_915">
                Write commonly accepted contractions as usual. Transcribe
                contractions when you hear them spoken.
              </p>
              <p class="block_916">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: Han fatto tardi. </span>
              </p>
              <p class="block_917">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Hanno fatto tardi. </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : Speaker clearly said two distinct words.{' '}
                </span>
              </p>
              <p class="block_918">
                Contractions that are not commonly accepted should be
                transcribed as full words.
              </p>
              <p class="block_919">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Lucia deve andare a casa. </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">lucia dev'andare a casa </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_558">
                If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech error, speech impairment, etc), transcribe the
                intended word.
              </p>
              <p class="block_920">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Gangnam Style </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">gangdam style </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_921">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: aeroplano </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : "aeroplano" pronounced in a way that{' '}
                </span>
              </p>
              <p class="block_922">sounds like "aereoplano".</p>
              <p class="block_923">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Dov'è la biblioteca più vicina? </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">
                  dov'è la bibloteca più vicina [rising{' '}
                </span>
              </p>
              <p class="block_924">
                <span class="text_13">intonation] </span>
                <span class="text_14">" </span>
              </p>
              <p class="block_925">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Bruce Springsteen </span>
                <span class="text_10">E</span>
                <span class="text_11">XAMPLE AUDIO</span>
                <span class="text_10">: " </span>
                <span class="text_12">bruce springsting </span>
                <span class="text_10">" </span>
              </p>
              <p class="block_702">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: collutorio </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: Person said "colluttorio". </span>
              </p>
              <p class="block_926">
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.
              </p>
              <p class="block_927">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: redigere </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: even if they meant "redarre". </span>
              </p>
              <p class="block_928">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: funzia </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">: even if they meant "funziona". </span>
              </p>
              <p class="block_929">
                If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, first perform a
                Google search for the word. If there is a clear candidate,
                transcribe that word.
              </p>
              <p class="block_930">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Kaloli </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : User says "Kaloli". This might sound like
                </span>
              </p>
              <p class="block_931">
                nonsense at first, but the transcriber guesses the spelling
                "kalolli" and is by corrected Google Search to
              </p>
              <p class="block_932">
                "Kaloli", a gasoline tanker and place in Hawaii. Transcribe
                Kaloli.
              </p>
              <p class="block_933">
                <span class="text_5">C</span>
                <span class="text_6">ORRECT</span>
                <span class="text_5">: Souk Abdali </span>
                <span class="text_7">E</span>
                <span class="text_8">XPLANATION</span>
                <span class="text_7">
                  : User says "Souk Abdali". Transcriber{' '}
                </span>
              </p>
              <p class="block_934">
                searches "sukabdali", finds correct results. Transcribe Souk
                Abdali.
              </p>
              <p class="block_935">
                If a word appears to be nonsense and a Google search returns no
                clear results but it is easy to spell and articulated clearly,
                transcribe it anyway.
              </p>
              <p class="block_936">
                <span class="text_">C</span>
                <span class="text_9">ORRECT</span>
                <span class="text_">: vapruffo </span>
              </p>
              <p class="block_937">
                Transcribe onomatopoeia when clearly spoken. Otherwise, use the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.
              </p>
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
