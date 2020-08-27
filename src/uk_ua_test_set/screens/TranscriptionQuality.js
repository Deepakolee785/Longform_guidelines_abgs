import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../Components/common/PageContentHeader'
import RightContentNav from '../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
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
              <h1 id="calibre_link-12" className={styles.block_12}>
                transcription quality
              </h1>

              <p className={styles.block_13}>
                Comply with the standard rules of the writing system.
              </p>
              <h2 id="typo" className={styles.block_14}>
                Typo
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                A typo results in the unintentional creation of a non-word.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_7}>
                      <p className={styles.block_15}>
                        Correct: Додай мене в Фейсбуці.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Додй мене в Фейсбуці.
                      </p>
                    </td>
                    <td className={styles.td_8}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          додай мене в фейсбуці{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Use the proper capitalization for standard words that require
                it.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Ми будемо у Харкові наступного тижня.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Ми будемо у харкові наступного тижня.
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>
                        Correct: Краса по-американськи
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Краса по-Американськи
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Земля обертається навколо Сонця.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Земля обертається навколо сонця.
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="context-error" className={styles.block_14}>
                Context error
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                A context error occurs when a real word is used incorrectly or
                when the incorrect form of a word is used. This includes
                homophones and punctuation, among other things.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: У них у квартирі завжди грає музика.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: У них у квартирі завжди гра є музика.
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>
                        Correct: Він теж випив соку.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Він те ж випив соку.
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}> він теж випив соку </i>"
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Вона випила те ж, що і він.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Вона випила теж, що і він.
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          вона випила те ж що і він{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_7}>
                      <p className={styles.block_15}>
                        Correct: Він написав красивий роман.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Він написав красивий Роман.
                      </p>
                    </td>
                    <td className={styles.td_8}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          він написав красивий роман{' '}
                        </i>
                        "
                      </p>
                      <p className={styles.block_16}>
                        Explanation: The word "роман" here is understood as a
                        novel, but not as a name "Роман".
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Do not correct speaker's grammar if they intentionally say
                something, even if what they say does not follow the standard
                grammatical rules of the transcription language.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>Correct: Нове Україна</p>
                      <p className={styles.block_16}>Incorrect: Нова Україна</p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_16}>
                        Explanation: The adjective "нова" (new) is not in
                        agreement with the noun "Україна".
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Пам'ятник Франка
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Пам'ятник Франку
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_16}>
                        Explanation: The noun "пам'ятник" (monument) requires
                        the dative case on the following word.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="adding-missing-words" className={styles.block_14}>
                Added or missing words
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Do not transcribe words that are not spoken, even if they are
                obviously intended by the speaker. Avoid putting words in the
                speaker's mouth. However, do transcribe implied times and units
                of currency.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Я живу на Київській.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Я живу на вулиці Київська.
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}> я живу на київській </i>
                        "
                      </p>
                      <p className={styles.block_16}>
                        Explanation: Do not add words like "вулиця" (street)
                        when they are not spoken.
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>
                        Correct: станції з біопаливом
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: станції з біологічним паливом
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          станції з біопаливом{' '}
                        </i>
                        "
                      </p>
                      <p className={styles.block_16}>
                        Explanation: If the speaker says an abbreviated form,
                        transcribe with an abbreviated form and nothing else.
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>
                        Correct: Я купив морозиво за 8,70 грн.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Я купив морозиво за 8,70.
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          я купив морозиво за вісім сімдесят{' '}
                        </i>
                        "
                      </p>
                      <p className={styles.block_16}>
                        Explanation: Implied currency, add "грн" even though it
                        is not spoken.
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_3}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: дивитися фільми
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: дивитися фільми онлайн
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}> дивитися фільми он </i>"
                      </p>
                      <p className={styles.block_16}>
                        Explanation: Do not transcribe the word "онлайн" even if
                        it is the most logical ending of the word the speaker
                        started.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Transcribe all words spoken, even if they are not intended by
                the speaker. For interjections and non-speech vocalizations,
                refer to Agreed Spelling &gt; Interjections and Difficult
                Utterances &gt; Hesitations and Truncations.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Скільки там калини малини?
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Скільки там малини?
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          скільки там калини малини{' '}
                        </i>
                        "
                      </p>
                      <p className={styles.block_16}>
                        Explanation: Speaker corrected himself after mistakenly
                        saying "калини" instead of "малини".
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Кіт кит кота по хвилях катав.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Кит кота по хвилях катав.
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          кіт кит кота по хвилях катав{' '}
                        </i>
                        "
                      </p>
                      <p className={styles.block_16}>
                        Explanation: Speaker clearly corrected himself after
                        mistakenly saying "кіт".
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="substitution" className={styles.block_14}>
                Substitution
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                A substitution error occurs when another standard word is
                transcribed instead of what was meant by the speaker. If what
                the speaker said falls into another category (Context Error,
                Proper Name, Media Title, etc.), see the relevant section.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: актори фільму Зоряні війни
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: актори фільму Зоряний десант
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          актори фільму зоряні війни{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: ресторан у місті Київ
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: ресторан у місті Харків
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_22}>
                        Example audio: "
                        <i className={styles.calibre6}>
                          {' '}
                          ресторан у місті київ{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="spacing" className={styles.block_14}>
                Spacing
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Use only one space between words and sentences.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Яка найвища будівля у Києві?
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Яка найвища будівля у _Києві?
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Ходімо додому. Батьки вже вдома.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Ходімо додому. _Батьки вже вдома.
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                For most types of punctuation, do not put a space between the
                preceding word and the punctuation.
              </p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Ти йдеш додому?
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Ти йдеш додому ?
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_2}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Коли ми підемо додому, я тобі зателефоную.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Коли ми підемо додому , я тобі зателефоную.
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                For quotation marks and similar punctuation, put a space before
                the opening punctuation, but not necessarily after the closing
                punctuation.
              </p>
              <p className={styles.block_21}></p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Він сказав: "Я тебе кохаю".
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Він сказав: "Я тебе кохаю" .
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Переклади "собака" японською.
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: Переклади "собака"японською.
                      </p>
                    </td>
                    <td className={styles.td_6}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
