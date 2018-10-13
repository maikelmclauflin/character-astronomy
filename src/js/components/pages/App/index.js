import React, {
  Component,
  Fragment,
} from 'react'
import {
  Container,
} from 'reactstrap'
import Toggle from 'react-toggle'
import ContentEditable from 'react-sane-contenteditable'
import { Stream } from "react-streams"
import {
  of,
  pipe,
} from "rxjs"
import {
  delay,
  startWith,
  map,
} from "rxjs/operators"
import {
  scanPlans,
  plan,
  streamProps,
} from "react-streams"
import {
  Editable,
} from 'js/components/container'

import "react-toggle/style.css"

const onInc = plan(
  map(() => (state) => ({
    count: state.count + 2
  }))
)
const updateTextStream = plan(
  map((text) => (state) => ({
    ...state,
    text,
  }))
)
const toggleView = plan(
  map(() => (state) => ({
    ...state,
    editing: !state.editing,
  }))
)

const Editor = streamProps(
  scanPlans({
    updateText,
    toggleView,
  })
)

const updateText = (e) => updateTextStream(e.target.textContent)

export class App extends React.Component {
  render() {
    return (
      <Container fluid className="mt-3">
        <Editor
          editing={true}
          text="starter">
          {({
            editing,
            text,
            btnText,
            toggleView,
          }) => {
            return (
              <Fragment>
                <label>
                  <Toggle
                    defaultChecked={editing}
                    onChange={toggleView} /><span>Editing</span>
                </label>
                <Editable
                  editable={editing}
                  onChange={updateText}
                  text={text} />
              </Fragment>
            )
          }}
        </Editor>
      </Container>
    )
  }
}
