import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
// import styles from '../css/styles.module.css'

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
            <PageContentHeader currentPage="Longform Indonesian" />
            <div className="content text">
              <p className="large-heading">Punctuation</p>
              <p className="text">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className="heading">Fragments versus sentences</p>
                <p className="block_250">
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className="block_251">
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className="block_252">
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className="block_253">Correct: Dia membaca buku di kamar.</p>
                <p className="block_214">
                  Explanation: Includes subject and verb.
                </p>
                <p className="block_93">
                  Correct: Bahkan saya juga tidak tahu.
                </p>
                <p className="block_87">
                  Explanation: Includes subject and verb. Sounds like a whole
                  utterance rather than just a conjunction to a larger sentence.
                </p>
                <p className="block_156">
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className="block_254">
                  Correct: Kamu sedang apa? Menonton konser.
                </p>
                <p className="block_55">Explanation: two speakers</p>
                <p className="block_31">Correct: tetangga sebelah</p>
                <p className="block_255">
                  Explanation: No context to suggest this is a sentence; treat
                  it as a fragment.
                </p>
                <p className="block_256">Correct: gambar rumah minimalis</p>
                <p className="block_127">
                  Explanation: Google search for images
                </p>
                <p className="block_134">Correct: Mau pulang sekarang?</p>
                <p className="block_221">Correct: cuaca di Depok</p>
                <p className="block_257">
                  Explanation: This is asking for information, but the most
                  likely interpretation is as a sentence fragment on its own.
                </p>
                <p className="block_258">
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className="block_15">Correct: Sialan.</p>
                <p className="block_28">Explanation: interjection</p>
                <p className="block_259">Correct: Halo.</p>
                <p className="block_260">Explanation: greeting</p>
                <p className="block_205">Correct: Iya. Sampai jumpa.</p>
                <p className="block_261">
                  Explanation: This includes both a yes/no word and a farewell,
                  with a long pause between.
                </p>
                <p className="block_262">Correct: Gila banget kita.</p>
                <p className="block_263">
                  Explanation: Here, "gila" is not being used as an interjection
                  on its own, but rather the entire sentence is being used as an
                  interjection.
                </p>
                <p className="block_264">
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className="block_265">
                  Correct: bagaimana cara membuat paragraf yang baik
                </p>
                <p className="block_230">
                  Incorrect: Bagaimana cara membuat paragraf yang baik
                </p>
                <p className="block_266">Correct: foto Reza Rahardian</p>
                <p className="block_267">Incorrect: Foto Reza Rahardian.</p>
                <p className="block_268">
                  Correct: film terbaik yang memenangkan penghargaan tahun ini
                </p>
                <p className="block_269">
                  Incorrect: Film terbaik yang memenangkan penghargaan tahun
                  ini.
                </p>
                <p className="block_14">Correct: album Kahitna</p>
                <p className="block_270">Incorrect: Album Kahitna.</p>
                <p className="block_271">
                  Correct: Prof. Harimurti, Pembentukan Kata dalam Bahasa
                  Indonesia
                </p>
                <p className="block_272">
                  Incorrect: Prof. Harimurti, Pembentukan Kata dalam Bahasa
                  Indonesia.
                </p>
                <p className="block_273">
                  Incorrect: Prof., Harimurti, Pembentukan Kata, dalam Bahasa
                  Indonesia.
                </p>
                <p className="block_274">
                  Incorrect: Prof. Harimurti, Pembentukan Kata. dalam Bahasa
                  Indonesia
                </p>
                <p className="block_275">
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className="block_276">
                  Correct: Bagaimana menurutmu? Sepertinya ini
                </p>
                <p className="block_277">
                  Explanation: Begins as complete sentence and ends mid-stream.
                </p>
                <p className="block_278">
                  Correct: lebih berat. Rakyat akan menanggung beban APBN.
                </p>
                <p className="block_170">
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className="block_188">
                  Correct: di atas meja, sehingga semua orang berkumpul di sana.
                </p>
                <p className="block_279">
                  Explanation: Begins mid-stream but ends completely; part of
                  complete sentence.
                </p>
                <p className="block_280">
                  Correct: terlalu sulit, tapi jangan putus asa.
                </p>
                <p className="block_281">
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className="block_282">
                  Correct: Saya akan makan bersamanya. Saya ingin memesan Berapa
                  harga semangkok bakso?
                </p>
                <p className="block_283">
                  Explanation: Do not put a period, hyphen, or ellipsis, even if
                  another sentence follows.
                </p>
                <p className="block_80">
                  Correct: Berapa dari mana tiket kereta api
                </p>
                <p className="block_284">
                  Explanation: Both sound like beginnings of sentences.
                </p>
                <p className="block_285">Correct: Siapa siapa dia?</p>
                <p className="block_286">
                  Explanation: Repeated beginning of the sentence.
                </p>
                <p className="block_287">
                  Correct: menyadari ada sejumlah kasus yang masih
                </p>
                <p className="block_288">
                  Explanation: Sounds like the middle of a sentence; beginning
                  and end were cut of.
                </p>
                <p className="block_289">
                  Correct: Saya membeli kedua baju itu. Suka sekali.
                </p>
                <p className="block_49">
                  Explanation: "Suka sekali." is clearly a complete sentence
                  with an omitted subject.
                </p>
                <p className="block_290">
                  A voice action is a query where the user requests a specific
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
                <p className="block_291">Correct: Kirim email.</p>
                <p className="block_24">
                  Correct: Download pesan transparan HP Android.
                </p>
                <p className="block_292">Correct: Hidupkan lampu.</p>
                <p className="block_293">
                  Correct: Pasang alarm untuk jam 09.00 pagi.
                </p>
                <p className="block_294">Correct: Putar musik.</p>
                <p className="block_295">Correct: Aktifkan GPS.</p>
                <p className="block_66">
                  Correct: Ingatkan saya untuk beli susu.
                </p>
                <p className="block_296">Correct: Telepon Weni.</p>
                <p className="block_232">
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <p className="heading">Commas</p>
                <p className="text">
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className="block_299">
                  Correct: Di mana pom bensin terdekat?
                </p>
                <p className="block_80">
                  Incorrect: Di mana, pom bensin, terdekat?
                </p>
                <p className="block_300">
                  Explanation: Even if the speaker uses long pauses in these
                  places, do not use a
                </p>
                <p className="block_301">
                  comma. There are places where commas are allowed or required,
                  but this example contains neither.
                </p>
                <p className="block_302">
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className="block_303">
                  Correct: Metropole 21, itu sudah tutup?
                </p>
                <p className="block_304">Explanation: topic-comment</p>
                <p className="block_219">Correct: Bubur, nasi atau lontong?</p>
                <p className="block_304">Explanation: topic-comment</p>
                <p className="block_54">
                  Correct: Pak Amir, anaknya diterima di Akademi Militer.
                </p>
                <p className="block_305">Explanation: topicalization</p>
                <p className="block_306">
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className="block_307">
                  Correct: Sekarang kamu sudah mengakuinya, kita bisa pergi
                  bersama.
                </p>
                <p className="block_308">Explanation: introductory clause</p>
                <p className="block_309">
                  Correct: Waktu kita mengalami kesusahan, mereka di mana ketika
                  kita membutuhkan mereka?
                </p>
                <p className="block_310">Explanation: introductory clause</p>
                <p className="block_311">
                  Correct: Akibatnya, laporan itu perlu diperiksa ulang.
                </p>
                <p className="block_312">Explanation: adverbial</p>
                <p className="block_313">
                  Correct: Di dalam kotak, hadiah untukmu sedang menunggu.
                </p>
                <p className="block_314">Explanation: prepositional phrase</p>
                <p className="block_315">
                  Correct: Di kantor, kami memiliki kulkas di setiap ruangan.
                </p>
                <p className="block_314">Explanation: prepositional phrase</p>
                <p className="block_316">
                  Correct: Di samping itu, kantor ini menyediakan makan siang
                  untuk karyawan.
                </p>
                <p className="block_314">Explanation: prepositional phrase</p>
                <p className="block_317">
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className="block_318">
                  Correct: Sebenarnya, saya tidak tahu kamu sudah bisa berbahasa
                  Indonesia.
                </p>
                <p className="block_319">
                  Explanation: Discourse word. Other examples of discourse words
                  in Indonesian include "sebetulnya", "jadi", "namun", "tetapi",
                  and "juga".
                </p>
                <p className="block_320">
                  Correct: Buset, kamu makan semuanya?
                </p>
                <p className="block_321">
                  Explanation: Interjection. Other examples of interjections
                  include "wow", "aduh", "wah", and others.
                </p>
                <p className="block_70">Correct: Wow, kamu keren banget.</p>
                <p className="block_322">Explanation: Interjection</p>
                <p className="block_323">
                  Correct: Iya, saya akan melakukan itu.
                </p>
                <p className="block_151">
                  Explanation: Yes/no word. Other examples of these types items
                  include "iya", "tidak", "tentu saja" and others.
                </p>
                <p className="block_324">Correct: Oke, saya mau.</p>
                <p className="block_325">Explanation: Yes/no word.</p>
                <p className="block_293">
                  Correct: Tentu saja, saya bisa melakukan itu.
                </p>
                <p className="block_326">
                  Explanation: No pause after "tentu saja".
                </p>
                <p className="block_327">
                  Correct: Tentu saja. Saya bisa melakukan itu.
                </p>
                <p className="block_328">
                  Explanation: Substantial pause after "tentu saja".
                </p>
                <p className="block_329">Correct: Wah, itu bagus sekali.</p>
                <p className="block_99">
                  Explanation: Use a comma when there is no pause, or when there
                  is a pause that isn't long.
                </p>
                <p className="block_329">Correct: Wah. Itu bagus sekali.</p>
                <p className="block_330">
                  Explanation: Use a period when there is a substantial pause
                  after "wah".
                </p>
                <p className="block_331">Use commas in lists.</p>
                <p className="block_332">
                  Correct: Anak yang pintar, cantik, dan baik hati itu sudah
                  meninggal.
                </p>
                <p className="block_333">
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className="block_334">
                  Correct: Presiden Indonesia, Joko Widodo, tiba di Istana
                  Negara tadi pagi.
                </p>
                <p className="block_335">
                  Explanation: Non-restrictive modifier. "Joko Widodo" does not
                  change the core meaning of "Presiden Indonesia", it just adds
                  additional information about the president of Indonesia.
                </p>
                <p className="block_171">
                  Correct: Pelanggan yang sudah membuat janji akan kami layani
                  terlebih dahulu.
                </p>
                <p className="block_336">
                  Explanation: Restrictive modifier. The relative clause "yang
                  sudah membuat janji" restricts which people we are talking
                  about, it doesn't just add additional information about an
                  already delineated group of people.
                </p>
                <p className="block_337">
                  Correct: Presiden Jokowi, yang terpilih pada bulan Juli,
                  dilantik pada bulan Oktober.
                </p>
                <p className="block_338">
                  Explanation: Non-restrictive modifier. As a rule of thumb, if
                  you ask yourself: "which president of Indonesia" or "which
                  classmate" and the answer is not absolutely clear, don't use
                  commas.
                </p>
                <p className="block_339">
                  Correct: Presiden yang terpilih pada bulan Juli dilantik pada
                  bulan Oktober.
                </p>
                <p className="block_340">
                  Explanation: Unless there are significant pauses after
                  "presiden" and "Juli", you should assume this is a restrictive
                  modifier.
                </p>
                <p className="block_341">
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className="block_342">Correct: Salam, Maf</p>
                <p className="block_343">Correct: Salam sayang, Rinto</p>
                <p className="block_344">
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className="block_26">Correct: Halo.</p>
                <p className="block_345">Correct: Halo Rin.</p>
                <p className="block_346">Correct: Halo, ini saya.</p>
                <p className="block_305">Correct: Halo Rin, ini saya.</p>
                <p className="block_162">Correct: Halo Rin. Ini saya.</p>
                <p className="block_347">
                  Explanation: Long pause between "Hi Rin." and "Ini saya."
                  treat as separate sentences.
                </p>
                <p className="block_348">
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className="block_349">
                  Correct: Yeni, nanti telepon lagi ya.
                </p>
                <p className="block_262">Correct: Apa kabar, Suci?</p>
                <p className="block_350">
                  Correct: Mirna, saya. Kita perlu berbicara mengenai soal-soal
                  untuk minggu depan.
                </p>
                <p className="block_351">
                  Explanation: Note that this is a difficult edge case: "Mirna,
                  saya." appears to be a shortened version of "Mirna, ini saya",
                  so we treat it as a full sentence.
                </p>
                <p className="block_134">Correct: Nisa, halo, ini Hardian.</p>
                <p className="block_352">
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className="block_353">Correct: Ok Google</p>
                <p className="block_113">
                  Correct: Ok Google, gambar rumah tropis
                </p>
                <p className="block_354">
                  Correct: Ok Google, beri tahu saya nomor telepon Ismail.
                </p>
                <p className="block_105">
                  Correct: Ok Google, kapan Indonesia merdeka?
                </p>
              </div>
              <div id="intonation-marks">
                <p className="heading">Intonation marks</p>
                <p className="text">
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className="block_357">Correct: Apakah kamu serius?</p>
                <p className="block_274">
                  Explanation: Intonation sounds more like a statement than a
                  question.
                </p>
                <p className="block_358">Correct: Besok pagi?</p>
                <p className="block_359">
                  Explanation: Utterance uses rising intonation.
                </p>
                <p className="block_201">Correct: Dan dia, juga datang?</p>
                <p className="block_360">
                  Explanation: Utterance uses rising intonation.
                </p>
                <p className="block_241">Correct: cuaca di Jakarta</p>
                <p className="block_361">
                  Explanation: Query uses rising intonation, but is most likely
                  a web search rather than a true question.
                </p>
                <p className="block_362">
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className="block_363">Correct: Diam!</p>
                <p className="block_364">Correct: Hore!</p>
                <p className="block_365">
                  Explanation: Speaker sounds enthusiastic.
                </p>
                <p className="block_140">Correct: Hore.</p>
                <p className="block_366">
                  Explanation: Speaker sounds unenthused.
                </p>
                <p className="block_74">Correct: Kamu pengecut banget.</p>
                <p className="block_367">
                  Explanation: Spoken dispassionately.
                </p>
                <p className="block_368">Correct: Selamat ulang tahun!</p>
                <p className="block_20">Explanation: Spoken with enthusiasm.</p>
                <p className="block_285">Correct: Selamat makan.</p>
                <p className="block_70">Explanation: pleasant neutral tone</p>
                <p className="block_369">Correct: Saya dapat tiketnya!</p>
                <p className="block_20">Explanation: Spoken with enthusiasm.</p>
              </div>
              <div id="colon-and-quotation">
                <p className="heading">Colon and quotation</p>
                <p className="text">
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className="block_370">
                  Correct: Dia berkata, "cicak versus buaya".
                </p>
                <p className="block_19">
                  Incorrect: Dia berkata, "cicak versus buaya."
                </p>
                <p className="block_371">
                  Incorrect: Dia berkata "cicak versus buaya."
                </p>
                <p className="block_372">
                  Incorrect: Dia berkata "cicak versus buaya".
                </p>
                <p className="block_350">
                  Explanation: The word "berkata" is the most common reported
                  speech verb in Indonesian, but other words ("menjawab",
                  "berkomentar", "bertanya") can be used for reported speech.
                </p>
                <p className="block_373">
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className="block_374">
                  Correct: Bos berkata, "Kita perlu rapat besok pagi."
                </p>
                <p className="block_375">
                  Incorrect: Bos berkata, "Kita perlu rapat besok pagi.".
                </p>
                <p className="block_350">
                  Explanation: The word "berkata" is the most common reported
                  speech verb in Indonesian, but other words ("menjawab",
                  "bertanya", "berkomentar") can be used for reported speech.
                </p>
                <p className="block_376">
                  Correct: Suci bertanya, "Apakah kita akan makan siang
                  bersama?"
                </p>
                <p className="block_377">
                  Incorrect: Suci bertanya, "Apakah kita akan makan siang
                  bersama?".
                </p>
                <p className="block_378">
                  Correct: Apakah Astrid berkata, "Temui mereka di sana?"
                </p>
                <p className="block_379">
                  Incorrect: Apakah Astrid berkata, "Temui mereka di sana."?
                </p>
                <p className="block_380">
                  Correct: Dia seperti, "Saya akan datang. Saya janji." bahkan
                  tanpa memeriksa jadwalnya.
                </p>
                <p className="block_257">
                  Explanation: The "seperti" or "kayak" construction introduces
                  a direct quotation, so a comma is needed.
                </p>
                <p className="block_205">Correct: Katakan "pempek".</p>
                <p className="block_381">
                  Explanation: Omit the comma if the verb is in the imperative.
                </p>
                <p className="block_382">
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className="block_383">
                  Correct: Terjemahkan ke dalam bahasa Korea: Siapa namamu?
                </p>
                <p className="block_381">
                  Explanation: The quote follows the command, so use a colon.
                </p>
                <p className="block_268">
                  Correct: Terjemahkan "Siapa namamu?" ke dalam bahasa Korea.
                </p>
                <p className="block_384">
                  Explanation: The quote is in the middle of a sentence, so use
                  quotation marks.
                </p>
                <p className="block_123">
                  Correct: Bagaimana kamu mengatakan "Saya cinta kamu." dalam
                  bahasa Korea?
                </p>
                <p className="block_385">
                  Explanation: Omit commas after "mengatakan" verbs in
                  translation requests.
                </p>
                <p className="block_150">
                  Correct: Bagaimana kamu mengatakan dalam bahasa Korea: Saya
                  mau teh.
                </p>
                <p className="block_216">
                  Correct: Kepada kartini@gmail.com: Halo, bagaimana harimu?
                </p>
                <p className="block_386">
                  Correct: Kirim email ke kartini@gmail.com berisi: Halo,
                  bagaimana harimu?
                </p>
                <p className="block_387">
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className="block_388">
                  Correct: Buat janji untuk besok pukul 12.00 siang: rapat
                  bulanan.
                </p>
                <p className="block_389">
                  Correct: Tulis pesan kepada Mira: Makanan untuk acara besok
                  sudah dipesan.
                </p>
                <p className="block_390">
                  Correct: Tulis pesan kepada Mira bahwa saya akan datang
                  sebentar lagi.
                </p>
                <p className="block_391">
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className="block_392">
                  Correct: Terjemahkan "halo" ke dalam bahasa Korea.
                </p>
                <p className="block_26">Correct: Halo.</p>
                <p className="block_93">
                  Correct: Terjemahkan ke Korea: pergi.
                </p>
                <p className="block_393">Correct: Pergi.</p>
                <p className="block_394">
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className="block_395">Correct: Jelaskan abrasi.</p>
                <p className="block_396">Incorrect: Jelaskan "abrasi".</p>
                <p className="block_397">
                  Correct: Dia menyebutkan kata amnesti.
                </p>
                <p className="block_371">
                  Incorrect: Dia menyebutkan kata "amnesti".
                </p>
                <p className="block_398">
                  Correct: Galau menjadi kata yang populer di kalangan anak muda
                  Indonesia.
                </p>
                <p className="block_399">
                  Incorrect: "Galau" menjadi kata yang populer di kalangan anak
                  muda Indonesia.
                </p>
              </div>
              <div id="other-symbols">
                <p className="heading">Other symbols</p>
                <p className="block_400">
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9 äâàáéèêüÄÂÀÁÉÈÊÜ23,?!'"_°:.()&lt;&gt;{}
                  []√/\@#$€£+=%*&amp;-.;
                </p>
                <p className="block_401">
                  @ can be a part of an email address.
                </p>
                <p className="block_13">Correct: puspita@gmail.com</p>
                <p className="block_402">
                  _ can be a part of an email address.
                </p>
                <p className="block_403">Correct: puspita_andriani@gmail.com</p>
                <p className="block_404">
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className="block_339">
                  Correct: Sekitar tahun '70-an, banyak perusahaan otobis swasta
                  di Jakarta.
                </p>
                <p className="block_405">
                  Correct: Dia 'kan datang ke pesta itu dengan segera.
                </p>
                <p className="block_406">Correct: Waktunya 'lah tiba.</p>
                <p className="block_407">
                  Include a hyphen between words in a reduplication.
                </p>
                <p className="block_25">
                  Correct: Malam itu suasana sangat sunyi-senyap.
                </p>
                <p className="block_408">
                  Incorrect: Sudah jarang kupu kupu berkeliaran di desa saya.
                </p>
                <p className="block_409">
                  Incorrect: Malam itu suasana sangat sunyi senyap.
                </p>
                <p className="block_410">
                  Include a hyphen between locations in flight iteraries.
                </p>
                <p className="block_411">
                  Correct: Penerbangan Singapura-Jakarta
                </p>
                <p className="block_412">
                  Incorrect: Penerbangan Singapura Jakarta
                </p>
                <p className="block_352">
                  Use hyphen in phrases and compounds typically written with
                  hyphen. If in doubt, use hyphen. Check The Enhanced New
                  Spelling (Ejaan yang Disempurnakan).
                </p>
                <p className="block_61">
                  Correct: Indonesia merdeka pada 17-8-1945
                </p>
                <p className="block_413">
                  Correct: Dia menjuarai lomba karya ilmiah pelajar SMA
                  se-Indonesia.
                </p>
                <p className="block_414">
                  Correct: Para pendemo anti-RUU Keamanan Nasional akhirnya
                  dibubarkan oleh polisi antihuru-hara
                </p>
                <p className="block_279">
                  Correct: Perhelatan kali ini adalah penyelenggaraan Festival
                  Kesenian Yogyakarta yang ke-23.
                </p>
                <p className="block_49">
                  Incorrect: Perhelatan kali ini adalah penyelenggaraan Festival
                  Kesenian Yogyakarta yang ke23.
                </p>
                <p className="block_49">
                  Incorrect: Perhelatan kali ini adalah penyelenggaraan Festival
                  Kesenian Yogyakarta yang ke 23.
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className="heading">Spoken punctuation</p>
                <p className="text">
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className="block_416">
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className="block_417">
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className="block_418">Correct: {`{titik dua}`}</p>
                <p className="block_419">Correct:{` {garis miring}`}</p>
                <p className="block_373">
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following
                </p>
                <p className="block_420">sentence as normal.</p>
                <p className="block_421">
                  Correct: Saya akan pergi {`{titik}`} Berapa lama waktu
                  tempuhnya?
                </p>
                <p className="block_422">
                  Example audio: " saya akan pergi berapa lama waktu tempuhnya "
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
