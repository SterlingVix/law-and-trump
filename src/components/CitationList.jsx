import Markdown from 'react-remarkable';
import React, { PropTypes, Component } from 'react';
import './Lists.css';

class CitationList extends Component {
  render() {
    const { citationList, handleText } = this.props;

    return (
      <div className="list">
        {citationList.map((citation, index) => (
          <div key={index} className="citation">
            <Markdown
              source={handleText(citation.citationTitle)}
              className="title"
              options={{ html: true, breaks: true, }}
              // ref={(element) => handleText(element)}
            />
            <Markdown
              source={handleText(citation.description)}
              className="description"
              options={{ html: true, breaks: true, }}
              // ref={(element) => handleText(element)}
            />
            <Markdown
              source={handleText(citation.quote)}
              className="quote"
              options={{ html: true, breaks: true, }}
              // ref={(element) => handleText(element)}
            />
          </div>
        ) )}
      </div>
    );
  }
}

CitationList.defaultProps = {
  // citationFlag: false,
};

CitationList.propTypes = {
  // citationFlag: PropTypes.bool,
  citationList: PropTypes.array,
  // filterText: PropTypes.string,
  handleText: PropTypes.func.isRequired,
};

export default CitationList;
