import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../Components/common/PageContentHeader'
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
              <h1 id="calibre_link-25" class="block_12">
                Format
              </h1>
              <p class="block_13">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <h2 id="calibre_link-26" class="block_14">
                Number
              </h2>
              <p class="block_13"></p>
              <p class="block_13">
                Write small numbers (0 to 9) as words and larger numbers (10 and
                above) using digits. However, you may write small numbers using
                digits if they appear in a list, in a mathematical expression,
                as street numbers, as a measure or time unit.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: У класі дев'ятеро учнів.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_16">Explanation: numbers less than 10</p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: У класі 13 учнів.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: numbers greater than 9
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 3,14</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> три цілих чотирнадцять сотих </i>"
                      </p>
                      <p class="block_16">Explanation: decimal number</p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 101 далматинець</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> сто один далматинець </i>"
                      </p>
                      <p class="block_16">
                        Explanation: numbers greater than 9
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: У мене три кішки і 12 риб.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          у мене три кішки і дванадцять риб{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: Follow this rule even if the noun phrases
                        with numbers are coordinated.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                When two or more numbers refer to the same noun, and one number
                is 10 or greater, transcribe both as numerals.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Вони купили 9 чи 10 риб у зоомагазині.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Петро володіє трьома чи чотирма мовами.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Нам потрібні дві лопати і 11 візків.
                      </p>
                      <p class="block_16">
                        Incorrect: Нам потрібні 2 лопати і 11 візків.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нам потрібні дві лопати і одинадцять візків{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: The numbers refer to different nouns, so
                        this rule does not apply here.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If a large number consists of only a number followed by
                "мільйон" or "мільярд", transcribe the number using digits and
                an abbreviation ("млн" for "мільйон", "млрд" for "мільярд"). If
                no number precedes "мільйон" or "мільярд", write the full word.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Населення Землі складає 7 млрд людей.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          населення землі складає сім мільярдів людей{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: цілий мільйон людей</p>
                      <p class="block_16">Incorrect: цілий млн людей</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: Here "мільйон" is not preceded by a number,
                        so do not abbreviate it.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_2">
                      <p class="block_15">Correct: 1,5 млн грн</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> півтора мільйони гривень </i>"
                      </p>
                      <p class="block_16">
                        Explanation: For mixed numbers before "мільйон",
                        "мільярд", etc., use decimals.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 7,8 млрд</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          сім цілих вісім десятих мільярда{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Write lists of numbers with digits and without commas.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: 0 1 1 2 3 5 8 13</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нуль один один два три п'ять вісім тринадцять{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 3 2 1 пуск</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> три два один пуск </i>"
                      </p>
                      <p class="block_16">
                        Explanation: list of numbers, no comma if just counting
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 3 4 5 6 7</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> три чотири п'ять шість сім </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For long numbers (4+ digits) indicating quantity, insert the
                relevant separator (comma, decimal point, or space, depending on
                language).
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: 10 000</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> десять тисяч </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 2 576 980</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          два мільйони п'ятсот сімдесят шість тисяч дев'ятсот
                          вісімдесят{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: 10,000 грн</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: The number is followed by a currency, so
                        the separator should be a comma.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Через 3/4 милі поверни направо.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          через три четвертих милі поверни направо{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: Потрібна ще 1/4 кг цукру.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          потрібна ще чверть кілограма цукру{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Через 2/3 кілометра поверни наліво.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          через дві третіх кілометра поверни наліво{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: 2/3 * 5/16</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дві третіх помножене на п'ять шістнадцятих{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For mixed numbers in math and units &amp; measures, use
                numerals.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: 3 1/2 км</p>
                      <p class="block_16">Incorrect: 3 і 1/2 км</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> три з половиною кілометри </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: дівчинці 5 1/2 місяців</p>
                      <p class="block_16">
                        Incorrect: дівчинці п'ять з половиною місяця
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дівчинці п'ять з половиною місяців{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 1/3 + 3 1/2</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          одна третя плюс три з половиною{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Кішка вчора важила 12 1/4 фунтів.
                      </p>
                      <p class="block_16">
                        Incorrect: Кішка вчора важила дванадцять з чвертю фунта.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          кішка вчора важила дванадцять з чвертю фунтів{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: The noun agrees with the integer if the
                        fraction contains "half" or "quarter".
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_4">
                      <p class="block_15">Correct: 20 1/3 відсотка</p>
                      <p class="block_16">
                        Incorrect: двадцять цілих і одна третя відсотки
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          двадцять цілих і одна третя відсотка{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: The noun agrees with the fractional part if
                        it is ed to the integer with the conjunction "and".
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                When referring to items (not units or measures), write fractions
                out in words. With mixed numbers, write the whole number part
                out in words if it is under ten, otherwise write it with
                numerals.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Дай мені половину пирога.</p>
                      <p class="block_16">Incorrect: Дай мені 1/2 пирога.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: три з половиною апельсини</p>
                      <p class="block_16">Incorrect: 3 1/2 апельсини</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Зробили 12 з половиною пирогів.
                      </p>
                      <p class="block_16">
                        Incorrect: Зробили 12 з 1/2 пирогів.
                      </p>
                      <p class="block_16">Incorrect: Зробили 12 1/2 пирогів.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          зробили дванадцять з половиною пирогів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                After the prefix "пів-" meaning "half", use a hyphen with proper
                names. If a word starts with я, ю, є, ї, "пів-" should be
                followed by an apostrophe. Otherwise, do not use a hyphen or
                apostrophe.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: півгодини</p>
                      <p class="block_16">Incorrect: пів-години</p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: пів-Африки</p>
                      <p class="block_16">Incorrect: півафрики</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: пів'яблука</p>
                      <p class="block_16">Incorrect: півяблука</p>
                    </td>
                    <td class="td_5">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Ти можеш позичити мені 2,50 грн?
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ти можеш позичити мені дві п'ятдесят{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 3,50 грн</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> три з половиною гривні </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Вона купила дім за 7,5 млн доларів.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вона купила дім за сім з половиною мільйонів доларів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 123,45 грн</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          сто двадцять три гривні сорок п'ять копійок{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 3,99 €</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          три євро дев'яносто дев'ять центів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 5,20 $</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ять доларів двадцять центів </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: 40%</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> сорок відсотків </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: мільйон відсотків</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 5 млн процентів</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ять мільйонів процентів </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                When numbers appear in prenominals (units preceding nouns),
                transcribe using words. Transcribe as digits if paired with
                units; for cardinals use a hyphen and appropriate suffixation
                after the digit.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: двометрова хвиля</p>
                      <p class="block_16">Incorrect: 2 метрова хвиля</p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: чотиридверна Тойота</p>
                      <p class="block_16">Incorrect: 4 дверна Тойота</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: стогривнева купюра</p>
                      <p class="block_16">Incorrect: 100 грн. купюра</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 15 км</p>
                      <p class="block_16">Incorrect: п'ятнадцять км</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ятнадцять кілометрів </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: на 36-му кілометрі</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> на тридцять шостому кілометрі </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: після 7-ї години</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> після сьомої години </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_4">
                      <p class="block_15">Correct: двопроцентне молоко</p>
                      <p class="block_16">Incorrect: 2% молоко</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: Elements "дво-", "три-", "чотири-" are
                        connected to the root that starts with a consonant,
                        while their variations "двох-", "трьох-", "чотирьох-"
                        are used when the second component starts with a vowel.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p class="block_13"></p>
              <p class="block_13">
                Use Roman numerals only when part of an official name or title.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: Генріх VII</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> генріх сьомий </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: відеогра Diablo III</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> відеогра дйабло три </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: XVII століття</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> сімнадцяте століття </i>"
                      </p>
                      <p class="block_16">
                        Explanation: Use Roman numerals to denote centuries.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: XXI Олімпійські ігри</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          двадцять перші олімпійські ігри{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Transcribe seasons and episodes of television shows with
                numerals.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: 3 сезон 5 серія</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> третій сезон п'ята серія </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_4">
                      <p class="block_15">Correct: 5-а серія 3-го сезону</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ята серія третього сезону </i>"
                      </p>
                      <p class="block_16">
                        Explanation: Ordinals may use the appropriate endings
                        according to the rules.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If it is a product type, use the common written form.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: калібр.22</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> калібр двадцять два </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: Android 4.0.1</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> андроїд чотири нуль один </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Transcribe phone numbers using the most common format in the
                transcription language.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_2">
                    <td class="td_">
                      <p class="block_15">Correct: 098 385-07-22</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нуль дев'яносто вісім триста вісімдесят п'ять нуль сім
                          двадцять два{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">Explanation: mobile phone number</p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_2">
                      <p class="block_15">Correct: 0532 65-62-54</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нуль п'ять тридцять два шістдесят п'ять шістдесят два
                          п'ятдесят чотири{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: landline with three-digit area code
                        preceded by a leading "0"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 053 123-45-67</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: landline with two-digit area code preceded
                        by a leading "0"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_5">
                    <td class="td_2">
                      <p class="block_15">Correct: +380 512 22-30-61</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          плюс три вісім нуль п'ятсот дванадцять двадцять два
                          тридцять шістдесят один{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: landline with country code (the leading "0"
                        is removed)
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 00380 512 22-30-61</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: landline with country code (the leading "0"
                        is removed)
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_2">
                      <p class="block_15">Correct: 8-048-433525 дод. 54</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вісім нуль сорок вісім сорок три тридцять п'ять
                          двадцять п'ять додатковий номер п'ятдесят чотири{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 0-800-12-34-56</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">Explanation: toll-free number</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Transcribe alpha-digit sequences (product codes etc.) in their
                most natural way (possibly several ways accepted). Do not
                transcribe credit card numbers, etc.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_7">
                      <p class="block_15">Correct: XT 660 or XT660</p>
                    </td>
                    <td class="td_8">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> екс ті шістсот шістдесят </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_2">
                    <td class="td_">
                      <p class="block_15">Correct: 5 * 6</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ять помножити на шість </i>"
                      </p>
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ять помножене на шість </i>"
                      </p>
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> п'ять на шість </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 4x4</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> чотири на чотири </i>"
                      </p>
                      <p class="block_16">Explanation: truck type</p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_31">Correct: √3</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> корінь від трьох </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Скільки буде 8 годин * 12 $?
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          скільки буде вісім годин помножене на дванадцять
                          доларів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Скільки буде два удави розділити на чотири
                        папуги?
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: Does not sound like a true math expression
                        with useful units, so transcribe with words.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="calibre_link-27" class="block_14">
                Currency and unit
              </h2>
              <p class="block_13"></p>
              <p class="block_13">
                Transcribe currencies as commonly written in the transcription
                language.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: 20 $</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> двадцять доларів </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 33,50 €</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          тридцять три євро п'ятдесят центів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 3 грн</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> три гривні </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 11 коп</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> одинадцять копійок </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 1 грн 50 коп</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> одна гривня п'ятдесят копійок </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If it is obvious from context that a number reflects an amount
                of currency, transcribe adding "грн" following the amount, or
                other currency sign.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Ціна на бензин виросла до 4.89 грн за літр.
                      </p>
                      <p class="block_16">
                        Incorrect: Ціна на бензин виросла до 489 за літр.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ціна на бензин виросла до чотирьох вісімдесяти дев'яти
                          за літр{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: На Манхеттені студія коштує не менше 2000 $.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          на манхеттені студія коштує не менше двох тисяч{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For kopiyok-only quantities, the abbreviation "коп" should
                follow the amount.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: 5 коп</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> п'ять копійок </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 50-копійкове пиво</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ятдесятикопійкове пиво </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For all other currencies and slang terms for money, spell out
                the words.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Я заплатив 5 штук.</p>
                      <p class="block_16">Incorrect: Я заплатив 5,000 $.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> я заплатив п'ять штук </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 100 баксів</p>
                      <p class="block_16">Incorrect: 100 $</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> сто баксів </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: 2 000 єн</p>
                      <p class="block_16">Incorrect: ¥2000</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> дві тисячі єн </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                When a speaker uses words like "dollar" without specifying a
                quantity, spell them out.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Ось тобі долар.</p>
                      <p class="block_16">Incorrect: Ось тобі 1 $.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> ось тобі долар </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: лише декілька євро</p>
                      <p class="block_16">Incorrect: лише декілька €</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: курс української гривні до іноземних валют
                      </p>
                      <p class="block_16">
                        Incorrect: курс української грн до іноземних валют
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Write out denominations of currency (the face values of bills,
                notes, coins, etc). Use hyphens as needed.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: стогривнева купюра</p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 20-доларова банкнота</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 5-копійкова монета</p>
                    </td>
                    <td class="td_5">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For ranges or non-specific currency quantities, write everything
                out as spoken.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Мені потрібно чотири або п'ять тисяч гривень.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          мені потрібно чотири або п'ять тисяч гривень{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: від п'яти до восьми тисяч доларів
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: У мене 400 або 500 євро.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          у мене чотириста або п'ятсот євро{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: 9 або 12 гривень</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> дев'ять або дванадцять гривень </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">For degrees, use the ° symbol.</p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: на вулиці 20°</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> на вулиці двадцять градусів </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 5° C</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ять градусів цельсія </i>"
                      </p>
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ять градусів за цельсієм </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_2">
                      <p class="block_15">Correct: 70° F</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          сімдесят градусів за фаренгейтом{' '}
                        </i>
                        "
                      </p>
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> сімдесят за фаренгейтом </i>"
                      </p>
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> сімдесят градусів фаренгейта </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: У Києві сьогодні -10°.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> у києві сьогодні мінус десять </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: У нас тепліше. Було нижче 0°, а стало +5°.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          у нас тепліше було нижче нуля а стало плюс п'ять{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Abbreviate all units that follow numeric values.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Пройдіть 100 м та поверніть ліворуч.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          пройдіть сто метрів та поверніть ліворуч{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Він важить 3 кг.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> він важить три кілограми </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Ми купили 12 л соку.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ми купили дванадцять літрів соку{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Він пройшов 10 миль.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> він пройшов десять миль </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Купи 700 г цукру.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> купи сімсот грамів цукру </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Вони мають проїхати 20 км.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вони мають проїхати двадцять кілометрів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Було перевезено 30 т зерна.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          було перевезено тридцять тон зерна{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Завод обробив 2 ц руди.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          завод обробив два центнери руди{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: Квітка виросла на 4 см.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          квітка виросла на чотири сантиметри{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Transcribe all numeric values preceding units in numeral form,
                even if under 10.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Нам бракує 50 г цукру.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нам бракує п'ятдесяти грамів цукру{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Вони працюють 8 годин на день.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вони працюють вісім годин на день{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: Пакунок важить 3 кг.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> пакунок важить три кілограми </i>"
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For lengths, widths, and heights, use "x" instead of any
                preposition.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Ми замовили фотографії 9x13 см.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ми замовили фотографії дев'ять на тринадцять
                          сантиметрів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Розмір моєї валізи - приблизно 40х30х20.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          розмір моєї валізи приблизно сорок на тридцять на
                          двадцять сантиметрів{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: розширення 1024x768</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          розширення тисяча двадцять чотири на сімсот шістдесят
                          вісім{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If it is clear from context that a number or number sequence
                refers to currency or time, format it as such.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Постав будильник на 5:45.</p>
                      <p class="block_16">
                        Incorrect: Постав будильник на 545.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          постав будильник на п'ять сорок п'ять{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Зустріч відбудеться о 20:00.
                      </p>
                      <p class="block_16">
                        Incorrect: Зустріч відбудеться о 2000.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          зустріч відбудеться о двадцятій нуль нуль{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">Common technical abbreviations</p>
              <div class="calibre1">
                <div class="block_18">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">мегабайт - МБ</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кілобайт - КБ</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">гігабайт - ГБ</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">терабайт - ТБ</span>
                </div>
                <div class="block_20">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">біт на секунду - біт/с</span>
                </div>
              </div>
              <p class="block_13"></p>
              <p class="block_13">Slang terms (spell them out)</p>
              <div class="calibre1">
                <div class="block_18">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кіло</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">гіга</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">гігов</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">гіг</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">бакси</span>
                </div>
                <div class="block_20">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">баксів</span>
                </div>
              </div>
              <p class="block_13"></p>
              <p class="block_13">Common measurements of distance and rate</p>
              <div class="calibre1">
                <div class="block_18">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">міліметр - мм</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">сантиметр - см</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">метр - м</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кілометр - км</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кілометр за годину - км/год</span>
                </div>
                <div class="block_20">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">метр за секунду - м/с</span>
                </div>
              </div>
              <p class="block_13"></p>
              <p class="block_13">Common measurements of area</p>
              <div class="calibre1">
                <div class="block_18">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">квадратний сантиметр - см²</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">квадратний метр - м²</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">метр в квадраті - м²</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">квадратний кілометр - км²</span>
                </div>
                <div class="block_20">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">гектар - га</span>
                </div>
              </div>
              <p class="block_13"></p>
              <p class="block_13">Common scientific terms</p>
              <div class="calibre1">
                <div class="block_18">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">децибел - дБ</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">ньютон - Н</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">джоуль - Дж</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">парсек - пк</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">ампер - А</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">герц - Гц</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">ват - Вт</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">вольт - В</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кіловат - кВт</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">моль - моль</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">градус - °</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">градус Фаренгейта - °F</span>
                </div>
                <div class="block_20">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">градус Цельсія - °C</span>
                </div>
              </div>
              <p class="block_13"></p>
              <p class="block_13">Common measurements of weight and volume</p>
              <div class="calibre1">
                <div class="block_18">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">грам - г</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">міліграм - мг</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кілограм - кг</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">літр - л</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">мілілітр - мл</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кубичні одиниці - ³</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кубічний метр - м³</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">кубометр - м³</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">фунт - фунт</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">унція - унція</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">калорія - кал</span>
                </div>
                <div class="block_19">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">столова ложка - ст. л.</span>
                </div>
                <div class="block_20">
                  <span class="bullet_1">●&nbsp;</span>
                  <span class="calibre2">чайна ложка - ч. л.</span>
                </div>
              </div>
              <h2 id="calibre_link-28" class="block_14">
                Date and time
              </h2>
              <p class="block_13"></p>
              <p class="block_13">
                Use the natural form for transcribing dates.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: в 90-ті рр.</p>
                      <p class="block_16">Incorrect: в 90 роки</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> в дев'яності роки </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: 12 липня 1964 року</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дванадцяте липня тисяча дев'ятсот шістдесят четвертого
                          року{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: вівторок, 14 серпня 2012 року
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вівторок чотирнадцяте серпня дві тисячі дванадцятого
                          року{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: весна 98-го</p>
                      <p class="block_16">Incorrect: весна 98го</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> весна дев'яносто восьмого </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: 15 вересня ц.р.</p>
                      <p class="block_16">Incorrect: 15-го вересня ц.р.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          п'ятнадцятого вересня цього року{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Exception: When the date is spoken as a sequence of numbers,
                transcribe as such.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: 07.12.2010</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          сьоме дванадцяте дві тисячі десятий{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: Вжити до 05.10.2012.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вжити до п'ятого десятого дві тисячі дванадцятого{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Use the natural form for transcribing times whenever possible.
              </p>
              <p class="block_13"></p>
              <p class="block_13">
                Write times in hh:mm format whenever possible, unless it would
                look unnatural to do so.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_2">
                    <td class="td_">
                      <p class="block_15">Correct: 12:20</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дванадцята година двадцять хвилин{' '}
                        </i>
                        "
                      </p>
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> дванадцята двадцять </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 15:15</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ятнадцять хвилин на четверту </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 3:15</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> п'ятнадцять хвилин на четверту </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: об 11:30</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> об одинадцятій тридцять </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_2">
                      <p class="block_15">Correct: о 3:00</p>
                      <p class="block_16">Incorrect: о 3 годині</p>
                      <p class="block_16">Incorrect: о 3 год</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> о третій </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: через дві години</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> через дві години </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 4:15</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          п'ятнадцять хвилин по четвертій{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: 8:50</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> за десять хвилин дев'ята </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: Поїзд відходить о 18:07.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          поїзд відходить о вісімнадцятій нуль сім{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If spoken, use "ранку", "вранці", "до обіду" for "a.m.", and
                "вечора", "ввечері", "увечері", "пополудні", "після обіду", "по
                обіді" for p.m.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Поїзд відходить о 9-й ранку.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          поїзд відходить о дев'ятій ранку{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: Mи їдемо об 11-й вечора.</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> ми їдемо об одинадцятій вечора </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                For "опівдні" and "опівночі", use the written form.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: Зустрінемося опівдні.</p>
                      <p class="block_16">Incorrect: Зустрінемося о 12:00.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> зустрінемося опівдні </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Опівночі було страшно йти додому.
                      </p>
                      <p class="block_16">
                        Incorrect: О 00:00 було страшно йти додому.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          опівночі було страшно йти додому{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="calibre_link-29" class="block_14">
                Address
              </h2>
              <p class="block_13"></p>
              <p class="block_13">
                Favor full spellings over abbreviations where natural, but use
                abbreviations when explicitly spoken.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Вона живе в Житомирському районі Львова.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Вони провели осінь в селі Воскресенськ.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: вулиця Чайковського, 31, квартира 20, місто
                        Одеса, 65496
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вулиця чайковського тридцять один квартира двадцять
                          місто oдеса шістдесят п'ять чотириста дев'яносто шість{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Use commas between elements of an address, such as the street,
                the town, the region, and the country.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: 01601, місто Київ, вулиця Бастіонна, 9
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нуль один шістсот один місто київ вулиця бастіонна
                          дев'ять{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: 03168, Чернігів, Повітрофлотський проспект, 6
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          нуль три один шість вісім чернігів повітрофлотський
                          проспект шість{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: вулиця Українська, будинок 104, село Вороньків,
                        Бориспільський район, Київська область, 08352 Україна
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вулиця українська будинок сто чотири село вороньків
                          бориспільський район київська область нуль вісім
                          триста п'ятдесят два україна{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">Use commas for ENTITY, LOCATION.</p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">
                        Correct: ресторан Українські страви, Львів
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Шоколадниця, вулиця Васляєва
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: продовольчі товари, Миколаїв
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: хірург Шпак, Харків</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: погода, Кременчуг</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Джеймс Бонд, сеанси, Київ</p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: Дмитро Іванов, Одеса</p>
                    </td>
                    <td class="td_5">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Do not capitalize cardinal directions unless part of a specific
                place name.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Зустрінемося біля південного виходу з метро.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Зустрінемося на станції Південна.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: "Південна" is a name of the station.
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Він ніколи не доїжджав до найпівденнішої
                        станції.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Північний районний відділ міліції
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">Correct: село Північне</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: "Північне" is a town name.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If a speaker uses the words "будинок" and "номер" after the
                street name and before the street number, omit the words
                "будинок" and "номер" when transcribing.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_7">
                      <p class="block_15">Correct: вулиця Галицька, 38</p>
                      <p class="block_16">
                        Incorrect: вулиця Галицька, будинок 38
                      </p>
                    </td>
                    <td class="td_8">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вулиця галицька будинок тридцять вісім{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Do not omit prepositions like "в" and "у" if you're dealing with
                isolated addresses.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_7">
                      <p class="block_15">
                        Correct: вулиця Галицька, 38 в Івано-Франківську
                      </p>
                    </td>
                    <td class="td_8">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вулиця галицька тридцять вісім в івано франківську{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="calibre_link-30" class="block_14">
                Web
              </h2>
              <p class="block_13"></p>
              <p class="block_13">
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: www.google.com.ua</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дабл'ю дабл'ю дабл'ю крапка гугл крапка ком крапка юей{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: www.123.com</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дабі дабі дабі один два три крапка ком{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: http://123.com</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ейч ті ті пі двокрапка подвійний слеш один два три
                          крапка ком{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: http://example.com</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ейч ті ті пі подвійна скісна риска екзампл крапка ком{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: email@google.com</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> імейл собачка гугл крапка ком </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: amazon.com</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> амазон крапка ком </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Вечеря в улюбленому ресторані #обожнююп'ятницю
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          вечеря в улюбленому ресторані хештег обожнюю п'ятницю{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: я не люблю хештеги</p>
                    </td>
                    <td class="td_5">
                      <p class="block_16">
                        Explanation: If a user uses hashtag as a noun, write it
                        out as a word.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Do not correct speaker errors such as transcribing a slash when
                the user actually says "backslash".
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_7">
                      <p class="block_15">Correct: http:\\mail.yahoo.com</p>
                    </td>
                    <td class="td_8">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ейч ті ті пі двокрапка подвійна зворотня скісна риска
                          мейл крапка яху крапка ком{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_3">
                    <td class="td_">
                      <p class="block_15">Correct: www.google.com</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дабл'ю дабл'ю крапка гугл крапка ком{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: If the user mistakenly says "ww",
                        transcribe "www".
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_4">
                      <p class="block_15">Correct: www.forbes.com</p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дабл'ю дабл'ю дабл'ю форбз крапка ком{' '}
                        </i>
                        "
                      </p>
                      <p class="block_16">
                        Explanation: Also transcribe the dot in an obvious URL,
                        even if the speaker did not include it.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If a URL is spelled out in individual letters, transcribe
                without spaces between individual letters.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_7">
                      <p class="block_15">Correct: www.google.com</p>
                    </td>
                    <td class="td_8">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          дабл'ю дабл'ю дабл'ю крапка джі оу оу джі ел і крапка
                          сі оу ем{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 id="calibre_link-31" class="block_14">
                Abbreviation
              </h2>
              <p class="block_13"></p>
              <p class="block_13">
                Do not abbreviate unless the speaker says an abbreviated form.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">
                        Correct: Купи молока, сиру і так далі.
                      </p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> купи молока сиру і так далі </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Купи молока, сиру і т. д.</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> купи молока сиру і те де </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Кабмін ухвалив держбюджет.
                      </p>
                      <p class="block_16">
                        Incorrect: Кабмін ухвалив державний бюджет.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> кабмін ухвалив держбюджет </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_2">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Кабінет міністрів ухвалив державний бюджет.
                      </p>
                      <p class="block_16">
                        Incorrect: Кабмін ухвалив держбюджет.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          кабінет міністрів ухвалив державний бюджет{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Do not capitalize titles. Abbreviate ukrainian titles "пане" and
                "пані" for people only when they precede proper names.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_1">
                    <td class="td_">
                      <p class="block_15">Correct: Я знаю п. Клімкіна.</p>
                    </td>
                    <td class="td_1">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> я знаю пана клімкіна </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_2">
                      <p class="block_15">Correct: Шановна п. Тетяно!</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6"> шановна пані тетяно </i>"
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">
                        Correct: Пані та панове, сьогодні важливий день.
                      </p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          пані та панове сьогодні важливий день{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_4">
                      <p class="block_15">Correct: містер Сміт</p>
                      <p class="block_16">Incorrect: м-р Сміт</p>
                    </td>
                    <td class="td_5">
                      <p class="block_17"></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                In acronyms, do not use periods between letters.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_">
                      <p class="block_15">Correct: MP3, DVD, NASA, PM</p>
                    </td>
                    <td class="td_1">
                      <p class="block_16">
                        Explanation: acronyms commonly written with Latin
                        letters
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_">
                    <td class="td_2">
                      <p class="block_15">Correct: ООН, НАТО, МЗС, ДАІ, АЗС</p>
                    </td>
                    <td class="td_3">
                      <p class="block_16">
                        Explanation: acronyms commonly written with Сyrillic
                        letters
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_3">
                    <td class="td_2">
                      <p class="block_15">Correct: lol</p>
                    </td>
                    <td class="td_3">
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> ел о ел </i>"
                      </p>
                      <p class="block_22">
                        Example audio: "<i class="calibre6"> лол </i>"
                      </p>
                      <p class="block_16">
                        Explanation: Internet acronym usually written with Latin
                        letters
                      </p>
                    </td>
                  </tr>
                  <tr class="tr_1">
                    <td class="td_4">
                      <p class="block_15">
                        Correct: Ця конференція лише для ООНівців.
                      </p>
                    </td>
                    <td class="td_5">
                      <p class="block_22">
                        Example audio: "
                        <i class="calibre6">
                          {' '}
                          ця конференція лише для оонівців{' '}
                        </i>
                        "
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                If a brand name uses periods, include the periods.
              </p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_">
                    <td class="td_7">
                      <p class="block_15">Correct: A. Tan</p>
                    </td>
                    <td class="td_8">
                      <p class="block_16">
                        Explanation: Official brand name as seen in the privacy
                        policy includes periods.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="block_13"></p>
              <p class="block_13">
                Use periods after initials in personal names. Include a space
                after each period.
              </p>
              <p class="block_21"></p>
              <table class="table_">
                <tbody class="calibre5">
                  <tr class="tr_2">
                    <td class="td_9">
                      <p class="block_15">Correct: Т. Г. Шевченко</p>
                      <p class="block_16">Incorrect: Т.Г.Шевченко</p>
                      <p class="block_16">Incorrect: ТГ Шевченко</p>
                    </td>
                  </tr>
                </tbody>
              </table>
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
