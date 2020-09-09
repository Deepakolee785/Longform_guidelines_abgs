import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
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
              {' '}
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_205}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_207}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_208}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 짜장면과 짬뽕을 먹었다.{' '}
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 짜장면과 짬봉을 먹었다.{' '}
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 햄버거와 콜라를 먹었다.{' '}
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 함버거와 콜라를 먹었다.{' '}
                  </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_213}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_214}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 우리 아이는 피아노를 잘 친다.{' '}
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 우리 아이는 피아노들을 잘 친다.{' '}
                  </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 계란 한 개를 먹었다. </span>
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 계란들 한개를 먹었다.{' '}
                  </span>
                </p>
                <p className={styles.block_218}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 게장에 밥을 비벼 먹었다.{' '}
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 개장에 밥을 비벼 먹었다.{' '}
                  </span>
                </p>
                <p className={styles.block_221}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 선생님이 그러라고 했지롱.{' '}
                  </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 선생님이 그러라고 하셨어.{' '}
                  </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 선생님이 그러라고 했지롱 "{' '}
                  </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_226}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 내가 뭐라 했지? </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 내가 뭐라고 했지? </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " 내가 뭐라 했지 " </span>
                </p>
                <p className={styles.block_230}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 언제 언제 언제 만날까?{' '}
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 언제 만날까? </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 언제 언제 언제 만날까 "{' '}
                  </span>
                </p>
                <p className={styles.block_234}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-” wherever the false start is happening
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I need to get a new tele- telephone{' '}
                  </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : The driver got out of the driver got into the car.
                  </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I really don't think Hey that's a good idea, let's do
                    that!
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_239}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 빠빠한테 전화 걸어. </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 아빠한테 전화 걸어. </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>
                    : " 빠빠한테 전화 걸어 "{' '}
                  </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "빠빠" can be used as a nickname for "dad", but due to the
                    similar sound it can be mistaken for the more commonly used
                    word "아빠" (dad).
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_245}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 서울에서 가장 높은 빌딩이 뭐지?{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 서울에서 _가장 높은 빌딩이 뭐지?{' '}
                  </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 그래, 한번 해 보자. </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 그래, _한번 해 보자 </span>
                </p>
                <p className={styles.block_250}>
                  Transcribe based on usual spacing rules. If you have any
                  doubt, look for the prompt in 표준국어 대사전 using the
                  following : http://stdweb2.korean.go.kr/main.jsp If the prompt
                  exists in 표준국어 대사전, it should be transcribed without a
                  space.
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 전화하다. </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 전화 하다. </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "전화하다" exists in the dictionary.{' '}
                  </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 게임 하다. </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 게임하다. </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "게임하다" does not exist in the dictionary.
                  </span>
                </p>
                <p className={styles.block_257}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 오는 중이야? </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 오는 중이야 ? </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 안녕하세요, 반갑습니다.{' '}
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 안녕하세요 , 반갑습니다.{' '}
                  </span>
                </p>
                <p className={styles.block_261}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : 수민 씨가 "사랑해" 라고 말했다.{' '}
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : 수민 씨가 "사랑해 " 라고 말했다.{' '}
                  </span>
                </p>
                <p className={styles.block_263}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>
                    : "개" 를 일본어로 번역.{' '}
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>
                    : "개"를 일본어로 번역.{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  Particles and suffixes should be attached to the previous
                  word.
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 하나만 먹어 </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 하나 만 먹어 </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>: "만" is a particle. </span>
                </p>
                <p className={styles.block_269}>
                  Bound nouns should be transcribed with spaces.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_7}>: 약속한 대로 </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_5}>I</span>
                  <span className={styles.text_6}>NCORRECT</span>
                  <span className={styles.text_7}>: 약속한대로 </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_5}>E</span>
                  <span className={styles.text_6}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "대로" is a bound noun.{' '}
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
