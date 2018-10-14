import React, {
  Component,
  Fragment,
} from 'react'
import {
  Container,
} from 'reactstrap'
import Toggle from 'react-toggle'
import ContentEditable from 'react-sane-contenteditable'
import {
  Stream,
} from "react-streams"
import {
  EditableText,
} from '@blueprintjs/core'
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
  connect,
} from 'react-redux'
import {
  fetchUser,
} from 'js/actions'
import "react-toggle/style.css"

const onInc = plan(
  map(() => (state) => ({
    count: state.count + 2
  }))
)
const updateText = plan(
  map((value) => (state) => ({
    ...state,
    value,
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

class Application extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Container fluid className="mt-3">
        <Editor
          editing={true}
          value="starter">
          {({
            editing,
            value,
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
                <EditableText
                  multiline={true}
                  minLines={3}
                  maxLines={12}
                  value={value}
                  onChange={updateText} />
              </Fragment>
            )
          }}
        </Editor>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
  image: state.user.avatar_url,
})

const mapDispatchToProps = {
  fetchUser,
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application)

export {
  ConnectedApp as App,
}
