import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import CorrrectIncorrect from '../../../Components/common/CorrrectIncorrect'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'

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
            <PageContentHeader currentPage="Longform nl_nl_test_set" />
            <div className="content">
              <h1 className="large-heading">Transcription quality</h1>
              <p className="text">
                Comply with the standard rules of the writing system.
              </p>
              {/*  */}
              <div id="typo">
                <h2 className="heading">Typo</h2>
                <ul>
                  <li>
                    {' '}
                    A typo results in the unintentional creation of a non-word.{' '}
                  </li>
                  <li>
                    {' '}
                    Avoid making any typographical errors. Carefully check your
                    work before marking items as "complete".{' '}
                  </li>
                  <CorrrectIncorrect
                    correctText="Like ons op Facebook."
                    incorrectText="Like ons op Facebok."
                  />
                </ul>
              </div>
              {/*  */}
              <div id="context-error">
                <h2 className="heading">Context error</h2>
                <ul>
                  <li>
                    A context error occurs when a real word is used incorrectly
                    or when the incorrect form of a word is used. This includes
                    homophones and punctuation, among other things.
                    <CorrrectIncorrect
                      correctText="Hij heeft jouw boek gelezen."
                      incorrectText="Hij heeft jou boek gelezen."
                    />
                    <CorrrectIncorrect
                      correctText=" Mijn vrienden en ik gaan volgende week op vakantie."
                      incorrectText="Me vrienden en ik gaan volgende week op vakantie."
                    />
                  </li>
                  <li>
                    {' '}
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone disambiguation. Look up words if you
                    are unsure.{' '}
                    <CorrrectIncorrect
                      correctText="De koe staat in de wei."
                      incorrectText=" De koe staat in de wij."
                    />
                  </li>
                  <li>
                    {' '}
                    Do not correct speaker's grammar if they intentionally say
                    something, even if what they say does not follow the
                    standard grammatical rules of the transcription language.{' '}
                  </li>
                  <CorrrectIncorrect
                    correctText=" Wat zien ik!?"
                    incorrectText=" Wat zie ik!?"
                    audioText=' " wat zien ik "'
                  />
                </ul>
              </div>
              <div id="adding-missing-words">
                <h2 className="heading">Added or missing words</h2>
                <ul>
                  <li>
                    {' '}
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the speaker. Avoid putting words
                    in the speaker's mouth. However, do transcribe implied times
                    and units of currency.{' '}
                    <CorrrectIncorrect
                      correctText="  Hij woont op Leidseplein."
                      incorrectText=" Hij woont op het Leidseplein."
                      audioText=' " hij woont op leidseplein  "'
                      explainationText=' Do not add omitted "het".'
                    />
                    <CorrrectIncorrect
                      correctText="   €3,49 is veel te duur voor een drankje."
                      incorrectText=" 349 is veel te duur voor een drankje."
                      audioText=' " drie negen en veertig is veel te duur voor een drankje   "'
                      explainationText=' Implied currency, add "€" even though it is not spoken.'
                    />
                  </li>
                  <li>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For interjections and non-speech
                    vocalizations, refer to Agreed Spelling &gt; Interjections
                    and Difficult Utterances &gt; Hesitations and Truncations.
                    <CorrrectIncorrect
                      correctText="Hoeveel aardbeien aardappels heb je gekocht?"
                      incorrectText="Hoeveel aardappels heb je gekocht?"
                      audioText=' " hoeveel aardbeien aardappels heb je gekocht "'
                      explainationText='Speaker clearly corrected themselves after mistakenly saying "aardbeien". '
                    />
                    <CorrrectIncorrect
                      correctText="Hoeveel aardbeien aardappels heb je gekocht?"
                      incorrectText="Hoeveel aardappels heb je gekocht?"
                      audioText=' " hoeveel aardbeien aardappels heb je gekocht "'
                      explainationText='Speaker clearly corrected themselves after mistakenly saying "aardbeien". '
                    />
                  </li>
                </ul>
              </div>
              <div id="substitution">
                <h2 className="heading">Substitution</h2>
                <ul>
                  <li>
                    {' '}
                    A substitution error occurs when another standard word is
                    transcribed instead of what was meant by the speaker. If
                    what the speaker said falls into another category (Context
                    Error, Proper Name, Media Title, etc.), see the relevant
                    section.{' '}
                    <CorrrectIncorrect
                      correctText=" Hij zegt dat hij morgen niet komt."
                      incorrectText=" Zij zegt dat ze morgen niet komt."
                      audioText=' "  hij zegt dat hij morgen niet komt "'
                    />
                  </li>
                </ul>
              </div>
              <div id="spacing">
                <h2 className="heading">Spacing</h2>
                <ul>
                  <li>
                    {' '}
                    Use only one space between words and sentences.
                    <CorrrectIncorrect
                      correctText=" Wat is de hoogste heuvel in Nederland?"
                      incorrectText="Wat is de hoogste heuvel in _Nederland?"
                      audioText=' " Use exactly one space between words."'
                    />
                    <CorrrectIncorrect
                      correctText=" Ik denk dat dat wel zal lukken. Laten we het gewoon proberen."
                      incorrectText=" Ik denk dat dat wel zal lukken. _Laten we het gewoon proberen."
                      audioText=' "  Use exactly one space between words."'
                    />
                  </li>
                  <li>
                    For most types of punctuation, do not put a space between
                    the preceding word and the punctuation.
                    <CorrrectIncorrect
                      correctText=" Kom je ook naar het feestje?"
                      incorrectText=" Kom je ook naar het feestje ?"
                    />
                    <CorrrectIncorrect
                      correctText="  Prof.dr. Vincent Icke is vaak bij De Wereld Draait Door te zien."
                      incorrectText=" Prof . dr . Vincent Icke is vaak bij De Wereld Draait Door te zien."
                    />
                  </li>
                  <li>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.
                    <CorrrectIncorrect
                      correctText='  Romeo zei: "Ik hou van jou."'
                      incorrectText='Romeo zei: "Ik hou van jou. "'
                    />
                    <CorrrectIncorrect
                      correctText=' Vertaal "kersenbloesem" naar het Japans.'
                      incorrectText=' Vertaal "kersenbloesem"naar het Japans.'
                    />
                  </li>
                </ul>
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
