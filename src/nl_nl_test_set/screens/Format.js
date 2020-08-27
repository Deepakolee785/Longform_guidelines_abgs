import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../Components/common/PageContentHeader'
import CorrectIncorrect from '../../Components/common/CorrrectIncorrect'
import RightContentNav from '../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
const Format = () => {
  const classes = useStyles()

  const headingIds = [
    'number',
    'currency-and-unit',
    'date-and-time',
    'address',
    'web',
    'abbreviation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader />
            <div className="content">
              <h1 className="large-heading">Format</h1>
              <p className="text">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <h2 className="heading">Number</h2>
                <ul>
                  <li>
                    Write small numbers (0 to 9) as words and larger numbers (10
                    and above) using digits. However, you may write small
                    numbers using digits if they appear in a list, in
                    mathematical expression, as street numbers, as a measure or
                    time unit.
                    <CorrectIncorrect
                      correctText=" Er zitten negen studenten in mijn klas."
                      explainationText=" numbers less than 10"
                    />
                    <CorrectIncorrect
                      correctText=" Er zitten 13 studenten in mijn klas."
                      explainationText="  numbers greater than 9"
                    />
                  </li>
                  <li>
                    When two or more numbers refer to the to the same noun, and
                    one number is 10 or greater, transcribe both as numerals.
                    <CorrectIncorrect correctText="Mijn kinderen wilden graag 9 of 10 goudvissen kopen." />
                  </li>
                  <li>
                    Use "e" as the ordinal suffix.
                    <CorrectIncorrect correctText="1e, 2e, 3e..." />
                  </li>
                  <li>
                    If a large number consists of only a number followed by
                    "miljoen", "biljoen", "triljoen", or higher, then transcribe
                    as a numeral plus word. Otherwise, transcribe as numerals.
                    <CorrectIncorrect
                      correctText="1 miljoen ganzen"
                      audioText='" één miljoen ganzen "'
                    />
                    <CorrectIncorrect
                      correctText=" een miljoen ganzen"
                      audioText='" een miljoen ganzen "'
                    />
                    <CorrectIncorrect
                      correctText="1.000 ganzen"
                      audioText='" duizend ganzen "'
                    />
                    <CorrectIncorrect
                      correctText="$1,5 miljard"
                      audioText='" anderhalf miljard dollar "'
                      explainationText='For mixed numbers before "miljoen", "miljard", etc., use decimals.'
                    />
                  </li>
                  <li>
                    Write lists of numbers with digits and without commas.
                    <CorrectIncorrect
                      correctText="0 1 1 2 3 5 8 13"
                      audioText=' " nul één één twee drie vijf acht dertien "'
                    />
                    <CorrectIncorrect
                      correctText=" 3 2 1 lift-off"
                      audioText='" drie twee één lift-off "'
                      explainationText="list of numbers, no comma if just counting"
                    />
                  </li>
                  <li>
                    For long numbers (4+ digits) indicating quantity, insert the
                    relevant separator (comma, decimal point, or space,
                    depending on language).
                    <CorrectIncorrect
                      correctText=" 10.000"
                      audioText=' " tienduizend "'
                    />
                  </li>
                  <li>
                    In math expressions or units & measures, transcribe fraction
                    words using numerals and slashes.
                    <CorrectIncorrect
                      correctText=" Sla linksaf over 1/4 km."
                      audioText='" sla linksaf over een kwart kilometer "'
                    />
                  </li>
                  <li>
                    When referring to items (not units or measures), write
                    fractions out in words.
                    <CorrectIncorrect
                      correctText=" Geef mij de helft van die taart."
                      audioText=' " geef mij de helft van die taart "'
                      incorrectText="Geef mij ½ van die taart."
                    />
                    <CorrectIncorrect
                      correctText=" Ik ken het verhaal ook maar half."
                      audioText=' " ik ken het verhaal ook maar half "'
                      incorrectText=" Ik ken het verhaal ook maar ½."
                    />
                  </li>
                  <li>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                    <CorrectIncorrect
                      correctText="Kun je me €2,50 lenen?."
                      audioText=' " kun je me twee en een halve euro lenen "'
                    />
                    <CorrectIncorrect
                      correctText=" Albert Verlinde heeft die villa gekocht voor €3,5 miljoen."
                      audioText=' " albert verlinde heeft die villa gekocht voor drie en een half miljoen "'
                    />
                  </li>
                  <li>
                    Transcribe percentages using numerals and the % sign. (In
                    the unlikely case that you encounter a number of a million
                    or greater used as a percentage, spell it out.)
                    <CorrectIncorrect
                      correctText=" Slechts 2% van de Nederlanders eet elke week poffertjes."
                      audioText=' " slechts twee procent van de nederlanders eet elke week poffertjes "'
                    />
                    <CorrectIncorrect correctText=" 1 miljoen procent" />
                  </li>
                  <li>
                    If a number appears in a context which calls for a certain
                    formatting in your language, use that formatting. Otherwise,
                    default to the general rule for transcribing numbers.
                  </li>
                  <li>
                    Use Roman numerals only when part of an official name or
                    title.
                    <CorrectIncorrect
                      correctText="Lodewijk XIV"
                      audioText=' " lodewijk de veertiende "'
                    />
                  </li>
                  <li>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                    <CorrectIncorrect
                      correctText="seizoen 3 aflevering 2"
                      audioText=' " seizoen drie aflevering twee "'
                    />
                  </li>
                  <li>
                    Transcribe phone numbers using the most common format in the
                    transcription language.
                    <CorrectIncorrect correctText="071-5991234" />
                    <CorrectIncorrect
                      correctText=" +31-71-5991234"
                      audioText='" plus één en dertig één en zeventig "'
                    />
                    <CorrectIncorrect correctText="  0800-1234" />
                  </li>
                  <li>
                    Transcribe alpha-digit sequences (product codes etc.) in
                    their most natural way (possibly several ways accepted). Do
                    not transcribe credit card numbers, etc.
                    <CorrectIncorrect correctText="XT 660 or XT660" />
                  </li>
                  <li>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols, with spaces in between.
                    <CorrectIncorrect
                      correctText="5 / 6 ^ 3"
                      audioText='" vijf gedeeld door zes tot de derde "'
                    />
                    <CorrectIncorrect
                      correctText=" Wat is 5 * 6?"
                      audioText='" wat is vijf keer zes "'
                    />
                    <CorrectIncorrect
                      correctText="√3"
                      audioText='" " wortel van drie "'
                    />
                    <CorrectIncorrect
                      correctText="Wat is 8 uur * $12?"
                      audioText='" wat is acht uur keer twaalf dollar "'
                    />
                    <CorrectIncorrect
                      correctText=" Wat is drie krokodillen gedeeld door twee hagedissen?"
                      audioText="Does not sound like a true math expression with useful units."
                    />
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="currency-and-unit">
                <h2 className="heading">Currency and unit</h2>
                <ul>
                  <li>
                    Transcribe currencies as commonly written in the
                    transcription language.
                    <CorrectIncorrect
                      correctText="$10"
                      audioText='" tien dollar "'
                    />
                    <CorrectIncorrect
                      correctText="Wat is €20 in dollars?"
                      audioText='" wat is twintig euro in dollars "'
                    />
                  </li>
                  <li>
                    When a speaker uses words like "euro" without specifying a
                    quantity, spell them out.
                    <CorrectIncorrect
                      correctText="een paar euro"
                      audioText='" een paar euro "'
                    />
                    <CorrectIncorrect correctText=" wisselkoers van de euro tegenover de dollar" />
                  </li>
                  <li>
                    For cent-only quantities, the word “cent” should follow the
                    amount.
                    <CorrectIncorrect
                      correctText="5 cent"
                      audioText=' " vijf cent "'
                    />
                    <CorrectIncorrect
                      correctText="een snoepje van 10 cent"
                      audioText=' " een snoepje van tien cent "'
                    />
                    <CorrectIncorrect correctText=" currency conversion between Indian rupee and US dollar" />
                  </li>
                  <li>
                    For all other currencies and slang terms for money, spell
                    out the words.
                    <CorrectIncorrect
                      correctText="  200 yen"
                      audioText=' " tweehonderd yen "'
                      incorrectText=" ¥200"
                    />
                  </li>
                  <li>
                    Write out denominations of currency (the face values of
                    bills, notes, coins, etc). Use hyphens as needed.
                    <CorrectIncorrect correctText="Dit twintigeurobiljet is vers van de pers." />
                  </li>
                  <li>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                    <CorrectIncorrect
                      correctText=" Ik moet vier of vijfhonderd euro hebben."
                      audioText='" ik moet vier of vijfhonderd euro hebben "'
                    />
                    <CorrectIncorrect
                      correctText=" 9 tot 12 euro"
                      audioText='Example audio: " negen tot twaalf euro "'
                    />
                  </li>
                  <li>
                    For degrees, use the ° symbol.
                    <CorrectIncorrect correctText=" Het is buiten 20°." />
                    <CorrectIncorrect correctText="Het wordt vannacht -5°." />
                  </li>
                  <li>
                    Abbreviate all units that follow numeric values.
                    <CorrectIncorrect
                      correctText="Deze tafel is 100cm lang."
                      audioText=' " deze tafel is honderd centimeter lang "'
                    />
                  </li>
                  <li>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                    <CorrectIncorrect correctText="Slager, mag ik 2 ons ham van u?" />
                    <CorrectIncorrect correctText=" Ik heb daar 6 maanden gewoond." />
                  </li>
                  <li>
                    For lengths, widths, and heights, use "x" instead of any
                    preposition.
                    <CorrectIncorrect
                      correctText="Deze kamer is 3x4."
                      audioText='" deze kamer is drie bij vier "'
                    />
                  </li>
                  <li>
                    If it is clear from context that a number or number sequence
                    refers to currency or time, format it as such.
                    <CorrectIncorrect
                      correctText=" Voor minder dan €80 per nacht kun je tegenwoordig geen hotelkamer meer krijgen in hartje Amsterdam."
                      audioText='" voor minder dan tachtig per nacht kun je tegenwoordig geen hotelkamer meer krijgen in hartje amsterdam "'
                      incorrectText="Voor minder dan 80 per nacht kun je tegenwoordig geen hotelkamer meer krijgen in hartje Amsterdam. "
                    />
                  </li>
                  <li>
                    Common technical abbreviations
                    <ul className="blue-text">
                      <li>kilobyte - kB</li>
                      <li>megabyte - MB</li>
                      <li>gigabyte - GB</li>
                      <li>terabyte - TB</li>
                    </ul>
                  </li>
                  <li>
                    Common measurements of distance and rate
                    <ul className="blue-text">
                      <li>millimeter - mm</li>
                      <li>centimeter - cm</li>
                      <li>meter - m</li>
                      <li>kilometer - km</li>
                      <li>kilometer per uur - km/u</li>
                    </ul>
                  </li>
                  <li>
                    Common measurements of area{' '}
                    <ul className="blue-text">
                      <li>vierkante centimeter - cm²</li>
                      <li>vierkante meter - m²</li>
                      <li>vierkante kilometer - km²</li>
                      <li>are - a</li>
                      <li>hectare - ha</li>
                    </ul>
                  </li>
                  <li>
                    Common scientific terms
                    <ul className="blue-text">
                      <li>decibel - dB</li>
                      <li>Newton - N</li>
                      <li>Joule - J</li>
                      <li>Hertz - Hz</li>
                      <li>Watt - W</li>
                      <li>Kilowatt - kW</li>
                      <li>mol - mol</li>
                      <li>Candela - cd</li>
                      <li>lumen - lm</li>
                      <li>graad - °</li>
                      <li>graden - °</li>
                      <li>Fahrenheit - F</li>
                      <li>Celsius - C</li>
                      <li>Kelvin - K</li>
                    </ul>
                  </li>
                  <li>
                    Common measurements of weight and volume
                    <ul>
                      <li>liter - l</li>
                      <li>gram - g</li>
                      <li>milligram - mg</li>
                      <li>kilogram - kg</li>
                      <li>kubieke meter - m³</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="date-and-time">
                <h2 className="heading">Date and time</h2>
                <ul>
                  <li>
                    Use the natural form for transcribing dates.
                    <CorrectIncorrect
                      correctText="4 juli 2015"
                      audioText='Example audio: " vier juli tweeduizend vijftien "'
                    />
                    <CorrectIncorrect
                      correctText="muziek uit de jaren '80"
                      audioText='" muziek uit de jaren tachtig "'
                    />
                    <CorrectIncorrect
                      correctText="woensdag 6 maart"
                      audioText=' " woensdag zes maart "'
                    />
                  </li>
                  <li>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                    <CorrectIncorrect
                      correctText=" 7-12-2010"
                      audioText=' " zeven twaalf tweeduizendtien "'
                    />
                    <CorrectIncorrect audioText='" zeven streepje twaalf streepje tweeduizendtien "' />
                    <CorrectIncorrect
                      correctText=" de vervaldatum 05/10/2012."
                      audioText=' " de vervaldatum is nul vijf tien tweeduizend twaalf "'
                    />
                  </li>
                  <li>
                    Use the natural form for transcribing times whenever
                    possible.
                  </li>
                  <li>
                    {' '}
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                    <CorrectIncorrect
                      correctText=" Oké dan ben ik er om 5 uur"
                      audioText='" oké dan ben ik er om vijf uur "'
                    />
                    <CorrectIncorrect
                      correctText="  3 uur"
                      audioText='" drie uur "'
                    />
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="address">
                <h2 className="heading">Address</h2>
                <ul>
                  <li>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when explicitly spoken.
                    <CorrectIncorrect correctText="Hij woont op de Tweede Oosterparkstraat in Amsterdam." />
                    <CorrectIncorrect correctText="Tweede Oosterparkstraat 34, Amsterdam" />
                  </li>
                  <li>
                    Use commas for ENTITY, LOCATION.
                    <CorrectIncorrect correctText=" McDonald's, Leidseplein" />
                    <CorrectIncorrect correctText="Tweede Oosterparkstraat, Amsterdam" />
                  </li>
                  <li>
                    If the speaker uses "nummer" between the street name and the
                    house number, omit this from your transcription.
                    <CorrectIncorrect
                      correctText=" Carnegielaan 4, Den Haag"
                      audioText=' " carnegielaan nummer vier den haag "'
                    />
                  </li>
                  <li>
                    In stand-alone addresses, you should omit the word "in"
                    between house numbers and place names, using a comma
                    instead.
                    <CorrectIncorrect
                      correctText="Carnegielaan 4, Den Haag"
                      audioText='" carnegielaan nummer vier in den haag "'
                    />
                  </li>
                  <li>
                    You should insert a single white space between the digits
                    and the letters of Dutch postal codes.
                    <CorrectIncorrect correctText="1234 AB" />
                  </li>
                  <li>
                    Do not capitalize cardinal directions unless part of a
                    specific place name.
                    <CorrectIncorrect correctText=" De zon komt op in het oosten." />
                    <CorrectIncorrect correctText=" Die avonturier is op de bonnefooi naar het Verre Oosten vertrokken." />
                    <CorrectIncorrect correctText=" Mijn tante woont in Amsterdam-Oost." />
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="web">
                <h2 className="heading">Web</h2>
                <ul>
                  <li>
                    {' '}
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't capitalize them.{' '}
                    <CorrectIncorrect
                      correctText="www.google.co.kr"
                      audioText=' " w w w punt google punt c o punt k r "'
                    />
                    <CorrectIncorrect
                      correctText=" amazon.com"
                      audioText='" amazon dot com "'
                    />
                    <CorrectIncorrect audioText='" amazon punt com "' />
                    <CorrectIncorrect
                      correctText=" http://123.com"
                      audioText='  " h t t p dubbele punt slash slash één twee drie punt com "'
                    />
                    <CorrectIncorrect
                      correctText=" mike@example.org"
                      audioText=' " mike at example dot org "'
                    />
                    <CorrectIncorrect
                      correctText=" Ik hou van pizza. #hungry"
                      audioText='  " ik hou van pizza hashtag hungry "'
                    />
                  </li>
                  <li>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says "backslash".{' '}
                    <CorrectIncorrect
                      correctText="  http://nytimes.com"
                      audioText='" h t t p dubbele punt slash slash n y times dot com "'
                    />
                    <CorrectIncorrect
                      correctText=" http:\\mail.yahoo.com"
                      audioText='" h t t p dubbele punt backslash backslash mail dot yahoo dot com "'
                    />
                    <CorrectIncorrect
                      correctText=" www.forbes.com"
                      audioText=' " w w w forbes dot com "'
                    />
                  </li>
                  <li>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these errors. If the speaker doesn't say
                    the "w"s at all, do not add them.{' '}
                    <CorrectIncorrect
                      correctText="www.google.com"
                      audioText='  " w w dot google dot com "'
                      explainationText=' If the user mistakenly says "ww", transcribe "www".'
                    />
                    <CorrectIncorrect
                      correctText="www.forbes.com"
                      audioText='  " w w w forbes dot com "'
                    />
                  </li>
                  <li>
                    {' '}
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual letters.{' '}
                    <CorrectIncorrect
                      correctText="www.target.com"
                      audioText='" w w w dot t a r g e t dot c o m "'
                    />
                  </li>
                </ul>
              </div>
              <div id="abbreviation">
                <h2 className="heading">Abbreaviation</h2>
                <ul>
                  <li>
                    {' '}
                    Do not abbreviate unless the speaker says an abbreviated
                    form.{' '}
                    <CorrectIncorrect
                      correctText="Laren, Gld"
                      audioText='" laren g l d "'
                      incorrectText="Laren, Gelderland"
                    />
                    <CorrectIncorrect
                      correctText=" et cetera"
                      audioText='" et cetera "'
                      incorrectText="etc."
                    />
                    <CorrectIncorrect
                      correctText=" met ingang van"
                      audioText=' " met ingang van "'
                      incorrectText=" m.i.v."
                    />
                  </li>
                  <li>
                    In acronyms, do not use periods between letters.
                    <CorrectIncorrect
                      correctText="MP3-speler, NASA, NASCAR"
                      explainationText=" brands and products"
                    />
                  </li>
                  <li>
                    {' '}
                    Abbreviate titles when accompanied by last names, not
                    otherwise. "meneer", "de heer" and "mevrouw" are not
                    abbreviated, even when accompanied by a last name.{' '}
                    <CorrectIncorrect correctText=" Ik ken dr. Haring." />
                    <CorrectIncorrect correctText="Prof. Jones is niet beschikbaar." />
                    <CorrectIncorrect correctText=" Dat is een hele meneer." />
                  </li>
                  <li>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If in doubt, do not abbreviate
                    the title.{' '}
                    <CorrectIncorrect
                      correctText=" Sint-Janskathedraal"
                      explainationText=" The cathedral's name is officially "
                      incorrectText="St. Janskathedraal"
                    />
                  </li>
                  <li>
                    If a brand name uses periods, include the periods.
                    <CorrectIncorrect
                      correctText="J. C. Penney"
                      explainationText=" Official brand name as seen in the privacy policy includes periods."
                    />
                  </li>
                  <li>
                    Omit commas from proper names and titles.
                    <CorrectIncorrect
                      correctText="Martin Luther King Jr."
                      explainationText="Martin Luther King, Jr."
                    />
                  </li>
                </ul>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Format" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Format

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
