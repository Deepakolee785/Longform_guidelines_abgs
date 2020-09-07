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
            <PageContentHeader currentPage="longform Hindi" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling </p>
              <p className={styles.block_148}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out </p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>पा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}> Person said "</span>
                  <span className={styles.text_2}>पा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}>" and then spelled it. </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>इ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऊ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऐ</span>
                  <span className={styles.text_3}> spelled out alphabet </span>
                </p>
                <p className={styles.block_174}>
                  amazon.co.uk{' '}
                  <i className={styles.calibre1}>"amazon dot c o dot u k" </i>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>सीईओ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>सी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ओ</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>सभी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>वीआईपी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बठ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग।</span>
                  <span className={styles.text_3}> spelled out "</span>
                  <span className={styles.text_2}>वी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पी</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>
                    FIFA Pronounced the word as "
                  </span>
                  <span className={styles.text_2}>फीफा</span>
                  <span className={styles.text_3}>", or spelled out "</span>
                  <span className={styles.text_2}>एफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>एसीएए</span>
                  <span className={styles.text_3}> Speaker says "</span>
                  <span className={styles.text_2}>एन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डबल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>", or "</span>
                  <span className={styles.text_2}>एन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>एएए</span>
                  <span className={styles.text_3}> Speaker says "</span>
                  <span className={styles.text_2}>िट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>", or "</span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉ</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>आनद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जानता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डॉ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आनद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>को</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जानता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>िम</span>
                  <span className={styles.text_3}>.</span>
                  <span className={styles.text_2}>शमा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आएग।</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>िम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>शमा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नही</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आएग।</span>
                  <span className={styles.text_4}>" </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections </p>
                <p className={styles.block_150}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.{' '}
                </p>
                <p className={styles.block_163}>
                  heh, ha, haha, hahaha, hehe, hehehe, boo hoo, boo hoo hoo,
                  lalala{' '}
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हा</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_151}>
                  Ignore actual laughter that is included within speech. If the
                  entire audio contains only laughter, use the [skip] tag in
                  PeraPera or select the appropriate reason from the 'Cannot
                  transcribe' menu in Crowd Compute.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>अर</span>
                  <span className={styles.text_3}>
                    ! actual laughter followed by "
                  </span>
                  <span className={styles.text_2}>अर</span>
                  <span className={styles.text_3}>
                    " with clear exclamatory intonation{' '}
                  </span>
                </p>
                <p className={styles.block_174}>
                  [skip] Entire audio contains only actual laughter, sighs, etc.{' '}
                </p>
                <p className={styles.block_151}>
                  Spellings of common interjections{' '}
                </p>
                <p className={styles.block_178}>
                  <span className={styles.text_2}>आह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ओह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अजी</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>भगवान</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>राम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हट</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हाहा</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>बाप</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अहा</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names </p>
                <p className={styles.block_150}>
                  Use of cial spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Of cial format and spelling of a proper name may
                  supercede the usual written transcription conventions detailed
                  in this document.{' '}
                </p>
                <br />
                <p className={'text'}>Common spellings of names </p>
                <p className={styles.block_178}>
                  <span className={styles.text_2}>आिद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अिनल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अिभषक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अनीता</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>अकर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अिकत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अहमद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>आचल</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>आशा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऐ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>एकल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>उमग</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>उषा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऋिष</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अगद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कीित</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>कशव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कपा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>का</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>खशब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ख़शी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गौतम</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रमा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>घन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ाम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चपक</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>चीना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िचरजीव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>छिव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िजत</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>जीिवका</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जागित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जयित</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>झलक</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>झम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>टीना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डिवड</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ितलक</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>तनय</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदवश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदवाकर</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>िदनश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>धवल</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>नमन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िनतश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नीत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नीना</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>नवीन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>नीरव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>परी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीित</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>भात</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पिण</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पनम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िबमला</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>भावना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मीरा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मीनल</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मिहमा</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>महश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मीना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रशमा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रवती</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>रीता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रीटा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रोिहत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>िसमरन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ानश</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>यवराज</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product </p>
                <p className={'text '}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially of cial documents), if available,
                  or the Wikipedia or IMDb page. In cases of ambiguity, defer to
                  their privacy policy. If no other sources, use top Google
                  hits.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>वो</span>
                  <span className={styles.text_3}> Amazon </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>काम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>करता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> Yahoo </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> Nokia </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>समझौता</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>हो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गया</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> Pizza Hut </span>
                  <span className={styles.text_2}>और</span>
                  <span className={styles.text_3}> Subway </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>अ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>खाती</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_174}>YouTube </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>Kolkata Knight Riders </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जीत</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_3}>Apple </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>सामन</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>बाए</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मड़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>जाए।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_148}>
                  Burger King NOT: BURGER KING{' '}
                  <sup className={styles.calibre3}>
                    Do not spell "Burger King" all in upper case as in the
                    stylized form of the logo, stick to the o{' '}
                  </sup>
                  <sup className={styles.calibre3}>cial</sup>
                  <sup className={styles.calibre3}>
                    {' '}
                    form as per the privacy policy.{' '}
                  </sup>
                </p>
                <p className={styles.block_148}>LEGO NOT: Lego </p>
                <p className={styles.block_151}>
                  Spellings of common Brand and Product names{' '}
                </p>
                <p className={styles.block_181}>1D 3DS 4 Pics 1 Word 4chan </p>
                <p className={styles.block_182}>Abba Adidas Aldo Amazon </p>
                <p className={styles.block_183}>
                  Android Market Angry Birds Babies "R" Us Barclays{' '}
                </p>
                <p className={styles.block_182}>
                  BBC One Black &amp; Decker Black Ops 2 BlackBerry{' '}
                </p>
                <p className={styles.block_183}>
                  Blink-182 Burger King Casio Chanel{' '}
                </p>
                <p className={styles.block_182}>
                  Chrome Citroën Claire's Coca-Cola{' '}
                </p>
                <p className={styles.block_183}>
                  CrossFit DirecTV Domino's Dragon Quest IX{' '}
                </p>
                <p className={styles.block_182}>
                  Droid Razr e-cigarette Earthlink easyJet{' '}
                </p>
                <p className={styles.block_183}>
                  eBay eHarmony EVA Siri for Android Evernote{' '}
                </p>
                <p className={styles.block_182}>
                  Facebook FIFA Flickr Formula 1{' '}
                </p>
                <p className={styles.block_183}>
                  Gmail Google Google Apps Google Calendar{' '}
                </p>
                <p className={styles.block_182}>
                  Google Earth Google Images Google mail Google Search{' '}
                </p>
                <p className={styles.block_184}>
                  Google Street View Google Toolbar GSMArena GSX-R/4{' '}
                </p>
                <p className={styles.block_182}>
                  GTA V Häagen-Dazs Haribo Hawk-Eye{' '}
                </p>
                <p className={styles.block_183}>
                  HobbyKing HomeShop18 Hotmail IKEA{' '}
                </p>
                <p className={styles.block_182}>iMac IMDb iOS iPad </p>
                <p className={styles.block_182}>
                  iPhone iPlayer iThemes ITV Player{' '}
                </p>
                <p className={styles.block_183}>
                  Je t Kellogg's Kit Kat Land Rover{' '}
                </p>
                <p className={styles.block_182}>
                  LazyTown LEGO LEGOLAND LinkedIn{' '}
                </p>
                <p className={styles.block_183}>
                  LOVEFILM Maroon 5 McDonald's Megabus{' '}
                </p>
                <p className={styles.block_182}>
                  Mickey D's Minecraft Mini Mk4{' '}
                </p>
                <p className={styles.block_183}>
                  NAPA Auto Parts Nesquick Net ix NeXT{' '}
                </p>
                <p className={styles.block_182}>
                  Nice 'n Easy Nike Odeon Oral-B{' '}
                </p>
                <p className={styles.block_183}>
                  Picasa PizzaExpress Plants vs. Zombies PlayStation 4{' '}
                </p>
                <p className={styles.block_182}>
                  PlayStation 1 Politico PornHub Porsche{' '}
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>पो</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऑिफस</span>
                  <span className={styles.text_3}>
                    {' '}
                    PowerPoint PS4 Ray-Ban{' '}
                  </span>
                </p>
                <p className={styles.block_182}>
                  RealPlayer Rolls-Royce Samsung Galaxy Samsung Galaxy S II{' '}
                </p>
                <p className={styles.block_183}>
                  Samsung Galaxy S III Samsung Galaxy S4 Samsung Galaxy S5
                  SimCity{' '}
                </p>
                <p className={styles.block_182}>
                  Siri Smart car Snow+Rock SpongeBob SquarePants{' '}
                </p>
                <p className={styles.block_183}>
                  Starbucks T-Mobile T.J. Maxx Texas hold 'em{' '}
                </p>
                <p className={styles.block_182}>
                  TobyGames PewDiePie TomTom Tour de France{' '}
                </p>
                <p className={styles.block_183}>
                  Toys "R" Us Travelodge Tumblr Twitter{' '}
                </p>
                <p className={styles.block_182}>
                  Virgin Media Visa WhatsApp WrestleMania XXX{' '}
                </p>
                <p className={styles.block_183}>
                  WWE '13 Xbox Xbox 360 Xbox One{' '}
                </p>
                <p className={styles.block_182}>Yahoo YouPorn YouTube Zagat </p>
                <p className={styles.block_183}>ZBox </p>
                <p className={styles.block_157}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.{' '}
                </p>
                <p className={styles.block_163}>Ok Google </p>
                <p className={styles.block_174}>Ok Google Now </p>
                <p className={styles.block_153}>
                  <span className={styles.text_3}>Ok Google, Barista </span>
                  <span className={styles.text_2}>कहा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>Ok Google, </span>
                  <span className={styles.text_2}>आल</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_174}>Okay. </p>
                <p className={styles.block_154}>
                  <span className={styles.text_3}>Okay, </span>
                  <span className={styles.text_2}>मोिहत।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_3}>Okay </span>
                  <span className={styles.text_2}>रमन</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>अब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चलना</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>चािहए।</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title </p>
                <p className={'text'}>
                  Refer to the Google Play Store for of cial spellings of media
                  titles. For lm/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.{' '}
                </p>
                <p className={styles.block_151}>
                  Write media titles as they are most commonly written. Movie
                  titles and English book titles should be written in
                  Devanagari.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>दाग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>फायर</span>
                  <span className={styles.text_3}> NOT: Daag: The Fire </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>गम</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ऑफ़</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ोस</span>
                  <span className={styles.text_3}> NOT: Game of Thrones </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>गोदान</span>
                  <span className={styles.text_3}> NOT: Godaan </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>हरी</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>पॉटर</span>
                  <span className={styles.text_3}> NOT: Harry Potter </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>राजनीित</span>
                  <span className={styles.text_3}> NOT: Raajneeti </span>
                </p>
                <p className={styles.block_150}>
                  Do not use quotation marks for media titles.{' '}
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_2}>िकक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदखाए।</span>
                  <span className={styles.text_3}> NOT: "</span>
                  <span className={styles.text_2}>िकक</span>
                  <span className={styles.text_3}>" </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िदखाए।</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>अज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कपर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>गड</span>
                  <span className={styles.text_3}>. NOT: </span>
                  <span className={styles.text_2}>अज</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कपर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> "</span>
                  <span className={styles.text_2}>गड</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_148}>Shaadi Ke Side E ects </p>
                <p className={styles.block_165}>
                  Transcribe all media titles with original punctuation. In
                  cases where original punctuation falls at the end of a
                  sentence, do not transcribe sentence-level punctuation. That
                  is, media title punctuation trumps sentence level punctuation
                  when in con ict. If a popular media title consists of an
                  entire sentence but the of cial spelling is without
                  punctuation, then don't punctuate the title. If an utterance
                  is ambiguous between a media title and a sentence or web
                  search, use your judgment for which is more likely and treat
                  it accordingly.{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>करार</span>
                  <span className={styles.text_3}> - </span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>डील</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>कब</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िनकली</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>थी</span>
                  <span className={styles.text_3}>? </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>पर</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>रवार</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>की</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>मनपसद</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>िफ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>दावत</span>
                  <span className={styles.text_3}>-</span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>-</span>
                  <span className={styles.text_2}>इ</span>
                  <span className={styles.text_3}> . </span>
                </p>
                <p className={styles.block_151}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.{' '}
                </p>
                <p className={styles.block_185}>Y Tu Mama Tambien </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings </p>
                <p className={styles.block_150}>
                  End words with speci c characters as listed below:{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>गए</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}>NOT</sub>
                    <sub className={styles.calibre4}>: </sub>
                  </span>
                  <span className={styles.text_2}>
                    <sub className={styles.calibre4}>गय</sub>
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}> </sub>"
                  </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>" instead of "</span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>जाइए</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>जाइय</span>
                  <span className={styles.text_3}>
                    {' '}
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ए</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>" instead of "</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>य</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>गई</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}>NOT</sub>
                    <sub className={styles.calibre4}>: </sub>
                  </span>
                  <span className={styles.text_2}>
                    <sub className={styles.calibre4}>गयी</sub>
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}> </sub>"
                  </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}>" instead of "</span>
                  <span className={styles.text_2}>यी</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_2}>छाई</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>छायी</span>
                  <span className={styles.text_3}>
                    {' '}
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ई</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>" instead of "</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>यी</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>गए</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}>NOT</sub>
                    <sub className={styles.calibre4}>: </sub>
                  </span>
                  <span className={styles.text_2}>
                    <sub className={styles.calibre4}>गय</sub>
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}> </sub>"
                  </span>
                  <span className={styles.text_2}>ए</span>
                  <span className={styles.text_3}>" instead of "</span>
                  <span className={styles.text_2}>य</span>
                  <span className={styles.text_3}> " </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>आए</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>आय</span>
                  <span className={styles.text_3}>
                    {' '}
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>ए</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}>" instead of "</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>य</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> " </sup>
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>गई</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}>NOT</sub>
                    <sub className={styles.calibre4}>: </sub>
                  </span>
                  <span className={styles.text_2}>
                    <sub className={styles.calibre4}>गयी</sub>
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}> </sub>"
                  </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}>" instead of "</span>
                  <span className={styles.text_2}>यी</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>बाई</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}>NOT</sub>
                    <sub className={styles.calibre4}>: </sub>
                  </span>
                  <span className={styles.text_2}>
                    <sub className={styles.calibre4}>बायी</sub>
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}> </sub>"
                  </span>
                  <span className={styles.text_2}>ई</span>
                  <span className={styles.text_3}>" instead of "</span>
                  <span className={styles.text_2}>यी</span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_3}>
                    Use anuswara, ◌, instead of half{' '}
                  </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}>
                    {' '}
                    when the next character is any of{' '}
                  </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}> series consonants </span>
                  <span className={styles.text_2}>प</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>फ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ब</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>भ</span>
                  <span className={styles.text_3}>. </span>
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>भकप</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>भक</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>चबल</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ल</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.text_2}>गभीर</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ीर</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_168}>
                  <span className={styles.text_3}>
                    Use anuswara, ◌, instead of half{' '}
                  </span>
                  <span className={styles.text_2}>न</span>
                  <span className={styles.text_3}> or half </span>
                  <span className={styles.text_2}>ण</span>
                  <span className={styles.text_3}>
                    {' '}
                    when the next character is{' '}
                  </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ष</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}>, or any of the </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ट</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}>
                    , series. The full set of these characters is{' '}
                  </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ष</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>क</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ख</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>घ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>च</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>छ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ज</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>झ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ट</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ठ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ड</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ढ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>त</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>थ</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>द</span>
                  <span className={styles.text_3}>, </span>
                  <span className={styles.text_2}>ध</span>
                  <span className={styles.text_3}>. </span>
                </p>
                <p className={styles.block_}>&nbsp;</p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>मच</span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}>NOT</sub>
                    <sub className={styles.calibre4}>: </sub>
                  </span>
                  <span className={styles.text_2}>
                    <sub className={styles.calibre4}>म</sub>
                  </span>
                  <span className={styles.text_3}>
                    <sub className={styles.calibre4}> </sub>
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>िहदी</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>िह</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ी</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>नीलकठ</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>नीलक</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>रघवश</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>रघव</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>श</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>
                    There is one exception to the above two rules. When the
                    previous character is ◌
                  </span>
                  <span className={styles.text_2}>ॉ</span>
                  <span className={styles.text_3}>
                    , do not use anuswara, ◌.{' '}
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>सॉ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>सॉग</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  https://speech.google.com/annotation/guidelines/hi_in_test_set/index.html
                  10/12{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>सॉ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_3}>
                    If you followed the above rules,{' '}
                  </span>
                  <span className={styles.text_2}>सॉ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}> will transform into </span>
                  <span className={styles.text_2}>सॉग</span>
                  <span className={styles.text_3}>
                    . While the character sequence in the latter is actually{' '}
                  </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}>, ◌</span>
                  <span className={styles.text_2}>ॉ</span>
                  <span className={styles.text_3}>, ◌, </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}>
                    , it looks like the sequence{' '}
                  </span>
                  <span className={styles.text_2}>स</span>
                  <span className={styles.text_3}>, ◌</span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}>, ◌, </span>
                  <span className={styles.text_2}>ग</span>
                  <span className={styles.text_3}>
                    , which has a di erent pronunciation.{' '}
                  </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>सॉ</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>र</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>सॉबर</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>English word "sombre" </p>
                <p className={styles.block_142}>
                  Always use anuswara ◌. Since chandrabindu ◌ and anuswara ◌ are
                  commonly interchanged, only use anuswara ◌.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>लगर</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>लगर</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>हसो</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>हसो</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>आस</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>आस</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>NOT: </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>लडिकया</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>लड़िकया</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>राए</span>
                  <span className={styles.text_3}> NOT: </span>
                  <span className={styles.text_2}>म</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>राए</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>अिभषक</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>अिभसक</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>रसग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_2}>रसोग</span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>ा</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_142}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the [skip] tag in PeraPera or select the appropriate reason
                  from the 'Cannot transcribe' menu in Crowd Compute.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>िमयाउ</span>
                  <span className={styles.text_3}> Person says "</span>
                  <span className={styles.text_2}>िमयाउ</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_142}>[skip] Person mimics a cat. </p>
                <p className={styles.block_142}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words, suf
                  xes, or pre xes, transcribe as is.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>हरािनया</span>
                  <span className={styles.text_3}> even if they meant "</span>
                  <span className={styles.text_2}>हरानी</span>
                  <span className={styles.text_3}>". </span>
                </p>
                <p className={styles.block_142}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, rst perform a
                  Google search for the word. If there is a clear candidate,
                  transcribe that word.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>रामगड</span>
                  <span className={styles.text_3}> User says "</span>
                  <span className={styles.text_2}>रामगड</span>
                  <span className={styles.text_3}>
                    ". This might sound like nonsense at rst, but the
                    transcriber guesses the spelling "
                  </span>
                  <span className={styles.text_2}>रामगढ़</span>
                  <span className={styles.text_3}>
                    " and is by corrected Google Search to "
                  </span>
                  <span className={styles.text_2}>रामगड</span>
                  <span className={styles.text_3}>
                    ", a place in India. Transcribe{' '}
                  </span>
                  <span className={styles.text_2}>रामगड</span>
                  <span className={styles.text_3}>. </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>भिड़या</span>
                  <span className={styles.text_3}> User says "</span>
                  <span className={styles.text_2}>भिड़या</span>
                  <span className={styles.text_3}>
                    ". Transcriber searches "
                  </span>
                  <span className={styles.text_2}>बिढ़या</span>
                  <span className={styles.text_3}>
                    ", nds correct results. Transcribe{' '}
                  </span>
                  <span className={styles.text_2}>भिड़या</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>रजनाल</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_142}>
                  If a word appears to be nonsense, a Google search returns no
                  clear results, and the word is unintelligible or there is no
                  single obvious spelling, mark as [skip] in PeraPera or select
                  the appropriate reason from the 'Cannot transcribe' menu in
                  Crowd Compute.{' '}
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_3}>[skip] </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>"</sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>क</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_2}>
                    <sup className={styles.calibre3}>रा</sup>
                  </span>
                  <span className={styles.text_3}>
                    <sup className={styles.calibre3}> </sup>
                  </span>
                  <span className={styles.text_4}>
                    <sup className={styles.calibre3}>" </sup>
                  </span>
                </p>
                <p className={styles.block_142}>
                  or similarly unintelligible word{' '}
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
