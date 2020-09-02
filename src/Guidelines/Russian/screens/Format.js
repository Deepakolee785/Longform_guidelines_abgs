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
            <PageContentHeader currentPage="longform Russian" />
            <div className="content text">
              <p className={styles.block_1051}>Format</p>
              <p className={styles.block_1052}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <p className={styles.block_1053}>Number</p>
              <p className={styles.block_1054}>
                Cardinal numbers in the nominative case from 0 to 9 are written
                out with letters (except when required otherwise by a different
                rule - see for example Format &gt; Currency and Unit, Format
                &gt; Date and Time). Use digits for nominative cardinal numbers
                10 and above, even if they are coordinated with numbers under
                10.
              </p>
              <p className={styles.block_1055}>
                Correct: В классе девять студентов.
              </p>
              <p className={styles.block_1056}>
                Correct: В классе 13 студентов.
              </p>
              <p className={styles.block_1057}>
                <span className={styles.text_4}>
                  Correct: У меня три кошки и 12 рыб.{' '}
                </span>
                <span className={styles.text_7}>
                  Explanation: Follow this rule even if the noun
                </span>
              </p>
              <p className={styles.block_1058}>
                phrases with numbers are coordinated.
              </p>
              <p className={styles.block_1059}>
                <span className={styles.text_4}>Correct: 101 кошка </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>сто одна кошка </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1060}>
                When two or more cardinal numbers in the nominative case refer
                to the same noun, and one number is 10 or greater, transcribe
                both as numerals.
              </p>
              <p className={styles.block_1061}>
                Correct: Они купили 9 или 10 стульев.
              </p>
              <p className={styles.block_1062}>
                Correct: Нам нужны четыре тачки и 14
              </p>
              <p className={styles.block_352}>лопат.</p>
              <p className={styles.block_1063}>
                Incorrect: Нам нужны 4 тачки и 14 лопат.
              </p>
              <p className={styles.block_1064}>
                Explanation: The numbers refer to different
              </p>
              <p className={styles.block_1065}>
                nouns, so this rule does not apply here.
              </p>
              <p className={styles.block_1066}>
                Correct: Он знает три или четыре языка.
              </p>
              <p className={styles.block_1067}>
                Ordinal numbers, as well as cardinal numbers that are not in the
                nominative case, should be written out with letters if they are
                less than 100 (unless required otherwise by a different rule -
                see for example Format &gt; Currency and Unit, Format &gt; Date
                and Time). Digits should be used for numbers 100 and higher.
                Never use digits with suffixes, as they are difficult to
                standardize.
              </p>
              <p className={styles.block_1068}>Correct: двадцатая годовщина</p>
              <p className={styles.block_1069}>Incorrect: 20 годовщина</p>
              <p className={styles.block_1070}>Incorrect: 20-я годовщина</p>
              <p className={styles.block_1071}>Correct: 123 годовщина</p>
              <p className={styles.block_1072}>
                Incorrect: сто двадцать третья годовщина
              </p>
              <p className={styles.block_1073}>Incorrect: 123-я годовщина</p>
              <p className={styles.block_1074}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>сто двадцать третья </span>
              </p>
              <p className={styles.block_1075}>
                <span className={styles.text_1}>годовщина </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1076}>
                Correct: Учительница подарила конфеты
              </p>
              <p className={styles.block_1077}>двадцати одному мальчику.</p>
              <p className={styles.block_1078}>
                Incorrect: Учительница подарила конфеты
              </p>
              <p className={styles.block_1079}>21 мальчику.</p>
              <p className={styles.block_1078}>
                Incorrect: Учительница подарила конфеты
              </p>
              <p className={styles.block_1080}>21-му мальчику.</p>
              <p className={styles.block_1081}>
                Correct: Учительница подарила конфеты
              </p>
              <p className={styles.block_1082}>двадцать первому мальчику.</p>
              <p className={styles.block_1078}>
                Incorrect: Учительница подарила конфеты
              </p>
              <p className={styles.block_1079}>21 мальчику.</p>
              <p className={styles.block_1078}>
                Incorrect: Учительница подарила конфеты
              </p>
              <p className={styles.block_1080}>21-му мальчику.</p>
              <p className={styles.block_1083}>
                Correct: Маша пошла в кино с пятнадцатью
              </p>
              <p className={styles.block_1084}>друзьями.</p>
              <p className={styles.block_1085}>
                Incorrect: Маша пошла в кино с 15 друзьями.
              </p>
              <p className={styles.block_1086}>
                Incorrect: Маша пошла в кино с 15-ю
              </p>
              <p className={styles.block_1087}>друзьями.</p>
              <p className={styles.block_912}>
                Correct: статья 463 часть первая
              </p>
              <p className={styles.block_429}>
                Correct: учебник по математике десятый
              </p>
              <p className={styles.block_430}>класс</p>
              <p className={styles.block_1088}>
                When two or more ordinal numbers, or cardinal numbers not in the
                nominative case, refer to the same noun, and one number is 100
                or greater, transcribe both using digits.
              </p>
              <p className={styles.block_1089}>
                <span className={styles.text_4}>
                  Correct: В миске от 80 до 120 конфет.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  в миске от восьмидесяти до{' '}
                </span>
              </p>
              <p className={styles.block_1090}>
                <span className={styles.text_1}>ста двадцати конфет </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1091}>
                Correct: Там где-то от шестнадцати до
              </p>
              <p className={styles.block_1092}>двадцати деревьев.</p>
              <p className={styles.block_1093}>
                Decimal fractions should always be written with digits, with a
                comma separating the whole and fractional parts of the number.
              </p>
              <p className={styles.block_1094}>
                <span className={styles.text_4}>Correct: 3,14 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>три и четырнадцать сотых </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1095}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>три и четырнадцать </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1096}>
                Explanation: When a phrase clearly refers to a
              </p>
              <p className={styles.block_1097}>
                decimal number, transcribe it as such.
              </p>
              <p className={styles.block_1098}>
                If a large number consists of only a number followed by
                "миллион" or "миллиард", transcribe the number using digits and
                an abbreviation ("млн" for "миллион", "млрд" for "миллиард"). If
                no number precedes "миллион" or "миллиард", write the full word.
              </p>
              <p className={styles.block_1099}>
                Correct: Население Земли составляет 7
              </p>
              <p className={styles.block_377}>млрд человек.</p>
              <p className={styles.block_1100}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  население земли составляет{' '}
                </span>
              </p>
              <p className={styles.block_1101}>
                <span className={styles.text_1}>семь миллиардов человек </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1102}>
                <span className={styles.text_4}>Correct: 1 млн гусей </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>один миллион гусей </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1103}>Correct: целый миллион гусей</p>
              <p className={styles.block_1104}>Incorrect: целый млн гусей</p>
              <p className={styles.block_1105}>
                Explanation: Here "миллион" is not preceded
              </p>
              <p className={styles.block_1106}>
                by a number, so do not abbreviate it.
              </p>
              <p className={styles.block_1107}>
                <span className={styles.text_4}>Correct: 7,18 млрд </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>семь и восемнадать сотых </span>
              </p>
              <p className={styles.block_1108}>
                <span className={styles.text_1}>миллиардов </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1109}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>семь и восемнадать </span>
              </p>
              <p className={styles.block_1108}>
                <span className={styles.text_1}>миллиардов </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1110}>
                <span className={styles.text_4}>Correct: 7.180.000.000 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>семь миллиардов сто </span>
              </p>
              <p className={styles.block_1111}>
                <span className={styles.text_1}>восемьдесят миллионов </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1112}>
                <span className={styles.text_4}>Correct: 7.234.435 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>семь миллионов двести </span>
              </p>
              <p className={styles.block_1113}>
                тридцать четыре тысячи четыреста
              </p>
              <p className={styles.block_1114}>
                <span className={styles.text_1}>тридцать пять </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1115}>
                <span className={styles.text_4}>Correct: 7 млрд два </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>семь миллиардов два </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1116}>
                Explanation: Speaker gets cut off.
              </p>
              <p className={styles.block_1117}>
                <span className={styles.text_4}>Correct: 1,5 млн руб. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>полтора миллиона рублей </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1118}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>один и пять десятых </span>
              </p>
              <p className={styles.block_1119}>
                <span className={styles.text_1}>миллионов рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1120}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>один и пять миллионов </span>
              </p>
              <p className={styles.block_1121}>
                <span className={styles.text_1}>рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1122}>
                Explanation: For mixed numbers before
              </p>
              <p className={styles.block_1123}>
                "миллион", "миллиард", etc., use decimals.
              </p>
              <p className={styles.block_1124}>
                See Format &gt; Currency and Unit for more on
              </p>
              <p className={styles.block_1125}>
                transcribing currency amounts.
              </p>
              <p className={styles.block_1126}>
                <span className={styles.text_4}>
                  Correct: 12,25 млн долларов{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>двенадцать с четвертью </span>
              </p>
              <p className={styles.block_1127}>
                <span className={styles.text_1}>миллионов долларов </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1128}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  двенадцать и двадцать пять{' '}
                </span>
              </p>
              <p className={styles.block_1129}>
                <span className={styles.text_1}>сотых миллионов долларов </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1128}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  двенадцать и двадцать пять{' '}
                </span>
              </p>
              <p className={styles.block_1127}>
                <span className={styles.text_1}>миллионов долларов </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1130}>
                <span className={styles.text_4}>
                  Correct: 3 триллиона звёзд{' '}
                </span>
                <span className={styles.text_7}>
                  Explanation: The word "триллион" is much less
                </span>
              </p>
              <p className={styles.block_625}>
                common than "миллион" and "миллиард", so
              </p>
              <p className={styles.block_919}>
                do not abbreviate it. However, do use a digit for
              </p>
              <p className={styles.block_1131}>the number.</p>
              <p className={styles.block_1132}>
                Write lists of numbers with digits and without commas.
              </p>
              <p className={styles.block_1133}>
                <span className={styles.text_4}>
                  Correct: 2 1 5 6 3 5 0 0 9 7 13{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>два один пять шесть три </span>
              </p>
              <p className={styles.block_1134}>
                <span className={styles.text_1}>
                  пять ноль ноль девять семь тринадцать{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1135}>Correct: 5 4 3 2 1 пуск</p>
              <p className={styles.block_1136}>
                <span className={styles.text_4}>Correct: 1 2 3 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>один два три </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1137}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>раз два три </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1138}>
                For long numbers (4+ digits) indicating quantity, insert periods
                between blocks of three numbers.
              </p>
              <p className={styles.block_1139}>
                <span className={styles.text_4}>Correct: 5.789 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>пять тысяч семьсот </span>
              </p>
              <p className={styles.block_1140}>
                <span className={styles.text_1}>восемьдесят девять </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1141}>
                <span className={styles.text_4}>Correct: 10.000 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>десять тысяч </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1142}>
                <span className={styles.text_4}>Correct: 1.000 гусей </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>тысяча гусей </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1143}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>одна тысяча гусей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1144}>
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p className={styles.block_1145}>
                <span className={styles.text_4}>Correct: 1/2 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>одна вторая </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1146}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>половина </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1147}>
                Explanation: Follow this rule when fraction
              </p>
              <p className={styles.block_1148}>
                words appear in isolation, too.
              </p>
              <p className={styles.block_1149}>
                Correct: Нужна ещё 1/4 л молока.
              </p>
              <p className={styles.block_1150}>
                Incorrect: Нужна ещё четверть литра молока.
              </p>
              <p className={styles.block_884}>
                Incorrect: Нужна ещё 1⁄4 л молока. (bad
              </p>
              <p className={styles.block_1151}>
                because it includes the pre-combined fraction
              </p>
              <p className={styles.block_1152}>1⁄4)</p>
              <p className={styles.block_1153}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>нужна ещё четверть литра </span>
              </p>
              <p className={styles.block_1154}>
                <span className={styles.text_1}>молока </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1155}>
                for more on how to write units.
              </p>
              <p className={styles.block_1156}>
                Explanation: See Format &gt; Units and Measures
              </p>
              <p className={styles.block_1157}>
                Correct: Через 2/3 км, поверните налево.
              </p>
              <p className={styles.block_1158}>
                Incorrect: Через 2/3 километра, поверните
              </p>
              <p className={styles.block_1159}>налево.</p>
              <p className={styles.block_1160}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  через две трети километра{' '}
                </span>
              </p>
              <p className={styles.block_1161}>
                <span className={styles.text_1}>поверните налево </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1162}>
                <span className={styles.text_4}>Correct: 3/4 мили </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>три четверти мили </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1163}>
                Explanation: Even though this unit is not
              </p>
              <p className={styles.block_1164}>
                abbreviated, numbers before it should be
              </p>
              <p className={styles.block_1165}>
                written with digits. (See Format &gt; Units and
              </p>
              <p className={styles.block_1166}>
                Measures for more on how to write units.)
              </p>
              <p className={styles.block_1167}>
                <span className={styles.text_4}>Correct: 2/3 x 5/16 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  две трети умножить на пять{' '}
                </span>
              </p>
              <p className={styles.block_1168}>
                <span className={styles.text_1}>шестнадцатых </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1169}>
                Correct: полутораметровый кусок ткани
              </p>
              <p className={styles.block_1170}>Incorrect: 1/2 м кусок ткани</p>
              <p className={styles.block_1171}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>полутораметровый кусок </span>
              </p>
              <p className={styles.block_1172}>
                <span className={styles.text_1}>ткани </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1173}>
                Explanation: Complex words like this should be
              </p>
              <p className={styles.block_1174}>written out as words.</p>
              <p className={styles.block_1175}>
                For mixed numbers in math and units and measures, use numerals.
              </p>
              <p className={styles.block_1176}>Correct: 3 1/2 км</p>
              <p className={styles.block_1024}>Incorrect: 3 с 1/2 км</p>
              <p className={styles.block_1177}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  три с половиной километра{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1178}>
                <span className={styles.text_4}>
                  Correct: Скунс вчера весил 12 1/3 фунтов.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>скунс вчера весил </span>
              </p>
              <p className={styles.block_1179}>
                <span className={styles.text_1}>
                  двенадцать и треть фунтов{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1180}>
                <span className={styles.text_4}>
                  Correct: Скунс вчера весил 12 фунтов и 1/3.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>скунс вчера весил </span>
              </p>
              <p className={styles.block_1181}>
                <span className={styles.text_1}>
                  двенадцать фунтов и одну треть{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1182}>
                <span className={styles.text_4}>Correct: 1/3 + 3 1/2 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>одна треть плюс три с </span>
              </p>
              <p className={styles.block_1183}>
                <span className={styles.text_1}>половиной </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1184}>
                <span className={styles.text_4}>
                  Correct: Девочке 5 1/2 месяцев.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>девочке пять с половиной </span>
              </p>
              <p className={styles.block_1185}>
                <span className={styles.text_1}>месяцев </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1186}>
                Correct: полуторагодовалый ребёнок
              </p>
              <p className={styles.block_1187}>
                Incorrect: 1 1/2 годовалый ребёнок
              </p>
              <p className={styles.block_1188}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  полуторагодовалый ребёнок{' '}
                </span>
              </p>
              <p className={styles.block_266}>"</p>
              <p className={styles.block_1189}>
                When referring to items (not units or measures), write fractions
                out in words. With mixed numbers, write the whole number part
                out in words if it is under ten, otherwise write it with
                numerals.
              </p>
              <p className={styles.block_1190}>
                Correct: Я возьму половину пирога.
              </p>
              <p className={styles.block_1191}>
                Incorrect: Я возьму 1/2 пирога.
              </p>
              <p className={styles.block_1192}>
                Incorrect: Я возьму 0,5 пирога.
              </p>
              <p className={styles.block_1193}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>я возьму половину пирога </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1194}>
                <span className={styles.text_4}>Correct: полпирога </span>
                <span className={styles.text_7}>
                  Explanation: After the prefix "пол-" meaning
                </span>
              </p>
              <p className={styles.block_1195}>
                "half", use a hyphen if the following letter is a
              </p>
              <p className={styles.block_1196}>
                vowel, л, or a capital letter. Otherwise, do not
              </p>
              <p className={styles.block_1197}>use a hyphen.</p>
              <p className={styles.block_904}>Correct: пол-яблока</p>
              <p className={styles.block_1198}>Correct: пол-лимона</p>
              <p className={styles.block_904}>Correct: пол-России</p>
              <p className={styles.block_1199}>Correct: три четверти яблока</p>
              <p className={styles.block_1200}>
                <span className={styles.text_4}>
                  Correct: Он ответил полушутя.{' '}
                </span>
                <span className={styles.text_7}>
                  Explanation: Here "полу" is used more{' '}
                </span>
              </p>
              <p className={styles.block_601}>
                figuratively, as part of a whole word. (Note that
              </p>
              <p className={styles.block_1201}>
                although the word "полушутя" has the form of
              </p>
              <p className={styles.block_1202}>
                a participle, it actually functions as an adverb,
              </p>
              <p className={styles.block_1203}>
                so no comma is required before it.)
              </p>
              <p className={styles.block_427}>
                Correct: три с половиной апельсина
              </p>
              <p className={styles.block_1204}>Incorrect: 3,5 апельсина</p>
              <p className={styles.block_1205}>Incorrect: 3 1/2 апельсина</p>
              <p className={styles.block_1206}>Incorrect: 3 с 1/2 апельсина</p>
              <p className={styles.block_252}>
                Incorrect: 3 с половиной апельсина
              </p>
              <p className={styles.block_437}>
                Correct: Мы сделали 12 с половиной
              </p>
              <p className={styles.block_844}>пирогов.</p>
              <p className={styles.block_1207}>
                Correct: 10 пирогов и три четверти
              </p>
              <p className={styles.block_1208}>
                For mixed numbers that represent ruble amounts, always use
                decimals. (See Format &gt; Currency and Unit for more on how to
                write ruble amounts.)
              </p>
              <p className={styles.block_1209}>
                <span className={styles.text_4}>
                  Correct: Он мне зачем-то дал 2,5 руб.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  он мне зачем-то дал два с{' '}
                </span>
              </p>
              <p className={styles.block_1210}>
                <span className={styles.text_1}>половиной рубля </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1211}>
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <p className={styles.block_1212}>
                <span className={styles.text_4}>Correct: 40% </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>сорок процентов </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_213}>Correct: миллион процентов</p>
              <p className={styles.block_1213}>Correct: 5 млн процентов</p>
              <p className={styles.block_1214}>
                <span className={styles.text_4}>
                  Correct: 50% конфет исчезли.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  пятьдесят процентов конфет{' '}
                </span>
              </p>
              <p className={styles.block_1215}>
                <span className={styles.text_1}>исчезли </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1216}>
                When numbers appear in prenominals (units preceding nouns),
                write them out using words.
              </p>
              <p className={styles.block_1217}>Correct: двухметровая волна</p>
              <p className={styles.block_1218}>Incorrect: 2 м волна</p>
              <p className={styles.block_1219}>Incorrect: 2 метровая волна</p>
              <p className={styles.block_912}>Correct: двухпроцентное молоко</p>
              <p className={styles.block_1220}>Incorrect: 2% молоко</p>
              <p className={styles.block_1221}>Correct: сторублёвая купюра</p>
              <p className={styles.block_1205}>Incorrect: 100 руб. купюра</p>
              <p className={styles.block_1222}>
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p className={styles.block_1223}>
                Use Roman numerals only when part of an official name or title.
              </p>
              <p className={styles.block_1224}>
                <span className={styles.text_4}>Correct: Пётр I </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>пётр первый </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1225}>
                Explanation: Always use Roman numerals for
              </p>
              <p className={styles.block_1226}>
                the ordinal number of a monarch.
              </p>
              <p className={styles.block_1227}>
                <span className={styles.text_4}>Correct: XIX век </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>девятнадцатый век </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1228}>
                Explanation: Always use Roman numerals for
              </p>
              <p className={styles.block_1229}>
                the ordinal number of a century.
              </p>
              <p className={styles.block_913}>
                <span className={styles.text_4}>Correct: XXII Олимпиада </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  двадцать вторая олимпиада{' '}
                </span>
              </p>
              <p className={styles.block_1230}>
                <span className={styles.text_10}>" </span>
                <span className={styles.text_11}>
                  <sub className={styles.calibre1}>
                    Explanation: Always use Roman numerals for
                  </sub>
                </span>
              </p>
              <p className={styles.block_846}>
                the ordinal numbers of major recurring events
              </p>
              <p className={styles.block_1231}>
                like Olympic games and political party
              </p>
              <p className={styles.block_735}>conventions</p>
              <p className={styles.block_1232}>
                Transcribe seasons and episodes of television shows with
                numerals.
              </p>
              <p className={styles.block_1233}>
                <span className={styles.text_4}>
                  Correct: Покемон, 4 сезон, 5 серия{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>покемон четвёртый сезон </span>
              </p>
              <p className={styles.block_1234}>
                <span className={styles.text_1}>пятая серия </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1235}>
                Explanation: If the show title, season, and
              </p>
              <p className={styles.block_1236}>
                episode are spoken as a list, use commas
              </p>
              <p className={styles.block_1237}>between them.</p>
              <p className={styles.block_1238}>
                <span className={styles.text_4}>
                  Correct: Покемон, 5 серия 4 сезона{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>покемон пятая серия </span>
              </p>
              <p className={styles.block_1239}>
                <span className={styles.text_1}>четвёртого сезона </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1240}>
                Correct: Включить Контрольную закупку,
              </p>
              <p className={styles.block_1241}>2013 год, 5 серия.</p>
              <p className={styles.block_1242}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>смотреть контрольную </span>
              </p>
              <p className={styles.block_1243}>
                закупку две тыщи тринадцатый год пятая
              </p>
              <p className={styles.block_1244}>
                <span className={styles.text_1}>серия </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1245}>
                Correct: 5 серия текущего сезона
              </p>
              <p className={styles.block_1246}>Контрольной закупки</p>
              <p className={styles.block_1247}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  пятая серия текущего сезона{' '}
                </span>
              </p>
              <p className={styles.block_1248}>
                <span className={styles.text_1}>контрольной закупки </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1249}>
                If it is a product type, use the common written form.
              </p>
              <p className={styles.block_1250}>
                <span className={styles.text_4}>Correct: 4x4 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>четыре на четыре </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1251}>Explanation: type of truck</p>
              <p className={styles.block_1252}>
                <span className={styles.text_4}>Correct: калибр .22 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>калибр двадцать два </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1253}>
                <span className={styles.text_4}>Correct: .22 калибр </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>двадцать второй калибр </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1254}>
                <span className={styles.text_4}>Correct: Android 4.0.1 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>андроид четыре ноль один </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1255}>
                Explanation: See Difficult Utterances &gt; Foreign
              </p>
              <p className={styles.block_1256}>
                Language for more on transcribing foreign
              </p>
              <p className={styles.block_1257}>brand names.</p>
              <p className={styles.block_1258}>
                Transcribe phone numbers using the most common format in the
                transcription language.
              </p>
              <p className={styles.block_1259}>
                Transcribe phone numbers as you would write them down in their
                natural blocks. Use parentheses around area codes and hyphens
                between the other blocks in the phone number.
              </p>
              <p className={styles.block_1260}>
                <span className={styles.text_4}>Correct: 123-45-67 </span>
                <span className={styles.text_7}>
                  Explanation: seven-digit phone number, no area
                </span>
              </p>
              <p className={styles.block_1261}>code</p>
              <p className={styles.block_1262}>
                <span className={styles.text_4}>Correct: 12-34-56 </span>
                <span className={styles.text_7}>
                  Explanation: six-digit phone number, no area
                </span>
              </p>
              <p className={styles.block_1261}>code</p>
              <p className={styles.block_1184}>
                <span className={styles.text_4}>Correct: 1-23-45 </span>
                <span className={styles.text_7}>
                  Explanation: five-digit phone number, no area
                </span>
              </p>
              <p className={styles.block_1261}>code</p>
              <p className={styles.block_1263}>
                <span className={styles.text_4}>
                  Correct: +7 (495) 123-45-67{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>плюс семь четыреста </span>
              </p>
              <p className={styles.block_1264}>
                девяносто пять сто двадцать три сорок пять
              </p>
              <p className={styles.block_1265}>
                <span className={styles.text_1}>шестьдесят семь </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1266}>
                Explanation: Country code, three-digit area
              </p>
              <p className={styles.block_1267}>
                code, seven-digit phone number. Only
              </p>
              <p className={styles.block_1268}>
                transcribe the plus if it is spoken.
              </p>
              <p className={styles.block_1269}>
                <span className={styles.text_4}>
                  Correct: 8 (8452) 12-34-56{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  восемь восемьдесят четыре{' '}
                </span>
              </p>
              <p className={styles.block_1270}>
                пятьдесят два двенадцать тридцать четыре
              </p>
              <p className={styles.block_1271}>
                <span className={styles.text_1}>пятьдесят шесть </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1272}>
                Explanation: country code, four-digit area code,
              </p>
              <p className={styles.block_1273}>six-digit phone number</p>
              <p className={styles.block_343}>
                <span className={styles.text_4}>Correct: (84545) 1-23-45 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>восемь сорок пять сорок </span>
              </p>
              <p className={styles.block_1274}>
                <span className={styles.text_1}>
                  пять один двадцать три сорок пять{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1275}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>восемь сорок пять сорок </span>
              </p>
              <p className={styles.block_1276}>
                <span className={styles.text_1}>
                  пять раз два три четыре пять{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1277}>
                Explanation: Five-digit area code, five-digit
              </p>
              <p className={styles.block_475}>
                phone number. If the speaker clearly means a
              </p>
              <p className={styles.block_1278}>
                phone number, use phone number formatting
              </p>
              <p className={styles.block_1279}>
                even if the user speaks it in an unusual way.
              </p>
              <p className={styles.block_1280}>
                <span className={styles.text_4}>
                  Correct: номер телефона (555) 555-55-55{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>номер телефона пять пять </span>
              </p>
              <p className={styles.block_1281}>
                <span className={styles.text_1}>
                  пять пять пять пять пять пять пять пять{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1282}>
                Explanation: If you cannot determine which part
              </p>
              <p className={styles.block_734}>
                of the number is the area code, assume the first
              </p>
              <p className={styles.block_1283}>
                three digits are the area code.
              </p>
              <p className={styles.block_1284}>
                Transcribe alpha-digit sequences (product codes etc.) in their
                most natural way (possibly several ways accepted). Do not
                transcribe credit card numbers, etc.
              </p>
              <p className={styles.block_1285}>
                <span className={styles.text_4}>Correct: XT 660 or XT660 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  икс тэ шестьсот шестьдесят{' '}
                </span>
              </p>
              <p className={styles.block_1286}>"</p>
              <p className={styles.block_1287}>
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.
              </p>
              <p className={styles.block_1288}>
                <span className={styles.text_4}>Correct: 5 - 1 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>пять минус один </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1289}>
                <span className={styles.text_4}>
                  Correct: Сколько будет 5 x 6?{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  сколько будет пятью шесть{' '}
                </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1290}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>сколько будет пять </span>
              </p>
              <p className={styles.block_1291}>
                <span className={styles.text_1}>умножить на шесть </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1292}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  сколько будет пять на шесть{' '}
                </span>
              </p>
              <p className={styles.block_1293}>
                <span className={styles.text_10}>" </span>
                <span className={styles.text_11}>
                  <sub className={styles.calibre1}>
                    Explanation: Though "пять на шесть" is slightly
                  </sub>
                </span>
              </p>
              <p className={styles.block_1294}>
                ambiguous - it could refer to division - assume
              </p>
              <p className={styles.block_1295}>
                that multiplication is intended unless context
              </p>
              <p className={styles.block_1296}>strongly indicates otherwise.</p>
              <p className={styles.block_1184}>
                <span className={styles.text_4}>Correct: 5 / 63 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  пять разделить на шесть в{' '}
                </span>
              </p>
              <p className={styles.block_1297}>
                <span className={styles.text_1}>третьей степени </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1298}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  пять разделить на шесть в{' '}
                </span>
              </p>
              <p className={styles.block_1299}>
                <span className={styles.text_1}>третьей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1298}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  пять разделить на шесть в{' '}
                </span>
              </p>
              <p className={styles.block_1300}>
                <span className={styles.text_1}>кубе </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1301}>
                <span className={styles.text_12}>Correct: √3 </span>
                <span className={styles.text_13}>Example audio: " </span>
                <span className={styles.text_14}>корень из трёх </span>
                <span className={styles.text_13}>" </span>
              </p>
              <p className={styles.block_1302}>
                <span className={styles.text_4}>
                  Correct: 8 часов х 800 руб.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>восемь часов умножить на </span>
              </p>
              <p className={styles.block_1303}>
                <span className={styles.text_1}>восемьсот рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1304}>
                Correct: два удава разделить на четыре
              </p>
              <p className={styles.block_1305}>попугая</p>
              <p className={styles.block_938}>
                Explanation: This does not seem like a real
              </p>
              <p className={styles.block_1306}>
                math expression that can actually be
              </p>
              <p className={styles.block_516}>
                computed, so transcribe this with words.
              </p>
              <p className={styles.block_1307}>Currency and unit</p>
              <p className={styles.block_1308}>
                Transcribe currencies as commonly written in the transcription
                language.
              </p>
              <p className={styles.block_1309}>
                When a speaker refers to a specific quantity of rubles or
                kopeks, use digits to transcribe it and abbreviate the currency
                terms ("руб.", "коп.").
              </p>
              <p className={styles.block_1310}>
                <span className={styles.text_4}>Correct: 10 руб. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>десять рублей </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1311}>
                <span className={styles.text_4}>Correct: 3 руб. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>три рубля </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1312}>
                <span className={styles.text_4}>Correct: 10 коп. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>десять копеек </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1313}>
                <span className={styles.text_4}>Correct: 1 коп. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>одна копейка </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1314}>
                <span className={styles.text_4}>Correct: 12 руб. 50 коп. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>двенадцать рублей </span>
              </p>
              <p className={styles.block_1315}>
                <span className={styles.text_1}>пятьдесят копеек </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1316}>
                <span className={styles.text_4}>
                  Correct: Шоколадка стоила всего 50 руб.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>шоколадка стоила всего </span>
              </p>
              <p className={styles.block_1315}>
                <span className={styles.text_1}>пятьдесят рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1317}>
                For all other currencies and slang terms for money, spell out
                the words. As usual, use digits for numbers 10 and greater.
              </p>
              <p className={styles.block_1318}>
                <span className={styles.text_4}>Correct: 100 долларов </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>сто долларов </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1319}>
                <span className={styles.text_4}>Correct: два доллара </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>два доллара </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1320}>
                Correct: 10 долларов - больше или меньше,
              </p>
              <p className={styles.block_933}>чем 300 руб.?</p>
              <p className={styles.block_1321}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  десять долларов больше или{' '}
                </span>
              </p>
              <p className={styles.block_1322}>
                <span className={styles.text_1}>меньше чем триста рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1323}>
                <span className={styles.text_4}>
                  Correct: 20 евро в долларах{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>двадцать евро в долларах </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1324}>
                <span className={styles.text_4}>Correct: 100 баксов </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>сто баксов </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1325}>
                <span className={styles.text_4}>
                  Correct: Я заплатил пять штук.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>я заплатил пять штук </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1326}>
                Explanation: Whether or not "штука" is being
              </p>
              <p className={styles.block_1327}>
                used as a slang term for currency, write it out.
              </p>
              <p className={styles.block_1328}>
                When a speaker mentions currency without specifying a quantity,
                spell out the currency word.
              </p>
              <p className={styles.block_1329}>Correct: несколько рублей</p>
              <p className={styles.block_871}>
                Correct: обмен валюты рубли и доллары
              </p>
              <p className={styles.block_1330}>
                Correct: У меня осталась всего пара рублей,
              </p>
              <p className={styles.block_1331}>не больше.</p>
              <p className={styles.block_1332}>
                For ranges or non-specific currency quantities, write everything
                out as spoken.
              </p>
              <p className={styles.block_1333}>
                Correct: У меня четыре или пять тысяч
              </p>
              <p className={styles.block_606}>рублей.</p>
              <p className={styles.block_1334}>
                Incorrect: У меня четыре или 5.000 руб.
              </p>
              <p className={styles.block_1335}>
                Incorrect: У меня 4.000 или 5.000 руб.
              </p>
              <p className={styles.block_871}>
                Correct: от пяти до восьми тысяч рублей
              </p>
              <p className={styles.block_1336}>
                <span className={styles.text_4}>
                  Correct: У меня 400 или 500 рублей.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>у меня четыреста или </span>
              </p>
              <p className={styles.block_1337}>
                <span className={styles.text_1}>пятьсот рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1338}>
                Explanation: When exact numbers are available,
              </p>
              <p className={styles.block_1339}>
                transcribe them in the usual way, which in the
              </p>
              <p className={styles.block_1340}>
                case of rubles and kopeks means using digits.
              </p>
              <p className={styles.block_1341}>
                <span className={styles.text_4}>Correct: 9 или 12 рублей </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>девять или двенадцать </span>
              </p>
              <p className={styles.block_1342}>
                <span className={styles.text_1}>рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1343}>
                <span className={styles.text_4}>
                  Correct: от 9 до 12 рублей{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>от девяти до двенадцати </span>
              </p>
              <p className={styles.block_1342}>
                <span className={styles.text_1}>рублей </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1344}>
                Explanation: Although these numbers are not in
              </p>
              <p className={styles.block_1345}>
                the nominative case, they refer to rubles, so
              </p>
              <p className={styles.block_1346}>digits should be used.</p>
              <p className={styles.block_1347}>
                For degrees, use the ° symbol. Even if the word "градус" is not
                used, if a number clearly refers to temperature, use the degree
                symbol.
              </p>
              <p className={styles.block_1348}>
                <span className={styles.text_4}>Correct: На улице 20°. </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  на улице двадцать градусов{' '}
                </span>
              </p>
              <p className={styles.block_1286}>"</p>
              <p className={styles.block_1349}>
                <span className={styles.text_4}>Correct: 5° C </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>пять градусов цельсия </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1350}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>пять градусов по цельсию </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1351}>
                <span className={styles.text_4}>Correct: 72° F </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>семьдесят два градуса </span>
              </p>
              <p className={styles.block_1352}>
                <span className={styles.text_1}>фаренгейта </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1353}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>семьдесят два градуса по </span>
              </p>
              <p className={styles.block_1354}>
                <span className={styles.text_1}>фаренгейту </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1355}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>семьдесят два по </span>
              </p>
              <p className={styles.block_1354}>
                <span className={styles.text_1}>фаренгейту </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1356}>
                <span className={styles.text_4}>
                  Correct: В Москве сегодня -10°.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>в москве сегодня минус </span>
              </p>
              <p className={styles.block_1342}>
                <span className={styles.text_1}>десять </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1357}>
                Correct: У нас потеплело. Было ниже 0°, а
              </p>
              <p className={styles.block_1358}>стало +5°.</p>
              <p className={styles.block_1359}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  у нас потеплело было ниже{' '}
                </span>
              </p>
              <p className={styles.block_1360}>
                <span className={styles.text_1}>нуля а стало плюс пять </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1361}>
                Abbreviate all units that follow numeric values.
              </p>
              <p className={styles.block_1362}>
                Correct: Мы купили 10 л апельсинового
              </p>
              <p className={styles.block_1363}>сока.</p>
              <p className={styles.block_1364}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>мы купили десять литров </span>
              </p>
              <p className={styles.block_1365}>
                <span className={styles.text_1}>апельсинового сока </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1366}>
                Explanation: See appendix at the end of this
              </p>
              <p className={styles.block_1367}>
                subsection for list of unit abbreviations.
              </p>
              <p className={styles.block_1368}>
                <span className={styles.text_4}>
                  Correct: Она прошла 12 миль.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>она прошла двенадцать </span>
              </p>
              <p className={styles.block_1369}>
                <span className={styles.text_1}>миль </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1370}>
                Explanation: If the appendix below does not list
              </p>
              <p className={styles.block_1371}>
                an abbreviation for a given unit or lists the full
              </p>
              <p className={styles.block_1372}>
                word instead of the abbreviation, write out the
              </p>
              <p className={styles.block_1373}>full word.</p>
              <p className={styles.block_1374}>
                Transcribe all numeric values preceding units in numeral form,
                even if under 10.
              </p>
              <p className={styles.block_1375}>
                <span className={styles.text_4}>
                  Correct: Пудель весит 4 кг.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>пудель весит четыре </span>
              </p>
              <p className={styles.block_1376}>
                <span className={styles.text_1}>килограмма </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1377}>
                <span className={styles.text_4}>
                  Correct: Нам не хватает ещё 50 г муки.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>нам не хватает ещё </span>
              </p>
              <p className={styles.block_1378}>
                <span className={styles.text_1}>пятидесяти грамм муки </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1379}>
                Explanation: Although the number here is not in
              </p>
              <p className={styles.block_1380}>
                the nominative case, it should still be written
              </p>
              <p className={styles.block_1381}>
                with digits because it precedes a unit.
              </p>
              <p className={styles.block_1382}>
                <span className={styles.text_4}>
                  Correct: Он работает 8 часов в день.{' '}
                </span>
                <span className={styles.text_7}>
                  Explanation: Even though the number is under
                </span>
              </p>
              <p className={styles.block_1372}>
                10 and the unit is not abbreviated, the number
              </p>
              <p className={styles.block_1383}>
                should still be written with digits because it
              </p>
              <p className={styles.block_1384}>precedes a unit.</p>
              <p className={styles.block_1385}>
                For lengths, widths, and heights: use "x" instead of any
                preposition.
              </p>
              <p className={styles.block_1386}>
                Correct: Размер моего чемодана - примерно
              </p>
              <p className={styles.block_630}>40х30х20.</p>
              <p className={styles.block_1387}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>размер моего чемодана </span>
              </p>
              <p className={styles.block_1388}>
                <span className={styles.text_1}>
                  примерно сорок на тридцать на двадцать{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1389}>
                <span className={styles.text_4}>
                  Correct: противень размера 11х20 см{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>противень размера </span>
              </p>
              <p className={styles.block_1390}>
                <span className={styles.text_1}>
                  одиннадцать на двадцать сантиметров{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1391}>
                <span className={styles.text_4}>
                  Correct: разрешение 1024x768{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>разрешение тысяча </span>
              </p>
              <p className={styles.block_1392}>
                двадцать четыре на семьсот шестьдесят
              </p>
              <p className={styles.block_1393}>
                <span className={styles.text_1}>восемь </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1394}>
                If it is clear from context that a number or number sequence
                refers to a time, format it as such.
              </p>
              <p className={styles.block_1395}>
                Correct: Поставь будильник на 19:00.
              </p>
              <p className={styles.block_1396}>
                Incorrect: Поставь будильник на 19 ноль
              </p>
              <p className={styles.block_1397}>ноль.</p>
              <p className={styles.block_1398}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>поставь будильник на </span>
              </p>
              <p className={styles.block_1399}>
                <span className={styles.text_1}>девятнадцать ноль ноль </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1400}>
                Common technical abbreviations
              </p>
              <p className={styles.block_1401}>● мегабайт - МБ</p>
              <p className={styles.block_1402}>● килобайт - КБ</p>
              <p className={styles.block_1403}>● гигабайт - ГБ</p>
              <p className={styles.block_1404}>● терабайт - ТБ</p>
              <p className={styles.block_1405}>Slang terms (spell them out)</p>
              <p className={styles.block_1406}>● кило</p>
              <p className={styles.block_1407}>● гига, гигов, гиг</p>
              <p className={styles.block_1408}>● баксы, баксов</p>
              <p className={styles.block_1409}>
                Common measurements of distance and rate
              </p>
              <p className={styles.block_1410}>● дюйм - дюйм</p>
              <p className={styles.block_1411}>● фут - фут</p>
              <p className={styles.block_1412}>● ярд - ярд</p>
              <p className={styles.block_1413}>● миля - миля</p>
              <p className={styles.block_1414}>● миллиметр - мм</p>
              <p className={styles.block_1415}>● сантиметр - см</p>
              <p className={styles.block_1416}>● метр - м</p>
              <p className={styles.block_1408}>● километр - км</p>
              <p className={styles.block_1417}>● миля в час - миля в час</p>
              <p className={styles.block_1418}>● километр в час - км/ч</p>
              <p className={styles.block_1419}>● метр в секунду - м/с</p>
              <p className={styles.block_1420}>Common measurements of area</p>
              <p className={styles.block_1421}>● квадратный сантиметр - см2</p>
              <p className={styles.block_1422}>● квадратный метр - м2</p>
              <p className={styles.block_1423}>● метр в квадрате - м2</p>
              <p className={styles.block_1424}>● квадратный километр - км2</p>
              <p className={styles.block_1425}>● гектар - га</p>
              <p className={styles.block_1426}>Common scientific terms</p>
              <p className={styles.block_1410}>● децибел - дБ</p>
              <p className={styles.block_1427}>● ньютон - Н</p>
              <p className={styles.block_1428}>● джоуль - Дж</p>
              <p className={styles.block_1427}>● парсек - пк</p>
              <p className={styles.block_1429}>● ампер - А</p>
              <p className={styles.block_1430}>● герц - Гц</p>
              <p className={styles.block_1431}>● ватт - Вт</p>
              <p className={styles.block_1432}>● киловатт - кВт</p>
              <p className={styles.block_1433}>● моль - моль</p>
              <p className={styles.block_1434}>● кандела - кд</p>
              <p className={styles.block_1435}>● люмен - лм</p>
              <p className={styles.block_1436}>● градус - °</p>
              <p className={styles.block_1437}>● градус Фаренгейта - °F</p>
              <p className={styles.block_1438}>● градус Цельсия - °C</p>
              <p className={styles.block_1439}>● кельвин - К</p>
              <p className={styles.block_1440}>
                Common measurements of weight and volume
              </p>
              <p className={styles.block_1441}>● грамм - г</p>
              <p className={styles.block_1442}>● миллиграмм - мг</p>
              <p className={styles.block_1443}>● килограмм - кг</p>
              <p className={styles.block_1444}>● литр - л</p>
              <p className={styles.block_1445}>● миллилитр - мл</p>
              <p className={styles.block_1446}>● кубические единицы - 3</p>
              <p className={styles.block_1447}>● кубический метр - м3</p>
              <p className={styles.block_1448}>● кубометр - м3</p>
              <p className={styles.block_1433}>● фунт - фунт</p>
              <p className={styles.block_1449}>● унция - унция</p>
              <p className={styles.block_1450}>● кварта - кварта</p>
              <p className={styles.block_1451}>Date and time</p>
              <p className={styles.block_1452}>
                Use the natural form for transcribing dates.
              </p>
              <p className={styles.block_1453}>
                Dates should be written with digits unless it looks unnatural to
                do so.
              </p>
              <p className={styles.block_1454}>
                <span className={styles.text_4}>
                  Correct: 21 августа 2012 года{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  двадцать первое августа две{' '}
                </span>
              </p>
              <p className={styles.block_1455}>
                <span className={styles.text_1}>тесячи двенадцатого года </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1456}>
                Explanation: Always use digits for numbers in
              </p>
              <p className={styles.block_1457}>
                dates, even when they are ordinals and/or not
              </p>
              <p className={styles.block_1457}>
                in the nominative case (see Format &gt; Number
              </p>
              <p className={styles.block_1458}>above).</p>
              <p className={styles.block_1459}>
                <span className={styles.text_4}>Correct: в 1995 году </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>в тысяча девятьсот </span>
              </p>
              <p className={styles.block_1460}>
                <span className={styles.text_1}>девяносто пятом году </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1461}>
                Correct: пятнадцатого числа этого месяца
              </p>
              <p className={styles.block_1462}>
                Incorrect: 15 числа этого месяца
              </p>
              <p className={styles.block_1463}>
                Incorrect: 15-го числа этого месяца
              </p>
              <p className={styles.block_1464}>
                Explanation: Even though this number refers to
              </p>
              <p className={styles.block_1465}>
                a date, do not write it with digits because it
              </p>
              <p className={styles.block_811}>
                looks somewhat unnatural and confusing.
              </p>
              <p className={styles.block_1466}>
                <span className={styles.text_4}>
                  Correct: осенью семьдесят восьмого года{' '}
                </span>
                <span className={styles.text_7}>
                  Explanation: Even though this number refers to
                </span>
              </p>
              <p className={styles.block_1467}>
                a year, do not write it with digits because it
              </p>
              <p className={styles.block_1468}>
                looks somewhat unnatural and confusing.
              </p>
              <p className={styles.block_1469}>Correct: в девяностые годы</p>
              <p className={styles.block_1029}>Incorrect: в 90 годы</p>
              <p className={styles.block_1470}>Incorrect: в 90-е годы</p>
              <p className={styles.block_1471}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>в девяностые годы </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1472}>
                Explanation: Even though this number refers to
              </p>
              <p className={styles.block_1473}>
                a set of years, do not write it with digits
              </p>
              <p className={styles.block_1474}>
                because it looks somewhat unnatural and
              </p>
              <p className={styles.block_1475}>confusing.</p>
              <p className={styles.block_1476}>
                <span className={styles.text_4}>Correct: среда, 6 марта </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>среда шестое марта </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1477}>
                Exception: When the date is spoken as a sequence of numbers,
                transcribe as such.
              </p>
              <p className={styles.block_1478}>
                <span className={styles.text_4}>
                  Correct: срок годности до 7.12.2010{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  срок годности до седьмого{' '}
                </span>
              </p>
              <p className={styles.block_1479}>
                <span className={styles.text_1}>
                  двенадцатого две тысячи десятого{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1480}>
                Use the natural form for transcribing times whenever possible.
              </p>
              <p className={styles.block_1481}>
                Write times in hh:mm format whenever possible, unless it would
                look unnatural to do so.
              </p>
              <p className={styles.block_1482}>Correct: Лекция будет в 3:00.</p>
              <p className={styles.block_1483}>
                Incorrect: Лекция будет в 3:00 часа.
              </p>
              <p className={styles.block_1462}>
                Incorrect: Лекция будет в 3 часа.
              </p>
              <p className={styles.block_1484}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>лекция будет в три часа </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1485}>
                Incorrect: Лекция будет в три часа.
              </p>
              <p className={styles.block_1486}>
                Correct: Поставь будильник на 4:00.
              </p>
              <p className={styles.block_1487}>
                Incorrect: Поставь будильник на 4.
              </p>
              <p className={styles.block_1488}>
                Incorrect: Поставь будильник на четыре.
              </p>
              <p className={styles.block_1489}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>поставь будильник на </span>
              </p>
              <p className={styles.block_1490}>
                <span className={styles.text_1}>четыре </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1491}>
                <span className={styles.text_4}>
                  Correct: Поезд отходит в 7:15.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>поезд отходит в семь </span>
              </p>
              <p className={styles.block_1352}>
                <span className={styles.text_1}>пятнадцать </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1492}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  поезд отходит в семь часов{' '}
                </span>
              </p>
              <p className={styles.block_1303}>
                <span className={styles.text_1}>пятнадцать минут </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1493}>
                Correct: Он провёл в больнице 7 часов и 15
              </p>
              <p className={styles.block_293}>минут.</p>
              <p className={styles.block_1494}>
                Incorrect: Он провёл в больнице 7:15.
              </p>
              <p className={styles.block_1495}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  он провёл в больнице семь{' '}
                </span>
              </p>
              <p className={styles.block_1496}>
                <span className={styles.text_1}>часов и пятнадцать минут </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1497}>
                Explanation: Here "семь часов и пятнадцать
              </p>
              <p className={styles.block_419}>
                минут" signifies a duration rather than a point
              </p>
              <p className={styles.block_1498}>
                in time, so format it as numerals and units
              </p>
              <p className={styles.block_1499}>rather than as a time.</p>
              <p className={styles.block_1500}>
                <span className={styles.text_4}>
                  Correct: Мне завтра вставать в 6:00 утра.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  мне завтра вставать в шесть{' '}
                </span>
              </p>
              <p className={styles.block_1501}>
                <span className={styles.text_1}>утра </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1502}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  мне завтра вставать в шесть{' '}
                </span>
              </p>
              <p className={styles.block_1503}>
                <span className={styles.text_1}>часов утра </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1504}>
                <span className={styles.text_4}>
                  Correct: Я буду в аэропорту до 18:00.{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>я буду в аэропорту до </span>
              </p>
              <p className={styles.block_1505}>
                <span className={styles.text_1}>восемнадцати ноль ноль </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1506}>
                <span className={styles.text_4}>Correct: 2:45 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>без четверти три </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1507}>
                <span className={styles.text_4}>Correct: 1:30 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>пол второго </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1508}>
                <span className={styles.text_4}>Correct: 4:10 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>десять минут пятого </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1509}>
                <span className={styles.text_4}>
                  Correct: за несколько минут до 12:00{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>за несколько минут до </span>
              </p>
              <p className={styles.block_1510}>
                <span className={styles.text_1}>двенадцати </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1511}>
                <span className={styles.text_4}>
                  Correct: без четверти 2:50{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>без четверти м-м-м без </span>
              </p>
              <p className={styles.block_1512}>
                <span className={styles.text_1}>десяти три </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1513}>
                Explanation: Speaker changed their mind
              </p>
              <p className={styles.block_1514}>mid-utterance.</p>
              <p className={styles.block_1515}>
                <span className={styles.text_4}>Correct: в районе 8:00 </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>в районе восьми </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1459}>
                <span className={styles.text_4}>
                  Correct: начало четвёртого{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>начало четвёртого </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1516}>
                For all forms of "полдень" and "полночь", use the written form.
              </p>
              <p className={styles.block_1517}>
                Correct: Давай встретимся в полдень.
              </p>
              <p className={styles.block_1518}>
                Correct: Мы сходили на полуночный сеанс.
              </p>
              <p className={styles.block_1328}>
                Do not abbreviate time measurements, but do treat them as units
                by using digits before them.
              </p>
              <p className={styles.block_1519}>● секунда</p>
              <p className={styles.block_1520}>● минута</p>
              <p className={styles.block_1521}>● час</p>
              <p className={styles.block_1522}>● день</p>
              <p className={styles.block_1523}>● неделя</p>
              <p className={styles.block_1524}>● месяц</p>
              <p className={styles.block_1521}>● год</p>
              <p className={styles.block_1525}>Address</p>
              <p className={styles.block_302}>
                Favor full spellings over abbreviations where natural, but use
                abbreviations when explicitly spoken.
              </p>
              <p className={styles.block_1526}>
                Correct: Она живёт на проспекте Мира.
              </p>
              <p className={styles.block_1527}>
                Incorrect: Она живёт на просп. Мира.
              </p>
              <p className={styles.block_1528}>
                Incorrect: Она живёт на пр-те Мира.
              </p>
              <p className={styles.block_597}>
                Correct: Летом они были в Тульской
              </p>
              <p className={styles.block_844}>области.</p>
              <p className={styles.block_1529}>
                Use numbers in addresses unless it looks unnatural to do so.
              </p>
              <p className={styles.block_1530}>
                Correct: третья улица Строителей, дом 25,
              </p>
              <p className={styles.block_507}>квартира 12</p>
              <p className={styles.block_1063}>
                Incorrect: 3-я ул. Строителей, д. 25, кв. 12
              </p>
              <p className={styles.block_1531}>
                Incorrect: 3 ул. Строителей, д. 25, кв. 12
              </p>
              <p className={styles.block_1532}>
                Explanation: As mentioned in Format &gt; Number,
              </p>
              <p className={styles.block_1533}>
                digits with suffixes are difficult to standardize,
              </p>
              <p className={styles.block_1534}>
                and using the digit "3" for "третья" looks
              </p>
              <p className={styles.block_1535}>
                unnatural, so write out the word "третья". Use
              </p>
              <p className={styles.block_1536}>
                digits for the other numbers in the address.
              </p>
              <p className={styles.block_1537}>
                Correct: Санкт-Петербург, Дворцовая
              </p>
              <p className={styles.block_1538}>площадь, 2</p>
              <p className={styles.block_1539}>
                Incorrect: Санкт-Петербург, Дворцовая пл.,
              </p>
              <p className={styles.block_1540}>два</p>
              <p className={styles.block_1541}>
                Explanation: Use digits for numbers in
              </p>
              <p className={styles.block_1542}>
                addresses, even when they are under 10.
              </p>
              <p className={styles.block_1543}>
                Use commas between elements of an address, such as the street
                address, the town, the region, and the country.
              </p>
              <p className={styles.block_1544}>
                <span className={styles.text_4}>
                  Correct: Москва, улица Щепкина, дом 61/2{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>моска улица щепкина дом </span>
              </p>
              <p className={styles.block_1545}>
                <span className={styles.text_1}>
                  шестьдесят один дробь два{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1546}>
                Correct: проспект Победителей, 16, квартира
              </p>
              <p className={styles.block_1547}>
                <span className={styles.text_15}>98 </span>
                <span className={styles.text_3}>
                  <sub className={styles.calibre1}>
                    Correct: Победителей, 16{' '}
                  </sub>
                </span>
              </p>
              <p className={styles.block_1548}>
                Correct: дом 39, Ленинский проспект,
              </p>
              <p className={styles.block_622}>Москва</p>
              <p className={styles.block_1549}>
                Explanation: Use commas even if the elements
              </p>
              <p className={styles.block_1550}>
                of the address are in the wrong order.
              </p>
              <p className={styles.block_1551}>
                If a speaker uses an incorrect postal code or address, stick to
                what was said and format it as an address.
              </p>
              <p className={styles.block_175}>
                Use commas for ENTITY, LOCATION.
              </p>
              <p className={styles.block_1552}>
                Correct: ресторан Старое место, Москва
              </p>
              <p className={styles.block_437}>
                Correct: Шоколадница, улица Гоголя
              </p>
              <p className={styles.block_453}>Correct: продуктовые магазины,</p>
              <p className={styles.block_1553}>Новосибирск</p>
              <p className={styles.block_1554}>
                Correct: Иван Петров, Екатеринбург
              </p>
              <p className={styles.block_1555}>Correct: врач Иванова, Рязань</p>
              <p className={styles.block_1556}>
                <span className={styles.text_4}>Correct: Ozon.ru, Пермь </span>
                <span className={styles.text_7}>
                  Explanation: The user is searching for goods
                </span>
              </p>
              <p className={styles.block_1557}>
                that can be bought on Ozon.ru in Perm. Even
              </p>
              <p className={styles.block_1558}>
                though the site is not actually located in Perm,
              </p>
              <p className={styles.block_1559}>
                this should still be written with a comma.
              </p>
              <p className={styles.block_1560}>Correct: погода, Уфа</p>
              <p className={styles.block_1561}>
                Correct: холодильники, Астрахань
              </p>
              <p className={styles.block_1562}>
                Correct: Ирония судьбы сеансы, Мурманск
              </p>
              <p className={styles.block_1563}>
                Do not capitalize cardinal directions unless part of a specific
                place name.
              </p>
              <p className={styles.block_1564}>
                Correct: Встретимся у южного выхода из
              </p>
              <p className={styles.block_435}>метро.</p>
              <p className={styles.block_678}>
                Correct: Встретимся на станции Южная.
              </p>
              <p className={styles.block_1565}>
                Correct: Поезжай по серой ветке.
              </p>
              <p className={styles.block_1566}>Встретимся на Южной.</p>
              <p className={styles.block_1567}>
                Explanation: In this context, the speaker is
              </p>
              <p className={styles.block_1568}>
                clearly talking about the metro station
              </p>
              <p className={styles.block_1569}>
                "Южная", so this word should be capitalized.
              </p>
              <p className={styles.block_1570}>
                Correct: Встретимся на самой южной
              </p>
              <p className={styles.block_416}>станции.</p>
              <p className={styles.block_1571}>Correct: Южный военный округ</p>
              <p className={styles.block_1572}>Correct: посёлок Восточный</p>
              <p className={styles.block_1573}>Web</p>
              <p className={styles.block_1574}>
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.
              </p>
              <p className={styles.block_1575}>
                <span className={styles.text_4}>Correct: www.google.ru </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  в в в точка гугл точка ру{' '}
                </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1576}>
                <span className={styles.text_4}>Correct: amazon.com </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>амазон точка ком </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1253}>
                <span className={styles.text_4}>
                  Correct: odnoklassniki.ru{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>одноклассники точка ру </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1577}>
                <span className={styles.text_4}>Correct: http://123.com </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  эйч ти ти пи двоеточие слеш{' '}
                </span>
              </p>
              <p className={styles.block_1578}>
                <span className={styles.text_1}>
                  слеш один два три точка ком{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1579}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  ха тэ тэ пэ двоеточие слеш{' '}
                </span>
              </p>
              <p className={styles.block_1580}>
                <span className={styles.text_1}>
                  слеш раз два три точка ком{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1581}>
                <span className={styles.text_4}>
                  Correct: ivan@naprimer.org{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>иван собака например орг </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1582}>
                Correct: Лучшие #горы и #море только в
              </p>
              <p className={styles.block_779}>Сочи.</p>
              <p className={styles.block_1583}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>лучшие хэштег горы и </span>
              </p>
              <p className={styles.block_1584}>
                <span className={styles.text_1}>
                  хэштег море только в сочи{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1585}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>лучшие решётка горы и </span>
              </p>
              <p className={styles.block_1586}>
                <span className={styles.text_1}>
                  решётка море только в сочи{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1587}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  лучшие тег горы и тег море{' '}
                </span>
              </p>
              <p className={styles.block_1588}>
                <span className={styles.text_1}>только в сочи </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1589}>
                Explanation: The words "хэштег", "решётка",
              </p>
              <p className={styles.block_1590}>
                and "тег" should trigger hashtags.
              </p>
              <p className={styles.block_1591}>
                Correct: Весь день на работе засыпаю.
              </p>
              <p className={styles.block_1592}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>весь день на работе </span>
              </p>
              <p className={styles.block_1593}>#ненавижупонедельник</p>
              <p className={styles.block_1594}>
                <span className={styles.text_1}>
                  засыпаю решётка ненавижу понедельник{' '}
                </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1595}>
                Explanation: If a hashtag contains multiple
              </p>
              <p className={styles.block_1596}>
                words, do not use spaces between the words.
              </p>
              <p className={styles.block_1597}>
                Correct: Идём на выставку в #Эрмитаж.
              </p>
              <p className={styles.block_1598}>
                Incorrect: Идём на выставку в #Эрмитаж
              </p>
              <p className={styles.block_1160}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>
                  идём на выставку в хэштег{' '}
                </span>
              </p>
              <p className={styles.block_1599}>
                <span className={styles.text_1}>эрмитаж </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1600}>
                Explanation: Use sentence punctuation as
              </p>
              <p className={styles.block_1601}>
                usual. If a hashtag is grammatically part of a
              </p>
              <p className={styles.block_1602}>
                sentence, treat it as such when adding
              </p>
              <p className={styles.block_1603}>punctuation.</p>
              <p className={styles.block_1316}>
                <span className={styles.text_4}>
                  Correct: вид из окна #nofilter{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>вид из окна решётка ноу </span>
              </p>
              <p className={styles.block_1185}>
                <span className={styles.text_1}>фильтер </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1604}>
                Explanation: Use the Latin alphabet for
              </p>
              <p className={styles.block_1605}>
                hashtags that are generally spelled using the
              </p>
              <p className={styles.block_1606}>Latin alphabet.</p>
              <p className={styles.block_1607}>
                <span className={styles.text_4}>
                  Correct: вид из окна с тегом no filter{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>вид из окна с тегом ноу </span>
              </p>
              <p className={styles.block_1185}>
                <span className={styles.text_1}>фильтер </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1608}>
                Explanation: If the speaker does not use the
              </p>
              <p className={styles.block_1609}>
                words "хэштег", "решётка", or "тег" directly
              </p>
              <p className={styles.block_1610}>
                before the hashtag content, do not use a
              </p>
              <p className={styles.block_1611}>
                hashtag in your transcription, even if you think
              </p>
              <p className={styles.block_1612}>a hashtag was intended.</p>
              <p className={styles.block_1613}>
                <span className={styles.text_4}>
                  Correct: вид из окна no filter{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>вид из окна ноу фильтер </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1614}>
                Correct: Мне этот хэштег не нравится. Я не
              </p>
              <p className={styles.block_1615}>люблю хэштеги.</p>
              <p className={styles.block_1616}>
                Explanation: If a speaker uses "хэштег" as a
              </p>
              <p className={styles.block_1617}>
                noun, write out the word "хэштег".
              </p>
              <p className={styles.block_1618}>
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <p className={styles.block_1619}>
                <span className={styles.text_4}>Correct: www.amazon.com </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>вэ вэ вэ амазон ком </span>
                <span className={styles.text_5}>" </span>
              </p>
              <p className={styles.block_1620}>
                <span className={styles.text_}>Example audio: " </span>
                <span className={styles.text_1}>вэ вэ амазон ком </span>
                <span className={styles.text_}>" </span>
              </p>
              <p className={styles.block_1621}>
                <span className={styles.text_4}>
                  Correct: www.google.co.kr{' '}
                </span>
                <span className={styles.text_5}>Example audio: " </span>
                <span className={styles.text_6}>
                  даб даб даб гугл ко кэ эр{' '}
                </span>
                <span className={styles.text_5}>" </span>
              </p>
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
