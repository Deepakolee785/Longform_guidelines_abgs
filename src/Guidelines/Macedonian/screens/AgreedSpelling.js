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
            <PageContentHeader currentPage="longform Macedonian" />
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
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_994}>
                  <span className={styles.text_4}>
                    Correct: Космос к о с м о с{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>космос к о с м о с </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_995}>
                  Explanation: Говорителот го изговорил
                </p>
                <p className={styles.block_996}>
                  името "космос", затоа "К" треба да биде
                </p>
                <p className={styles.block_997}>
                  транскрибирана со голема почетна буква.
                </p>
                <p className={styles.block_998}>
                  Спелуваната верзија треба да има празно
                </p>
                <p className={styles.block_999}>место меѓу буквите.</p>
                <p className={styles.block_1000}>
                  <span className={styles.text_4}>
                    Correct: Како да стигнам до к о с м о с?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    како да стигнам до к о с м о{' '}
                  </span>
                </p>
                <p className={styles.block_1001}>
                  <span className={styles.text_1}>с </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1002}>
                  Explanation: Говорителот го спеловал името
                </p>
                <p className={styles.block_544}>
                  "космос" при формулирање на прашањето.
                </p>
                <p className={styles.block_1003}>
                  Спелуваната верзија треба да биде
                </p>
                <p className={styles.block_1004}>
                  напишана со мали букви и со празно место
                </p>
                <p className={styles.block_1005}>помеѓу нив.</p>
                <p className={styles.block_1006}>
                  <span className={styles.text_4}>
                    Correct: зборови кои завршуваат на њ е{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    зборови кои завршуваат на{' '}
                  </span>
                </p>
                <p className={styles.block_1007}>
                  <span className={styles.text_1}>њ е </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1008}>
                  Explanation: Говорителот кажал фраза и ја
                </p>
                <p className={styles.block_1009}>
                  спеловал наставката "-ње". Спелуваната
                </p>
                <p className={styles.block_1010}>
                  наставка треба да биде напишана со мали
                </p>
                <p className={styles.block_771}>
                  букви и со празно место помеѓу нив.
                </p>
                <p className={styles.block_1011}>
                  Correct: а б в г д ѓ е ж з ѕ и ј к л љ м н њ о п р
                </p>
                <p className={styles.block_1012}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    а б в г д ѓ е ж з ѕ и ј к л љ м н{' '}
                  </span>
                </p>
                <p className={styles.block_1013}>с т ќ у ф х ц ч џ ш</p>
                <p className={styles.block_1014}>
                  <span className={styles.text_1}>
                    њ о п р с т ќ у ф х ц ч џ ш{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1015}>
                  Explanation: Говорителот ја кажува азбуката.
                </p>
                <p className={styles.block_1016}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>амазон точка ком </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1017}>
                  Explanation: Говорителот кажува веб-адреса
                </p>
                <p className={styles.block_1018}>
                  и е транскрибирано како таква.
                </p>
                <p className={styles.block_1019}>
                  <span className={styles.text_4}>Correct: УНЕСКО </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ју нес ко </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1020}>
                  Explanation: Откако говорникот кажува
                </p>
                <p className={styles.block_1021}>
                  иницијализам, говорот се транскрибира
                </p>
                <p className={styles.block_1022}>како таков.</p>
                <p className={styles.block_1023}>
                  <span className={styles.text_4}>
                    Correct: Сите ВИП-гости ќе седат напред.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    сите ви ај пи гости ќе седат{' '}
                  </span>
                </p>
                <p className={styles.block_1024}>
                  <span className={styles.text_1}>напред </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1025}>
                  Explanation: Говорителот ја спелова
                </p>
                <p className={styles.block_1026}>
                  скратеницата "ВИП" и таа е запишана со
                </p>
                <p className={styles.block_278}>
                  мали букви и празно место меѓу нив.
                </p>
                <p className={styles.block_1027}>
                  <span className={styles.text_4}>Correct: ФИФА </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>фифа </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1028}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ф и ф а </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1029}>
                  Explanation: ФИФА е акроним, па се изговара
                </p>
                <p className={styles.block_1030}>
                  како збор. Кога и да го изговори
                </p>
                <p className={styles.block_1031}>
                  говорителот како збор или да го испелова,
                </p>
                <p className={styles.block_1032}>
                  треба да биде транскирбиран со големи
                </p>
                <p className={styles.block_1033}>букви како сите акроними.</p>
                <p className={styles.block_1034}>
                  <span className={styles.text_4}>Correct: МАНУ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ману </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_995}>
                  Explanation: Говорителот го изговорил
                </p>
                <p className={styles.block_1035}>акронимот "МАНУ".</p>
                <p className={styles.block_1036}>
                  <span className={styles.text_4}>Correct: НЦАА </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ен си еј еј </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1037}>
                  Explanation: Ова е акроним и треба да е
                </p>
                <p className={styles.block_1038}>
                  транскрибирано со големи букви.
                </p>
                <p className={styles.block_1039}>Correct: епошта</p>
                <p className={styles.block_1040}>Incorrect: е-пошта</p>
                <p className={styles.block_1041}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>епошта </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1042}>
                  <span className={styles.text_4}>Correct: АРМ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>а р м </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1043}>
                  Explanation: Како и сите други акроними, се
                </p>
                <p className={styles.block_1044}>пишува со големи букви.</p>
                <p className={styles.block_1045}>
                  <span className={styles.text_4}>
                    Correct: A-rod, iPhone, USA, IBM, xkcd, mp3{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Ова се познати имиња или{' '}
                  </span>
                </p>
                <p className={styles.block_1046}>
                  брендови и затоа треба да се
                </p>
                <p className={styles.block_734}>
                  транскрибираат како што се оригинално
                </p>
                <p className={styles.block_1047}>напишани.</p>
                <p className={styles.block_1048}>
                  Whenever a single letter is used that either refers to the
                  letter itself or conveys another meaning, then write it in
                  uppercase.
                </p>
                <p className={styles.block_1049}>
                  Correct: зборови што започнуваат на Ј
                </p>
                <p className={styles.block_1050}>
                  Incorrect: зборови што започнуваат на "ј"
                </p>
                <p className={styles.block_1051}>
                  Correct: Колку пати ја има буквата А во
                </p>
                <p className={styles.block_1052}>зборот банана?</p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_1055}>
                  Correct: хех, ха, хаха, хахаха, хехе, хехехе,
                </p>
                <p className={styles.block_1056}>бухуху, лалала</p>
                <p className={styles.block_1057}>
                  <span className={styles.text_4}>Correct: хахаха </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ха ха ха ха ха </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={styles.block_1058}>Proper names</p>
                <p className={styles.block_1059}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_1060}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_1061}>
                  <span className={styles.text_4}>Correct: The 5.6.7.8's </span>
                  <span className={styles.text_5}>
                    Explanation: The 5.6.7.8's се рок-бенд и{' '}
                  </span>
                </p>
                <p className={styles.block_794}>
                  нивното име треба да биде транскрибирано
                </p>
                <p className={styles.block_373}>
                  според нивниот официјален формат.
                </p>
                <p className={styles.block_1062}>
                  <span className={styles.text_4}>Correct: will.i.am </span>
                  <span className={styles.text_5}>
                    Explanation: will.i.am е музички изведувач и
                  </span>
                </p>
                <p className={styles.block_1063}>
                  неговото име треба да биде транскрибирано
                </p>
                <p className={styles.block_1064}>според официјалниот формат.</p>
                <p className={styles.block_1065}>
                  <span className={styles.text_4}>
                    Correct: Настасја Зјазјољкина{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Името на белоруската шахистка{' '}
                  </span>
                </p>
                <p className={styles.block_1066}>
                  се пишува различно во македонскиот јазик
                </p>
                <p className={styles.block_1067}>
                  "Анастасија", но сепак е транкрибирано
                </p>
                <p className={styles.block_1064}>според официјалниот формат.</p>
                <p className={styles.block_1068}>
                  Foreign proper names should be transcribed in compliance with
                  the Macedonian spelling rules. If unsure, refer to newspaper
                  articles, webpages, celebrity websites, IMDb, Wikipedia etc.
                  When no other source can be used to decide between spelling,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_1069}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  preceded by the word "name" (without quotation marks) (eg. ime
                  Ana )
                </p>
                <p className={styles.block_1070}>Correct: Повикај ја Софија.</p>
                <p className={styles.block_1071}>
                  Incorrect: Повикај ја Софиа.
                </p>
                <p className={styles.block_1072}>
                  Explanation: Пребарувањето "име Софија"
                </p>
                <p className={styles.block_687}>
                  (без наводници) даде повеќе резултати од
                </p>
                <p className={styles.block_1073}>
                  "име Софиа". Транскрибирајте го името со
                </p>
                <p className={styles.block_1074}>најповеќе резултати.</p>
                <p className={styles.block_1075}>Correct: Мекдоналд</p>
                <p className={styles.block_1076}>
                  Explanation: Пребарувањето "име
                </p>
                <p className={styles.block_1077}>Incorrect: МкДоналд</p>
                <p className={styles.block_1078}>
                  Мекдоналд" даде повеќе резултати од "име
                </p>
                <p className={styles.block_1079}>
                  МкДоналд". Ова е пример за презиме, а не
                </p>
                <p className={styles.block_1080}>за ланецот ресторани.</p>
                <p className={styles.block_1081}>
                  <span className={styles.text_4}>
                    Correct: Софија Мекдоналд.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Пребарувајте ги целосните{' '}
                  </span>
                </p>
                <p className={styles.block_563}>
                  имиња за да проверите дали се однесува на
                </p>
                <p className={styles.block_378}>
                  некоја славна личност. Ако целосното име
                </p>
                <p className={styles.block_1082}>
                  не припаѓа на славна личност, тогаш
                </p>
                <p className={styles.block_743}>
                  искористете го она со најчест користен
                </p>
                <p className={styles.block_1083}>
                  правипис за секој дел од името (пр. "име
                </p>
                <p className={styles.block_1084}>Софија" и "име Мекдоналд").</p>
                <p className={styles.block_1085}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal difference" refers to adding or dropping definite
                  suffixes and incorrect use of plurals.
                </p>
                <p className={styles.block_1086}>
                  <span className={styles.text_6}>Example </span>
                  <span className={styles.text_4}>
                    Correct: Господарот на прстенот{' '}
                  </span>
                </p>
                <p className={styles.block_1087}>
                  <span className={styles.text_}>audio: " </span>
                  <span className={styles.text_1}>господарот на прстенот </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1088}>
                  Incorrect: Господарот на прстените
                </p>
                <p className={styles.block_1089}>
                  Explanation: Правилното име на филмот е
                </p>
                <p className={styles.block_1090}>
                  "Господарот на прстените", но иако
                </p>
                <p className={styles.block_1091}>
                  говорителот го погреши треба да стои како
                </p>
                <p className={styles.block_1092}>
                  што е изговорено. Насловот е напишан со
                </p>
                <p className={styles.block_1093}>
                  голема буква според правилата за наслови
                </p>
                <p className={styles.block_1094}>на медиуми.</p>
                <p className={styles.block_1095}>Correct: Матриксот</p>
                <p className={styles.block_1096}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>матриксот </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_928}>Incorrect: Матрикс</p>
                <p className={styles.block_1089}>
                  Explanation: Правилното име на филмот е
                </p>
                <p className={styles.block_1097}>
                  "Матрикс", но говорителот ја членува
                </p>
                <p className={styles.block_1098}>
                  именката, па треба да стои како што е
                </p>
                <p className={styles.block_1099}>
                  изговорено. Насловот е напишан со голема
                </p>
                <p className={styles.block_1100}>
                  буква според правилата за наслови на
                </p>
                <p className={styles.block_1101}>медиуми.</p>
                <p className={styles.block_1102}>Correct: кликни</p>
                <p className={styles.block_1103}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>клини </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1104}>Incorrect: kliknime.com.mk</p>
                <p className={styles.block_1105}>
                  Explanation: Правилното име на страната е
                </p>
                <p className={styles.block_352}>
                  "кликниме" и се пишува со мали букви
                </p>
                <p className={styles.block_1106}>Correct: Мала сирена</p>
                <p className={styles.block_1107}>Incorrect: Малата сирена</p>
                <p className={styles.block_1108}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>мала сирена </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1109}>
                  Explanation: Правилното име на филмот е
                </p>
                <p className={styles.block_1110}>
                  "Малата сирена", но говорителот го
                </p>
                <p className={styles.block_1111}>
                  изостави членувањето, па треба да стои
                </p>
                <p className={styles.block_1112}>
                  како што е изговорено. Насловот е напишан
                </p>
                <p className={styles.block_1113}>
                  со голема буква според правилата за
                </p>
                <p className={styles.block_1114}>наслови на медиуми.</p>
                <p className={styles.block_1115}>Correct: Тајните градини</p>
                <p className={styles.block_1116}>Incorrect: Тајната градина</p>
                <p className={styles.block_1117}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>тајните градини </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1109}>
                  Explanation: Правилното име на филмот е
                </p>
                <p className={styles.block_1118}>
                  "Тајната градина", но говорителот ја
                </p>
                <p className={styles.block_1119}>
                  употреби именката во множина, па треба да
                </p>
                <p className={styles.block_1120}>
                  стои како што е изговорено. Насловот е
                </p>
                <p className={styles.block_1119}>
                  напишан со голема буква според правилата
                </p>
                <p className={styles.block_1121}>за наслови на медиуми.</p>
                <p className={styles.block_1122}>Correct: Кај Цане Боксерот</p>
                <p className={styles.block_1123}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>кај цане боксерот </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1124}>Incorrect: Цане Боксерот</p>
                <p className={styles.block_1125}>
                  Explanation: Правилното име на локалот е
                </p>
                <p className={styles.block_1126}>
                  "Цане Боксерот" но говорителот пред името
                </p>
                <p className={styles.block_1127}>
                  го искористи предлогот "кај", па треба да
                </p>
                <p className={styles.block_1128}>
                  стои како што е изговорено. Насловот е
                </p>
                <p className={styles.block_1129}>
                  напишан со голема буква според правилата
                </p>
                <p className={styles.block_1130}>
                  за имиња на локали и брендови.
                </p>
                <p className={styles.block_1131}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google Search results. If no box
                  appears, defer to Wikipedia's formatting, and if there is no
                  Wikipedia article, use the most common format according to
                  Google Search results.
                </p>
                <p className={styles.block_1132}>
                  Correct: За Бадник таа ќе биде кај пријателка
                </p>
                <p className={styles.block_1133}>ѝ на забава.</p>
                <p className={styles.block_1134}>
                  Correct: Кога е Рамадан Бајрам оваа година?
                </p>
                <p className={styles.block_1135}>Correct: Среќна Ханука!</p>
                <p className={styles.block_1136}>
                  Correct: Среќен Божиќ и среќна Нова
                </p>
                <p className={styles.block_1137}>Година.</p>
                <p className={styles.block_1138}>
                  Capitalize words used as titles and names when they are used
                  that way.
                </p>
                <p className={styles.block_1139}>
                  Correct: Денес бев на ручек со
                </p>
                <p className={styles.block_1140}>
                  претседателот Обама и професорот
                </p>
                <p className={styles.block_1141}>Ексевиер.</p>
                <p className={styles.block_1142}>
                  Explanation: Видете Форма &gt; Кратенки за
                </p>
                <p className={styles.block_1143}>
                  повеќе информации околу наслов пред
                </p>
                <p className={styles.block_1144}>лично име.</p>
                <p className={styles.block_1145}>
                  <span className={styles.text_4}>
                    Correct: тексто-писец Вуди Гудри.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "тексто-писец" не се пишува со
                  </span>
                </p>
                <p className={styles.block_667}>голема почетна буква.</p>
                <p className={styles.block_1146}>Common spellings of names</p>
                <p className={styles.block_1147}>● Аврам</p>
                <p className={styles.block_1148}>● Арон</p>
                <p className={styles.block_1149}>● Александра</p>
                <p className={styles.block_1150}>● Андријана</p>
                <p className={styles.block_1151}>● Антонио</p>
                <p className={styles.block_1152}>● Антониј</p>
                <p className={styles.block_1153}>● Ана Марија</p>
                <p className={styles.block_1154}>● Ангелина</p>
                <p className={styles.block_1155}>● Атанасиј</p>
                <p className={styles.block_1156}>● Ангела</p>
                <p className={styles.block_179}>● Алина</p>
                <p className={styles.block_1157}>● Атанасија</p>
                <p className={styles.block_1158}>● Андреј</p>
                <p className={styles.block_1152}>● Андреја</p>
                <p className={styles.block_1159}>● Агнеса</p>
                <p className={styles.block_179}>● Алиса</p>
                <p className={styles.block_185}>● Анабетина</p>
                <p className={styles.block_1160}>● Анѓа</p>
                <p className={styles.block_445}>● Андреа</p>
                <p className={styles.block_1161}>● Адријан</p>
                <p className={styles.block_1162}>● Ана</p>
                <p className={styles.block_1163}>● Анабела</p>
                <p className={styles.block_1154}>● Ангелина</p>
                <p className={styles.block_1164}>● Анита</p>
                <p className={styles.block_1165}>● Аника</p>
                <p className={styles.block_1148}>● Асад</p>
                <p className={styles.block_445}>● Ариана</p>
                <p className={styles.block_1166}>● Барбара</p>
                <p className={styles.block_1156}>● Бисера</p>
                <p className={styles.block_1151}>● Бернард</p>
                <p className={styles.block_1167}>● Бојан</p>
                <p className={styles.block_1168}>● Бранко</p>
                <p className={styles.block_1164}>● Борче</p>
                <p className={styles.block_1147}>● Божин</p>
                <p className={styles.block_1164}>● Борис</p>
                <p className={styles.block_1156}>● Богдан</p>
                <p className={styles.block_1169}>● Благој</p>
                <p className={styles.block_1170}>● Благородна</p>
                <p className={styles.block_1171}>● Благица</p>
                <p className={styles.block_1172}>● Борјан</p>
                <p className={styles.block_1161}>● Благуна</p>
                <p className={styles.block_1173}>● Катина</p>
                <p className={styles.block_1174}>● Крсте</p>
                <p className={styles.block_441}>● Камелија</p>
                <p className={styles.block_445}>● Кузман</p>
                <p className={styles.block_1175}>● Кита</p>
                <p className={styles.block_1176}>● Кара</p>
                <p className={styles.block_1164}>● Карла</p>
                <p className={styles.block_1177}>● Климентина</p>
                <p className={styles.block_1178}>● Каролина</p>
                <p className={styles.block_1179}>● Каролина</p>
                <p className={styles.block_1180}>● Костадинка</p>
                <p className={styles.block_1168}>● Косара</p>
                <p className={styles.block_1181}>● Катерина</p>
                <p className={styles.block_1156}>● Катина</p>
                <p className={styles.block_1182}>● Климент</p>
                <p className={styles.block_179}>● Кирил</p>
                <p className={styles.block_1173}>● Кристи</p>
                <p className={styles.block_1154}>● Кристина</p>
                <p className={styles.block_1154}>● Христина</p>
                <p className={styles.block_1164}>● Клара</p>
                <p className={styles.block_1183}>● Крстана</p>
                <p className={styles.block_1160}>● Ката</p>
                <p className={styles.block_179}>● Колин</p>
                <p className={styles.block_1184}>● Константина</p>
                <p className={styles.block_448}>● Кора</p>
                <p className={styles.block_1185}>● Кори</p>
                <p className={styles.block_1177}>● Каранфилка</p>
                <p className={styles.block_1186}>● Клемент</p>
                <p className={styles.block_179}>● Круме</p>
                <p className={styles.block_1168}>● Дамјан</p>
                <p className={styles.block_1182}>● Даниела</p>
                <p className={styles.block_1158}>● Дафни</p>
                <p className={styles.block_1187}>● Дара</p>
                <p className={styles.block_1188}>● Даријан</p>
                <p className={styles.block_1171}>● Дамјана</p>
                <p className={styles.block_1189}>● Дениса</p>
                <p className={styles.block_1169}>● Денис</p>
                <p className={styles.block_1171}>● Драгана</p>
                <p className={styles.block_1168}>● Драган</p>
                <p className={styles.block_1190}>● Дијана</p>
                <p className={styles.block_1169}>● Добре</p>
                <p className={styles.block_1164}>● Драги</p>
                <p className={styles.block_1182}>● Деспина</p>
                <p className={styles.block_1158}>● Душан</p>
                <p className={styles.block_445}>● Евгениј</p>
                <p className={styles.block_179}>● Евтим</p>
                <p className={styles.block_1191}>● Емил</p>
                <p className={styles.block_1162}>● Ели</p>
                <p className={styles.block_1164}>● Елица</p>
                <p className={styles.block_1150}>● Елисавета</p>
                <p className={styles.block_1174}>● Ерика</p>
                <p className={styles.block_1192}>● Елисеј</p>
                <p className={styles.block_1154}>● Елеонора</p>
                <p className={styles.block_1172}>● Филип</p>
                <p className={styles.block_1193}>● Филименка</p>
                <p className={styles.block_1192}>● Фреди</p>
                <p className={styles.block_1172}>● Фрида</p>
                <p className={styles.block_1176}>● Габи</p>
                <p className={styles.block_441}>● Габриела</p>
                <p className={styles.block_1194}>● Горан</p>
                <p className={styles.block_445}>● Георгиј</p>
                <p className={styles.block_1159}>● Глигор</p>
                <p className={styles.block_1156}>● Христо</p>
                <p className={styles.block_1175}>● Хана</p>
                <p className={styles.block_1195}>● Христијан</p>
                <p className={styles.block_1196}>● Христијана</p>
                <p className={styles.block_1189}>● Хилари</p>
                <p className={styles.block_1163}>● Изабела</p>
                <p className={styles.block_1148}>● Џеки</p>
                <p className={styles.block_1197}>● Жаклина</p>
                <p className={styles.block_1158}>● Живко</p>
                <p className={styles.block_1198}>● Жанета</p>
                <p className={styles.block_1199}>● Живка</p>
                <p className={styles.block_1198}>● Жанета</p>
                <p className={styles.block_1173}>● Џевгие</p>
                <p className={styles.block_1171}>● Јаворка</p>
                <p className={styles.block_1187}>● Џени</p>
                <p className={styles.block_1197}>● Џенифер</p>
                <p className={styles.block_1200}>● Џери</p>
                <p className={styles.block_1174}>● Јовка</p>
                <p className={styles.block_1168}>● Џесика</p>
                <p className={styles.block_1167}>● Џими</p>
                <p className={styles.block_1201}>● Јоана</p>
                <p className={styles.block_1154}>● Јорданка</p>
                <p className={styles.block_1168}>● Јордан</p>
                <p className={styles.block_1174}>● Јаков</p>
                <p className={styles.block_1186}>● Јулијана</p>
                <p className={styles.block_1197}>● Џулијана</p>
                <p className={styles.block_1182}>● Кристоф</p>
                <p className={styles.block_1154}>● Кристина</p>
                <p className={styles.block_1165}>● Карин</p>
                <p className={styles.block_1160}>● Кате</p>
                <p className={styles.block_1176}>● Кати</p>
                <p className={styles.block_1154}>● Кристина</p>
                <p className={styles.block_1173}>● Криста</p>
                <p className={styles.block_1196}>● Кристијана</p>
                <p className={styles.block_1164}>● Лаура</p>
                <p className={styles.block_1161}>● Лилјана</p>
                <p className={styles.block_1194}>● Лазар</p>
                <p className={styles.block_1148}>● Лена</p>
                <p className={styles.block_1176}>● Лука</p>
                <p className={styles.block_1148}>● Лена</p>
                <p className={styles.block_1200}>● Лина</p>
                <p className={styles.block_1202}>● Лили</p>
                <p className={styles.block_1148}>● Лиса</p>
                <p className={styles.block_1200}>● Лизи</p>
                <p className={styles.block_1187}>● Лори</p>
                <p className={styles.block_1176}>● Луис</p>
                <p className={styles.block_1176}>● Луси</p>
                <p className={styles.block_1190}>● Лидија</p>
                <p className={styles.block_1198}>● Леонид</p>
                <p className={styles.block_1169}>● Митре</p>
                <p className={styles.block_1199}>● Марин</p>
                <p className={styles.block_1147}>● Марко</p>
                <p className={styles.block_1154}>● Маријана</p>
                <p className={styles.block_1154}>● Маријана</p>
                <p className={styles.block_1191}>● Марк</p>
                <p className={styles.block_1203}>● Методиј</p>
                <p className={styles.block_1191}>● Маре</p>
                <p className={styles.block_1152}>● Милева</p>
                <p className={styles.block_1160}>● Маја</p>
                <p className={styles.block_1192}>● Марта</p>
                <p className={styles.block_1198}>● Мелиса</p>
                <p className={styles.block_1172}>● Милка</p>
                <p className={styles.block_1204}>● Михаела</p>
                <p className={styles.block_1205}>● Милица</p>
                <p className={styles.block_1152}>● Милена</p>
                <p className={styles.block_1152}>● Моника</p>
                <p className={styles.block_1197}>● Наталија</p>
                <p className={styles.block_1206}>● Натали</p>
                <p className={styles.block_445}>● Никола</p>
                <p className={styles.block_1157}>● Николина</p>
                <p className={styles.block_1187}>● Ники</p>
                <p className={styles.block_1200}>● Нада</p>
                <p className={styles.block_1163}>● Неделка</p>
                <p className={styles.block_1197}>● Партениј</p>
                <p className={styles.block_1164}>● Пауна</p>
                <p className={styles.block_1189}>● Прохор</p>
                <p className={styles.block_1172}>● Филип</p>
                <p className={styles.block_1188}>● Рахаела</p>
                <p className={styles.block_1191}>● Рајна</p>
                <p className={styles.block_1186}>● Рафаела</p>
                <p className={styles.block_1207}>● Ратко</p>
                <p className={styles.block_1174}>● Ристе</p>
                <p className={styles.block_1203}>● Ристана</p>
                <p className={styles.block_1164}>● Рубин</p>
                <p className={styles.block_1172}>● Ромил</p>
                <p className={styles.block_1172}>● Самир</p>
                <p className={styles.block_448}>● Сара</p>
                <p className={styles.block_1172}>● Сирма</p>
                <p className={styles.block_1164}>● Сотир</p>
                <p className={styles.block_1164}>● Спасе</p>
                <p className={styles.block_1147}>● Стојан</p>
                <p className={styles.block_1164}>● Славе</p>
                <p className={styles.block_1172}>● Симон</p>
                <p className={styles.block_1152}>● Симона</p>
                <p className={styles.block_1186}>● Славица</p>
                <p className={styles.block_445}>● Сандра</p>
                <p className={styles.block_1168}>● Сребра</p>
                <p className={styles.block_1156}>● Софија</p>
                <p className={styles.block_1208}>● Соња</p>
                <p className={styles.block_1179}>● Стефанка</p>
                <p className={styles.block_1209}>● Споменка</p>
                <p className={styles.block_440}>● Стефанија</p>
                <p className={styles.block_1189}>● Стефан</p>
                <p className={styles.block_1176}>● Сузи</p>
                <p className={styles.block_1156}>● Сузана</p>
                <p className={styles.block_1182}>● Сончица</p>
                <p className={styles.block_1189}>● Тамара</p>
                <p className={styles.block_445}>● Татјана</p>
                <p className={styles.block_1191}>● Тања</p>
                <p className={styles.block_1159}>● Тереза</p>
                <p className={styles.block_1210}>● Тифани</p>
                <p className={styles.block_1148}>● Тони</p>
                <p className={styles.block_179}>● Тодор</p>
                <p className={styles.block_1211}>● Трендафилка</p>
                <p className={styles.block_448}>● Вики</p>
                <p className={styles.block_1161}>● Вивијан</p>
                <p className={styles.block_1212}>● Валентина</p>
                <p className={styles.block_1176}>● Вера</p>
                <p className={styles.block_1194}>● Зоран</p>
                <p className={styles.block_1213}>● Захариј</p>
                <p className={styles.block_1161}>● Загорка</p>
                <p className={styles.block_1162}>● Зои</p>
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
                <p className={styles.block_1216}>
                  Correct: Тој работи во Амазон.
                </p>
                <p className={styles.block_1217}>
                  Incorrect: тој работи во амазон.
                </p>
                <p className={styles.block_1218}>
                  Explanation: Во овој пример името на
                </p>
                <p className={styles.block_1219}>
                  компанијата "Амазон" се пишува со голема
                </p>
                <p className={styles.block_1220}>
                  почетна буква, како што е на нивната
                </p>
                <p className={styles.block_1221}>веб-страница.</p>
                <p className={styles.block_1222}>
                  Correct: Чув Јаху и Ти-мобајл се договориле.
                </p>
                <p className={styles.block_864}>
                  Explanation: Се пишуваат со голема почетна
                </p>
                <p className={styles.block_1223}>
                  Incorrect: чув јаху и ти-мобајл се
                </p>
                <p className={styles.block_1224}>договориле.</p>
                <p className={styles.block_1225}>
                  буква и со тире се пишува "Ти-мобајл" затоа
                </p>
                <p className={styles.block_1226}>
                  што така стои на официјалната
                </p>
                <p className={styles.block_1227}>веб-страница.</p>
                <p className={styles.block_1228}>
                  Correct: Често јадам во Бургер Кинг и
                </p>
                <p className={styles.block_1229}>Сабвеј.</p>
                <p className={styles.block_1230}>Correct: ЈуТуб</p>
                <p className={styles.block_1231}>Incorrect: Ју Туб</p>
                <p className={styles.block_1232}>Incorrect: Ју-туб</p>
                <p className={styles.block_606}>
                  Explanation: "ЈуТуб" се транскрибира како
                </p>
                <p className={styles.block_232}>
                  што стои на нивната веб-страница, односно
                </p>
                <p className={styles.block_1233}>
                  со голема буква "Т" на средина од зборот и
                </p>
                <p className={styles.block_1234}>без празно место.</p>
                <p className={styles.block_1235}>Correct: крејгслист</p>
                <p className={styles.block_1236}>Incorrect: крејгс лист</p>
                <p className={styles.block_859}>
                  Explanation: Официјалиот наслов на
                </p>
                <p className={styles.block_289}>
                  веб-страницата е напишана со мали букви и
                </p>
                <p className={styles.block_1237}>
                  без празни места, т.е. "крејгслист".
                </p>
                <p className={styles.block_1238}>Correct: ААМКО</p>
                <p className={styles.block_1239}>Incorrect: Аамко</p>
                <p className={styles.block_1240}>
                  Explanation: Иако се изговара како еден
                </p>
                <p className={styles.block_687}>
                  збор, насловот е напишан со големи букви
                </p>
                <p className={styles.block_1241}>
                  во нивната полиса за заштита на податоци
                </p>
                <p className={styles.block_1242}>
                  и така треба да биде транскрибирано.
                </p>
                <p className={styles.block_1243}>Correct: СЕТЕК</p>
                <p className={styles.block_1244}>
                  Explanation: Насловот е транскрибиран како
                </p>
                <p className={styles.block_1245}>Incorrect: Се.тек.</p>
                <p className={styles.block_1246}>
                  "СЕТЕК" како што стои во нивната полиса за
                </p>
                <p className={styles.block_1247}>заштита на податоци.</p>
                <p className={styles.block_1248}>
                  Correct: Тимот е спонзориран од
                </p>
                <p className={styles.block_1249}>ЈунајтедХелткер.</p>
                <p className={styles.block_1250}>
                  Incorrect: Тимот е спонзориран од Јунајтед
                </p>
                <p className={styles.block_1251}>Хелткер.</p>
                <p className={styles.block_1252}>
                  Explanation: Правилната транскрипција на
                </p>
                <p className={styles.block_1253}>
                  насловот е без празни места помеѓу
                </p>
                <p className={styles.block_750}>
                  зборовите затоа што е официјална форма на
                </p>
                <p className={styles.block_1254}>
                  компанијата која стои во полисата за
                </p>
                <p className={styles.block_1247}>заштита на податоци.</p>
                <p className={styles.block_1255}>Correct: Бургер Кинг</p>
                <p className={styles.block_1256}>Incorrect: БУРГЕР КИНГ</p>
                <p className={styles.block_1257}>
                  Explanation: Логото на компанијата е
                </p>
                <p className={styles.block_762}>
                  напишано со големи букви, но во полисата
                </p>
                <p className={styles.block_1258}>
                  за заштита на подаци нивното стои "Бургер
                </p>
                <p className={styles.block_1259}>
                  Кинг" и затоа така треба да биде
                </p>
                <p className={styles.block_1260}>транскрибрано.</p>
                <p className={styles.block_1261}>Correct: ЛЕГО</p>
                <p className={styles.block_1262}>
                  Explanation: Според полисата за заштита на
                </p>
                <p className={styles.block_1263}>Incorrect: Лего</p>
                <p className={styles.block_1246}>
                  подаци стои логото со големи букви и затоа
                </p>
                <p className={styles.block_1264}>
                  така треба да биде транскрибирано.
                </p>
                <p className={styles.block_1265}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_1266}>Correct: Ok Google</p>
                <p className={styles.block_230}>Incorrect: Okay, Google</p>
                <p className={styles.block_1267}>
                  Explanation: "Ok" се наоѓа пред "Google" и се
                </p>
                <p className={styles.block_1268}>пишува "Ок" а не "okay".</p>
                <p className={styles.block_1269}>Incorrect: OK Google</p>
                <p className={styles.block_1270}>Correct: Ok Google Now</p>
                <p className={styles.block_1271}>Incorrect: Okay, Google.</p>
                <p className={styles.block_405}>
                  Explanation: Фразата "Ok Google" е изведенка
                </p>
                <p className={styles.block_941}>
                  од "Ok Google" и така соодветно да се
                </p>
                <p className={styles.block_1272}>транскрибира.</p>
                <p className={styles.block_1273}>
                  Correct: Ok Google, каде е Старбакс?
                </p>
                <p className={styles.block_1274}>
                  Incorrect: Ok Google каде е Старбакс?
                </p>
                <p className={styles.block_1275}>
                  Incorrect: Ok Google, Каде е Старбакс?
                </p>
                <p className={styles.block_1276}>
                  Explanation: Правилна транскрипција и
                </p>
                <p className={styles.block_961}>
                  впишување на запирка после фразата "Ok
                </p>
                <p className={styles.block_1277}>
                  Google" и "каде'' не се пишува со голема
                </p>
                <p className={styles.block_1278}>почетна буква.</p>
                <p className={styles.block_1279}>Correct: Ok Google, тикви</p>
                <p className={styles.block_1104}>Incorrect: Ok Google тикви</p>
                <p className={styles.block_344}>
                  Incorrect: Иако "тикви" е само збор, ставете
                </p>
                <p className={styles.block_1280}>
                  запирка меѓу "Ok Google" и "тикви".
                </p>
                <p className={styles.block_1281}>Correct: Океј.</p>
                <p className={styles.block_1282}>Incorrect: Ок.</p>
                <p className={styles.block_1283}>
                  Explanation: Затоа што "океј" не е дел од
                </p>
                <p className={styles.block_1284}>
                  фразата "Ok Google" се транскрибира како
                </p>
                <p className={styles.block_1285}>"океј".</p>
                <p className={styles.block_1286}>
                  Spellings of common Brand and Product names
                </p>
                <p className={styles.block_1164}>● Стоби</p>
                <p className={styles.block_1287}>● Витаминка</p>
                <p className={styles.block_1157}>● Алкалоид</p>
                <p className={styles.block_1189}>● Адидас</p>
                <p className={styles.block_1198}>● Амазон</p>
                <p className={styles.block_1288}>● Андроид Маркет</p>
                <p className={styles.block_1289}>● Не лути се човече</p>
                <p className={styles.block_1190}>● Мамас</p>
                <p className={styles.block_1171}>● Берклис</p>
                <p className={styles.block_1290}>● ББЦ 1 / Би-би-си 1</p>
                <p className={styles.block_1198}>● Тиквеш</p>
                <p className={styles.block_1291}>● Златен даб</p>
                <p className={styles.block_1154}>● Блекбери</p>
                <p className={styles.block_1292}>● Блинк-182</p>
                <p className={styles.block_1149}>● Бургер Кинг</p>
                <p className={styles.block_1164}>● Касио</p>
                <p className={styles.block_1199}>● Шанел</p>
                <p className={styles.block_1293}>● Хром</p>
                <p className={styles.block_1163}>● Цитроен</p>
                <p className={styles.block_1294}>● Чунга лунга</p>
                <p className={styles.block_1150}>● Кока Кола</p>
                <p className={styles.block_1210}>● Матица</p>
                <p className={styles.block_1295}>● БТВ</p>
                <p className={styles.block_1296}>● Доминос</p>
                <p className={styles.block_1297}>● Dragon Quest IX</p>
                <p className={styles.block_1203}>● Сигнори</p>
                <p className={styles.block_1298}>● електронска цигара</p>
                <p className={styles.block_1148}>● Earth</p>
                <p className={styles.block_445}>● easyJet</p>
                <p className={styles.block_1299}>● Модерна жена</p>
                <p className={styles.block_1180}>● Пелистерка</p>
                <p className={styles.block_1161}>● БиМилк</p>
                <p className={styles.block_1198}>● Фејсбук</p>
                <p className={styles.block_1165}>● ФИФА</p>
                <p className={styles.block_1187}>● Авон</p>
                <p className={styles.block_1212}>● Формула 1</p>
                <p className={styles.block_1159}>● Гимејл</p>
                <p className={styles.block_1158}>● Google</p>
                <p className={styles.block_1300}>● Гугл Апликации</p>
                <p className={styles.block_1301}>● Гугл Календар</p>
                <p className={styles.block_1150}>● Гугл Земја</p>
                <p className={styles.block_1302}>● Гугл слики</p>
                <p className={styles.block_1196}>● Гугл пошта</p>
                <p className={styles.block_1303}>● Гугл пребарувач</p>
                <p className={styles.block_1304}>● Гугл учичен поглед</p>
                <p className={styles.block_1305}>● Гугл палетка со алатки</p>
                <p className={styles.block_1209}>● GSMArena</p>
                <p className={styles.block_1161}>● GSX-R/4</p>
                <p className={styles.block_1164}>● GTA V</p>
                <p className={styles.block_1147}>● Вегета</p>
                <p className={styles.block_1306}>● Харибо</p>
                <p className={styles.block_1191}>● Хокај</p>
                <p className={styles.block_1158}>● Аргета</p>
                <p className={styles.block_1174}>● Дукат</p>
                <p className={styles.block_1148}>● Икеа</p>
                <p className={styles.block_1160}>● iMac</p>
                <p className={styles.block_1165}>● ИМДб</p>
                <p className={styles.block_1307}>● iOS</p>
                <p className={styles.block_1167}>● Ајпед</p>
                <p className={styles.block_1174}>● Ајфон</p>
                <p className={styles.block_1192}>● iPlayer</p>
                <p className={styles.block_179}>● Ариел</p>
                <p className={styles.block_1154}>● ITV Player</p>
                <p className={styles.block_1179}>● Цедевита</p>
                <p className={styles.block_1210}>● Кит Кет</p>
                <p className={styles.block_1191}>● Краш</p>
                <p className={styles.block_445}>● Виледа</p>
                <p className={styles.block_1176}>● Лего</p>
                <p className={styles.block_1181}>● Леголенд</p>
                <p className={styles.block_1204}>● Линкдин</p>
                <p className={styles.block_1197}>● Maroon 5</p>
                <p className={styles.block_1308}>● Мекдоналдс</p>
                <p className={styles.block_1147}>● Смоки</p>
                <p className={styles.block_1295}>● РЕК</p>
                <p className={styles.block_1169}>● Томос</p>
                <p className={styles.block_1309}>● Југо</p>
                <p className={styles.block_1151}>● Несквик</p>
                <p className={styles.block_1157}>● Нетфликс</p>
                <p className={styles.block_1309}>● Најк</p>
                <p className={styles.block_1310}>● Oral-B</p>
                <p className={styles.block_1210}>● Дорина</p>
                <p className={styles.block_1148}>● Кики</p>
                <p className={styles.block_1311}>● Плејстејшн 4</p>
                <p className={styles.block_1311}>● Плејстејшн 1</p>
                <p className={styles.block_1312}>● Дневен весник</p>
                <p className={styles.block_1163}>● Порнхаб</p>
                <p className={styles.block_1199}>● Порше</p>
                <p className={styles.block_1196}>● Пауерпојнт</p>
                <p className={styles.block_1162}>● PS4</p>
                <p className={styles.block_1313}>● Рејбан</p>
                <p className={styles.block_1157}>● RealPlayer</p>
                <p className={styles.block_1314}>● Rolls-Royce</p>
                <p className={styles.block_1288}>● Самсунг галакси</p>
                <p className={styles.block_1315}>● Самсунг галакси С 2</p>
                <p className={styles.block_1315}>● Самсунг галакси С 3</p>
                <p className={styles.block_1316}>● Самсунг галакси С4</p>
                <p className={styles.block_199}>● Самсунг галакси С5</p>
                <p className={styles.block_1197}>● СимСити</p>
                <p className={styles.block_1148}>● Сири</p>
                <p className={styles.block_1317}>● Паметен автомобил</p>
                <p className={styles.block_1209}>● ДукиДасо</p>
                <p className={styles.block_1154}>● Starbucks</p>
                <p className={styles.block_1157}>● Ти-мобајл</p>
                <p className={styles.block_1318}>● Texas hold 'em</p>
                <p className={styles.block_1182}>● TomTom</p>
                <p className={styles.block_1319}>● Тур де Франс</p>
                <p className={styles.block_447}>● Toys "R" Us</p>
                <p className={styles.block_1186}>● Тамблер</p>
                <p className={styles.block_1156}>● Твитер</p>
                <p className={styles.block_1180}>● Virgin Media</p>
                <p className={styles.block_1176}>● Виза</p>
                <p className={styles.block_1178}>● WhatsApp</p>
                <p className={styles.block_1320}>● WrestleMania XXX</p>
                <p className={styles.block_1171}>● WWE '13</p>
                <p className={styles.block_1176}>● Xbox</p>
                <p className={styles.block_1155}>● Xbox 360</p>
                <p className={styles.block_1197}>● Xbox One</p>
                <p className={styles.block_443}>● Јаху</p>
                <p className={styles.block_1188}>● YouPorn</p>
                <p className={styles.block_1293}>● Јутуб</p>
                <p className={styles.block_1167}>● Zagat</p>
                <p className={styles.block_1148}>● ZBox</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_1323}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_1324}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_1325}>
                  Correct: Слика од екранот на Call of Duty:
                </p>
                <p className={styles.block_1326}>Black Ops 2.</p>
                <p className={styles.block_1327}>
                  Incorrect: "слика од екранот на "Call of Duty:
                </p>
                <p className={styles.block_1328}>Black Ops 2"</p>
                <p className={styles.block_1329}>
                  Explanation: Не користете наводиници при
                </p>
                <p className={styles.block_1330}>
                  транскрибирање на видеоигри.
                </p>
                <p className={styles.block_1331}>
                  Correct: Пуштете ја Тајно моја од Тоше.
                </p>
                <p className={styles.block_1332}>
                  Incorrect: Пуштете ја "Тајно моја" од Тоше.
                </p>
                <p className={styles.block_1105}>
                  Explanation: Не се користат наводници при
                </p>
                <p className={styles.block_1333}>транскрипција на песни.</p>
                <p className={styles.block_1334}>
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
                <p className={styles.block_1335}>
                  Correct: Провери која година излезе Ќе
                </p>
                <p className={styles.block_1336}>танцуваме ли?</p>
                <p className={styles.block_1337}>
                  Correct: Кој глумеше во Боли ли?
                </p>
                <p className={styles.block_1338}>
                  Incorrect: Кој глумеше во Боли ли??
                </p>
                <p className={styles.block_1339}>
                  Explanation: Насловото на филмот "Боли
                </p>
                <p className={styles.block_784}>
                  ли?" има прашалник на крајот и затоа во
                </p>
                <p className={styles.block_1340}>
                  овој пример не ставаме уште еден
                </p>
                <p className={styles.block_1341}>
                  прашалник после прашањето на
                </p>
                <p className={styles.block_1342}>
                  говорителот. Траба да се транскрибира
                </p>
                <p className={styles.block_1343}>
                  само прашалникот од насловот.
                </p>
                <p className={styles.block_1344}>
                  Correct: На семејството омилен им е А што е
                </p>
                <p className={styles.block_1345}>
                  Explanation: "А што е со Боб" е наслов кој
                </p>
                <p className={styles.block_1346}>со Боб?</p>
                <p className={styles.block_1347}>
                  Incorrect: На семејството омилен им е "А
                </p>
                <p className={styles.block_532}>што е со Боб?".</p>
                <p className={styles.block_1348}>
                  има прашалник на крајот. Во овој пример
                </p>
                <p className={styles.block_762}>
                  насловот е на крајот на реченицата и само
                </p>
                <p className={styles.block_1349}>
                  прашалникот на насловот се транскрибира.
                </p>
                <p className={styles.block_1350}>
                  Не треба да се транскрибира точка на
                </p>
                <p className={styles.block_1351}>крајот.</p>
                <p className={styles.block_1352}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_1353}>
                  <span className={styles.text_4}>
                    Correct: Трансформери 2{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: наместо "Трансформери:{' '}
                  </span>
                </p>
                <p className={styles.block_1354}>Одмазда на паднатите"</p>
                <p className={styles.block_1355}>
                  <span className={styles.text_4}>
                    Correct: Војна на Ѕвездите Епизода 3{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: наместо "Војна на Ѕвездите:{' '}
                  </span>
                </p>
                <p className={styles.block_369}>Одмаздата на Сит"</p>
                <p className={styles.block_1356}>
                  <span className={styles.text_4}>
                    Correct: What Does The Fox Say?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: наместо: "The Fox (What Does{' '}
                  </span>
                </p>
                <p className={styles.block_1357}>The Fox Say?)"</p>
                <p className={styles.block_1358}>
                  <span className={styles.text_4}>
                    Correct: Следното поколение{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: наместо: "Ѕвездени патеки:{' '}
                  </span>
                </p>
                <p className={styles.block_1359}>Следното поколение"</p>
                <p className={styles.block_1360}>
                  <span className={styles.text_4}>
                    Correct: Исвири ја Teen Spirit од Нирвана.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Правилниот наслов е "Smells like
                  </span>
                </p>
                <p className={styles.block_1361}>Teen Spirit".</p>
                <p className={styles.block_1362}>
                  Correct: Сакам да ја слушам Руси коси од
                </p>
                <p className={styles.block_1363}>Тоше.</p>
                <p className={styles.block_828}>
                  Explanation: Правилниот наслов е "Сонце во
                </p>
                <p className={styles.block_1364}>твоите руси коси".</p>
                <p className={styles.block_1365}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_1366}>
                  Correct: Јутуб сонце во твоите руси коси,
                </p>
                <p className={styles.block_1367}>
                  ангел што љубов мене ми носи.
                </p>
                <p className={styles.block_1368}>
                  Incorrect: Јутуб Сонце во твоите руси коси,
                </p>
                <p className={styles.block_1369}>
                  ангел што љубов мене ми носи.
                </p>
                <p className={styles.block_1368}>
                  Incorrect: Јутуб Сонце во твоите руси коси,
                </p>
                <p className={styles.block_1370}>
                  Ангел што убов мене ми носи.
                </p>
                <p className={styles.block_1371}>
                  Explanation: Ова е текст од песна која
                </p>
                <p className={styles.block_714}>
                  случајно има наслов и треба да се
                </p>
                <p className={styles.block_1372}>
                  форматира како обична реченица.
                </p>
                <p className={styles.block_1373}>
                  Correct: ground control to Major Tom
                </p>
                <p className={styles.block_348}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_1374}>
                  Correct: В бой идут одни старики
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_1377}>Correct: Божиќ</p>
                <p className={styles.block_1239}>Incorrect: Божик</p>
                <p className={styles.block_1378}>
                  Explanation: И "Божиќ" и "Божик" се точни во
                </p>
                <p className={styles.block_1379}>
                  македонскиот јазик, но ве молам
                </p>
                <p className={styles.block_905}>
                  транскрибирајте го како "Божиќ", бидејќи
                </p>
                <p className={styles.block_1380}>
                  тоа го предлага Дигиталниот речник на
                </p>
                <p className={styles.block_1381}>македонскиот јазик.</p>
                <p className={styles.block_1382}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_1383}>
                  Correct: Тој ништо не сфаќа.
                </p>
                <p className={styles.block_1384}>
                  Incorrect: Тој ништо не сваќа.
                </p>
                <p className={styles.block_1385}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>тој ништо не сфаќа </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1386}>
                  Explanation: Иако "сфаќа" и "сваќа" звучат
                </p>
                <p className={styles.block_423}>
                  исто, но според контекстот е очигледно
                </p>
                <p className={styles.block_1387}>
                  дека говорителот мисли на "сфаќа".
                </p>
                <p className={styles.block_1388}>
                  <span className={styles.text_4}>Correct: сфаќа </span>
                  <span className={styles.text_5}>
                    Explanation: Без контекст не можеме да{' '}
                  </span>
                </p>
                <p className={styles.block_1389}>
                  знаеме дали говорителот мислил на "сфаќа"
                </p>
                <p className={styles.block_1390}>
                  или "сваќа". Го транскрибираме зборот со
                </p>
                <p className={styles.block_1391}>
                  најповеќе резултати на Google.
                </p>
                <p className={styles.block_1392}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_1393}>
                  Correct: Pseudotsuga menziesii
                </p>
                <p className={styles.block_1394}>Correct: Escherichia coli</p>
                <p className={styles.block_1395}>Correct: Metronidazole</p>
                <p className={styles.block_1396}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_1397}>Correct: Не се зафркавам</p>
                <p className={styles.block_1398}>Incorrect: Не се смеам.</p>
                <p className={styles.block_1399}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>не се зафркавам </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1400}>
                  Explanation: Првиот пример е дијалектален.
                </p>
                <p className={styles.block_238}>
                  Правилната транскрипција е таа што го
                </p>
                <p className={styles.block_1401}>
                  содржи изразот како што говорителот го
                </p>
                <p className={styles.block_1402}>искористил.</p>
                <p className={styles.block_1403}>Correct: Тој обожуваш кафе.</p>
                <p className={styles.block_389}>Incorrect: Тој обожува кафе</p>
                <p className={styles.block_1404}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>тој обожуваш кафе </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1405}>
                  Explanation: Иако глаголот не е напишан
                </p>
                <p className={styles.block_835}>
                  според македонската граматика, тој е
                </p>
                <p className={styles.block_1406}>
                  транскрибиран е "тој обожуваш" и не се
                </p>
                <p className={styles.block_1407}>
                  менува во неговиот стандарден еквивалент
                </p>
                <p className={styles.block_1408}>"тој обожува".</p>
                <p className={styles.block_1409}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_1410}>Correct: Седам в'двор.</p>
                <p className={styles.block_1411}>Incorrect: Седам во двор.</p>
                <p className={styles.block_1412}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>седам в двор </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1413}>
                  Explanation: "в'двор" е општа кратенка каде
                </p>
                <p className={styles.block_1414}>
                  што се брише вокалот. Не треба да се
                </p>
                <p className={styles.block_276}>
                  транскрибира како "во двор", туку како што
                </p>
                <p className={styles.block_1415}>е изговорено.</p>
                <p className={styles.block_1416}>Correct: Седам во дворот.</p>
                <p className={styles.block_1399}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>седам во дворот </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1417}>Incorrect: Седам в'дворот.</p>
                <p className={styles.block_1418}>
                  Explanation: Овде говорителот ја користи
                </p>
                <p className={styles.block_1419}>
                  членуваната форма на именката и затоа
                </p>
                <p className={styles.block_1401}>
                  треба да се транскрибира како "седам во
                </p>
                <p className={styles.block_1420}>дворот".</p>
                <p className={styles.block_1421}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_1422}>Correct: Ќе дојде подоцна.</p>
                <p className={styles.block_1423}>Incorrect: Ќе дој подоцна.</p>
                <p className={styles.block_1424}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>Ќе дој подоцна </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1425}>
                  Explanation: Тука говорителот користи
                </p>
                <p className={styles.block_961}>
                  кратење на зборот што е познато само во
                </p>
                <p className={styles.block_1426}>
                  еден дел на Македонија. Оваа кратенка не
                </p>
                <p className={styles.block_1427}>
                  се среќава често во пишаните текстови и
                </p>
                <p className={styles.block_373}>
                  затоа се пишува според правописот.
                </p>
                <p className={styles.block_1428}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech.
                </p>
                <p className={styles.block_1422}>Correct: Ќе дојде подоцна.</p>
                <p className={styles.block_1423}>Incorrect: Ќе дој подоцна.</p>
                <p className={styles.block_1424}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>Ќе дој подоцна </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1429}>
                  Explanation: Иако говорителот рекол "дој",
                </p>
                <p className={styles.block_720}>
                  ова не е официјален начин на пишување и
                </p>
                <p className={styles.block_687}>
                  треба да се смени во стандардната форма
                </p>
                <p className={styles.block_1430}>"дојде".</p>
                <p className={styles.block_1431}>Correct: Што правиш?</p>
                <p className={styles.block_1432}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>шо дешаваш </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1433}>Incorrect: Шо дешаваш?</p>
                <p className={styles.block_1434}>
                  Explanation: Иако говорителот рече "шо
                </p>
                <p className={styles.block_1419}>
                  дешаваш", ова не е официјален начин на
                </p>
                <p className={styles.block_1435}>
                  пишување и треба да се смени во
                </p>
                <p className={styles.block_1436}>
                  стандардната форма "правиш".
                </p>
                <p className={styles.block_1437}>Correct: Што правиш?</p>
                <p className={styles.block_1432}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>шо дешаваш </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1433}>Incorrect: Шо дешаваш?</p>
                <p className={styles.block_1434}>
                  Explanation: Иако говорителот рече "шо
                </p>
                <p className={styles.block_1419}>
                  дешаваш", ова не е официјален начин на
                </p>
                <p className={styles.block_1438}>
                  пишување и треба да се смени во
                </p>
                <p className={styles.block_1439}>
                  стандардната форма "правиш".
                </p>
                <p className={styles.block_1440}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_1441}>
                  <span className={styles.text_4}>Correct: Обожува </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>обожава </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1442}>
                  <span className={styles.text_4}>Correct: луд </span>
                  <span className={styles.text_5}>
                    Explanation: "луд" се изговара слично на{' '}
                  </span>
                </p>
                <p className={styles.block_1443}>"лут".</p>
                <p className={styles.block_1444}>
                  <span className={styles.text_4}>
                    Correct: Каде е најблиската библиотека?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>блиблиотека </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1445}>
                  <span className={styles.text_4}>Correct: Кети Пери </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>кејти перу </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1446}>
                  <span className={styles.text_4}>Correct: Благодарам </span>
                  <span className={styles.text_5}>
                    Explanation: Личноста изговори со{' '}
                  </span>
                </p>
                <p className={styles.block_1447}>
                  француски акцент "Бладауам".
                </p>
                <p className={styles.block_1448}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_1449}>Correct: интепетира</p>
                <p className={styles.block_1450}>Incorrect: интерпретира</p>
                <p className={styles.block_1451}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>интепетира </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1452}>
                  Explanation: Иако "интепетира" не е
                </p>
                <p className={styles.block_1453}>
                  стандарден македонски збор, но го има
                </p>
                <p className={styles.block_1454}>
                  глаголскиот суфикс на крајот ("-ира") и
                </p>
                <p className={styles.block_1455}>
                  затоа треба да биде транскрибиран како
                </p>
                <p className={styles.block_1456}>
                  што говорителот го изговорил:
                </p>
                <p className={styles.block_1457}>
                  "интепетира", а не стандардниот збор
                </p>
                <p className={styles.block_1458}>"интерпретира".</p>
                <p className={styles.block_1459}>
                  Correct: Купи пивкири за забавата.
                </p>
                <p className={styles.block_1460}>
                  Explanation: Иако "пивкири " не е
                </p>
                <p className={styles.block_1088}>
                  Incorrect: Купи кикири за забавата.
                </p>
                <p className={styles.block_1461}>
                  Incorrect: Купи пиво за забавата.
                </p>
                <p className={styles.block_1462}>
                  стандарден македонски збор и е
                </p>
                <p className={styles.block_1463}>
                  комбинација на два збора, јасно е дека така
                </p>
                <p className={styles.block_1464}>
                  е изговорен и лесно се спелува, така што се
                </p>
                <p className={styles.block_1465}>
                  транскрибира како што е изговорено.
                </p>
                <p className={styles.block_1466}>Correct: најдалечниот</p>
                <p className={styles.block_1467}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_1468}>
                  <span className={styles.text_4}>Correct: Калоли </span>
                  <span className={styles.text_5}>
                    Explanation: Говорителот рекол "Калоли".{' '}
                  </span>
                </p>
                <p className={styles.block_821}>
                  Ова можеби да звучи како бесмисленица на
                </p>
                <p className={styles.block_1469}>
                  почеток, но после пребарување на Google го
                </p>
                <p className={styles.block_1470}>
                  добиваме резултатот "Калоли", танкер за
                </p>
                <p className={styles.block_1471}>
                  бензин и место на Хаваи. Транскрибирајте
                </p>
                <p className={styles.block_1005}>го "Калоли".</p>
                <p className={styles.block_1472}>
                  <span className={styles.text_4}>Correct: Соук Абдали </span>
                  <span className={styles.text_5}>
                    Explanation: Корисникот го користи изразот{' '}
                  </span>
                </p>
                <p className={styles.block_1473}>
                  "Соук Абдали". Препишувачот (тој што
                </p>
                <p className={styles.block_1474}>
                  транскрибира) го пребарува терминот
                </p>
                <p className={styles.block_550}>
                  "сукабдали" и ги наоѓа точните резултати.
                </p>
                <p className={styles.block_1475}>
                  Транскрибирајте "Соук Абдали".
                </p>
                <p className={styles.block_1476}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1477}>Correct: пицимуљ</p>
                <p className={styles.block_1478}>
                  <span className={styles.text_8}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or singing.{' '}
                  </span>
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
