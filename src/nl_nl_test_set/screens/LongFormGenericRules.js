import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden, Divider } from '@material-ui/core'
import PageContentHeader from '../../Components/common/PageContentHeader'
import RightContentNav from '../../Components/layouts/RightContentNav'
import CorrrectIncorrect from '../../Components/common/CorrrectIncorrect'
import Wrapper from '../Wrapper'

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
              <h1 className="large-heading">Longform generic rules</h1>
              <p className="text">
                {' '}
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.{' '}
              </p>
              {/*  */}
              <div id="unintelligible-or-foreign-or-singing">
                <h2 className="heading">
                  Unintelligible or foreign or singing
                </h2>
                <ul>
                  <li>
                    If you hear speech that is unintelligible or in a foreign
                    language, create a speaker segment that covers only the
                    audio range with that speech. Select either the
                    Unintelligible or Foreign Speech Label and assign to the
                    appropriate speaker.{' '}
                  </li>
                  <li>
                    If you hear speech that is unintelligible or in a foreign
                    language, create a speaker segment that covers only the
                    audio range with that speech. Select either the
                    Unintelligible or Foreign Speech Label and assign to the
                    appropriate speaker. link If the entire audio is
                    unintelligible or in a foreign language, create a speaker
                    segment that covers the entire audio range and select either
                    the Unintelligible or Foreign Speech Label.{' '}
                  </li>
                  <li>
                    If you hear audio that is singing, transcribe the lyrics,
                    assign to the appropriate speaker, and add the Singing
                    label. If the singing is in a foreign language, select the
                    Foreign Speech label.{' '}
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="segmentation">
                <h2 className="heading">Segmentation</h2>
                <ul>
                  <li>
                    All speaker segment boundaries should be accurate with at
                    least 100ms precision.
                  </li>
                  <li>
                    Speaker turns should not contain pauses in speech that are
                    longer than 0.5 seconds. If a speaker does pause their
                    speech for longer than 0.5 seconds, end the speaker turn
                    before the pause then create a new turn for when the speaker
                    resumes talking.
                  </li>
                  <li>
                    Speaker turns should not be longer than 30 seconds. If a
                    single speaker talks for more than 30 consecutive seconds
                    without taking a 0.5 second pause, then end the turn at the
                    30 second mark and begin a new turn.
                  </li>
                </ul>
              </div>
              {/*  */}
              <div id="speaker-labeling">
                <h2 className="heading">Speaker labeling</h2>
                <ul>
                  <li>
                    All speaker labels should be consistently formatted. Speaker
                    labels should always: be in all lowercase, be spelled
                    correctly, and should not contain underscores or hyphens.
                    Only transcribe up to the 20th unique speaker.{' '}
                  </li>
                  <br />
                  <Divider />
                  <div style={{ lineHeight: '0.3rem' }}>
                    <p className="blue-text">
                      <span className="capital">correct</span>:{' '}
                      <strong> speaker 1</strong>
                    </p>
                    <p className="gray-text">
                      <span className="capital">Incorrect</span>:{' '}
                      <strong> Speaker 1</strong>
                    </p>
                  </div>
                  <Divider />
                  <div style={{ lineHeight: '0.3rem' }}>
                    <p className="blue-text">
                      <span className="capital">correct</span>:{' '}
                      <strong> : pre recorded speaker 1</strong>
                    </p>
                    <p className="gray-text">
                      <span className="capital">Incorrect</span>:{' '}
                      <strong>pre-recorded speaker_1</strong>
                    </p>
                  </div>
                  <Divider />
                  <div style={{ lineHeight: '0.3rem' }}>
                    <p className="blue-text">
                      <span className="capital">correct</span>:{' '}
                      <strong> unidentifiable speaker </strong>
                    </p>
                  </div>
                  <Divider />
                  <br />
                  <ul className="blue-text">
                    <li className="text">
                      'speaker #' Used for different speakers in the audio.
                      Includes a number that corresponds to each different
                      speaker.{' '}
                    </li>
                    <li>
                      'pre recorded speaker #' Used when there is speech coming
                      from a machine. Includes a number that corresponds to each
                      different pre recorded speaker.{' '}
                    </li>
                    <li>
                      'unidentifiable speaker' Used when you cannot identify who
                      the speaker is. Does not ever include numbers.{' '}
                    </li>
                    <li>
                      'speaker Tom' Used when the name of a speaker becomes
                      known. The names of speakers should always be capitalized.
                      You can use first and last names. (Note: adding speaker
                      names will be allowed for some projects but not others. In
                      tool validators will indicate whether or not you can
                      submit a speaker name.){' '}
                    </li>
                  </ul>
                </ul>
              </div>
              {/*  */}
              <div id="audio-labels">
                <h2 className="heading">Audio labels</h2>
                <ul>
                  <li>
                    For instances with music and lyrics, create separate labels:
                    one for Music and one for Singing. Transcribe the singing
                    speech and assign to the appropriate speaker.{' '}
                  </li>
                  <li>
                    {' '}
                    Below is a list of labels that may be available for you to
                    choose from. Each contain a description of when is an
                    appropriate time to use it.{' '}
                    <ul className="blue-text">
                      <li>
                        Applause: Use this label if you hear one or more people
                        clapping or cheering.
                      </li>
                      <li>
                        {' '}
                        DTMF: Stands for 'dual-tone multi-frequency.' This is
                        the sound you hear when a number is pressed during a
                        phone call. For example, 'Press one to speak to a
                        representative' DTMF.{' '}
                      </li>
                      <li>
                        Foreign Speech: Use this label if the speaker is not
                        talking in the target language.
                      </li>
                      <li>Laughter: Use this label when you hear laughter.</li>
                      <li>Music: Use this label when you hear music.</li>
                      <li>
                        Noise: Use this label for instances of miscellaneous
                        noise events.
                      </li>
                      <li>
                        PII: Use this label when you hear Personally
                        Identifiable Information (PII). For more information see
                        the PII section of this guideline.
                      </li>
                      <li>
                        Ring Tone: Use this label when you hear a ring-tone.
                      </li>
                      <li>
                        Singing: Use this label to indicate that the speaker is
                        singing their speech.
                      </li>
                      <li>
                        Unintelligible: Use this label to indicate that you
                        cannot understand what the speaker is saying.
                      </li>
                      <li>
                        Unknown: Use this label for audio events that are not
                        classified to any of the above labels.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="pii">
                <h2 className="heading">Pii</h2>
                <ul>
                  <li>
                    PII stands for Personally Identifiable Information. PII is
                    information that is not publicly available, but can help you
                    or Google identify an individual person.
                  </li>
                  <li>
                    PII stands for Personally Identifiable Information. PII is
                    information that is not publicly available, but can help you
                    or Google identify an individual person.
                  </li>
                  <li>
                    PII should never be transcribed. When PII is heard, create a
                    new speaker segment that captures the audio range of the PII
                    speech. Add the PII label and assign to the appropriate
                    speaker. Do not transcribe PII.
                  </li>
                  <li>
                    If applicable, select the appropriate PII subcategory which
                    is nested underneath the parent 'PII' label. If the
                    appropriate PII subcategory is not available then select the
                    parent 'PII' label to cover all other cases. If there are no
                    PII subcategories available to choose from then use the
                    'PII' label for all cases of PII.
                  </li>
                  <li>
                    {' '}
                    See the below list for all valid PII items
                    <ul className="blue-text">
                      <li>NAME: First and/or Last name</li>
                      <li>CREDIT_CARD_NUMBER</li>
                      <li>EMAIL</li>
                      <li>PHONE_NUMBER</li>
                      <li>SOCIAL_INSURANCE_NUMBER</li>
                      <li>DRIVER_LICENSE_NUMBER</li>
                      <li>NATIONAL_HEALTH_SERVICE_NUMBER</li>
                      <li>SOCIAL_SECURITY_NUMBER</li>
                      <li>PASSPORT</li>
                      <li>
                        {' '}
                        TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                        identifier issued by the Australian Taxation Office
                        (ATO) to each taxpaying entity{' '}
                      </li>
                      <li>
                        {' '}
                        LOCATION_STREET: If the street name is heard, mark as
                        PII. Other locations such as State, City, County, zip
                        code are all oké to transcribe.{' '}
                      </li>
                      <li>
                        {' '}
                        LOCATION_STREET_NUMBER: If the street number is heard,
                        mark as PII. Other locations such as State, City,
                        County, zip code are all oké to transcribe.{' '}
                      </li>
                      <li>MRN (medical record number)</li>
                      <li>
                        {' '}
                        BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                        Securities Identification Procedures. A CUSIP number
                        identifies most financial instruments, including: stocks
                        of all registered U.S. and Canadian companies,
                        commercial paper, and U.S. government and municipal
                        bonds.{' '}
                      </li>
                      <li>
                        {' '}
                        BC_PHN: Each B.C. resident enrolled with the Medical
                        Services Plan (MSP) is given a unique lifetime
                        identifier for health care called a Personal Health
                        Number (PHN){' '}
                      </li>
                      <li>OHIP: Ontario Health Insurance Plan</li>
                      <li>QUEBEC_HIN: Quebec Health Insurance Number</li>
                      <li>
                        {' '}
                        CNI NIR: The French national identity card (French:
                        Carte nationale d'identite or CNI) is an official
                        identity document consisting of a laminated plastic card
                        bearing a photograph, name and address.{' '}
                      </li>
                      <li>
                        {' '}
                        IBAN_CODE: The International Bank Account Number (IBAN)
                        is an internationally agreed system of identifying bank
                        accounts{' '}
                      </li>
                      <li>
                        {' '}
                        SWIFT_CODE: A SWIFT code is an international bank code
                        that identifies particular banks worldwide. It's also
                        known as a Bank Identifier Code (BIC).{' '}
                      </li>
                      <li>
                        {' '}
                        BANK_ROUTING_MICR: The numbers located on the bottom of
                        a check is called a MICR line. MICR means Magnetic Image
                        Character Recognition. The MICR line is made up of three
                        sets of numbers. The first set is called the ABA Bank
                        Routing Number or routing transit number (RTN){' '}
                      </li>
                      <li>
                        {' '}
                        DEA_NUMBER: A DEA number (DEA Registration Number) is an
                        identifier assigned to a health care provider (such as a
                        physician, optometrist, dentist, or veterinarian) by the
                        United States Drug Enforcement Administration{' '}
                      </li>
                      <li>
                        {' '}
                        HEALTHCARE_NPI: A National Provider Identifier or NPI is
                        a unique 10-digit identification number issued to health
                        care providers in the United States by the Centers for
                        Medicare and Medicaid Services (CMS).{' '}
                      </li>
                      <li>MEDICARE_NUMBER</li>
                      <li>
                        NIE_NUMBER: The NIE is a tax identification number in
                        Spain
                      </li>
                      <li>
                        {' '}
                        CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or
                        Natural Persons Register) is a number assigned by the
                        Brazilian revenue agency to both Brazilians and resident
                        aliens who are subject to taxes in Brazil{' '}
                      </li>
                      <li>
                        {' '}
                        PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                        that acts as an identification for individuals, families
                        and corporates (Indian or Foreign), especially those who
                        pay Income Tax{' '}
                      </li>
                      <li>
                        {' '}
                        BSN_NUMBER: netherlands: The citizen service number
                        (BSN) is a unique personal number allocated to everyone
                        registered in the Personal Records Database (BRP).{' '}
                      </li>
                      <li>
                        {' '}
                        ICD_CODE: International Statistical Classification of
                        Diseases and Related Health Problems (ICD), a medical
                        classification list by the World Health Organization
                        (WHO). It contains codes for diseases, signs and
                        symptoms, abnormal findings, complaints, social
                        circumstances, and external causes of injury or
                        diseases.{' '}
                      </li>
                      <li>FDA_CODE: Prescription drug</li>
                      <li>
                        {' '}
                        NIF: Tax Identification Number in Spain
                        http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html{' '}
                      </li>
                      <li>TAXPAYER_REFERENCE</li>
                      <li>
                        {' '}
                        CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                        Registro de Poblacion (translated into English as Unique
                        Population Registry Code or else as Personal ID Code
                        Number). It is a unique identity code for both citizens
                        and residents of Mexico.{' '}
                      </li>
                      <li>
                        {' '}
                        RRN: Receiver Registration Number (RNN) is a
                        10-character alphanumeric can be to a bank account, a
                        credit/debit card, mobile wallet, or home delivery.{' '}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {' '}
                    Information that does not fit the above PII rules should NOT
                    be considered PII. Some examples of things that are not PII
                    are:{' '}
                  </li>
                  <CorrrectIncorrect correctText="Correct: Commonly known names like Taylor Swift, Tom Hanks, Michael Jordan" />
                  <CorrrectIncorrect correctText="Pet names" />
                  <CorrrectIncorrect correctText="Social media handles" />
                </ul>
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
