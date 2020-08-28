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
    'pii',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Nepali" />
            <div className="content">
              <p className={'large-heading'}>Longform generic rules</p>
              <p className={'text'}>
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>

                <p id="calibre_link-8" className={'text'}>
                  If you hear speech that is unintelligible or in a foreign
                  language, create a speaker segment that covers only the audio
                  range with that speech. Select either the Unintelligible or
                  Foreign Speech Label and assign to the appropriate speaker.
                </p>
                <p className={'text'}>
                  If the entire audio is unintelligible or in a foreign
                  language, create a speaker segment that covers the entire
                  audio range and select either the Unintelligible or Foreign
                  Speech Label.
                </p>
                <p className={'text'}>
                  If you hear audio that is singing, transcribe the lyrics,
                  assign to the appropriate speaker, and add the Singing label.
                  If the singing is in a foreign language, select the Foreign
                  Speech label.
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>

                <p className={'text'}>
                  All speaker segment boundaries should be accurate with at
                  least 100ms precision.
                </p>
                <p className={'text'}>
                  Speaker turns should not contain pauses in speech that are
                  longer than 0.5 seconds. If a speaker does pause their speech
                  for longer than 0.5 seconds, end the speaker turn before the
                  pause then create a new turn for when the speaker resumes
                  talking.
                </p>
                <p className={'text'}>
                  Speaker turns should not be longer than 30 seconds. If a
                  single speaker talks for more than 30 consecutive seconds
                  without taking a 0.5 second pause, then end the turn at the 30
                  second mark and begin a new turn.
                </p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>Speaker labeling</p>

                <p className={'text'}>
                  All speaker labels should be consistently formatted. Speaker
                  labels should always: be in all lowercase, be spelled
                  correctly, and should not contain underscores or hyphens. Only
                  transcribe up to the 20th unique speaker.
                </p>

                <p className={styles.block_69}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: speaker 1</span>
                </p>

                <p className={styles.block_71}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_}>: Speaker 1</span>
                </p>

                <p className={styles.block_69}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: pre recorded speaker 1</span>
                </p>

                <p className={styles.block_71}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_}>: pre-recorded speaker_1</span>
                </p>

                <p className={styles.block_69}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: unidentifiable speaker</span>
                </p>

                <div className={'text'}>
                  <div className={styles.block_73}>
                    &#x25cf;&nbsp;'speaker #' Used for different speakers in the
                    audio. Includes a number that corresponds to each different
                    speaker.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_74}>
                    &#x25cf;&nbsp;'pre recorded speaker #' Used when there is
                    speech coming from a machine. Includes a number that
                    corresponds to each different pre recorded speaker.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_75}>
                    &#x25cf;&nbsp;'unidentifiable speaker' Used when you cannot
                    identify who the speaker is. Does not ever include numbers.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_76}>
                    &#x25cf;&nbsp;'speaker Tom' Used when the name of a speaker
                    becomes known. The names of speakers should always be
                    capitalized. You can use first and last names. (Note: adding
                    speaker names will be allowed for some projects but not
                    others. In tool validators will indicate whether or not you
                    can submit a speaker name.)
                  </div>
                </div>
              </div>
              <div id="audio-labels">
                <p className={styles.block_2}>Audio labels</p>

                <p className={styles.block_79}>
                  For instances with music and lyrics, create separate labels:
                  one for Music and one for Singing.
                </p>

                <p className={styles.block_79}>
                  Transcribe the singing speech and assign to the appropriate
                  speaker.
                </p>
                <p className={styles.block_63}>&nbsp;</p>
                <p className={styles.block_80}>
                  Below is a list of labels that may be available for you to
                  choose from. Each contain a description of when is an
                  appropriate time to use it.
                </p>

                <div className={'text'}>
                  <div id="calibre_link-10" className={styles.block_81}>
                    &#x25cf;&nbsp;Applause: Use this label if you hear one or
                    more people clapping or cheering.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_82}>
                    &#x25cf;&nbsp;DTMF: Stands for 'dual-tone multi-frequency.'
                    This is the sound you hear when a number is pressed during a
                    phone call. For example, 'Press one to speak to a
                    representative' DTMF.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;Foreign Speech: Use this label if the speaker
                    is not talking in the target language.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;Laughter: Use this label when you hear
                    laughter.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;Music: Use this label when you hear music.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;Noise: Use this label for instances of
                    miscellaneous noise events.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_84}>
                    &#x25cf;&nbsp;PII: Use this label when you hear Personally
                    Identifiable Information (PII). For more information see the
                    PII section of this guideline.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;Ring Tone: Use this label when you hear a
                    ring-tone.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;Singing: Use this label to indicate that the
                    speaker is singing their speech.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_85}>
                    &#x25cf;&nbsp;Unintelligible: Use this label to indicate
                    that you cannot understand what the speaker is saying.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_86}>
                    &#x25cf;&nbsp;Unknown: Use this label for audio events that
                    are not classified to any of the above labels.
                  </div>
                </div>
              </div>
              <div id="pii">
                <p className={'heading'}>Pii</p>

                <p className={'text'}>
                  PII stands for Personally Identifiable Information. PII is
                  information that is not publicly available, but can help you
                  or Google identify an individual person.
                </p>
                <p className={'text'}>
                  PII should never be transcribed. When PII is heard, create a
                  new speaker segment that captures the audio range of the PII
                  speech. Add the PII label and assign to the appropriate
                  speaker. Do not transcribe PII.
                </p>
                <p className={'text'}>
                  See the below list for all valid PII items
                </p>

                <div className={'text'}>
                  <div id="calibre_link-11" className={styles.block_81}>
                    &#x25cf;&nbsp;NAME: First and/or Last name
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;CREDIT_CARD_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>&#x25cf;&nbsp;EMAIL</div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;PHONE_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;SOCIAL_INSURANCE_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;DRIVER_LICENSE_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;NATIONAL_HEALTH_SERVICE_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;SOCIAL_SECURITY_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>&#x25cf;&nbsp;PASSPORT</div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_90}>
                    &#x25cf;&nbsp;TAX_FILE_NUMBER: A tax file number (TFN) is a
                    unique identifier issued by the Australian Taxation Office
                    (ATO) to each taxpaying entity
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_91}>
                    &#x25cf;&nbsp;LOCATION_STREET: If the street name is heard,
                    mark as PII. Other locations such as State, City, County,
                    zip code are all OK to transcribe.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_92}>
                    &#x25cf;&nbsp;LOCATION_STREET_NUMBER: If the street number
                    is heard, mark as PII. Other locations such as State, City,
                    County, zip code are all OK to transcribe.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;MRN (medical record number)
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_93}>
                    &#x25cf;&nbsp;BANKERS_CUSIP_ID: CUSIP stands for Committee
                    on Uniform Securities Identification Procedures. A CUSIP
                    number identifies most financial instruments, including:
                    stocks of all registered U.S. and Canadian companies,
                    commercial paper, and U.S. government and municipal bonds.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_94}>
                    &#x25cf;&nbsp;BC_PHN: Each B.C. resident enrolled with the
                    Medical Services Plan (MSP) is given a unique lifetime
                    identifier for health care called a Personal Health Number
                    (PHN)
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;OHIP: Ontario Health Insurance Plan
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;QUEBEC_HIN: Quebec Health Insurance Number
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_76}>
                    &#x25cf;&nbsp;CNI NIR: The French national identity card
                    (French: Carte nationale d'identite or CNI) is an official
                    identity document consisting of a laminated plastic card
                    bearing a photograph, name and address.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_95}>
                    &#x25cf;&nbsp;IBAN_CODE: The International Bank Account
                    Number (IBAN) is an internationally agreed system of
                    identifying bank accounts
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_96}>
                    &#x25cf;&nbsp;SWIFT_CODE: A SWIFT code is an international
                    bank code that identifies particular banks worldwide. It's
                    also known as a Bank Identifier Code (BIC).
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_97}>
                    &#x25cf;&nbsp;BANK_ROUTING_MICR: The numbers located on the
                    bottom of a check is called a MICR line. MICR means Magnetic
                    Image Character Recognition. The MICR line is
                  </div>
                </div>

                <p id="calibre_link-12" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_98}>
                  made up of three sets of numbers. The first set is called the
                  ABA Bank Routing Number or routing transit number (RTN)
                </p>

                <div className={'text'}>
                  <div className={styles.block_99}>
                    &#x25cf;&nbsp;DEA_NUMBER: A DEA number (DEA Registration
                    Number) is an identifier assigned to a health care provider
                    (such as a physician, optometrist, dentist, or veterinarian)
                    by the United States Drug Enforcement Administration
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_100}>
                    &#x25cf;&nbsp;HEALTHCARE_NPI: A National Provider Identifier
                    or NPI is a unique 10-digit identification number issued to
                    health care providers in the United States by the Centers
                    for Medicare and Medicaid Services (CMS).
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;MEDICARE_NUMBER
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;NIE_NUMBER: The NIE is a tax identification
                    number in Spain
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_101}>
                    &#x25cf;&nbsp;CPF_NUMBER: The CPF (Cadastro de Pessoas
                    Fisicas or Natural Persons Register) is a number assigned by
                    the Brazilian revenue agency to both Brazilians and resident
                    aliens who are subject to taxes in Brazil
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_95}>
                    &#x25cf;&nbsp;PAN_INDIVIDUAL: Permanent Account Number (PAN)
                    is a code that acts as an identification for individuals,
                    families and corporates (Indian or Foreign), especially
                    those who pay Income Tax
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_102}>
                    &#x25cf;&nbsp;BSN_NUMBER: netherlands: The citizen service
                    number (BSN) is a unique personal number allocated to
                    everyone registered in the Personal Records Database (BRP).
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_100}>
                    &#x25cf;&nbsp;ICD_CODE: International Statistical
                    Classification of Diseases and Related Health Problems
                    (ICD), a medical classification list by the World Health
                    Organization (WHO). It contains codes for diseases, signs
                    and symptoms, abnormal findings, complaints, social
                    circumstances, and external causes of injury or diseases.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;FDA_CODE: Prescription drug
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_103}>
                    &#x25cf;&nbsp;NIF: Tax Identification Number in Spain
                    http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_83}>
                    &#x25cf;&nbsp;TAXPAYER_REFERENCE
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_104}>
                    &#x25cf;&nbsp;CURP_NUMBER: CURP is the abbreviation for
                    Clave Unica de Registro de Poblacion (translated into
                    English as Unique Population Registry Code or else as
                    Personal ID Code Number). It is a unique identity code for
                    both citizens and residents of Mexico.
                  </div>
                </div>

                <div className={'text'}>
                  <div className={styles.block_105}>
                    &#x25cf;&nbsp;RRN: Receiver Registration Number (RNN) is a
                    10-character alphanumeric can be to a bank account, a
                    credit/debit card, mobile wallet, or home delivery.
                  </div>
                </div>

                <p className={'text'}>
                  Information that does not fit the above PII rules should NOT
                  be considered PII. Some examples of things that are not PII
                  are:
                </p>

                <p id="calibre_link-13" className={styles.block_20}>
                  &nbsp;
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Commonly known names like Taylor Swift,
                  </span>
                </p>

                <p className={styles.block_107}>Tom Hanks, Michael Jordan</p>

                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>
                    : Company or Business name, phone
                  </span>
                </p>

                <p className={styles.block_107}>number, or address.</p>

                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Pet names</span>
                </p>

                <p className={styles.block_107}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_}>: Social media handles</span>
                </p>
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
