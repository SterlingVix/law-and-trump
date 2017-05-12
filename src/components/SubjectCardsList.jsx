import React, { PropTypes, Component } from 'react';
import './SubjectCardsList.css';
import SubjectCard from './SubjectCard';

class SubjectCardsList extends Component {
  highlightText = string => string.replace(this.props.replacementRegexp, (group1, group2) =>
    !group2 ? `<span class="highlighted">${group1}</span>` : group2);

  getText = string => string;

  getTextHandler = sectionFlag => sectionFlag ?
    this.highlightText :
    this.getText;

  render() {
    const { cardsList, filterText, filterTextRegexp, showCommas, showTags, } = this.props;
    const joinCards = showCommas ?
      tags => tags.join(', ') :
      tags => tags.join('');

    return (
      <div className="cardsList">
        {cardsList.map((card, key) => {

          const commonProps = { card, key, showTags, tags: joinCards(card.tags), };

          // If we have filter text, show this card if it matches
          if (!filterText) {
            return <SubjectCard
              {...commonProps}
              handleCitationText={this.getText}
              handleLawText={this.getText}
              handleSubjectText={this.getText}
              handleTagText={this.getText}
            />;
          } else {
            const citFlag = filterTextRegexp.test(JSON.stringify(card.citationList));
            const lawFlag = filterTextRegexp.test(JSON.stringify(card.lawList));
            const subFlag = filterTextRegexp.test(card.subject);
            const tagFlag = filterTextRegexp.test(commonProps.tags);

            return (citFlag || lawFlag || subFlag || tagFlag) ?
              <SubjectCard
                handleText={this.highlightText}
                {...commonProps}
                handleCitationText={this.getTextHandler(citFlag)}
                handleLawText={this.getTextHandler(lawFlag)}
                handleSubjectText={this.getTextHandler(subFlag)}
                handleTagText={this.getTextHandler(tagFlag)}
              /> :
              null;
          }
        })}
      </div>
    );
  }
}

SubjectCardsList.defaultProps = {
  showCommas: false,
};

SubjectCardsList.propTypes = {
  cardsList: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  filterTextRegexp: PropTypes.any,
  replacementRegexp: PropTypes.any,
  showTags: PropTypes.bool.isRequired,
  showCommas: PropTypes.bool,
};

export default SubjectCardsList;
