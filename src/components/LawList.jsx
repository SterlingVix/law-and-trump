import React, { PropTypes, Component } from 'react';
import Markdown from 'react-remarkable';
import './Lists.css';

class LawList extends Component {
  render() {
    const { lawList, handleText } = this.props;

    return (
      <div className="list">
        {lawList.map((law, index) => (
          <div key={index} className="law">
            <Markdown
              source={handleText(law.lawTitle)}
              className="title"
              options={{ html: true, breaks: true, }}
              // ref={(element) => highlightText(element)}
            />
            <Markdown
              source={handleText(law.lawReference)}
              className="reference"
              options={{ html: true, breaks: true, }}
              // ref={(element) => highlightText(element)}
            />
          </div>
        ) )}
      </div>
    );
  }
}

LawList.defaultProps = {
  // lawFlag: false,
};

LawList.propTypes = {
  // filterText: PropTypes.string,
  handleText: PropTypes.func.isRequired,
  // lawFlag: PropTypes.bool,
  lawList: PropTypes.array,
};

export default LawList;
