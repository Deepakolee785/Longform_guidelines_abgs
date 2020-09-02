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
            <PageContentHeader currentPage="longform Marathi" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your language. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Answers to questions and sentences with dropped subjects
                  should be transcribed as complete sentences.
                </p>
                <p className={styles.block_968}>
                  <span className={styles.text_6}>
                    Correct: राम घरी आला का? काल.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Even though "काल" is not a{' '}
                  </span>
                </p>
                <p className={styles.block_969}>
                  complete sentence, it should be transcribed as
                </p>
                <p className={styles.block_970}>
                  one since it is a natural response to the question.
                </p>
                <p className={styles.block_971}>Correct: काल</p>
                <p className={styles.block_972}>Incorrect: काल.</p>
                <p className={styles.block_973}>
                  Explanation: "काल" is not a response to any
                </p>
                <p className={styles.block_974}>
                  question and is not a complete sentence, so it is
                </p>
                <p className={styles.block_975}>
                  not treated as a complete sentence. It should not
                </p>
                <p className={styles.block_976}>have a period.</p>
                <p className={styles.block_977}>
                  Interjections, greetings, and farewells said in isolation
                  should include ending punctuation.
                </p>
                <p className={styles.block_978}>Correct: शभ रा ी.</p>
                <p className={styles.block_979}>Incorrect: शभ रा ी</p>
                <p className={styles.block_980}>
                  Explanation: Interjections such as "शभ रा ी" can
                </p>
                <p className={styles.block_981}>
                  be used alone as a sentence with proper
                </p>
                <p className={styles.block_982}>punctuation.</p>
                <p className={styles.block_983}>Correct: नम ार.</p>
                <p className={styles.block_979}>Incorrect: नम ार</p>
                <p className={styles.block_984}>
                  Explanation: Greetings like "नम ार." are
                </p>
                <p className={styles.block_985}>
                  considered sentences when said in isolation so
                </p>
                <p className={styles.block_986}>
                  there should be a period after it.
                </p>
                <p className={styles.block_987}>
                  Below are some examples of common interjections.
                </p>
                <p className={styles.block_988}>● नम ार</p>
                <p className={styles.block_989}>● अ ा</p>
                <p className={styles.block_990}>● अ भनदन</p>
                <p className={styles.block_991}>● शभ रा ी</p>
                <p className={styles.block_484}>● ध वाद</p>
                <p className={styles.block_992}>
                  Do not add ending punctuation to web search queries. Web
                  search queries are spoken versions of what a person might type
                  into a google search bar. Note: Web search queries are
                  different from voice action requests because they do not
                  include a command directed to a device.
                </p>
                <p className={styles.block_993}>Correct: चणा मसाला ची र सपी</p>
                <p className={styles.block_994}>
                  Incorrect: चणा मसाला ची र सपी.
                </p>
                <p className={styles.block_995}>
                  Explanation: This phrase is a web search, so
                </p>
                <p className={styles.block_996}>
                  don't add any punctuation at the end.
                </p>
                <p className={styles.block_997}>
                  Add end punctuation to phrases that sound like the end of a
                  sentence. If they do not clearly sound like the end of a
                  sentence, leave out ending punctuation. Remember that some
                  sentences may sound incomplete because the audio has been cut
                  off.
                </p>
                <p className={styles.block_998}>
                  Correct: णन काम कर याच ठरिवल.
                </p>
                <p className={styles.block_999}>
                  Incorrect: णन काम कर याच ठरिवल
                </p>
                <p className={styles.block_1000}>
                  Explanation: Even though this is not a complete
                </p>
                <p className={styles.block_1001}>
                  sentence, it sounds like the end of a sentence
                </p>
                <p className={styles.block_1002}>
                  so it should still have a period at the end.
                </p>
                <p className={styles.block_1003}>Correct: सडास कठ िकती?</p>
                <p className={styles.block_1004}>Incorrect: सडास कठ - िकती?</p>
                <p className={styles.block_1005}>
                  Incorrect: सडास कठ ... िकती?
                </p>
                <p className={styles.block_1006}>Incorrect: सडास कठ? िकती?</p>
                <p className={styles.block_1007}>
                  Explanation: The first phrase does not have an
                </p>
                <p className={styles.block_1008}>
                  end so it should not be transcribed with
                </p>
                <p className={styles.block_1009}>punctuation at the end.</p>
                <p className={styles.block_1010}>
                  Correct: यईपय त नवीन धा , उडीद, तीळ
                </p>
                <p className={styles.block_1011}>
                  Incorrect: यईपय त नवीन धा , उडीद, तीळ.
                </p>
                <p className={styles.block_1012}>
                  Explanation: This sounds like an incomplete
                </p>
                <p className={styles.block_635}>
                  sentence that is missing a beginning and end.
                </p>
                <p className={styles.block_1013}>No need to add punctuation.</p>
                <p className={styles.block_1014}>
                  A voice action is a request or command spoken to a device and
                  includes a command verb. Transcribe all voice actions as
                  complete sentences.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Use commas only when necessary. If you are unsure whether to
                  use a comma, leave it out.
                </p>
                <p className={styles.block_1017}>
                  Do not transcribe pauses with commas.
                </p>
                <p className={styles.block_1018}>
                  Correct: माक टगमधील एक त आह.
                </p>
                <p className={styles.block_1019}>
                  Incorrect: माक टगमधील... एक त ...आह.
                </p>
                <p className={styles.block_586}>
                  Incorrect: माक टगमधील, एक त ,आह.
                </p>
                <p className={styles.block_1020}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_1021}>pauses, do not use a comma.</p>
                <p className={styles.block_1022}>
                  Put a comma after common sentence openers such as sentence
                  initial discourse words, adverbials and introductory clauses.
                </p>
                <p className={styles.block_1023}>
                  Correct: यासदभ तील एक िक ाही नाना स गतात,
                </p>
                <p className={styles.block_1024}>
                  एकदा जम नीचा एक माणस ठा यात आला होता.
                </p>
                <p className={styles.block_1025}>
                  Correct: पण, कम चा य नी ाला त डावर पाडल.
                </p>
                <p className={styles.block_1026}>
                  Correct: ज ाळा, म, आदर, िव वास अशा
                </p>
                <p className={styles.block_1027}>
                  सकारा क भावन चा प रपोष होण ह यातील
                </p>
                <p className={styles.block_1028}>आनदामागच मम होय!</p>
                <p className={styles.block_1029}>
                  Correct: साता यात स य, पो लस दलात भरतीपव
                </p>
                <p className={styles.block_1030}>श ण.</p>
                <p className={styles.block_1031}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However, if there is a long
                  pause after a discourse word, interjection, or yes/no word,
                  transcribe it as a complete sentence.
                </p>
                <p className={styles.block_1032}>
                  Correct: हो, आमही तो काल कोलो.
                </p>
                <p className={styles.block_1033}>
                  Incorrect: हो अ◌ाmही तो काल कोलो.
                </p>
                <p className={styles.block_1034}>
                  Explanation: "हो" is a discourse word, so it should
                </p>
                <p className={styles.block_1035}>
                  appear with a comma even if there is no obvious
                </p>
                <p className={styles.block_1036}>
                  pause after the discourse word.
                </p>
                <p className={styles.block_1037}>
                  Correct: खोद अ◌ाहो, तनो तो हरवलो.
                </p>
                <p className={styles.block_1038}>
                  Incorrect: खोद अ◌ाहो तनो तो हरवलो.
                </p>
                <p className={styles.block_1039}>
                  Explanation: "खोद अ◌ाहो" is an interjection so it
                </p>
                <p className={styles.block_1040}>
                  should have a comma after it, before the rest of
                </p>
                <p className={styles.block_1041}>the sentence.</p>
                <p className={styles.block_1042}>
                  Correct: अ भनदन, ती ाछयासारखी अ◌ाहो.
                </p>
                <p className={styles.block_1043}>
                  Incorrect: अ भनदन ती tयाछयासारखी अ◌ाहो.
                </p>
                <p className={styles.block_1044}>Use commas in lists.</p>
                <p className={styles.block_1045}>
                  Correct: गावात दसरा, ि परारी पौ णमा, ह रनाम
                </p>
                <p className={styles.block_1046}>
                  स ाह, द जयती, शवरा आदी उ व धनेसाजर
                </p>
                <p className={styles.block_1047}>कल जातात.</p>
                <p className={styles.block_1048}>
                  Incorrect: गावात दसरा ि परारी पौ णमा ह रनाम
                </p>
                <p className={styles.block_1049}>
                  स ाह द जयती शवरा आदी उ व धनेसाजर
                </p>
                <p className={styles.block_1050}>कल जातात.</p>
                <p className={styles.block_1051}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_1052}>Correct: तझी म ीण, आरती</p>
                <p className={styles.block_777}>Incorrect: तझी म ीण आरती</p>
                <p className={styles.block_1053}>
                  Explanation: "तझी म ीण" is a sign off so there
                </p>
                <p className={styles.block_1054}>
                  should be a comma after it. Do not transcribe a
                </p>
                <p className={styles.block_1055}>period at the end.</p>
                <p className={styles.block_1056}>
                  <span className={styles.text_6}>Correct: तमच िवन , रमश </span>
                  <span className={styles.text_7}>
                    Explanation: "तमच िवन " is another sign off, so
                  </span>
                </p>
                <p className={styles.block_1057}>
                  there should be a comma after it. Do not
                </p>
                <p className={styles.block_1058}>
                  transcribe a period at the end.
                </p>
                <p className={styles.block_1059}>
                  Do not use commas in sentences that contain only a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_1060}>Correct: नम ार लोकमा .</p>
                <p className={styles.block_1061}>Incorrect: नम ार, लोकमा .</p>
                <p className={styles.block_1062}>
                  Explanation: This example only consists of a
                </p>
                <p className={styles.block_1063}>
                  greeting "नम ार" and an addressee "लोकमा ."
                </p>
                <p className={styles.block_1064}>
                  Therefore, it should not be transcribed with a
                </p>
                <p className={styles.block_1065}>comma.</p>
                <p className={styles.block_1066}>
                  <span className={styles.text_6}>
                    Correct: नम ार लोकमा , त कसा आहस?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: In this case, "नम ार लोकमा " is
                  </span>
                </p>
                <p className={styles.block_1067}>
                  the greeting, so there is a comma after
                </p>
                <p className={styles.block_1068}>
                  "लोकमा " since "त कसा आहस?" is a sentence.
                </p>
                <p className={styles.block_1069}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_1070}>
                  Correct: लोकमा , त ाला मा ा सोबत नाचायला
                </p>
                <p className={styles.block_1071}>आवडल का?</p>
                <p className={styles.block_1072}>
                  Explanation: "लोकमा " is a sentence initial
                </p>
                <p className={styles.block_1073}>
                  addressee so transcribe a comma after it to
                </p>
                <p className={styles.block_1074}>
                  separate it from the sentence.
                </p>
                <p className={styles.block_1075}>
                  <span className={styles.text_6}>
                    Correct: त कसा आहस, लोकमा ?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "लोकमा " is a sentence final{' '}
                  </span>
                </p>
                <p className={styles.block_1076}>
                  addressee so transcribe a comma before it to
                </p>
                <p className={styles.block_1077}>
                  separate it from the sentence.
                </p>
                <p className={styles.block_1078}>
                  The phrase "Ok Google" by itself is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer sentences, place a comma after "Google".
                </p>
                <p className={styles.block_244}>Correct: Ok Google</p>
                <p className={styles.block_1079}>Incorrect: Ok, Google</p>
                <p className={styles.block_1080}>Incorrect: Ok Google.</p>
                <p className={styles.block_1081}>
                  Explanation: "Ok Google" was spoken in
                </p>
                <p className={styles.block_602}>
                  isolation, so do not transcribe a comma or
                </p>
                <p className={styles.block_1082}>
                  period. Make sure to always transcribe Ok
                </p>
                <p className={styles.block_1083}>Google in English.</p>
                <p className={styles.block_1084}>
                  <span className={styles.text_15}>
                    Correct: Ok Google, त ाला मराठ यत का?{' '}
                  </span>
                  <span className={styles.text_17}>
                    Explanation: "Ok Google" appears before the
                  </span>
                </p>
                <p className={styles.block_1085}>
                  question "त ाला मराठ यत का?" so transcribe a
                </p>
                <p className={styles.block_366}>
                  comma after Ok Google. Remember to always
                </p>
                <p className={styles.block_1086}>
                  write "Ok Google" in English.
                </p>
                <p className={styles.block_1087}>
                  <span className={styles.text_15}>
                    Correct: Ok Google, चणा मसाला ची र सपी{' '}
                  </span>
                  <span className={styles.text_17}>
                    Explanation: "Ok Google" appears before the
                  </span>
                </p>
                <p className={styles.block_1088}>
                  noun phrase चणा मसाला ची र सपी so transcribe a
                </p>
                <p className={styles.block_1089}>comma after "Ok Google".</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Question marks</p>
                <p className={'text'}>
                  Transcribe a sentence as a question if it is structured
                  grammatically as a sentence, or if it sounds like a question
                  because of its intonation.
                </p>
                <p className={styles.block_1092}>Correct: आपण कठन आलात?</p>
                <p className={styles.block_1093}>Incorrect: आपण कठन आलात.</p>
                <p className={styles.block_1094}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    आपण कठन आलात [with plain{' '}
                  </span>
                </p>
                <p className={styles.block_1095}>
                  <span className={styles.text_23}>intonation] </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_1096}>
                  Explanation: Even if the intonation does not
                </p>
                <p className={styles.block_705}>
                  sound like a the intonation of a question, this
                </p>
                <p className={styles.block_1097}>
                  sentence is structured as a question.
                </p>
                <p className={styles.block_1098}>
                  <span className={styles.text_14}>Example </span>
                  <span className={styles.text_15}>
                    Correct: गाडीछया बाहोर?{' '}
                  </span>
                </p>
                <p className={styles.block_1099}>
                  <span className={styles.text_8}>audio: " </span>
                  <span className={styles.text_9}>
                    गाडीछया बाहोर [with question{' '}
                  </span>
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_11}>intonation] </span>
                  <span className={styles.text_11}>" </span>
                  <span className={styles.text_16}>
                    Incorrect: गाडीछया बाहोर.{' '}
                  </span>
                </p>
                <p className={styles.block_1101}>
                  Explanation: Since the sentence has question
                </p>
                <p className={styles.block_1102}>
                  intonation, it is transcribed as a question, even
                </p>
                <p className={styles.block_1103}>
                  though it is not structured like a typical
                </p>
                <p className={styles.block_898}>sentence.</p>
                <p className={styles.block_1104}>
                  <span className={styles.text_15}>
                    Correct: िहरवा, िनळा का िपवळा?{' '}
                  </span>
                  <span className={styles.text_17}>
                    Explanation: Even though this sentence just
                  </span>
                </p>
                <p className={styles.block_1105}>
                  includes topics, this is a common form of
                </p>
                <p className={styles.block_1106}>
                  asking a question of preference so it should be
                </p>
                <p className={styles.block_1107}>
                  punctuated properly (with commas separating
                </p>
                <p className={styles.block_1108}>
                  the topics and a question mark at the end).
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations, unless the speech verb is being used as a voice
                  command. Do not put punctuation within quotation marks unless
                  the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_1111}>
                  Correct: माझा िम णाला, "कोणाक ".
                </p>
                <p className={styles.block_1112}>
                  Incorrect: माझा िम णाला, "कोणाक ."
                </p>
                <p className={styles.block_1113}>
                  Incorrect: माझा िम णाला "कोणाक ."
                </p>
                <p className={styles.block_1113}>
                  Incorrect: माझा िम णाला "कोणाक ".
                </p>
                <p className={styles.block_1114}>
                  Explanation: Since " णाला" is a verb that reports
                </p>
                <p className={styles.block_1115}>
                  the exact words of a speaker, quotation marks
                </p>
                <p className={styles.block_1116}>
                  are used. There is no period within the quotation
                </p>
                <p className={styles.block_1117}>
                  because the phrase "कोणाक " is not a complete
                </p>
                <p className={styles.block_1118}>sentence.</p>
                <p className={styles.block_1119}>
                  <span className={styles.text_24}>
                    Correct: "घा◌ इ आह" णा.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: " णा" is being used as a command
                  </span>
                </p>
                <p className={styles.block_1120}>
                  here, so a comma should not appear after it.
                </p>
                <p className={styles.block_1121}>
                  If the text in quotation marks is a complete sentence,
                  transcribe it as a complete sentence. Do not change the
                  punctuation of the quotation, and do not add punctuation
                  immediately after the quotation marks.
                </p>
                <p className={styles.block_1122}>
                  Correct: पढ शोब ल बोलताना अिमत फालक
                </p>
                <p className={styles.block_1123}>
                  णाल, "कोण होईल मराठ करोडपती?"
                </p>
                <p className={styles.block_1124}>
                  Incorrect: पढ शोब ल बोलताना अिमत फालक
                </p>
                <p className={styles.block_1125}>
                  णाल, "कोण होईल मराठ करोडपती?" .
                </p>
                <p className={styles.block_1126}>
                  Explanation: Since "कोण होईल मराठ करोडपती?"
                </p>
                <p className={styles.block_1127}>
                  is a complete sentence, there should be a
                </p>
                <p className={styles.block_1128}>
                  question mark inside the quotation marks.
                </p>
                <p className={styles.block_1129}>
                  Because of this, do not transcribe a period
                </p>
                <p className={styles.block_1130}>
                  outside the quotation marks.
                </p>
                <p className={styles.block_1131}>
                  Correct: पढ शोब ल बोलताना अिमत फालक
                </p>
                <p className={styles.block_1132}>
                  णाल, " ड िपट हा च गला अ भन ी आह."
                </p>
                <p className={styles.block_1124}>
                  Incorrect: पढ शोब ल बोलताना अिमत फालक
                </p>
                <p className={styles.block_1133}>
                  णाल, " ड िपट हा च गला अ भन ी आह.".
                </p>
                <p className={styles.block_1134}>
                  Explanation: Since " ड िपट हा च गला अ भन ी
                </p>
                <p className={styles.block_1135}>
                  आह." is a complete sentence, there should be a
                </p>
                <p className={styles.block_645}>
                  period inside the quotation marks. Because of
                </p>
                <p className={styles.block_1136}>
                  this, do not transcribe a period outside the
                </p>
                <p className={styles.block_1137}>quotation marks.</p>
                <p className={styles.block_1138}>
                  Correct: रझ लाग ा-लाग ा "त फलच झाली
                </p>
                <p className={styles.block_1139}>असशील न." अस ती णाली.</p>
                <p className={styles.block_1140}>
                  Explanation: Even though the quote appears in
                </p>
                <p className={styles.block_1141}>
                  the middle of a larger sentence, a period needs
                </p>
                <p className={styles.block_1142}>
                  to be transcribed within the quotation because
                </p>
                <p className={styles.block_1143}>it is complete sentence.</p>
                <p className={styles.block_1144}>
                  Use a colon instead of quotation marks in voice actions when
                  the quote follows the command.
                </p>
                <p className={styles.block_1145}>
                  Correct: इ जी म भाष तर करा: मी एक ग णत
                </p>
                <p className={styles.block_1146}>आह.</p>
                <p className={styles.block_1147}>
                  Incorrect: इ जी म भाष तर करा: "मी एक ग णत
                </p>
                <p className={styles.block_1148}>आह."</p>
                <p className={styles.block_1149}>
                  Explanation: "मी एक ग णत आह" follows the
                </p>
                <p className={styles.block_1150}>
                  command "भाष तर", so a colon is used before the
                </p>
                <p className={styles.block_1151}>
                  phrase without any quotation marks.
                </p>
                <p className={styles.block_1152}>
                  Use quotation marks when the quote is in the middle of the
                  sentence.
                </p>
                <p className={styles.block_1153}>
                  Correct: मला "तझ नाव काय आह?" ाच जम न म
                </p>
                <p className={styles.block_1154}>भाष तर क न स गा.</p>
                <p className={styles.block_1155}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_1156}>
                  sentence, so use quotation marks.
                </p>
                <p className={styles.block_1157}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_1158}>
                  Correct: मला "हो" ाच जम न म भाष तर क न
                </p>
                <p className={styles.block_1159}>स गा.</p>
                <p className={styles.block_1160}>
                  Incorrect: मला "हो." ाच जम न म भाष तर क न
                </p>
                <p className={styles.block_1161}>स गा.</p>
                <p className={styles.block_1162}>
                  Do not use quotation marks when the speaker is using a word to
                  say something about the word itself.
                </p>
                <p className={styles.block_1163}>Correct: नीला प रभािषत</p>
                <p className={styles.block_1164}>Incorrect: नीला "प रभािषत".</p>
                <p className={styles.block_1165}>
                  Explanation: Do not use quotation marks for
                </p>
                <p className={styles.block_1166}>defining words.</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_1168}>
                  Apart from Marathi letters and the Latin letters a through z,
                  you should not use any other symbol than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'\_°:.()""{}[]√/@#₹+=%*&amp;-.;
                </p>
                <p className={styles.block_1169}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_1170}>
                  Correct: आज सबस बड़ा मकाबला, आमन-सामन ह ग
                </p>
                <p className={styles.block_1171}>भारत-पािक ान</p>
                <p className={styles.block_1172}>
                  Explanation: Since "भारत" and "पािक ान" are
                </p>
                <p className={styles.block_1173}>
                  both teams, transcribe the teams with a hyphen
                </p>
                <p className={styles.block_271}>in between.</p>
                <p className={styles.block_1174}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_1175}>Correct: मबई-प रस</p>
                <p className={styles.block_1176}>Incorrect: मबई प रस</p>
              </div>
              <div id="spoken-punctuation">
                <p className={styles.block_1177}>Spoken punctuation</p>
                <p className={styles.block_1178}>
                  If a speaker says the name of a punctuation mark, write out
                  the full word or words between curly brackets. Do not add
                  punctuation symbols after spoken punctuation.
                </p>
                <p className={styles.block_1179}>
                  Correct: आपण कस आहात {`{च}`}
                </p>
                <p className={styles.block_1180}>Incorrect: आपण कस आहात?</p>
                <p className={styles.block_559}>Incorrect: आपण कस आहात च</p>
                <p className={styles.block_1181}>Incorrect: आपण कस आहात च ?</p>
                <p className={styles.block_1182}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>आपण कस आहात च </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1183}>
                  Correct: माफ करा {`{डॉट} {डॉट} {डॉट}`}
                </p>
                <p className={styles.block_1184}>Incorrect: माफ करा...</p>
                <p className={styles.block_1185}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>माफ करा डॉट डॉट डॉट </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1186}>Correct: {`{ ाईली}`}</p>
                <p className={styles.block_1187}>Incorrect: :-)</p>
                <p className={styles.block_1188}>
                  Incorrect:{' '}
                  <span role="img" aria-label="">
                    😊
                  </span>
                </p>
                <p className={styles.block_1189}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>ाईली </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1190}>
                  Explanation: " ाईली" is transcribed in curly
                </p>
                <p className={styles.block_1191}>
                  brackets because the speaker used its name.
                </p>
                <p className={styles.block_1192}>
                  Don't type out the actual emoticon but type out
                </p>
                <p className={styles.block_1193}>
                  the words between curly brackets.
                </p>
                <p className={styles.block_1144}>
                  However, don't spell out punctuation if it contradicts the
                  established transcription conventions of a certain phrase like
                  web pages, email addresses, addresses, phone numbers, etc.
                </p>
                <p className={styles.block_1194}>Correct: +91 1234 123456</p>
                <p className={styles.block_1195}>
                  Incorrect: {`{स}`} 91 1234 123456
                </p>
                <p className={styles.block_1196}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    नऊ एक एक दोन तीन चार एक{' '}
                  </span>
                </p>
                <p className={styles.block_1197}>
                  <span className={styles.text_9}>दोन तीन चार पाच सहा </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1198}>
                  Explanation: Although the speaker said " स",
                </p>
                <p className={styles.block_1199}>
                  phone numbers have an established
                </p>
                <p className={styles.block_1200}>
                  transcription convention that require the use of
                </p>
                <p className={styles.block_923}>
                  the symbol. So use a "+" instead of spelling it out
                </p>
                <p className={styles.block_1201}>as {`{स}`}.</p>
                <p className={styles.block_1202}>
                  Correct: http://www.google.co.uk/jobs
                </p>
                <p className={styles.block_1203}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    एच टी टी पी अपण िवराम तक{' '}
                  </span>
                </p>
                <p className={styles.block_1204}>
                  Incorrect: http {`{अपण िवराम} { तक रघ} { तक रघ}`}
                </p>
                <p
                  className={styles.block_1205}
                >{`www {डॉट} google {डॉट} c o {डॉट} u k { तक रघ}`}</p>
                <p className={styles.block_1206}>jobs"</p>
                <p className={styles.block_1207}>
                  रघ तक रघ ड ड ड डॉट गगल डॉट सी ओ
                </p>
                <p className={styles.block_1208}>
                  <span className={styles.text_9}>डॉट यक तक रघ जॉ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1209}>
                  Explanation: Although the speaker said
                </p>
                <p className={styles.block_1210}>
                  punctuation words like "अपण िवराम", " तक रघ"
                </p>
                <p className={styles.block_1211}>
                  and "डॉट", URLs have an established
                </p>
                <p className={styles.block_1212}>
                  transcription convention that require the use of
                </p>
                <p className={styles.block_1213}>
                  the symbols. So please use the symbols instead
                </p>
                <p className={styles.block_1214}>
                  of spelling out the names of the symbols.
                </p>
                <p className={styles.block_1215}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_1216}>Correct: {`{अपण िवराम}`}</p>
                <p className={styles.block_1217}>Incorrect: :</p>
                <p className={styles.block_1218}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>अपण िवराम </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_1219}>
                  Explanation: The actual spelling "अपण िवराम" is
                </p>
                <p className={styles.block_1220}>
                  transcribed in curly brackets and not as the
                </p>
                <p className={styles.block_1221}>
                  symbol ":" because it is spoken in isolation.
                </p>
                <p className={styles.block_1222}>Correct: {`{अधोरखा}`}</p>
                <p className={styles.block_1223}>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>अधोरखा </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_759}>Incorrect: _</p>
                <p className={styles.block_1224}>
                  Explanation: The actual spelling "अधोरखा" is
                </p>
                <p className={styles.block_1220}>
                  transcribed in curly brackets and not as the
                </p>
                <p className={styles.block_1225}>
                  symbol "_" because it is spoken in isolation.
                </p>
              </div>
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
