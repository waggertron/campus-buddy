import React, {Component} from 'react';

import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';

class OfferList extends Component {
  state = {
    content: [
      {
        compensation: 'None',
        contact: 'weylinwagnon@gmail.com',
        createdAt: '2019-05-15T01:11:15.622Z',
        description: 'I need help finding my classes',
        id: 2,

        reoccuring: true,
        reoccuringUnit: 'week',
        timeLength: 10,
        title: 'Test post',
        type: 'advocacy',
        updatedAt: '2019-05-15T01:11:15.622Z',
      },
    ],
    loading: false,
    filter: null,
  };
  async componentDidMount() {
    try {
      const response = await fetch('/posts');
      const posts = await response.json();
      this.setState({content: posts});
    } catch (e) {
      console.log(e);
    }
  }
  handleChange = e => {};
  render() {
    const listContent = this.state.content.map(post => {
      const {
        title,
        description,
        type,
        timeLength,
        compensation,
        reoccuring,
        reoccuringUnit,
        contact,
        id,
      } = post;
      return (
        <Card className="postCard" key={id}>
          <CardTitle>
            <h5>{title}</h5>
          </CardTitle>
          <CardText>
            <span className="fieldTitle">
              Description: <br />
            </span>
            <span className="fieldValue">{description}</span>
          </CardText>
          <CardText>
            <span className="fieldTitle">
              Help Category:
              <br />
            </span>
            <span className="fieldValue">{type}</span>
          </CardText>
          <CardText>
            <span className="fieldTitle">
              Time:
              <br />
            </span>
            <span className="fieldValue">
              {timeLength}
              {reoccuring ? ` hours per ${reoccuringUnit}` : 'hours'}
            </span>
          </CardText>
          <CardText>
            <span className="fieldTitle">
              Compensation:
              <br />
            </span>
            <span className="fieldValue">{compensation}</span>
          </CardText>
          <CardText>
            <span className="fieldTitle">
              Contact:
              <br />
            </span>
            <span className="fieldValue">{contact}</span>
          </CardText>
        </Card>
      );
    });
    return <div>{listContent}</div>;
  }
}

export default OfferList;
