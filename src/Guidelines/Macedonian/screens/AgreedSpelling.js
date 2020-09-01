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
              <p class="block_990">Agreed spelling</p>
              <p class="block_991">
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <p class="block_992">Spelling out</p>
              <p class="block_993">
                If a word is spelled or obvious pauses are made between letters,
                spell it into letters as it is said (often done for foreign
                names or businesses, for example). Use lowercase letters for the
                spelled-out portion. This rule does not apply to acronyms or
                initialisms, or to spelled-out web or email addresses.
              </p>
              <p class="block_994">
                <span class="text_4">Correct: Космос к о с м о с </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">космос к о с м о с </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_995">Explanation: Говорителот го изговорил</p>
              <p class="block_996">името "космос", затоа "К" треба да биде</p>
              <p class="block_997">транскрибирана со голема почетна буква.</p>
              <p class="block_998">Спелуваната верзија треба да има празно</p>
              <p class="block_999">место меѓу буквите.</p>
              <p class="block_1000">
                <span class="text_4">
                  Correct: Како да стигнам до к о с м о с?{' '}
                </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">како да стигнам до к о с м о </span>
              </p>
              <p class="block_1001">
                <span class="text_1">с </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1002">
                Explanation: Говорителот го спеловал името
              </p>
              <p class="block_544">"космос" при формулирање на прашањето.</p>
              <p class="block_1003">Спелуваната верзија треба да биде</p>
              <p class="block_1004">напишана со мали букви и со празно место</p>
              <p class="block_1005">помеѓу нив.</p>
              <p class="block_1006">
                <span class="text_4">
                  Correct: зборови кои завршуваат на њ е{' '}
                </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">зборови кои завршуваат на </span>
              </p>
              <p class="block_1007">
                <span class="text_1">њ е </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1008">
                Explanation: Говорителот кажал фраза и ја
              </p>
              <p class="block_1009">спеловал наставката "-ње". Спелуваната</p>
              <p class="block_1010">наставка треба да биде напишана со мали</p>
              <p class="block_771">букви и со празно место помеѓу нив.</p>
              <p class="block_1011">
                Correct: а б в г д ѓ е ж з ѕ и ј к л љ м н њ о п р
              </p>
              <p class="block_1012">
                <span class="text_">Example audio: " </span>
                <span class="text_1">а б в г д ѓ е ж з ѕ и ј к л љ м н </span>
              </p>
              <p class="block_1013">с т ќ у ф х ц ч џ ш</p>
              <p class="block_1014">
                <span class="text_1">њ о п р с т ќ у ф х ц ч џ ш </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1015">
                Explanation: Говорителот ја кажува азбуката.
              </p>
              <p class="block_1016">
                <span class="text_4">Correct: amazon.com </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">амазон точка ком </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1017">
                Explanation: Говорителот кажува веб-адреса
              </p>
              <p class="block_1018">и е транскрибирано како таква.</p>
              <p class="block_1019">
                <span class="text_4">Correct: УНЕСКО </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ју нес ко </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1020">Explanation: Откако говорникот кажува</p>
              <p class="block_1021">иницијализам, говорот се транскрибира</p>
              <p class="block_1022">како таков.</p>
              <p class="block_1023">
                <span class="text_4">
                  Correct: Сите ВИП-гости ќе седат напред.{' '}
                </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">сите ви ај пи гости ќе седат </span>
              </p>
              <p class="block_1024">
                <span class="text_1">напред </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1025">Explanation: Говорителот ја спелова</p>
              <p class="block_1026">скратеницата "ВИП" и таа е запишана со</p>
              <p class="block_278">мали букви и празно место меѓу нив.</p>
              <p class="block_1027">
                <span class="text_4">Correct: ФИФА </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">фифа </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1028">
                <span class="text_">Example audio: " </span>
                <span class="text_1">ф и ф а </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1029">
                Explanation: ФИФА е акроним, па се изговара
              </p>
              <p class="block_1030">како збор. Кога и да го изговори</p>
              <p class="block_1031">
                говорителот како збор или да го испелова,
              </p>
              <p class="block_1032">треба да биде транскирбиран со големи</p>
              <p class="block_1033">букви како сите акроними.</p>
              <p class="block_1034">
                <span class="text_4">Correct: МАНУ </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ману </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_995">Explanation: Говорителот го изговорил</p>
              <p class="block_1035">акронимот "МАНУ".</p>
              <p class="block_1036">
                <span class="text_4">Correct: НЦАА </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ен си еј еј </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1037">Explanation: Ова е акроним и треба да е</p>
              <p class="block_1038">транскрибирано со големи букви.</p>
              <p class="block_1039">Correct: епошта</p>
              <p class="block_1040">Incorrect: е-пошта</p>
              <p class="block_1041">
                <span class="text_">Example audio: " </span>
                <span class="text_1">епошта </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1042">
                <span class="text_4">Correct: АРМ </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">а р м </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1043">
                Explanation: Како и сите други акроними, се
              </p>
              <p class="block_1044">пишува со големи букви.</p>
              <p class="block_1045">
                <span class="text_4">
                  Correct: A-rod, iPhone, USA, IBM, xkcd, mp3{' '}
                </span>
                <span class="text_5">
                  Explanation: Ова се познати имиња или{' '}
                </span>
              </p>
              <p class="block_1046">брендови и затоа треба да се</p>
              <p class="block_734">транскрибираат како што се оригинално</p>
              <p class="block_1047">напишани.</p>
              <p class="block_1048">
                Whenever a single letter is used that either refers to the
                letter itself or conveys another meaning, then write it in
                uppercase.
              </p>
              <p class="block_1049">Correct: зборови што започнуваат на Ј</p>
              <p class="block_1050">
                Incorrect: зборови што започнуваат на "ј"
              </p>
              <p class="block_1051">Correct: Колку пати ја има буквата А во</p>
              <p class="block_1052">зборот банана?</p>
              <p class="block_1053">Interjections</p>
              <p class="block_1054">
                Transcribe words representing laughter or other non-speech
                vocalizations with up to three syllables, but no more.
              </p>
              <p class="block_1055">
                Correct: хех, ха, хаха, хахаха, хехе, хехехе,
              </p>
              <p class="block_1056">бухуху, лалала</p>
              <p class="block_1057">
                <span class="text_4">Correct: хахаха </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ха ха ха ха ха </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1058">Proper names</p>
              <p class="block_1059">
                Use official spelling, capitalization, and punctuation for
                proper names. Google them and pay attention to the correct
                format. Official format and spelling of a proper name may
                supersede the usual written transcription conventions detailed
                in this document.
              </p>
              <p class="block_1060">
                Defer to official spellings of celebrity names.
              </p>
              <p class="block_1061">
                <span class="text_4">Correct: The 5.6.7.8's </span>
                <span class="text_5">
                  Explanation: The 5.6.7.8's се рок-бенд и{' '}
                </span>
              </p>
              <p class="block_794">нивното име треба да биде транскрибирано</p>
              <p class="block_373">според нивниот официјален формат.</p>
              <p class="block_1062">
                <span class="text_4">Correct: will.i.am </span>
                <span class="text_5">
                  Explanation: will.i.am е музички изведувач и
                </span>
              </p>
              <p class="block_1063">
                неговото име треба да биде транскрибирано
              </p>
              <p class="block_1064">според официјалниот формат.</p>
              <p class="block_1065">
                <span class="text_4">Correct: Настасја Зјазјољкина </span>
                <span class="text_5">
                  Explanation: Името на белоруската шахистка{' '}
                </span>
              </p>
              <p class="block_1066">се пишува различно во македонскиот јазик</p>
              <p class="block_1067">"Анастасија", но сепак е транкрибирано</p>
              <p class="block_1064">според официјалниот формат.</p>
              <p class="block_1068">
                Foreign proper names should be transcribed in compliance with
                the Macedonian spelling rules. If unsure, refer to newspaper
                articles, webpages, celebrity websites, IMDb, Wikipedia etc.
                When no other source can be used to decide between spelling,
                choose the spelling used in the first hit(s) on Google.
              </p>
              <p class="block_1069">
                If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                preceded by the word "name" (without quotation marks) (eg. ime
                Ana )
              </p>
              <p class="block_1070">Correct: Повикај ја Софија.</p>
              <p class="block_1071">Incorrect: Повикај ја Софиа.</p>
              <p class="block_1072">Explanation: Пребарувањето "име Софија"</p>
              <p class="block_687">(без наводници) даде повеќе резултати од</p>
              <p class="block_1073">"име Софиа". Транскрибирајте го името со</p>
              <p class="block_1074">најповеќе резултати.</p>
              <p class="block_1075">Correct: Мекдоналд</p>
              <p class="block_1076">Explanation: Пребарувањето "име</p>
              <p class="block_1077">Incorrect: МкДоналд</p>
              <p class="block_1078">Мекдоналд" даде повеќе резултати од "име</p>
              <p class="block_1079">МкДоналд". Ова е пример за презиме, а не</p>
              <p class="block_1080">за ланецот ресторани.</p>
              <p class="block_1081">
                <span class="text_4">Correct: Софија Мекдоналд. </span>
                <span class="text_5">
                  Explanation: Пребарувајте ги целосните{' '}
                </span>
              </p>
              <p class="block_563">имиња за да проверите дали се однесува на</p>
              <p class="block_378">некоја славна личност. Ако целосното име</p>
              <p class="block_1082">не припаѓа на славна личност, тогаш</p>
              <p class="block_743">искористете го она со најчест користен</p>
              <p class="block_1083">правипис за секој дел од името (пр. "име</p>
              <p class="block_1084">Софија" и "име Мекдоналд").</p>
              <p class="block_1085">
                If a speaker makes a small mistake in a proper name, capitalize
                it anyway as long as the difference is minimal. "Minimal
                difference" refers to adding or dropping definite suffixes and
                incorrect use of plurals.
              </p>
              <p class="block_1086">
                <span class="text_6">Example </span>
                <span class="text_4">Correct: Господарот на прстенот </span>
              </p>
              <p class="block_1087">
                <span class="text_">audio: " </span>
                <span class="text_1">господарот на прстенот </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1088">Incorrect: Господарот на прстените</p>
              <p class="block_1089">Explanation: Правилното име на филмот е</p>
              <p class="block_1090">"Господарот на прстените", но иако</p>
              <p class="block_1091">
                говорителот го погреши треба да стои како
              </p>
              <p class="block_1092">што е изговорено. Насловот е напишан со</p>
              <p class="block_1093">голема буква според правилата за наслови</p>
              <p class="block_1094">на медиуми.</p>
              <p class="block_1095">Correct: Матриксот</p>
              <p class="block_1096">
                <span class="text_">Example audio: " </span>
                <span class="text_1">матриксот </span>
                <span class="text_">" </span>
              </p>
              <p class="block_928">Incorrect: Матрикс</p>
              <p class="block_1089">Explanation: Правилното име на филмот е</p>
              <p class="block_1097">"Матрикс", но говорителот ја членува</p>
              <p class="block_1098">именката, па треба да стои како што е</p>
              <p class="block_1099">изговорено. Насловот е напишан со голема</p>
              <p class="block_1100">буква според правилата за наслови на</p>
              <p class="block_1101">медиуми.</p>
              <p class="block_1102">Correct: кликни</p>
              <p class="block_1103">
                <span class="text_">Example audio: " </span>
                <span class="text_1">клини </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1104">Incorrect: kliknime.com.mk</p>
              <p class="block_1105">
                Explanation: Правилното име на страната е
              </p>
              <p class="block_352">"кликниме" и се пишува со мали букви</p>
              <p class="block_1106">Correct: Мала сирена</p>
              <p class="block_1107">Incorrect: Малата сирена</p>
              <p class="block_1108">
                <span class="text_">Example audio: " </span>
                <span class="text_1">мала сирена </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1109">Explanation: Правилното име на филмот е</p>
              <p class="block_1110">"Малата сирена", но говорителот го</p>
              <p class="block_1111">изостави членувањето, па треба да стои</p>
              <p class="block_1112">
                како што е изговорено. Насловот е напишан
              </p>
              <p class="block_1113">со голема буква според правилата за</p>
              <p class="block_1114">наслови на медиуми.</p>
              <p class="block_1115">Correct: Тајните градини</p>
              <p class="block_1116">Incorrect: Тајната градина</p>
              <p class="block_1117">
                <span class="text_">Example audio: " </span>
                <span class="text_1">тајните градини </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1109">Explanation: Правилното име на филмот е</p>
              <p class="block_1118">"Тајната градина", но говорителот ја</p>
              <p class="block_1119">
                употреби именката во множина, па треба да
              </p>
              <p class="block_1120">стои како што е изговорено. Насловот е</p>
              <p class="block_1119">напишан со голема буква според правилата</p>
              <p class="block_1121">за наслови на медиуми.</p>
              <p class="block_1122">Correct: Кај Цане Боксерот</p>
              <p class="block_1123">
                <span class="text_">Example audio: " </span>
                <span class="text_1">кај цане боксерот </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1124">Incorrect: Цане Боксерот</p>
              <p class="block_1125">Explanation: Правилното име на локалот е</p>
              <p class="block_1126">
                "Цане Боксерот" но говорителот пред името
              </p>
              <p class="block_1127">
                го искористи предлогот "кај", па треба да
              </p>
              <p class="block_1128">стои како што е изговорено. Насловот е</p>
              <p class="block_1129">напишан со голема буква според правилата</p>
              <p class="block_1130">за имиња на локали и брендови.</p>
              <p class="block_1131">
                Spell and capitalize holidays as they are formatted within the
                answer box above the list of Google Search results. If no box
                appears, defer to Wikipedia's formatting, and if there is no
                Wikipedia article, use the most common format according to
                Google Search results.
              </p>
              <p class="block_1132">
                Correct: За Бадник таа ќе биде кај пријателка
              </p>
              <p class="block_1133">ѝ на забава.</p>
              <p class="block_1134">
                Correct: Кога е Рамадан Бајрам оваа година?
              </p>
              <p class="block_1135">Correct: Среќна Ханука!</p>
              <p class="block_1136">Correct: Среќен Божиќ и среќна Нова</p>
              <p class="block_1137">Година.</p>
              <p class="block_1138">
                Capitalize words used as titles and names when they are used
                that way.
              </p>
              <p class="block_1139">Correct: Денес бев на ручек со</p>
              <p class="block_1140">претседателот Обама и професорот</p>
              <p class="block_1141">Ексевиер.</p>
              <p class="block_1142">
                Explanation: Видете Форма &gt; Кратенки за
              </p>
              <p class="block_1143">повеќе информации околу наслов пред</p>
              <p class="block_1144">лично име.</p>
              <p class="block_1145">
                <span class="text_4">Correct: тексто-писец Вуди Гудри. </span>
                <span class="text_5">
                  Explanation: "тексто-писец" не се пишува со
                </span>
              </p>
              <p class="block_667">голема почетна буква.</p>
              <p class="block_1146">Common spellings of names</p>
              <p class="block_1147">● Аврам</p>
              <p class="block_1148">● Арон</p>
              <p class="block_1149">● Александра</p>
              <p class="block_1150">● Андријана</p>
              <p class="block_1151">● Антонио</p>
              <p class="block_1152">● Антониј</p>
              <p class="block_1153">● Ана Марија</p>
              <p class="block_1154">● Ангелина</p>
              <p class="block_1155">● Атанасиј</p>
              <p class="block_1156">● Ангела</p>
              <p class="block_179">● Алина</p>
              <p class="block_1157">● Атанасија</p>
              <p class="block_1158">● Андреј</p>
              <p class="block_1152">● Андреја</p>
              <p class="block_1159">● Агнеса</p>
              <p class="block_179">● Алиса</p>
              <p class="block_185">● Анабетина</p>
              <p class="block_1160">● Анѓа</p>
              <p class="block_445">● Андреа</p>
              <p class="block_1161">● Адријан</p>
              <p class="block_1162">● Ана</p>
              <p class="block_1163">● Анабела</p>
              <p class="block_1154">● Ангелина</p>
              <p class="block_1164">● Анита</p>
              <p class="block_1165">● Аника</p>
              <p class="block_1148">● Асад</p>
              <p class="block_445">● Ариана</p>
              <p class="block_1166">● Барбара</p>
              <p class="block_1156">● Бисера</p>
              <p class="block_1151">● Бернард</p>
              <p class="block_1167">● Бојан</p>
              <p class="block_1168">● Бранко</p>
              <p class="block_1164">● Борче</p>
              <p class="block_1147">● Божин</p>
              <p class="block_1164">● Борис</p>
              <p class="block_1156">● Богдан</p>
              <p class="block_1169">● Благој</p>
              <p class="block_1170">● Благородна</p>
              <p class="block_1171">● Благица</p>
              <p class="block_1172">● Борјан</p>
              <p class="block_1161">● Благуна</p>
              <p class="block_1173">● Катина</p>
              <p class="block_1174">● Крсте</p>
              <p class="block_441">● Камелија</p>
              <p class="block_445">● Кузман</p>
              <p class="block_1175">● Кита</p>
              <p class="block_1176">● Кара</p>
              <p class="block_1164">● Карла</p>
              <p class="block_1177">● Климентина</p>
              <p class="block_1178">● Каролина</p>
              <p class="block_1179">● Каролина</p>
              <p class="block_1180">● Костадинка</p>
              <p class="block_1168">● Косара</p>
              <p class="block_1181">● Катерина</p>
              <p class="block_1156">● Катина</p>
              <p class="block_1182">● Климент</p>
              <p class="block_179">● Кирил</p>
              <p class="block_1173">● Кристи</p>
              <p class="block_1154">● Кристина</p>
              <p class="block_1154">● Христина</p>
              <p class="block_1164">● Клара</p>
              <p class="block_1183">● Крстана</p>
              <p class="block_1160">● Ката</p>
              <p class="block_179">● Колин</p>
              <p class="block_1184">● Константина</p>
              <p class="block_448">● Кора</p>
              <p class="block_1185">● Кори</p>
              <p class="block_1177">● Каранфилка</p>
              <p class="block_1186">● Клемент</p>
              <p class="block_179">● Круме</p>
              <p class="block_1168">● Дамјан</p>
              <p class="block_1182">● Даниела</p>
              <p class="block_1158">● Дафни</p>
              <p class="block_1187">● Дара</p>
              <p class="block_1188">● Даријан</p>
              <p class="block_1171">● Дамјана</p>
              <p class="block_1189">● Дениса</p>
              <p class="block_1169">● Денис</p>
              <p class="block_1171">● Драгана</p>
              <p class="block_1168">● Драган</p>
              <p class="block_1190">● Дијана</p>
              <p class="block_1169">● Добре</p>
              <p class="block_1164">● Драги</p>
              <p class="block_1182">● Деспина</p>
              <p class="block_1158">● Душан</p>
              <p class="block_445">● Евгениј</p>
              <p class="block_179">● Евтим</p>
              <p class="block_1191">● Емил</p>
              <p class="block_1162">● Ели</p>
              <p class="block_1164">● Елица</p>
              <p class="block_1150">● Елисавета</p>
              <p class="block_1174">● Ерика</p>
              <p class="block_1192">● Елисеј</p>
              <p class="block_1154">● Елеонора</p>
              <p class="block_1172">● Филип</p>
              <p class="block_1193">● Филименка</p>
              <p class="block_1192">● Фреди</p>
              <p class="block_1172">● Фрида</p>
              <p class="block_1176">● Габи</p>
              <p class="block_441">● Габриела</p>
              <p class="block_1194">● Горан</p>
              <p class="block_445">● Георгиј</p>
              <p class="block_1159">● Глигор</p>
              <p class="block_1156">● Христо</p>
              <p class="block_1175">● Хана</p>
              <p class="block_1195">● Христијан</p>
              <p class="block_1196">● Христијана</p>
              <p class="block_1189">● Хилари</p>
              <p class="block_1163">● Изабела</p>
              <p class="block_1148">● Џеки</p>
              <p class="block_1197">● Жаклина</p>
              <p class="block_1158">● Живко</p>
              <p class="block_1198">● Жанета</p>
              <p class="block_1199">● Живка</p>
              <p class="block_1198">● Жанета</p>
              <p class="block_1173">● Џевгие</p>
              <p class="block_1171">● Јаворка</p>
              <p class="block_1187">● Џени</p>
              <p class="block_1197">● Џенифер</p>
              <p class="block_1200">● Џери</p>
              <p class="block_1174">● Јовка</p>
              <p class="block_1168">● Џесика</p>
              <p class="block_1167">● Џими</p>
              <p class="block_1201">● Јоана</p>
              <p class="block_1154">● Јорданка</p>
              <p class="block_1168">● Јордан</p>
              <p class="block_1174">● Јаков</p>
              <p class="block_1186">● Јулијана</p>
              <p class="block_1197">● Џулијана</p>
              <p class="block_1182">● Кристоф</p>
              <p class="block_1154">● Кристина</p>
              <p class="block_1165">● Карин</p>
              <p class="block_1160">● Кате</p>
              <p class="block_1176">● Кати</p>
              <p class="block_1154">● Кристина</p>
              <p class="block_1173">● Криста</p>
              <p class="block_1196">● Кристијана</p>
              <p class="block_1164">● Лаура</p>
              <p class="block_1161">● Лилјана</p>
              <p class="block_1194">● Лазар</p>
              <p class="block_1148">● Лена</p>
              <p class="block_1176">● Лука</p>
              <p class="block_1148">● Лена</p>
              <p class="block_1200">● Лина</p>
              <p class="block_1202">● Лили</p>
              <p class="block_1148">● Лиса</p>
              <p class="block_1200">● Лизи</p>
              <p class="block_1187">● Лори</p>
              <p class="block_1176">● Луис</p>
              <p class="block_1176">● Луси</p>
              <p class="block_1190">● Лидија</p>
              <p class="block_1198">● Леонид</p>
              <p class="block_1169">● Митре</p>
              <p class="block_1199">● Марин</p>
              <p class="block_1147">● Марко</p>
              <p class="block_1154">● Маријана</p>
              <p class="block_1154">● Маријана</p>
              <p class="block_1191">● Марк</p>
              <p class="block_1203">● Методиј</p>
              <p class="block_1191">● Маре</p>
              <p class="block_1152">● Милева</p>
              <p class="block_1160">● Маја</p>
              <p class="block_1192">● Марта</p>
              <p class="block_1198">● Мелиса</p>
              <p class="block_1172">● Милка</p>
              <p class="block_1204">● Михаела</p>
              <p class="block_1205">● Милица</p>
              <p class="block_1152">● Милена</p>
              <p class="block_1152">● Моника</p>
              <p class="block_1197">● Наталија</p>
              <p class="block_1206">● Натали</p>
              <p class="block_445">● Никола</p>
              <p class="block_1157">● Николина</p>
              <p class="block_1187">● Ники</p>
              <p class="block_1200">● Нада</p>
              <p class="block_1163">● Неделка</p>
              <p class="block_1197">● Партениј</p>
              <p class="block_1164">● Пауна</p>
              <p class="block_1189">● Прохор</p>
              <p class="block_1172">● Филип</p>
              <p class="block_1188">● Рахаела</p>
              <p class="block_1191">● Рајна</p>
              <p class="block_1186">● Рафаела</p>
              <p class="block_1207">● Ратко</p>
              <p class="block_1174">● Ристе</p>
              <p class="block_1203">● Ристана</p>
              <p class="block_1164">● Рубин</p>
              <p class="block_1172">● Ромил</p>
              <p class="block_1172">● Самир</p>
              <p class="block_448">● Сара</p>
              <p class="block_1172">● Сирма</p>
              <p class="block_1164">● Сотир</p>
              <p class="block_1164">● Спасе</p>
              <p class="block_1147">● Стојан</p>
              <p class="block_1164">● Славе</p>
              <p class="block_1172">● Симон</p>
              <p class="block_1152">● Симона</p>
              <p class="block_1186">● Славица</p>
              <p class="block_445">● Сандра</p>
              <p class="block_1168">● Сребра</p>
              <p class="block_1156">● Софија</p>
              <p class="block_1208">● Соња</p>
              <p class="block_1179">● Стефанка</p>
              <p class="block_1209">● Споменка</p>
              <p class="block_440">● Стефанија</p>
              <p class="block_1189">● Стефан</p>
              <p class="block_1176">● Сузи</p>
              <p class="block_1156">● Сузана</p>
              <p class="block_1182">● Сончица</p>
              <p class="block_1189">● Тамара</p>
              <p class="block_445">● Татјана</p>
              <p class="block_1191">● Тања</p>
              <p class="block_1159">● Тереза</p>
              <p class="block_1210">● Тифани</p>
              <p class="block_1148">● Тони</p>
              <p class="block_179">● Тодор</p>
              <p class="block_1211">● Трендафилка</p>
              <p class="block_448">● Вики</p>
              <p class="block_1161">● Вивијан</p>
              <p class="block_1212">● Валентина</p>
              <p class="block_1176">● Вера</p>
              <p class="block_1194">● Зоран</p>
              <p class="block_1213">● Захариј</p>
              <p class="block_1161">● Загорка</p>
              <p class="block_1162">● Зои</p>
              <p class="block_1214">Brand and product</p>
              <p class="block_1215">
                Format proper names as they are most commonly formatted on the
                entity's website (especially official documents), if available,
                or the Wikipedia or IMDb page. In cases of ambiguity, defer to
                their privacy policy. If no other sources, use top Google hits.
              </p>
              <p class="block_1216">Correct: Тој работи во Амазон.</p>
              <p class="block_1217">Incorrect: тој работи во амазон.</p>
              <p class="block_1218">Explanation: Во овој пример името на</p>
              <p class="block_1219">компанијата "Амазон" се пишува со голема</p>
              <p class="block_1220">почетна буква, како што е на нивната</p>
              <p class="block_1221">веб-страница.</p>
              <p class="block_1222">
                Correct: Чув Јаху и Ти-мобајл се договориле.
              </p>
              <p class="block_864">
                Explanation: Се пишуваат со голема почетна
              </p>
              <p class="block_1223">Incorrect: чув јаху и ти-мобајл се</p>
              <p class="block_1224">договориле.</p>
              <p class="block_1225">
                буква и со тире се пишува "Ти-мобајл" затоа
              </p>
              <p class="block_1226">што така стои на официјалната</p>
              <p class="block_1227">веб-страница.</p>
              <p class="block_1228">Correct: Често јадам во Бургер Кинг и</p>
              <p class="block_1229">Сабвеј.</p>
              <p class="block_1230">Correct: ЈуТуб</p>
              <p class="block_1231">Incorrect: Ју Туб</p>
              <p class="block_1232">Incorrect: Ју-туб</p>
              <p class="block_606">Explanation: "ЈуТуб" се транскрибира како</p>
              <p class="block_232">што стои на нивната веб-страница, односно</p>
              <p class="block_1233">
                со голема буква "Т" на средина од зборот и
              </p>
              <p class="block_1234">без празно место.</p>
              <p class="block_1235">Correct: крејгслист</p>
              <p class="block_1236">Incorrect: крејгс лист</p>
              <p class="block_859">Explanation: Официјалиот наслов на</p>
              <p class="block_289">веб-страницата е напишана со мали букви и</p>
              <p class="block_1237">без празни места, т.е. "крејгслист".</p>
              <p class="block_1238">Correct: ААМКО</p>
              <p class="block_1239">Incorrect: Аамко</p>
              <p class="block_1240">Explanation: Иако се изговара како еден</p>
              <p class="block_687">збор, насловот е напишан со големи букви</p>
              <p class="block_1241">во нивната полиса за заштита на податоци</p>
              <p class="block_1242">и така треба да биде транскрибирано.</p>
              <p class="block_1243">Correct: СЕТЕК</p>
              <p class="block_1244">
                Explanation: Насловот е транскрибиран како
              </p>
              <p class="block_1245">Incorrect: Се.тек.</p>
              <p class="block_1246">
                "СЕТЕК" како што стои во нивната полиса за
              </p>
              <p class="block_1247">заштита на податоци.</p>
              <p class="block_1248">Correct: Тимот е спонзориран од</p>
              <p class="block_1249">ЈунајтедХелткер.</p>
              <p class="block_1250">
                Incorrect: Тимот е спонзориран од Јунајтед
              </p>
              <p class="block_1251">Хелткер.</p>
              <p class="block_1252">Explanation: Правилната транскрипција на</p>
              <p class="block_1253">насловот е без празни места помеѓу</p>
              <p class="block_750">зборовите затоа што е официјална форма на</p>
              <p class="block_1254">компанијата која стои во полисата за</p>
              <p class="block_1247">заштита на податоци.</p>
              <p class="block_1255">Correct: Бургер Кинг</p>
              <p class="block_1256">Incorrect: БУРГЕР КИНГ</p>
              <p class="block_1257">Explanation: Логото на компанијата е</p>
              <p class="block_762">напишано со големи букви, но во полисата</p>
              <p class="block_1258">
                за заштита на подаци нивното стои "Бургер
              </p>
              <p class="block_1259">Кинг" и затоа така треба да биде</p>
              <p class="block_1260">транскрибрано.</p>
              <p class="block_1261">Correct: ЛЕГО</p>
              <p class="block_1262">
                Explanation: Според полисата за заштита на
              </p>
              <p class="block_1263">Incorrect: Лего</p>
              <p class="block_1246">
                подаци стои логото со големи букви и затоа
              </p>
              <p class="block_1264">така треба да биде транскрибирано.</p>
              <p class="block_1265">
                The phrase "Ok Google", as well as possible derivatives such as
                "Ok Google Now" and "Ok Glass", require their own particular
                spelling of "okay". This spelling is unique to these cases.
              </p>
              <p class="block_1266">Correct: Ok Google</p>
              <p class="block_230">Incorrect: Okay, Google</p>
              <p class="block_1267">
                Explanation: "Ok" се наоѓа пред "Google" и се
              </p>
              <p class="block_1268">пишува "Ок" а не "okay".</p>
              <p class="block_1269">Incorrect: OK Google</p>
              <p class="block_1270">Correct: Ok Google Now</p>
              <p class="block_1271">Incorrect: Okay, Google.</p>
              <p class="block_405">
                Explanation: Фразата "Ok Google" е изведенка
              </p>
              <p class="block_941">од "Ok Google" и така соодветно да се</p>
              <p class="block_1272">транскрибира.</p>
              <p class="block_1273">Correct: Ok Google, каде е Старбакс?</p>
              <p class="block_1274">Incorrect: Ok Google каде е Старбакс?</p>
              <p class="block_1275">Incorrect: Ok Google, Каде е Старбакс?</p>
              <p class="block_1276">Explanation: Правилна транскрипција и</p>
              <p class="block_961">впишување на запирка после фразата "Ok</p>
              <p class="block_1277">Google" и "каде'' не се пишува со голема</p>
              <p class="block_1278">почетна буква.</p>
              <p class="block_1279">Correct: Ok Google, тикви</p>
              <p class="block_1104">Incorrect: Ok Google тикви</p>
              <p class="block_344">
                Incorrect: Иако "тикви" е само збор, ставете
              </p>
              <p class="block_1280">запирка меѓу "Ok Google" и "тикви".</p>
              <p class="block_1281">Correct: Океј.</p>
              <p class="block_1282">Incorrect: Ок.</p>
              <p class="block_1283">
                Explanation: Затоа што "океј" не е дел од
              </p>
              <p class="block_1284">фразата "Ok Google" се транскрибира како</p>
              <p class="block_1285">"океј".</p>
              <p class="block_1286">
                Spellings of common Brand and Product names
              </p>
              <p class="block_1164">● Стоби</p>
              <p class="block_1287">● Витаминка</p>
              <p class="block_1157">● Алкалоид</p>
              <p class="block_1189">● Адидас</p>
              <p class="block_1198">● Амазон</p>
              <p class="block_1288">● Андроид Маркет</p>
              <p class="block_1289">● Не лути се човече</p>
              <p class="block_1190">● Мамас</p>
              <p class="block_1171">● Берклис</p>
              <p class="block_1290">● ББЦ 1 / Би-би-си 1</p>
              <p class="block_1198">● Тиквеш</p>
              <p class="block_1291">● Златен даб</p>
              <p class="block_1154">● Блекбери</p>
              <p class="block_1292">● Блинк-182</p>
              <p class="block_1149">● Бургер Кинг</p>
              <p class="block_1164">● Касио</p>
              <p class="block_1199">● Шанел</p>
              <p class="block_1293">● Хром</p>
              <p class="block_1163">● Цитроен</p>
              <p class="block_1294">● Чунга лунга</p>
              <p class="block_1150">● Кока Кола</p>
              <p class="block_1210">● Матица</p>
              <p class="block_1295">● БТВ</p>
              <p class="block_1296">● Доминос</p>
              <p class="block_1297">● Dragon Quest IX</p>
              <p class="block_1203">● Сигнори</p>
              <p class="block_1298">● електронска цигара</p>
              <p class="block_1148">● Earth</p>
              <p class="block_445">● easyJet</p>
              <p class="block_1299">● Модерна жена</p>
              <p class="block_1180">● Пелистерка</p>
              <p class="block_1161">● БиМилк</p>
              <p class="block_1198">● Фејсбук</p>
              <p class="block_1165">● ФИФА</p>
              <p class="block_1187">● Авон</p>
              <p class="block_1212">● Формула 1</p>
              <p class="block_1159">● Гимејл</p>
              <p class="block_1158">● Google</p>
              <p class="block_1300">● Гугл Апликации</p>
              <p class="block_1301">● Гугл Календар</p>
              <p class="block_1150">● Гугл Земја</p>
              <p class="block_1302">● Гугл слики</p>
              <p class="block_1196">● Гугл пошта</p>
              <p class="block_1303">● Гугл пребарувач</p>
              <p class="block_1304">● Гугл учичен поглед</p>
              <p class="block_1305">● Гугл палетка со алатки</p>
              <p class="block_1209">● GSMArena</p>
              <p class="block_1161">● GSX-R/4</p>
              <p class="block_1164">● GTA V</p>
              <p class="block_1147">● Вегета</p>
              <p class="block_1306">● Харибо</p>
              <p class="block_1191">● Хокај</p>
              <p class="block_1158">● Аргета</p>
              <p class="block_1174">● Дукат</p>
              <p class="block_1148">● Икеа</p>
              <p class="block_1160">● iMac</p>
              <p class="block_1165">● ИМДб</p>
              <p class="block_1307">● iOS</p>
              <p class="block_1167">● Ајпед</p>
              <p class="block_1174">● Ајфон</p>
              <p class="block_1192">● iPlayer</p>
              <p class="block_179">● Ариел</p>
              <p class="block_1154">● ITV Player</p>
              <p class="block_1179">● Цедевита</p>
              <p class="block_1210">● Кит Кет</p>
              <p class="block_1191">● Краш</p>
              <p class="block_445">● Виледа</p>
              <p class="block_1176">● Лего</p>
              <p class="block_1181">● Леголенд</p>
              <p class="block_1204">● Линкдин</p>
              <p class="block_1197">● Maroon 5</p>
              <p class="block_1308">● Мекдоналдс</p>
              <p class="block_1147">● Смоки</p>
              <p class="block_1295">● РЕК</p>
              <p class="block_1169">● Томос</p>
              <p class="block_1309">● Југо</p>
              <p class="block_1151">● Несквик</p>
              <p class="block_1157">● Нетфликс</p>
              <p class="block_1309">● Најк</p>
              <p class="block_1310">● Oral-B</p>
              <p class="block_1210">● Дорина</p>
              <p class="block_1148">● Кики</p>
              <p class="block_1311">● Плејстејшн 4</p>
              <p class="block_1311">● Плејстејшн 1</p>
              <p class="block_1312">● Дневен весник</p>
              <p class="block_1163">● Порнхаб</p>
              <p class="block_1199">● Порше</p>
              <p class="block_1196">● Пауерпојнт</p>
              <p class="block_1162">● PS4</p>
              <p class="block_1313">● Рејбан</p>
              <p class="block_1157">● RealPlayer</p>
              <p class="block_1314">● Rolls-Royce</p>
              <p class="block_1288">● Самсунг галакси</p>
              <p class="block_1315">● Самсунг галакси С 2</p>
              <p class="block_1315">● Самсунг галакси С 3</p>
              <p class="block_1316">● Самсунг галакси С4</p>
              <p class="block_199">● Самсунг галакси С5</p>
              <p class="block_1197">● СимСити</p>
              <p class="block_1148">● Сири</p>
              <p class="block_1317">● Паметен автомобил</p>
              <p class="block_1209">● ДукиДасо</p>
              <p class="block_1154">● Starbucks</p>
              <p class="block_1157">● Ти-мобајл</p>
              <p class="block_1318">● Texas hold 'em</p>
              <p class="block_1182">● TomTom</p>
              <p class="block_1319">● Тур де Франс</p>
              <p class="block_447">● Toys "R" Us</p>
              <p class="block_1186">● Тамблер</p>
              <p class="block_1156">● Твитер</p>
              <p class="block_1180">● Virgin Media</p>
              <p class="block_1176">● Виза</p>
              <p class="block_1178">● WhatsApp</p>
              <p class="block_1320">● WrestleMania XXX</p>
              <p class="block_1171">● WWE '13</p>
              <p class="block_1176">● Xbox</p>
              <p class="block_1155">● Xbox 360</p>
              <p class="block_1197">● Xbox One</p>
              <p class="block_443">● Јаху</p>
              <p class="block_1188">● YouPorn</p>
              <p class="block_1293">● Јутуб</p>
              <p class="block_1167">● Zagat</p>
              <p class="block_1148">● ZBox</p>
              <p class="block_1321">Media title</p>
              <p class="block_1322">
                Refer to the Google Play Store for official spellings of media
                titles. For film/television, IMDb is also available. If an
                utterance is ambiguous between a media title and a sentence or
                web search, use your judgment for which is more likely; if truly
                unclear, default to media title.
              </p>
              <p class="block_1323">
                Capitalize media titles the way they are typically capitalized.
              </p>
              <p class="block_1324">
                Do not use quotation marks for media titles.
              </p>
              <p class="block_1325">
                Correct: Слика од екранот на Call of Duty:
              </p>
              <p class="block_1326">Black Ops 2.</p>
              <p class="block_1327">
                Incorrect: "слика од екранот на "Call of Duty:
              </p>
              <p class="block_1328">Black Ops 2"</p>
              <p class="block_1329">Explanation: Не користете наводиници при</p>
              <p class="block_1330">транскрибирање на видеоигри.</p>
              <p class="block_1331">Correct: Пуштете ја Тајно моја од Тоше.</p>
              <p class="block_1332">
                Incorrect: Пуштете ја "Тајно моја" од Тоше.
              </p>
              <p class="block_1105">
                Explanation: Не се користат наводници при
              </p>
              <p class="block_1333">транскрипција на песни.</p>
              <p class="block_1334">
                Transcribe all media titles with original punctuation. In cases
                where original punctuation falls at the end of a sentence, do
                not transcribe sentence-level punctuation. That is, media title
                punctuation trumps sentence level punctuation when in conflict.
                If a popular media title consists of an entire sentence but the
                official spelling is without punctuation, then don't punctuate
                the title. If an utterance is ambiguous between a media title
                and a sentence or web search, use your judgment for which is
                more likely and treat it accordingly.
              </p>
              <p class="block_1335">Correct: Провери која година излезе Ќе</p>
              <p class="block_1336">танцуваме ли?</p>
              <p class="block_1337">Correct: Кој глумеше во Боли ли?</p>
              <p class="block_1338">Incorrect: Кој глумеше во Боли ли??</p>
              <p class="block_1339">Explanation: Насловото на филмот "Боли</p>
              <p class="block_784">ли?" има прашалник на крајот и затоа во</p>
              <p class="block_1340">овој пример не ставаме уште еден</p>
              <p class="block_1341">прашалник после прашањето на</p>
              <p class="block_1342">говорителот. Траба да се транскрибира</p>
              <p class="block_1343">само прашалникот од насловот.</p>
              <p class="block_1344">
                Correct: На семејството омилен им е А што е
              </p>
              <p class="block_1345">
                Explanation: "А што е со Боб" е наслов кој
              </p>
              <p class="block_1346">со Боб?</p>
              <p class="block_1347">Incorrect: На семејството омилен им е "А</p>
              <p class="block_532">што е со Боб?".</p>
              <p class="block_1348">има прашалник на крајот. Во овој пример</p>
              <p class="block_762">насловот е на крајот на реченицата и само</p>
              <p class="block_1349">прашалникот на насловот се транскрибира.</p>
              <p class="block_1350">Не треба да се транскрибира точка на</p>
              <p class="block_1351">крајот.</p>
              <p class="block_1352">
                Very common alternate or shortened versions of titles should
                also be capitalized.
              </p>
              <p class="block_1353">
                <span class="text_4">Correct: Трансформери 2 </span>
                <span class="text_5">Explanation: наместо "Трансформери: </span>
              </p>
              <p class="block_1354">Одмазда на паднатите"</p>
              <p class="block_1355">
                <span class="text_4">
                  Correct: Војна на Ѕвездите Епизода 3{' '}
                </span>
                <span class="text_5">
                  Explanation: наместо "Војна на Ѕвездите:{' '}
                </span>
              </p>
              <p class="block_369">Одмаздата на Сит"</p>
              <p class="block_1356">
                <span class="text_4">Correct: What Does The Fox Say? </span>
                <span class="text_5">
                  Explanation: наместо: "The Fox (What Does{' '}
                </span>
              </p>
              <p class="block_1357">The Fox Say?)"</p>
              <p class="block_1358">
                <span class="text_4">Correct: Следното поколение </span>
                <span class="text_5">
                  Explanation: наместо: "Ѕвездени патеки:{' '}
                </span>
              </p>
              <p class="block_1359">Следното поколение"</p>
              <p class="block_1360">
                <span class="text_4">
                  Correct: Исвири ја Teen Spirit од Нирвана.{' '}
                </span>
                <span class="text_5">
                  Explanation: Правилниот наслов е "Smells like
                </span>
              </p>
              <p class="block_1361">Teen Spirit".</p>
              <p class="block_1362">Correct: Сакам да ја слушам Руси коси од</p>
              <p class="block_1363">Тоше.</p>
              <p class="block_828">
                Explanation: Правилниот наслов е "Сонце во
              </p>
              <p class="block_1364">твоите руси коси".</p>
              <p class="block_1365">
                Do not capitalize a media title that happens to occur within
                quoted lyrics. Format lyrics that form a sentence as you would a
                normal sentence.
              </p>
              <p class="block_1366">
                Correct: Јутуб сонце во твоите руси коси,
              </p>
              <p class="block_1367">ангел што љубов мене ми носи.</p>
              <p class="block_1368">
                Incorrect: Јутуб Сонце во твоите руси коси,
              </p>
              <p class="block_1369">ангел што љубов мене ми носи.</p>
              <p class="block_1368">
                Incorrect: Јутуб Сонце во твоите руси коси,
              </p>
              <p class="block_1370">Ангел што убов мене ми носи.</p>
              <p class="block_1371">Explanation: Ова е текст од песна која</p>
              <p class="block_714">случајно има наслов и треба да се</p>
              <p class="block_1372">форматира како обична реченица.</p>
              <p class="block_1373">Correct: ground control to Major Tom</p>
              <p class="block_348">
                Treat foreign titles the same way as titles in the transcription
                language if you understand them.
              </p>
              <p class="block_1374">Correct: В бой идут одни старики</p>
              <p class="block_1375">Multiple spellings</p>
              <p class="block_1376">
                When multiple spellings are attested, use the first spelling
                used in the reference dictionary for your language. If there is
                no entry, Google the word and use the form with the most hits.
              </p>
              <p class="block_1377">Correct: Божиќ</p>
              <p class="block_1239">Incorrect: Божик</p>
              <p class="block_1378">
                Explanation: И "Божиќ" и "Божик" се точни во
              </p>
              <p class="block_1379">македонскиот јазик, но ве молам</p>
              <p class="block_905">транскрибирајте го како "Божиќ", бидејќи</p>
              <p class="block_1380">тоа го предлага Дигиталниот речник на</p>
              <p class="block_1381">македонскиот јазик.</p>
              <p class="block_1382">
                Guess the most likely spelling given the context. When context
                is insufficient, rely on Google hits.
              </p>
              <p class="block_1383">Correct: Тој ништо не сфаќа.</p>
              <p class="block_1384">Incorrect: Тој ништо не сваќа.</p>
              <p class="block_1385">
                <span class="text_">Example audio: " </span>
                <span class="text_1">тој ништо не сфаќа </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1386">
                Explanation: Иако "сфаќа" и "сваќа" звучат
              </p>
              <p class="block_423">исто, но според контекстот е очигледно</p>
              <p class="block_1387">дека говорителот мисли на "сфаќа".</p>
              <p class="block_1388">
                <span class="text_4">Correct: сфаќа </span>
                <span class="text_5">
                  Explanation: Без контекст не можеме да{' '}
                </span>
              </p>
              <p class="block_1389">
                знаеме дали говорителот мислил на "сфаќа"
              </p>
              <p class="block_1390">или "сваќа". Го транскрибираме зборот со</p>
              <p class="block_1391">најповеќе резултати на Google.</p>
              <p class="block_1392">
                Use official spelling and capitalization for technical terms.
                Google them and pay attention to the correct format.
              </p>
              <p class="block_1393">Correct: Pseudotsuga menziesii</p>
              <p class="block_1394">Correct: Escherichia coli</p>
              <p class="block_1395">Correct: Metronidazole</p>
              <p class="block_1396">
                Transcribe slang and colloquialisms as spoken according to the
                appendix on this page. Do not alter non-standard speech that the
                speaker probably wouldn't want corrected.
              </p>
              <p class="block_1397">Correct: Не се зафркавам</p>
              <p class="block_1398">Incorrect: Не се смеам.</p>
              <p class="block_1399">
                <span class="text_">Example audio: " </span>
                <span class="text_1">не се зафркавам </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1400">
                Explanation: Првиот пример е дијалектален.
              </p>
              <p class="block_238">Правилната транскрипција е таа што го</p>
              <p class="block_1401">содржи изразот како што говорителот го</p>
              <p class="block_1402">искористил.</p>
              <p class="block_1403">Correct: Тој обожуваш кафе.</p>
              <p class="block_389">Incorrect: Тој обожува кафе</p>
              <p class="block_1404">
                <span class="text_">Example audio: " </span>
                <span class="text_1">тој обожуваш кафе </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1405">Explanation: Иако глаголот не е напишан</p>
              <p class="block_835">според македонската граматика, тој е</p>
              <p class="block_1406">транскрибиран е "тој обожуваш" и не се</p>
              <p class="block_1407">менува во неговиот стандарден еквивалент</p>
              <p class="block_1408">"тој обожува".</p>
              <p class="block_1409">
                Write commonly accepted contractions as usual. Transcribe
                contractions when you hear them spoken.
              </p>
              <p class="block_1410">Correct: Седам в'двор.</p>
              <p class="block_1411">Incorrect: Седам во двор.</p>
              <p class="block_1412">
                <span class="text_">Example audio: " </span>
                <span class="text_1">седам в двор </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1413">
                Explanation: "в'двор" е општа кратенка каде
              </p>
              <p class="block_1414">што се брише вокалот. Не треба да се</p>
              <p class="block_276">
                транскрибира како "во двор", туку како што
              </p>
              <p class="block_1415">е изговорено.</p>
              <p class="block_1416">Correct: Седам во дворот.</p>
              <p class="block_1399">
                <span class="text_">Example audio: " </span>
                <span class="text_1">седам во дворот </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1417">Incorrect: Седам в'дворот.</p>
              <p class="block_1418">Explanation: Овде говорителот ја користи</p>
              <p class="block_1419">членуваната форма на именката и затоа</p>
              <p class="block_1401">треба да се транскрибира како "седам во</p>
              <p class="block_1420">дворот".</p>
              <p class="block_1421">
                Contractions that are not commonly accepted should be
                transcribed as full words.
              </p>
              <p class="block_1422">Correct: Ќе дојде подоцна.</p>
              <p class="block_1423">Incorrect: Ќе дој подоцна.</p>
              <p class="block_1424">
                <span class="text_">Example audio: " </span>
                <span class="text_1">Ќе дој подоцна </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1425">Explanation: Тука говорителот користи</p>
              <p class="block_961">кратење на зборот што е познато само во</p>
              <p class="block_1426">еден дел на Македонија. Оваа кратенка не</p>
              <p class="block_1427">се среќава често во пишаните текстови и</p>
              <p class="block_373">затоа се пишува според правописот.</p>
              <p class="block_1428">
                Use standard spelling for reductions that commonly occur in
                normal running speech.
              </p>
              <p class="block_1422">Correct: Ќе дојде подоцна.</p>
              <p class="block_1423">Incorrect: Ќе дој подоцна.</p>
              <p class="block_1424">
                <span class="text_">Example audio: " </span>
                <span class="text_1">Ќе дој подоцна </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1429">
                Explanation: Иако говорителот рекол "дој",
              </p>
              <p class="block_720">ова не е официјален начин на пишување и</p>
              <p class="block_687">треба да се смени во стандардната форма</p>
              <p class="block_1430">"дојде".</p>
              <p class="block_1431">Correct: Што правиш?</p>
              <p class="block_1432">
                <span class="text_">Example audio: " </span>
                <span class="text_1">шо дешаваш </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1433">Incorrect: Шо дешаваш?</p>
              <p class="block_1434">Explanation: Иако говорителот рече "шо</p>
              <p class="block_1419">дешаваш", ова не е официјален начин на</p>
              <p class="block_1435">пишување и треба да се смени во</p>
              <p class="block_1436">стандардната форма "правиш".</p>
              <p class="block_1437">Correct: Што правиш?</p>
              <p class="block_1432">
                <span class="text_">Example audio: " </span>
                <span class="text_1">шо дешаваш </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1433">Incorrect: Шо дешаваш?</p>
              <p class="block_1434">Explanation: Иако говорителот рече "шо</p>
              <p class="block_1419">дешаваш", ова не е официјален начин на</p>
              <p class="block_1438">пишување и треба да се смени во</p>
              <p class="block_1439">стандардната форма "правиш".</p>
              <p class="block_1440">
                If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech error, speech impairment, etc), transcribe the
                intended word.
              </p>
              <p class="block_1441">
                <span class="text_4">Correct: Обожува </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">обожава </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1442">
                <span class="text_4">Correct: луд </span>
                <span class="text_5">
                  Explanation: "луд" се изговара слично на{' '}
                </span>
              </p>
              <p class="block_1443">"лут".</p>
              <p class="block_1444">
                <span class="text_4">
                  Correct: Каде е најблиската библиотека?{' '}
                </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">блиблиотека </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1445">
                <span class="text_4">Correct: Кети Пери </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">кејти перу </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1446">
                <span class="text_4">Correct: Благодарам </span>
                <span class="text_5">Explanation: Личноста изговори со </span>
              </p>
              <p class="block_1447">француски акцент "Бладауам".</p>
              <p class="block_1448">
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.
              </p>
              <p class="block_1449">Correct: интепетира</p>
              <p class="block_1450">Incorrect: интерпретира</p>
              <p class="block_1451">
                <span class="text_">Example audio: " </span>
                <span class="text_1">интепетира </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1452">Explanation: Иако "интепетира" не е</p>
              <p class="block_1453">стандарден македонски збор, но го има</p>
              <p class="block_1454">глаголскиот суфикс на крајот ("-ира") и</p>
              <p class="block_1455">затоа треба да биде транскрибиран како</p>
              <p class="block_1456">што говорителот го изговорил:</p>
              <p class="block_1457">"интепетира", а не стандардниот збор</p>
              <p class="block_1458">"интерпретира".</p>
              <p class="block_1459">Correct: Купи пивкири за забавата.</p>
              <p class="block_1460">Explanation: Иако "пивкири " не е</p>
              <p class="block_1088">Incorrect: Купи кикири за забавата.</p>
              <p class="block_1461">Incorrect: Купи пиво за забавата.</p>
              <p class="block_1462">стандарден македонски збор и е</p>
              <p class="block_1463">
                комбинација на два збора, јасно е дека така
              </p>
              <p class="block_1464">
                е изговорен и лесно се спелува, така што се
              </p>
              <p class="block_1465">транскрибира како што е изговорено.</p>
              <p class="block_1466">Correct: најдалечниот</p>
              <p class="block_1467">
                If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, first perform a
                Google search for the word. If there is a clear candidate,
                transcribe that word.
              </p>
              <p class="block_1468">
                <span class="text_4">Correct: Калоли </span>
                <span class="text_5">
                  Explanation: Говорителот рекол "Калоли".{' '}
                </span>
              </p>
              <p class="block_821">Ова можеби да звучи како бесмисленица на</p>
              <p class="block_1469">
                почеток, но после пребарување на Google го
              </p>
              <p class="block_1470">добиваме резултатот "Калоли", танкер за</p>
              <p class="block_1471">бензин и место на Хаваи. Транскрибирајте</p>
              <p class="block_1005">го "Калоли".</p>
              <p class="block_1472">
                <span class="text_4">Correct: Соук Абдали </span>
                <span class="text_5">
                  Explanation: Корисникот го користи изразот{' '}
                </span>
              </p>
              <p class="block_1473">"Соук Абдали". Препишувачот (тој што</p>
              <p class="block_1474">транскрибира) го пребарува терминот</p>
              <p class="block_550">"сукабдали" и ги наоѓа точните резултати.</p>
              <p class="block_1475">Транскрибирајте "Соук Абдали".</p>
              <p class="block_1476">
                If a word appears to be nonsense and a Google search returns no
                clear results but it is easy to spell and articulated clearly,
                transcribe it anyway.
              </p>
              <p class="block_1477">Correct: пицимуљ</p>
              <p class="block_1478">
                <span class="text_8">
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </span>
              </p>
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
