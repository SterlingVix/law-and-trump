import CitationList from './CitationList';
import LawList from './LawList';
import Markdown from 'react-remarkable';
import React, { PropTypes } from 'react';
import './SubjectCard.css';

class SubjectCard extends React.Component {
  static propTypes = {
    card: PropTypes.object,
    handleCitationText: PropTypes.func.isRequired,
    handleLawText: PropTypes.func.isRequired,
    handleSubjectText: PropTypes.func.isRequired,
    handleTagText: PropTypes.func.isRequired,
    opts: PropTypes.object.isRequired,
    showTags: PropTypes.bool.isRequired,
    tags: PropTypes.string,
  };

  static defaultProps = {
    tags: '',
  };

  render() {
    const {
      handleCitationText, handleLawText, handleSubjectText, handleTagText, showTags, card, tags, opts,
    } = this.props;

    return (
      <div className="subjectCard">

        <div className="cardHeaderContainer">
          <div className="cardTitleContainer">
            <Markdown {...opts} source={handleSubjectText(card.subject)}/>
          </div>

          {showTags ?
            (<div className="tags">
              <Markdown {...opts} source={handleTagText(tags)}/>
            </div>) :
            null}
        </div>

        <div className="listsContainer">
          <div className="citationColumn">
            <CitationList opts={opts} handleText={handleCitationText} citationList={card.citationList}/>
          </div>

          <div className="lawColumn">
            <LawList opts={opts} handleText={handleLawText} lawList={card.lawList}/>
          </div>
        </div>

      </div>
    );
  }
}

export default SubjectCard;
