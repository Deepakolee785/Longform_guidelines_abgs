import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Toolbar } from '@material-ui/core'
import SidebarMenuItem from '../common/SidebarMenuItem'

const LeftSidebar = ({ isPermanent, open, handleSidebarOpen, menuItems }) => {
  const classes = useStyles()

  // const menuItems = [
  //   {
  //     label: 'Guiding Principle',
  //     path: '/nl_nl_test_set/guiding_principles',
  //   },
  //   {
  //     label: 'Long form generic rules',
  //     path: '',
  //     subMenus: [
  //       { label: 'Overview', path: '/nl_nl_test_set/longform_generic_rules' },
  //       {
  //         label: 'Unintelligible or foreign or singing',
  //         path:
  //           '/nl_nl_test_set/longform_generic_rules#unintelligible-or-foreign-or-singing',
  //       },
  //       {
  //         label: 'Segmentation',
  //         path: '/nl_nl_test_set/longform_generic_rules#segmentation',
  //       },
  //       {
  //         label: 'Speaker labelling',
  //         path: '/nl_nl_test_set/longform_generic_rules#speaker-labeling',
  //       },
  //       {
  //         label: 'Audio labels',
  //         path: '/nl_nl_test_set/longform_generic_rules#audio-labels',
  //       },
  //       { label: 'Pii', path: '/nl_nl_test_set/longform_generic_rules#pii' },
  //     ],
  //   },
  //   {
  //     label: 'Transcription Qualtiy',
  //     path: '',
  //     subMenus: [
  //       { label: 'Overview', path: '/nl_nl_test_set/transcription_quality' },
  //       { label: 'Typo', path: '#typo' },
  //       { label: 'Context error', path: '#context-error' },
  //       { label: 'Add or missing word', path: '#adding-missing-words' },
  //       { label: 'Subsitution', path: '#substitution' },
  //       { label: 'Spacing', path: '#spacing' },
  //     ],
  //   },
  //   {
  //     label: 'Punctuation',
  //     path: '',
  //     subMenus: [
  //       { label: 'Overview', path: '/nl_nl_test_set/punctuation' },
  //       {
  //         label: 'Fragment versus sentence',
  //         path: '#fragment-vrsus-sentences',
  //       },
  //       { label: 'Commas', path: '#commas' },
  //       { label: 'Innotation marks', path: '#intonation-marks' },
  //       { label: 'Colon and cotation', path: '#colon-and-quotation' },
  //       { label: 'Other symbols ', path: '#other-symbols' },
  //       { label: 'Spoken punctuation', path: '#spoken-punctuation' },
  //     ],
  //   },
  //   {
  //     label: 'Format',
  //     path: '',
  //     subMenus: [
  //       { label: 'Overview', path: '/nl_nl_test_set/format' },
  //       { label: 'Number', path: '#number' },
  //       { label: 'Date and time', path: '#currency-and-unit' },
  //       { label: 'Commas', path: '#date-and-time' },
  //       { label: 'Address', path: '#address' },
  //       { label: 'Web', path: '#web' },
  //       { label: 'Abbreviation', path: '#abbreviation' },
  //     ],
  //   },
  //   {
  //     label: 'Agreed Spelling',
  //     path: '',
  //     subMenus: [
  //       { label: 'Overview', path: '/nl_nl_test_set/agreed_spelling' },
  //       { label: 'Spelling out ', path: '#spelling-out' },
  //       { label: 'Proper names', path: '#interjection' },
  //       { label: 'Brand and Product', path: '#brand-and-product' },
  //       { label: 'Media title ', path: '#media-title' },
  //       { label: 'Multiple spellings ', path: '#multiple-spelling' },
  //     ],
  //   },
  //   {
  //     label: 'Diffiicult Utterances',
  //     path: '',
  //     subMenus: [
  //       { label: 'Overview', path: '/nl_nl_test_set/difficult_utterances' },
  //       { label: 'Skipping a prompt', path: '#skipping-a-prompt' },
  //       {
  //         label: 'Hesitations and trancations',
  //         path: '#hesitations-and-truncations',
  //       },
  //       {
  //         label: 'Background and foreground speech',
  //         path: '#background-and-foreground-speech',
  //       },
  //       { label: 'Foreign Language', path: '#foreign-language' },
  //       {
  //         label: 'Accents ',
  //         path: '/nl_nl_test_set/difficult_utterances#accents',
  //       },
  //     ],
  //   },
  // ]
  return (
    <Drawer
      anchor="left"
      className={classes.drawer}
      open={open}
      variant={isPermanent ? 'permanent' : 'temporary'}
      onClose={handleSidebarOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />

      <div className={classes.drawerContainer}>
        {menuItems.map((menuItem, index) => {
          const { label, subMenus, path } = menuItem
          return (
            <SidebarMenuItem
              key={index}
              label={label}
              path={path}
              subMenus={subMenus}
            />
          )
        })}
      </div>
    </Drawer>
  )
}

export default LeftSidebar

// styles

const drawerWidth = 270

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: '#fff',
    flexShrink: 0,
    fontSize: '0.82rem',
    color: 'rgba(0,0,0,0.8)',
    overflow: 'hidden',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  sidebarMenu: {
    paddingLeft: '2rem',
    transition: 'all .1s ease-in',
    borderRadius: '1rem',
    marginRight: '1rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ' #f5f5f5',
      color: '#000',
    },
  },
}))
