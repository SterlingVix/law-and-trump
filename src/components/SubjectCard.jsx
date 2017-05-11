import CitationList from './CitationList';
import LawList from './LawList';
import Markdown from 'react-remarkable';
import React, { PropTypes } from 'react';
import './SubjectCard.css';

class SubjectCard extends React.Component {
  returnText = string => string;

  render() {
    const {
      citationFlag, handleText, lawFlag, subjectCard, subjectFlag, showTags, tagFlag, tags,
    } = this.props;

    return (
      <div className="subjectCard">

        <div className="cardTitleContainer">
          <div className="cardTitle">
            <Markdown
              options={{ html: true, breaks: true, }}
              source={subjectFlag ? handleText(subjectCard.subject) : subjectCard.subject}
            />
          </div>

          {showTags ?
            (<div className="tags">
              <Markdown options={{ html: true, breaks: true, }} source={tagFlag ? handleText(tags) : tags} />
            </div>) :
            null}
        </div>

        <div className="listsContainer">
          <div className="citationColumn">
            <CitationList
              // filterText={filterText}
              handleText={citationFlag ? handleText : this.returnText}
              // citationFlag={citationFlag}
              citationList={subjectCard.citationList}
            />
          </div>

          <div className="lawColumn">
            <LawList
              // filterText={filterText}
              handleText={lawFlag ? handleText : this.returnText}
              // lawFlag={lawFlag}
              lawList={subjectCard.lawList}
            />
          </div>
        </div>

      </div>
    );
  }
}

SubjectCard.defaultProps = {
  citationFlag: false,
  lawFlag: false,
  subjectFlag: false,
  tagFlag: false,
  tags: '',
};

SubjectCard.propTypes = {
  citationFlag: PropTypes.bool,
  handleText: PropTypes.func.isRequired,
  lawFlag: PropTypes.bool,
  showTags: PropTypes.bool.isRequired,
  subjectCard: React.PropTypes.object,
  subjectFlag: PropTypes.bool,
  tagFlag: PropTypes.bool,
  tags: PropTypes.string,
};

export default SubjectCard;
