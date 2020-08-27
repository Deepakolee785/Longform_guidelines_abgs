import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../Components/common/PageContentHeader'
import RightContentNav from '../../Components/layouts/RightContentNav'
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
            <PageContentHeader />
            <div className="content">
              <h1
                id="unintelligible-or-foreign-or-singing"
                className={styles.block_12}
              >
                Longform generic rules
              </h1>
              <p className={styles.block_13}>
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.
              </p>
              <h2 id="calibre_link-7" className={styles.block_14}>
                Unintelligible or foreign or singing
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                If you hear speech that is unintelligible or in a foreign
                language, create a speaker segment that covers only the audio
                range with that speech. Select either the Unintelligible or
                Foreign Speech Label and assign to the appropriate speaker.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                If the entire audio is unintelligible or in a foreign language,
                create a speaker segment that covers the entire audio range and
                select either the Unintelligible or Foreign Speech Label.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                If you hear audio that is singing, transcribe the lyrics, assign
                to the appropriate speaker, and add the Singing label. If the
                singing is in a foreign language, select the Foreign Speech
                label.
              </p>
              <h2 id="segmentation" className={styles.block_14}>
                Segmentation
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                All speaker segment boundaries should be accurate with at least
                100ms precision.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Speaker turns should not contain pauses in speech that are
                longer than 0.5 seconds. If a speaker does pause their speech
                for longer than 0.5 seconds, end the speaker turn before the
                pause then create a new turn for when the speaker resumes
                talking.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Speaker turns should not be longer than 30 seconds. If a single
                speaker talks for more than 30 consecutive seconds without
                taking a 0.5 second pause, then end the turn at the 30 second
                mark and begin a new turn.
              </p>
              <h2 id="speaker-labeling" className={styles.block_14}>
                Speaker labeling
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                All speaker labels should be consistently formatted. Speaker
                labels should always: be in all lowercase, be spelled correctly,
                and should not contain underscores or hyphens. Only transcribe
                up to the 20th unique speaker.
              </p>
              <table className={`${styles.table_} blue-text`}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>Correct: speaker 1</p>
                      <p className={styles.block_16}>Incorrect: Speaker 1</p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>
                        Correct: pre recorded speaker 1
                      </p>
                      <p className={styles.block_16}>
                        Incorrect: pre-recorded speaker_1
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: unidentifiable speaker
                      </p>
                    </td>
                    <td className={styles.td_5}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.calibre1}>
                <div className={styles.block_18}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    'speaker #' Used for different speakers in the audio.
                    Includes a number that corresponds to each different
                    speaker.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    'pre recorded speaker #' Used when there is speech coming
                    from a machine. Includes a number that corresponds to each
                    different pre recorded speaker.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    'unidentifiable speaker' Used when you cannot identify who
                    the speaker is. Does not ever include numbers.
                  </span>
                </div>
                <div className={styles.block_20}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    'speaker Tom' Used when the name of a speaker becomes known.
                    The names of speakers should always be capitalized. You can
                    use first and last names. (Note: adding speaker names will
                    be allowed for some projects but not others. In tool
                    validators will indicate whether or not you can submit a
                    speaker name.)
                  </span>
                </div>
              </div>
              <h2 id="audio-labels" className={styles.block_14}>
                Audio labels
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                For instances with music and lyrics, create separate labels: one
                for Music and one for Singing. Transcribe the singing speech and
                assign to the appropriate speaker.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Below is a list of labels that may be available for you to
                choose from. Each contain a description of when is an
                appropriate time to use it.
              </p>
              <div className={styles.calibre1}>
                <div className={styles.block_18}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Applause: Use this label if you hear one or more people
                    clapping or cheering.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    DTMF: Stands for 'dual-tone multi-frequency.' This is the
                    sound you hear when a number is pressed during a phone call.
                    For example, 'Press one to speak to a representative' DTMF.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Foreign Speech: Use this label if the speaker is not talking
                    in the target language.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Laughter: Use this label when you hear laughter.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Music: Use this label when you hear music.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Noise: Use this label for instances of miscellaneous noise
                    events.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    PII: Use this label when you hear Personally Identifiable
                    Information (PII). For more information see the PII section
                    of this guideline.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Ring Tone: Use this label when you hear a ring-tone.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Singing: Use this label to indicate that the speaker is
                    singing their speech.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Unintelligible: Use this label to indicate that you cannot
                    understand what the speaker is saying.
                  </span>
                </div>
                <div className={styles.block_20}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    Unknown: Use this label for audio events that are not
                    classified to any of the above labels.
                  </span>
                </div>
              </div>
              <h2 id="pii" className={styles.block_14}>
                Pii
              </h2>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                PII stands for Personally Identifiable Information. PII is
                information that is not publicly available, but can help you or
                Google identify an individual person.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                PII should never be transcribed. When PII is heard, create a new
                speaker segment that captures the audio range of the PII speech.
                Add the PII label and assign to the appropriate speaker. Do not
                transcribe PII.
              </p>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                See the below list for all valid PII items
              </p>
              <div className={styles.calibre1}>
                <div className={styles.block_18}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    NAME: First and/or Last name
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>CREDIT_CARD_NUMBER</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>EMAIL</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>PHONE_NUMBER</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    SOCIAL_INSURANCE_NUMBER
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>DRIVER_LICENSE_NUMBER</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    NATIONAL_HEALTH_SERVICE_NUMBER
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    SOCIAL_SECURITY_NUMBER
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>PASSPORT</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                    identifier issued by the Australian Taxation Office (ATO) to
                    each taxpaying entity
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    LOCATION_STREET: If the street name is heard, mark as PII.
                    Other locations such as State, City, County, zip code are
                    all OK to transcribe.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    LOCATION_STREET_NUMBER: If the street number is heard, mark
                    as PII. Other locations such as State, City, County, zip
                    code are all OK to transcribe.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    MRN (medical record number)
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                    Securities Identification Procedures. A CUSIP number
                    identifies most financial instruments, including: stocks of
                    all registered U.S. and Canadian companies, commercial
                    paper, and U.S. government and municipal bonds.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    BC_PHN: Each B.C. resident enrolled with the Medical
                    Services Plan (MSP) is given a unique lifetime identifier
                    for health care called a Personal Health Number (PHN)
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    OHIP: Ontario Health Insurance Plan
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    QUEBEC_HIN: Quebec Health Insurance Number
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    CNI NIR: The French national identity card (French: Carte
                    nationale d'identite or CNI) is an official identity
                    document consisting of a laminated plastic card bearing a
                    photograph, name and address.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    IBAN_CODE: The International Bank Account Number (IBAN) is
                    an internationally agreed system of identifying bank
                    accounts
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    SWIFT_CODE: A SWIFT code is an international bank code that
                    identifies particular banks worldwide. It's also known as a
                    Bank Identifier Code (BIC).
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    BANK_ROUTING_MICR: The numbers located on the bottom of a
                    check is called a MICR line. MICR means Magnetic Image
                    Character Recognition. The MICR line is made up of three
                    sets of numbers. The first set is called the ABA Bank
                    Routing Number or routing transit number (RTN)
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    DEA_NUMBER: A DEA number (DEA Registration Number) is an
                    identifier assigned to a health care provider (such as a
                    physician, optometrist, dentist, or veterinarian) by the
                    United States Drug Enforcement Administration
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                    unique 10-digit identification number issued to health care
                    providers in the United States by the Centers for Medicare
                    and Medicaid Services (CMS).
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>MEDICARE_NUMBER</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    NIE_NUMBER: The NIE is a tax identification number in Spain
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or Natural
                    Persons Register) is a number assigned by the Brazilian
                    revenue agency to both Brazilians and resident aliens who
                    are subject to taxes in Brazil
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                    that acts as an identification for individuals, families and
                    corporates (Indian or Foreign), especially those who pay
                    Income Tax
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    BSN_NUMBER: netherlands: The citizen service number (BSN) is
                    a unique personal number allocated to everyone registered in
                    the Personal Records Database (BRP).
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    ICD_CODE: International Statistical Classification of
                    Diseases and Related Health Problems (ICD), a medical
                    classification list by the World Health Organization (WHO).
                    It contains codes for diseases, signs and symptoms, abnormal
                    findings, complaints, social circumstances, and external
                    causes of injury or diseases.
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    FDA_CODE: Prescription drug
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    NIF: Tax Identification Number in Spain
                    http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                  </span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>TAXPAYER_REFERENCE</span>
                </div>
                <div className={styles.block_19}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                    Registro de Poblacion (translated into English as Unique
                    Population Registry Code or else as Personal ID Code
                    Number). It is a unique identity code for both citizens and
                    residents of Mexico.
                  </span>
                </div>
                <div className={styles.block_20}>
                  <span className={styles.bullet_1}>●&nbsp;</span>
                  <span className={styles.calibre2}>
                    RRN: Receiver Registration Number (RNN) is a 10-character
                    alphanumeric can be to a bank account, a credit/debit card,
                    mobile wallet, or home delivery.
                  </span>
                </div>
              </div>
              <p className={styles.block_13}></p>
              <p className={styles.block_13}>
                Information that does not fit the above PII rules should NOT be
                considered PII. Some examples of things that are not PII are:
              </p>
              <p className={styles.block_21}></p>
              <table className={styles.table_}>
                <tbody className={styles.calibre5}>
                  <tr className={styles.tr_}>
                    <td className={styles.td_}>
                      <p className={styles.block_15}>
                        Correct: Commonly known names like Taylor Swift, Tom
                        Hanks, Michael Jordan
                      </p>
                    </td>
                    <td className={styles.td_1}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>
                        Correct: Company or Business name, phone number, or
                        address.
                      </p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_2}>
                      <p className={styles.block_15}>Correct: Pet names</p>
                    </td>
                    <td className={styles.td_3}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                  <tr className={styles.tr_1}>
                    <td className={styles.td_4}>
                      <p className={styles.block_15}>
                        Correct: Social media handles
                      </p>
                    </td>
                    <td className={styles.td_6}>
                      <p className={styles.block_17}></p>
                    </td>
                  </tr>
                </tbody>
              </table>
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
