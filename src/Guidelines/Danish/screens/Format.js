import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

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
            <PageContentHeader currentPage="Longform Danish" />
            <div className="context text">
              <p className={'large-heading'}>Format</p>

              <p className={'text'}>
                <span className={styles.text_2}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={styles.block_328}>
                  <span className={styles.text_2}>
                    Cardinals and ordinals from 0 to 9 are written with letters.
                    Use digits for cardinals and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    ordinals 10 and above. Exceptions are: counting, ranking,
                    maths, address, currencies,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    measures, dates and times. Transcribe all decimal numbers as
                    digits.
                  </span>
                </p>
                <p className={styles.block_329}>
                  Correct: Der er ni elever i klassen.
                </p>
                <p className={styles.block_330}>
                  Incorrect: Der er 9 elever i klassen.
                </p>
                <p className={styles.block_331}>
                  Correct: Der er 13 elever i klassen.
                </p>
                <p className={styles.block_330}>
                  Incorrect: Der er tretten elever i klassen.
                </p>
                <p className={styles.block_332}>
                  <span className={styles.calibre2}>
                    Correct: Jeg har seks hunde og 13 kanariefugle.
                  </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.calibre2}>
                    Incorrect: Jeg har seks hunde og tretten kanariefugle.
                  </span>
                </p>
                <p className={styles.block_334}>
                  Incorrect: Jeg har 6 hunde og 13 kanariefugle.
                </p>
                <p className={styles.block_335}>
                  Explanation: numbers less than 10
                </p>
                <p className={styles.block_336}>
                  Explanation: numbers greater than 9
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      jeg har seks hunde og tretten kanariefugle
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.calibre2}>
                    Explanation: Follow this rule even if the noun phrases with
                    numbers are coordinated.
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_23}>Correct: 101 katte </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>hundrede og en katte </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: anden klasse </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_23}>
                    Correct: Det 20. århundrede{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    det tyvende århundrede{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: 3,14 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>tre komma fjorten </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_17}>
                    Write lists of numbers with digits and without commas.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_23}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: nul et et to tre fem otte tretten
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_23}>Correct: 3 2 1 nu </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: list of numbers, no comma if just counting
                    </span>
                  </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_2}>
                    For long numbers (4+ digits) indicating quantity, insert the
                    relevant separator (comma,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    decimal point, or space, depending on language).
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_23}>Correct: 10.000 </span>
                  <span className={styles.text_24}>Incorrect: 10,000 </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>ti tusind </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_2}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>slashes.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_23}>
                    Correct: De skal bruge 1/2 kg sukker.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: De skal bruge et halvt kg sukker. Incorrect: De
                    skal bruge et 1/2 kg sukker. Incorrect: De skal bruge 1 / 2
                    kg sukker.
                  </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.calibre2}>
                    Incorrect: De skal bruge ½ kg sukker. (bad because it
                    includes the pre-combined fraction ½)
                  </span>
                </p>
                <p className={styles.block_350}>
                  Incorrect: De skal bruge 0,5 kg sukker.
                </p>
                <p className={styles.block_351}>
                  <span className={styles.calibre2}>
                    Correct: Sommerhuset ligger 2/3 kilometer fra stranden
                  </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.calibre2}>
                    Incorrect: Sommerhuset ligger 0,66 kilometer fra stranden.
                  </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      de skal bruge et halvt kilo sukker
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.calibre2}>
                    Explanation: Here, the "et" before "halvt" is part of the
                    fraction, so don't include it in the transcription. Also, be
                    careful not to include spaces or pre-combined fraction
                    characters.
                  </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      sommerhuset ligger to tredjedele kilometer fra stranden
                    </span>
                  </span>
                  <span className={styles.text_18}>"</span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.calibre2}>
                    Incorrect: Sommerhuset ligger to tredjedele kilometer fra
                    stranden.
                  </span>
                </p>
                <p className={styles.block_357}>Correct: 2/3 * 5/16</p>
                <p className={styles.block_358}>
                  Incorrect: to tredjedele * fem sekstendedele
                </p>
                <p className={styles.block_359}>
                  <span className={styles.calibre2}>
                    Incorrect: to tredjedele gange fem sekstendedele
                  </span>
                </p>
                <p className={styles.block_360}>Incorrect: 2/3 gange 5/16</p>
                <p className={styles.block_361}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      to tredjedele gange fem sekstendedele
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_2}>
                    For mixed numbers in math and units &amp; measures, use
                    numerals with "og". If the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speaker doesn't say "og" leave it out.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_23}>Correct: 3 og 1/2 km </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    tre og en halv kilometer{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_24}>
                    Explanation: three and a half kilometers{' '}
                  </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_23}>
                    Correct: Hunden vejede 12 1/2 kg i går.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      hunden vejede tolv et halvt kilo i går
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_23}>
                    Correct: Hun er 2 1/2 år gammel.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    hun er to et halvt år gammel{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_23}>
                    Correct: 1/3 + 3 og 1/2{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: 1/3 + 3 1/2 Incorrect: 1/3 + 3 og en 1/2
                  </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      en tredjedel plus tre og en halv{' '}
                    </span>
                  </span>
                  <span className={styles.text_18}>"</span>
                </p>
                <p className={styles.block_367}>
                  Incorrect: 1/3 + 3 og en halv
                </p>
                <p className={styles.block_92}>Incorrect: 1 / 3 + 3 og 1 / 2</p>
                <p className={styles.block_368}>
                  <span className={styles.text_2}>
                    When referring to items (not units or measures), write
                    fractions out in words. With{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    mixed numbers, write the whole number part out in words if
                    it is under ten, otherwise{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>write it with numerals.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_23}>
                    Correct: Giv mig halvdelen af tærten.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Giv mig 1/2 af tærten.{' '}
                  </span>
                </p>
                <p className={styles.block_370}>
                  Incorrect: Give me 0.5 af tærten.
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_23}>
                    Correct: fem sekstendedele af et æble{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: 5/16 af et æble{' '}
                  </span>
                </p>
                <p className={styles.block_372}>Incorrect: 0,3125 af et æble</p>
                <p className={styles.block_373}>
                  <span className={styles.text_23}>
                    Correct: Hun overvejede halvt at fortsætte.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Hun overvejede 1/2 at fortsætte. Incorrect: Hun
                    overvejde 0,5 at fortsætte.
                  </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    giv mig halvdelen af tærten{' '}
                  </span>
                  <span className={styles.text_18}>" Example audio: " </span>
                  <span className={styles.text_25}>
                    fem sekstendedele af et æble{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.calibre2}>
                    Explanation: Here "halvt" is used more figuratively, and it
                    is written out as a word.
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_17}>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_23}>
                    Correct: Vil du låne mig 2,50 kr.?{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      vil du låne mig to en halv krone{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>"</span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.calibre2}>
                    Correct: Hun købte sommerhuset for $7,5 millioner.
                  </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      hun købte sommerhuset for syv en halv millioner dollars
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_2}>
                    Transcribe percentages using numerals and the % sign. (In
                    the unlikely case that you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    encounter a number of a million or greater used as a
                    percentage, spell it out.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: 2% mælk</p>
                <p className={styles.block_94}>Correct: 1 million procent</p>
                <p className={styles.block_94}>
                  Correct: 50% af småkagerne forsvandt.
                </p>
                <p className={styles.block_141}>
                  <span className={styles.text_17}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_23}>
                    Correct: Super Bowl XLVII{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>super bowl syvogfyrre </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: Kong Christian IV{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    kong christian den fjerde{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_28}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: sæson 3 episode 2{' '}
                  </span>
                  <span className={styles.text_34}>Example audio: " </span>
                  <span className={styles.text_35}>sæson tre episode to </span>
                  <span className={styles.text_34}>" </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_23}>
                    Correct: afsnit 4 sæson 3{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>afsnit fire sæson tre </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: Borgen afsnit 1 sæson 3{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    borgen afsnit fire sæson tre{' '}
                  </span>
                  <span className={styles.text_26}>"</span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_17}>
                    Transcribe Danish, Norwegian and Swedish phone numbers in
                    blocks of two digits.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_23}>Correct: 23 56 70 90 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      treogtyve seksoghalvtreds halvfjerds halvfems
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_23}>
                    Correct: +45 23 56 70 90{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: phone number with country code{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: 0045 23 56 70 90{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: phone number with country code
                  </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_2}>
                    Transcribe other foreign using the most common format in the
                    transcription language,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    with a space after the country code.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_23}>
                    Correct: +1 609-812-3345{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      plus en seks nul ni otte en to tre tre fire fem
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_2}>
                    Transcribe alpha-digit sequences (product codes etc.) in
                    their most natural way{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (possibly several ways accepted). Do not transcribe credit
                    card numbers, etc.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: XT 660 or XT660</p>
                <p className={styles.block_390}>
                  <span className={styles.text_2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_23}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      fem divideret med seks i tredje eller fem divideret med
                      seks i tredje potens
                    </span>
                  </span>
                  <span className={styles.text_26}>"</span>
                </p>
                <p className={styles.block_329}>Correct: Hvad er 5 * 6?</p>
                <p className={styles.block_392}>
                  Incorrect: Hvad er fem gange seks? Incorrect: Hvad er 5 gange
                  6? Incorrect: Hvad er 5 x 6?
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    hvad er fem gange seks{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_36}>
                    <sub className={styles.calibre3}>Correct: √3 </sub>
                  </span>
                  <span className={styles.text_37}>Example audio: " </span>
                  <span className={styles.text_38}>kvadratroden af tre </span>
                  <span className={styles.text_37}>" </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_23}>
                    Correct: Hvor meget er otte timer * $12?{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      hvor meget er otte timer gange tolv dollars
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.calibre2}>
                    Correct: Hvor meget er tre krokodiller divideret med to
                    kamæleoner?
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_398}>
                  <span className={styles.calibre2}>
                    Explanation: Does not sound like a true math expression with
                    useful units.
                  </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_17}>
                    Transcribe kroner as "kr." when specifying a quantity.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_23}>
                    Correct: Kjolen har kostet 200 kr.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      kjolen har kostet to hundrede kroner
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_23}>
                    Correct: Hun gav 100 kr. for den.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      hun gav hundrede kroner for den{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_28}>
                    When a speaker uses words like "dollar" without specifying a
                    quantity, spell them out.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: bare et par euro
                  </span>
                </p>
                <p className={styles.block_140}>
                  Correct: Kan du undvære et par kroner?
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: valutaomregning mellem britiske pund
                  </span>
                </p>
                <p className={styles.block_301}>og amerikanske dollars</p>
                <p className={styles.block_403}>
                  <span className={styles.text_17}>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>
                  <span className={styles.calibre2}>
                    Correct: Jeg har brug for fire eller fem hundrede
                  </span>
                </p>
                <p className={styles.block_315}>dollars.</p>
                <p className={styles.block_404}>
                  <span className={styles.text_23}>
                    Correct: to til fem hundrede dollars{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    to til fem hundrede dollars{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: 9 til 12 euro{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>ni til tolv euro </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: en krone eller to{' '}
                  </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_17}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_23}>
                    Correct: Min familie købte 10 l appelsinjuice{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      min familie købte ti liter appelsinjuice
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_17}>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>
                  <span className={styles.calibre2}>
                    Correct: Organisationen modtog £1 million i
                  </span>
                </p>
                <p className={styles.block_408}>donationer.</p>
                <p className={styles.block_207}>
                  <span className={styles.calibre2}>
                    Incorrect: Organisationen modtog 1.000.000
                  </span>
                </p>
                <p className={styles.block_409}>pund i donationer.</p>
                <p className={styles.block_410}>Correct: Katten vejede 2 kg.</p>
                <p className={styles.block_94}>
                  Correct: Jeg boede der i 6 måneder.
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>format it as such.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_23}>
                    Correct: Benzinprisen er steget med 2,00 kr.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      benzinprisen er steget med to kroner
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_23}>
                    Correct: Mælken koster 9,99.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      mælken koster ni nioghalvfems kroner
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_23}>
                    Correct: Sæt alarmen til 5:45.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      sæt alarmen til fem femogfyrre{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_17}>
                    Common technical abbreviations
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>megabyte - MB </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kilobyte - kB </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>gigabyte - GB </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>terabyte - TB </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_17}>
                    Slang terms (spell them out)
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>bobs</span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>bananer </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>dalere </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_17}>
                    Common measurements of distance and rate
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>millimeter - mm </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>centimeter - cm </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>meter - m </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kilometer - km </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    meter i sekundet - m/s{' '}
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    kilometer i timen - km/t{' '}
                  </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_17}>
                    Common measurements of area
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    kvadratcentimeter - cm²{' '}
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kvadratmeter - m² </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>meter i anden - m² </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    kvadratkilometer - km²{' '}
                  </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_17}>
                    Common scientific terms
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>decibel - dB </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>newton - N </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>joule - J </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ampere - A </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hertz - Hz </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>watt - W </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kilowatt - kW </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kilowatt-time - kWh </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>mol - mol </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>candela - cd </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>lumen - lumen </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>grad(er) - ° </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>fahrenheit - F </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>celsius - C </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kelvin - K</span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_17}>
                    Common measurements of weight and volume
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>milliliter - ml </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>deciliter - dl </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>liter - l </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>teske - tsk. </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>spiseske - spsk. </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>gram - g </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>milligram - mg </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kilogram - kg </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kubikenhed - ³ </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kubikmeter - m³ </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>kvadratmeter - m² </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_420}>
                  <span className={styles.text_17}>
                    Use the following form for transcribing dates.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_23}>
                    Correct: 12. juli 1964{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    tolvte juli nitten fireogtres{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: i efteråret 78{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    i efteråret otteoghalvfjerds{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_422}>Correct: husker du 90'erne</p>
                <p className={styles.block_423}>
                  Incorrect: Husker du halvfemserne?
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    husker du halvfemserne{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_30}>
                    Correct: onsdag den 6. marts{' '}
                  </span>
                  <span className={styles.text_34}>Example audio: " </span>
                  <span className={styles.text_35}>
                    onsdag den sjette marts{' '}
                  </span>
                  <span className={styles.text_34}>" </span>
                  <span className={styles.text_28}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                  </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_23}>Correct: 7.12.2010 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      syv punktum tolv punktum to tusind og ti
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_23}>
                    Correct: Udløbsdatoen er 05.10.2012.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      udløbsdatoen er fem punktum ti punktum to tusind og tolv
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_2}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    so. If the speaker specifies the time of day by saying "om
                    formiddagen", "om{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    eftermiddagen" etc. transcribe the time accordingly.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_23}>Correct: klokken 3:00 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>klokken tre </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: 3:15 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>kvart over tre </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: 6:05 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    fem minutter over seks{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: 3:15 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>tre femten </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: 1:50 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>ti i to </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_23}>Correct: 18:00 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    klokken seks om aftenen{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_431}>Correct: klokken 19:00</p>
                <p className={styles.block_432}>
                  Incorrect: klokken 07:00 om aftenen
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    klokken syv om aftenen{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.calibre2}>
                    Explanation: the speaker specifies the time of day by saying
                    "om aftenen".
                  </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_23}>Correct: 14:00 </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    klokken to om eftermiddagen{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.calibre2}>
                    Explanation: the speaker specifies the time of
                  </span>
                </p>
                <p className={styles.block_436}>
                  day by saying "om eftermiddagen".
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_23}>
                    Correct: et par minutter efter 3:00{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    et par minutter efter tre{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: et kvarter i 2:50{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    et kvarter i øh to halvtreds{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_23}>
                    Correct: ved tolvtiden{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>ved tolvtiden </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_24}>
                    Explanation: Looks unnatural with 12:00tiden.
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_440}>
                  <span className={styles.text_2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>explicitly spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_23}>
                    Correct: 2300 København S{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      treogtyve hundrede københavn s{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_23}>Correct: 2300 Kbh S </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    treogtyve hundrede k b h s{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_17}>
                    Use commas for ENTITY, LOCATION.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>
                  Correct: Baresso, Vesterbrogade
                </p>
                <p className={styles.block_94}>Correct: caféer, 1620</p>
                <p className={styles.block_140}>Correct: Hans Larsen, Århus</p>
                <p className={styles.block_94}>
                  Correct: Dr. Gregersen, Kolding
                </p>
                <p className={styles.block_94}>Correct: frisører, Slagelse</p>
                <p className={styles.block_93}>Correct: vejret, Odense</p>
                <p className={styles.block_94}>Correct: IKEA, Glostrup</p>
                <p className={styles.block_403}>
                  <span className={styles.text_17}>
                    Do not capitalize cardinal directions unless part of a
                    specific place name.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>
                  <span className={styles.calibre2}>
                    Correct: Hun kører på motorvejen mellem Greve
                  </span>
                </p>
                <p className={styles.block_442}>Syd og Køge</p>
                <p className={styles.block_94}>
                  Correct: Familien bor i Randers Nord.
                </p>
                <p className={styles.block_443}>
                  <span className={styles.calibre2}>
                    Correct: Trækfuglene drager mod syd om vinteren.
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_445}>
                  <span className={styles.calibre2}>
                    Explanation: No need to capitalize "syd" because it's not
                    part of a proper place name.
                  </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalize them.</span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_23}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      w w w dot google dot c o dot k r{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_23}>Correct: ikea.dk </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>ikea punktum d k </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_23}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      h t t p colon slash slash en to tre punktum com
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_23}>
                    Correct: niels@eksempel.org{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      niels snabel-a eksempel punktum org
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_23}>
                    Correct: lise@eksempel.org{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    lise at eksempel dot org{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_23}>
                    Correct: Jeg elsker pizza. #sulten{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      jeg elsker pizza hashtag sulten{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_23}>
                    Correct: #sulten Hvornår kommer min pizza?{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      hashtag sulten hvornår kommer min pizza
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.calibre2}>
                    Correct: Jeg er så #sulten at jeg kunne spise en hel pizza.
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      jeg er så hashtag sulten at jeg kunne spise en hel pizza
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_2}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"backslash".</span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_23}>
                    Correct: http://politiken.dk{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      h t t p kolon skråstreg skråstreg politiken punktum d k
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_23}>
                    Correct: http:\\mail.yahoo.dk{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      h t t p kolon backslash backslash mail punktum yahoo
                      punktum d k
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_23}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    w w w facebook dot com{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    errors. If the speaker doesn't say the "w"s at all, do not
                    add them.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_23}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      w w punktum amazon punktum com{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww",
                  </span>
                </p>
                <p className={styles.block_460}>transcribe "www".</p>
                <p className={styles.block_185}>
                  <span className={styles.text_23}>Correct: google.dk </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>google d k </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.calibre2}>
                    Explanation: Also transcribe the dot in an
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.calibre2}>
                    obvious URL, even if the speaker did not{' '}
                  </span>
                </p>
                <p className={styles.block_463}>include it.</p>
                <p className={styles.block_464}>
                  <span className={styles.text_23}>
                    Correct: www.information.dk{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      w w w information punktum d k{' '}
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_23}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>w w facebook dot com </span>
                  <span className={styles.text_26}>"</span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_2}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>letters.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_23}>Correct: www.matas.dk </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      w w w punktum m a t a s punktum d k
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_468}>
                  <span className={styles.text_17}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_23}>
                    Correct: for eksempel et aflåst sideleje{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: fx et aflåst sideleje{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      for eksempel et aflåst sideleje{' '}
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_23}>
                    Correct: fx et aflåst sideleje{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    f x et aflåst sideleje{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_17}>
                    In acronyms, do not use periods between letters.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_23}>Correct: H&amp;M, MP3 </span>
                  <span className={styles.text_24}>
                    Explanation: brands and products{' '}
                  </span>
                  <span className={styles.text_23}>
                    Correct: USA, Washington DC, HC Andersen{' '}
                  </span>
                  <span className={styles.text_24}>
                    Explanation: geographic and personal names{' '}
                  </span>
                  <span className={styles.text_23}>Correct: NASA </span>
                  <span className={styles.text_24}>
                    Explanation: pronounced as a word{' '}
                  </span>
                  <span className={styles.text_23}>Correct: DSB </span>
                </p>
                <p className={styles.block_474}>Correct: AGF</p>
                <p className={styles.block_140}>Correct: wtf, lol, rofl</p>
                <p className={styles.block_185}>
                  <span className={styles.text_23}>Correct: scuba, radar </span>
                  <span className={styles.text_24}>
                    Explanation: extremely lexicalized acronyms
                  </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_17}>
                    If a brand name uses periods, include the periods.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_23}>Correct: J. C. Penney </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Official brand name as seen in the privacy
                      policy includes periods.
                    </span>
                  </span>
                </p>
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
