import React from 'react'
import Button from 'react-toolbox/lib/button/Button'

class NoResults extends React.Component {
  render () {
    let props;
    props = this.props;

    return (
      <div className="no-results">
        <div className="no-results__message">
          { props.message }
        </div>
        <div className="no-results__tip">
          { props.tip }
        </div>
        <div className="no-results__action">
          <Button onClick={props.action} raised primary>
            { props.actionLabel }
          </Button>
        </div>
      </div>
    )
  }
}

export default NoResults;
