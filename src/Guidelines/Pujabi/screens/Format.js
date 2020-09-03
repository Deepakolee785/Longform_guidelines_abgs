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
            <PageContentHeader currentPage="longform Pujabi" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Only Western Arabic numerals should be used.
                </p>
                <p className={styles.block_778}>
                  Cardinals and ordinals from 0 to 9 should be written with
                  letters except for measures and currency. Use digits for
                  cardinals and ordinals 10 and above. Transcribe all decimal
                  numbers as digits.
                </p>
                <p className={styles.block_779}>
                  Correct: ਕਲਾਸ 'ਚ ਨ ਿਵਿਦਆਰਥੀ ਹਨ।
                </p>
                <p className={styles.block_780}>
                  Incorrect: ਕਲਾਸ 'ਚ 9 ਿਵਿਦਆਰਥੀ ਹਨ।
                </p>
                <p className={styles.block_781}>
                  Explanation: 10 ਤ ਘਟ ਵਾਲ ਨਬਰ ਨ ਅਖਰ 'ਚ
                </p>
                <p className={styles.block_782}>
                  ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ, ਸ ਇਸ ਕਰਕ 9 ਅਕ ਨ "ਨ "
                </p>
                <p className={styles.block_783}>ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_784}>
                  Correct: ਕਲਾਸ 'ਚ 13 ਿਵਿਦਆਰਥੀ ਹਨ।
                </p>
                <p className={styles.block_785}>
                  Incorrect: ਕਲਾਸ 'ਚ ਤਰ ਿਵਿਦਆਰਥੀ ਹਨ।
                </p>
                <p className={styles.block_786}>
                  Explanation: 10 ਤ ਵਧ ਵਾਲ ਨਬਰ ਨ ਅਕ 'ਚ ਿਲਿਖਆ
                </p>
                <p className={styles.block_787}>
                  ਜਾਣਾ ਚਾਹੀਦਾ ਹ। 13 ਅਕ ਨ "ਤਰ " ਨਹ ਿਲਖਣਾ, ਿਸਰਫ
                </p>
                <p className={styles.block_788}>ਅਕ "13" ਦੀ ਹੀ ਵਰਤ ਕਰ।</p>
                <p className={styles.block_789}>
                  Correct: ਮਰ ਕਲ ਛ ਕਤ ਅਤ 12 ਿਬਲੀਆ ਹਨ।
                </p>
                <p className={styles.block_790}>
                  Incorrect: ਮਰ ਕਲ 6 ਕਤ ਅਤ 12 ਿਬਲੀਆ ਹਨ।
                </p>
                <p className={styles.block_791}>
                  Incorrect: ਮਰ ਕਲ ਛ ਕਤ ਅਤ ਬਾਰ ਿਬਲੀਆ ਹਨ।
                </p>
                <p className={styles.block_792}>
                  Explanation: ਹਾਲ ਿਕ "ਕਤ ਅਤ ਿਬਲੀਆ" ਨਬਰ 'ਚ ਿਲਖ
                </p>
                <p className={styles.block_348}>
                  ਹਏ ਹਨ, ਿਕ ਿਕ 6 ਅਕ 10 ਤ ਘਟ ਹ, ਇਸ ਕਰਕ ਇਸਨ "ਛ"
                </p>
                <p className={styles.block_793}>
                  ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ ਅਤ 12 ਨ ਅਕ 'ਚ ਿਲਿਖਆ ਜਾਣਾ
                </p>
                <p className={styles.block_794}>ਚਾਹੀਦਾ ਹ।</p>
                <p className={styles.block_795}>Correct: 101 ਿਬਲੀਆ</p>
                <p className={styles.block_796}>Incorrect: ਇਕ ਸ ਇਕ ਿਬਲੀਆ</p>
                <p className={styles.block_797}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਇਕ ਸ ਇਕ ਿਬਲੀਆ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_798}>
                  Explanation: 10 ਤ ਪਰ ਵਾਲ ਨਬਰ ਲਈ ਅਕ ਦੀ
                </p>
                <p className={styles.block_249}>
                  ਵਰਤ ਕਰ। 101 ਨਬਰ ਨ "ਇਕ ਸ ਇਕ" ਨਹ ਿਲਖਣਾ
                </p>
                <p className={styles.block_799}>
                  ਚਾਹੀਦਾ, ਬਲਿਕ ਿਸਰਫ ਅਕ 101 ਦੀ ਵਰਤ ਕਰ।
                </p>
                <p className={styles.block_800}>Correct: 3.14</p>
                <p className={styles.block_801}>Incorrect: ਿਤਨ ਦ ਮਲਵ ਇਕ ਚਾਰ</p>
                <p className={styles.block_802}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਿਤਨ ਦ ਮਲਵ ਇਕ ਚਾਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_803}>
                  Explanation: ਹਾਲ ਿਕ 3.14 ਨਬਰ 10 ਤ ਘਟ ਹ, ਇਸਨ
                </p>
                <p className={styles.block_804}>
                  ਿਲਖਣ ਲਈ ਅਕ ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ ਿਕ ਿਕ ਦ ਮਲਵ
                </p>
                <p className={styles.block_805}>
                  ਪ ਣਾਲੀ ਨ ਿਲਖਣ ਲਈ ਿਸਰਫ ਅਕ ਦੀ ਵਰਤ ਕੀਤੀ ਜ ਦੀ ਹ।
                </p>
                <p className={styles.block_806}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_807}>
                  Correct: ਉਹਨ ਨ ਪ ਟ ਸਟਰ ਤ 9 ਜ 10 ਮਛੀਆ
                </p>
                <p className={styles.block_808}>ਖਰੀਦੀਆ।</p>
                <p className={styles.block_809}>
                  Incorrect: ਉਹਨ ਨ ਪ ਟ ਸਟਰ ਤ ਨ ਜ 10 ਮਛੀਆ
                </p>
                <p className={styles.block_810}>ਖਰੀਦੀਆ।</p>
                <p className={styles.block_811}>
                  Explanation: ਭਾਵ ਿਕ 9 ਅਕ 10 ਅਕ ਤ ਛਟਾ ਹ, ਪਰ ਦਵ
                </p>
                <p className={styles.block_812}>
                  "ਮਛੀਆ" ਵਲ ਇ ਾਰਾ ਕਰਦ ਹਨ, ਅਤ ਇਕ ਨਬਰ 10 ਜ
                </p>
                <p className={styles.block_813}>ਇਸ ਤ ਵਡਾ ਹ।</p>
                <p className={styles.block_814}>
                  Correct: ਸਾਨ ਚਾਰ ਕਹੀਆ ਅਤ 14 ਤਸਿਲਆ ਦੀ ਜਰਰਤ
                </p>
                <p className={styles.block_808}>ਦੀ ਪਵਗੀ।</p>
                <p className={styles.block_815}>
                  Incorrect: ਸਾਨ 4 ਕਹੀਆ ਅਤ 14 ਤਸਿਲਆ ਦੀ ਜਰਰਤ
                </p>
                <p className={styles.block_810}>ਦੀ ਪਵਗੀ।</p>
                <p className={styles.block_816}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਸਾਨ ਚਾਰ ਕਹੀਆ ਅਤ ਚਦ ਤਸਿਲਆ{' '}
                  </span>
                </p>
                <p className={styles.block_817}>
                  <span className={styles.text_5}>ਦੀ ਜਰਰਤ ਦੀ ਪਵਗੀ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_818}>
                  Explanation: ਭਾਵ ਿਕ ਵਾਕ 'ਚ "ਕਹੀਆ ਅਤ ਤਸਲ" ਦਵ
                </p>
                <p className={styles.block_819}>
                  ਨਬਰ ਨਾਲ ਤਾਲਮਲ ਬਣਾ ਰਹ ਹਨ ਪਰ ਚਾਰ ਨਬਰ 10 ਤ
                </p>
                <p className={styles.block_268}>
                  ਛਟਾ ਹ ਇਸ ਕਰਕ ਇਸਨ ਅਖਰ ਨਾਲ ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ
                </p>
                <p className={styles.block_820}>
                  ਅਤ 14 ਨਬਰ 10 ਤ ਵਡਾ ਹ ਇਸ ਕਰਕ ਇਸਨ ਅਕ 'ਚ
                </p>
                <p className={styles.block_821}>ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ।</p>
                <p className={styles.block_822}>
                  Correct: ਉਹ ਿਤਨ ਜ ਚਾਰ ਭਾ ਾਵ ਬਲ ਲ ਦਾ ਹ।
                </p>
                <p className={styles.block_706}>
                  Explanation: 3 ਜ 4 ਨਬਰ ਇਕ ਨ ਵ ਵਲ ਇ ਾਰਾ ਕਰ
                </p>
                <p className={styles.block_823}>
                  Incorrect: ਉਹ 3 ਜ 4 ਭਾ ਾਵ ਬਲ ਲ ਦਾ ਹ।
                </p>
                <p className={styles.block_754}>
                  ਰਹ ਹਨ ਅਤ ਦਵ 10 ਤ ਛਟ ਹਨ, ਸ ਇਸ ਕਰਕ ਇਹਨ ਨ
                </p>
                <p className={styles.block_824}>"ਿਤਨ ਅਤ ਚਾਰ" ਹੀ ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_825}>
                  Correct: ਬਾਗ 'ਚ 7 ਤ 14 ਸਤਰ ਦ ਦਰਖਤ ਹਨ।
                </p>
                <p className={styles.block_826}>
                  Incorrect: ਬਾਗ 'ਚ ਸਤ ਤ 14 ਸਤਰ ਦ ਦਰਖਤ ਹਨ।
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਬਾਗ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ ਸਤ ਤ ਚਦ ਸਤਰ ਦ ਦਰਖਤ </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_5}>ਹਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_829}>
                  Explanation: ਭਾਵ ਿਕ 7 ਨਬਰ 10 ਤ ਛਟਾ ਹ ਪਰ 7 ਅਤ
                </p>
                <p className={styles.block_830}>
                  14 ਦਵ "ਸਤਰ ਦ ਦਰਖਤ " ਵਲ ਇ ਾਰਾ ਕਰਦ ਹਨ ਸ ਇਸ
                </p>
                <p className={styles.block_831}>
                  ਕਰਕ 7 ਅਤ 14 ਨਬਰ ਨ ਅਕ 'ਚ ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ।
                </p>
                <p className={styles.block_832}>
                  If a large number consists of only a number followed by "ਲਖ",
                  "ਕਰੜ", "ਅਰਬ", "ਿਬਲੀਅਨ" or higher, then transcribe as numeral
                  plus word.
                </p>
                <p className={styles.block_833}>Correct: 700 ਕਰੜ</p>
                <p className={styles.block_834}>Incorrect: 700,00,00,000</p>
                <p className={styles.block_835}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਸਤ ਸ ਕਰੜ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_836}>
                  Explanation: ਇਥ 7 ਨਬਰ ਦ ਿਪਛ "ਸ ਕਰੜ" ਆਇਆ ਹ
                </p>
                <p className={styles.block_837}>
                  ਸ ਇਸ ਕਰਕ 7 ਨਬਰ ਨ ਅਕ 'ਚ ਹੀ ਿਲਖਣਾ ਹ ਅਤ "ਸ
                </p>
                <p className={styles.block_838}>
                  ਕਰੜ" ਨ ਇਸ ਤ ਬਾਅਦ ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ।
                </p>
                <p className={styles.block_839}>Correct: 1 ਲਖ ਕਬਤਰ</p>
                <p className={styles.block_840}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਇਕ ਲਖ ਕਬਤਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_841}>Incorrect: 1,00,000 ਕਬਤਰ</p>
                <p className={styles.block_842}>
                  Explanation: "ਇਕ ਲਖ" ਇਕ ਵਡੀ ਰਕਮ ਹ ਸ ਇਸ ਕਰਕ
                </p>
                <p className={styles.block_843}>
                  ਰਆਤੀ ਨਬਰ "1" ਨ ਅਕ 'ਚ ਿਲਿਖਆ ਜਾਵ ਅਤ ਉਸ ਤ
                </p>
                <p className={styles.block_844}>ਬਾਅਦ ਲਖ ਿਲਿਖਆ ਜਾਵ।</p>
                <p className={styles.block_845}>Correct: 1,000 ਕਬਤਰ</p>
                <p className={styles.block_846}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਇਕ ਹਜਾਰ ਕਬਤਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_847}>Incorrect: 1 ਹਜਾਰ ਕਬਤਰ</p>
                <p className={styles.block_848}>
                  Explanation: ਿਸਰਫ "ਲਖ" ਜ ਇਸ ਤ ਵਡੀ ਰਕਮ ਨ ਹੀ
                </p>
                <p className={styles.block_849}>
                  ਅਖਰ 'ਚ ਿਲਖ। ਇਕ ਹਜਾਰ ਇਨਾ ਕ ਛਟਾ ਹ ਿਕ ਇਸਨ
                </p>
                <p className={styles.block_850}>
                  "1,000" ਅਕ 'ਚ ਿਲਿਖਆ ਜਾ ਸਕਦਾ ਹ।
                </p>
                <p className={styles.block_331}>Correct: 7.18 ਿਬਲੀਅਨ</p>
                <p className={styles.block_851}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਸਤ ਦ ਮਲਵ ਇਕ ਅਠ ਿਬਲੀਅਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_852}>Incorrect: 7,18,00,00,000</p>
                <p className={styles.block_853}>
                  Explanation: ਜਦ ਵਕਤਾ ਦ ਮਲਵ ਪ ਣਾਲੀ ਦ ਰ 'ਚ
                </p>
                <p className={styles.block_854}>
                  ਨਬਰ ਨ ਬਲਦਾ ਹ ਤ "ਸਤ ਦ ਮਲਵ ਇਕ ਅਠ" ਨ ਅਕ 'ਚ
                </p>
                <p className={styles.block_855}>
                  "7.18" ਿਲਖਣਾ ਹ ਅਤ ਉਸਦ ਬਾਅਦ ਿਬਲੀਅਨ ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_856}>Correct: 72,34,435</p>
                <p className={styles.block_857}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਬਹਤਰ ਲਖ ਚ ਤੀ ਹਜਾਰ ਚਾਰ ਸ ਪ ਤੀ{' '}
                  </span>
                </p>
                <p className={styles.block_858}>Incorrect: 72 ਲਖ 34435</p>
                <p className={styles.block_859}>
                  <span className={styles.text_8}>" </span>
                  <span className={styles.text_9}>
                    <sub className={styles.calibre1}>
                      Explanation: ਇਥ ਨਬਰ ਲਖ 'ਚ ਹ ਿਜਥ 7 ਨਬਰ ਲਖ ਤ
                    </sub>
                  </span>
                </p>
                <p className={styles.block_860}>
                  ਪਿਹਲ ਆ ਦਾ ਹ, ਪਰ ਇਸਨ ਅਕ 'ਚ ਹੀ ਿਲਖਣਾ ਹ ਿਜਵ ਿਕ
                </p>
                <p className={styles.block_861}>"72,34,435"</p>
                <p className={styles.block_862}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_11}>Correct: 7 ਕਰੜ ਦ </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਸਤ ਕਰੜ ਦ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>Incorrect: 7 ਕਰੜ 2</p>
                <p className={styles.block_770}>
                  Explanation: ਵਕਤਾ ਬਲਣ ਵਲ ਿਵਚ ਹੀ ਕਿਟਆ ਜ ਦਾ ਹ।
                </p>
                <p className={styles.block_769}>
                  ਹਾਲ ਿਕ ਇਥ ਨਬਰ ਪਰਾ ਨਹ ਹ, ਇਸਨ ਅਕ 'ਚ ਨਾ ਿਲਖ Incorrect:
                  7,00,00,002
                </p>
                <p className={styles.block_769}>
                  ਪਰ ਰਆਤੀ ਨਬਰ 7 ਨ ਅਕ 'ਚ ਿਲਖ ਅਤ ਉਸਦ ਬਾਅਦ
                </p>
                <p className={styles.block_770}>ਕਰੜ ਅਤ ਨਬਰ 2 ਨ "ਦ" ਿਲਖ।</p>
                <p className={styles.block_771}>Correct: ₹15 ਲਖ</p>
                <p className={styles.block_767}>Incorrect: ₹15,00,000</p>
                <p className={styles.block_771}>Correct: ₹12.25 ਕਰੜ</p>
                <p className={styles.block_767}>Incorrect: ₹12,25,00,000</p>
                <p className={styles.block_773}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_863}>Correct: 0 1 1 2 3 5 8 13</p>
                <p className={styles.block_769}>
                  Incorrect: ਜੀਰ ਇਕ ਇਕ ਦ ਿਤਨ ਪਜ ਅਠ ਤਰ
                </p>
                <p className={styles.block_767}>
                  Incorrect: 0, 1, 1, 2, 3, 5, 8, 13
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਜੀਰ ਇਕ ਇਕ ਦ ਿਤਨ ਪਜ ਅਠ ਤਰ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਨਬਰ ਨ ਸਚੀਬਧ ਢਗ ਨਾਲ ਿਲਿਖਆ ਿਗਆ
                </p>
                <p className={styles.block_769}>
                  ਹ, ਇਸ ਕਰਕ ਉਹਨ ਨ ਅਖਰ 'ਚ ਿਲਖਣਾ ਹ ਭਾਵ ਉਹ 10 ਤ
                </p>
                <p className={styles.block_770}>ਛਟ ਹਣ।</p>
                <p className={styles.block_774}>Correct: 3 2 1 ਰ ਕਰ</p>
                <p className={styles.block_769}>Incorrect: ਿਤਨ ਦ ਇਕ ਰ ਕਰ</p>
                <p className={styles.block_769}>Incorrect: 3, 2, 1 ਰ ਕਰ</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਿਤਨ ਦ ਇਕ ਰ ਕਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਭਾਵ ਿਕ "3 2 1" ਵਾਕ ਦਾ ਿਹਸਾ ਹ ਅਤ
                </p>
                <p className={styles.block_769}>
                  ਨਬਰ ਨ ਿਬਨ ਕਾਿਮਆ ਨਾਲ ਅਕ 'ਚ ਿਲਿਖਆ ਿਗਆ ਹ,
                </p>
                <p className={styles.block_770}>
                  ਿਕ ਿਕ ਨਬਰ ਨ ਸਚੀਬਧ ਢਗ ਨਾਲ ਿਲਿਖਆ ਿਗਆ ਹ।
                </p>
                <p className={styles.block_864}>
                  Use the Indian numbering system to format large numbers when
                  the speaker says "ਲਖ", "ਕਰੜ", "ਅਰਬ" or "ਿਬਲੀਅਨ".
                </p>
                <p className={styles.block_865}>Correct: 12,12,12,123</p>
                <p className={styles.block_866}>Incorrect: 121,212,123</p>
                <p className={styles.block_867}>
                  Explanation: ਇਹ ਨਬਰ ਭਾਰਤੀ ਨਬਿਰਗ ਿਸਸਟਮ ਦ
                </p>
                <p className={styles.block_860}>
                  ਫਾਰਮਿਟਗ ਿਨਯਮ ਤ ਬਾਅਦ ਟ ਸਫਰ ਕੀਤਾ ਜ ਦਾ ਹ ਿਕ ਿਕ
                </p>
                <p className={styles.block_868}>
                  ਸਪੀਕਰ ਨ ਿਕਹਾ "ਲਖ", "ਕਰੜ", "ਅਰਬ" ਜ "ਿਬਲੀਅਨ".
                </p>
                <p className={styles.block_869}>
                  For all other long numbers (4+ digits), transcribe a common
                  between groups of three digits.
                </p>
                <p className={styles.block_870}>Correct: 10,000</p>
                <p className={styles.block_871}>Incorrect: 10000</p>
                <p className={styles.block_872}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਦਸ ਹਜਾਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_873}>
                  Explanation: ਪਜਾਬੀ 'ਚ 4 ਜ ਇਸ ਤ ਵਧ ਅਕ ਵਾਲ
                </p>
                <p className={styles.block_874}>
                  ਨਬਰ ਨ ਆਖੀਰ 'ਚ ਿਤਨ ਅਤ ਉਸ ਤ ਬਾਅਦ ਦ-ਦ ਦ ਫਰਕ
                </p>
                <p className={styles.block_875}>
                  ਨਾਲ ਅਕ ਨ ਕਾਿਮਆ ਰਾਹ ਵਖ ਕਰਨਾ ਚਾਹੀਦਾ ਹ।
                </p>
                <p className={styles.block_876}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_877}>
                  Correct: ਉਹਨ ਨ 1/4 ਿਕਲ ਖਡ ਚਾਹੀਦੀ ਹ।
                </p>
                <p className={styles.block_878}>
                  Incorrect: ਉਹਨ ਨ ਪਾਈਆ ਖਡ ਚਾਹੀਦੀ ਹ।
                </p>
                <p className={styles.block_879}>
                  Incorrect: ਉਹਨ ਨ 1 / 4 ਿਕਲ ਖਡ ਚਾਹੀਦੀ ਹ।
                </p>
                <p className={styles.block_880}>
                  Incorrect: ਉਹਨ ਨ 0.25 ਿਕਲ ਖਡ ਚਾਹੀਦੀ ਹ।
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਉਹਨ ਨ ਇਕ ਿਕਲ ਦ ਚਥ ਿਹਸ ਿਜਨੀ ਖਡ ਚਾਹੀਦੀ ਹ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_881}>
                  Correct: 3/4 ਿਕਮੀ ਤ ਬਾਅਦ ਸਜ ਮੜ।
                </p>
                <p className={styles.block_489}>
                  Incorrect: ਿਤਨ ਚਥਾਈ ਿਕਲਮੀਟਰ ਤ ਬਾਅਦ ਸਜ ਮੜ।
                </p>
                <p className={styles.block_882}>
                  Incorrect: 3/4 ਿਕਲਮੀਟਰ ਤ ਬਾਅਦ ਸਜ ਮੜ।
                </p>
                <p className={styles.block_883}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਿਤਨ ਚਥਾਈ ਿਕਲਮੀਟਰ ਤ ਬਾਅਦ ਸਜ{' '}
                  </span>
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_5}>ਮੜ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_885}>
                  Correct: 2/3 ਿਕਮੀ ਤ ਬਾਅਦ ਖਬ ਮੜ।
                </p>
                <p className={styles.block_886}>
                  Incorrect: ਦ ਿਤਹਾਈ ਿਕਲਮੀਟਰ ਤ ਬਾਅਦ ਖਬ ਮੜ।
                </p>
                <p className={styles.block_882}>
                  Incorrect: 2/3 ਿਕਲਮੀਟਰ ਤ ਬਾਅਦ ਖਬ ਮੜ।
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਦ ਿਤਹਾਈ ਿਕਲਮੀਟਰ ਤ ਬਾਅਦ ਖਬ{' '}
                  </span>
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_5}>ਮੜ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_888}>
                  Incorrect: ਦ ਿਤਹਾਈ ਿਕਮੀ ਤ ਬਾਅਦ ਖਬ ਮੜ।
                </p>
                <p className={styles.block_889}>Correct: 2/3 * 5/16</p>
                <p className={styles.block_890}>
                  Incorrect: ਦ ਬਟ ਿਤਨ * ਪਜ ਬਟ ਛ
                </p>
                <p className={styles.block_409}>
                  Incorrect: ਦ ਬਟ ਿਤਨ ਗਣਾ ਪਜ ਬਟ ਛ
                </p>
                <p className={styles.block_891}>Incorrect: 2/3 ਗਣਾ 5/16</p>
                <p className={styles.block_892}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਦ ਬਟ ਿਤਨ ਗਣਾ ਪਜ ਬਟ ਛ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_893}>
                  Explanation: ਇਹ ਿਹਸਾਬ ਦੀ ਬਦਾਵਲੀ ਹ ਇਸ ਕਰਕ
                </p>
                <p className={styles.block_325}>ਨਬਰ ਨ ਅਕ ਅਤ ਸਲ ਨਾਲ ਿਲਖ।</p>
                <p className={styles.block_894}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals.
                </p>
                <p className={styles.block_895}>Correct: 3 1/2 km</p>
                <p className={styles.block_896}>Incorrect: ਸਾਢ 3 ਿਕਲਮੀਟਰ</p>
                <p className={styles.block_897}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਸਾਢ ਿਤਨ ਿਕਲਮੀਟਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_898}>
                  Explanation: "ਸਾਢ ਿਤਨ ਿਕਲਮੀਟਰ" ਇਕ ਅਪਰਨ ਅਕ ਹ
                </p>
                <p className={styles.block_899}>ਅਤ ਇਸ ਕਰਕ ਅਕ ਦੀ ਵਰਤ ਕਰ ਹ।</p>
                <p className={styles.block_900}>Correct: 1/3 + 3 1/2</p>
                <p className={styles.block_901}>Incorrect: 1/3 + ਸਾਢ ਿਤਨ</p>
                <p className={styles.block_902}>Incorrect: 1/3 + ਸਾਢ 3</p>
                <p className={styles.block_903}>Incorrect: 1/3 + 1/2 3</p>
                <p className={styles.block_904}>Incorrect: 1 / 3 + 3 1 / 2</p>
                <p className={styles.block_905}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਇਕ ਬਟਾ ਿਤਨ ਜਮ ਸਾਢ ਿਤਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_906}>
                  Explanation: ਿਹਸਾਬ ਦ ਸਮੀਕਰਣ ਿਲਖਣ ਵਲ ਅਪਰਨ
                </p>
                <p className={styles.block_654}>
                  ਅਕ ਨ ਿਲਖਣ ਵਲ ਹਮ ਅਕ ਦੀ ਵਰਤ ਕਰਨੀ ਹ। "1/2",
                </p>
                <p className={styles.block_907}>
                  "1/4" ਅਤ "3/4" ਨ ਕ ਮਵਾਰ "ਅਧਾ", "ਸਵਾ" ਜ "ਪਣਾ" ਨਹ
                </p>
                <p className={styles.block_908}>
                  ਿਲਖਣਾ। ਬਟ ਵਾਲੀ ਸਿਖਆ ਨ ਅਕ ਅਤ "/" ਸਲ ਦ ਨਾਲ
                </p>
                <p className={styles.block_269}>ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_909}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_910}>Correct: ਮਨ ਅਧੀ ਰਟੀ ਿਦਓ।</p>
                <p className={styles.block_911}>Incorrect: ਮਨ 1/2 ਰਟੀ ਿਦਓ।</p>
                <p className={styles.block_912}>Incorrect: ਮਨ 0.5 ਰਟੀ ਿਦਓ।</p>
                <p className={styles.block_913}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਮਨ ਅਧੀ ਰਟੀ ਿਦਓ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_914}>
                  Explanation: ਇਥ "ਅਧੀ" ਿਕਸ ਯਿਨਟ ਜ ਮਾਪਕ ਵਲ
                </p>
                <p className={styles.block_915}>
                  ਇ ਾਰਾ ਨਹ ਕਰ ਰਹੀ ਬਲਿਕ ਇਹ ਇਕ ਚੀਜ਼ (ਰਟੀ) ਵਲ
                </p>
                <p className={styles.block_916}>
                  ਇ ਾਰਾ ਕਰ ਿਰਹਾ ਹ। ਇਸ ਕਰਕ ਇਸਨ ਅਖਰ 'ਚ ਿਲਖ,
                </p>
                <p className={styles.block_917}>ਅਕ 'ਚ ਨਹ ।</p>
                <p className={styles.block_918}>
                  Correct: ਸਬ ਦਾ ਪਜ ਬਟ ਸਲਵ ਿਹਸਾ।
                </p>
                <p className={styles.block_919}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਸਬ ਦਾ ਪਜ ਬਟ ਸਲਵ ਿਹਸਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_920}>Incorrect: ਸਬ 5/16 ਵ ਿਹਸਾ।</p>
                <p className={styles.block_921}>
                  Incorrect: ਸਬ ਦਾ 0.3125 ਵ ਿਹਸਾ।
                </p>
                <p className={styles.block_922}>
                  Explanation: "ਪਜ ਬਟ ਸਲਵ " ਇਕ ਬਟ ਵਾਲਾ
                </p>
                <p className={styles.block_923}>
                  (fraction) ਖਡ ਹ ਜ ਸਬ ਦ ਿਹਸ ਦੀ ਗਲ ਕਰਦਾ ਹ। ਸ
                </p>
                <p className={styles.block_924}>
                  ਇਸਨ ਦਰਸਾਉਣ ਲਈ ਦ ਮਲਵ ਅਤ ਸਲ ਦੀ ਵਰਤ ਨਾ
                </p>
                <p className={styles.block_421}>ਕਰ।</p>
                <p className={styles.block_925}>Correct: ਸਾਢ ਿਤਨ ਸਤਰ</p>
                <p className={styles.block_926}>Incorrect: 3.5 ਸਤਰ</p>
                <p className={styles.block_927}>Incorrect: ਸਾਢ 3 ਸਤਰ</p>
                <p className={styles.block_928}>
                  Correct: ਮਨ 12 ਅਤ ਅਧ ਪਸਤਕ ਦ ਿਦਓ।
                </p>
                <p className={styles.block_929}>
                  Incorrect: ਮਨ 12.5 ਪਸਤਕ ਦ ਿਦਓ।
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਮਨ ਬਾਰ ਅਤ ਅਧ ਪਸਤਕ ਦ ਿਦਓ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_930}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_931}>
                  <span className={styles.text_21}>
                    Correct: ਉਸਨ ਫਾਰਮ ਹਾਊਸ ₹7.5 ਲਖ 'ਚ ਖਰੀਿਦਆ।{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਉਸਨ ਫਾਰਮ ਹਾਊਸ ਸਾਢ ਸਤ ਲਖ{' '}
                  </span>
                </p>
                <p className={styles.block_932}>
                  <span className={styles.text_5}>ਰਪਏ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ ਖਰੀਿਦਆ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_933}>
                  Explanation: "ਸਾਢ ਸਤ ਲਖ" ਕਰਸੀ ਵਲ ਇ ਾਰਾ ਕਰਦ
                </p>
                <p className={styles.block_934}>
                  ਹਨ ਇਸ ਕਰਕ ਸਟ ਡਰਡ ਕਰਸੀ ਫਾਰਮਟ "₹7.5" ਦੀ ਵਰਤ
                </p>
                <p className={styles.block_479}>
                  ਕਰ ਅਤ ਇਸਦੀ ਕੀਮਤ ਲਖ ਿਵਚ ਹ ਸ ਇਸ ਕਰਕ ਇਸ ਤ
                </p>
                <p className={styles.block_935}>ਬਾਅਦ ਲਖ ਿਲਖ।</p>
                <p className={styles.block_641}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_11}>Correct: 2% ਦਧ </span>
                </p>
                <p className={styles.block_937}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਦ ਪ ਤੀ ਤ ਦਧ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_938}>Incorrect: 2 ਪ ਤੀ ਤ ਦਧ</p>
                <p className={styles.block_584}>
                  Explanation: ਰਕਮ ਦ ਨਾਲ ਪ ਤੀ ਤ ਦਾ ਿਨ ਾਨ ਲਗਾ
                </p>
                <p className={styles.block_939}>
                  ਹਇਆ ਹ ਅਤ ਇਸ ਕਰਕ ਅਕ ਅਤ % ਦੀ ਵਰਤ ਕਰ, ਇਹਨ
                </p>
                <p className={styles.block_940}>ਨ ਅਖਰ 'ਚ ਨਾ ਿਲਖ।</p>
                <p className={styles.block_941}>Correct: 1 ਲਖ ਪ ਤੀ ਤ</p>
                <p className={styles.block_942}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਇਕ ਲਖ ਪ ਤੀ ਤ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_943}>Incorrect: 1,00,000%</p>
                <p className={styles.block_944}>Incorrect: 1 ਲਖ%</p>
                <p className={styles.block_945}>
                  Explanation: ਰਕਮ ਦ ਿਨਯਮ ਅਨਸਾਰ ਲਖ ਜ ਇਸ ਤ
                </p>
                <p className={styles.block_946}>
                  ਵਡੀ ਰਕਮ ਨ ਅਖਰ 'ਚ ਿਲਖਣਾ ਹ ਅਤ ਇਸਦ ਨਾਲ ਹੀ
                </p>
                <p className={styles.block_947}>
                  ਪ ਤੀ ਤ ਨ ਵੀ ਅਖਰ 'ਚ ਹੀ ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_948}>
                  <span className={styles.text_21}>
                    Correct: 50% ਿਬਸਕਟ ਖਤਮ ਹ ਗਏ।{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਪਜਾਹ ਪ ਤੀ ਤ ਿਬਸਕਟ ਖਤਮ ਹ ਗਏ{' '}
                  </span>
                </p>
                <p className={styles.block_949}>"</p>
                <p className={styles.block_950}>
                  For landline phone numbers, transcribe a space after the fifth
                  digit of the phone number. For mobile numbers, transcribe a
                  space after the country code and after the fifth digit of the
                  phone number. Only transcribe a + if the speaker says "ਪਲਸ".
                </p>
                <p className={styles.block_951}>Correct: 48559 49504</p>
                <p className={styles.block_952}>Incorrect: 4855949504</p>
                <p className={styles.block_953}>Incorrect: 48559-49504</p>
                <p className={styles.block_954}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਅੜਤਾਲੀ ਪਜ ਸ ਉਨਾਹਠ ਉਨਜਾ ਪਜ ਸ ਚਾਰ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_955}>
                  Explanation: ਭਾਰਤੀ ਫਨ ਨਬਰ ਦੀ ਸਹੀ ਟਰ ਸਕ ਨ 'ਚ
                </p>
                <p className={styles.block_956}>
                  ਪਜ ਪਆਇਟ ਤ ਬਾਅਦ ਇਕ ਥ ਹ, ਡ ਜ ਬਰਕਟ ਨਾ
                </p>
                <p className={styles.block_957}>ਵਰਤ</p>
                <p className={styles.block_958}>Correct: 91 48559 49504</p>
                <p className={styles.block_959}>Incorrect: 91-48559-49504</p>
                <p className={styles.block_960}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਇਕਾਨਵ ਅੜਤਾਲੀ ਪਜ ਸ ਉਨਾਹਠ ਉਨਜਾ ਪਜ ਸ ਚਾਰ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_961}>Incorrect: 9148559-49504</p>
                <p className={styles.block_962}>Incorrect: 91 48559-49504</p>
                <p className={styles.block_963}>
                  Explanation: ਕਟਰੀ ਕਡ 91 ਅਤ ਬਾਕੀ ਦ ਫਨ ਨਬਰ ਦ
                </p>
                <p className={styles.block_964}>ਿਵਚਕਾਰ ਇਕ ਸਪਸ ਹਣੀ ਚਾਹੀਦੀ ਹ।</p>
                <p className={styles.block_965}>
                  <span className={styles.text_18}>Example </span>
                  <span className={styles.text_13}>
                    Correct: +91 48559 49504{' '}
                  </span>
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_8}>audio: " </span>
                  <span className={styles.text_19}>
                    ਪਲਸ ਇਕਾਨਵ ਅੜਤਾਲੀ ਪਜ ਸ ਉਨਾਹਠ ਉਨਜਾ ਪਜ ਸ ਚਾਰ{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                  <span className={styles.text_20}>
                    Incorrect: ਜਮ ਾ 91 48559-49504{' '}
                  </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਵਕਤਾ ਨ ਦ ਕਾਿਲਗ ਕਡ ਨ ਪਲਸ ਿਚਨ ਦ Incorrect: + 91
                  48559-49504
                </p>
                <p className={styles.block_769}>
                  ਨਾਲ ਬਿਲਆ ਹ ਇਸ ਕਰਕ ਬਲ ਗਏ "ਜਮ ਾ" ਨ "+" ਿਚਨ ਨਾਲ
                </p>
                <p className={styles.block_770}>ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_774}>
                  Correct: 48559 49504 ਐਕਸਟ ਨ 12
                </p>
                <p className={styles.block_767}>Incorrect: 48559-49504 12</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਅੜਤਾਲੀ ਪਜ ਸ ਉਨਾਹਠ ਉਨਜਾ ਪਜ ਸ ਚਾਰ ਐਕਸਟ ਨ ਬਾਰ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਹਾਲ ਿਕ ਵਕਤਾ ਨ ਚੀ ਸਾਰੀ "ਐਕਟ ਨ"
                </p>
                <p className={styles.block_769}>
                  ਿਕਹਾ, ਇਸ ਕਰਕ "ਐਕਸਟ ਨ" ਤ ਬਾਅਦ ਬਲ ਜਾਣ ਵਾਲ
                </p>
                <p className={styles.block_770}>ਨਬਰ 12 ਨ ਅਕ 'ਚ ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_773}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_22}>
                    Correct: XT 660 or XT660{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_23}>x t </span>
                  <span className={styles.text_19}>ਛ ਸ ਸਠ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_12}>x t </span>
                  <span className={styles.text_5}>ਛ ਛ ਜੀਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਇਥ ਅਖਰ ਦ ਨਾਲ ਆਉਣ ਵਾਲ ਅਕ ਨ
                </p>
                <p className={styles.block_769}>
                  ਇਕਠ "XT660" ਜ ਅਕ ਅਤ ਅਖਰ 'ਚ ਸਪਸ ਦ ਨਾਲ "XT
                </p>
                <p className={styles.block_770}>660" ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_773}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_863}>Correct: 5 / 6 ^ 3</p>
                <p className={styles.block_767}>Incorrect: 5/6^3</p>
                <p className={styles.block_769}>Incorrect: 5 ਭਾਗ 6 ਦਾ ਘਣਮਲ</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਪਜ ਭਾਗ ਛ ਦਾ ਘਣਮਲ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਬਿਲਆ ਿਗਆ ਵਾਕ ਿਹਸਾਬ ਦੀ ਬਦਾਵਲੀ
                </p>
                <p className={styles.block_770}>
                  ਵ ਗ ਲਗਦਾ ਹ। ਇਸ ਕਰਕ ਨਬਰ ਨ ਅਖਰ ਦੀ ਜਗ ਅਕ
                </p>
                <p className={styles.block_770}>
                  'ਚ ਤਬਦੀਲ ਕੀਤਾ ਿਗਆ ਹ। "ਭਾਗ" ਨ "/" ਿਚਨ ਨਾਲ
                </p>
                <p className={styles.block_770}>
                  ਦਰਸਾਇਆ ਿਗਆ ਹ। "ਘਣਮਲ" ਨ "^3" ਨਾਲ ਦਰਸਾਇਆ
                </p>
                <p className={styles.block_770}>ਿਗਆ ਹ।</p>
                <p className={styles.block_967}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_7}>
                    Correct: 5 * 6 ਦਾ ਤਰ ਕੀ ਹ।{' '}
                  </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਪਜ ਗਣਾ ਛ ਦਾ ਤਰ ਕੀ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_770}>
                  Incorrect: ਪਜ ਗਣਾ ਛ ਦਾ ਤਰ ਕੀ ਹ।
                </p>
                <p className={styles.block_770}>
                  Explanation: "ਗਣਾ" ਇਕ ਿਹਸਾਬ ਦੀ ਬਦਾਵਲੀ ਹ। ਇਸ
                </p>
                <p className={styles.block_770}>
                  ਕਰਕ ਇਸਨ "*" ਿਚਨ ਨਾਲ ਿਲਿਖਆ ਜਾਵ ਨਾ ਿਕ "x" ਿਚਨ Incorrect: 5 ਗਣਾ 6
                  ਦਾ ਤਰ ਕੀ ਹ।
                </p>
                <p className={styles.block_770}>ਨਾਲ।</p>
                <p className={styles.block_770}>Incorrect: 5 x 6 ਦਾ ਤਰ ਕੀ ਹ।</p>
                <p className={styles.block_771}>Correct: √3</p>
                <p className={styles.block_769}>Incorrect: 3 ਦਾ ਵਰਗਮਲ</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਿਤਨ ਦਾ ਵਰਗਮਲ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_770}>
                  Explanation: ਵਰਗਮਲ ਿਚਨ "√" ਦੀ ਵਰਤ 3 ਨਬਰ ਨਾਲ
                </p>
                <p className={styles.block_770}>ਕਰਨੀ ਚਾਹੀਦੀ ਹ।</p>
                <p className={styles.block_771}>Correct: 8 ਘਟ * ₹12 ਿਕਨ ਹਏ?</p>
                <p className={styles.block_769}>
                  Incorrect: 8 ਘਟ * 12 ਰਪਏ ਿਕਨ ਹਏ?
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਅਠ ਘਟ ਗਣਾ ਬਾਰ ਰਪਏ ਿਕਨ ਹਏ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: "ਘਿਟਆ" ਨ ਅਕ 'ਚ ਿਲਿਖਆ ਿਗਆ ਹ
                </p>
                <p className={styles.block_770}>
                  ਿਕ ਿਕ ਇਹ ਮਾਪਣ ਦੀ ਇਕ ਇਕਾਈ ਹ। ਪਰ ਕਰਸੀ ਿਚਨ ਨ
                </p>
                <p className={styles.block_769}>
                  ਇਸ ਤ ਬਾਹਰ ਰਿਖਆ ਿਗਆ ਹ, ਸ ਇਸ ਕਰਕ "ਰਪਏ" ਦ
                </p>
                <p className={styles.block_770}>
                  ਿਨ ਾਨ ਨ "₹" ਿਚਨ ਨਾਲ ਵਰਿਤਆ ਜ ਦਾ ਹ।
                </p>
                <p className={styles.block_774}>
                  Correct: ਿਤਨ ਮਗਰਮਛ ਨ ਦ ਘਿੜਆ ਨਾਲ ਭਾਗ ਕਰਨ 'ਤ
                </p>
                <p className={styles.block_771}>ਕੀ ਪ ਾਪਤ ਹਵਗਾ।</p>
                <p className={styles.block_770}>
                  Incorrect: 2 ਮਗਰਮਛ / 3 ਘੜ ਦਾ ਕੀ ਤਰ ਹਵਗਾ।
                </p>
                <p className={styles.block_769}>
                  Explanation: "ਮਗਰਮਛ" ਅਤ "ਘੜ" ਦਵ ਮਾਪਣ ਦੀਆ
                </p>
                <p className={styles.block_769}>
                  ਇਕਾਈਆ ਨਹ ਹਨ, ਸ ਇਸ ਕਰਕ ਇਹ ਿਹਸਾਬ ਦੀ
                </p>
                <p className={styles.block_770}>
                  ਬਦਾਵਲੀ ਨਹ ਹਨ। ਇਸ ਕਰਕ "ਦ" ਅਤ "ਿਤਨ" ਨ ਅਕ 'ਚ
                </p>
                <p className={styles.block_769}>
                  ਨਹ ਿਲਿਖਆ ਿਗਆ ਅਤ "ਭਾਗ" ਨ ਵੀ ਬਦ 'ਚ ਿਲਿਖਆ
                </p>
                <p className={styles.block_770}>ਿਗਆ ਹ "/" ਿਚਨ ਨਾਲ ਨਹ ।</p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies with "₹" followed by digits. Do not
                  include a space between the ₹ and the digits.
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_22}>Correct: ₹10 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਦਸ ਰਪਏ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_969}>
                  Explanation: "ਦਸ ਰਪਏ" ਇਕ ਕਰਸੀ ਦੀ ਰਕਮ ਹ।
                </p>
                <p className={styles.block_970}>
                  ਭਾਰਤੀ ਪਜਾਬੀ 'ਚ ਰਕਮ ਨ ਆਮ ਤਰ 'ਤ ਰਪਏ ਦ ਿਚਨ "₹"
                </p>
                <p className={styles.block_971}>ਨਾਲ ਿਲਖ ਜ ਦ ਹਨ।</p>
                <p className={styles.block_972}>
                  <span className={styles.text_24}>
                    Correct: $5 ਭਾਰਤੀ ਕਰਸੀ ਅਨਸਾਰ ਿਕਨ ਹਏ?{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਪਜ ਡਾਲਰ ਭਾਰਤੀ ਕਰਸੀ ਅਨਸਾਰ{' '}
                  </span>
                </p>
                <p className={styles.block_973}>
                  <span className={styles.text_5}>ਿਕਨ ਹਏ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_974}>
                  Explanation: ਡਾਲਰ ਇਕ ਕਰਸੀ ਹ, ਇਸਨ "$" ਿਚਨ ਨਾਲ
                </p>
                <p className={styles.block_975}>ਿਲਿਖਆ ਿਗਆ ਹ।</p>
                <p className={styles.block_976}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with the rupee sign.
                </p>
                <p className={styles.block_977}>
                  Correct: ਪਟਰਲ ਦੀ ਕੀਮਤ ₹80 ਤਕ ਪਹਚ ਗਈ ਹ।
                </p>
                <p className={styles.block_978}>
                  Incorrect: ਪਟਰਲ ਦੀ ਕੀਮਤ 80 ਤਕ ਪਹਚ ਗਈ ਹ।
                </p>
                <p className={styles.block_979}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਪਟਰਲ ਦੀ ਕੀਮਤ ਅਸੀ ਤਕ ਪਹਚ{' '}
                  </span>
                </p>
                <p className={styles.block_980}>
                  <span className={styles.text_5}>ਗਈ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_981}>
                  Explanation: ਭਾਵ ਿਕ ਵਕਤਾ ਨ "ਰਪਏ" ਨਹ ਿਕਹਾ ਅਤ
                </p>
                <p className={styles.block_982}>
                  ਨਾ ਹੀ ਕਈ ਰਕਮ ਸਬਧੀ ਇਕਾਈ ਨ ਬਿਲਆ ਹ। ਪਰ ਗਲਬਾਤ
                </p>
                <p className={styles.block_983}>
                  ਦ ਸਦਰਭ ਤ ਪਤਾ ਲਗ ਿਰਹਾ ਹ ਿਕ ਵਕਤਾ ਇਥ ਪਟਰਲ
                </p>
                <p className={styles.block_984}>
                  ਕੀਮਤ ਦੀ ਗਲ ਕਰ ਿਰਹਾ ਹ ਜ ਿਕ ਅਕਸਰ ਦਹਰ ਅਕ ਵਾਲੀ
                </p>
                <p className={styles.block_985}>
                  ਸਿਖਆ ਤ ਪਤਾ ਲਗਦਾ ਹ। ਇਸਨ ਰਪਏ ਵਾਲ ਿਚਨ ਨਾਲ
                </p>
                <p className={styles.block_986}>
                  ਿਲਖਣਾ ਹ ਅਤ 80 ਨ "ਅਸੀ" ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_987}>
                  Correct: ਦਪਿਹਰ ਦ ਭਜਨ ਦੀ ਕੀਮਤ ₹50 ਹ।
                </p>
                <p className={styles.block_988}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਦਪਿਹਰ ਦ ਭਜਨ ਦੀ ਕੀਮਤ ਪਜਾਹ ਹ{' '}
                  </span>
                </p>
                <p className={styles.block_511}>
                  Incorrect: ਦਪਿਹਰ ਦ ਭਜਨ ਦੀ ਕੀਮਤ 50 ਹ।
                </p>
                <p className={styles.block_989}>
                  <span className={styles.text_8}>" </span>
                  <span className={styles.text_9}>
                    <sub className={styles.calibre1}>
                      Explanation: ਇਥ ਵਕਤਾ ਭਜਨ ਦੀ ਕੀਮਤ ਬਾਰ ਗਲ ਕਰ
                    </sub>
                  </span>
                </p>
                <p className={styles.block_990}>
                  ਿਰਹਾ ਹ ਸ ਇਸਨ ਰਪਏ ਦ ਿਚਨ ਨਾਲ ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_991}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_992}>Correct: ਪਜ ਿਛਲੜ</p>
                <p className={styles.block_993}>Incorrect: ₹5</p>
                <p className={styles.block_994}>
                  <span className={styles.text_21}>
                    Correct: ਉਹਨ ਨ ਮਰੀ ਦਾਦੀ ਤ 40 ਕਿਵਡ ਚਰੀ ਕਰ ਲਏ।{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਉਹਨ ਨ ਮਰੀ ਦਾਦੀ ਤ ਚਾਲੀ ਕਿਵਡ{' '}
                  </span>
                </p>
                <p className={styles.block_995}>
                  <span className={styles.text_5}>ਚਰੀ ਕਰ ਲਏ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_996}>
                  Explanation: "ਕਿਵਡ" ਇਕ ਆਮ ਬਲਚਾਲ ਦੀ ਭਾ ਾ 'ਚ
                </p>
                <p className={styles.block_997}>
                  ਬਿਲਆ ਜਾਣ ਵਾਲਾ ਬਦ ਹ ਜ ਇਕ ਿਵਦ ੀ ਕਰਸੀ ਹ ਿਜਸਨ
                </p>
                <p className={styles.block_998}>
                  ਭਾਰਤੀ ਪਜਾਬੀ 'ਚ ਨਹ ਿਲਿਖਆ-ਬਿਲਆ ਜ ਦਾ। ਸ ਪਾ ਡ ਦਾ
                </p>
                <p className={styles.block_999}>
                  ਿਚਨ ਇਥ ਨਹ ਵਰਤਣਾ ਚਾਹੀਦਾ। ਇਸਦੀ ਜਗ ਾ 40 ਨਬਰ ਨ
                </p>
                <p className={styles.block_1000}>
                  ਅਕ 'ਚ ਿਲਖ ਅਤ ਿਫਰ "ਕਿਵਡ" ਿਲਖ।
                </p>
                <p className={styles.block_1001}>
                  Correct: ਪਜ ਡਾਲਰ ਭਾਰਤੀ ਕਰਸੀ ਅਨਸਾਰ ਿਕਨ ਹਏ?
                </p>
                <p className={styles.block_1002}>
                  Incorrect: $5 ਭਾਰਤੀ ਕਰਸੀ ਅਨਸਾਰ ਿਕਨ ਹਏ?
                </p>
                <p className={styles.block_1003}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਪਜ ਡਾਲਰ ਭਾਰਤੀ ਕਰਸੀ ਅਨਸਾਰ ਿਕਨ ਹਏ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1004}>
                  Explanation: ਡਾਲਰ ਨ "ਡਾਲਰ" ਵਜ ਿਲਿਖਆ ਜਾਣਾ
                </p>
                <p className={styles.block_1005}>
                  ਚਾਹੀਦਾ ਹ ਨਾ ਿਕ "$" ਿਨ ਾਨ ਨਾਲ.
                </p>
                <p className={styles.block_1006}>Correct: 200 ਯਨ</p>
                <p className={styles.block_1007}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਦ ਸ ਯਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1008}>Incorrect: ¥200</p>
                <p className={styles.block_1009}>
                  Explanation: "ਯਨ" ਇਕ ਿਵਦ ੀ ਭਾ ਾ ਵਲ ਇ ਾਰਾ ਕਰਦਾ
                </p>
                <p className={styles.block_390}>
                  ਹ ਜ ਿਕ ਭਾਰਤੀ ਪਜਾਬੀ 'ਚ ਨਹ ਵਰਿਤਆ ਜ ਦਾ। ਸ "200"
                </p>
                <p className={styles.block_1010}>
                  ਨਬਰ ਨ ਅਕ 'ਚ ਿਲਖ ਅਤ ਇਸ ਤ ਬਾਅਦ 'ਯਨ" ਿਲਖ। ਯਨ
                </p>
                <p className={styles.block_658}>ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕਰ।</p>
                <p className={styles.block_1011}>
                  When a speaker uses words like "ਰਪਏ" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_1012}>
                  <span className={styles.text_21}>
                    Correct: ਮ ਤਹਾਨ ₹1 ਦਣਾ ਹ। ਆਹ ਲਓ ਰਪਏ ਦਾ ਨ ਟ।{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਮ ਤਹਾਨ ਰਪਇਆ ਦਣਾ ਹ ਆਹ ਲਓ{' '}
                  </span>
                </p>
                <p className={styles.block_1013}>
                  <span className={styles.text_5}>ਰਪਏ ਦਾ ਨ ਟ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1014}>
                  Explanation: ਇਥ ਵਕਤਾ ਿਕਸ ਖਾਸ ਰਕਮ "ਰਪਇਆ" ਵਲ
                </p>
                <p className={styles.block_1015}>
                  ਇ ਾਰਾ ਕਰਦਾ ਹ। ਇਸ ਕਰਕ ਅਕ "1" ਦੀ ਵਰਤ ਕਰ ਅਤ
                </p>
                <p className={styles.block_1016}>ਿਫਰ ਰਪਏ ਦੀ ਿਚਨ ਦੀ ਵਰਤ ਕਰ।</p>
                <p className={styles.block_1017}>
                  <span className={styles.text_13}>Correct: ਿਸਰਫ ਕਝ ਰਪਏ </span>
                  <span className={styles.text_14}>
                    Explanation: ਵਕਤਾ ਿਕਸ ਖਾਸ ਰਕਮ ਵਲ ਇ ਾਰਾ ਨਹ{' '}
                  </span>
                </p>
                <p className={styles.block_1018}>
                  ਕਰਦਾ ਇਸ ਕਰਕ "ਰਪਏ" ਨ ਬਦ ਿਵਚ ਿਲਖ। ਯਰ ਿਚਨ ਦੀ
                </p>
                <p className={styles.block_1019}>ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।</p>
                <p className={styles.block_1020}>
                  <span className={styles.text_13}>
                    Correct: ਭਾਰਤੀ ਰਪਏ ਅਤ ਅਮਰੀਕੀ ਡਾਲਰ ਦਾ ਰਪ ਤਰਨ{' '}
                  </span>
                  <span className={styles.text_14}>
                    Explanation: ਇਥ ਵਕਤਾ ਰਪਏ ਅਤ ਡਾਲਰ ਨ ਿਬਨ ਿਕਸ
                  </span>
                </p>
                <p className={styles.block_1021}>
                  ਖਾਸ ਰਕਮ ਦ ਆਮ ਗਲਬਾਤ ਲਈ ਵਰਤ ਿਰਹਾ ਹ। ਇਸ ਕਰਕ
                </p>
                <p className={styles.block_1022}>
                  "ਰਪਏ" ਅਤ "ਡਾਲਰ" ਨ ਬਦ ਿਵਚ ਿਲਖ। ਇਹਨ ਲਈ
                </p>
                <p className={styles.block_1023}>
                  ਸਬਿਧਤ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।
                </p>
                <p className={styles.block_1024}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_1025}>
                  Correct: ਮਨ ਚਾਰ ਜ ਪਜ ਸ ਰਪਏ ਦੀ ਲੜ ਹ।
                </p>
                <p className={styles.block_1026}>
                  Incorrect: ਮਨ 4 ਜ 500 ਰਪਏ ਦੀ ਲੜ ਹ।
                </p>
                <p className={styles.block_1027}>
                  Explanation: ਇਥ ਵਕਤਾ ਦ ਵਖ-ਵਖ ਰਕਮ ਵਲ ਇ ਾਰਾ
                </p>
                <p className={styles.block_415}>
                  ਕਰ ਿਰਹਾ ਹ ਜ "4 ਜ 500" ਜ "400 ਜ 500" ਹ ਸਕਦਾ
                </p>
                <p className={styles.block_1028}>
                  ਹ। ਸ "ਸ ਰਪਏ" ਤ ਪਿਹਲ "ਚਾਰ ਜ ਪਜ" ਿਲਿਖਆ ਜਾਣਾ
                </p>
                <p className={styles.block_1029}>ਚਾਹੀਦਾ ਹ।</p>
                <p className={styles.block_1030}>Correct: ਦ ਤ ਪਜ ਸ ਰਪਏ</p>
                <p className={styles.block_521}>
                  Explanation: ਇਥ ਵਕਤਾ ਰਪਏ ਦੀ ਰ ਜ ਦੀ ਗਲ ਕਰ ਿਰਹਾ
                </p>
                <p className={styles.block_1031}>Incorrect: 2 ਤ 500 ਰਪਏ</p>
                <p className={styles.block_927}>Incorrect: 2-500 ਰਪਏ</p>
                <p className={styles.block_1032}>
                  ਹ ਿਜਸਦਾ ਅਰਥ "2 ਤ 500" ਜ "200 ਤ 500" ਹ ਸਕਦਾ
                </p>
                <p className={styles.block_1033}>
                  ਹ। ਸ ਅਕ ਨ "ਦ ਤ ਪਜ" ਿਲਖ ਕ ਉਸਦ ਮਗਰ "ਸ ਰਪਏ"
                </p>
                <p className={styles.block_783}>ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_1034}>
                  <span className={styles.text_24}>
                    Correct: 100 ਤ 500 ਰਪਏ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਸ ਤ ਪਜ ਸ ਰਪਏ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1035}>
                  Explanation: ਰਪਏ ਦੀ ਰਕਮ ਵਾਲੀ ਰ ਜ ਿਬਲਕਲ ਸਹੀ
                </p>
                <p className={styles.block_1036}>
                  ਅਤ ਸਪ ਟ ਹ ("100 ਤ 500") ਇਸ ਕਰਕ ਇਸਨ ਅਕ 'ਚ
                </p>
                <p className={styles.block_1037}>ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।</p>
                <p className={styles.block_1038}>
                  <span className={styles.text_24}>Correct: 9 ਤ 12 ਰਪਏ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਨ ਤ ਬਾਰ ਰਪਏ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1039}>
                  Explanation: ਇਥ ਵੀ ਰਕਮ ਦੀ ਰ ਜ ਿਬਲਕਲ ਸਹੀ ਅਤ
                </p>
                <p className={styles.block_1040}>
                  ਸਪ ਟ ਹ ਸ ਨਬਰ ਨ ਅਕ 'ਚ ਿਲਿਖਆ ਜਾਵ।
                </p>
                <p className={styles.block_1041}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_1042}>Correct: ਅਜ ਤਾਪਮਾਨ 20° ਹ।</p>
                <p className={styles.block_1043}>
                  Incorrect: ਅਜ ਤਾਪਮਾਨ 20 ਿਡਗਰੀ ਹ।
                </p>
                <p className={styles.block_1044}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਅਜ ਤਾਪਮਾਨ ਵੀਹ ਿਡਗਰੀ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1045}>
                  Explanation: ਿਡਗਰੀ ਨ ਿਚਨ ਨਾਲ ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ
                </p>
                <p className={styles.block_1046}>ਬਦ 'ਚ ਨਹ ।</p>
                <p className={styles.block_1047}>Correct: ਅਜ ਤਾਪਮਾਨ 20° C ਹ।</p>
                <p className={styles.block_1048}>
                  Incorrect: ਅਜ ਤਾਪਮਾਨ 20 ਿਡਗਰੀ ਸਲਸੀਅਸ ਹ।
                </p>
                <p className={styles.block_1049}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਅਜ ਤਾਪਮਾਨ ਵੀਹ ਿਡਗਰੀ ਸਲਸੀਅਸ{' '}
                  </span>
                </p>
                <p className={styles.block_1050}>
                  <span className={styles.text_5}>ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1051}>
                  Explanation: ਵਕਤਾ ਨ ਸਾਫ ਤਰ 'ਤ "ਸਲਸੀਅਸ" ਿਕਹਾ ਹ
                </p>
                <p className={styles.block_1052}>
                  ਸ ਇਸ ਕਰਕ ਇਥ ਅਗਰਜੀ ਦ ਅਖਰ "C" ਦੀ ਵਰਤ ਕਰ।
                </p>
                <p className={styles.block_1047}>Correct: ਅਜ ਤਾਪਮਾਨ 20° C ਹ।</p>
                <p className={styles.block_1053}>
                  Incorrect: ਅਜ ਤਾਪਮਾਨ 20 ਿਡਗਰੀ ਸ ਟੀਗਰਡ ਹ।
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਅਜ ਤਾਪਮਾਨ ਵੀਹ ਿਡਗਰੀ ਸ ਟੀਗਰਡ{' '}
                  </span>
                </p>
                <p className={styles.block_1050}>
                  <span className={styles.text_5}>ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1054}>
                  Explanation: ਇਥ ਵਕਤਾ ਨ ਸਾਫ ਤਰ 'ਤ "ਸ ਟੀਗਰਡ"
                </p>
                <p className={styles.block_410}>
                  ਿਕਹਾ ਹ ਸ ਿਡਗਰੀ ਿਚਨ ਤ ਬਾਅਦ ਸ ਟੀਗਰਡ ਲਈ ਅਗਰਜੀ
                </p>
                <p className={styles.block_1055}>ਦ ਅਖਰ "C" ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ।</p>
                <p className={styles.block_1056}>Correct: ਅਜ ਤਾਪਮਾਨ 72° F ਹ।</p>
                <p className={styles.block_1057}>
                  Incorrect: ਅਜ ਤਾਪਮਾਨ 72 ਿਡਗਰੀ ਫਰਨਹਾਈਟ ਹ।
                </p>
                <p className={styles.block_1058}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਅਜ ਤਾਪਮਾਨ ਬਹਤਰ ਿਡਗਰੀ </span>
                </p>
                <p className={styles.block_1059}>
                  <span className={styles.text_5}>ਫਰਨਹਾਈਟ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1060}>
                  Explanation: ਵਕਤਾ ਨ ਸਾਫ ਤਰ 'ਤ "ਫਰਨਹਾਈਟ" ਿਕਹਾ
                </p>
                <p className={styles.block_1061}>
                  ਹ ਸ ਸ ਿਡਗਰੀ ਿਚਨ ਤ ਬਾਅਦ ਇਥ ਅਗਰਜੀ ਦ ਅਖਰ "F"
                </p>
                <p className={styles.block_1062}>ਦੀ ਵਰਤ ਕਰ।</p>
                <p className={styles.block_1063}>Correct: ਅਜ ਤਾਪਮਾਨ 20 C ਹ।</p>
                <p className={styles.block_1064}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਅਜ ਤਾਪਮਾਨ ਵੀਹ ਸਲਸੀਅਸ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1065}>
                  Incorrect: ਅਜ ਤਾਪਮਾਨ 20° C ਹ।
                </p>
                <p className={styles.block_235}>
                  Explanation: ਜਕਰ ਵਕਤਾ ਤਾਪਮਾਨ ਨ ਿਡਗਰੀ 'ਚ ਇ ਾਰਾ
                </p>
                <p className={styles.block_1066}>
                  ਕਰਦਾ ਹ ਪਰ "ਿਡਗਰੀ" ਬਦ ਨਹ ਬਲਦਾ ਹ ਤ ਿਡਗਰੀ
                </p>
                <p className={styles.block_1067}>ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।</p>
                <p className={styles.block_1068}>
                  Correct: ਿ ਮਲਾ 'ਚ ਤਾਪਮਾਨ ਮਨਫੀ ਪਜ ਹ।
                </p>
                <p className={styles.block_1069}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਿ ਮਲਾ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ ਤਾਪਮਾਨ ਮਨਫੀ ਪਜ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1070}>
                  Incorrect: ਅਜ ਿ ਮਲਾ 'ਚ ਤਾਪਮਾਨ -5° ਹ।
                </p>
                <p className={styles.block_670}>
                  Explanation: ਇਥ "ਿਡਗਰੀ" ਬਦ ਨਹ ਵਰਿਤਆ ਿਗਆ,
                </p>
                <p className={styles.block_1071}>
                  ਇਸ ਕਰਕ ਿਡਗਰੀ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ ਭਾਵ ਿਕ
                </p>
                <p className={styles.block_1072}>
                  ਵਕਤਾ ਨ -5 ਿਡਗਰੀ ਵਲ ਇ ਾਰਾ ਕਰ ਿਰਹਾ ਹ।
                </p>
                <p className={styles.block_1073}>
                  Keep units of measurement in English. Do not transliterate.
                </p>
                <p className={styles.block_1074}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_1075}>● MB</p>
                <p className={styles.block_1076}>● KB</p>
                <p className={styles.block_1077}>● GB</p>
                <p className={styles.block_1078}>● TB</p>
                <p className={styles.block_1079}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_1080}>● in</p>
                <p className={styles.block_1081}>● ft</p>
                <p className={styles.block_1082}>● yd</p>
                <p className={styles.block_1083}>● mi</p>
                <p className={styles.block_1084}>● mm</p>
                <p className={styles.block_1085}>● cm</p>
                <p className={styles.block_1086}>● m</p>
                <p className={styles.block_1087}>● km</p>
                <p className={styles.block_1088}>● mph</p>
                <p className={styles.block_1089}>● km/h</p>
                <p className={styles.block_1090}>Common measurements of area</p>
                <p className={styles.block_1084}>● km2</p>
                <p className={styles.block_1091}>● in2</p>
                <p className={styles.block_1092}>● ft2</p>
                <p className={styles.block_1075}>● mi2</p>
                <p className={styles.block_1084}>● cm2</p>
                <p className={styles.block_1078}>● m2</p>
                <p className={styles.block_1093}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_1094}>● g</p>
                <p className={styles.block_1085}>● mg</p>
                <p className={styles.block_1083}>● kg</p>
                <p className={styles.block_1095}>● L</p>
                <p className={styles.block_1078}>● m3</p>
                <p className={styles.block_1096}>● in3</p>
                <p className={styles.block_1097}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_1098}>
                  Correct: ਮ 10 L ਸਤਰ ਦਾ ਜਸ ਖਰੀਿਦਆ
                </p>
                <p className={styles.block_1099}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_1100}>
                  Correct: ਿਬਲੀ ਦਾ ਭਾਰ 2 kg ਹ।
                </p>
                <p className={styles.block_1101}>
                  Incorrect: ਿਬਲੀ ਦਾ ਭਾਰ ਦ kg ਹ।
                </p>
                <p className={styles.block_1102}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਿਬਲੀ ਦਾ ਭਾਰ ਦ ਿਕਲਗਰਾਮ ਹ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1103}>
                  Explanation: ਭਾਵ ਿਕ 2 ਨਬਰ 10 ਤ ਛਟਾ ਹ, ਪਰ ਇਸਨ
                </p>
                <p className={styles.block_340}>
                  ਅਕ 'ਚ ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ ਿਕ ਿਕ ਇਹ ਇਕ ਮਾਪਕ
                </p>
                <p className={styles.block_1104}>ਇਕਾਈ ਤ ਪਿਹਲ ਆ ਿਰਹਾ ਹ।</p>
                <p className={styles.block_1105}>Correct: ਮ ਇਥ 6 ਮਹੀਨ ਿਰਹਾ।</p>
                <p className={styles.block_1106}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਮ ਇਥ ਛ ਮਹੀਨ ਿਰਹਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1107}>
                  Incorrect: ਮ ਇਥ ਛ ਮਹੀਨ ਿਰਹਾ।
                </p>
                <p className={styles.block_1108}>
                  Explanation: ਹਾਲ ਿਕ 6 ਨਬਰ 10 ਤ ਛਟਾ ਹ, ਇਸ ਕਰਕ
                </p>
                <p className={styles.block_348}>
                  ਇਸਨ "ਛ" ਨਹ ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ ਿਕ ਿਕ ਇਹ ਇਕ ਸਮ ਦੀ
                </p>
                <p className={styles.block_1109}>ਇਕਾਈ "ਮਹੀਨ " ਤ ਪਿਹਲ ਆ ਦਾ ਹ।</p>
                <p className={styles.block_1110}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_1111}>
                  <span className={styles.text_21}>
                    Correct: ਪਟਰਲ ₹70 L ਹ।{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਪਟਰਲ ਸਤਰ ਲੀਟਰ ਹ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1112}>
                  <span className={styles.text_21}>Correct: ਦਧ ₹50 ਹ। </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਦਧ ਪਜਾਹ ਹ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1113}>
                  Correct: 5:45 ਦਾ ਅਲਾਰਮ ਸ ਟ ਕਰ।
                </p>
                <p className={styles.block_1114}>
                  Incorrect: 545 ਦਾ ਅਲਾਰਮ ਸ ਟ ਕਰ।
                </p>
                <p className={styles.block_1115}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਪਜ ਪਤਾਲੀ ਦਾ ਅਲਾਰਮ ਸ ਟ ਕਰ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_818}>
                  Explanation: ਵਕਤਾ ਇਕ ਿਦਨ 'ਚ ਸਮ ਵਲ ਇ ਾਰਾ ਕਰ
                </p>
                <p className={styles.block_1116}>
                  ਿਰਹਾ ਹ। ਇਸ ਕਰਕ ਉਵ ਿਲਿਖਆ ਿਗਆ ਹ ਿਜਵ ਿਕ ਸਮ ਨ
                </p>
                <p className={styles.block_1117}>":" 'ਚ ਿਲਿਖਆ ਿਗਆ ਹ।</p>
                <p className={styles.block_1118}>
                  Slang terms (spell them out)
                </p>
                <p className={styles.block_1119}>● ਿਕਲ</p>
                <p className={styles.block_1120}>Common scientific terms</p>
                <p className={styles.block_1121}>● ਇਕ ਡਸੀਬਲ - 1 dB</p>
                <p className={styles.block_1122}>● ਇਕ ਿਨਊਟਨ - 1 N</p>
                <p className={styles.block_1123}>● ਇਕ ਜਲ -1 J</p>
                <p className={styles.block_1124}>● ਇਕ ਪਾਰਸਕ - 1 parsec</p>
                <p className={styles.block_1125}>● ਇਕ ਐਮਪਅਰ - 1 amp</p>
                <p className={styles.block_1126}>● ਇਕ ਹਰਟਜ਼ - 1 Hz</p>
                <p className={styles.block_1127}>● ਇਕ ਵਾਟ - 1 W</p>
                <p className={styles.block_1128}>● ਇਕ ਿਕਲਵਾਟ - 1kW</p>
                <p className={styles.block_1129}>● ਇਕ ਮਲ - 1 mol</p>
                <p className={styles.block_1130}>● ਇਕ ਕਨਡਲਾ -1 cd</p>
                <p className={styles.block_1131}>● ਇਕ ਿਲਊਮਨ - 1 lm</p>
                <p className={styles.block_1132}>● ਇਕ ਿਡਗਰੀ - 1°</p>
                <p className={styles.block_1133}>● ਇਕ ਫਰਨਹਾਈਟ - 1 F</p>
                <p className={styles.block_1128}>● ਇਕ ਸਲਸੀਅਸ - 1 C</p>
                <p className={styles.block_1134}>● ਇਕ ਸ ਟੀਗਰਡ - 1 C</p>
                <p className={styles.block_1135}>● ਇਕ ਕਲਿਵਨ - 1 K</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  When transcribing dates, write out the date in numeral form
                  followed by the month spelled out followed by the four digit
                  year. Include spaces to separate the day, month and year but
                  not commas.
                </p>
                <p className={styles.block_1138}>Correct: 12 ਜਨਵਰੀ 1964</p>
                <p className={styles.block_1139}>Incorrect: ਜਨਵਰੀ 12, 1964</p>
                <p className={styles.block_1140}>Incorrect: ਜਨਵਰੀ ਬਾਰ , 1964</p>
                <p className={styles.block_1141}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਬਾਰ ਜਨਵਰੀ ਨੀ ਸ ਚ ਹਠ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1142}>
                  Explanation: ਭਾਰਤ 'ਚ ਤਰੀਕ ਨ ਿਲਖਣ ਵਲ ਪਿਹਲ
                </p>
                <p className={styles.block_260}>
                  ਤਰੀਕ ਿਫਰ ਮਹੀਨਾ ਅਤ ਿਫਰ ਸਾਲ ਨ ਅਕ 'ਚ ਿਲਿਖਆ ਜ ਦਾ
                </p>
                <p className={styles.block_1143}>ਹ।</p>
                <p className={styles.block_1144}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_11}>
                    Correct: '78 ਦੀਆ ਗਰਮੀਆ 'ਚ{' '}
                  </span>
                </p>
                <p className={styles.block_1145}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਅਠਤਰ ਦੀਆ ਗਰਮੀਆ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1146}>Incorrect: 78 ਦੀਆ ਗਰਮੀਆ 'ਚ</p>
                <p className={styles.block_259}>
                  Explanation: ਹਾਲ ਿਕ ਿਕ ਵਕਤਾ "1978" ਦ ਸਾਲ ਦੀ ਗਲ
                </p>
                <p className={styles.block_348}>
                  ਕਰ ਿਰਹਾ ਹ ਪਰ ਉਸਨ " ਨੀ ਸ" ਨਹ ਿਕਹਾ, ਬਸ "ਅਠਤਰ "
                </p>
                <p className={styles.block_1147}>
                  ਵਰਿਤਆ ਹ। ਇਸਨ ਸਬਧ ਕਾਰਕ ਿਚਨ (apostrophe)
                </p>
                <p className={styles.block_1148}>ਲਗਾ ਕ ਅਕ 'ਚ ਿਲਖ।</p>
                <p className={styles.block_1149}>Correct: 80ਵ ਦਹਾਕ ਦਾ ਸਗੀਤ</p>
                <p className={styles.block_1150}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਅਸੀਵ ਦਹਾਕ ਦਾ ਸਗੀਤ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1151}>
                  Incorrect: 80 ਵ ਦਹਾਕ ਦਾ ਸਗੀਤ
                </p>
                <p className={styles.block_1152}>
                  Explanation: ਇਥ "ਅਸੀਵ " ਦਹਾਕ ਵਲ ਇ ਾਰਾ ਕਰ ਿਰਹਾ
                </p>
                <p className={styles.block_324}>
                  ਹ। ਇਸ ਿਵਚ ਅਕ "80" ਦ ਨਾਲ "ਵ " ਜੜਨਾ ਹ ਿਕ ਿਕ ਇਹ
                </p>
                <p className={styles.block_1153}>
                  ਉਸ ਦਹਾਕ ਦ ਕਈ ਸਾਲ ਵਲ ਇ ਾਰਾ ਕਰ ਿਰਹਾ ਹ।
                </p>
                <p className={styles.block_1154}>
                  <span className={styles.text_24}>
                    Correct: ਬਧਵਾਰ, 6 ਮਾਰਚ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਬਧਵਾਰ ਛ ਮਾਰਚ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1155}>
                  Explanation: ਇਹ ਇਕ ਤਰੀਕ ਹ ਿਜਸ ਿਵਚ ਹਫਤ, ਮਹੀਨ
                </p>
                <p className={styles.block_1156}>
                  ਅਤ ਿਦਨ ਨ ਕਾਿਮਆ ਨਾਲ ਅਲਗ-ਅਲਗ ਕਰਨਾ ਹ।
                </p>
                <p className={styles.block_1157}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_1158}>Correct: 7/12/2010</p>
                <p className={styles.block_1159}>Incorrect: 7 ਸਲ 12 ਸਲ 2010</p>
                <p className={styles.block_1160}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਸਤ ਸਲ ਬਾਰ ਸਲ ਦ ਹਜਾਰ ਦਸ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1161}>
                  Explanation: ਵਕਤਾ ਨ ਿਜਵ ਤਰੀਕ ਨ ਬਿਲਆ ਹ ਉਸਨ
                </p>
                <p className={styles.block_1162}>
                  ਉਵ ਹੀ ਿਲਖਣਾ ਹ। ਹਾਲ ਿਕ ਕ ਵਕਤਾ ਨ ਤਰੀਕ ਨ ਬਲਦ ਸਮ
                </p>
                <p className={styles.block_1163}>
                  ਸਲ ਨਹ ਬਿਲਆ ਪਰ ਿਫਰ ਵੀ ਿਦਨ, ਮਹੀਨਾ ਅਤ ਸਾਲ ਨ
                </p>
                <p className={styles.block_1164}>
                  ਵਖ ਕਰਨ ਲਈ "/" ਦੀ ਵਰਤ ਕਰਨੀ ਹ।
                </p>
                <p className={styles.block_1165}>
                  Correct: ਖਤਮ ਹਣ ਦੀ ਤਰੀਕ 05/10/2012 ਹ।
                </p>
                <p className={styles.block_1166}>
                  Incorrect: ਖਤਮ ਹਣ ਦੀ ਤਰੀਕ 05102012 ਹ।
                </p>
                <p className={styles.block_1167}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਖਤਮ ਹਣ ਦੀ ਤਰੀਕ ਪਜ ਦਸ ਦ </span>
                </p>
                <p className={styles.block_1168}>
                  <span className={styles.text_5}>ਹਜਾਰ ਬਾਰ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1169}>
                  Explanation: ਭਾਵ ਿਕ ਵਕਤਾ ਨ "ਸਲ " ਨਹ ਬਿਲਆ ਪਰ
                </p>
                <p className={styles.block_1170}>
                  ਿਫਰ ਵੀ ਤਰੀਕ ਿਲਖਣ ਲਈ "05/10/2012" ਨ ਸਲ
                </p>
                <p className={styles.block_1171}>
                  ਸਿਹਤ ਸਹੀ ਫਾਰਮਟ ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ
                </p>
                <p className={styles.block_1172}>
                  <span className={styles.text_25}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_26}>
                    <sub className={styles.calibre1}>Correct: 3:00 </sub>
                  </span>
                </p>
                <p className={styles.block_769}>Incorrect: 3 ਵਜ</p>
                <p className={styles.block_767}>Incorrect: 3 : 00</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਿਤਨ ਵਜ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: "ਵਜ" ਪਜਾਬੀ 'ਚ ਸਮ ਨ 12 ਘਿਟਆ ਦ
                </p>
                <p className={styles.block_770}>
                  ਿਹਸਾਬ ਨਾਲ ਦਰਸਾ ਦਾ ਹ। ਇਸਨ "3:00" ਿਲਖਣਾ ਚਾਹੀਦਾ
                </p>
                <p className={styles.block_770}>ਹ।</p>
                <p className={styles.block_966}>
                  <span className={styles.text_22}>Correct: 3:15 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਿਤਨ ਪਦਰ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_770}>
                  Explanation: ਇਥ ਵਕਤਾ ਸਮ ਨ ਦਰਸਾ ਿਰਹਾ ਹ। ਇਥ
                </p>
                <p className={styles.block_769}>
                  ਪਿਹਲਾ ਅਕ ਘਿਟਆ ਅਤ ਦਸਰਾ ਅਕ ਿਮਟ ਨ ਦਰਸਾ ਰਹ
                </p>
                <p className={styles.block_770}>
                  ਹਨ। ਇਸ ਕਰਕ ਿਤਨ ਪਦਰ ਨ 3:15 ਿਲਖ।
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_22}>Correct: 3:15 </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਸਵਾ ਿਤਨ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਜਦ ਸਮ ਦੀ ਗਲ ਹਦੀ ਹ ਤ 15 ਨ "ਸਵਾ"
                </p>
                <p className={styles.block_769}>ਿਕਹਾ ਜ ਦਾ ਹ ਿਜਵ ਿਕ 3:15</p>
                <p className={styles.block_863}>Correct: 1:50</p>
                <p className={styles.block_769}>Incorrect: 2 ਵਜਣ 'ਚ 10 ਿਮਟ</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਦ ਵਜਣ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ ਦਸ ਿਮਟ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: "ਦ ਵਜਣ 'ਚ ਦਸ ਿਮਟ" ਨ ਨਬਰ ਬਦ 'ਚ
                </p>
                <p className={styles.block_770}>
                  ਨਾ ਿਲਖ। ਿਕ ਿਕ ਇਹ ਸਮ ਵਲ ਇ ਾਰਾ ਕਰ ਰਹ ਹਨ ਤ
                </p>
                <p className={styles.block_770}>
                  ਘਟ:ਿਮਟ ਫਾਰਮਟ ਦੀ ਵਰਤ ਕਰ। ਇਥ "ਦ ਵਜਣ 'ਚ ਦਸ
                </p>
                <p className={styles.block_770}>
                  ਿਮਟ" ਦਾ ਮਤਲਬ ਹ ਿਕ " ਇਕ ਵਜ ਕ ਦਸ ਿਮਟ। ਇਸਨ
                </p>
                <p className={styles.block_770}>"1:50" ਿਲਿਖਆ ਜਾਵ।</p>
                <p className={styles.block_863}>Correct: 18:00</p>
                <p className={styles.block_769}>Incorrect: 1800 ਘਟ</p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਅਠ ਾਰ ਵਜ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_769}>
                  Explanation: ਭਾਰਤੀ ਰਲਵ ਦ ਸਮ ਨ ਆਮ ਤਰ 'ਤ ਚਵੀ
                </p>
                <p className={styles.block_770}>
                  ਘਿਟਆ ਦ ਫਾਰਮਟ ਨਾਲ ਬਿਲਆ ਜ ਦਾ ਹ। ਇਥ "18" ਵਜ
                </p>
                <p className={styles.block_769}>
                  ਬਿਲਆ ਿਗਆ ਹ, ਇਸ ਕਰਕ ਇਸਨ ਘਟ:ਿਮਟ ਦ ਫਾਰਮਟ 'ਚ
                </p>
                <p className={styles.block_770}>
                  ਿਲਖਣਾ ਹ ਅਤ ਇਸਨ "18:00" ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_1173}>
                  <span className={styles.text_24}>
                    Correct: 3:00 ਵਜਣ ਤ ਕਝ ਿਮਟ ਬਾਅਦ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਿਤਨ ਵਜਣ ਤ ਕਝ ਿਮਟ ਬਾਅਦ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1174}>
                  Explanation: ਹਾਲ ਿਕ ਵਕਤਾ ਨ ਿਮਟ ਬਾਰ ਕਝ ਵੀ ਨਹ
                </p>
                <p className={styles.block_1175}>
                  ਬਿਲਆ ਪਰ ਇਹ ਦਖਣ ਨ ਸਾਫ ਹ ਿਕ "ਿਤਨ" ਘਿਟਆ ਵਲ
                </p>
                <p className={styles.block_1176}>
                  ਇ ਾਰਾ ਕਰਦਾ ਹ, ਸ ਇਸਨ "3:00" ਿਲਿਖਆ ਜਾਵ।
                </p>
                <p className={styles.block_1177}>
                  For "ਦਪਿਹਰ" and "ਮਧ ਰਾਤਰੀ", use the written form.
                </p>
                <p className={styles.block_1178}>Correct: ਦਪਿਹਰ ਨ</p>
                <p className={styles.block_338}>Incorrect: 12:00 ਵਜ</p>
                <p className={styles.block_872}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਦਪਿਹਰ ਨ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1179}>
                  Explanation: ਹਾਲ ਿਕ "ਦਪਿਹਰ" ਦਾ ਮਤਲਬ "12:00
                </p>
                <p className={styles.block_1180}>
                  ਵਜ" ਵੀ ਹਦਾ ਹ। ਇਸਨ ਬਦ 'ਚ ਿਲਖ।
                </p>
                <p className={styles.block_1181}>
                  Correct: ਅਸ ਮਧ ਰਾਤਰੀ ਵਾਲ ਅ 'ਚ ਜਾ ਰਹ ਹ ।
                </p>
                <p className={styles.block_1182}>
                  Incorrect: ਅਸ ਰਾਤ ਬਾਰ ਵਜ ਵਾਲ ਅ 'ਚ ਜਾ ਰਹ ਹ ।
                </p>
                <p className={styles.block_1183}>
                  Explanation: ਹਾਲ ਿਕ "ਮਧ ਰਾਤਰੀ" ਦਾ ਮਤਲਬ ਦਾ ਵੀ
                </p>
                <p className={styles.block_275}>
                  ਓਹੀ ਮਤਲਬ ਹ ਜ "ਰਾਤ ਬਾਰ ਵਜ ਦਾ ਹ। ਇਸਨ ਬਦ 'ਚ
                </p>
                <p className={styles.block_616}>ਿਲਖ।</p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_1186}>
                  Use commas for Location, Person, things etc.
                </p>
                <p className={styles.block_1187}>
                  <span className={styles.text_13}>
                    Correct: ਤਾਜਮਿਹਲ, ਆਗਰਾ ਰਡ{' '}
                  </span>
                  <span className={styles.text_14}>
                    Explanation: ਵਕਤਾ "ਤਾਜਮਿਹਲ" ਿਕਹਾ ਜ ਇਕ ਇਮਾਰਤ
                  </span>
                </p>
                <p className={styles.block_1188}>
                  ਦਾ ਨ ਹ ਜ ਆਗਰਾ ਰਡ 'ਤ ਸਿਥਤ ਹ। ਇਸ ਕਰਕ ਇਹਨ
                </p>
                <p className={styles.block_1189}>ਦਵ ਿਵਚਕਾਰ ਇਕ ਕਾਮਾ ਲਗਗਾ।</p>
                <p className={styles.block_1190}>
                  <span className={styles.text_13}>
                    Correct: ਕਫੀ ਾਪ, 234435{' '}
                  </span>
                  <span className={styles.text_14}>
                    Explanation: ਵਕਤਾ ਉਸ ਕਫੀ ਾਪ ਦੀ ਗਲ ਕਰ ਿਰਹਾ ਹ
                  </span>
                </p>
                <p className={styles.block_1191}>
                  ਿਜਸਦਾ ਿਪਨ ਕਡ "234435" ਹ, ਇਸ ਕਰਕ "ਕਾਫੀ ਾਪ"
                </p>
                <p className={styles.block_1192}>
                  ਅਤ "ਿਪਨ ਕਡ" ਦ ਿਵਚਕਾਰ ਕਾਮਾ ਲਗਾਉਣਾ ਹ।
                </p>
                <p className={styles.block_1193}>
                  Correct: ਿਪ ਅਕਾ ਗਪਤਾ, ਨਵ ਿਦਲੀ
                </p>
                <p className={styles.block_1194}>
                  <span className={styles.text_13}>
                    Correct: ਡਾ. ਰਵੀ ਕਮਾਰ, ਜਨਕਪਰੀ{' '}
                  </span>
                  <span className={styles.text_14}>
                    Explanation: ਵਕਤਾ ਜਨਕਪਰੀ ਵਾਲ " ਡਾ. ਰਵੀ ਕਮਾਰ"
                  </span>
                </p>
                <p className={styles.block_1195}>
                  ਬਾਰ ਗਲ ਕਰ ਿਰਹਾ ਹ। ਇਸ ਕਰਕ ਇਹਨ ਦਵ ਿਵਚਕਾਰ
                </p>
                <p className={styles.block_1196}>ਕਾਮਾ ਲਗਾਉਣਾ ਹ।</p>
                <p className={styles.block_1197}>
                  Correct: ਿਦਲੀ ਯਨੀਵਰਿਸਟੀ, ਿਦਲੀ
                </p>
                <p className={styles.block_1198}>Correct: ਮਸਮ, ਪਿਟਆਲਾ</p>
                <p className={styles.block_461}>
                  <span className={styles.text_13}>Correct: ਸਾਈਕਲ, ਅਬਾਲਾ </span>
                  <span className={styles.text_14}>
                    Explanation: ਵਕਤਾ ਅਬਾਲਾ 'ਚ ਸਾਈਕਲ ਲਭ ਿਰਹਾ ਹ, ਸ
                  </span>
                </p>
                <p className={styles.block_1199}>
                  ਇਸ ਕਰਕ ਵਸਤ "ਸਾਇਕਲ" ਅਤ ਜਗ ਾ "ਅਬਾਲਾ" ਦ
                </p>
                <p className={styles.block_1200}>ਿਵਚਕਾਰ ਇਕ ਕਾਮਾ ਲਗਗਾ।</p>
                <p className={styles.block_622}>
                  <span className={styles.text_13}>
                    Correct: ਕਰੀ ਆਨ ਜਟਾ ਦਾ ਅ-ਟਾਈਮ, ਪਿਟਆਲਾ{' '}
                  </span>
                  <span className={styles.text_14}>
                    Explanation: ਇਥ ਵਕਤਾ ਪਿਟਆਲਾ ਦ ਿਥਏਟਰ 'ਚ "ਕਰੀ
                  </span>
                </p>
                <p className={styles.block_1201}>
                  ਆਨ ਜਟਾ" ਮਵੀ ਦਾ ਟਾਈਮ ਬਾਰ ਪਛ ਿਰਹਾ ਹ, ਇਸ ਕਰਕ
                </p>
                <p className={styles.block_1202}>
                  "ਕਰੀ ਆਨ ਜਟਾ ਦਾ ਅ-ਟਾਈਮ" ਅਤ ਥ "ਪਿਟਆਲਾ" 'ਚ ਦ
                </p>
                <p className={styles.block_1203}>ਿਵਚ ਇਕ ਕਾਮਾ ਲਗਾਇਆ ਿਗਆ ਹ।</p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_1206}>Correct: www.google.co.kr</p>
                <p className={styles.block_1207}>
                  Incorrect: ਡਬਲਯ ਡਬਲਯ ਡਬਲਯ {`{ਡਾਟ} ਗਗਲ {ਡਾਟ}`}
                </p>
                <p className={styles.block_400}>ਕ {`{ਡਾਟ}`} ਕਆਰ</p>
                <p className={styles.block_1208}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਡਬਲਯ ਡਬਲਯ ਡਬਲਯ ਡਾਟ ਗਗਲ </span>
                </p>
                <p className={styles.block_1209}>
                  <span className={styles.text_5}>ਡਾਟ ਕ ਡਾਟ ਕਆਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1210}>
                  Explanation: ਭਾਵ ਿਕ ਸਪੀਕਰ ਨ "ਡਾਟ" ਨ ਚੀ ਸਾਰੀ
                </p>
                <p className={styles.block_1211}>
                  ਬਿਲਆ ਹ, ਇਹ ਉਹ ਿਚਨ ਹ ਜ ਇਕ ਯਆਰਐਲ ਿਲਖਣ ਲਈ
                </p>
                <p className={styles.block_440}>
                  ਵਰਿਤਆ ਜ ਦਾ ਹ ਅਤ ਇਸਨ "." ਹੀ ਿਲਖਣਾ ਹ ਅਤ ਇਹਨ
                </p>
                <p className={styles.block_1212}>
                  ਨ ਕਡਲਦਾਰ ਬਰਕਟ 'ਚ ਿਲਿਖਆ ਿਗਆ ਹ।
                </p>
                <p className={styles.block_1213}>
                  <span className={styles.text_18}>Example </span>
                  <span className={styles.text_13}>Correct: amazon.com </span>
                </p>
                <p className={styles.block_1214}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਐਮਾਜਾਨ ਡਾਟ ਕਾਮ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1215}>
                  Incorrect: ਐਮਾਜਾਨ{` {ਡਾਟ}`} ਕਾਮ
                </p>
                <p className={styles.block_1216}>
                  <span className={styles.text_22}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਐਚ ਟੀ ਟੀ ਪੀ ਕਲਨ ਸਲ ਸਲ ਇਕ{' '}
                  </span>
                </p>
                <p className={styles.block_1217}>
                  <span className={styles.text_5}>ਦ ਿਤਨ ਡਾਟ ਕਾਮ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1218}>
                  Explanation: ਐਚ ਟੀ ਟੀ ਪੀ ਕਲਨ ਸਲ ਸਲ ਵਬ
                </p>
                <p className={styles.block_1219}>
                  ਯਆਰਐਲ ਦਾ ਪਤਾ ਹ ਅਤ ਇਸਨ ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ
                </p>
                <p className={styles.block_1220}>
                  ਕਰਿਦਆ ਅਗਰਜੀ 'ਚ "http://" ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_1221}>Correct: mike@example.org</p>
                <p className={styles.block_1222}>
                  Incorrect: ਮਾਈਕ ਐਟ ਇਗਜ ਪਲ.ਓਰਗ
                </p>
                <p className={styles.block_1223}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਮਾਈਕ ਐਟ ਇਗਜ ਪਲ ਡਾਟ ਓਰਗ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1224}>
                  Explanation: ਈਮਲ ਅਤ ਉਹ ਅਕਾ ਟ ਿਜਹਨ ਨਾਲ
                </p>
                <p className={styles.block_860}>
                  ਵਬਸਾਈਟ ਦ ਨਾਮ ਤ ਪਿਹਲ "ਐਟ" ਲਗਦਾ ਹ ਉਹਨ ਨ "@"
                </p>
                <p className={styles.block_1225}>ਨਾਲ ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_1226}>
                  <span className={styles.text_21}>
                    Correct: ਅਜ ਮ ਘਰ ਜਾ ਿਰਹਾ ਹ । #ਜਲਧਰ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਅਜ ਮ ਘਰ ਜਾ ਿਰਹਾ ਹ ਹ ਟਗ{' '}
                  </span>
                </p>
                <p className={styles.block_1227}>
                  <span className={styles.text_5}>ਜਲਧਰ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1228}>
                  Explanation: ਪ ਡ ਦਾ ਿਚਨ "#" ਨ ਹ ਟਗ ਿਲਿਖਆ ਜ ਦਾ
                </p>
                <p className={styles.block_1229}>
                  ਹ। "#ਜਲਧਰ" ਅਤ "ਹ " ਦ ਿਵਚਕਾਰ ਡਡੀ ਦੀ ਵਰਤ ਕੀਤੀ
                </p>
                <p className={styles.block_1230}>
                  ਗਈ ਹ ਿਕ ਿਕ #ਜਲਧਰ ਨ ਵਾਕ ਦਾ ਿਹਸਾ ਨਹ ਮਿਨਆ
                </p>
                <p className={styles.block_1231}>ਜ ਦਾ।</p>
                <p className={styles.block_1232}>
                  Correct: #ਜਲਧਰ ਮ ਘਰ ਪਹਚ ਿਗਆ।
                </p>
                <p className={styles.block_1233}>
                  Incorrect: #ਜਲਧਰ। ਮ ਘਰ ਪਹਚ ਿਗਆ।
                </p>
                <p className={styles.block_1234}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਹ ਟਗ ਜਲਧਰ ਮ ਘਰ ਪਹਚ ਿਗਆ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1235}>
                  Explanation: "ਜਲਧਰ" ਅਤ "ਮ " ਦ ਿਵਚਕਾਰ ਡਡੀ ਦੀ
                </p>
                <p className={styles.block_1236}>ਵਰਤ ਨਹ ਕਰਨੀ।</p>
                <p className={styles.block_1237}>
                  <span className={styles.text_21}>
                    Correct: ਮ #ਜਲਧਰ ਪਹਚ ਿਗਆ ਹ ।{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>ਮ ਹ ਟਗ ਜਲਧਰ ਪਹਚ ਿਗਆ ਹ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1238}>
                  Explanation: "ਹ ਟਗ ਜਲਧਰ" ਵਾਕ ਦਾ ਿਹਸਾ ਹ ਸ ਇਸ
                </p>
                <p className={styles.block_1239}>
                  ਨਾਲ ਿਕਸ ਵੀ ਤਰ ਦ ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।
                </p>
                <p className={styles.block_1240}>Keep URLs in Latin script.</p>
                <p className={styles.block_1241}>Correct: www.google.com.in</p>
                <p className={styles.block_1242}>
                  Do not correct speaker errors such as transcribing a "ਸਲ "
                  when the user actually says "ਬਕਸਲ ".
                </p>
                <p className={styles.block_1243}>
                  <span className={styles.text_22}>
                    Correct: http://nytimes.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਐਚ ਟੀ ਟੀ ਪੀ ਕਲਨ ਸਲ ਸਲ ਐਨ{' '}
                  </span>
                </p>
                <p className={styles.block_1244}>
                  <span className={styles.text_5}>ਵਾਈ ਟਾਈਮਜ਼ ਡਾਟ ਕਾਮ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1245}>
                  Correct: http:\\mail.yahoo.com
                </p>
                <p className={styles.block_1246}>
                  Incorrect: http://mail.yahoo.com
                </p>
                <p className={styles.block_1247}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਐਚ ਟੀ ਟੀ ਪੀ ਕਲਨ ਬਕਸਲ </span>
                </p>
                <p className={styles.block_1248}>
                  <span className={styles.text_5}>
                    ਬਕਸਲ ਮਲ ਡਾਟ ਯਾਹ ਡਾਟ ਕਾਮ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1249}>
                  Explanation: ਹਾਲ ਿਕ ਸਹੀ ਫਾਰਮਟ "/" ਸਲ ਹ ਪਰ
                </p>
                <p className={styles.block_1250}>
                  ਵਕਤਾ ਨ "ਬਕਸਲ " ਬਿਲਆ ਹ, ਸ ਇਸ ਲਈ ਇਥ ਬਕਸਲ
                </p>
                <p className={styles.block_1251}>ਿਚਨ "\" ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ।</p>
                <p className={styles.block_1252}>Correct: www.forbes.com</p>
                <p className={styles.block_1253}>Incorrect: wwwforbes.com</p>
                <p className={styles.block_1254}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਡਬਲਯ ਡਬਲਯ ਡਬਲਯ ਫਰਬਸ </span>
                </p>
                <p className={styles.block_1255}>
                  <span className={styles.text_5}>ਡਾਟ ਕਾਮ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1256}>
                  Explanation: ਵਕਤਾ ਨ ਵਬਸਾਈਟ "ਫਰਬਸ" ਦ ਨਾਮ ਤ
                </p>
                <p className={styles.block_1257}>
                  ਪਿਹਲ "ਡਾਟ" ਨਹ ਬਿਲਆ। ਹਾਲ ਿਕ ਇਹ ਇਕ ਯਆਰਐਲ
                </p>
                <p className={styles.block_1258}>
                  ਹ, ਇਸ ਕਰਕ ਇਸ 'ਚ "ਡਾਟ" ਲਗਾਉਣਾ ਹ।
                </p>
                <p className={styles.block_1259}>
                  If the speaker drops a "ਡਬਲਯ" or "ਡਾਟ" and it's an obvious
                  URL, you should correct these errors. If the speaker doesn't
                  say the "ਡਬਲਯ"s at all, do not add them.
                </p>
                <p className={styles.block_1260}>Correct: www.amazon.com</p>
                <p className={styles.block_1261}>Incorrect: ww.amazon.com</p>
                <p className={styles.block_1262}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਡਬਲਯ ਡਬਲਯ ਡਾਟ ਐਮਾਜਾਨ ਡਾਟ{' '}
                  </span>
                </p>
                <p className={styles.block_1263}>
                  <span className={styles.text_5}>ਕਾਮ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1264}>
                  Explanation: ਵਕਤਾ ਨ ਇਥ ਦ "ਡਬਲਯ" ਬਲ ਹਨ ਪਰ
                </p>
                <p className={styles.block_1265}>
                  ਇਕ ਵ ਬ ਪਤ ਲਈ ਿਤਨ "ਡਬਲਯ" ਹਣ ਜਰਰੀ ਹਨ, ਸ ਇਸ
                </p>
                <p className={styles.block_1266}>ਕਰਕ ਗਲਤੀ ਨ ਠੀਕ ਕੀਤਾ ਜਾਵ।</p>
                <p className={styles.block_1213}>
                  <span className={styles.text_18}>Example </span>
                  <span className={styles.text_13}>Correct: google.co.uk </span>
                </p>
                <p className={styles.block_1267}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਗਗਲ ਡਾਟ ਕ ਯਕ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1268}>Incorrect: google.co uk</p>
                <p className={styles.block_1269}>
                  Explanation: ਹਾਲ ਿਕ ਵਕਤਾ ਨ "ਯਕ" ਤ ਪਿਹਲ "ਡਾਟ"
                </p>
                <p className={styles.block_1250}>
                  ਨਹ ਬਿਲਆ, ਪਰ ਇਕ ਯਆਰਐਲ ਹ, ਸ ਇਸ ਕਰਕ ਗਲਤੀ
                </p>
                <p className={styles.block_1270}>ਨ ਠੀਕ ਕੀਤਾ ਜਾਵ।</p>
                <p className={styles.block_1271}>
                  <span className={styles.text_22}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_19}>
                    ਡਬਲਯ ਡਬਲਯ ਫਸਬਕ ਡਾਟ ਕਾਮ{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1272}>
                  Explanation: ਵਕਤਾ ਨ "ਫਸਬਕ" ਤ ਪਿਹਲ "ਡਾਟ" ਨਹ
                </p>
                <p className={styles.block_1273}>
                  ਬਿਲਆ ਅਤ ਿਸਰਫ ਦ ਵਾਰ "ਡਬਲਯ" ਬਿਲਆ ਹ ਸ ਇਸ
                </p>
                <p className={styles.block_1274}>ਗਲਤੀ ਨ ਠੀਕ ਕੀਤਾ ਜਾਵ।</p>
                <p className={styles.block_1275}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_1276}>Correct: www.google.com</p>
                <p className={styles.block_1277}>
                  Incorrect: www.g o o g l e.com
                </p>
                <p className={styles.block_1278}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਡਬਲਯ ਡਬਲਯ ਡਬਲਯ ਡਾਟ ਜੀ ਓ{' '}
                  </span>
                </p>
                <p className={styles.block_1279}>
                  <span className={styles.text_5}>ਓ ਜੀ ਐਲ ਈ ਡਾਟ ਕਾਮ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1280}>
                  Explanation: ਭਾਵ ਿਕ ਵਕਤਾ ਨ "ਗਗਲ" ਬਿਲਆ ਹ, ਪਰ
                </p>
                <p className={styles.block_1281}>
                  ਸਾਰ ਯਆਰਐਲ ਨ ਿਬਨ ਸਪਸ ਦ ਇਕਠਾ ਿਲਖਣਾ ਹ, ਿਜਵ
                </p>
                <p className={styles.block_1282}>ਿਕ "www.google.com".</p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_1285}>
                  Correct: ਉਸਨ ਯਨੀ 'ਚ ਦਾਖਲਾ ਿਲਆ।
                </p>
                <p className={styles.block_1286}>
                  Incorrect: ਉਸਨ ਯਨੀਵਰਿਸਟੀ 'ਚ ਦਾਖਲਾ ਿਲਆ।
                </p>
                <p className={styles.block_1287}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਉਸਨ ਯਨੀ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ ਦਾਖਲਾ ਿਲਆ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_893}>
                  Explanation: ਵਕਤਾ ਨ ਇਥ "ਯਨੀ" ਵਰਤ ਕੀਤੀ ਹ ਇਸ
                </p>
                <p className={styles.block_1288}>ਕਰਕ ਇਸਨ "ਯਨੀ" ਿਲਿਖਆ ਜਾਵ।</p>
                <p className={styles.block_1144}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_7}>
                    Correct: ਉਸਨ ਯਨੀਵਰਿਸਟੀ 'ਚ ਦਾਖਲਾ ਿਲਆ।{' '}
                  </span>
                </p>
                <p className={styles.block_1289}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>ਉਸਨ ਯਨੀਵਰਿਸਟੀ </span>
                  <span className={styles.text_12}>'</span>
                  <span className={styles.text_5}>ਚ ਦਾਖਲਾ ਿਲਆ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_528}>
                  Incorrect: ਉਸਨ ਯਨੀ 'ਚ ਦਾਖਲਾ ਿਲਆ।
                </p>
                <p className={styles.block_510}>
                  Explanation: ਹਾਲ ਿਕ "ਯਨੀਵਰਿਸਟੀ" ਨ "ਯਨੀ" ਕਰਕ
                </p>
                <p className={styles.block_749}>
                  ਸਖਪ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹ ਪਰ ਵਕਤਾ ਨ ਇਥ ਪਰ ਬਦ ਦੀ
                </p>
                <p className={styles.block_1290}>
                  ਵਰਤ ਕੀਤੀ ਹ ਇਸ ਕਰਕ ਇਸਨ "ਯਨੀਵਰਿਸਟੀ" ਿਲਿਖਆ
                </p>
                <p className={styles.block_766}>ਜਾਵ।</p>
                <p className={styles.block_1291}>
                  Abbreviate titles for people only when they precede proper
                  names.
                </p>
                <p className={styles.block_1292}>
                  Correct: ਮ ਡਾ. ਰਮਨ ਨ ਜਾਣਦਾ ਹ
                </p>
                <p className={styles.block_1293}>
                  Incorrect: ਮ ਡਾਕਟਰ ਰਮਨ ਨ ਜਾਣਦਾ ਹ ।
                </p>
                <p className={styles.block_1294}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ਮ ਡਾਕਟਰ ਰਮਨ ਨ ਜਾਣਦਾ ਹ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1295}>
                  Explanation: ਇਥ "ਡਾਕਟਰ" ਬਦ "ਰਮਨ" ਨਾਮ ਤ
                </p>
                <p className={styles.block_1296}>
                  ਪਿਹਲ ਆਇਆ ਹ, ਇਸ ਕਰਕ ਇਸਨ ਸਖਪ ਰਪ ਿਵਚ "ਡਾ."
                </p>
                <p className={styles.block_1297}>ਿਲਖ।</p>
                <p className={styles.block_1298}>
                  Correct: ਮਰ ਡਾਕਟਰ ਨ ਮਨ ਹਰ ਕਸਰਤ ਕਰਨ ਲਈ
                </p>
                <p className={styles.block_1299}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ਮਰ ਡਾਕਟਰ ਨ ਮਨ ਹਰ ਕਸਰਤ ਕਰਨ{' '}
                  </span>
                </p>
                <p className={styles.block_1300}>ਿਕਹਾ।</p>
                <p className={styles.block_1301}>
                  Incorrect: ਮਰ ਡਾ. ਨ ਮਨ ਹਰ ਕਸਰਤ ਕਰਨ ਲਈ ਿਕਹਾ।
                </p>
                <p className={styles.block_1302}>
                  <span className={styles.text_5}>ਲਈ ਿਕਹਾ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_1303}>
                  Explanation: ਇਸ ਵਾਕ 'ਚ "ਡਾਕਟਰ" ਬਦ ਿਕਸ ਨਾਮ ਤ
                </p>
                <p className={styles.block_1052}>
                  ਪਿਹਲ ਨਹ ਆਇਆ, ਇਸ ਕਰਕ ਇਸਨ ਪਰਾ ਿਲਖਣਾ ਹ।
                </p>
                <p className={styles.block_1304}>
                  Correct: ਪ . ਜਗਾ ਿਸਘ ਅਜ ਨਹ ਆਏ।
                </p>
                <p className={styles.block_1305}>
                  Incorrect: ਪ ਫਸਰ ਜਗਾ ਿਸਘ ਅਜ ਨਹ ਆਏ।
                </p>
                <p className={styles.block_1306}>
                  Explanation: "ਪ ਫਸਰ" ਤ ਪਿਹਲ "ਜਗਾ ਿਸਘ" ਨਾਮ ਆ
                </p>
                <p className={styles.block_1307}>ਿਰਹਾ ਹ, ਸ ਇਸਨ "ਪ ." ਿਲਖ।</p>
                <p className={styles.block_1308}>Correct: ਉਹ ਮਰਾ ਪ ਫਸਰ ਹ।</p>
                <p className={styles.block_1309}>Incorrect: ਉਹ ਮਰਾ ਪ . ਹ।</p>
                <p className={styles.block_521}>
                  Explanation: "ਪ ਫਸਰ" ਤ ਬਾਅਦ ਕਈ ਨਾਮ ਨਹ ਆਇਆ,
                </p>
                <p className={styles.block_1310}>ਇਸ ਕਰਕ ਇਸਨ ਪਰਾ ਿਲਖਣਾ ਹ।</p>
                <p className={styles.block_1311}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_1312}>
                  Correct: ਐਚਡੀਐਫਸੀ, ਆਈਸੀਆਈਸੀਆਈ ਬ ਕ
                </p>
                <p className={styles.block_1313}>
                  Incorrect: ਐਚ.ਡੀ.ਐਫ.ਸੀ., ਆਈ.ਸੀ.ਆਈ.ਸੀ.ਆਈ. ਬ ਕ
                </p>
                <p className={styles.block_1314}>
                  Explanation: ਇਹ ਆਫੀ ੀਅਲ ਬਰ ਡ ਦ ਨਾਮ ਹਨ।
                </p>
                <p className={styles.block_1315}>Correct: ਯਐਸ, ਯਕ, ਪੀ ਿਚਦਬਰਮ</p>
                <p className={styles.block_1316}>
                  Incorrect: ਯ.ਐਸ., ਯ.ਕ., ਪੀ. ਿਚਦਬਰਮ
                </p>
                <p className={styles.block_1317}>
                  Explanation: ਇਹ ਭਗਿਲਕ ਅਤ ਖਾਸ ਨ ਵ ਹਨ।
                </p>
                <p className={styles.block_1318}>Correct: ਭਾਜਪਾ, ਬਸਪਾ</p>
                <p className={styles.block_1139}>
                  Incorrect: ਭਾ.ਜ.ਪਾ. , ਬ.ਸ.ਪਾ.
                </p>
                <p className={styles.block_1319}>
                  Explanation: ਇਹ ਦਵ ਿਸਆਸੀ ਪਾਰਟੀਆ ਦ ਨਾਮ ਦ
                </p>
                <p className={styles.block_1320}>ਸਖਪ ਰਪ ਹਨ।</p>
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
