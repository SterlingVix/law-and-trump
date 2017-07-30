import Markdown from 'react-remarkable';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Lists.css';

class CitationList extends Component {
  render() {
    const { citationList, handleText, opts } = this.props;
    const container = { container: 'div' };

    return (
      <div className="list">
        {citationList.map((citation, index) => (
          <div key={index} className="citation">
            <Markdown {...container} source={handleText(citation.title)} className="title" {...opts}/>
            <Markdown {...container} source={handleText(citation.description)} className="description" {...opts}/>
          </div>
        ))}
      </div>
    );
  }
}

CitationList.defaultProps = {};

CitationList.propTypes = {
  citationList: PropTypes.array,
  handleText: PropTypes.func.isRequired,
  opts: PropTypes.object.isRequired,
};

export default CitationList;
