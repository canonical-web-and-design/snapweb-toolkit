import React from 'react';

const SectionItem = ({ baseUrl, section }) => (
  <li className="p-inline-list__item">
    <a href={`${baseUrl}/${section}`}>{section}</a>
  </li>
);

export default class StoreSections extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    sections: React.PropTypes.arrayOf(React.PropTypes.string),
    baseUrl: React.PropTypes.string
  };

  static defaultProps = {
    title: '',
    sections: [],
    baseUrl: '/store/section'
  };

  render() {
    if (this.props.sections.length == 0) {
      return null;
    }

    return (
      <div style={{ overflow: 'hidden' }}>
        <h2 className="col-4">{this.props.title}</h2>
        <ul className="p-inline-list u-float--right">
          {this.props.sections.map((section, index) => (
            <SectionItem
              key={index}
              baseUrl={this.props.baseUrl}
              section={section}
            />
          ))}
        </ul>
      </div>
    );
  }
}
