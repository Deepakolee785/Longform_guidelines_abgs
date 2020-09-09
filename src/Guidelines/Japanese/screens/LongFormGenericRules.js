import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const LongFormGenericRules = () => {
  const classes = useStyles()

  const headingIds = [
    'unintelligible-or-foreign-or-singing',
    'segmentation',
    'speaker-labeling',
    'audio-labels',
    'PII',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Japnese" />
            <div className="content text">
              <p className={'large-heading'}>Longform generic rules</p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>Speaker labeling</p>
                <p className={styles.block_138}>Correct: speaker 1</p>
                <p className={styles.block_139}>Incorrect: Speaker 1</p>
                <p className={styles.block_140}>
                  Correct: pre recorded speaker 1
                </p>
                <p className={styles.block_141}>
                  Incorrect: pre-recorded speaker_1
                </p>
                <p className={styles.block_142}>
                  Correct: unidentifiable speaker
                </p>
                <p className={styles.block_143}>
                  'speaker #' Used for different speakers in the audio. Includes
                  a number that corresponds to each different speaker.
                </p>
                <p className={styles.block_144}>
                  'pre recorded speaker #' Used when there is speech coming from
                  a machine. Includes a number that corresponds to each
                  different pre recorded speaker.
                </p>
                <p className={styles.block_145}>
                  'unidentifiable speaker' Used when you cannot identify who the
                  speaker is. Does not ever include numbers.
                </p>
                <p className={styles.block_146}>
                  'speaker Tom' Used when the name of a speaker becomes known.
                  The names of speakers should always be capitalized. You can
                  use first and last names. (Note: adding speaker names will be
                  allowed for some projects but not others. In tool validators
                  will indicate whether or not you can submit a speaker name.)
                </p>
              </div>
              <div id="PII">
                <p className={'heading'}>PII</p>
                <p className={styles.block_148}>
                  {' '}
                  NAME: First and/or Last name
                </p>
                <p className={styles.block_148}>CREDIT_CARD_NUMBER</p>
                <p className={styles.block_149}>EMAIL</p>
                <p className={styles.block_91}>PHONE_NUMBER</p>
                <p className={styles.block_150}>SOCIAL_INSURANCE_NUMBER</p>
                <p className={styles.block_151}>DRIVER_LICENSE_NUMBER</p>
                <p className={styles.block_152}>
                  NATIONAL_HEALTH_SERVICE_NUMBER
                </p>
                <p className={styles.block_97}>SOCIAL_SECURITY_NUMBER</p>
                <p className={styles.block_153}>PASSPORT</p>
                <p className={styles.block_154}>
                  TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                  identifier issued by the Australian Taxation Office (ATO) to
                  each taxpaying entity
                </p>
                <p className={styles.block_155}>
                  LOCATION_STREET: If the street name is heard, mark as PII.
                  Other locations such as State, City, County, zip code are all
                  OK to transcribe.
                </p>
                <p className={styles.block_156}>
                  LOCATION_STREET_NUMBER: If the street number is heard, mark as
                  PII. Other locations such as State, City, County, zip code are
                  all OK to transcribe.
                </p>
                <p className={styles.block_157}>MRN (medical record number)</p>
                <p className={styles.block_158}>
                  BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                  Securities Identification Procedures. A CUSIP number
                  identifies most financial instruments, including: stocks of
                  all registered U.S. and Canadian companies, commercial paper,
                  and U.S. government and municipal bonds.
                </p>
                <p className={styles.block_159}>
                  BC_PHN: Each B.C. resident enrolled with the Medical Services
                  Plan (MSP) is given a unique lifetime identifier for health
                  care called a Personal Health Number (PHN)
                </p>
                <p className={styles.block_160}>
                  OHIP: Ontario Health Insurance Plan
                </p>
                <p className={styles.block_161}>
                  QUEBEC_HIN: Quebec Health Insurance Number
                </p>
                <p className={styles.block_162}>
                  CNI NIR: The French national identity card (French: Carte
                  nationale d'identite or CNI) is an official identity document
                  consisting of a laminated plastic card bearing a photograph,
                  name and address.
                </p>
                <p className={styles.block_163}>
                  IBAN_CODE: The International Bank Account Number (IBAN) is an
                  internationally agreed system of identifying bank accounts
                </p>
                <p className={styles.block_164}>
                  SWIFT_CODE: A SWIFT code is an international bank code that
                  identifies particular banks worldwide. It's also known as a
                  Bank Identifier Code (BIC).
                </p>
                <p className={styles.block_165}>
                  BANK_ROUTING_MICR: The numbers located on the bottom of a
                  check is called a MICR line. MICR means Magnetic Image
                  Character Recognition. The MICR line is made up of three sets
                  of numbers. The first set is called the ABA Bank Routing
                  Number or routing transit number (RTN)
                </p>
                <p className={styles.block_145}>
                  DEA_NUMBER: A DEA number (DEA Registration Number) is an
                  identifier assigned to a health care provider (such as a
                  physician, optometrist, dentist, or veterinarian) by the
                  United States Drug Enforcement Administration
                </p>
                <p className={styles.block_166}>
                  HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                  unique 10-digit identification number issued to health care
                  providers in the United States by the Centers for Medicare and
                  Medicaid Services (CMS).
                </p>
                <p className={styles.block_139}>MEDICARE_NUMBER</p>
                <p className={styles.block_167}>
                  NIE_NUMBER: The NIE is a tax identification number in Spain
                </p>
                <p className={styles.block_168}>
                  CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or Natural
                  Persons Register) is a number assigned by the Brazilian
                  revenue agency to both Brazilians and resident aliens who are
                  subject to taxes in Brazil
                </p>
                <p className={styles.block_169}>
                  PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code that
                  acts as an
                </p>
                <p className={styles.block_170}>
                  identification for individuals, families and corporates
                  (Indian or Foreign), especially those who pay Income Tax
                </p>
                <p className={styles.block_171}>
                  BSN_NUMBER: netherlands: The citizen service number (BSN) is a
                  unique personal number allocated to everyone registered in the
                  Personal Records Database (BRP).
                </p>
                <p className={styles.block_172}>
                  ICD_CODE: International Statistical Classification of Diseases
                  and Related Health Problems (ICD), a medical classification
                  list by the World Health Organization (WHO). It contains codes
                  for diseases, signs and symptoms, abnormal findings,
                  complaints, social circumstances, and external causes of
                  injury or diseases.
                </p>
                <p className={styles.block_173}>FDA_CODE: Prescription drug</p>
                <p className={styles.block_174}>
                  <span className={styles.text_}>
                    NIF: Tax Identification Number in Spain{' '}
                  </span>
                  <span className={styles.text_1}>
                    http :// www . investinspain . org / guidetobusiness / en /
                    2 / art _ 2 _ 3 . html
                  </span>
                </p>
                <p className={styles.block_175}>TAXPAYER_REFERENCE</p>
                <p className={styles.block_176}>
                  CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                  Registro de Poblacion (translated into English as Unique
                  Population Registry Code or else as Personal ID Code Number).
                  It is a unique identity code for both citizens and residents
                  of Mexico.
                </p>
                <p className={styles.block_177}>
                  RRN: Receiver Registration Number (RNN) is a 10-character
                  alphanumeric can be to a bank account, a credit/debit card,
                  mobile wallet, or home delivery.
                </p>
                <p className={styles.block_178}>
                  Correct: Commonly known names like Taylor Swift, Tom Hanks,
                  Michael Jordan
                </p>
                <p className={styles.block_179}>
                  Correct: Company or Business name, phone number, or address.
                </p>
                <p className={styles.block_180}>書き起こしのクオリティー</p>
                <p className={styles.block_181}>
                  一般的な書式ルールに従って下さい。
                </p>
                <p className={styles.block_182}>タイプミス</p>
                <p className={styles.block_183}>
                  タイプミスによって単語として成立しない場合。
                </p>
                <p className={styles.block_184}>
                  タイプミスしないように注意してください。「Complete」をクリックする前に書き起こした
                  内容を注意深くチェックしてください。
                </p>
                <p className={styles.block_185}>
                  Correct: 失礼をばいたしました。
                </p>
                <p className={styles.block_186}>
                  Incorrect: 失礼おばいたしました。
                </p>
                <p className={styles.block_187}>
                  Example audio: " しつれいおばいたしました "
                </p>
                <p className={styles.block_188}>
                  Explanation: 助詞として使われる場合は、"wo"
                  は「を」と表記する。
                </p>
                <p className={styles.block_189}>
                  Correct: 来月で今年も半ばです。
                </p>
                <p className={styles.block_190}>
                  Incorrect: 来月で今年も中ばです。
                </p>
                <p className={styles.block_191}>
                  Correct: その子は間一髪で助かった。
                </p>
                <p className={styles.block_192}>
                  Incorrect: その子は間一発で助かった。
                </p>
                <p className={styles.block_193}>Correct: この花は綺麗だわ。</p>
                <p className={styles.block_194}>
                  Explanation: 終助詞の「わ」は「わ」と書きます。
                </p>
                <p className={styles.block_195}>文脈エラー</p>
                <p className={styles.block_196}>
                  文脈エラーは実際の単語が誤って使われた場合と、同音異義語や句読点など誤った形で単語が
                  使われた場合に等に起こります。
                </p>
                <p className={styles.block_197}>Correct: 私は呼んだ。</p>
                <p className={styles.block_198}>Incorrect: 私は読んだ。</p>
                <p className={styles.block_199}>
                  Example audio: " わたしはよんだ "
                </p>
                <p className={styles.block_200}>
                  Explanation: 前後の文脈から内容を判断します。
                </p>
                <p className={styles.block_201}>
                  実際に話されている内容を記述してください。文脈から適切なスペルや同音異義語を判断して
                  ください。不確かな場合は辞書で単語を調べてください。
                </p>
                <p className={styles.block_185}>
                  Correct: 下記の通りになります。
                </p>
                <p className={styles.block_202}>
                  Correct: 夏期の予定になります。
                </p>
                <p className={styles.block_203}>
                  Correct: これからの季節、火気には気をつけてください。
                </p>
                <p className={styles.block_204}>
                  Correct: 村上春樹氏の講演に行く。
                </p>
                <p className={styles.block_205}>
                  Incorrect: 村上春樹氏の公園に行く。
                </p>
                <p className={styles.block_206}>
                  話し手が意図的に標準的でない文法を用いた場合はそのまま書き起こしてください。
                </p>
                <p className={styles.block_207}>言葉の欠落又は補足</p>
                <p className={styles.block_208}>
                  明らかに話し手が意図していたとしても、実際に話していない言葉は書き起こさないでくだ
                  さい。ただし時間と通過の表記は、単位を付け加えてください。
                </p>
                <p className={styles.block_209}>
                  Correct: ジョンはイギリスです。
                </p>
                <p className={styles.block_210}>
                  Incorrect: ジョンはイギリス人です。
                </p>
                <p className={styles.block_211}>
                  Incorrect: ジョンはイギリス出身です。
                </p>
                <p className={styles.block_212}>
                  Example audio: " じょんはいぎりすです "
                </p>
                <p className={styles.block_213}>
                  Correct: このTシャツは 3,980 円です。
                </p>
                <p className={styles.block_214}>
                  Incorrect: このTシャツは三千九百八十円です。
                </p>
                <p className={styles.block_215}>
                  Example audio: " このてぃーしゃつはさんきゅっぱです "
                </p>
                <p className={styles.block_216}>
                  Explanation: 通貨には「円」を加えます。
                </p>
                <p className={styles.block_217}>
                  Correct: バスが 6 時 20 分に着きます。
                </p>
                <p className={styles.block_218}>
                  Incorrect: バスが 6 時 20 に着きます。
                </p>
                <p className={styles.block_219}>
                  Example audio: " ばすがろくじにじゅうにつきます "
                </p>
                <p className={styles.block_216}>
                  Explanation: 時間には「分」を加えます。
                </p>
                <p className={styles.block_220}>
                  話し手が意図していない言葉を発した場合でも、すべての言葉を書き起こしてください。間
                  投詞と非音声については 合意済みのスペリング &gt; 感動詞
                  分かりづらい発声 &gt; 言い淀みや中 断 を参照してください。
                </p>
                <p className={styles.block_221}>
                  Correct: この間買った電池、電球どこにある?
                </p>
                <p className={styles.block_222}>
                  Explanation:
                  話し手は電池と言った後、間が空き「電球」と言い直しています。
                </p>
                <p className={styles.block_43}>
                  Correct: I need to get a new tele- telephone
                </p>
                <p className={styles.block_223}>
                  Correct: The driver got out of the driver got into the car.
                </p>
                <p className={styles.block_224}>
                  Correct: I really don't think Hey that's a good idea, let's do
                  that!
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_2}>置換</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>
                      置換エラーとは、話し手が発声した言葉とは別の言葉で書き起こされているケースです。話
                    </sub>
                  </span>
                  <span className={styles.text_2}>
                    し手の発声が別のカテゴリー(文脈エラー、固有名詞、メディアタイトル
                    など)に該当する 場合はそちらを参照してください。
                  </span>
                </p>
                <p className={styles.block_191}>
                  Correct: スター・ウォーズの登場人物
                </p>
                <p className={styles.block_192}>
                  Incorrect: スター・トレックの登場人物
                </p>
                <p className={styles.block_226}>
                  Example audio: " スター・ウォーズの登場人物 "
                </p>
                <p className={styles.block_227}>Correct: 寿司ネタ</p>
                <p className={styles.block_228}>Incorrect: 寿司の具材</p>
                <p className={styles.block_229}>Example audio: " 寿司ネタ "</p>
                <p className={styles.block_230}>スペース</p>
                <p className={styles.block_231}>
                  句読点の後に続く単語の前にスペースを入れないでください(_はスペースを示します)。
                </p>
                <p className={styles.block_232}>Correct: あなたは来ますか?</p>
                <p className={styles.block_233}>
                  Incorrect: あなたは来ますか ?
                </p>
                <p className={styles.block_234}>
                  Correct: こんにちは、ジョンさん。
                </p>
                <p className={styles.block_235}>
                  Incorrect: こんにちは、 ジョンさん。
                </p>
                <p className={styles.block_236}>句読点</p>
                <p className={styles.block_237}>
                  <span className={styles.text_2}>
                    担当する言語の句読法に従って下さい。追加ルールについてはこのセクションで説明しま
                    す。
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>フレーズとセンテンス </sub>
                  </span>
                </p>
                <p className={styles.block_238}>
                  必要最低限な個所に句読点を足してください。
                </p>
                <p className={styles.block_239}>
                  完全な文章とは、通常、主語と述語が含まれています。
                </p>
                <p className={styles.block_240}>Correct: 生牡蠣は美味しい。</p>
                <p className={styles.block_241}>
                  Explanation: 生牡蠣は(主語)美味しい(述語)を含みます。
                </p>
                <p className={styles.block_242}>
                  Correct:
                  で、ジョンは美味しい牡蠣が食べられるレストランへ行った。
                </p>
                <p className={styles.block_243}>
                  Explanation:
                  ジョンは(主語)行った(述語)を含みます。接続詞と文章というより、ひと
                  つの発話のように聞こえます。
                </p>
                <p className={styles.block_244}>
                  文法的には完全な文章ではないフレーズでも文脈によっては完全な文章とみなされる場合が
                  あります。例えば特定の質問に対する答えや、主語を省略しても自然に聞こえる場合などで
                  す。
                </p>
                <p className={styles.block_245}>
                  Correct: もうあなたは夕食を食べましたか?食べた。
                </p>
                <p className={styles.block_246}>
                  Correct: だれのこと話しているの?隣のおじさん。
                </p>
                <p className={styles.block_247}>
                  Explanation:
                  二人の会話です。隣のおじさん」が特定の質問に対する回答です。
                </p>
                <p className={styles.block_248}>
                  Correct: 明日パーティーに来るの?
                </p>
                <p className={styles.block_249}>
                  Explanation:
                  主語が省略されていますが、自然な文章になっています。センテンスとして扱
                  えるので疑問符をつけます。
                </p>
                <p className={styles.block_250}>
                  間投詞、あいさつ、別れの言葉が単独で用いられている場合は、完結した文章として句点を用
                  いてください。
                </p>
                <p className={styles.block_251}>Correct: ああ。</p>
                <p className={styles.block_252}>Explanation: 感嘆詞</p>
                <p className={styles.block_253}>Correct: こんにちは。</p>
                <p className={styles.block_254}>Explanation: あいさつ</p>
                <p className={styles.block_255}>
                  Correct: どうかお元気で。さようなら。
                </p>
                <p className={styles.block_256}>Explanation: 別れの言葉</p>
                <p className={styles.block_257}>
                  話し手がウエブ検索をするために発声したフレーズには句点をつけないでください。
                </p>
                <p className={styles.block_193}>Correct: オムライスの作り方</p>
                <p className={styles.block_258}>
                  Incorrect: オムライスの作り方。
                </p>
                <p className={styles.block_259}>
                  Correct: たくあん レシピ ジップロック
                </p>
                <p className={styles.block_260}>
                  Incorrect: たくあん、レシピ、ジップロック。
                </p>
                <p className={styles.block_202}>
                  Correct: こうきに電話をかけて。
                </p>
                <p className={styles.block_261}>
                  Correct: ショートメールを送りたい。
                </p>
                <p className={styles.block_262}>
                  Correct: 4 時 50 分に起こして。
                </p>
                <p className={styles.block_263}>
                  Correct: ウェブサイトを Google で開く。
                </p>
                <p className={styles.block_191}>
                  Correct: 新宿の地図を見せて下さい。
                </p>
                <p className={styles.block_264}>Correct: 音楽を聴く。</p>
                <p className={styles.block_197}>Correct: 明るさ調整。</p>
                <p className={styles.block_252}>Correct: GPS オン。</p>
                <p className={styles.block_265}>
                  もし発話が上記にあるルールや例には当てはまらず、あきらかにセンテンスではない場合、
                  句読点は入れません。
                </p>
                <p className={styles.block_266}>
                  横書きの句読点は、[。、]を用います。[. ,] または [, 。]
                  は使いません。
                </p>
                <p className={styles.block_267}>
                  Correct: これ、プレゼントです。
                </p>
                <p className={styles.block_262}>
                  Incorrect: これ,プレゼントです.
                </p>
                <p className={styles.block_268}>コンマ</p>
                <p className={styles.block_269}>
                  コンマは必要なときのみに入れます。できるだけ最小限におさえてください。イントネー
                </p>
                <p className={styles.block_270}>
                  ションで判断しないでください。
                </p>
                <p className={styles.block_271}>
                  Correct: 一番近くのガソリンスタンドはどこですか?
                </p>
                <p className={styles.block_272}>
                  Incorrect: 一番近くの、ガソリンスタンドは、どこですか?
                </p>
                <p className={styles.block_208}>
                  Explanation:
                  どんなに発話が長い場合でも、間を示すためにコンマを使用しないでくださ
                  い。もちろんん、コンマを使用して良い場合、または必要な場合はありますが、この例はコ
                  ンマを使用してはいけないものです。
                </p>
                <p className={styles.block_273}>
                  単語や句の後に続く文章の意味を明らかにするような単語や句が冒頭にある場合、その単語や
                  句の後にコンマを使用します。
                </p>
                <p className={styles.block_191}>
                  Correct: 富士山、山開きしましたか?
                </p>
                <p className={styles.block_274}>
                  Explanation: 富士山がこの文意になります。
                </p>
                <p className={styles.block_275}>
                  前置詞句、副詞句、導入節などの後にはコンマを入れます。
                </p>
                <p className={styles.block_276}>
                  Correct: 彼の話によると、彼女は真面目な人です。
                </p>
                <p className={styles.block_277}>Explanation: 前置詞句</p>
                <p className={styles.block_278}>
                  Correct: 驚いたことに、ハワイには夏時間がない。
                </p>
                <p className={styles.block_252}>Explanation: 副詞句</p>
                <p className={styles.block_279}>
                  文章が談話語、間投詞、または、はい・いいえの単語で始まる場合、コンマを使用します。し
                  かし談話語、間投詞、または、はい ・
                  いいえの単語とそれに続く完全な文との間に長い休止
                  がある場合は、別々の文として扱います。
                </p>
                <p className={styles.block_280}>
                  Correct: あの、六本木ヒルズはどこですか?
                </p>
                <p className={styles.block_193}>Correct: はい、そうします。</p>
                <p className={styles.block_281}>
                  Correct: そうそう、確かにできます。
                </p>
                <p className={styles.block_261}>
                  Correct: そうそう。確かにできます。
                </p>
                <p className={styles.block_243}>
                  Explanation:
                  談話語、間投詞、または、はい・いいえの単語の後に長い間があるときは句点
                  になります。
                </p>
                <p className={styles.block_282}>
                  あいさつの場合を除き、文頭または文末に出てくる話し相手はコンマで区切る必要がありま
                </p>
                <p className={styles.block_283}>す。</p>
                <p className={styles.block_255}>
                  Correct: ジョンさん、電話をください。
                </p>
                <p className={styles.block_248}>
                  Correct: お元気ですか、田中さん。
                </p>
                <p className={styles.block_284}>
                  「Ok
                  Google」が単独である場合には句読点を用いません。他のフレーズの前にあるときは
                  「Google」の後に読点を打ってください。
                </p>
                <p className={styles.block_285}>Correct: Ok Google</p>
                <p className={styles.block_286}>
                  Correct: Ok Google、オリーブの木の写真
                </p>
                <p className={styles.block_274}>
                  Correct: Ok Google、マルチーズの性格は?
                </p>
                <p className={styles.block_287}>
                  Correct: Ok Google、ポールの連絡先情報を表示して。
                </p>
                <p className={styles.block_198}>イントネーションと約物</p>
                <p className={styles.block_288}>
                  次の場合は疑問符を付けてください:
                  1)疑問文の構造で、質問を意図しているもの。2)疑問
                  文の構造でなくても質問を意図しているもの。
                </p>
                <p className={styles.block_264}>Correct: 本気ですか?</p>
                <p className={styles.block_198}>Incorrect: 本気ですか。</p>
                <p className={styles.block_289}>
                  Explanation:
                  疑問文の構造なのでトーンにかかわらず、疑問符がつきます。
                </p>
                <p className={styles.block_227}>Correct: 食べた?</p>
                <p className={styles.block_290}>
                  Explanation: 語尾のトーンが上がり、疑問符がつきます。
                </p>
                <p className={styles.block_291}>Correct: 3 時に?</p>
                <p className={styles.block_290}>
                  Explanation: 語尾のトーンが上がり、疑問符がつきます。
                </p>
                <p className={styles.block_292}>Correct: 本当?</p>
                <p className={styles.block_293}>Incorrect: 本当。</p>
                <p className={styles.block_294}>
                  Explanation: 語尾のトーンが上がり、疑問符がつきます。
                </p>
                <p className={styles.block_264}>Correct: 御殿場の天気</p>
                <p className={styles.block_295}>
                  Explanation:
                  トーンが上がっているが、質問ではなくウェブ検索をしようとしている。
                </p>
                <p className={styles.block_296}>
                  話し手が明らかに感嘆したイントネーションを使用している場合は、感嘆符を使用します。
                  明らかでない場合は句点を用います。
                </p>
                <p className={styles.block_227}>Correct: わーい!</p>
                <p className={styles.block_297}>
                  Explanation:
                  話し手が熱狂している様子を表す場合、語尾に「!」をつけます。
                </p>
                <p className={styles.block_227}>Correct: やった。</p>
                <p className={styles.block_298}>
                  Explanation: 話し手の感情が平常な場合は句点「。」を用います。
                </p>
                <p className={styles.block_299}>コロンと引用符</p>
                <p className={styles.block_300}>
                  引用符の中の文章が完結した文章である場合は句点を使用します。引用符が文章の途中にある
                  場合も、その句点の場所は変えません。右鍵括弧の後に余分な句点を使用しないでください。
                </p>
                <p className={styles.block_301}>
                  Correct: 田中さんは「3 時に会おう。」と言いました。
                </p>
                <p className={styles.block_302}>
                  Incorrect: 田中さんは次のように言いました「3 時に会おう。」。
                </p>
                <p className={styles.block_303}>
                  Explanation:
                  「」内の語句、文章が完結しているので句点を入れます。余分な句点を
                </p>
                <p className={styles.block_273}>
                  間接引用文の場合は引用符を用いないでください。文脈とイントネーションで間接引用か直接
                  引用かを判断してください。
                </p>
                <p className={styles.block_304}>
                  Correct: 子供たちがおなかが空いているか私に聞きました。
                </p>
                <p className={styles.block_305}>
                  Correct: 父は兄に早く起きろと言って出かけた。
                </p>
                <p className={styles.block_306}>
                  Explanation:
                  イントネーションから間接引用文であることがわかった。
                </p>
                <p className={styles.block_307}>
                  次のようにメタ言語学的に単語が使われている場合は引用符を用いてください。例えば、そ
                  の単語を定義する場合、その単語のスペリングを説明している時など、その単語を「物」の
                  ように扱っている場合。
                </p>
                <p className={styles.block_308}>
                  Correct: 「両手きき」を定義せよ。
                </p>
                <p className={styles.block_258}>
                  Incorrect: 両手ききを定義せよ。
                </p>
                <p className={styles.block_309}>その他の記号</p>
                <p className={styles.block_310}>
                  <span className={styles.text_4}>
                    平仮名、カタカナ、漢字、ローマ字、アルファベットの a から z
                    までの文字以外では、次の文
                    字・記号以外は使用しないでください。éÉ23、。・
                  </span>
                  <span className={styles.text_5}>〽</span>
                  <span className={styles.text_4}>「」『』</span>
                  <span className={styles.text_5}>〜</span>
                  <span className={styles.text_6}>?!~^\_°:.()&lt;&gt;{} </span>
                </p>
                <p className={styles.block_253}>[]√/@#$€£¥+=%*&amp;-</p>
                <p className={styles.block_311}>Correct: あ</p>
                <p className={styles.block_312}>
                  <span className={styles.text_4}>Incorrect: あ</span>
                  <span className={styles.text_5}>〜〜〜 </span>
                </p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_314}>
                  <span className={styles.text_4}>Correct: 東京</span>
                  <span className={styles.text_5}>〜</span>
                  <span className={styles.text_4}>大阪 </span>
                </p>
                <p className={styles.block_228}>読み上げられた句読点</p>
                <p className={styles.block_279}>
                  句読点のうち句点、読点、疑問符、感嘆符が単語として話された場合、記号ではなく言葉とし
                  て書き起こし波括弧{}
                  で囲みます。同音異義語に注意してください。単語として話された句
                  読点の後に句読点を付けないでください。URLなどにあるハイフン等は言葉として書き起こ
                  さず、記号を用いてください。
                </p>
                <p className={styles.block_315}>
                  Correct: お元気ですか {`{はてな}`}
                </p>
                <p className={styles.block_316}>Incorrect: お元気ですか?</p>
                <p className={styles.block_186}>
                  Incorrect: お元気ですか。はてな?
                </p>
                <p className={styles.block_317}>
                  Incorrect: お元気ですか。はてな
                </p>
                <p className={styles.block_318}>
                  Example audio: " おげんきですか はてな "
                </p>
                <p className={styles.block_319}>
                  Correct: はい {`{くとうてん くとうてん くとうてん}`}
                </p>
                <p className={styles.block_320}>
                  Example audio: " はい くとうてん くとうてん くとうてん "
                </p>
                <p className={styles.block_321}>
                  以外の句読点は単語としてではなく、句読点として転写します。
                </p>
                <p className={styles.block_322}>Correct: 住所は 5-4-6 です。</p>
                <p className={styles.block_258}>
                  Incorrect: 住所は 5 の 4 の 6 です
                </p>
                <p className={styles.block_323}>
                  Example audio: " じゅうしょはごのよんのろくです "
                </p>
                <p className={styles.block_324}>
                  句読点のうち句点、読点、疑問符、感嘆符が単語として単独で話された場合、記号ではなく言
                  葉として書き起こし波括弧{}で囲みます。
                </p>
                <p className={styles.block_325}>
                  Correct:{` {アンダースコア}`}
                </p>
                <p className={styles.block_326}>Incorrect: _</p>
                <p className={styles.block_327}>Incorrect: アンダースコア</p>
                <p className={styles.block_328}>
                  Example audio: " アンダースコア "
                </p>
                <p className={styles.block_329}>Correct: {`{ダッシュ}`}</p>
                <p className={styles.block_330}>Incorrect: -</p>
                <p className={styles.block_258}>
                  Incorrect: ダッシュフォーマット
                </p>
                <p className={styles.block_331}>
                  数字、略語等の書き起こしについてはこのセクションにあるフォーマットのルールに従って
                  下さい。
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_2}>数字</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>
                      漢字ではなく半角のアラビア数字
                      (1,2,3...)を用いてください。半角のアラビア数字の前後に
                    </sub>
                  </span>
                  <span className={styles.text_2}>
                    ある全角の文字との間にスペースを入れないでください。
                  </span>
                </p>
                <p className={styles.block_191}>
                  Correct: 教室に 9 人の学生がいます。
                </p>
                <p className={styles.block_205}>
                  Incorrect: 教室に九人学生がいます。
                </p>
                <p className={styles.block_333}>
                  桁数の大きい数で「万」以上の数字は、算用数字と「万」、「億」、「兆」等、4
                  桁ごとに単 位語で表記する。
                </p>
                <p className={styles.block_334}>Correct: 123 億 456 万円</p>
                <p className={styles.block_335}>
                  Example audio: "
                  ひゃくにじゅうさんおくよんひゃくごじゅうろくまんえん "
                </p>
                <p className={styles.block_336}>Correct: 89 万人</p>
                <p className={styles.block_337}>
                  Example audio: " はちじゅうきゅうまんにん "
                </p>
                <p className={styles.block_338}>Correct: 羊が 1000 匹</p>
                <p className={styles.block_339}>
                  Example audio: " ひつじがせんびき "
                </p>
                <p className={styles.block_340}>
                  数字が並んでいる場合は、数字と数字の間にコンマを用いません。
                </p>
                <p className={styles.block_28}>Correct: 0 1 1 2 3 5 8 13</p>
                <p className={styles.block_341}>
                  Incorrect: 0、1、1 、2、3、5、8、13
                </p>
                <p className={styles.block_342}>
                  Example audio: " ぜろ いち いち に さん ご はち じゅうさん "
                </p>
                <p className={styles.block_266}>
                  数式や単位や寸法などを表す場合、分数は半角の斜線を用いて表記する。
                </p>
                <p className={styles.block_343}>Correct: お酢 1/3 カッブ</p>
                <p className={styles.block_344}>
                  パーセンテージは算用数字と記号の「%」を使用する。(特殊なケースにおいて、例えば
                  「万」より大きな桁数の場合はその桁数とパーセントを言葉で表記する)
                </p>
                <p className={styles.block_345}>Correct: 牛乳 2%</p>
                <p className={styles.block_346}>Correct: 1 万パーセント</p>
                <p className={styles.block_347}>
                  特定の形式で数字を表記する必要があるケースでは、その形式に従ってください。それ以外
                  は一般的な表記ルールに従ってください。
                </p>
                <p className={styles.block_348}>
                  テレビやドラマシリーズなどの「シーズン」や
                  番組回数などは算用数字で書いてくださ い。
                </p>
                <p className={styles.block_349}>
                  Correct: 第 7 シーズン 第 2 話
                </p>
                <p className={styles.block_337}>
                  Example audio: " だいななシーズンだいにわ "
                </p>
                <p className={styles.block_350}>
                  製品名などで数字が使用されている場合一般に使われる表記方法を使用する。
                </p>
                <p className={styles.block_325}>Correct: ニューナンブ M60</p>
                <p className={styles.block_351}>
                  Example audio: " にゅーなんぶえむろくじゅう "
                </p>
                <p className={styles.block_352}>
                  電話番号は日本語で最もよく用いられる形式で表記する。
                </p>
                <p className={styles.block_55}>Correct: +81-3-1234-5678</p>
                <p className={styles.block_353}>
                  Example audio: "
                  プラスはちいちのさんのいちにさんしのごーろくななはち "
                </p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_193}>Correct: 1234-5678 外線 54</p>
                <p className={styles.block_354}>
                  Example audio: "
                  いちにさんしのごーろくななはちがいせんごーよん "
                </p>
                <p className={styles.block_355}>Correct: 6-1234-1234</p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_356}>Correct: 22-123-1234</p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_357}>Correct: 74-2-12-1234</p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_358}>Correct: 090-7979-1331</p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_359}>Correct: 0120-767-888</p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_359}>Correct: 0088-767-888</p>
                <p className={styles.block_313}>Explanation:</p>
                <p className={styles.block_279}>
                  製品番号などの表記はできるだけ一般的な形で(いくつかの表記方法があ可能性もある)表記
                  すること。クレジッドカード番号などは書き起こさないこと。
                </p>
                <p className={styles.block_360}>Correct: XT 660 or XT660</p>
                <p className={styles.block_347}>
                  明らかに数式を読んでいる、または話している場合、数式の記号は全角で書いてください。
                  数字と数式記号の間に半角スペースを入れないでください。
                </p>
                <p className={styles.block_361}>Correct: 5÷62</p>
                <p className={styles.block_362}>Correct: 5×6</p>
                <p className={styles.block_363}>Correct: √3</p>
                <p className={styles.block_364}>
                  Correct: 8 時間×12 ドルはいくら?
                </p>
                <p className={styles.block_365}>
                  Example audio: " はちじかんかけるじゅうにどるはいくら "
                </p>
                <p className={styles.block_366}>通貨と単位</p>
                <p className={styles.block_367}>
                  通貨は書き起こしている言語で一般的に用いられている方法で表記する。
                </p>
                <p className={styles.block_368}>
                  Correct: 1 万円は 1000 円の 10 倍です。
                </p>
                <p className={styles.block_369}>
                  Example audio: " いちまんえんはせんえんのじゅうばいです "
                </p>
                <p className={styles.block_370}>Correct: 10 ドル</p>
                <p className={styles.block_322}>
                  Example audio: " じゅうどる "
                </p>
                <p className={styles.block_371}>温度は°C で表記する。</p>
                <p className={styles.block_372}>Correct: 室温は 20°C です。</p>
                <p className={styles.block_337}>
                  Example audio: " しつおんはにじゅうどです "
                </p>
                <p className={styles.block_373}>
                  数字のあとに続く全ての単位は省略形で表記す。
                </p>
                <p className={styles.block_374}>Correct: 100W の電球</p>
                <p className={styles.block_337}>
                  Example audio: " ひゃくわっとのでんきゅう "
                </p>
                <p className={styles.block_375}>
                  単位の前にある数量を示す数字は算用数字で表記する。
                </p>
                <p className={styles.block_376}>
                  Correct: お父さんの体重は 70kg。
                </p>
                <p className={styles.block_377}>
                  Correct: 東京に引っ越して来てから 10 ヶ月になります。
                </p>
                <p className={styles.block_378}>
                  長さ、幅、高さについては単位を。。。
                </p>
                <p className={styles.block_379}>
                  Correct: 1024×768 の壁紙を検索して
                </p>
                <p className={styles.block_231}>
                  Example audio: "
                  せんにじゅうよんかけるななひゃくろくじゅうはちのかべがみをけんさ
                  くして "
                </p>
                <p className={styles.block_380}>Correct: 1000×2000×4000 の箱</p>
                <p className={styles.block_365}>
                  Example audio: " せんかけるにせんかけるよんせんのはこ "
                </p>
                <p className={styles.block_381}>単位の省略形</p>
                <p className={styles.block_382}>メガバイト - MB</p>
                <p className={styles.block_383}>キロバイト - kB</p>
                <p className={styles.block_384}>ギガバイト - GB</p>
                <p className={styles.block_385}>テラバイト - TB</p>
                <p className={styles.block_386}>距離や速度などの表記</p>
                <p className={styles.block_366}>インチ - in</p>
                <p className={styles.block_387}>フィート - ft</p>
                <p className={styles.block_388}>ヤード - yd</p>
                <p className={styles.block_389}>マイル - mi</p>
                <p className={styles.block_390}>ミリメートル - mm</p>
                <p className={styles.block_391}>センチ - cm</p>
                <p className={styles.block_392}>メーター - m</p>
                <p className={styles.block_393}>キロメートル - km</p>
                <p className={styles.block_394}>マイル時間 - mph</p>
                <p className={styles.block_395}>毎時キロメートル - km/h</p>
                <p className={styles.block_396}>面積の表記</p>
                <p className={styles.block_292}>平方インチ - in2</p>
                <p className={styles.block_397}>平方フット - ft2</p>
                <p className={styles.block_398}>平方マイル - mi2</p>
                <p className={styles.block_399}>平方センチメートル - cm2</p>
                <p className={styles.block_400}>平方メートル - m2</p>
                <p className={styles.block_401}>平方キロメートル - km2</p>
                <p className={styles.block_397}>エーカー - acre</p>
                <p className={styles.block_402}>一般的な科学用語</p>
                <p className={styles.block_403}>デシベル - dB</p>
                <p className={styles.block_404}>ニュートン - N</p>
                <p className={styles.block_389}>ジュール - J</p>
                <p className={styles.block_405}>パーセク - parsec</p>
                <p className={styles.block_292}>アンペア - amp</p>
                <p className={styles.block_389}>ヘルツ - Hz</p>
                <p className={styles.block_195}>ワット - W</p>
                <p className={styles.block_382}>キロワット - kW</p>
                <p className={styles.block_406}>カンデラ - cd</p>
                <p className={styles.block_407}>ルーメン - lm</p>
                <p className={styles.block_408}>度 - °</p>
                <p className={styles.block_227}>セルシウス度 - °C</p>
                <p className={styles.block_346}>ファーレンハイト度 - °F</p>
                <p className={styles.block_406}>ケルビン - °K</p>
                <p className={styles.block_409}>質量や体積の表記</p>
                <p className={styles.block_366}>ポンド - lb</p>
                <p className={styles.block_410}>オンス - oz</p>
                <p className={styles.block_411}>クォート - q</p>
                <p className={styles.block_391}>リットル - L</p>
                <p className={styles.block_412}>グラム - g</p>
                <p className={styles.block_398}>ミリグラム - mg</p>
                <p className={styles.block_292}>キログラム - kg</p>
                <p className={styles.block_385}>立方ユニット - 3</p>
                <p className={styles.block_400}>立方メートル - m3</p>
                <p className={styles.block_292}>立方インチ - in3</p>
                <p className={styles.block_413}>日付と時間</p>
                <p className={styles.block_414}>
                  自然な形式で年月日を表記する。
                </p>
                <p className={styles.block_415}>
                  Correct: 1964 年 7 月 12 日水曜日
                </p>
                <p className={styles.block_416}>
                  Example audio: "
                  せんきゅうひゃくろくじゅうよねんひてちがつじゅうににちすいよう
                  "
                </p>
                <p className={styles.block_417}>Correct: 80 年代の音楽</p>
                <p className={styles.block_418}>
                  Example audio: " はちじゅうねんだいのおんがく "
                </p>
                <p className={styles.block_340}>
                  日付が数字の羅列として話されている場合はそのように表記する。
                </p>
                <p className={styles.block_233}>
                  Correct: 賞味期限は 7/12/2012
                </p>
                <p className={styles.block_369}>
                  Example audio: " しょうみきげんはなないちににぜろいちに "
                </p>
                <p className={styles.block_375}>
                  出来る限り自然な一般的に用いられる方法で表記する。
                </p>
                <p className={styles.block_419}>
                  時刻は不自然でない場合は、hh:mm の形式で書いてください。
                </p>
                <p className={styles.block_420}>Correct: 3 時</p>
                <p className={styles.block_325}>Example audio: " さんじ "</p>
                <p className={styles.block_210}>
                  Correct: 4 時にアラームをセットする
                </p>
                <p className={styles.block_351}>
                  Example audio: " よじにアラームをセットする "
                </p>
                <p className={styles.block_421}>Correct: 1 時 50 分</p>
                <p className={styles.block_368}>
                  Example audio: " にじじゅっぷんまえ "
                </p>
                <p className={styles.block_422}>
                  話し手が午後・午前を示す「am」、「pm」を実際に発声した場合はそのまま表記する。
                </p>
                <p className={styles.block_423}>Correct: 12 時 pm</p>
                <p className={styles.block_424}>
                  Example audio: " じゅうにじピーエム "
                </p>
                <p className={styles.block_425}>
                  「正午」や「真夜中」は算用数字ではなくそのまま言葉で書き起こす。
                </p>
                <p className={styles.block_426}>Correct: 正午です。</p>
                <p className={styles.block_193}>Incorrect: 12:00 p.m です。</p>
                <p className={styles.block_415}>
                  Example audio: " しょうごです "
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_2}>住所</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>
                      書きおこす際に省略形を使用しないことが望ましいが、話し手が明らかに省略形で話してい
                    </sub>
                  </span>
                  <span className={styles.text_2}>
                    る場合は発声されたとおりに書き起こす。{' '}
                  </span>
                </p>
                <p className={styles.block_305}>
                  Correct: 163-8001 東京都新宿区西新宿 2-8-1
                </p>
                <p className={styles.block_428}>
                  Correct: 530-8201 大阪市北区中之島 1 丁目 3 番20号
                </p>
                <p className={styles.block_268}>ウェブ</p>
                <p className={styles.block_429}>
                  URL 、 e メールアドレス、 Twitter
                  のハッシュタグを記述する際、大文字を使用しないでく ださい。
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.google.co.jp </span>
                </p>
                <p className={styles.block_431}>
                  Example audio: "
                  ダブリューダブリュードットグーグルドットコムドットジェーピー "
                </p>
                <p className={styles.block_355}>Correct: amazon.com</p>
                <p className={styles.block_368}>
                  Example audio: " アマゾンドットコム "
                </p>
                <p className={styles.block_432}>Correct: jon@tokyo.jp</p>
                <p className={styles.block_369}>
                  Example audio: " ジョンアットとうきょうドットジェイピー "
                </p>
                <p className={styles.block_433}>Correct: ピザ好き #ピザ</p>
                <p className={styles.block_434}>
                  Example audio: " ピザずき シャープのマーク ピザ "
                </p>
                <p className={styles.block_435}>
                  話し手の言い間違いはそのまま書き起こします(例)「スラッシュ」を「バックスラッ
                  シュ」と間違えた時
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>http:\mail.yahoo.co.jp </span>
                </p>
                <p className={styles.block_437}>
                  Example audio: "
                  エイチティーティーピーコロンバックスラッシュバックスラッシュメール
                  ドットヤフードットシーオードットジェーピー "
                </p>
                <p className={styles.block_438}>
                  話し手が URL を言っている場合で、w や dot
                  を幾つか抜かしている場合、正しい形で書き起 こします。
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.google.com.ph </span>
                </p>
                <p className={styles.block_440}>
                  Example audio: "
                  ダブリューダブリュードットコムドットピーエイチ(ダブリューを一つ言
                  い忘れている) "
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.forbes.com </span>
                </p>
                <p className={styles.block_201}>
                  Example audio: "
                  ダブリューダブリューダブリューフォーブスドットコム(ドットをいちつ
                  いい忘れている) "
                </p>
                <p className={styles.block_442}>
                  話し手が URL
                  のスペルを一文字ずつ言っている場合、スペースなしの表記をします。
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.wikipedia.com </span>
                </p>
                <p className={styles.block_250}>
                  Example audio: "
                  ダブリューダブリューダブリュードットダブリューアイケイアイピーイー
                  ディーアイエードットコム "
                </p>
                <p className={styles.block_444}>省略形</p>
                <p className={styles.block_445}>
                  話し手が短縮形を使用している時以外は、短縮形で書き起こしません。
                </p>
                <p className={styles.block_446}>Correct: チョコを買った。</p>
                <p className={styles.block_186}>
                  Incorrect: チョコレートを買った。
                </p>
                <p className={styles.block_447}>
                  Example audio: " ちょこをかった "
                </p>
                <p className={styles.block_448}>
                  Correct: 学生が就職活動を始めた。
                </p>
                <p className={styles.block_449}>
                  Incorrect: 学生が就活を始めた。
                </p>
                <p className={styles.block_450}>
                  Example audio: " がくせいがしゅうしょくかつどうをはじめた "
                </p>
                <p className={styles.block_451}>
                  アクロニムでは、文字間にピリオドを入れません。
                </p>
                <p className={styles.block_334}>Correct: MP3 プレーヤー</p>
                <p className={styles.block_252}>Explanation: 省略形</p>
                <p className={styles.block_452}>
                  ブランド名にピリオドが含まれる場合、文字間にピリオドを入れます。
                </p>
                <p className={styles.block_453}>Correct: J. C. Penny</p>
                <p className={styles.block_454}>
                  Example audio: " j c ペニー "
                </p>
                <p className={styles.block_455}>
                  Explanation: ピリオドを含んだ公式の社名
                </p>
                <p className={styles.block_229}>Example audio: " ダッシュ "</p>
                <p className={styles.block_456}>合意済みのスペリング</p>
                <p className={styles.block_457}>
                  <span className={styles.text_2}>
                    固有名詞等、表記方法に関していくつかのオプションが考えられる言葉のスペリングのルー
                    ル
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>ルペリングの読み上げ </sub>
                  </span>
                </p>
                <p className={styles.block_444}>感動詞</p>
                <p className={styles.block_458}>
                  笑い声や、単語ではない発声は、最大 3
                  音節まで言葉を転写します。
                </p>
                <p className={styles.block_459}>Correct: ハハハ、ららら</p>
                <p className={styles.block_448}>
                  Incorrect: ハハハハハ ららららら
                </p>
                <p className={styles.block_290}>
                  Example audio: " は は は は は ら ら ら ら "
                </p>
                <p className={styles.block_460}>
                  Explanation: 3 音節以上は書き起こしません。
                </p>
                <p className={styles.block_461}>固有名詞</p>
                <p className={styles.block_462}>
                  固有名詞には公式の表記(綴りや、大文字小文字や句読点の使用など)を用います。検索して
                  正しい形式を確認して下さい。公式な表記方法が本ドキュメントのルールと異なっている場
                  合でも公式なものを使用してください。
                </p>
                <p className={styles.block_463}>
                  著名人、芸能人などは公式の表記を用います。
                </p>
                <p className={styles.block_464}>Correct: 本田美奈子.</p>
                <p className={styles.block_228}>Incorrect: 本田美奈子</p>
                <p className={styles.block_465}>
                  Example audio: " ほんだみなこ "
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_2}>
                    Explanation: 総画数が 31
                    画になるように、名前の後に「.」を付け改名。読みは変わりませ
                    ん
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>
                      固有名詞に日本語では用いられないような発音符(é, ü,
                      ç)などが含まれる場合はそのとおり表
                    </sub>
                  </span>
                  <span className={styles.text_2}>
                    記してください。よくわからない場合は新聞記事、自治体、有名人のウェブサイト、
                    IMDb, Wikipedia, Google Maps
                    などを参照してください。もし資料がないときは、グーグル検索
                    の検索結果で一番上に出てきたものを選んでください。
                  </span>
                </p>
                <p className={styles.block_273}>
                  個人名で文脈からはどのような表記方法かわからない時は、グーグル検索で最も多く検索結果
                  が出てくる表記方法にしてください。その際の検索方法は例えば、「渡部
                  名前」と「渡邉 名前」と「渡部
                  名前」で検索します(その際鍵括弧は必要ありません)
                </p>
                <p className={styles.block_193}>Correct: 伊藤さんを呼んで。</p>
                <p className={styles.block_454}>
                  Incorrect: 伊東さんを呼んで。
                </p>
                <p className={styles.block_368}>
                  Example audio: " いとうさんをよんで "
                </p>
                <p className={styles.block_467}>
                  Explanation:
                  検索した際多くの検索結果が得られる漢字変換を採用します。この場合は「伊
                  藤 名前」のほうが「伊東
                  名前」より多く検索結果がでたとしています。
                </p>
                <p className={styles.block_293}>ブランド・製品名</p>
                <p className={styles.block_468}>
                  該当する団体のウェブサイト(特に公式文書など)があればそちらを、またはウィキペディ
                  ア、IMDb
                  ページなどを参考にして表記してください。もし不明瞭な場合はそれらのプライバ
                  シーポリシーを参照してください。他に資料がない場合はグーグル検索で最初の検索結果に出
                  てきたものを参考にしてください。
                </p>
                <p className={styles.block_469}>
                  Correct: ヤフーで働いている。
                </p>
                <p className={styles.block_470}>Correct: トイザらス</p>
                <p className={styles.block_471}>
                  検索や何かの機能を開始するために発声する「Ok Google」や「Ok
                  Glass」はこのまま表記 します
                </p>
                <p className={styles.block_285}>Correct: Ok Google</p>
                <p className={styles.block_358}>Correct: Ok Google Now</p>
                <p className={styles.block_472}>
                  Correct: Ok Google、スターバックスはどこ?
                </p>
                <p className={styles.block_473}>Correct: オッケー!</p>
                <p className={styles.block_474}>Example audio: " okkay "</p>
                <p className={styles.block_475}>
                  Explanation:
                  日本語のアクセントで「OK」と言っている。また話者のイントネーションか
                  ら感嘆符を要するケース。
                </p>
                <p className={styles.block_291}>メディアタイトル</p>
                <p className={styles.block_476}>
                  メディアタイトルは Google Play
                  ストアを参考にしてください。メディアタイトルなのか文
                  章なのかウェブ検索か不明瞭なときは、一番可能性が高いと判断できるものにしてくださ
                  い。本当にわからない時は、メディアタイトルとして扱ってください。
                </p>
                <p className={styles.block_446}>Correct: スター・ウォーズ</p>
                <p className={styles.block_477}>Incorrect: Star Wars</p>
                <p className={styles.block_299}>複数の表記方法</p>
                <p className={styles.block_478}>
                  同音異義語でどちらの言葉かかわからないときは、文脈で判断する。もし文脈でも判断でき
                  ない場合はグーグル検索の結果を参考にする。
                </p>
                <p className={styles.block_305}>
                  Correct: 荒井さんはあちらの部署に異動したよ。
                </p>
                <p className={styles.block_479}>
                  Incorrect: 荒井さんはあちらの部署に移動したよ。
                </p>
                <p className={styles.block_347}>
                  専門用語や技術用語はそのまま公式なものを使用してください。検索して正しいフォーマッ
                  トを確認して下さい。
                </p>
                <p className={styles.block_480}>
                  Correct: アグリゲイティバクター・アクチノミセテムコミタンス
                </p>
                <p className={styles.block_193}>Correct: 頚椎椎間板ヘルニア</p>
                <p className={styles.block_481}>
                  スラングや口語体、また一般的ではない話し方をしていても当人にとっては自然である場
                  合、その通りに表記する。
                </p>
                <p className={styles.block_202}>
                  Correct: あんた、何言ってんの?
                </p>
                <p className={styles.block_192}>
                  Incorrect: あなた、何を言っているの?
                </p>
                <p className={styles.block_482}>Correct: 食べれる</p>
                <p className={styles.block_483}>Incorrect: 食べられる</p>
                <p className={styles.block_484}>Example audio: " 食べれる "</p>
                <p className={styles.block_279}>
                  意味不明で一般的な日本語の言葉ではないと思った時は、その単語を検索してください。明ら
                  かな候補が出てきた場合は、その単語を記述してください。
                </p>
                <p className={styles.block_227}>Correct: きょどる</p>
                <p className={styles.block_485}>
                  Explanation:
                  話し手が「きょどる」と言った。ナンセンスワードのようだが実際に筆記者が
                  検索したところ、正しい書き方がわかった。
                </p>
                <p className={styles.block_407}>Correct: 謎い</p>
                <p className={styles.block_486}>
                  意味不明で一般的な日本語の言葉ではないと思った場合で、検索しても明らかな結果が出ない
                  時は、もし発音がはっきりしていて簡単にその言葉を書き起こすことが出来る場合は、その
                  とおり書き起こしてください。
                </p>
                <p className={styles.block_459}>Correct: とむさのむもよ</p>
                <p className={styles.block_402}>分かりづらい発声</p>
                <p className={styles.block_487}>
                  問題のある音声(バックグランドノイズ、出だしの言い間違えや言い淀み、など)や別の言
                  語に関して
                </p>
                <p className={styles.block_488}>Skipping a prompt</p>
                <p className={styles.block_489}>言い淀みや中断</p>
                <p className={styles.block_490}>
                  話し手が電話で強調するために、同じ文章を頭から繰り返した場合でも、全て書き起こしてく
                  ださい。
                </p>
                <p className={styles.block_280}>
                  Correct: イグアナを検索。イグアナを検索。
                </p>
                <p className={styles.block_203}>
                  Correct: ニューヨークの天気は?ニューヨークの天気は?
                </p>
                <p className={styles.block_491}>
                  言葉のほんの一部(一文字や一音分)が切れていた場合で単語が明らかな場合は、補足する。
                  不明瞭な場合は、補足しない。また、途切れた言葉が文末にある場合、句点を使用しないこ
                </p>
                <p className={styles.block_283}>と。</p>
                <p className={styles.block_469}>
                  Correct: 東京に住んでいます。
                </p>
                <p className={styles.block_318}>
                  Example audio: " とうきょに住んでいます "
                </p>
                <p className={styles.block_492}>
                  Explanation: 東京の最後の音「う」が抜けています。
                </p>
                <p className={styles.block_446}>Correct: 東京に住んでいま</p>
                <p className={styles.block_337}>
                  Example audio: " とうきょうににすんでいま "
                </p>
                <p className={styles.block_493}>
                  Explanation:
                  とうきょうにすんでい「ます」か「ません」か不明のため。
                </p>
                <p className={styles.block_458}>
                  引用の途中で途切れている場合、途中であっても鍵括弧で閉じます。
                </p>
                <p className={styles.block_494}>
                  Correct:
                  鈴木さんはこういったのです。「もしも皆さんがこれから」
                </p>
                <p className={styles.block_495}>
                  Example audio: "
                  すずきさんはこういったのですもしみなさんがこれから。。。。 "
                </p>
                <p className={styles.block_274}>
                  Explanation: 後半の引用が途切れています。
                </p>
                <p className={styles.block_490}>
                  数字に関しては、話し手が意図していた番号を全わなかった場合、聞こえた部分だけを書き起
                  こす。
                </p>
                <p className={styles.block_91}>Correct: Xbox 36</p>
                <p className={styles.block_328}>
                  Example audio: " xbox さんろく- "
                </p>
                <p className={styles.block_496}>
                  Explanation:
                  話しては「さんろくまる」と言おうとしたが「まる」が途切れている。
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_2}>um</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>uh </sub>
                  </span>
                </p>
                <p className={styles.block_498}>right</p>
                <p className={styles.block_499}>you know</p>
                <p className={styles.block_500}>so</p>
                <p className={styles.block_501}>like</p>
                <p className={styles.block_502}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_503}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_2}>ah</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>ermhm </sub>
                  </span>
                </p>
                <p className={styles.block_505}>
                  話者の声の音量の変化、二人以上の会話
                </p>
                <p className={styles.block_444}>外国語</p>
                <p className={styles.block_466}>
                  <span className={styles.text_2}>発音</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre1}>
                      標準語ではない発音の場合、標準語の発音で表記する。標準語ではない発音とは、例えば方言
                    </sub>
                  </span>
                  <span className={styles.text_2}>
                    で通常話している人や、日本語を学習中の人や、外国人の発音等を指す。
                  </span>
                </p>
                <p className={styles.block_506}>Correct: どうもありがとう。</p>
                <p className={styles.block_507}>Incorrect: どもありがとっ。</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Long Form Generic Rules"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default LongFormGenericRules

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
