import Markdown from 'react-remarkable';
import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import SubjectCardsList from './SubjectCardsList';
import data from '../data.js';
import '../styles/colors.css';
import './CardsTable.css';

class CardsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      replacementRegexp: null,
      showCommas: data.config.showCommas,
      showPhoto: data.config.showPhoto,
      showTags: data.config.showTags,
      highlightTagsOnly: data.config.highlightTagsOnly,
    };

    this.diacritReplacements = [
      { original: `'`, replacement: `(’|')` },
      // { original: `"`, replacement: `("|“|”)` }, // currently unused
    ];
  }

  /**
   * Replace non-keyboard characters with typable chars.
   */
  getSanitizedSearchText = text =>
    text.replace(new RegExp(`${this.diacritReplacements[0].original}`), this.diacritReplacements[0].replacement);
        // .replace(new RegExp(`${this.diacritReplacements[1].original}`), this.diacritReplacements[1].replacement);

  getReplacementRegexp = (text) => {
    // Replace curly quotes with straight quotes.
    const sanitizedSearchText = this.getSanitizedSearchText(text);
    return sanitizedSearchText ?
      new RegExp(`(]\\(.*${sanitizedSearchText}.*?[)])|(${sanitizedSearchText})`, 'gi') :
      null;
  };

  updateFilter = (event) => {
    // console.debug('Should we pass an array of filtered text items, separating on spaces?');
    this.setState({
      filterText: event.target.value,

      filterTextRegexp: event.target.value ?
        new RegExp(this.getSanitizedSearchText(event.target.value), 'i') :
        new RegExp(event.target.value, 'i'),

      replacementRegexp: event.target.value.trim() ?
        this.getReplacementRegexp(event.target.value) :
        null,
    });
  };

  render() {
    return (
      <div className="cardsTable">
        <div className={`tableHeader textShadow ${this.state.showPhoto ? 'backgroundPhoto' : ''}`}>

          <div className="searchRow">
            <SearchComponent className="filterInput" filterCardsCallback={this.updateFilter}/>
          </div>

          <div className="tableTitleRow">

            <div className="leftColumn">
              <Markdown>
                <span className="tableTitleLeft">{data.config.tableTitleLeft}</span>
              </Markdown>
            </div>

            <div className="rightColumn">
              <Markdown>
                <span className="tableTitleRight">{data.config.tableTitleRight}</span>
              </Markdown>
            </div>

          </div>
        </div>

        <SubjectCardsList
          cardsList={data.cardsList}
          filterText={this.state.filterText}
          filterTextRegexp={this.state.filterTextRegexp}
          replacementRegexp={this.state.replacementRegexp}
          showTags={this.state.showTags}
          showCommas={this.state.showCommas}
          highlightTagsOnly={this.state.highlightTagsOnly}
        />
      </div>
    );
  }
}

export default CardsTable;
