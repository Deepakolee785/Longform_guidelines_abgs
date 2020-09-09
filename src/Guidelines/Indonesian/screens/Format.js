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
            <PageContentHeader currentPage="Longform Indonesian" />
            <div className="content text">
              <p className="large-heading">Format</p>
              <p>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={styles.block_425}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.
                </p>
                <p className={styles.block_426}>
                  Correct: Ada sembilan siswa di kelas.
                </p>
                <p className={styles.block_427}>
                  Explanation: numbers less than 10
                </p>
                <p className={styles.block_329}>
                  Correct: Ada 13 siswa di kelas.
                </p>
                <p className={styles.block_426}>
                  Explanation: numbers greater than 9
                </p>
                <p className={styles.block_276}>
                  Correct: Saya punya enam anjing dan 12 parkit.
                </p>
                <p className={styles.block_428}>
                  Explanation: Follow this rule even if the noun phrases with
                  numbers are coordinated.
                </p>
                <p className={styles.block_32}>Correct: 101 kucing</p>
                <p className={styles.block_127}>
                  Example audio: " seratus satu kucing "
                </p>
                <p className={styles.block_429}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_430}>
                  Correct: Mereka membeli 9 atau 10 ikan mas dari toko hewan
                  peliharaan.
                </p>
                <p className={styles.block_431}>
                  Correct: Kita akan membutuhkan empat gerobak dorong dan 14
                  sekop.
                </p>
                <p className={styles.block_432}>
                  Correct: Mereka berbicara tiga atau empat bahasa.
                </p>
                <p className={styles.block_130}>
                  Correct: Ada 7 hingga 14 pohon jeruk di kebun.
                </p>
                <p className={styles.block_433}>
                  If a large number consists of only a number followed by
                  "juta", "miliar", "triliun", or higher, then transcribe as a
                  numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_434}>Correct: 7 miliar</p>
                <p className={styles.block_201}>
                  Example audio: " tujuh miliar "
                </p>
                <p className={styles.block_294}>Correct: 1 juta angsa</p>
                <p className={styles.block_70}>
                  Example audio: " satu juta angsa "
                </p>
                <p className={styles.block_435}>Correct: 1.000 angsa</p>
                <p className={styles.block_436}>
                  Example audio: " seribu angsa "
                </p>
                <p className={styles.block_418}>Correct: 7,18 miliar</p>
                <p className={styles.block_223}>
                  Example audio: " tujuh koma delapan miliar "
                </p>
                <p className={styles.block_437}>Correct: 7.234.435</p>
                <p className={styles.block_1}>
                  Example audio: " tujuh juta dua ratus tiga puluh empat ribu
                  empat ratus tiga puluh lima "
                </p>
                <p className={styles.block_438}>Correct: Rp1,5 juta</p>
                <p className={styles.block_439}>
                  Example audio: " satu koma lima juta rupiah "
                </p>
                <p className={styles.block_438}>Correct: Rp1,5 juta</p>
                <p className={styles.block_440}>
                  Incorrect: satu setengah juta rupiah
                </p>
                <p className={styles.block_134}>
                  Incorrect: 1 dan 1/2 juta rupiah
                </p>
                <p className={styles.block_441}>
                  Incorrect: 1 setengah juta rupiah
                </p>
                <p className={styles.block_327}>
                  Example audio: " satu setengah juta rupiah "
                </p>
                <p className={styles.block_442}>
                  Explanation: For mixed numbers before "juta", "miliar", etc.,
                  use decimals.
                </p>
                <p className={styles.block_260}>Correct: Rp12,25 juta</p>
                <p className={styles.block_443}>
                  Example audio: " dua belas koma dua lima juta rupiah "
                </p>
                <p className={styles.block_405}>
                  Example audio: " dua belas seperempat juta rupiah "
                </p>
                <p className={styles.block_444}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_445}>Correct: 0 1 1 2 3 5 8 13</p>
                <p className={styles.block_246}>
                  Explanation: zero one one two three five eight thirteen
                </p>
                <p className={styles.block_205}>Correct: 5 4 3 2 1 luncurkan</p>
                <p className={styles.block_446}>
                  Explanation: list of numbers, no comma if just counting
                </p>
                <p className={styles.block_447}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).
                </p>
                <p className={styles.block_448}>Correct: 100.000</p>
                <p className={styles.block_134}>
                  Example audio: " seratus ribu "
                </p>
                <p className={styles.block_449}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_60}>
                  Correct: Mereka membutuhkah 1/4 kg gula pasir.
                </p>
                <p className={styles.block_409}>
                  Incorrect: Mereka membutuhkan 250 gr gula pasir.
                </p>
                <p className={styles.block_377}>
                  Incorrect: Mereka membutuhkan satu per empat kilogram gula
                  pasir.
                </p>
                <p className={styles.block_450}>
                  Incorrect: Mereka membutuhkan 1 / 4 kg gula pasir.
                </p>
                <p className={styles.block_112}>
                  Incorrect: Mereka membutuhkan 1⁄4 kg gula pasir.(bad because
                  it includes the pre- combined fraction 1⁄4)
                </p>
                <p className={styles.block_450}>
                  Incorrect: Mereka membutuhkan 0,25 kg gula pasir.
                </p>
                <p className={styles.block_451}>
                  Example audio: " mereka membutuhkan seperempat kilogram gula
                  pasir "
                </p>
                <p className={styles.block_452}>
                  Explanation: Be careful not to include spaces or pre-combined
                  fraction characters.
                </p>
                <p className={styles.block_93}>
                  Correct: Setelah 3/4 km, belok kanan.
                </p>
                <p className={styles.block_453}>
                  Incorrect: Setelah tiga per empat kilometer, belok kanan.
                </p>
                <p className={styles.block_359}>
                  Incorrect: Setelah 3/4 kilometer, belok kanan.
                </p>
                <p className={styles.block_108}>
                  Incorrect: Setelah 750 m, belok kanan.
                </p>
                <p className={styles.block_188}>
                  Example audio: " setelah tiga per empat kilometer belok kanan
                  "
                </p>
                <p className={styles.block_66}>
                  Correct: Setelah dua 2/3 km, belok kiri.
                </p>
                <p className={styles.block_454}>
                  Incorrect: Setelah dua per tiga kilometer, belok kiri.
                </p>
                <p className={styles.block_455}>
                  Incorrect: Setelah 2/3 kilometer, belok kiri.
                </p>
                <p className={styles.block_19}>
                  Incorrect: Setelah dua per tiga km, beok kiri.
                </p>
                <p className={styles.block_456}>
                  Example audio: " setelah dua per tiga kilometer belok kiri "
                </p>
                <p className={styles.block_457}>Explanation:</p>
                <p className={styles.block_145}>Correct: 2/3 * 5/16</p>
                <p className={styles.block_327}>
                  Incorrect: dua per tiga * lima per enam belas
                </p>
                <p className={styles.block_234}>
                  Incorrect: dua per tiga kali lima per enam belas
                </p>
                <p className={styles.block_312}>Incorrect: 2/3 kali 5/16</p>
                <p className={styles.block_458}>
                  Example audio: " dua per tiga kali lima per enam belas "
                </p>
                <p className={styles.block_459}>
                  Explanation: Another word for "kali" is "dikali".
                </p>
                <p className={styles.block_460}>
                  Correct: Kita membutuhkan sebuah palu 5/16 inci.
                </p>
                <p className={styles.block_461}>
                  Example audio: " kita membutuhkan sebuah palu lima per enam
                  belas inci "
                </p>
                <p className={styles.block_462}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals with "and".
                </p>
                <p className={styles.block_463}>Correct: 3 1/2 km</p>
                <p className={styles.block_224}>
                  Example audio: " tiga setengah kilometer "
                </p>
                <p className={styles.block_464}>
                  Explanation: three and a half kilometers
                </p>
                <p className={styles.block_91}>Correct: 3 1/4 kg</p>
                <p className={styles.block_327}>
                  Example audio: " tiga seperempat kilogram "
                </p>
                <p className={styles.block_366}>
                  Explanation: three and a quarter kilogram
                </p>
                <p className={styles.block_113}>
                  Correct: Sapi itu memiliki berat 2 1/2 ton.
                </p>
                <p className={styles.block_465}>
                  Explanation: The cow weighed twelve and a third pounds.
                </p>
                <p className={styles.block_325}>Correct: umur 5 1/2 bulan</p>
                <p className={styles.block_208}>Incorrect: umur 51/2 bulan</p>
                <p className={styles.block_270}>Incorrect: umur 5,5 bulan</p>
                <p className={styles.block_466}>
                  Example audio: " umur lima setengah bulan "
                </p>
                <p className={styles.block_342}>Correct: 1/3 + 3 1/2</p>
                <p className={styles.block_467}>Incorrect: 1/3 + 3 setengah</p>
                <p className={styles.block_221}>Incorrect: 1 / 3 + 3 1 / 2</p>
                <p className={styles.block_468}>
                  Example audio: " satu per tiga ditambah tiga setengah "
                </p>
                <p className={styles.block_469}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_371}>
                  Correct: Berikan saya setengah mangga itu.
                </p>
                <p className={styles.block_214}>
                  Incorrect: Berikan saya 1/2 mangga itu.
                </p>
                <p className={styles.block_470}>
                  Incorrect: Berikan saya 0,5 mangga itu.
                </p>
                <p className={styles.block_191}>
                  Example audio: " berikan saya setengah mangga itu "
                </p>
                <p className={styles.block_471}>
                  Explanation: In spoken Indonesian, it is common to use
                  "separuh" rather than "setengah" in this context.
                </p>
                <p className={styles.block_472}>
                  Correct: seperdelapan dari kue itu
                </p>
                <p className={styles.block_262}>Incorrect: 1/8 dari kue itu</p>
                <p className={styles.block_97}>Incorrect: 0,125 dari kue itu</p>
                <p className={styles.block_473}>
                  Example audio: " seperdelapan kue itu "
                </p>
                <p className={styles.block_167}>
                  Correct: Saya setengah yakin.
                </p>
                <p className={styles.block_292}>Incorrect: Saya 1/2 yakin.</p>
                <p className={styles.block_292}>Incorrect: Saya 0,5 yakin.</p>
                <p className={styles.block_474}>
                  Correct: Saya setengah tersenyum menanggapinya.
                </p>
                <p className={styles.block_475}>
                  Explanation: Here "setengah" is used more figuratively, and it
                  is written out as a word.
                </p>
                <p className={styles.block_205}>Correct: tiga setengah jeruk</p>
                <p className={styles.block_353}>Incorrect: 3,5 jeruk</p>
                <p className={styles.block_476}>Incorrect: 3 1/2 jeruk</p>
                <p className={styles.block_477}>Incorrect: 3 setengah jeruk</p>
                <p className={styles.block_310}>
                  Explanation: tiga setengah jeruk
                </p>
                <p className={styles.block_268}>
                  Correct: Di toko itu, 12 setengah loyang kue bolu sedang
                  dibuat.
                </p>
                <p className={styles.block_478}>
                  Incorrect: Di toko itu, 12,5 loyang kue bolu sedang dibuat.
                </p>
                <p className={styles.block_479}>
                  Incorrect: Di toko itu, dua belas setengah loyang kue bolu
                  sedang dibuat.
                </p>
                <p className={styles.block_480}>
                  Example audio: " di toko itu dua belas setengah loyang kue
                  bolu sedang dibuat "
                </p>
                <p className={styles.block_481}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_482}>
                  Correct: Bisakah kamu meminjamin saya Rp2,5 jutaiya?
                </p>
                <p className={styles.block_483}>
                  Example audio: " bisakah kamu meminjamkan saya dua ribu lima
                  ratus rupiah "
                </p>
                <p className={styles.block_88}>
                  Correct: Dia membeli rumah itu dengan harga Rp7,5 miliar.
                </p>
                <p className={styles.block_484}>
                  Example audio: " dia membeli rumah itu dengan harga tujuh koma
                  lima miliar rupiah "
                </p>
                <p className={styles.block_485}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_32}>Correct: 2% protein</p>
                <p className={styles.block_109}>Correct: 1 juta persen</p>
                <p className={styles.block_455}>
                  Correct: 50% barang saya sudah diangkut.
                </p>
                <p className={styles.block_486}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_487}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_169}>
                  Correct: Pekan Olahraga Nasional IX
                </p>
                <p className={styles.block_488}>
                  Example audio: " pekan olahraga nasional sembilan "
                </p>
                <p className={styles.block_204}>
                  Correct: Sultan Hamengkubuwono X
                </p>
                <p className={styles.block_489}>
                  Example audio: " sultan hamengkubuwono sepuluh "
                </p>
                <p className={styles.block_490}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_435}>Correct: episode 114</p>
                <p className={styles.block_170}>
                  Example audio: " episode seratus empat belas "
                </p>
                <p className={styles.block_491}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_492}>
                  Correct: +60 3 2161 1234 (international number for Kuala
                  Lumpur, Malaysia)
                </p>
                <p className={styles.block_493}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_262}>Correct: XT 660 or XT660</p>
                <p className={styles.block_494}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_495}>Correct: 5 / 6 ^ 3</p>
                <p className={styles.block_496}>
                  Example audio: " lima dibagi enam pangkat tiga "
                </p>
                <p className={styles.block_295}>Correct: 5 * 6 berapa?</p>
                <p className={styles.block_497}>
                  Incorrect: Lima kali enam berapa?
                </p>
                <p className={styles.block_498}>Incorrect: 5 kali 6 berapa?</p>
                <p className={styles.block_209}>Incorrect: 5 x 6 berapa?</p>
                <p className={styles.block_113}>
                  Example audio: " lima kali enam berapa "
                </p>
                <p className={styles.block_499}>Correct: √3</p>
                <p className={styles.block_71}>Example audio: " akar tiga "</p>
                <p className={styles.block_314}>
                  Correct: 8 jam * Rp2.500 berapa?
                </p>
                <p className={styles.block_500}>
                  Example audio: " delapan jam kali dua ribu lima ratus rupiah
                  berapa "
                </p>
                <p className={styles.block_501}>
                  Correct: Bagaimana kalau tiga kuda dibagi oleh dua buaya?
                </p>
                <p className={styles.block_502}>
                  Explanation: Does not sound like a true math expression with
                  useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_503}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_138}>
                  When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_504}>
                  Correct: Saya memiliki utang sebanyak Rp1 juta kepadamu. Ini
                  cek yang biasa kamu cairkan dalam rupiah.
                </p>
                <p className={styles.block_69}>
                  Example audio: " saya memiliki utang sebanyak satu juta rupiah
                  kepadamu ini cek yang bisa kamu cairkan dalam rupiah "
                </p>
                <p className={styles.block_240}>
                  Correct: hanya beberapa rupiah
                </p>
                <p className={styles.block_505}>
                  Correct: konversi mata uang rupiah ke dalam ringgit
                </p>
                <p className={styles.block_506}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_287}>
                  Correct: Saya membutuhkan empat atau lima dolar.
                </p>
                <p className={styles.block_367}>
                  Correct: satu sampai lima ratus dolar
                </p>
                <p className={styles.block_329}>
                  Correct: 100 sampai 500 dolar
                </p>
                <p className={styles.block_289}>
                  Example audio: " seratus sampai lima ratus dolar "
                </p>
                <p className={styles.block_498}>Correct: 9 sampai 12 euro</p>
                <p className={styles.block_450}>
                  Example audio: " sembilan sampai dua belas euro "
                </p>
                <p className={styles.block_71}>Correct: satu dolar atau dua</p>
                <p className={styles.block_507}>
                  Write out the word "derajat" for temperatures.
                </p>
                <p className={styles.block_287}>
                  Correct: Suhu di Jakarta siang ini 31 derajat Celsius.
                </p>
                <p className={styles.block_508}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_440}>
                  Correct: Ayah membeli 10 kg beras.
                </p>
                <p className={styles.block_509}>
                  Example audio: " ayah membeli sepuluh kilogram beras "
                </p>
                <p className={styles.block_417}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_421}>
                  Correct: Penggalangan dana itu menghasilkan Rp1 miliar donasi.
                </p>
                <p className={styles.block_510}>
                  Incorrect: Penggalangan dana itu menghasilkan Rp1.000.000.000
                  donasi.
                </p>
                <p className={styles.block_310}>
                  Correct: Berat adik sudah 10 kg.
                </p>
                <p className={styles.block_450}>
                  Correct: Saya belajar bahasa Korea selama 6 bulan.
                </p>
                <p className={styles.block_511}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_512}>
                  Correct: Harga bahan bakar minyak naik menjadi Rp12.000 per
                  liter.
                </p>
                <p className={styles.block_513}>
                  Example audio: " harga bahan bakar minyak naik menjadi dua
                  belas ribu per liter "
                </p>
                <p className={styles.block_74}>
                  Correct: Harga susu itu Rp2.000.
                </p>
                <p className={styles.block_365}>
                  Example audio: " harga susu itu dua ribu "
                </p>
                <p className={styles.block_158}>
                  Correct: Set alarm jam 05.45.
                </p>
                <p className={styles.block_122}>
                  Example audio: " set alarm jam lima empat lima "
                </p>
                <p className={styles.block_514}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_202}>megabit - MB</p>
                <p className={styles.block_515}>kilobit - kB</p>
                <p className={styles.block_516}>gigabit - GB</p>
                <p className={styles.block_517}>terabit - TB</p>
                <p className={styles.block_518}>Slang terms (spell them out)</p>
                <p className={styles.block_519}>kilo</p>
                <p className={styles.block_520}>senti</p>
                <p className={styles.block_521}>goceng</p>
                <p className={styles.block_218}>
                  m (billion of [units in currency])
                </p>
                <p className={styles.block_522}>perak</p>
                <p className={styles.block_523}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_524}>inci - in</p>
                <p className={styles.block_521}>kaki - ft</p>
                <p className={styles.block_525}>yard - yd</p>
                <p className={styles.block_526}>mil - mi</p>
                <p className={styles.block_15}>milimeter - mm</p>
                <p className={styles.block_527}>sentimeter - cm</p>
                <p className={styles.block_528}>meter - m</p>
                <p className={styles.block_363}>kilometer - km</p>
                <p className={styles.block_529}>mil per jam - mph</p>
                <p className={styles.block_530}>mil sejam - mph</p>
                <p className={styles.block_285}>kilometer per jam - km/h</p>
                <p className={styles.block_531}>Common measurements of area</p>
                <p className={styles.block_434}>inci persegi - in2</p>
                <p className={styles.block_532}>kaki persegi - ft2</p>
                <p className={styles.block_532}>mil persegi - mi2</p>
                <p className={styles.block_241}>sentimeter persegi - cm2</p>
                <p className={styles.block_437}>meter persegi - m2</p>
                <p className={styles.block_437}>meter persegi - m2</p>
                <p className={styles.block_94}>kilometer persegi - km2</p>
                <p className={styles.block_533}>are - acre</p>
                <p className={styles.block_534}>Common scientific terms</p>
                <p className={styles.block_535}>desibel - dB</p>
                <p className={styles.block_536}>Newton - N</p>
                <p className={styles.block_521}>Joule - J</p>
                <p className={styles.block_537}>parsec - parsec</p>
                <p className={styles.block_393}>ampere - amp</p>
                <p className={styles.block_528}>Hertz - Hz</p>
                <p className={styles.block_538}>Watt - W</p>
                <p className={styles.block_202}>Kilowatt - kW</p>
                <p className={styles.block_515}>mole - mol</p>
                <p className={styles.block_457}>Candela - cd</p>
                <p className={styles.block_539}>lumen - lm</p>
                <p className={styles.block_110}>Centigrade - C</p>
                <p className={styles.block_540}>Kelvin - K</p>
                <p className={styles.block_541}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_542}>pon - pon</p>
                <p className={styles.block_543}>ons - ons</p>
                <p className={styles.block_56}>quart - q</p>
                <p className={styles.block_76}>liter - L</p>
                <p className={styles.block_434}>sendok teh - sdt</p>
                <p className={styles.block_476}>sendok makan - sdm</p>
                <p className={styles.block_538}>gram - g</p>
                <p className={styles.block_393}>miligram - mg</p>
                <p className={styles.block_544}>kilogram - kg</p>
                <p className={styles.block_545}>kubik - 3</p>
                <p className={styles.block_91}>meter kubik - m3</p>
                <p className={styles.block_546}>inci kubik - in3</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_547}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_46}>Correct: 12 Juli 1964</p>
                <p className={styles.block_548}>
                  Example audio: " dua belas juli seribu sembilan ratus enam
                  puluh empat "
                </p>
                <p className={styles.block_41}>Correct: akhir '98</p>
                <p className={styles.block_455}>
                  Example audio: " akhir sembilan delapan "
                </p>
                <p className={styles.block_207}>Correct: tren tahun '90-an</p>
                <p className={styles.block_549}>
                  Example audio: " tren tahu sembilan puluhan "
                </p>
                <p className={styles.block_550}>Correct: Rabu, 6 Maret</p>
                <p className={styles.block_196}>
                  Example audio: " rabu enam maret "
                </p>
                <p className={styles.block_551}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_438}>Correct: 7/12/2010</p>
                <p className={styles.block_552}>
                  Example audio: " tujuh garis miring dua belas garis miring dua
                  ribu sepuluh "
                </p>
                <p className={styles.block_409}>
                  Correct: Masa kedaluwarsanya adalah 05/10/2012.
                </p>
                <p className={styles.block_553}>
                  Example audio: " masa kedaluwarsanya adalah lima sepuluh dua
                  ribu dua belas "
                </p>
                <p className={styles.block_554}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_555}>
                  Write times in hh.mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_58}>Correct: pukul 03.00</p>
                <p className={styles.block_556}>
                  Example audio: " pukul tiga "
                </p>
                <p className={styles.block_207}>Correct: pada pukul 04.00</p>
                <p className={styles.block_44}>
                  Example audio: " pada pukul empat "
                </p>
                <p className={styles.block_557}>Correct: 03.15</p>
                <p className={styles.block_558}>
                  Example audio: " tiga lima belas "
                </p>
                <p className={styles.block_110}>Correct: 06.05</p>
                <p className={styles.block_367}>
                  Example audio: " nol enam nol lima "
                </p>
                <p className={styles.block_110}>Correct: 03.15</p>
                <p className={styles.block_197}>
                  Example audio: " tiga seperempat "
                </p>
                <p className={styles.block_110}>Correct: 01.50</p>
                <p className={styles.block_213}>
                  Example audio: " dua kurang sepuluh "
                </p>
                <p className={styles.block_58}>Correct: pukul 18.00</p>
                <p className={styles.block_559}>
                  Example audio: " pukul delapan belas nol nol "
                </p>
                <p className={styles.block_127}>
                  Correct: beberapa menit setelah jam 3
                </p>
                <p className={styles.block_287}>
                  Example audio: " beberapa menit setelah jam tiga "
                </p>
                <p className={styles.block_557}>Correct: 02.45</p>
                <p className={styles.block_234}>
                  Example audio: " jam tiga kurang seperempat "
                </p>
                <p className={styles.block_285}>Correct: sekitar jam 6-an</p>
                <p className={styles.block_66}>
                  Example audio: " sekitar jam enaman "
                </p>
                <p className={styles.block_61}>
                  Explanation: Looks unnatural with 06.00-an.
                </p>
                <p className={styles.block_560}>
                  Use "pagi", "siang", "sore", or "malam" if spoken.
                </p>
                <p className={styles.block_262}>Correct: pukul 03.00 sore</p>
                <p className={styles.block_558}>
                  Example audio: " pukul tiga sore "
                </p>
                <p className={styles.block_343}>Correct: pada jam 04.00 pagi</p>
                <p className={styles.block_397}>
                  Example audio: " pada jam empat pagi "
                </p>
                <p className={styles.block_561}>Correct: 03.15 pagi</p>
                <p className={styles.block_108}>
                  Example audio: " tiga lima belas pagi "
                </p>
                <p className={styles.block_562}>Correct: 06.05 sore</p>
                <p className={styles.block_563}>
                  Example audio: " enam lewat lima sore "
                </p>
                <p className={styles.block_564}>
                  Some of these are written out because it would be unnatural to
                  abbreviate them but must still be flagged as units because we
                  want to have numeric values written in numerals before them.
                </p>
                <p className={styles.block_91}>detik - second(s)</p>
                <p className={styles.block_41}>menit - minute(s)</p>
                <p className={styles.block_565}>jam - hour(s)</p>
                <p className={styles.block_566}>hari - day(s)</p>
                <p className={styles.block_41}>minggu - week(s)</p>
                <p className={styles.block_527}>pekan - week(s)</p>
                <p className={styles.block_91}>bulan - month(s)</p>
                <p className={styles.block_567}>tahun - year(s)</p>
                <p className={styles.block_218}>
                  windu - unit of time (in 8 years)
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_568}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_569}>
                  Use commas between address, town, district, and province.
                </p>
                <p className={styles.block_224}>
                  Correct: Cipondoh, Kota Tangerang, Banten
                </p>
                <p className={styles.block_570}>
                  Correct: Tembalang, Kota Semarang kode pos 50275, Jawa Tengah
                </p>
                <p className={styles.block_402}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_571}>
                  Correct: Plaza Senayan, Jalan Asia Afrika
                </p>
                <p className={styles.block_97}>Correct: pom bensin, km 25</p>
                <p className={styles.block_572}>
                  Example audio: " pom bensin kilometer dua lima "
                </p>
                <p className={styles.block_573}>
                  Correct: Yeni Nuraeni, Bandung
                </p>
                <p className={styles.block_74}>
                  Correct: Dr. Dian Yulianti, Jakarta
                </p>
                <p className={styles.block_93}>
                  Correct: Universitas Indonesia, Depok
                </p>
                <p className={styles.block_241}>Correct: cuaca, Mataram</p>
                <p className={styles.block_208}>Correct: pohon duku, Tegal</p>
                <p className={styles.block_89}>
                  Correct: acara peresmian Stadion Panahan, Solo
                </p>
                <p className={styles.block_574}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_464}>
                  Correct: Kami tinggal di Jakarta Selatan.
                </p>
                <p className={styles.block_575}>
                  Correct: Ayah akan menghadiri acara di Lombok Utara.
                </p>
                <p className={styles.block_576}>
                  Correct: Saya akan menunggumu di bagian utara gedung ini.
                </p>
                <p className={styles.block_577}>
                  Explanation: No need to capitalize "utara" because it's not
                  part of a proper place name.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.google.co.kr </span>
                </p>
                <p className={styles.block_580}>
                  Example audio: " w w w dot google dot ko dot k r "
                </p>
                <p className={styles.block_260}>Correct: amazon.com</p>
                <p className={styles.block_581}>
                  Example audio: " amazon dot kom "
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>http://123.com </span>
                </p>
                <p className={styles.block_583}>
                  Example audio: " h t t p titik dua garis miring garis miring
                  satu dua tiga dot kom "
                </p>
                <p className={styles.block_262}>Correct: maf@contoh.org</p>
                <p className={styles.block_584}>
                  Example audio: " maf et contoh dot org "
                </p>
                <p className={styles.block_262}>Correct: maf@contoh.org</p>
                <p className={styles.block_80}>
                  Example audio: " maf et contoh dot o r g "
                </p>
                <p className={styles.block_585}>
                  Correct: Saya suka bakso. #lapar
                </p>
                <p className={styles.block_130}>
                  Example audio: " saya suka bakso tagar lapar "
                </p>
                <p className={styles.block_586}>
                  Explanation: "Tagar" is the short version of "tanda pagar".
                  Both can be used for hastag.
                </p>
                <p className={styles.block_587}>
                  Correct: #lapar Mana bakso saya?
                </p>
                <p className={styles.block_40}>
                  Example audio: " tagar lapar mana bakso saya "
                </p>
                <p className={styles.block_588}>
                  Correct: Saya sangat #lapar saya bisa menghabiskan sepuluh
                  mangkuk bakso.
                </p>
                <p className={styles.block_589}>
                  Example audio: " saya sangat tagar lapar saya bisa
                  menghabiskan sepuluh mangkuk bakso "
                </p>
                <p className={styles.block_590}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>http://vimela.com </span>
                </p>
                <p className={styles.block_592}>
                  Example audio: " h t t p titik dua garis miring garis miring
                  vimela dot kom "
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>
                    http:\\hiburan.detik.com{' '}
                  </span>
                </p>
                <p className={styles.block_594}>
                  Example audio: " h t t p titik dua garis miring terbalik garis
                  miring terbalik hiburan dot detik dot kom "
                </p>
                <p className={styles.block_125}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.ayahbunda.com </span>
                </p>
                <p className={styles.block_559}>
                  Example audio: " w w w ayah bunda dot kom "
                </p>
                <p className={styles.block_595}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.amazon.com </span>
                </p>
                <p className={styles.block_597}>
                  Example audio: " w w dot amazon dot kom "
                </p>
                <p className={styles.block_188}>
                  Explanation: If the user mistakenly says "ww", transcribe
                  "www".
                </p>
                <p className={styles.block_358}>Correct: google.co.id</p>
                <p className={styles.block_440}>
                  Example audio: " google dot ko i d "
                </p>
                <p className={styles.block_598}>
                  Explanation: Also transcribe the dot in an obvious URL, even
                  if the speaker did not include it.
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.kaskus.com </span>
                </p>
                <p className={styles.block_113}>
                  Example audio: " w w w kaskus dot kom "
                </p>
                <p className={styles.block_128}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.facebook.com </span>
                </p>
                <p className={styles.block_600}>
                  Example audio: " w w facebook dot kom "
                </p>
                <p className={styles.block_601}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.target.com </span>
                </p>
                <p className={styles.block_24}>
                  Example audio: " w w w dot t a r g e t dot c o m "
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_603}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_427}>
                  Correct: Indonesia versus Malaysia
                </p>
                <p className={styles.block_240}>
                  Incorrect: Indonesia vs Malaysia
                </p>
                <p className={styles.block_359}>
                  Example audio: " indonesia versus malaysia "
                </p>
                <p className={styles.block_427}>
                  Correct: Indonesia versus Malaysia
                </p>
                <p className={styles.block_74}>
                  Incorrect: Indonesia vs. Malaysia
                </p>
                <p className={styles.block_359}>
                  Example audio: " indonesia versus malaysia "
                </p>
                <p className={styles.block_329}>
                  Correct: Indonesia vs Malaysia
                </p>
                <p className={styles.block_604}>
                  Example audio: " indonesia v s malaysia "
                </p>
                <p className={styles.block_207}>Correct: yth. saudari Lana</p>
                <p className={styles.block_196}>
                  Example audio: " y t h saudari lana "
                </p>
                <p className={styles.block_28}>Explanation: court cases</p>
                <p className={styles.block_605}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_562}>Correct: AT&amp;T, MP3</p>
                <p className={styles.block_606}>
                  Explanation: brands and products
                </p>
                <p className={styles.block_607}>
                  Correct: AS, PBB, Bambang S Yudhoyono, AT Mahmud
                </p>
                <p className={styles.block_223}>
                  Explanation: geographic and personal names
                </p>
                <p className={styles.block_206}>Correct: NASA, MURI, NATO</p>
                <p className={styles.block_118}>
                  Explanation: pronounced as words
                </p>
                <p className={styles.block_539}>Correct: lol</p>
                <p className={styles.block_305}>Example audio: " el oh el "</p>
                <p className={styles.block_427}>
                  Explanation: interjection acronyms
                </p>
                <p className={styles.block_539}>Correct: lol</p>
                <p className={styles.block_608}>Example audio: " lol "</p>
                <p className={styles.block_476}>Correct: tilang, radar</p>
                <p className={styles.block_19}>
                  Explanation: extremely lexicalized acronyms
                </p>
                <p className={styles.block_609}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_393}>Correct: X.M.L</p>
                <p className={styles.block_610}>
                  Explanation: Official brand name as seen in the privacy policy
                  includes periods.
                </p>
                <p className={styles.block_611}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.
                </p>
                <p className={styles.block_482}>
                  Correct: Saya kenal anak Prof. Dr. Slamet Iman Santoso.
                </p>
                <p className={styles.block_612}>
                  Explanation: Please use "Dr." for doctorate-level degree and
                  "dr." for medical doctor.
                </p>
                <p className={styles.block_613}>
                  Correct: Kemarin malam saya bertemu Hj Salim di mesjid.
                </p>
                <p className={styles.block_54}>
                  Correct: Pemimpin majelis itu adalah K.H. Anwar Ismail.
                </p>
                <p className={styles.block_614}>
                  Correct: Minggu depan Presiden Jokowi dijadwalkan untuk
                  bertemu dengan Perdana Menteri Inggris.
                </p>
                <p className={styles.block_615}>
                  Correct: Saya melihat profesor itu sedang berjalan kaki ke
                  perpustakaan.
                </p>
                <p className={styles.block_616}>
                  Incorrect: Saya melihat Profesor itu sedang berjalan kaki ke
                  perpustakaan.
                </p>
                <p className={styles.block_379}>
                  Correct: Kami mengantar rombongan haji ke bandar udara.
                </p>
                <p className={styles.block_617}>
                  Incorrect: Kami mengantar rombongan Haji ke bandar udara.
                </p>
                <p className={styles.block_618}>
                  Correct: Para presiden dan perdana menteri dari berbagai
                  negara sahabat telah datang.
                </p>
                <p className={styles.block_98}>
                  Incorrect: Para Presiden dan Perdana Menteri dari berbagai
                  negara sahabat telah datang.
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
