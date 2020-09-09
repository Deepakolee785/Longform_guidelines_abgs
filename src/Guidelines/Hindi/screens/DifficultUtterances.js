import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Hindi" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances </p>
              <p className={styles.block_}>&nbsp;</p>
              <p className={styles.block_142}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or di erent{' '}
              </p>
              <p className={styles.block_142}>language varieties. </p>
              <p className={styles.block_}>&nbsp;</p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt </p>
                <p className={styles.block_142}>
                  The instructions in this section are for PeraPera. In Crowd
                  Compute, instead of tagging as [skip] the utterances that
                  cannot be transcribed, click in the 'Cannot transcribe' button
                  and select the appropriate reason.{' '}
                </p>
                <p className={styles.block_142}>
                  If the prompt is dif cult to understand, listen to the audio
                  several times to try to understand the speaker. If you can
                  understand the speaker, transcribe the utterance. However, if
                  after replaying the audio you still cannot understand the
                  speaker, skip.{' '}
                </p>
                <p className={styles.block_142}>
                  Skip the utterance if it: contains at least some word(s) that
                  cannot be understood; is in a different language typically not
                  understood; contains no speech; contains only laughter;
                  contains singing; contains only synthesized speech (e.g. the
                  voices of Google Now or Siri) and/or pre-recorded speech (e.g.
                  TV or radio).{' '}
                </p>
                <p className={styles.block_142}>
                  For utterances that contain both user-generated speech and
                  pre-recorded or synthesized speech, transcribe user-generated
                  speech and ignore the pre-recorded/synthesized speech.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>कल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मौसम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कसा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होगा</span>
                  <span className={styles.text_3}>? User asks, "</span>
                  <span className={styles.text_2}>कल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मौसम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कसा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होगा</span>
                  <span className={styles.text_3}>?" Machine responds, "</span>
                  <span className={styles.text_2}>कल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होगी</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_142}>
                  If a prompt contains nonsense words, search them on the
                  internet. If no clear results are found and the word is
                  unintelligible (there is no single obvious spelling), [skip]
                  it.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>[skip] Speaker says, "</span>
                  <span className={styles.text_2}>जो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सावधानी</span>
                  <span className={styles.text_3}>
                    " and then says something unintelligible.{' '}
                  </span>
                </p>
                <p className={styles.block_142}>Click to copy </p>
                <p className={styles.block_142}>
                  If the speaker sings, [skip]. Use the tag [music] if an entire
                  utterance is music from an instrument, radio, TV, etc.{' '}
                </p>
                <p className={styles.block_142}>
                  [skip] if audio contains only laughter. Ignore laughter that
                  is interspersed with speech (transcribe only the speech).{' '}
                </p>
                <p className={styles.block_142}>
                  Profanity should be fully transcribed. Under very rare
                  circumstances, extremely offensive profanity can be skipped.{' '}
                </p>
                <p className={styles.block_142}>
                  If the context of an alpha-digit sequence suggests it may be a
                  password, credit card number, social security number, etc.,
                  then use [skip].{' '}
                </p>
                <p className={styles.block_142}>Hesitations and truncations </p>
                <p className={styles.block_142}>
                  Do not transcribe false starts unless they are complete words.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>अिमताभ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>अमी</span>
                  <span className={styles.text_4}>- </span>
                  <span className={styles.text_2}>अिमताभ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>बस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थोड़ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_4}>- </span>
                  <span className={styles.text_2}>बस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थोड़ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>बड़ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बड़ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>बड़ा</span>
                  <span className={styles.text_4}>- [pause] </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बड़ा</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  If a user repeats a sentence for the sake of the phone, format
                  the repetition as a sentence if it's restating (as a sentence)
                  what the person has said.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>रॉक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डाउनलोड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रॉक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डाउनलोड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मौसम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदखाओ।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मौसम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कसा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>िकस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मशीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बगीच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करोग</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_2}>बगीच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>साफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करोग</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_142}>
                  If the repeated phrase is part of the sentence that just
                  happens to form a sentence on its own (possibly under a di
                  erent interpretation), format it as a fragment. While "weed a
                  garden" can be a command, it is ambiguous and is most likely a
                  fragment in this context.{' '}
                </p>
                <p className={styles.block_142}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>भपित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>महश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भपित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>भपित</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>महश</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>भपत</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>Final sound "</span>
                  <span className={styles.text_2}>इ</span>
                  <span className={styles.text_3}>" was truncated. </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मनीष</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वसत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>मनीष</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>वसत</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>क</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>
                    Unclear whether they would have said "
                  </span>
                  <span className={styles.text_2}>कमार</span>
                  <span className={styles.text_3}> " or "</span>
                  <span className={styles.text_2}>कज</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>अिमताभ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>िमताभ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  If a truncation occurs mid-quote, use an end quotation mark
                  even if there is possibly more intended content.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>सनील</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोला</span>
                  <span className={styles.text_3}>, "</span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>काम</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_142}>
                  Transcribe repeated words as many times as uttered, but [skip]
                  if a phrase is repeated more than ve times.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लोग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>इस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अअअअ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पाच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लोग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>[skip] </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  For numbers, stick to what is uttered, even if you know this
                  is not all the speaker is going to say.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>टावर</span>
                  <span className={styles.text_3}> 2 </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>टावर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दो</span>
                  <span className={styles.text_4}>-" </span>
                </p>
                <p className={styles.block_142}>
                  Do not transcribe ller words unless intended by the speaker to
                  be transcribed. Never lengthen them.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कमर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आह</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>दख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कमर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आआआह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऐसा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहो।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"[sigh or loud </sup>
                    <sup className={styles.calibre3}>breath]</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>तम</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ऐसा</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>कहो</sup>
                    <sup className={styles.calibre3}>।</sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_142}>
                  Sounds like a full sentence.{' '}
                </p>
                <p className={styles.block_142}>
                  He was like, "uh"{' '}
                  <i className={styles.calibre1}>"he was like uhhhh" </i>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बदमाश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech </p>
                <p className={'text'}>
                  Only transcribe foreground speech. A user's speech may go from
                  the foreground to the background or vice versa (determined by
                  change in volume) and can be accompanied by change in speaker
                  audience.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गल</span>
                  <span className={styles.text_3}> Speaker says loudly, "</span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गल</span>
                  <span className={styles.text_3}> " and then quietly, "</span>
                  <span className={styles.text_2}>आप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बोलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ढढगा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>शान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होटल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_2}>हम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ना</span>
                  <span className={styles.text_3}>
                    ? The speaker changes audience but not volume, so transcribe
                    both sentences.{' '}
                  </span>
                </p>
                <p className={styles.block_142}>
                  If one person clearly speaks in the foreground and someone
                  speaks in the background, transcribe the main speaker and
                  ignore the rest.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>राधा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कॉल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो।</span>
                  <span className={styles.text_3}>
                    {' '}
                    Foreground speaker said, "
                  </span>
                  <span className={styles.text_2}>राधा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कॉल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो।</span>
                  <span className={styles.text_3}>
                    "; background speaker said, "
                  </span>
                  <span className={styles.text_2}>मीरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कॉल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करो।</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_142}>
                  If two people take turns, without overlap, and are both in the
                  foreground at roughly the same volume, transcribe the speech
                  of both speakers. Separate the dialogue of different speakers
                  with end punctuation.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थ</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मिदर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>था।</span>
                  <span className={styles.text_3}> First speaker asked "</span>
                  <span className={styles.text_2}>तम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थ</span>
                  <span className={styles.text_3}>
                    ?", other person answered "
                  </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मिदर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>था।</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>पानी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>परी।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मझ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चािहए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थी।</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>पानी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>परी</span>
                  <span className={styles.text_3}>
                    " is a fragment, but use a period to separate the speech of
                    di erent speakers.{' '}
                  </span>
                </p>
                <p className={styles.block_142}>
                  If two or more people are speaking at once with no one clearly
                  in the foreground, tag as [overlapping]. Do this for overlaps
                  longer than one second. Use this tag even when one person is a
                  bit louder than the other(s) and you can tell what they're
                  saying.{' '}
                </p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language </p>
                <p className={'text'}>
                  Do not skip utterances that contain words in English. Most of
                  them should be transcribed using Devanagari characters. Only
                  use Latin characters for English words if they are
                  measurements units, URLs, company names or tech words.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>हलो</span>
                  <span className={styles.text_3}>
                    {' '}
                    NOT: hello{' '}
                    <sup className={styles.calibre3}>
                      Use Devanagari characters for common words in English{' '}
                    </sup>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>mp3, jpeg NOT: </span>
                  <span className={styles.text_2}>३</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>पग</span>
                  <span className={styles.text_3}>
                    {' '}
                    <sup className={styles.calibre3}>
                      Use Latin characters for technical words{' '}
                    </sup>
                  </span>
                </p>
                <p className={styles.block_142}>
                  km, MB, C, dB Use Latin characters for measurement units{' '}
                </p>
                <p className={styles.block_142}>
                  YouTube. Samsung. Gmail. Use Latin characters for company
                  names that are not normally written in Devanagari{' '}
                </p>
                <p className={styles.block_142}>9/27/2018 hi-IN_TEST_SET </p>
                <p className={styles.block_186}>
                  <span className={styles.text_2}>हरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पॉटर</span>
                  <span className={styles.text_3}> NOT: Harry Potter </span>
                </p>
                <p className={styles.block_142}>
                  Use Devanagari for media titles{' '}
                </p>
                <p className={styles.block_187}>
                  and therefore should be transcribed) can include names of
                  foreign foods or places, pop culture phrases like "capisce",
                  and greetings or thank yous in prominent world languages.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>चलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िडम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खाए।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>िप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ओवन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बनात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>छोटो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>लकर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बड़ो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>तक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आइस</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खाना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पसद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>होता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>हलो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सर</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हाल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>
                    ? In Hindi, common English words and phrases like "hello"
                    should be transcribed if they are included in Hindi
                    sentences.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  <span className={styles.text_5}>
                    The following tips will help you if you're using Chrome
                    input tools extension (
                  </span>
                  <span className={styles.text_6}>
                    https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklk
                    jcocdinagocijmpgbhab
                  </span>
                  <span className={styles.text_5}>
                    ) to generate Devanagari characters using an English
                    keyboard. Please note that the correct characters may not be
                    the rst choice, so please choose the correct word in
                    accordance with these guidelines.{' '}
                  </span>
                </p>
                <p className={styles.block_151}>
                  How to type vowels using an English keyboard.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> (a) =&gt; </span>
                  <span className={styles.text_2}>अनार</span>
                  <span className={styles.text_3}> (anaar), </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> (ghar) </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> (aa) =&gt; </span>
                  <span className={styles.text_2}>आम</span>
                  <span className={styles.text_3}> (aam), </span>
                  <span className={styles.text_2}>काम</span>
                  <span className={styles.text_3}> (kaam), </span>
                  <span className={styles.text_2}>कराया</span>
                  <span className={styles.text_3}> (karaayaa) </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>इ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इ</span>
                  <span className={styles.text_3}> (i) =&gt; </span>
                  <span className={styles.text_2}>इमली</span>
                  <span className={styles.text_3}> (imlii), </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रचय</span>
                  <span className={styles.text_3}> (parichay), </span>
                  <span className={styles.text_2}>यिद</span>
                  <span className={styles.text_3}> (yadi) </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}> (ii) =&gt; </span>
                  <span className={styles.text_2}>ईनाम</span>
                  <span className={styles.text_3}> (inaam), </span>
                  <span className={styles.text_2}>झील</span>
                  <span className={styles.text_3}> (jheel), </span>
                  <span className={styles.text_2}>गाडी</span>
                  <span className={styles.text_3}> (gaadi) </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> (u) =&gt; </span>
                  <span className={styles.text_2}>उषा</span>
                  <span className={styles.text_3}> (ushaa), </span>
                  <span className={styles.text_2}>कछआ</span>
                  <span className={styles.text_3}> (kachhuaa), </span>
                  <span className={styles.text_2}>िक</span>
                  <span className={styles.text_3}> (kintu) </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ऊ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऊ</span>
                  <span className={styles.text_3}> (uu) =&gt; </span>
                  <span className={styles.text_2}>ऊन</span>
                  <span className={styles.text_3}> (uun), </span>
                  <span className={styles.text_2}>खन</span>
                  <span className={styles.text_3}> (khuun), </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> (ullu) </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ओ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ओ</span>
                  <span className={styles.text_3}> (o) =&gt; </span>
                  <span className={styles.text_2}>ओशो</span>
                  <span className={styles.text_3}> (osho), </span>
                  <span className={styles.text_2}>समोसा</span>
                  <span className={styles.text_3}> (samosaa), </span>
                  <span className={styles.text_2}>जानो</span>
                  <span className={styles.text_3}> (jaano) </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>औ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>औ</span>
                  <span className={styles.text_3}> (au) =&gt; </span>
                  <span className={styles.text_2}>औरत</span>
                  <span className={styles.text_3}> (aurat) and </span>
                  <span className={styles.text_2}>मखौटा</span>
                  <span className={styles.text_3}> (mukhauta) </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ऑ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऑ</span>
                  <span className={styles.text_3}> (au) =&gt; </span>
                  <span className={styles.text_2}>ऑन</span>
                  <span className={styles.text_3}> (on), </span>
                  <span className={styles.text_2}>सॉ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> (song) and </span>
                  <span className={styles.text_2}>डॉग</span>
                  <span className={styles.text_3}> (dog) </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}> (e) =&gt; </span>
                  <span className={styles.text_2}>एक</span>
                  <span className={styles.text_3}> (ek), </span>
                  <span className={styles.text_2}>अनक</span>
                  <span className={styles.text_3}> (anek), </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> (gatte) </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ऐ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऐ</span>
                  <span className={styles.text_3}> (ae) =&gt; </span>
                  <span className={styles.text_2}>ऐतहािसक</span>
                  <span className={styles.text_3}> (aetihaasik) </span>
                </p>
                <p className={styles.block_151}>
                  How to type consonants using an English keyboard.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> (k) =&gt; </span>
                  <span className={styles.text_2}>करता</span>
                  <span className={styles.text_3}> (kartaa) [to do] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ख</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ख</span>
                  <span className={styles.text_3}> (kh) =&gt; </span>
                  <span className={styles.text_2}>खराब</span>
                  <span className={styles.text_3}> (kharaab) [bad] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> (g) =&gt; </span>
                  <span className={styles.text_2}>गमला</span>
                  <span className={styles.text_3}> (gamlaa) [pot] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>घ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घ</span>
                  <span className={styles.text_3}> (gh) =&gt; </span>
                  <span className={styles.text_2}>घर</span>
                  <span className={styles.text_3}> (ghar) [house] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> (ch) =&gt; </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> (chammach) [spoon] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>छ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छ</span>
                  <span className={styles.text_3}> (chh) =&gt; </span>
                  <span className={styles.text_2}>छतरी</span>
                  <span className={styles.text_3}> (chatrii) [umbrella] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ज</span>
                  <span className={styles.text_3}>
                    {' '}
                    (ja) =&gt; (jaanwar) [animal]{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>झ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>झ</span>
                  <span className={styles.text_3}> (jha) =&gt; </span>
                  <span className={styles.text_2}>झरना</span>
                  <span className={styles.text_3}> (jharnaa) [stream] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ट</span>
                  <span className={styles.text_3}> (tta) =&gt; </span>
                  <span className={styles.text_2}>टमाटर</span>
                  <span className={styles.text_3}> (tamaatar) [tomato] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ठ</span>
                  <span className={styles.text_3}> (ttha) =&gt; </span>
                  <span className={styles.text_2}>ठ</span>
                  <span className={styles.text_3}> (thand) [cold] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ड</span>
                  <span className={styles.text_3}> (dda) =&gt; </span>
                  <span className={styles.text_2}>डािकया</span>
                  <span className={styles.text_3}> (daakiya) [postman] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> (ta) =&gt; </span>
                  <span className={styles.text_2}>तोता</span>
                  <span className={styles.text_3}> (totaa) [parrot] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>थ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थ</span>
                  <span className={styles.text_3}> (tha) =&gt; </span>
                  <span className={styles.text_2}>थोड़ा</span>
                  <span className={styles.text_3}> (thoda) [a little] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> (da) =&gt; </span>
                  <span className={styles.text_2}>दीदी</span>
                  <span className={styles.text_3}> (didi) [sister] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ध</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ध</span>
                  <span className={styles.text_3}> (dha) =&gt; </span>
                  <span className={styles.text_2}>धिनया</span>
                  <span className={styles.text_3}>
                    {' '}
                    (dhaniyaa) [coriander]{' '}
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> (pa) =&gt; </span>
                  <span className={styles.text_2}>पागल</span>
                  <span className={styles.text_3}> (paagal) [mad] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>फ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>फ</span>
                  <span className={styles.text_3}> (pha) =&gt; </span>
                  <span className={styles.text_2}>फल</span>
                  <span className={styles.text_3}> (phal) [fruit] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> (ba) =&gt; </span>
                  <span className={styles.text_2}>बत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> (bartan) [vessel] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>भ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भ</span>
                  <span className={styles.text_3}> (bha) =&gt; </span>
                  <span className={styles.text_2}>भाल</span>
                  <span className={styles.text_3}> (bhaalu) [bear] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> (ma) =&gt; </span>
                  <span className={styles.text_2}>माता</span>
                  <span className={styles.text_3}> (maataa) [mother] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}> (ya) =&gt; </span>
                  <span className={styles.text_2}>यार</span>
                  <span className={styles.text_3}> (yaar) [friend] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> (ra) =&gt; </span>
                  <span className={styles.text_2}>रोना</span>
                  <span className={styles.text_3}> (rona) [to cry] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}> (la) =&gt; </span>
                  <span className={styles.text_2}>लाल</span>
                  <span className={styles.text_3}> (lal) [red] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>व</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>व</span>
                  <span className={styles.text_3}> (va) =&gt; </span>
                  <span className={styles.text_2}>वीर</span>
                  <span className={styles.text_3}> (viir) [brave] </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> (ha) =&gt; </span>
                  <span className={styles.text_2}>हरी</span>
                  <span className={styles.text_3}> (Harry) </span>
                </p>
                <p className={styles.block_151}>
                  How to type two of the same consonants in a row using an
                  English keyboard.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_3}>
                    (ka + virama + ssa) =&gt;{' '}
                  </span>
                  <span className={styles.text_2}>व</span>
                  <span className={styles.text_3}> (vriksh) [tree] </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> bachcha </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> chammach </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>छ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> chatta </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वल</span>
                  <span className={styles.text_3}> ujjval </span>
                </p>
                <p className={styles.block_165}>
                  How to type two different consonants in a row using an English
                  keyboard.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>िच</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> chitthi </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ाग</span>
                  <span className={styles.text_3}> tyaag </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> jwar </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>ार</span>
                  <span className={styles.text_3}> pyaar </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> acchaa </span>
                </p>
                <p className={styles.block_151}>
                  How to type words that involve "r" using an English keyboard.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>पव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> parvat </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> mantr </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>इ</span>
                  <span className={styles.text_3}> indr </span>
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents </p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects,{' '}
                </p>
                <p className={styles.block_151}>
                  language learners, or speakers from different countries.{' '}
                </p>
                <p className={styles.block_188}>&nbsp;</p>
                <p className={styles.block_188}>&nbsp;</p>
                <p className={styles.block_159}>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भाषा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एकदम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बिढ़या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भाषा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एकदम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भिड़या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>मरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भाषा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एकदम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भिड़या</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_3}>Person said "</span>
                  <span className={styles.text_2}>भिड़या</span>
                  <span className={styles.text_3}>" with a "</span>
                  <span className={styles.text_2}>भ</span>
                  <span className={styles.text_3}>
                    " sound, but it should still be spelled as standard.{' '}
                  </span>
                </p>
                <p className={styles.block_189}>
                  <span className={styles.text_7}>ब</span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>गल</span>
                  <span className={styles.text_8}> NOT: </span>
                  <span className={styles.text_7}>बगलर</span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_9}>
                    . <sup className={styles.calibre5}>Person said "</sup>
                  </span>
                  <span className={styles.text_10}>
                    <sup className={styles.calibre5}>बगलर</sup>
                  </span>
                  <span className={styles.text_9}>
                    <sup className={styles.calibre5}>"</sup>
                  </span>
                  <span className={styles.text_9}>
                    <sup className={styles.calibre5}>
                      {' '}
                      but it should still be spelled as standard.{' '}
                    </sup>
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
