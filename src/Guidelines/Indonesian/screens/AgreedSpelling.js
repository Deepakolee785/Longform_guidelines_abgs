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
            <PageContentHeader currentPage="Longform Indonesian" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={styles.block_16}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_621}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_622}>Correct: Raisa r a i s a</p>
                <p className={styles.block_450}>
                  Explanation: Person said "raisa" and then spelled it.
                </p>
                <p className={styles.block_199}>
                  Correct: Bagaimana caranya ke m e n t e n g?
                </p>
                <p className={styles.block_623}>
                  Example audio: " bagaimana caranya ke m e n t e n g "
                </p>
                <p className={styles.block_365}>
                  Correct: kata-kata yang berakhiran in i n g
                </p>
                <p className={styles.block_36}>
                  Example audio: " kata-kata yang berakhiran in i n g "
                </p>
                <p className={styles.block_505}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x y z
                </p>
                <p className={styles.block_314}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_312}>Correct: amazon.co.uk</p>
                <p className={styles.block_624}>
                  Example audio: " amazon dot c o dot u k "
                </p>
                <p className={styles.block_536}>Correct: PT</p>
                <p className={styles.block_625}>Example audio: " p t "</p>
                <p className={styles.block_392}>
                  Correct: Pembangunan negara mengandalkan APBN.
                </p>
                <p className={styles.block_314}>
                  Explanation: spelled out "a p b n"
                </p>
                <p className={styles.block_259}>Correct: MURI</p>
                <p className={styles.block_626}>
                  Explanation: Pronounced the word "MURI", or spelled out "m u r
                  i".
                </p>
                <p className={styles.block_516}>Correct: ASI</p>
                <p className={styles.block_627}>
                  Explanation: Pronounced the word "ASI", or spelled out "a s
                  i".
                </p>
                <p className={styles.block_628}>Correct: BBM</p>
                <p className={styles.block_289}>
                  Explanation: Speaker says "b b m", or "dobel b m".
                </p>
                <p className={styles.block_565}>Correct: AAA</p>
                <p className={styles.block_122}>
                  Explanation: Speaker says "a a a", or "a tiga kali".
                </p>
                <p className={styles.block_91}>Correct: D'masiv</p>
                <p className={styles.block_629}>Example audio: " d'masiv "</p>
                <p className={styles.block_630}>Correct: tsb</p>
                <p className={styles.block_631}>Example audio: " t s b "</p>
                <p className={styles.block_632}>Example audio: " tersebut "</p>
                <p className={styles.block_633}>Correct: M.Hum</p>
                <p className={styles.block_55}>Example audio: " m hum "</p>
                <p className={styles.block_565}>Correct: MP3</p>
                <p className={styles.block_634}>
                  Explanation: Speaker says "m p tiga", or "m p three" (in
                  English pron).
                </p>
                <p className={styles.block_635}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_365}>
                  Correct: kata yang dimulai dengan huruf S
                </p>
                <p className={styles.block_497}>
                  Correct: Dia bergolongan darah B.
                </p>
                <p className={styles.block_636}>
                  Correct: Dia mendapat nilai A dan B.
                </p>
                <p className={styles.block_637}>
                  Correct: Berapa banyak kata yang dimulai dengan huruf D yang
                  kamu temukan?
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_639}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_640}>
                  Correct: heh, ha, haha, hahaha, hehe, hehehe, ho ho, ho ho ho,
                  lalala
                </p>
                <p className={styles.block_434}>Correct: hahaha</p>
                <p className={styles.block_497}>
                  Example audio: " ha ha ha ha ha "
                </p>
                <p className={styles.block_641}>
                  Spellings of common interjections
                </p>
                <p className={styles.block_359}>
                  aduh (as in "Aduh, kacamataku di mana ya?")
                </p>
                <p className={styles.block_207}>ah (as in "Ah, saya lupa.")</p>
                <p className={styles.block_642}>aha</p>
                <p className={styles.block_643}>astaga</p>
                <p className={styles.block_457}>astagfirullah</p>
                <p className={styles.block_644}>bah</p>
                <p className={styles.block_148}>
                  duh (as a short version of "aduh")
                </p>
                <p className={styles.block_160}>halah</p>
                <p className={styles.block_644}>hah</p>
                <p className={styles.block_645}>hayo</p>
                <p className={styles.block_646}>hei</p>
                <p className={styles.block_192}>hore</p>
                <p className={styles.block_644}>huh</p>
                <p className={styles.block_109}>heeh (meaning "yes")</p>
                <p className={styles.block_642}>idih</p>
                <p className={styles.block_647}>
                  <span className={styles.text_2}>ih</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>lah </sub>
                  </span>
                </p>
                <p className={styles.block_648}>lha</p>
                <p className={styles.block_649}>lho</p>
                <p className={styles.block_650}>
                  <span className={styles.text_2}>loh</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>mmm </sub>
                  </span>
                </p>
                <p className={styles.block_651}>masyaallah</p>
                <p className={styles.block_119}>OOo</p>
                <p className={styles.block_652}>
                  <span className={styles.text_2}>oh</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>ssst </sub>
                  </span>
                </p>
                <p className={styles.block_643}>waduh</p>
                <p className={styles.block_653}>walah</p>
                <p className={styles.block_654}>wah</p>
                <p className={styles.block_192}>waw</p>
                <p className={styles.block_655}>wedew</p>
                <p className={styles.block_653}>weleh</p>
                <p className={styles.block_656}>widih</p>
                <p className={styles.block_519}>woi</p>
                <p className={styles.block_657}>wow</p>
                <p className={styles.block_658}>wuih</p>
                <p className={styles.block_519}>wih</p>
                <p className={styles.block_642}>yah</p>
                <p className={styles.block_26}>Proper names</p>
                <p className={styles.block_659}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_660}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_661}>Correct: /rif</p>
                <p className={styles.block_559}>
                  Explanation: Spelled this way in privacy policy.
                </p>
                <p className={styles.block_41}>Correct: Dewa 19</p>
                <p className={styles.block_662}>Correct: Ressa Herlambang</p>
                <p className={styles.block_552}>
                  Explanation: The celebrity spells his name differently than
                  the more common "Reza".
                </p>
                <p className={styles.block_663}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling. If unsure,
                  refer to news articles, official city or celebrity websites,
                  IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                  box above the list of Google Search results) in that order.
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_664}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_395}>Correct: Telepon Sophia.</p>
                <p className={styles.block_209}>Incorrect: Telepon Sofia.</p>
                <p className={styles.block_665}>
                  Explanation: Searching "Sophia nama" (without quotation marks)
                  yields more results than "Sofia nama", even though searching
                  "Sofia" yields more results than "Sophia" because Sofia is the
                  capital of Bulgaria.
                </p>
                <p className={styles.block_110}>Correct: Afgan</p>
                <p className={styles.block_495}>Incorrect: Afghan</p>
                <p className={styles.block_175}>
                  Explanation: Searching "nama Afgan" yields more search results
                  than "nama Afghan". Note that this example refers to the
                  surname, not the restaurant chain.
                </p>
                <p className={styles.block_608}>Correct: Reza Ahmadi</p>
                <p className={styles.block_10}>
                  Explanation: Search full names to see if they refer to a
                  celebrity. If the full name does not belong to a celebrity,
                  use the most common spelling for each part of the name (e.g.
                  search "Reza nama" and "Ahmadi nama").
                </p>
                <p className={styles.block_666}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google Search results. If no box
                  appears, defer to Wikipedia's formatting, and if there is no
                  Wikipedia article, use the most common format according to
                  Google Search results.
                </p>
                <p className={styles.block_106}>
                  Correct: Pada saat Natal besok, saya akan mengambil cuti.
                </p>
                <p className={styles.block_75}>
                  Correct: Kapan Idulfitri tahun ini?
                </p>
                <p className={styles.block_97}>Correct: Selamat Galungan!</p>
                <p className={styles.block_214}>
                  Correct: Selamat Natal dan Tahun Baru.
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_394}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_148}>
                  Correct: Dia bekerja pada Kaskus.
                </p>
                <p className={styles.block_667}>
                  Correct: Saya mendengar Samsung dan T-Mobile telah
                  menandatangani kerja sama.
                </p>
                <p className={styles.block_636}>
                  Correct: Kami pergi ke kantor Yahoo.
                </p>
                <p className={styles.block_91}>Correct: YouTube</p>
                <p className={styles.block_371}>
                  Correct: Kami membeli kulkas di TokoBagus.
                </p>
                <p className={styles.block_303}>
                  Correct: Belok kanan di depan Kompas.
                </p>
                <p className={styles.block_345}>Correct: craigslist</p>
                <p className={styles.block_140}>Correct: ASUS</p>
                <p className={styles.block_434}>Correct: AAMCO</p>
                <p className={styles.block_668}>
                  Explanation: Officially "AAMCO".
                </p>
                <p className={styles.block_669}>Correct: ampm</p>
                <p className={styles.block_670}>
                  Explanation: Officially "ampm" and is pronounced as an
                  initialism.
                </p>
                <p className={styles.block_434}>Correct: iPad Air</p>
                <p className={styles.block_80}>
                  Correct: Kami membelinya dari Tokopedia.
                </p>
                <p className={styles.block_58}>Correct: Burger King</p>
                <p className={styles.block_671}>Incorrect: BURGER KING</p>
                <p className={styles.block_672}>
                  Explanation: Do not spell "Burger King" all in upper case as
                  in the stylized form of the logo, stick to the official form
                  as per the privacy policy.
                </p>
                <p className={styles.block_393}>Correct: LEGO</p>
                <p className={styles.block_567}>Incorrect: Lego</p>
                <p className={styles.block_673}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_353}>Correct: Ok Google</p>
                <p className={styles.block_209}>Correct: Ok Google Now</p>
                <p className={styles.block_223}>
                  Correct: Ok Google, di mana Stasiun Gambir?
                </p>
                <p className={styles.block_167}>Correct: Ok Google, rambutan</p>
                <p className={styles.block_628}>Correct: Oke.</p>
                <p className={styles.block_437}>Correct: Oke, Rudi.</p>
                <p className={styles.block_674}>
                  Correct: Oke Leni, ayo kita pergi.
                </p>
                <p className={styles.block_675}>
                  Spellings of common Brand and Product names.
                </p>
                <p className={styles.block_192}>Acer</p>
                <p className={styles.block_644}>Alfa</p>
                <p className={styles.block_56}>Alfamart</p>
                <p className={styles.block_28}>Amanda Brownies Kukus</p>
                <p className={styles.block_545}>Andalan</p>
                <p className={styles.block_11}>Android</p>
                <p className={styles.block_630}>Angry Birds</p>
                <p className={styles.block_543}>Antangin</p>
                <p className={styles.block_676}>Apple</p>
                <p className={styles.block_677}>ASICS</p>
                <p className={styles.block_160}>ASUS</p>
                <p className={styles.block_678}>Aqua</p>
                <p className={styles.block_189}>Assassin's Creed III</p>
                <p className={styles.block_679}>AssaultCube</p>
                <p className={styles.block_676}>ATEJA</p>
                <p className={styles.block_654}>Axis</p>
                <p className={styles.block_525}>Bank BJB</p>
                <p className={styles.block_529}>Bank Central Asia</p>
                <p className={styles.block_355}>Bank CIMB Niaga</p>
                <p className={styles.block_537}>Bank Danamon</p>
                <p className={styles.block_291}>Bank ICBC Indonesia</p>
                <p className={styles.block_628}>Bank Mandiri</p>
                <p className={styles.block_680}>Bank Maybank Indonesia</p>
                <p className={styles.block_681}>Bank Negara Indonesia</p>
                <p className={styles.block_682}>Bank OCBC NISP</p>
                <p className={styles.block_140}>Bank Permata</p>
                <p className={styles.block_182}>Bank Rakyat Indonesia</p>
                <p className={styles.block_654}>BCA</p>
                <p className={styles.block_539}>Beng Beng</p>
                <p className={styles.block_56}>Benkwat</p>
                <p className={styles.block_393}>Bhinneka.com</p>
                <p className={styles.block_76}>Blu-ray</p>
                <p className={styles.block_393}>Blitzmegaplex</p>
                <p className={styles.block_519}>BNI</p>
                <p className={styles.block_683}>BRI</p>
                <p className={styles.block_684}>Broco</p>
                <p className={styles.block_521}>Brother</p>
                <p className={styles.block_56}>Buccheri</p>
                <p className={styles.block_685}>Budweiser</p>
                <p className={styles.block_678}>BMW</p>
                <p className={styles.block_678}>Byon</p>
                <p className={styles.block_686}>C16</p>
                <p className={styles.block_545}>Caplang</p>
                <p className={styles.block_687}>Casablanca</p>
                <p className={styles.block_644}>CAT</p>
                <p className={styles.block_37}>Caterpillar</p>
                <p className={styles.block_11}>Chrome</p>
                <p className={styles.block_655}>Citizen</p>
                <p className={styles.block_688}>Clio III</p>
                <p className={styles.block_687}>CIMB Niaga</p>
                <p className={styles.block_689}>Cinemaxx</p>
                <p className={styles.block_539}>Cinema 21</p>
                <p className={styles.block_528}>Coca-Cola</p>
                <p className={styles.block_620}>Dailymotion</p>
                <p className={styles.block_681}>Daihatsu All New Xenia</p>
                <p className={styles.block_26}>Daihatsu Ayla</p>
                <p className={styles.block_355}>Datsun Go Panca</p>
                <p className={styles.block_418}>Datsun Go + Panca</p>
                <p className={styles.block_56}>DENPOO</p>
                <p className={styles.block_528}>detik.com</p>
                <p className={styles.block_633}>Disney Channel</p>
                <p className={styles.block_690}>Dolce&amp;Gabbana</p>
                <p className={styles.block_676}>Dowa</p>
                <p className={styles.block_678}>eBay</p>
                <p className={styles.block_540}>ebooking</p>
                <p className={styles.block_140}>Edward Forrer</p>
                <p className={styles.block_678}>Eiger</p>
                <p className={styles.block_521}>ELTEHA</p>
                <p className={styles.block_691}>Energen</p>
                <p className={styles.block_645}>Equil</p>
                <p className={styles.block_545}>Essenza</p>
                <p className={styles.block_692}>
                  <span className={styles.text_2}>EX</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>Excelso </sub>
                  </span>
                </p>
                <p className={styles.block_526}>Exsport</p>
                <p className={styles.block_542}>Facebook</p>
                <p className={styles.block_160}>Fanta</p>
                <p className={styles.block_693}>FIFA</p>
                <p className={styles.block_694}>Firstmedia</p>
                <p className={styles.block_542}>flash disk</p>
                <p className={styles.block_695}>Flightradar24</p>
                <p className={styles.block_696}>
                  <span className={styles.text_2}>FX</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>Galaxy Note 2 </sub>
                  </span>
                </p>
                <p className={styles.block_628}>Galaxy Trend</p>
                <p className={styles.block_694}>Game Boy</p>
                <p className={styles.block_345}>Garuda Indonesia</p>
                <p className={styles.block_697}>Gmail</p>
                <p className={styles.block_628}>Google Earth</p>
                <p className={styles.block_698}>Google Images</p>
                <p className={styles.block_565}>Google Maps</p>
                <p className={styles.block_620}>Google Now</p>
                <p className={styles.block_535}>Google Play</p>
                <p className={styles.block_91}>Google Translate</p>
                <p className={styles.block_56}>Google+</p>
                <p className={styles.block_543}>GO Sport</p>
                <p className={styles.block_699}>GTA IV</p>
                <p className={styles.block_653}>GTA V</p>
                <p className={styles.block_56}>Hammer</p>
                <p className={styles.block_645}>H&amp;M</p>
                <p className={styles.block_700}>Holycow!</p>
                <p className={styles.block_536}>Honda Brio</p>
                <p className={styles.block_620}>Honda Civic</p>
                <p className={styles.block_132}>Honda Freed</p>
                <p className={styles.block_701}>Honda Jazz</p>
                <p className={styles.block_393}>Honda Mobilio</p>
                <p className={styles.block_702}>Honda Vario Techno 125</p>
                <p className={styles.block_11}>Hotmail</p>
                <p className={styles.block_687}>Hot Wheels</p>
                <p className={styles.block_521}>Huawei</p>
                <p className={styles.block_37}>Hugo Boss</p>
                <p className={styles.block_703}>Hyundai Avega</p>
                <p className={styles.block_291}>Hyundai New Tucson</p>
                <p className={styles.block_642}>IBM</p>
                <p className={styles.block_192}>IKEA</p>
                <p className={styles.block_704}>Indomaret</p>
                <p className={styles.block_114}>Indomie</p>
                <p className={styles.block_521}>Indosat</p>
                <p className={styles.block_424}>Indosiar</p>
                <p className={styles.block_164}>Indovision</p>
                <p className={styles.block_656}>iOS 9</p>
                <p className={styles.block_654}>iPad</p>
                <p className={styles.block_643}>iPhone</p>
                <p className={styles.block_705}>iPhone 5s</p>
                <p className={styles.block_56}>iPhone 6</p>
                <p className={styles.block_654}>iPod</p>
                <p className={styles.block_37}>iPod touch</p>
                <p className={styles.block_654}>J.CO</p>
                <p className={styles.block_94}>J.CO Donuts and Coffee</p>
                <p className={styles.block_653}>K-Way</p>
                <p className={styles.block_706}>Kartikasari</p>
                <p className={styles.block_699}>Kasogi</p>
                <p className={styles.block_56}>Kedaung</p>
                <p className={styles.block_434}>KIA New Picanto</p>
                <p className={styles.block_103}>KIA New Sportage</p>
                <p className={styles.block_114}>Kompas</p>
                <p className={styles.block_653}>Kenzo</p>
                <p className={styles.block_76}>Lazada</p>
                <p className={styles.block_707}>Le Monde</p>
                <p className={styles.block_519}>Lea</p>
                <p className={styles.block_160}>LEGO</p>
                <p className={styles.block_708}>LEGO Friends</p>
                <p className={styles.block_695}>LEGO Technic</p>
                <p className={styles.block_524}>Lenovo</p>
                <p className={styles.block_557}>Lenovo Yoga 3</p>
                <p className={styles.block_709}>Lenovo Yoga 3 Pro</p>
                <p className={styles.block_710}>
                  <span className={styles.text_2}>LG</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>LINE </sub>
                  </span>
                </p>
                <p className={styles.block_119}>edIn</p>
                <p className={styles.block_643}>Magno</p>
                <p className={styles.block_691}>Maspion</p>
                <p className={styles.block_691}>Mazda 6</p>
                <p className={styles.block_687}>McDonald's</p>
                <p className={styles.block_532}>Media Indonesia</p>
                <p className={styles.block_694}>Mie Sedap</p>
                <p className={styles.block_537}>Mercedes-Benz</p>
                <p className={styles.block_711}>Microsoft</p>
                <p className={styles.block_542}>Minecraft</p>
                <p className={styles.block_712}>MINI Cooper</p>
                <p className={styles.block_11}>MotoGP</p>
                <p className={styles.block_56}>Motorola</p>
                <p className={styles.block_202}>Mutiara Bank</p>
                <p className={styles.block_525}>MySpace</p>
                <p className={styles.block_56}>NAF NAF</p>
                <p className={styles.block_46}>National Geographic</p>
                <p className={styles.block_655}>Nexian</p>
                <p className={styles.block_164}>Nexmedia</p>
                <p className={styles.block_713}>Nescafe</p>
                <p className={styles.block_76}>Nestea</p>
                <p className={styles.block_714}>Nestlé</p>
                <p className={styles.block_715}>Nilou</p>
                <p className={styles.block_709}>Nintendo 3DS Lite</p>
                <p className={styles.block_434}>Nintendo DSi XL</p>
                <p className={styles.block_202}>Nissan March</p>
                <p className={styles.block_676}>Nokia</p>
                <p className={styles.block_56}>Ok Glass</p>
                <p className={styles.block_694}>Ok Google</p>
                <p className={styles.block_686}>OLX</p>
                <p className={styles.block_545}>Olympic</p>
                <p className={styles.block_524}>Omega</p>
                <p className={styles.block_536}>OpenOffice</p>
                <p className={styles.block_703}>OpenOffice.org</p>
                <p className={styles.block_716}>Oppo</p>
                <p className={styles.block_140}>Optik Kasoem</p>
                <p className={styles.block_543}>Pasaraya</p>
                <p className={styles.block_697}>Paseo</p>
                <p className={styles.block_699}>PayPal</p>
                <p className={styles.block_545}>Peugeot</p>
                <p className={styles.block_699}>Philips</p>
                <p className={styles.block_37}>Photoshop</p>
                <p className={styles.block_528}>Play Store</p>
                <p className={styles.block_705}>Playmobil</p>
                <p className={styles.block_628}>PlayStation 3</p>
                <p className={styles.block_717}>Pokémon</p>
                <p className={styles.block_11}>Polygon</p>
                <p className={styles.block_545}>Polytron</p>
                <p className={styles.block_718}>PS Vita</p>
                <p className={styles.block_644}>PS3</p>
                <p className={styles.block_644}>PS4</p>
                <p className={styles.block_644}>PS5</p>
                <p className={styles.block_676}>Quick</p>
                <p className={styles.block_538}>QWERTY</p>
                <p className={styles.block_679}>Radic Guitar</p>
                <p className={styles.block_434}>Rakyat Merdeka</p>
                <p className={styles.block_643}>RaLinu</p>
                <p className={styles.block_192}>RCTI</p>
                <p className={styles.block_532}>Reader/'s Digest</p>
                <p className={styles.block_545}>Red Bull</p>
                <p className={styles.block_719}>RedTube</p>
                <p className={styles.block_521}>Reebok</p>
                <p className={styles.block_705}>Republika</p>
                <p className={styles.block_714}>Rodeo</p>
                <p className={styles.block_160}>Rolex</p>
                <p className={styles.block_687}>Rolls-Royce</p>
                <p className={styles.block_521}>Rubson</p>
                <p className={styles.block_707}>Sabbatha</p>
                <p className={styles.block_457}>Samsung 4K</p>
                <p className={styles.block_567}>Samsung Apps</p>
                <p className={styles.block_720}>Samsung Galaxy Ace 2</p>
                <p className={styles.block_721}>Samsung Galaxy Note II</p>
                <p className={styles.block_702}>Samsung Galaxy Note 3</p>
                <p className={styles.block_294}>Samsung Galaxy S III</p>
                <p className={styles.block_722}>Samsung Galaxy S4</p>
                <p className={styles.block_285}>Samsung Galaxy S4 Free</p>
                <p className={styles.block_537}>Samsung Tab 3</p>
                <p className={styles.block_526}>Sarinah</p>
                <p className={styles.block_656}>SCTV</p>
                <p className={styles.block_697}>Sharp</p>
                <p className={styles.block_712}>Sido Muncul</p>
                <p className={styles.block_565}>Silver Queen</p>
                <p className={styles.block_140}>Sony Ericsson</p>
                <p className={styles.block_620}>Sony Xperia</p>
                <p className={styles.block_26}>Sophie Martin</p>
                <p className={styles.block_644}>SPC</p>
                <p className={styles.block_723}>Specs</p>
                <p className={styles.block_703}>Suara Merdeka</p>
                <p className={styles.block_524}>Swatch</p>
                <p className={styles.block_515}>TAG Heuer</p>
                <p className={styles.block_699}>Tempo</p>
                <p className={styles.block_679}>Terry Palmer</p>
                <p className={styles.block_656}>Tetris</p>
                <p className={styles.block_393}>The Executive</p>
                <p className={styles.block_114}>The Sak</p>
                <p className={styles.block_642}>TIKI</p>
                <p className={styles.block_697}>Tissot</p>
                <p className={styles.block_724}>Tokobagus</p>
                <p className={styles.block_545}>Tomkins</p>
                <p className={styles.block_712}>Toyota Agya</p>
                <p className={styles.block_725}>Toyota All New Avanza Veloz</p>
                <p className={styles.block_103}>Toyota Etios Valco</p>
                <p className={styles.block_325}>Toyota New Kijang Innova</p>
                <p className={styles.block_355}>Toyota New Rush</p>
                <p className={styles.block_538}>Trakindo</p>
                <p className={styles.block_146}>Transmart Carrefour</p>
                <p className={styles.block_154}>Tri</p>
                <p className={styles.block_653}>Tube8</p>
                <p className={styles.block_630}>Tupperware</p>
                <p className={styles.block_643}>Twitter</p>
                <p className={styles.block_76}>Ubisoft</p>
                <p className={styles.block_686}>UPS</p>
                <p className={styles.block_726}>Vesperine</p>
                <p className={styles.block_517}>ViaMichelin</p>
                <p className={styles.block_516}>Volkswagen</p>
                <p className={styles.block_565}>Warner Bros.</p>
                <p className={styles.block_26}>webchoc.com</p>
                <p className={styles.block_164}>WhatsApp</p>
                <p className={styles.block_714}>Wibbo</p>
                <p className={styles.block_658}>Wi-Fi</p>
                <p className={styles.block_705}>Wikipédia</p>
                <p className={styles.block_537}>WordReference</p>
                <p className={styles.block_41}>World of Warcraft</p>
                <p className={styles.block_520}>Xbox</p>
                <p className={styles.block_705}>xHamster</p>
                <p className={styles.block_655}>Xiaomi</p>
                <p className={styles.block_727}>XL Axiata</p>
                <p className={styles.block_676}>XNXX</p>
                <p className={styles.block_114}>XVideos</p>
                <p className={styles.block_32}>Yamaha New Vixion</p>
                <p className={styles.block_393}>Yamaha Music</p>
                <p className={styles.block_697}>Yahoo</p>
                <p className={styles.block_11}>YouPorn</p>
                <p className={styles.block_545}>YouTube</p>
                <p className={styles.block_699}>YouZik</p>
                <p className={styles.block_699}>Zalora</p>
                <p className={styles.block_658}>Zara</p>
                <p className={styles.block_699}>Zénith</p>
                <p className={styles.block_522}>Zyrex</p>
                <p className={styles.block_532}>Zombie Tsunami</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_728}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_729}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_730}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_731}>
                  Correct: Pendekar Tongkat Emas
                </p>
                <p className={styles.block_280}>
                  Correct: cuplikan film 30 Hari Mencari Cinta
                </p>
                <p className={styles.block_167}>
                  Correct: Putar LDR oleh Raisa.
                </p>
                <p className={styles.block_732}>Correct: Media Indonesia</p>
                <p className={styles.block_733}>
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
                <p className={styles.block_734}>
                  Correct: Ada Apa dengan Cinta? pertama kali dirilis pada tahun
                  2002.
                </p>
                <p className={styles.block_735}>
                  Correct: Siapa yang bermain dalam film Cin(T)a?
                </p>
                <p className={styles.block_736}>
                  Correct: Film yang dibintangi oleh Marsha Timothy itu adalah
                  Oh Tidak..!
                </p>
                <p className={styles.block_352}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_631}>Correct: Transformers 2</p>
                <p className={styles.block_284}>
                  Explanation: for "Transformers: Revenge of the Fallen"
                </p>
                <p className={styles.block_737}>
                  Correct: Star Wars Episode III
                </p>
                <p className={styles.block_738}>
                  Explanation: for "Star Wars Episode III: Revenge of the Sith"
                </p>
                <p className={styles.block_441}>
                  Correct: What Does the Fox Say?
                </p>
                <p className={styles.block_505}>
                  Explanation: for "The Fox (What Does the Fox Say?)"
                </p>
                <p className={styles.block_369}>Correct: The Next Generation</p>
                <p className={styles.block_24}>
                  Explanation: for "Star Trek: The Next Generation"
                </p>
                <p className={styles.block_223}>
                  Correct: Mainkan Lumpuhkanlah oleh Geisha.
                </p>
                <p className={styles.block_54}>
                  Explanation: Correct title is "Lumpuhkanlah Ingatanku".
                </p>
                <p className={styles.block_478}>
                  Correct: Saya ingin mendengarkan Geisha Lumpuhkanlah.
                </p>
                <p className={styles.block_54}>
                  Explanation: Correct title is "Lumpuhkanlah Ingatanku".
                </p>
                <p className={styles.block_739}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_376}>
                  Correct: YouTube Lumpuhkanlah ingatanku. Hapuskan tentang dia.
                </p>
                <p className={styles.block_95}>
                  Incorrect: YouTube Lumpuhkanlah Ingatanku, hapuskan tentang
                  dia.
                </p>
                <p className={styles.block_740}>
                  Incorrect: YouTube Lumpuhkanlah Ingatanku Hapuskan Tentang
                  Dia.
                </p>
                <p className={styles.block_77}>
                  Explanation: They are quoting lyrics that just happen to
                  contain the title; format as full sentence.
                </p>
                <p className={styles.block_367}>
                  Correct: menarilah dan terus tertawa
                </p>
                <p className={styles.block_741}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_162}>Correct: Someone Like You</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_742}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_743}>Correct: respons</p>
                <p className={styles.block_29}>Incorrect: respon</p>
                <p className={styles.block_744}>
                  Explanation: "respons" is preferred by KBBI.
                </p>
                <p className={styles.block_745}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_746}>
                  Correct: Saya sedang membaca Kompas.
                </p>
                <p className={styles.block_532}>Correct: kompas</p>
                <p className={styles.block_747}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_748}>Correct: Oryza sativa</p>
                <p className={styles.block_67}>Correct: E. coli</p>
                <p className={styles.block_418}>Correct: Amoxicillin</p>
                <p className={styles.block_749}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_750}>
                  Correct: Lebay banget sih lu.
                </p>
                <p className={styles.block_751}>
                  Correct: Bokap gue mau ke Jogja.
                </p>
                <p className={styles.block_752}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_753}>
                  Correct: Takkan lari gunung dikejar.
                </p>
                <p className={styles.block_367}>
                  Correct: Tak akan lari gunung dikejar.
                </p>
                <p className={styles.block_754}>
                  Explanation: Speaker clearly said two distinct words.
                </p>
                <p className={styles.block_755}>
                  Correct: Kubiarkan dia berpikir.
                </p>
                <p className={styles.block_441}>
                  Correct: Aku biarkan dia berpikir.
                </p>
                <p className={styles.block_754}>
                  Explanation: Speaker clearly said two distinct words.
                </p>
                <p className={styles.block_679}>Correct: gak</p>
                <p className={styles.block_529}>Correct: ni semua</p>
                <p className={styles.block_756}>
                  Correct: Aku akan membiarkanmu tidur.
                </p>
                <p className={styles.block_13}>Correct: Kubiarkan kau tidur.</p>
                <p className={styles.block_469}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_197}>
                  Correct: Aku akan pulang sekarang.
                </p>
                <p className={styles.block_365}>
                  Example audio: " kukan pulang sekarang "
                </p>
                <p className={styles.block_629}>Correct: Kau akan kembali.</p>
                <p className={styles.block_757}>
                  Example audio: " kaukan kembali "
                </p>
                <p className={styles.block_42}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_558}>
                  Correct: Lumpuhkanlah Ingatanku
                </p>
                <p className={styles.block_19}>
                  Example audio: " lumpuhkamlah ingatanku "
                </p>
                <p className={styles.block_110}>Correct: minta</p>
                <p className={styles.block_758}>
                  Explanation: "minta" pronounced in a way that sounds like
                  "menta".
                </p>
                <p className={styles.block_101}>
                  Correct: Di mana perpustakaan terdekat?
                </p>
                <p className={styles.block_147}>
                  Example audio: " perpustakan "
                </p>
                <p className={styles.block_759}>Correct: Maudy Ayunda</p>
                <p className={styles.block_760}>
                  Example audio: " modi aunda "
                </p>
                <p className={styles.block_109}>Correct: Terima kasih.</p>
                <p className={styles.block_453}>
                  Explanation: Person said "terima kasyi" in Korean accent.
                </p>
                <p className={styles.block_426}>
                  Correct: Maksud dia tidak seperti itu.
                </p>
                <p className={styles.block_439}>
                  Example audio: " maksud dia tida seperti itu "
                </p>
                <p className={styles.block_761}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_241}>Correct: penghisap debu</p>
                <p className={styles.block_122}>
                  Explanation: even if they meant "pengisap debu".
                </p>
                <p className={styles.block_762}>
                  Correct: Kami akan menyediakan semelon nanti malam.
                </p>
                <p className={styles.block_452}>
                  Explanation: Unsure whether speaker intended to say "semangka"
                  or "melon", but clearly articulated and easy to spell.
                </p>
                <p className={styles.block_403}>
                  Correct: Tetibanya dia begitu padaku.
                </p>
                <p className={styles.block_42}>
                  If you hear a word that does not sound like a standard word of
                  your language
                </p>
                <p className={styles.block_763}>
                  because it appears to be nonsense, first perform a Google
                  search for the word. If there is a clear candidate, transcribe
                  that word.
                </p>
                <p className={styles.block_140}>Correct: Kaloli</p>
                <p className={styles.block_764}>
                  Explanation: User says "Kaloli". This might sound like
                  nonsense at first, but the transcriber guesses the spelling
                  "kalolli" and is by corrected Google Search to "Kaloli", a
                  gasoline tanker and place in Hawaii. Transcribe Kaloli.
                </p>
                <p className={styles.block_58}>Correct: Souk Abdali</p>
                <p className={styles.block_765}>
                  Explanation: User says "Souk Abdali". Transcriber searches
                  "sukabdali", finds correct results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_141}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_743}>Correct: jalanalu</p>
                <p className={styles.block_142}>
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
