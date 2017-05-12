import Markdown from 'react-remarkable';
import React, { PropTypes, Component } from 'react';
import './Lists.css';

class LawList extends Component {
  render() {
    const { lawList, handleText, opts } = this.props;

    return (
      <div className="list">
        {lawList.map((law, index) => (
          <div key={index} className="law">
            <Markdown source={handleText(law.title)} className="title"{...opts}/>
            <Markdown source={handleText(law.description)} className="description"{...opts}/>
          </div>
        ))}
      </div>
    );
  }
}

LawList.defaultProps = {};

LawList.propTypes = {
  handleText: PropTypes.func.isRequired,
  lawList: PropTypes.array,
  opts: PropTypes.object.isRequired,
};

export default LawList;
