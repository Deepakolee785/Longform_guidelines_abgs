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
            <PageContentHeader currentPage="Longform Vietnamese" />
            <div className="content text">
              <p className={'heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={styles.block_99}>
                  • Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_100}>
                  • Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_101}>
                  • In general, a complete sentence contains a subject and a
                  verb.
                </p>
                <p className={styles.block_102}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Anh ấy làm việc ở nhà ngày hôm nay.{' '}
                  </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_104}>
                  • Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_105}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Anh ở đâu rồi? Trong nhà bếp.{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : In this context, "Trong nhà bếp." is{' '}
                  </span>
                </p>
                <p className={styles.block_106}>
                  punctuated as a sentence, even though not grammatically a
                  sentence.
                </p>
                <p className={styles.block_107}>
                  • Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_108}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Chào. </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>: greeting </span>
                </p>
                <p className={styles.block_109}>
                  • Do not capitalize or punctuate phrases that are intended to
                  be used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_110}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: hình gà con </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: Hình gà con. </span>
                </p>
                <p className={styles.block_111}>
                  • Capitalize sentence fragments that sound like the beginning
                  of a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ông nghĩ sao về chuyện này? Thật ra thì{' '}
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Audio ends with sentence-initial fragment.
                  </span>
                </p>
                <p className={styles.block_114}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : tốn kém nhiều quá. Chúng tôi sẽ không mua.
                  </span>
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Audio begins with sentence-final fragment.
                  </span>
                </p>
                <p className={styles.block_116}>
                  • A voice action is a query where the user requests a specific
                  action that a smartphone can complete. The action requested is
                  generally expressed by a trigger (most often a verb describing
                  the action to be performed, but it can also be any other part
                  of speech denoting a change of state of the device or of an
                  app). If a voice action sounds complete, it should be
                  capitalized and punctuated as a full sentence. In contrast to
                  a voice action, a web search is a query where the user does
                  not request a specific action that a smartphone can complete.
                  Web searches are more often, but not always, spoken as true
                  fragments.
                </p>
                <p className={styles.block_117}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Gửi Gmail cho Nguyễn.{' '}
                  </span>
                </p>
                <p className={styles.block_118}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Gọi mẹ tôi. </span>
                </p>
                <p className={styles.block_119}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Tắt Bluetooth </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Báo thức lúc 2:00. </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Nhắc tôi 8:00 sáng mai đi họp.{' '}
                  </span>
                </p>
                <p className={styles.block_122}>
                  • If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  • Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_125}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Trạm xăng gần nhất ở đâu?{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Trạm xăng, gần nhất, ở đâu?{' '}
                  </span>
                </p>
                <p className={styles.block_126}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Even if the speaker uses long pauses, do not use commas to
                    show those pauses. There are places where commas are allowed
                    or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_127}>
                  • For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_128}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Công viên Yosemite, đã đóng cửa chưa?{' '}
                  </span>
                </p>
                <p className={styles.block_129}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : "Công viên Yosemite" is a phrase that focuses the meaning
                    of the sentence.
                  </span>
                </p>
                <p className={styles.block_130}>
                  • Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className={styles.block_131}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Thú vị thay, cả hai bên điễn ra cùng một ngày.
                  </span>
                </p>
                <p className={styles.block_132}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>: adverbial </span>
                </p>
                <p className={styles.block_133}>
                  • Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_134}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Được rồi, tôi nghĩ bạn có người đi cùng.{' '}
                  </span>
                </p>
                <p className={styles.block_135}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Discourse word. Other examples of discourse words in
                    Vietnamese include "nhưng", "cho nên", "thực ra", and "đồng
                    thời".
                  </span>
                </p>
                <p className={styles.block_136}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Xin lỗi, anh yêu. </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Interjection. Other examples of{' '}
                  </span>
                </p>
                <p className={styles.block_137}>
                  interjections include "thán từ", "chà", "này", "haha", and
                  others.
                </p>
                <p className={styles.block_138}>• Use commas in lists.</p>
                <p className={styles.block_139}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Đứa bé mới sinh thông minh, khôi hài, dễ thương bước đi
                    những bước chập chững đầu tiên.
                  </span>
                </p>
                <p className={styles.block_140}>
                  • Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_141}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tổng thống Obama, người được bầu năm 2008, đã được tấn
                    phong năm 2009.
                  </span>
                </p>
                <p className={styles.block_142}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Non-restrictive modifier.{' '}
                  </span>
                </p>
                <p className={styles.block_143}>
                  • Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Trân trọng, Hương </span>
                </p>
                <p className={styles.block_145}>
                  • Do not use commas in sentences that consist only of a
                  greeting and an addressee. If a greeting occurs at the
                  beginning of a sentence or fragment, place a comma after the
                  greeting. If the greeting includes an addressee, place the
                  comma after the addressee.
                </p>
                <p className={styles.block_146}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Chào. </span>
                </p>
                <p className={styles.block_147}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Chào Tín. </span>
                </p>
                <p className={styles.block_148}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Chào Thuý, đây là Thuỷ.{' '}
                  </span>
                </p>
                <p className={styles.block_149}>
                  • Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_150}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Thanh, bạn khoẻ không?{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Loan, gọi lại cho tôi.{' '}
                  </span>
                </p>
                <p className={styles.block_152}>
                  • The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>: Ok Google </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ok Google, cho tôi xem thông tin của Vy{' '}
                  </span>
                </p>
                <p className={styles.block_155}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Ok Google, tết Trung thu năm nay là khi nào?
                  </span>
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className={styles.block_158}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Vào lúc 3:00 giờ sáng?{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Rising intonation suggests it is a{' '}
                  </span>
                </p>
                <p className={styles.block_159}>
                  question, so punctuate as a question regardless of structure.
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Anh có nói thật không?{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Syntactically built as a question,{' '}
                  </span>
                </p>
                <p className={styles.block_161}>
                  so punctuate as a question regardless of intonation.
                </p>
                <p className={styles.block_162}>
                  • If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_163}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Tuyệt vời! </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Tuyệt vời. </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_167}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Nói "diamonds". </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: Nói, "diamonds". </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Omit the comma if the verb is in the imperative.
                  </span>
                </p>
                <p className={styles.block_169}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Loan nói, "diamonds".{' '}
                  </span>
                </p>
                <p className={styles.block_170}>
                  • If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_171}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Có phải Thanh đã nói, "Gặp tôi ở đây."{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Có phải Thanh đã nói, "Gặp tôi ở đây."?{' '}
                  </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_173}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Loan nói, "Chúng ta hãy gặp nhau lúc 3:00 chiều."{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Loan nói, "Chúng ta hãy gặp nhau lúc 3:00 chiều.".
                  </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_174}>
                  • Do not use quotation marks for indirect quotes. Use context
                  and intonation to determine whether a quote is direct or
                  indirect.
                </p>
                <p className={styles.block_175}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Thảo nói cô ấy không thể đến đó thứ bảy này.
                  </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Intonation implies indirect quote.{' '}
                  </span>
                </p>
                <p className={styles.block_177}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Trẻ con nói với tôi rằng chúng đói bụng.{' '}
                  </span>
                </p>
                <p className={styles.block_178}>
                  • Use a colon but no quotation marks in quotative voice
                  actions when the quote follows the command. Use quotation
                  marks when the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Dịch "What's your name?" sang tiếng Việt.
                  </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The quote is in the middle of a sentence, so use quotation
                    marks and omit colon.
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Dịch sang tiếng Việt: How are you?{' '}
                  </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : The quote follows the command, so use a colon and omit
                    quotation marks.
                  </span>
                </p>
                <p className={styles.block_183}>
                  • Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_184}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Nhắn tin cho Kim: Thợ sửa ống nước sẽ đến vào ngày thứ Tư.
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Đặt cuộc hẹn cho ngày mai vào lúc 3:30 chiều: cái hẹn bác
                    sĩ.
                  </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Gửi mail cho Hòa: Tôi đang lái xe.{' '}
                  </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Cập nhật Facebook: Tuần này mình được nghỉ làm.
                  </span>
                </p>
                <p className={styles.block_188}>
                  • When speakers make a request for single words to be
                  translated into another language, don't punctuate or
                  capitalize the words, even if you'd consider the words as
                  sentences in other situations.
                </p>
                <p className={styles.block_189}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Dịch "hello" sang tiếng Việt.{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Do not capitalize "hello" even{' '}
                  </span>
                </p>
                <p className={styles.block_190}>
                  though it can stand alone as a sentence in other contexts.
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Dịch sang tiếng Việt: leave.{' '}
                  </span>
                  <span className={styles.text_1}>E</span>
                  <span className={styles.text_1}>XPLANATION</span>
                  <span className={styles.text_1}>
                    : Do not capitalize "leave" even{' '}
                  </span>
                </p>
                <p className={styles.block_190}>
                  though it can stand alone as a sentence in other contexts.
                </p>
                <p className={styles.block_192}>
                  • Do not use quotation marks for metalinguistic uses of words
                  or phrases. These uses include defining the word, talking
                  about the spelling of the word, or any other type of reference
                  to the word itself as a thing.
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Định nghĩa zucchini. </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Định nghĩa "zucchini".{' '}
                  </span>
                </p>
              </div>
              <div id="other-symbols">
                <p className={'text'}>Other symbols</p>
                <p className={styles.block_195}>
                  • Apart from standard Vietnamese letters and English letters a
                  through z, you should not use any other symbol than: 0-9
                </p>
                <p className={styles.block_196}>
                  ₫äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23
                  ,?!~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_197}>
                  • When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Bạn có đi xem trận đấu Sông Lam Nghệ An-Hoàng Anh Gia Lai
                    không?
                  </span>
                </p>
                <p className={styles.block_199}>
                  • Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_117}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : chuyến bay Huế-Đà Lạt{' '}
                  </span>
                </p>
                <p className={styles.block_200}>
                  • Use hyphen in phrases and compounds typically written with
                  hyphen. If in doubt, use hyphen. Check your locale's
                  dictionary for hyphenation.
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Tôi chơi bầu-cua-cá-nai cả ngày.{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Tôi chơi bầu cua cá nai cả ngày.{' '}
                  </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  • For sentence-level spoken punctuation, write out the full
                  word or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ngài khỏe không {`{chấm hỏi}`}{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: Ngài khoẻ không? </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : ngài khoẻ không chấm hỏi{' '}
                  </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Ngày mai Nhung về Tây Ninh {`{chấm}`}{' '}
                  </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>
                    : Ngày mai Nhung về Tây Ninh.{' '}
                  </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : ngày mai Nhung về Tây Ninh chấm{' '}
                  </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: {`{mặt cười}`} </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: :-) I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: mặt cười </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>mặt cười </span>
                  <span className={styles.text_2}>" </span>
                </p>
                <p className={styles.block_210}>
                  • Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_211}>
                  • If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: {`{dấu gạch dưới}`} </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: _ </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: {`{dấu gạch nối}`} </span>
                  <span className={styles.text_1}>I</span>
                  <span className={styles.text_1}>NCORRECT</span>
                  <span className={styles.text_1}>: - </span>
                </p>
                <p className={styles.block_214}>
                  • All other spoken punctuation should be transcribed as the
                  punctuation itself, not as words.
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Nhà mình ở đường nội bộ 4-A.{' '}
                  </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    nhà mình ở đường nội bộ bốn{' '}
                  </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.text_9}>gạch ngang a </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Số nhà là 416/1. </span>
                  <span className={styles.text_6}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_6}>: " </span>
                  <span className={styles.text_7}>
                    số nhà là bốn mười sáu sẹc{' '}
                  </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.text_9}>một </span>
                  <span className={styles.text_10}>" </span>
                </p>
                <p className={styles.block_219}>
                  • Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Tôi đang rời nhà{` {chấm}`} Lái xe mất bao lâu{' '}
                    {`{chấm hỏi}`}
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_2}>XAMPLE AUDIO</span>
                  <span className={styles.text_2}>: " </span>
                  <span className={styles.text_8}>
                    tôi đang rời nhà chấm lái xe mất bao lâu chấm hỏi{' '}
                  </span>
                  <span className={styles.text_2}>" </span>
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
