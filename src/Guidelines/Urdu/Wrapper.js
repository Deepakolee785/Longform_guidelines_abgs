import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/urdu/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/urdu/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/urdu/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/urdu/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/urdu/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/urdu/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/transcription_quality' },
        { label: 'Typo', path: '#typo' },
        { label: 'Context error', path: '#context-error' },
        { label: 'Add or missing word', path: '#adding-missing-words' },
        { label: 'Subsitution', path: '#substitution' },
        { label: 'Spacing', path: '#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '#commas' },
        { label: 'Innotation marks', path: '#intonation-marks' },
        { label: 'Colon and cotation', path: '#colon-and-quotation' },
        { label: 'Other symbols ', path: '#other-symbols' },
        { label: 'Spoken punctuation', path: '#spoken-punctuation' },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/format' },
        { label: 'Number', path: '#number' },
        { label: 'Date and time', path: '#currency-and-unit' },
        { label: 'Commas', path: '#date-and-time' },
        { label: 'Address', path: '#address' },
        { label: 'Web', path: '#web' },
        { label: 'Abbreviation', path: '#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/agreed_spelling' },
        { label: 'Spelling out ', path: '#spelling-out' },
        { label: 'Proper names', path: '#interjection' },
        { label: 'Brand and Product', path: '#brand-and-product' },
        { label: 'Media title ', path: '#media-title' },
        { label: 'Multiple spellings ', path: '#multiple-spelling' },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/difficult_utterances' },
        { label: 'Skipping a prompt', path: '#skipping-a-prompt' },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '#background-and-foreground-speech',
        },
        { label: 'Foreign Language', path: '#foreign-language' },
        {
          label: 'Accents ',
          path: '/urdu/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Urdu">
      {children}
    </MasterPage>
  )
}

export default Wrapper
