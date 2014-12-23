const R = require('react-nexus');
const React = R.React;
const styles = require('../styles');
const data = require('../data');

const Vote = React.createClass({
  mixins: [R.Component.Mixin],

  onVote() {
    this.dispatch('uplink://vote', {
      talkID: this.props.talkID,
      quality: this.props.quality,
    });
  },

  render() {
    return (
      <button onClick={this.onVote}>
        {this.props.quality}
      </button>
    );
  }
});

const Root = React.createClass({
  mixins: [R.Root.Mixin],

  getFluxStoreSubscriptions() {
    return {
      'votes': 'uplink://votes',
    };
  },

  render() {
    return (
      <div className='Root'>
        {Object.keys(data.talks).map((talkID) => {
          return (
            this.state.votes[talkID] && <div>
              <Vote quality="bad" talkID={talkID} /> ({this.state.votes[talkID].bad}) /{' '}
              <Vote quality="neutral" talkID={talkID} /> ({this.state.votes[talkID].neutral}) /{' '}
              <Vote quality="good" talkID={talkID} /> ({this.state.votes[talkID].good}):{' '}
              {data.talks[talkID].title}
            </div>
          );
        })}
      </div>
    );
  },

  statics: {
    styles: {
      'html, body': {
        color: styles.colors.Text,
        fontFamily: styles.fonts.Roboto,
      },

      'a, a:hover, a:visited, a:active': {
        textDecoration: 'none',
      },

      'a': {
        color: styles.colors.Link,
      },

      'a:hover': {
        color: styles.colors.LinkHover,
      },

      'a:active': {
        color: styles.colors.LinkActive,
      },
    },
  },
});

module.exports = Root;
