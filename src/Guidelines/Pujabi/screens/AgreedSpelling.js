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
            <PageContentHeader currentPage="longform Pujabi" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). This rule does not
                  apply to acronyms or initialisms, or to spelled-out web or
                  email addresses. If an English word is spelt out, write out
                  the letters in latin script and in lower case.
                </p>
                <p className={styles.block_1325}>
                  <span className={styles.text_24}>
                    Correct: ਫਿਲਪਕਾਰਟ ਫ ਿਲ ਪ ਕਾ ਰ ਟ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਫਿਲਪਕਾਰਟ ਫਫਾ ਲਲ ਨ ਿਸਹਾਰੀ ਪਪਾ{' '}
                  </span>
                </p>
                <p className={styles.block_1326}>
                  <span className={styles.text_5}>ਕਕ ਨ ਕਨਾ ਰਾਰਾ ਟ ਕਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1327}>
                  Explanation: ਵਕਤਾ ਚੀ ਸਾਰੀ "ਫਿਲਪਕਾਰਟ" ਨਾਮ ਲ ਦਾ
                </p>
                <p className={styles.block_1328}>
                  ਹ, ਿਫਰ ਉਸਤ ਬਾਅਦ ਸਪਿਲਗ ਬਲਦਾ ਹ। ਸ ਸਪਿਲਗ ਿਲਖਣ
                </p>
                <p className={styles.block_1329}>ਸਮ ਅਖਰ 'ਚ ਸਪਸ ਰਖੀ ਜਾਵ।</p>
                <p className={styles.block_1330}>
                  <span className={styles.text_24}>
                    Correct: ਅ ਨ ਨਾਲ ਰ ਹਣ ਵਾਲ ਬਦ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਅ ਨ ਨਾਲ ਰ ਹਣ ਵਾਲ ਬਦ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1331}>
                  Explanation: ਵਕਤਾ ਪਿਹਲ ਅਗਤਰ "ਅ ਨ" ਬਲਦਾ ਹ
                </p>
                <p className={styles.block_1332}>
                  ਅਤ ਿਫਰ ਵਾਕ "ਨਾਲ ਰ ਹਣ ਵਾਲ ਬਦ" ਬਲਦਾ ਹ। ਇਸ
                </p>
                <p className={styles.block_1333}>
                  ਕਰਕ ਬਲ ਗਏ ਵਧਤਰ 'ਚ ਇਕ ਸਪਸ ਰਖਣੀ ਹ।
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_11}>
                    Correct: ੳ ਅ ੲ ਸ ਹ ਕ ਖ ਗ ਘ ਙ ਚ ਛ ਜ ਝ ਞ ਟ ਠ ਡ ਢ
                  </span>
                </p>
                <p className={styles.block_1334}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>
                    ਉੜਾ ਐੜਾ ਈੜੀ ਸਸਾ ਹਾਹਾ ਕਕਾ ਖਖਾ{' '}
                  </span>
                </p>
                <p className={styles.block_1335}>
                  ਣ ਤ ਥ ਦ ਧ ਨ ਪ ਫ ਬ ਭ ਮ ਯ ਰ ਲ ਵ ੜ
                </p>
                <p className={styles.block_1336}>
                  ਗਗਾ ਘਘਾ ਙਙਾ ਚਚਾ ਛਛਾ ਜਜਾ ਝਝਾ ਞਞਾ ਟ ਕਾ ਠਠਾ ਡਡਾ
                </p>
                <p className={styles.block_1337}>
                  ਢਢਾ ਣਾਣਾ ਤਤਾ ਥਥਾ ਦਦਾ ਧਧਾ ਨਨਾ ਪਪਾ ਫਫਾ ਬਬਾ ਭਭਾ
                </p>
                <p className={styles.block_1338}>
                  <span className={styles.text_5}>
                    ਮਮਾ ਯਯਾ ਰਾਰਾ ਲਲਾ ਵਾਵਾ ੜਾੜਾ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1339}>
                  Explanation: ਵਕਤਾ ਨ ਪਜਾਬੀ ਵਰਣਮਾਲਾ ਬਲੀ ਹ।
                </p>
                <p className={styles.block_1340}>
                  <span className={styles.text_22}>Correct: amazon.co.uk </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਐਮਾਜਾਨ ਡਾਟ ਸੀ ਓ ਡਾਟ ਯ ਕ{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1341}>
                  Explanation: ਇਥ ਵਕਤਾ ਇਕ ਯਆਰਐਲ ਬਲ ਿਰਹਾ ਹ,
                </p>
                <p className={styles.block_1342}>
                  ਇਸ ਕਰਕ ਇਸਨ ਉਵ ਹੀ ਿਲਖ ਿਜਵ ਿਕ ਬਿਲਆ ਿਗਆ ਹ।
                </p>
                <p className={styles.block_1343}>
                  <span className={styles.text_24}>Correct: ਟੀ- ਰਟ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਟੀ ਰਟ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1344}>Correct: ਈਮਲ</p>
                <p className={styles.block_1345}>Incorrect: ਈ-ਮਲ</p>
                <p className={styles.block_1346}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਈਮਲ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1347}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use the
                  letter itself
                </p>
                <p className={styles.block_1348}>Correct: ਜ ਤ ਰ ਹਣ ਵਾਲ ਅਖਰ</p>
                <p className={styles.block_1349}>
                  Incorrect: "ਜ" ਤ ਰ ਹਣ ਵਾਲ ਅਖਰ
                </p>
                <p className={styles.block_1350}>Correct: ਤਰਬਜ 'ਚ ਿਕਨ ਤ ਹਨ।</p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_1353}>
                  Correct: ਹਾਹਾ, ਹਾ, ਹਾਹਾਹਾ, ਹੀਹੀ, ਹੀਹੀਹੀ,
                </p>
                <p className={styles.block_1354}>
                  <span className={styles.text_24}>Correct: ਹਾਹਾਹਾ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਹਾ ਹਾ ਹਾ ਹਾ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1355}>
                  Ignore actual laughter that is included within speech. If the
                  entire audio contains only laughter, use the [skip] tag.
                </p>
                <p className={styles.block_1356}>Correct: ਮਨ ਪਤਾ ਹ!</p>
                <p className={styles.block_1357}>
                  Incorrect: ਹਾਹਾਹਾ, ਮਨ ਪਤਾ ਹ!
                </p>
                <p className={styles.block_1358}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਹਾਹਾਹਾ ਮਨ ਪਤਾ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1359}>
                  Explanation: ਆਡੀਓ 'ਚ ਆਮ ਬਦ ਦੀ ਵਰਤ ਕੀਤੀ ਗਈ
                </p>
                <p className={styles.block_1360}>
                  ਹ, ਸ ਇਸ ਕਰਕ ਹਾਸ ਨ ਟਰ ਸਕ ਾਈਬ ਨਹ ਕਰਨਾ।
                </p>
                <p className={styles.block_1361}>Correct: [skip]</p>
                <p className={styles.block_1362}>Incorrect: ਹਾਸਾ</p>
                <p className={styles.block_1363}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_12}>[</span>
                  <span className={styles.text_5}>ਹਾਸ</span>
                  <span className={styles.text_12}>] </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1364}>
                  Explanation: ਇਸ ਆਡੀਓ 'ਚ ਕਈ ਵੀ ਬਦ ਨਹ ਬਿਲਆ
                </p>
                <p className={styles.block_227}>
                  ਿਗਆ ਬਲਿਕ ਿਸਰਫ ਹਾਸਾ ਹ, ਸ ਇਸ ਨ [skip] ਟਰ ਸਕ ਈਬ
                </p>
                <p className={styles.block_1365}>ਕਰਨਾ ਹ, "ਹਾਹਾ" ਨਹ ਿਲਖਣਾ।</p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spellings and punctuation for proper names.
                  Google them and pay attention to the correct format. Official
                  format and spelling of a proper name may supersede the usual
                  written transcription conventions detailed in this document.
                </p>
                <p className={styles.block_1368}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_1369}>
                  <span className={styles.text_13}>
                    Correct: ਛਣਕਾਟਾ 97 1/2{' '}
                  </span>
                  <span className={styles.text_14}>
                    Explanation: ਛਣਕਾਟਾ 97 1/2 ਇਕ ਹਾਸਰਸ ਐਲਬਮ ਦਾ
                  </span>
                </p>
                <p className={styles.block_575}>
                  ਨਾਮ ਹ। ਇਸਦਾ ਨਾਮ ਇਸਦ ਆਫੀ ੀਅਲ ਫਾਰਮਟ ਦ
                </p>
                <p className={styles.block_658}>ਅਨਸਾਰ ਹੀ ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_1370}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "ਨਾਮ" (without quotation marks) (e.g.
                  "ਕਵਲਜੀਤ ਨਾਮ").
                </p>
                <p className={styles.block_1371}>Correct: ਕਵਲਜੀਤ ਨ ਬਲਾਓ।</p>
                <p className={styles.block_1372}>Incorrect: ਕਵਲਜੀਤ ਨ ਬਲਾਓ।</p>
                <p className={styles.block_1373}>
                  Explanation: ਸਰਚ ਕਰਨ 'ਤ "ਕਵਲਜੀਤ" ਨਾਮ ਦ
                </p>
                <p className={styles.block_1374}>
                  "ਕਵਲਜੀਤ" ਨਾਲ ਿਜਆਦਾ ਨਤੀਜ ਆ ਦ ਹਨ।
                </p>
                <p className={styles.block_1375}>
                  Holidays and festivals should be written in common format. To
                  find the correct format, search it on Google and see the
                  formatting of first result. If nothing is found, then search
                  it on Wikipedia. If still you found nothing on Wikipedia, just
                  just write them in the format in which they are written.
                </p>
                <p className={styles.block_1376}>
                  Correct: ਦੀਵਾਲੀ ਦੀਆ ਛਟੀਆ 'ਚ ਉਹ ਆਪਣ ਦਸਤ ਦੀ
                </p>
                <p className={styles.block_1377}>ਪਾਰਟੀ 'ਚ ਜਾ ਰਹੀ ਹ।</p>
                <p className={styles.block_1378}>Correct: ਈਦ ਉਲ-ਿਫਤਰ ਕਦ ਹ?</p>
                <p className={styles.block_1378}>Correct: ਦੀਵਾਲੀ ਦੀਆ ਮਬਾਰਕ !</p>
                <p className={styles.block_1379}>
                  Correct: ਦੀਵਾਲੀ ਅਤ ਨਵ ਸਾਲ ਦੀਆ ਮਬਾਰਕ ।
                </p>
                <p className={styles.block_1380}>Common spellings of names</p>
                <p className={styles.block_1381}>● ਆਲੀਆ</p>
                <p className={styles.block_1382}>● ਨ ਹਾ</p>
                <p className={styles.block_366}>● ਿਪ ਆ</p>
                <p className={styles.block_1383}>● ਿਪ ਅਕਾ</p>
                <p className={styles.block_1119}>● ਪਜਾ</p>
                <p className={styles.block_1384}>● ਰਤੀ</p>
                <p className={styles.block_1385}>● ਇ ਾ</p>
                <p className={styles.block_1383}>● ਸਨਾਲੀ</p>
                <p className={styles.block_1386}>● ਆ ਾ</p>
                <p className={styles.block_1387}>● ਿਦਿਵਆ</p>
                <p className={styles.block_1119}>● ਨ ਨਾ</p>
                <p className={styles.block_1383}>● ਸਨੀਆ</p>
                <p className={styles.block_1388}>● ਅਰਣ</p>
                <p className={styles.block_1381}>● ਮਨਮੀਤ</p>
                <p className={styles.block_1389}>● ਇ ਾਨ</p>
                <p className={styles.block_1390}>● ਰਿਹਤ</p>
                <p className={styles.block_1390}>● ਰਾਹਲ</p>
                <p className={styles.block_1391}>● ਰਹਨ</p>
                <p className={styles.block_1382}>● ਰਾਜ</p>
                <p className={styles.block_1381}>● ਅਿਭ ਕ</p>
                <p className={styles.block_1392}>● ਹਰ</p>
                <p className={styles.block_1391}>● ਕਰਨ</p>
                <p className={styles.block_1382}>● ਿਪਊ</p>
                <p className={styles.block_1393}>● ਿਸਧਾਰਥ</p>
                <p className={styles.block_1394}>● ਿਰ ਭ</p>
                <p className={styles.block_1386}>● ਵਰਣ</p>
                <p className={styles.block_371}>● ਿਵਜ</p>
                <p className={styles.block_1395}>● ਿਵਕਰਮ</p>
                <p className={styles.block_1390}>● ਕਬੀਰ</p>
                <p className={styles.block_1390}>● ਸਿਮਤ</p>
                <p className={styles.block_1396}>● ਿਨਿਤਨ</p>
                <p className={styles.block_1390}>● ਨੀਰਜ</p>
                <p className={styles.block_366}>● ਪ ੀਤੀ</p>
                <p className={styles.block_1397}>● ਅਨ</p>
                <p className={styles.block_1396}>● ਸਿਮ ਤੀ</p>
                <p className={styles.block_365}>● ਰਪਾ</p>
                <p className={styles.block_1398}>● ਅਕ ਕ ਾ</p>
                <p className={styles.block_1399}>● ਅਰਚਨਾ</p>
                <p className={styles.block_1384}>● ਰਆ</p>
                <p className={styles.block_1400}>● ਅਜਲੀ</p>
                <p className={styles.block_1383}>● ਰਚੀਕਾ</p>
                <p className={styles.block_1401}>● ਆਚਲ</p>
                <p className={styles.block_1396}>● ਿਨਿਖਲ</p>
                <p className={styles.block_1390}>● ਨਵੀਨ</p>
                <p className={styles.block_1386}>● ਆ ੀ</p>
                <p className={styles.block_1381}>● ਸਮਰਾਟ</p>
                <p className={styles.block_1402}>● ਗਤਮ</p>
                <p className={styles.block_1403}>● ਅਿਦਿਤਆ</p>
                <p className={styles.block_1397}>● ਅਕ</p>
                <p className={styles.block_1383}>● ਿਵਨੀਤ</p>
                <p className={styles.block_1382}>● ਿਹਮ</p>
                <p className={styles.block_1404}>● ਜ</p>
                <p className={styles.block_1390}>● ਸਨ ਹਾ</p>
                <p className={styles.block_1405}>● ਅਨਿਨਆ</p>
                <p className={styles.block_1383}>● ਸਿਚਤਾ</p>
                <p className={styles.block_1383}>● ਿਪ ਅਕਾ</p>
                <p className={styles.block_1383}>● ਆਰ ੀ</p>
                <p className={styles.block_1406}>● ਮੀਰਾ</p>
                <p className={styles.block_1390}>● ਤਨਵੀ</p>
                <p className={styles.block_1407}>● ਦੀਿਪਕਾ</p>
                <p className={styles.block_1407}>● ਅਰਜਨ</p>
                <p className={styles.block_1382}>● ਿਹਮ</p>
                <p className={styles.block_1408}>● ਅਨਜ</p>
                <p className={styles.block_1390}>● ਸਿਚਨ</p>
                <p className={styles.block_1403}>● ਹਰਿਵਦਰ</p>
                <p className={styles.block_1409}>● ਸਿਰਦਰ</p>
                <p className={styles.block_1381}>● ਨਿਰਦਰ</p>
                <p className={styles.block_1410}>● ਕਮਲਜੀਤ</p>
                <p className={styles.block_1395}>● ਹਰਦੀਪ</p>
                <p className={styles.block_1411}>● ਹਰਜੀਤ</p>
                <p className={styles.block_1395}>● ਨਵਦੀਪ</p>
                <p className={styles.block_1390}>● ਸਿਚਨ</p>
                <p className={styles.block_1401}>● ਅਿਮਤ</p>
                <p className={styles.block_1396}>● ਰਾਜੀਵ</p>
                <p className={styles.block_1386}>● ਸਰਵ</p>
                <p className={styles.block_1398}>● ਆਿਰਅਨ</p>
                <p className={styles.block_1412}>● ਅਰਨਵ</p>
                <p className={styles.block_1384}>● ਰਾਘਵ</p>
                <p className={styles.block_366}>● ਸੀਆ</p>
                <p className={styles.block_1119}>● ਗਰੀ</p>
                <p className={styles.block_366}>● ਿਨਧੀ</p>
                <p className={styles.block_1396}>● ਟਰੀ ਾ</p>
                <p className={styles.block_1383}>● ਮਾਨਸੀ</p>
                <p className={styles.block_1390}>● ਸਜਨਾ</p>
                <p className={styles.block_1391}>● ਨਪਰ</p>
                <p className={styles.block_1413}>● ਅਿਬਕਾ</p>
                <p className={styles.block_1383}>● ਸਵਾਤੀ</p>
                <p className={styles.block_1407}>● ਪ ਾਿਕ ਤੀ</p>
                <p className={styles.block_1383}>● ਿਸ ਟੀ</p>
                <p className={styles.block_1414}>● ਦਵ</p>
                <p className={styles.block_1415}>● ਸਜ</p>
                <p className={styles.block_1386}>● ਆਕਾ</p>
                <p className={styles.block_1416}>● ਅਨਪ</p>
                <p className={styles.block_1119}>● ਸਨੀ</p>
                <p className={styles.block_1399}>● ਅਿਹਮਦ</p>
                <p className={styles.block_369}>● ਨਰ</p>
                <p className={styles.block_1411}>● ਜਸਮੀਤ</p>
                <p className={styles.block_1403}>● ਜਸਿਵਦਰ</p>
                <p className={styles.block_1393}>● ਰਖਸਾਨਾ</p>
                <p className={styles.block_1391}>● ਫਜ਼ਲ</p>
                <p className={styles.block_1384}>● ਕ</p>
                <p className={styles.block_1119}>● ਾਮ</p>
                <p className={styles.block_1119}>● ਰਾਮ</p>
                <p className={styles.block_1391}>● ਮਹਨ</p>
                <p className={styles.block_1416}>● ਸਹਨ</p>
                <p className={styles.block_1407}>● ਰਾਿਧਕਾ</p>
                <p className={styles.block_1407}>● ਕਾਿਵਆ</p>
                <p className={styles.block_1391}>● ਰਦ</p>
                <p className={styles.block_1384}>● ਸਾਗਰ</p>
                <p className={styles.block_1408}>● ਅ ਲ</p>
                <p className={styles.block_1390}>● ੀਤਲ</p>
                <p className={styles.block_1399}>● ਜਕਲੀਨ</p>
                <p className={styles.block_1389}>● ਪਾਇਲ</p>
                <p className={styles.block_1407}>● ਿਨਤੀਕਾ</p>
                <p className={styles.block_1383}>● ਅਵੀਨਾ</p>
                <p className={styles.block_1399}>● ਅਿਹਮਦ</p>
                <p className={styles.block_1396}>● ਜੀ ਾਨ</p>
                <p className={styles.block_1390}>● ਜਾਵਦ</p>
                <p className={styles.block_1391}>● ਰਮਨ</p>
                <p className={styles.block_1408}>● ਅਮਨ</p>
                <p className={styles.block_1416}>● ਕਮਲ</p>
                <p className={styles.block_1390}>● ਸਾਜਨ</p>
                <p className={styles.block_1399}>● ਜਸਜੀਤ</p>
                <p className={styles.block_1381}>● ਜਸਪਾਲ</p>
                <p className={styles.block_1417}>● ਪ ਪਾ</p>
                <p className={styles.block_1418}>● ਜਲੀ</p>
                <p className={styles.block_1119}>● ਸ ਡੀ</p>
                <p className={styles.block_1419}>● ਅਿਕਤਾ</p>
                <p className={styles.block_1396}>● ਰਾਿ ਦ</p>
                <p className={styles.block_1420}>● ਮਿਹਮਦ</p>
                <p className={styles.block_1390}>● ਦਲੀਪ</p>
                <p className={styles.block_1384}>● ਦੀਪਕ</p>
                <p className={styles.block_1381}>● ਦ ਦੀਪ</p>
                <p className={styles.block_1381}>● ਸਖਪਾਲ</p>
                <p className={styles.block_1421}>● ਅਮਿਰਦਰ</p>
                <p className={styles.block_1422}>● ਸਬਰਮਨੀਅਮ</p>
                <p className={styles.block_1386}>● ਵਣ</p>
                <p className={styles.block_1401}>● ਅਿਨਲ</p>
                <p className={styles.block_1395}>● ਪਰਦੀਪ</p>
                <p className={styles.block_1423}>● ਪਰਮਜੀਤ</p>
                <p className={styles.block_1119}>● ਕਲੀ</p>
                <p className={styles.block_1119}>● ਕਰੀ</p>
                <p className={styles.block_1421}>● ਕਿਰਸਟਨ</p>
                <p className={styles.block_1382}>● ਗਰੀ</p>
                <p className={styles.block_1119}>● ਰੀ</p>
                <p className={styles.block_1381}>● ਹਰਪਾਲ</p>
                <p className={styles.block_1390}>● ਮਾ</p>
                <p className={styles.block_1384}>● ਮਿਹਤ</p>
                <p className={styles.block_1386}>● ਿਲਲੀ</p>
                <p className={styles.block_1386}>● ਲੀਲਾ</p>
                <p className={styles.block_1424}>● ਪਰਿਮਲਾ</p>
                <p className={styles.block_371}>● ਰਵੀ</p>
                <p className={styles.block_1386}>● ਭਮ</p>
                <p className={styles.block_1386}>● ਲੀਜ਼ਾ</p>
                <p className={styles.block_1119}>● ਸਮੀ</p>
                <p className={styles.block_1425}>● ਪਲਿਵਦਰ</p>
                <p className={styles.block_1381}>● ਸਰਜੀਤ</p>
                <p className={styles.block_1119}>● ਲਸੀ</p>
                <p className={styles.block_1383}>● ਕਿਨਕਾ</p>
                <p className={styles.block_1387}>● ਿਹਮ ੀ</p>
                <p className={styles.block_1419}>● ਅਨੀ ਾ</p>
                <p className={styles.block_1385}>● ਿਵਧੀ</p>
                <p className={styles.block_1401}>● ਉਜਲਾ</p>
                <p className={styles.block_1406}>● ਿਸਮੀ</p>
                <p className={styles.block_1426}>● ਿਸਮਰਨਜੀਤ</p>
                <p className={styles.block_1381}>● ਿਸਮਰਨ</p>
                <p className={styles.block_1119}>● ਰਾਮ</p>
                <p className={styles.block_1423}>● ਕਰਮਜੀਤ</p>
                <p className={styles.block_1427}>● ਗਲਜ਼ਾਰ</p>
                <p className={styles.block_1394}>● ਮਾਰਕ</p>
                <p className={styles.block_1411}>● ਮਾਰਕਸ</p>
                <p className={styles.block_1119}>● ਮਰੀ</p>
                <p className={styles.block_1390}>● ਮਿਥਊ</p>
                <p className={styles.block_1412}>● ਮਾਇਆ</p>
                <p className={styles.block_1402}>● ਮਗਨ</p>
                <p className={styles.block_1408}>● ਗਨ</p>
                <p className={styles.block_1398}>● ਅਰੀਜੀਤ</p>
                <p className={styles.block_1428}>● ਅਨਾਇਆ</p>
                <p className={styles.block_1414}>● ਲਕ</p>
                <p className={styles.block_1429}>● ਲਕ ਮਨ</p>
                <p className={styles.block_1119}>● ਲਕੀ</p>
                <p className={styles.block_1119}>● ਿਟਕ</p>
                <p className={styles.block_1430}>● ਗਗਾ</p>
                <p className={styles.block_1424}>● ਿਪ ਤਪਾਲ</p>
                <p className={styles.block_1119}>● ਪ ਕਾ</p>
                <p className={styles.block_369}>● ਸਰ</p>
                <p className={styles.block_1416}>● ਕਮਲ</p>
                <p className={styles.block_1401}>● ਅਿਖਲ</p>
                <p className={styles.block_1381}>● ਕਲਦੀਪ</p>
                <p className={styles.block_1400}>● ਿਵਰਾਟ</p>
                <p className={styles.block_1431}>● ਜਾਹਨਵੀ</p>
                <p className={styles.block_1391}>● ਸਨਲ</p>
                <p className={styles.block_1383}>● ਸਹਾਨੀ</p>
                <p className={styles.block_1419}>● ਭਨਮ</p>
                <p className={styles.block_1411}>● ਰਣਜੀਤ</p>
                <p className={styles.block_366}>● ਰੀਆ</p>
                <p className={styles.block_1383}>● ਸਿਪ ਆ</p>
                <p className={styles.block_1391}>● ਸਕਤ</p>
                <p className={styles.block_1382}>● ਮਨੀ</p>
                <p className={styles.block_1119}>● ਮਨੀ</p>
                <p className={styles.block_1418}>● ਅਨੀ</p>
                <p className={styles.block_1394}>● ਸਮੀਰ</p>
                <p className={styles.block_1406}>● ਤੀ</p>
                <p className={styles.block_1390}>● ਕਤੀ</p>
                <p className={styles.block_365}>● ਰਖਾ</p>
                <p className={styles.block_1418}>● ਜਯਾ</p>
                <p className={styles.block_1382}>● ਲੀ</p>
                <p className={styles.block_1432}>● ਸਾਨੀਆ</p>
                <p className={styles.block_1119}>● ਿਦਪ</p>
                <p className={styles.block_1382}>● ਗਪੀ</p>
                <p className={styles.block_1401}>● ਗਪਾਲ</p>
                <p className={styles.block_369}>● ਗਣ</p>
                <p className={styles.block_1401}>● ਿਤਗਮ</p>
                <p className={styles.block_1396}>● ਸਫੀਆ</p>
                <p className={styles.block_1419}>● ਹਰਮਨ</p>
                <p className={styles.block_1119}>● ਰਾਜ</p>
                <p className={styles.block_1397}>● ਅਜ</p>
                <p className={styles.block_1382}>● ਰਾਕ</p>
                <p className={styles.block_1385}>● ਿਵਕੀ</p>
                <p className={styles.block_1383}>● ਿਕ ਮਾ</p>
                <p className={styles.block_1383}>● ਕਰੀਨਾ</p>
                <p className={styles.block_1416}>● ਸਰਜ</p>
                <p className={styles.block_366}>● ਿਰ ੀ</p>
                <p className={styles.block_1395}>● ਰਣਬੀਰ</p>
                <p className={styles.block_1386}>● ਪਵਨ</p>
                <p className={styles.block_1411}>● ਅਰਿਵਦ</p>
                <p className={styles.block_1391}>● ਮਕਲ</p>
                <p className={styles.block_1401}>● ਆ ਤ</p>
                <p className={styles.block_1408}>● ਗਗਨ</p>
                <p className={styles.block_1416}>● ਦਰਗ</p>
                <p className={styles.block_1385}>● ਵੀਣਾ</p>
                <p className={styles.block_365}>● ਿਵਨ</p>
                <p className={styles.block_1383}>● ਆਿਮਰ</p>
                <p className={styles.block_1414}>● ਮਕ</p>
                <p className={styles.block_1390}>● ਿਕ ਨ</p>
                <p className={styles.block_1391}>● ਸਹਲ</p>
                <p className={styles.block_1381}>● ਸਲਮਾਨ</p>
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
                <p className={styles.block_1435}>
                  Correct: ਮ ਸਿਣਆ ਹ ਿਕ T-Mobile ਅਤ Yahoo
                </p>
                <p className={styles.block_1436}>ਿਵਚਕਾਰ ਸਮਝਤਾ ਹ ਿਗਆ ਹ।</p>
                <p className={styles.block_1437}>
                  Incorrect: ਮ ਸਿਣਆ ਹ ਿਕ ਟੀ ਮਬਾਈਲ ਅਤ ਯਾਹ
                </p>
                <p className={styles.block_1438}>ਿਵਚਕਾਰ ਸਮਝਤਾ ਹ ਿਗਆ ਹ।</p>
                <p className={styles.block_1439}>
                  Explanation: "Yahoo" ਅਤ "T-Mobile" ਦ ਿਵਚ ਇਕ
                </p>
                <p className={styles.block_1440}>
                  ਹਾਈਫਨ ਲਗਾ ਹਇਆ ਹ। ਉਹ ਇਸ ਲਈ ਿਕ ਿਕ ਕਪਨੀ ਦੀ
                </p>
                <p className={styles.block_1441}>
                  ਆਫੀ ੀਅਲ ਵਬਸਾਈਟ 'ਤ ਐਵ ਿਲਿਖਆ ਹਇਆ ਹ।
                </p>
                <p className={styles.block_1442}>Correct: ਜਗ ਬਾਣੀ</p>
                <p className={styles.block_1443}>Incorrect: ਜਗਬਾਣੀ</p>
                <p className={styles.block_1444}>Incorrect: ਜਗ-ਬਾਣੀ</p>
                <p className={styles.block_1445}>
                  Explanation: "ਜਗ ਬਾਣੀ" ਨ ਉਹਨ ਦੀ ਆਫੀ ੀਅਲ
                </p>
                <p className={styles.block_1446}>
                  ਵਬਸਾਈਟ 'ਤ "ਜਗ" ਅਤ "ਬਾਣੀ" ਦ ਿਵਚਕਾਰ ਸਪਸ ਦ ਨਾਲ
                </p>
                <p className={styles.block_1447}>ਿਲਿਖਆ ਹਇਆ ਹ।</p>
                <p className={styles.block_1448}>Correct: ਪਜਾਬ 1984</p>
                <p className={styles.block_1449}>Incorrect: ਪਜਾਬ ਨੀ ਸ ਚਰਾਸੀ</p>
                <p className={styles.block_1450}>
                  Explanation: ਇਸ ਿਫਲਮ ਦਾ ਿਵਕੀਪੀਡੀਆ 'ਤ ਨਾਮ
                </p>
                <p className={styles.block_1451}>
                  "ਪਜਾਬ 1984" ਹ, ਨਾ ਿਕ ਪਜਾਬ ਨੀ ਸ ਚਰਾਸੀ।
                </p>
                <p className={styles.block_1452}>Correct: ਮੀਡੀਆ ਪਜਾਬ</p>
                <p className={styles.block_1453}>Incorrect: ਮੀਡੀਆਪਜਾਬ</p>
                <p className={styles.block_1454}>
                  Explanation: ਭਾਵ ਿਕ "ਮੀਡੀਆ ਪਜਾਬ" ਨਾਮ ਅਗਰਜੀ 'ਚ
                </p>
                <p className={styles.block_1455}>
                  ਿਬਨ ਸਪਸ ਦ ਹ ਪਰ ਪਜਾਬੀ 'ਚ ਇਸਨ ਸਪਸ ਨਾਲ ਿਲਖਣਾ
                </p>
                <p className={styles.block_1456}>
                  ਹ। ਿਕ ਿਕ ਅਿਜਹਾ ਉਹਨ ਦੀ ਵਬਸਾਈਟ 'ਤ ਿਲਿਖਆ ਹ।
                </p>
                <p className={styles.block_1457}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "ਓਕਈ". This spelling is unique to these
                  cases.
                </p>
                <p className={styles.block_612}>Correct: Ok Google</p>
                <p className={styles.block_1458}>Incorrect: ਓਕਈ, Google.</p>
                <p className={styles.block_903}>Incorrect: OK Google.</p>
                <p className={styles.block_1027}>
                  Explanation: "Ok" "Google" ਤ ਪਿਹਲ ਆ ਿਰਹਾ ਹ, ਸ
                </p>
                <p className={styles.block_787}>
                  ਇਸ ਕਰਕ ਇਸਨ "Ok" ਿਲਖਣਾ ਹ "ਓਕਈ" ਨਹ ਿਲਖਣਾ।
                </p>
                <p className={styles.block_1459}>Correct: Ok Google Now</p>
                <p className={styles.block_1460}>
                  Incorrect: Okay, Google Now.
                </p>
                <p className={styles.block_289}>
                  Explanation: "Ok Google Now" ਵਾਕ "Ok Google"
                </p>
                <p className={styles.block_1461}>
                  ਦੀ ਹੀ ਿਵ ਤਪਤ ਹ ਅਤ ਇਸਨ ਓਵ ਹੀ ਟਰ ਸਕ ਾਈਬ ਕਰਨਾ
                </p>
                <p className={styles.block_1462}>ਹ ਿਜਵ ਇਹ ਿਲਿਖਆ ਹਇਆ ਹ।</p>
                <p className={styles.block_1463}>
                  Correct: Ok Google, ਚਾਹ ਦੀ ਦਕਾਨ ਿਕਥ ਹ?
                </p>
                <p className={styles.block_1464}>
                  Incorrect: Ok Google ਚਾਹ ਦੀ ਦਕਾਨ ਿਕਥ ਹ?
                </p>
                <p className={styles.block_1152}>
                  Explanation: "Ok Google" ਵਾਕ ਮਗਰ ਕਾਮ ਦੀ ਵਰਤ
                </p>
                <p className={styles.block_1465}>
                  ਕਰਨੀ ਹ। ਇਹੀ ਇਸਦੀ ਸਹੀ ਟਰ ਸਿਕ ਪ ਨ ਹ।
                </p>
                <p className={styles.block_1466}>Correct: Ok Google, ਕਦ</p>
                <p className={styles.block_1467}>Incorrect: Ok Google ਕਦ</p>
                <p className={styles.block_1468}>
                  Incorrect: ਭਾਵ ਿਕ ਕਦ ਿਸਰਫ ਇਕ ਬਦ ਹ ਪਰ ਿਫਰ ਵੀ
                </p>
                <p className={styles.block_1469}>
                  "Ok Google" ਅਤ "ਕਦ" ਿਵਚਕਾਰ ਕਾਮ ਦੀ ਵਰਤ ਕਰਨੀ
                </p>
                <p className={styles.block_1470}>
                  <span className={styles.text_16}>ਹ। </span>
                  <span className={styles.text_27}>
                    <sub className={styles.calibre1}>Correct: ਓਕਈ </sub>
                  </span>
                </p>
                <p className={styles.block_1471}>Incorrect: Ok</p>
                <p className={styles.block_1472}>
                  Explanation: ਿਕ ਿਕ "ਓਕਈ" ਵਾਕ "Ok Google" ਦਾ
                </p>
                <p className={styles.block_1473}>
                  ਿਹਸਾ ਨਹ ਹ ਇਸ ਕਰਕ ਇਸਨ "ਓਕਈ" ਿਲਿਖਆ ਜਾਵ।
                </p>
                <p className={styles.block_1474}>Correct: ਓਕਈ, ਰਮਨ।</p>
                <p className={styles.block_1475}>Incorrect: Ok ਰਮਨ।</p>
                <p className={styles.block_385}>
                  Explanation: "ਓਕਈ" ਨ ਿਸਰਫ ਉਦ ਹੀ "Ok" ਿਲਖਣਾ ਹ
                </p>
                <p className={styles.block_1476}>ਜਦ ਉਹ "Google" ਤ ਪਿਹਲ ਆਵ।</p>
                <p className={styles.block_1477}>
                  Spellings of common Brand and Product names
                </p>
                <p className={styles.block_1390}>● ਵਨਡੀ</p>
                <p className={styles.block_1398}>● ਥ ੀਡੀਐਸ</p>
                <p className={styles.block_1426}>● ਫਿਲਪਕਾਰਟ</p>
                <p className={styles.block_1405}>● ਐਡੀਡਾਸ</p>
                <p className={styles.block_1398}>● ਐਮਾਜਾਨ</p>
                <p className={styles.block_1121}>● ਐਡਾਰਾਇਡ ਮਾਰਿਕਟ</p>
                <p className={styles.block_1478}>● ਐਗਰੀ ਬਰਡਸ</p>
                <p className={styles.block_1479}>● ਿਰਲਾਇਸ</p>
                <p className={styles.block_1421}>● ਬਾਰਕਲਸ</p>
                <p className={styles.block_1480}>● ਬੀਬੀਸੀ ਵਨ</p>
                <p className={styles.block_1481}>● ਬਲਕ ਐਡ ਡਕਰ</p>
                <p className={styles.block_1482}>● ਬਲਕ ਓਪੀਐਸ ਟ</p>
                <p className={styles.block_1483}>● ਬਲਕਬਰੀ</p>
                <p className={styles.block_1421}>● ਸਨ ਪਡੀਲ</p>
                <p className={styles.block_1484}>● ਬਰਗਰ ਿਕਗ</p>
                <p className={styles.block_1390}>● ਕ ੀਓ</p>
                <p className={styles.block_1416}>● ਨ ਲ</p>
                <p className={styles.block_1391}>● ਕਰਮ</p>
                <p className={styles.block_1407}>● ਗਦਰਜ</p>
                <p className={styles.block_1410}>● ਸਪਾਈਕਰ</p>
                <p className={styles.block_1425}>● ਕਕਾ-ਕਲਾ</p>
                <p className={styles.block_1403}>● ਕਰਸਿਫਟ</p>
                <p className={styles.block_1485}>● ਡਾਇਰਕਟੀਵੀ</p>
                <p className={styles.block_1381}>● ਡਮੀਨ ਜ਼</p>
                <p className={styles.block_1486}>● ਡਰਗਨ ਕਵਸਟ ਇਲਵਨ</p>
                <p className={styles.block_1391}>● ਲਕਸ</p>
                <p className={styles.block_368}>● ਈ-ਿਸਗਰਟ</p>
                <p className={styles.block_1410}>● ਅਰਥਿਲਕ</p>
                <p className={styles.block_1431}>● ਇਜੀਜਟ</p>
                <p className={styles.block_1390}>● ਈਬਅ</p>
                <p className={styles.block_1487}>● ਈਹਾਰਮਨੀ</p>
                <p className={styles.block_368}>● ਐਵਰਟਨ ਟ</p>
                <p className={styles.block_1413}>● ਫਸਬਕ</p>
                <p className={styles.block_1385}>● ਫੀਫਾ</p>
                <p className={styles.block_1381}>● ਫਿਲਕਰ</p>
                <p className={styles.block_1487}>● ਫਾਰਮਲਾ 1</p>
                <p className={styles.block_1488}>● ਜੀਮਲ</p>
                <p className={styles.block_1394}>● ਗਗਲ</p>
                <p className={styles.block_1489}>● ਗਗਲ ਐਪਸ</p>
                <p className={styles.block_1490}>● ਗਗਲ ਕਲਡਰ</p>
                <p className={styles.block_1491}>● ਗਗਲ ਅਰਥ</p>
                <p className={styles.block_1492}>● ਗਗਲ ਇਮਜਸ</p>
                <p className={styles.block_370}>● ਗਗਲ ਮਲ</p>
                <p className={styles.block_1489}>● ਗਗਲ ਸਰਚ</p>
                <p className={styles.block_1493}>● ਗਗਲ ਸਟ ੀਟ ਿਵਊ</p>
                <p className={styles.block_1494}>● ਗਗਲ ਟਲਬਾਰ</p>
                <p className={styles.block_1495}>● ਜੀਐਸਐਮਏਰੀਨਾ</p>
                <p className={styles.block_1119}>● ਸਨੀ</p>
                <p className={styles.block_1479}>● ਜੀਟੀਏ V</p>
                <p className={styles.block_1496}>● ਿਫਿਲਪਸ</p>
                <p className={styles.block_1390}>● ਹਰੀਬ</p>
                <p className={styles.block_1423}>● ਹਾਕ-ਆਈ</p>
                <p className={styles.block_1398}>● ਹਬੀਿਕਗ</p>
                <p className={styles.block_1412}>● ਹਟਮਲ</p>
                <p className={styles.block_1383}>● ਿਮਤਰਾ</p>
                <p className={styles.block_1431}>● ਆਈਮਕ</p>
                <p className={styles.block_1480}>● ਮਾਈਕ ਮਕਸ</p>
                <p className={styles.block_364}>● ਆਈਓਐਸ</p>
                <p className={styles.block_1393}>● ਆਈਪਡ</p>
                <p className={styles.block_1431}>● ਆਈਫਨ</p>
                <p className={styles.block_1426}>● ਆਈਪਲਅਰ</p>
                <p className={styles.block_368}>● ਆਈਥੀਮਸ</p>
                <p className={styles.block_1497}>● ਆਈਟੀਵੀ ਪਲਅਟ</p>
                <p className={styles.block_1387}>● ਕਲਗਸ</p>
                <p className={styles.block_1424}>● ਿਕਟ ਕਟ</p>
                <p className={styles.block_1403}>● ਲ ਡ ਰਵਰ</p>
                <p className={styles.block_1498}>● ਲਜੀ ਟਾਊਨ</p>
                <p className={styles.block_1430}>● ਲੀਗ</p>
                <p className={styles.block_1393}>● ਲੀਗਲ ਡ</p>
                <p className={styles.block_370}>● ਿਲਕਡਇਨ</p>
                <p className={styles.block_1407}>● ਮਰਨ 5</p>
                <p className={styles.block_1499}>● ਮਕਡਨਲਡਜ਼</p>
                <p className={styles.block_1399}>● ਮਗਾਬਸ</p>
                <p className={styles.block_1484}>● ਮਾਈਨਕ ਾਫਟ</p>
                <p className={styles.block_366}>● ਿਮਨੀ</p>
                <p className={styles.block_1409}>● ਐਮਕ 4</p>
                <p className={styles.block_1401}>● ਐਚਪੀ</p>
                <p className={styles.block_1480}>● ਨ ਟਫਿਲਕਸ</p>
                <p className={styles.block_1412}>● ਨਾਇਕੀ</p>
                <p className={styles.block_1405}>● ਓਰਲ-ਬੀ</p>
                <p className={styles.block_1407}>● ਿਪਕਾਸਾ</p>
                <p className={styles.block_1500}>● ਪਲ ਟ ਵਰਸਸ ਜ ਬੀਸ</p>
                <p className={styles.block_1485}>● ਪਲਸਟ ਨ 4</p>
                <p className={styles.block_1501}>● ਪਲਸਟ ਨ 1</p>
                <p className={styles.block_1424}>● ਪਲੀਿਟਕ</p>
                <p className={styles.block_1398}>● ਪਰਨਹਬ</p>
                <p className={styles.block_1392}>● ਪਰ</p>
                <p className={styles.block_1502}>● ਪਾਵਰ ਪਵਾਇਟ</p>
                <p className={styles.block_1503}>● ਪੀਐਸਫਰ</p>
                <p className={styles.block_1399}>● ਰਅ-ਬਨ</p>
                <p className={styles.block_1504}>● ਰੀਅਲਪਲਅਰ</p>
                <p className={styles.block_1489}>● ਰਲਸ-ਰਇਸ</p>
                <p className={styles.block_1505}>● ਸਮਸਗ ਗਲਕਸੀ</p>
                <p className={styles.block_1506}>● ਸਮਸਗ ਗਲਕਸੀ ਐਸ II</p>
                <p className={styles.block_1486}>● ਸਮਸਗ ਗਲਕਸੀ ਐਸ III</p>
                <p className={styles.block_1507}>● ਸਮਸਗ ਗਲਕਸੀ ਐਸ4</p>
                <p className={styles.block_1507}>● ਸਮਸਗ ਗਲਕਸੀ ਐਸ5</p>
                <p className={styles.block_1428}>● ਿਸਮਿਸਟੀ</p>
                <p className={styles.block_1406}>● ਿਸਰੀ</p>
                <p className={styles.block_1508}>● ਸਮਾਰਟ ਕਾਰ</p>
                <p className={styles.block_1428}>● ਸਨ +ਰਾਕ</p>
                <p className={styles.block_1509}>● ਸਟਾਰਬਕਸ</p>
                <p className={styles.block_1510}>● ਟੀ-ਮਬਾਈਲ</p>
                <p className={styles.block_365}>● ਡ ਲ</p>
                <p className={styles.block_1412}>● ਟਮਟਮ</p>
                <p className={styles.block_366}>● ਟਾਟਾ</p>
                <p className={styles.block_1511}>● ਇਡੀਅਨ ਆਇਲ</p>
                <p className={styles.block_1429}>● ਟਮਬਲਰ</p>
                <p className={styles.block_1395}>● ਟਵੀਟਰ</p>
                <p className={styles.block_1512}>● ਵਰਜਨ ਮੀਡੀਆ</p>
                <p className={styles.block_1406}>● ਵੀਜ਼ਾ</p>
                <p className={styles.block_1429}>● ਵਟਸਐਪ</p>
                <p className={styles.block_1513}>● ਰਸਲਮਨੀਆ XXX</p>
                <p className={styles.block_1482}>● ਐਚਡੀਐਫਸੀ ਬ ਕ</p>
                <p className={styles.block_1514}>● ਐਕਸਬਾਕਸ</p>
                <p className={styles.block_1515}>● ਐਕਸਬਾਕਸ 360</p>
                <p className={styles.block_1516}>● ਐਕਸਬਾਕਸ ਵਨ</p>
                <p className={styles.block_1119}>● ਯਾਹ</p>
                <p className={styles.block_1517}>● ਯਪਰਨ</p>
                <p className={styles.block_1399}>● ਯਿਟਊਬ</p>
                <p className={styles.block_1394}>● ਫਡਰਾ</p>
                <p className={styles.block_1424}>● ਜੀਬਾਕਸ</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_1520}>Correct: ਕ ਡੀ ਕ ਦਾ ਸਕਰੀਨ ਾਟ</p>
                <p className={styles.block_1521}>
                  Incorrect: "ਕ ਡੀ ਕ " ਦਾ ਸਕਰੀਨ ਾਟ
                </p>
                <p className={styles.block_1522}>
                  Explanation: ਿਕਸ ਵੀਡੀਓ ਗਮ ਨ ਟਰ ਸਕ ਾਈਬ ਕਰਨ
                </p>
                <p className={styles.block_1523}>
                  ਵਲ ਉਲਟ ਕਾਿਮਆ ਦੀ ਵਰਤ ਨਹ ਕੀਤੀ ਜ ਦੀ।
                </p>
                <p className={styles.block_1524}>
                  Correct: ਅਿਰਜੀਤ ਿਸਘ ਦਾ ਤਮ ਹੀ ਹ ਗਾਣਾ ਚਲਾਓ।
                </p>
                <p className={styles.block_1525}>
                  Incorrect: ਅਿਰਜੀਤ ਿਸਘ ਦਾ "ਤਮ ਹੀ ਹ" ਗਾਣਾ ਚਲਾਓ।
                </p>
                <p className={styles.block_1526}>
                  Explanation: ਗਾਣ ਦਾ ਨਾਮ ਿਲਖਣ ਵਲ ਉਲਟ ਕਾਿਮਆ ਦੀ
                </p>
                <p className={styles.block_1527}>ਵਰਤ ਨਾ ਕਰ।</p>
                <p className={styles.block_1528}>
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
                <p className={styles.block_1529}>
                  Correct: ਿਕ ! ਹ ਿਗਆ ਨਾ ਕਦ ਰੀਲੀਜ਼ ਹਈ ਸੀ?
                </p>
                <p className={styles.block_1530}>
                  Incorrect: ਿਕ ਹ ਿਗਆ ਨਾ ਕਦ ਰੀਲੀਜ਼ ਹਈ ਸੀ?
                </p>
                <p className={styles.block_1531}>
                  Correct: ਤਸ ਦਖੀ ਿਫਲਮ ਮਝਸ ਦਸਤੀ ਕਰਗ!
                </p>
                <p className={styles.block_1532}>
                  Incorrect: ਤਸ ਦਖੀ ਿਫਲਮ ਮਝਸ ਦਸਤੀ ਕਰਗ!?
                </p>
                <p className={styles.block_1533}>
                  Explanation: "ਤਸ ਦਖੀ ਿਫਲਮ ਮਝਸ ਦਸਤੀ ਕਰਗ!" ਇਕ
                </p>
                <p className={styles.block_1534}>
                  ਮਵੀ ਦਾ ਨਾਮ ਹ ਿਜਸਦ ਿਪਛ ਿਵਸਿਮਕ ਿਚਨ ਲਗਾ ਹਇਆ ਹ।
                </p>
                <p className={styles.block_1535}>
                  Format lyrics that form a sentence as you would a normal
                  sentence.
                </p>
                <p className={styles.block_1536}>
                  Correct: ਯਿਟਊਬ ਰਾਤ ਦੀ ਗੜੀ ਗਲ ਿਰਸਕ ਦੀ, ਤ ਘ ਿਛੜੀ
                </p>
                <p className={styles.block_1537}>ਏ ਤਰ ਇ ਕ ਦੀ।</p>
                <p className={styles.block_1538}>
                  Incorrect: ਯਿਟਊਬ ਰਾਤ ਦੀ ਗੜੀ ਗਲ ਿਰਸਕ ਦੀ ਤ ਘ
                </p>
                <p className={styles.block_1539}>ਿਛੜੀ ਏ ਤਰ ਇ ਕ ਦੀ।</p>
                <p className={styles.block_1540}>
                  Explanation: ਇਥ ਵਕਤਾ ਗਾਣ ਦ ਟਾਈਟਲ ਨ ਜਗ ਾ ਗਾਣ
                </p>
                <p className={styles.block_1541}>
                  ਦੀ ਪਰੀ ਲਾਈਨ ਬਲ ਿਦਦਾ ਹ; ਇਸਦਾ ਫਾਰਮਟ ਇਕ ਪਰ ਵਾਕ
                </p>
                <p className={styles.block_1542}>ਵ ਗ ਬਣਾਓ।</p>
                <p className={styles.block_1543}>
                  Transcribe foreign media titles if they are commonly
                  understood by Punjabi speakers. Transcribe all media titles in
                  Gurmukhi script.
                </p>
                <p className={styles.block_1544}>Correct: ਟਾਇਟਿਨਕ</p>
                <p className={styles.block_1545}>Incorrect: Titanic</p>
                <p className={styles.block_1546}>Incorrect: [skip]</p>
                <p className={styles.block_1547}>Correct: ਅਮਲੀਏ</p>
                <p className={styles.block_1545}>Incorrect: Amelie</p>
                <p className={styles.block_1546}>Incorrect: [skip]</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_1550}>Correct: ਸਮਾਿਜਕ</p>
                <p className={styles.block_944}>Incorrect: ਸਮਾਜਕ</p>
                <p className={styles.block_394}>
                  Explanation: "ਸਮਾਿਜਕ" ਅਤ "ਸਮਾਜਕ" ਦਵ ਪਜਾਬੀ ਦ
                </p>
                <p className={styles.block_410}>
                  ਆਮ ਸਪਿਲਗ ਹਨ ਅਤ ਇਹਨ ਦੀ ਦਵ ਦੀ ਵਰਤ ਆਮ ਹਦੀ
                </p>
                <p className={styles.block_1551}>
                  ਹ। ਪਰ ਿਫਰ ਵੀ "ਸਮਾਿਜਕ" ਸਪਿਲਗ ਦੀ ਵਰਤ ਪਜਾਬੀ
                </p>
                <p className={styles.block_228}>
                  ਯਨੀਵਰਿਸਟੀ ਦੀ ਅਗਰਜੀ-ਪਜਾਬੀ ਿਡਕ ਨਰੀ 'ਚ ਿਜਆਦਾ
                </p>
                <p className={styles.block_1552}>
                  ਕੀਤੀ ਗਈ ਹ, ਸ ਇਸ ਨ ਹੀ ਹਰ ਜਗ ਾ ਐਵ ਹੀ ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_1553}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the [skip] tag.
                </p>
                <p className={styles.block_1554}>
                  <span className={styles.text_24}>Correct: ਿਮਆ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਿਮਆ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1555}>
                  Explanation: ਪਜਾਬੀ 'ਚ ਿਬਲੀ ਦੀ ਅਵਾਜ਼ ਨ ਦਰਸਾਉਣ
                </p>
                <p className={styles.block_1556}>
                  ਲਈ "ਿਮਆ " ਬਦ ਹ, ਸ ਇਸ ਅਵਾਜ਼ ਨ "ਿਮਆ " ਿਲਖਣਾ
                </p>
                <p className={styles.block_1557}>ਚਾਹੀਦਾ ਹ।</p>
                <p className={styles.block_1558}>
                  <span className={styles.text_28}>Correct: [skip] </span>
                  <span className={styles.text_10}>
                    Explanation: ਇਥ ਵਕਤਾ ਨ ਿਬਲੀ ਦੀ ਅਵਾਜ਼ ਕਢੀ ਹ ਪਰ
                  </span>
                </p>
                <p className={styles.block_1559}>
                  ਿਬਲੀ ਲਈ ਿਮਆ " ਦੀ ਵਰਤ ਨਹ ਕੀਤੀ, ਸ ਇਸਨ [skip]
                </p>
                <p className={styles.block_1560}>ਕਰਨਾ ਹ।</p>
                <p className={styles.block_1561}>
                  Use official spellings for technical terms. Google them and
                  pay attention to the correct format.
                </p>
                <p className={styles.block_1562}>
                  Correct: Pseudotsuga menziesii
                </p>
                <p className={styles.block_1563}>Correct: E. coli</p>
                <p className={styles.block_1564}>Correct: Metronidazole</p>
                <p className={styles.block_1565}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_1566}>Correct: ਿਕਦ ?</p>
                <p className={styles.block_1567}>Incorrect: ਕੀ ਹਾਲ ਹ?</p>
                <p className={styles.block_1568}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਿਕਦ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1569}>
                  Explanation: "ਿਕਦ " "ਕੀ ਹਾਲ ਹ" ਦਾ ਗਰ-ਿਮਆਰੀ ਰਪ
                </p>
                <p className={styles.block_654}>
                  ਹ। ਸਹੀ ਟਰ ਸਿਕ ਪ ਨ 'ਚ "ਿਕਦ " ਨ ਇਸਨ ਇਸਦ ਿਮਆਰੀ
                </p>
                <p className={styles.block_874}>
                  ਰਪ 'ਚ ਨਹ ਬਦਲਣਾ, ਬਲਿਕ ਇਸਨ "ਿਕਦ " ਹੀ ਰਿਹਣ ਦਣਾ
                </p>
                <p className={styles.block_1570}>ਹ।</p>
                <p className={styles.block_1571}>Correct: ਉਸਨ ਚਾਹ ਪੀਤਾ।</p>
                <p className={styles.block_1572}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਉਸਨ ਚਾਹ ਪੀਤਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1573}>Incorrect: ਉਸਨ ਚਾਹ ਪੀਤੀ।</p>
                <p className={styles.block_1574}>
                  Explanation: ਭਾਵ ਿਕ "ਚਾਹ ਪੀਤਾ" ਪਜਾਬੀ ਦ ਿਵਆਕਰਨ
                </p>
                <p className={styles.block_874}>
                  ਅਨਸਾਰ ਸਹੀ ਨਹ ਹ, ਇਸਨ "ਚਾਹ ਪੀਤਾ" ਹੀ ਟਰ ਸਕ ਾਈਬ
                </p>
                <p className={styles.block_1575}>
                  ਹੀ ਕਰਨਾ ਹ ਅਤ ਇਸਨ "ਚਾਹ ਪੀਤੀ" 'ਚ ਨਹ ਬਦਲਣਾ।
                </p>
                <p className={styles.block_1576}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_11}>
                    Correct: ਮਨ ਉਸ 'ਤ ਭਰਸਾ ਹ{' '}
                  </span>
                </p>
                <p className={styles.block_1577}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਮਨ ਉਸ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਤ ਭਰਸਾ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1146}>Incorrect: ਮਨ ਉਸ ਤ ਭਰਸਾ ਹ</p>
                <p className={styles.block_1578}>
                  Explanation: "'ਤ" ਬਦ " ਤ" ਬਦ ਦਾ ਸਗਿੜਆ ਰਪ
                </p>
                <p className={styles.block_571}>
                  ਹ। ਇਸਨ " ਤ" ਨਹ ਟਰ ਸਕ ਾਈਬ ਕਰਨਾ ਬਲਿਕ ਿਜਵ ਹ
                </p>
                <p className={styles.block_1579}>ਉਵ ਹੀ ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_1580}>Correct: ਮਨ ਉਸ ਤ ਭਰਸਾ ਹ।</p>
                <p className={styles.block_1581}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਮਨ ਉਸ ਤ ਭਰਸਾ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1582}>Incorrect: ਮਨ ਉਸ 'ਤ ਭਰਸਾ ਹ</p>
                <p className={styles.block_615}>
                  Explanation: ਇਥ ਵਕਤਾ ਨ "ਉਸ ਤ" ਨ ਪਰ ਬਦ 'ਚ
                </p>
                <p className={styles.block_1052}>
                  ਿਲਿਖਆ ਹ। ਸ ਇਸਨ ਇਸਦ ਸਗੜ ਰਪ "ਉਸ 'ਤ" 'ਚ ਨਹ
                </p>
                <p className={styles.block_1583}>ਿਲਖਣਾ।</p>
                <p className={styles.block_1584}>
                  Use standard spellings for reductions that commonly occur in
                  normal running speech, like "ਿਕਸ ਿਦਨ", ਿਜਸ ਿਦਨ" for "ਿਕਦਣ",
                  "ਿਜਦਣ".
                </p>
                <p className={styles.block_1585}>Correct: ਤਸ ਿਕਸ ਿਦਨ ਜਾਓਗ?</p>
                <p className={styles.block_284}>Incorrect: ਤਸ ਿਕਦਣ ਜਾਓਗ?</p>
                <p className={styles.block_1586}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਤਸ ਿਕਦਣ ਜਾਓਗ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1587}>
                  Explanation: ਭਾਵ ਿਕ ਵਕਤਾ ਨ "ਿਕਦਣ" ਿਕਹਾ, ਪਰ ਇਹ
                </p>
                <p className={styles.block_1588}>
                  ਗਰ ਿਮਆਰੀ ਬਦ-ਜੜ ਹਨ ਅਤ ਇਹਨ ਨ ਿਮਆਰੀ
                </p>
                <p className={styles.block_1589}>ਬਦ-ਜੜ "ਿਕਸ ਿਦਨ" 'ਚ ਬਦਲਣਾ ਹ।</p>
                <p className={styles.block_1590}>
                  Correct: ਮ ਉਸ ਿਦਨ ਜਾਵ ਗਾ ਿਜਸ ਿਦਨ ਤਸ ਜਾਵਗ।
                </p>
                <p className={styles.block_1591}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਮ ਓਦਣ ਜਾਵ ਗਾ ਿਜਦਣ ਤਸ ਜਾਵਗ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_880}>
                  Incorrect: ਮ ਓਦਣ ਜਾਵ ਗਾ ਿਜਦਣ ਤਸ ਜਾਵਗ।
                </p>
                <p className={styles.block_1592}>
                  Explanation: ਭਾਵ ਿਕ ਵਕਤਾ ਨ "ਓਦਣ" ਅਤ "ਿਜਦਣ"
                </p>
                <p className={styles.block_268}>
                  ਿਕਹਾ, ਪਰ ਇਹ ਗਰ ਿਮਆਰੀ ਸਪਿਲਗ ਹਨ ਅਤ ਇਹਨ ਨ
                </p>
                <p className={styles.block_1593}>
                  ਿਮਆਰ ਸਪਿਲਗ "ਉਸ ਿਦਨ" ਅਤ "ਿਕਸ ਿਦਨ" 'ਚ ਬਦਲਣਾ
                </p>
                <p className={styles.block_343}>ਹ।</p>
                <p className={styles.block_1594}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_1595}>
                  <span className={styles.text_24}>Correct: ਿਕ ਕਟ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਿਕਰਕਟ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1596}>
                  <span className={styles.text_24}>Correct: ਰਮਨ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਲਮਨ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1597}>
                  <span className={styles.text_13}>Correct: ਧਨਵਾਦ </span>
                  <span className={styles.text_14}>
                    Explanation: ਵਕਤਾ ਨ ਿਹਦੀ ਲਿਹਜ 'ਚ ਿਕਹਾ "ਤਨਵਾਦ"
                  </span>
                </p>
                <p className={styles.block_1598}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_1599}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_1600}>
                  <span className={styles.text_11}>Correct: ਕਲਲੀ </span>
                  <span className={styles.text_15}>
                    Explanation: ਵਕਤਾ ਨ ਕਲਲੀ " ਬਦ" ਬਿਲਆ। ਇਹ{' '}
                  </span>
                </p>
                <p className={styles.block_1601}>
                  ਸਣਨ 'ਚ ਤ ਪਿਹਲ ਅਜੀਬ ਲਗਦਾ ਹ ਟਰ ਸਕ ਾਈਬ ਕਰਨ
                </p>
                <p className={styles.block_1602}>
                  ਵਾਲ ਨ ਇਸਦ ਸਪਿਲਗ ਬਝ ਲ ਦਾ ਹ ਅਤ ਉਸਨ ਗਗਲ 'ਚ
                </p>
                <p className={styles.block_1603}>
                  ਸਰਚ ਕਰਕ ਉਹਨ ਸਪਿਲਗ ਨ ਸਹੀ ਕਰ ਲ ਦਾ ਹ।
                </p>
                <p className={styles.block_1604}>
                  <span className={styles.text_11}>Correct: ਸਕ ਅਬਦਾਲੀ </span>
                  <span className={styles.text_15}>
                    Explanation: ਯਜ਼ਰ ਨ ਿਕਹਾ "ਸਕ ਅਬਦਾਲੀ"।{' '}
                  </span>
                </p>
                <p className={styles.block_1605}>
                  ਟਰ ਸਕ ਾਈਬਰ ਨ "ਸਕਅਬਦਾਲੀ" ਸਰਚ ਕੀਤਾ ਅਤ ਸਹੀ
                </p>
                <p className={styles.block_1606}>
                  ਨਤੀਜਾ ਪ ਾਪਤ ਕੀਤਾ। ਤ "ਸਕ ਅਬਦਾਲੀ" ਨ ਟਰ ਸਕ ਾਈਬ
                </p>
                <p className={styles.block_1607}>ਕਰ।</p>
                <p className={styles.block_1608}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1609}>Correct: ਟਗਨਬਰਪ</p>
                <p className={styles.block_1610}>
                  If a word appears to be nonsense, a Google search returns no
                  clear results, and the word is unintelligible or there is no
                  single obvious spelling, transcribe \[skip\].
                </p>
                <p className={styles.block_1611}>
                  <span className={styles.text_22}>Correct: [skip] </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਪੀਅਕਾਨਡਕ </span>
                  <span className={styles.text_8}>" </span>
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
