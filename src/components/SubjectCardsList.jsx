import React, { PropTypes, Component } from 'react';
import './SubjectCardsList.css';
import SubjectCard from './SubjectCard';

class SubjectCardsList extends Component {
  static propTypes = {
    cardsList: PropTypes.array.isRequired,
    filterText: PropTypes.string.isRequired,
    filterTextRegexp: PropTypes.any,
    highlightTagsOnly: PropTypes.bool.isRequired,
    opts: PropTypes.object.isRequired,
    replacementRegexp: PropTypes.any,
    showCommas: PropTypes.bool,
    showTags: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    showCommas: false,
  };

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

          // If we have filter no text, show this card.
          if (!filterText) {
            return (
              <div className="subjectCardContainer">
                <SubjectCard
                  handleCitationText={this.getText}
                  handleLawText={this.getText}
                  handleSubjectText={this.getText}
                  handleTagText={this.getText}
                  opts={this.props.opts}
                  {...commonProps}
                />
              </div>);
          }

          /**
           * If we're here it means we are filtering cards.
           * Because of the iOS bug, we'll only highlight the tags.
           */
          else if (this.props.highlightTagsOnly) {
            /**
             * Only filter based on tags
             */
            const tagFlag = filterTextRegexp.test(commonProps.tags);

            return tagFlag ? (
              <div className="subjectCardContainer">
                <SubjectCard
                  handleCitationText={this.getText}
                  handleLawText={this.getText}
                  handleSubjectText={this.getText}
                  handleTagText={this.getTextHandler(tagFlag)}
                  handleText={this.highlightText}
                  opts={this.props.opts}
                  {...commonProps}
                />
              </div>) :
              null;
          } else {
            /**
             * TODO: This is not DRY! Fixme.
             */
            /**
             * Filter based on all card text.
             */
            const citFlag = filterTextRegexp.test(JSON.stringify(card.citationList));
            const lawFlag = filterTextRegexp.test(JSON.stringify(card.lawList));
            const subFlag = filterTextRegexp.test(card.subject);
            const tagFlag = filterTextRegexp.test(commonProps.tags);

            const shouldShow = (citFlag || lawFlag || subFlag || tagFlag);

            return shouldShow ? (
              <div className="subjectCardContainer">
                <SubjectCard
                  handleCitationText={this.getTextHandler(citFlag)}
                  handleLawText={this.getTextHandler(lawFlag)}
                  handleSubjectText={this.getTextHandler(subFlag)}
                  handleTagText={this.getTextHandler(tagFlag)}
                  handleText={this.highlightText}
                  opts={this.props.opts}
                  {...commonProps}
                />
              </div>) :
              null;
          }
        })}
      </div>
    );
  }
}

export default SubjectCardsList;
