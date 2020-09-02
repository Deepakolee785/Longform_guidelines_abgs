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
            <PageContentHeader currentPage="longform Malayalam" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_46}>
                  േഹഹ, ഹാ, ഹാഹാ, േഹേഹ, ബൂ ഹൂ, ലാലാല
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_2}>ഹാഹാഹാ </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>ഹാഹാഹാഹാഹാ</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_17}>
                  Ignore actual laughter that is included within speech. If the
                  entire audio contains only laughter, use the [skip] tag in
                  PeraPera or select the appropriate reason from the 'Cannot
                  transcribe' menu in Crowd Compute.
                </p>
                <p className={styles.block_35}>എനി റിയാം!</p>
                <p className={styles.block_36}>
                  [skip] ഓഡിേയായിൽ ഉടനീളം യഥാർ ചിരി, െനടുവീർ ിടൽ, മുതലായവ മാ
                  തമാണ.
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use of cial spelling and punctuation for proper names. Google
                  them and pay attention to the correct format. Of cial format
                  and spelling of a proper name may supercede the usual written
                  transcription conventions detailed in this document.
                </p>
                <p className={styles.block_58}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_2}>വിശാലിെന വിളി ുക. N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: വിഷാലിെന വിളി ുക. </span>
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_2}>മാെ ാണാൾഡ N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: മെ ാണാൾഡ </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially of cial documents), if available,
                  or the Wikipedia or IMDb page. In cases of ambiguity, defer to
                  their privacy policy. If no other sources, use top Google
                  hits.
                </p>
                <p className={styles.block_46}>അവൻ േജാലിെച ു ത Google ആണ.</p>
                <p className={styles.block_14}>YouTube</p>
                <p className={styles.block_17}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_52}>Ok Google</p>
                <p className={styles.block_14}>Ok Google Now</p>
                <p className={styles.block_42}>Ok Google, എവിെടയാണ ാർബ ?</p>
                <p className={styles.block_36}>Ok Google, നാര</p>
                <p className={styles.block_42}>ഓെക.</p>
                <p className={styles.block_36}>ഓെക, േഡവിഡ.</p>
                <p className={styles.block_42}>ഓെക േഡവിഡ, ന ു േപാകാം.</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for of cial spellings of media
                  titles. For lm/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_17}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_46}>
                  േകാൾ ഓഫ ഡ ൂ ി: ാ ഒപിഎസ2 വിെ ീൻേഷാ
                </p>
                <p className={styles.block_42}>റിഹാനയുെട ഡയമ േ െച ുക.</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>

                <p className={styles.block_62}>
                  When multiple spellings are attested, use the rst spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_2}>ചുവ N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: െചമ </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre1}>
                      ചുവ എ താണ ഇ െപാതുവായി പേയാഗ ിലു ത.{' '}
                    </sup>
                  </span>
                </p>
                <p className={styles.block_17}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the [skip] tag in PeraPera or select the appropriate reason
                  from the 'Cannot transcribe' menu in Crowd Compute.
                </p>
                <p className={styles.block_46}>മ ാവു</p>
                <p className={styles.block_36}>
                  [skip] സംസാരി ു യാൾ ഒരു പൂ െയ അനുകരി ു ു.
                </p>
                <p className={styles.block_51}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_2}>ഞാൻ അത െച ി . N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: ഞാൻ അത െച ി . </span>
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_2}>നിെ േപര എ താ? N</span>
                  <span className={styles.text_3}>OT</span>
                  <span className={styles.text_2}>: നിെ േപര എ ാണ? </span>
                </p>
                <p className={styles.block_17}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_17}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech, like "want to", "going to" for "wanna",
                  "gonna".
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_2}>ഇവിെട വരു. </span>
                  <span className={styles.text_12}>"</span>
                  <span className={styles.text_11}>ഈെട വാ</span>
                  <span className={styles.text_12}>" </span>
                </p>
                <p className={styles.block_17}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_26}>മലിനീകരണനം തടയണം</p>
                <p className={styles.block_23}>
                  മലിനീകരണം എ ാണ സംസാരി ു യാൾ ഉേ ശി ത. പെ അവസാന ിൽ "നം" എ ത
                  അധികമായി േചർ ു.
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
