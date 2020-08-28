import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// nl_nl_test_set
import {
  GuidingPrinciples,
  LongFormGenericRules,
  TranscriptionQuality,
  Punctuation,
  Format,
  AgreedSpelling,
  DifficultUtterances,
} from './Guidelines/nl_nl_test_set'

//nepali
import {
  GuidingPrinciplesUK_UA,
  LongFormGenericRulesUK_UA,
  TranscriptionQualityUK_UA,
  PunctuationUK_UA,
  AgreedSpellingUK_UA,
  DifficultUtterancesUK_UA,
  FormatUK_UA,
} from './Guidelines/uk_ua_test_set'

// Nepali
import {
  AgreedSpellingNepali,
  DifficultUtterancesNepali,
  FormatNepali,
  GuidingPrinciplesNepali,
  LongFormGenericRulesNepali,
  PunctuationNepali,
  TranscriptionQualityNepali,
} from './Guidelines/nepali'

// Armenian
import {
  AgreedSpellingArmenian,
  DifficultUtterancesArmenian,
  FormatArmenian,
  GuidingPrinciplesArmenian,
  LongFormGenericRulesArmenian,
  PunctuationArmenian,
  TranscriptionQualityArmenian,
} from './Guidelines/Armenian'

import Home from './Home'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* temporary redirect */}
        {/* <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/nl_nl_test_set/guiding_principles" />
          }}
        /> */}
        <Route exact path="/" component={Home} />
        {/* nl_nl_test_set routes */}
        <Route
          path="/nl_nl_test_set/guiding_principles"
          component={GuidingPrinciples}
        />
        <Route
          path="/nl_nl_test_set/longform_generic_rules"
          component={LongFormGenericRules}
        />
        <Route
          path="/nl_nl_test_set/transcription_quality"
          component={TranscriptionQuality}
        />
        <Route path="/nl_nl_test_set/punctuation" component={Punctuation} />
        <Route path="/nl_nl_test_set/format" component={Format} />
        <Route
          path="/nl_nl_test_set/agreed_spelling"
          component={AgreedSpelling}
        />
        <Route
          path="/nl_nl_test_set/difficult_utterances"
          component={DifficultUtterances}
        />

        {/* uk_ul routes */}
        <Route
          path="/uk_ua_test_set/guiding_principles"
          component={GuidingPrinciplesUK_UA}
        />
        <Route
          path="/uk_ua_test_set/longform_generic_rules"
          component={LongFormGenericRulesUK_UA}
        />
        <Route
          path="/uk_ua_test_set/transcription_quality"
          component={TranscriptionQualityUK_UA}
        />
        <Route
          path="/uk_ua_test_set/punctuation"
          component={PunctuationUK_UA}
        />
        <Route
          path="/uk_ua_test_set/agreed_spelling"
          component={AgreedSpellingUK_UA}
        />
        <Route
          path="/uk_ua_test_set/difficult_utterances"
          component={DifficultUtterancesUK_UA}
        />
        <Route path="/uk_ua_test_set/format" component={FormatUK_UA} />

        {/* nepali routes */}
        <Route
          path="/nepali/guiding_principles"
          component={GuidingPrinciplesNepali}
        />
        <Route
          path="/nepali/longform_generic_rules"
          component={LongFormGenericRulesNepali}
        />
        <Route
          path="/nepali/transcription_quality"
          component={TranscriptionQualityNepali}
        />
        <Route path="/nepali/punctuation" component={PunctuationNepali} />
        <Route
          path="/nepali/agreed_spelling"
          component={AgreedSpellingNepali}
        />
        <Route
          path="/nepali/difficult_utterances"
          component={DifficultUtterancesNepali}
        />
        <Route path="/nepali/format" component={FormatNepali} />

        {/* Armenian routes */}

        <Route
          path="/armenian/guiding_principles"
          component={GuidingPrinciplesArmenian}
        />
        <Route
          path="/armenian/longform_generic_rules"
          component={LongFormGenericRulesArmenian}
        />
        <Route
          path="/armenian/transcription_quality"
          component={TranscriptionQualityArmenian}
        />
        <Route path="/armenian/punctuation" component={PunctuationArmenian} />
        <Route
          path="/armenian/agreed_spelling"
          component={AgreedSpellingArmenian}
        />
        <Route
          path="/armenian/difficult_utterances"
          component={DifficultUtterancesArmenian}
        />
        <Route path="/armenian/format" component={FormatArmenian} />
      </Switch>
    </Router>
  )
}

export default App
