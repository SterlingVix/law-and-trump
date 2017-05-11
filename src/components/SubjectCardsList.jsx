import React, { PropTypes, Component } from 'react';
import './SubjectCardsList.css';
import SubjectCard from './SubjectCard';

class SubjectCardsList extends Component {
  highlightText = string => string.replace(this.props.replacementRegexp, (group1, group2) =>
      !group2 ? `<span class="highlighted">${group1}</span>` : group2);

  returnText = string => string;

  render() {
    const { cardsList, filterText, filterTextRegexp, showCommas, showTags, } = this.props;

    return (
      <div className="cardsList">
        {cardsList.map((card, index) => {
          const commonProps = {
            key: index, subjectCard: card, showTags, tags: card.tags.join(`${showCommas ? ',' : ''} `),
          };

          // If we have filter text, show this card if it matches
          if (filterText) {
            const citationFlag = filterTextRegexp.test(JSON.stringify(card.citationList));
            const lawFlag =      filterTextRegexp.test(JSON.stringify(card.lawList));
            const subjectFlag =  filterTextRegexp.test(card.subject);
            const tagFlag =      filterTextRegexp.test(commonProps.tags);

            if (citationFlag || lawFlag || subjectFlag || tagFlag) {
              return <SubjectCard
                {...commonProps}
                handleText={this.highlightText}
                citationFlag={citationFlag}
                lawFlag={lawFlag}
                subjectFlag={subjectFlag}
                tagFlag={tagFlag}
              />;
            }
          } else {
            return <SubjectCard
              {...commonProps}
              handleText={this.returnText}
            />;
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
