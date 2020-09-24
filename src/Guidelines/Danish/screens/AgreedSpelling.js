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
            <PageContentHeader currentPage="Longform Danish" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>names.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_478}>
                  <span className={styles.text_2}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is said (often done for foreign names or businesses, for
                    example). Use lowercase letters{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    for the spelled-out portion. This rule does not apply to
                    acronyms or initialisms, or to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelled-out web or email addresses.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_23}>
                    Correct: Costco c o s t c o{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "costco" and then spelled it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_23}>
                    Correct: Hvordan kommer man til c o s t c o?{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    <span className={styles.calibre2}>
                      hvordan kommer man til c o s t c o
                    </span>
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_23}>
                    Correct: ord der slutter på i n g{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    ord der slutter på i n g{' '}
                  </span>
                  <span className={styles.text_26}>"</span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.calibre2}>
                    Correct: a b c d e f g h i k l m n o p q r s t u v w x y z æ
                    ø å
                  </span>
                </p>
                <p className={styles.block_482}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_23}>Correct: amazon.co.uk </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    amazon dot c o dot u k{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: BNP </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>b n p </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_23}>Correct: FIFA </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced the word "FIFA", or spelled out "f
                      i f a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_23}>Correct: lol </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced the word "lol", or spelled out "l
                      o l".
                    </span>
                  </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_23}>Correct: T-shirt </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>t-shirt </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>Correct: e-mail </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>e-mail </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: iPhone, USA, IBM, xkcd, MP3{' '}
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_2}>
                    For uses of single letters, either referring to the letter
                    itself or some other meaning{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    associated with it, use capital letters (with apostrophes
                    for plurals).
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: ord der starter med J
                </p>
                <p className={styles.block_94}>Correct: rul på R'erne.</p>
                <p className={styles.block_140}>
                  Correct: Hvor mange A'er er der i dit navn?
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_489}>
                  <span className={styles.text_2}>
                    Transcribe words representing laughter or other non-speech
                    vocalizations with up to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    three syllables, but no more.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: ha, haha, hahaha, hehe, hehehe, hihihi,
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_30}>Correct: hahaha </span>
                  <span className={styles.text_34}>Example audio: " </span>
                  <span className={styles.text_35}>ha ha ha ha ha </span>
                  <span className={styles.text_34}>" </span>
                  <span className={styles.text_33}> </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={styles.block_491}>
                  <span className={styles.text_2}>
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    pay attention to the correct format. Official format and
                    spelling of a proper name may{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    supersede the usual written transcription conventions
                    detailed in this document.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_17}>
                    Defer to official spellings of celebrity names.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_142}>Correct: AC/DC</p>
                <p className={styles.block_94}>Correct: L.O.C.</p>
                <p className={styles.block_493}>
                  <span className={styles.text_23}>
                    Correct: Kristin Chenoweth{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: The celebrity spells her name differently
                      than the more common "Kristen".
                    </span>
                  </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_2}>
                    If proper names include diacritics uncommon in your language
                    (ć, š, á, etc.), do not{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    include them in your spelling.
                  </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_2}>
                    If a personal name could have multiple spellings and context
                    does not help choose a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelling, use the spelling that yields the most Google
                    search hits when you search for{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>the name.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_23}>
                    Correct: Ring til Christina.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: Ring til Kristina.{' '}
                  </span>
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_17}>
                    Common spellings of names
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Allan </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Anne </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Ane </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Anna </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Andreas </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Anders </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Ahmed </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Aisha </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Bo </span>
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Bolette </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Bjørn </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Bent </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Bettina </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Bente </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Katrine </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Camilla </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Cecilie </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Clara </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Carl </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Caroline </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Christina </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Christine </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Daniel </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Daniella </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Dennis </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Dorthe </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Ellen </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Erik</span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "Christina" yields more results than
                    "Kristina".
                  </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Elisabeth </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Elise </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Erika </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Esther </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Frans </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Frederik </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Freddy </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Frida </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Gordon </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Gabriella </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Hanne </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Heidi </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Jan </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Jens </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Jimmy </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Joan </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Jonathan </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Juliane </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Kaj </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Karen </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Karina </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Kasper </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Kate </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Karla </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Kirsten </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Laura </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Lea </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Liam </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Louise </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Lis </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Lilly </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Lisa </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Lissi </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Marie </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Maria </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Maiken </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Mark </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Marcus </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Mathias</span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Michael </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Mogens </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Natalie </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Nicoline </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Nikolaj </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Per </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Peter </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Philip </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Rasmus </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Robin </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Sara </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Simon </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Steven </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Sørine </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Sofie </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Sonja </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Stephanie </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Steffen </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Susanne </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Sussie </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Tanja </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Theresa </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Thomas </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Tobias </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Villy </span>
                </p>
              </div>
              <div id="brand-and-product">
                {' '}
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_515}>
                  <span className={styles.text_2}>
                    Format proper names as they are most commonly formatted on
                    the entity's website{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (especially official documents), if available, or the
                    Wikipedia or IMDb page. In cases of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    ambiguity, defer to their privacy policy. If no other
                    sources, use top Google hits.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Han arbejder for Amazon.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Jeg har hørt at Yahoo og T-Mobile har
                  </span>
                </p>
                <p className={styles.block_516}>indgået en aftale.</p>
                <p className={styles.block_517}>
                  <span className={styles.calibre2}>
                    Correct: Jeg spiser tit på Burger King og Subway.
                  </span>
                </p>
                <p className={styles.block_518}>Correct: YouTube</p>
                <p className={styles.block_519}>
                  Correct: Har du set den nye udstilling på ARoS? Correct:
                  craigslist
                </p>
                <p className={styles.block_520}>Correct: ASUS</p>
                <p className={styles.block_521}>Correct: eBay</p>
                <p className={styles.block_522}>Correct: Burger King</p>
                <p className={styles.block_523}>Incorrect: BURGER KING</p>
                <p className={styles.block_524}>Correct: LEGO</p>
                <p className={styles.block_523}>Incorrect: Lego</p>
                <p className={styles.block_525}>
                  <span className={styles.calibre2}>
                    Explanation: Do not spell "Burger King" all in upper case as
                    in the stylized form of the logo, stick to the official form
                    as per the privacy policy.
                  </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_2}>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    "Ok Glass", require their own particular spelling of "okay".
                    This spelling is unique to these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>cases.</span>
                </p>
                <p className={styles.block_140}>Correct: Ok Google</p>
                <p className={styles.block_94}>Correct: Ok Google Now</p>
                <p className={styles.block_94}>
                  Correct: Ok Google, hvor ligger Matas?
                </p>
                <p className={styles.block_93}>Correct: Ok Google, æbler</p>
                <p className={styles.block_94}>Correct: Okay.</p>
                <p className={styles.block_94}>Correct: Okay, Thomas.</p>
                <p className={styles.block_94}>
                  Correct: Okay Julie, lad os bare komme afsted.
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_17}>
                    Spellings of common Brand and Product names
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>3DS </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>4chan </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Accessorize </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Adidas </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Amazon </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Angry Birds </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ARoS </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Baresso </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Ben &amp; Jerry's </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Black Ops 2 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>BlackBerry </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>B-182 </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Biotherm</span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>BonBon </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Burger King </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Carte d'Or </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Casio </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Chanel </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Chrome </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>CinemaxX </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Citroën </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Coca-Cola </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Counter-Strike </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Domino's </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Downtown </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Dragon Quest IX </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>easyJet </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>eBay </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Esprit </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Evernote </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Facebook </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Field's </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>FIFA </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Flickr </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Fætter BR </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Gillette </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Gmail </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Google </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Google Apps </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Google Kalender </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Google Earth </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Google Billeder </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Google mail </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Google Street View </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Groupon </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>GTA V </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Häagen-Dazs </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Halifax </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Haribo </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>HBO Nordic </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Hotmail </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>IKEA</span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>iMac </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>IMDb </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Imgur </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>iOS </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>iPad </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>iPhone </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Jurlique </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Kari Traa </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Kellogg's </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Kit Kat </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>LEGO </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>LEGOLAND </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>edIn </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>L'Oréal </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Maroon 5 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>McDonald's </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Mikkeller </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Minecraft </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Momondo </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Lidl </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Nespresso </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Nesquik </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Netflix </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Nike </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Opel </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Oral-B </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Picasa </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>Plants vs. Zombies </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>PlayStation 4 </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>PornHub </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Porsche </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>PowerPoint </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>PS4 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Ray-Ban </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>RealPlayer </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Rema 1000 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Rolls-Royce </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Ryanair </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Samsøe &amp; Samsøe</span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Samsung Galaxy </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Samsung Galaxy S II </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Samsung Galaxy S III </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Samsung Galaxy S4 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Samsung Galaxy S5 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Schweppes </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Senseo </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ShopUSA </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Silvan </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>SimCity </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Siri </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Spies </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Sportmaster </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Starbucks </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Star Tour </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>TDC </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Texas hold 'em </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Tinder </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Tour de France </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Toys "R" Us </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Tumblr </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Twitter </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Visa </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Vivino </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Xbox </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Xbox 360 </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Xbox One </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>Yahoo </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>YouPorn </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>YouTube </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_535}>
                  <span className={styles.text_2}>
                    Refer to the Google Play Store for official spellings of
                    media titles. For film/television,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    IMDb is also available. If an utterance is ambiguous between
                    a media title and a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence or web search, use your judgment for which is more
                    likely; if truly unclear,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>default to media title.</span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_2}>
                    Capitalize the first word of Danish film/television/theater
                    titles. Capitalize all principal{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    words and first word in foreign language titles.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_537}>Correct: Far til fire</p>
                <p className={styles.block_538}>Incorrect: Far til Fire</p>
                <p className={styles.block_539}>
                  <span className={styles.text_23}>
                    Correct: A Walk Among the Tombstones{' '}
                  </span>
                  <span className={styles.text_24}>
                    Incorrect: A Walk Among The Tombstones.{' '}
                  </span>
                </p>
                <p className={styles.block_540}>Correct: La Vie en Rose</p>
                <p className={styles.block_541}>Incorrect: La Vie En Rose</p>
                <p className={styles.block_542}>
                  <span className={styles.text_28}>
                    Do not use quotation marks for media titles.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>Correct: Far til fire </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.calibre2}>
                    Correct: screenshots fra Call of Duty: Black Ops 2
                  </span>
                </p>
                <p className={styles.block_544}>
                  Correct: Spil Diamonds af Rihanna.
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>far til fire </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      a walk among the tombstones{' '}
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>la vie en rose </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_2}>
                    Transcribe all media titles with original punctuation. In
                    cases where original punctuation{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    falls at the end of a sentence, do not transcribe
                    sentence-level punctuation. That is,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    media title punctuation trumps sentence level punctuation
                    when in conflict. If a popular{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    media title consists of an entire sentence but the official
                    spelling is without punctuation,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    then don't punctuate the title. If an utterance is ambiguous
                    between a media title and a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence or web search, use your judgment for which is more
                    likely and treat it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>accordingly.</span>
                </p>
                <p className={styles.block_140}>
                  <span className={styles.calibre2}>
                    Correct: Check hvilket år Shall We Dance?{' '}
                  </span>
                </p>
                <p className={styles.block_549}>udkom.</p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: Hvem spiller hovedpersonen i Dude,
                  </span>
                </p>
                <p className={styles.block_550}>Where's my Car?</p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: Familliens yndlingsfilm er What About
                  </span>
                </p>
                <p className={styles.block_551}>Bob?</p>
                <p className={styles.block_552}>
                  <span className={styles.text_17}>
                    Very common alternate or shortened versions of titles should
                    also be capitalized.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_23}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: for "Transformers: Revenge of the Fallen"
                    </span>
                  </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_23}>
                    Correct: Star Wars Episode III{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: for "Star Wars Episode III: Revenge of the
                      Sith"
                    </span>
                  </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_23}>
                    Correct: What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: for "The Fox (What Does the Fox Say?)"
                    </span>
                  </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_23}>
                    Correct: The Next Generation{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: for "Star Trek: The Next Generation"
                    </span>
                  </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_23}>
                    Correct: Spil Teen Spirit af Nirvana.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Correct title is "Smells Like Teen Spirit".
                    </span>
                  </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_23}>
                    Correct: Jeg vil gerne høre Taylor Swift Trouble.{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Correct title is "I Knew You Were Trouble".
                    </span>
                  </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_2}>
                    Do not capitalize a media title that happens to occur within
                    quoted lyrics. Format lyrics{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that form a sentence as you would a normal sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.calibre2}>
                    Correct: YouTube We are the champions my friends, and we'll
                    keep on fighting till the end.
                  </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.calibre2}>
                    Incorrect: YouTube We Are the Champions my friends, and
                    we'll keep on fighting till the end.
                  </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.calibre2}>
                    Incorrect: YouTube We Are the Champions My Friends And We'll
                    Keep on Fighting till the End.
                  </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.calibre2}>
                    Correct: YouTube Jeg elsker hende mere end hun elsker mig.
                  </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.calibre2}>
                    Incorrect: Jeg Elsker Hende Mere end Hun Elsker mig.
                  </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.calibre2}>
                    Explanation: They are quoting lyrics that just happen to
                    contain the title; format as full sentence.
                  </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_2}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>understand them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_146}>Correct: Y Tu Mama Tambien</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_568}>
                  <span className={styles.text_2}>
                    When multiple spellings are attested, use the first spelling
                    used in{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Retskrivningsordbogen or Den Danske Ordbog. If there is no
                    entry, Google the word and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    use the form with the most hits.
                  </span>
                </p>
                <p className={styles.block_147}>
                  <span className={styles.text_23}>Correct: sovs </span>
                  <span className={styles.text_24}>Incorrect: sauce </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.calibre2}>
                    Explanation: "sovs" is preferred by Retskrivningsordbogen.
                  </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_2}>
                    Guess the most likely spelling given the context. When
                    context is insufficient, rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>Google hits.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Han går til fodbold hver onsdag
                </p>
                <p className={styles.block_94}>Correct: vejr</p>
                <p className={styles.block_570}>
                  <span className={styles.text_2}>
                    Use official spelling and capitalization for technical
                    terms. Google them and pay{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    attention to the correct format.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_571}>
                  Correct: Pseudotsuga menziesii
                </p>
                <p className={styles.block_94}>Correct: E. coli</p>
                <p className={styles.block_93}>Correct: Metronidazole</p>
                <p className={styles.block_572}>
                  <span className={styles.text_2}>
                    Transcribe slang and colloquialisms as spoken according to
                    the appendix on this page.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Do not alter non-standard speech that the speaker probably
                    wouldn't want corrected.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.calibre2}>
                    Correct: Manden med frakken ser mistænksom ud.
                  </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.calibre2}>
                    Incorrect: Manden med frakken ser mistænkelig ud.
                  </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      manden med frakken ser mistænksom ud
                    </span>
                  </span>
                  <span className={styles.text_18}>"</span>
                </p>
                <p className={styles.block_576}>
                  Correct: Bogen har hele tiden lagt på bordet.
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_17}>
                    Contractions should be transcribed as full words.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_23}>
                    Correct: Det er sgu ikke ham.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>det er sgutte ham </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: Det ved du godt, ikke?{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>det ved du godt ik </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: Det bliver bedre med tiden.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>
                    det blir bedre med tiden{' '}
                  </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language because{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    there is a small sound change (i.e. accent, speech error,
                    speech impairment, etc),{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe the intended word.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_23}>
                    Correct: Gangnam Style{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>gangdam style </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: Han drikker espresso{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>han drikker ekspresso </span>
                  <span className={styles.text_26}>" </span>
                  <span className={styles.text_23}>
                    Correct: Jeg elsker avocado.{' '}
                  </span>
                  <span className={styles.text_26}>Example audio: " </span>
                  <span className={styles.text_27}>jeg elsker advocado </span>
                  <span className={styles.text_26}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_23}>
                    Correct: en sandwich med kylling{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "killing" with an accent.
                    </span>
                  </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language, but it is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    obviously based on real words, suffixes, or prefixes,
                    transcribe as is.
                  </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_23}>
                    Correct: vederstrækkelig{' '}
                  </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: User says "vederstrækkelig". This might sound
                      like nonsense at first, but is based
                    </span>
                  </span>
                </p>
                <p className={styles.block_584}>on real words.</p>
                <p className={styles.block_585}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language because it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    appears to be nonsense, first perform a Google search for
                    the word. If there is a clear{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    candidate, transcribe that word.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_23}>Correct: Kaloli </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: User says "Kaloli". This might sound like
                      nonsense at first, but the transcriber
                    </span>
                  </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.calibre2}>
                    guesses the spelling "kalolli" and is by{' '}
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.calibre2}>
                    corrected Google Search to "Kaloli", a gasoline
                  </span>
                </p>
                <p className={styles.block_589}>
                  tanker and place in Hawaii. Transcribe Kaloli.
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_23}>Correct: Souk Abdali </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      Explanation: User says "Souk Abdali". Transcriber searches
                      "sukabdali", finds correct
                    </span>
                  </span>
                </p>
                <p className={styles.block_591}>
                  results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_2}>
                    If a word appears to be nonsense and a Google search returns
                    no clear results but it is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    easy to spell and articulated clearly, transcribe it anyway.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: lagkagekrogen</p>
                <p className={styles.block_593}>
                  <span className={styles.text_39}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label{' '}
                  </span>
                  <span className={styles.text_40}> </span>
                  <span className={styles.text_39}>
                    as instructed in: Longform generic rules &gt; Unintelligible
                    or foreign or singing.
                  </span>
                  <span className={styles.text_40}> </span>
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
