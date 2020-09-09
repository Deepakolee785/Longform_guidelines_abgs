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
            <PageContentHeader currentPage="Longform Korean" />
            <div className="content text">
              <p className={styles.block_273}>Punctuation</p>
              <p className={styles.block_274}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <p className={styles.block_275}>Fragments versus sentences</p>
              <p className={styles.block_276}>
                Add punctuation where needed, but err on the side of keeping it
                minimal.
              </p>
              <p className={styles.block_277}>
                Full sentences should end with a punctuation mark.
              </p>
              <p className={styles.block_278}>
                In general, a complete sentence contains a subject and a verb.
              </p>
              <p className={styles.block_279}>
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a specific question, or
                if it's an example where dropping the subject sounds completely
                natural as a complete sentence.
              </p>
              <p className={styles.block_280}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_10}>: 언제 할 거야? 이따가. </span>
                <span className={styles.text_11}>E</span>
                <span className={styles.text_12}>XPLANATION</span>
                <span className={styles.text_13}>
                  : Two speakers. "이따가." is an answer to{' '}
                </span>
              </p>
              <p className={styles.block_281}>a specific question.</p>
              <p className={styles.block_282}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_10}>: 이따가 </span>
                <span className={styles.text_11}>E</span>
                <span className={styles.text_12}>XPLANATION</span>
                <span className={styles.text_11}>
                  : No context to suggest this is a sentence;
                </span>
              </p>
              <p className={styles.block_283}>treat it as a fragment.</p>
              <p className={styles.block_284}>
                Interjections, greetings, and farewells said in isolation should
                be considered complete sentences and punctuated as such.
              </p>
              <p className={styles.block_285}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 잘 가. </span>
              </p>
              <p className={styles.block_286}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 잘 가 </span>
              </p>
              <p className={styles.block_287}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 잘 가 " </span>
              </p>
              <p className={styles.block_288}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 안녕. </span>
              </p>
              <p className={styles.block_289}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 안녕 </span>
              </p>
              <p className={styles.block_290}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 안녕 " </span>
              </p>
              <p className={styles.block_291}>
                Do not punctuate phrases that are intended to be used by the
                speaker as a web search, not as full sentences.
              </p>
              <p className={styles.block_266}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 강아지 사진 </span>
              </p>
              <p className={styles.block_292}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 강아지 사진. </span>
              </p>
              <p className={styles.block_293}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 강아지 사진 " </span>
              </p>
              <p className={styles.block_294}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : Web searches should not be punctuated.{' '}
                </span>
              </p>
              <p className={styles.block_295}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_10}>: 감자 굽는 방법 </span>
                <span className={styles.text_14}>E</span>
                <span className={styles.text_15}>XAMPLE AUDIO</span>
                <span className={styles.text_16}>: " 감자 굽는 방법 " </span>
              </p>
              <p className={styles.block_296}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 감자 굽는 방법. </span>
              </p>
              <p className={styles.block_297}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : Web searches should not be punctuated.{' '}
                </span>
              </p>
              <p className={styles.block_298}>
                Add end punctuation to sentence fragments that sound like the
                end of a sentence. For fragments that do not clearly sound like
                the end of a sentence, leave out punctuation. Note that sentence
                fragments may be a result of cut-off audio samples.
              </p>
              <p className={styles.block_299}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_10}>
                  : 어떻게 생각해? 그건 마치{' '}
                </span>
                <span className={styles.text_11}>E</span>
                <span className={styles.text_12}>XPLANATION</span>
                <span className={styles.text_11}>
                  : Sentence-initial fragment ends mid-{' '}
                </span>
              </p>
              <p className={styles.block_300}>stream.</p>
              <p className={styles.block_301}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_10}>
                  : 그건 얼마에 엄마가 오라는데{' '}
                </span>
                <span className={styles.text_11}>E</span>
                <span className={styles.text_12}>XPLANATION</span>
                <span className={styles.text_11}>
                  : Both sound like beginnings of{' '}
                </span>
              </p>
              <p className={styles.block_302}>sentences.</p>
              <p className={styles.block_303}>
                A voice action is a query where the user requests a specific
                action that a smartphone can complete. The action requested is
                generally expressed by a trigger (most often a verb describing
                the action to be performed, but it can also be any other part of
                speech denoting a change of state of the device or of an app).
                If a voice action sounds complete, it should be capitalized and
                punctuated as a full sentence. In contrast to a voice action, a
                web search is a query where the user does not request a specific
                action that a smartphone can complete. Web searches are more
                often, but not always, spoken as true fragments.
              </p>
              <p className={styles.block_304}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 김주원한테 문자 보내 줘.{' '}
                </span>
              </p>
              <p className={styles.block_305}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 이기민에게 전화해. </span>
              </p>
              <p className={styles.block_306}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 오전 3 시에 깨워 줘. </span>
              </p>
              <p className={styles.block_307}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 일정 추가 10 시 안내판 수령.{' '}
                </span>
              </p>
              <p className={styles.block_308}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 음악을 재생해 줘. </span>
              </p>
              <p className={styles.block_309}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 다음 지도 실행. </span>
              </p>
              <p className={styles.block_308}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 진동 모드로 바꿔. </span>
              </p>
              <p className={styles.block_310}>
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not capitalize or punctuate it as a
                sentence.
              </p>
              <p className={styles.block_311}>Commas</p>
              <p className={styles.block_312}>
                Only use commas where required. Err on the side of minimal
                punctuation. Do not rely on intonation.
              </p>
              <p className={styles.block_313}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 화장실이 어디 있지? </span>
              </p>
              <p className={styles.block_314}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 화장실이, 어디 있지? </span>
              </p>
              <p className={styles.block_315}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : Even if the speaker uses long pauses in these places, do not
                  use a comma. There are places where commas are allowed or
                  required, but this example contains neither.
                </span>
              </p>
              <p className={styles.block_316}>
                For complete sentences that follow a single word or phrase that
                focuses the meaning of a sentence, put a comma after the single
                word or phrase.
              </p>
              <p className={styles.block_317}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 사과, 배 또는 오렌지 사 와.{' '}
                </span>
              </p>
              <p className={styles.block_318}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 사과 배 또는 오렌지 사 와.{' '}
                </span>
              </p>
              <p className={styles.block_319}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 사과 배 또는 오렌지 사 와 "{' '}
                </span>
              </p>
              <p className={styles.block_320}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 선생님이 말씀하시길, 친구와 싸우지 말아라.
                </span>
              </p>
              <p className={styles.block_321}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 선생님이 말씀하시길 친구와 싸우지 말아 라.
                </span>
              </p>
              <p className={styles.block_322}>
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However: If there is a long pause
                between a discourse word, interjection, or yes/no word and a
                full sentence that follows it, treat that initial word as a
                separate sentence.
              </p>
              <p className={styles.block_323}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 예, 지금 가겠습니다. </span>
              </p>
              <p className={styles.block_324}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 예 지금 가겠습니다. </span>
              </p>
              <p className={styles.block_242}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 예 지금 가겠습니다 " </span>
              </p>
              <p className={styles.block_325}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 음, 회사 소유하고 있다고 알고 있었는데.{' '}
                </span>
              </p>
              <p className={styles.block_326}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 음 회사 소유하고 있다고 알고 있었는데.{' '}
                </span>
              </p>
              <p className={styles.block_327}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 음 회사 소유하고 있다고 알고 있었 는데 "
                </span>
              </p>
              <p className={styles.block_328}>Use commas in lists.</p>
              <p className={styles.block_329}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 저는 음악 듣기, 영화 보기, 요리하기, 그리고 자전거 타기를
                  좋아합니다.
                </span>
              </p>
              <p className={styles.block_330}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 저는 음악 듣기 영화 보기 요리하기 그리고 자전거 타기를
                  좋아합니다.
                </span>
              </p>
              <p className={styles.block_327}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 저는 음악 듣기 영화 보기 요리하기 그리고 자전거 타기를
                  좋아합니다 "
                </span>
              </p>
              <p className={styles.block_331}>
                Use commas for non-restrictive modifiers, but do not use commas
                for restrictive modifiers. The basic test for this is whether
                the modifier can be dropped from the sentence and still keep
                basically the same meaning.
              </p>
              <p className={styles.block_332}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 예약을 한 사람들은 다른 사람들보다 먼저 서비스를 받을
                  것이다.
                </span>
              </p>
              <p className={styles.block_333}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 예약을 한 사람들은, 다른 사람들보다 먼저 서비스를 받을
                  것이다.
                </span>
              </p>
              <p className={styles.block_334}>
                Use commas in sign-offs, such as those at the end of a message.
                Do not use end punctuation.
              </p>
              <p className={styles.block_335}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 경비실에 맡기고 갑니다, 경동택배{' '}
                </span>
              </p>
              <p className={styles.block_336}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 경비실에 맡기고 갑니다 경동택배{' '}
                </span>
              </p>
              <p className={styles.block_337}>
                Do not use commas in sentences that consist only of a greeting
                and an addressee. If a greeting occurs at the beginning of a
                sentence or fragment, place a comma after the greeting. If the
                greeting includes an addressee, place the comma after the
                addressee.
              </p>
              <p className={styles.block_338}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 안녕 해연. </span>
              </p>
              <p className={styles.block_339}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 안녕, 해연. </span>
              </p>
              <p className={styles.block_340}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 안녕 해연 " </span>
              </p>
              <p className={styles.block_341}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 안녕 수진아, 나 해연이야.{' '}
                </span>
              </p>
              <p className={styles.block_342}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 안녕 수진아 나 해연이야.{' '}
                </span>
              </p>
              <p className={styles.block_343}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 안녕 수진아 나 해연이야 "{' '}
                </span>
              </p>
              <p className={styles.block_344}>
                Except in greetings, sentence-initial and sentence-final
                addressees should be separated by a comma.
              </p>
              <p className={styles.block_345}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 서준아, 메시지 확인하면 전화해 줘.{' '}
                </span>
              </p>
              <p className={styles.block_346}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 서준아 메시지 확인하면 전화해 줘.{' '}
                </span>
              </p>
              <p className={styles.block_347}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 서준아 메시지 확인하면 전화해 줘 "{' '}
                </span>
              </p>
              <p className={styles.block_348}>
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".
              </p>
              <p className={styles.block_349}>
                <span className={styles.text_2}>C</span>
                <span className={styles.text_3}>ORRECT</span>
                <span className={styles.text_2}>: Ok Google </span>
              </p>
              <p className={styles.block_350}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: Ok Google, 강아지 사진 </span>
              </p>
              <p className={styles.block_351}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : Ok Google, 엄마한테 전화해 줘.{' '}
                </span>
              </p>
              <p className={styles.block_352}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : Ok Google 엄마한테 전화해 줘{' '}
                </span>
              </p>
              <p className={styles.block_353}>Intonation marks</p>
              <p className={styles.block_354}>
                Punctuate the following as questions: 1) All queries
                syntactically built as questions, regardless of intonation. 2)
                All queries which sound like they are being used as questions,
                regardless of sentence structure.
              </p>
              <p className={styles.block_355}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 수진이 갔다고? </span>
              </p>
              <p className={styles.block_356}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 수진이 갔다고 </span>
              </p>
              <p className={styles.block_357}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : The rising intonation at the end of the sentence suggests it
                  is a question.
                </span>
              </p>
              <p className={styles.block_358}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 오전 3 시에? </span>
              </p>
              <p className={styles.block_359}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 오전 세시에 </span>
              </p>
              <p className={styles.block_360}>
                If a speaker uses clearly exclamatory intonation, use an
                exclamation point. If there is any doubt, err on the side of
                using period.
              </p>
              <p className={styles.block_361}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 완전 맛있어! </span>
              </p>
              <p className={styles.block_292}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 완전 맛있어. </span>
              </p>
              <p className={styles.block_293}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 완전 맛있어 " </span>
              </p>
              <p className={styles.block_362}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : Speaker sounds enthusiastic.{' '}
                </span>
              </p>
              <p className={styles.block_363}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 완전 맛있어. </span>
              </p>
              <p className={styles.block_292}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 완전 맛있어! </span>
              </p>
              <p className={styles.block_293}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 완전 맛있어 " </span>
              </p>
              <p className={styles.block_364}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : Speaker sounds unenthused.{' '}
                </span>
              </p>
              <p className={styles.block_365}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 완전 맛있는데! </span>
              </p>
              <p className={styles.block_366}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 완전 맛있는데. </span>
              </p>
              <p className={styles.block_367}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 완전 맛있는데 " </span>
              </p>
              <p className={styles.block_362}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : Speaker sounds enthusiastic.{' '}
                </span>
              </p>
              <p className={styles.block_368}>Colon and quotation</p>
              <p className={styles.block_369}>
                Use a period between reported speech verbs and direct
                quotations. Do not put punctuation within quotation marks unless
                the punctuation belongs to the reported speech.
              </p>
              <p className={styles.block_370}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 친구가 말했다. "괜찮아?"{' '}
                </span>
              </p>
              <p className={styles.block_371}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 친구가 말했다 "괜찮아?"{' '}
                </span>
              </p>
              <p className={styles.block_372}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 친구가 말했다. "괜찮아".{' '}
                </span>
              </p>
              <p className={styles.block_373}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 친구가 말했다. "괜찮아?".{' '}
                </span>
              </p>
              <p className={styles.block_374}>
                If the text in quotation marks qualifies as a sentence,
                punctuate as if it were its own utterance. Do not alter its end
                punctuation even if the quote is within a sentence. Do not add
                excess punctuation after end quotation marks.
              </p>
              <p className={styles.block_209}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 그가 말했다 "난 끝났어."{' '}
                </span>
              </p>
              <p className={styles.block_210}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 그가 말했다 "난 끝났어".{' '}
                </span>
              </p>
              <p className={styles.block_375}>
                Do not use quotation marks for indirect quotes. Use context and
                functional words to determine whether a quote is direct or
                indirect.
              </p>
              <p className={styles.block_376}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 아이들이 나에게 배가 고프다고 말했다.{' '}
                </span>
              </p>
              <p className={styles.block_377}>
                <span className={styles.text_8}>C</span>
                <span className={styles.text_9}>ORRECT</span>
                <span className={styles.text_10}>
                  : 수진이가 토요일에 못 오겠다고 말했다.{' '}
                </span>
                <span className={styles.text_11}>E</span>
                <span className={styles.text_12}>XPLANATION</span>
                <span className={styles.text_13}>
                  : The particle "고" implies indirect quote.
                </span>
              </p>
              <p className={styles.block_378}>
                Use a colon but no quotation marks in quotative voice actions
                when the quote follows the command. Use quotation marks when the
                quote is in the middle of the sentence.
              </p>
              <p className={styles.block_379}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 영어로 해석하기: 지금 몇 시야?{' '}
                </span>
              </p>
              <p className={styles.block_380}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 영어로 해석하기 "지금 몇 시야?"{' '}
                </span>
              </p>
              <p className={styles.block_315}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : The quote follows the command, so use a colon and omit
                  quotation marks.
                </span>
              </p>
              <p className={styles.block_381}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 영어로 "사랑해." 어떻게 말해?{' '}
                </span>
              </p>
              <p className={styles.block_382}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 영어로: "사랑해." 어떻게 말해?{' '}
                </span>
              </p>
              <p className={styles.block_383}>
                <span className={styles.text_2}>E</span>
                <span className={styles.text_3}>XPLANATION</span>
                <span className={styles.text_2}>
                  : The quote is in the middle of the sentence, so use quotation
                  marks and omit the colon.
                </span>
              </p>
              <p className={styles.block_384}>
                When speakers make a request for single words to be translated
                into another language, don't punctuate or capitalize the words,
                even if you'd consider the words as sentences in other
                situations.
              </p>
              <p className={styles.block_385}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : "hello" 를 한국말로 번역.{' '}
                </span>
              </p>
              <p className={styles.block_220}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : "Hello" 를 한국말로 번역.{' '}
                </span>
              </p>
              <p className={styles.block_386}>
                Do not use quotation marks for metalinguistic uses of words or
                phrases. These uses include defining the word, talking about the
                spelling of the word, or any other type of reference to the word
                itself as a thing.
              </p>
              <p className={styles.block_387}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 아리가토는 일본어로 고마워요라는 뜻이다.{' '}
                </span>
              </p>
              <p className={styles.block_388}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : "아리가토" 는 일본어로 "고마워요" 라는 뜻 이다..
                </span>
              </p>
              <p className={styles.block_389}>Other symbols</p>
              <p className={styles.block_390}>
                Apart from Hangeul letters and the letters a through z, you
                should not use any other symbol than: 0-9
                äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                []√/@#$€£+= %*&amp;-.;
              </p>
              <p className={styles.block_391}>
                When two opposing teams are mentioned, include a hyphen between
                their names.
              </p>
              <p className={styles.block_392}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 기아-두산 게임에 갈 거야?{' '}
                </span>
              </p>
              <p className={styles.block_393}>
                Include a hyphen between locations in flight itineraries.
              </p>
              <p className={styles.block_394}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 인천-캘리포니아 비행 </span>
              </p>
              <p className={styles.block_395}>Spoken punctuation</p>
              <p className={styles.block_396}>
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.)
              </p>
              <p className={styles.block_397}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 뭐라고 했어 {`{물음표}`}{' '}
                </span>
              </p>
              <p className={styles.block_398}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 뭐라고 했어? </span>
              </p>
              <p className={styles.block_399}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 뭐라고 했어 물음표 </span>
              </p>
              <p className={styles.block_400}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 뭐라고 했어 물음표? </span>
              </p>
              <p className={styles.block_242}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 뭐라고 했어 물음표 " </span>
              </p>
              <p className={styles.block_401}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 만나서 반갑습니다{` {느낌표} `}
                </span>
              </p>
              <p className={styles.block_402}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 만나서 반갑습니다! </span>
              </p>
              <p className={styles.block_224}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 만나서 반갑습니다 느낌표 "{' '}
                </span>
              </p>
              <p className={styles.block_403}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>
                  : 다시 말해 줄래 {`{물음표}`}{' '}
                </span>
              </p>
              <p className={styles.block_404}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>: 다시 말해 줄래? </span>
              </p>
              <p className={styles.block_233}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 다시 말해 줄래 물음표 "{' '}
                </span>
              </p>
              <p className={styles.block_405}>
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.
              </p>
              <p className={styles.block_406}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: 나는 4-A 반이야. </span>
              </p>
              <p className={styles.block_407}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  : 나는 4 {`{다시}`}A 반이야.{' '}
                </span>
              </p>
              <p className={styles.block_408}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 나는 사 다시 에이 반이야 "{' '}
                </span>
              </p>
              <p className={styles.block_409}>
                <span className={styles.text_2}>C</span>
                <span className={styles.text_3}>ORRECT</span>
                <span className={styles.text_2}>: www.fake-domain.com </span>
              </p>
              <p className={styles.block_410}>
                <span className={styles.text_5}>I</span>
                <span className={styles.text_6}>NCORRECT</span>
                <span className={styles.text_7}>
                  :{` www {쩜} fake {붙임표} domain {쩜} com`}{' '}
                </span>
              </p>
              <p className={styles.block_327}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>
                  : " 더블류 더블류 더블류 쩜 에프 에이 케이 이 붙임표 디 오 엠
                  에이 아이 엔 쩜 컴 "
                </span>
              </p>
              <p className={styles.block_411}>
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.
              </p>
              <p className={styles.block_412}>
                <span className={styles.text_5}>C</span>
                <span className={styles.text_6}>ORRECT</span>
                <span className={styles.text_7}>: {`{쉼표}`} </span>
              </p>
              <p className={styles.block_413}>
                <span className={styles.text_2}>I</span>
                <span className={styles.text_3}>NCORRECT</span>
                <span className={styles.text_2}>: , </span>
              </p>
              <p className={styles.block_290}>
                <span className={styles.text_5}>E</span>
                <span className={styles.text_6}>XAMPLE AUDIO</span>
                <span className={styles.text_7}>: " 쉼표 " </span>
              </p>
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
