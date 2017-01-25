const React = require('react');
const {PropTypes} = React;

class Tab extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.tabs(t => <TabItem>{t}</TabItem>)}
        </div>
        {this.props.tabs(t => <TabPane {...t}>{t.pane}</TabPane>)}
      </div>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(shape({
    name: PropTypes.string.isRequired,
    pane: PropTypes.any.isRequired,
  }))
};

module.exports = Tab;

