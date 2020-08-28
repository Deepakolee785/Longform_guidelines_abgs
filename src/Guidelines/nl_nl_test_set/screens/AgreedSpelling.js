import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import CorrectIncorrect from '../../../Components/common/CorrrectIncorrect'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'

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
            <PageContentHeader currentPage="longform nl_nl_test_set" />
            <div className="content">
              <h1 className="large-heading">Agreed Spelling</h1>
              <p className="text">
                {' '}
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              {/*  */}

              <div id="spelling-out">
                <h2 className="heading">Spelling out</h2>
                <ul>
                  <li>
                    {' '}
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it is said (often done for
                    foreign names or businesses, for example). Use lowercase
                    letters for the spelled-out portion. This rule does not
                    apply to acronyms or initialisms, or to spelled-out web or
                    email addresses.
                    <CorrectIncorrect
                      correctText="Jumbo j u m b o"
                      explainationText='Person said "Jumbo" and then spelled it.'
                    />
                    <CorrectIncorrect
                      correctText="a b c d e f g h i k l m n o p q r s t u v w x y z"
                      explainationText="spelled out alphabet"
                    />
                    <CorrectIncorrect
                      correctText=" KRO"
                      explainationText=' " k r o "'
                    />
                  </li>
                  <li>
                    For uses of single letters, either referring to the letter
                    itself or some other meaning associated with it, use capital
                    letters (with apostrophes for plurals).
                    <CorrectIncorrect
                      correctText=" woorden die beginnen met de letter J"
                      explainationText={` Hoeveel T's zitten er in tentoonstelling?`}
                    />
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="interjection">
                <h2 className="heading">Interjections</h2>
                <ul>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                  <CorrectIncorrect correctText="  heh, ha, haha, hehe, boo hoo, lalala" />
                  <CorrectIncorrect
                    correctText="hahaha"
                    incorrectText="hahahahaha"
                    audioText=" ha ha ha ha ha "
                    explainationText={`Do not transcribe more than three syllables.`}
                  />
                </ul>
              </div>
              {/*  */}
              <div id="proper-names">
                <h2 className="heading">Proper names</h2>
                <ul>
                  <li>
                    {' '}
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and pay attention to the correct
                    format. Official format and spelling of a proper name may
                    supersede the usual written transcription conventions
                    detailed in this document.{' '}
                  </li>
                  <li>
                    {' '}
                    Defer to official spellings of celebrity names.
                    <CorrectIncorrect
                      correctText="pink"
                      explainationText={`The celebrity uses an exclamation mark, not a regular "i".`}
                    />
                    <CorrectIncorrect correctText=" will.i.am" />
                    <CorrectIncorrect
                      correctText=" Kristin Chenoweth"
                      explainationText={` The celebrity spells her name differently than the more common "Kristen". `}
                    />
                  </li>
                  <li>
                    {' '}
                    If proper names include diacritics uncommon in your language
                    (ć, š, á, etc.), do not include them in your spelling.{' '}
                  </li>
                  <li>
                    {' '}
                    If a personal name could have multiple spellings and context
                    does not help choose a spelling, use the spelling that is
                    most commonly used as a first name in the Netherlands
                    according to the Voornamenbank (which you can find on
                    Google).{' '}
                    <CorrectIncorrect
                      correctText=" Bel Sophia."
                      incorrectText="Bel Sofia."
                      explainationText={`  "Sophia" occurs almost 12,000 times in the Netherlands, and "Sofia" only occurs about 1,000 times.  `}
                    />
                  </li>
                  <li>
                    Spell and capitalize holidays as indicated in the Groene
                    Boekje (www.woordenlijst.org). This usually means you should
                    capitalize only their official names, but not derived names.
                    <CorrectIncorrect correctText=" Wanneer is Kerstmis dit jaar?" />
                    <CorrectIncorrect correctText=" Wanneer is kerst dit jaar?" />
                    <CorrectIncorrect correctText=" Wanneer is Pasen dit jaar?" />
                    <CorrectIncorrect correctText=" Wanneer is tweede paasdag dit jaar?" />
                  </li>
                </ul>
              </div>
              <div id="brand-and-product">
                <h2 className="heading">Brand and product</h2>
                <ul>
                  <li>
                    Format proper names as they are most commonly formatted on
                    the entity's website (especially official documents), if
                    available, or the Wikipedia or IMDb page. In cases of
                    ambiguity, defer to their privacy policy. If no other
                    sources, use top Google hits.
                    <CorrectIncorrect correctText="Hij werkt bij Amazon." />
                    <CorrectIncorrect correctText=" Ik heb gehoord dat Yahoo en T-Mobile net een deal hebben gesloten." />
                    <CorrectIncorrect correctText=" YouTube" />
                    <CorrectIncorrect
                      correctText=" Burger King"
                      incorrectText="BURGER KING"
                      explainationText=' Do not spell "Burger King" all in upper case as in the stylized form of the logo, stick to the official form as per the privacy policy. '
                    />
                    <CorrectIncorrect
                      correctText=" LEGO"
                      incorrectText="Lego"
                    />
                  </li>
                  <li>
                    Follow the official spelling, check on Wikipédia or choose
                    the spelling yielding more results on Google search.
                    <ul className="blue-text">
                      <li>μTorrent</li>
                      <li>Adidas</li>
                      <li>ABN AMRO Bank</li>
                      <li>Aegon</li>
                      <li>Albert Heijn</li>
                      <li>Aldi</li>
                      <li>ANWB</li>
                      <li>Arriva</li>
                      <li>Bacardi</li>
                      <li>Boldking</li>
                      <li>Buienradar</li>
                      <li>Center Parcs</li>
                      <li>Chanel</li>
                      <li>Coca-Cola</li>
                      <li>Deen</li>
                      <li>D-reizen</li>
                      <li>Dubbelfrisss</li>
                      <li>Duplo</li>
                      <li>DUWO</li>
                      <li>easyJet</li>
                      <li>EHBO</li>
                      <li>Emté</li>
                      <li>Facebook</li>
                      <li>FaceTime</li>
                      <li>Fiat</li>
                      <li>funda</li>
                      <li>Gamma</li>
                      <li>Google</li>
                      <li>Google Earth</li>
                      <li>googelen</li>
                      <li>GroenRijk</li>
                      <li>Harley-Davidson</li>
                      <li>Hennes & Mauritz</li>
                      <li>HEMA</li>
                      <li>HETWoonhart</li>
                      <li>Hornbach</li>
                      <li>
                        IKEA (acronym for 'Ingvar Kamprad Elmtaryd Agunnary')
                      </li>
                      <li>IMDb</li>
                      <li>ING Bank</li>
                      <li>KamaSutrA</li>
                      <li>Karwei</li>
                      <li>Keuken Kampioen</li>
                      <li>Kieskeurig</li>
                      <li>Kinderen voor Kinderen</li>
                      <li>Kwantum</li>
                      <li>Kwik-Fit</li>
                      <li>Lacosta</li>
                      <li>Landal GreenParks</li>
                      <li>LEGO</li>
                      <li>Lidl</li>
                      <li>Lolhoek</li>
                      <li>Makro</li>
                      <li>McDonald's</li>
                      <li>mora</li>
                      <li>Media Markt</li>
                      <li>Mini</li>
                      <li>MSN</li>
                      <li>Net5</li>
                      <li>Nescafé</li>
                      <li>Nivea</li>
                      <li>Nutella</li>
                      <li>Omo</li>
                      <li>Ortec</li>
                      <li>Palm</li>
                      <li>Pathé</li>
                      <li>Pauw & Witteman</li>
                      <li>Playmobil</li>
                      <li>Plus</li>
                      <li>PowerPoint</li>
                      <li>Praxis</li>
                      <li>Prénatal</li>
                      <li>Puma</li>
                      <li>Q-music</li>
                      <li>Rabobank</li>
                      <li>RadioNL</li>
                      <li>RDW</li>
                      <li>Reaal</li>
                      <li>RijnlandRoute</li>
                      <li>RTL 4</li>
                      <li>RTL 5</li>
                      <li>RTL 7</li>
                      <li>Ryanair</li>
                      <li>Samsung</li>
                      <li>Samsung Galaxy</li>
                      <li>SBS6</li>
                      <li>Senseo</li>
                      <li>Skoda</li>
                      <li>Slam!FM</li>
                      <li>Smint</li>
                      <li>SpangaS</li>
                      <li>spelen.nl</li>
                      <li>Spider-Man</li>
                      <li>Swype</li>
                      <li>Tele2</li>
                      <li>de telefoongids</li>
                      <li>T-Mobile</li>
                      <li>Twitter</li>
                      <li>Tom en Jerry</li>
                      <li>TomTom</li>
                      <li>Tupac</li>
                      <li>Uitzending Gemist</li>
                      <li>UNICEF</li>
                      <li>Vroom & Dreesmann</li>
                      <li>Wehkamp</li>
                      <li>WhatsApp</li>
                      <li>Wikipedia</li>
                      <li>wiki</li>
                      <li>YouTube</li>
                      <li>Zembla</li>
                      <li>50Plus</li>
                      <li>7Up</li>
                    </ul>
                  </li>
                  <li>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and "Ok Glass", require their own
                    particular spelling of "oké". This spelling is unique to
                    these cases.
                    <CorrectIncorrect correctText="Ok Google" />
                    <CorrectIncorrect correctText="Ok Google Now" />
                    <CorrectIncorrect
                      correctText="Ok Google, waar is er hier een Starbucks?
	"
                    />
                    <CorrectIncorrect correctText="Ok Google, pannenkoeken" />
                    <CorrectIncorrect correctText="Oké." />
                    <CorrectIncorrect correctText="Oké, David." />
                    <CorrectIncorrect correctText="Oké Patty, laten we gaan." />
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="media-title">
                <h2 className="heading">Media title</h2>
                <ul>
                  <li>
                    {' '}
                    Refer to the Google Play Store for official spellings of
                    media titles. For film/television, IMDb is also available.
                    If an utterance is ambiguous between a media title and a
                    sentence or web search, use your judgment for which is more
                    likely; if truly unclear, default to media title.{' '}
                  </li>
                  <li>
                    {' '}
                    Capitalize media titles the way they are typically
                    capitalized.{' '}
                  </li>
                  <li>
                    {' '}
                    Do not use quotation marks for media titles.
                    <CorrectIncorrect
                      correctText="afleveringen van De Wereld Draait Door"
                      incorrectText='  afleveringen van "De Wereld Draait Door"'
                    />
                    <CorrectIncorrect
                      correctText="Speel Per Spoor van Guus Meeuwis."
                      incorrectText=' Speel "Per Spoor" van Guus Meeuwis.'
                    />
                  </li>
                  <li>
                    {' '}
                    Transcribe all media titles with original punctuation. In
                    cases where original punctuation falls at the end of a
                    sentence, do not transcribe sentence-level punctuation. That
                    is, media title punctuation trumps sentence level
                    punctuation when in conflict. If a popular media title
                    consists of an entire sentence but the official spelling is
                    without punctuation, then don't punctuate the title. If an
                    utterance is ambiguous between a media title and a sentence
                    or web search, use your judgment for which is more likely
                    and treat it accordingly.{' '}
                    <CorrectIncorrect correctText=" Ik kijk graag naar Gordon Ramsey: Oorlog in de keuken! maar helaas moet ik het vandaag missen. " />
                    <CorrectIncorrect correctText="Morgenavond is er weer een nieuwe aflevering van Goede tijden, slechte tijden. " />
                    <CorrectIncorrect correctText=" Kom je donderdagavond ook gezellig bij ons meekijken naar Wie is de Mol?  " />
                  </li>
                  <li>
                    Very common alternate or shortened versions of titles should
                    also be capitalized.
                    <CorrectIncorrect
                      correctText="Transformers 2"
                      explainationText=' for "Transformers: Revenge of the Fallen"'
                    />
                    <CorrectIncorrect
                      correctText="What Does the Fox Say?"
                      explainationText='for "The Fox (What Does the Fox Say?)"'
                    />
                    <CorrectIncorrect
                      correctText="Ik wil de laatste aflevering van DWDD zien."
                      explainationText='Official title is "De Wereld Draait Door".'
                    />
                  </li>
                  <li>
                    Do not capitalize a media title that happens to occur within
                    quoted lyrics. Format lyrics that form a sentence as you
                    would a normal sentence.{' '}
                    <CorrectIncorrect
                      correctText=" YouTube We are the champions my friends, and we'll keep on fighting till the end. ."
                      explainationText='They are quoting lyrics that just happen to contain the title; format as full sentence. ".'
                      incorrectText=" YouTube We Are the Champions my friends, and we'll keep on fighting till the end. "
                    />
                    <CorrectIncorrect incorrectText=" YouTube We Are the Champions My Friends And We'll Keep on Fighting till the End. " />
                  </li>
                  <li>
                    {' '}
                    Treat foreign titles the same way as titles in the
                    transcription language if you understand them.{' '}
                    <CorrectIncorrect correctText=" Y Tu Mama Tambien" />
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="multiple-spelling">
                <h2 className="heading">Multiple spellings</h2>
                <ul>
                  <li>
                    When multiple spellings are attested, use the first spelling
                    used in the reference dictionary for your language. If there
                    is no entry, Google the word and use the form with the most
                    hits.
                    <CorrectIncorrect
                      correctText=" ideeënloos"
                      explainationText='  "ideeënloos" is preferred by Groene Boekje (www.woordenlijst.org). '
                      incorrectText=" ideeëloos"
                    />
                  </li>
                  <li>
                    Guess the most likely spelling given the context. When
                    context is insufficient, rely on Google hits.{' '}
                    <CorrectIncorrect
                      correctText="De koe staat in de wei."
                      incorrectText="  De koe staat in de wij."
                    />
                  </li>
                  <li>
                    {' '}
                    Use official spelling and capitalization for technical
                    terms. Google them and pay attention to the correct format.{' '}
                    <CorrectIncorrect correctText="Pseudotsuga menziesii" />
                    <CorrectIncorrect correctText=" E. coli" />
                    <CorrectIncorrect correctText=" Metronidazole" />
                  </li>
                  <li>
                    {' '}
                    Transcribe slang and colloquialisms as spoken according to
                    the appendix on this page. Do not alter non-standard speech
                    that the speaker probably wouldn't want corrected.{' '}
                    <CorrectIncorrect
                      correctText=" Dat zijn geen grappen niet."
                      audioText='" dat zijn geen grappen niet "'
                      incorrectTex="at zijn geen grappen."
                    />
                  </li>
                  <li>
                    {' '}
                    Use standard spelling for reductions that commonly occur in
                    normal running speech.{' '}
                    <CorrectIncorrect
                      correctText="Dat denk ik niet."
                      audioText='" dat denk ‘k niet "'
                    />
                  </li>
                  <li>
                    {' '}
                    If you hear a word that does not sound like a standard word
                    of your language because there is a small sound change (i.e.
                    accent, speech error, speech impairment, etc), transcribe
                    the intended word.{' '}
                    <CorrectIncorrect
                      correctText="Gangnam Style"
                      audioText=' " gangdam style "'
                    />
                  </li>
                  <li>
                    {' '}
                    If you hear a word that does not sound like a standard word
                    of your language, but it is obviously based on real words,
                    suffixes, or prefixes, transcribe as is.{' '}
                    <CorrectIncorrect
                      correctText=" verpannenkoeken"
                      explainationText={`It's hard to imagine a context in which this verb would be used, but it conforms to the standard pattern of "ver-NOUN-en", meaning "to turn something into the NOUN", so you should transcribe it. `}
                    />
                    <CorrectIncorrect
                      correctText=" Neem je ook wat aardbozen mee voor in onze smoothie, schat?"
                      explainationText={`Unsure whether speaker intended to say "aardbeien" or "frambozen", but clearly articulated and easy to spell. `}
                    />
                  </li>
                  <li>
                    {' '}
                    If you hear a word that does not sound like a standard word
                    of your language because it appears to be nonsense, first
                    perform a Google search for the word. If there is a clear
                    candidate, transcribe that word.{' '}
                    <CorrectIncorrect
                      correctText=" Kaloli"
                      explainationText={` User says "Kaloli". This might sound like nonsense at first, but the transcriber guesses the spelling "kalolli" and is by corrected Google Search to "Kaloli", a gasoline tanker and place in Hawaii. Transcribe Kaloli. `}
                    />
                    <CorrectIncorrect
                      correctText=" Souk Abdali"
                      explainationText={` User says "Souk Abdali". Transcriber searches "sukabdali", finds correct results. Transcribe Souk Abdali. `}
                    />
                  </li>
                  <li>
                    If a word appears to be nonsense and a Google search returns
                    no clear results but it is easy to spell and articulated
                    clearly, transcribe it anyway.
                    <CorrectIncorrect
                      correctText=" Leidselaan"
                      explainationText={`There is no street with this name anywhere in the Netherlands, but the audio is clear and there is no ambiguity on how to spell this street name, so transcribe it. `}
                    />
                  </li>
                  <li>
                    For the following words, use these spellings:
                    <ul className="blue-text">
                      <li>fuck</li>
                      <li>fucking</li>
                      <li>what the fuck</li>
                      <li>fucking vet</li>
                      <li>fucking cool</li>
                      <li>fuck a duck</li>
                      <li>sms'je</li>
                      <li>sms'en</li>
                      <li>stadion Galgenwaard</li>
                      <li>stadion De Kuip</li>
                      <li>tattoo, tattoos</li>
                      <li>auw</li>
                      <li>aub</li>
                      <li>svp</li>
                      <li>ps</li>
                      <li>oh</li>
                      <li>idd</li>
                      <li>xd</li>
                      <li>iig</li>
                      <li>ah</li>
                      <li>alé</li>
                      <li>amai</li>
                      <li>bam</li>
                      <li>boe</li>
                      <li>eh</li>
                      <li>ehm</li>
                      <li>ennuh</li>
                      <li>e-mail</li>
                      <li>ey</li>
                      <li>hey</li>
                      <li>hè</li>
                      <li>hai</li>
                      <li>hm hm</li>
                      <li>hoihoi</li>
                      <li>oh jee</li>
                      <li>oh ja</li>
                      <li>oh wee</li>
                      <li>oeh</li>
                      <li>oké</li>
                      <li>ofzo</li>
                      <li>enzo</li>
                      <li>ja ja</li>
                      <li>uh</li>
                      <li>yo</li>
                      <li>yeah</li>
                      <li>huh</li>
                      <li>naar de klote</li>
                      <li>tweet</li>
                      <li>scheiße</li>
                      <li>ALT</li>
                      <li>DEL</li>
                      <li>CTRL</li>
                      <li>ESC</li>
                      <li>F1, F2, etc...</li>
                      <li>lol (not LOL)</li>
                      <li>yolo (not YOLO)</li>
                      <li>MILF</li>
                      <li>Wi-Fi</li>
                      <li>Bluetooth</li>
                      <li>ID-kaart</li>
                      <li>SD-kaart</li>
                      <li>QR-code</li>
                      <li>woehoe</li>
                      <li>x x x</li>
                      <li>wazzup</li>
                      <li>tatu</li>
                      <li>sjonge</li>
                      <li>sjongejonge</li>
                      <li>simkaart</li>
                      <li>drie uur</li>
                      <li>goedemorgen</li>
                      <li>goedemiddag</li>
                      <li>goedenavond</li>
                      <li>goedenacht</li>
                      <li>goedendag</li>
                      <li>smiley</li>
                      <li>smileys</li>
                    </ul>
                  </li>
                  <li>
                    {' '}
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or singing.{' '}
                  </li>
                </ul>
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
