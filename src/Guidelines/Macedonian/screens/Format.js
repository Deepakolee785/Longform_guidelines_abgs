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
            <PageContentHeader currentPage="longform Macedonian" />
            <div className="content text">
              <p class="text_9">Format </p>
              <p class="block_1479">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <p class="block_1480">Number</p>
              <p class="block_1481">
                Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit). Use
                digits for cardinals and ordinals 10 and above,
              </p>
              <p class="block_1482">
                even if they are coordinated with numbers under 10. Transcribe
                all decimal numbers as digits.
              </p>
              <p class="block_1483">Correct: Девет ученици се во класот.</p>
              <p class="block_273">Incorrect: 9 ученици се во класот.</p>
              <p class="block_1484">Explanation: На почеток во реченица не</p>
              <p class="block_941">може да стои цифра, туку само бројот</p>
              <p class="block_1485">напишан со букви.</p>
              <p class="block_1486">Correct: Во класот има 13 ученици.</p>
              <p class="block_1487">
                Incorrect: Во класот има тринаесет ученици.
              </p>
              <p class="block_1488">
                Explanation: За броевите поголеми од 10 се
              </p>
              <p class="block_232">
                користат цифри. Бројот 13 не треба да биде
              </p>
              <p class="block_1489">запишан како "тринаесет", туку само</p>
              <p class="block_1490">користете "13".</p>
              <p class="block_1491">Correct: Јас имам шест кучиња и 12</p>
              <p class="block_606">Explanation: Иако овие реченици содржат</p>
              <p class="block_1141">папагали.</p>
              <p class="block_1492">
                Incorrect: Јас имам 6 кучиња и 12 папагали.
              </p>
              <p class="block_985">
                Incorrect: Јас имам шест кучиња и дванаест
              </p>
              <p class="block_1493">папагали.</p>
              <p class="block_1494">"кучиња и папагали", коишто се</p>
              <p class="block_232">координираат со броевите, сепак 6 е помал</p>
              <p class="block_1495">
                од 10 и би требало да се запише како "шест",
              </p>
              <p class="block_1496">додека пак за 12 треба да се користат</p>
              <p class="block_1497">цифри.</p>
              <p class="block_1498">Correct: 101 мачка</p>
              <p class="block_1499">Incorrect: Сто и една мачка</p>
              <p class="block_1423">Incorrect: Сто една мачка</p>
              <p class="block_1500">
                <span class="text_">Example audio: " </span>
                <span class="text_1">сто и една мачка </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1501">
                Explanation: За броевите поголеми од 10 се
              </p>
              <p class="block_656">
                користат цифри. Бројот 101 не треба да биде
              </p>
              <p class="block_1502">
                запишан како "сто и еден" или "сто еден",
              </p>
              <p class="block_1503">туку само користете цифра "101".</p>
              <p class="block_1504">Correct: 3,14</p>
              <p class="block_1505">
                <span class="text_">Example audio: " </span>
                <span class="text_1">три запирка четиринаесет </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1506">Incorrect: три запирка еден четири</p>
              <p class="block_1252">Explanation: Правилната транскрипција на</p>
              <p class="block_608">децималните броеви е со користење на</p>
              <p class="block_666">цифра при транскрипција, а не пишување со</p>
              <p class="block_315">букви.</p>
              <p class="block_1507">
                When two or more numbers refer to the same noun, and one number
                is 10 or greater, transcribe both as numerals.
              </p>
              <p class="block_1508">
                Correct: Тие земаа 9 или 10 златни рипки од
              </p>
              <p class="block_1509">продавницата за миленици.</p>
              <p class="block_1510">Incorrect: Тие земаа девет или 10 златни</p>
              <p class="block_1511">рипки од продавницата за миленици.</p>
              <p class="block_1512">
                Explanation: Иако 9 е помало од 10, двата
              </p>
              <p class="block_1513">
                броја се однесуваат на "златните рипки" и
              </p>
              <p class="block_580">едниот број е 10 или поголем, така што</p>
              <p class="block_266">треба да се запишат обата со цифри "9 или</p>
              <p class="block_1514">10".</p>
              <p class="block_869">
                Correct: Ќе ни требаат четири колички и 14
              </p>
              <p class="block_876">лопати.</p>
              <p class="block_1515">Incorrect: Ќе ни требаат 4 колички и 14</p>
              <p class="block_466">лопати.</p>
              <p class="block_1516">
                <span class="text_">Example audio: " </span>
                <span class="text_1">Ќе ни требаат четири </span>
              </p>
              <p class="block_1517">
                <span class="text_1">колички и четиринаесет лопати </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1518">
                Explanation: Иако реченицата се состои од
              </p>
              <p class="block_1519">"колички и лопати" и е координирана со</p>
              <p class="block_1284">
                броеви, бидејќи 4 е помало од 10 треба да
              </p>
              <p class="block_394">се транскрибира како "четири", додека 14</p>
              <p class="block_322">треба да се транскрибира со користење на</p>
              <p class="block_1520">цифри.</p>
              <p class="block_1521">Correct: Секој од нив зборува по три или</p>
              <p class="block_1522">Explanation: Броевите "3 или 4" се</p>
              <p class="block_1523">четири јазици.</p>
              <p class="block_1524">
                Incorrect: Секој од нив зборува по 3 или 4
              </p>
              <p class="block_823">јазици.</p>
              <p class="block_231">однесуваат на истата именка, но двата</p>
              <p class="block_580">броја се помали од 10 и треба да бидат</p>
              <p class="block_1525">напишани со букви "три или четири".</p>
              <p class="block_1526">
                Correct: Имаше од 7 до 14 портокалови дрва
              </p>
              <p class="block_981">во овоштарникот.</p>
              <p class="block_1527">Incorrect: Имаше од седум до 14</p>
              <p class="block_1528">портокалови дрва во овоштарникот.</p>
              <p class="block_1529">
                <span class="text_">Example audio: " </span>
                <span class="text_1">имаше од седум до </span>
              </p>
              <p class="block_1530">четиринаесет портокалови дрва во</p>
              <p class="block_1531">
                <span class="text_1">овоштарникот </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1532">
                Explanation: Иако бројот 7 е помал од 10,
              </p>
              <p class="block_1533">
                обата броја се однесуваат на "портокалови
              </p>
              <p class="block_1534">
                дрва" и затоа користиме цифри за броевите
              </p>
              <p class="block_1535">"7" и "14".</p>
              <p class="block_1536">
                If a large number consists of only a number followed by
                "million", "billion", "trillion", or higher, then transcribe as
                a numeral plus word. Otherwise, transcribe as numerals.
              </p>
              <p class="block_1537">Correct: 7 милијарди</p>
              <p class="block_398">Incorrect: 7000000000</p>
              <p class="block_1538">
                <span class="text_">Example audio: " </span>
                <span class="text_1">седум милијарди </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1539">Explanation: Овде број 7 е проследен со</p>
              <p class="block_1540">"милијарда" и треба да биде</p>
              <p class="block_394">транскрибирано како цифра "7" со зборот</p>
              <p class="block_962">"милијарда" напишан после неа.</p>
              <p class="block_1541">Correct: милион гуски</p>
              <p class="block_1542">
                <span class="text_">Example audio: " </span>
                <span class="text_1">милион гуски </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1543">Incorrect: 1,000,000 гуски</p>
              <p class="block_1544">Incorrect: 1 милион гуски</p>
              <p class="block_1545">
                Explanation: Доколку говорителот каже само
              </p>
              <p class="block_1219">
                "милион", тогаш транскрибирајте "милион".
              </p>
              <p class="block_1546">Correct: 1 милион гуски</p>
              <p class="block_1543">Incorrect: 1,000,000 гуски</p>
              <p class="block_1547">
                <span class="text_">Example audio: " </span>
                <span class="text_1">еден милион гуски </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1548">Explanation: Доколку говорителот каже</p>
              <p class="block_1419">"еден милион", тогаш транскрибирајте "1</p>
              <p class="block_1549">милион".</p>
              <p class="block_1095">Correct: 1,000 гуски</p>
              <p class="block_1550">
                <span class="text_">Example audio: " </span>
                <span class="text_1">илјада гуски </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1551">Incorrect: 1 илјада гуски</p>
              <p class="block_1552">
                Explanation: Запишете ги со збор броевите
              </p>
              <p class="block_771">"милион" или поголема сума. Во овој</p>
              <p class="block_961">пример "илјада" е доволно мал за да биде</p>
              <p class="block_1553">запишан со цифри "1,000".</p>
              <p class="block_1554">Correct: 7.18 милијарди</p>
              <p class="block_398">Incorrect: 7018000000</p>
              <p class="block_1555">
                <span class="text_">Example audio: " </span>
                <span class="text_1">седум милјарди и </span>
              </p>
              <p class="block_1556">
                <span class="text_1">осумнаесет милиони </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1557">Correct: 7234435</p>
              <p class="block_1558">
                <span class="text_">Example audio: " </span>
                <span class="text_1">седум милиони двесте </span>
              </p>
              <p class="block_1559">Incorrect: 7 милиони 234,435</p>
              <p class="block_1560">триесет и четири илјади четиристотини</p>
              <p class="block_1561">
                <span class="text_1">триест и пет </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1562">
                Explanation: Тука е бројот во милиони каде
              </p>
              <p class="block_276">што 7 е проследен со зборот милион, затоа</p>
              <p class="block_331">запишете го целиот број со цифри.</p>
              <p class="block_1563">Correct: 7 милијарди два</p>
              <p class="block_1564">
                <span class="text_">Example audio: " </span>
                <span class="text_1">седум милијарди два </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1565">Incorrect: 7 милијарди 2</p>
              <p class="block_398">Incorrect: 7000000002</p>
              <p class="block_1566">Explanation: Говорителот е прекинат.</p>
              <p class="block_1567">Поради тоа што бројот е нецелосен не го</p>
              <p class="block_1568">
                пишуваме со бројки, туку почетниот број со
              </p>
              <p class="block_771">цифра "7" и потоа со букви напишете</p>
              <p class="block_1436">"милијарди" и број 2 како "два".</p>
              <p class="block_1569">Correct: 1,5 милиони денари</p>
              <p class="block_1570">
                <span class="text_">Example audio: " </span>
                <span class="text_1">еден и пол милиони денари </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1571">Incorrect: 1,500,000 денари</p>
              <p class="block_1572">Incorrect: 1 и 1/2 милион дeнари</p>
              <p class="block_1573">Incorrect: 1 и пол милион денари</p>
              <p class="block_644">
                Explanation: Изговорениот дел "еден и пол"
              </p>
              <p class="block_276">
                се транскрибира со цифри "1.5" затоа што е
              </p>
              <p class="block_1574">децимален број, а милион е со зборови</p>
              <p class="block_1575">затоа што е голем број.</p>
              <p class="block_1576">Correct: 12.25 милиони денари</p>
              <p class="block_1577">Incorrect: 12,250,000 денари</p>
              <p class="block_1578">Incorrect: 12 и 1/4 милиони денари</p>
              <p class="block_1579">
                <span class="text_">Example audio: " </span>
                <span class="text_1">дванаест милијарди и </span>
              </p>
              <p class="block_1580">
                <span class="text_1">дванаест и пет милиони </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1581">милијарди и дванаест илјади" се</p>
              <p class="block_1582">
                Explanation: Изговорената фраза "дванаест
              </p>
              <p class="block_1583">транскрибира со цифри затоа што е</p>
              <p class="block_1584">децимален број и како сите други</p>
              <p class="block_1585">децимални броеви, а милион е со зборови</p>
              <p class="block_1586">затоа што е голем број.</p>
              <p class="block_1587">
                Write lists of numbers with digits and without commas.
              </p>
              <p class="block_1588">Correct: 0 1 1 2 3 5 8 18</p>
              <p class="block_1589">Incorrect: нула еден еден два пет осум</p>
              <p class="block_1590">тринаесет</p>
              <p class="block_1591">Incorrect: 0, 1, 1, 2, 3, 5, 8, 18</p>
              <p class="block_1592">
                <span class="text_">Example audio: " </span>
                <span class="text_1">нула еден еден два пет осум </span>
              </p>
              <p class="block_1593">
                <span class="text_1">тринаесет </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1594">
                Explanation: Затоа што е набројување сите
              </p>
              <p class="block_1595">без користење на запирки.</p>
              <p class="block_420">броеви ќе бидат транскрибирани со цифри и</p>
              <p class="block_1596">Correct: 3 2 1 лансирај</p>
              <p class="block_1597">
                <span class="text_">Example audio: " </span>
                <span class="text_1">три два еден лансирај </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1598">Incorrect: три два еден лансирај</p>
              <p class="block_1599">Incorrect: 3, 2, 1 лансирај</p>
              <p class="block_1600">Explanation: Иако "3 2 1" се дел од</p>
              <p class="block_559">реченицата, броевите и понатаму се</p>
              <p class="block_1601">транскрибираат со користење на цифри и</p>
              <p class="block_1602">без запирки, бидејќи тие се сметаат за</p>
              <p class="block_1603">листа на броеви.</p>
              <p class="block_1476">
                For long numbers (4+ digits) indicating quantity, insert the
                relevant separator (comma, decimal point, or space, depending on
                language).
              </p>
              <p class="block_1604">Correct: 10,000</p>
              <p class="block_1231">Incorrect: 10000</p>
              <p class="block_1605">
                <span class="text_">Example audio: " </span>
                <span class="text_1">десет илјади </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1606">Explanation: Во македонскиот јазик се</p>
              <p class="block_1607">користи запирка при одделување на</p>
              <p class="block_1608">повеќецифрени броеви на секои три цифри.</p>
              <p class="block_1609">Така што "десет илјади" ќе биде</p>
              <p class="block_1610">транскрибиран како "10,000" со запирка</p>
              <p class="block_1611">пред последните три цифри.</p>
              <p class="block_1612">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p class="block_1613">Correct: Им треба 1/4 килограм шеќер.</p>
              <p class="block_1614">Incorrect: Им треба четврт кило шеќер</p>
              <p class="block_683">
                Incorrect: Ним им треба еден 1/4 кило шеќер
              </p>
              <p class="block_1615">
                <span class="text_">Example audio: " </span>
                <span class="text_1">им треба четврт килограм </span>
              </p>
              <p class="block_950">
                <span class="text_1">шеќер </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1616">
                "еден" пред 1/4, така да не го употребувајте
              </p>
              <p class="block_1617">
                Explanation: Во овој пример не се употребува
              </p>
              <p class="block_1618">
                Incorrect: Ним им треба 1 / 4 кило шеќер.
              </p>
              <p class="block_1589">Incorrect: Ним им треба 1⁄4 кило шеќер.</p>
              <p class="block_703">Incorrect: Им треба 0,25 килограми шеќер</p>
              <p class="block_1619">во транскрипцијата. Исто така бидете</p>
              <p class="block_720">внимателни да не ставите празен простор</p>
              <p class="block_266">помеѓу цифри, коси црти или комбинирани</p>
              <p class="block_1620">карактери.</p>
              <p class="block_1621">Correct: 1/2 км и сврти десно.</p>
              <p class="block_1622">
                Incorrect: За една половина км сврти десно.
              </p>
              <p class="block_1623">Incorrect: За 1/2 километар сврти десно.</p>
              <p class="block_1624">Incorrect: За една половина километар</p>
              <p class="block_1625">сврти десно.</p>
              <p class="block_1626">
                <span class="text_">Example audio: " </span>
                <span class="text_1">за половина километар </span>
              </p>
              <p class="block_1627">
                <span class="text_1">сврти десно </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1628">изразот се транскрибира како првиот</p>
              <p class="block_270">пример.</p>
              <p class="block_1629">Explanation: Иако имаат исто значење,</p>
              <p class="block_1630">Correct: 2/3 * 5/16</p>
              <p class="block_1332">
                Incorrect: две третини * пет шеснаесетини
              </p>
              <p class="block_1631">
                <span class="text_">Example audio: " </span>
                <span class="text_1">две третини по пет </span>
              </p>
              <p class="block_1632">
                Incorrect: две третини по пет шеснаесетини
              </p>
              <p class="block_1236">Incorrect: 2/3 по 5/16</p>
              <p class="block_1633">
                <span class="text_1">шеснаесетини </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1634">се транскрибира со цифри и црти.</p>
              <p class="block_1078">
                Explanation: Ова е математичка операција и
              </p>
              <p class="block_1635">Correct: Ни треба 5/2-цм завртка.</p>
              <p class="block_1636">Incorrect: Ни треба 5/2 цм завртка.</p>
              <p class="block_1637">
                <span class="text_">Example audio: " </span>
                <span class="text_1">ни треба пет и пол </span>
              </p>
              <p class="block_1638">
                <span class="text_1">центиметри навртка </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1639">
                Explanation: Затоа што фракцијата "5/2" и
              </p>
              <p class="block_1640">мерната единица "цм" се наоѓаат директно</p>
              <p class="block_1390">пред именката, користете цртичка помеѓу</p>
              <p class="block_1641">"5/2" и "цм".</p>
              <p class="block_1642">
                For mixed numbers in math and units &amp; measures, use numerals
                with "and".
              </p>
              <p class="block_1643">
                <span class="text_6">Example </span>
                <span class="text_4">Correct: 3 и 1/2км </span>
              </p>
              <p class="block_1644">
                <span class="text_">audio: " </span>
                <span class="text_1">три и пол километри </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1645">Incorrect: 3 1/2км</p>
              <p class="block_685">
                Explanation: "Три и пол" е број кој се содржи
              </p>
              <p class="block_422">од цифри и зборови па затоа напишете го</p>
              <p class="block_1419">бројот со цифри и коса црта и ставете го</p>
              <p class="block_656">
                зборот "и" меѓу "3" и "1/2". Не транскрибрајте
              </p>
              <p class="block_784">
                "еден" или "1" пред "3" затоа што ова не е
              </p>
              <p class="block_1646">дел од "1/3".</p>
              <p class="block_1647">Correct: Вчера коалата тежеше 5кг и</p>
              <p class="block_1648">
                <span class="text_">Example audio: " </span>
                <span class="text_1">вчера коалата тежеше пет </span>
              </p>
              <p class="block_839">120грама.</p>
              <p class="block_1424">
                <span class="text_1">килограми и сто дваесет грама </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1649">Explanation: Исто како и во претходниот</p>
              <p class="block_762">пример, овде ги транскрибираме броевите</p>
              <p class="block_422">со цифри и до нив ја наведуваме мерната</p>
              <p class="block_1650">едница.</p>
              <p class="block_1651">Correct: 5 и 1/2 месеци старо.</p>
              <p class="block_1652">
                <span class="text_">Example audio: " </span>
                <span class="text_1">пет и пол месечно бебе </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1653">Incorrect: 5 1/2 месечно.</p>
              <p class="block_1654">Incorrect: 5 и еден 1/2-месеци-старо</p>
              <p class="block_1655">Incorrect: 5,5 месеци старо</p>
              <p class="block_1656">Incorrect: 5 1/2 месеци старо бебе</p>
              <p class="block_1657">Explanation: пет и пол месеци старо</p>
              <p class="block_1658">Correct: 1/3 + 3 и 1/2</p>
              <p class="block_1659">Incorrect: 1/3 + 3 1/2</p>
              <p class="block_1660">Incorrect: 1/3 + 3 и една 1/2</p>
              <p class="block_1661">Incorrect: 1/3 + 3 и една половина</p>
              <p class="block_1662">Incorrect: 1 / 3 + 3 и 1 / 2</p>
              <p class="block_1663">
                <span class="text_">Example audio: " </span>
                <span class="text_1">една третина плус три и </span>
              </p>
              <p class="block_1664">
                <span class="text_1">половина </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1665">дропките треба да се транскрибираат со</p>
              <p class="block_785">
                цифри и коси црти со зборот "и" меѓу целиот
              </p>
              <p class="block_1666">
                треба да биде транскрибиран вака "3 и 1/2",
              </p>
              <p class="block_1667">Explanation: Во математички операции,</p>
              <p class="block_1668">
                број и 1/2. Изразот "три и една половина"
              </p>
              <p class="block_1669">а "1/3" со цифри и коса црта.</p>
              <p class="block_1670">
                When referring to items (not units or measures), write fractions
                out in words. With mixed numbers, write the whole number part
                out in words if it is under ten, otherwise write it with
                numerals.
              </p>
              <p class="block_1671">Correct: Дај ми половина од питава.</p>
              <p class="block_1672">Incorrect: Дај ми 1/2 од питава.</p>
              <p class="block_1673">Incorrect: Дај ми 0,5 од питава.</p>
              <p class="block_1674">
                <span class="text_">Example audio: " </span>
                <span class="text_1">дај ми половина од питава </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1675">
                Explanation: Овде "половина" не се појавува
              </p>
              <p class="block_322">како мерна единица, туку како дел од еден</p>
              <p class="block_1676">предмет/објект (пита), затоа запишете го</p>
              <p class="block_1677">делот со букви.</p>
              <p class="block_1678">Correct: пет шестнаесетини од јаболко</p>
              <p class="block_1679">Incorrect: 5/16 од јаболко</p>
              <p class="block_1680">
                <span class="text_">Example audio: " </span>
                <span class="text_1">пет шестнаесетини од </span>
              </p>
              <p class="block_1681">Incorrect: 0,3125 од јаболко</p>
              <p class="block_1682">
                <span class="text_1">јаболко </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1683">овде како дел од еден предмет/објект</p>
              <p class="block_1684">
                Explanation: "Пет шестнаесетини" се појавува
              </p>
              <p class="block_1685">
                (јаболко), затоа не користете цифри и коса
              </p>
              <p class="block_307">црта. Запишете го делот со букви.</p>
              <p class="block_1686">Correct: три и пол портокали</p>
              <p class="block_1687">Explanation: Дропката се однесува на</p>
              <p class="block_1450">Incorrect: 3,5 портокали</p>
              <p class="block_1688">Incorrect: 3 и 1/2 портокали</p>
              <p class="block_1689">Incorrect: 3 и половина портокали</p>
              <p class="block_1690">предмет и треба да биде напишано со</p>
              <p class="block_1691">зборови, како примерот "три и пол"</p>
              <p class="block_1692">Correct: Беа направени 12 и пол пити од</p>
              <p class="block_1693">тиква.</p>
              <p class="block_1694">
                Incorrect: беа направени 12,5 пити од тиква
              </p>
              <p class="block_1695">Incorrect: Беа направени дванаесет и пол</p>
              <p class="block_1696">пити од тиква.</p>
              <p class="block_1697">
                <span class="text_">Example audio: " </span>
                <span class="text_1">беа направени дванаесет и </span>
              </p>
              <p class="block_1698">
                <span class="text_1">пол пити од тиква </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1413">
                Explanation: Иако е број со децимала, треба
              </p>
              <p class="block_784">да се следат правилата за користење на</p>
              <p class="block_696">броевите, за броеви поголеми од 9.</p>
              <p class="block_1699">Дванаесет е поголем од 9 и затоа се</p>
              <p class="block_1700">користат цифри, но за фракцијата што го</p>
              <p class="block_1701">содржи бројот со децимала користете</p>
              <p class="block_1702">букви.</p>
              <p class="block_1703">
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <p class="block_1704">Correct: Би можел да ми позајмеш 2,5</p>
              <p class="block_1705">денари?</p>
              <p class="block_1250">
                Incorrect: Би можел да ми позајмеш 2 и 1/2
              </p>
              <p class="block_1706">денари?</p>
              <p class="block_1707">Incorrect: Би можел да ми позајмеш два и</p>
              <p class="block_1224">пол денари?</p>
              <p class="block_1708">
                <span class="text_">Example audio: " </span>
                <span class="text_1">би можел да ми позајмеш </span>
              </p>
              <p class="block_1709">
                <span class="text_1">две и пол евра </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1710">
                Explanation: Бројот "два и пол" е нецел број,
              </p>
              <p class="block_785">
                но бидејќи се работи за валутна вредност го
              </p>
              <p class="block_268">користиме стандардниот формат "2.5".</p>
              <p class="block_1711">
                Correct: Таа ја купи куќата на плажа за 7.5
              </p>
              <p class="block_1249">милиони денари.</p>
              <p class="block_858">
                Incorrect: Таа ја купи куќата на плажа за 7 и
              </p>
              <p class="block_1712">1/2 милиони денари.</p>
              <p class="block_1713">
                <span class="text_">Example audio: " </span>
                <span class="text_1">таа ја купи куќата на плажа </span>
              </p>
              <p class="block_1714">
                <span class="text_1">за седум и пол милиони денари </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1675">
                Explanation: Поради тоа што "седум и пол" е
              </p>
              <p class="block_686">валутна вредност се користи стандардната</p>
              <p class="block_1715">форма "7,5", потоа следи "милиони" затоа</p>
              <p class="block_1716">што вредноста е во милиони и на крај се</p>
              <p class="block_1717">додава валутата "денари".</p>
              <p class="block_1718">
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <p class="block_1719">Correct: 2% млеко</p>
              <p class="block_1720">Incorrect: 2 проценти млеко</p>
              <p class="block_1721">
                <span class="text_">Example audio: " </span>
                <span class="text_1">два проценти млеко </span>
                <span class="text_">" </span>
              </p>
              <p class="block_275">Explanation: Вредноста е во проценти па</p>
              <p class="block_238">затоа запишете ја со цифри и знакот за</p>
              <p class="block_1722">процент "2%", не со букви.</p>
              <p class="block_1723">Correct: 1 милион проценти</p>
              <p class="block_1724">Incorrect: 10,000</p>
              <p class="block_1077">Incorrect: 1,000,000%</p>
              <p class="block_1725">Incorrect: 1 милион%</p>
              <p class="block_1726">
                <span class="text_">Example audio: " </span>
                <span class="text_1">еден милион процентти </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1727">
                Explanation: Тука се применува правилото за
              </p>
              <p class="block_290">запишивање на вредности како милион или</p>
              <p class="block_336">поголеми, односно "милион"и "проценти" се</p>
              <p class="block_1728">пишуваат со букви, а за првата вредност</p>
              <p class="block_1729">користиме цифра т.е. во овој случај "1".</p>
              <p class="block_1730">
                <span class="text_4">
                  Correct: Исчезнаа 50% од колачињата.{' '}
                </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">исчезнаа педесет проценти </span>
              </p>
              <p class="block_1731">
                <span class="text_1">од колачињата </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1732">
                When numbers appear in nominal phrases (with or preceding the
                noun), transcribe it as digits with the unit following.
              </p>
              <p class="block_1733">Correct: Бран од 8 метри.</p>
              <p class="block_1734">Incorrect: Бран од осум метри.</p>
              <p class="block_1735">
                <span class="text_">Example audio: " </span>
                <span class="text_1">бран од осум метри </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1736">Explanation: Овде е употребена единицата</p>
              <p class="block_1219">
                "метри" и затоа бројот е запишан со цифра.
              </p>
              <p class="block_1737">Correct: Тојота со четири врати</p>
              <p class="block_1688">Incorrect: Тојота со 4 врати.</p>
              <p class="block_1738">
                <span class="text_">Example audio: " </span>
                <span class="text_1">тојота со четири врати </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1739">Explanation: Не го пишивајте бројот 4 со</p>
              <p class="block_276">цифра заради тоа што "врати" не е единица</p>
              <p class="block_1740">или валута.</p>
              <p class="block_1741">Correct: Тоа беше чанта од 100 денари.</p>
              <p class="block_499">Incorrect: Тоа беше чанта од 100 ден.</p>
              <p class="block_1742">
                <span class="text_">Example audio: " </span>
                <span class="text_1">тоа беше чанта од сто </span>
              </p>
              <p class="block_1743">
                <span class="text_1">денари </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1744">
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p class="block_1745">
                Use Roman numerals only when part of an official name or title.
              </p>
              <p class="block_1746">Correct: Супер Бол XLVII</p>
              <p class="block_1747">Incorrect: Супер Бол 47</p>
              <p class="block_1597">
                <span class="text_">Example audio: " </span>
                <span class="text_1">супер бол четириесет и </span>
              </p>
              <p class="block_1748">
                <span class="text_1">седум </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1749">
                Explanation: Името Супер Бол се однесува на
              </p>
              <p class="block_422">спортска игра и бројот одржаната игра се</p>
              <p class="block_1284">
                пишува со римски броеви "XLVII" а не "47".
              </p>
              <p class="block_1750">Correct: Кралот Хенри VIII</p>
              <p class="block_320">
                <span class="text_">Example audio: " </span>
                <span class="text_1">кралот хенри осми </span>
                <span class="text_">" </span>
              </p>
              <p class="block_1751">Incorrect: Кралот Хенри 8ми</p>
              <p class="block_1752">Explanation: "Кралот Хенри осмиот" е</p>
              <p class="block_1284">официјалната титула на еден крал и затоа</p>
              <p class="block_1753">фразата "осмиот" треба да биде</p>
              <p class="block_1754">транскрибрана со римски зборови и без</p>
              <p class="block_756">суфиксот -от на крајот.</p>
              <p class="block_338">
                Transcribe seasons and episodes of television shows with
                numerals.
              </p>
              <p class="block_1755">
                <span class="text_4">Correct: сезона 3 епизода 2 </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">сезона три епизода два </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1756">
                Explanation: Затоа што зборовите "сезона" и
              </p>
              <p class="block_1026">"епизода" се однесуваат на телевизиско</p>
              <p class="block_794">
                шоу, транскрибирајте ги броевите со цифри,
              </p>
              <p class="block_1603">односно "3" и "2".</p>
              <p class="block_1757">
                If it is a product type, use the common written form.
              </p>
              <p class="block_1758">
                <span class="text_4">Correct: 4х4 </span>
                <span class="text_6">Example audio: " </span>
                <span class="text_7">четири по четири </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_1759">
                Explanation: "Четири по четири" е фраза која
              </p>
              <p class="block_789">
                се однесува на вид џип кое се пишува "4х4"
              </p>
              <p class="block_1760">и така треба да се транскрибира.</p>
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
