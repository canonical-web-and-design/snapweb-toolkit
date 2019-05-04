import React from 'react';

const SectionItem = ({ baseUrl, section, active }) => {
  var s = {
    marginRight: "20px",
    paddingBottom: "10px",
    borderWidth: "2px",
    borderBottomStyle: active ? "solid" : "none",
    borderBottomColor: "rgb(46, 137, 58)"
  };
  var linkStyle = {
    color: "rgb(46, 137, 58)",
    textDecoration: "none",
  };
  return (
    <span style={s}>
      <a role="button" href={`${baseUrl}/${section}`} className="Link" style={linkStyle}>
        {section}
      </a>
    </span>
  );
};

export default class StoreSections extends React.Component {
  static propTypes = {
    sections: React.PropTypes.arrayOf(React.PropTypes.string),
    activeSection: React.PropTypes.string,
    baseUrl: React.PropTypes.string
  };

  static defaultProps = {
    sections: [],
    baseUrl: '/store/section',
    activeSection: ''
  };

  render() {
    if (this.props.sections.length == 0) {
      return null;
    }
    return (
      <div style={{fontSize: "16px", marginTop: "23px", overflow: 'hidden' }}>
        {this.props.sections.map((section, index) => {
            var active = this.props.activeSection === section;
            return (
              <SectionItem
                key={index}
                baseUrl={this.props.baseUrl}
                active={active}
                section={section}
              />
            );
        })}
      </div>
    );
  }
}
