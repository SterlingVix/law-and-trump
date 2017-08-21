import Markdown from 'react-remarkable';
import React, { PropTypes, Component } from 'react';
import './Lists.css';

class CitationList extends Component {
  render() {
    const { citationList, handleText, opts } = this.props;

    return (
      <div className="list">
        {citationList.map((citation, index) => (
          <div key={index} className="citation">
            <div className="title">
              <Markdown source={handleText(citation.title)} {...opts}/>
              {/*<Markdown {...opts}>*/}
                {/*<span>{handleText(citation.title)}</span>*/}
              {/*</Markdown>*/}
            </div>
            <div className="description">
              <Markdown source={handleText(citation.description)} {...opts}/>
              {/*<Markdown {...opts}>*/}
                {/*<span>{handleText(citation.description)}</span>*/}
              {/*</Markdown>*/}
            </div>
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
