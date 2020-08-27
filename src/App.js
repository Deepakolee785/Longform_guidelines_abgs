import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
// nl_nl_test_set
import {
  GuidingPrinciples,
  LongFormGenericRules,
  TranscriptionQuality,
  Punctuation,
  Format,
  AgreedSpelling,
  DifficultUtterances,
} from './nl_nl_test_set'

//uk_ua_test_set
import {
  GuidingPrinciplesUK_UA,
  LongFormGenericRulesUK_UA,
  TranscriptionQualityUK_UA,
  PunctuationUK_UA,
  AgreedSpellingUK_UA,
  DifficultUtterancesUK_UA,
  FormatUK_UA,
} from './uk_ua_test_set'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* temporary redirect */}
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/nl_nl_test_set/guiding_principles" />
          }}
        />
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

        {/* uk_ua_test_set routes */}
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
      </Switch>
    </Router>
  )
}

export default App
