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
            <PageContentHeader currentPage="Longform Italian" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={styles.block_501}>
                  Use numbers or spelling depending on your intuition as a
                  native speaker of Italian. Normally, we write small numbers
                  (0-9) as words and larger numbers using digits; however, we
                  may write small numbers using digits if they appear in a list,
                  in a mathematical expression, as street numbers, as a measure
                  or time unit.
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Marina dà da mangiare a due o tre gatti del vicinato.
                  </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Quest'anno si sono iscritte solo 13 matricole.
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Sono lunghi 2 cm ciascuno.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Small number, but used for describing{' '}
                  </span>
                </p>
                <p className={styles.block_254}>an exact quantity.</p>
                <p className={styles.block_505}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Costerà 35 milioni di euro.{' '}
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ci sono 7 miliardi di persone sulla terra, di cui 60
                    milioni in Italia.
                  </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Use "7" instead of "sette" to be consistent with the
                    following number "60".
                  </span>
                </p>
                <p className={styles.block_508}>
                  Ordinals from 0 to 9 should be written as words unless they
                  are part of a list of numbers, maths, degrees etc. Above 10,
                  use digits combined with the correct feminine or masculine
                  ordinal indicators a and o. Please don't confuse the masculine
                  ordinal indicator o with the degree sign °.
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il primo è arrivato, il secondo non ancora.
                  </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 10o </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>decimo </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 10a </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>decima </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_511}>
                  Transcribe ordinals used as plural adjectives as words.
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sono arrivati ventesimi.{' '}
                  </span>
                </p>
                <p className={styles.block_513}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0 1 1 2 3 5 8 13 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    zero uno uno due tre cinque otto{' '}
                  </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_13}>tredici </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 4 3 2 1 lancio </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : list of numbers, no comma if just{' '}
                  </span>
                </p>
                <p className={styles.block_517}>counting</p>
                <p className={styles.block_518}>
                  For long numbers (4+ digits) indicating quantity, insert a dot
                  every three digits.
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 10.000 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>diecimila </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_520}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ha bisogno di 1/4 L di acqua.{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Ha bisogno di un quarto di litro di acqua.
                  </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    ha bisogno di un quarto di litro di acqua{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Ha bisogno di 1 / 4 L di acqua. I
                  </span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Ha bisogno di 1⁄4 L di acqua. (bad because it includes the
                    pre-combined fraction 1⁄4) I
                  </span>
                  <span className={styles.text_9}>NCORRECT</span>
                  <span className={styles.text_}>
                    : Ha bisogno di 0,25 L di acqua.{' '}
                  </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Be careful not to include spaces or pre- combined fraction
                    characters.
                  </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Tra 2/3 km, girare a destra.{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Tra due terzi di chilometro, girare a destra. I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Tra 2/3 chilometro, girare a destra. I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Tra due terzi km, girare a destra.{' '}
                  </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 2/3 * 5/16 </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : due terzi x cinque sedicesimi I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : due terzi per cinque sedicesimi I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 2/3 per 5/16 </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    due terzi per cinque sedicesimi{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_528}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Dammi metà della torta.{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Dammi 1/2 della torta. I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Dammi 0,5 della torta.{' '}
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>dammi metà della torta </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: un terzo della mela </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 1/3 della mela I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 0,33 della mela </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>un terzo della mela </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Il pollo era cotto a metà.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Here "a metà" is used more figuratively,{' '}
                  </span>
                </p>
                <p className={styles.block_534}>
                  and it is written out as a word.
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: tre arance e mezzo </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 3,5 arance I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 3 arance e 1/2 I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 3 arance e mezzo </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>tre arance e mezzo </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Sono state fatte 12 torte e mezzo.{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Sono state fatte 12,5 torte. I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Sono state fatte dodici torte e mezzo.{' '}
                  </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    sono state fatte dodici torte e mezzo{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_539}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Puoi prestarmi €2,50?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    puoi prestami due euro e mezzo{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ha acquistato la casa al mare per 7,5 milioni di euro.
                  </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    ha acquistato la casa al mare per sette milioni di euro e
                    mezzo{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_543}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ha completato il 20% del lavoro.{' '}
                  </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: 1 milione percento </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Il 50% dei biscotti è scomparso.{' '}
                  </span>
                </p>
                <p className={styles.block_547}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_548}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Assassin's Creed II </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>assassin's creed due </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Enrico VIII </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>enrico ottavo </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_551}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : stagione 3 episodio 2{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    stagione tre episodio due{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_553}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0039 333 45 67 890 </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: 003 933 34 56789 0 </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    zero zero tre nove tre tre tre quattro cinque sei sette otto
                    nove zero{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: +39 333 45 67 890 </span>
                </p>
                <p className={styles.block_556}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: XT 660 or XT660 </span>
                </p>
                <p className={styles.block_558}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 / 6 ^ 3 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    cinque diviso sei alla terza or cinque{' '}
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_13}>diviso sei al cubo </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Quanto fa 5 * 6? </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Quanto fa cinque per sei? I
                  </span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Quanto fa 5 per 6? I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Quanto fa 5 x 6? </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    quanto fa cinque per sei{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_15}>C</span>
                  <span className={styles.text_16}>ORRECT</span>
                  <span className={styles.text_17}>: √3 </span>
                  <span className={styles.text_18}>E</span>
                  <span className={styles.text_19}>XAMPLE AUDIO</span>
                  <span className={styles.text_18}>: " </span>
                  <span className={styles.text_20}>
                    radice quadrata di tre{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: e ^ -0 = 1 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    e alla meno zero uguale uno{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 4x4 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : person said "quattro per quattro" as in a
                  </span>
                </p>
                <p className={styles.block_566}>truck type.</p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_569}>
                  When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Il valore dell'euro è crollato.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    il valore dell'euro è crollato{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: solo pochi dollari </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : calcolare conversione da euro a yen{' '}
                  </span>
                </p>
                <p className={styles.block_573}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ho bisogno di quattro o cinquecento euro.{' '}
                  </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ha un valore compreso tra i 100 e i 500 dollari.
                  </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    ha un valore compreso tra i cento e i cinquecento dollari{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: da 9 a 12 euro </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>da nove a dodici euro </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: un euro o due </span>
                </p>
                <p className={styles.block_579}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Mia madre ha comprato 3 kg di mele.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    mia madre ha comprato tre chili di{' '}
                  </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_13}>mele </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_582}>
                  Use the symbol "°" for gradi, but do not add "C" unless
                  spoken.
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : È luglio e a Dublino ci sono 7°C.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    è luglio e a dublino ci sono sette{' '}
                  </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_13}>gradi centigradi </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : È luglio e a Dublino ci sono 7°.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    è luglio e a dublino ci sono sette{' '}
                  </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_13}>gradi </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_587}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : La cassiera mi ha dato €3 di resto.{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : la cassiera mi ha dato tre euro di resto{' '}
                  </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Il bambino pesa 4 kg. </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ho vissuto a Parigi per 6 mesi.{' '}
                  </span>
                </p>
                <p className={styles.block_591}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : La benzina costa €1,72 al litro.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    la benzina costa un euro e{' '}
                  </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_13}>settandadue al litro </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Il latte viene €2,55.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    il latte viene due euro e{' '}
                  </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_13}>cinquantacinque </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Sono le 3:30 del pomeriggio.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    sono le tre e trenta del pomeriggio{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_597}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_598}>• un megabyte - 1 MB</p>
                <p className={styles.block_599}>• un kilobyte - 1 kB</p>
                <p className={styles.block_600}>• un gigabyte - 1 GB</p>
                <p className={styles.block_601}>• un terabyte - 1 TB</p>
                <p className={styles.block_602}>Slang terms (spell them out)</p>
                <p className={styles.block_603}>• kilo</p>
                <p className={styles.block_604}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_605}>• un millimetro - 1 mm</p>
                <p className={styles.block_606}>• un centimetro - 1 cm</p>
                <p className={styles.block_607}>• un metro - 1 m</p>
                <p className={styles.block_606}>• un chilometro - 1 km</p>
                <p className={styles.block_608}>
                  • un chilometro orario - 1 km/h
                </p>
                <p className={styles.block_609}>
                  • un chilometro all'ora - 1 km/h
                </p>
                <p className={styles.block_610}>Common measurements of area</p>
                <p className={styles.block_611}>
                  • un centimetro quadrato - 1 cm2
                </p>
                <p className={styles.block_612}>• un metro quadro - 1 m2</p>
                <p className={styles.block_613}>• un metro quadrato - 1 m2</p>
                <p className={styles.block_614}>
                  • un chilometro quadrato - 1 km2
                </p>
                <p className={styles.block_615}>
                  • un chilometro quadro - 1 km2
                </p>
                <p className={styles.block_616}>• un ettaro - 1 ha</p>
                <p className={styles.block_617}>• un'ara - 1 ara</p>
                <p className={styles.block_618}>Common scientific terms</p>
                <p className={styles.block_619}>• un decibel - 1 dB</p>
                <p className={styles.block_620}>• un Newton - 1 N</p>
                <p className={styles.block_621}>• un joule - 1 J</p>
                <p className={styles.block_606}>• un parsec - 1 parsec</p>
                <p className={styles.block_622}>• un ampere - 1 amp</p>
                <p className={styles.block_616}>• un Hertz - 1 Hz</p>
                <p className={styles.block_623}>• un watt - 1 W</p>
                <p className={styles.block_624}>• un chilowatt - 1 kW</p>
                <p className={styles.block_625}>• un mole - 1 mol</p>
                <p className={styles.block_626}>• una candela - 1 cd</p>
                <p className={styles.block_627}>• un lumen - 1 lm</p>
                <p className={styles.block_628}>• un grado - 1°</p>
                <p className={styles.block_629}>• sei gradi - 6°</p>
                <p className={styles.block_630}>• Fahrenheit - F</p>
                <p className={styles.block_631}>• Celsius - C</p>
                <p className={styles.block_632}>• un grado centigrado - 1°C</p>
                <p className={styles.block_607}>• un Kelvin - 1 K</p>
                <p className={styles.block_633}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_634}>• un millilitro - 1 ml</p>
                <p className={styles.block_635}>• un litro - 1 L</p>
                <p className={styles.block_636}>• un grammo - 1 g</p>
                <p className={styles.block_637}>• un milligrammo - 1 mg</p>
                <p className={styles.block_638}>• un centigrammo - 1 cg</p>
                <p className={styles.block_639}>• un kilogrammo - 1 kg</p>
                <p className={styles.block_640}>• un'unità cubica - 1 3</p>
                <p className={styles.block_641}>• un metro cubo - 1 m3</p>
                <p className={styles.block_642}>• un centimetro cubo - 1 cm3</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 12 luglio 1964 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>dodici luglio mille e </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_13}>
                    novecentosessantaquattro{' '}
                  </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Gli anni 70-90 sono sopravvalutati.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    gli anni settanta novanta sono{' '}
                  </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_13}>sopravvalutati </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : È nato negli anni 80.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    è nato negli anni ottanta{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: domenica 17 febbraio </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    domenica diciassette febbraio{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_651}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 12/7/2010 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    dodici barra sette barra duemila e{' '}
                  </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_13}>dieci </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : La data di scadenza era 05/06/88.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    la data di scadenza era zero cinque{' '}
                  </span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_13}>zero sei ottantotto </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_656}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_657}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sono le 3:00. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>sono le tre </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: alle 4:00 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>alle quattro </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3:15 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>tre e un quarto </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 6:05 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>sei e zero cinque </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3:15 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>tre e quindici </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 1:50 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>due meno dieci </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 18:00 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>diciotto e zero zero </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : pochi minuti dopo le 3:00{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    pochi minuti dopo le tre{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_666}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ci vediamo alle 6:45.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    ci vediamo a un quarto alle sette{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: verso le 8:00 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>verso le otto </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Looks unnatural with 8.{' '}
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Abita in Via Piave. </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Abita in V. Piave. I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Abita in v. Piave. I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>: Abita in via Piave. </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: a Piazza Dante </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Via Modigliani 4B, Albizzate, Varese{' '}
                  </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Via Pirandello 29 bis </span>
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Abitano al 751 Jefferson Street a New York.
                  </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : 1600 Amphitheatre Parkway, Mountain View, California 94043
                  </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    california novantaquattro zero quattro tre{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_678}>
                  In an address, transcribe the word "numero" or "numero civico"
                  as "n.".
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Abito in Via Roma n. 20 a Napoli{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    abito in via roma numero venti a{' '}
                  </span>
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_13}>napoli </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_680}>
                  If a street name contains a number, capitalize it as with
                  proper nouns. If the number is part of a date, look for its
                  official format (cardinal, ordinal, Roman number) on Google
                  Maps Italy. If no specific context is given in the audio and
                  more than one number format is possible, choose the most
                  commonly used format (search for the different options on
                  google.it and pick the one that produces more results).
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Via Tre Castelli </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Via XX Settembre, Brignole, Genova{' '}
                  </span>
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Piazza Primo Maggio </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "Primo Maggio": 1.340.000 results; "1 Maggio": 448k; "1o
                    Maggio": 448k; "I Maggio": 171k
                  </span>
                </p>
                <p className={styles.block_684}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: McDonald's, Via Roma </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: bar, 50092 </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Angelo Rossi, Savona </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: dott. Riccardi, Como </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: Craigslist, Detroit </span>
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>: meteo, Ravenna </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : seghe circolari, Airola{' '}
                  </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : orari per Il ritorno del re, Firenze{' '}
                  </span>
                </p>
                <p className={styles.block_692}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Via Caduti del Lavoro 3, 56122 Pisa{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : No comma between a postal code and a{' '}
                  </span>
                </p>
                <p className={styles.block_693}>town.</p>
                <p className={styles.block_694}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Via Roma, Albosaggia (SO){' '}
                  </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Via Persico, Roma, Garbatella{' '}
                  </span>
                </p>
                <p className={styles.block_696}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Prosegui fino all'uscita Firenze Sud.{' '}
                  </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Sono stato nella zona nord di Caserta.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : No need to capitalize "nord" because it's
                  </span>
                </p>
                <p className={styles.block_699}>
                  not part of a proper place name.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_670}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.it </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    w w w punto google punto it{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: amazon.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>amazon punto com </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http://123.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    h t t p due punti sbarra sbarra uno{' '}
                  </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_13}>due tre punto com </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: alessandro@gmail.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    alessandro chiocciola gmail punto{' '}
                  </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_13}>com </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Amo la pizza. #affamato{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    amo la pizza hashtag affamato{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : #affamato Dov'è la mia pizza?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    hashtag affamato dov'è la mia{' '}
                  </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_13}>pizza </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_}>
                    : Sono così #affamato che potrei mangiare una pizza intera.
                  </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    sono così hashtag affamato che potrei mangiare una pizza
                    intera{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_712}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http://repubblica.it </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    h t t p due punti slash slash{' '}
                  </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_13}>repubblica punto it </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http:\mail.yahoo.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    h t t p backslash backslash mail{' '}
                  </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_13}>punto yahoo punto com </span>
                  <span className={styles.text_14}>" </span>
                </p>
                <p className={styles.block_717}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.forbes.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    w w w forbes punto com{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_718}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.amazon.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    w w punto amazon punto com{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : If the user mistakenly says "ww", transcribe "www".
                  </span>
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: google.it </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>google punto it </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_722}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Also transcribe the dot in an obvious URL, even if the
                    speaker did not include it.
                  </span>
                </p>
                <p className={styles.block_723}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.libero.it </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>w w w libero punto it </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.facebook.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    w w facebook punto com{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_725}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_726}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.target.com </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    w w w punto t a r g e t punto c o m{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_728}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Juventus versus Fiorentina{' '}
                  </span>
                  <span className={styles.text_7}>I</span>
                  <span className={styles.text_8}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : Juventus vs. Fiorentina{' '}
                  </span>
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_9}>XAMPLE AUDIO</span>
                  <span className={styles.text_}>: " </span>
                  <span className={styles.text_1}>
                    juventus versus fiorentina{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Juventus vs Fiorentina{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    juventus v s fiorentina{' '}
                  </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_732}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: BMW, MP3 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: brands and products </span>
                </p>
                <p className={styles.block_734}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : US, USA, Washington DC, John F Kennedy{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : geographic and personal names{' '}
                  </span>
                </p>
                <p className={styles.block_735}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : NASA, UNESCO, FIAT, ONU{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: pronounced as words </span>
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: omg, lol, rofl </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>
                    o emme gi [pause] elle o elle [pause]{' '}
                  </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_12}>erre o effe elle </span>
                  <span className={styles.text_10}>" </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : interjection acronyms{' '}
                  </span>
                </p>
                <p className={styles.block_738}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: lol </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XAMPLE AUDIO</span>
                  <span className={styles.text_10}>: " </span>
                  <span className={styles.text_12}>lol </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_739}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: modem, radar </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : extremely lexicalized acronyms{' '}
                  </span>
                </p>
                <p className={styles.block_740}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: E. Leclerc </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official brand name as seen in the{' '}
                  </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_7}>
                    privacy policy includes periods.{' '}
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
