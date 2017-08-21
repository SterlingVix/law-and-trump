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
            <div className="title">
              <Markdown source={handleText(law.title)} {...opts}/>
              {/*<Markdown {...opts}>*/}
              {/*<span>{handleText(law.title)}</span>*/}
              {/*</Markdown>*/}
            </div>
            <div className="description">
              <Markdown source={handleText(law.description)} {...opts}/>
              {/*<Markdown {...opts}>*/}
              {/*<span>{handleText(law.description)}</span>*/}
              {/*</Markdown>*/}
            </div>
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
