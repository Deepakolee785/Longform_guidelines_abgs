import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
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
              <p className={styles.block_302}>Punctuation</p>
              <p className={styles.block_303}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <p className={styles.block_304}>Fragments versus sentences</p>
              <p className={styles.block_305}>
                Add punctuation where needed, but err on the side of keeping it
                minimal.
              </p>
              <p className={styles.block_306}>
                Full sentences should end with a punctuation mark.
              </p>
              <p className={styles.block_307}>
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a specific question, or
                if it's an example where dropping the subject sounds completely
                natural as a complete sentence.
              </p>
              <p className={styles.block_308}>
                Correct: ਤਸ ਿਕਸ ਬਾਰ ਗਲ ਕਰ ਰਹ ਹ? ਆਪਣ ਗਆਢੀ
              </p>
              <p className={styles.block_309}>ਬਾਰ।</p>
              <p className={styles.block_310}>
                Explanation: ਭਾਵ ਿਕ "ਆਪਣ ਗਆਢੀ ਬਾਰ।" ਤਕਨੀਕੀ
              </p>
              <p className={styles.block_311}>
                ਤਰ 'ਤ ਪਰਨ ਵਾਕ ਨਹ ਹ ਿਕ ਿਕ ਇਸ 'ਚ ਿਕਿਰਆ ਨਹ ਹ,
              </p>
              <p className={styles.block_312}>
                ਸ ਉਪਰਲ ਵਾਕ ਨ ਇਕ ਵਾਕ ਮਨਣਾ ਚਾਹੀਦਾ ਹ, ਭਾਵ ਿਕ ਇਹ
              </p>
              <p className={styles.block_313}>
                "ਤਸ ਿਕਸ ਬਾਰ ਗਲ ਕਰ ਰਹ ਹ?" ਦਾ ਜਵਾਬ ਹ।
              </p>
              <p className={styles.block_314}>Correct: ਆਪਣ ਗਆਢੀ ਬਾਰ</p>
              <p className={styles.block_315}>
                Explanation: ਹਾਲ ਿਕ "ਆਪਣ ਗਆਢੀ ਬਾਰ" ਿਕਸ ਵੀ
              </p>
              <p className={styles.block_316}>Incorrect: ਆਪਣ ਗਆਢੀ ਬਾਰ।</p>
              <p className={styles.block_317}>
                ਪ ਨ ਵਲ ਇ ਾਰਾ ਨਹ ਕਰਦਾ ਅਤ ਨਾ ਹੀ ਇਹ ਸਪਰਨ ਵਾਕ
              </p>
              <p className={styles.block_318}>
                ਹ। ਸ ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।
              </p>
              <p className={styles.block_319}>Correct: ਕਿਤਆ ਦੀਆ ਤਸਵੀਰ</p>
              <p className={styles.block_320}>Incorrect: ਕਿਤਆ ਦੀਆ ਤਸਵੀਰ ।</p>
              <p className={styles.block_321}>
                Explanation: ਇਸ ਉਦਾਹਰਣ 'ਚ ਕਈ ਿਵ ਾ ਨਹ ਹ, ਕਈ
              </p>
              <p className={styles.block_322}>
                ਸਯਕਤ ਿਕਿਰਆ ਨਹ ਹ, ਸਣਨ 'ਚ ਵੀ ਬਣਾਵਟੀ ਲਗਦਾ ਹ
              </p>
              <p className={styles.block_323}>
                ਅਤ ਨਾ ਹੀ ਿਕਸ ਪ ਨ ਦਾ ਤਰ ਲਗਦਾ ਹ। ਇਹ ਇਕ ਵਬ
              </p>
              <p className={styles.block_324}>
                ਸਰਚ ਦ ਵ ਗ ਿਜਆਦਾ ਲਗਦਾ ਹ। ਇਸਨ ਇਕ ਸਪਰਨ ਵਾਕ
              </p>
              <p className={styles.block_312}>
                ਦ ਵ ਗ ਨਾ ਦਿਖਆ ਜਾਵ; ਇਸਦ ਅਤ 'ਚ ਿਬਨ ਡਡੀ ਜ ਪ ਨ
              </p>
              <p className={styles.block_325}>ਿਚਨ ਲਗਾਏ ਇਸਨ ਟਰ ਸਕ ਾਈਬ ਕਰ।</p>
              <p className={styles.block_326}>Correct: ਕਲ ਪਾਰਟੀ 'ਚ ਆ ਰਹ ਹ?</p>
              <p className={styles.block_327}>
                Explanation: ਹਾਲ ਿਕ ਵਾਕ ਿਵਚਲ ਪ ਨਵਾਚਕ ਪੜਨ ਵ
              </p>
              <p className={styles.block_328}>Incorrect: ਕਲ ਪਾਰਟੀ 'ਚ ਆ ਰਹ ਹ</p>
              <p className={styles.block_317}>
                ਅਤ ਿਵ (ਕੀ ਤਸ ) ਨ ਨਹ ਬਿਲਆ ਿਗਆ, ਪਰ ਿਫਰ ਵੀ ਇਹ
              </p>
              <p className={styles.block_329}>
                ਇਕ ਸਪਰਨ ਵਾਕ ਹ। ਇਹ ਪਜਾਬੀ 'ਚ ਪ ਨਵਾਚਕ ਵਾਕ ਨ
              </p>
              <p className={styles.block_330}>ਬਲਣ ਦਾ ਆਮ ਤਰੀਕਾ ਹ।</p>
              <p className={styles.block_331}>Correct: ਮਬਈ ਦਾ ਮਸਮ</p>
              <p className={styles.block_332}>
                Explanation: ਇਸ 'ਚ ਿਕਸ ਚੀਜ ਬਾਰ ਜਾਣਕਾਰੀ ਪਛੀ ਜਾ
              </p>
              <p className={styles.block_333}>Incorrect: ਮਬਈ ਦਾ ਮਸਮ?</p>
              <p className={styles.block_334}>
                ਰਹੀ ਹ, ਾਇਦ ਇਹ ਇਕ ਵਬ ਸਰਚ ਹ ਪਰ ਇਸਨ ਮਟ ਤਰ
              </p>
              <p className={styles.block_335}>
                'ਤ ਿਕਸ ਵਾਕ ਦਾ ਿਹਸਾ/ਖਡ ਮਿਨਆ ਜਾਵਗਾ
              </p>
              <p className={styles.block_336}>
                Interjections, greetings, and farewells said in isolation should
                be considered complete sentences and punctuated as such.
              </p>
              <p className={styles.block_337}>Correct: ਮਾਫ ਕਰਨਾ।</p>
              <p className={styles.block_338}>Incorrect: ਮਾਫ ਕਰਨਾ</p>
              <p className={styles.block_339}>
                Explanation: ਿਵਸਮਕ ਬਦ ਿਜਵ ਿਕ "ਮਾਫ ਕਰਨਾ",
              </p>
              <p className={styles.block_340}>
                "ਵਾਹ", "ਓਹ" ਆਿਦ ਨ ਵਾਕ ਨ ਪਜਾਬੀ 'ਚ ਸਹੀ ਿਵਰਾਮ ਿਚਨ
              </p>
              <p className={styles.block_341}>
                ਦੀ ਵਰਤ ਕਰਕ ਇਕ ਸਤਤਰ ਵਾਕ ਵ ਗ ਵਰਿਤਆ ਜਾ ਸਕਦਾ
              </p>
              <p className={styles.block_342}>
                ਹ। ਇਸਦਾ ਕਾਰਨ ਇਹ ਹ ਿਕ ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਲਗੀ ਹਈ
              </p>
              <p className={styles.block_343}>ਹ।</p>
              <p className={styles.block_344}>Correct: ਸਿਤ ਸ ੀ ਅਕਾਲ।</p>
              <p className={styles.block_345}>Incorrect: ਸਿਤ ਸ ੀ ਅਕਾਲ</p>
              <p className={styles.block_346}>
                Explanation: ਭਕਾਮਨਾਵ ਅਤ ਿਵਦਾਈ ਵਾਲ ਬਦ ਿਜਵ
              </p>
              <p className={styles.block_260}>
                "ਸਿਤ ਸ ੀ ਅਕਾਲ", "ਰਬ ਰਾਖਾ" ਆਿਦ ਨ ਸਹੀ ਿਵਰਾਮ ਿਚਨ ਦੀ
              </p>
              <p className={styles.block_347}>
                ਵਰਤ ਕਰਕ ਇਕ ਸਤਤਰ ਵਾਕ ਵ ਗ ਵਰਿਤਆ ਜਾ ਸਕਦਾ ਹ।
              </p>
              <p className={styles.block_348}>
                ਇਸ ਕਰਕ ਇਹਨ ਬਦ ਨ ਿਲਖਣ ਵਲ ਵਾਕ ਦ ਅਤ 'ਚ ਡਡੀ
              </p>
              <p className={styles.block_349}>ਲਗਾਈ ਜਾਵ।</p>
              <p className={styles.block_350}>Correct: ਠੀਕ ਹ। ਅਲਿਵਦਾ।</p>
              <p className={styles.block_351}>
                Explanation: ਇਸ 'ਚ ਹ /ਨਾ ਬਦ "ਠੀਕ ਹ" ਅਤ
              </p>
              <p className={styles.block_352}>Incorrect: ਠੀਕ ਹ, ਅਲਿਵਦਾ।</p>
              <p className={styles.block_353}>
                ਿਵਦਾਇਗੀ ਬਦ "ਅਲਿਵਦਾ" ਦ ਿਵਚਕਾਰ ਇਕ ਲਬਾ ਠਿਹਰਾਅ
              </p>
              <p className={styles.block_354}>
                ਹ, ਸ ਇਹਨ ਨ ਦ ਅਲਗ-ਅਲਗ ਬਦ ਮਿਨਆ ਜਾਵ ਅਤ
              </p>
              <p className={styles.block_355}>ਇਹਨ ਡਡੀ ਲਗਾ ਕ ਵਖ ਕੀਤਾ ਜਾਵ।</p>
              <p className={styles.block_356}>Correct: ਵਧਾਈ ਹਵ ਤਹਾਨ</p>
              <p className={styles.block_357}>
                Explanation: ਭਾਵ ਿਕ "ਵਧਾਈ ਹਵ" ਜਦ ਇਕਲਾ ਹਵ ਤ
              </p>
              <p className={styles.block_358}>Incorrect: ਵਧਾਈ ਹਵ। ਤਹਾਨ।</p>
              <p className={styles.block_359}>
                ਇਸਨ ਪਰਾ ਵਾਕ ਮਨਣਾ ਹ ਅਤ ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਲਗਾਉਣੀ
              </p>
              <p className={styles.block_360}>
                ਹ। ਪਰ ਇਸ ਉਦਾਹਰਣ 'ਚ ਇਹ ਇਕਲਾ ਨਹ ਵਰਿਤਆ ਿਗਆ,
              </p>
              <p className={styles.block_361}>
                ਇਸ ਕਰਕ ਇਸਦ ਨਾਲ ਡਡੀ ਨਾ ਲਗਾਈ ਜਾਵ।
              </p>
              <p className={styles.block_362}>
                Below are some examples of common interjections.
              </p>
              <p className={styles.block_363}>● ਬਲ-ਬਲ</p>
              <p className={styles.block_364}>● ਵਧਾਈ ਹਵ</p>
              <p className={styles.block_365}>● ਹਾਏ</p>
              <p className={styles.block_366}>● ਹਾਹਾ</p>
              <p className={styles.block_367}>● ਓਏ</p>
              <p className={styles.block_368}>● ਮਾਫ ਕਰਨਾ</p>
              <p className={styles.block_369}>● ਓਹ</p>
              <p className={styles.block_370}>● ਹ ਭਗਵਾਨ</p>
              <p className={styles.block_371}>● ਵਾਹ</p>
              <p className={styles.block_372}>
                Do not punctuate phrases that are intended to be used by the
                speaker as a web search, not as full sentences.
              </p>
              <p className={styles.block_373}>Correct: ਆਲਆ ਨ ਿਕਵ ਉਬਾਲੀਏ</p>
              <p className={styles.block_374}>Incorrect: ਆਲਆ ਨ ਿਕਵ ਉਬਾਲੀਏ।</p>
              <p className={styles.block_375}>
                Explanation: ਇਸ ਵਾਕ ਨ ਇਕ ਵਬ ਸਰਚ ਲਈ
              </p>
              <p className={styles.block_376}>
                ਵਰਿਤਆ ਿਗਆ ਹ ਇਸ ਕਰਕ ਇਸ ਨਾਲ ਿਕਸ ਵੀ ਤਰ ਦ
              </p>
              <p className={styles.block_377}>ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।</p>
              <p className={styles.block_378}>Correct: ਤਾਜ ਮਿਹਲ ਦੀਆ ਤਸਵੀਰ</p>
              <p className={styles.block_379}>
                Incorrect: ਤਾਜ ਮਿਹਲ ਦੀਆ ਤਸਵੀਰ ।
              </p>
              <p className={styles.block_380}>
                Explanation: ਇਹ ਵੀ ਇਕ ਵਬ ਸਰਚ ਹ ਸ ਇਸ ਕਰਕ
              </p>
              <p className={styles.block_381}>
                ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।
              </p>
              <p className={styles.block_382}>
                Add end punctuation to sentence fragments that sound like the
                end of a sentence. For fragments that do not clearly sound like
                the beginning or end of a sentence, leave out punctuation. Note
                that sentence fragments may be a result of cut-off audio
                samples.
              </p>
              <p className={styles.block_383}>Correct: ਤਹਾਨ ਕੀ ਲਗਦਾ ਹ? ਇਹ ਐਵ</p>
              <p className={styles.block_384}>
                Incorrect: ਤਹਾਨ ਕੀ ਲਗਦਾ ਹ? ਇਹ ਐਵ ।
              </p>
              <p className={styles.block_385}>
                Explanation: "ਇਹ ਐਵ " ਇਕ ਸਪਰਨ ਵਾਕ ਨਹ ਹ, ਅਤ
              </p>
              <p className={styles.block_386}>
                ਸਾਫ ਤਰ 'ਤ ਅਧ 'ਚ ਕਿਟਆ ਿਗਆ ਹ। ਸ ਇਸਦ ਅਤ 'ਚ ਡਡੀ
              </p>
              <p className={styles.block_387}>ਨਾ ਲਗਾਈ ਜਾਵ।</p>
              <p className={styles.block_277}>
                Correct: ਮਜਬਤ ਹ। ਇਸਦਾ ਕਈ ਮਤਲਬ ਨਹ ਬਣਦਾ।
              </p>
              <p className={styles.block_388}>
                Incorrect: ਮਜਬਤ ਹ ਇਸਦਾ ਕਈ ਮਤਲਬ ਨਹ ਬਣਦਾ।
              </p>
              <p className={styles.block_389}>
                Explanation: "ਮਜਬਤ ਹ" ਸਾਫ ਤਰ 'ਤ ਦਖਣ ਨ ਵਾਕ ਦਾ
              </p>
              <p className={styles.block_390}>
                ਅਤ ਲਗਦਾ ਹ ਿਜਸਨ ਰਆਤ 'ਚ ਕਟ ਿਦਤਾ ਿਗਆ ਹ। ਇਸ
              </p>
              <p className={styles.block_391}>
                ਕਰਕ ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ।
              </p>
              <p className={styles.block_392}>
                Correct: ਬਹਤ ਔਖਾ, ਇਸ ਕਰਕ ਿਹਮਤ ਨਾ ਹਾਰ।
              </p>
              <p className={styles.block_393}>
                Incorrect: ਬਹਤ ਔਖਾ, ਇਸ ਕਰਕ ਿਹਮਤ ਨਾ ਹਾਰ
              </p>
              <p className={styles.block_394}>
                Explanation: ਆਡੀਓ ਨ ਰ 'ਚ ਕਟ ਿਦਤਾ ਿਗਆ ਹ ਪਰ
              </p>
              <p className={styles.block_395}>
                ਵਾਕ ਦਾ ਅਤ ਸਹੀ ਹ ਿਰਹਾ ਹ। ਹਾਲ ਿਕ ਵਾਕ ਪਰਾ ਨਹ ਹ ਪਰ
              </p>
              <p className={styles.block_396}>ਵਾਕ ਦ ਅਤ 'ਚ ਡਡੀ ਲਗਾਉਣੀ ਹ।</p>
              <p className={styles.block_397}>
                Correct: ਮ ਚਾਹ ਪੀਣ ਜਾ ਿਰਹਾ ਹ । ਮ ਚਾਹ ਕਾਫੀ ਦਾ ਕਪ
              </p>
              <p className={styles.block_398}>ਿਕਨ ਦਾ ਹ?</p>
              <p className={styles.block_399}>
                Incorrect: ਮ ਚਾਹ ਪੀਣ ਜਾ ਿਰਹਾ ਹ । ਮ ਚਾਹ- ਕਾਫੀ ਦਾ
              </p>
              <p className={styles.block_400}>ਕਪ ਿਕਨ ਦਾ ਹ?</p>
              <p className={styles.block_401}>
                Incorrect: ਮ ਚਾਹ ਪੀਣ ਜਾ ਿਰਹਾ ਹ । ਮ ਚਾਹ....ਕਾਫੀ ਦਾ
              </p>
              <p className={styles.block_400}>ਕਪ ਿਕਨ ਦਾ ਹ?</p>
              <p className={styles.block_402}>
                Incorrect: ਮ ਚਾਹ ਪੀਣ ਜਾ ਿਰਹਾ ਹ । ਮ ਚਾਹ। ਕਾਫੀ ਦਾ
              </p>
              <p className={styles.block_400}>ਕਪ ਿਕਨ ਦਾ ਹ?</p>
              <p className={styles.block_403}>
                Explanation: ਵਾਕ /ਖਡ ਦ ਮਗਰ ਕਈ ਵੀ ਡਡੀ, ਹਾਈਫਨ,
              </p>
              <p className={styles.block_404}>
                ਪਦ-ਲਪ ਿਚਨ (ellipsis) ਦੀ ਵਰਤ ਨਾ ਕਰ ਭਾਵ ਉਸ ਤ
              </p>
              <p className={styles.block_405}>ਬਾਅਦ ਕਈ ਨਵ ਵਾਕ ਰ ਹ ਿਰਹਾ ਹਵ।</p>
              <p className={styles.block_406}>Correct: ਇਹ ਿਕਨ ਦਾ ਇਹ ਿਕਵ ਦਾ</p>
              <p className={styles.block_407}>
                Incorrect: ਇਹ ਿਕਨ ਦਾ- ਇਹ ਿਕਵ ਦਾ-
              </p>
              <p className={styles.block_408}>
                Incorrect: ਇਹ ਿਕਨ ਦਾ.... ਇਹ ਿਕਵ ਦਾ....
              </p>
              <p className={styles.block_409}>
                Incorrect: ਇਹ ਿਕਨ ਦਾ? ਇਹ ਿਕਵ ਦਾ?
              </p>
              <p className={styles.block_385}>
                Explanation: ਹਾਲ ਿਕ "ਇਹ ਿਕਨ ਦਾ" ਜ "ਇਹ ਿਕਵ ਦਾ"
              </p>
              <p className={styles.block_410}>
                ਦਵ ਵਾਕ ਦਾ ਅਤ ਨਹ ਹ, ਇਸ ਕਰਕ ਇਹਨ ਨਾਲ ਿਕਸ ਵੀ
              </p>
              <p className={styles.block_411}>
                ਤਰ ਦ ਿਵਰਾਮ ਿਚਨ ਜ ਡਡੀ ਦੀ ਵਰਤ ਨਹ ਕਰਨੀ।
              </p>
              <p className={styles.block_412}>Correct: ਨਦੀ ਿਕਥ ਨਦੀ ਿਕਥ ਹ?</p>
              <p className={styles.block_413}>Incorrect: ਨਦੀ ਿਕਥ- ਨਦੀ ਿਕਥ ਹ?</p>
              <p className={styles.block_414}>
                Explanation: ਪਿਹਲਾ ਵਾਕ "ਨਦੀ ਿਕਥ" ਪਰਾ ਨਹ ਹ ਸ
              </p>
              <p className={styles.block_415}>
                ਇਸਦ ਅਤ 'ਚ ਿਕਸ ਵੀ ਤਰ ਦ ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਹ
              </p>
              <p className={styles.block_416}>ਕਰਨੀ।</p>
              <p className={styles.block_417}>Correct: ਜਾ ਰਹ ਪਰ ਿਫਰ ਸਿਚਆ ਿਕ</p>
              <p className={styles.block_418}>
                Incorrect: ਜਾ ਰਹ ਪਰ ਿਫਰ ਸਿਚਆ ਿਕ।
              </p>
              <p className={styles.block_419}>
                Explanation: ਇਹ ਇਕ ਅਪਰਨ ਵਾਕ ਲਗਦਾ ਹ ਿਕ ਿਕ
              </p>
              <p className={styles.block_255}>
                ਇਸਦੀ ਨਾ ਹੀ ਕਈ ਰਆਤ ਹ ਅਤ ਨਾ ਹੀ ਕਈ ਅਤ। ਇਸ
              </p>
              <p className={styles.block_420}>
                ਕਰਕ ਇਸ ਨਾਲ ਿਕਸ ਵੀ ਤਰ ਦ ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਾ
              </p>
              <p className={styles.block_421}>ਕਰ।</p>
              <p className={styles.block_422}>
                Correct: ਮ ਜਤ ਉਧਾਰ ਲਏ ਹਨ। ਖਰੀਦ ਲਓ
              </p>
              <p className={styles.block_423}>
                Explanation: ਇਹ ਸਾਫ ਨਹ ਹ ਿਕ "ਖਰੀਦ ਲਓ" ਵਾਕ ਦ
              </p>
              <p className={styles.block_424}>
                Incorrect: ਮ ਜਤ ਉਧਾਰ ਲਏ ਹਨ, ਖਰੀਦ ਲਓ
              </p>
              <p className={styles.block_425}>
                ਅਤ 'ਚ ਆ ਿਰਹਾ ਹ ਜ ਕਈ ਸਤਤਰ ਵਾਕ /ਖਡ ਹ। ਸ ਇਸਨ
              </p>
              <p className={styles.block_426}>ਖਡ ਹੀ ਮਿਨਆ ਜਾਵ।</p>
              <p className={styles.block_427}>
                <span className={styles.text_7}>
                  Correct: ਮ ਜਤ ਉਧਾਰ ਲਏ ਹਨ। ਪਾ ਲਓ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: "ਪਾ ਲਓ" ਸਾਫ ਤਰ 'ਤ ਿਵ ਤ ਿਬਨ ਇਕ
                </span>
              </p>
              <p className={styles.block_428}>ਸਪਰਨ ਵਾਕ ਹ</p>
              <p className={styles.block_429}>
                A voice action is a query where the user requests a specific
                action that a smartphone can complete. The action requested is
                generally expressed by a trigger (most often a verb describing
                the action to be performed, but it can also be any other part of
                speech denoting a change of state of the device or of an app).
                If a voice action sounds complete, it should be punctuated as a
                full sentence. In contrast to a voice action, a web search is a
                query where the user does not request a specific action that a
                smartphone can complete. Web searches are more often, but not
                always, spoken as true fragments.
              </p>
              <p className={styles.block_430}>
                <span className={styles.text_6}>Example </span>
                <span className={styles.text_11}>
                  Correct: example@gmail.com ਨ ਈਮਲ ਭਜ: ਤਹਾਡਾ
                </span>
              </p>
              <p className={styles.block_431}>
                <span className={styles.text_4}>audio: " </span>
                <span className={styles.text_5}>ਇਗਜ ਪਲ ਐਟ ਜੀਮਲ ਡਾਟ ਕਾਮ </span>
              </p>
              <p className={styles.block_432}>ਿਦਨ ਿਕਵ ਦਾ ਿਰਹਾ?</p>
              <p className={styles.block_433}>
                <span className={styles.text_5}>ਤਹਾਡਾ ਿਦਨ ਿਕਵ ਦਾ ਿਰਹਾ </span>
                <span className={styles.text_4}>" </span>
              </p>
              <p className={styles.block_434}>
                Explanation: ਬਲਣ ਦੀ ਿਕਿਰਆ ਇਕ ਪਰਾ ਵਾਕ ਹ। ਸ
              </p>
              <p className={styles.block_435}>ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਲਗਾਉਣੀ ਹ।</p>
              <p className={styles.block_436}>
                Correct: ਫਰ ਚ 'ਚ ਅਨਵਾਦ ਕਰ: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ?
              </p>
              <p className={styles.block_437}>
                Incorrect: ਫਰ ਚ 'ਚ ਅਨਵਾਦ ਕਰ: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ
              </p>
              <p className={styles.block_438}>
                <span className={styles.text_4}>Example audio: " </span>
                <span className={styles.text_5}>ਫਰ ਚ </span>
                <span className={styles.text_12}>'</span>
                <span className={styles.text_5}>
                  ਚ ਅਨਵਾਦ ਕਰ ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ{' '}
                </span>
                <span className={styles.text_4}>" </span>
              </p>
              <p className={styles.block_439}>
                Explanation: ਇਹ ਵਾਕ ਿਡਵਾਇਸ ਨ ਿਕਸ ਿਕਿਰਆ ਨ ਪਰਾ
              </p>
              <p className={styles.block_440}>
                ਕਰਨ ਦੀ ਬਨਤੀ ਕਰਦਾ ਹ, ਇਸ ਕਰਕ ਇਹ ਇਕ ਬਲਣ ਦੀ
              </p>
              <p className={styles.block_441}>
                ਿਕਿਰਆ ਹ ਅਤ ਇਸ ਦ ਅਤ 'ਚ ਡਡੀ ਲਗਾਉਣੀ ਹ।
              </p>
              <p className={styles.block_442}>
                <span className={styles.text_7}>
                  Correct: ਫਲਾਈਟ ਮਡ ਨ ਐਕਿਟਵ ਕਰ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਇਹ ਵਾਕ ਿਡਵਾਇਸ ਦੀ ਸਿਥਤੀ ਕਝ{' '}
                </span>
              </p>
              <p className={styles.block_443}>
                ਬਦਲਾਅ ਕਰਨ ਦੀ ਬਨਤੀ ਕਰਦਾ ਹ, ਇਸ ਕਰਕ ਇਹ ਇਕ
              </p>
              <p className={styles.block_444}>
                ਬਲਣ ਦੀ ਿਕਿਰਆ (voice action) ਹ ਇਸ ਕਰਕ ਇਸਦ
              </p>
              <p className={styles.block_445}>ਅਤ 'ਚ ਡਡੀ ਲਗਾਉਣੀ ਹ।</p>
              <p className={styles.block_446}>
                <span className={styles.text_7}>
                  Correct: ਮਨ ਮਬਈ ਦਾ ਨਕ ਾ ਿਦਖਾਓ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: "ਿਦਖਾਓ" ਿਕਿਰਆ, ਿਕਸ ਕਮ ਦ ਲਈ{' '}
                </span>
              </p>
              <p className={styles.block_447}>
                ਪ ਤੀਿਕਿਰਆ ਦੀ ਤਰ ਕਮ ਕਰਦੀ ਹ, ਇਸ ਕਰਕ ਇਸਦ ਅਤ
              </p>
              <p className={styles.block_448}>'ਚ ਡਡੀ ਲਗਾਈ ਜਾਵ।</p>
              <p className={styles.block_449}>
                <span className={styles.text_7}>
                  Correct: ਰਾਹਲ ਦ ਆਿਫਸ 'ਚ ਕਾਲ ਕਰ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: "ਕਰ" ਿਕਿਰਆ, ਿਕਸ ਕਮ ਦ ਲਈ{' '}
                </span>
              </p>
              <p className={styles.block_447}>
                ਪ ਤੀਿਕਿਰਆ ਦੀ ਤਰ ਕਮ ਕਰਦੀ ਹ, ਇਸ ਕਰਕ ਇਸਦ ਅਤ
              </p>
              <p className={styles.block_448}>'ਚ ਡਡੀ ਲਗਾਈ ਜਾਵ।</p>
              <p className={styles.block_450}>
                Correct: ਕਲ ਦਪਿਹਰ 3:00 ਦਾ ਿਰਮਾਈਡਰ ਸ ਟ ਕਰ:
              </p>
              <p className={styles.block_451}>ਾਿਪਗ ਕਰਨ ਜਾਣਾ ਹ।</p>
              <p className={styles.block_452}>
                Explanation: ਇਹ ਵਾਕ ਿਡਵਾਇਸ ਨ ਕਈ ਕਾਰਜ ਕਰਨ ਦੀ
              </p>
              <p className={styles.block_453}>
                ਬਨਤੀ ਕਰਦਾ ਹ, ਇਸ ਕਰਕ ਇਹ ਇਕ ਬਲਣ ਦੀ ਿਕਿਰਆ ਹ
              </p>
              <p className={styles.block_454}>ਅਤ ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਲਗਾਉਣੀ ਹ।</p>
              <p className={styles.block_455}>
                <span className={styles.text_7}>
                  Correct: ਿਕਰਪਾ ਕਰਕ, ਫਲ ਲਾਈਟ ਚਲਾਓ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਪਾਰਟੀਕਲ ਇਕ ਪ ਤੀਿਕਿਰਆ (trigger) ਦ
                </span>
              </p>
              <p className={styles.block_456}>
                ਵ ਗ ਕਮ ਕਰਦਾ ਹ ਸ ਇਹ ਵਬ ਸਰਚ ਨਾ ਹ ਕ ਇਕ ਬਲਣ ਦੀ
              </p>
              <p className={styles.block_457}>
                ਿਕਿਰਆ (voice action) ਹ। ਬਲਚਾਲ ਦਾ ਬਦ "ਿਕਰਪਾ
              </p>
              <p className={styles.block_458}>
                ਕਰਕ" ਵੀ ਇਸ ਚੀਜ਼ ਵਲ ਇ ਾਰਾ ਕਰਦਾ ਹ ਇਹ ਬਲਣ ਦੀ
              </p>
              <p className={styles.block_459}>
                ਿਕਿਰਆ (voice action) ਹ ਇਸ ਕਰਕ ਆਿਗਆਵਾਚੀ
              </p>
              <p className={styles.block_460}>ਵਾਕ ਨਾਲ "," ਲਾ ਕ ਵਖ ਕਰ।</p>
              <p className={styles.block_461}>
                <span className={styles.text_13}>Correct: ਿਦਲੀ ਵਲ ਦਾ ਰਾਹ </span>
                <span className={styles.text_14}>
                  Explanation: ਇਹ ਇਕ ਵਬ ਸਰਚ ਹ ਸ ਇਸ ਕਰਕ ਇਸਦ{' '}
                </span>
              </p>
              <p className={styles.block_462}>
                ਅਤ 'ਚ ਿਕਸ ਵੀ ਤਰ ਦ ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕਰ।
              </p>
              <p className={styles.block_461}>
                <span className={styles.text_13}>Correct: ਚਡੀਗੜ ਦਾ ਨਕ ਾ </span>
                <span className={styles.text_14}>
                  Explanation: ਇਹ ਇਕ ਵਬ ਸਰਚ ਹ ਸ ਇਸ ਕਰਕ ਇਸਦ{' '}
                </span>
              </p>
              <p className={styles.block_462}>
                ਅਤ 'ਚ ਿਕਸ ਵੀ ਤਰ ਦ ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕਰ।
              </p>
              <p className={styles.block_463}>
                <span className={styles.text_13}>
                  Correct: ਅ ਟਾਈਮ ਵੀਰ ਦੀ ਵਿਡਗ, ਪਿਟਆਲਾ{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: ਇਹ ਇਕ ਵਬ ਸਰਚ ਹ ਸ ਇਸ ਕਰਕ ਇਸ ਦ{' '}
                </span>
              </p>
              <p className={styles.block_464}>
                ਅਤ 'ਚ ਡਡੀ ਨਾ ਲਗਾਈ ਜਾਵ। ਿਫਲਮ ਦ ਨਾਮ ਅਤ ਜਗ ਾ ਦ
              </p>
              <p className={styles.block_465}>ਿਵਚਕਾਰ ਕਾਮਾ ਲਗਾਇਆ ਜਾਵ।</p>
              <p className={styles.block_466}>
                <span className={styles.text_13}>Correct: ਿਦਲੀ 'ਚ ਹਟਲ </span>
                <span className={styles.text_14}>
                  Explanation: ਇਹ ਇਕ ਵਬ ਸਰਚ ਹ ਸ ਇਸ ਕਰਕ ਇਸ ਦ{' '}
                </span>
              </p>
              <p className={styles.block_467}>ਅਤ 'ਚ ਡਡੀ ਨਾ ਲਗਾਈ ਜਾਵ।</p>
              <p className={styles.block_468}>
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not capitalize or punctuate it as a
                sentence.
              </p>
              <p className={styles.block_469}>Commas</p>
              <p className={styles.block_470}>
                Only use commas where required. Err on the side of minimal
                punctuation. Do not rely on intonation.
              </p>
              <p className={styles.block_471}>
                Correct: ਸਭ ਤ ਨ ੜਲਾ ਪਟਰਲ ਪਪ ਿਕਥ ਹ?
              </p>
              <p className={styles.block_472}>
                Incorrect: ਸਭ ਤ ਨ ੜਲਾ...ਪਟਰਲ ਪਪ...ਿਕਥ ਹ?
              </p>
              <p className={styles.block_473}>
                Incorrect: ਸਭ ਤ ਨ ੜਲਾ, ਪਟਰਲ ਪਪ, ਿਕਥ ਹ?
              </p>
              <p className={styles.block_474}>
                Explanation: ਭਾਵ ਿਕ ਬਲਣ ਵਾਲਾ ਬਲਣ ਵਲ ਵਧ
              </p>
              <p className={styles.block_243}>
                ਠਿਹਰਾਅ ਦੀ ਵਰਤ ਕਰਦਾ ਹ ਪਰ ਕਾਮ ਦੀ ਵਰਤ ਨਾ ਕਰ।
              </p>
              <p className={styles.block_475}>
                ਕਈ ਥਾਵ 'ਤ ਕਾਮਾ ਲਗਾਉਣ ਦੀ ਜਰਰਤ ਹਦੀ ਹ ਪਰ ਇਹਨ
              </p>
              <p className={styles.block_476}>
                ਉਦਾਹਰਣ 'ਚ ਅਿਜਹਾ ਕਈ ਵਾਕ ਨਹ ਿਦਤਾ ਿਗਆ।
              </p>
              <p className={styles.block_477}>
                For complete sentences that follow a single word or phrase that
                focuses the meaning of a sentence, put a comma after the single
                word or phrase.
              </p>
              <p className={styles.block_478}>
                <span className={styles.text_13}>
                  Correct: ਗ ਧੀ ਪਾਰਕ, ਕੀ ਇਹ ਬਦ ਹ ਿਗਆ ਹ?{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: ਇਸ ਵਾਕ ਿਵਚ ਇਕ ਟਾਿਪਕ "ਗ ਧੀ ਪਾਰਕ"
                </span>
              </p>
              <p className={styles.block_479}>
                ਹ ਅਤ ਇਸ ਟਾਿਪਕ ਦਾ ਕਮ ਟ "ਕੀ ਇਹ ਬਦ ਹ ਿਗਆ ਹ" ਹ
              </p>
              <p className={styles.block_480}>
                ਅਤ ਇਸ ਕਰਕ ਟਾਿਪਕ ਦ ਮਗਰ ਕਾਮਾ ਲਗਾਉਣਾ ਹ।
              </p>
              <p className={styles.block_481}>
                <span className={styles.text_11}>
                  Correct: ਕਦ, ਫਲ, ਜ ਸਬਜੀ?{' '}
                </span>
                <span className={styles.text_15}>
                  Explanation: ਭਾਵ ਇਸ ਵਾਕ 'ਚ ਿਸਰਫ ਟਾਿਪਕ ਹੀ ਹਨ।
                </span>
              </p>
              <p className={styles.block_482}>
                ਹਾਲ ਿਕ ਇਹ ਵੀ ਪ ਨ ਵਾਕ ਦਾ ਹੀ ਇਕ ਰਪ ਹ ਅਤ ਹਰ
              </p>
              <p className={styles.block_483}>ਟਾਿਪਕ ਮਗਰ ਕਾਮਾ ਲਗਾਉਣਾ ਜਰਰੀ ਹ।</p>
              <p className={styles.block_484}>
                <span className={styles.text_7}>
                  Correct: ਨਵੀਆ ਚੜੀਆ, ਮਨ ਪਸਦ ਹਨ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਇਸ ਵਾਕ 'ਚ "ਚੜੀਆ" ਟਾਿਪਕ ਹਨ ਅਤ{' '}
                </span>
              </p>
              <p className={styles.block_485}>
                "ਮਨ ਪਸਦ ਹਨ" ਕਮ ਟ ਹਨ। ਸ ਕਾਮਾ ਟਾਿਪਕ ਤ ਬਾਅਦ
              </p>
              <p className={styles.block_486}>ਲਗਾਉਣਾ ਹ।</p>
              <p className={styles.block_487}>
                Put a comma after using a phrase to introduce a sentence, such
                as interactive phrases or verb-phrase phrases.
              </p>
              <p className={styles.block_488}>
                Correct: ਿਜ ਹੀ ਅਸ ਸਟ ਨ ਪਹਚ, ਗਡੀ ਚਲ ਪਈ।
              </p>
              <p className={styles.block_489}>
                Incorrect: ਿਜ ਹੀ ਅਸ ਸਟ ਨ ਪਹਚ ਗਡੀ ਚਲ ਪਈ।
              </p>
              <p className={styles.block_490}>
                Explanation: "ਿਜ ਹੀ ਅਸ ਸਟ ਨ ਪਹਚ" ਇਕ ਵਾਕ
              </p>
              <p className={styles.block_491}>
                ਰਆਤੀ ਵਾਕ ਹ ਅਤ ਇਸ ਤ ਬਾਅਦ ਆਉਣ ਵਾਲ ਵਾਕ ਤ
              </p>
              <p className={styles.block_492}>ਪਿਹਲ ਕਾਮ ਦੀ ਵਰਤ ਕਰਨੀ ਹ।</p>
              <p className={styles.block_493}>
                Correct: ਅਸਲ ਿਵਚ, ਿਵਦ ਜਾਣਾ ਿਜਆਦਾ ਠੀਕ ਦਾ ਹ।
              </p>
              <p className={styles.block_494}>
                Incorrect: ਅਸਲ ਿਵਚ ਉਹ ਿਵਦ ਜਾਣਾ ਚਾਹਦਾ ਹ।
              </p>
              <p className={styles.block_495}>
                Explanation: "ਅਸਲ ਿਵਚ" ਇਸਨ ਬਾਕੀ ਦ ਵਾਕ ਨਾਲ ਕਾਮ
              </p>
              <p className={styles.block_496}>ਦਆਰਾ ਅਲਗ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।</p>
              <p className={styles.block_497}>
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However: If there is a long pause
                between a discourse word, interjection, or yes/no word and a
                full sentence that follows it, treat that initial word as a
                separate sentence.
              </p>
              <p className={styles.block_498}>
                Correct: ਠੀਕ ਹ, ਹਣ ਮਨ ਘਰ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।
              </p>
              <p className={styles.block_499}>
                Incorrect: ਠੀਕ ਹ ਹਣ ਮਨ ਘਰ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।
              </p>
              <p className={styles.block_500}>
                Explanation: "ਠੀਕ ਹ" ਇਕ ਵਾਰਤਾਲਾਪਕ ਬਦ ਹ, ਜਕਰ
              </p>
              <p className={styles.block_348}>
                ਇਸਦ ਨਾਲ ਕਈ ਲਬਾ ਠਿਹਰਾਅ ਨਾ ਹਵ ਤ ਇਸਦ ਨਾਲ ਕਾਮ
              </p>
              <p className={styles.block_501}>
                ਦੀ ਵਰਤ ਕਰਨੀ ਚਾਹੀਦੀ ਹ। ਪਜਾਬੀ 'ਚ ਵਾਰਤਾਲਾਪਕ
              </p>
              <p className={styles.block_502}>
                ਬਦ ਦੀਆ ਕਝ ਉਦਾਹਰਣ : "ਪਰ", "ਅਸਲ" 'ਚ, "ਸ" ਆਿਦ।
              </p>
              <p className={styles.block_503}>Correct: ਵਾਹ, ਤਸ ਬਹਤ ਹਿ ਆਰ ਹ।</p>
              <p className={styles.block_504}>
                Explanation: ਇਸ ਤਰ ਦ ਿਵਸਮਕ ਬਦ ਿਜਵ ਿਕ "ਵਾਹ"
              </p>
              <p className={styles.block_505}>Incorrect: ਵਾਹ ਤਸ ਬਹਤ ਹਿ ਆਰ ਹ।</p>
              <p className={styles.block_506}>
                ਵਾਕ ਦ ਰ 'ਚ ਆ ਦਾ ਹ ਤ ਇਸਦ ਬਾਅਦ ਕਾਮਾ ਲਗਾਉਣਾ
              </p>
              <p className={styles.block_507}>
                ਚਾਹੀਦਾ ਹ। ਿਵਸਮਕ ਬਦ ਦੀ ਹਰ ਉਦਾਹਰਣ ਿਜਵ ਿਕ
              </p>
              <p className={styles.block_508}>"ਓਏ", "ਹਾਹਾ" ਆਿਦ।</p>
              <p className={styles.block_509}>
                Correct: ਵਾਹ, ਇਹ ਤ ਬਹਤ ਵਧੀਆ ਗਲ ਹ।
              </p>
              <p className={styles.block_510}>
                Explanation: "ਵਾਹ" ਇਕ ਿਵਸਮਕ ਬਦ ਹ ਇਸ ਕਰਕ
              </p>
              <p className={styles.block_511}>
                Incorrect: ਵਾਹ ਇਹ ਤ ਬਹਤ ਵਧੀਆ ਗਲ ਹ।
              </p>
              <p className={styles.block_512}>
                ਬਾਕੀ ਵਾਕ ਤ ਰ ਹਣ ਪਿਹਲ ਇਸਦ ਨਾਲ ਕਾਮਾ ਹਣਾ
              </p>
              <p className={styles.block_513}>ਚਾਹੀਦਾ ਹ</p>
              <p className={styles.block_514}>
                Correct: ਠੀਕ ਹ, ਮ ਇਹ ਤਹਾਨ ਭਜ ਦਵ ਗਾ।
              </p>
              <p className={styles.block_515}>
                Incorrect: ਠੀਕ ਹ ਮ ਇਹ ਤਹਾਨ ਭਜ ਦਵ ਗਾ।
              </p>
              <p className={styles.block_516}>
                Explanation: "ਠੀਕ ਹ" ਇਕ ਹ /ਨ ਹ ਵਾਲਾ ਬਦ ਹ ਸ
              </p>
              <p className={styles.block_244}>
                ਇਸ ਕਰਕ ਇਸਦ ਨਾਲ ਕਾਮਾ ਆਉਣਾ ਚਾਹੀਦਾ ਹ। ਇਸ ਤਰ
              </p>
              <p className={styles.block_517}>
                ਦ ਬਦ ਦੀਆ ਹਰ ਉਦਾਹਰਣ ਿਜਵ ਿਕ "ਹ ", "ਨ ਹ", "ਹ
              </p>
              <p className={styles.block_518}>ਜੀ" ਆਿਦ।</p>
              <p className={styles.block_519}>Correct: ਹ , ਮ ਇਹ ਕਮ ਕਰਦਾ ਹ ।</p>
              <p className={styles.block_520}>Incorrect: ਹ ਮ ਇਹ ਕਮ ਕਰਦਾ ਹ ।</p>
              <p className={styles.block_521}>
                Explanation: ਇਹ ਹ /ਨ ਹ ਬਦ ਹ ਇਸ ਕਰਕ ਇਸ ਨਾਲ
              </p>
              <p className={styles.block_522}>ਕਾਮਾ ਲਗਣਾ ਜਰਰੀ ਹ।</p>
              <p className={styles.block_523}>Correct: ਜਰਰ, ਮ ਇਹ ਕਰ ਸਕਦਾ ਹ ।</p>
              <p className={styles.block_524}>
                Incorrect: ਜਰਰ ਮ ਇਹ ਕਰ ਸਕਦਾ ਹ ।
              </p>
              <p className={styles.block_525}>
                Explanation: "ਜਰਰ" ਬਦ ਦ ਨਾਲ ਜ ਕਈ ਠਿਹਰਾਅ
              </p>
              <p className={styles.block_526}>
                ਨਹ ਹ ਤ ਇਸ ਨਾਲ ਕਾਮਾ ਲਗਾ ਦਣਾ ਚਾਹੀਦਾ ਹ।
              </p>
              <p className={styles.block_527}>Correct: ਜਰਰ। ਮ ਇਹ ਕਰ ਸਕਦਾ ਹ ।</p>
              <p className={styles.block_389}>
                Explanation: ਇਸ ਸਮ ਇਸ ਉਦਾਹਰਣ 'ਚ "ਜਰਰ" ਬਦ
              </p>
              <p className={styles.block_528}>
                Incorrect: ਜਰਰ, ਮ ਇਹ ਕਰ ਸਕਦਾ ਹ ।
              </p>
              <p className={styles.block_529}>
                ਦ ਨਾਲ ਇਕ ਠਿਹਰਾਅ ਹ, ਇਸ ਕਰਕ ਇਸਦ ਨਾਲ ਕਾਮਾ ਨਹ
              </p>
              <p className={styles.block_530}>ਲਗਾਉਣਾ।</p>
              <p className={styles.block_531}>Use commas in lists.</p>
              <p className={styles.block_532}>
                Correct: ਿਸਆਣ, ਮਜਾਕੀਆ, ਸਹਣ ਬਚ ਨ ਆਪਣਾ ਪਿਹਲਾ
              </p>
              <p className={styles.block_533}>ਕਦਮ ਚਿਕਆ।</p>
              <p className={styles.block_534}>
                Incorrect: ਿਸਆਣ ਮਜਾਕੀਆ ਸਹਣ ਬਚ ਨ ਆਪਣਾ ਪਿਹਲਾ
              </p>
              <p className={styles.block_535}>ਕਦਮ ਚਿਕਆ।</p>
              <p className={styles.block_536}>
                Incorrect: ਿਸਆਣ, ਮਜਾਕੀਆ, ਸਹਣ, ਬਚ ਨ ਆਪਣਾ
              </p>
              <p className={styles.block_537}>ਪਿਹਲਾ ਕਦਮ ਚਿਕਆ।</p>
              <p className={styles.block_538}>
                Explanation: ਇਸ ਵਾਕ 'ਚ ਕਈ ਿਵ ਣ ਦੀ ਵਰਤ ਕੀਤੀ
              </p>
              <p className={styles.block_539}>
                ਗਈ ਹ ਿਜਵ ਿਕ "ਿਸਆਣਾ", "ਮਜਾਕੀਆ", "ਸਹਣਾ"। ਇਹਨ ਨ
              </p>
              <p className={styles.block_540}>
                ਕਾਮ ਦ ਨਾਲ ਅਲਗ-ਅਲਗ ਕਰਨਾ ਚਾਹੀਦਾ ਹ ਪਰ ਆਖਰੀ
              </p>
              <p className={styles.block_541}>
                ਿਲਸਟ ਦ ਆਖਰੀ ਿਵ ਣ ਤ ਮਗਰ ਕਾਮ ਦੀ ਵਰਤ ਕਰਨੀ
              </p>
              <p className={styles.block_542}>ਚਾਹੀਦੀ ਹ।</p>
              <p className={styles.block_543}>
                Use commas before and after restrictive modifiers, but do not
                use commas for non-restrictive modifiers. The basic test for
                this is whether the modifier must be kept in the sentence in
                order to keep the same meaning.
              </p>
              <p className={styles.block_544}>
                Correct: ਭਾਰਤ ਦ ਪ ਧਾਨਮਤਰੀ ਨਿਰਦਰ ਮਦੀ ਿਸਖਰ
              </p>
              <p className={styles.block_545}>ਸਮਲਨ 'ਚ ਸਨ।</p>
              <p className={styles.block_546}>
                Incorrect: ਭਾਰਤ ਦ ਪ ਧਾਨਮਤਰੀ, ਨਿਰਦਰ ਮਦੀ, ਿਸਖਰ
              </p>
              <p className={styles.block_547}>ਸਮਲਨ 'ਚ ਸਨ।</p>
              <p className={styles.block_548}>
                Explanation: ਅਣ-ਬਧਜੀ ਿਵ ਣ "ਨਿਰਦਰ ਮਦੀ" ਨਾਲ
              </p>
              <p className={styles.block_549}>
                "ਭਾਰਤ ਦ ਪ ਧਾਨਮਤਰੀ" ਦ ਮਖ ਅਰਥ 'ਤ ਕਈ ਅਸਰ ਨਹ ਪ
              </p>
              <p className={styles.block_550}>
                ਿਰਹਾ, ਇਹ ਿਸਰਫ ਭਾਰਤ ਦ ਪ ਧਾਨਮਤਰੀ ਬਾਰ ਵਧਰ
              </p>
              <p className={styles.block_551}>
                ਜਾਣਕਾਰੀ ਿਦਦਾ ਹ। ਸ ਇਸ ਤ ਪਿਹਲ ਅਤ ਬਾਅਦ 'ਚ ਕਾਮ
              </p>
              <p className={styles.block_552}>ਦੀ ਵਰਤ ਕਰਨ ਦੀ ਲੜ ਨਹ ਹ।</p>
              <p className={styles.block_553}>
                Correct: ਉਹ ਲਕ, ਿਜਹਨ ਨ ਲਾਲ ਕਮੀਜ ਪਾਈ ਹਈ ਸੀ,
              </p>
              <p className={styles.block_554}>ਘਰ ਚਲ ਗਏ।</p>
              <p className={styles.block_555}>
                Incorrect: ਉਹ ਲਕ ਿਜਹਨ ਨ ਲਾਲ ਕਮੀਜ ਪਾਈ ਹਈ ਸੀ
              </p>
              <p className={styles.block_556}>ਘਰ ਚਲ ਗਏ।</p>
              <p className={styles.block_557}>
                Explanation: ਬਧਜੀ ਿਵ ਣ। ਬਧਜੀ ਉਪਵਾਕ "ਿਜਹਨ ਨ
              </p>
              <p className={styles.block_558}>
                ਲਾਲ ਕਮੀਜ ਪਾਈ ਹਈ ਸੀ" ਇਕ ਖਾਸ ਲਕ ਦ ਸਮਹ ਵਲ
              </p>
              <p className={styles.block_275}>
                ਇ ਾਰਾ ਕਰਦਾ ਹ। ਇਸ ਕਰਕ "ਿਜਹਨ ਨ ਲਾਲ ਕਮੀਜ ਪਾਈ
              </p>
              <p className={styles.block_559}>
                ਹਈ ਸੀ" ਨ ਕਾਿਮਆ ਨਾਲ ਿਲਖਣਾ ਚਾਹੀਦਾ ਹ।
              </p>
              <p className={styles.block_560}>
                Correct: ਉਹ ਰਾ ਟਰਪਤੀ, ਜ 2008 'ਚ ਚਣ ਗਏ, ਨ
              </p>
              <p className={styles.block_561}>2009 'ਚ ਕਾਰਜਭਾਰ ਸਭਾਿਲਆ।</p>
              <p className={styles.block_562}>
                Incorrect: ਉਹ ਰਾ ਟਰਪਤੀ ਜ 2008 'ਚ ਚਣ ਗਏ ਨ
              </p>
              <p className={styles.block_563}>2009 'ਚ ਕਾਰਜਭਾਰ ਸਭਾਿਲਆ।</p>
              <p className={styles.block_564}>
                Explanation: "ਉਹ ਰਾ ਟਰਪਤੀ" ਤ ਬਾਅਦ ਇਕ
              </p>
              <p className={styles.block_565}>
                ਪ ਭਾਵਪਰਨ ਠਿਹਰਾਅ ਹ ਅਤ ਇਸਨ ਕਾਿਮਆ ਦ ਨਾਲ
              </p>
              <p className={styles.block_566}>ਿਲਿਖਆ ਜਾਵ।</p>
              <p className={styles.block_567}>
                Use commas in sign-offs, such as those at the end of a message.
                Do not use end punctuation.
              </p>
              <p className={styles.block_568}>Correct: ਵਲ , ਰਮਨਦੀਪ</p>
              <p className={styles.block_569}>Incorrect: ਵਲ ਰਮਨਦੀਪ।</p>
              <p className={styles.block_570}>
                Explanation: "ਵਲ " ਇਕ ਸਾਈਨ-ਆਫ ਬਦ ਹ, ਸ ਇਸ
              </p>
              <p className={styles.block_571}>
                ਕਰਕ ਇਸ ਨਾਲ ਕਾਮਾ ਲਗਾਉਣਾ ਜਰਰੀ ਹ। ਇਸਦ ਅਤ 'ਚ
              </p>
              <p className={styles.block_572}>ਡਡੀ ਨਹ ਲਗਾਉਣੀ ਚਾਹੀਦੀ।</p>
              <p className={styles.block_573}>
                <span className={styles.text_13}>
                  Correct: ਤਹਾਡਾ ਆਿਗਆਕਾਰੀ, ਅਿਨਲ{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: "ਤਹਾਡਾ ਆਿਗਆਕਾਰੀ" ਇਕ ਹਰ ਸਾਈਨ{' '}
                </span>
              </p>
              <p className={styles.block_574}>
                ਆਫ ਬਦ ਹ, ਸ ਇਸ ਕਰਕ ਇਸਦ ਬਾਅਦ ਵੀ ਇਕ ਕਾਮਾ
              </p>
              <p className={styles.block_575}>
                ਹਣਾ ਚਾਹੀਦਾ ਹ। ਇਸਦ ਅਤ 'ਚ ਡਡੀ ਨਹ ਲਗਾਉਣੀ
              </p>
              <p className={styles.block_576}>ਚਾਹੀਦੀ।</p>
              <p className={styles.block_577}>
                Do not use commas in sentences that consist only of a greeting
                and an addressee. If a greeting occurs at the beginning of a
                sentence or fragment, place a comma after the greeting. If the
                greeting includes an addressee, place the comma after the
                addressee.
              </p>
              <p className={styles.block_578}>Correct: ਨਮਸਤ ਰਮਨ।</p>
              <p className={styles.block_579}>Incorrect: ਨਮਸਤ, ਰਮਨ।</p>
              <p className={styles.block_580}>
                Explanation: ਇਸ ਉਦਾਹਰਣ 'ਚ ਕਵਲ ਭਕਾਮਨਾ
              </p>
              <p className={styles.block_581}>
                "ਨਮਸਤ" ਅਤ ਇਕ ਪ ਾਪਤ ਕਰਤਾ ਦਾ ਨਾਮ "ਰਮਨ" ਹ। ਇਸ
              </p>
              <p className={styles.block_582}>
                ਕਰਕ ਇਸਦ ਨਾਲ ਕਾਮ ਦੀ ਵਰਤ ਨਹ ਕਰਨੀ ਚਾਹੀਦੀ।
              </p>
              <p className={styles.block_350}>Correct: ਹਲ, ਮ ਅਨੀ ਾ ਹ ।</p>
              <p className={styles.block_583}>Incorrect: ਹਲ ਮ ਅਨੀ ਾ ਹ ।</p>
              <p className={styles.block_584}>
                Explanation: "ਮ ਅਨੀ ਾ ਹ " ਇਕ ਵਾਕ ਹ, ਇਸ ਕਰਕ
              </p>
              <p className={styles.block_585}>
                ਇਹਨ ਨ ਵਖਰਾ ਕਰਨ ਲਈ ਕਾਮਾ ਲਗਾਉਣਾ ਜਰਰੀ ਹ।
              </p>
              <p className={styles.block_586}>
                <span className={styles.text_7}>
                  Correct: ਹਲ ਰਮਨ, ਮ ਅਨੀ ਾ ਹ ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਇਸ ਉਦਾਹਰਣ 'ਚ "ਹਲ ਰਮਨ" ਇਕ{' '}
                </span>
              </p>
              <p className={styles.block_587}>
                ਭਕਾਮਨਾ ਹ, ਸ ਇਸ ਲਈ "ਰਮਨ" ਦ ਬਾਅਦ ਇਕ ਕਾਮਾ
              </p>
              <p className={styles.block_588}>
                ਲਗਾ ਹਇਆ ਹ। "ਮ ਅਨੀ ਾ ਹ " ਇਕ ਪਰਾ ਵਾਕ ਹ।
              </p>
              <p className={styles.block_589}>
                <span className={styles.text_7}>
                  Correct: ਹਲ ਰਮਨ। ਮ ਅਨੀ ਾ ਹ ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਇਸ ਉਦਾਹਰਣ 'ਚ ਭਕਾਮਨਾ ਅਤ ਅਗਲ{' '}
                </span>
              </p>
              <p className={styles.block_590}>
                ਵਾਕ 'ਚ ਇਕ ਲਬਾ ਠਿਹਰਾਅ ਹ, ਸ "ਹਲ ਰਮਨ।" ਅਤ "ਮ
              </p>
              <p className={styles.block_591}>
                ਅਨੀ ਾ ਹ ।" ਨ ਦ ਵਖ-ਵਖ ਵਾਕ ਮਿਨਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।
              </p>
              <p className={styles.block_592}>
                ਅਿਜਹੀ ਉਦਾਹਰਣ 'ਚ ਕਾਮ ਦੀ ਜਗ ਾ ਡਡੀ ਦੀ ਵਰਤ ਕਰਨੀ
              </p>
              <p className={styles.block_593}>ਚਾਹੀਦੀ ਹ।</p>
              <p className={styles.block_594}>
                Except in greetings, sentence-initial and sentence-final
                addressees should be separated by a comma.
              </p>
              <p className={styles.block_595}>
                <span className={styles.text_7}>
                  Correct: ਰਾਹਲ, ਮਨ ਕਾਲ ਕਰ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: "ਰਾਹਲ" ਵਾਕ ਦ ਰਆਤ 'ਚ ਆਉਣ ਵਾਲਾ{' '}
                </span>
              </p>
              <p className={styles.block_596}>
                ਨਾਮ ਹ ਇਸ ਕਰਕ ਇਸਨ ਦਸਰ ਵਾਕ ਤ ਿਨਖੜਨ ਲਈ ਕਾਮ
              </p>
              <p className={styles.block_597}>ਦੀ ਵਰਤ ਕਰ।</p>
              <p className={styles.block_598}>
                <span className={styles.text_13}>
                  Correct: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ, ਆਕਾ ?{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: "ਆਕਾ " ਵਾਕ ਦ ਅਤ 'ਚ ਆਉਣ ਵਾਲਾ{' '}
                </span>
              </p>
              <p className={styles.block_599}>
                ਪ ਾਪਤ ਕਰਤਾ ਹ ਇਸ ਕਰਕ ਇਸਨ ਵਾਕ ਤ ਿਨਖੜਨ ਲਈ
              </p>
              <p className={styles.block_600}>ਕਾਮ ਦੀ ਵਰਤ ਕਰਨੀ ਚਾਹੀਦੀ ਹ।</p>
              <p className={styles.block_601}>
                Correct: ਰਾਹਲ, ਅਨੀ ਾ। ਮ ਤਹਾਡ ਨਾਲ ਇਕ ਗਲ ਕਰਨੀ
              </p>
              <p className={styles.block_602}>ਹ।</p>
              <p className={styles.block_603}>
                Explanation: ਨ ਟ ਕਰਨ ਵਾਲੀ ਗਲ ਹ ਿਕ ਇਹ ਇਕ ਔਖੀ
              </p>
              <p className={styles.block_604}>
                ਉਦਾਹਰਣ ਹ। "ਰਾਹਲ, ਅਨੀ ਾ।" 'ਚ ਇਸ ਤਰ ਲਗਦਾ ਹ ਿਕ
              </p>
              <p className={styles.block_605}>
                "ਮ ਅਨੀ ਾ ਹ " ਦੀ ਜਗ ਾ ਸਖਪ ਰਪ "ਅਨੀ ਾ।" ਦੀ ਵਰਤ
              </p>
              <p className={styles.block_606}>
                ਕੀਤੀ ਗਈ ਹ। ਸ ਇਸ ਕਰਕ "ਅਨੀ ਾ" ਤ ਬਾਅਦ ਡਡੀ ਦੀ
              </p>
              <p className={styles.block_607}>ਵਰਤ ਕੀਤੀ ਗਈ ਹ।</p>
              <p className={styles.block_608}>
                <span className={styles.text_7}>
                  Correct: ਿਪ ਆ, ਹਲ, ਮ ਅਗਦ ਹ ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਇਥ "ਿਪ ਆ", "ਹਲ" ਅਤ "ਮ ਅਗਦ ਹ " ਦ
                </span>
              </p>
              <p className={styles.block_609}>
                ਿਵਚਕਾਰ ਛਟਾ ਿਜਹਾ ਠਿਹਰਾਅ ਹ, ਸ ਇਹਨ ਨ ਕਾਮ ਨਾਲ
              </p>
              <p className={styles.block_610}>ਿਨਖੜਨਾ ਚਾਹੀਦਾ ਹ ਨਾ ਿਕ ਡਡੀ ਨਾਲ।</p>
              <p className={styles.block_611}>
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".
              </p>
              <p className={styles.block_612}>Correct: Ok Google</p>
              <p className={styles.block_613}>Incorrect: Ok, Google</p>
              <p className={styles.block_614}>Incorrect: Ok Google.</p>
              <p className={styles.block_615}>
                Explanation: "Ok Google" ਨ ਅਡ ਬਿਲਆ ਿਗਆ ਹ, ਸ
              </p>
              <p className={styles.block_260}>
                ਇਸ ਨਾਲ ਿਕਸ ਵੀ ਤਰ ਦ ਤਰ ਦਾ ਿਵਰਾਮ ਿਚਨ ਨਾ ਵਰਿਤਆ
              </p>
              <p className={styles.block_616}>ਜਾਵ।</p>
              <p className={styles.block_617}>
                <span className={styles.text_13}>
                  Correct: Ok Google, ਿਨਮ ਦੀਆ ਤਸਵੀਰ{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: "Ok Google" "ਿਨਮ ਦੀਆ ਤਸਵੀਰ " ਨ ਵ
                </span>
              </p>
              <p className={styles.block_618}>
                ਵਾਕ ਤ ਪਿਹਲ ਆਇਆ ਹ, ਸ ਇਸ ਕਰਕ "ਓਕ ਗਗਲ" ਦ
              </p>
              <p className={styles.block_229}>ਮਗਰ ਇਕ ਕਾਮਾ ਲਗਗਾ।</p>
              <p className={styles.block_619}>
                <span className={styles.text_7}>
                  Correct: Ok Google, ਜਾਵਦ ਨ ਇਕ ਮਲ ਭਜ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: "Ok Google" ਇਕ ਆਿਗਆਵਾਚਕ ਵਾਕ{' '}
                </span>
              </p>
              <p className={styles.block_620}>
                "ਜਾਵਦ ਨ ਇਕ ਮਲ ਭਜ।" ਤ ਪਿਹਲ ਆਇਆ ਹ, ਸ ਇਸ
              </p>
              <p className={styles.block_621}>ਕਰਕ "ਓਕ ਗਗਲ" ਨਾਲ ਇਕ ਕਾਮਾ ਲਗਗਾ।</p>
              <p className={styles.block_622}>
                <span className={styles.text_13}>
                  Correct: Ok Google, ਇਸ ਸਾਲ ਦੀਵਾਲੀ ਕਦ ਹ?{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: "Ok Google" ਇਕ ਪ ਨਵਾਚਕ ਵਾਕ "ਇਸ
                </span>
              </p>
              <p className={styles.block_623}>
                ਸਾਲ ਦੀਵਾਲੀ ਕਦ ਹ?" ਤ ਪਿਹਲ ਆਇਆ ਹ, ਸ "ਓਕ ਗਗਲ"
              </p>
              <p className={styles.block_624}>ਤ ਬਾਅਦ ਕਾਮਾ ਲਗਗਾ।</p>
              <p className={styles.block_625}>Intonation marks</p>
              <p className={styles.block_626}>
                Punctuate the following as questions: 1) All queries
                syntactically built as questions, regardless of intonation. 2)
                All queries which sound like they are being used as questions,
                regardless of sentence structure.
              </p>
              <p className={styles.block_627}>Correct: ਕੀ ਤਸ ਉਦਾਸ ਹ?</p>
              <p className={styles.block_352}>Incorrect: ਕੀ ਤਸ ਉਦਾਸ ਹ।</p>
              <p className={styles.block_628}>
                Explanation: ਭਾਵ ਿਕ ਸਰ ਅਲਾਪ (intonation) ਇਕ
              </p>
              <p className={styles.block_268}>
                ਪ ਨਵਾਚਕ ਬਦ ਵ ਗ ਨਹ ਲਗਦਾ ਪਰ ਵਾਕ ਬਣਤਰ ਦ
              </p>
              <p className={styles.block_549}>
                ਤਰ 'ਤ ਇਹ ਪ ਨਵਾਚਕ ਹ ਿਕ ਿਕ "ਕੀ" ਿਵ (Subject) ਤ
              </p>
              <p className={styles.block_629}>ਪਿਹਲ ਆਇਆ ਹ।</p>
              <p className={styles.block_630}>Correct: ਸਵਰ 3:00 ਵਜ?</p>
              <p className={styles.block_332}>
                Explanation: ਹਾਲ ਿਕ ਇਸ ਵਾਕ ਦੀ ਬਣਤਰ ਪ ਨਵਾਚਕ
              </p>
              <p className={styles.block_631}>Incorrect: ਸਵਰ 3:00 ਵਜ।</p>
              <p className={styles.block_632}>
                ਵ ਗ ਨਹ ਹ ਪਰ ਚ ਸਰ ਅਲਾਪ ਨਾਲ ਬਿਲਆ ਿਗਆ ਹ
              </p>
              <p className={styles.block_633}>
                ਿਜਸਦਾ ਮਤਲਬ ਇਥ ਇਕ ਪ ਨ ਪਿਛਆ ਿਗਆ ਹ।
              </p>
              <p className={styles.block_634}>
                <span className={styles.text_13}>
                  Correct: ਅਤ ਤਸ ਵੀ ਆ ਰਹ ਹ?{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: ਹਾਲ ਿਕ ਇਹ ਪ ਨਵਾਚਕ ਵਾਕ ਵ ਗ ਨਹ{' '}
                </span>
              </p>
              <p className={styles.block_635}>
                ਲਗਦਾ, "ਪਰ ਅਤ ਤਸ ਵੀ ਆ ਰਹ ਹ" ਨ ਚ ਸਰ-ਅਲਾਪ
              </p>
              <p className={styles.block_636}>
                (rising intonation) ਨਾਲ ਬਲੀ ਗਈ ਹ ਿਜਸ ਕਰਕ ਇਸਦਾ
              </p>
              <p className={styles.block_620}>
                ਮਤਲਬ ਇਹ ਹ ਿਕ ਇਥ ਕਈ ਪ ਨ ਪਿਛਆ ਜਾ ਿਰਹਾ ਹ।
              </p>
              <p className={styles.block_637}>
                ਇਸਦ ਅਤ 'ਚ ਪ ਨਵਾਚਕ ਿਚਨ ਲਗਾਉਣਾ ਹ।
              </p>
              <p className={styles.block_638}>
                <span className={styles.text_13}>Correct: ਿਦਲੀ 'ਚ ਤਾਪਮਾਨ </span>
                <span className={styles.text_14}>
                  Explanation: ਭਾਵ ਿਕ "ਿਦਲੀ 'ਚ ਤਾਪਮਾਨ" ਨ ਚੀ{' '}
                </span>
              </p>
              <p className={styles.block_639}>
                ਸਰ-ਅਲਾਪ ਦ ਨਾਲ ਬਿਲਆ ਿਗਆ ਹ, ਇਹ ਇਕ ਪ ਨ ਨਾਲ
              </p>
              <p className={styles.block_640}>
                ਵਬ ਸਰਚ ਿਜਆਦਾ ਲਗਦਾ ਹ। ਇਸਦ ਕਰਕ ਇਸਦ ਅਤ 'ਚ
              </p>
              <p className={styles.block_624}>ਡਡੀ ਨਹ ਲਗਾਈ ਗਈ।</p>
              <p className={styles.block_641}>
                If a speaker uses clearly exclamatory intonation, use an
                exclamation point. If there is any doubt, err on the side of
                using period.
              </p>
              <p className={styles.block_642}>
                <span className={styles.text_11}>Correct: ਚਪ ਕਰ! </span>
                <span className={styles.text_15}>
                  Explanation: ਵਕਤਾ ਚੀ ਬਲ ਿਰਹਾ ਹ।{' '}
                </span>
              </p>
              <p className={styles.block_643}>
                <span className={styles.text_11}>Correct: ਹ ! </span>
                <span className={styles.text_15}>
                  Explanation: ਵਕਤਾ ਨ ਉਤਸਕਤਾ ਨਾਲ ਬਿਲਆ।{' '}
                </span>
              </p>
              <p className={styles.block_644}>
                <span className={styles.text_13}>Correct: ਹ । </span>
                <span className={styles.text_14}>
                  Explanation: ਵਕਤਾ ਉਤਸਕ ਨਹ ਲਗ ਿਰਹਾ।{' '}
                </span>
              </p>
              <p className={styles.block_645}>
                <span className={styles.text_13}>Correct: ਤਸ ਬਵਕਫ ਹ। </span>
                <span className={styles.text_14}>
                  Explanation: ਵਕਤਾ ਨ ਤੀ ਨਾਲ ਿਕਹਾ।{' '}
                </span>
              </p>
              <p className={styles.block_646}>
                <span className={styles.text_11}>
                  Correct: ਜਨਮਿਦਨ ਮਬਾਰਕ ਹਵ!{' '}
                </span>
                <span className={styles.text_15}>
                  Explanation: ਉਤਸਕਤਾ ਨਾਲ ਬਿਲਆ ਿਗਆ।{' '}
                </span>
              </p>
              <p className={styles.block_647}>
                <span className={styles.text_13}>
                  Correct: ਤਹਾਡਾ ਿਦਨ ਭ ਰਹ।{' '}
                </span>
                <span className={styles.text_14}>
                  Explanation: ਿਨਰਪਖ ਸਰ ਨਾਲ ਬਿਲਆ ਿਗਆ।{' '}
                </span>
              </p>
              <p className={styles.block_646}>
                <span className={styles.text_11}>
                  Correct: ਮ ਆਪਣ ਟਸਟ ਚ ਵਧੀਆ ਨਬਰ ਪ ਾਪਤ ਕੀਤ!{' '}
                </span>
                <span className={styles.text_15}>
                  Explanation: ਉਤਸਕਤਾ ਨਾਲ ਬਿਲਆ ਿਗਆ।{' '}
                </span>
              </p>
              <p className={styles.block_648}>Colon and quotation</p>
              <p className={styles.block_649}>
                Use a comma between reported speech verbs and direct quotations.
                Do not put punctuation within quotation marks unless the
                punctuation belongs to the reported speech.
              </p>
              <p className={styles.block_650}>
                Correct: ਮਰ ਦਸਤ ਨ ਿਕਹਾ, "ਮਗਰਮਛ ਘਿੜਆਲ"।
              </p>
              <p className={styles.block_651}>
                Incorrect: ਮਰ ਦਸਤ ਨ ਿਕਹਾ, "ਮਗਰਮਛ ਘਿੜਆਲ।"
              </p>
              <p className={styles.block_652}>
                Incorrect: ਮਰ ਦਸਤ ਨ ਿਕਹਾ "ਮਗਰਮਛ ਘਿੜਆਲ।"
              </p>
              <p className={styles.block_653}>
                Explanation: "ਿਕਹਾ" ਿਕਿਰਆ ਵਕਤਾ ਦਆਰਾ ਬਲ ਗਏ
              </p>
              <p className={styles.block_654}>
                ਉਹੀ ਬਦ ਨ ਦਰਸਾ ਦੀ ਹ। ਇਸ ਕਰਕ ਇਹਨ ਵਾਕ ਲਈ
              </p>
              <p className={styles.block_655}>
                ਉਲਟ ਕਾਮ ਦੀ ਵਰਤ ਕੀਤੀ ਜ ਦੀ ਹ। "ਪਛਣਾ, "ਦਸਣਾ" ਆਿਦ
              </p>
              <p className={styles.block_656}>
                ਿਕਿਰਆਵ ਵੀ ਇਸ ਤਰ ਦੀਆ ਹਦੀਆ ਹਨ। ਵਾਕ ਦ ਅਤ 'ਚ
              </p>
              <p className={styles.block_657}>
                ਉਲਟ ਕਾਮ ਤ ਪਿਹਲ ਡਡੀ ਦੀ ਵਰਤ ਨਹ ਕੀਤੀ ਗਈ ਿਕ ਿਕ
              </p>
              <p className={styles.block_658}>ਇਹ ਪਰਾ ਵਾਕ ਨਹ ਹ।</p>
              <p className={styles.block_659}>
                If the text in quotation marks qualifies as a sentence,
                punctuate as if it were its own utterance. Do not alter its end
                punctuation even if the quote is within a sentence. Do not add
                excess punctuation after end quotation marks.
              </p>
              <p className={styles.block_660}>
                Correct: ਰਾਮ ਨ ਿਕਹਾ, "3:00 ਿਮਲਦ ਹ ।"
              </p>
              <p className={styles.block_661}>
                Incorrect: ਰਾਮ ਨ ਿਕਹਾ, "3 ਵਜ ਿਮਲਦ ਹ ।"।
              </p>
              <p className={styles.block_662}>
                Explanation: ਹਾਲ ਿਕ "3 ਵਜ ਿਮਲਦ ਹ ।" ਇਕ ਪਰਾ ਵਾਕ
              </p>
              <p className={styles.block_415}>
                ਹ, ਇਸ ਕਰਕ ਡਡੀ ਉਲਟ ਕਾਿਮਆ ਦ ਅਦਰ ਹਣੀ ਚਾਹੀਦੀ
              </p>
              <p className={styles.block_663}>
                ਹ। ਇਸ ਕਰਕ ਡਡੀ ਉਲਟ ਕਾਿਮਆ ਤ ਬਾਹਰ ਨਹ ਹ ਸਕਦਾ।
              </p>
              <p className={styles.block_664}>
                Correct: ਅਿਨਲ ਨ ਪਿਛਆ, "ਕੀ ਅਸ 3 ਵਜ ਿਮਲ ਗ?"
              </p>
              <p className={styles.block_665}>
                Incorrect: ਅਿਨਲ ਨ ਪਿਛਆ, "ਕੀ ਅਸ 3 ਵਜ ਿਮਲ ਗ?"।
              </p>
              <p className={styles.block_666}>
                Explanation: "ਕੀ ਅਸ 3 ਵਜ ਿਮਲ ਗ?" ਇਕ ਸਪਰਨ ਵਾਕ
              </p>
              <p className={styles.block_348}>
                ਹ, ਸ ਇਸ ਕਰਕ ਪ ਨਵਾਚਕ ਿਚਨ ਨ ਉਲਟ ਕਾਿਮਆ ਦ ਿਵਚ
              </p>
              <p className={styles.block_667}>
                ਰਖਣਾ ਚਾਹੀਦਾ ਹ। ਪ ਨਵਾਚਕ ਿਚਨ ਤ ਬਾਅਦ ਡਡੀ ਦੀ
              </p>
              <p className={styles.block_668}>ਵਰਤ ਨਹ ਕਰਨੀ ਚਾਹੀਦੀ।</p>
              <p className={styles.block_669}>
                Correct: ਕੀ ਅਿਨਲ ਨ ਿਕਹਾ, "ਮਨ ਥ ਿਮਲ।"
              </p>
              <p className={styles.block_670}>
                Explanation: ਹਾਲ ਿਕ ਮਖ ਵਾਕ ਪ ਨਵਾਚਕ ਹ ਪਰ ਵਾਕ
              </p>
              <p className={styles.block_671}>
                Incorrect: ਕੀ ਅਿਨਲ ਨ ਿਕਹਾ, "ਮਨ ਥ ਿਮਲ।"?
              </p>
              <p className={styles.block_317}>
                ਦ ਅਤ 'ਚ ਪ ਨਵਾਚਕ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕਰ ਿਕ ਿਕ ਉਲਟ
              </p>
              <p className={styles.block_672}>
                ਕਾਿਮਆ ਦ ਿਵਚ ਪਿਹਲ ਤ ਹੀ ਡਡੀ ਲਗੀ ਹਈ ਹ।
              </p>
              <p className={styles.block_673}>
                <span className={styles.text_7}>Correct: ਕਹ "ਿਦਲੀ"। </span>
                <span className={styles.text_10}>
                  Explanation: ਜਕਰ ਵਾਕ ਆਿਗਆਵਾਚਕ ਹ ਤ ਕਾਮਾ ਹਟ{' '}
                </span>
              </p>
              <p className={styles.block_674}>ਜਾਵਗਾ।</p>
              <p className={styles.block_429}>
                Do not use quotation marks for indirect quotes. Use context and
                intonation to determine whether a quote is direct or indirect.
              </p>
              <p className={styles.block_675}>
                Correct: ਬਿਚਆ ਨ ਮਨ ਿਕਹਾ ਿਕ ਉਹ ਭਖ ਹਨ।
              </p>
              <p className={styles.block_676}>
                Incorrect: ਬਿਚਆ ਨ ਮਨ ਿਕਹਾ ਿਕ "ਉਹ ਭਖ ਹਨ"।
              </p>
              <p className={styles.block_677}>
                Explanation: ਉਲਟ ਕਾਿਮਆ ਤ ਪਿਹਲ "ਿਕ" ਆਇਆ
              </p>
              <p className={styles.block_678}>
                ਹਇਆ ਹ। ਇਹ ਅਪ ਤਖ ਉਪਵਾਕ ਹ ਅਤ ਇਸ ਨਾਲ ਉਲਟ
              </p>
              <p className={styles.block_679}>ਕਾਿਮਆ ਦੀ ਜਰਰਤ ਨਹ ਹ।</p>
              <p className={styles.block_680}>
                Correct: ਰਾਮ ਨ ਿਕਹਾ ਉਹ ਨੀਵਾਰ ਨ ਥ ਨਹ ਆ
              </p>
              <p className={styles.block_681}>ਸਕਦਾ।</p>
              <p className={styles.block_682}>
                Explanation: ਸਰ ਅਲਾਪ ਅਪ ਤਖ ਉਪਵਾਕ ਵਲ ਇ ਾਰਾ
              </p>
              <p className={styles.block_683}>ਕਰਦੀ ਹ।</p>
              <p className={styles.block_684}>
                Incorrect: ਰਾਮ ਨ ਿਕਹਾ, "ਉਹ ਨੀਵਾਰ ਨ ਥ ਨਹ ਆ
              </p>
              <p className={styles.block_685}>ਸਕਦਾ।"</p>
              <p className={styles.block_686}>
                <span className={styles.text_7}>
                  Correct: ਅਮਰ ਨ ਿਕਹਾ, "ਸਾਨ ਚਲਦ ਰਿਹਣਾ ਚਾਹੀਦਾ ਹ।"{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਸਰ ਅਲਾਪ ਪ ਤਖ ਉਪਵਾਕ ਵਲ ਇ ਾਰਾ{' '}
                </span>
              </p>
              <p className={styles.block_687}>
                ਕਰਦੀ ਹ ਸ ਇਸ ਲਈ ਉਲਟ ਕਾਿਮਆ ਦੀ ਵਰਤ ਕੀਤੀ ਗਈ
              </p>
              <p className={styles.block_343}>ਹ।</p>
              <p className={styles.block_688}>
                Use a colon but no quotation marks in quotative voice actions
                when the quote follows the command. Use quotation marks when the
                quote is in the middle of the sentence.
              </p>
              <p className={styles.block_689}>
                Correct: ਫਰ ਚ 'ਚ ਅਨਵਾਦ ਕਰ: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ?
              </p>
              <p className={styles.block_555}>
                Incorrect: ਫਰ ਚ 'ਚ ਅਨਵਾਦ ਕਰ: "ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ?"
              </p>
              <p className={styles.block_690}>
                Explanation: "ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ" ਆਿਗਆਵਾਚੀ ਿਕਿਰਆ
              </p>
              <p className={styles.block_691}>
                "ਅਨਵਾਦ ਕਰ" ਦ ਮਗਰ ਆ ਿਰਹਾ ਹ, ਸ ਇਸ ਕਰਕ ਉਲਟ
              </p>
              <p className={styles.block_692}>
                ਕਾਿਮਆ ਦੀ ਜਗ ਾ ਕਲਨ ਦੀ ਵਰਤ ਕਰਨੀ ਚਾਹੀਦੀ ਹ।
              </p>
              <p className={styles.block_693}>
                <span className={styles.text_7}>
                  Correct: ਫਰ ਚ 'ਚ "ਤਹਾਡਾ ਕੀ ਨਾਮ ਹ?" ਨ ਅਨਵਾਦ ਕਰ।{' '}
                </span>
                <span className={styles.text_10}>
                  Explanation: ਅਨਵਾਦ ਹਣ ਵਾਲਾ ਵਾਕ ਵਾਕ ਦ ਿਵਚਕਾਰ
                </span>
              </p>
              <p className={styles.block_694}>
                ਹ ਸ ਇਸ ਨਾਲ ਉਲਟ ਕਾਿਮਆ ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ।
              </p>
              <p className={styles.block_695}>
                Correct: ਤਸ ਜਪਾਨੀ 'ਚ ਿਕਵ ਕਹਗ: ਮਨ ਕਫੀ ਚਾਹੀਦੀ ਹ।
              </p>
              <p className={styles.block_696}>
                Correct: example@gmail.com ਨ ਮਲ ਭਜ: ਹਲ,
              </p>
              <p className={styles.block_697}>ਤਹਾਡਾ ਿਦਨ ਿਕਵ ਦਾ ਿਰਹਾ?</p>
              <p className={styles.block_696}>
                Correct: example@gmail.com ਨ ਮਲ ਭਜ: ਹਲ,
              </p>
              <p className={styles.block_697}>ਤਹਾਡਾ ਿਦਨ ਿਕਵ ਦਾ ਿਰਹਾ?</p>
              <p className={styles.block_698}>
                Do not use any type of punctuation when a speaker asks to
                translate a word into another language.
              </p>
              <p className={styles.block_699}>
                Correct: "ਸਬ" ਨ ਫਰ ਚ 'ਚ ਅਨਵਾਦ ਕਰ।
              </p>
              <p className={styles.block_700}>
                Incorrect: "ਸਬ।" ਨ ਫਰ ਚ 'ਚ ਅਨਵਾਦ ਕਰ।
              </p>
              <p className={styles.block_701}>
                Explanation: ਹਾਲ ਿਕ ਇਥ ਬਦ ਨ ਅਨਵਾਦ ਕਰਨ ਦੀ
              </p>
              <p className={styles.block_410}>
                ਬਨਤੀ ਕੀਤੀ ਗਈ ਹ, ਸ ਇਸ ਕਰਕ ਇਸ ਬਦ ਦ ਨਾਲ ਡਡੀ
              </p>
              <p className={styles.block_702}>ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।</p>
              <p className={styles.block_703}>
                Do not use quotation marks for metalinguistic uses of words or
                phrases. These uses include defining the word, talking about the
                spelling of the word, or any other type of reference to the word
                itself as a thing.
              </p>
              <p className={styles.block_704}>
                Correct: ਿਤ ਵਣੀ ਦੀ ਪਿਰਭਾ ਾ ਿਦਓ।
              </p>
              <p className={styles.block_705}>
                Incorrect: "ਿਤ ਵਣੀ" ਦੀ ਪਿਰਭਾ ਾ ਿਦਓ।
              </p>
              <p className={styles.block_706}>
                Explanation: ਪਿਰਭਾ ਾ ਦਣ ਵਾਲ ਬਦ ਦ ਨਾਲ ਉਲਟ
              </p>
              <p className={styles.block_707}>ਕਾਿਮਆ ਦੀ ਵਰਤ ਨਾ ਕਰ।</p>
              <p className={styles.block_708}>Correct: ਉਸਨ ਤਦਬੀਰ ਬਦ ਬਿਲਆ।</p>
              <p className={styles.block_709}>
                Incorrect: ਉਸਨ "ਤਦਬੀਰ" ਬਦ ਬਿਲਆ।
              </p>
              <p className={styles.block_710}>
                Explanation: ਹਵਾਲਾ ਦਣ ਵਾਲ ਬਦ ਨਾਲ ਉਲਟ
              </p>
              <p className={styles.block_711}>ਕਾਿਮਆ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।</p>
              <p className={styles.block_712}>
                Correct: ਸਮਾਿਜਕ ਨ ਿਸਹਾਰੀ ਦ ਿਬਨ ਅਤ ਿਸਹਾਰੀ ਦ
              </p>
              <p className={styles.block_713}>ਨਾਲ ਦਵ ਤਰ ਿਲਿਖਆ ਜ ਦਾ ਹ।</p>
              <p className={styles.block_714}>
                Incorrect: "ਸਮਾਿਜਕ" ਨ ਿਸਹਾਰੀ ਦ ਿਬਨ ਅਤ ਿਸਹਾਰੀ ਦ
              </p>
              <p className={styles.block_715}>ਨਾਲ ਦਵ ਤਰ ਿਲਿਖਆ ਜ ਦਾ ਹ।</p>
              <p className={styles.block_321}>
                Explanation: ਜਦ ਿਕਸ ਬਦ ਦ ਬਦ ਜੜ (Spelling)
              </p>
              <p className={styles.block_716}>
                ਬਾਰ ਪਿਛਆ ਜਾਵ ਤ ਉਸ ਨਾਲ ਉਲਟ ਕਾਿਮਆ ਦੀ ਵਰਤ ਨਾ
              </p>
              <p className={styles.block_717}>ਕੀਤੀ ਜਾਵ।</p>
              <p className={styles.block_718}>Other symbols</p>
              <p className={styles.block_719}>
                Apart from the Punjabi letters ੳ through ਲ਼, you should not use
                any other symbol than: 0-9 !@#₹$%^&amp;*()-_+='~""[{}
                ]\|:;'&lt;&gt;.?/
              </p>
              <p className={styles.block_720}>
                Transcribe apostrophes as they are normally used.
              </p>
              <p className={styles.block_721}>Correct: ਘੜ 'ਚ ਪਾਣੀ ਹ।</p>
              <p className={styles.block_722}>Correct: ਉਹ ਛਤ 'ਤ ਬਠਾ ਹ।</p>
              <p className={styles.block_723}>
                Correct: ਮ ਤਰੀ ਯਾਦ 'ਚ ਸਾਰੀ ਰਾਤ ਨੀ ਸਤਾ।
              </p>
              <p className={styles.block_724}>
                When two opposing teams are mentioned, include a hyphen between
                their names.
              </p>
              <p className={styles.block_725}>
                Correct: ਕੀ ਤਸ ਭਾਰਤ-ਪਾਿਕਸਤਾਨ ਦਾ ਮਚ ਦਖਣ ਜਾ ਰਹ
              </p>
              <p className={styles.block_726}>ਹ?</p>
              <p className={styles.block_727}>
                Explanation: ਹਾਲ ਿਕ "ਭਾਰਤ" ਅਤ "ਪਾਿਕਸਤਾਨ" ਦਵ
              </p>
              <p className={styles.block_728}>
                ਸਪਰਟਸ ਟੀਮ ਹਨ, ਇਸ ਕਰਕ ਇਹਨ ਦ ਿਵਚਕਾਰ ਹਾਈਫਨ
              </p>
              <p className={styles.block_508}>ਦੀ ਵਰਤ ਕੀਤੀ ਜਾਵ।</p>
              <p className={styles.block_729}>
                Include a hyphen between locations in flight itineraries.
              </p>
              <p className={styles.block_730}>Correct: ਿਦਲੀ-ਹਦਰਾਬਾਦ ਫਲਾਈਟ</p>
              <p className={styles.block_731}>Incorrect: ਿਦਲੀ ਹਦਰਾਬਾਦ ਫਲਾਈਟ</p>
              <p className={styles.block_732}>
                Use hyphen in phrases and compounds typically written with
                hyphen. If in doubt, use hyphen. Check your locale's dictionary
                for hyphenation.
              </p>
              <p className={styles.block_733}>
                Correct: ਉਹ ਕਦਮ-ਦਰ-ਕਦਮ ਆਪਣੀ ਮਿਜਲ ਵਲ ਵਧ
              </p>
              <p className={styles.block_734}>ਿਰਹਾ ਹ।</p>
              <p className={styles.block_735}>
                Incorrect: ਉਹ ਕਦਮ ਦਰ ਕਦਮ ਆਪਣੀ ਮਿਜਲ ਵਲ ਵਧ
              </p>
              <p className={styles.block_736}>ਿਰਹਾ ਹ।</p>
              <p className={styles.block_737}>Correct: ਉਹ ਘਟ-ਵਧ ਹੀ ਬਲਦਾ ਹ।</p>
              <p className={styles.block_738}>Incorrect: ਉਹ ਘਟ ਵਧ ਹੀ ਬਲਦਾ ਹ।</p>
              <p className={styles.block_739}>
                Correct: ਉਹ ਆਪਣ ਮ -ਿਪਓ ਦਾ ਬਹਤ ਿਧਆਨ ਰਖਦੀ ਹ।
              </p>
              <p className={styles.block_740}>
                <span className={styles.text_16}>
                  Incorrect: ਉਹ ਆਪਣ ਮ ਿਪਓ ਦਾ ਬਹਤ ਿਧਆਨ ਰਖਦੀ ਹ।{' '}
                </span>
                <span className={styles.text_17}>
                  <sub className={styles.calibre2}>Spoken punctuation </sub>
                </span>
              </p>
              <p className={styles.block_741}>
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.)
              </p>
              <p className={styles.block_742}>
                Correct: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ {`{ਪ ਨ ਿਚਨ }`}
              </p>
              <p className={styles.block_743}>Incorrect: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ?</p>
              <p className={styles.block_744}>
                Incorrect: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ ਪ ਨ ਿਚਨ
              </p>
              <p className={styles.block_745}>
                Incorrect: ਤਹਾਡਾ ਕੀ ਹਾਲ ਹ ਪ ਨ ਿਚਨ ?
              </p>
              <p className={styles.block_746}>
                Correct: ਠੀਕ ਹ {`{ਿਬਦ} {ਿਬਦ} {ਿਬਦ}`}
              </p>
              <p className={styles.block_747}>Incorrect: ਠੀਕ ਹ...</p>
              <p className={styles.block_748}>
                Explanation: "ਡਾਟ ਡਾਟ ਡਾਟ" ਨ ਚੀ ਸਾਰੀ ਬਿਲਆ
              </p>
              <p className={styles.block_749}>
                ਿਗਆ ਹ, ਇਸ ਕਰਕ ਸਾਰ ਬਦ ਨ ਗਝਲਦਾਰ ਬਰਕਟ ਦ
              </p>
              <p className={styles.block_750}>
                ਿਵਚ ਹੀ ਿਲਿਖਆ ਜਾਵ ਅਤ ਵਾਕ ਦ ਅਤ 'ਚ ਿਕਸ ਵੀ ਤਰ ਦ
              </p>
              <p className={styles.block_751}>ਿਵਰਾਮ ਿਚਨ ਦੀ ਵਰਤ ਨਾ ਕੀਤੀ ਜਾਵ।</p>
              <p className={styles.block_331}>Correct: {`{ਸਮਾਇਲੀ ਫਸ}`}</p>
              <p className={styles.block_327}>
                Explanation: "ਸਮਾਇਲੀ ਫਸ" ਨ ਗਝਲਦਾਰ ਬਰਕਟ 'ਚ
              </p>
              <p className={styles.block_752}>Incorrect: :-)</p>
              <p className={styles.block_753}>Incorrect: ਸਮਾਇਲੀ ਫਸ</p>
              <p className={styles.block_754}>
                ਹੀ ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ ਿਕ ਿਕ ਇਸਨ ਬਿਲਆ ਿਗਆ
              </p>
              <p className={styles.block_755}>
                ਹ। ਇਮਟੀਕਾਨ ਨ ਟਾਈਪ ਵੀ ਨਾ ਕੀਤਾ ਜਾਏ ਬਲਿਕ ਉਸਦੀ
              </p>
              <p className={styles.block_756}>
                ਜਗ ਾ ਇਸਨ ਗਝਦਾਰ ਬਰਕਟ 'ਚ ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।
              </p>
              <p className={styles.block_757}>
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.
              </p>
              <p className={styles.block_758}>
                Correct: ਮ 4-A ਅਪਾਰਟਮ ਟ 'ਚ ਰਿਹਦਾ ਹ ।
              </p>
              <p className={styles.block_759}>
                Incorrect: ਮ 4 {`{ਡ}`} A ਅਪਾਰਟਮ ਟ 'ਚ ਰਿਹਦਾ ਹ ।
              </p>
              <p className={styles.block_760}>
                Incorrect: ਮ ਚਾਰ {`{ਡ}`} A ਅਪਾਰਟਮ ਟ 'ਚ ਰਿਹਦਾ ਹ ।
              </p>
              <p className={styles.block_761}>
                <span className={styles.text_4}>Example audio: " </span>
                <span className={styles.text_5}>ਮ ਚਾਰ ਡ ਏ ਅਪਾਰਟਮ ਟ </span>
                <span className={styles.text_12}>'</span>
                <span className={styles.text_5}>ਚ ਰਿਹਦਾ </span>
              </p>
              <p className={styles.block_762}>
                <span className={styles.text_5}>ਹ </span>
                <span className={styles.text_4}>" </span>
              </p>
              <p className={styles.block_763}>
                ਇਸ ਿਵਚਲ ਿਵਰਾਮ ਿਚਨ ਨ ਉਵ ਹੀ ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ
              </p>
              <p className={styles.block_764}>
                Explanation: ਅਪਾਰਟਮ ਟ 4-A ਇਕ ਜਗ ਾ ਦਾ ਪਤਾ ਹ ਅਤ
              </p>
              <p className={styles.block_765}>
                ਹ। ਇਸਦੀ ਜਗ ਾ "ਡ " ਜ "ਹਾਈਫਨ" ਆਿਦ ਨਾ ਿਲਿਖਆ
              </p>
              <p className={styles.block_766}>ਜਾਵ।</p>
              <p className={styles.block_767}>
                <span className={styles.text_18}>Example </span>
                <span className={styles.text_13}>
                  Correct: www.fake-domain.com{' '}
                </span>
              </p>
              <p className={styles.block_768}>
                <span className={styles.text_8}>audio: " </span>
                <span className={styles.text_19}>
                  ਡਬਿਲਯ ਡਬਿਲਯ ਡਾਟ ਫਕ ਹਾਈਫਨ ਡਮਨ ਡਾਟ ਕਾਮ{' '}
                </span>
                <span className={styles.text_8}>" </span>
                <span className={styles.text_20}>
                  Incorrect: www. {`{ਡਾਟ}`} fake {`{ਹਾਈਫਨ}`} domain{' '}
                </span>
              </p>
              <p className={styles.block_769}>{`{ਡਾਟ}`} com</p>
              <p className={styles.block_769}>
                Explanation: ਭਾਵ ਿਕ ਵਕਤਾ ਨ ਿਕਹਾ "ਡਾਟ", ਇਹ ਵਬ
              </p>
              <p className={styles.block_769}>
                ਯਆਰਐਲ 'ਚ ਿਲਖ ਜਾਣ ਵਾਲ ਿਵਰਾਮ ਿਚਨ 'ਚ "ਡਾਟ",
              </p>
              <p className={styles.block_770}>
                "ਹਾਈਫਨ", "ਸਲ " ਆ ਦ ਹਨ। ਇਸ ਕਰਕ ਿਵਰਾਮ ਿਚਨ ਨ
              </p>
              <p className={styles.block_770}>ਟਾਈਪ ਕਰਕ ਿਲਖਣਾ ਨਹ ਚਾਹੀਦਾ।</p>
              <p className={styles.block_771}>Correct: ਉਹ ਇਕ ਐਕਟਰ/ਮਾਡਲ ਹ।</p>
              <p className={styles.block_770}>
                Incorrect: ਉਹ ਇਕ ਐਕਟਰ {`{ਸਲ}`} ਮਾਡਲ ਹ।
              </p>
              <p className={styles.block_772}>
                <span className={styles.text_4}>Example audio: " </span>
                <span className={styles.text_5}>ਉਹ ਇਕ ਐਕਟਰ ਸਲ ਮਾਡਲ ਹ </span>
                <span className={styles.text_4}>" </span>
              </p>
              <p className={styles.block_769}>
                Explanation: "ਸਲ " ਨ ਬਦ ਪਧਰ ਦਾ ਿਵਰਾਮ ਿਚਨ
              </p>
              <p className={styles.block_769}>
                ਮਿਨਆ ਜ ਦਾ ਹ, ਇਸ ਕਰਕ ਸਲ ਿਚਨ ਨ "/" ਦੀ ਤਰ
              </p>
              <p className={styles.block_770}>ਿਲਿਖਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹ।</p>
              <p className={styles.block_773}>
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.
              </p>
              <p className={styles.block_774}>Correct: {`{ਕਲਨ}`}</p>
              <p className={styles.block_767}>Incorrect: :</p>
              <p className={styles.block_772}>
                <span className={styles.text_4}>Example audio: " </span>
                <span className={styles.text_5}>ਕਲਨ </span>
                <span className={styles.text_4}>" </span>
              </p>
              <p className={styles.block_769}>
                Explanation: "ਕਲਨ" ਦ ਅਸਲ ਸਪਿਲਗ ਨ ਗਝਲਦਾਰ
              </p>
              <p className={styles.block_769}>
                ਬਰਕਟ 'ਚ ਰਿਖਆ ਿਗਆ ਹ ਿਚਨ ":" ਵ ਗ ਨਹ ਿਕ ਿਕ
              </p>
              <p className={styles.block_770}>
                ਇਸਨ ਇਕਲਤਾ 'ਚ ਬਿਲਆ ਿਗਆ ਹ, ਿਕਸ ਬਦ ਨਾਲ ਨਹ ।
              </p>
              <p className={styles.block_774}>Correct: {`{ਪਰ ਲਕੀਰ}`}</p>
              <p className={styles.block_767}>Incorrect: _</p>
              <p className={styles.block_772}>
                <span className={styles.text_4}>Example audio: " </span>
                <span className={styles.text_5}>ਪਰ ਲਕੀਰ </span>
                <span className={styles.text_4}>" </span>
              </p>
              <p className={styles.block_769}>
                Explanation: "ਅਡਰਸਕਰ" ਦ ਅਸਲ ਸਪਿਲਗ ਨ
              </p>
              <p className={styles.block_769}>
                ਗਝਲਦਾਰ ਬਰਕਟ 'ਚ ਰਿਖਆ ਿਗਆ ਹ ਿਚਨ "_" ਵ ਗ ਨਹ
              </p>
              <p className={styles.block_769}>
                ਿਕ ਿਕ ਇਸਨ ਇਕਲਤਾ 'ਚ ਬਿਲਆ ਿਗਆ ਹ, ਿਕਸ ਬਦ
              </p>
              <p className={styles.block_770}>ਨਾਲ ਨਹ ।</p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
