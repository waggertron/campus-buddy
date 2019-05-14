import React, {Component} from 'react';

class OfferList extends Component {
  constructor() {
    super();
  }
  state = {
    content: [
      {
        title: 'Help finding my classes',
        desciption: 'I need help finding my new classes for this semester',
        type: 'requesting',
        timeLength: '1',
        timeUnit: 'hr',
        reoccuring: 'week',
      },
    ],
    loading: false,
  };
  render() {
    const listContent = this.state.content.map(post => {
      console.log();
      const {
        title,
        description,
        type,
        timeLength,
        timeUnit,
        compensation,
        reoccuring,
        createdAt
      } = post;
      return (
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{type}</p>
          <p>
            {timeLength} {timeUnit}
            {reoccuring ? ` per ${reoccuring}` : null}
          </p>
          <p>{compensation}</p>
        </div>
      );
    });
    return <div>{listContent}</div>;
  }
}

export default OfferList;
